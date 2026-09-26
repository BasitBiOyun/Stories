#!/usr/bin/env python3
"""Re-render only the changed frame ranges of the film and splice them into an existing master.

The composition is deterministic, so frames outside the changed ranges are identical to the
previous render. This renders the given ranges at 4K (lossless intermediates), cuts them into the
old master frame-exactly and encodes a new master (+ the soundtrack in promo/out/mix.wav).

    python3 promo/scripts/patch_master.py --master promo/out/master-4k.mp4 \
        --ranges 12.8-14.8 50.6-54.2 72.4-76.7 --out promo/out/master-4k-v2.mp4
"""
from __future__ import annotations

import argparse
import json
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

PROMO = Path(__file__).resolve().parent.parent
TL = json.loads((PROMO / "timeline.json").read_text())
FPS = TL["fps"]


def ffmpeg() -> str:
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return "ffmpeg"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--master", required=True)
    ap.add_argument("--ranges", nargs="+", required=True, help="seconds, e.g. 12.8-14.8")
    ap.add_argument("--out", required=True)
    ap.add_argument("--workers", type=int, default=4)
    ap.add_argument("--crf", type=int, default=12)
    args = ap.parse_args()
    total = round(TL["duration"] * FPS)
    ranges = sorted((round(float(a) * FPS), round(float(b) * FPS)) for a, b in (r.split("-") for r in args.ranges))
    tmp = PROMO / "out" / "patch"
    tmp.mkdir(parents=True, exist_ok=True)

    # 1) render every range in ~equal sub-chunks across the workers
    jobs = []
    for ri, (f0, f1) in enumerate(ranges):
        n = f1 - f0
        per = -(-n // args.workers)
        for w in range(args.workers):
            a, b = f0 + w * per, min(f1, f0 + (w + 1) * per)
            if a < b:
                jobs.append((ri, w, a, b, tmp / f"r{ri}_{w}.mkv"))

    def run(job):
        ri, w, a, b, out = job
        cmd = [sys.executable, str(PROMO / "scripts" / "render.py"), "--raw", "--from", f"{a / FPS:.6f}", "--to", f"{b / FPS:.6f}",
               "--fps", str(FPS), "--port", str(8900 + ri * 10 + w), "--out", str(out)]
        subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL)
        print(f"rendered frames {a}-{b}", flush=True)
        return job

    with ThreadPoolExecutor(args.workers) as ex:
        list(ex.map(run, jobs))

    # 2) splice: master[0:f0] + patch + master[f1:f2] + ... ; one encode of the result
    inputs = ["-i", args.master]
    for j in jobs:
        inputs += ["-i", str(j[4])]
    inputs += ["-i", str(PROMO / "out" / "mix.wav")]
    parts, fc, cur = [], [], 0
    k = 0
    for ri, (f0, f1) in enumerate(ranges):
        if f0 > cur:
            fc.append(f"[0:v]trim=start_frame={cur}:end_frame={f0},setpts=PTS-STARTPTS,format=yuv420p[m{k}]"); parts.append(f"[m{k}]"); k += 1
        for j_i, j in enumerate(jobs):
            if j[0] == ri:
                fc.append(f"[{j_i + 1}:v]format=yuv420p,setpts=PTS-STARTPTS[p{j_i}]"); parts.append(f"[p{j_i}]")
        cur = f1
    if cur < total:
        fc.append(f"[0:v]trim=start_frame={cur}:end_frame={total},setpts=PTS-STARTPTS,format=yuv420p[m{k}]"); parts.append(f"[m{k}]")
    fc.append("".join(parts) + f"concat=n={len(parts)}:v=1:a=0,fps={FPS}[v]")
    audio_idx = len(jobs) + 1
    cmd = [ffmpeg(), "-y", "-loglevel", "error", *inputs, "-filter_complex", ";".join(fc), "-map", "[v]", "-map", f"{audio_idx}:a",
           "-c:v", "libx264", "-preset", "slower", "-crf", str(args.crf), "-profile:v", "high",
           "-x264-params", "aq-mode=3:aq-strength=0.9:deblock=-1,-1:ref=5:bframes=4:psy-rd=1.0,0.15",
           "-pix_fmt", "yuv420p", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709",
           "-c:a", "aac", "-b:a", "256k", "-shortest", "-movflags", "+faststart", args.out]
    subprocess.run(cmd, check=True)
    for j in jobs:
        j[4].unlink()
    print("wrote", args.out)


if __name__ == "__main__":
    main()
