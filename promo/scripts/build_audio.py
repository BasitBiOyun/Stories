#!/usr/bin/env python3
"""Build the promo soundtrack: an original procedural score + subtle sound design.

No voice, no speech, no third-party samples: every sound is synthesized here, so
the soundtrack is license-clean. The score is written on a 90 BPM grid and its
sections follow the film (promo/timeline.json); sound-design cues mirror the motion
cues in film.js.

Output: promo/out/mix.wav (48 kHz stereo, loudness-normalized to -14 LUFS, -1 dBTP)
        promo/out/stems/{music,sfx}.wav

Usage:  python3 promo/scripts/build_audio.py
Needs:  numpy, scipy, soundfile, imageio-ffmpeg (for loudnorm)
"""
from __future__ import annotations

import json
import subprocess
from pathlib import Path

import numpy as np
import soundfile as sf
from scipy import signal

PROMO = Path(__file__).resolve().parent.parent
TL = json.loads((PROMO / "timeline.json").read_text())
SR = 48000
DUR = TL["duration"] + 1.5
N = int(DUR * SR)
BEAT = 60.0 / TL["bpm"]          # 0.6667 s
rng = np.random.default_rng(11)


def b2t(beat: float) -> float:
    return beat * BEAT


def t_axis(n: int) -> np.ndarray:
    return np.arange(n) / SR


def midi(m: float) -> float:
    return 440.0 * 2 ** ((m - 69) / 12)


def stereo(x: np.ndarray, pan: float = 0.0) -> np.ndarray:
    l, r = np.cos((pan + 1) * np.pi / 4), np.sin((pan + 1) * np.pi / 4)
    return np.stack([x * l, x * r], 1) * 1.414


def place(buf: np.ndarray, x: np.ndarray, at: float, gain: float = 1.0) -> None:
    i = int(round(at * SR))
    if i >= len(buf) or i + len(x) <= 0:
        return
    if i < 0:
        x, i = x[-i:], 0
    x = x[: len(buf) - i]
    if x.ndim == 1:
        x = stereo(x)
    buf[i: i + len(x)] += x * gain


def lp(x, f, order=2):
    b, a = signal.butter(order, min(f, SR / 2 * 0.95) / (SR / 2), "low")
    return signal.lfilter(b, a, x, axis=0)


def hp(x, f, order=2):
    b, a = signal.butter(order, f / (SR / 2), "high")
    return signal.lfilter(b, a, x, axis=0)


def bp(x, lo, hi, order=2):
    b, a = signal.butter(order, [lo / (SR / 2), min(hi, SR / 2 * 0.95) / (SR / 2)], "band")
    return signal.lfilter(b, a, x, axis=0)


def reverb(x: np.ndarray, seconds=2.8, wet=0.35, tone=6000, pre=0.02) -> np.ndarray:
    n = int(seconds * SR)
    tt = t_axis(n)
    if x.ndim == 1:
        x = stereo(x)
    out = np.zeros((len(x) + n - 1, 2))
    for ch in range(2):
        ir = rng.standard_normal(n) * np.exp(-tt * 6.9 / seconds)
        ir = lp(ir, tone)
        ir[: int(pre * SR)] = 0
        ir /= np.sqrt(np.sum(ir ** 2))
        out[:, ch] = signal.fftconvolve(x[:, ch], ir)
    return x * (1 - wet) + out[: len(x)] * wet * 3.2


def env(n, a=0.01, d=0.2, s=0.7, r=0.3):
    e = np.full(n, s, dtype=float)
    na, nd, nr = int(a * SR), int(d * SR), int(r * SR)
    na = max(1, min(na, n))
    e[:na] = np.linspace(0, 1, na)
    nd = min(nd, n - na)
    if nd > 0:
        e[na: na + nd] = np.linspace(1, s, nd)
    nr = min(nr, n)
    if nr > 0:
        e[-nr:] *= np.linspace(1, 0, nr) ** 1.5
    return e


