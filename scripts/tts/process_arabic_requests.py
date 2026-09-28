#!/usr/bin/env python3
"""Arabic narration queue (tts/arabic_requests.json), kept apart from the English-only queue.

Same flow as process_requests.py: the chapter title, a paragraph break, then the story;
parenthetical spans are not read. The Arabic honorifics that stand in for "(pbuh)" are not
read either. Audio is written only to existing arabic_audio objects, keeping their download
token so the current audioUrl values stay valid.
"""
from __future__ import annotations

import json
import os
import re
import sys
from pathlib import Path
from typing import Any
from urllib import error, request

sys.path.insert(0, str(Path(__file__).resolve().parent))
from process_requests import (  # noqa: E402
    MAX_TEXT_CHARS,
    TtsError,
    get_access_token,
    get_object_metadata,
    multipart_upload,
    strip_parenthetical_content,
)

VOICE_ID = "w4LX7bK479eHGM1k15Em"
MODEL_ID = "eleven_v4"
SPEED = 0.96
REQUESTS_FILE = Path(os.environ.get("STORIES_TTS_ARABIC_REQUESTS_FILE", "tts/arabic_requests.json"))
ARABIC_SCRIPT_RE = re.compile(r"[؀-ۿ]")
DIACRITICS = "[ً-ْٰ]*"


def _loose(word: str) -> str:
    """Match an Arabic word whatever its diacritics."""
    return DIACRITICS.join(re.escape(ch) for ch in word) + DIACRITICS


HONORIFIC_RE = re.compile(
    r"\s*(?:ﷺ|"
    + r"\s+".join(_loose(w) for w in ("صلى", "الله", "عليه", "وسلم"))
    + r"|"
    + r"\s+".join(_loose(w) for w in ("عليه", "السلام"))
    + r")"
)


def log(message: str) -> None:
    print(f"[Stories TTS Arabic] {message}", flush=True)


def narration_for_audio(text: str) -> str:
    cleaned = strip_parenthetical_content(text)
    cleaned = HONORIFIC_RE.sub("", cleaned)
    cleaned = re.sub(r"[ \t]+([،؛.!?؟:])", r"\1", cleaned)
    cleaned = re.sub(r"[ \t]{2,}", " ", cleaned)
    return cleaned.strip()


def validate_request(item: dict[str, Any]) -> tuple[str, str, str]:
    request_id = str(item.get("id", "")).strip()
    narration_text = str(item.get("narrationText", "")).strip()
    storage_path = str(item.get("storagePath", "")).strip()

    if not re.fullmatch(r"[A-Za-z0-9._-]{6,120}", request_id):
        raise TtsError("Invalid request id.")
    if not ARABIC_SCRIPT_RE.search(narration_text):
        raise TtsError(f"{request_id}: narrationText is not Arabic.")
    if not storage_path or storage_path.startswith("/") or ".." in Path(storage_path).parts:
        raise TtsError(f"{request_id}: invalid storagePath.")
    if "/arabic_audio/" not in storage_path or not storage_path.lower().endswith(".mp3"):
        raise TtsError(f"{request_id}: storagePath must be an .mp3 inside an arabic_audio folder.")
    return request_id, narration_text, storage_path


def elevenlabs_synthesize(api_key: str, narration_text: str) -> bytes:
    cleaned = narration_for_audio(narration_text)
    if not cleaned:
        raise TtsError("Narration became empty after cleanup.")
    if len(cleaned) > MAX_TEXT_CHARS:
        raise TtsError(f"Narration is {len(cleaned)} characters; maximum is {MAX_TEXT_CHARS}.")

    endpoint = (
        f"https://api.elevenlabs.io/v1/text-to-speech/{VOICE_ID}"
        "?output_format=mp3_44100_128"
    )
    # Only speed is overridden; the voice keeps its stored stability/similarity settings.
    body = json.dumps(
        {
            "text": cleaned,
            "model_id": MODEL_ID,
            "voice_settings": {"speed": SPEED},
        },
        ensure_ascii=False,
    ).encode("utf-8")
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
        with request.urlopen(req, timeout=300) as response:
            audio = response.read()
    except error.HTTPError as exc:
        details = exc.read().decode("utf-8", errors="replace")
        raise TtsError(f"ElevenLabs returned {exc.code}: {details}") from exc

    if len(audio) < 1024:
        raise TtsError("ElevenLabs returned an unexpectedly small audio payload.")
    log(f"Generated {len(cleaned)} narration characters ({MODEL_ID}, speed {SPEED}).")
    return audio


def load_requests() -> list[dict[str, Any]]:
    if not REQUESTS_FILE.exists():
        log(f"No request file at {REQUESTS_FILE}; nothing to do.")
        return []
    payload = json.loads(REQUESTS_FILE.read_text(encoding="utf-8"))
    if payload.get("version") != 1:
        raise TtsError(f"{REQUESTS_FILE} must use version 1.")
    items = payload.get("requests")
    if not isinstance(items, list):
        raise TtsError(f"{REQUESTS_FILE} must contain a requests array.")
    return [item for item in items if isinstance(item, dict) and item.get("enabled", True)]


def main() -> int:
    items = load_requests()
    if not items:
        return 0

    api_key = os.environ.get("ELEVENLABS_ARABIC_API_KEY", "").strip()
    if not api_key:
        raise TtsError("ELEVENLABS_ARABIC_API_KEY is not available.")

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
            raise TtsError(f"{request_id}: target already exists. Set allowOverwrite=true after approval.")

        log(f"{request_id}: generating Arabic narration -> {storage_path}")
        audio = elevenlabs_synthesize(api_key, narration_text)
        uploaded, firebase_url = multipart_upload(
            access_token, storage_path, audio, existing, request_id, voice_id=VOICE_ID
        )
        log(f"{request_id}: uploaded generation {uploaded.get('generation', 'unknown')} ({len(audio)} bytes).")
        log(f"{request_id}: {firebase_url}")
        processed += 1

    log(f"Complete. processed={processed}, skipped={skipped}")
    return 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except (TtsError, json.JSONDecodeError) as exc:
        print(f"[Stories TTS Arabic] FAILED: {exc}", file=sys.stderr, flush=True)
        raise SystemExit(1)
