import { ensureOpenDyslexicStyles } from './deferredStyles';
import { preloadConfetti } from './confetti';
import { preloadEntityMap } from '../features/historical-entities/LazyEntityMap';

/**
 * Parts kept out of the first download (map outlines, confetti, the dyslexia font rules) are
 * fetched quietly once the page has settled, so they are already there when someone taps.
 */
export const preloadDeferredChunks = () => {
  const run = () => {
    ensureOpenDyslexicStyles();
    void preloadEntityMap().catch(() => undefined);
    void preloadConfetti().catch(() => undefined);
  };
  const start = () => {
    const idle = (window as Window & { requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number }).requestIdleCallback;
    if (idle) idle(run, { timeout: 4000 });
    else window.setTimeout(run, 1500);
  };
  if (document.readyState === 'complete') start();
  else window.addEventListener('load', start, { once: true });
};
