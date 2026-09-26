#!/usr/bin/env python3
"""Rasterize the designed civilization illustrations (illustrations.js) at 2000×2500
and give them a painterly finish (bloom, canvas/brush texture, grain) so they sit next
to the library's painted artwork. Output: promo/assets/img/designed/<name>.jpg

Usage: python3 promo/scripts/make_illustrations.py
Needs: playwright (Chromium), pillow, numpy
"""
from __future__ import annotations

import asyncio
import functools
import http.server
import os
import threading
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

PROMO = Path(__file__).resolve().parent.parent
OUT = PROMO / "assets" / "img" / "designed"
NAMES = ["kudus", "istanbul", "buhara", "yesevi", "kasgarli"]


def chrome() -> str | None:
    base = Path(os.environ.get("PLAYWRIGHT_BROWSERS_PATH", "/opt/pw-browsers"))
    for c in sorted(base.glob("chromium-*/chrome-linux/chrome"), reverse=True):
        return str(c)
    return None


def texture(w: int, h: int, seed: int) -> np.ndarray:
    """Canvas weave + soft brush streaks, centred on 0."""
    rng = np.random.default_rng(seed)
    t = np.zeros((h, w))
    for scale, amp in ((6, 0.5), (24, 0.8), (90, 1.0), (300, 0.7)):
        n = rng.standard_normal((h // scale + 2, w // scale + 2))
        img = Image.fromarray(((n - n.min()) / (np.ptp(n) + 1e-9) * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC)
        t += (np.asarray(img, float) / 255 - 0.5) * amp
    streak = rng.standard_normal((h, w // 40 + 2))
    streak = np.asarray(Image.fromarray(((streak - streak.min()) / np.ptp(streak) * 255).astype(np.uint8)).resize((w, h), Image.BICUBIC).filter(ImageFilter.GaussianBlur(3)), float) / 255 - 0.5
    return t / 3 + streak * 0.5


def finish(png: Path, out: Path, seed: int) -> None:
    im = Image.open(png).convert("RGB")
    a = np.asarray(im, float) / 255
    h, w, _ = a.shape
    lum = a.mean(2, keepdims=True)
    bright = np.clip((lum - 0.62) / 0.38, 0, 1) * a
    bloom = np.asarray(Image.fromarray((bright * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(w / 40)), float) / 255
    a = 1 - (1 - a) * (1 - bloom * 0.55)                       # screen
    tex = texture(w, h, seed)[..., None]
    a = np.clip(a + tex * 0.07 * (0.35 + 0.65 * (1 - lum)), 0, 1)  # paint/canvas texture, stronger in shadows
    grain = np.random.default_rng(seed + 1).standard_normal((h, w, 1)) * 0.012
    a = np.clip(a + grain, 0, 1)
    a = a ** np.array([0.98, 1.0, 1.04])                        # warm grade
    Image.fromarray((a * 255).astype(np.uint8)).save(out, quality=92, optimize=True, progressive=True)


async def main() -> None:
    from playwright.async_api import async_playwright
    OUT.mkdir(parents=True, exist_ok=True)

    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass

    srv = http.server.ThreadingHTTPServer(("127.0.0.1", 8811), functools.partial(Quiet, directory=str(PROMO)))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    page_html = "<html><body style='margin:0'><div id='c' style='width:1000px;height:1250px'></div><script src='illustrations.js'></script></body></html>"
    (PROMO / "_ill.html").write_text(page_html)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path=chrome(), args=["--no-sandbox"])
        pg = await b.new_page(viewport={"width": 1000, "height": 1250}, device_scale_factor=2)
        await pg.goto("http://127.0.0.1:8811/_ill.html")
        for i, n in enumerate(NAMES):
            await pg.evaluate(f"document.getElementById('c').innerHTML = ILLUSTRATIONS.{n}(); document.querySelector('#c svg').style.cssText='width:1000px;height:1250px;display:block'")
            await pg.wait_for_timeout(300)
            tmp = OUT / f"_{n}.png"
            await pg.screenshot(path=str(tmp), clip={"x": 0, "y": 0, "width": 1000, "height": 1250})
            finish(tmp, OUT / f"{n}.jpg", 100 + i)
            tmp.unlink()
            print("wrote", OUT / f"{n}.jpg")
        await b.close()
    (PROMO / "_ill.html").unlink()
    srv.shutdown()


if __name__ == "__main__":
    asyncio.run(main())
