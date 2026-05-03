# ROOKI VPS Audit and Deployment Report

Date: 2026-05-03

## Summary

ROOKI Stage 1 static site was audited, configured, deployed, and SSL-enabled on the VPS at `154.12.245.254`.

Production URLs:

- `https://rooki.video` returns `200 OK`
- `https://www.rooki.video` returns `200 OK`
- `http://rooki.video` redirects to HTTPS
- `http://www.rooki.video` redirects to HTTPS

## VPS Status

- OS: Ubuntu 24.04.3 LTS
- Kernel: `6.8.0-110-generic`
- SSH user used: `ubuntu` via local alias `contabo-night`
- Disk: `/dev/sda1` 96G total, 64G used, 33G available, 67% used
- Memory: 11Gi total, about 10Gi available during audit
- Nginx: installed, `nginx/1.24.0 (Ubuntu)`, active
- Apache: not installed
- Docker: installed, `28.5.1`
- Dokku: not installed
- PostgreSQL: installed and listening on `5432`
- Tailscale: installed and listening on UDP `41641`
- Certbot: installed via snap, `5.5.0`

## Existing Apps Observed

Existing apps were left running and were not disabled, removed, or reconfigured.

Docker containers:

- `mymat2-ui`, `127.0.0.1:18201->80/tcp`, healthy
- `mymat2-api`, `127.0.0.1:18200->8000/tcp`, healthy
- `mymat-ui`, `127.0.0.1:18101->80/tcp`, healthy
- `mymat-api`, `127.0.0.1:18100->8000/tcp`, healthy
- `myrag-ui`, `127.0.0.1:18001->80/tcp`, healthy
- `myrag-api`, `127.0.0.1:18000->8000/tcp`, healthy
- `sentence-learning-game`, `127.0.0.1:8102->8000/tcp`
- `image-words-game`, `127.0.0.1:8101->8000/tcp`

Other listening app ports:

- `3000`: existing Next server
- `8103`: existing Next server
- `5432`: PostgreSQL

## Installed or Changed for ROOKI

Installed missing prerequisites:

- `dnsutils` via apt
- `certbot 5.5.0` via snap

Already present and reused:

- Nginx
- rsync
- curl
- git
- snapd

Firewall:

- UFW was active with port `80/tcp` already allowed.
- Added `443/tcp` allow rule with comment `ROOKI HTTPS`.
- No other firewall rules were removed or changed.

Nginx:

- Added isolated site config: `/etc/nginx/sites-available/rooki.video.conf`
- Enabled symlink: `/etc/nginx/sites-enabled/rooki.video.conf`
- Static root: `/var/www/rooki-intro/current`
- Access log: `/var/log/nginx/rooki-intro.access.log`
- Error log: `/var/log/nginx/rooki-intro.error.log`
- Used `nginx -t` before every reload.
- Used `systemctl reload nginx`, not restart.

Deployment:

- Remote base: `/var/www/rooki-intro`
- Release path: `/var/www/rooki-intro/releases/20260503085323`
- Current symlink: `/var/www/rooki-intro/current -> /var/www/rooki-intro/releases/20260503085323`

SSL:

- Certificate name: `rooki.video`
- Identifiers: `rooki.video`, `www.rooki.video`
- Certificate path: `/etc/letsencrypt/live/rooki.video/fullchain.pem`
- Private key path: `/etc/letsencrypt/live/rooki.video/privkey.pem`
- Expiry: 2026-07-31 23:56:37 UTC
- Certbot renewal task installed automatically.

## Backups Created

Nginx was backed up before config installation and before Certbot:

- `/etc/nginx/rooki-backups/nginx-before-rooki-20260503025310.tar.gz`
- `/etc/nginx/rooki-backups/nginx-before-rooki-certbot-20260503025451.tar.gz`

## Validation

Commands passed:

```bash
npm run build
sudo nginx -t
curl -I http://rooki.video
curl -I http://www.rooki.video
curl -I https://rooki.video
curl -I https://www.rooki.video
```

Observed final results:

- `https://rooki.video`: `HTTP/1.1 200 OK`
- `https://www.rooki.video`: `HTTP/1.1 200 OK`
- `http://rooki.video`: `HTTP/1.1 301 Moved Permanently`
- `http://www.rooki.video`: `HTTP/1.1 301 Moved Permanently`

## Raw Report Files

Raw command outputs are stored in this directory:

- `vps-audit-before-rooki-20260503085010.txt`
- `vps-preinstall-rooki-20260503085053.txt`
- `vps-install-prereqs-rooki-20260503085107.txt`
- `vps-nginx-config-rooki-20260503085308.txt`
- `vps-deploy-static-rooki-20260503085323.txt`
- `vps-fix-rooki-current-symlink-20260503085407.txt`
- `vps-certbot-rooki-20260503085450.txt`
- `vps-ufw-https-rooki-20260503085645.txt`
- `vps-audit-after-rooki-20260503085722.txt`

## Maintenance Commands

Deploy a new build:

```bash
npm run build
./deploy/deploy-static.sh contabo-night
```

Check current release:

```bash
ssh contabo-night 'readlink -f /var/www/rooki-intro/current'
```

Rollback:

```bash
ssh contabo-night
ls -1 /var/www/rooki-intro/releases | sort
sudo ln -sfn /var/www/rooki-intro/releases/<release_id> /var/www/rooki-intro/current
sudo nginx -t && sudo systemctl reload nginx
```

Check SSL:

```bash
ssh contabo-night
sudo certbot certificates
sudo certbot renew --dry-run
```

Check logs:

```bash
ssh contabo-night
sudo tail -100 /var/log/nginx/rooki-intro.access.log
sudo tail -100 /var/log/nginx/rooki-intro.error.log
```
