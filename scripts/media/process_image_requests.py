#!/usr/bin/env python3
"""Puts new chapter pictures in place of a book's own files in Firebase Storage.

Pictures drawn outside the panel (a whole book redrawn at once) are first put on the R2 bucket
under media-queue/, then listed in media/image_requests.json with their SHA-256 and the Storage
object they replace. The preview build runs this script with its own service account.

Like the panel's publish (deploy/panel/storage.mjs), a replaced file keeps its name and its old
notes, and gets a new download token in front of the old ones: the app asks Storage for the newest
address, so readers see the new picture at once, and old addresses keep working. A request whose
picture is already in place (same SHA-256 in the file's notes) is skipped, so the queue can stay.
"""
from __future__ import annotations

import hashlib
import json
import os
import subprocess
import sys
import uuid
from pathlib import Path
from typing import Any
from urllib import error, parse, request

BUCKET = os.environ.get("FIREBASE_STORAGE_BUCKET", "gen-lang-client-0373200489.firebasestorage.app")
REQUESTS_FILE = Path(os.environ.get("STORIES_IMAGE_REQUESTS_FILE", "media/image_requests.json"))
SOURCE_PREFIX = "https://pub-18750481345e4878b338a79a06de57df.r2.dev/media-queue/"
CONTENT_TYPES = {".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp"}
CLOSED_FOLDERS = {"tts-state", "panel-state", "panel-uploads"}


class MediaError(RuntimeError):
    pass


def log(message: str) -> None:
    print(f"[Stories Images] {message}", flush=True)


def get_access_token() -> str:
    result = subprocess.run(["gcloud", "auth", "print-access-token"], check=True, capture_output=True, text=True)
    token = result.stdout.strip()
    if not token:
        raise MediaError("Could not obtain a Google Cloud access token.")
    return token


def validate(item: dict[str, Any]) -> tuple[str, str, str, str]:
    source = str(item.get("source", ""))
    target = str(item.get("target", ""))
    sha = str(item.get("sha256", "")).lower()
    if not source.startswith(SOURCE_PREFIX) or ".." in source:
        raise MediaError(f"{target}: the picture must come from the R2 media-queue folder.")
    parts = target.split("/")
    if not target or target.startswith("/") or ".." in parts or len(parts) < 2 or parts[0] in CLOSED_FOLDERS:
        raise MediaError(f"{target}: not a valid book picture path.")
    content_type = CONTENT_TYPES.get(Path(target).suffix.lower())
    if not content_type:
        raise MediaError(f"{target}: only PNG, JPG or WebP pictures can be replaced.")
    if len(sha) != 64 or any(c not in "0123456789abcdef" for c in sha):
        raise MediaError(f"{target}: sha256 is missing or malformed.")
    return source, target, sha, content_type


def object_url(path: str) -> str:
    return f"https://storage.googleapis.com/storage/v1/b/{parse.quote(BUCKET, safe='')}/o/{parse.quote(path, safe='')}"


def get_metadata(token: str, path: str) -> dict[str, Any] | None:
    req = request.Request(object_url(path), headers={"Authorization": f"Bearer {token}"})
    try:
        with request.urlopen(req, timeout=60) as response:
            return json.loads(response.read().decode("utf-8"))
    except error.HTTPError as exc:
        if exc.code == 404:
            return None
        raise MediaError(f"Could not read {path} ({exc.code}): {exc.read().decode('utf-8', 'replace')[:200]}") from exc


def download(source: str, sha: str) -> bytes:
    try:
        with request.urlopen(request.Request(source, headers={"User-Agent": "stories-build"}), timeout=120) as response:
            data = response.read()
    except error.HTTPError as exc:
        raise MediaError(f"Could not download {source} ({exc.code}).") from exc
    if hashlib.sha256(data).hexdigest() != sha:
        raise MediaError(f"{source}: the downloaded picture does not match its sha256.")
    return data


def upload(token: str, target: str, data: bytes, content_type: str, existing: dict[str, Any] | None, sha: str) -> None:
    notes = dict((existing or {}).get("metadata") or {})
    old_tokens = [t for t in str(notes.get("firebaseStorageDownloadTokens", "")).split(",") if t]
    notes["firebaseStorageDownloadTokens"] = ",".join([str(uuid.uuid4()), *old_tokens])
    notes["storiesImageSha256"] = sha
    meta: dict[str, Any] = {"name": target, "contentType": content_type, "metadata": notes}
    if existing and existing.get("cacheControl"):
        meta["cacheControl"] = existing["cacheControl"]
    boundary = f"stories-image-{uuid.uuid4().hex}"
    body = f"--{boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n".encode()
    body += json.dumps(meta).encode()
    body += f"\r\n--{boundary}\r\nContent-Type: {content_type}\r\n\r\n".encode()
    body += data + f"\r\n--{boundary}--\r\n".encode()
    url = (
        f"https://storage.googleapis.com/upload/storage/v1/b/{parse.quote(BUCKET, safe='')}/o"
        f"?uploadType=multipart&name={parse.quote(target, safe='')}"
    )
    req = request.Request(
        url,
        data=body,
        method="POST",
        headers={"Authorization": f"Bearer {token}", "Content-Type": f"multipart/related; boundary={boundary}"},
    )
    try:
        with request.urlopen(req, timeout=180):
            pass
    except error.HTTPError as exc:
        raise MediaError(f"Upload of {target} failed ({exc.code}): {exc.read().decode('utf-8', 'replace')[:200]}") from exc


def main() -> int:
    if not REQUESTS_FILE.exists():
        log(f"No request file at {REQUESTS_FILE}; nothing to do.")
        return 0
    payload = json.loads(REQUESTS_FILE.read_text(encoding="utf-8"))
    items = [item for item in payload.get("requests", []) if isinstance(item, dict)]
    checked = [validate(item) for item in items]
    targets = [target for _, target, _, _ in checked]
    if len(set(targets)) != len(targets):
        raise MediaError("The same picture is listed twice in media/image_requests.json.")
    token = get_access_token()
    replaced = skipped = 0
    for source, target, sha, content_type in checked:
        existing = get_metadata(token, target)
        if ((existing or {}).get("metadata") or {}).get("storiesImageSha256") == sha:
            skipped += 1
            continue
        upload(token, target, download(source, sha), content_type, existing, sha)
        replaced += 1
        log(f"{target}: replaced.")
    log(f"Done: {replaced} replaced, {skipped} already in place.")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except MediaError as exc:
        log(f"ERROR: {exc}")
        sys.exit(1)
