#!/usr/bin/env python3
from __future__ import annotations

import json
import os
import re
import subprocess
import sys
from pathlib import Path
from typing import Any
from urllib import error, parse, request

BUCKET = os.environ.get("FIREBASE_STORAGE_BUCKET", "gen-lang-client-0373200489.firebasestorage.app")
REQUESTS_FILE = Path(os.environ.get("STORIES_TTS_REQUESTS_FILE", "tts/requests.json"))
AUDIO_EXTENSION_RE = re.compile(r"\.(?:mp3|m4a|aac|wav|ogg|opus|mpeg)$", re.IGNORECASE)
ARABIC_PATH_TOKENS = ("arabic", "arabic_audio", "/ar/", "_ar/")


class CleanupError(RuntimeError):
    pass


def log(message: str) -> None:
    print(f"[Stories TTS cleanup] {message}", flush=True)


def get_access_token() -> str:
    result = subprocess.run(
        ["gcloud", "auth", "print-access-token"],
        check=True,
        capture_output=True,
        text=True,
    )
    token = result.stdout.strip()
    if not token:
        raise CleanupError("Could not obtain a Google Cloud access token.")
    return token


def read_json_response(response: Any) -> dict[str, Any]:
    raw = response.read()
    return json.loads(raw.decode("utf-8")) if raw else {}


def object_metadata(access_token: str, storage_path: str) -> dict[str, Any] | None:
    url = (
        "https://storage.googleapis.com/storage/v1/b/"
        f"{parse.quote(BUCKET, safe='')}/o/{parse.quote(storage_path, safe='')}"
    )
    req = request.Request(
        url,
        headers={"Authorization": f"Bearer {access_token}"},
        method="GET",
    )
    try:
        with request.urlopen(req, timeout=60) as response:
            return read_json_response(response)
    except error.HTTPError as exc:
        if exc.code == 404:
            return None
        details = exc.read().decode("utf-8", errors="replace")
        raise CleanupError(f"Could not read Storage metadata ({exc.code}): {details}") from exc


def list_direct_objects(access_token: str, folder: str) -> list[str]:
    prefix = folder.strip("/") + "/"
    names: list[str] = []
    page_token: str | None = None

    while True:
        params = {
            "prefix": prefix,
            "delimiter": "/",
            "fields": "items(name),nextPageToken",
        }
        if page_token:
            params["pageToken"] = page_token

        url = (
            "https://storage.googleapis.com/storage/v1/b/"
            f"{parse.quote(BUCKET, safe='')}/o?{parse.urlencode(params)}"
        )
        req = request.Request(
            url,
            headers={"Authorization": f"Bearer {access_token}"},
            method="GET",
        )
        try:
            with request.urlopen(req, timeout=60) as response:
                payload = read_json_response(response)
        except error.HTTPError as exc:
            details = exc.read().decode("utf-8", errors="replace")
            raise CleanupError(f"Could not list Storage folder {folder} ({exc.code}): {details}") from exc

        names.extend(
            str(item.get("name", ""))
            for item in payload.get("items", [])
            if item.get("name")
        )
        page_token = payload.get("nextPageToken")
        if not page_token:
            break

    return names


def delete_object(access_token: str, storage_path: str) -> None:
    url = (
        "https://storage.googleapis.com/storage/v1/b/"
        f"{parse.quote(BUCKET, safe='')}/o/{parse.quote(storage_path, safe='')}"
    )
    req = request.Request(
        url,
        headers={"Authorization": f"Bearer {access_token}"},
        method="DELETE",
    )
    try:
        with request.urlopen(req, timeout=60):
            return
    except error.HTTPError as exc:
        if exc.code == 404:
            return
        details = exc.read().decode("utf-8", errors="replace")
        raise CleanupError(f"Could not delete {storage_path} ({exc.code}): {details}") from exc


