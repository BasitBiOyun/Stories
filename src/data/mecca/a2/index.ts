import type { BookData, PageData } from '../../../types';
import { meccaA2Pages as meccaA2PagesEn } from './en/pages';
import { meccaA2PagesAr } from './ar/pages';
import {
  meccaA2FinalChallengeExercises,
  meccaA2FinalReviewExercises,
  meccaA2QuickChallenges,
  meccaA2VocabularyChallengePairs,
} from './en/exercises';
import { meccaA2KnowledgeCheckExercises } from './en/knowledgeCheck';
import { meccaA2LanguageFocusExercises } from './en/languageFocus';
import { meccaA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { meccaA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { meccaA2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { meccaA2LanguageFocusExercisesPart5 } from './en/languageFocusPart5';
import { meccaA2LanguageFocusExercisesPart6 } from './en/languageFocusPart6';
import { meccaA2LanguageFocusExercisesPart7 } from './en/languageFocusPart7';
import { meccaA2LanguageFocusExercisesPart8 } from './en/languageFocusPart8';
import { meccaA2LanguageFocusExercisesPart9 } from './en/languageFocusPart9';
import { meccaA2LanguageFocusExercisesPart10 } from './en/languageFocusPart10';
import {
  meccaA2FinalChallengeExercisesAr,
  meccaA2FinalReviewExercisesAr,
  meccaA2QuickChallengesAr,
  meccaA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { meccaA2KnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { meccaA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { meccaA2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { meccaA2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { meccaA2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { meccaA2LanguageFocusExercisesArPart5 } from './ar/languageFocusPart5';
import { meccaA2LanguageFocusExercisesArPart6 } from './ar/languageFocusPart6';
import { meccaA2LanguageFocusExercisesArPart7 } from './ar/languageFocusPart7';
import { meccaA2LanguageFocusExercisesArPart8 } from './ar/languageFocusPart8';
import { meccaA2LanguageFocusExercisesArPart9 } from './ar/languageFocusPart9';
import { meccaA2LanguageFocusExercisesArPart10 } from './ar/languageFocusPart10';
import { meccaA2TeacherGuide, meccaA2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaA2TeacherGuideAr, meccaA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaA2SelfStudyGuide, meccaA2StudentGuideMetadata } from './en/selfStudyGuide';
import { meccaA2SelfStudyGuideAr, meccaA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => meccaA2PagesEn.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocus = meccaA2LanguageFocusExercisesPart10[page.id] ?? meccaA2LanguageFocusExercisesPart9[page.id] ?? meccaA2LanguageFocusExercisesPart8[page.id] ?? meccaA2LanguageFocusExercisesPart7[page.id] ?? meccaA2LanguageFocusExercisesPart6[page.id] ?? meccaA2LanguageFocusExercisesPart5[page.id] ?? meccaA2LanguageFocusExercisesPart4[page.id] ?? meccaA2LanguageFocusExercisesPart3[page.id] ?? meccaA2LanguageFocusExercisesPart2[page.id] ?? meccaA2LanguageFocusExercises[page.id] ?? [];
    return {
      ...page,
      exercises: [meccaA2QuickChallenges[page.id], ...languageFocus],
    };
  }
  if (page.id === 14) return { ...page, exercises: meccaA2KnowledgeCheckExercises };
  if (page.id === 15) return { ...page, vocabularyPairs: meccaA2VocabularyChallengePairs };
  if (page.id === 16) return { ...page, exercises: meccaA2FinalReviewExercises };
  if (page.id === 19) return { ...page, exercises: meccaA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => meccaA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocus = meccaA2LanguageFocusExercisesArPart10[page.id] ?? meccaA2LanguageFocusExercisesArPart9[page.id] ?? meccaA2LanguageFocusExercisesArPart8[page.id] ?? meccaA2LanguageFocusExercisesArPart7[page.id] ?? meccaA2LanguageFocusExercisesArPart6[page.id] ?? meccaA2LanguageFocusExercisesArPart5[page.id] ?? meccaA2LanguageFocusExercisesArPart4[page.id] ?? meccaA2LanguageFocusExercisesArPart3[page.id] ?? meccaA2LanguageFocusExercisesArPart2[page.id] ?? meccaA2LanguageFocusExercisesAr[page.id] ?? [];
    return {
      ...page,
      exercises: [meccaA2QuickChallengesAr[page.id], ...languageFocus],
    };
  }
  if (page.id === 14) return { ...page, exercises: meccaA2KnowledgeCheckExercisesAr };
  if (page.id === 15) return { ...page, vocabularyPairs: meccaA2VocabularyChallengePairsAr };
  if (page.id === 16) return { ...page, exercises: meccaA2FinalReviewExercisesAr };
  if (page.id === 19) return { ...page, exercises: meccaA2FinalChallengeExercisesAr };
  return page;
});

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: meccaA2TeacherGuide,
  teacherGuideMetadata: meccaA2TeacherGuideMetadata,
  selfStudyGuide: meccaA2SelfStudyGuide,
  studentGuideMetadata: meccaA2StudentGuideMetadata,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'بلال بن رباح ومكة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: meccaA2TeacherGuideAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataAr,
  selfStudyGuide: meccaA2SelfStudyGuideAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataAr,
};

export const meccaA2BookData = meccaA2BookDataEn;