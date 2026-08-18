import type { Exercise, PageData, QuizQuestion, TeacherGuideSection } from '../types';
import type { LearningSystemConfig, LearningSystemResult } from './learningSystem';
import { runLearningSystem } from './learningSystem';
import { getLearningLevelPolicy, type LearningExerciseVariant } from './learningLevelPolicy';
import type {
  BlueprintAssessmentItem,
  BlueprintAuthoredExercise,
  BlueprintLanguage,
  BlueprintStage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';

const storyPage = (pages: PageData[], id: number) => pages.find(page => page.type === 'story' && page.id === id);
const countsFor = (config: LearningSystemConfig) => {
  const policy = getLearningLevelPolicy(config.level);
  return {
    knowledge: config.knowledgeCount ?? policy.knowledgeCount,
    vocabulary: config.vocabularyCount ?? policy.vocabularyCount,
    review: config.reviewCount ?? policy.reviewCount,
    final: config.finalCount ?? policy.finalCount,
  };
};
const localized = <T,>(value: { en: T; ar: T }, language: BlueprintLanguage): T => value[language];

/**
 * Optional compatibility hook for authoring scripts.
 * Runtime book loading intentionally does not enforce pedagogical validators.
 */
export const validateLearningBlueprint = (_input: {
  blueprint: LearningBlueprint;
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
}) => undefined;

const roundRobinItems = (chapters: LearningBlueprintChapter[]) => {
  const output: Array<BlueprintAssessmentItem & { chapterId: number }> = [];
  const max = Math.max(...chapters.map(chapter => chapter.assessmentItems.length));
  for (let slot = 0; slot < max; slot += 1) {
    chapters.forEach(chapter => {
      const item = chapter.assessmentItems[slot];
      if (item) output.push({ ...item, chapterId: chapter.chapterId });
    });
  }
  return output;
};

const selectStage = (
  candidates: Array<BlueprintAssessmentItem & { chapterId: number }>,
  stage: BlueprintStage,
  count: number,
  usedPoints: Set<string>,
  pattern: readonly LearningExerciseVariant[],
  offset = 0,
) => {
  const selected: Array<BlueprintAssessmentItem & { chapterId: number }> = [];
  for (let index = 0; index < count; index += 1) {
    const desired = pattern[(index + offset) % pattern.length];
    const available = candidates.filter(item => item.eligibleStages.includes(stage) && !usedPoints.has(item.learningPointId));
    const item = available.find(candidate => candidate.exercise.en.type === desired) ?? available[0];
    if (!item) throw new Error(`[Learning Blueprint] Cannot fill ${stage}: ${count} unique learning points are required across the assessment path.`);
    selected.push(item);
    usedPoints.add(item.learningPointId);
  }
  return selected;
};

const cloneExercise = (exercise: BlueprintAuthoredExercise, id: string): Exercise => ({ ...exercise, id });
const quizQuestion = (item: BlueprintAssessmentItem & { chapterId: number }, language: BlueprintLanguage): QuizQuestion => {
  const exercise = item.exercise[language];
  const fallbackHint = language === 'ar' ? `ارجع إلى الفصل ${item.chapterId}.` : `Return to Chapter ${item.chapterId}.`;
  if (exercise.type === 'true-false') {
    const correct = Boolean(exercise.correctAnswer);
    return {
      question: exercise.question || '',
      options: language === 'ar'
        ? [{ text: 'صحيح', isCorrect: correct }, { text: 'خطأ', isCorrect: !correct }]
        : [{ text: 'True', isCorrect: correct }, { text: 'False', isCorrect: !correct }],
      hint: exercise.explanation || exercise.feedback.incorrect || fallbackHint,
    };
  }
  if (exercise.type !== 'multiple-choice' || !exercise.options || typeof exercise.correctAnswer !== 'number') {
    throw new Error(`[Learning Blueprint] Review item ${item.id} cannot be converted to a quiz question.`);
  }
  return {
    question: exercise.question || '',
    options: exercise.options.map((option, index) => ({ text: option, isCorrect: index === exercise.correctAnswer })),
    hint: exercise.explanation || exercise.feedback.incorrect || fallbackHint,
  };
};

const guideSection = (
  chapter: LearningBlueprintChapter,
  page: PageData,
  level: LearningBlueprint['level'],
  language: BlueprintLanguage,
  kind: 'teacher' | 'selfStudy',
): TeacherGuideSection => {
  const policy = getLearningLevelPolicy(level);
  const pair = kind === 'teacher' ? chapter.teacherGuide : chapter.selfStudyGuide;
  const authored = localized(pair, language);
  const objectives = authored.objectives?.length ? authored.objectives : chapter.objectives.map(objective => objective[language]);
  return {
    chapter: language === 'ar' ? `الفصل ${page.id}: ${page.title}` : `Chapter ${page.id}: ${page.title}`,
    timing: authored.timing ?? (kind === 'teacher' ? policy.teacherTiming : policy.selfStudyTiming),
    objectives,
    pedagogy: authored.pedagogy,
    grammarFocus: authored.grammarFocus,
    pronunciationFocus: authored.pronunciationFocus,
    lessonPlan: authored.lessonPlan,
    discussionPoints: authored.discussionPoints,
    differentiation: authored.differentiation,
    interactiveTips: authored.interactiveTips,
    assessmentTools: authored.assessmentTools,
    kinestheticActivities: authored.kinestheticActivities,
    globalCitizenship: authored.globalCitizenship,
    extraResources: authored.extraResources,
  };
};

const applyCopy = (page: PageData, copy: LearningBlueprint['wholeBook'] extends infer _ ? { title?: { en: string; ar: string }; content?: { en: string; ar: string } } | undefined : never, language: BlueprintLanguage) => ({
  ...page,
  title: copy?.title?.[language] || page.title,
  content: copy?.content?.[language] || page.content,
});

const pickVocabulary = (blueprint: LearningBlueprint, count: number) => {
  const all = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  if (all.length <= count) return all;
  if (count <= 1) return count ? [all[0]] : [];
  return Array.from({ length: count }, (_, index) => all[Math.round(index * (all.length - 1) / (count - 1))]);
};

export const runBlueprintLearningSystem = ({
  englishPages,
  arabicPages,
  config,
  blueprint,
}: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
  blueprint: LearningBlueprint;
}): LearningSystemResult => {
  const policy = getLearningLevelPolicy(config.level);
  const counts = countsFor(config);
  const candidates = roundRobinItems(blueprint.chapters);
  const usedPoints = new Set<string>();
  const quick = new Map<number, BlueprintAssessmentItem & { chapterId: number }>();

  blueprint.chapters.forEach((chapter, index) => {
    const desired = policy.quickPattern[index % policy.quickPattern.length];
    const available = chapter.assessmentItems
      .filter(item => item.eligibleStages.includes('quick') && !usedPoints.has(item.learningPointId))
      .map(item => ({ ...item, chapterId: chapter.chapterId }));
    const selected = available.find(item => item.exercise.en.type === desired) ?? available[0];
    if (!selected) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} has no unused Quick Challenge candidate.`);
    quick.set(chapter.chapterId, selected);
    usedPoints.add(selected.learningPointId);
  });

  const knowledge = selectStage(candidates, 'knowledge', counts.knowledge, usedPoints, policy.hotspotPattern, 0);
  const review = selectStage(candidates, 'review', counts.review, usedPoints, ['multiple-choice', 'true-false'], 0);
  const final = selectStage(candidates, 'final', counts.final, usedPoints, [...policy.hotspotPattern, ...policy.vocabularyPattern], 2);
  const vocabulary = config.vocabularyPageId ? pickVocabulary(blueprint, counts.vocabulary) : [];
  const chapterMap = new Map(blueprint.chapters.map(chapter => [chapter.chapterId, chapter]));
  const midpoint = Math.ceil(config.storyIds.length / 2);
  const glossarySets = [
    blueprint.chapters.slice(0, midpoint).flatMap(chapter => chapter.vocabularyTargets),
    blueprint.chapters.slice(midpoint).flatMap(chapter => chapter.vocabularyTargets),
  ];

  const compilePages = (pages: PageData[], language: BlueprintLanguage) => pages.map(rawPage => {
    let page = rawPage;
    const chapter = chapterMap.get(page.id);
    if (chapter && config.storyIds.includes(page.id)) {
      const item = quick.get(page.id)!;
      return {
        ...page,
        vocabulary: chapter.vocabularyTargets.map(target => ({ ...target[language] })),
        exercises: [cloneExercise(item.exercise[language], `blueprint-${blueprint.id}-quick-${page.id}`)],
      };
    }
    if (page.id === config.knowledgeCheckPageId) {
      page = applyCopy(page, blueprint.wholeBook?.knowledgeCheck, language);
      return { ...page, exercises: knowledge.map((item, index) => cloneExercise(item.exercise[language], `blueprint-${blueprint.id}-knowledge-${index + 1}`)) };
    }
    if (config.vocabularyPageId && page.id === config.vocabularyPageId) {
      page = applyCopy(page, blueprint.wholeBook?.vocabularyChallenge, language);
      return {
        ...page,
        vocabularyPairs: vocabulary.map(target => ({ word: target[language].word, meaning: target[language].definition })),
      };
    }
    const glossaryIndex = config.glossaryPageIds.indexOf(page.id);
    if (glossaryIndex >= 0) {
      page = applyCopy(page, blueprint.wholeBook?.glossary?.[glossaryIndex], language);
      return { ...page, vocabulary: glossarySets[glossaryIndex].map(target => ({ ...target[language] })) };
    }
    if (page.id === config.reviewPageId) {
      page = applyCopy(page, blueprint.wholeBook?.review, language);
      const reviewExercise: Exercise = {
        id: `blueprint-${blueprint.id}-review`,
        type: 'quiz-game',
        title: page.title,
        instructions: language === 'ar' ? 'أجب عن الأسئلة مستنداً إلى الفصول.' : 'Answer the questions using the chapters as evidence.',
        question: language === 'ar' ? 'مراجعة الكتاب' : 'Whole-book review',
        correctAnswer: null,
        explanation: language === 'ar' ? 'جميع الأسئلة كتبها المراجع يدوياً من نص القصة.' : 'Every question was manually authored from the story text.',
        feedback: { correct: language === 'ar' ? 'صحيح.' : 'Correct.', incorrect: language === 'ar' ? 'ارجع إلى الفصل المرتبط بالسؤال.' : 'Return to the chapter linked to the question.' },
        quizQuestions: review.map(item => quizQuestion(item, language)),
      };
      return { ...page, exercises: [reviewExercise] };
    }
    if (page.id === config.finalChallengePageId) {
      page = applyCopy(page, blueprint.wholeBook?.finalChallenge, language);
      return { ...page, exercises: final.map((item, index) => cloneExercise(item.exercise[language], `blueprint-${blueprint.id}-final-${index + 1}`)) };
    }
    return page;
  });

  const englishOutput = compilePages(englishPages, 'en');
  const arabicOutput = compilePages(arabicPages, 'ar');
  const englishTeacherGuide = blueprint.chapters.map(chapter => guideSection(chapter, storyPage(englishOutput, chapter.chapterId)!, config.level, 'en', 'teacher'));
  const arabicTeacherGuide = blueprint.chapters.map(chapter => guideSection(chapter, storyPage(arabicOutput, chapter.chapterId)!, config.level, 'ar', 'teacher'));
  const englishSelfStudyGuide = blueprint.chapters.map(chapter => guideSection(chapter, storyPage(englishOutput, chapter.chapterId)!, config.level, 'en', 'selfStudy'));
  const arabicSelfStudyGuide = blueprint.chapters.map(chapter => guideSection(chapter, storyPage(arabicOutput, chapter.chapterId)!, config.level, 'ar', 'selfStudy'));

  return { englishPages: englishOutput, arabicPages: arabicOutput, englishTeacherGuide, arabicTeacherGuide, englishSelfStudyGuide, arabicSelfStudyGuide };
};

/** Migration-safe entrypoint: legacy books keep the existing engine until a reviewed blueprint is supplied. */
export const runBlueprintAwareLearningSystem = (input: {
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
  blueprint?: LearningBlueprint;
}): LearningSystemResult => input.blueprint
  ? runBlueprintLearningSystem({ ...input, blueprint: input.blueprint })
  : runLearningSystem({ englishPages: input.englishPages, arabicPages: input.arabicPages, config: input.config });
