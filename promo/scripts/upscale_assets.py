#!/usr/bin/env python3
"""AI super-resolution for the few source images that are below 4K needs.

Real-ESRGAN x4plus (BSD-3, weights from github.com/xinntao/Real-ESRGAN releases) is run
tile-by-tile on CPU; results are downscaled with Lanczos to the target size, so detail is
synthesised by the model rather than interpolated.

    python3 promo/scripts/upscale_assets.py --weights RealESRGAN_x4plus.pth

Needs: torch, spandrel, pillow, numpy. Originals are kept in promo/assets/img/_orig/.
"""
from __future__ import annotations

import argparse
import shutil
from pathlib import Path

import numpy as np
import torch
from PIL import Image

PROMO = Path(__file__).resolve().parent.parent
IMG = PROMO / "assets" / "img"

# file → target long edge (px). Chosen from the largest on-screen size at 3840×2160.
TARGETS = {
    "civ/mekke.jpg": 5016, "civ/kudus.jpg": 5016, "civ/istanbul.jpg": 5016,
    "civ/buhara.jpg": 5016, "civ/kasgarli.jpg": 5016, "civ/yesevi.jpg": 5016,
    "abraham_b1_03.jpg": 3200, "abraham_b1_08.jpg": 3200, "yunusEmre_b1_07.jpg": 3200,
    "adam_b1_01.jpg": 6400,
}


def upscale(model, im: Image.Image, tile: int = 256, pad: int = 16) -> Image.Image:
    a = np.asarray(im.convert("RGB"), np.float32) / 255.0
    h, w, _ = a.shape
    out = np.zeros((h * 4, w * 4, 3), np.float32)
    x = torch.from_numpy(a).permute(2, 0, 1)[None]
    for y0 in range(0, h, tile):
        for x0 in range(0, w, tile):
            y1, x1 = min(y0 + tile, h), min(x0 + tile, w)
            ya, xa = max(y0 - pad, 0), max(x0 - pad, 0)
            yb, xb = min(y1 + pad, h), min(x1 + pad, w)
            with torch.inference_mode():
                r = model(x[:, :, ya:yb, xa:xb]).clamp(0, 1)[0].permute(1, 2, 0).numpy()
            oy, ox = (y0 - ya) * 4, (x0 - xa) * 4
            out[y0 * 4:y1 * 4, x0 * 4:x1 * 4] = r[oy:oy + (y1 - y0) * 4, ox:ox + (x1 - x0) * 4]
    return Image.fromarray((out * 255 + 0.5).astype(np.uint8))


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--weights", required=True)
    ap.add_argument("--only", nargs="*")
    args = ap.parse_args()
    from spandrel import ModelLoader
    torch.set_num_threads(max(1, torch.get_num_threads()))
    model = ModelLoader().load_from_file(args.weights).model.eval()
    orig = IMG / "_orig"
    for rel, target in TARGETS.items():
        if args.only and rel not in args.only:
            continue
        src = orig / rel
        dst = IMG / rel
        if not src.exists():
            src.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(dst, src)
        im = Image.open(src).convert("RGB")
        if max(im.size) >= target:
            print("skip", rel, im.size)
            continue
        # upscale ×4 (in passes of ×4 until big enough), then Lanczos to the target
        big = im
        while max(big.size) < target:
            big = upscale(model, big)
        s = target / max(big.size)
        big = big.resize((round(big.width * s), round(big.height * s)), Image.LANCZOS)
        big.save(dst, quality=94, optimize=True, progressive=True, subsampling=0)
        print("upscaled", rel, im.size, "->", big.size, flush=True)


if __name__ == "__main__":
    main()
