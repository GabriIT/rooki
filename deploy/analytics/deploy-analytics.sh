#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-}"
if [ -z "$REMOTE" ]; then
  echo "Usage: ./deploy/analytics/deploy-analytics.sh user@host-or-ssh-alias"
  exit 1
fi

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
REMOTE_STAGE="/tmp/rooki-analytics-deploy-$$"

echo "Auditing analytics conflicts..."
ssh "$REMOTE" '
  set -e
  if sudo ss -ltn | grep -qE ":18340[[:space:]]"; then
    echo "ERROR: port 18340 is already in use" >&2
    exit 1
  fi
  if sudo nginx -T 2>/dev/null | grep -qE "server_name[[:space:]]+stats\.rooki\.video"; then
    echo "ERROR: stats.rooki.video already exists in Nginx" >&2
    exit 1
  fi
  test "$(getent ahostsv4 stats.rooki.video | awk "NR==1 {print \$1}")" = "154.12.245.254"
  command -v docker >/dev/null
  docker compose version >/dev/null
  command -v certbot >/dev/null
  command -v openssl >/dev/null
  command -v python3 >/dev/null
  sudo test -r /etc/rooki-newsletter.env
'

ssh "$REMOTE" "mkdir -p '$REMOTE_STAGE'"
rsync -az "$ROOT_DIR/deploy/analytics/" "$REMOTE:$REMOTE_STAGE/"

ssh "$REMOTE" "REMOTE_STAGE='$REMOTE_STAGE' bash -s" <<'REMOTE_SCRIPT'
set -euo pipefail

APP_DIR="/opt/rooki-analytics"
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
POSTGRES_PASSWORD="$(openssl rand -hex 32)"
APP_SECRET="$(openssl rand -hex 32)"
ADMIN_PASSWORD="$(openssl rand -base64 30 | tr -d '\n' | tr '/+' '_-')"
BASIC_PASSWORD="$(openssl rand -base64 24 | tr -d '\n' | tr '/+' '_-')"

sudo install -d -m 700 "$APP_DIR" /var/backups/rooki-analytics
sudo install -m 600 "$REMOTE_STAGE/docker-compose.yml" "$APP_DIR/docker-compose.yml"
sudo install -m 700 "$REMOTE_STAGE/backup.sh" "$REMOTE_STAGE/verify-backup.sh" "$REMOTE_STAGE/restore.sh" "$REMOTE_STAGE/purge.sh" "$APP_DIR/"
sudo install -m 700 "$REMOTE_STAGE/bootstrap.py" "$REMOTE_STAGE/report.py" "$APP_DIR/"

sudo bash -c "cat > '$APP_DIR/.env'" <<EOF
POSTGRES_PASSWORD=$POSTGRES_PASSWORD
APP_SECRET=$APP_SECRET
EOF
sudo chmod 600 "$APP_DIR/.env"
sudo bash -c "openssl rand -hex 64 > /etc/rooki-analytics-backup.key"
sudo chmod 600 /etc/rooki-analytics-backup.key

sudo docker compose --project-directory "$APP_DIR" -f "$APP_DIR/docker-compose.yml" pull
sudo docker compose --project-directory "$APP_DIR" -f "$APP_DIR/docker-compose.yml" up -d

for _ in $(seq 1 36); do
  if curl -fsS http://127.0.0.1:18340/api/heartbeat >/dev/null; then break; fi
  sleep 5
done
curl -fsS http://127.0.0.1:18340/api/heartbeat >/dev/null

WEBSITE_ID="$(sudo python3 "$APP_DIR/bootstrap.py" --admin-password "$ADMIN_PASSWORD")"
test -n "$WEBSITE_ID"

sudo bash -c "cat > /etc/rooki-analytics-report.env" <<EOF
UMAMI_BASE_URL=http://127.0.0.1:18340
UMAMI_USERNAME=admin
UMAMI_PASSWORD=$ADMIN_PASSWORD
UMAMI_WEBSITE_ID=$WEBSITE_ID
REPORT_TO=lorenzo.marciandi@rooki.video,admin@rooki.video
EOF
sudo chmod 600 /etc/rooki-analytics-report.env

HASH="$(openssl passwd -apr1 "$BASIC_PASSWORD")"
printf 'rooki:%s\n' "$HASH" | sudo tee /etc/nginx/.htpasswd-rooki-stats >/dev/null
sudo chown root:www-data /etc/nginx/.htpasswd-rooki-stats
sudo chmod 640 /etc/nginx/.htpasswd-rooki-stats

sudo install -m 644 "$REMOTE_STAGE/rooki-analytics.nginx.conf" /etc/nginx/snippets/rooki-analytics.conf
sudo install -m 644 "$REMOTE_STAGE/rooki-stats-api.nginx.conf" /etc/nginx/snippets/rooki-stats-api.conf
sudo install -m 644 "$REMOTE_STAGE/nginx.stats.rooki.video.conf" /etc/nginx/sites-available/stats.rooki.video.conf
sudo ln -s /etc/nginx/sites-available/stats.rooki.video.conf /etc/nginx/sites-enabled/stats.rooki.video.conf

ROOKI_CONFIG="/etc/nginx/sites-available/rooki.video.conf"
sudo cp -a "$ROOKI_CONFIG" "$ROOKI_CONFIG.backup.$STAMP"
if ! sudo grep -q 'rooki-analytics\*\.conf' "$ROOKI_CONFIG"; then
  sudo sed -i '/error_log \/var\/log\/nginx\/rooki-intro.error.log;/a\    include /etc/nginx/snippets/rooki-analytics*.conf;' "$ROOKI_CONFIG"
fi

sudo nginx -t
sudo systemctl reload nginx
curl -sSI http://stats.rooki.video | grep -qE '^HTTP/.* 401'

sudo certbot --nginx -d stats.rooki.video --redirect --non-interactive --agree-tos
sudo nginx -t
sudo systemctl reload nginx

for unit in "$REMOTE_STAGE"/systemd/*; do
  sudo install -m 644 "$unit" "/etc/systemd/system/$(basename "$unit")"
done
sudo systemctl daemon-reload
sudo systemctl enable --now rooki-analytics-report.timer rooki-analytics-backup.timer rooki-analytics-purge.timer

sudo bash -c "cat > /root/rooki-analytics-credentials.txt" <<EOF
Dashboard: https://stats.rooki.video
Nginx Basic Auth user: rooki
Nginx Basic Auth password: $BASIC_PASSWORD
Umami user: admin
Umami password: $ADMIN_PASSWORD
Umami website ID: $WEBSITE_ID
Created: $STAMP
EOF
sudo chmod 600 /root/rooki-analytics-credentials.txt

sudo "$APP_DIR/backup.sh"
sudo "$APP_DIR/verify-backup.sh"
sudo "$APP_DIR/purge.sh"
sudo python3 "$APP_DIR/report.py" >/dev/null

printf 'WEBSITE_ID=%s\n' "$WEBSITE_ID"
REMOTE_SCRIPT
