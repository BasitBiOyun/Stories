import type { BookData, PageData } from '../../../types';
import { mosesA2Pages as mosesA2PagesEn } from './en/pages';
import { mosesA2PagesAr } from './ar/pages';
import {
  mosesA2FinalChallengeExercisesPolished,
  mosesA2KnowledgeCheckExercisesPolished,
  mosesA2QuickChallengesPolished,
  mosesA2VocabularyChallengePairsPolished,
} from './en/exerciseSystem';
import {
  mosesA2FinalChallengeExercisesArPolished,
  mosesA2KnowledgeCheckExercisesArPolished,
  mosesA2QuickChallengesArPolished,
  mosesA2VocabularyChallengePairsArPolished,
} from './ar/exerciseSystem';
import { mosesA2LanguageReviewExercises } from './en/languageReview';
import { mosesA2LanguageReviewExercisesAr } from './ar/languageReview';
import { mosesA2LanguageFocusExercises } from './en/languageFocus';
import { mosesA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { mosesA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { mosesA2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { mosesA2LanguageFocusExercisesPart5 } from './en/languageFocusPart5';
import { mosesA2LanguageFocusExercisesPart6 } from './en/languageFocusPart6';
import { mosesA2LanguageFocusExercisesPart7 } from './en/languageFocusPart7';
import { mosesA2LanguageFocusExercisesPart8 } from './en/languageFocusPart8';
import { mosesA2LanguageFocusExercisesPart9 } from './en/languageFocusPart9';
import { mosesA2LanguageFocusExercisesPart10 } from './en/languageFocusPart10';
import { mosesA2LanguageFocusExercisesPart11 } from './en/languageFocusPart11';
import { mosesA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesA2LanguageFocusExercisesPart2Ar } from './ar/languageFocusPart2';
import { mosesA2LanguageFocusExercisesPart3Ar } from './ar/languageFocusPart3';
import { mosesA2LanguageFocusExercisesPart4Ar } from './ar/languageFocusPart4';
import { mosesA2LanguageFocusExercisesPart5Ar } from './ar/languageFocusPart5';
import { mosesA2LanguageFocusExercisesPart6Ar } from './ar/languageFocusPart6';
import { mosesA2LanguageFocusExercisesPart7Ar } from './ar/languageFocusPart7';
import { mosesA2LanguageFocusExercisesPart8Ar } from './ar/languageFocusPart8';
import { mosesA2LanguageFocusExercisesPart9Ar } from './ar/languageFocusPart9';
import { mosesA2LanguageFocusExercisesPart10Ar } from './ar/languageFocusPart10';
import { mosesA2LanguageFocusExercisesPart11Ar } from './ar/languageFocusPart11';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesA2TeacherGuideAr, mosesA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import {
  mosesA2SelfStudyGuidePreview as mosesA2SelfStudyGuide,
  mosesA2StudentGuideMetadataPreview as mosesA2StudentGuideMetadata,
  mosesA2StudentGuideSectionsPreview as mosesA2StudentGuideSections,
  mosesA2StudentGuideTextPreview as mosesA2StudentGuideText,
} from './en/selfStudyGuidePreview';
import {
  mosesA2SelfStudyGuidePreviewAr as mosesA2SelfStudyGuideAr,
  mosesA2StudentGuideMetadataPreviewAr as mosesA2StudentGuideMetadataAr,
  mosesA2StudentGuideSectionsPreviewAr as mosesA2StudentGuideSectionsAr,
  mosesA2StudentGuideTextPreviewAr as mosesA2StudentGuideTextAr,
} from './ar/selfStudyGuidePreview';

const STORY_IDS = new Set(Array.from({ length: 16 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => mosesA2PagesEn.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = mosesA2LanguageFocusExercises[page.id] ?? mosesA2LanguageFocusExercisesPart2[page.id] ?? mosesA2LanguageFocusExercisesPart3[page.id] ?? mosesA2LanguageFocusExercisesPart4[page.id] ?? mosesA2LanguageFocusExercisesPart5[page.id] ?? mosesA2LanguageFocusExercisesPart6[page.id] ?? mosesA2LanguageFocusExercisesPart7[page.id] ?? mosesA2LanguageFocusExercisesPart8[page.id] ?? mosesA2LanguageFocusExercisesPart9[page.id] ?? mosesA2LanguageFocusExercisesPart10[page.id] ?? mosesA2LanguageFocusExercisesPart11[page.id];
    return {
      ...page,
      exercises: [mosesA2QuickChallengesPolished[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercisesPolished };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairsPolished };
  if (page.id === 21) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all sixteen chapters.',
    exercises: mosesA2LanguageReviewExercises,
  };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => mosesA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = mosesA2LanguageFocusExercisesAr[page.id] ?? mosesA2LanguageFocusExercisesPart2Ar[page.id] ?? mosesA2LanguageFocusExercisesPart3Ar[page.id] ?? mosesA2LanguageFocusExercisesPart4Ar[page.id] ?? mosesA2LanguageFocusExercisesPart5Ar[page.id] ?? mosesA2LanguageFocusExercisesPart6Ar[page.id] ?? mosesA2LanguageFocusExercisesPart7Ar[page.id] ?? mosesA2LanguageFocusExercisesPart8Ar[page.id] ?? mosesA2LanguageFocusExercisesPart9Ar[page.id] ?? mosesA2LanguageFocusExercisesPart10Ar[page.id] ?? mosesA2LanguageFocusExercisesPart11Ar[page.id];
    return {
      ...page,
      exercises: [mosesA2QuickChallengesArPolished[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercisesArPolished };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairsArPolished };
  if (page.id === 21) return {
    ...page,
    title: 'مراجعة اللغة',
    content: 'راجع واستعمل تراكيب القواعد والوظائف اللغوية التي تعلمتها في الفصول الستة عشر.',
    exercises: mosesA2LanguageReviewExercisesAr,
  };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercisesArPolished };
  return page;
});

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: mosesA2TeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesA2SelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSections,
  studentGuideMetadata: mosesA2StudentGuideMetadata,
  studentGuideText: mosesA2StudentGuideText,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: mosesA2TeacherGuideAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataAr,
  selfStudyGuide: mosesA2SelfStudyGuideAr,
  studentGuideSections: mosesA2StudentGuideSectionsAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataAr,
  studentGuideText: mosesA2StudentGuideTextAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