# ------------------------------------------------------------------ instruments
def piano(m: float, dur: float = 2.5, vel: float = 0.8) -> np.ndarray:
    f0 = midi(m)
    n = int(dur * SR)
    tt = t_axis(n)
    out = np.zeros(n)
    B = 0.00035
    for k in range(1, 12):
        fk = f0 * k * np.sqrt(1 + B * k * k)
        if fk > SR / 2 * 0.9:
            break
        amp = (1 / k ** 1.25) * (0.6 + 0.4 * vel)
        dec = 1.2 + 0.55 * k + f0 / 500
        for det in (-0.35, 0.35):  # two strings per note -> gentle beating
            out += amp * 0.5 * np.sin(2 * np.pi * fk * (1 + det / 1200) * tt + rng.uniform(0, 6.28)) * np.exp(-tt * dec)
    hammer = hp(rng.standard_normal(n), 1800) * np.exp(-tt * 180) * 0.08
    out = (out + hammer) * (1 - np.exp(-tt * 1400))
    out *= np.minimum(1, (dur - tt) / 0.25).clip(0, 1)
    return lp(out, 2500 + 5000 * vel) * vel


def strings(m: float, dur: float, bright: float = 0.5) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    vib = 1 + 0.0035 * np.sin(2 * np.pi * 5.2 * tt + rng.uniform(0, 6)) * np.clip(tt / 0.8, 0, 1)
    out = np.zeros(n)
    for d in (-9, -4, 0, 4, 9):  # cents — ensemble
        f = midi(m) * 2 ** (d / 1200)
        ph = np.cumsum(f * vib) / SR
        for k in range(1, 14):
            if f * k > 9000:
                break
            out += (1 / k) * np.sin(2 * np.pi * k * ph + rng.uniform(0, 6)) * np.exp(-(k - 1) * (1 - bright) * 0.5)
    out = lp(out / 5, 1400 + 3000 * bright)
    return out * env(n, 0.45, 0.3, 0.9, 0.9)


def pad(m: float, dur: float, bright: float = 0.35) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    out = np.zeros(n)
    for d in (-12, 0, 12):
        f = midi(m) * 2 ** (d / 1200)
        for k in range(1, 9):
            out += (1 / k) * np.exp(-(k - 1) * (1 - bright)) * np.sin(2 * np.pi * f * k * tt + rng.uniform(0, 6))
    return lp(out / 4, 900 + 2200 * bright) * env(n, 1.2, 0.5, 0.85, 1.6)


def pluck(m: float, dur: float = 1.0) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    f = midi(m)
    x = (np.sin(2 * np.pi * f * tt) + 0.35 * np.sin(2 * np.pi * 2 * f * tt) * np.exp(-tt * 9)
         + 0.14 * np.sin(2 * np.pi * 3.01 * f * tt) * np.exp(-tt * 14))
    return x * np.exp(-tt * 4.5) * (1 - np.exp(-tt * 900))


def bass(m: float, dur: float) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    f = midi(m)
    x = np.sin(2 * np.pi * f * tt) + 0.25 * np.sin(2 * np.pi * 2 * f * tt) + 0.08 * np.sin(2 * np.pi * 3 * f * tt)
    return np.tanh(x * 1.3) * env(n, 0.012, 0.25, 0.75, 0.12)


def kick(level=1.0):
    n = int(0.6 * SR); tt = t_axis(n)
    f = 46 + 70 * np.exp(-tt * 32)
    x = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 6.5)
    click = hp(rng.standard_normal(n), 3000) * np.exp(-tt * 300) * 0.15
    return np.tanh((x + click) * 1.6) * 0.8 * level


def snare():
    n = int(0.7 * SR); tt = t_axis(n)
    noise = bp(rng.standard_normal(n), 900, 9000) * np.exp(-tt * 13)
    tone = np.sin(2 * np.pi * 185 * tt) * np.exp(-tt * 22)
    return (noise * 0.7 + tone * 0.5) * 0.7


