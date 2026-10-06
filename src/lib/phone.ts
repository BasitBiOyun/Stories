import type React from 'react';
import { useEffect, useRef } from 'react';
import { useDragControls, type PanInfo } from 'motion/react';
import { useMediaQuery } from './useMediaQuery';

/** Phones: the same breakpoint as Tailwind's `max-sm:` (below 640px). */
export const PHONE_QUERY = '(max-width: 639px)';

export const useIsPhone = (): boolean => useMediaQuery(PHONE_QUERY);

/**
 * Phones: when feedback appears under an answer, scroll just far enough that it and its
 * Next button are on screen (the Final Challenge pattern). Nothing is pinned or overlaid.
 */
export const useRevealOnPhone = <T extends HTMLElement>(trigger: unknown) => {
  const ref = useRef<T>(null);
  useEffect(() => {
    if (!trigger || !window.matchMedia(PHONE_QUERY).matches) return;
    const id = window.setTimeout(() => ref.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }), 180);
    return () => window.clearTimeout(id);
  }, [trigger]);
  return ref;
};

/**
 * Bottom sheets: pulling the grip (the bar on top) down closes the sheet, as in native apps.
 * Spread `sheet` on the motion element and `grip` on the grip area.
 */
export const useSheetDrag = (onClose: () => void) => {
  const controls = useDragControls();
  return {
    sheet: {
      drag: 'y' as const,
      dragControls: controls,
      dragListener: false,
      dragConstraints: { top: 0, bottom: 0 },
      dragElastic: { top: 0, bottom: 1 },
      onDragEnd: (_event: unknown, info: PanInfo) => {
        if (info.offset.y > 70 || info.velocity.y > 450) onClose();
      },
    },
    grip: {
      onPointerDown: (event: React.PointerEvent) => controls.start(event),
      style: { touchAction: 'none' } as React.CSSProperties,
    },
  };
};
