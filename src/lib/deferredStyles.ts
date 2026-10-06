const OPEN_DYSLEXIC_CSS = 'https://cdn.jsdelivr.net/npm/open-dyslexic@1.0.3/dist/css/open-dyslexic.min.css';

/**
 * The OpenDyslexic font rules, added outside the first paint. Called in the background once the
 * page is idle, and at once when the dyslexia-friendly font is on, so turning it on never waits.
 */
export const ensureOpenDyslexicStyles = () => {
  if (typeof document === 'undefined' || document.querySelector(`link[href="${OPEN_DYSLEXIC_CSS}"]`)) return;
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = OPEN_DYSLEXIC_CSS;
  document.head.appendChild(link);
};
