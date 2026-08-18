# ROOKI Analytics Deployment Report

Date: 18 August 2026  
VPS: `154.12.245.254` (`contabo-night`)  
Status: deployed and operational

## Scope

An isolated Umami analytics service was added for `rooki.video` without changing the V3 page, newsletter popup, newsletter backend, mailcow configuration, host PostgreSQL, or other deployed applications.

The production website release is `20260818203213`.

## DNS And TLS

- `rooki.video`, `www.rooki.video`, and `stats.rooki.video` resolve to `154.12.245.254`.
- `https://stats.rooki.video` uses a dedicated Let's Encrypt ECDSA certificate.
- Certificate validity: 18 August 2026 through 16 November 2026.
- Unauthenticated dashboard requests return `401`.
- Authenticated dashboard and heartbeat requests return `200`.

## Installed Services

- Umami `3.2.0`, pinned by image digest.
- PostgreSQL `16-alpine`, pinned by image digest and dedicated to Umami.
- Docker Compose project: `/opt/rooki-analytics`.
- Docker volume: `rooki-analytics-db`.
- Umami listener: `127.0.0.1:18340` only.
- Analytics PostgreSQL has no published host port.
- Both analytics containers are healthy and use restart policies, health checks, CPU limits, and 1 GiB memory limits.

The host's existing PostgreSQL listener on port `5432` predates this deployment and was not modified. Umami does not use it.

## Collection Configuration

The main domain exposes only the first-party collection routes:

```text
GET  /r.js
POST /api/r
```

`GET /api/r` returns `403`. Umami administrative routes are not proxied through the main website. The tracker:

- runs only on `rooki.video` and `www.rooki.video`;
- respects Do Not Track;
- excludes query strings and section hashes;
- uses monthly salt rotation;
- has Umami telemetry disabled;
- records no custom events, form values, newsletter addresses, heatmaps, or session replays.

A real browser test produced a successful tracker request and database pageview. Both synthetic test sessions and events were removed after validation.

## Dashboard Security

- Dashboard URL: `https://stats.rooki.video`.
- Nginx Basic Auth protects dashboard pages and static assets.
- Umami API routes use Umami's separate token-based application login. This avoids browser Basic Auth failures on JavaScript requests while keeping analytics data protected.
- Public dashboard sharing is disabled through private mode.
- Credentials are stored only in `/root/rooki-analytics-credentials.txt` with mode `600`.
- Application and database secrets are in `/opt/rooki-analytics/.env` with mode `600`.
- Nginx password file is `/etc/nginx/.htpasswd-rooki-stats`, owned by `root:www-data` with mode `640`.

Retrieve credentials on the VPS with:

```bash
ssh contabo-night 'sudo cat /root/rooki-analytics-credentials.txt'
```

## Weekly Reports

`rooki-analytics-report.timer` runs every Monday at `08:00 Europe/Rome`, with up to five minutes of randomized systemd delay. Reports are sent through the existing ROOKI SMTP configuration from `newsletter@rooki.video` to:

- `lorenzo.marciandi@rooki.video`
- `admin@rooki.video`

The report includes comparisons with the preceding week, anonymous visitor estimates, visits, current-month returning visitor estimates, referrers, countries, and device categories. A live send completed successfully on 18 August 2026.

## Backup And Retention

- Encrypted PostgreSQL backup: daily.
- Backup retention: 14 days.
- Analytics retention: 13 months, purged monthly.
- Encryption key: `/etc/rooki-analytics-backup.key`, mode `600`.
- Backup directory: `/var/backups/rooki-analytics`.
- Initial encrypted backup was created and restored into a temporary verification database; all 19 schema tables were present.
- The initial retention purge completed successfully.

Enabled timers:

```text
rooki-analytics-report.timer
rooki-analytics-backup.timer
rooki-analytics-purge.timer
```

## Nginx Changes

- Added isolated site: `/etc/nginx/sites-available/stats.rooki.video.conf`.
- Added collection snippet: `/etc/nginx/snippets/rooki-analytics.conf`.
- Added one wildcard snippet include to the existing ROOKI site.
- Backup created at `/etc/nginx/sites-available/rooki.video.conf.backup.20260818T122555Z`.
- Dashboard proxy correction backup created at `/etc/nginx/sites-available/stats.rooki.video.conf.backup.20260818T125420Z`.
- Every Nginx change passed `nginx -t` before `systemctl reload nginx`.
- Nginx was not manually restarted.

During certificate issuance, a pre-existing Certbot deploy hook restarted the mailcow Nginx, Postfix, and Dovecot containers. This hook was not created or modified by this deployment. All affected containers recovered successfully and mailcow SMTP/IMAP listeners were verified active afterward.

## Validation Results

| Check | Result |
| --- | --- |
| Production build | Passed |
| Main site and privacy page | HTTPS `200` |
| First-party tracker | Browser `GET /r.js` and `POST /api/r` passed |
| Dashboard without Basic Auth | `401` |
| Dashboard with Basic Auth | `200` |
| Independent Umami login | Passed |
| Umami bind address | `127.0.0.1:18340` |
| Analytics database public listener | None |
| Encrypted backup and restore verification | Passed |
| 13-month purge | Passed |
| Weekly report service | Sent successfully |
| Newsletter backend | Active on `127.0.0.1:18330` |
| Nginx configuration | Passed |
| Existing Nginx, Docker, PostgreSQL, newsletter, and mailcow services | Active |

At the final audit the VPS had 72 GiB disk space available, 7.2 GiB memory available, and no swap in use. The analytics containers used approximately 303 MiB combined.

## Operations

Deployment, dashboard access, report execution, backups, verified restore, retention, update, pause-tracking, and rollback commands are documented in `README.md` under **Visitor analytics**.

The privacy notice is published at `https://rooki.video/privacy.html`. The decision to operate without a consent banner is based on the selected cookie-free, first-party aggregate configuration and still requires final review by the site owner or legal adviser.
