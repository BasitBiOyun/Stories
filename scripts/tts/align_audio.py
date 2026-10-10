#!/usr/bin/env python3
"""Word timings for the "follow along" marker (tts/alignment_requests.json).

For each listed chapter audio, the text that was actually spoken is taken from the
narration queues (tts/requests.json or tts/arabic_requests.json, same cleanup as the
voice), aligned to the existing mp3 with ElevenLabs Forced Alignment, and written next
to the audio as <name>.timings.json. The audio itself is never changed. A chapter is
aligned again only when its audio was regenerated (new storiesTtsRequestId).
"""
from __future__ import annotations

import json
import os
import re
import sys
import uuid
from pathlib import Path
from typing import Any
from urllib import error, parse, request

sys.path.insert(0, str(Path(__file__).resolve().parent))
from process_requests import (  # noqa: E402
    BUCKET,
    TtsError,
    end_title,
    get_access_token,
    get_object_metadata,
    read_json_response,
    strip_parenthetical_content,
)
from process_arabic_requests import narration_for_audio  # noqa: E402

ALIGNMENT_FILE = Path(os.environ.get("STORIES_ALIGNMENT_REQUESTS_FILE", "tts/alignment_requests.json"))
EN_QUEUE = Path("tts/requests.json")
AR_QUEUE = Path("tts/arabic_requests.json")
ARABIC_SCRIPT_RE = re.compile(r"[؀-ۿ]")


def log(message: str) -> None:
    print(f"[Stories Align] {message}", flush=True)


def timings_path_for(audio_path: str) -> str:
    return re.sub(r"\.mp3$", ".timings.json", audio_path, flags=re.IGNORECASE)


def latest_requests_by_path() -> dict[str, dict[str, Any]]:
    by_path: dict[str, dict[str, Any]] = {}
    for queue in (EN_QUEUE, AR_QUEUE):
        if not queue.exists():
            continue
        for item in json.loads(queue.read_text(encoding="utf-8")).get("requests", []):
            if isinstance(item, dict) and item.get("enabled", True) and item.get("storagePath"):
                by_path[str(item["storagePath"])] = item
    return by_path


def spoken_text(narration_text: str) -> str:
    """The exact text the voice read, cleaned the same way as the TTS scripts."""
    if ARABIC_SCRIPT_RE.search(narration_text):
        return narration_for_audio(narration_text.strip())
    return end_title(strip_parenthetical_content(narration_text))


def download(access_token: str, storage_path: str) -> bytes:
    url = (
        "https://storage.googleapis.com/download/storage/v1/b/"
        f"{parse.quote(BUCKET, safe='')}/o/{parse.quote(storage_path, safe='')}?alt=media"
    )
    req = request.Request(url, headers={"Authorization": f"Bearer {access_token}"})
    with request.urlopen(req, timeout=120) as response:
        return response.read()


def forced_alignment(api_key: str, audio: bytes, text: str) -> dict[str, Any]:
    boundary = f"stories-align-{uuid.uuid4().hex}"
    body = (
        f"--{boundary}\r\nContent-Disposition: form-data; name=\"file\"; filename=\"audio.mp3\"\r\n"
        "Content-Type: audio/mpeg\r\n\r\n"
    ).encode("utf-8")
    body += audio
    body += (
        f"\r\n--{boundary}\r\nContent-Disposition: form-data; name=\"text\"\r\n"
        "Content-Type: text/plain; charset=UTF-8\r\n\r\n"
    ).encode("utf-8")
    body += text.encode("utf-8")
    body += f"\r\n--{boundary}--\r\n".encode("utf-8")
    req = request.Request(
        "https://api.elevenlabs.io/v1/forced-alignment",
        data=body,
        headers={
            "xi-api-key": api_key,
            "Content-Type": f"multipart/form-data; boundary={boundary}",
            "Accept": "application/json",
        },
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=300) as response:
            return read_json_response(response)
    except error.HTTPError as exc:
        details = exc.read().decode("utf-8", errors="replace")
        if exc.code in (401, 403):
            details += " (the API key needs the Forced Alignment / Speech to Text permission)"
        raise TtsError(f"ElevenLabs alignment returned {exc.code}: {details}") from exc


