import type { BookData, PageData } from '../../../types';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1PagesAr } from './ar/pages';
import {
  abrahamB1FinalChallengeExercisesPolished,
  abrahamB1KnowledgeCheckExercisesPolished,
  abrahamB1QuickChallengesPolished,
  abrahamB1VocabularyChallengePairsPolished,
  abrahamB1LanguageReviewExercises,
} from './en/exercises';
import {
  abrahamB1FinalChallengeExercisesArPolished,
  abrahamB1KnowledgeCheckExercisesArPolished,
  abrahamB1QuickChallengesArPolished,
  abrahamB1VocabularyChallengePairsArPolished,
  abrahamB1LanguageReviewExercisesAr,
} from './ar/exercises';
import { abrahamB1LanguageFocusExercises } from './en/languageFocus';
import {
  abrahamB1LanguageFocusChapter3,
  abrahamB1LanguageFocusChapter4,
  abrahamB1LanguageFocusChapter5,
  abrahamB1LanguageFocusChapter6,
  abrahamB1LanguageFocusChapter7,
  abrahamB1LanguageFocusChapter8,
} from './en/languageFocus2';
import {
  abrahamB1LanguageFocusChapter9,
  abrahamB1LanguageFocusChapter10,
  abrahamB1LanguageFocusChapter11,
  abrahamB1LanguageFocusChapter12,
  abrahamB1LanguageFocusChapter13,
} from './en/languageFocus3';
import { abrahamB1LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  abrahamB1LanguageFocusChapter3Ar,
  abrahamB1LanguageFocusChapter4Ar,
  abrahamB1LanguageFocusChapter5Ar,
  abrahamB1LanguageFocusChapter6Ar,
  abrahamB1LanguageFocusChapter7Ar,
  abrahamB1LanguageFocusChapter8Ar,
} from './ar/languageFocus2';
import {
  abrahamB1LanguageFocusChapter9Ar,
  abrahamB1LanguageFocusChapter10Ar,
  abrahamB1LanguageFocusChapter11Ar,
  abrahamB1LanguageFocusChapter12Ar,
  abrahamB1LanguageFocusChapter13Ar,
} from './ar/languageFocus3';
import { abrahamB1TeacherGuideEn, abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1TeacherGuideAr, abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB1SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const ENGLISH_GLOSSARY_EXCLUSIONS = new Set(['mardukh']);

const englishLanguageFocus = {
  ...abrahamB1LanguageFocusExercises,
  ...abrahamB1LanguageFocusChapter3,
  ...abrahamB1LanguageFocusChapter4,
  ...abrahamB1LanguageFocusChapter5,
  ...abrahamB1LanguageFocusChapter6,
  ...abrahamB1LanguageFocusChapter7,
  ...abrahamB1LanguageFocusChapter8,
  ...abrahamB1LanguageFocusChapter9,
  ...abrahamB1LanguageFocusChapter10,
  ...abrahamB1LanguageFocusChapter11,
  ...abrahamB1LanguageFocusChapter12,
  ...abrahamB1LanguageFocusChapter13,
};

const arabicLanguageFocus = {
  ...abrahamB1LanguageFocusExercisesAr,
  ...abrahamB1LanguageFocusChapter3Ar,
  ...abrahamB1LanguageFocusChapter4Ar,
  ...abrahamB1LanguageFocusChapter5Ar,
  ...abrahamB1LanguageFocusChapter6Ar,
  ...abrahamB1LanguageFocusChapter7Ar,
  ...abrahamB1LanguageFocusChapter8Ar,
  ...abrahamB1LanguageFocusChapter9Ar,
  ...abrahamB1LanguageFocusChapter10Ar,
  ...abrahamB1LanguageFocusChapter11Ar,
  ...abrahamB1LanguageFocusChapter12Ar,
  ...abrahamB1LanguageFocusChapter13Ar,
};

const buildEnglishPages = (): PageData[] => abrahamB1Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallengesPolished[page.id] ? [abrahamB1QuickChallengesPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesPolished };
  if (page.id === 15) return {
    ...page,
    title: 'B1 Language Review',
    content: 'Review and use the grammar patterns, discourse relationships, and communicative functions developed across all thirteen chapters.',
    exercises: abrahamB1LanguageReviewExercises,
  };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsPolished };
  if (page.id === 17) return {
    ...page,
    vocabulary: page.vocabulary?.filter(item => !ENGLISH_GLOSSARY_EXCLUSIONS.has(item.word.trim().toLocaleLowerCase())),
  };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => abrahamB1PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallengesArPolished[page.id] ? [abrahamB1QuickChallengesArPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesArPolished };
  if (page.id === 15) return {
    ...page,
    title: 'مراجعة اللغة B1',
    content: 'راجع واستخدم التراكيب والعلاقات الخطابية والوظائف التواصلية التي تطورت عبر الفصول الثلاثة عشر.',
    exercises: abrahamB1LanguageReviewExercisesAr,
  };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsArPolished };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesArPolished };
  return page;
});

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: buildEnglishPages(),
  teacherGuide: abrahamB1TeacherGuideEn,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadata,
  selfStudyGuide: abrahamB1SelfStudyGuideEn,
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: abrahamB1TeacherGuideAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB1SelfStudyGuideAr,
};

export const abrahamB1BookData = abrahamB1BookDataEn;
