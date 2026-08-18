import type { Exercise, Level, TeacherGuideSection } from '../types';
import type {
  BlueprintAssessmentQuality,
  BlueprintChapterLearningMap,
  BlueprintGuideQualityFields,
  QualityContractVersion,
} from './learningQualityContract';

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
  id: string;
  focus: BlueprintCognitiveFocus;
  claim: LocalizedText;
  evidence: LocalizedText;
  learningOutcomeId?: string;
}

export interface BlueprintVocabularyTarget {
  id: string;
  en: { word: string; definition: string; example?: string };
  ar: { word: string; definition: string; example?: string };
}

export type BlueprintAuthoredExercise = Omit<Exercise, 'id' | 'type'> & { type: BlueprintExerciseType };

export interface BlueprintAssessmentItem {
  id: string;
  learningPointId: string;
  learningOutcomeId?: string;
  eligibleStages: BlueprintStage[];
  exercise: {
    en: BlueprintAuthoredExercise;
    ar: BlueprintAuthoredExercise;
  };
  quality?: BlueprintAssessmentQuality;
}

export interface BlueprintGuideContent extends BlueprintGuideQualityFields {
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
  objectives: LocalizedText[];
  learningMap?: BlueprintChapterLearningMap;
  evidencePoints: BlueprintEvidencePoint[];
  vocabularyTargets: BlueprintVocabularyTarget[];
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
  qualityContractVersion?: QualityContractVersion;
  chapters: LearningBlueprintChapter[];
  wholeBook?: LearningBlueprintWholeBook;
}

/**
 * Type helper only.
 *
 * Pedagogical validators are deliberately not executed in the browser/runtime.
 * Preview books are reviewed manually and validation utilities remain optional
 * authoring/diagnostic tools instead of book-loading gates.
 */
export const defineLearningBlueprint = <T extends LearningBlueprint>(blueprint: T): T => blueprint;

export const learningBlueprintKey = (storyId: string, level: Level) => `${storyId}:${level}`;
