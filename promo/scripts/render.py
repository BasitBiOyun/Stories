#!/usr/bin/env python3
"""Render the Stories promo film frame-by-frame.

The composition (promo/index.html + film.js) is a deterministic timeline:
window.__seek(t) draws the exact frame for time t. This script serves the
promo folder locally, drives headless Chromium through every frame and pipes
the frames into ffmpeg.

Usage
  python3 promo/scripts/render.py                         # full film -> promo/out/stories-promo.mp4
  python3 promo/scripts/render.py --stills 1.2 5 9.8      # PNG stills -> promo/out/stills/
  python3 promo/scripts/render.py --from 12 --to 18 --out promo/out/part.mp4

Requirements: Python 3.10+, `pip install playwright imageio-ffmpeg`,
a Chromium (PLAYWRIGHT_BROWSERS_PATH or --chrome), and promo/out/mix.wav
(built by build_audio.py) for the soundtrack.
"""
from __future__ import annotations

import argparse
import asyncio
import functools
import http.server
import json
import os
import subprocess
import sys
import threading
import time
from pathlib import Path

PROMO = Path(__file__).resolve().parent.parent
TIMELINE = json.loads((PROMO / "timeline.json").read_text())


def ffmpeg_exe() -> str:
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        return "ffmpeg"


def find_chrome(explicit: str | None) -> str | None:
    if explicit:
        return explicit
    base = Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "/opt/pw-browsers"))
    for cand in sorted(base.glob("chromium-*/chrome-linux/chrome"), reverse=True):
        return str(cand)
    return None


