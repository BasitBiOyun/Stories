import type { BookData, PageData } from '../../../types';
import { withPlacesLayer } from '../../../features/historical-entities';
import { mosesB1Pages } from './en/pages';
import { mosesB1PagesAr } from './ar/pages';
import {
  mosesB1PolishedFinalChallengeExercises,
  mosesB1PolishedKnowledgeCheckExercises,
  mosesB1PolishedQuickChallenges,
  mosesB1PolishedVocabularyChallengePairs,
  mosesB1LanguageReviewExercises,
} from './en/exercises';
import {
  mosesB1PolishedFinalChallengeExercisesAr,
  mosesB1PolishedKnowledgeCheckExercisesAr,
  mosesB1PolishedQuickChallengesAr,
  mosesB1PolishedVocabularyChallengePairsAr,
  mosesB1LanguageReviewExercisesAr,
} from './ar/exercises';
import { mosesB1LanguageFocusExercises } from './en/languageFocus';
import { mosesB1LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  mosesB1LanguageFocusChapter3,
  mosesB1LanguageFocusChapter4,
  mosesB1LanguageFocusChapter5,
  mosesB1LanguageFocusChapter6,
  mosesB1LanguageFocusChapter7,
  mosesB1LanguageFocusChapter8,
} from './en/languageFocus2';
import {
  mosesB1LanguageFocusChapter9,
  mosesB1LanguageFocusChapter10,
  mosesB1LanguageFocusChapter11,
  mosesB1LanguageFocusChapter12,
  mosesB1LanguageFocusChapter13,
} from './en/languageFocus3';
import {
  mosesB1LanguageFocusChapter3Ar,
  mosesB1LanguageFocusChapter4Ar,
  mosesB1LanguageFocusChapter5Ar,
  mosesB1LanguageFocusChapter6Ar,
  mosesB1LanguageFocusChapter7Ar,
  mosesB1LanguageFocusChapter8Ar,
} from './ar/languageFocus2';
import {
  mosesB1LanguageFocusChapter9Ar,
  mosesB1LanguageFocusChapter10Ar,
  mosesB1LanguageFocusChapter11Ar,
  mosesB1LanguageFocusChapter12Ar,
  mosesB1LanguageFocusChapter13Ar,
} from './ar/languageFocus3';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { mosesB1StoryMapLayout } from './storyMap';
import { mosesB1StoryMapCopyEn } from './en/storyMap';
import { mosesB1StoryMapCopyAr } from './ar/storyMap';

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
  ...mosesB1LanguageFocusChapter12,
  ...mosesB1LanguageFocusChapter13,
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
  ...mosesB1LanguageFocusChapter12Ar,
  ...mosesB1LanguageFocusChapter13Ar,
};

// Interactive map page, placed right after chapter 4 (the first clean scene break; Egypt, the Nile and the palace are known by then).
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 4;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Moses’ Journey',
  subtitle: 'Map · Chapters 1–13',
  content: '',
  map: buildStoryMap(mosesB1StoryMapLayout, mosesB1StoryMapCopyEn, 'Moses B1 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'رِحْلَةُ مُوسَى عَلَيْهِ السَّلَامُ',
  subtitle: 'خَريطَة · مِنَ الفَصْلِ 1 إِلى الفَصْلِ 13',
  content: '',
  map: buildStoryMap(mosesB1StoryMapLayout, mosesB1StoryMapCopyAr, 'Moses B1 AR'),
};

const buildEnglishPages = (): PageData[] => withMapPage(mosesB1Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: mosesB1PolishedQuickChallenges[page.id] ? [mosesB1PolishedQuickChallenges[page.id]] : [],
      ...(englishLanguageFocus[page.id] ? { languageFocusExercises: englishLanguageFocus[page.id] } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: mosesB1PolishedKnowledgeCheckExercises };
  if (page.id === 15) return { ...page, vocabularyPairs: mosesB1PolishedVocabularyChallengePairs };
  if (page.id === 18) return { ...page, title: 'Language Review', content: 'Review and use the grammar patterns, discourse relationships, and communicative functions developed across all thirteen chapters.', exercises: mosesB1LanguageReviewExercises };
  if (page.id === 19) return { ...page, exercises: mosesB1PolishedFinalChallengeExercises };
  return page;
}), mapPageEn);

const buildArabicPages = (): PageData[] => withMapPage(mosesB1PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) {
    return {
      ...page,
      exercises: mosesB1PolishedQuickChallengesAr[page.id] ? [mosesB1PolishedQuickChallengesAr[page.id]] : [],
      ...(arabicLanguageFocus[page.id] ? { languageFocusExercises: arabicLanguageFocus[page.id] } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: mosesB1PolishedKnowledgeCheckExercisesAr };
  if (page.id === 15) return { ...page, vocabularyPairs: mosesB1PolishedVocabularyChallengePairsAr };
  if (page.id === 18) return { ...page, title: 'مراجعة اللغة B1', content: 'راجع واستخدم التراكيب والعلاقات الخطابية والوظائف التواصلية التي تطورت عبر الفصول الثلاثة عشر.', exercises: mosesB1LanguageReviewExercisesAr };
  if (page.id === 19) return { ...page, exercises: mosesB1PolishedFinalChallengeExercisesAr };
  return page;
}), mapPageAr);

export const mosesB1BookDataEn: BookData = {
  id: 'b1-moses-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: withPlacesLayer(buildEnglishPages(), 'moses-b1', 'en'),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const mosesB1BookDataAr: BookData = {
  id: 'b1-moses-ar',
  title: 'قصص الأنبياء: موسى عليه السلام (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: withPlacesLayer(buildArabicPages(), 'moses-b1', 'ar'),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const mosesB1BookData = mosesB1BookDataEn;
