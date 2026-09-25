import type { BookData, PageData } from '../../../types';
import { mosesA2Pages as mosesA2PagesEn } from './en/pages';
import { mosesA2PagesAr } from './ar/pages';
import {
  mosesA2FinalChallengeExercisesPolished,
  mosesA2KnowledgeCheckExercisesPolished,
  mosesA2QuickChallengesPolished,
  mosesA2VocabularyChallengePairsPolished,
  mosesA2LanguageReviewExercises,
} from './en/exercises';
import {
  mosesA2FinalChallengeExercisesArPolished,
  mosesA2KnowledgeCheckExercisesArPolished,
  mosesA2QuickChallengesArPolished,
  mosesA2VocabularyChallengePairsArPolished,
  mosesA2LanguageReviewExercisesAr,
} from './ar/exercises';
import { mosesA2LanguageFocusExercises } from './en/languageFocus';
import {
  mosesA2LanguageFocusExercisesPart2,
  mosesA2LanguageFocusExercisesPart3,
  mosesA2LanguageFocusExercisesPart4,
  mosesA2LanguageFocusExercisesPart5,
  mosesA2LanguageFocusExercisesPart6,
} from './en/languageFocus2';
import {
  mosesA2LanguageFocusExercisesPart7,
  mosesA2LanguageFocusExercisesPart8,
  mosesA2LanguageFocusExercisesPart9,
  mosesA2LanguageFocusExercisesPart10,
  mosesA2LanguageFocusExercisesPart11,
} from './en/languageFocus3';
import { mosesA2LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  mosesA2LanguageFocusExercisesPart2Ar,
  mosesA2LanguageFocusExercisesPart3Ar,
  mosesA2LanguageFocusExercisesPart4Ar,
  mosesA2LanguageFocusExercisesPart5Ar,
  mosesA2LanguageFocusExercisesPart6Ar,
} from './ar/languageFocus2';
import {
  mosesA2LanguageFocusExercisesPart7Ar,
  mosesA2LanguageFocusExercisesPart8Ar,
  mosesA2LanguageFocusExercisesPart9Ar,
  mosesA2LanguageFocusExercisesPart10Ar,
  mosesA2LanguageFocusExercisesPart11Ar,
} from './ar/languageFocus3';

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
  teacherGuide: [],
  selfStudyGuide: [],
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const mosesA2BookData = mosesA2BookDataEn;
