#!/usr/bin/env bash
set -euo pipefail

cd /opt/rooki-analytics
docker compose exec -T db psql -v ON_ERROR_STOP=1 -U umami -d umami <<'SQL'
DO $$
DECLARE
  target_table text;
BEGIN
  FOREACH target_table IN ARRAY ARRAY[
    'event_data', 'session_data', 'revenue', 'session_replay_data',
    'session_replay', 'heatmap_event', 'website_event', 'session'
  ] LOOP
    IF EXISTS (
      SELECT 1 FROM information_schema.columns
      WHERE table_schema = 'public' AND information_schema.columns.table_name = target_table
        AND column_name = 'created_at'
    ) THEN
      EXECUTE format('DELETE FROM %I WHERE created_at < now() - interval ''13 months''', target_table);
    END IF;
  END LOOP;
END $$;
SQL
echo "Analytics records older than 13 months purged"
