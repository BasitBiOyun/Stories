import React from 'react';
import { Move } from './icons';

export const FullscreenButton = () => {
  const [isSupported, setIsSupported] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    setIsSupported(typeof document !== 'undefined' && Boolean(document.documentElement.requestFullscreen));

    const syncFullscreenState = () => setIsFullscreen(Boolean(document.fullscreenElement));
    syncFullscreenState();
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, []);

  const enterFullscreen = async () => {
    if (!document.documentElement.requestFullscreen || document.fullscreenElement) return;
    try {
      await document.documentElement.requestFullscreen();
    } catch {
      // Browsers may reject fullscreen when it is blocked by the environment.
    }
  };

  if (!isSupported || isFullscreen) return null;

  return (
    <button
      type="button"
      onClick={enterFullscreen}
      className="fixed right-3 sm:right-4 bottom-16 sm:bottom-20 z-[260] w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-white/15 bg-black/45 backdrop-blur-md text-white/80 hover:text-white hover:bg-black/60 transition-colors shadow-lg flex items-center justify-center"
      title="Full screen"
      aria-label="Full screen"
    >
      <Move size={19} />
    </button>
  );
};
