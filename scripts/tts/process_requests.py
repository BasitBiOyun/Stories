#!/usr/bin/env python3
from __future__ import annotations

import datetime as dt
import json
import os
import re
import subprocess
import sys
import uuid
from pathlib import Path
from typing import Any
from urllib import error, parse, request

VOICE_ID = "xzZRXG86mSM3naOyL9fa"
BUCKET = os.environ.get("FIREBASE_STORAGE_BUCKET", "gen-lang-client-0373200489.firebasestorage.app")
REQUESTS_FILE = Path(os.environ.get("STORIES_TTS_REQUESTS_FILE", "tts/requests.json"))
MAX_TEXT_CHARS = 10_000
ARABIC_SCRIPT_RE = re.compile(r"[\u0600-\u06FF]")


class TtsError(RuntimeError):
    pass


def log(message: str) -> None:
    print(f"[Stories TTS] {message}", flush=True)


def read_json_response(response: Any) -> dict[str, Any]:
    raw = response.read()
    return json.loads(raw.decode("utf-8")) if raw else {}


def strip_parenthetical_content(text: str) -> str:
    """Remove all balanced (...) spans, including nested parentheses."""
    output: list[str] = []
    depth = 0
    for char in text:
        if char == "(":
            depth += 1
            continue
        if char == ")":
            if depth == 0:
                raise TtsError("Narration contains an unmatched closing parenthesis.")
            depth -= 1
            continue
        if depth == 0:
            output.append(char)

    if depth != 0:
        raise TtsError("Narration contains an unmatched opening parenthesis.")

    cleaned = "".join(output)
    cleaned = re.sub(r"[ \t]+([,.;:!?])", r"\1", cleaned)
    cleaned = re.sub(r"[ \t]{2,}", " ", cleaned)
    cleaned = re.sub(r" *\n *", "\n", cleaned)
    cleaned = re.sub(r"\n{3,}", "\n\n", cleaned)
    return cleaned.strip()


def validate_storage_path(storage_path: str) -> None:
    if not storage_path or storage_path.startswith("/"):
        raise TtsError("storagePath must be a relative Firebase Storage object path.")
    if ".." in Path(storage_path).parts:
        raise TtsError("storagePath cannot contain '..'.")
    if not storage_path.lower().endswith(".mp3"):
        raise TtsError("storagePath must point to an .mp3 file.")

    lowered = storage_path.lower()
    if any(token in lowered for token in ("arabic", "arabic_audio", "/ar/", "_ar/")):
        raise TtsError("Refusing to write to an Arabic audio path.")


def validate_request(item: dict[str, Any]) -> tuple[str, str, str]:
    request_id = str(item.get("id", "")).strip()
    narration_text = str(item.get("narrationText", "")).strip()
    storage_path = str(item.get("storagePath", "")).strip()

    if not re.fullmatch(r"[A-Za-z0-9._-]{6,120}", request_id):
        raise TtsError("Invalid request id.")
    if not narration_text:
        raise TtsError("narrationText is empty.")
    if ARABIC_SCRIPT_RE.search(narration_text):
        raise TtsError("Arabic script detected. This automation is English-only.")
    validate_storage_path(storage_path)
    return request_id, narration_text, storage_path


def get_access_token() -> str:
    result = subprocess.run(
        ["gcloud", "auth", "print-access-token"],
        check=True,
        capture_output=True,
        text=True,
    )
    token = result.stdout.strip()
    if not token:
        raise TtsError("Could not obtain a Google Cloud access token.")
    return token


def get_object_metadata(access_token: str, storage_path: str) -> dict[str, Any] | None:
    object_name = parse.quote(storage_path, safe="")
    bucket = parse.quote(BUCKET, safe="")
    url = f"https://storage.googleapis.com/storage/v1/b/{bucket}/o/{object_name}"
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
        raise TtsError(f"Could not read Storage metadata ({exc.code}): {details}") from exc


def elevenlabs_synthesize(api_key: str, narration_text: str) -> bytes:
    cleaned = strip_parenthetical_content(narration_text)
    if not cleaned:
        raise TtsError("Narration became empty after parenthetical cleanup.")
    if len(cleaned) > MAX_TEXT_CHARS:
        raise TtsError(f"Narration is {len(cleaned)} characters; maximum is {MAX_TEXT_CHARS}.")

    endpoint = (
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
        "?output_format=mp3_44100_128"
    )
    # model_id and voice_settings are deliberately omitted. ElevenLabs therefore
    # uses the API default model and Rowan's stored/default voice settings.
    body = json.dumps({"text": cleaned}, ensure_ascii=False).encode("utf-8")
    req = request.Request(
        endpoint,
        data=body,
        headers={
            "xi-api-key": api_key,
            "Content-Type": "application/json",
            "Accept": "audio/mpeg",
        },
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=180) as response:
            audio = response.read()
    except error.HTTPError as exc:
        details = exc.read().decode("utf-8", errors="replace")
        raise TtsError(f"ElevenLabs returned {exc.code}: {details}") from exc

    if len(audio) < 1024:
        raise TtsError("ElevenLabs returned an unexpectedly small audio payload.")
    log(f"Rowan generated {len(cleaned)} narration characters.")
    return audio


