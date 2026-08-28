import type { BookData, Exercise, PageData } from '../../../types';
import { meccaB1Pages } from './en/pages';
import {
  meccaB1FinalChallengeExercises,
  meccaB1FinalReviewExercises,
  meccaB1QuickChallenges,
  meccaB1VocabularyChallengePairs,
} from './en/exercises';
import { meccaB1LanguageFocusExercises } from './en/languageFocus';
import { meccaB1LanguageFocusChapter3 } from './en/languageFocusChapter3';
import { meccaB1LanguageFocusChapter4 } from './en/languageFocusChapter4';
import { meccaB1LanguageFocusChapter5 } from './en/languageFocusChapter5';
import { meccaB1LanguageFocusChapter6 } from './en/languageFocusChapter6';
import { meccaB1LanguageFocusChapter7 } from './en/languageFocusChapter7';
import { meccaB1LanguageFocusChapter8 } from './en/languageFocusChapter8';
import { meccaB1LanguageFocusChapter9 } from './en/languageFocusChapter9';
import { meccaB1LanguageFocusChapter10 } from './en/languageFocusChapter10';
import { meccaB1LanguageFocusChapter11 } from './en/languageFocusChapter11';
import { meccaB1LanguageFocusChapter12 } from './en/languageFocusChapter12';
import { meccaB1LanguageFocusChapter13 } from './en/languageFocusChapter13';
import { meccaB1LanguageFocusChapter14 } from './en/languageFocusChapter14';
import { meccaB1LanguageFocusChapter15 } from './en/languageFocusChapter15';
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
import { meccaB1LanguageFocusChapter3Ar } from './ar/languageFocusChapter3';
import { meccaB1LanguageFocusChapter4Ar } from './ar/languageFocusChapter4';
import { meccaB1LanguageFocusChapter5Ar } from './ar/languageFocusChapter5';
import { meccaB1LanguageFocusChapter6Ar } from './ar/languageFocusChapter6';
import { meccaB1LanguageFocusChapter7Ar } from './ar/languageFocusChapter7';
import { meccaB1LanguageFocusChapter8Ar } from './ar/languageFocusChapter8';
import { meccaB1LanguageFocusChapter9Ar } from './ar/languageFocusChapter9';
import { meccaB1LanguageFocusChapter10Ar } from './ar/languageFocusChapter10';
import { meccaB1LanguageFocusChapter11Ar } from './ar/languageFocusChapter11';
import { meccaB1LanguageFocusChapter12Ar } from './ar/languageFocusChapter12';
import { meccaB1LanguageFocusChapter13Ar } from './ar/languageFocusChapter13';
import { meccaB1LanguageFocusChapter14Ar } from './ar/languageFocusChapter14';
import { meccaB1LanguageFocusChapter15Ar } from './ar/languageFocusChapter15';
import { meccaB1KnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { meccaB1TeacherGuideAr, meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1SelfStudyGuideAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const englishLanguageFocus = {
  ...meccaB1LanguageFocusExercises,
  ...meccaB1LanguageFocusChapter3,
  ...meccaB1LanguageFocusChapter4,
  ...meccaB1LanguageFocusChapter5,
  ...meccaB1LanguageFocusChapter6,
  ...meccaB1LanguageFocusChapter7,
  ...meccaB1LanguageFocusChapter8,
  ...meccaB1LanguageFocusChapter9,
  ...meccaB1LanguageFocusChapter10,
  ...meccaB1LanguageFocusChapter11,
  ...meccaB1LanguageFocusChapter12,
  ...meccaB1LanguageFocusChapter13,
  ...meccaB1LanguageFocusChapter14,
  ...meccaB1LanguageFocusChapter15,
};

const arabicLanguageFocus = {
  ...meccaB1LanguageFocusExercisesAr,
  ...meccaB1LanguageFocusChapter3Ar,
  ...meccaB1LanguageFocusChapter4Ar,
  ...meccaB1LanguageFocusChapter5Ar,
  ...meccaB1LanguageFocusChapter6Ar,
  ...meccaB1LanguageFocusChapter7Ar,
  ...meccaB1LanguageFocusChapter8Ar,
  ...meccaB1LanguageFocusChapter9Ar,
  ...meccaB1LanguageFocusChapter10Ar,
  ...meccaB1LanguageFocusChapter11Ar,
  ...meccaB1LanguageFocusChapter12Ar,
  ...meccaB1LanguageFocusChapter13Ar,
  ...meccaB1LanguageFocusChapter14Ar,
  ...meccaB1LanguageFocusChapter15Ar,
};

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
  pages: attachLearning(meccaB1Pages, meccaB1QuickChallenges, englishLanguageFocus, meccaB1KnowledgeCheckExercises, meccaB1VocabularyChallengePairs, meccaB1FinalReviewExercises, meccaB1FinalChallengeExercises),
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
  pages: attachLearning(meccaB1PagesAr, meccaB1QuickChallengesAr, arabicLanguageFocus, meccaB1KnowledgeCheckExercisesAr, meccaB1VocabularyChallengePairsAr, meccaB1FinalReviewExercisesAr, meccaB1FinalChallengeExercisesAr),
  teacherGuide: meccaB1TeacherGuideAr,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1SelfStudyGuideAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