def hat(open_=False):
    n = int((0.35 if open_ else 0.08) * SR); tt = t_axis(n)
    return hp(rng.standard_normal(n), 7000) * np.exp(-tt * (12 if open_ else 60)) * 0.5


def tom(f0=90):
    n = int(0.8 * SR); tt = t_axis(n)
    f = f0 * (1 + 0.6 * np.exp(-tt * 18))
    return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 6) * 0.9


def cymbal(rev=False, dur=2.5):
    n = int(dur * SR); tt = t_axis(n)
    x = hp(rng.standard_normal(n), 4500) * np.exp(-tt * 2.2) * 0.35
    x = x + bp(rng.standard_normal(n), 3000, 12000) * np.exp(-tt * 1.4) * 0.15
    if rev:
        x = x[::-1] * np.linspace(0, 1, n) ** 2
    return x


# ------------------------------------------------------------------ score
# (start_beat, end_beat, bass_root, chord tones)
CH = [
    (0, 7, 38, [50, 57, 62, 69]),                 # intro: D + A drone
    (7, 15, 38, [50, 53, 57, 60, 64]),            # Dm9
    (15, 23, 34, [50, 53, 57, 58, 62]),           # Bbmaj7
    (23, 27, 31, [50, 53, 55, 58, 62]),           # Gm9
    (27, 31, 33, [49, 52, 57, 61, 64]),           # A7sus -> A
    (31, 35, 38, [50, 53, 57, 60, 64]),           # Dm9
    (35, 39, 34, [50, 53, 57, 58, 62]),           # Bbmaj7
    (39, 42, 29, [48, 53, 57, 60, 64]),           # F(add9)
    (42, 44, 36, [48, 52, 55, 60, 62]),           # C(add9)
    (44, 48, 38, [50, 53, 57, 60, 64]),           # Dm9
    (48, 52, 34, [50, 53, 57, 58, 62]),           # Bbmaj7
    (52, 56, 29, [48, 53, 57, 60, 64]),           # F(add9)
    (56, 60, 36, [48, 52, 55, 60, 62]),           # C(add9)
    (60, 62, 34, [50, 53, 57, 58, 62]),           # Bb
    (62, 64, 36, [48, 52, 55, 60, 64]),           # C
    (64, 68, 33, [48, 53, 57, 60, 64]),           # F/A (breakdown)
    (68, 73, 34, [50, 53, 57, 58, 62, 65]),       # Bbmaj7
    (73, 77, 31, [50, 53, 55, 58, 62]),           # Gm9
    (77, 82, 33, [52, 57, 61, 64, 67]),           # A7sus -> A (pull)
    (82, 92, 38, [50, 54, 57, 62, 64, 66, 69]),   # D(add9) — resolution
]


def chord_at(beat):
    for c in CH:
        if c[0] <= beat < c[1]:
            return c
    return CH[-1]


