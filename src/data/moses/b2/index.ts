import type { BookData, PageData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import {
  mosesB2QuickChallenges,
  mosesB2KnowledgeCheckExercises,
  mosesB2VocabularyChallengePairs,
  mosesB2FinalReviewExercises,
  mosesB2FinalChallengeExercises,
} from './en/exercises';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide } from './en/selfStudyGuide';
import { mosesB2PagesAr } from './ar/pages';
import {
  mosesB2QuickChallengesAr,
  mosesB2KnowledgeCheckExercisesAr,
  mosesB2VocabularyChallengePairsAr,
  mosesB2FinalReviewExercisesAr,
  mosesB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 24 }, (_, index) => index + 1));

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [mosesB2QuickChallenges[page.id]] };
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercises };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairs };
  if (page.id === 29) return { ...page, exercises: mosesB2FinalReviewExercises };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercises };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [mosesB2QuickChallengesAr[page.id]] };
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesAr };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsAr };
  if (page.id === 29) return { ...page, exercises: mosesB2FinalReviewExercisesAr };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesAr };
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
