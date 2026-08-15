import type { PageData } from '../types';

export type A2HotspotCopyOverride = {
  title?: string;
  description?: string;
};

export type A2HotspotCopyOverrides = Record<number, Record<string, A2HotspotCopyOverride>>;

/**
 * Applies reviewed copy-only corrections to derived A2 hotspots.
 * Story prose, hotspot ids and geometry remain untouched.
 */
export const applyA2HotspotCopyOverrides = (
  pages: PageData[],
  overrides: A2HotspotCopyOverrides,
): PageData[] => pages.map((page) => {
  const chapterOverrides = overrides[page.id];
  if (!chapterOverrides || !page.hotspots?.length) return page;

  return {
    ...page,
    hotspots: page.hotspots.map((hotspot) => {
      const replacement = chapterOverrides[hotspot.id];
      return replacement ? { ...hotspot, ...replacement } : hotspot;
    }),
  };
});
