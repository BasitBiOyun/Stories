import type { BookData, PageData } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './en/exercises';
import {
  abrahamB2FinalChallengeExercisesAr,
  abrahamB2KnowledgeCheckExercisesAr,
  abrahamB2QuickChallengesAr,
  abrahamB2VocabularyChallengePairsAr,
} from './ar/exercises';
import { abrahamB2LanguageFocusExercises } from './en/languageFocus';
import { abrahamB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { abrahamB2LanguageReviewExercises } from './en/languageReview';
import { abrahamB2LanguageReviewExercisesAr } from './ar/languageReview';
import { abrahamB2TeacherGuideEn, abrahamB2TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 35 }, (_, index) => index + 1));

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamB2LanguageFocusExercises[page.id];
    return {
      ...page,
      exercises: [abrahamB2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 36) return { ...page, exercises: abrahamB2KnowledgeCheckExercises };
  if (page.id === 37) {
    return {
      ...page,
      title: 'B2 Language Review',
      content: 'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',
      exercises: abrahamB2LanguageReviewExercises,
    };
  }
  if (page.id === 38) return { ...page, vocabularyPairs: abrahamB2VocabularyChallengePairs };
  if (page.id === 40) return { ...page, exercises: abrahamB2FinalChallengeExercises };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamB2LanguageFocusExercisesAr[page.id];
    return {
      ...page,
      exercises: [abrahamB2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 36) return { ...page, exercises: abrahamB2KnowledgeCheckExercisesAr };
  if (page.id === 37) {
    return {
      ...page,
      title: 'مراجعة اللغة B2',
      content: 'راجع واستعمل صيغ المصدر والموقف والزمن والتماسك والعلاقات الخطابية التي تطورت عبر الفصول الخمسة والثلاثين.',
      exercises: abrahamB2LanguageReviewExercisesAr,
    };
  }
  if (page.id === 38) return { ...page, vocabularyPairs: abrahamB2VocabularyChallengePairsAr };
  if (page.id === 40) return { ...page, exercises: abrahamB2FinalChallengeExercisesAr };
  return page;
});

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: attachEnglishLearning(abrahamB2Pages),
  teacherGuide: abrahamB2TeacherGuideEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadata,
  selfStudyGuide: abrahamB2SelfStudyGuideEn,
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachArabicLearning(abrahamB2PagesAr),
  teacherGuide: abrahamB2TeacherGuideAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB2SelfStudyGuideAr,
};

export const abrahamB2BookData = abrahamB2BookDataEn;
