#!/usr/bin/env python3
import argparse
import json
import urllib.error
import urllib.request


def request(base_url, path, method="GET", body=None, token=None):
    headers = {"Accept": "application/json"}
    data = None
    if body is not None:
        headers["Content-Type"] = "application/json"
        data = json.dumps(body).encode("utf-8")
    if token:
        headers["Authorization"] = f"Bearer {token}"
    req = urllib.request.Request(f"{base_url}{path}", data=data, headers=headers, method=method)
    with urllib.request.urlopen(req, timeout=20) as response:
        payload = response.read()
        return json.loads(payload) if payload else {}


def main():
    parser = argparse.ArgumentParser(description="Secure and initialize the ROOKI Umami instance")
    parser.add_argument("--base-url", default="http://127.0.0.1:18340")
    parser.add_argument("--admin-password", required=True)
    args = parser.parse_args()

    login = request(
        args.base_url,
        "/api/auth/login",
        "POST",
        {"username": "admin", "password": "umami"},
    )
    token = login["token"]
    user_id = login["user"]["id"]

    request(
        args.base_url,
        f"/api/users/{user_id}",
        "POST",
        {"username": "admin", "password": args.admin_password, "role": "admin"},
        token,
    )

    secured_login = request(
        args.base_url,
        "/api/auth/login",
        "POST",
        {"username": "admin", "password": args.admin_password},
    )
    token = secured_login["token"]
    websites = request(args.base_url, "/api/websites?pageSize=100", token=token).get("data", [])
    website = next((item for item in websites if item.get("domain") == "rooki.video"), None)
    if website is None:
        website = request(
            args.base_url,
            "/api/websites",
            "POST",
            {"name": "ROOKI Intro Site", "domain": "rooki.video"},
            token,
        )

    print(website["id"])


if __name__ == "__main__":
    main()
