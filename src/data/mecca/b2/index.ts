import type { BookData, Exercise, PageData } from '../../../types';
import { meccaB2Pages } from './en/pages';
import {
  meccaB2QuickChallenges,
  meccaB2KnowledgeCheckExercises,
  meccaB2VocabularyChallengePairs,
  meccaB2FinalReviewExercises,
  meccaB2FinalChallengeExercises,
} from './en/exercises';
import { meccaB2TeacherGuide, meccaB2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB2SelfStudyGuide, meccaB2StudentGuideMetadata } from './en/selfStudyGuide';
import { meccaB2PagesAr } from './ar/pages';
import {
  meccaB2QuickChallengesAr,
  meccaB2KnowledgeCheckExercisesAr,
  meccaB2VocabularyChallengePairsAr,
  meccaB2FinalReviewExercisesAr,
  meccaB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { meccaB2TeacherGuideAr, meccaB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));

const attachLearning = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, type: 'story', exercises: [quickChallenges[page.id]] };
  if (page.id === 18) return { ...page, type: 'quiz', exercises: knowledgeCheck };
  if (page.id === 19) return { ...page, type: 'exercises', exercises: review };
  if (page.id === 20) return { ...page, type: 'vocabulary-match', vocabularyPairs };
  if (page.id === 22) return { ...page, type: 'final-challenge', exercises: finalChallenge };
  return page;
});

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: attachLearning(meccaB2Pages, meccaB2QuickChallenges, meccaB2KnowledgeCheckExercises, meccaB2VocabularyChallengePairs, meccaB2FinalReviewExercises, meccaB2FinalChallengeExercises),
  teacherGuide: meccaB2TeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadata,
  selfStudyGuide: meccaB2SelfStudyGuide,
  studentGuideMetadata: meccaB2StudentGuideMetadata,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachLearning(meccaB2PagesAr, meccaB2QuickChallengesAr, meccaB2KnowledgeCheckExercisesAr, meccaB2VocabularyChallengePairsAr, meccaB2FinalReviewExercisesAr, meccaB2FinalChallengeExercisesAr),
  teacherGuide: meccaB2TeacherGuideAr,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataAr,
  selfStudyGuide: meccaB2SelfStudyGuideAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
