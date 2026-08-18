#!/usr/bin/env bash
set -euo pipefail

if [ "${2:-}" != "--confirm" ]; then
  echo "Usage: sudo $0 /var/backups/rooki-analytics/<backup>.sql.gz.enc --confirm"
  exit 1
fi

BASE="/opt/rooki-analytics"
BACKUP="$1"
KEY_FILE="/etc/rooki-analytics-backup.key"
test -r "$BACKUP"
test -r "$KEY_FILE"

cd "$BASE"
docker compose stop umami
trap 'docker compose start umami >/dev/null' EXIT
openssl enc -d -aes-256-cbc -pbkdf2 -pass "file:$KEY_FILE" -in "$BACKUP" \
  | gunzip \
  | docker compose exec -T db psql -v ON_ERROR_STOP=1 -U umami -d umami
echo "Analytics database restored from $BACKUP"