def build_music() -> dict[str, np.ndarray]:
    st = {k: np.zeros((N, 2)) for k in ("pad", "str", "pno", "arp", "bass", "drm")}
    # --- pads (whole piece) and strings (from the chapter loop on)
    for a, b, root, tones in CH:
        dur = b2t(b - a) + 1.8
        for m in tones:
            place(st["pad"], pad(m - 12 if m > 60 else m, dur, 0.28 if a < 7 else 0.36), b2t(a) - 0.2, 0.05)
        if a >= 31:
            lvl = 0.035 if a < 44 else 0.05 if a < 64 else 0.03 if a < 73 else 0.05
            for j, m in enumerate(tones[-3:]):
                place(st["str"], stereo(strings(m, dur, 0.45), (j - 1) * 0.4), b2t(a) - 0.1, lvl)
    # --- piano motif (enters with the story page), sparse in the breakdown, resolves in the finale
    offs = [0, 1, 1.5, 2, 3]
    for bar_beat in list(range(11, 31, 4)) + list(range(44, 64, 4)):
        a, b, root, tones = chord_at(bar_beat)
        up = sorted({t + 12 for t in tones if t >= 50})
        seq = [up[0], up[2 % len(up)], up[3 % len(up)], up[-1], up[2 % len(up)]]
        for off, m in zip(offs, seq):
            place(st["pno"], stereo(piano(m, 2.2, 0.55 if bar_beat < 44 else 0.7), 0.15), b2t(bar_beat + off), 0.11)
    for k, (bt, m) in enumerate([(64, 69), (65.5, 72), (66, 74), (67, 72), (68, 70), (69.5, 69), (70, 67), (71, 65), (72, 64)]):
        place(st["pno"], stereo(piano(m, 3.0, 0.65), -0.1), b2t(bt), 0.1)
        place(st["pno"], stereo(piano(m - 24, 3.0, 0.5), 0.1), b2t(bt), 0.05 if k % 2 == 0 else 0)
    for bt, m in [(82, 66), (82, 74), (83, 78), (84, 76), (85.5, 74), (86, 81)]:
        place(st["pno"], stereo(piano(m, 4.0, 0.75), 0.05), b2t(bt), 0.09)
    # --- kalimba-like arpeggio (eighths)
    pat = [0, 2, 3, 4, 3, 2, 4, 1]
    k = 0
    bt = 7.0
    while bt < 82:
        if 64 <= bt < 73:
            bt += 0.5; continue
        a, b, root, tones = chord_at(bt)
        up = sorted(tt + 12 for tt in tones)
        m = up[pat[k % len(pat)] % len(up)]
        ramp = np.interp(bt, [7, 15, 31, 44, 64, 73, 82], [0.3, 0.7, 0.9, 1.0, 1.0, 0.6, 0.9])
        place(st["arp"], stereo(pluck(m, 0.9), 0.35 * np.sin(k * 0.9)), b2t(bt), 0.06 * ramp * (1.15 if k % 4 == 0 else 0.9))
        k += 1
        bt += 0.5
    # --- bass: sustained in A, pulsing eighths from the chapter loop, off in the breakdown
    for a, b, root, tones in CH:
        if a < 7 or 64 <= a < 73:
            continue
        if a < 31 or a >= 82:
            place(st["bass"], bass(root, b2t(b - a) + 0.2), b2t(a), 0.1)
        else:
            x = a
            while x < b:
                place(st["bass"], bass(root, BEAT * 0.45), b2t(x), 0.1 if (x - a) % 1 == 0 else 0.065)
                x += 0.5
    # --- drums
    d = st["drm"]
    for bt in np.arange(7, 82, 1.0):
        in_A, in_B, in_C, in_D, in_E = 7 <= bt < 31, 31 <= bt < 44, 44 <= bt < 64, 64 <= bt < 73, 73 <= bt < 82
        pos = (bt - 7) % 4
        if in_A and pos in (0, 2):
            place(d, kick(0.55), b2t(bt), 0.5)
        if (in_B or in_C) and pos in (0, 2.0):
            place(d, kick(0.8), b2t(bt), 0.55)
        if (in_B or in_C) and pos == 2:
            place(d, kick(0.5), b2t(bt + 0.5), 0.35)
        if (in_B or in_C) and pos in (1, 3):
            place(d, snare(), b2t(bt), 0.16 if in_B else 0.2)
        if in_D and pos == 0:
            place(d, kick(0.45), b2t(bt), 0.35)
        if in_E and pos in (0, 2):
            place(d, kick(0.6), b2t(bt), 0.45)
        if in_E and pos == 3 and bt > 76:
            place(d, snare(), b2t(bt), 0.12)
        if (15 <= bt < 31) or in_B or in_C or in_E:
            for h in (0.5,) if (15 <= bt < 31 or in_E) else (0.0, 0.5):
                place(d, stereo(hat(), 0.3), b2t(bt + h), 0.05 if in_C else 0.035)
        if in_C:
            place(d, stereo(hat(), -0.3), b2t(bt + 0.25), 0.018)
            place(d, stereo(hat(), -0.3), b2t(bt + 0.75), 0.018)
    for i, f0 in enumerate([120, 100, 85, 70]):                 # fills into the end-of-book section and the levels
        place(d, stereo(tom(f0), -0.4 + i * 0.25), b2t(42 + i * 0.5), 0.35)
        place(d, stereo(tom(f0), -0.4 + i * 0.25), b2t(62 + i * 0.5), 0.3)
    for at in (31, 44, 82):
        place(d, stereo(cymbal(), 0.2), b2t(at), 0.5)
    return st


