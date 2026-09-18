import type { Exercise, PageData, PageType } from '../types';
import type { B1BlueprintConfig } from './b1BlueprintSystem';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';
import { getLearningLevelPolicy } from './learningLevelPolicy';

const B1_VOCABULARY_COUNT = getLearningLevelPolicy('B1').vocabularyCount;

export interface PreparedB1GoldStructure {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: B1BlueprintConfig & { vocabularyPageId: number };
}

const makeLearningPage = (
  id: number,
  type: PageType,
  language: BlueprintLanguage,
  image: string,
): PageData => {
  const copy: Record<PageType, { en: [string, string]; ar: [string, string] }> = {
    story: { en: ['', ''], ar: ['', ''] },
    quiz: { en: ['B1 Knowledge Check', 'Explain relationships from across the story.'], ar: ['اختبار الفهم B1', 'اشرح العلاقات في القصة كاملة.'] },
    'vocabulary-match': { en: ['B1 Vocabulary Challenge', 'Practise twelve high-value story words through matching, context, and guided recall.'], ar: ['تحدي مفردات B1', 'تدرّب على اثنتي عشرة كلمة أساسية من القصة عبر المطابقة والسياق والاسترجاع الموجّه.'] },
    sequencing: { en: ['', ''], ar: ['', ''] },
    game: { en: ['', ''], ar: ['', ''] },
    exercises: { en: ['B1 Retrieval Review', 'Retrieve sequence, relationships, evidence, and key lessons.'], ar: ['مراجعة الاسترجاع B1', 'استرجع التسلسل والعلاقات والأدلة والدروس الأساسية.'] },
    glossary: { en: ['B1 Master Glossary', 'Review story vocabulary in context.'], ar: ['مسرد B1 الشامل', 'راجع مفردات القصة في السياق.'] },
    'final-challenge': { en: ['B1 Final Challenge', 'Use evidence to explain the story’s main relationships.'], ar: ['التحدي النهائي B1', 'استخدم الدليل لشرح العلاقات الرئيسة في القصة.'] },
    map: { en: ['', ''], ar: ['', ''] },
  };
  const [title, content] = copy[type][language];
  return { id, type, title, content, image, vocabularyPairs: type === 'vocabulary-match' ? [] : undefined };
};

const normaliseLanguagePages = (
  pages: PageData[],
  config: B1BlueprintConfig,
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

  const storyPages = pages.filter(page => page.type === 'story');
  const knownLearningIds = new Set<number>([
    config.knowledgeCheckPageId,
    config.reviewPageId,
    ...config.glossaryPageIds,
    config.finalChallengePageId,
    ...(config.vocabularyPageId ? [config.vocabularyPageId] : []),
  ]);
  const extraPages = pages.filter(page => page.type !== 'story' && !knownLearningIds.has(page.id));

  const learningPages: PageData[] = [
    findOrMake(config.knowledgeCheckPageId, target.knowledge, 'quiz'),
    findOrMake(config.glossaryPageIds[0], target.glossary1, 'glossary'),
    findOrMake(config.glossaryPageIds[1], target.glossary2, 'glossary'),
    findOrMake(config.vocabularyPageId, target.vocabulary, 'vocabulary-match'),
    findOrMake(config.reviewPageId, target.review, 'exercises'),
    findOrMake(config.finalChallengePageId, target.final, 'final-challenge'),
  ];

  return [...storyPages, ...learningPages, ...extraPages]
    .sort((a, b) => a.id - b.id);
};

/**
 * Gives every reviewed B1 book the same visible learning-page order:
 * Knowledge → Glossary I → Glossary II → Vocabulary → Retrieval Review → Final.
 * Only non-story learning page IDs are remapped. Chapter IDs, story prose,
 * media, audio, timed chunks, and chapter order remain untouched.
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
  const firstLearningId = Math.max(...config.storyIds) + 1;
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

/**
 * Curated words are preferred, but a missing legacy target never blocks a book
 * load. Remaining slots are filled with unique story-grounded Blueprint targets
 * until the B1 policy target is reached.
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
    if (selected.length >= B1_VOCABULARY_COUNT) return;
    const targetKey = key(target.en.word);
    if (used.has(targetKey)) return;
    used.add(targetKey);
    selected.push(target);
  });

  return pages.map(page => page.id === vocabularyPageId
    ? {
        ...page,
        vocabularyPairs: selected.slice(0, B1_VOCABULARY_COUNT).map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
          context: target[language].example,
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
