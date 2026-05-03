#!/usr/bin/env bash
set -euo pipefail

BASE="/var/www/rooki-intro"
echo "Available releases:"
ls -1 "$BASE/releases" | sort

echo "Usage:"
echo "sudo ln -sfn $BASE/releases/<release_id> $BASE/current"
echo "sudo nginx -t && sudo systemctl reload nginx"
