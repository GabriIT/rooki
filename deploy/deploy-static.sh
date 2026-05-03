#!/usr/bin/env bash
set -euo pipefail

REMOTE="${1:-}"
REMOTE_BASE="/var/www/rooki-intro"
RELEASE="$(date +%Y%m%d%H%M%S)"

if [ -z "$REMOTE" ]; then
  echo "Usage: ./deploy/deploy-static.sh user@154.12.245.254"
  exit 1
fi

if [ ! -d "dist" ]; then
  echo "dist/ not found. Run npm run build first."
  exit 1
fi

echo "Checking for existing rooki.video Nginx server_name on remote..."
ssh "$REMOTE" '
  set -e
  if ! command -v nginx >/dev/null 2>&1; then
    exit 0
  fi

  conflicts="$(sudo nginx -T 2>/dev/null | awk "
    /^# configuration file / { file=\$4; sub(\":$\", \"\", file) }
    /server_name .*rooki\\.video/ && file !~ /^\\/etc\\/nginx\\/sites-(available|enabled)\\/rooki\\.video\\.conf$/ { print file \":\" \$0 }
  ")"

  if [ -n "$conflicts" ]; then
    echo "WARNING: rooki.video is already referenced outside the ROOKI Nginx config:"
    echo "$conflicts"
    exit 42
  fi
'

echo "Creating remote release directory..."
ssh "$REMOTE" "sudo mkdir -p $REMOTE_BASE/releases/$RELEASE && sudo chown -R \$USER:\$USER $REMOTE_BASE"

echo "Uploading dist..."
rsync -avz --delete dist/ "$REMOTE:$REMOTE_BASE/releases/$RELEASE/"

echo "Activating release..."
ssh "$REMOTE" "
  set -e
  if [ -d $REMOTE_BASE/current ] && [ ! -L $REMOTE_BASE/current ]; then
    if [ -z \"\$(find $REMOTE_BASE/current -mindepth 1 -maxdepth 1 -print -quit)\" ]; then
      sudo rmdir $REMOTE_BASE/current
    else
      echo '$REMOTE_BASE/current is a real directory and is not empty. Refusing to replace it.'
      exit 1
    fi
  fi
  sudo ln -sfn $REMOTE_BASE/releases/$RELEASE $REMOTE_BASE/current
  sudo chown -R www-data:www-data $REMOTE_BASE
  sudo nginx -t
  sudo systemctl reload nginx
"

echo "Deployment complete: $RELEASE"
