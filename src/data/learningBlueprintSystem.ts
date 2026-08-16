import type { Exercise, PageData, QuizQuestion, TeacherGuideSection } from '../types';
import { highlightPhraseOccurs } from '../lib/highlightTextMatch';
import type { LearningSystemConfig, LearningSystemResult } from './learningSystem';
import { runLearningSystem } from './learningSystem';
import { getLearningLevelPolicy, type LearningExerciseVariant } from './learningLevelPolicy';
import type {
  BlueprintAssessmentItem,
  BlueprintAuthoredExercise,
  BlueprintGuideContent,
  BlueprintLanguage,
  BlueprintStage,
  LearningBlueprint,
  LearningBlueprintChapter,
} from './learningBlueprint';

const storyPage = (pages: PageData[], id: number) => pages.find(page => page.type === 'story' && page.id === id);
const requirePage = (pages: PageData[], id: number, language: string) => {
  const page = pages.find(candidate => candidate.id === id);
  if (!page) throw new Error(`[Learning Blueprint] ${language} page ${id} is missing.`);
  return page;
};
const unique = <T,>(items: T[]) => [...new Set(items)];
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
const text = (value: unknown) => typeof value === 'string' ? value.trim() : '';

const answerShape = (value: unknown) => Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
const validateExercisePair = (item: BlueprintAssessmentItem, where: string) => {
  const en = item.exercise.en;
  const ar = item.exercise.ar;
  if (en.type !== ar.type) throw new Error(`[Learning Blueprint] ${where}: EN/AR exercise types differ.`);
  if (!text(en.question) || !text(ar.question)) throw new Error(`[Learning Blueprint] ${where}: both languages need a manual question.`);
  if (answerShape(en.correctAnswer) !== answerShape(ar.correctAnswer)) throw new Error(`[Learning Blueprint] ${where}: EN/AR answer shapes differ.`);

  if (en.type === 'multiple-choice') {
    if (!en.options || !ar.options || en.options.length < 3 || en.options.length !== ar.options.length) {
      throw new Error(`[Learning Blueprint] ${where}: multiple-choice options must be paired and contain at least three choices.`);
    }
    if (typeof en.correctAnswer !== 'number' || typeof ar.correctAnswer !== 'number' || en.correctAnswer !== ar.correctAnswer) {
      throw new Error(`[Learning Blueprint] ${where}: multiple-choice correct-answer indexes must match.`);
    }
    if (en.correctAnswer < 0 || en.correctAnswer >= en.options.length) throw new Error(`[Learning Blueprint] ${where}: invalid correct-answer index.`);
  }
  if (en.type === 'true-false' && (typeof en.correctAnswer !== 'boolean' || en.correctAnswer !== ar.correctAnswer)) {
    throw new Error(`[Learning Blueprint] ${where}: true/false answer logic must match.`);
  }
  if (en.type === 'matching') {
    const enCount = en.matchingPairs?.length ?? 0;
    const arCount = ar.matchingPairs?.length ?? 0;
    if (enCount < 2 || enCount !== arCount) throw new Error(`[Learning Blueprint] ${where}: matching pairs must be parallel.`);
  }
  if (en.type === 'fill-blanks' && (!en.fillBlanksText?.includes('[blank]') || !ar.fillBlanksText?.includes('[blank]'))) {
    throw new Error(`[Learning Blueprint] ${where}: fill-blanks text must contain [blank] in both languages.`);
  }
  if (en.type === 'tap-reveal') {
    const enCount = en.tapRevealItems?.length ?? 0;
    const arCount = ar.tapRevealItems?.length ?? 0;
    if (!enCount || enCount !== arCount) throw new Error(`[Learning Blueprint] ${where}: tap-reveal items must be parallel.`);
  }
  if (item.eligibleStages.includes('review') && !['multiple-choice', 'true-false'].includes(en.type)) {
    throw new Error(`[Learning Blueprint] ${where}: review-eligible items must be multiple-choice or true-false.`);
  }
};

