# ROOKI Intro Site

## Purpose

Static introduction website for ROOKI Stage 1.

## Current stage

Marketing / validation website only. No backend, no database, no login, and no upload system.

## Tech stack

- Vite
- React
- TypeScript
- Global CSS
- Static build served by Nginx
- SSL via Certbot / Let's Encrypt

Use Node.js 24 LTS locally for development and production builds.

## Local development

```bash
# 1. Clone or enter project
cd rooki-intro-site

# 2. Check Node version
node -v
npm -v

# 3. Install dependencies
npm install

# 4. Start local dev server
npm run dev

# 5. Build production files
npm run build

# 6. Preview production build
npm run preview
```

## Project structure

```text
src/components/   React sections for the page
src/content/      Centralized website copy and founder/contact data
src/styles/       Global visual system and responsive CSS
public/           Favicon and Open Graph image
deploy/           VPS audit, install, Nginx, deploy, and rollback scripts
```

## Content source

The clean website is rebuilt from the prototype `rooki_web_site.html`. The prototype is used only as content and design reference. Its bundled loader, embedded manifest, base64 assets, and runtime unpacking are not used in production.

## VPS deployment

Current production SSH target:

```bash
ssh contabo-night
```

This alias maps to `ubuntu@154.12.245.254` in the local SSH config.

For a fresh VPS setup, SSH into the VPS first:

```bash
ssh contabo-night

# Upload or clone project
git clone <YOUR_REPO_URL> rooki-intro-site
cd rooki-intro-site

chmod +x deploy/*.sh
```

Audit before installing or changing anything:

```bash
./deploy/audit-vps.sh | tee vps-audit-before-rooki.txt
```

Inspect `vps-audit-before-rooki.txt` before continuing. Check active ports, existing Nginx server names, Docker/Dokku/Apache usage, and whether `rooki.video` or `www.rooki.video` already appears in any config.

Install only missing prerequisites:

```bash
./deploy/install-vps-prereqs.sh
```

Configure Nginx:

```bash
sudo mkdir -p /var/www/rooki-intro/releases
sudo mkdir -p /var/www/rooki-intro/current

# Check no duplicate ROOKI domain config exists
if sudo nginx -T 2>/dev/null | grep -E "server_name .*rooki.video"; then
  echo "A config already references rooki.video. Inspect before continuing."
  exit 1
fi

# Backup existing target config if it exists, then inspect before replacing
if [ -e /etc/nginx/sites-available/rooki.video.conf ]; then
  sudo cp /etc/nginx/sites-available/rooki.video.conf "/etc/nginx/sites-available/rooki.video.conf.backup.$(date +%Y%m%d%H%M%S)"
  echo "Existing rooki.video.conf found and backed up. Inspect before continuing."
  exit 1
fi

sudo cp deploy/nginx.rooki.video.conf /etc/nginx/sites-available/rooki.video.conf
sudo ln -sfn /etc/nginx/sites-available/rooki.video.conf /etc/nginx/sites-enabled/rooki.video.conf

sudo nginx -t
sudo systemctl reload nginx
```

Deploy from the local machine:

```bash
npm run build
./deploy/deploy-static.sh contabo-night
```

Test HTTP:

```bash
curl -I http://rooki.video
curl -I http://www.rooki.video
```

## Production deployment status

ROOKI is currently deployed on the VPS as a static Nginx site:

```text
Domains: rooki.video, www.rooki.video
Remote base: /var/www/rooki-intro
Current symlink: /var/www/rooki-intro/current
Nginx config: /etc/nginx/sites-available/rooki.video.conf
Enabled config: /etc/nginx/sites-enabled/rooki.video.conf
SSL certificate: /etc/letsencrypt/live/rooki.video/fullchain.pem
```

Normal run state:

```bash
ssh contabo-night
sudo systemctl status nginx --no-pager
sudo nginx -t
curl -I https://rooki.video
curl -I https://www.rooki.video
```

Deploy an update:

```bash
cd /home/gabri/apps-2026/ROOKI_website/rooki-intro-site
npm install
npm run build
./deploy/deploy-static.sh contabo-night
curl -I https://rooki.video
curl -I https://www.rooki.video
```

Inspect deployed releases:

```bash
ssh contabo-night
ls -la /var/www/rooki-intro
ls -1 /var/www/rooki-intro/releases | sort
readlink -f /var/www/rooki-intro/current
```

Rollback to a previous release:

```bash
ssh contabo-night
ls -1 /var/www/rooki-intro/releases | sort
sudo ln -sfn /var/www/rooki-intro/releases/<release_id> /var/www/rooki-intro/current
sudo nginx -t && sudo systemctl reload nginx
```

Check SSL renewal:

```bash
ssh contabo-night
sudo certbot certificates
sudo certbot renew --dry-run
```

Check ROOKI logs:

```bash
ssh contabo-night
sudo tail -100 /var/log/nginx/rooki-intro.access.log
sudo tail -100 /var/log/nginx/rooki-intro.error.log
```

## Safety rules for existing VPS apps

- Run audit first.
- Inspect audit output before installation.
- Do not overwrite existing Nginx configs.
- Do not stop, disable, remove, or modify existing apps.
- Add only one isolated Nginx site config for ROOKI.
- Use `/var/www/rooki-intro`.
- Use timestamped releases.
- Use the `current` symlink.
- Run `nginx -t` before reload.
- Use `systemctl reload nginx`, not restart.
- Use `deploy/rollback.sh` if a release needs to be reverted.

## SSL setup

Only run Certbot after the HTTP site answers on port 80:

```bash
sudo certbot --nginx -d rooki.video -d www.rooki.video
```

Then test HTTPS:

```bash
curl -I https://rooki.video
curl -I https://www.rooki.video
```

## DNS verification

```bash
dig +short rooki.video A
dig +short www.rooki.video A
```

Both records should point to:

```text
154.12.245.254
```

## Troubleshooting

### Nginx config conflict

If audit or deploy finds `server_name rooki.video`, stop and inspect the existing config:

```bash
sudo nginx -T 2>/dev/null | grep -E "server_name .*rooki.video" -n
```

Do not overwrite existing configs until you know what owns the domain.

### Domain not pointing to VPS

Check DNS:

```bash
dig +short rooki.video A
dig +short www.rooki.video A
```

Wait for DNS propagation or update the DNS records to `154.12.245.254`.

### Certbot failure

Confirm HTTP works first:

```bash
curl -I http://rooki.video
curl -I http://www.rooki.video
sudo nginx -t
```

Certbot needs the site reachable on port 80 before it can issue and install certificates.

### 403 permission error

Fix ownership and test Nginx:

```bash
sudo chown -R www-data:www-data /var/www/rooki-intro
sudo nginx -t
sudo systemctl reload nginx
```

### 404 static files

Confirm the `current` symlink points to a release with `index.html`:

```bash
ls -la /var/www/rooki-intro
ls -la /var/www/rooki-intro/current
```

### Port 80 already used

Use audit output and:

```bash
sudo ss -tulpn
```

Do not stop existing services until you understand what they serve.

### Existing Dokku detected

Do not modify Dokku apps or global Dokku Nginx templates. Keep ROOKI isolated in its own Nginx site config only after confirming no domain conflict.