# ------------------------------------------------------------------ sound design (film time, see film.js)
def whoosh(dur=0.8, lo=300, hi=5000, peak=0.6, rev=False):
    n = int(dur * SR); x = rng.standard_normal(n); tt = t_axis(n) / dur
    out = np.zeros(n)
    for s in range(0, n, 480):
        p = tt[s]
        f = lo * (hi / lo) ** (np.sin(np.pi * min(p / peak, 1) / 2) if p < peak else 1 - (p - peak) / (1 - peak) * 0.5)
        out[s: s + 480] = bp(x[s: s + 480], max(40, f * 0.6), f * 1.6, 1)
    e = np.where(tt < peak, (tt / peak) ** 2, np.exp(-(tt - peak) * 6))
    y = out * e
    if rev:
        y = y[::-1]
    pan = np.linspace(-0.6, 0.6, n)
    return np.stack([y * (1 - pan) * 0.7, y * (1 + pan) * 0.7], 1)


def click(tone=2400, dur=0.06):
    n = int(dur * SR); tt = t_axis(n)
    body = np.sin(2 * np.pi * tone * tt) * np.exp(-tt * 90) + 0.6 * np.sin(2 * np.pi * tone * 0.5 * tt) * np.exp(-tt * 60)
    return body * 0.6 + hp(rng.standard_normal(n), 3000) * np.exp(-tt * 400) * 0.4


def chime(notes=(86, 93), gap=0.09):
    n = int(1.6 * SR); out = np.zeros(n)
    for j, m in enumerate(notes):
        tt = t_axis(n - int(j * gap * SR)); f = midi(m)
        s = (np.sin(2 * np.pi * f * tt) + 0.25 * np.sin(2 * np.pi * 2.76 * f * tt) * np.exp(-tt * 6)) * np.exp(-tt * 3.2)
        out[int(j * gap * SR):] += s * (1 - np.exp(-tt * 800))
    return out * 0.5


def impact(size=1.0, tone=44):
    n = int(2.5 * SR); tt = t_axis(n)
    f = tone + 70 * np.exp(-tt * 18)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * (2.2 / size))
    return np.tanh((sub + lp(rng.standard_normal(n), 900) * np.exp(-tt * 14) * 0.5) * 1.4) * 0.8


def shimmer(dur=1.8, base=86):
    n = int(dur * SR); tt = t_axis(n); out = np.zeros(n)
    for _ in range(14):
        m = base + rng.choice([0, 2, 4, 7, 9, 12, 14, 16, 19]); st = rng.uniform(0, dur * 0.55)
        out += np.sin(2 * np.pi * midi(m) * tt) * np.clip((tt - st) * 30, 0, 1) * np.exp(-np.clip(tt - st, 0, None) * 3.5) * rng.uniform(0.3, 1)
    return out * 0.12 * np.clip(tt * 4, 0, 1)


def riser(dur=2.0):
    n = int(dur * SR); tt = t_axis(n); p = tt / dur
    w = whoosh(dur, 200, 9000, 0.98)[:, 0] * 1.2
    f = 180 * 2 ** (p * 2.5)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.2 + np.sin(2 * np.pi * np.cumsum(f * 1.5) / SR) * 0.1
    return (w + tone) * p ** 2.2


