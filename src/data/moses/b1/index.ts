import type { BookData, PageData } from '../../../types';
import { mosesB1Pages } from './en/pages';
import { mosesB1PagesAr } from './ar/pages';
import {
  mosesB1PolishedFinalChallengeExercises,
  mosesB1PolishedKnowledgeCheckExercises,
  mosesB1PolishedQuickChallenges,
  mosesB1PolishedVocabularyChallengePairs,
  mosesB1LanguageReviewExercises,
} from './en/exercises';
import {
  mosesB1PolishedFinalChallengeExercisesAr,
  mosesB1PolishedKnowledgeCheckExercisesAr,
  mosesB1PolishedQuickChallengesAr,
  mosesB1PolishedVocabularyChallengePairsAr,
  mosesB1LanguageReviewExercisesAr,
} from './ar/exercises';
import { mosesB1LanguageFocusExercises } from './en/languageFocus';
import { mosesB1LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  mosesB1LanguageFocusChapter3,
  mosesB1LanguageFocusChapter4,
  mosesB1LanguageFocusChapter5,
  mosesB1LanguageFocusChapter6,
  mosesB1LanguageFocusChapter7,
  mosesB1LanguageFocusChapter8,
} from './en/languageFocus2';
import {
  mosesB1LanguageFocusChapter9,
  mosesB1LanguageFocusChapter10,
  mosesB1LanguageFocusChapter11,
  mosesB1LanguageFocusChapter12,
  mosesB1LanguageFocusChapter13,
} from './en/languageFocus3';
import {
  mosesB1LanguageFocusChapter3Ar,
  mosesB1LanguageFocusChapter4Ar,
  mosesB1LanguageFocusChapter5Ar,
  mosesB1LanguageFocusChapter6Ar,
  mosesB1LanguageFocusChapter7Ar,
  mosesB1LanguageFocusChapter8Ar,
} from './ar/languageFocus2';
import {
  mosesB1LanguageFocusChapter9Ar,
  mosesB1LanguageFocusChapter10Ar,
  mosesB1LanguageFocusChapter11Ar,
  mosesB1LanguageFocusChapter12Ar,
  mosesB1LanguageFocusChapter13Ar,
} from './ar/languageFocus3';
import { mosesB1TeacherGuide as mosesB1TeacherGuideEn, mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1TeacherGuideAr, mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1SelfStudyGuideEn } from './en/selfStudyGuide';
import { mosesB1SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const englishLanguageFocus = {
  ...mosesB1LanguageFocusExercises,
  ...mosesB1LanguageFocusChapter3,
  ...mosesB1LanguageFocusChapter4,
  ...mosesB1LanguageFocusChapter5,
  ...mosesB1LanguageFocusChapter6,
  ...mosesB1LanguageFocusChapter7,
  ...mosesB1LanguageFocusChapter8,
  ...mosesB1LanguageFocusChapter9,
  ...mosesB1LanguageFocusChapter10,
  ...mosesB1LanguageFocusChapter11,
  ...mosesB1LanguageFocusChapter12,
  ...mosesB1LanguageFocusChapter13,
};

const arabicLanguageFocus = {
  ...mosesB1LanguageFocusExercisesAr,
  ...mosesB1LanguageFocusChapter3Ar,
  ...mosesB1LanguageFocusChapter4Ar,
  ...mosesB1LanguageFocusChapter5Ar,
  ...mosesB1LanguageFocusChapter6Ar,
  ...mosesB1LanguageFocusChapter7Ar,
  ...mosesB1LanguageFocusChapter8Ar,
  ...mosesB1LanguageFocusChapter9Ar,
  ...mosesB1LanguageFocusChapter10Ar,
  ...mosesB1LanguageFocusChapter11Ar,
  ...mosesB1LanguageFocusChapter12Ar,
  ...mosesB1LanguageFocusChapter13Ar,
};

const buildEnglishPages = (): PageData[] => mosesB1Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: mosesB1PolishedQuickChallenges[page.id] ? [mosesB1PolishedQuickChallenges[page.id]] : [],
      ...(englishLanguageFocus[page.id] ? { languageFocusExercises: englishLanguageFocus[page.id] } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: mosesB1PolishedKnowledgeCheckExercises };
  if (page.id === 15) return { ...page, vocabularyPairs: mosesB1PolishedVocabularyChallengePairs };
  if (page.id === 18) return { ...page, title: 'B1 Language Review', content: 'Review and use the grammar patterns, discourse relationships, and communicative functions developed across all thirteen chapters.', exercises: mosesB1LanguageReviewExercises };
  if (page.id === 19) return { ...page, exercises: mosesB1PolishedFinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => mosesB1PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: mosesB1PolishedQuickChallengesAr[page.id] ? [mosesB1PolishedQuickChallengesAr[page.id]] : [],
      ...(arabicLanguageFocus[page.id] ? { languageFocusExercises: arabicLanguageFocus[page.id] } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: mosesB1PolishedKnowledgeCheckExercisesAr };
  if (page.id === 15) return { ...page, vocabularyPairs: mosesB1PolishedVocabularyChallengePairsAr };
  if (page.id === 18) return { ...page, title: 'مراجعة اللغة B1', content: 'راجع واستخدم التراكيب والعلاقات الخطابية والوظائف التواصلية التي تطورت عبر الفصول الثلاثة عشر.', exercises: mosesB1LanguageReviewExercisesAr };
  if (page.id === 19) return { ...page, exercises: mosesB1PolishedFinalChallengeExercisesAr };
  return page;
});

export const mosesB1BookDataEn: BookData = {
  id: 'b1-moses-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: buildEnglishPages(),
  teacherGuide: mosesB1TeacherGuideEn,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata,
  selfStudyGuide: mosesB1SelfStudyGuideEn,
};

export const mosesB1BookDataAr: BookData = {
  id: 'b1-moses-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: mosesB1TeacherGuideAr,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr,
  selfStudyGuide: mosesB1SelfStudyGuideAr,
};

export const mosesB1BookData = mosesB1BookDataEn;
