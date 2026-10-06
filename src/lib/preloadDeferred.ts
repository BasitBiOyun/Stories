import { ensureOpenDyslexicStyles } from './deferredStyles';
import { afterFirstInteraction } from './afterFirstInteraction';
import { preloadConfetti } from './confetti';
import { preloadEntityMap } from '../features/historical-entities/LazyEntityMap';
import { loadReaderChunks } from '../components/book/readerChunks';

/**
 * Parts kept out of the first download (reader pages, map outlines, confetti, the dyslexia font rules) are
 * fetched quietly once the page has settled, so they are already there when someone taps.
 */
export const preloadDeferredChunks = () => {
  const run = () => {
    ensureOpenDyslexicStyles();
    void preloadEntityMap().catch(() => undefined);
    void preloadConfetti().catch(() => undefined);
    void loadReaderChunks().catch(() => undefined);
  };
  afterFirstInteraction(() => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) idle(run, { timeout: 2000 });
    else window.setTimeout(run, 200);
  });
};
