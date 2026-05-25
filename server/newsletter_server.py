#!/usr/bin/env python3
import json
import os
import re
import smtplib
import sys
from datetime import datetime, timezone
from email.message import EmailMessage
from http import HTTPStatus
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
from urllib.parse import urlparse


EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")
MAX_BODY_BYTES = 4096


def env(name: str, default: str = "") -> str:
    return os.environ.get(name, default).strip()


def json_response(handler: BaseHTTPRequestHandler, status: HTTPStatus, payload: dict) -> None:
    data = json.dumps(payload).encode("utf-8")
    handler.send_response(status)
    handler.send_header("Content-Type", "application/json; charset=utf-8")
    handler.send_header("Cache-Control", "no-store")
    handler.send_header("Content-Length", str(len(data)))
    handler.end_headers()
    handler.wfile.write(data)


def build_message(email: str, source: str, host: str, remote_ip: str) -> EmailMessage:
    smtp_from = env("SMTP_FROM")
    smtp_to = env("SMTP_TO")
    timestamp = datetime.now(timezone.utc).isoformat()

    msg = EmailMessage()
    msg["Subject"] = "Nuova iscrizione aggiornamenti ROOKI"
    msg["From"] = smtp_from
    msg["To"] = smtp_to
    msg["Reply-To"] = email
    msg.set_content(
        "\n".join(
            [
                "Ciao Rooki,",
                "",
                "nuova richiesta di iscrizione agli aggiornamenti ROOKI.",
                "",
                f"Email: {email}",
                f"Source: {source or 'rooki-intro-site'}",
                f"Host: {host or 'unknown'}",
                f"Remote IP: {remote_ip or 'unknown'}",
                f"Timestamp UTC: {timestamp}",
                "",
                "Questa email è stata generata dal form newsletter su rooki.video.",
            ]
        )
    )
    return msg


def send_signup_email(email: str, source: str, host: str, remote_ip: str) -> None:
    smtp_host = env("SMTP_HOST", "mail.rooki.video")
    smtp_port = int(env("SMTP_PORT", "587"))
    smtp_username = env("SMTP_USERNAME")
    smtp_password = env("SMTP_PASSWORD")
    smtp_from = env("SMTP_FROM")
    smtp_to = env("SMTP_TO")

    missing = [
        name
        for name, value in {
            "SMTP_USERNAME": smtp_username,
            "SMTP_PASSWORD": smtp_password,
            "SMTP_FROM": smtp_from,
            "SMTP_TO": smtp_to,
        }.items()
        if not value or value.startswith("<")
    ]
    if missing:
        raise RuntimeError(f"Missing SMTP configuration: {', '.join(missing)}")

    msg = build_message(email, source, host, remote_ip)
    with smtplib.SMTP(smtp_host, smtp_port, timeout=20) as smtp:
        smtp.ehlo()
        smtp.starttls()
        smtp.ehlo()
        smtp.login(smtp_username, smtp_password)
        smtp.send_message(msg)


class NewsletterHandler(BaseHTTPRequestHandler):
    server_version = "RookiNewsletter/1.0"

    def log_message(self, fmt: str, *args: object) -> None:
        sys.stderr.write("%s - - [%s] %s\n" % (self.address_string(), self.log_date_time_string(), fmt % args))

    def do_GET(self) -> None:
        if urlparse(self.path).path == "/health":
            json_response(self, HTTPStatus.OK, {"ok": True})
            return
        json_response(self, HTTPStatus.NOT_FOUND, {"ok": False, "error": "not_found"})

    def do_POST(self) -> None:
        if urlparse(self.path).path != "/newsletter-signup":
            json_response(self, HTTPStatus.NOT_FOUND, {"ok": False, "error": "not_found"})
            return

        content_length = int(self.headers.get("Content-Length", "0") or "0")
        if content_length <= 0 or content_length > MAX_BODY_BYTES:
            json_response(self, HTTPStatus.BAD_REQUEST, {"ok": False, "error": "invalid_request"})
            return

        try:
            payload = json.loads(self.rfile.read(content_length).decode("utf-8"))
        except (UnicodeDecodeError, json.JSONDecodeError):
            json_response(self, HTTPStatus.BAD_REQUEST, {"ok": False, "error": "invalid_json"})
            return

        email = str(payload.get("email", "")).strip()
        source = str(payload.get("source", "rooki-intro-site")).strip()[:120]
        honeypot = str(payload.get("website", "")).strip()

        if honeypot:
            json_response(self, HTTPStatus.OK, {"ok": True})
            return

        if not EMAIL_RE.match(email):
            json_response(self, HTTPStatus.BAD_REQUEST, {"ok": False, "error": "invalid_email"})
            return

        try:
            host = self.headers.get("Host", "")
            remote_ip = self.headers.get("X-Real-IP", self.client_address[0])
            send_signup_email(email, source, host, remote_ip)
        except Exception as exc:
            print(f"newsletter send failed: {exc}", file=sys.stderr)
            json_response(self, HTTPStatus.INTERNAL_SERVER_ERROR, {"ok": False, "error": "send_failed"})
            return

        json_response(self, HTTPStatus.OK, {"ok": True})


def main() -> None:
    host = env("ROOKI_NEWSLETTER_HOST", "127.0.0.1")
    port = int(env("ROOKI_NEWSLETTER_PORT", "18330"))
    server = ThreadingHTTPServer((host, port), NewsletterHandler)
    print(f"Rooki newsletter service listening on http://{host}:{port}", flush=True)
    server.serve_forever()


if __name__ == "__main__":
    main()
