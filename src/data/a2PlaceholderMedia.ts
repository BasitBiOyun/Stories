import type { PageData } from '../types';

const isPlaceholderImage = (value: string): boolean =>
  value.startsWith('https://picsum.photos/');

const isPlaceholderAudio = (value?: string): boolean =>
  Boolean(value?.includes('soundhelix.com/examples/mp3/'));

/**
 * Removes legacy/demo media from non-story A2 support pages without touching
 * canonical story pages. Placeholder images fall back to the first real story
 * image from the same book; demo audio is cleared.
 */
export const sanitizeA2PlaceholderMedia = (pages: PageData[]): PageData[] => {
  const fallbackImage = pages.find(
    (page) => page.type === 'story' && page.image && !isPlaceholderImage(page.image),
  )?.image || '';

  return pages.map((page) => {
    if (page.type === 'story') return page;

    const image = isPlaceholderImage(page.image) ? fallbackImage : page.image;
    const audioUrl = isPlaceholderAudio(page.audioUrl) ? '' : page.audioUrl;

    if (image === page.image && audioUrl === page.audioUrl) return page;
    return { ...page, image, audioUrl };
  });
};
