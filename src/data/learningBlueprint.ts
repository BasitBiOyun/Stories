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

/** Gives authored blueprints full type checking and enforces the shared interaction policy. */
export const defineLearningBlueprint = <T extends LearningBlueprint>(blueprint: T): T => {
  validateBlueprintInteractionPolicy(blueprint);
  return blueprint;
};

export const learningBlueprintKey = (storyId: string, level: Level) => `${storyId}:${level}`;
