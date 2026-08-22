import type { BookData, PageData } from '../../../types';
import { abrahamA2PagesEn } from './en/pages';
import { abrahamA2PagesAr } from './ar/pages';
import {
  abrahamA2FinalChallengeExercises,
  abrahamA2FinalReviewExercises,
  abrahamA2KnowledgeCheckExercises,
  abrahamA2QuickChallenges,
  abrahamA2VocabularyChallengePairs,
} from './en/exercises';
import {
  abrahamA2FinalChallengeExercisesAr,
  abrahamA2FinalReviewExercisesAr,
  abrahamA2KnowledgeCheckExercisesAr,
  abrahamA2QuickChallengesAr,
  abrahamA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { abrahamA2LanguageFocusExercises } from './en/languageFocus';
import { abrahamA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { abrahamA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { abrahamA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { abrahamA2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { abrahamA2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { abrahamA2TeacherGuideEn, abrahamA2TeacherGuideMetadataEn } from './en/teacherGuide';
import { abrahamA2TeacherGuideAr, abrahamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamA2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamA2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 14 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => abrahamA2PagesEn.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamA2LanguageFocusExercises[page.id]
      ?? abrahamA2LanguageFocusExercisesPart2[page.id]
      ?? abrahamA2LanguageFocusExercisesPart3[page.id];
    return {
      ...page,
      exercises: [abrahamA2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...page, exercises: abrahamA2KnowledgeCheckExercises };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamA2VocabularyChallengePairs };
  if (page.id === 17) return { ...page, exercises: abrahamA2FinalReviewExercises };
  if (page.id === 20) return { ...page, exercises: abrahamA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => abrahamA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamA2LanguageFocusExercisesAr[page.id]
      ?? abrahamA2LanguageFocusExercisesArPart2[page.id]
      ?? abrahamA2LanguageFocusExercisesArPart3[page.id];
    return {
      ...page,
      exercises: [abrahamA2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...page, exercises: abrahamA2KnowledgeCheckExercisesAr };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamA2VocabularyChallengePairsAr };
  if (page.id === 17) return { ...page, exercises: abrahamA2FinalReviewExercisesAr };
  if (page.id === 20) return { ...page, exercises: abrahamA2FinalChallengeExercisesAr };
  return page;
});

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: abrahamA2TeacherGuideEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataEn,
  selfStudyGuide: abrahamA2SelfStudyGuideEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: abrahamA2TeacherGuideAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamA2SelfStudyGuideAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
