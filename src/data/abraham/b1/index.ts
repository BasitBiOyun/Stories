import type { BookData, PageData } from '../../../types';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1PagesAr } from './ar/pages';
import {
  abrahamB1FinalChallengeExercises,
  abrahamB1FinalReviewExercises,
  abrahamB1KnowledgeCheckExercises,
  abrahamB1QuickChallenges,
  abrahamB1VocabularyChallengePairs,
} from './en/exercises';
import {
  abrahamB1FinalChallengeExercisesAr,
  abrahamB1FinalReviewExercisesAr,
  abrahamB1KnowledgeCheckExercisesAr,
  abrahamB1QuickChallengesAr,
  abrahamB1VocabularyChallengePairsAr,
} from './ar/exercises';
import { abrahamB1TeacherGuideEn, abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1TeacherGuideAr, abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideEn } from './en/selfstudyGuide';
import { abrahamB1SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => abrahamB1Pages.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [abrahamB1QuickChallenges[page.id]] };
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercises };
  if (page.id === 15) return { ...page, exercises: abrahamB1FinalReviewExercises };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairs };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => abrahamB1PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [abrahamB1QuickChallengesAr[page.id]] };
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesAr };
  if (page.id === 15) return { ...page, exercises: abrahamB1FinalReviewExercisesAr };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsAr };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesAr };
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