const validateGuide = (guide: BlueprintGuideContent, where: string) => {
  if (!guide.pedagogy.trim() || !guide.lessonPlan.trim()) throw new Error(`[Learning Blueprint] ${where}: pedagogy and lesson plan are required.`);
  if (!guide.discussionPoints.length || !guide.discussionPoints.every(point => point.trim())) throw new Error(`[Learning Blueprint] ${where}: discussion points are required.`);
  if (!guide.interactiveTips.length || !guide.interactiveTips.every(point => point.trim())) throw new Error(`[Learning Blueprint] ${where}: interactive tips are required.`);
  if (!guide.differentiation.fastFinishers.trim() || !guide.differentiation.strugglingLearners.trim()) throw new Error(`[Learning Blueprint] ${where}: differentiation must be complete.`);
};

export const validateLearningBlueprint = ({
  blueprint,
  englishPages,
  arabicPages,
  config,
}: {
  blueprint: LearningBlueprint;
  englishPages: PageData[];
  arabicPages: PageData[];
  config: LearningSystemConfig;
}) => {
  if (blueprint.level !== config.level) throw new Error(`[Learning Blueprint] Blueprint level ${blueprint.level} does not match runtime level ${config.level}.`);
  if (!blueprint.id.trim() || !blueprint.version.trim() || !blueprint.storyId.trim()) throw new Error('[Learning Blueprint] id, version and storyId are required.');

  const chapterIds = blueprint.chapters.map(chapter => chapter.chapterId);
  if (unique(chapterIds).length !== chapterIds.length) throw new Error('[Learning Blueprint] Chapter IDs must be unique.');
  const expected = [...config.storyIds].sort((a, b) => a - b).join(',');
  const actual = [...chapterIds].sort((a, b) => a - b).join(',');
  if (expected !== actual) throw new Error(`[Learning Blueprint] Blueprint chapters (${actual}) do not match story chapters (${expected}).`);

  const evidenceIds = new Set<string>();
  const assessmentIds = new Set<string>();
  const vocabularyIds = new Set<string>();
  blueprint.chapters.forEach(chapter => {
    const enPage = storyPage(englishPages, chapter.chapterId);
    const arPage = storyPage(arabicPages, chapter.chapterId);
    if (!enPage || !arPage) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} is missing in one language.`);
    if (!chapter.objectives.length) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} needs at least one manual objective.`);
    chapter.objectives.forEach((objective, index) => {
      if (!objective.en.trim() || !objective.ar.trim()) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} objective ${index + 1} is incomplete.`);
    });
    if (!chapter.evidencePoints.length) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} needs evidence points.`);

    const localEvidence = new Set<string>();
    chapter.evidencePoints.forEach(point => {
      if (evidenceIds.has(point.id)) throw new Error(`[Learning Blueprint] Duplicate evidence ID: ${point.id}.`);
      evidenceIds.add(point.id);
      localEvidence.add(point.id);
      if (!point.claim.en.trim() || !point.claim.ar.trim() || !point.evidence.en.trim() || !point.evidence.ar.trim()) {
        throw new Error(`[Learning Blueprint] Evidence ${point.id} is incomplete.`);
      }
      if (!highlightPhraseOccurs(enPage.content || '', point.evidence.en, 'en')) throw new Error(`[Learning Blueprint] ${point.id}: English evidence is not attested in Chapter ${chapter.chapterId}.`);
      if (!highlightPhraseOccurs(arPage.content || '', point.evidence.ar, 'ar')) throw new Error(`[Learning Blueprint] ${point.id}: Arabic evidence is not attested in Chapter ${chapter.chapterId}.`);
    });

    chapter.vocabularyTargets.forEach(target => {
      if (vocabularyIds.has(target.id)) throw new Error(`[Learning Blueprint] Duplicate vocabulary ID: ${target.id}.`);
      vocabularyIds.add(target.id);
      if (!target.en.word.trim() || !target.en.definition.trim() || !target.ar.word.trim() || !target.ar.definition.trim()) {
        throw new Error(`[Learning Blueprint] Vocabulary ${target.id} is incomplete.`);
      }
      if (!highlightPhraseOccurs(enPage.content || '', target.en.word, 'en')) throw new Error(`[Learning Blueprint] ${target.id}: English word/phrase is not in Chapter ${chapter.chapterId}.`);
      if (!highlightPhraseOccurs(arPage.content || '', target.ar.word, 'ar')) throw new Error(`[Learning Blueprint] ${target.id}: Arabic word/phrase is not in Chapter ${chapter.chapterId}.`);
    });

    chapter.assessmentItems.forEach(item => {
      if (assessmentIds.has(item.id)) throw new Error(`[Learning Blueprint] Duplicate assessment ID: ${item.id}.`);
      assessmentIds.add(item.id);
      if (!localEvidence.has(item.learningPointId)) throw new Error(`[Learning Blueprint] ${item.id} references evidence outside Chapter ${chapter.chapterId}: ${item.learningPointId}.`);
      if (!item.eligibleStages.length || unique(item.eligibleStages).length !== item.eligibleStages.length) throw new Error(`[Learning Blueprint] ${item.id} needs unique eligible stages.`);
      validateExercisePair(item, item.id);
    });

    if (!chapter.assessmentItems.some(item => item.eligibleStages.includes('quick'))) throw new Error(`[Learning Blueprint] Chapter ${chapter.chapterId} has no Quick Challenge candidate.`);
    validateGuide(chapter.teacherGuide.en, `Chapter ${chapter.chapterId} teacher guide EN`);
    validateGuide(chapter.teacherGuide.ar, `Chapter ${chapter.chapterId} teacher guide AR`);
    validateGuide(chapter.selfStudyGuide.en, `Chapter ${chapter.chapterId} self-study guide EN`);
    validateGuide(chapter.selfStudyGuide.ar, `Chapter ${chapter.chapterId} self-study guide AR`);
  });

  const counts = countsFor(config);
  const allItems = blueprint.chapters.flatMap(chapter => chapter.assessmentItems);
  const uniquePointsFor = (stage: BlueprintStage) => new Set(allItems.filter(item => item.eligibleStages.includes(stage)).map(item => item.learningPointId)).size;
  if (uniquePointsFor('knowledge') < counts.knowledge) throw new Error(`[Learning Blueprint] Need at least ${counts.knowledge} knowledge learning points.`);
  if (uniquePointsFor('review') < counts.review) throw new Error(`[Learning Blueprint] Need at least ${counts.review} review learning points.`);
  if (uniquePointsFor('final') < counts.final) throw new Error(`[Learning Blueprint] Need at least ${counts.final} final learning points.`);
  const vocabularyCount = blueprint.chapters.reduce((sum, chapter) => sum + chapter.vocabularyTargets.length, 0);
  if (config.vocabularyPageId && vocabularyCount < counts.vocabulary) throw new Error(`[Learning Blueprint] Need at least ${counts.vocabulary} vocabulary targets.`);
};

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
  validateLearningBlueprint({ blueprint, englishPages, arabicPages, config });
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

  // Runtime sanity: stage counts and EN/AR structure must remain parallel after compilation.
  if ((requirePage(englishOutput, config.knowledgeCheckPageId, 'English').exercises?.length ?? 0) !== counts.knowledge) throw new Error('[Learning Blueprint] Knowledge Check compilation failed.');
  if ((requirePage(arabicOutput, config.finalChallengePageId, 'Arabic').exercises?.length ?? 0) !== counts.final) throw new Error('[Learning Blueprint] Final Challenge compilation failed.');
  config.storyIds.forEach(id => {
    const en = storyPage(englishOutput, id)?.exercises?.[0];
    const ar = storyPage(arabicOutput, id)?.exercises?.[0];
    if (!en || !ar || en.type !== ar.type) throw new Error(`[Learning Blueprint] Chapter ${id} Quick Challenge parity failed.`);
  });

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