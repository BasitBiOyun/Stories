import type { Exercise, PageData } from '../types';
import type { B1BlueprintConfig } from './b1BlueprintSystem';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';

export interface PreparedB1GoldStructure {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B1BlueprintConfig & { vocabularyPageId: number };
}

const makeVocabularyPage = (
  id: number,
  language: BlueprintLanguage,
  image: string,
): PageData => ({
  id,
  type: 'vocabulary-match',
  title: language === 'ar' ? 'تحدي المفردات' : 'Vocabulary Challenge',
  content: language === 'ar'
    ? 'طابق عشر كلمات أساسية من القصة مع معانيها في السياق.'
    : 'Match ten high-value story words with their meanings in context.',
  image,
  vocabularyPairs: [],
});

const injectVocabularyPage = (
  pages: PageData[],
  vocabularyPageId: number,
  language: BlueprintLanguage,
): PageData[] => {
  const image = pages.find(page => page.id === vocabularyPageId - 1)?.image
    ?? pages.find(page => page.type !== 'story')?.image
    ?? '';

  const shifted = pages.map(page => (
    page.type !== 'story' && page.id >= vocabularyPageId
      ? { ...page, id: page.id + 1 }
      : page
  ));

  return [...shifted, makeVocabularyPage(vocabularyPageId, language, image)]
    .sort((a, b) => a.id - b.id);
};

/**
 * Normalises the visible B1 learning-page structure without touching story-page
 * prose, chapter IDs, media, timed chunks, or story order. Books that already
 * have a Vocabulary Challenge keep their existing page IDs. Older B1 books get
 * one learning-only page inserted directly after Knowledge Check.
 */
export const prepareB1GoldLearningStructure = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B1BlueprintConfig;
}): PreparedB1GoldStructure => {
  if (config.vocabularyPageId) {
    return {
      englishPages,
      arabicPages,
      config: { ...config, vocabularyPageId: config.vocabularyPageId },
    };
  }

  const vocabularyPageId = config.knowledgeCheckPageId + 1;
  return {
    englishPages: injectVocabularyPage(englishPages, vocabularyPageId, 'en'),
    arabicPages: injectVocabularyPage(arabicPages, vocabularyPageId, 'ar'),
    config: {
      ...config,
      vocabularyPageId,
      reviewPageId: config.reviewPageId + 1,
      glossaryPageIds: [config.glossaryPageIds[0] + 1, config.glossaryPageIds[1] + 1],
      finalChallengePageId: config.finalChallengePageId + 1,
    },
  };
};

const key = (value: string) => value.trim().toLocaleLowerCase('en-US');

/**
 * Curated words are preferred, but a missing legacy target never blocks a book
 * load. The remaining slots are filled with unique story-grounded Blueprint
 * targets until the B1 policy total of ten is reached.
 */
export const applyB1CuratedVocabulary = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  vocabularyPageId: number,
  language: BlueprintLanguage,
  wantedWords: readonly string[],
): PageData[] => {
  const allTargets = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  const uniqueTargets = allTargets.filter((target, index, array) => (
    array.findIndex(candidate => key(candidate.en.word) === key(target.en.word)) === index
  ));

  const selected: typeof uniqueTargets = [];
  const used = new Set<string>();

  wantedWords.forEach(word => {
    const target = uniqueTargets.find(candidate => key(candidate.en.word) === key(word));
    if (!target) return;
    const targetKey = key(target.en.word);
    if (used.has(targetKey)) return;
    used.add(targetKey);
    selected.push(target);
  });

  uniqueTargets.forEach(target => {
    if (selected.length >= 10) return;
    const targetKey = key(target.en.word);
    if (used.has(targetKey)) return;
    used.add(targetKey);
    selected.push(target);
  });

  return pages.map(page => page.id === vocabularyPageId
    ? {
        ...page,
        vocabularyPairs: selected.slice(0, 10).map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
        })),
      }
    : page);
};

export const applyB1GoldReview = (
  pages: PageData[],
  reviewPageId: number,
  exercises: Exercise[],
): PageData[] => pages.map(page => page.id === reviewPageId
  ? { ...page, exercises }
  : page);