def multipart_upload(
    access_token: str,
    storage_path: str,
    audio: bytes,
    existing_metadata: dict[str, Any] | None,
    request_id: str,
) -> tuple[dict[str, Any], str]:
    custom_metadata = dict((existing_metadata or {}).get("metadata") or {})
    download_token = custom_metadata.get("firebaseStorageDownloadTokens") or str(uuid.uuid4())

    # Preserve the existing Firebase download token so an overwritten chapter can
    # keep its current audioUrl. The TTS metadata also makes requests idempotent.
    custom_metadata["firebaseStorageDownloadTokens"] = download_token
    custom_metadata["storiesTtsRequestId"] = request_id
    custom_metadata["storiesTtsVoiceId"] = VOICE_ID
    custom_metadata["storiesTtsGeneratedAt"] = (
        dt.datetime.now(dt.timezone.utc).replace(microsecond=0).isoformat()
    )

    metadata_payload: dict[str, Any] = {
        "name": storage_path,
        "contentType": "audio/mpeg",
        "metadata": custom_metadata,
    }
    if existing_metadata:
        if existing_metadata.get("cacheControl"):
            metadata_payload["cacheControl"] = existing_metadata["cacheControl"]
        if existing_metadata.get("contentDisposition"):
            metadata_payload["contentDisposition"] = existing_metadata["contentDisposition"]

    boundary = f"stories-tts-{uuid.uuid4().hex}"
    metadata_bytes = json.dumps(metadata_payload, ensure_ascii=False).encode("utf-8")
    body = (
        f"--{boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n"
    ).encode("utf-8")
    body += metadata_bytes
    body += f"\r\n--{boundary}\r\nContent-Type: audio/mpeg\r\n\r\n".encode("utf-8")
    body += audio
    body += f"\r\n--{boundary}--\r\n".encode("utf-8")

    upload_url = (
        "https://storage.googleapis.com/upload/storage/v1/b/"
        f"{parse.quote(BUCKET, safe='')}/o"
        f"?uploadType=multipart&name={parse.quote(storage_path, safe='')}"
    )
    req = request.Request(
        upload_url,
        data=body,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": f"multipart/related; boundary={boundary}",
            "Content-Length": str(len(body)),
        },
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=180) as response:
            uploaded = read_json_response(response)
    except error.HTTPError as exc:
        details = exc.read().decode("utf-8", errors="replace")
        raise TtsError(f"Storage upload failed ({exc.code}): {details}") from exc

    firebase_url = (
        "https://firebasestorage.googleapis.com/v0/b/"
        f"{BUCKET}/o/{parse.quote(storage_path, safe='')}"
        f"?alt=media&token={parse.quote(download_token, safe='')}"
    )
    return uploaded, firebase_url


def load_requests() -> list[dict[str, Any]]:
    if not REQUESTS_FILE.exists():
        log(f"No request file at {REQUESTS_FILE}; nothing to do.")
        return []
    payload = json.loads(REQUESTS_FILE.read_text(encoding="utf-8"))
    if payload.get("version") != 1:
        raise TtsError("tts/requests.json must use version 1.")
    items = payload.get("requests")
    if not isinstance(items, list):
        raise TtsError("tts/requests.json must contain a requests array.")
    return [item for item in items if isinstance(item, dict) and item.get("enabled", True)]


def main() -> int:
    items = load_requests()
    if not items:
        return 0

    api_key = os.environ.get("ELEVENLABS_API_KEY", "").strip()
    if not api_key:
        raise TtsError("ELEVENLABS_API_KEY is not available.")

    access_token = get_access_token()
    processed = 0
    skipped = 0

    for item in items:
        request_id, narration_text, storage_path = validate_request(item)
        existing = get_object_metadata(access_token, storage_path)
        existing_custom = (existing or {}).get("metadata") or {}

        if existing_custom.get("storiesTtsRequestId") == request_id:
            log(f"{request_id}: already processed; skipping.")
            skipped += 1
            continue

        if existing is not None and item.get("allowOverwrite") is not True:
            raise TtsError(
                f"{request_id}: target already exists. Set allowOverwrite=true after approval."
            )

        log(f"{request_id}: generating Rowan narration -> gs://{BUCKET}/{storage_path}")
        audio = elevenlabs_synthesize(api_key, narration_text)
        uploaded, firebase_url = multipart_upload(
            access_token, storage_path, audio, existing, request_id
        )
        log(
            f"{request_id}: uploaded generation {uploaded.get('generation', 'unknown')} "
            f"({len(audio)} bytes)."
        )
        log(f"{request_id}: {firebase_url}")
        processed += 1

    log(f"Complete. processed={processed}, skipped={skipped}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (TtsError, json.JSONDecodeError, subprocess.CalledProcessError) as exc:
        print(f"[Stories TTS] FAILED: {exc}", file=sys.stderr, flush=True)
        raise SystemExit(1)
