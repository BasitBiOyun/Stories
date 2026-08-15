import type { PageData } from '../types';
import { highlightPhraseOccurs, normalizeHighlightText } from '../lib/highlightTextMatch';
import { fallbackDefinitions, arabicAnimatedDefinitions } from './fallbackVocab';
import { arabicHighlightDefinitions } from './arabicHighlightDefinitions';

export type A2HighlightLanguage = 'en' | 'ar';

type HighlightText = NonNullable<PageData['vocabulary']>[number];

export interface A2CanonicalHighlightTarget {
  id: string;
  chapterId: number;
  en: HighlightText;
  ar: HighlightText;
}

export type A2ArabicHighlightOverride = {
  word: string;
  definition?: string;
};

export type A2ArabicHighlightOverrides = Record<
  number,
  Record<string, string | A2ArabicHighlightOverride>
>;

export interface A2HighlightStandardConfig {
  storyKey: string;
  storyIds: number[];
  glossaryPageIds: [number, number];
  arabicOverrides?: A2ArabicHighlightOverrides;
}

export interface A2HighlightStandardResult {
  targets: Record<number, readonly A2CanonicalHighlightTarget[]>;
  englishPages: PageData[];
  arabicPages: PageData[];
}

const arabicFallbackDefinitions = new Map<string, string>([
  ...Object.entries(arabicAnimatedDefinitions).map(([word, definition]) => [
    normalizeHighlightText(word, 'ar'),
    definition,
  ] as const),
  ...Object.entries(arabicHighlightDefinitions),
]);

const englishFallbackDefinition = (word: string): string | undefined => {
  const key = word.toLowerCase().trim();
  return fallbackDefinitions[key]
    ?? Object.entries(fallbackDefinitions).find(([candidate]) => (
      normalizeHighlightText(candidate, 'en') === normalizeHighlightText(word, 'en')
    ))?.[1];
};

const arabicFallbackDefinition = (word: string): string | undefined => (
  arabicFallbackDefinitions.get(normalizeHighlightText(word, 'ar'))
);

const fail = (storyKey: string, message: string): never => {
  throw new Error(`[${storyKey} A2 highlight contract] ${message}`);
};

const storyPage = (
  pages: PageData[],
  chapterId: number,
  storyKey: string,
  language: A2HighlightLanguage,
): PageData => {
  const page = pages.find((item) => item.type === 'story' && item.id === chapterId);
  if (!page) fail(storyKey, `Missing ${language.toUpperCase()} Chapter ${chapterId}.`);
  return page;
};

const overrideFor = (
  config: A2HighlightStandardConfig,
  chapterId: number,
  englishWord: string,
): A2ArabicHighlightOverride | undefined => {
  const chapterOverrides = config.arabicOverrides?.[chapterId];
  if (!chapterOverrides) return undefined;
  const normalized = normalizeHighlightText(englishWord, 'en');
  const match = Object.entries(chapterOverrides).find(([candidate]) => (
    normalizeHighlightText(candidate, 'en') === normalized
  ));
  if (!match) return undefined;
  return typeof match[1] === 'string' ? { word: match[1] } : match[1];
};

const resolveArabicAnimatedDefinition = (
  word: string,
  page: PageData,
  explicit?: string,
): string | undefined => {
  if (explicit?.trim()) return explicit;
  const direct = arabicFallbackDefinition(word);
  if (direct?.trim()) return direct;
  const sameWord = page.vocabulary?.find((entry) => (
    normalizeHighlightText(entry.word, 'ar') === normalizeHighlightText(word, 'ar')
  ));
  return sameWord?.definition?.trim() ? sameWord.definition : undefined;
};

const targetId = (chapterId: number, word: string): string => {
  const normalized = normalizeHighlightText(word, 'en') || word.toLowerCase().trim();
  const slug = normalized.replace(/\s+/g, '-');
  return `ch${chapterId}-${slug}`;
};

/**
 * Consolidates the currently configured English A2 reader highlights into one
 * bilingual canonical target set. English is the only selection authority.
 * Arabic contributes only the same target's surface form and learner definition.
 *
 * Legacy page.vocabulary / page.animatedWords are treated only as migration input.
 * The returned story pages contain one runtime source: page.vocabulary.
 */
