import type { BookData, PageData } from '../../../types';
import { withPlacesLayer } from '../../../features/historical-entities';
import { yunusA2Pages } from './en/pages';
import { yunusEmreA2PagesAr } from './ar/pages';
import {
  yunusA2QuickChallenges,
  yunusA2KnowledgeCheckExercises,
  yunusA2VocabularyChallengePairs,
  yunusA2LanguageReviewExercises,
  yunusA2ManualFinalChallengeExercises,
} from './en/exercises';
import {
  yunusA2QuickChallengesAr,
  yunusA2KnowledgeCheckExercisesAr,
  yunusA2VocabularyChallengePairsAr,
  yunusA2LanguageReviewExercisesAr,
  yunusA2ManualFinalChallengeExercisesAr,
} from './ar/exercises';
import { yunusA2LanguageFocusExercises } from './en/languageFocus';
import { yunusA2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import { yunusA2LanguageFocusExercisesPart3 } from './en/languageFocus3';
import { yunusA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { yunusA2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import { yunusA2LanguageFocusExercisesArPart3 } from './ar/languageFocus3';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { yunusA2StoryMapLayout } from './storyMap';
import { yunusA2StoryMapCopyEn } from './en/storyMap';
import { yunusA2StoryMapCopyAr } from './ar/storyMap';

const STORY_IDS = new Set(Array.from({ length: 8 }, (_, index) => index + 1));

// Interactive map page, placed right after chapter 1 (where the dates and places of Yunus Emre's life appear).
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 1;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Yunus Emre’s World',
  subtitle: 'Map · 1240–1320',
  content: '',
  map: buildStoryMap(yunusA2StoryMapLayout, yunusA2StoryMapCopyEn, 'Yunus Emre A2 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'عالَمُ يونُس إِمْرَه',
  subtitle: 'خَريطَة · مِنْ عامِ 1240 إِلى عامِ 1320',
  content: '',
  map: buildStoryMap(yunusA2StoryMapLayout, yunusA2StoryMapCopyAr, 'Yunus Emre A2 AR'),
};

const buildEnglishPages = (): PageData[] => withMapPage(yunusA2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = yunusA2LanguageFocusExercises[page.id]
      ?? yunusA2LanguageFocusExercisesPart2[page.id]
      ?? yunusA2LanguageFocusExercisesPart3[page.id];
    return {
      ...page,
      exercises: [yunusA2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 9) return { ...page, exercises: yunusA2KnowledgeCheckExercises };
  if (page.id === 10) return { ...page, vocabularyPairs: yunusA2VocabularyChallengePairs };
  if (page.id === 13) return {
    ...page,
    title: 'Language Review',
    content: 'Review and use the grammar patterns and language functions from all eight chapters.',
    exercises: yunusA2LanguageReviewExercises,
  };
  if (page.id === 14) return { ...page, exercises: yunusA2ManualFinalChallengeExercises };
  return page;
}), mapPageEn);

const buildArabicPages = (): PageData[] => withMapPage(yunusEmreA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = yunusA2LanguageFocusExercisesAr[page.id]
      ?? yunusA2LanguageFocusExercisesArPart2[page.id]
      ?? yunusA2LanguageFocusExercisesArPart3[page.id];
    return {
      ...page,
      exercises: [yunusA2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 9) return { ...page, exercises: yunusA2KnowledgeCheckExercisesAr };
  if (page.id === 10) return { ...page, vocabularyPairs: yunusA2VocabularyChallengePairsAr };
  if (page.id === 13) return {
    ...page,
    title: 'مراجعة اللغة',
    content: 'راجع واستعمل تراكيب القواعد والوظائف اللغوية التي تعلمتها في الفصول الثمانية.',
    exercises: yunusA2LanguageReviewExercisesAr,
  };
  if (page.id === 14) return { ...page, exercises: yunusA2ManualFinalChallengeExercisesAr };
  return page;
}), mapPageAr);

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: withPlacesLayer(buildEnglishPages(), 'yunusEmre-a2', 'en'),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: withPlacesLayer(buildArabicPages(), 'yunusEmre-a2', 'ar'),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
