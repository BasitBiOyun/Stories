import type { Exercise, Level, TeacherGuideSection } from '../types';

export type BlueprintLanguage = 'en' | 'ar';
export type BlueprintStage = 'quick' | 'knowledge' | 'review' | 'final';
export type BlueprintReviewStatus = 'draft' | 'language-reviewed' | 'pedagogy-reviewed' | 'approved';
export type BlueprintExerciseType = 'multiple-choice' | 'true-false' | 'matching' | 'fill-blanks' | 'tap-reveal';
export type BlueprintCognitiveFocus =
  | 'direct'
  | 'sequence'
  | 'main-idea'
  | 'cause-result'
  | 'character-action'
  | 'motivation'
  | 'comparison'
  | 'inference'
  | 'turning-point'
  | 'theme'
  | 'vocabulary';

export interface LocalizedText {
  en: string;
  ar: string;
}

export interface BlueprintEvidencePoint {
  /** Stable ID for one assessable idea. A learning point may be used only once in the generated assessment path. */
  id: string;
  focus: BlueprintCognitiveFocus;
  claim: LocalizedText;
  /** Exact or near-exact chapter wording used by validators to prove that the learning point is story-grounded. */
  evidence: LocalizedText;
}

export interface BlueprintVocabularyTarget {
  id: string;
  en: { word: string; definition: string; example?: string };
  ar: { word: string; definition: string; example?: string };
}

export type BlueprintAuthoredExercise = Omit<Exercise, 'id' | 'type'> & { type: BlueprintExerciseType };

export interface BlueprintAssessmentItem {
  /** Stable authoring ID. Runtime IDs are assigned by the compiler. */
  id: string;
  /** Must reference an evidence point in the same chapter. */
  learningPointId: string;
  /** The engine may place this item only in these stages; it never invents new wording. */
  eligibleStages: BlueprintStage[];
  exercise: {
    en: BlueprintAuthoredExercise;
    ar: BlueprintAuthoredExercise;
  };
}

export interface BlueprintGuideContent {
  timing?: string;
  objectives?: string[];
  pedagogy: string;
  grammarFocus?: string;
  pronunciationFocus?: string;
  lessonPlan: string;
  discussionPoints: string[];
  differentiation: TeacherGuideSection['differentiation'];
  interactiveTips: string[];
  assessmentTools?: TeacherGuideSection['assessmentTools'];
  kinestheticActivities?: string[];
  globalCitizenship?: string[];
  extraResources?: TeacherGuideSection['extraResources'];
}

export interface BlueprintGuidePair {
  en: BlueprintGuideContent;
  ar: BlueprintGuideContent;
}

export interface LearningBlueprintChapter {
  chapterId: number;
  /** Human-authored chapter outcomes. These become the guide objectives unless a guide overrides them. */
  objectives: LocalizedText[];
  /** Human-selected claims and chapter evidence. The engine is not allowed to derive new claims from prose. */
  evidencePoints: BlueprintEvidencePoint[];
  /** Human-selected Word Notes / glossary material. */
  vocabularyTargets: BlueprintVocabularyTarget[];
  /** Human-authored questions. The engine only selects and places them. */
  assessmentItems: BlueprintAssessmentItem[];
  teacherGuide: BlueprintGuidePair;
  selfStudyGuide: BlueprintGuidePair;
}

export interface BlueprintPageCopy {
  title?: LocalizedText;
  content?: LocalizedText;
}

export interface LearningBlueprintWholeBook {
  knowledgeCheck?: BlueprintPageCopy;
  vocabularyChallenge?: BlueprintPageCopy;
  review?: BlueprintPageCopy;
  finalChallenge?: BlueprintPageCopy;
  glossary?: [BlueprintPageCopy, BlueprintPageCopy];
}

export interface LearningBlueprint {
  id: string;
  version: string;
  storyId: string;
  level: Level;
  status: BlueprintReviewStatus;
  chapters: LearningBlueprintChapter[];
  wholeBook?: LearningBlueprintWholeBook;
}

const normalizeQuestion = (value: string, language: BlueprintLanguage) => {
  let output = value
    .trim()
    .toLocaleLowerCase()
    .normalize('NFKC')
    .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
    .replace(/ـ/g, '');
  if (language === 'ar') {
    output = output
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
  }
  return output
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const questionSimilarity = (left: string, right: string) => {
  const leftTokens = new Set(left.split(' ').filter(Boolean));
  const rightTokens = new Set(right.split(' ').filter(Boolean));
  if (leftTokens.size < 5 || rightTokens.size < 5) return 0;
  const intersection = [...leftTokens].filter(token => rightTokens.has(token)).length;
  const union = new Set([...leftTokens, ...rightTokens]).size;
  return union ? intersection / union : 0;
};

const validateBlueprintInteractionPolicy = (blueprint: LearningBlueprint) => {
  const tapRevealItems = blueprint.chapters.flatMap(chapter =>
    chapter.assessmentItems.filter(item => item.exercise.en.type === 'tap-reveal' || item.exercise.ar.type === 'tap-reveal')
  );

  for (const item of tapRevealItems) {
    const quickOnly = item.eligibleStages.length === 1 && item.eligibleStages[0] === 'quick';
    if (!quickOnly) {
      throw new Error(`[Learning Blueprint] Tap-Reveal is reserved for Quick Challenge only: ${item.id}.`);
    }
  }

  if (tapRevealItems.length > 2) {
    throw new Error(`[Learning Blueprint] Tap-Reveal is intentionally rare: ${blueprint.id} has ${tapRevealItems.length}, maximum is 2 per book.`);
  }
};

const validateBlueprintQuestionDiversity = (blueprint: LearningBlueprint) => {
  const seenLearningPoints = new Map<string, string>();
  const questions: Array<{ id: string; language: BlueprintLanguage; normalized: string }> = [];

  for (const chapter of blueprint.chapters) {
    for (const item of chapter.assessmentItems) {
      const existingPoint = seenLearningPoints.get(item.learningPointId);
      if (existingPoint) {
        throw new Error(`[Learning Blueprint] Learning point ${item.learningPointId} is assessed more than once (${existingPoint}, ${item.id}). Use a different evidence point instead of repeating the same idea.`);
      }
      seenLearningPoints.set(item.learningPointId, item.id);

      for (const language of ['en', 'ar'] as const) {
        const normalized = normalizeQuestion(item.exercise[language].question ?? '', language);
        if (!normalized) continue;
        const exact = questions.find(candidate => candidate.language === language && candidate.normalized === normalized);
        if (exact) {
          throw new Error(`[Learning Blueprint] Repeated ${language.toUpperCase()} question wording: ${exact.id} and ${item.id}.`);
        }
        const near = questions.find(candidate =>
          candidate.language === language
          && questionSimilarity(candidate.normalized, normalized) >= 0.9
        );
        if (near) {
          throw new Error(`[Learning Blueprint] Near-duplicate ${language.toUpperCase()} questions: ${near.id} and ${item.id}. Ask a genuinely different learning point instead.`);
        }
        questions.push({ id: item.id, language, normalized });
      }
    }
  }
};

/** Gives authored blueprints full type checking and enforces the shared interaction and question-diversity policies. */
export const defineLearningBlueprint = <T extends LearningBlueprint>(blueprint: T): T => {
  validateBlueprintInteractionPolicy(blueprint);
  validateBlueprintQuestionDiversity(blueprint);
  return blueprint;
};

export const learningBlueprintKey = (storyId: string, level: Level) => `${storyId}:${level}`;
