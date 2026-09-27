#!/usr/bin/env python3
"""Splice a re-rendered stretch into the existing 4K master without re-encoding the rest.

The old master is cut only at its keyframes (x264 closed GOPs), so the untouched parts are copied
bit-exactly (-c copy); only the new stretch is encoded, with the master's x264 settings. `--shift`
handles a stretch that is longer than the one it replaces (frames after it move later in the film).

    python3 promo/scripts/splice_copy.py --master promo/out/master-4k-v2.mp4 \
        --patch promo/out/v8/r_0.mkv promo/out/v8/r_1.mkv ... \
        --from 39.75 --old-to 48.066667 --out promo/out/lisandan-kulture-4k.mp4

  --from     film second where the patch starts (a keyframe of the old master)
  --old-to   second of the old master where it resumes (a keyframe); the patch must cover
             new film [from, old-to + shift)
"""
from __future__ import annotations

import argparse
import subprocess
from pathlib import Path

PROMO = Path(__file__).resolve().parent.parent
X264 = ["-c:v", "libx264", "-preset", "slower", "-crf", "12", "-profile:v", "high",
        "-x264-params", "aq-mode=3:aq-strength=0.9:deblock=-1,-1:ref=5:bframes=4:psy-rd=1.0,0.15",
        "-pix_fmt", "yuv420p", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709", "-an",
        "-r", "60", "-fps_mode", "cfr"]


def ffmpeg() -> str:
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return "ffmpeg"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--master", required=True)
    ap.add_argument("--patch", nargs="+", required=True, help="lossless chunks, in order")
    ap.add_argument("--from", dest="t_from", type=float, required=True)
    ap.add_argument("--old-to", type=float, required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()
    tmp = Path(args.out).parent / "splice"
    tmp.mkdir(parents=True, exist_ok=True)
    ff = ffmpeg()
    head, mid, tail = tmp / "a_head.mp4", tmp / "b_patch.mp4", tmp / "c_tail.mp4"
    n_head = round(args.t_from * 60)
    subprocess.run([ff, "-y", "-loglevel", "error", "-i", args.master, "-map", "0:v", "-frames:v", str(n_head), "-c", "copy", str(head)], check=True)
    subprocess.run([ff, "-y", "-loglevel", "error", "-ss", f"{args.old_to:.6f}", "-i", args.master, "-map", "0:v", "-c", "copy", str(tail)], check=True)
    lst = tmp / "patch.txt"
    lst.write_text("".join(f"file '{Path(p).resolve()}'\n" for p in args.patch))
    subprocess.run([ff, "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-vf", "setpts=N/(60*TB)", *X264, str(mid)], check=True)
    lst = tmp / "all.txt"
    lst.write_text("".join(f"file '{p.name}'\n" for p in (head, mid, tail)))
    subprocess.run([ff, "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lst), "-i", str(PROMO / "out" / "mix.wav"),
                    "-map", "0:v", "-map", "1:a", "-c:v", "copy", "-c:a", "aac", "-b:a", "256k", "-shortest", "-movflags", "+faststart", args.out], check=True)
    print("wrote", args.out)


if __name__ == "__main__":
    main()