def parse_chapter_number(name: str) -> int | None:
    decoded = parse.unquote(name)
    match = re.search(r"chapter\s*[-_ ]?\s*(\d+)", decoded, re.IGNORECASE)
    if match:
        return int(match.group(1))

    match = re.search(r"(?:\b|_)ch\s*[-_ ]?\s*(\d+)", decoded, re.IGNORECASE)
    if match:
        return int(match.group(1))

    cleaned = re.sub(r"\b[ab][12]\b", "", decoded, count=1, flags=re.IGNORECASE)
    cleaned = re.sub(r"^[ab][12]\s*[-_ ]?\s*", "", cleaned, count=1, flags=re.IGNORECASE)
    match = re.search(r"(\d+)", cleaned)
    return int(match.group(1)) if match else None


def is_safe_english_audio_path(storage_path: str) -> bool:
    lowered = storage_path.lower()
    if any(token in lowered for token in ARABIC_PATH_TOKENS):
        return False
    return bool(AUDIO_EXTENSION_RE.search(storage_path))


def load_requests() -> list[dict[str, Any]]:
    if not REQUESTS_FILE.exists():
        return []
    payload = json.loads(REQUESTS_FILE.read_text(encoding="utf-8"))
    if payload.get("version") != 1:
        raise CleanupError("tts/requests.json must use version 1.")
    items = payload.get("requests")
    if not isinstance(items, list):
        raise CleanupError("tts/requests.json must contain a requests array.")
    return [item for item in items if isinstance(item, dict) and item.get("enabled", True)]


def cleanup_request(access_token: str, item: dict[str, Any]) -> int:
    if item.get("cleanupDuplicates") is not True:
        return 0

    request_id = str(item.get("id", "")).strip()
    target = str(item.get("storagePath", "")).strip()
    chapter = item.get("chapterNumber")
    folders = item.get("englishAudioFolders")

    if not request_id or not target:
        raise CleanupError("Cleanup request is missing id or storagePath.")
    if not isinstance(chapter, int) or chapter < 1:
        raise CleanupError(f"{request_id}: chapterNumber must be a positive integer.")
    if not isinstance(folders, list) or not folders or not all(isinstance(value, str) and value.strip() for value in folders):
        raise CleanupError(f"{request_id}: englishAudioFolders must be a non-empty string array.")
    if not is_safe_english_audio_path(target):
        raise CleanupError(f"{request_id}: target is not a safe English audio path.")

    target_meta = object_metadata(access_token, target)
    if target_meta is None:
        raise CleanupError(f"{request_id}: generated target is missing; refusing duplicate cleanup.")

    target_request_id = str((target_meta.get("metadata") or {}).get("storiesTtsRequestId", ""))
    if target_request_id != request_id:
        raise CleanupError(
            f"{request_id}: target is not verified as generated by this request; refusing cleanup."
        )

    duplicates: set[str] = set()
    for folder in folders:
        normalized_folder = folder.strip().strip("/")
        if not normalized_folder:
            continue
        if any(token in f"/{normalized_folder.lower()}/" for token in ARABIC_PATH_TOKENS):
            raise CleanupError(f"{request_id}: Arabic folder supplied as English cleanup source.")

        for candidate in list_direct_objects(access_token, normalized_folder):
            if candidate == target or not is_safe_english_audio_path(candidate):
                continue
            filename = candidate.rsplit("/", 1)[-1]
            if parse_chapter_number(filename) == chapter:
                duplicates.add(candidate)

    for duplicate in sorted(duplicates):
        delete_object(access_token, duplicate)
        log(f"{request_id}: deleted old English duplicate gs://{BUCKET}/{duplicate}")

    if not duplicates:
        log(f"{request_id}: no old English duplicates found for chapter {chapter}.")
    return len(duplicates)


def main() -> int:
    items = load_requests()
    if not items:
        log("No enabled requests; nothing to clean.")
        return 0

    access_token = get_access_token()
    deleted = 0
    for item in items:
        deleted += cleanup_request(access_token, item)

    log(f"Complete. deleted={deleted}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (CleanupError, json.JSONDecodeError, subprocess.CalledProcessError) as exc:
        print(f"[Stories TTS cleanup] FAILED: {exc}", file=sys.stderr, flush=True)
        raise SystemExit(1)
