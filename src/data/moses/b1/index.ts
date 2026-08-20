import type { BookData, Exercise, PageData } from '../../../types';
import { mosesB1Pages } from './en/pages';
import { mosesB1PagesAr } from './ar/pages';
import {
  mosesB1QuickChallenges,
  mosesB1KnowledgeCheckExercises,
  mosesB1VocabularyChallengePairs,
  mosesB1FinalReviewExercises,
  mosesB1FinalChallengeExercises,
} from './en/exercises';
import {
  mosesB1QuickChallengesAr,
  mosesB1KnowledgeCheckExercisesAr,
  mosesB1VocabularyChallengePairsAr,
  mosesB1FinalReviewExercisesAr,
  mosesB1FinalChallengeExercisesAr,
} from './ar/exercises';
import { mosesB1TeacherGuide, mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1SelfStudyGuide, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';
import { mosesB1TeacherGuideAr, mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1SelfStudyGuideAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [] };
  if (page.id === 14) return { ...page, exercises: knowledgeCheck };
  if (page.id === 15) return { ...page, vocabularyPairs };
  if (page.id === 18) return { ...page, exercises: review };
  if (page.id === 19) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(mosesB1Pages, mosesB1QuickChallenges, mosesB1KnowledgeCheckExercises, mosesB1VocabularyChallengePairs, mosesB1FinalReviewExercises, mosesB1FinalChallengeExercises);
const arabicPages = buildPages(mosesB1PagesAr, mosesB1QuickChallengesAr, mosesB1KnowledgeCheckExercisesAr, mosesB1VocabularyChallengePairsAr, mosesB1FinalReviewExercisesAr, mosesB1FinalChallengeExercisesAr);

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en', level: 'B1', title: 'The Story of Prophet Moses (pbuh)', pages: englishPages,
  teacherGuide: mosesB1TeacherGuide, selfStudyGuide: mosesB1SelfStudyGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata, studentGuideMetadata: mosesB1StudentGuideMetadata, baseFontSize: 13,
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar', level: 'B1', title: 'قصة النبي موسى عليه السلام', pages: arabicPages,
  teacherGuide: mosesB1TeacherGuideAr, selfStudyGuide: mosesB1SelfStudyGuideAr,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr, studentGuideMetadata: mosesB1StudentGuideMetadataAr, baseFontSize: 14,
};
