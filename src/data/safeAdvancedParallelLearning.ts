import type { Exercise, PageData } from '../types';
import { normalizeHighlightText } from '../lib/highlightTextMatch';
import {
  applyValidatedAdvancedParallelLearning,
  type AdvancedParallelConfig,
} from './advancedParallelLearning';

type SafeAdvancedParallelInput = {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: AdvancedParallelConfig;
};

type SafeAdvancedParallelResult = {
  englishPages: PageData[];
  arabicPages: PageData[];
};

const storyPage = (pages: PageData[], id: number): PageData | undefined =>
  pages.find((page) => page.type === 'story' && page.id === id);

const answerShape = (exercise: Exercise): string => {
  if (typeof exercise.correctAnswer === 'number') return 'number';
  if (typeof exercise.correctAnswer === 'boolean') return 'boolean';
  if (typeof exercise.correctAnswer === 'string') return 'string';
  if (exercise.correctAnswer && typeof exercise.correctAnswer === 'object') return 'object';
  return String(exercise.correctAnswer);
};

const validateSourceParity = (
  englishPages: PageData[],
  arabicPages: PageData[],
  config: AdvancedParallelConfig,
): void => {
  config.storyIds.forEach((chapterId) => {
    const en = storyPage(englishPages, chapterId);
    const ar = storyPage(arabicPages, chapterId);
    if (!en || !ar) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} is missing in one language.`);
    }

    const enHotspots = en.hotspots?.length || 0;
    const arHotspots = ar.hotspots?.length || 0;
    if (enHotspots !== arHotspots) {
      throw new Error(
        `[Advanced bilingual source parity] Chapter ${chapterId} hotspot counts differ (EN ${enHotspots}, AR ${arHotspots}).`,
      );
    }

    const enVocabulary = en.vocabulary?.length || 0;
    const arVocabulary = ar.vocabulary?.length || 0;
    if (enVocabulary !== arVocabulary) {
      throw new Error(
        `[Advanced bilingual source parity] Chapter ${chapterId} Word Notes counts differ (EN ${enVocabulary}, AR ${arVocabulary}).`,
      );
    }

    const enQuick = en.exercises?.[0];
    const arQuick = ar.exercises?.[0];
    if (Boolean(enQuick) !== Boolean(arQuick)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge is missing in one language.`);
    }
    if (!enQuick || !arQuick) return;

    if (enQuick.type !== arQuick.type) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge types differ.`);
    }
    if ((enQuick.options?.length || 0) !== (arQuick.options?.length || 0)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge option counts differ.`);
    }
    if (answerShape(enQuick) !== answerShape(arQuick)) {
      throw new Error(`[Advanced bilingual source parity] Chapter ${chapterId} authored Quick Challenge answer shapes differ.`);
    }
  });
};

const cleanArabicText = (value: string): string => value
  .replace(/وفقًا لـالفصل/g, 'وفقًا لما ورد في الفصل')
  .replace(/وWord Notes الخاصة به/g, 'وملاحظات المفردات الخاصة به')
  .replace(/Word Notes/g, 'ملاحظات المفردات');

const cleanArabicExercise = (exercise: Exercise): Exercise => ({
  ...exercise,
  title: exercise.title ? cleanArabicText(exercise.title) : exercise.title,
  instructions: exercise.instructions ? cleanArabicText(exercise.instructions) : exercise.instructions,
  question: exercise.question ? cleanArabicText(exercise.question) : exercise.question,
  explanation: exercise.explanation ? cleanArabicText(exercise.explanation) : exercise.explanation,
  feedback: exercise.feedback
    ? {
        correct: exercise.feedback.correct ? cleanArabicText(exercise.feedback.correct) : exercise.feedback.correct,
        incorrect: exercise.feedback.incorrect ? cleanArabicText(exercise.feedback.incorrect) : exercise.feedback.incorrect,
      }
    : exercise.feedback,
  tapRevealItems: exercise.tapRevealItems?.map((item) => ({
    ...item,
    question: cleanArabicText(item.question),
    answer: cleanArabicText(item.answer),
  })),
  matchingPairs: exercise.matchingPairs?.map((pair) => ({
    ...pair,
    left: cleanArabicText(pair.left),
    right: cleanArabicText(pair.right),
  })),
  quizQuestions: exercise.quizQuestions?.map((item) => ({
    ...item,
    question: cleanArabicText(item.question),
    hint: item.hint ? cleanArabicText(item.hint) : item.hint,
    options: item.options.map((option) => ({ ...option, text: cleanArabicText(option.text) })),
  })),
});

