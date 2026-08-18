#!/usr/bin/env bash
set -euo pipefail

BASE="/opt/rooki-analytics"
KEY_FILE="/etc/rooki-analytics-backup.key"
BACKUP="${1:-$(find /var/backups/rooki-analytics -type f -name 'umami-*.sql.gz.enc' | sort | tail -1)}"
TEST_DB="umami_restore_test"

test -n "$BACKUP"
test -r "$BACKUP"
cd "$BASE"

docker compose exec -T db dropdb -U umami --if-exists "$TEST_DB"
docker compose exec -T db createdb -U umami "$TEST_DB"
trap 'docker compose exec -T db dropdb -U umami --if-exists "$TEST_DB" >/dev/null' EXIT

openssl enc -d -aes-256-cbc -pbkdf2 -pass "file:$KEY_FILE" -in "$BACKUP" \
  | gunzip \
  | docker compose exec -T db psql -v ON_ERROR_STOP=1 -U umami -d "$TEST_DB" >/dev/null

TABLE_COUNT="$(docker compose exec -T db psql -U umami -d "$TEST_DB" -Atc "select count(*) from information_schema.tables where table_schema='public';")"
test "$TABLE_COUNT" -gt 0
echo "Backup restore verification passed: $TABLE_COUNT tables"
