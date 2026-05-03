#!/usr/bin/env bash
set -euo pipefail

echo "=== OS ==="
lsb_release -a || cat /etc/os-release

echo "=== Kernel ==="
uname -a

echo "=== Current user ==="
whoami
id

echo "=== Disk ==="
df -h

echo "=== Memory ==="
free -h

echo "=== Listening ports ==="
sudo ss -tulpn

echo "=== Web servers ==="
command -v nginx && nginx -v || echo "nginx not installed"
command -v apache2 && apache2 -v || echo "apache2 not installed"

echo "=== Docker / Dokku ==="
command -v docker && docker --version || echo "docker not installed"
command -v docker && docker ps --format 'table {{.Names}}\t{{.Ports}}\t{{.Status}}' || true
command -v dokku && dokku version || echo "dokku not installed"

echo "=== Certbot ==="
command -v certbot && certbot --version || echo "certbot not installed"

echo "=== Existing Nginx server names ==="
if command -v nginx >/dev/null 2>&1; then
  sudo nginx -T 2>/dev/null | grep -E "server_name|root|proxy_pass" || true
fi

echo "=== DNS check ==="
dig +short rooki.video A || true
dig +short www.rooki.video A || true
