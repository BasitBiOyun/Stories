import type { BookData, PageData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import {
  mosesB2FinalChallengeExercisesPolished,
  mosesB2KnowledgeCheckExercisesPolished,
  mosesB2QuickChallengesPolished,
  mosesB2VocabularyChallengePairsPolished,
} from './en/exerciseSystem';
import { mosesB2LanguageFocusExercises } from './en/languageFocus';
import { mosesB2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { mosesB2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { mosesB2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { mosesB2LanguageReviewExercises } from './en/languageReview';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide } from './en/selfStudyGuide';

import { mosesB2PagesAr } from './ar/pages';
import {
  mosesB2FinalChallengeExercisesArPolished,
  mosesB2KnowledgeCheckExercisesArPolished,
  mosesB2QuickChallengesArPolished,
  mosesB2VocabularyChallengePairsArPolished,
} from './ar/exerciseSystem';
import { mosesB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesB2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { mosesB2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { mosesB2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { mosesB2LanguageReviewExercisesAr } from './ar/languageReview';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 24 }, (_, index) => index + 1));

const englishLanguageFocus = {
  ...mosesB2LanguageFocusExercises,
  ...mosesB2LanguageFocusExercisesPart2,
  ...mosesB2LanguageFocusExercisesPart3,
  ...mosesB2LanguageFocusExercisesPart4,
};

const arabicLanguageFocus = {
  ...mosesB2LanguageFocusExercisesAr,
  ...mosesB2LanguageFocusExercisesArPart2,
  ...mosesB2LanguageFocusExercisesArPart3,
  ...mosesB2LanguageFocusExercisesArPart4,
};

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesPolished[page.id] ? [mosesB2QuickChallengesPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsPolished };
  if (page.id === 29) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source-framing, stance, cause, contrast, condition, focus and discourse patterns developed across all twenty-four chapters.',
    exercises: mosesB2LanguageReviewExercises,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesPolished };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesArPolished[page.id] ? [mosesB2QuickChallengesArPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesArPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsArPolished };
  if (page.id === 29) return {
    ...page,
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ تأطير المصدر والموقف والسبب والمقابلة والشرط وتركيز المعلومة والعلاقات الخطابية التي تطورت عبر الفصول الأربعة والعشرين.',
    exercises: mosesB2LanguageReviewExercisesAr,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesArPolished };
  return page;
});

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: attachEnglishLearning(mosesB2Pages),
  teacherGuide: mosesB2TeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadata,
  selfStudyGuide: mosesB2SelfStudyGuide,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachArabicLearning(mosesB2PagesAr),
  teacherGuide: mosesB2TeacherGuideAr,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataAr,
  selfStudyGuide: mosesB2SelfStudyGuideAr,
};

export const mosesB2BookData = mosesB2BookDataEn;
