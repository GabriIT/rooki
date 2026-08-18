#!/usr/bin/env python3
import argparse
import json
import os
import smtplib
import ssl
import urllib.parse
import urllib.request
from datetime import datetime, time, timedelta, timezone
from email.message import EmailMessage
from pathlib import Path
from zoneinfo import ZoneInfo


def load_env(path):
    values = {}
    file_path = Path(path)
    if not file_path.exists():
        return values
    for raw_line in file_path.read_text(encoding="utf-8").splitlines():
        line = raw_line.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, value = line.split("=", 1)
        values[key.strip()] = value.strip().strip('"').strip("'")
    return values


CONFIG = {
    **load_env("/etc/rooki-newsletter.env"),
    **load_env("/etc/rooki-analytics-report.env"),
    **os.environ,
}


def api(path, method="GET", payload=None, token=None):
    base = CONFIG.get("UMAMI_BASE_URL", "http://127.0.0.1:18340")
    headers = {"Accept": "application/json"}
    body = None
    if payload is not None:
        headers["Content-Type"] = "application/json"
        body = json.dumps(payload).encode("utf-8")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    request = urllib.request.Request(f"{base}{path}", data=body, headers=headers, method=method)
    with urllib.request.urlopen(request, timeout=30) as response:
        data = response.read()
        return json.loads(data) if data else {}


def authenticate():
    result = api(
        "/api/auth/login",
        "POST",
        {"username": CONFIG["UMAMI_USERNAME"], "password": CONFIG["UMAMI_PASSWORD"]},
    )
    return result["token"]


def query(path, params, token):
    return api(f"{path}?{urllib.parse.urlencode(params)}", token=token)


def percentage(current, previous):
    if not previous:
        return "n/d" if not current else "+100%"
    change = ((current - previous) / previous) * 100
    return f"{change:+.1f}%"


def top_metrics(website_id, metric_type, start_ms, end_ms, token, limit=5):
    rows = query(
        f"/api/websites/{website_id}/metrics",
        {"startAt": start_ms, "endAt": end_ms, "type": metric_type, "limit": limit},
        token,
    )
    return [(row.get("x") or "Diretto / sconosciuto", row.get("y", 0)) for row in rows]


def retention_summary(website_id, now_rome, token):
    start = now_rome.replace(day=1, hour=0, minute=0, second=0, microsecond=0)
    next_month = (start.replace(day=28) + timedelta(days=4)).replace(day=1)
    payload = {
        "websiteId": website_id,
        "type": "retention",
        "filters": {},
        "parameters": {
            "startDate": start.astimezone(timezone.utc).isoformat().replace("+00:00", "Z"),
            "endDate": next_month.astimezone(timezone.utc).isoformat().replace("+00:00", "Z"),
            "timezone": "Europe/Rome",
        },
    }
    try:
        rows = api("/api/reports/retention", "POST", payload, token)
    except Exception:
        return "non ancora disponibile"
    returns = sum(int(row.get("returnVisitors", 0)) for row in rows if int(row.get("day", 0)) > 0)
    return f"{returns} ritorni osservati nelle coorti del mese"


def format_rows(rows):
    return "\n".join(f"  - {name}: {value}" for name, value in rows) or "  - Nessun dato"


def build_report():
    required = ["UMAMI_USERNAME", "UMAMI_PASSWORD", "UMAMI_WEBSITE_ID"]
    missing = [key for key in required if not CONFIG.get(key)]
    if missing:
        raise RuntimeError(f"Missing analytics configuration: {', '.join(missing)}")

    token = authenticate()
    website_id = CONFIG["UMAMI_WEBSITE_ID"]
    rome = ZoneInfo("Europe/Rome")
    now = datetime.now(rome)
    current_monday = datetime.combine((now - timedelta(days=now.weekday())).date(), time.min, rome)
    week_start = current_monday - timedelta(days=7)
    previous_start = week_start - timedelta(days=7)

    def millis(value):
        return int(value.timestamp() * 1000)

    current = query(
        f"/api/websites/{website_id}/stats",
        {"startAt": millis(week_start), "endAt": millis(current_monday)},
        token,
    )
    previous = query(
        f"/api/websites/{website_id}/stats",
        {"startAt": millis(previous_start), "endAt": millis(week_start)},
        token,
    )
    start_ms, end_ms = millis(week_start), millis(current_monday)
    referrers = top_metrics(website_id, "referrer", start_ms, end_ms, token)
    countries = top_metrics(website_id, "country", start_ms, end_ms, token)
    devices = top_metrics(website_id, "device", start_ms, end_ms, token)
    retention = retention_summary(website_id, now, token)

    subject = f"ROOKI statistiche sito · {week_start:%d/%m/%Y}–{(current_monday - timedelta(days=1)):%d/%m/%Y}"
    text = f"""Ciao,

ecco il riepilogo settimanale delle visite a rooki.video.

Periodo: {week_start:%d/%m/%Y} - {(current_monday - timedelta(days=1)):%d/%m/%Y}
Confronto: {previous_start:%d/%m/%Y} - {(week_start - timedelta(days=1)):%d/%m/%Y}

Visualizzazioni pagina: {current.get('pageviews', 0)} ({percentage(current.get('pageviews', 0), previous.get('pageviews', 0))})
Visitatori anonimi stimati: {current.get('visitors', 0)} ({percentage(current.get('visitors', 0), previous.get('visitors', 0))})
Visite/sessioni: {current.get('visits', 0)} ({percentage(current.get('visits', 0), previous.get('visits', 0))})
Ritorno visitatori nel mese corrente: {retention}

Principali provenienze:
{format_rows(referrers)}

Principali paesi:
{format_rows(countries)}

Dispositivi:
{format_rows(devices)}

Nota: visitatori unici e ritorni sono stime anonime basate su informazioni tecniche. L'identificatore cambia ogni mese e non identifica una persona.

Dashboard: https://stats.rooki.video
"""
    return subject, text


def send(subject, body):
    recipients = [item.strip() for item in CONFIG["REPORT_TO"].split(",") if item.strip()]
    message = EmailMessage()
    message["Subject"] = subject
    message["From"] = CONFIG.get("SMTP_FROM", CONFIG["SMTP_USERNAME"])
    message["To"] = ", ".join(recipients)
    message.set_content(body)

    host = CONFIG["SMTP_HOST"]
    port = int(CONFIG.get("SMTP_PORT", "587"))
    with smtplib.SMTP(host, port, timeout=30) as smtp:
        smtp.ehlo()
        smtp.starttls(context=ssl.create_default_context())
        smtp.ehlo()
        smtp.login(CONFIG["SMTP_USERNAME"], CONFIG["SMTP_PASSWORD"])
        smtp.send_message(message)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--send", action="store_true", help="Send the report by SMTP")
    args = parser.parse_args()
    subject, body = build_report()
    if args.send:
        send(subject, body)
        print("Weekly analytics report sent")
    else:
        print(subject)
        print(body)


if __name__ == "__main__":
    main()
