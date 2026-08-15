import type { Exercise, PageData, QuizQuestion } from '../types';
import type { A2GoldPageConfig } from './a2GoldFactory';
import { applyA2ParallelLearning } from './a2ParallelLearning';

const fail = (message: string): never => {
  throw new Error(`[A2 bilingual parity] ${message}`);
};

const requirePage = (pages: PageData[], id: number, language: 'English' | 'Arabic'): PageData => {
  const page = pages.find((item) => item.id === id);
  if (!page) fail(`${language} page ${id} is missing.`);
  return page;
};

const validateSourceShape = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2GoldPageConfig,
): void => {
  config.storyIds.forEach((chapterId) => {
    const english = requirePage(englishPages, chapterId, 'English');
    const arabic = requirePage(arabicPages, chapterId, 'Arabic');

    if (english.type !== 'story' || arabic.type !== 'story') {
      fail(`Chapter ${chapterId} must be a story page in both languages.`);
    }

    const englishHotspots = english.hotspots || [];
    const arabicHotspots = arabic.hotspots || [];
    if (englishHotspots.length !== arabicHotspots.length) {
      fail(`Chapter ${chapterId} hotspot counts differ: EN=${englishHotspots.length}, AR=${arabicHotspots.length}.`);
    }

    englishHotspots.forEach((hotspot, index) => {
      const arabicHotspot = arabicHotspots[index];
      if (!arabicHotspot || hotspot.id !== arabicHotspot.id) {
        fail(`Chapter ${chapterId} hotspot ${index + 1} is not paired by the same source id.`);
      }
    });

    const englishVocabulary = english.vocabulary || [];
    const arabicVocabulary = arabic.vocabulary || [];
    if (englishVocabulary.length !== arabicVocabulary.length) {
      fail(`Chapter ${chapterId} Word Notes counts differ: EN=${englishVocabulary.length}, AR=${arabicVocabulary.length}.`);
    }
  });

  [
    config.knowledgeCheckPageId,
    config.knowledgeCheckPageId + 1,
    config.reviewPageId,
    ...config.glossaryPageIds,
    config.finalChallengePageId,
  ].forEach((pageId) => {
    requirePage(englishPages, pageId, 'English');
    requirePage(arabicPages, pageId, 'Arabic');
  });
};

const validateExerciseLogic = (english: Exercise, arabic: Exercise, label: string): void => {
  if (english.type !== arabic.type) {
    fail(`${label} exercise types differ: EN=${english.type}, AR=${arabic.type}.`);
  }

  if ((english.options?.length || 0) !== (arabic.options?.length || 0)) {
    fail(`${label} option counts differ.`);
  }

  if (typeof english.correctAnswer !== typeof arabic.correctAnswer) {
    fail(`${label} correct-answer types differ.`);
  }

  if (
    (typeof english.correctAnswer === 'number' || typeof english.correctAnswer === 'boolean')
    && english.correctAnswer !== arabic.correctAnswer
  ) {
    fail(`${label} correct-answer positions/values differ.`);
  }

  if (english.type === 'matching') {
    const englishPairs = english.matchingPairs || [];
    const arabicPairs = arabic.matchingPairs || [];
    if (englishPairs.length < 3 || arabicPairs.length < 3 || englishPairs.length !== arabicPairs.length) {
      fail(`${label} matching-pair structures differ or contain fewer than three pairs.`);
    }
  }

  if (english.type === 'tap-reveal') {
    const englishItems = english.tapRevealItems || [];
    const arabicItems = arabic.tapRevealItems || [];
    if (!englishItems.length || englishItems.length !== arabicItems.length) {
      fail(`${label} tap-reveal structures differ.`);
    }
  }

  if (english.type === 'fill-blanks') {
    if (!english.fillBlanksText?.includes('[blank]') || !arabic.fillBlanksText?.includes('[blank]')) {
      fail(`${label} fill-blank sentence is missing in one language.`);
    }
  }
};

const correctOptionIndex = (question: QuizQuestion): number =>
  question.options.findIndex((option) => option.isCorrect);

const validateOutputLogic = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: A2GoldPageConfig,
): void => {
  const quickTypes = new Set<string>();

  config.storyIds.forEach((chapterId) => {
    const english = requirePage(englishPages, chapterId, 'English').exercises?.[0];
    const arabic = requirePage(arabicPages, chapterId, 'Arabic').exercises?.[0];
    if (!english || !arabic) fail(`Chapter ${chapterId} Quick Challenge is missing.`);
    validateExerciseLogic(english, arabic, `Chapter ${chapterId} Quick Challenge`);
    quickTypes.add(english.type);
  });

  ['matching', 'fill-blanks', 'tap-reveal'].forEach((type) => {
    if (!quickTypes.has(type)) fail(`Quick Challenges do not include required activity type: ${type}.`);
  });

  const englishKnowledge = requirePage(englishPages, config.knowledgeCheckPageId, 'English').exercises || [];
  const arabicKnowledge = requirePage(arabicPages, config.knowledgeCheckPageId, 'Arabic').exercises || [];
  if (englishKnowledge.length !== arabicKnowledge.length) fail('Knowledge Check counts differ.');
  englishKnowledge.forEach((exercise, index) => {
    const arabic = arabicKnowledge[index];
    if (!arabic) fail(`Arabic Knowledge Check ${index + 1} is missing.`);
    validateExerciseLogic(exercise, arabic, `Knowledge Check ${index + 1}`);
  });

  const englishReview = requirePage(englishPages, config.reviewPageId, 'English').exercises?.[0]?.quizQuestions || [];
  const arabicReview = requirePage(arabicPages, config.reviewPageId, 'Arabic').exercises?.[0]?.quizQuestions || [];
  if (englishReview.length !== arabicReview.length) fail('Review Challenge counts differ.');
  englishReview.forEach((question, index) => {
    const arabic = arabicReview[index];
    if (!arabic) fail(`Arabic Review question ${index + 1} is missing.`);
    if (question.options.length !== arabic.options.length) {
      fail(`Review question ${index + 1} option counts differ.`);
    }
    if (correctOptionIndex(question) !== correctOptionIndex(arabic)) {
      fail(`Review question ${index + 1} correct-answer positions differ.`);
    }
  });

  const englishFinal = requirePage(englishPages, config.finalChallengePageId, 'English').exercises || [];
  const arabicFinal = requirePage(arabicPages, config.finalChallengePageId, 'Arabic').exercises || [];
  if (englishFinal.length !== arabicFinal.length) fail('Final Challenge counts differ.');
  englishFinal.forEach((exercise, index) => {
    const arabic = arabicFinal[index];
    if (!arabic) fail(`Arabic Final Challenge ${index + 1} is missing.`);
    validateExerciseLogic(exercise, arabic, `Final Challenge ${index + 1}`);
  });
};

/**
 * Final bilingual guard for A2.
 *
 * English and Arabic use the same learning algorithm but remain grounded in
 * their own chapter data. This wrapper prevents either the source shape,
 * generated exercise logic or activity-type variety from silently drifting.
 */
export const applyValidatedA2ParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: A2GoldPageConfig;
}) => {
  validateSourceShape(englishPages, arabicPages, config);
  const output = applyA2ParallelLearning({ englishPages, arabicPages, config });
  validateOutputLogic(output.englishPages, output.arabicPages, config);
  return output;
};