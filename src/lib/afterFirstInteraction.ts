const EVENTS = ['pointerdown', 'keydown', 'scroll', 'touchstart'] as const;

/**
 * Runs `callback` on the first touch, key press or scroll, or after `fallbackMs` of quiet,
 * whichever comes first, so background downloads never compete with the first screen.
 * Returns a cancel function.
 */
export const afterFirstInteraction = (callback: () => void, fallbackMs = 10_000) => {
  let done = false;
  const fire = () => {
    if (done) return;
    done = true;
    cleanup();
    callback();
  };
  const timer = window.setTimeout(fire, fallbackMs);
  const cleanup = () => {
    window.clearTimeout(timer);
    EVENTS.forEach(name => window.removeEventListener(name, fire, true));
  };
  EVENTS.forEach(name => window.addEventListener(name, fire, { capture: true, passive: true }));
  return () => {
    done = true;
    cleanup();
  };
};
