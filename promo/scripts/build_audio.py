#!/usr/bin/env python3
"""Build the promo soundtrack: procedural score + sound design + VO + real narration.

Everything musical is synthesized here (no third-party samples), so the
soundtrack is license-clean. Timing comes from promo/timeline.json and the
cue list below, which mirrors the motion cues in film.js.

Output: promo/out/mix.wav (48 kHz stereo, loudness-normalized to -14 LUFS)
        promo/out/stems/{music,sfx,vo,narration}.wav

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
DUR = TL["duration"] + 0.6
N = int(DUR * SR)
BEAT = 60.0 / TL["bpm"]  # 0.65 s
rng = np.random.default_rng(7)


def t_axis(n: int) -> np.ndarray:
    return np.arange(n) / SR


def midi(m: float) -> float:
    return 440.0 * 2 ** ((m - 69) / 12)


def place(buf: np.ndarray, x: np.ndarray, at: float, gain: float = 1.0) -> None:
    i = int(at * SR)
    if i >= len(buf):
        return
    x = x[: len(buf) - i]
    if x.ndim == 1 and buf.ndim == 2:
        x = np.stack([x, x], 1)
    buf[i: i + len(x)] += x * gain


def env_adsr(n: int, a: float, d: float, s: float, r: float) -> np.ndarray:
    e = np.full(n, s)
    na, nd, nr = int(a * SR), int(d * SR), int(r * SR)
    na = min(na, n); e[:na] = np.linspace(0, 1, na) ** 1.5
    if nd:
        e[na: na + nd] = np.linspace(1, s, len(e[na: na + nd]))
    if nr:
        e[-nr:] *= np.linspace(1, 0, min(nr, n)) ** 1.3
    return e


def lp(x: np.ndarray, f: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, f / (SR / 2), "low")
    return signal.lfilter(b, a, x, axis=0)


def hp(x: np.ndarray, f: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, f / (SR / 2), "high")
    return signal.lfilter(b, a, x, axis=0)


def bp(x: np.ndarray, lo: float, hi: float, order: int = 2) -> np.ndarray:
    b, a = signal.butter(order, [lo / (SR / 2), hi / (SR / 2)], "band")
    return signal.lfilter(b, a, x, axis=0)


def reverb(x: np.ndarray, seconds: float = 2.8, wet: float = 0.35, tone: float = 6000) -> np.ndarray:
    n = int(seconds * SR)
    tt = t_axis(n)
    irs = []
    for ch in range(2):
        noise = rng.standard_normal(n) * np.exp(-tt * 6.9 / seconds)
        noise = lp(noise, tone)
        noise[: int(0.012 * SR)] *= np.linspace(0, 1, int(0.012 * SR))
        irs.append(noise / np.sqrt(np.sum(noise ** 2)))
    if x.ndim == 1:
        x = np.stack([x, x], 1)
    out = np.zeros((len(x) + n - 1, 2))
    for ch in range(2):
        out[:, ch] = signal.fftconvolve(x[:, ch], irs[ch])
    out = out[: len(x)]
    return x * (1 - wet) + out * wet * 3.0


# ------------------------------------------------------------------ score
def pad_voice(freq: float, dur: float, bright: float = 0.35, detune: float = 0.12) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    out = np.zeros((n, 2))
    for ch, sgn in ((0, -1), (1, 1)):
        for d in (-detune, 0, detune):
            f = freq * 2 ** ((d * sgn) / 12)
            ph = rng.uniform(0, 2 * np.pi)
            for k in range(1, 10):  # band-limited saw, rolled off = warm pad
                amp = (1 / k) * np.exp(-(k - 1) * (1 - bright) * 0.9)
                out[:, ch] += amp * np.sin(2 * np.pi * f * k * tt + ph * k)
    return out / 6


CHORDS = [  # (start, end, midi notes)
    (0.0, 3.9, [38, 45, 50, 57]),                 # D drone (intro)
    (3.9, 9.1, [38, 50, 53, 57, 60, 64]),         # Dm(add9)
    (9.1, 14.3, [34, 50, 53, 57, 58, 62]),        # Bbmaj7
    (14.3, 19.5, [33, 48, 53, 57, 60, 64]),       # F/A (maj7)
    (19.5, 24.7, [36, 48, 52, 55, 62, 64]),       # C(add9)
    (24.7, 29.9, [38, 50, 53, 57, 60, 64]),       # Dm9
    (29.9, 32.5, [34, 50, 53, 57, 60, 62]),       # Bbmaj9
    (32.5, 34.45, [36, 48, 55, 60, 62, 64]),      # Csus/add9 -> lift
    (34.45, DUR, [29, 41, 48, 53, 57, 60, 64, 67]),  # F(add9) — resolution
]


def build_music() -> np.ndarray:
    mus = np.zeros((N, 2))
    # pads
    for i, (a, b, notes) in enumerate(CHORDS):
        dur = b - a + 1.4
        for m in notes:
            bright = 0.25 if m < 45 else 0.42
            v = pad_voice(midi(m), dur, bright=bright)
            e = env_adsr(len(v), 0.9 if i else 2.4, 0.5, 0.85, 1.4)
            g = 0.10 if m < 45 else 0.055
            if i == 0:
                g *= 0.9
            if i == len(CHORDS) - 1:
                g *= 1.35
            place(mus, v * e[:, None], a - (0.25 if i else 0), g)
    # slow filter swell on the pad bed
    tt = t_axis(N)
    cutoff_curve = np.interp(tt, [0, 3.9, 12, 24, 32.5, 34.45, 37, DUR], [500, 1400, 1800, 2400, 3400, 5200, 3000, 1800])
    # piecewise filtering in blocks (time-varying low-pass)
    out = np.zeros_like(mus)
    blk = 4800
    zi = None
    for s in range(0, N, blk):
        f = float(cutoff_curve[min(s + blk // 2, N - 1)])
        b, a = signal.butter(2, f / (SR / 2), "low")
        if zi is None:
            zi = np.zeros((max(len(a), len(b)) - 1, 2))
        y, zi = signal.lfilter(b, a, mus[s: s + blk], axis=0, zi=zi)
        out[s: s + blk] = y
    mus = out

    # plucked arpeggio (kalimba/celesta-like), eighth notes
    arp = np.zeros((N, 2))
    pattern = [0, 2, 3, 4, 5, 4, 3, 2]
    step = BEAT / 2
    k = 0
    t = 3.9 + BEAT * 2
    while t < 33.9:
        chord = next(c for c in CHORDS if c[0] <= t < c[1])[2]
        upper = sorted(m + 12 for m in chord if m >= 48)
        m = upper[pattern[k % len(pattern)] % len(upper)]
        n = int(0.9 * SR)
        tt2 = t_axis(n)
        f = midi(m)
        tone = (np.sin(2 * np.pi * f * tt2) + 0.35 * np.sin(2 * np.pi * 2 * f * tt2) * np.exp(-tt2 * 9) + 0.12 * np.sin(2 * np.pi * 3.01 * f * tt2) * np.exp(-tt2 * 14))
        tone *= np.exp(-tt2 * 4.2) * (1 - np.exp(-tt2 * 900))
        pan = 0.5 + 0.3 * np.sin(k * 0.9)
        vel = 0.7 + 0.3 * ((k % 4) == 0)
        ramp = np.interp(t, [3.9, 9, 30, 33.9], [0.25, 0.8, 1.0, 0.6])
        place(arp, np.stack([tone * (1 - pan), tone * pan], 1), t, 0.05 * vel * ramp)
        k += 1
        t += step
    arp = reverb(arp, 2.2, 0.45, 5000)

    # soft pulse: felt-kick on 1 & 3, shakers on offbeats
    perc = np.zeros((N, 2))
    t = 8.45
    beat_i = 0
    while t < 33.9:
        if beat_i % 2 == 0:
            n = int(0.5 * SR)
            tt2 = t_axis(n)
            f = 48 + 40 * np.exp(-tt2 * 30)
            kick = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt2 * 7)
            place(perc, kick, t, 0.16)
        if t > 12.35:
            n = int(0.09 * SR)
            sh = hp(rng.standard_normal(n), 6500) * np.exp(-t_axis(n) * 45)
            place(perc, np.stack([sh * 0.6, sh], 1), t + BEAT / 2, 0.018)
        t += BEAT
        beat_i += 1
    perc = reverb(perc, 1.2, 0.2)

    return mus * 0.9 + arp + perc


# ------------------------------------------------------------------ sound design
def whoosh(dur: float = 0.8, lo: float = 300, hi: float = 5000, peak: float = 0.6, rev: bool = False) -> np.ndarray:
    n = int(dur * SR)
    x = rng.standard_normal(n)
    tt = t_axis(n) / dur
    out = np.zeros(n)
    blk = 480
    for s in range(0, n, blk):
        p = tt[s]
        f = lo * (hi / lo) ** (np.sin(np.pi * min(p / peak, 1) / 2) if p < peak else 1 - (p - peak) / (1 - peak) * 0.5)
        f = min(f, SR / 2 * 0.9)
        seg = x[s: s + blk]
        out[s: s + blk] = bp(seg, max(40, f * 0.6), min(SR / 2 * 0.95, f * 1.6), 1)
    e = np.where(tt < peak, (tt / peak) ** 2, np.exp(-(tt - peak) * 6))
    y = out * e
    if rev:
        y = y[::-1]
    pan = np.linspace(-0.6, 0.6, n)
    return np.stack([y * (1 - pan) * 0.7, y * (1 + pan) * 0.7], 1)


def click(tone: float = 2400, dur: float = 0.06) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    body = np.sin(2 * np.pi * tone * tt) * np.exp(-tt * 90) + 0.6 * np.sin(2 * np.pi * tone * 0.5 * tt) * np.exp(-tt * 60)
    tick = hp(rng.standard_normal(n), 3000) * np.exp(-tt * 400)
    return body * 0.6 + tick * 0.4


def chime(notes=(88, 93), gap: float = 0.09) -> np.ndarray:
    n = int(1.6 * SR)
    out = np.zeros(n)
    for j, m in enumerate(notes):
        tt = t_axis(n - int(j * gap * SR))
        f = midi(m)
        s = (np.sin(2 * np.pi * f * tt) + 0.25 * np.sin(2 * np.pi * 2.76 * f * tt) * np.exp(-tt * 6)) * np.exp(-tt * 3.2)
        out[int(j * gap * SR):] += s * (1 - np.exp(-tt * 800))
    return out * 0.5


def impact(size: float = 1.0, tone: float = 44) -> np.ndarray:
    n = int(2.5 * SR)
    tt = t_axis(n)
    f = tone + 70 * np.exp(-tt * 18)
    sub = np.sin(2 * np.pi * np.cumsum(f) / SR) * np.exp(-tt * (2.2 / size))
    body = lp(rng.standard_normal(n), 900) * np.exp(-tt * 14) * 0.5
    return np.tanh((sub + body) * 1.4) * 0.8


def shimmer(dur: float = 1.8, base: float = 84) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    out = np.zeros(n)
    for j in range(14):
        m = base + rng.choice([0, 2, 4, 7, 9, 12, 14, 16, 19])
        st = rng.uniform(0, dur * 0.55)
        e = np.clip((tt - st) * 30, 0, 1) * np.exp(-np.clip(tt - st, 0, None) * 3.5)
        out += np.sin(2 * np.pi * midi(m) * tt) * e * rng.uniform(0.3, 1)
    return out * 0.12 * np.clip(tt * 4, 0, 1)


def riser(dur: float = 2.0) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    p = tt / dur
    w = whoosh(dur, 200, 9000, 0.98)[:, 0] * 1.2
    f = 180 * 2 ** (p * 2.5)
    tone = np.sin(2 * np.pi * np.cumsum(f) / SR) * 0.25 + np.sin(2 * np.pi * np.cumsum(f * 1.5) / SR) * 0.12
    return (w + tone) * p ** 2.2


def page_soft(dur: float = 0.5) -> np.ndarray:
    n = int(dur * SR)
    tt = t_axis(n)
    return bp(rng.standard_normal(n), 800, 7000) * np.exp(-((tt - 0.12) / 0.08) ** 2) * 0.35


def build_sfx() -> np.ndarray:
    fx = np.zeros((N, 2))
    place(fx, shimmer(2.0, 86), 0.08, 0.9)                 # star ignites
    place(fx, whoosh(0.9, 200, 3000, 0.7), 0.35, 0.10)     # arch draws
    place(fx, shimmer(1.2, 91), 0.85, 0.6)                 # star flare
    for at in (1.35, 1.95, 2.45, 2.85, 3.15):              # cards passing the lens
        place(fx, whoosh(0.55, 400, 6000, 0.55), at - 0.3, 0.16)
    place(fx, whoosh(1.2, 150, 2500, 0.8), 2.9, 0.22)      # arrive into the arch
    place(fx, impact(0.6, 50), 3.9, 0.22)
    place(fx, page_soft(), 4.0, 0.8)
    place(fx, click(1900), 4.76, 0.35)                     # play narration
    place(fx, click(2600, 0.05), 6.05, 0.25)               # hotspot
    place(fx, whoosh(1.0, 250, 7000, 0.92), 7.45, 0.2)     # push into the word
    place(fx, click(2300), 8.72, 0.4)                      # tap "Messenger"
    place(fx, chime((93,), 0.0), 8.74, 0.12)
    place(fx, whoosh(0.7, 300, 3500, 0.5), 9.0, 0.10)      # card unfolds
    place(fx, whoosh(0.9, 300, 5000, 0.6), 10.3, 0.12)     # notes orbit in
    for j in range(8):                                     # counter ticks
        place(fx, click(3200 + j * 60, 0.03), 11.0 + j * 0.1, 0.05)
    place(fx, whoosh(0.7, 500, 6000, 0.3), 11.95, 0.15)
    place(fx, click(2000), 13.02, 0.45)                    # EN -> العربية
    place(fx, whoosh(1.2, 180, 8000, 0.5), 13.25, 0.25)    # light seam sweeps (RTL)
    place(fx, shimmer(1.6, 88), 13.5, 0.5)
    place(fx, whoosh(1.0, 300, 3000, 0.4), 15.1, 0.08)
    place(fx, whoosh(0.8, 400, 6000, 0.3), 17.3, 0.14)
    place(fx, whoosh(0.7, 200, 2500, 0.6), 17.45, 0.12)    # challenge enters
    place(fx, click(2400), 19.45, 0.45)                    # answer
    place(fx, chime((88, 93)), 19.5, 0.35)                 # correct
    for j in range(5):                                     # activities cascade
        place(fx, whoosh(0.45, 600, 7000, 0.4), 20.4 + j * 0.16, 0.07)
    place(fx, whoosh(0.8, 400, 6000, 0.3), 22.55, 0.14)
    for at in (24.42, 25.0, 25.8):                          # A2 · B1 · B2
        place(fx, impact(0.35, 58), at - 0.02, 0.2)
        place(fx, chime((76 + {24.42: 0, 25.0: 5, 25.8: 7}[at],), 0), at, 0.12)
    place(fx, shimmer(1.8, 84), 24.8, 0.35)                # line draws
    place(fx, whoosh(0.8, 300, 6000, 0.3), 28.3, 0.14)
    place(fx, shimmer(1.0, 91), 28.6, 0.4)                 # seam
    place(fx, whoosh(0.9, 150, 2000, 0.5), 28.9, 0.15)     # teacher page opens
    place(fx, page_soft(0.6), 29.1, 0.7)
    place(fx, whoosh(0.9, 150, 2000, 0.5), 31.5, 0.15)     # student page opens
    place(fx, page_soft(0.6), 31.7, 0.7)
    for j in range(6):
        place(fx, click(2800 + j * 90, 0.03), 32.4 + j * 0.17, 0.06)
    place(fx, riser(2.1), 32.35, 0.55)                     # into the finale
    place(fx, whoosh(0.9, 200, 4000, 0.9, rev=True), 33.55, 0.2)
    place(fx, impact(1.4, 40), 34.45, 0.75)                # the book closes → logo
    place(fx, shimmer(2.6, 86), 35.1, 0.8)                 # logo sheen
    place(fx, chime((81, 88, 93), 0.12), 35.3, 0.12)
    return reverb(fx, 2.0, 0.22)


# ------------------------------------------------------------------ voice & narration
def load_mono(path: Path) -> np.ndarray:
    x, sr = sf.read(path, dtype="float64")
    if x.ndim == 2:
        x = x.mean(1)
    if sr != SR:
        x = signal.resample_poly(x, SR, sr)
    return x


def build_vo() -> np.ndarray:
    vo = np.zeros((N, 2))
    for cue in TL["vo"]:
        x = load_mono(PROMO / cue["file"])
        x = x / (np.max(np.abs(x)) + 1e-9) * 0.7
        place(vo, x, cue["start"], 1.0)
    # a touch of room so the voice sits with the score
    return reverb(vo, 0.9, 0.08, 7000)


def build_narration() -> np.ndarray:
    nar = np.zeros((N, 2))
    en = load_mono(PROMO / "audio/source/adam_b1_ch1_en.wav")
    ar = load_mono(PROMO / "audio/source/adam_b1_ch1_ar.wav")
    # the real English narration starts when the player is pressed (4.78 s), heard "from the page"
    seg = en[: int(3.6 * SR)]
    seg = bp(seg, 250, 5500) * np.minimum(1, np.linspace(0, 12, len(seg))) * np.minimum(1, np.linspace(10, 0, len(seg)))
    place(nar, seg, 4.8, 0.10)
    # the real Arabic narration surfaces in the gap after the language switch
    seg = ar[: int(1.6 * SR)]
    fade = np.minimum(1, np.linspace(0, 10, len(seg))) * np.minimum(1, np.linspace(4, 0, len(seg)))
    place(nar, seg * fade, 16.8, 0.42)
    return reverb(nar, 1.0, 0.18)


def vo_envelope(vo: np.ndarray) -> np.ndarray:
    a = np.abs(vo).mean(1)
    win = int(0.05 * SR)
    e = np.convolve(a, np.ones(win) / win, mode="same")
    e = e / (e.max() + 1e-9)
    # attack/release smoothing
    out = np.zeros_like(e)
    att, rel = np.exp(-1 / (0.03 * SR)), np.exp(-1 / (0.35 * SR))
    v = 0.0
    for i in range(0, len(e)):
        c = att if e[i] > v else rel
        v = c * v + (1 - c) * e[i]
        out[i] = v
    return np.clip(out * 4, 0, 1)


def main() -> None:
    out_dir = PROMO / "out"
    (out_dir / "stems").mkdir(parents=True, exist_ok=True)
    music = build_music()
    sfx = build_sfx()
    vo = build_vo()
    nar = build_narration()
    duck = vo_envelope(vo)
    music_d = music * (1 - 0.55 * duck)[:, None]
    sfx_d = sfx * (1 - 0.25 * duck)[:, None]
    # master fade in/out
    tt = t_axis(N)
    fade = np.clip(tt / 0.05, 0, 1) * np.clip((TL["duration"] + 0.3 - tt) / 1.2, 0, 1)
    mix = (music_d * 0.8 + sfx_d * 0.9 + vo * 1.0 + nar) * fade[:, None]
    mix = np.tanh(mix * 1.1) / 1.1  # gentle soft clip / glue
    for name, st in (("music", music), ("sfx", sfx), ("vo", vo), ("narration", nar)):
        sf.write(out_dir / "stems" / f"{name}.wav", (st / (np.max(np.abs(st)) + 1e-9) * 0.9).astype(np.float32), SR)
    raw = out_dir / "mix_raw.wav"
    sf.write(raw, mix.astype(np.float32), SR)
    try:
        import imageio_ffmpeg
        ff = imageio_ffmpeg.get_ffmpeg_exe()
    except Exception:
        ff = "ffmpeg"
    subprocess.run([ff, "-y", "-loglevel", "error", "-i", str(raw), "-af", "loudnorm=I=-14:TP=-1.2:LRA=9", "-ar", str(SR), str(out_dir / "mix.wav")], check=True)
    raw.unlink()
    print("wrote", out_dir / "mix.wav")


if __name__ == "__main__":
    main()
