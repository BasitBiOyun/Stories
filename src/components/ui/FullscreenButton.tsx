import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { cn } from '../../lib/utils';
import { isStandalone } from '../../lib/pwa';

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

/** Whether the page can go full screen, whether it is, and a toggle; the top bar of each screen renders the control. */
export const useFullscreen = () => {
  const [isSupported, setIsSupported] = React.useState(false);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  React.useEffect(() => {
    // An app installed on a phone or tablet already fills the screen, so it offers no full-screen control. Installed
    // on a computer or a smart board it opens in a window, and the control stays.
    const handheld = window.matchMedia?.('(pointer: coarse)').matches && Math.min(window.screen.width, window.screen.height) < 820;
    setIsSupported(typeof document !== 'undefined' && Boolean(document.documentElement.requestFullscreen) && !(isStandalone() && handheld));

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

/** Round full-screen control for the top bar of each screen; hidden on phones, where the browser bar is the real limit. */
/** className replaces the idle colours, so a screen can match its own buttons. */
export const FullscreenToggle = ({ className }: { className?: string }) => {
  const { isSupported, isFullscreen, toggleFullscreen } = useFullscreen();
  const { language } = useLanguage();

  if (!isSupported) return null;

  const label = isFullscreen
    ? (language === 'ar' ? 'الخروج من ملء الشاشة (Esc)' : 'Exit full screen (Esc)')
    : (language === 'ar' ? 'ملء الشاشة' : 'Full screen');

  return (
    <button
      type="button"
      onClick={() => { void toggleFullscreen(); }}
      className={cn(
        "hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/70 sm:flex sm:h-11 sm:w-11",
        isFullscreen
          ? "border-gold bg-gold text-wood hover:bg-gold/90"
          : (className ?? "border-white/15 text-parchment/85 hover:bg-white/[0.08] hover:text-parchment"),
      )}
      title={label}
      aria-label={label}
      aria-pressed={isFullscreen}
      data-fullscreen-button
    >
      {isFullscreen ? <PhosphorCornersIn size={18} /> : <PhosphorCornersOut size={18} />}
    </button>
  );
};
