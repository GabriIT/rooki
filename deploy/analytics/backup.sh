#!/usr/bin/env bash
set -euo pipefail

BASE="/opt/rooki-analytics"
BACKUP_DIR="/var/backups/rooki-analytics"
KEY_FILE="/etc/rooki-analytics-backup.key"
STAMP="$(date -u +%Y%m%dT%H%M%SZ)"
TARGET="$BACKUP_DIR/umami-$STAMP.sql.gz.enc"

install -d -m 700 "$BACKUP_DIR"
test -r "$KEY_FILE"

cd "$BASE"
docker compose exec -T db pg_dump -U umami --clean --if-exists umami \
  | gzip -9 \
  | openssl enc -aes-256-cbc -salt -pbkdf2 -pass "file:$KEY_FILE" -out "$TARGET"

chmod 600 "$TARGET"
find "$BACKUP_DIR" -type f -name 'umami-*.sql.gz.enc' -mtime +14 -delete
echo "$TARGET"
