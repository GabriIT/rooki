# ROOKI Front Page V4 Deployment

Date: 22 August 2026  
VPS: `154.12.245.254` (`contabo-night`)  
Status: deployed and verified

## Release

- Active release: `20260822173709`
- Previous release: `20260818203213`
- Source reference: `Rooki_21Aug26.html`
- Deployment method: local Vite build followed by the existing timestamped static deployment script

## Published Changes

- Updated hero for the 2026/27 regular season.
- Added V4 navigation and the `Mastercage` and `Costi` anchors.
- Published Mastercage results, local reel/video covers, and the approved Alberto Riva testimonial.
- Published the approved offer starting at `100€/month`, four plan durations, and WhatsApp contact.
- Updated roadmap, FAQ, English copy, newsletter copy, SEO description, and Open Graph description.
- Preserved the first-visit newsletter popup, newsletter API, privacy page, favicon, and first-party Umami tracker.

The standalone loader, embedded thumbnail, base64 data, inline handlers, and console-only newsletter implementation were not deployed.

## Validation

- `npm run build`: passed.
- TypeScript and Vite production build: passed.
- Desktop `1440x900`, tablet `768x900`, mobile `390x844`, and compact mobile `390x667`: passed.
- Horizontal overflow: none at the tested mobile viewports.
- Desktop/mobile breakpoint: desktop navigation from `1100px`; full-screen accessible menu below it.
- Mobile menu: seven links, WhatsApp CTA, scroll lock, ARIA state, link close, X close, and Escape close passed.
- Newsletter main form and popup: empty-email validation and mocked successful API submission passed.
- First-visit popup: opened after 5.5 seconds and remained below the mobile menu layer.
- FAQ, active navigation, reveal effects, counters, graph, and reduced-motion mode: passed.
- Four local reel covers and two local highlight covers: present and served successfully.
- Production website, `www`, privacy page, tracker, JS, CSS, and representative image asset: HTTPS `200`.
- Production newsletter honeypot request: `200`, with no notification email generated.
- Tracker with Do Not Track enabled: tracker loaded and zero collection POST requests were made.
- Local and deployed build hashes: identical.

## Service Safety

No newsletter backend, Umami, PostgreSQL, mailcow, Certbot, firewall, or Nginx site configuration was changed.

After deployment:

- Nginx: active; configuration test passed.
- Newsletter service: active on `127.0.0.1:18330`.
- Umami: healthy on `127.0.0.1:18340`.
- Analytics PostgreSQL container: healthy with no published host port.
- Protected analytics dashboard: unauthenticated response `401`.
- Analytics report, backup, and purge timers: active.

## Rollback

To restore the previous front page without changing any other application:

```bash
ssh contabo-night
sudo ln -sfn /var/www/rooki-intro/releases/20260818203213 /var/www/rooki-intro/current
sudo nginx -t
sudo systemctl reload nginx
```
