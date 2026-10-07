import type { Level } from '../types';

/** The file name of one edition: one story, one level, one language. */
export const editionName = (storyId: string, level: Level, language: 'en' | 'ar'): string =>
  `${storyId}-${level.toLowerCase()}-${language}`;