def to_timings(alignment: dict[str, Any], text: str, audio_request_id: str) -> dict[str, Any]:
    """Compact word list. "p" is the paragraph index in the spoken text (0 = title)."""
    words = []
    cursor = 0
    for word in alignment.get("words") or []:
        token = str(word.get("text", "")).strip()
        if not token:
            continue
        found = text.find(token, cursor)
        if found >= 0:
            cursor = found + len(token)
        paragraph = len(re.findall(r"\n\s*\n", text[:cursor]))
        words.append({
            "t": token,
            "s": round(float(word.get("start", 0)), 3),
            "e": round(float(word.get("end", 0)), 3),
            "p": paragraph,
        })
    if not words:
        raise TtsError("Alignment returned no words.")
    return {"version": 1, "audioRequestId": audio_request_id, "words": words}


def upload_json(access_token: str, storage_path: str, payload: dict[str, Any], source_id: str) -> None:
    metadata = {
        "name": storage_path,
        "contentType": "application/json",
        "cacheControl": "public, max-age=300",
        "metadata": {"storiesAlignSource": source_id},
    }
    data = json.dumps(payload, ensure_ascii=False, separators=(",", ":")).encode("utf-8")
    boundary = f"stories-align-{uuid.uuid4().hex}"
    body = f"--{boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n".encode("utf-8")
    body += json.dumps(metadata).encode("utf-8")
    body += f"\r\n--{boundary}\r\nContent-Type: application/json\r\n\r\n".encode("utf-8")
    body += data
    body += f"\r\n--{boundary}--\r\n".encode("utf-8")
    req = request.Request(
        "https://storage.googleapis.com/upload/storage/v1/b/"
        f"{parse.quote(BUCKET, safe='')}/o?uploadType=multipart&name={parse.quote(storage_path, safe='')}",
        data=body,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": f"multipart/related; boundary={boundary}",
        },
        method="POST",
    )
    try:
        with request.urlopen(req, timeout=120) as response:
            response.read()
    except error.HTTPError as exc:
        details = exc.read().decode("utf-8", errors="replace")
        raise TtsError(f"Storage upload failed ({exc.code}): {details}") from exc


def process(api_key: str, access_token: str, audio_path: str, queue: dict[str, dict[str, Any]]) -> str:
    item = queue.get(audio_path)
    if not item:
        raise TtsError(f"{audio_path}: no narration request with this storagePath, so the spoken text is unknown.")
    audio_meta = get_object_metadata(access_token, audio_path)
    if audio_meta is None:
        raise TtsError(f"{audio_path}: audio not found.")
    audio_request_id = ((audio_meta.get("metadata") or {}).get("storiesTtsRequestId")) or ""
    if audio_request_id != item.get("id"):
        log(f"{audio_path}: audio is not yet the queued version ({audio_request_id or 'none'} != {item.get('id')}); later.")
        return "deferred"

    timings_path = timings_path_for(audio_path)
    existing = get_object_metadata(access_token, timings_path)
    if ((existing or {}).get("metadata") or {}).get("storiesAlignSource") == audio_request_id:
        log(f"{audio_path}: timings up to date; skipping.")
        return "skipped"

    text = spoken_text(str(item.get("narrationText", "")))
    alignment = forced_alignment(api_key, download(access_token, audio_path), text)
    timings = to_timings(alignment, text, audio_request_id)
    upload_json(access_token, timings_path, timings, audio_request_id)
    log(f"{audio_path}: {len(timings['words'])} words -> {timings_path} (loss {alignment.get('loss')})")
    return "processed"


def main() -> int:
    if not ALIGNMENT_FILE.exists():
        log(f"No {ALIGNMENT_FILE}; nothing to do.")
        return 0
    payload = json.loads(ALIGNMENT_FILE.read_text(encoding="utf-8"))
    paths = [str(p) for p in payload.get("audioPaths", []) if str(p).strip()]
    if not paths:
        return 0
    api_key = os.environ.get("ELEVENLABS_ALIGN_API_KEY", "").strip()
    if not api_key:
        raise TtsError("ELEVENLABS_ALIGN_API_KEY is not available.")
    access_token = get_access_token()
    queue = latest_requests_by_path()
    counts = {"processed": 0, "skipped": 0, "deferred": 0, "failed": 0}
    for path in paths:
        try:
            counts[process(api_key, access_token, path, queue)] += 1
        except (TtsError, error.URLError) as exc:
            log(f"FAILED {path}: {exc}")
            counts["failed"] += 1
    log("Complete. " + ", ".join(f"{k}={v}" for k, v in counts.items()))
    return 1 if counts["failed"] or counts["deferred"] else 0


if __name__ == "__main__":
    try:
        raise SystemExit(main())
    except TtsError as exc:
        log(f"ERROR: {exc}")
        raise SystemExit(1)
