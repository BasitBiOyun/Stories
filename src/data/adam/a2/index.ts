import type { BookData, PageData } from '../../../types';
import { adamA2Pages } from './en/pages';
import { adamA2PagesAr } from './ar/pages';
import {
  adamA2FinalChallengeExercises,
  adamA2KnowledgeCheckExercises,
  adamA2QuickChallenges,
  adamA2VocabularyChallengePairs,
} from './en/exercises';
import {
  adamA2FinalChallengeExercisesAr,
  adamA2KnowledgeCheckExercisesAr,
  adamA2QuickChallengesAr,
  adamA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { adamA2LanguageFocusExercises } from './en/languageFocus';
import { adamA2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import { adamA2LanguageFocusExercisesPart3, adamA2LanguageReviewExercises } from './en/languageFocus3';
import { adamA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { adamA2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import { adamA2LanguageFocusExercisesArPart3, adamA2LanguageReviewExercisesAr } from './ar/languageFocus3';

const STORY_IDS = new Set(Array.from({ length: 10 }, (_, index) => index + 1));

const getEnglishLanguageFocus = (pageId: number) =>
  adamA2LanguageFocusExercises[pageId]
  ?? adamA2LanguageFocusExercisesPart2[pageId]
  ?? adamA2LanguageFocusExercisesPart3[pageId];

const getArabicLanguageFocus = (pageId: number) =>
  adamA2LanguageFocusExercisesAr[pageId]
  ?? adamA2LanguageFocusExercisesArPart2[pageId]
  ?? adamA2LanguageFocusExercisesArPart3[pageId];

const buildEnglishPages = (): PageData[] => adamA2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = getEnglishLanguageFocus(page.id);
    return {
      ...page,
      exercises: [adamA2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercises };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairs };
  if (page.id === 13) return { ...page, exercises: adamA2LanguageReviewExercises };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => adamA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = getArabicLanguageFocus(page.id);
    return {
      ...page,
      exercises: [adamA2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercisesAr };
  if (page.id === 12) return { ...page, vocabularyPairs: adamA2VocabularyChallengePairsAr };
  if (page.id === 13) return { ...page, exercises: adamA2LanguageReviewExercisesAr };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercisesAr };
  return page;
});

export const adamA2BookDataEn: BookData = {
  id: 'adam-a2-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamA2BookDataAr: BookData = {
  id: 'adam-a2-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const adamA2BookData = adamA2BookDataEn;
