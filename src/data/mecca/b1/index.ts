import type { BookData, Exercise, PageData } from '../../../types';
import { meccaB1Pages } from './en/pages';
import {
  meccaB1FinalChallengeExercises,
  meccaB1FinalReviewExercises,
  meccaB1QuickChallenges,
  meccaB1VocabularyChallengePairs,
} from './en/exercises';
import { meccaB1LanguageFocusExercises } from './en/languageFocus';
import { meccaB1KnowledgeCheckExercises } from './en/knowledgeCheck';
import { meccaB1TeacherGuide, meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1SelfStudyGuide, meccaB1StudentGuideMetadata } from './en/selfStudyGuide';
import { pages as meccaB1PagesAr } from './ar/pages';
import {
  meccaB1FinalChallengeExercisesAr,
  meccaB1FinalReviewExercisesAr,
  meccaB1QuickChallengesAr,
  meccaB1VocabularyChallengePairsAr,
} from './ar/exercises';
import { meccaB1LanguageFocusExercisesAr } from './ar/languageFocus';
import { meccaB1KnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { meccaB1TeacherGuideAr, meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1SelfStudyGuideAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const attachLearning = (
  sourcePages: PageData[],
  quickChallenges: Record<number, Exercise>,
  languageFocus: Record<number, Exercise[]>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => sourcePages.map((page) => {
  if (page.type === 'story' && quickChallenges[page.id]) {
    const languageFocusExercises = languageFocus[page.id];
    return {
      ...page,
      exercises: [quickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 16) return { ...page, type: 'quiz', exercises: knowledgeCheck };
  if (page.id === 17) return { ...page, type: 'exercises', exercises: review };
  if (page.id === 18) return { ...page, type: 'vocabulary-match', vocabularyPairs };
  if (page.id === 20) return { ...page, type: 'final-challenge', exercises: finalChallenge };
  return page;
});

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Islamic History & Civilization: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: attachLearning(meccaB1Pages, meccaB1QuickChallenges, meccaB1LanguageFocusExercises, meccaB1KnowledgeCheckExercises, meccaB1VocabularyChallengePairs, meccaB1FinalReviewExercises, meccaB1FinalChallengeExercises),
  teacherGuide: meccaB1TeacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadata,
  selfStudyGuide: meccaB1SelfStudyGuide,
  studentGuideMetadata: meccaB1StudentGuideMetadata,
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: attachLearning(meccaB1PagesAr, meccaB1QuickChallengesAr, meccaB1LanguageFocusExercisesAr, meccaB1KnowledgeCheckExercisesAr, meccaB1VocabularyChallengePairsAr, meccaB1FinalReviewExercisesAr, meccaB1FinalChallengeExercisesAr),
  teacherGuide: meccaB1TeacherGuideAr,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1SelfStudyGuideAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
