import type { BookData, Exercise, PageData, VocabularyChallengePair } from '../../../types';
import { meccaB1Pages } from './en/pages';
import {
  meccaB1FinalChallengeExercises,
  meccaB1KnowledgeCheckExercises,
  meccaB1LanguageReviewExercises,
  meccaB1QuickChallenges,
  meccaB1VocabularyChallengePairs,
} from './en/exercises';
import { meccaB1LanguageFocusExercises } from './en/languageFocus';
import {
  meccaB1LanguageFocusChapter3,
  meccaB1LanguageFocusChapter4,
  meccaB1LanguageFocusChapter5,
  meccaB1LanguageFocusChapter6,
  meccaB1LanguageFocusChapter7,
  meccaB1LanguageFocusChapter8,
} from './en/languageFocus2';
import {
  meccaB1LanguageFocusChapter9,
  meccaB1LanguageFocusChapter10,
  meccaB1LanguageFocusChapter11,
  meccaB1LanguageFocusChapter12,
  meccaB1LanguageFocusChapter13,
  meccaB1LanguageFocusChapter14,
  meccaB1LanguageFocusChapter15,
} from './en/languageFocus3';
import { pages as meccaB1PagesAr } from './ar/pages';
import {
  meccaB1FinalChallengeExercisesAr,
  meccaB1KnowledgeCheckExercisesAr,
  meccaB1LanguageReviewExercisesAr,
  meccaB1QuickChallengesAr,
  meccaB1VocabularyChallengePairsAr,
} from './ar/exercises';
import { meccaB1LanguageFocusExercisesAr } from './ar/languageFocus';
import {
  meccaB1LanguageFocusChapter3Ar,
  meccaB1LanguageFocusChapter4Ar,
  meccaB1LanguageFocusChapter5Ar,
  meccaB1LanguageFocusChapter6Ar,
  meccaB1LanguageFocusChapter7Ar,
  meccaB1LanguageFocusChapter8Ar,
} from './ar/languageFocus2';
import {
  meccaB1LanguageFocusChapter9Ar,
  meccaB1LanguageFocusChapter10Ar,
  meccaB1LanguageFocusChapter11Ar,
  meccaB1LanguageFocusChapter12Ar,
  meccaB1LanguageFocusChapter13Ar,
  meccaB1LanguageFocusChapter14Ar,
  meccaB1LanguageFocusChapter15Ar,
} from './ar/languageFocus3';
import { buildStoryMap } from '../../../features/story-maps/buildStoryMap';
import { meccaB1StoryMapLayout } from './storyMap';
import { meccaB1StoryMapCopyEn } from './en/storyMap';
import { meccaB1StoryMapCopyAr } from './ar/storyMap';

// Interactive map page, placed right after chapter 6 (every place of chapters 1–6 has been named by then).
const MAP_PAGE_ID = 101;
const MAP_AFTER_CHAPTER = 6;

const withMapPage = (pages: PageData[], mapPage: PageData): PageData[] =>
  pages.flatMap(page => (page.id === MAP_AFTER_CHAPTER ? [page, mapPage] : [page]));

const mapPageEn: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'Mecca and Its World',
  subtitle: 'Map · Chapters 1–6',
  content: '',
  map: buildStoryMap(meccaB1StoryMapLayout, meccaB1StoryMapCopyEn, 'Mecca B1 EN'),
};

const mapPageAr: PageData = {
  id: MAP_PAGE_ID,
  type: 'map',
  title: 'مَكَّةُ وعالَمُها',
  subtitle: 'خَريطَة · الفُصولُ مِنْ 1 إِلى 6',
  content: '',
  map: buildStoryMap(meccaB1StoryMapLayout, meccaB1StoryMapCopyAr, 'Mecca B1 AR'),
};

const englishLanguageFocus = {
  ...meccaB1LanguageFocusExercises,
  ...meccaB1LanguageFocusChapter3,
  ...meccaB1LanguageFocusChapter4,
  ...meccaB1LanguageFocusChapter5,
  ...meccaB1LanguageFocusChapter6,
  ...meccaB1LanguageFocusChapter7,
  ...meccaB1LanguageFocusChapter8,
  ...meccaB1LanguageFocusChapter9,
  ...meccaB1LanguageFocusChapter10,
  ...meccaB1LanguageFocusChapter11,
  ...meccaB1LanguageFocusChapter12,
  ...meccaB1LanguageFocusChapter13,
  ...meccaB1LanguageFocusChapter14,
  ...meccaB1LanguageFocusChapter15,
};

const arabicLanguageFocus = {
  ...meccaB1LanguageFocusExercisesAr,
  ...meccaB1LanguageFocusChapter3Ar,
  ...meccaB1LanguageFocusChapter4Ar,
  ...meccaB1LanguageFocusChapter5Ar,
  ...meccaB1LanguageFocusChapter6Ar,
  ...meccaB1LanguageFocusChapter7Ar,
  ...meccaB1LanguageFocusChapter8Ar,
  ...meccaB1LanguageFocusChapter9Ar,
  ...meccaB1LanguageFocusChapter10Ar,
  ...meccaB1LanguageFocusChapter11Ar,
  ...meccaB1LanguageFocusChapter12Ar,
  ...meccaB1LanguageFocusChapter13Ar,
  ...meccaB1LanguageFocusChapter14Ar,
  ...meccaB1LanguageFocusChapter15Ar,
};

const attachLearning = (
  sourcePages: PageData[],
  quickChallenges: Record<number, Exercise>,
  languageFocus: Record<number, Exercise[]>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: VocabularyChallengePair[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => sourcePages.map((page) => {
  if (page.type === 'story' && quickChallenges[page.id]) {
    const languageFocusExercises = languageFocus[page.id];
    return {
      ...page,
      exercises: [quickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 16) return { ...page, type: 'quiz', exercises: knowledgeCheck };
  if (page.id === 17) return { ...page, type: 'exercises', exercises: review };
  if (page.id === 18) return { ...page, type: 'vocabulary-match', vocabularyPairs };
  if (page.id === 20) return { ...page, type: 'final-challenge', exercises: finalChallenge };
  return page;
});

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Islamic History & Civilization: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: withMapPage(attachLearning(meccaB1Pages, meccaB1QuickChallenges, englishLanguageFocus, meccaB1KnowledgeCheckExercises, meccaB1VocabularyChallengePairs, meccaB1LanguageReviewExercises, meccaB1FinalChallengeExercises), mapPageEn),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: withMapPage(attachLearning(meccaB1PagesAr, meccaB1QuickChallengesAr, arabicLanguageFocus, meccaB1KnowledgeCheckExercisesAr, meccaB1VocabularyChallengePairsAr, meccaB1LanguageReviewExercisesAr, meccaB1FinalChallengeExercisesAr), mapPageAr),
  teacherGuide: [],
  selfStudyGuide: [],
};

export const meccaB1BookData = meccaB1BookDataEn;
