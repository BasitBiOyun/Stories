import { normalizeHighlightText, type HighlightLanguage } from './highlightTextMatch';

/** One spoken word from <audio>.timings.json (scripts/tts/align_audio.py). */
export interface TimedWord {
  t: string;
  s: number;
  e: number;
  /** Paragraph in the spoken text; 0 is the chapter title. */
  p: number;
}

/**
 * Chapter audio files that have word timings in Storage. Keep in step with
 * tts/alignment_requests.json; other chapters never request a timings file.
 */
const TIMED_AUDIO_PATHS = new Set([
  'mecca/a2/audio/00_Chapter_1.mp3',
  'mecca/a2/audio/arabic_audio/cahiliyebilal1.mp3',
]);

export const timingsUrlFor = (audioUrl: string | undefined): string | null => {
  const match = audioUrl?.match(/^(https:\/\/firebasestorage\.googleapis\.com\/v0\/b\/[^/]+\/o\/)([^?]+)/);
  if (!match) return null;
  const path = decodeURIComponent(match[2]);
  if (!TIMED_AUDIO_PATHS.has(path)) return null;
  return `${match[1]}${encodeURIComponent(path.replace(/\.mp3$/i, '.timings.json'))}?alt=media`;
};

const comparable = (word: string, language: HighlightLanguage) =>
  normalizeHighlightText(word, language).replace(/ /g, '');

/**
 * For each word shown on the page, the index of the spoken word that matches it, or -1.
 * Shown words that were not read (parenthetical notes) and spoken words that are not on
 * the page (the title) stay unmatched, so the marker never points at the wrong word.
 */
export const matchShownToSpoken = (
  shown: string[],
  spoken: TimedWord[],
  language: HighlightLanguage,
): number[] => {
  const result = new Array<number>(shown.length).fill(-1);
  const shownKeys = shown.map(word => comparable(word, language));
  const spokenKeys = spoken.map(word => comparable(word.t, language));
  const LOOKAHEAD = 12;
  let i = 0;
  let j = 0;
  while (i < shown.length && j < spoken.length) {
    if (!shownKeys[i]) { i++; continue; }
    if (!spokenKeys[j]) { j++; continue; }
    if (shownKeys[i] === spokenKeys[j]) {
      result[i] = j;
      i++;
      j++;
      continue;
    }
    // A skip is accepted only when the next word pair agrees too, so a common word
    // ("the", "في") further on does not pull the match out of place.
    const agrees = (a: number, b: number) =>
      shownKeys[a] === spokenKeys[b] && (a + 1 >= shown.length || b + 1 >= spoken.length || shownKeys[a + 1] === spokenKeys[b + 1]);
    let moved = false;
    for (let step = 1; step <= LOOKAHEAD && !moved; step++) {
      if (j + step < spoken.length && agrees(i, j + step)) { j += step; moved = true; }
      else if (i + step < shown.length && agrees(i + step, j)) { i += step; moved = true; }
    }
    if (!moved) { i++; j++; }
  }
  return result;
};
