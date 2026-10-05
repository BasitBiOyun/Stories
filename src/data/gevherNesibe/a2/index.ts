import type { BookData, PageData } from '../../../types';
import { gevherNesibeA2Pages } from './en/pages';
import {
  gevherNesibeA2QuickChallenges,
  gevherNesibeA2KnowledgeCheckExercises,
  gevherNesibeA2VocabularyChallengePairs,
  gevherNesibeA2LanguageReviewExercises,
  gevherNesibeA2FinalChallengeExercises,
} from './en/exercises';
import { gevherNesibeA2LanguageFocusExercises } from './en/languageFocus';
import { gevherNesibeA2ChapterExtras } from './en/chapterExtras';
import { gevherNesibeA2GroupTasksEn } from './en/groupTasks';
import { applyChapterExtras } from '../../../lib/chapterExtras';

const STORY_IDS = new Set(Array.from({ length: 11 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => applyChapterExtras(gevherNesibeA2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: [gevherNesibeA2QuickChallenges[page.id]],
      languageFocusExercises: gevherNesibeA2LanguageFocusExercises[page.id] ?? [],
    };
  }
  if (page.id === 12) return { ...page, exercises: gevherNesibeA2KnowledgeCheckExercises };
  if (page.id === 13) return { ...page, vocabularyPairs: gevherNesibeA2VocabularyChallengePairs };
  if (page.id === 14) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all eleven chapters.',
    exercises: gevherNesibeA2LanguageReviewExercises,
  };
  if (page.id === 16) return { ...page, exercises: gevherNesibeA2FinalChallengeExercises };
  return page;
}), { ...gevherNesibeA2ChapterExtras, groupTasks: gevherNesibeA2GroupTasksEn });

export const gevherNesibeA2BookDataEn: BookData = {
  id: 'gevherNesibe-turkish-a2-en',
  title: 'The Gevher Nesibe Hospital (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: [],
  selfStudyGuide: [],
};

// Hidden, English-only for now: the Arabic edition comes later. The loader expects
// a second language edition, so the Arabic slot mirrors the English book.
export const gevherNesibeA2BookDataAr: BookData = {
  ...gevherNesibeA2BookDataEn,
  id: 'gevherNesibe-turkish-a2-ar',
};

export const gevherNesibeA2BookData = gevherNesibeA2BookDataEn;
