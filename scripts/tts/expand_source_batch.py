#!/usr/bin/env python3
from __future__ import annotations

import json
import re
from pathlib import Path

REQUESTS_FILE = Path("tts/requests.json")
ADAM_B2_PAGES = Path("src/data/adam/b2/en/pages.ts")


def extract_story_page(source: str, chapter: int) -> tuple[str, str]:
    pattern = re.compile(
        rf"S\({chapter},'([^']+)',`(.*?)`,V\(",
        re.DOTALL,
    )
    match = pattern.search(source)
    if not match:
        raise RuntimeError(f"Could not extract Adam B2 chapter {chapter} from pages.ts")
    title, content = match.groups()
    content = re.sub(r"^// anchor-[^\n]*(?:\n|$)", "", content, flags=re.MULTILINE)
    content = re.sub(r"\n{3,}", "\n\n", content).strip()
    return title, content


def main() -> int:
    if not REQUESTS_FILE.exists():
        return 0

    payload = json.loads(REQUESTS_FILE.read_text(encoding="utf-8"))
    batch = payload.get("sourceBatch")
    if batch != "adam-b2-14-17":
        return 0

    source = ADAM_B2_PAGES.read_text(encoding="utf-8")
    requests = []
    for chapter in (14, 15, 16, 17):
        title, content = extract_story_page(source, chapter)
        requests.append(
            {
                "id": f"adam-b2-ch{chapter}-rowan-20260909-source-v1",
                "enabled": True,
                "allowOverwrite": True,
                "cleanupDuplicates": True,
                "chapterNumber": chapter,
                "englishAudioFolders": ["adam_b2/audio", "Adam_B2/audio"],
                "storagePath": f"adam_b2/audio/adam_b2_ch{chapter}.mp3",
                "narrationText": f"{title}\n\n{content}",
            }
        )

    REQUESTS_FILE.write_text(
        json.dumps({"version": 1, "requests": requests}, ensure_ascii=False, indent=2) + "\n",
        encoding="utf-8",
    )
    print("[Stories TTS] Expanded sourceBatch adam-b2-14-17 into 4 safe requests.", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
