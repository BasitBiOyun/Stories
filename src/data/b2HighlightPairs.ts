import type { PageData } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';
import type { B2ExplicitHighlightPair } from './b2HighlightStandard';

export interface B2ReviewedPairSpec {
  en: string;
  ar: string;
  enDefinition?: string;
  arDefinition?: string;
}

export type B2ReviewedPairSpecs = Record<number, readonly B2ReviewedPairSpec[]>;

const fail = (storyKey: string, message: string): never => {
  throw new Error(`[${storyKey} B2 reviewed pairs] ${message}`);
};

const findStoryPage = (pages: PageData[], chapterId: number, storyKey: string, language: 'en' | 'ar'): PageData => {
  const page = pages.find((item) => item.type === 'story' && item.id === chapterId);
  if (!page) fail(storyKey, `Missing ${language.toUpperCase()} Chapter ${chapterId}.`);
  return page;
};

const findEntry = (
  page: PageData,
  requested: string,
  language: 'en' | 'ar',
): NonNullable<PageData['vocabulary']>[number] | undefined => {
  const key = normalizeHighlightText(requested, language);
  return (page.vocabulary ?? []).find((entry) => normalizeHighlightText(entry.word, language) === key);
};

/** Resolve compact, human-reviewed semantic pair specs against the current
 * grounded B2 Word Notes. A manual definition is required only when the
 * reviewed surface is intentionally drawn straight from locked prose rather
 * than from an existing Word Note. */
export const resolveB2ReviewedPairs = (
  englishPages: PageData[],
  arabicPages: PageData[],
  storyKey: string,
  specs: B2ReviewedPairSpecs,
): Record<number, readonly B2ExplicitHighlightPair[]> => Object.fromEntries(
  Object.entries(specs).map(([rawChapterId, chapterSpecs]) => {
    const chapterId = Number(rawChapterId);
    const enPage = findStoryPage(englishPages, chapterId, storyKey, 'en');
    const arPage = findStoryPage(arabicPages, chapterId, storyKey, 'ar');

    const pairs = chapterSpecs.map((spec): B2ExplicitHighlightPair => {
      const enEntry = findEntry(enPage, spec.en, 'en');
      const arEntry = findEntry(arPage, spec.ar, 'ar');
      const enDefinition = spec.enDefinition ?? enEntry?.definition;
      const arDefinition = spec.arDefinition ?? arEntry?.definition;

      if (!enDefinition?.trim()) {
        fail(storyKey, `Chapter ${chapterId} English target “${spec.en}” needs a reviewed definition.`);
      }
      if (!arDefinition?.trim()) {
        fail(storyKey, `Chapter ${chapterId} Arabic target “${spec.ar}” paired with “${spec.en}” needs a reviewed definition.`);
      }

      return {
        en: { word: spec.en, definition: enDefinition },
        ar: { word: spec.ar, definition: arDefinition },
      };
    });

    return [chapterId, pairs];
  }),
);
