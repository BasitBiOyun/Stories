import type { BookData, PageData } from '../../../types';
import { mosesA2Pages as mosesA2PagesEn } from './en/pages';
import { mosesA2PagesAr } from './ar/pages';
import {
  mosesA2FinalChallengeExercises,
  mosesA2FinalReviewExercises,
  mosesA2KnowledgeCheckExercises,
  mosesA2QuickChallenges,
  mosesA2VocabularyChallengePairs,
} from './en/exercises';
import {
  mosesA2FinalChallengeExercisesAr,
  mosesA2FinalReviewExercisesAr,
  mosesA2KnowledgeCheckExercisesAr,
  mosesA2QuickChallengesAr,
  mosesA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesA2TeacherGuideAr, mosesA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesA2SelfStudyGuide, mosesA2StudentGuideMetadata } from './en/selfStudyGuide';
import { selfStudyGuide as mosesA2SelfStudyGuideAr, mosesA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 16 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => mosesA2PagesEn.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [mosesA2QuickChallenges[page.id]] };
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercises };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairs };
  if (page.id === 21) return { ...page, exercises: mosesA2FinalReviewExercises };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => mosesA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [mosesA2QuickChallengesAr[page.id]] };
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercisesAr };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairsAr };
  if (page.id === 21) return { ...page, exercises: mosesA2FinalReviewExercisesAr };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercisesAr };
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
  studentGuideMetadata: mosesA2StudentGuideMetadata,
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
  studentGuideMetadata: mosesA2StudentGuideMetadataAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