def serve(port: int) -> http.server.ThreadingHTTPServer:
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a, **k):  # noqa: D401 - silence per-request logs
            pass

    handler = functools.partial(Quiet, directory=str(PROMO))
    srv = http.server.ThreadingHTTPServer(("127.0.0.1", port), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    return srv


async def run(args: argparse.Namespace) -> None:
    from playwright.async_api import async_playwright

    srv = serve(args.port)
    url = f"http://127.0.0.1:{args.port}/index.html?render=1"
    fps = args.fps
    W, H = TIMELINE["width"], TIMELINE["height"]
    async with async_playwright() as p:
        browser = await p.chromium.launch(
            executable_path=find_chrome(args.chrome),
            args=["--no-sandbox", "--disable-gpu-vsync", "--font-render-hinting=none", "--force-color-profile=srgb"],
        )
        page = await browser.new_page(viewport={"width": W, "height": H}, device_scale_factor=args.scale)
        page.on("console", lambda m: print("[page]", m.text) if m.type in ("error", "warning") else None)
        page.on("pageerror", lambda e: print("[page error]", e))
        await page.goto(url, wait_until="networkidle")
        await page.evaluate("window.__ready")
        cdp = await page.context.new_cdp_session(page)

        async def grab(t: float) -> bytes:
            await page.evaluate(f"window.__seek({t:.6f})")
            lossless = args.stills or args.raw
            return await page.screenshot(type="png" if lossless else "jpeg", quality=None if lossless else 95, scale="device", animations="disabled", caret="hide")

        if args.stills:
            out = PROMO / "out" / "stills"
            out.mkdir(parents=True, exist_ok=True)
            for t in args.stills:
                (out / f"t{t:06.2f}.png").write_bytes(await grab(t))
                print("still", t)
            await browser.close()
            srv.shutdown()
            return

        duration = TIMELINE["duration"]
        t0, t1 = args.t_from, min(args.t_to or duration, duration)
        n = int(round((t1 - t0) * fps))
        out_path = Path(args.out)
        out_path.parent.mkdir(parents=True, exist_ok=True)
        if args.raw:
            cmd = [ffmpeg_exe(), "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(fps), "-i", "-",
                   "-c:v", "libx264", "-preset", "ultrafast", "-qp", "0", "-pix_fmt", "yuv444p", str(out_path)]
            ff = subprocess.Popen(cmd, stdin=subprocess.PIPE)
            for i in range(n):
                ff.stdin.write(await grab(t0 + i / fps))
                if i % 120 == 0:
                    print(f"[{t0:.2f}] frame {i}/{n}", flush=True)
            ff.stdin.close(); ff.wait(); await browser.close(); srv.shutdown()
            return
        vf = []  # native resolution: W×H × device scale factor (scale 2 → true 3840×2160)
        if args.blur_to:
            # two-sample motion blur: average frame pairs, then drop to the delivery rate
            vf += [f"tmix=frames={fps // args.blur_to}:weights='1 1'", f"fps={args.blur_to}"]
        vf += ["format=yuv420p"]
        cmd = [ffmpeg_exe(), "-y", "-loglevel", "error", "-f", "image2pipe", "-framerate", str(fps), "-i", "-"]
        audio = PROMO / "out" / "mix.wav"
        if audio.exists() and not args.no_audio:
            cmd += ["-ss", f"{t0}", "-t", f"{t1 - t0}", "-i", str(audio)]
        cmd += ["-vf", ",".join(vf), "-c:v", "libx264", "-preset", "slower", "-crf", str(args.crf), "-profile:v", "high", "-x264-params", "aq-mode=3:aq-strength=0.9:deblock=-1,-1:ref=5:bframes=4:psy-rd=1.0,0.15",
                "-pix_fmt", "yuv420p", "-movflags", "+faststart", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709"]
        if audio.exists() and not args.no_audio:
            cmd += ["-c:a", "aac", "-b:a", "256k", "-shortest"]
        cmd += [str(out_path)]
        ff = subprocess.Popen(cmd, stdin=subprocess.PIPE)
        start = time.time()
        for i in range(n):
            t = t0 + i / fps
            ff.stdin.write(await grab(t))
            if i % 60 == 0:
                el = time.time() - start
                print(f"frame {i}/{n}  t={t:.2f}s  {el:.0f}s elapsed, eta {el / max(i, 1) * (n - i):.0f}s", flush=True)
        ff.stdin.close()
        ff.wait()
        await browser.close()
        srv.shutdown()
        print("wrote", out_path)


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--stills", type=float, nargs="*")
    ap.add_argument("--from", dest="t_from", type=float, default=0.0)
    ap.add_argument("--to", dest="t_to", type=float, default=None)
    ap.add_argument("--fps", type=int, default=TIMELINE["fps"])
    ap.add_argument("--blur-to", type=int, default=0 if TIMELINE["outputFps"] == TIMELINE["fps"] else TIMELINE["outputFps"], help="deliver at this fps with frame-blend motion blur (0 = off)")
    ap.add_argument("--scale", type=float, default=TIMELINE.get("renderScale", 1), help="device scale factor: 2 renders true 3840×2160 from the 1920×1080 composition")
    ap.add_argument("--crf", type=int, default=16)
    ap.add_argument("--out", default=str(PROMO / "out" / "stories-promo.mp4"))
    ap.add_argument("--chrome", default=None)
    ap.add_argument("--port", type=int, default=8791)
    ap.add_argument("--no-audio", action="store_true")
    ap.add_argument("--workers", type=int, default=1, help="render in parallel Chromium processes")
    ap.add_argument("--raw", action="store_true", help=argparse.SUPPRESS)
    args = ap.parse_args()
    if args.workers > 1 and not args.stills:
        return parallel(args)
    asyncio.run(run(args))


def parallel(args: argparse.Namespace) -> None:
    fps = args.fps
    duration = TIMELINE["duration"]
    t0, t1 = args.t_from, min(args.t_to or duration, duration)
    n = int(round((t1 - t0) * fps))
    tmp = PROMO / "out" / "chunks"
    tmp.mkdir(parents=True, exist_ok=True)
    per = -(-n // args.workers)
    procs, parts = [], []
    for w in range(args.workers):
        a = w * per
        b = min(n, a + per)
        if a >= b:
            break
        part = tmp / f"part{w:02d}.mkv"
        parts.append(part)
        cmd = [sys.executable, __file__, "--raw", "--from", f"{t0 + a / fps:.6f}", "--to", f"{t0 + b / fps:.6f}", "--fps", str(fps),
               "--scale", str(args.scale), "--port", str(args.port + w + 1), "--out", str(part)]
        if args.chrome:
            cmd += ["--chrome", args.chrome]
        procs.append(subprocess.Popen(cmd))
    for pr in procs:
        pr.wait()
        if pr.returncode:
            raise SystemExit("a render worker failed")
    lst = tmp / "list.txt"
    lst.write_text("".join(f"file '{p.name}'\n" for p in parts))
    vf = []
    if args.blur_to:
        vf += [f"tmix=frames={fps // args.blur_to}:weights='1 1'", f"fps={args.blur_to}"]
    vf += ["format=yuv420p"]
    cmd = [ffmpeg_exe(), "-y", "-loglevel", "error", "-f", "concat", "-safe", "0", "-i", str(lst)]
    audio = PROMO / "out" / "mix.wav"
    use_audio = audio.exists() and not args.no_audio
    if use_audio:
        cmd += ["-ss", f"{t0}", "-t", f"{t1 - t0}", "-i", str(audio)]
    cmd += ["-vf", ",".join(vf), "-c:v", "libx264", "-preset", "slower", "-crf", str(args.crf), "-profile:v", "high", "-x264-params", "aq-mode=3:aq-strength=0.9:deblock=-1,-1:ref=5:bframes=4:psy-rd=1.0,0.15", "-pix_fmt", "yuv420p",
            "-movflags", "+faststart", "-colorspace", "bt709", "-color_primaries", "bt709", "-color_trc", "bt709"]
    if use_audio:
        cmd += ["-c:a", "aac", "-b:a", "256k", "-shortest"]
    cmd += [args.out]
    subprocess.run(cmd, check=True)
    for p in parts:
        p.unlink()
    print("wrote", args.out)


if __name__ == "__main__":
    main()
