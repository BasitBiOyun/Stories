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

/**
 * "Follow along": while the chapter audio plays, a marker slides under the word being read.
 * Word times come from <audio>.timings.json; without that file nothing is shown.
 */
export function useFollowAlong({
  enabled,
  timingsUrl,
  audioRef,
  textRefs,
  markerRefs,
  language,
  isPlaying,
}: {
  enabled: boolean;
  timingsUrl: string | null;
  audioRef: RefObject<HTMLAudioElement | null>;
  textRefs: RefObject<HTMLDivElement | null>[];
  markerRefs: RefObject<HTMLDivElement | null>[];
  language: HighlightLanguage;
  isPlaying: boolean;
}) {
  const [spoken, setSpoken] = useState<TimedWord[] | null>(null);
  const shownRef = useRef<ShownWords | null>(null);
  const currentRef = useRef<number>(-1);
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
    const active = enabled && !!spoken?.length;
    const hideAll = () => {
      currentRef.current = -1;
      markerRefs.forEach(ref => { if (ref.current) ref.current.style.opacity = '0'; });
    };
    if (!active || !spoken) { hideAll(); return; }

    const textEls = textRefs.map(ref => ref.current);
    const observer = new MutationObserver(() => { shownRef.current = null; });
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
      currentRef.current = -1;
      return shownRef.current;
    };

    const place = (force = false) => {
      const audio = audioRef.current;
      const shown = shownWords();
      if (!audio || !shown || audio.ended || (audio.paused && audio.currentTime === 0)) { hideAll(); return; }
      const t = audio.currentTime;
      // Last spoken word that has started; it stays marked through the pause after it.
      let lo = 0;
      let hi = spoken.length - 1;
      let idx = -1;
      while (lo <= hi) {
        const mid = (lo + hi) >> 1;
        if (spoken[mid].s <= t) { idx = mid; lo = mid + 1; } else hi = mid - 1;
      }
      while (idx >= 0 && !shown.rangeForSpoken.has(idx)) idx--;
      if (idx < 0) { hideAll(); return; }
      const rangeIdx = shown.rangeForSpoken.get(idx)!;
      if (rangeIdx === currentRef.current && !force) return;
      currentRef.current = rangeIdx;

      const markerIdx = textEls.findIndex(el => el === shown.container);
      markerRefs.forEach((ref, i) => { if (i !== markerIdx && ref.current) ref.current.style.opacity = '0'; });
      const marker = markerRefs[markerIdx]?.current;
      const box = marker?.offsetParent as HTMLElement | null;
      if (!marker || !box) return;
      const rect = shown.ranges[rangeIdx].getBoundingClientRect();
      if (!rect.width) { shownRef.current = null; return; }
      const boxRect = box.getBoundingClientRect();
      marker.style.width = `${rect.width}px`;
      marker.style.transform = `translate(${rect.left - boxRect.left}px, ${rect.bottom - boxRect.top + 1}px)`;
      marker.style.opacity = '1';

      if (!audio.paused && Date.now() - lastUserScrollRef.current > 4000
        && (rect.top < 80 || rect.bottom > window.innerHeight - 120)) {
        shown.ranges[rangeIdx].startContainer.parentElement?.scrollIntoView({ block: 'center', behavior: 'smooth' });
      }
    };

    let frame = 0;
    const loop = () => { place(); frame = requestAnimationFrame(loop); };
    if (isPlaying) frame = requestAnimationFrame(loop);
    else place(true);

    const audio = audioRef.current;
    const onSeek = () => place(true);
    const onResize = () => { shownRef.current = null; place(true); };
    const onUserScroll = () => { lastUserScrollRef.current = Date.now(); };
    audio?.addEventListener('seeked', onSeek);
    audio?.addEventListener('ended', hideAll);
    window.addEventListener('resize', onResize);
    window.addEventListener('wheel', onUserScroll, { passive: true });
    window.addEventListener('touchmove', onUserScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      audio?.removeEventListener('seeked', onSeek);
      audio?.removeEventListener('ended', hideAll);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('wheel', onUserScroll);
      window.removeEventListener('touchmove', onUserScroll);
    };
  }, [enabled, spoken, isPlaying, language, audioRef, textRefs, markerRefs]);
}