def build_sfx() -> np.ndarray:
    fx = np.zeros((N, 2))
    place(fx, shimmer(2.2, 86), 0.1, 0.45)                     # star ignites
    place(fx, whoosh(1.0, 200, 3000, 0.7), 0.4, 0.08)         # arch draws
    place(fx, shimmer(1.2, 91), 1.05, 0.5)                    # flare
    for at in (1.6, 2.3, 2.9, 3.4, 3.8):                       # cards past the lens
        place(fx, whoosh(0.55, 400, 6000, 0.55), at - 0.3, 0.1)
    place(fx, whoosh(1.3, 150, 2500, 0.8), 3.5, 0.14)
    place(fx, impact(0.6, 50), 4.667, 0.18)
    place(fx, click(1900), 5.8, 0.22)                         # play narration
    place(fx, click(2600, 0.05), 7.4, 0.16)                   # hotspot
    place(fx, whoosh(1.2, 250, 7000, 0.92), 9.3, 0.13)        # push into the word
    place(fx, click(2300), 10.99, 0.28)                       # tap "Messenger"
    place(fx, chime((93,), 0), 11.0, 0.08)
    place(fx, whoosh(0.9, 300, 5000, 0.6), 13.0, 0.08)
    place(fx, click(2000), 16.1, 0.3)                         # EN -> العربية
    place(fx, whoosh(1.2, 180, 8000, 0.5), 16.3, 0.16)        # light seam (RTL)
    place(fx, shimmer(1.6, 88), 16.5, 0.4)
    place(fx, whoosh(0.8, 400, 6000, 0.3), 20.3, 0.1)
    place(fx, whoosh(0.7, 200, 2500, 0.6), 20.85, 0.08)       # Quick Challenge enters
    place(fx, click(2400), 23.1, 0.3)                         # answer
    place(fx, chime((86, 93)), 23.15, 0.22)                   # correct
    place(fx, whoosh(0.8, 250, 3000, 0.5), 24.4, 0.08)        # Language Focus rises
    place(fx, click(2200), 25.8, 0.22)                        # open activity 1
    for j in range(4):
        place(fx, click(3000 + j * 150, 0.04), 26.75 + j * 0.3 + 0.24, 0.1)   # matches
    place(fx, chime((88,), 0), 27.7, 0.1)
    place(fx, whoosh(1.4, 300, 7000, 0.5), 28.1, 0.12)        # chapter rail
    place(fx, shimmer(1.2, 91), 29.35, 0.35)                  # arch gate
    for at in (31.45, 35.45, 38.1, 40.8):                     # station moves
        place(fx, whoosh(0.55, 300, 6000, 0.6), at, 0.1)
    place(fx, click(2400), 30.45, 0.2); place(fx, click(2400), 30.95, 0.2)
    for j in range(14):
        place(fx, click(2800 + (j % 5) * 120, 0.03), 32.6 + j * 0.17, 0.08)
    for j in range(4):
        place(fx, click(2600, 0.04), 36.35 + j * 0.42, 0.12); place(fx, click(3300, 0.04), 36.5 + j * 0.42 + 0.34, 0.12)
    for j in range(4):
        place(fx, click(3100 + j * 100, 0.04), 39.05 + j * 0.33 + 0.26, 0.1)
    place(fx, click(1900), 42.0, 0.28)                        # START THE CHALLENGE
    place(fx, whoosh(0.8, 400, 6000, 0.3), 42.55, 0.1)
    for at, m in ((44.0, 0), (44.667, 5), (45.333, 7)):       # A2 · B1 · B2
        place(fx, impact(0.35, 58), at - 0.02, 0.14)
        place(fx, chime((76 + m,), 0), at, 0.08)
    place(fx, shimmer(1.8, 84), 44.8, 0.25)
    place(fx, shimmer(1.0, 91), 48.67, 0.3)                   # seam
    place(fx, whoosh(0.9, 150, 2000, 0.5), 49.0, 0.1)         # teacher page
    place(fx, whoosh(0.9, 150, 2000, 0.5), 51.6, 0.1)         # student page
    for j in range(6):
        place(fx, click(2800 + j * 90, 0.03), 52.5 + j * 0.17, 0.05)
    place(fx, riser(2.2), 52.45, 0.45)
    place(fx, whoosh(0.9, 200, 4000, 0.9, rev=True), 53.8, 0.14)
    place(fx, impact(1.4, 40), 54.667, 0.6)
    place(fx, shimmer(2.6, 86), 55.4, 0.6)
    place(fx, chime((81, 86, 93), 0.12), 55.6, 0.1)
    return reverb(fx, 2.0, 0.2)


