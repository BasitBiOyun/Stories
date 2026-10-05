import { useEffect, useRef, useState, type RefObject } from 'react';
import { matchShownToSpoken, type TimedWord } from '../../lib/followAlong';
import type { HighlightLanguage } from '../../lib/highlightTextMatch';

interface ShownWords {
  container: HTMLElement;
  ranges: Range[];
  /** Index into the spoken body words -> index into ranges. */
  rangeForSpoken: Map<number, number>;
}

/** Each whitespace-separated word in the container's text, as a DOM Range (word notes included). */
const collectWords = (container: HTMLElement) => {
  const ranges: Range[] = [];
  const words: string[] = [];
  const walker = document.createTreeWalker(container, NodeFilter.SHOW_TEXT);
  let joinNext = false;
  for (let node = walker.nextNode() as Text | null; node; node = walker.nextNode() as Text | null) {
    const text = node.data;
    const re = /\S+/g;
    let m: RegExpExecArray | null;
    let first = true;
    while ((m = re.exec(text))) {
      if (first && joinNext && m.index === 0 && ranges.length) {
        // The same word split over two text nodes.
        ranges[ranges.length - 1].setEnd(node, m.index + m[0].length);
        words[words.length - 1] += m[0];
      } else {
        const range = document.createRange();
        range.setStart(node, m.index);
        range.setEnd(node, m.index + m[0].length);
        ranges.push(range);
        words.push(m[0]);
      }
      first = false;
    }
    if (text.length) joinNext = !/\s$/.test(text);
  }
  return { ranges, words };
};

const isVisible = (el: HTMLElement | null): el is HTMLElement => !!el && el.getClientRects().length > 0;

const FILL_STYLES = ['background-image', 'border-radius', 'box-decoration-break'];

/**
 * "Follow along": while the chapter audio plays, a soft highlighter in the book colour sweeps
 * across the word being read, in step with the voice (right to left in Arabic).
 * Word times come from <audio>.timings.json; without that file nothing is shown.
 * The highlight is a background on the whole word element, so Arabic letter joining is untouched.
 */
export function useFollowAlong({
  enabled,
  timingsUrl,
  audioRef,
  textRefs,
  language,
  isPlaying,
}: {
  enabled: boolean;
  timingsUrl: string | null;
  audioRef: RefObject<HTMLAudioElement | null>;
  textRefs: RefObject<HTMLDivElement | null>[];
  language: HighlightLanguage;
  isPlaying: boolean;
}) {
  const [spoken, setSpoken] = useState<TimedWord[] | null>(null);
  const shownRef = useRef<ShownWords | null>(null);
  const lastUserScrollRef = useRef(0);

  useEffect(() => {
    setSpoken(null);
    shownRef.current = null;
    if (!enabled || !timingsUrl) return;
    const controller = new AbortController();
    fetch(timingsUrl, { signal: controller.signal })
      .then(res => (res.ok ? res.json() : null))
      .then(data => {
        const words: TimedWord[] | undefined = data?.words;
        // The title is read first but is not part of the story text.
        if (Array.isArray(words)) setSpoken(words.filter(w => w.p > 0));
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [enabled, timingsUrl]);

  useEffect(() => {
    // New timings (another chapter or language) must never reuse the previous word map.
    shownRef.current = null;
    if (!enabled || !spoken?.length) return;

    let painted: HTMLElement | null = null;
    const clear = () => {
      if (painted) FILL_STYLES.forEach(prop => painted!.style.removeProperty(prop));
      painted = null;
    };

    const textEls = textRefs.map(ref => ref.current);
    const observer = new MutationObserver(records => {
      // Our own style changes are attribute mutations; only text or element changes count.
      if (records.some(r => r.type !== 'attributes')) { clear(); shownRef.current = null; }
    });
    textEls.forEach(el => el && observer.observe(el, { childList: true, subtree: true, characterData: true }));

    const shownWords = (): ShownWords | null => {
      const container = textEls.find(isVisible);
      if (!container) return null;
      if (shownRef.current?.container === container) return shownRef.current;
      const { ranges, words } = collectWords(container);
      const spokenForShown = matchShownToSpoken(words, spoken, language);
      const rangeForSpoken = new Map<number, number>();
      spokenForShown.forEach((s, r) => { if (s >= 0) rangeForSpoken.set(s, r); });
      shownRef.current = { container, ranges, rangeForSpoken };
      return shownRef.current;
    };

    const paint = () => {
      const audio = audioRef.current;
      const shown = shownWords();
      if (!audio || !shown || audio.ended || (audio.paused && audio.currentTime === 0)) { clear(); return; }
      const t = audio.currentTime;
      // Last spoken word that has started; it stays filled through the pause after it.
      let lo = 0;
      let hi = spoken.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (spoken[mid].s <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1;
      }
      let progress = idx >= 0 ? Math.min(1, Math.max(0, (t - spoken[idx].s) / Math.max(0.05, spoken[idx].e - spoken[idx].s))) : 0;
      while (idx >= 0 && !shown.rangeForSpoken.has(idx)) { idx--; progress = 1; }
      if (idx < 0) { clear(); return; }
      const rangeIdx = shown.rangeForSpoken.get(idx)!;
      const range = shown.ranges[rangeIdx];
      const el = range.startContainer.parentElement;
      if (!el || !el.isConnected) { shownRef.current = null; return; }

      // A Word Note phrase is one element holding several words: fill it word by word.
      const inElement: number[] = [];
      for (let r = rangeIdx; r >= 0 && shown.ranges[r].startContainer.parentElement === el; r--) inElement.unshift(r);
      for (let r = rangeIdx + 1; r < shown.ranges.length && shown.ranges[r].startContainer.parentElement === el; r++) inElement.push(r);
      const share = (inElement.indexOf(rangeIdx) + progress) / inElement.length;

      if (painted !== el) {
        clear();
        painted = el;
      }
      // A highlighter that sweeps across the word with the voice; the text itself keeps its colour.
      const pct = (share * 100).toFixed(1);
      const edge = Math.min(100, share * 100 + 10).toFixed(1);
      const direction = language === 'ar' ? 'to left' : 'to right';
      const ink = 'color-mix(in srgb, var(--brand-300, var(--color-brand-300)) 75%, transparent)';
      el.style.backgroundImage = `linear-gradient(${direction}, ${ink} ${pct}%, transparent ${edge}%)`;
      el.style.setProperty('border-radius', '0.35em');
      el.style.setProperty('box-decoration-break', 'clone');

      if (!audio.paused && Date.now() - lastUserScrollRef.current > 4000) {
        const rect = range.getBoundingClientRect();
        if (rect.width && (rect.top < 80 || rect.bottom > window.innerHeight - 120)) {
          el.scrollIntoView({ block: 'center', behavior: 'smooth' });
        }
      }
    };

    let frame = 0;
    const loop = () => { paint(); frame = requestAnimationFrame(loop); };
    if (isPlaying) frame = requestAnimationFrame(loop);
    else paint();

    const audio = audioRef.current;
    const onUserScroll = () => { lastUserScrollRef.current = Date.now(); };
    const onResize = () => { shownRef.current = null; };
    audio?.addEventListener('seeked', paint);
    audio?.addEventListener('ended', clear);
    window.addEventListener('resize', onResize);
    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      clear();
      audio?.removeEventListener('seeked', paint);
      audio?.removeEventListener('ended', clear);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
    };
  }, [enabled, spoken, isPlaying, language, audioRef, textRefs]);
}
