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
    return {
      ...page,
      exercises: [
        abrahamB1QuickChallenges[page.id],
        ...(abrahamB1LanguageFocusChapter4[page.id] ?? abrahamB1LanguageFocusChapter3[page.id] ?? abrahamB1LanguageFocusExercises[page.id] ?? []),
      ].filter(Boolean),
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
    return {
      ...page,
      exercises: [
        abrahamB1QuickChallengesAr[page.id],
        ...(abrahamB1LanguageFocusChapter4Ar[page.id] ?? abrahamB1LanguageFocusChapter3Ar[page.id] ?? abrahamB1LanguageFocusExercisesAr[page.id] ?? []),
      ].filter(Boolean),
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
