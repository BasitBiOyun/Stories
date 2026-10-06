import type { Options } from 'canvas-confetti';

// canvas-confetti stays out of the first download; it is fetched in the background once the page
// is idle (see preloadDeferredChunks), so the burst still fires at once.
const loadConfetti = () => import('canvas-confetti');

export const preloadConfetti = () => loadConfetti();

const confetti = (options?: Options) => {
  void loadConfetti().then(module => module.default(options));
};

export default confetti;
