# ROOKI Front Page Deployment Report

Date: 2026-05-08

## Summary

Deployed the updated 8 May ROOKI front page to the existing static VPS setup.

## Target

- VPS SSH alias: `contabo-night`
- Public domains: `rooki.video`, `www.rooki.video`
- Static root symlink: `/var/www/rooki-intro/current`
- Active release: `/var/www/rooki-intro/releases/20260508061451`

## Safety Checks

- Ran local production build before deployment.
- Ran a fresh VPS audit before deployment.
- Existing services were inspected and left running.
- Deployment script checked for exact `rooki.video` / `www.rooki.video` Nginx ownership conflicts.
- Existing `mail.rooki.video` Nginx config was preserved.
- `nginx -t` passed before Nginx reload.
- Nginx was reloaded, not restarted.

## Validation

- `https://rooki.video` returned `200 OK`.
- `https://www.rooki.video` returned `200 OK`.
- `http://rooki.video` redirected to HTTPS.
- `http://www.rooki.video` redirected to HTTPS.
- Deployed JavaScript contains the expected 8 May content, including `Mastercage` and `Cos'è una pipeline AI?`.

## Raw Logs

- `vps-audit-before-frontpage-deploy-20260508061409.txt`
- `vps-deploy-frontpage-20260508061451.txt`
