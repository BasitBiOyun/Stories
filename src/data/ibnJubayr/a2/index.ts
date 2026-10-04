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
import { ibnJubayrA2ChapterExtras } from './en/chapterExtras';
import { ibnJubayrA2GroupTasksEn } from './en/groupTasks';
import { applyChapterExtras } from '../../../lib/chapterExtras';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { ibnJubayrA2StoryMapLayout } from './storyMap';
import { ibnJubayrA2StoryMapCopyEn } from './en/storyMap';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

// Interactive map page, placed after the last chapter: the story is read without a break, then the whole journey is seen on the map.
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 13;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Ibn Jubayr’s Journey',
  subtitle: 'Map · Chapters 1–13',
  content: '',
  map: buildStoryMap(ibnJubayrA2StoryMapLayout, ibnJubayrA2StoryMapCopyEn, 'Ibn Jubayr A2 EN'),
};

const buildEnglishPages = (): PageData[] => applyChapterExtras(withMapPage(ibnJubayrA2Pages.map(sourcePage => {
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
}), mapPageEn), { ...ibnJubayrA2ChapterExtras, groupTasks: ibnJubayrA2GroupTasksEn });

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
