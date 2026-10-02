import type { BookData, PageData } from '../../../types';
import { applyHistoricalEntitiesToPage } from '../../../features/historical-entities';
import { ibnJubayrA2Pages } from './en/pages';
import {
  ibnJubayrA2QuickChallenges,
  ibnJubayrA2KnowledgeCheckExercises,
  ibnJubayrA2VocabularyChallengePairs,
  ibnJubayrA2LanguageReviewExercises,
  ibnJubayrA2FinalChallengeExercises,
} from './en/exercises';
import { ibnJubayrA2LanguageFocusExercises } from './en/languageFocus';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => ibnJubayrA2Pages.map(sourcePage => {
  const page = applyHistoricalEntitiesToPage(sourcePage, 'ibnjubayr-a2', 'en');
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: [ibnJubayrA2QuickChallenges[page.id]],
      languageFocusExercises: ibnJubayrA2LanguageFocusExercises[page.id] ?? [],
    };
  }
  if (page.id === 14) return { ...page, exercises: ibnJubayrA2KnowledgeCheckExercises };
  if (page.id === 15) return { ...page, vocabularyPairs: ibnJubayrA2VocabularyChallengePairs };
  if (page.id === 16) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all thirteen chapters.',
    exercises: ibnJubayrA2LanguageReviewExercises,
  };
  if (page.id === 19) return { ...page, exercises: ibnJubayrA2FinalChallengeExercises };
  return page;
});

export const ibnJubayrA2BookDataEn: BookData = {
  id: 'ibnJubayr-history-a2-en',
  title: 'Ibn Jubayr: A Great Andalusian Traveler of the Middle Ages (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: [],
  selfStudyGuide: [],
};

// This book is English only. The loader expects a second language edition, so the
// Arabic slot mirrors the English book; the reader never offers Arabic for it.
export const ibnJubayrA2BookDataAr: BookData = {
  ...ibnJubayrA2BookDataEn,
  id: 'ibnJubayr-history-a2-ar',
};

export const ibnJubayrA2BookData = ibnJubayrA2BookDataEn;
