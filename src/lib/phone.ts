import { useMediaQuery } from './useMediaQuery';

/** Phones: the same breakpoint as Tailwind's `max-sm:` (below 640px). */
export const PHONE_QUERY = '(max-width: 639px)';

export const useIsPhone = (): boolean => useMediaQuery(PHONE_QUERY);

/**
 * On phones the main action of an exercise (Check, Next, feedback) stays pinned to the
 * bottom of the scrolling area, so it never hides below the fold. Desktop is unchanged.
 */
export const PHONE_DOCK =
  'max-sm:sticky max-sm:bottom-0 max-sm:z-20 max-sm:shadow-[0_-10px_24px_-12px_rgba(20,34,26,0.35)]';
