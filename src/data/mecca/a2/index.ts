import type { BookData, PageData } from '../../../types';
import { meccaA2Pages as meccaA2PagesEn } from './en/pages';
import { meccaA2PagesAr } from './ar/pages';
import {
  meccaA2FinalChallengeExercisesPolished,
  meccaA2KnowledgeCheckExercisesPolished,
  meccaA2QuickChallengesPolished,
  meccaA2VocabularyChallengePairsPolished,
  meccaA2LanguageReviewExercises,
} from './en/exercises';
import { meccaA2LanguageFocusExercises } from './en/languageFocus';
import {
  meccaA2LanguageFocusExercisesPart2,
  meccaA2LanguageFocusExercisesPart3,
  meccaA2LanguageFocusExercisesPart4,
  meccaA2LanguageFocusExercisesPart5,
  meccaA2LanguageFocusExercisesPart6,
} from './en/languageFocus2';
import {
  meccaA2LanguageFocusExercisesPart7,
  meccaA2LanguageFocusExercisesPart8,
  meccaA2LanguageFocusExercisesPart9,
  meccaA2LanguageFocusExercisesPart10,
  meccaA2LanguageFocusExercisesPart11,
  meccaA2LanguageFocusExercisesPart12,
} from './en/languageFocus3';
import {
  meccaA2FinalChallengeExercisesArPolished,
  meccaA2KnowledgeCheckExercisesArPolished,
  meccaA2QuickChallengesArPolished,
  meccaA2VocabularyChallengePairsArPolished,
  meccaA2LanguageReviewExercisesAr,
} from './ar/exercises';
import { meccaA2LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  meccaA2LanguageFocusExercisesArPart2,
  meccaA2LanguageFocusExercisesArPart3,
  meccaA2LanguageFocusExercisesArPart4,
  meccaA2LanguageFocusExercisesArPart5,
  meccaA2LanguageFocusExercisesArPart6,
} from './ar/languageFocus2';
import {
  meccaA2LanguageFocusExercisesArPart7,
  meccaA2LanguageFocusExercisesArPart8,
  meccaA2LanguageFocusExercisesArPart9,
  meccaA2LanguageFocusExercisesArPart10,
  meccaA2LanguageFocusExercisesArPart11,
  meccaA2LanguageFocusExercisesArPart12,
} from './ar/languageFocus3';
import { meccaA2TeacherGuide, meccaA2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaA2TeacherGuideAr, meccaA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaA2SelfStudyGuide, meccaA2StudentGuideMetadata } from './en/selfStudyGuide';
import { meccaA2SelfStudyGuideAr, meccaA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const ENGLISH_GLOSSARY_EXCLUSIONS = new Set(['adhan', 'hijrah']);
const normalizeTerm = (word: string) => word.trim().toLocaleLowerCase();

const buildEnglishPages = (): PageData[] => meccaA2PagesEn.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocus = meccaA2LanguageFocusExercisesPart12[page.id] ?? meccaA2LanguageFocusExercisesPart11[page.id] ?? meccaA2LanguageFocusExercisesPart10[page.id] ?? meccaA2LanguageFocusExercisesPart9[page.id] ?? meccaA2LanguageFocusExercisesPart8[page.id] ?? meccaA2LanguageFocusExercisesPart7[page.id] ?? meccaA2LanguageFocusExercisesPart6[page.id] ?? meccaA2LanguageFocusExercisesPart5[page.id] ?? meccaA2LanguageFocusExercisesPart4[page.id] ?? meccaA2LanguageFocusExercisesPart3[page.id] ?? meccaA2LanguageFocusExercisesPart2[page.id] ?? meccaA2LanguageFocusExercises[page.id] ?? [];
    return {
      ...page,
      exercises: [meccaA2QuickChallengesPolished[page.id], ...languageFocus],
    };
  }
  if (page.id === 14) return { ...page, exercises: meccaA2KnowledgeCheckExercisesPolished };
  if (page.id === 15) return { ...page, vocabularyPairs: meccaA2VocabularyChallengePairsPolished };
  if (page.id === 16) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all thirteen chapters.',
    exercises: meccaA2LanguageReviewExercises,
  };
  if (page.type === 'glossary' && page.vocabulary?.length) return {
    ...page,
    vocabulary: page.vocabulary.filter(item => !ENGLISH_GLOSSARY_EXCLUSIONS.has(normalizeTerm(item.word))),
  };
  if (page.id === 19) return { ...page, exercises: meccaA2FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => meccaA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocus = meccaA2LanguageFocusExercisesArPart12[page.id] ?? meccaA2LanguageFocusExercisesArPart11[page.id] ?? meccaA2LanguageFocusExercisesArPart10[page.id] ?? meccaA2LanguageFocusExercisesArPart9[page.id] ?? meccaA2LanguageFocusExercisesArPart8[page.id] ?? meccaA2LanguageFocusExercisesArPart7[page.id] ?? meccaA2LanguageFocusExercisesArPart6[page.id] ?? meccaA2LanguageFocusExercisesArPart5[page.id] ?? meccaA2LanguageFocusExercisesArPart4[page.id] ?? meccaA2LanguageFocusExercisesArPart3[page.id] ?? meccaA2LanguageFocusExercisesArPart2[page.id] ?? meccaA2LanguageFocusExercisesAr[page.id] ?? [];
    return {
      ...page,
      exercises: [meccaA2QuickChallengesArPolished[page.id], ...languageFocus],
    };
  }
  if (page.id === 14) return { ...page, exercises: meccaA2KnowledgeCheckExercisesArPolished };
  if (page.id === 15) return { ...page, vocabularyPairs: meccaA2VocabularyChallengePairsArPolished };
  if (page.id === 16) return {
    ...page,
    title: 'مراجعة اللغة',
    content: 'راجع واستعمل تراكيب القواعد والوظائف اللغوية التي تعلمتها في الفصول الثلاثة عشر.',
    exercises: meccaA2LanguageReviewExercisesAr,
  };
  if (page.id === 19) return { ...page, exercises: meccaA2FinalChallengeExercisesArPolished };
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