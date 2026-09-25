#!/usr/bin/env python3
"""Regenerate the Turkish voice-over (only needed if the script changes).

Pipeline (offline, free, license-safe):
  1. Piper VITS voice `tr_TR-fahrettin-medium` (via sherpa-onnx) renders N takes per line.
  2. Whisper-small (sherpa-onnx) transcribes every take; the take whose transcript
     best matches the script is kept (automatic take selection).
  3. ffmpeg: resample to 48 kHz, +5 % tempo, voice EQ and light compression.

The committed files in promo/audio/vo/ are the approved takes; running this
script overwrites them.

Models (download once, e.g. into ~/.cache/stories-vo):
  https://github.com/k2-fsa/sherpa-onnx/releases/download/tts-models/vits-piper-tr_TR-fahrettin-medium.tar.bz2
  https://github.com/k2-fsa/sherpa-onnx/releases/download/asr-models/sherpa-onnx-whisper-small.tar.bz2

Usage: python3 promo/scripts/generate_vo.py --models ~/.cache/stories-vo [--takes 5]
Needs: pip install sherpa-onnx soundfile numpy imageio-ffmpeg
"""
from __future__ import annotations

import argparse
import difflib
import json
import re
import subprocess
import tempfile
from pathlib import Path

import numpy as np
import sherpa_onnx
import soundfile as sf

PROMO = Path(__file__).resolve().parent.parent

# What the synthesizer is given. A few words are respelled so espeak's Turkish
# phonemizer pronounces them correctly ("kıla vuz" → kılavuz, "A iki" → A2).
LINES = [
    ("Bir hikâyeyi okumak başka, içine girmek başka.", None),
    ("Her bölüm kendi illüstrasyonu, sesli anlatımı ve keşfedilecek ayrıntılarıyla açılıyor.", None),
    ("Bilmediğin bir kelimeye dokun; anlamı ve Arapça karşılığı hemen yanında.", None),
    ("Tek dokunuşla kitap Arapçaya geçiyor. Metin, ses ve sayfa düzeniyle birlikte.", None),
    ("Her bölümün ardından kısa bir alıştırma ve dil çalışması. Kitabın sonunda kapsamlı bir değerlendirme.", None),
    ("Aynı hikâye üç seviyede: A iki, B bir ve B iki. Her seviyenin kendi dili, kendi görselleri var.",
     "Aynı hikaye 3 seviyede A2, B1 ve B2. Her seviyenin kendi dili, kendi görselleri var."),
    ("Öğretmene, ders planlarıyla hazır bir kıla vuz. Öğrenciye, adım adım bir çalışma rehberi.",
     "Öğretmene ders planlarıyla hazır bir kılavuz. Öğrenciye adım adım bir çalışma rehberi."),
    ("Okunan, dinlenen, içine girilen hikâyeler.", None),
]


def norm(s: str) -> str:
    s = s.lower().replace("â", "a").replace("i̇", "i")
    return " ".join(re.sub(r"[^a-zçğıöşü0-9 ]", "", s).split())


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--models", required=True, type=Path)
    ap.add_argument("--takes", type=int, default=5)
    ap.add_argument("--speed", type=float, default=0.95)
    args = ap.parse_args()
    vd = args.models / "vits-piper-tr_TR-fahrettin-medium"
    wd = args.models / "sherpa-onnx-whisper-small"
    tts = sherpa_onnx.OfflineTts(sherpa_onnx.OfflineTtsConfig(model=sherpa_onnx.OfflineTtsModelConfig(
        vits=sherpa_onnx.OfflineTtsVitsModelConfig(model=str(vd / "tr_TR-fahrettin-medium.onnx"), tokens=str(vd / "tokens.txt"),
                                                   data_dir=str(vd / "espeak-ng-data"), noise_scale=0.5, noise_scale_w=0.7,
                                                   length_scale=1.0 / args.speed), num_threads=4)))
    asr = sherpa_onnx.OfflineRecognizer.from_whisper(encoder=str(wd / "small-encoder.onnx"), decoder=str(wd / "small-decoder.onnx"),
                                                     tokens=str(wd / "small-tokens.txt"), language="tr", task="transcribe",
                                                     num_threads=4, tail_paddings=2000)
    try:
        import imageio_ffmpeg
        ff = imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        ff = "ffmpeg"
    out = PROMO / "audio" / "vo"
    out.mkdir(parents=True, exist_ok=True)
    report = []
    for i, (say, ref) in enumerate(LINES):
        ref = ref or say
        best = None
        for k in range(args.takes):
            a = tts.generate(say, sid=0, speed=1.0)
            x = np.array(a.samples)
            idx = np.where(np.abs(x) > 0.004)[0]
            x = x[max(0, idx[0] - 200): idx[-1] + 3000]
            y = np.interp(np.linspace(0, len(x) - 1, int(len(x) * 16000 / a.sample_rate)), np.arange(len(x)), x).astype("float32")
            y = np.concatenate([np.zeros(8000, "float32"), y, np.zeros(16000, "float32")])
            st = asr.create_stream(); st.accept_waveform(16000, y); asr.decode_stream(st)
            score = difflib.SequenceMatcher(None, norm(ref), norm(st.result.text)).ratio()
            if not best or score > best[0]:
                best = (score, x, a.sample_rate, st.result.text)
        score, x, sr, heard = best
        with tempfile.NamedTemporaryFile(suffix=".wav") as tmp:
            sf.write(tmp.name, x, sr)
            subprocess.run([ff, "-y", "-loglevel", "error", "-i", tmp.name, "-af",
                            "aresample=48000:resampler=soxr,atempo=1.05,highpass=f=75,equalizer=f=220:t=q:w=1:g=1.5,"
                            "equalizer=f=3200:t=q:w=1.2:g=2,equalizer=f=7500:t=q:w=1:g=-2,"
                            "acompressor=threshold=-20dB:ratio=2.5:attack=8:release=120:makeup=2",
                            "-ar", "48000", "-ac", "1", str(out / f"vo_{i:02d}.wav")], check=True)
        report.append({"line": i, "score": round(score, 3), "heard": heard})
        print(i, round(score, 3), heard)
    (out / "take_report.json").write_text(json.dumps(report, ensure_ascii=False, indent=1))


if __name__ == "__main__":
    main()
