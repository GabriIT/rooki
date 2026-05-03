#!/usr/bin/env bash
set -euo pipefail

echo "Installing only missing VPS prerequisites for ROOKI static site..."

sudo apt update

install_if_missing() {
  local pkg="$1"
  if dpkg -s "$pkg" >/dev/null 2>&1; then
    echo "$pkg already installed"
  else
    echo "Installing $pkg"
    sudo apt install -y "$pkg"
  fi
}

install_if_missing nginx
install_if_missing rsync
install_if_missing curl
install_if_missing git
install_if_missing dnsutils
install_if_missing snapd

if ! command -v certbot >/dev/null 2>&1; then
  echo "Installing certbot via snap"
  sudo snap install core || true
  sudo snap refresh core || true
  sudo snap install --classic certbot
  sudo ln -sf /snap/bin/certbot /usr/bin/certbot
else
  certbot --version
fi

sudo systemctl enable nginx
sudo systemctl status nginx --no-pager || true

echo "Prerequisites completed."