def rms_comp(x: np.ndarray, thr_db=-18, ratio=2.5, att=0.01, rel=0.2) -> np.ndarray:
    lvl = np.sqrt(np.convolve((x ** 2).mean(1), np.ones(480) / 480, mode="same") + 1e-12)
    db = 20 * np.log10(lvl)
    gr = np.minimum(0, (thr_db - db) * (1 - 1 / ratio))
    g = np.zeros_like(gr); v = 0.0
    a_, r_ = np.exp(-1 / (att * SR)), np.exp(-1 / (rel * SR))
    for i in range(len(gr)):
        c = a_ if gr[i] < v else r_
        v = c * v + (1 - c) * gr[i]; g[i] = v
    return x * (10 ** (g / 20))[:, None]


def main() -> None:
    out_dir = PROMO / "out"
    (out_dir / "stems").mkdir(parents=True, exist_ok=True)
    st = build_music()
    st["pad"] = hp(st["pad"], 240)
    st["str"] = hp(st["str"], 200)
    st["drm"] = st["drm"] * 0.62
    music = (st["pad"] * 1.0 + reverb(st["str"], 3.2, 0.4, 5000) + reverb(st["pno"], 2.6, 0.32, 7000)
             + reverb(st["arp"], 2.2, 0.42, 5000) + st["bass"] + reverb(st["drm"], 1.4, 0.18, 7000))
    music = hp(music, 40)
    music = music + 0.5 * hp(music, 3200) + 0.3 * bp(music, 900, 3000) - 0.25 * bp(music, 180, 450)  # presence / air
    sfx = build_sfx()
    tt = t_axis(N)
    fade = np.clip(tt / 0.05, 0, 1) * np.clip((TL["duration"] + 0.4 - tt) / 1.6, 0, 1)
    # arc of the piece: calm story → chapter loop → peak at the end-of-book review → breath (levels) → rise → finale
    arc = np.interp(tt, [0, 4.4, 4.9, 20.4, 20.9, 29.1, 29.6, 42.4, 43.0, 48.4, 49.0, 54.4, 54.8, 60],
                    [0.75, 0.75, 0.55, 0.6, 0.72, 0.78, 0.95, 1.0, 0.62, 0.66, 0.78, 0.92, 1.12, 1.0])
    mix = (music * arc[:, None] + sfx * 0.9) * fade[:, None]
    mix = rms_comp(mix, thr_db=-14, ratio=1.8)
    mix = np.tanh(mix * 1.2) / 1.2
    for name, s in (("music", music), ("sfx", sfx)):
        sf.write(out_dir / "stems" / f"{name}.wav", (s / (np.max(np.abs(s)) + 1e-9) * 0.9).astype(np.float32), SR)
    raw = out_dir / "mix_raw.wav"
    sf.write(raw, mix[: int((TL["duration"] + 0.1) * SR)].astype(np.float32), SR)
    try:
        import imageio_ffmpeg
        ff = imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        ff = "ffmpeg"
    subprocess.run([ff, "-y", "-loglevel", "error", "-i", str(raw), "-af", "loudnorm=I=-14:TP=-1.2:LRA=11", "-ar", str(SR), str(out_dir / "mix.wav")], check=True)
    raw.unlink()
    print("wrote", out_dir / "mix.wav")


if __name__ == "__main__":
    main()
