import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';

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

/** Whether the page can go full screen, whether it is, and a toggle; the reader's settings menu renders the control. */
export const useFullscreen = () => {
  const [isSupported, setIsSupported] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    setIsSupported(typeof document !== 'undefined' && Boolean(document.documentElement.requestFullscreen));

    const syncFullscreenState = () => setIsFullscreen(Boolean(document.fullscreenElement));
    syncFullscreenState();
    document.addEventListener('fullscreenchange', syncFullscreenState);
    return () => document.removeEventListener('fullscreenchange', syncFullscreenState);
  }, []);

  const toggleFullscreen = async () => {
    try {
      if (document.fullscreenElement) {
        await document.exitFullscreen();
      } else if (document.documentElement.requestFullscreen) {
        await document.documentElement.requestFullscreen();
      }
    } catch {
      // Browsers may reject fullscreen when it is blocked by the environment.
    }
  };

  return { isSupported, isFullscreen, toggleFullscreen };
};

// Phosphor Icons / CornersIn / Regular (MIT)
const PhosphorCornersIn = ({ size = 19 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 256 256"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M152,96V48a8,8,0,0,1,16,0V88h40a8,8,0,0,1,0,16H160A8,8,0,0,1,152,96ZM96,152H48a8,8,0,0,0,0,16H88v40a8,8,0,0,0,16,0V160A8,8,0,0,0,96,152Zm112,0H160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168h40a8,8,0,0,0,0-16ZM96,40a8,8,0,0,0-8,8V88H48a8,8,0,0,0,0,16H96a8,8,0,0,0,8-8V48A8,8,0,0,0,96,40Z" />
  </svg>
);

export const FullscreenIcon = PhosphorCornersOut;
export const ExitFullscreenIcon = PhosphorCornersIn;

/** Floating full-screen control at the bottom corner of every screen; Escape leaves full screen. */
export const FullscreenButton = () => {
  const { isSupported, isFullscreen, toggleFullscreen } = useFullscreen();
  const { language, isRTL } = useLanguage();

  React.useEffect(() => {
    if (!isFullscreen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && document.fullscreenElement) {
        void document.exitFullscreen().catch(() => undefined);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isFullscreen]);

  if (!isSupported) return null;

  const label = isFullscreen
    ? (language === 'ar' ? 'الخروج من ملء الشاشة (Esc)' : 'Exit full screen (Esc)')
    : (language === 'ar' ? 'ملء الشاشة' : 'Full screen');

  return (
    <button
      type="button"
      onClick={() => { void toggleFullscreen(); }}
      className={cn(
        // Phone: a small control in the empty end of the reader's bottom bar, clear of the story text.
        "fixed bottom-2 z-[260] flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-black/45 text-white/80 shadow-lg backdrop-blur-md transition-colors hover:bg-black/60 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:bottom-20 sm:h-11 sm:w-11",
        isRTL ? "left-3 sm:left-auto sm:right-4" : "right-3 sm:right-4",
      )}
      title={label}
      aria-label={label}
      aria-pressed={isFullscreen}
      data-fullscreen-button
    >
      {isFullscreen ? <PhosphorCornersIn size={17} /> : <PhosphorCornersOut size={17} />}
    </button>
  );
};
