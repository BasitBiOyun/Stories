import React from 'react';

// Phosphor Icons / CornersOut / Regular (MIT)
const PhosphorCornersOut = ({ size = 19 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M216,48V88a8,8,0,0,1-16,0V56H168a8,8,0,0,1,0-16h40A8,8,0,0,1,216,48ZM88,200H56V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H88a8,8,0,0,0,0-16Zm120-40a8,8,0,0,0-8,8v32H168a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,208,160ZM88,40H48a8,8,0,0,0-8,8V88a8,8,0,0,0,16,0V56H88a8,8,0,0,0,0-16Z" />
  </svg>
);

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
      <PhosphorCornersOut />
    </button>
  );
};