export const applyA2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2HighlightStandardConfig,
): A2HighlightStandardResult => {
  const seenEnglish = new Set<string>();
  const targets: Record<number, readonly A2CanonicalHighlightTarget[]> = {};

  for (const chapterId of config.storyIds) {
    const enPage = storyPage(englishPages, chapterId, config.storyKey, 'en');
    const arPage = storyPage(arabicPages, chapterId, config.storyKey, 'ar');
    const chapterTargets: A2CanonicalHighlightTarget[] = [];

    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    enVocabulary.forEach((entry, index) => {
      const key = normalizeHighlightText(entry.word, 'en');
      if (!key || seenEnglish.has(key)) return;
      const explicit = overrideFor(config, chapterId, entry.word);
      const arEntry = arVocabulary[index];
      if (!explicit && !arEntry) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no vocabulary pair for English target “${entry.word}”.`);
      }
      const arWord = explicit?.word ?? arEntry!.word;
      const arDefinition = explicit?.definition ?? arEntry?.definition;
      if (!arDefinition?.trim()) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} target “${arWord}” has no learner definition for English target “${entry.word}”.`);
      }
      chapterTargets.push({
        id: targetId(chapterId, entry.word),
        chapterId,
        en: { ...entry },
        ar: { word: arWord, definition: arDefinition },
      });
      seenEnglish.add(key);
    });

    const enAnimated = enPage.animatedWords ?? [];
    const arAnimated = arPage.animatedWords ?? [];

    enAnimated.forEach((word, index) => {
      const key = normalizeHighlightText(word, 'en');
      if (!key || seenEnglish.has(key)) return;

      const explicit = overrideFor(config, chapterId, word);
      const arWord = explicit?.word ?? arAnimated[index];
      if (!arWord) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} has no pair for English highlight “${word}”.`);
      }

      const enDefinition = englishFallbackDefinition(word);
      if (!enDefinition?.trim()) {
        fail(config.storyKey, `English Chapter ${chapterId} highlight “${word}” has no learner definition.`);
      }

      const arDefinition = resolveArabicAnimatedDefinition(arWord, arPage, explicit?.definition);
      if (!arDefinition?.trim()) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} highlight “${arWord}” has no learner definition for English target “${word}”.`);
      }

      chapterTargets.push({
        id: targetId(chapterId, word),
        chapterId,
        en: { word, definition: enDefinition },
        ar: { word: arWord, definition: arDefinition },
      });
      seenEnglish.add(key);
    });

    targets[chapterId] = chapterTargets;
  }

  const applyLanguage = (pages: PageData[], language: A2HighlightLanguage): PageData[] => {
    const storyIds = new Set(config.storyIds);
    const midpoint = Math.ceil(config.storyIds.length / 2);
    const firstGlossary = config.storyIds
      .slice(0, midpoint)
      .flatMap((id) => targets[id] ?? [])
      .map((target) => ({ ...target[language] }));
    const secondGlossary = config.storyIds
      .slice(midpoint)
      .flatMap((id) => targets[id] ?? [])
      .map((target) => ({ ...target[language] }));

    return pages.map((page) => {
      if (page.type === 'story' && storyIds.has(page.id)) {
        return {
          ...page,
          vocabulary: (targets[page.id] ?? []).map((target) => ({ ...target[language] })),
          animatedWords: undefined,
        };
      }

      if (page.id === config.glossaryPageIds[0]) {
        return {
          ...page,
          content: language === 'ar'
            ? 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الْأَوَّلِ مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ.'
            : 'All highlighted words from the first half of the story for review.',
          vocabulary: firstGlossary,
        };
      }

      if (page.id === config.glossaryPageIds[1]) {
        return {
          ...page,
          content: language === 'ar'
            ? 'جَمِيعُ الْكَلِمَاتِ الْمُظَلَّلَةِ فِي النِّصْفِ الثَّانِي مِنَ الْقِصَّةِ لِلْمُرَاجَعَةِ.'
            : 'All highlighted words from the second half of the story for review.',
          vocabulary: secondGlossary,
        };
      }

      return page;
    });
  };

  return {
    targets,
    englishPages: applyLanguage(englishPages, 'en'),
    arabicPages: applyLanguage(arabicPages, 'ar'),
  };
};

export const validateA2HighlightStandard = (
  englishPages: PageData[],
  arabicPages: PageData[],
  targets: Record<number, readonly A2CanonicalHighlightTarget[]>,
  config: A2HighlightStandardConfig,
): void => {
  for (const chapterId of config.storyIds) {
    const enPage = storyPage(englishPages, chapterId, config.storyKey, 'en');
    const arPage = storyPage(arabicPages, chapterId, config.storyKey, 'ar');
    const expected = targets[chapterId] ?? [];
    const enVocabulary = enPage.vocabulary ?? [];
    const arVocabulary = arPage.vocabulary ?? [];

    if (enPage.animatedWords?.length || arPage.animatedWords?.length) {
      fail(config.storyKey, `Chapter ${chapterId} still has legacy animatedWords after standardization.`);
    }
    if (enVocabulary.length !== expected.length || arVocabulary.length !== expected.length) {
      fail(config.storyKey, `Chapter ${chapterId} EN/AR highlight counts diverged from the canonical target count.`);
    }

    expected.forEach((target, index) => {
      const enEntry = enVocabulary[index];
      const arEntry = arVocabulary[index];
      if (!enEntry?.definition?.trim() || !arEntry?.definition?.trim()) {
        fail(config.storyKey, `Chapter ${chapterId} target ${target.id} has an empty definition.`);
      }
      if (!highlightPhraseOccurs(enPage.content ?? '', enEntry.word, 'en')) {
        fail(config.storyKey, `English Chapter ${chapterId} target “${enEntry.word}” is not in the story prose.`);
      }
      if (!highlightPhraseOccurs(arPage.content ?? '', arEntry.word, 'ar')) {
        fail(config.storyKey, `Arabic Chapter ${chapterId} target “${arEntry.word}” is not in the story prose.`);
      }
    });
  }

  const midpoint = Math.ceil(config.storyIds.length / 2);
  const expectedGlossaryCounts = [
    config.storyIds.slice(0, midpoint).reduce((sum, id) => sum + (targets[id]?.length ?? 0), 0),
    config.storyIds.slice(midpoint).reduce((sum, id) => sum + (targets[id]?.length ?? 0), 0),
  ];

  config.glossaryPageIds.forEach((pageId, index) => {
    const enGlossary = englishPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    const arGlossary = arabicPages.find((page) => page.id === pageId)?.vocabulary ?? [];
    if (enGlossary.length !== expectedGlossaryCounts[index] || arGlossary.length !== expectedGlossaryCounts[index]) {
      fail(config.storyKey, `Glossary page ${pageId} is not synchronized with the canonical story highlights.`);
    }
  });
};
