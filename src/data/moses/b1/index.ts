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
import { mosesB1LanguageFocusExercises } from './en/languageFocus';
import { mosesB1LanguageFocusChapter3 } from './en/languageFocusChapter3';
import { mosesB1LanguageFocusChapter4 } from './en/languageFocusChapter4';
import { mosesB1LanguageFocusChapter5 } from './en/languageFocusChapter5';
import { mosesB1LanguageFocusChapter6 } from './en/languageFocusChapter6';
import { mosesB1LanguageFocusChapter7 } from './en/languageFocusChapter7';
import { mosesB1LanguageFocusChapter8 } from './en/languageFocusChapter8';
import { mosesB1LanguageFocusChapter9 } from './en/languageFocusChapter9';
import { mosesB1LanguageFocusChapter10 } from './en/languageFocusChapter10';
import { mosesB1LanguageFocusChapter11 } from './en/languageFocusChapter11';
import { mosesB1LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesB1LanguageFocusChapter3Ar } from './ar/languageFocusChapter3';
import { mosesB1LanguageFocusChapter4Ar } from './ar/languageFocusChapter4';
import { mosesB1LanguageFocusChapter5Ar } from './ar/languageFocusChapter5';
import { mosesB1LanguageFocusChapter6Ar } from './ar/languageFocusChapter6';
import { mosesB1LanguageFocusChapter7Ar } from './ar/languageFocusChapter7';
import { mosesB1LanguageFocusChapter8Ar } from './ar/languageFocusChapter8';
import { mosesB1LanguageFocusChapter9Ar } from './ar/languageFocusChapter9';
import { mosesB1LanguageFocusChapter10Ar } from './ar/languageFocusChapter10';
import { mosesB1LanguageFocusChapter11Ar } from './ar/languageFocusChapter11';
import { mosesB1TeacherGuide, mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1SelfStudyGuide, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';
import { mosesB1TeacherGuideAr, mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1SelfStudyGuideAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const englishLanguageFocus = {
  ...mosesB1LanguageFocusExercises,
  ...mosesB1LanguageFocusChapter3,
  ...mosesB1LanguageFocusChapter4,
  ...mosesB1LanguageFocusChapter5,
  ...mosesB1LanguageFocusChapter6,
  ...mosesB1LanguageFocusChapter7,
  ...mosesB1LanguageFocusChapter8,
  ...mosesB1LanguageFocusChapter9,
  ...mosesB1LanguageFocusChapter10,
  ...mosesB1LanguageFocusChapter11,
};

const arabicLanguageFocus = {
  ...mosesB1LanguageFocusExercisesAr,
  ...mosesB1LanguageFocusChapter3Ar,
  ...mosesB1LanguageFocusChapter4Ar,
  ...mosesB1LanguageFocusChapter5Ar,
  ...mosesB1LanguageFocusChapter6Ar,
  ...mosesB1LanguageFocusChapter7Ar,
  ...mosesB1LanguageFocusChapter8Ar,
  ...mosesB1LanguageFocusChapter9Ar,
  ...mosesB1LanguageFocusChapter10Ar,
  ...mosesB1LanguageFocusChapter11Ar,
};

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  languageFocus: Record<number, Exercise[]>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = languageFocus[page.id];
    return {
      ...page,
      exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: knowledgeCheck };
  if (page.id === 15) return { ...page, vocabularyPairs };
  if (page.id === 18) return { ...page, exercises: review };
  if (page.id === 19) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(
  mosesB1Pages,
  mosesB1QuickChallenges,
  englishLanguageFocus,
  mosesB1KnowledgeCheckExercises,
  mosesB1VocabularyChallengePairs,
  mosesB1FinalReviewExercises,
  mosesB1FinalChallengeExercises,
);
const arabicPages = buildPages(
  mosesB1PagesAr,
  mosesB1QuickChallengesAr,
  arabicLanguageFocus,
  mosesB1KnowledgeCheckExercisesAr,
  mosesB1VocabularyChallengePairsAr,
  mosesB1FinalReviewExercisesAr,
  mosesB1FinalChallengeExercisesAr,
);

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
