import type { BookData, PageData } from '../../../types';
import { adamA2Pages } from './en/pages';
import { adamA2PagesAr } from './ar/pages';
import {
  adamA2FinalChallengeExercises,
  adamA2FinalReviewExercises,
  adamA2KnowledgeCheckExercises,
  adamA2QuickChallenges,
  adamA2VocabularyChallengePairs,
} from './en/exercises';
import {
  adamA2FinalChallengeExercisesAr,
  adamA2FinalReviewExercisesAr,
  adamA2KnowledgeCheckExercisesAr,
  adamA2QuickChallengesAr,
  adamA2VocabularyChallengePairsAr,
} from './ar/exercises';
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
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [adamA2QuickChallenges[page.id]] };
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercises };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairs };
  if (page.id === 13) return { ...page, exercises: adamA2FinalReviewExercises };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => adamA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [adamA2QuickChallengesAr[page.id]] };
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercisesAr };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairsAr };
  if (page.id === 13) return { ...page, exercises: adamA2FinalReviewExercisesAr };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercisesAr };
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