const cleanArabicDerivedCopy = (pages: PageData[]): PageData[] => pages.map((page) => ({
  ...page,
  content: page.type === 'story' ? page.content : cleanArabicText(page.content || ''),
  exercises: page.exercises?.map(cleanArabicExercise),
  vocabularyPairs: page.vocabularyPairs?.map((pair) => ({
    ...pair,
    word: cleanArabicText(pair.word),
    meaning: cleanArabicText(pair.meaning),
  })),
}));

const stripDemoStoryMedia = (pages: PageData[]): PageData[] => pages.map((page) => {
  const image = page.type === 'story' && page.image?.startsWith('https://picsum.photos/') ? '' : page.image;
  const audioUrl = page.audioUrl?.includes('soundhelix.com/examples/mp3/') ? '' : page.audioUrl;
  if (image === page.image && audioUrl === page.audioUrl) return page;
  return { ...page, image, audioUrl };
});

const extractChapterId = (question: string): number | undefined => {
  const english = question.match(/\bChapter\s+(\d+)\b/i);
  if (english) return Number(english[1]);
  const arabic = question.match(/الفصل\s+(\d+)/u);
  return arabic ? Number(arabic[1]) : undefined;
};

const isGeneratedEvidenceQuestion = (question: string): boolean =>
  /Which detail is connected with|What does .* mean in Chapter|أي معلومة ترتبط بـ|ما معنى .* في الفصل/u.test(question);

const validateGeneratedDistractors = (
  pages: PageData[],
  storyPages: PageData[],
  language: 'en' | 'ar',
): void => {
  const validateExercise = (exercise: Exercise): void => {
    if (exercise.type !== 'multiple-choice' || !exercise.options?.length || typeof exercise.correctAnswer !== 'number') return;
    if (!exercise.question || !isGeneratedEvidenceQuestion(exercise.question)) return;
    const chapterId = extractChapterId(exercise.question);
    if (!chapterId) return;
    const source = storyPage(storyPages, chapterId);
    if (!source?.content) return;
    const sourceKey = normalizeHighlightText(source.content, language);

    exercise.options.forEach((option, index) => {
      if (index === exercise.correctAnswer) return;
      const optionKey = normalizeHighlightText(option, language);
      if (optionKey.length >= 18 && sourceKey.includes(optionKey)) {
        throw new Error(
          `[Advanced distractor guard] Chapter ${chapterId} has a wrong option that is directly supported by the same chapter.`,
        );
      }
    });
  };

  pages.forEach((page) => page.exercises?.forEach((exercise) => {
    validateExercise(exercise);
    exercise.quizQuestions?.forEach(() => undefined);
  }));
};

/**
 * Hardened runtime wrapper for B1/B2 learning material.
 * - fails fast instead of silently truncating EN/AR hotspot or Word Notes mismatches;
 * - validates authored Quick Challenge structure before it can become an anchor;
 * - keeps Arabic generated UI copy fully Arabic;
 * - removes random/demo media from effective story/support pages;
 * - rejects generated distractors that are directly supported by the same chapter.
 * Story prose is never modified.
 */
export const applySafeAdvancedParallelLearning = ({
  englishPages,
  arabicPages,
  config,
}: SafeAdvancedParallelInput): SafeAdvancedParallelResult => {
  validateSourceParity(englishPages, arabicPages, config);

  const output = applyValidatedAdvancedParallelLearning({ englishPages, arabicPages, config });
  const englishOutput = stripDemoStoryMedia(output.englishPages);
  const arabicOutput = stripDemoStoryMedia(cleanArabicDerivedCopy(output.arabicPages));

  validateGeneratedDistractors(englishOutput, englishPages, 'en');
  validateGeneratedDistractors(arabicOutput, arabicPages, 'ar');

  return { englishPages: englishOutput, arabicPages: arabicOutput };
};
