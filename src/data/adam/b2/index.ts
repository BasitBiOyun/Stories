import type { BookData, Exercise, PageData } from '../../../types';
import { adamB2Pages } from './en/pages';
import { adamB2PagesAr } from './ar/pages';
import {
  adamB2QuickChallenges,
  adamB2KnowledgeCheckExercises,
  adamB2VocabularyChallengePairs,
  adamB2FinalReviewExercises,
  adamB2FinalChallengeExercises,
} from './en/exercises';
import {
  adamB2QuickChallengesAr,
  adamB2KnowledgeCheckExercisesAr,
  adamB2VocabularyChallengePairsAr,
  adamB2FinalReviewExercisesAr,
  adamB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { adamB2TeacherGuide, adamB2TeacherGuideMetadata } from './en/teacherGuide';
import { adamB2SelfStudyGuide, adamB2StudentGuideMetadata } from './en/selfStudyGuide';
import { adamB2TeacherGuideAr, adamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB2SelfStudyGuideAr, adamB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));

const decodedLower = (value = '') => {
  try {
    return decodeURIComponent(value).toLowerCase();
  } catch {
    return value.toLowerCase();
  }
};

/**
 * Second-pass page-shell fixes only. Canonical story `content` is never changed.
 * Storage remains the preferred media source; known B1 image fallbacks are blanked
 * so a failed B2 Storage lookup cannot silently display the wrong CEFR asset.
 */
const reviewStoryPageShell = (page: PageData): PageData => {
  if (page.type !== 'story') return page;

  const reviewed: PageData = decodedLower(page.image).includes('/adam_b1/images/')
    ? { ...page, image: '' }
    : page;

  if (page.id !== 13) return reviewed;

  const isArabic = /[\u0600-\u06ff]/.test(page.title);
  return {
    ...reviewed,
    title: isArabic ? 'رد هابيل والقدرة الأخلاقية' : 'Habil’s Response & Human Moral Capacity',
    hotspots: reviewed.hotspots?.filter(hotspot => hotspot.id !== 'h13b'),
    ...(isArabic ? {} : {
      vocabulary: reviewed.vocabulary?.filter(note => ['rebellious', 'compassion'].includes(note.word.toLowerCase())),
    }),
  };
};

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map((rawPage) => {
  const page = reviewStoryPageShell(rawPage);
  if (STORY_IDS.has(page.id)) return { ...page, exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [] };
  if (page.id === 18) return { ...page, exercises: knowledgeCheck };
  if (page.id === 19) return { ...page, exercises: review };
  if (page.id === 20) return { ...page, vocabularyPairs };
  if (page.id === 22) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(
  adamB2Pages,
  adamB2QuickChallenges,
  adamB2KnowledgeCheckExercises,
  adamB2VocabularyChallengePairs,
  adamB2FinalReviewExercises,
  adamB2FinalChallengeExercises,
);

const arabicPages = buildPages(
  adamB2PagesAr,
  adamB2QuickChallengesAr,
  adamB2KnowledgeCheckExercisesAr,
  adamB2VocabularyChallengePairsAr,
  adamB2FinalReviewExercisesAr,
  adamB2FinalChallengeExercisesAr,
);

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: englishPages,
  teacherGuide: adamB2TeacherGuide,
  teacherGuideMetadata: adamB2TeacherGuideMetadata,
  selfStudyGuide: adamB2SelfStudyGuide,
  studentGuideMetadata: adamB2StudentGuideMetadata,
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: adamB2TeacherGuideAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataAr,
  selfStudyGuide: adamB2SelfStudyGuideAr,
  studentGuideMetadata: adamB2StudentGuideMetadataAr,
};

export const adamB2BookData = adamB2BookDataEn;
