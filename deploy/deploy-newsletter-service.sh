#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-}"
REMOTE_APP_DIR="/opt/rooki-newsletter"
SERVICE_NAME="rooki-newsletter.service"
ENV_FILE="/etc/rooki-newsletter.env"

if [ -z "$REMOTE" ]; then
  echo "Usage: ./deploy/deploy-newsletter-service.sh user@154.12.245.254"
  exit 1
fi

if [ ! -f "server/newsletter_server.py" ]; then
  echo "server/newsletter_server.py not found. Run this from the project root."
  exit 1
fi

echo "Installing newsletter backend files..."
ssh "$REMOTE" "sudo mkdir -p '$REMOTE_APP_DIR' && sudo chown \$USER:\$USER '$REMOTE_APP_DIR'"
rsync -avz server/newsletter_server.py "$REMOTE:$REMOTE_APP_DIR/newsletter_server.py"

echo "Installing systemd service and protected environment file if missing..."
ssh "$REMOTE" "
  set -euo pipefail

  sudo chown root:root '$REMOTE_APP_DIR/newsletter_server.py'
  sudo chmod 755 '$REMOTE_APP_DIR/newsletter_server.py'

  if [ ! -f '$ENV_FILE' ]; then
    sudo install -m 600 -o root -g root /dev/null '$ENV_FILE'
    sudo tee '$ENV_FILE' >/dev/null <<'EOF'
ROOKI_NEWSLETTER_HOST=127.0.0.1
ROOKI_NEWSLETTER_PORT=18330
SMTP_HOST=mail.rooki.video
SMTP_PORT=587
SMTP_USERNAME=newsletter@rooki.video
SMTP_PASSWORD=<set-newsletter-mailbox-password>
SMTP_FROM=newsletter@rooki.video
SMTP_TO=lorenzo.marciandi@rooki.video
EOF
    sudo chmod 600 '$ENV_FILE'
    echo 'Created $ENV_FILE. Replace SMTP_PASSWORD before testing live signup emails.'
  else
    echo '$ENV_FILE already exists; leaving it untouched.'
  fi

  sudo tee /etc/systemd/system/$SERVICE_NAME >/dev/null <<'EOF'
[Unit]
Description=ROOKI newsletter signup endpoint
After=network-online.target
Wants=network-online.target

[Service]
Type=simple
User=www-data
Group=www-data
EnvironmentFile=/etc/rooki-newsletter.env
ExecStart=/usr/bin/python3 /opt/rooki-newsletter/newsletter_server.py
Restart=on-failure
RestartSec=5
NoNewPrivileges=true
PrivateTmp=true
ProtectSystem=full
ProtectHome=true

[Install]
WantedBy=multi-user.target
EOF

  sudo systemctl daemon-reload
  sudo systemctl enable '$SERVICE_NAME'
  sudo systemctl restart '$SERVICE_NAME'
  sudo systemctl status '$SERVICE_NAME' --no-pager
"

echo "Newsletter backend deployment complete."
