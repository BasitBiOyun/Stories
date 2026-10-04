#!/usr/bin/env python3
"""Build the promo soundtrack: an original procedural score + subtle sound design.

Music and sound design are synthesized here (no third-party samples). The only voice is two short
excerpts of the app's own chapter-1 narration (promo/assets/audio/narration_*.wav). The score is written on a 90 BPM grid and its
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
V8D = TL.get("v8duration", TL["duration"])   # the v8 film; the v10 inserts are spliced in afterwards
DUR = V8D + 1.5
N = int(DUR * SR)                      # sound design and voice: v8 time, spliced around the inserts afterwards
NF = int((TL["duration"] + 1.5) * SR)  # the score: written straight in film time
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


# ------------------------------------------------------------------ score (v11)
# A new score written for the whole v11 film, in film time, on one 90 BPM grid (no repeated or
# looped bars). Each section follows what is on screen and has its own energy: the music thins
# out and fills up again, switches between half-time, straight and double-time drum feels, and
# moves between D Hicaz colour (opener, places, finale) and D minor (the app's features).
def ney(m: float, dur: float) -> np.ndarray:
    """Breathy end-blown flute: soft fundamental, few harmonics, breath noise, slow vibrato."""
    n = int(dur * SR); tt = t_axis(n)
    vib = 1 + 0.006 * np.sin(2 * np.pi * 5.0 * tt) * np.clip((tt - 0.25) / 0.6, 0, 1)
    ph = np.cumsum(midi(m) * vib) / SR
    tone = np.sin(2 * np.pi * ph) + 0.22 * np.sin(4 * np.pi * ph) + 0.08 * np.sin(6 * np.pi * ph)
    breath = bp(rng.standard_normal(n), midi(m) * 0.9, midi(m) * 3.2) * 0.35
    return (tone + breath) * env(n, 0.18, 0.2, 0.85, 0.4)


def oud(m: float, dur: float = 1.4) -> np.ndarray:
    n = int(dur * SR); tt = t_axis(n); f = midi(m); x = np.zeros(n)
    for k in range(1, 9):
        x += (1 / k) * np.sin(2 * np.pi * f * k * tt + rng.uniform(0, 6)) * np.exp(-tt * (3 + k * 1.6))
    return lp(x * (1 - np.exp(-tt * 1500)), 3800)


def frame_drum(low=True):
    n = int(0.6 * SR); tt = t_axis(n)
    if low:
        f = 70 + 40 * np.exp(-tt * 25)
        return np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 7) * 0.9 + bp(rng.standard_normal(n), 200, 900) * np.exp(-tt * 30) * 0.2
    return bp(rng.standard_normal(n), 1200, 6000) * np.exp(-tt * 28) * 0.5 + np.sin(2 * np.pi * 330 * tt) * np.exp(-tt * 40) * 0.2


def doum():
    n = int(0.7 * SR); tt = t_axis(n)
    f = 82 + 55 * np.exp(-tt * 30)
    body = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 5.5)
    return np.tanh(body * 1.4 + bp(rng.standard_normal(n), 150, 700) * np.exp(-tt * 40) * 0.25) * 0.9


def tek(level=1.0):
    n = int(0.25 * SR); tt = t_axis(n)
    ring = np.sin(2 * np.pi * 620 * tt) * np.exp(-tt * 45) * 0.35 + np.sin(2 * np.pi * 1180 * tt) * np.exp(-tt * 60) * 0.2
    return (bp(rng.standard_normal(n), 1500, 9000) * np.exp(-tt * 55) * 0.7 + ring) * level


def clap():
    n = int(0.4 * SR); tt = t_axis(n); x = np.zeros(n)
    for d in (0, 0.011, 0.023):
        i = int(d * SR); x[i:] += bp(rng.standard_normal(n - i), 900, 6000) * np.exp(-t_axis(n - i) * (60 if d < 0.02 else 14))
    return x * 0.5


def shaker():
    n = int(0.09 * SR); tt = t_axis(n)
    return hp(rng.standard_normal(n), 5500) * np.sin(np.pi * np.clip(tt / 0.09, 0, 1)) ** 2 * 0.35


def taiko():
    n = int(1.6 * SR); tt = t_axis(n)
    f = 52 + 50 * np.exp(-tt * 14)
    return np.tanh((np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * 3.2) + lp(rng.standard_normal(n), 1200) * np.exp(-tt * 18) * 0.5) * 1.8) * 0.9


def spic(m: float, dur=0.22):
    """Short bowed note (spiccato strings)."""
    n = int(dur * SR); tt = t_axis(n); out = np.zeros(n)
    for d in (-7, 0, 7):
        f = midi(m) * 2 ** (d / 1200)
        for k in range(1, 10):
            out += (1 / k) * np.sin(2 * np.pi * f * k * tt + rng.uniform(0, 6))
    return lp(out / 3, 3200) * np.exp(-tt * 14) * (1 - np.exp(-tt * 400))


def snare_roll(dur, gain_from=0.05, gain_to=1.0):
    n = int(dur * SR); out = np.zeros(n); t = 0.0
    while t < dur:
        p = t / dur
        g = gain_from + (gain_to - gain_from) * p ** 1.6
        s = snare()[: int(0.15 * SR)] * g
        i = int(t * SR); m = min(len(s), n - i); out[i:i + m] += s[:m]
        t += lerp_(0.17, 0.045, p ** 0.8)
    return out


def lerp_(a, b, p):
    return a + (b - a) * p


# chords: (bass root, tones) — D minor world and D Hicaz world
Dm, Bb, C, A7, Gm, F, Dh, Eb, Cm, Asus = (
    (38, [50, 53, 57, 62, 65]), (34, [50, 53, 58, 62, 65]), (36, [48, 52, 55, 60, 64]), (33, [49, 52, 55, 57, 61, 64]),
    (31, [50, 55, 58, 62, 67]), (29, [48, 53, 57, 60, 65]), (38, [50, 54, 57, 62, 66]), (39, [51, 55, 58, 63, 67]),
    (36, [48, 51, 55, 60, 63]), (33, [50, 52, 57, 62, 64]))
HIC = [62, 63, 66, 67, 69, 70, 72, 74, 75, 78, 79, 81]   # D Eb F# G A Bb C D …

# sections: (name, start s, end s, chord cycle, energy 0..1 at start/end)
SECTIONS = [
    ("intro", 0.0, 18.667, [Dh, Dh, Gm, Dh], (0.25, 0.6)),
    ("hook", 18.667, 23.333, [A7, Dh], (0.7, 0.7)),
    ("roles", 23.333, 39.333, [Dm, Bb, C, A7], (0.45, 0.6)),
    ("story", 39.333, 62.667, [Dm, Bb, Gm, A7], (0.35, 0.45)),
    ("chapter", 62.667, 78.667, [Dm, Bb, F, C], (0.55, 0.8)),
    ("ican", 78.667, 89.333, [Bb, F, C, Dm], (0.8, 0.85)),
    ("group", 89.333, 97.333, [Gm, Bb, A7, A7], (0.6, 0.7)),
    ("peak", 97.333, 115.333, [Dm, Bb, F, C, Dm, Bb, Gm, A7], (0.9, 1.0)),
    ("break", 115.333, 124.0, [Bb, F, Gm, Asus], (0.3, 0.35)),
    ("levels", 124.0, 130.667, [Dm, Bb, C], (0.55, 0.7)),
    ("self", 130.667, 138.667, [F, C, Bb, F], (0.45, 0.5)),
    ("teach", 138.667, 149.333, [Dm, Bb, F, C], (0.7, 0.75)),
    ("places", 149.333, 157.333, [Dh, Cm, Dh], (0.6, 0.65)),
    ("offline", 157.333, 168.0, [Gm, Dm, Bb, A7], (0.5, 0.75)),
    ("pdf", 168.0, 178.667, [Dm, Bb, C, A7], (0.75, 0.95)),
    ("guides", 178.667, 186.0, [Bb, C, Asus], (0.95, 1.0)),
    ("finale", 186.0, 194.0, [Dh, Dh], (1.0, 0.6)),
]
BAR = 4 * BEAT


def build_music() -> dict[str, np.ndarray]:
    st = {k: np.zeros((NF, 2)) for k in ("pad", "str", "pno", "arp", "bass", "drm", "eth", "fx")}

    def bars(a, b):
        t = a
        while t < b - 0.3:
            yield t, min(t + BAR, b)
            t += BAR

    for name, a, b, cyc, (e0, e1) in SECTIONS:
        for k, (t0, t1) in enumerate(bars(a, b)):
            root, tones = cyc[k % len(cyc)]
            p = (t0 - a) / max(b - a, 1e-6)
            e = e0 + (e1 - e0) * p
            dur = t1 - t0
            last = t1 >= b - 0.01
            hic = name in ("intro", "hook", "places", "finale")
            # --- harmony bed
            for m in tones[:4]:
                place(st["pad"], pad(m - 12 if m > 60 else m, dur + 1.2, 0.25 + 0.2 * e), t0 - 0.05, 0.035 + 0.02 * e)
            if name not in ("intro",) or k >= 3:
                for j, m in enumerate(tones[-3:]):
                    place(st["str"], stereo(strings(m, dur + 0.6, 0.35 + 0.35 * e), (j - 1) * 0.45), t0 - 0.08, 0.018 + 0.03 * e)
            # --- bass
            if name not in ("intro", "break") or (name == "intro" and k >= 4):
                if name in ("story", "self", "hook", "group"):
                    place(st["bass"], bass(root, dur * 0.95), t0, 0.09)
                else:
                    pat = [0, 1.5, 2, 3, 3.5] if e > 0.7 else [0, 1.5, 2.5]
                    for x in pat:
                        place(st["bass"], bass(root + (12 if x == 3.5 else 0), BEAT * 0.55), t0 + x * BEAT, 0.1 if x in (0, 2) else 0.07)
            # --- drums: feel depends on the section
            d = st["drm"]
            def hit(snd, beat, g, pan=0.0):
                place(d, stereo(snd, pan), t0 + beat * BEAT, g)
            if name == "intro":
                if k >= 2:
                    for x in (0, 1, 2, 3):
                        hit(frame_drum(True), x, 0.11 if x % 2 == 0 else 0.06, -0.1)
                        hit(frame_drum(False), x + 0.5, 0.04 + 0.03 * e, 0.2)
                if k >= 5:
                    for x in (1.75, 3.25, 3.75):
                        hit(tek(0.6), x, 0.05, 0.3)
            elif name == "hook":
                hit(taiko(), 0, 0.35); hit(doum(), 2.5, 0.25); hit(taiko(), 3, 0.2)
            elif name in ("roles", "chapter", "ican", "teach", "pdf", "levels", "offline", "guides", "peak"):
                # maqsum: D T . T D . T .  (+ fills when the energy is high)
                for x in (0, 2):
                    hit(doum(), x, 0.32 + 0.12 * e)
                for x in (0.5, 1.5, 3):
                    hit(tek(), x, 0.12 + 0.08 * e, 0.15)
                if e > 0.62:
                    for x in (1, 2.5, 3.5):
                        hit(tek(0.7), x, 0.07 + 0.05 * e, -0.2)
                    hit(clap(), 1, 0.1 * e); hit(clap(), 3, 0.12 * e)
                if e > 0.75 or name == "peak":
                    for x in np.arange(0, 4, 0.25):
                        hit(shaker(), x, (0.05 if x % 0.5 else 0.08) * e, 0.35)
                if name == "peak" and k % 2 == 1:     # double-time darbuka run
                    for x in np.arange(2, 4, 0.25):
                        hit(tek(0.8), x, 0.08 + 0.04 * (x - 2), 0.1 * np.sin(x * 5))
                if name == "offline" and k == 0:
                    pass
                if last and name in ("chapter", "ican", "peak", "teach"):
                    for i, f0 in enumerate([120, 100, 85, 70]):
                        hit(tom(f0), 2 + i * 0.5, 0.22, -0.4 + i * 0.25)
            elif name == "group":                     # half-time: the tempo seems to drop
                hit(doum(), 0, 0.38); hit(clap(), 2, 0.16); hit(tek(0.7), 3.5, 0.08)
                for x in np.arange(0, 4, 0.5):
                    hit(shaker(), x, 0.05, 0.3)
            elif name == "self":
                hit(doum(), 0, 0.22); hit(tek(0.6), 1.5, 0.07); hit(doum(), 2.5, 0.16); hit(tek(0.6), 3, 0.08)
            elif name == "story":
                if k >= 3:
                    hit(doum(), 0, 0.18); hit(tek(0.5), 2, 0.06)
            elif name == "places":
                for x in (0, 1, 2, 3):
                    hit(frame_drum(True), x, 0.12 if x % 2 == 0 else 0.07, -0.1)
                    hit(frame_drum(False), x + 0.5, 0.06, 0.2)
                hit(tek(0.6), 3.75, 0.06)
            # --- melodic layers
            up = sorted(tt + 12 for tt in tones)
            if name in ("roles", "story", "self", "offline", "break") or (name == "chapter" and k < 2):
                pat = [0, 2, 3, 4, 3, 2, 4, 1]
                for i in range(8):
                    m = up[pat[i] % len(up)]
                    place(st["arp"], stereo(pluck(m, 0.9), 0.35 * np.sin((k * 8 + i) * 0.9)), t0 + i * 0.5 * BEAT, (0.035 + 0.04 * e) * (1.15 if i % 4 == 0 else 0.9))
            if name in ("chapter", "ican", "peak", "teach", "pdf", "guides", "levels", "offline") and not (name == "chapter" and k < 2) and not (name == "offline" and k < 2):
                step = 0.25 if e > 0.78 else 0.5
                lo = [tones[0] - 12, tones[1] - 12, tones[0] - 12, tones[2] - 12]
                for i, x in enumerate(np.arange(0, 4, step)):
                    place(st["str"], stereo(spic(lo[i % 4] + 12), -0.3 + 0.6 * ((i % 2))), t0 + x * BEAT, (0.045 if step == 0.5 else 0.035) * (1.3 if i % 4 == 0 else 1) * e)
            if name in ("roles", "ican", "break", "self", "teach") or (name == "story" and k % 2 == 0):
                offs = [0, 1, 1.5, 2, 3]
                seq = [up[0], up[2 % len(up)], up[3 % len(up)], up[-1], up[2 % len(up)]]
                for off, m in zip(offs, seq):
                    place(st["pno"], stereo(piano(m, 2.2, 0.5 + 0.25 * e), 0.15), t0 + off * BEAT, 0.08)
            # ney theme: in the Hicaz sections and over the peak and the guides
            if hic or name in ("peak", "guides") and k % 2 == 0:
                theme = [(0, 4, 1.5), (1.5, 5, 0.5), (2, 4, 1.0), (3, 3, 1.0)] if k % 2 == 0 else [(0, 2, 1.0), (1, 3, 0.5), (1.5, 4, 1.5), (3, 1, 1.0)]
                if name in ("peak", "guides"):
                    theme = [(0, 7, 1.0), (1, 6, 0.5), (1.5, 5, 0.5), (2, 4, 1.5), (3.5, 5, 0.5)]
                lvl = 0.06 if name != "intro" or k >= 1 else 0.05
                for bt, idx, ln in theme:
                    if name == "finale" and k > 0:
                        break
                    place(st["eth"], stereo(ney(HIC[idx], ln * BEAT + 0.35), -0.15), t0 + bt * BEAT, lvl)
                if name in ("intro", "places"):
                    for bt, idx in [(0.5, 0), (1.0, 1), (1.5, 2), (2.5, 4), (3.0, 3), (3.5, 2)]:
                        place(st["eth"], stereo(oud(HIC[idx] - 12), 0.25), t0 + bt * BEAT, 0.045)
    # transitions: cymbal swells into the big sections, a snare-roll crescendo into the guides and the finale
    for at in (18.667, 62.667, 97.333, 124.0, 138.667, 178.667):
        place(st["fx"], stereo(cymbal(rev=True, dur=1.6), 0.2), at - 1.6, 0.35)
        place(st["fx"], stereo(cymbal(), -0.2), at, 0.22)
    place(st["drm"], stereo(snare_roll(4.0, 0.03, 0.4), 0.0), 178.667 - 4.0, 0.3)
    place(st["drm"], stereo(snare_roll(2.6, 0.05, 0.5), 0.0), 186.0 - 2.6, 0.3)
    for at in (97.333, 186.0):
        place(st["drm"], stereo(taiko(), 0), at, 0.45)
    # finale: resolution on D with the melody once more
    for bt, m in [(0, 66), (0, 74), (1, 78), (2, 76), (3.5, 74), (4, 81), (6, 78), (7, 74)]:
        place(st["pno"], stereo(piano(m, 4.0, 0.75), 0.05), 186.0 + bt * BEAT, 0.09)
    return st


def score() -> np.ndarray:
    st = build_music()
    st["pad"] = hp(st["pad"], 220)
    st["str"] = hp(st["str"], 120)
    st["eth"] = hp(st["eth"], 60)
    music = (st["pad"] + reverb(st["str"], 2.6, 0.32, 6000) + reverb(st["pno"], 2.4, 0.3, 7000)
             + reverb(st["arp"], 2.0, 0.38, 5500) + st["bass"] + reverb(st["drm"] * 0.75, 1.1, 0.14, 8000)
             + reverb(st["eth"], 2.8, 0.42, 6000) + reverb(st["fx"], 2.0, 0.3, 8000))
    music = hp(music, 38)
    music = music + 0.45 * hp(music, 3200) + 0.25 * bp(music, 900, 3000) - 0.25 * bp(music, 180, 450)
    # the offline scene starts muffled (as if the connection dropped) and opens up again
    t = t_axis(len(music))
    k0, k1 = int(157.333 * SR), int(162.67 * SR)
    seg = music[k0:k1]
    muff = lp(seg, 900)
    w = np.linspace(1, 0, k1 - k0)[:, None] ** 1.5
    music[k0:k1] = muff * w + seg * (1 - w)
    return music


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


def film_time(scene: str, clock: float) -> float:
    """Map a scene-clock time (as choreographed in film.js) to film time via timeline.json warps."""
    k = TL.get("warps", {}).get(scene)
    if not k:
        return clock
    i = 1
    while i < len(k) - 1 and clock > k[i][0]:
        i += 1
    (c0, f0), (c1, f1) = k[i - 1], k[i]
    return f0 + (clock - c0) * (f1 - f0) / (c1 - c0)


def build_sfx() -> np.ndarray:
    fx = np.zeros((N, 2))
    def at(scene, clock, snd, gain):
        place(fx, snd, film_time(scene, clock), gain)
    # S0 — civilization opener (its own clock is film time)
    at("s0", 0.2, shimmer(2.4, 84), 0.35)
    for i in range(8):                                        # each stop takes focus
        tt = 1.7 + i * 1.7
        at("s0", tt - 0.55, whoosh(0.9, 250, 4200, 0.62), 0.07)
        at("s0", tt - 0.05, chime((74 + [0, 3, 5, 7, 10, 7, 5, 12][i],), 0), 0.035)
    at("s0", 14.6, whoosh(1.4, 180, 3000, 0.7), 0.09)        # constellation forms
    at("s0", 15.15, impact(0.5, 48), 0.12)                    # "tarihini ve medeniyetini de keşfet."
    at("s0", 15.2, shimmer(2.0, 86), 0.3)
    at("s0", 17.87, whoosh(0.8, 300, 5000, 0.9, rev=True), 0.1)  # collapse into the star
    # S1 — hook
    at("s1", 0.1, shimmer(2.2, 86), 0.4)
    at("s1", 0.4, whoosh(1.0, 200, 3000, 0.7), 0.07)
    at("s1", 0.95, shimmer(1.2, 91), 0.45)
    for c in (1.3, 1.85, 2.35, 2.75, 3.05):
        at("s1", c - 0.25, whoosh(0.55, 400, 6000, 0.55), 0.1)
    at("s1", 2.9, whoosh(1.3, 150, 2500, 0.8), 0.13)
    at("s1", 3.5, impact(0.6, 50), 0.16)
    # S2 — story page
    at("s2", 4.76, click(1900), 0.22)
    at("s2", 6.05, click(2600, 0.05), 0.16)
    at("s2", 7.45, whoosh(1.2, 250, 7000, 0.92), 0.13)
    # S3 — Word Notes
    at("s3", 8.72, click(2300), 0.28); at("s3", 8.74, chime((93,), 0), 0.08)
    at("s3", 9.05, whoosh(0.9, 300, 5000, 0.6), 0.08)
    at("s3", 10.35, whoosh(0.9, 300, 5000, 0.6), 0.08)
    # S4 — EN ⇄ AR
    at("s4", 13.02, click(2000), 0.3)
    at("s4", 13.3, whoosh(1.2, 180, 8000, 0.5), 0.16)
    at("s4", 13.5, shimmer(1.6, 88), 0.4)
    at("s4", 15.35, click(2600, 0.05), 0.16)                 # Arabic hotspots on the illustration
    at("s4", 16.4, click(2600, 0.05), 0.16)
    at("s4", 17.7, whoosh(1.0, 300, 3000, 0.4), 0.06)
    at("s4", 19.65, whoosh(0.8, 400, 6000, 0.3), 0.1)
    # S5 — chapter loop
    at("s5", 20.75, whoosh(0.7, 200, 2500, 0.6), 0.08)
    at("s5", 23.1, click(2400), 0.3); at("s5", 23.15, chime((86, 93)), 0.22)
    at("s5", 24.4, whoosh(0.8, 250, 3000, 0.5), 0.08)
    at("s5", 25.8, click(2200), 0.22)
    for j in range(4):                                        # Language Focus writing task: prompts ticked
        at("s5", 26.9 + j * 0.24, click(3000 + j * 150, 0.04), 0.1)
    at("s5", 27.7, chime((88,), 0), 0.1)
    at("s5", 28.15, whoosh(1.4, 300, 7000, 0.5), 0.12)
    # S5b — end of book
    at("s5b", 29.35, shimmer(1.2, 91), 0.35)
    for c in (31.45, 35.45, 38.1, 40.8):
        at("s5b", c, whoosh(0.55, 300, 6000, 0.6), 0.1)
    at("s5b", 30.45, click(2400), 0.2); at("s5b", 30.95, click(2400), 0.2)
    for j in range(14):
        at("s5b", 32.6 + j * 0.17, click(2800 + (j % 5) * 120, 0.03), 0.08)
    for j in range(4):
        at("s5b", 36.35 + j * 0.42, click(2600, 0.04), 0.12); at("s5b", 36.5 + j * 0.42 + 0.34, click(3300, 0.04), 0.12)
    for j in range(4):
        at("s5b", 39.05 + j * 0.33 + 0.26, click(3100 + j * 100, 0.04), 0.1)
    at("s5b", 42.0, click(1900), 0.28)
    at("s5b", 42.55, whoosh(0.8, 400, 6000, 0.3), 0.1)
    # S6 — levels
    for c, m in ((24.05, 0), (24.7, 5), (25.35, 7)):
        at("s6", c - 0.02, impact(0.35, 58), 0.14); at("s6", c, chime((76 + m,), 0), 0.08)
    at("s6", 24.8, shimmer(1.8, 84), 0.25)
    # S7 — guides
    at("s7", 28.6, shimmer(1.0, 91), 0.3)
    at("s7", 28.9, whoosh(0.9, 150, 2000, 0.5), 0.1)
    at("s7", 31.5, whoosh(0.9, 150, 2000, 0.5), 0.1)
    for j in range(6):
        at("s7", 32.35 + j * 0.17, click(2800 + j * 90, 0.03), 0.05)
    place(fx, riser(2.4), film_time("s7", 34.45) - 2.4, 0.45)
    at("s7", 33.55, whoosh(0.9, 200, 4000, 0.9, rev=True), 0.14)
    # S8 — finale
    at("s8", 34.45, impact(1.4, 40), 0.6)
    at("s8", 35.15, shimmer(2.6, 86), 0.6)
    at("s8", 35.3, chime((81, 86, 93), 0.12), 0.1)
    return reverb(fx, 2.0, 0.2)


# ------------------------------------------------------------------ narration (the app's own recordings)
# Two short excerpts of the real chapter-1 audio (src/data/adam/b1/{en,ar}/pages.ts → audioUrl):
#   EN "Adam (pbuh) is the first Messenger and the father of all humans." — when play is pressed on the story page
#   AR «آدم (عليه السلام) هو أول رسول وأبو البشر جميعا» — after the page switches to Arabic
NARRATION = [("narration_en_ch1.wav", "s2", 4.80), ("narration_ar_ch1.wav", "s4", 14.42)]


def narration() -> tuple[np.ndarray, np.ndarray]:
    """Return the voice track and a music-duck gain curve."""
    vo = np.zeros((N, 2)); duck = np.ones(N)
    tt = t_axis(N)
    for name, scene, clock in NARRATION:
        x, sr = sf.read(PROMO / "assets" / "audio" / name, dtype="float64")
        assert sr == SR
        if x.ndim > 1:
            x = x.mean(1)
        n = len(x)
        x = x * np.clip(np.arange(n) / (0.012 * SR), 0, 1) * np.clip((n - np.arange(n)) / (0.08 * SR), 0, 1)
        x = x / (np.sqrt(np.mean(x ** 2)) + 1e-9) * 0.16
        t0 = film_time(scene, clock)
        place(vo, stereo(hp(x, 90)), t0, 1.0)
        t1 = t0 + n / SR
        duck = np.minimum(duck, np.interp(tt, [t0 - 0.35, t0 - 0.05, t1, t1 + 0.6], [1, 0.42, 0.42, 1], left=1, right=1))
    return reverb(vo, 0.9, 0.06, 9000), duck


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
    music = score()
    sfx = build_sfx()
    vo, duck = narration()
    tt = t_axis(N)
    fade = np.clip(tt / 0.05, 0, 1)
    fx = (sfx * 0.9 + vo) * fade[:, None]
    fx, duck = splice_inserts(fx, duck)
    tf = t_axis(NF)
    end = TL["duration"] + 0.4
    gain = np.clip(tf / 0.05, 0, 1) * np.clip((end - tf) / 2.2, 0, 1)
    duck = np.concatenate([duck, np.ones(max(0, NF - len(duck)))])[:NF]
    # the large shape of the piece: quiet sections sit lower, the big ones open up
    keys, vals = [], []
    for _, a, b, _, (e0, e1) in SECTIONS:
        keys += [a + 0.25, b - 0.25]; vals += [0.55 + 0.6 * e0, 0.55 + 0.6 * e1]
    shape = np.interp(tf, keys, vals)
    bed = music * (duck * gain * shape)[:, None]
    fx = np.concatenate([fx, np.zeros((max(0, NF - len(fx)), 2))])[:NF] * np.clip((end - tf) / 1.6, 0, 1)[:, None]
    mix = bed + fx
    finish(mix, bed, fx, out_dir)


def finish(mix, music, sfx, out_dir) -> None:
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


# ------------------------------------------------------------------ v10 inserts
# The v8 film pauses at each timeline.json insert (film.js mapTime). The soundtrack does the same:
# the score repeats the whole bars just before the pause point (an insert lasts whole bars, so every
# later beat still lands where it did in v8), sound effects and voice ring out and pick up again
# afterwards, and each inserted scene gets its own quiet UI sounds.
BAR = 4 * BEAT
INSERT_SFX = {   # scene clock u (seconds) → sound; mirrors the taps in film.js
    "n1": [(6.1, "tap")],
    "n2": [(2.1, "tap"), (3.9, "tap"), (3.98, "right")],
    "n3": [(2.0, "tap"), (3.7, "tap"), (5.4, "tap"), (6.65, "right")],
    "n3g": [(1.3, "tick"), (3.9, "tick")],
    "n8": [(1.8, "tap"), (3.6, "right"), (5.1, "move"), (6.45, "tick")],
    "n9": [(1.7, "tap"), (3.0, "move"), (5.6, "page"), (6.05, "page"), (6.5, "page")],
    "n4": [(3.0, "move")] + [(3.83 + k * 0.122, "key") for k in range(8)] + [(5.175, "tap"), (5.3, "right")],
    "n5": [(3.13, "move"), (4.73, "tap"), (5.93, "tap"), (6.87, "tap")],
    "n6": [(4.8, "move"), (6.5, "tap"), (7.4, "tick"), (8.9, "tap")],
    "n7": [(1.9, "tap"), (3.8, "move"), (5.6, "tap")],
}


def insert_sound(kind):
    if kind == "tap":
        return click(2300), 0.24
    if kind == "key":
        return click(3000, 0.03), 0.07
    if kind == "tick":
        return click(2600, 0.05), 0.12
    if kind == "page":
        return whoosh(0.5, 600, 5000, 0.4), 0.05
    if kind == "right":
        return chime((86, 93)), 0.16
    return whoosh(0.8, 250, 3200, 0.55), 0.06


def splice_inserts(fx: np.ndarray, duck: np.ndarray):
    """Open the v8 sound design (and the music-duck curve) at every insert: effects ring out under the
    insert and pick up again afterwards; each inserted scene gets its own quiet UI sounds."""
    ins = TL.get("inserts", [])
    fade_in = TL.get("insertFade", 0.5)
    out_f, out_d, prev, film_off, cues = [], [], 0, 0.0, []
    groups = []
    for n in ins:
        if groups and groups[-1][0] == n["at"]:
            groups[-1][1].append(n)
        else:
            groups.append((n["at"], [n]))
    for at, ns in groups:
        p = int(round(at * SR))
        total = sum(n["len"] for n in ns)
        L = int(round(total * SR))
        ring = int(0.35 * SR)
        pause = np.zeros((L, 2)); pause[:ring] = fx[p:p + ring] * np.linspace(1, 0, ring)[:, None]
        out_f += [fx[prev:p], pause]
        out_d += [duck[prev:p], np.ones(L)]
        fx[p:p + int(0.12 * SR)] *= np.linspace(0, 1, int(0.12 * SR))[:, None]
        start = at + film_off
        for n in ns:
            cues.append((start - fade_in + 0.1, "move", 0.6))
            for u, kind in INSERT_SFX.get(n["id"], []):
                cues.append((start + u, kind, 1.0))
            start += n["len"]
        film_off += total
        prev = p
    out_f.append(fx[prev:]); out_d.append(duck[prev:])
    fx, duck = np.concatenate(out_f), np.concatenate(out_d)
    extra = np.zeros_like(fx)
    for t0, kind, g in cues:
        snd, gain = insert_sound(kind)
        place(extra, snd if snd.ndim > 1 else stereo(snd), t0, gain * g)
    return fx + reverb(extra, 1.6, 0.18) * 0.9, duck


if __name__ == "__main__":
    main()
