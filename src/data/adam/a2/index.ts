import type { BookData, PageData } from '../../../types';
import { adamA2Pages } from './en/pages';
import { adamA2PagesAr } from './ar/pages';
import {
  adamA2FinalChallengeExercisesPolished,
  adamA2KnowledgeCheckExercisesPolished,
  adamA2QuickChallengesPolished,
  adamA2VocabularyChallengePairsPolished,
} from './en/exerciseSystem';
import {
  adamA2FinalChallengeExercisesArPolished,
  adamA2KnowledgeCheckExercisesArPolished,
  adamA2QuickChallengesArPolished,
  adamA2VocabularyChallengePairsArPolished,
} from './ar/exerciseSystem';
import { adamA2LanguageReviewExercises } from './en/languageReview';
import { adamA2LanguageReviewExercisesAr } from './ar/languageReview';
import { adamA2LanguageFocusExercises } from './en/languageFocus';
import { adamA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { adamA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { adamA2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { adamA2LanguageFocusExercisesPart5 } from './en/languageFocusPart5';
import { adamA2LanguageFocusExercisesPart6 } from './en/languageFocusPart6';
import { adamA2LanguageFocusExercisesPart7 } from './en/languageFocusPart7';
import { adamA2LanguageFocusExercisesPart8 } from './en/languageFocusPart8';
import { adamA2LanguageFocusExercisesPart9 } from './en/languageFocusPart9';
import { adamA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { adamA2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { adamA2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { adamA2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { adamA2LanguageFocusExercisesArPart5 } from './ar/languageFocusPart5';
import { adamA2LanguageFocusExercisesArPart6 } from './ar/languageFocusPart6';
import { adamA2LanguageFocusExercisesArPart7 } from './ar/languageFocusPart7';
import { adamA2LanguageFocusExercisesArPart8 } from './ar/languageFocusPart8';
import { adamA2LanguageFocusExercisesArPart9 } from './ar/languageFocusPart9';
import { adamA2TeacherGuide, adamA2TeacherGuideMetadata } from './en/teacherGuide';
import { adamA2TeacherGuideAr, adamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import {
  adamA2SelfStudyGuide,
  adamA2StudentGuideMetadata,
  adamA2StudentGuideSections,
  adamA2StudentGuideText,
} from './en/selfStudyGuide';
import {
  adamA2SelfStudyGuideAr,
  adamA2StudentGuideMetadataAr,
  adamA2StudentGuideSectionsAr,
  adamA2StudentGuideTextAr,
} from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 10 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => adamA2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = adamA2LanguageFocusExercises[page.id]
      ?? adamA2LanguageFocusExercisesPart2[page.id]
      ?? adamA2LanguageFocusExercisesPart3[page.id]
      ?? adamA2LanguageFocusExercisesPart4[page.id]
      ?? adamA2LanguageFocusExercisesPart5[page.id]
      ?? adamA2LanguageFocusExercisesPart6[page.id]
      ?? adamA2LanguageFocusExercisesPart7[page.id]
      ?? adamA2LanguageFocusExercisesPart8[page.id]
      ?? adamA2LanguageFocusExercisesPart9[page.id];
    return {
      ...page,
      exercises: [adamA2QuickChallengesPolished[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercisesPolished };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairsPolished };
  if (page.id === 13) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all ten chapters.',
    exercises: adamA2LanguageReviewExercises,
  };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => adamA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = adamA2LanguageFocusExercisesAr[page.id]
      ?? adamA2LanguageFocusExercisesArPart2[page.id]
      ?? adamA2LanguageFocusExercisesArPart3[page.id]
      ?? adamA2LanguageFocusExercisesArPart4[page.id]
      ?? adamA2LanguageFocusExercisesArPart5[page.id]
      ?? adamA2LanguageFocusExercisesArPart6[page.id]
      ?? adamA2LanguageFocusExercisesArPart7[page.id]
      ?? adamA2LanguageFocusExercisesArPart8[page.id]
      ?? adamA2LanguageFocusExercisesArPart9[page.id];
    return {
      ...page,
      exercises: [adamA2QuickChallengesArPolished[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercisesArPolished };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairsArPolished };
  if (page.id === 13) return {
    ...page,
    title: 'مراجعة اللغة',
    content: 'راجع واستعمل تراكيب القواعد والوظائف اللغوية التي تعلمتها في الفصول العشرة.',
    exercises: adamA2LanguageReviewExercisesAr,
  };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercisesArPolished };
  return page;
});

export const adamA2BookDataEn: BookData = {
  id: 'adam-a2-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: adamA2TeacherGuide,
  teacherGuideMetadata: adamA2TeacherGuideMetadata,
  selfStudyGuide: adamA2SelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSections,
  studentGuideMetadata: adamA2StudentGuideMetadata,
  studentGuideText: adamA2StudentGuideText,
};

export const adamA2BookDataAr: BookData = {
  id: 'adam-a2-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: adamA2TeacherGuideAr,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
