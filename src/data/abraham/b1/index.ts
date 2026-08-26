import type { BookData, PageData } from '../../../types';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1PagesAr } from './ar/pages';
import {
  abrahamB1FinalChallengeExercises,
  abrahamB1FinalReviewExercises,
  abrahamB1KnowledgeCheckExercises,
  abrahamB1QuickChallenges,
  abrahamB1VocabularyChallengePairs,
} from './en/exercises';
import {
  abrahamB1FinalChallengeExercisesAr,
  abrahamB1FinalReviewExercisesAr,
  abrahamB1KnowledgeCheckExercisesAr,
  abrahamB1QuickChallengesAr,
  abrahamB1VocabularyChallengePairsAr,
} from './ar/exercises';
import { abrahamB1LanguageFocusExercises } from './en/languageFocus';
import { abrahamB1LanguageFocusExercisesAr } from './ar/languageFocus';
import { abrahamB1LanguageFocusChapter3 } from './en/languageFocusChapter3';
import { abrahamB1LanguageFocusChapter3Ar } from './ar/languageFocusChapter3';
import { abrahamB1LanguageFocusChapter4 } from './en/languageFocusChapter4';
import { abrahamB1LanguageFocusChapter4Ar } from './ar/languageFocusChapter4';
import { abrahamB1LanguageFocusChapter5 } from './en/languageFocusChapter5';
import { abrahamB1LanguageFocusChapter5Ar } from './ar/languageFocusChapter5';
import { abrahamB1LanguageFocusChapter6 } from './en/languageFocusChapter6';
import { abrahamB1LanguageFocusChapter6Ar } from './ar/languageFocusChapter6';
import { abrahamB1LanguageFocusChapter7 } from './en/languageFocusChapter7';
import { abrahamB1LanguageFocusChapter7Ar } from './ar/languageFocusChapter7';
import { abrahamB1LanguageFocusChapter8 } from './en/languageFocusChapter8';
import { abrahamB1LanguageFocusChapter8Ar } from './ar/languageFocusChapter8';
import { abrahamB1LanguageFocusChapter9 } from './en/languageFocusChapter9';
import { abrahamB1LanguageFocusChapter9Ar } from './ar/languageFocusChapter9';
import { abrahamB1LanguageFocusChapter10 } from './en/languageFocusChapter10';
import { abrahamB1LanguageFocusChapter10Ar } from './ar/languageFocusChapter10';
import { abrahamB1LanguageFocusChapter11 } from './en/languageFocusChapter11';
import { abrahamB1LanguageFocusChapter11Ar } from './ar/languageFocusChapter11';
import { abrahamB1LanguageFocusChapter12 } from './en/languageFocusChapter12';
import { abrahamB1LanguageFocusChapter12Ar } from './ar/languageFocusChapter12';
import { abrahamB1TeacherGuideEn, abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1TeacherGuideAr, abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideEn } from './en/selfstudyGuide';
import { abrahamB1SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

// Some legacy B1 page fallbacks point at Abraham B2 artwork. Storage resolution
// should supply the reviewed B1 image; if it cannot, showing no image is safer
// than silently crossing CEFR levels. Non-story shells reuse reviewed B1 story
// artwork instead of picsum placeholders, which the shared media loader rejects.
const prepareMediaFallbacks = (pages: PageData[]): PageData[] => {
  const levelSafe = pages.map(page => {
    if (!STORY_IDS.has(page.id)) return page;
    const image = page.image ?? '';
    return image.toLowerCase().includes('abraham_b2') ? { ...page, image: '' } : page;
  });

  const byId = new Map(levelSafe.map(page => [page.id, page]));
  const shellImageSource: Record<number, number> = {
    14: 1,
    15: 8,
    16: 12,
    17: 13,
    18: 13,
  };

  return levelSafe.map(page => {
    const sourceId = shellImageSource[page.id];
    if (!sourceId) return page;
    return { ...page, image: byId.get(sourceId)?.image ?? '' };
  });
};

const englishSourcePages = prepareMediaFallbacks(abrahamB1Pages);
const arabicSourcePages = prepareMediaFallbacks(abrahamB1PagesAr);

const buildEnglishPages = (): PageData[] => englishSourcePages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamB1LanguageFocusChapter12[page.id] ?? abrahamB1LanguageFocusChapter11[page.id] ?? abrahamB1LanguageFocusChapter10[page.id] ?? abrahamB1LanguageFocusChapter9[page.id] ?? abrahamB1LanguageFocusChapter8[page.id] ?? abrahamB1LanguageFocusChapter7[page.id] ?? abrahamB1LanguageFocusChapter6[page.id] ?? abrahamB1LanguageFocusChapter5[page.id] ?? abrahamB1LanguageFocusChapter4[page.id] ?? abrahamB1LanguageFocusChapter3[page.id] ?? abrahamB1LanguageFocusExercises[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallenges[page.id] ? [abrahamB1QuickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercises };
  if (page.id === 15) return { ...page, exercises: abrahamB1FinalReviewExercises };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairs };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => arabicSourcePages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamB1LanguageFocusChapter12Ar[page.id] ?? abrahamB1LanguageFocusChapter11Ar[page.id] ?? abrahamB1LanguageFocusChapter10Ar[page.id] ?? abrahamB1LanguageFocusChapter9Ar[page.id] ?? abrahamB1LanguageFocusChapter8Ar[page.id] ?? abrahamB1LanguageFocusChapter7Ar[page.id] ?? abrahamB1LanguageFocusChapter6Ar[page.id] ?? abrahamB1LanguageFocusChapter5Ar[page.id] ?? abrahamB1LanguageFocusChapter4Ar[page.id] ?? abrahamB1LanguageFocusChapter3Ar[page.id] ?? abrahamB1LanguageFocusExercisesAr[page.id];
    return {
      ...page,
      exercises: abrahamB1QuickChallengesAr[page.id] ? [abrahamB1QuickChallengesAr[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 14) return { ...page, exercises: abrahamB1KnowledgeCheckExercisesAr };
  if (page.id === 15) return { ...page, exercises: abrahamB1FinalReviewExercisesAr };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamB1VocabularyChallengePairsAr };
  if (page.id === 18) return { ...page, exercises: abrahamB1FinalChallengeExercisesAr };
  return page;
});

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: buildEnglishPages(),
  teacherGuide: abrahamB1TeacherGuideEn,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadata,
  selfStudyGuide: abrahamB1SelfStudyGuideEn,
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: abrahamB1TeacherGuideAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB1SelfStudyGuideAr,
};

export const abrahamB1BookData = abrahamB1BookDataEn;
