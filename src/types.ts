import React from 'react';

export type PageType = 'story' | 'quiz' | 'vocabulary-match' | 'sequencing' | 'game' | 'exercises' | 'glossary' | 'final-challenge' | 'map';

export type Level = 'A2' | 'B1' | 'B2';

export type ExerciseType = 
  | 'true-false' 
  | 'multiple-choice' 
  | 'matching' 
  | 'sequencing' 
  | 'fill-blanks' 
  | 'drag-drop' 
  | 'tap-reveal' 
  | 'reflection' 
  | 'quiz-game';

export interface QuizQuestion {
  question: string;
  options: { text: string; isCorrect: boolean }[];
  hint: string;
}

export interface Exercise {
  id: string;
  type: ExerciseType;
  title?: string;
  instructions?: string;
  question?: string;
  options?: string[];
  correctAnswer: any;
  explanation?: string;
  feedback: {
    correct: string;
    incorrect: string;
  };
  matchingPairs?: { left: string; right: string }[];
  sequencingItems?: { id: string; text: string }[];
  fillBlanksText?: string;
  dragDropGroups?: { group: string; items: string[] }[];
  tapRevealItems?: { question: string; answer: string }[];
  hints?: string[];
  discussionPrompts?: { question: string; mode: string }[];
  quizQuestions?: QuizQuestion[];
}

export interface Hotspot {
  id: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  title: string;
  description: string;
}

export interface PageData {
  id: number;
  type: PageType;
  title: string;
  subtitle?: string;
  content: string;
  exercises?: Exercise[];
  image: string;
  audioUrl?: string;
  vocabulary?: { word: string; definition: string; example?: string }[];
  sequencingItems?: { id: string; text: string }[];
  vocabularyPairs?: { word: string; meaning: string }[];
  hotspots?: Hotspot[];
  animatedWords?: string[];
  syncPoints?: number[];
  timedChunks?: { start: number; end: number; text: string }[];
}

export interface StudentGuideSection {
  title: string;
  icon?: string; // Icon name from the application semantic icon registry
  text: string;
  points: string[];
}

export interface TeacherGuideSection {
  chapter: string;
  timing: string;
  objectives: string[];
  pedagogy: string;
  priorKnowledge?: string[];
  anticipatedMisconceptions?: string[];
  grammarFocus?: string;
  pronunciationFocus?: string;
  beforeReading?: string[];
  duringReading?: string[];
  afterReading?: string[];
  lessonPlan: string;
  discussionPoints: string[];
  interactiveTips: string[];
  differentiation: {
    fastFinishers: string;
    strugglingLearners: string;
  };
  formativeAssessment?: string[];
  expectedResponses?: string[];
  transferTask?: string;
  teacherReflection?: string;
  assessmentTools?: {
    rubric?: string[];
    exitTicket?: string[];
  };
  // Self-study-only heading fields. They are optional so the same simple
  // chapter data shape can be rendered by both guide UIs without generators.
  whatToNotice?: string[];
  readListen?: string[];
  findAnswerInStory?: string[];
  vocabularyInContext?: string[];
  quickChallengeGuide?: string;
  wrongAnswerSupport?: string[];
  selfCheck?: string[];
  useWhatYouLearned?: string;
  reflectionPrompt?: string;
  kinestheticActivities?: string[];
  globalCitizenship?: string[];
  extraResources?: {
    worksheets?: string[];
    links?: { label: string; url: string }[];
  };
}

export interface RubricRow {
  criterion: string;
  excellent: string;
  good: string;
  developing: string;
}

export interface TeacherGuideMetadata {
  title?: string;
  subtitle?: string;
  level?: string;
  estimatedDuration?: string;
  targetAudience?: string;
  purpose?: string;
  approachDesc?: string;
  targetLearners?: string;
  assessmentEvidence?: string;
  assessmentOverview?: {
    formative: string[];
    summative: string[];
  };
  readingFramework?: {
    before: string;
    during: string;
    after: string;
  };
  rubricTitle?: string;
  rubricRows?: RubricRow[];
  vocabularyApproach?: string | {
    selection: string;
    method: string;
    recycling: string;
  };
  grammarApproach?: string;
  grammarSequence?: string[];
  skillsFocus?: {
    reading: string;
    listening: string;
    speaking: string;
    writing: string;
  };
  classroomManagement?: string[];
  valuesFocus?: string[];
  languageFocus?: string[];
  classroomUse?: {
    recommendedApproach: string;
    grouping: string;
    teacherRole: string;
  };
  projectIdeas?: string[];
  finalRubric?: RubricRow[];
  speakingApproach?: string;
  writingApproach?: string;
  valuesFramework?: string[];
  differentiationNotes?: string;
  assessmentRubric?: RubricRow[];
  implementationPlans?: {
    optionA: {
      title: string;
      steps: { time: string; activity: string }[];
    };
    optionB: {
      title: string;
      lessons: { title: string; description: string }[];
    };
    optionC?: {
      title: string;
      steps?: { time: string; activity: string }[];
      lessons?: { title: string; description: string }[];
    };
  };
  homeConnection?: {
    title: string;
    items: string[];
  };
  globalCitizenship?: {
    title: string;
    description: string;
    themes: { title: string; description: string }[];
    actions: string[];
  };
  valuesEducation?: {
    title: string;
    description: string;
    items: { label: string; value: string }[];
    questions?: string[];
    actions?: string[];
  };
  sensitiveNotes?: {
    title: string;
    notes: string[];
  };
  appendices?: {
    exitTicket?: string[];
    miniProject?: { title: string; desc: string };
    reflectivePrompt?: { title: string; desc: string };
    sentenceFrames?: string[];
  };
}

export interface StudentGuideMetadata {
  whoIsThisFor?: string;
  title?: string;
  subtitle?: string;
  level?: string;
  language?: string;
  estimatedStudyTime?: string;
  learningGoals?: string[];
  recommendedUse?: string[];
}

export interface BookData {
  id: string;
  level: Level;
  title: string;
  pages: PageData[];
  teacherGuide: TeacherGuideSection[];
  selfStudyGuide: TeacherGuideSection[];
  studentGuideText?: string;
  studentGuideSections?: StudentGuideSection[];
  teacherGuideMetadata?: TeacherGuideMetadata;
  studentGuideMetadata?: StudentGuideMetadata;
  baseFontSize: number;
}

export interface ProphetStory {
  id: string;
  name: string;
  description: string;
  image: string;
  availableLevels: Level[];
  isComingSoon?: boolean;
}
