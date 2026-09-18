import type { Exercise, PageData, PageType } from '../types';
import type { B2BlueprintConfig } from './b2BlueprintSystem';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';
import { getLearningLevelPolicy } from './learningLevelPolicy';

const B2_VOCABULARY_COUNT = getLearningLevelPolicy('B2').vocabularyCount;

export interface PreparedB2GoldStructure {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B2BlueprintConfig & { vocabularyPageId: number };
}

const learningIds = (config: B2BlueprintConfig): Set<number> => new Set<number>([
  config.knowledgeCheckPageId,
  config.reviewPageId,
  ...config.glossaryPageIds,
  config.finalChallengePageId,
  ...(config.vocabularyPageId ? [config.vocabularyPageId] : []),
]);

const makeLearningPage = (
  id: number,
  type: PageType,
  language: BlueprintLanguage,
  image: string,
): PageData => {
  const copy: Record<PageType, { en: [string, string]; ar: [string, string] }> = {
    story: { en: ['', ''], ar: ['', ''] },
    quiz: {
      en: ['B2 Knowledge Check', 'Connect evidence, causes, contrasts, and turning points from across the story.'],
      ar: ['اختبار الفهم B2', 'اربط بين الأدلة والأسباب والمقارنات ونقاط التحول في القصة كاملة.'],
    },
    'vocabulary-match': {
      en: ['B2 Vocabulary Challenge', 'Practise fourteen high-value story words through matching, context, and independent recall.'],
      ar: ['تحدي مفردات B2', 'تدرّب على أربع عشرة كلمة أساسية من القصة عبر المطابقة والسياق والاسترجاع المستقل.'],
    },
    sequencing: { en: ['', ''], ar: ['', ''] },
    game: { en: ['', ''], ar: ['', ''] },
    exercises: {
      en: ['B2 Retrieval Review', 'Retrieve the story, connect major ideas, and explain what the text supports.'],
      ar: ['مراجعة الاسترجاع B2', 'استرجع القصة واربط الأفكار الرئيسة واشرح ما يدعمه النص.'],
    },
    glossary: {
      en: ['B2 Master Glossary', 'Review story vocabulary in context.'],
      ar: ['مسرد B2 الشامل', 'راجع مفردات القصة في السياق.'],
    },
    'final-challenge': {
      en: ['B2 Final Challenge', 'Analyse the book’s main relationships with accurate story evidence.'],
      ar: ['التحدي النهائي B2', 'حلل العلاقات الرئيسة في الكتاب باستخدام أدلة دقيقة من القصة.'],
    },
    map: { en: ['', ''], ar: ['', ''] },
  };

  const [title, content] = copy[type][language];
  return {
    id,
    type,
    title,
    content,
    image,
    vocabularyPairs: type === 'vocabulary-match' ? [] : undefined,
  };
};

const normaliseLanguagePages = (
  pages: PageData[],
  config: B2BlueprintConfig,
  language: BlueprintLanguage,
  target: {
    knowledge: number;
    vocabulary: number;
    review: number;
    glossary1: number;
    glossary2: number;
    final: number;
  },
): PageData[] => {
  const image = pages.find(page => page.type !== 'story')?.image ?? '';
  const findOrMake = (sourceId: number | undefined, targetId: number, type: PageType): PageData => {
    const source = sourceId === undefined ? undefined : pages.find(page => page.id === sourceId);
    return source ? { ...source, id: targetId, type } : makeLearningPage(targetId, type, language, image);
  };

  const knownLearningIds = learningIds(config);
  // Preserve every canonical/content page that is not one of the old learning pages.
  // This includes story chapters and intentional appendices such as a References page,
  // even when an appendix historically uses type='story'.
  const preservedPages = pages.filter(page => !knownLearningIds.has(page.id));

  const learningPages: PageData[] = [
    findOrMake(config.knowledgeCheckPageId, target.knowledge, 'quiz'),
    findOrMake(config.glossaryPageIds[0], target.glossary1, 'glossary'),
    findOrMake(config.glossaryPageIds[1], target.glossary2, 'glossary'),
    findOrMake(config.vocabularyPageId, target.vocabulary, 'vocabulary-match'),
    findOrMake(config.reviewPageId, target.review, 'exercises'),
    findOrMake(config.finalChallengePageId, target.final, 'final-challenge'),
  ];

  return [...preservedPages, ...learningPages].sort((a, b) => a.id - b.id);
};

/**
 * Gives every reviewed B2 book the same visible learning-page order:
 * Knowledge → Glossary I → Glossary II → Vocabulary → Retrieval Review → Final.
 * Story chapter IDs, prose, media, audio, timed chunks, chapter order and
 * intentional appendix/reference pages are never changed.
 */
export const prepareB2GoldLearningStructure = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B2BlueprintConfig;
}): PreparedB2GoldStructure => {
  const knownLearningIds = learningIds(config);
  const preservedIds = [...englishPages, ...arabicPages]
    .filter(page => !knownLearningIds.has(page.id))
    .map(page => page.id);
  const firstLearningId = Math.max(...config.storyIds, ...preservedIds) + 1;
  const target = {
    knowledge: firstLearningId,
    glossary1: firstLearningId + 1,
    glossary2: firstLearningId + 2,
    vocabulary: firstLearningId + 3,
    review: firstLearningId + 4,
    final: firstLearningId + 5,
  };

  return {
    englishPages: normaliseLanguagePages(englishPages, config, 'en', target),
    arabicPages: normaliseLanguagePages(arabicPages, config, 'ar', target),
    config: {
      ...config,
      knowledgeCheckPageId: target.knowledge,
      vocabularyPageId: target.vocabulary,
      reviewPageId: target.review,
      glossaryPageIds: [target.glossary1, target.glossary2],
      finalChallengePageId: target.final,
    },
  };
};

const key = (value: string) => value.trim().toLocaleLowerCase('en-US');

export const applyB2CuratedVocabulary = (
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
    if (selected.length >= B2_VOCABULARY_COUNT) return;
    const targetKey = key(target.en.word);
    if (used.has(targetKey)) return;
    used.add(targetKey);
    selected.push(target);
  });

  return pages.map(page => page.id === vocabularyPageId
    ? {
        ...page,
        vocabularyPairs: selected.slice(0, B2_VOCABULARY_COUNT).map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
          context: target[language].example,
        })),
      }
    : page);
};

export const applyB2GoldReview = (
  pages: PageData[],
  reviewPageId: number,
  exercises: Exercise[],
): PageData[] => pages.map(page => page.id === reviewPageId
  ? { ...page, exercises }
  : page);
