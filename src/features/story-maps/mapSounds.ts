// Small interface sounds for the story maps. They are synthesised with Web Audio, so there are no
// files to download, they work offline, and they stay quiet and short. The learner can mute them.

type SoundName = 'select' | 'reveal' | 'hide' | 'tick' | 'milestone' | 'whoosh' | 'drum'
  | 'start' | 'drop' | 'correct' | 'wrong' | 'next' | 'finish' | 'perfect';

const STORAGE_KEY = 'story_map_sound';
const MASTER_GAIN = 0.55;

let context: AudioContext | null = null;
let master: GainNode | null = null;
let enabled = true;
let noiseBuffer: AudioBuffer | null = null;
const listeners = new Set<(on: boolean) => void>();

try {
  enabled = localStorage.getItem(STORAGE_KEY) !== 'off';
} catch { /* storage not available */ }

const getContext = (): AudioContext | null => {
  if (typeof window === 'undefined') return null;
  if (!context) {
    const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!Ctor) return null;
    try {
      context = new Ctor();
      master = context.createGain();
      master.gain.value = MASTER_GAIN;
      master.connect(context.destination);
    } catch {
      context = null;
      return null;
    }
  }
  if (context.state === 'suspended') void context.resume().catch(() => undefined);
  return context;
};

const getNoise = (ctx: AudioContext): AudioBuffer => {
  if (!noiseBuffer) {
    noiseBuffer = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const data = noiseBuffer.getChannelData(0);
    for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;
  }
  return noiseBuffer;
};

interface ToneOptions {
  at?: number;
  freq: number;
  to?: number;
  dur: number;
  type?: OscillatorType;
  gain?: number;
  attack?: number;
}

/** One soft note: a short attack, then an exponential fade. */
const tone = (ctx: AudioContext, { at = 0, freq, to, dur, type = 'sine', gain = 0.2, attack = 0.008 }: ToneOptions) => {
  const start = ctx.currentTime + at;
  const osc = ctx.createOscillator();
  const amp = ctx.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  if (to) osc.frequency.exponentialRampToValueAtTime(to, start + dur);
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(gain, start + attack);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  osc.connect(amp).connect(master as GainNode);
  osc.start(start);
  osc.stop(start + dur + 0.05);
};

/** A bell: the note plus two quiet overtones. */
const bell = (ctx: AudioContext, freq: number, at: number, dur: number, gain: number) => {
  tone(ctx, { at, freq, dur, gain });
  tone(ctx, { at, freq: freq * 2.01, dur: dur * 0.6, gain: gain * 0.35 });
  tone(ctx, { at, freq: freq * 3.02, dur: dur * 0.35, gain: gain * 0.15 });
};

/** Filtered noise sweep, used for the camera whoosh. */
const sweep = (ctx: AudioContext, from: number, to: number, dur: number, gain: number, at = 0) => {
  const start = ctx.currentTime + at;
  const source = ctx.createBufferSource();
  source.buffer = getNoise(ctx);
  const filter = ctx.createBiquadFilter();
  filter.type = 'bandpass';
  filter.Q.value = 1.1;
  filter.frequency.setValueAtTime(from, start);
  filter.frequency.exponentialRampToValueAtTime(to, start + dur);
  const amp = ctx.createGain();
  amp.gain.setValueAtTime(0.0001, start);
  amp.gain.exponentialRampToValueAtTime(gain, start + dur * 0.4);
  amp.gain.exponentialRampToValueAtTime(0.0001, start + dur);
  source.connect(filter).connect(amp).connect(master as GainNode);
  source.start(start);
  source.stop(start + dur + 0.05);
};

const RECIPES: Record<SoundName, (ctx: AudioContext) => void> = {
  // A soft wooden tap when a pin is chosen
  select: ctx => {
    tone(ctx, { freq: 640, to: 900, dur: 0.09, gain: 0.16 });
    tone(ctx, { at: 0.045, freq: 1180, dur: 0.12, gain: 0.07 });
  },
  // A place appearing in classroom mode
  reveal: ctx => {
    bell(ctx, 660, 0, 0.5, 0.12);
    bell(ctx, 990, 0.09, 0.45, 0.09);
  },
  hide: ctx => tone(ctx, { freq: 520, to: 300, dur: 0.16, gain: 0.12 }),
  // The slider crossing a year
  tick: ctx => tone(ctx, { freq: 1500, dur: 0.03, gain: 0.05, type: 'triangle', attack: 0.003 }),
  // The slider or the tour reaching an event
  milestone: ctx => {
    bell(ctx, 523, 0, 0.7, 0.12);
    bell(ctx, 784, 0.1, 0.7, 0.1);
  },
  whoosh: ctx => sweep(ctx, 300, 1800, 0.7, 0.2),
  // Low drum for the Mongol army reaching the battlefield
  drum: ctx => {
    tone(ctx, { freq: 120, to: 55, dur: 0.45, gain: 0.35, attack: 0.004 });
    tone(ctx, { at: 0.22, freq: 110, to: 52, dur: 0.45, gain: 0.28, attack: 0.004 });
  },
  start: ctx => {
    sweep(ctx, 400, 2200, 0.45, 0.14);
    bell(ctx, 523, 0.18, 0.6, 0.1);
    bell(ctx, 784, 0.3, 0.7, 0.1);
  },
  // The learner's pin landing on the map
  drop: ctx => {
    tone(ctx, { freq: 420, to: 150, dur: 0.14, gain: 0.26, attack: 0.004 });
    sweep(ctx, 900, 500, 0.08, 0.06);
  },
  correct: ctx => {
    [523.25, 659.25, 783.99, 1046.5].forEach((freq, index) => bell(ctx, freq, index * 0.085, 0.75, 0.13));
  },
  // A gentle two-note step down, never harsh
  wrong: ctx => {
    tone(ctx, { freq: 330, dur: 0.22, gain: 0.16, type: 'triangle' });
    tone(ctx, { at: 0.16, freq: 247, dur: 0.38, gain: 0.16, type: 'triangle' });
  },
  next: ctx => tone(ctx, { freq: 880, to: 1175, dur: 0.1, gain: 0.1 }),
  finish: ctx => {
    [392, 523.25, 659.25].forEach((freq, index) => bell(ctx, freq, index * 0.13, 0.9, 0.12));
  },
  perfect: ctx => {
    [523.25, 659.25, 783.99, 1046.5, 1318.5].forEach((freq, index) => bell(ctx, freq, index * 0.1, 1.1, 0.14));
    bell(ctx, 523.25, 0.62, 1.4, 0.1);
    bell(ctx, 783.99, 0.62, 1.4, 0.08);
  },
};

export const playMapSound = (name: SoundName) => {
  if (!enabled) return;
  const ctx = getContext();
  if (!ctx || !master) return;
  try {
    RECIPES[name](ctx);
  } catch { /* a sound must never break the map */ }
};

export const isMapSoundOn = () => enabled;

export const setMapSoundOn = (on: boolean) => {
  enabled = on;
  try { localStorage.setItem(STORAGE_KEY, on ? 'on' : 'off'); } catch { /* storage not available */ }
  listeners.forEach(listener => listener(on));
  if (on) playMapSound('select');
};

export const subscribeMapSound = (listener: (on: boolean) => void) => {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
};
