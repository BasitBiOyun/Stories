import type { BookData, Exercise, PageData } from '../../../types';
import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';
import {
  yunusB2QuickChallenges,
  yunusB2VocabularyChallengePairs,
  yunusB2FinalReviewExercises,
  yunusB2FinalChallengeExercises,
} from './en/exercises';
import {
  yunusB2QuickChallengesAr,
  yunusB2VocabularyChallengePairsAr,
  yunusB2FinalReviewExercisesAr,
  yunusB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { yunusB2ManualKnowledgeCheckExercises } from './en/knowledgeCheck';
import { yunusB2ManualKnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { yunusB2TeacherGuide, yunusB2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB2SelfStudyGuide, yunusB2StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB2TeacherGuideAr, yunusEmreB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB2SelfStudyGuideAr, yunusEmreB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));

const buildPages = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  review: Exercise[],
  finalChallenge: Exercise[],
): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [] };
  if (page.id === 15) return { ...page, exercises: knowledgeCheck };
  if (page.id === 16) return { ...page, vocabularyPairs };
  if (page.id === 19) return { ...page, exercises: review };
  if (page.id === 20) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(
  yunusB2Pages,
  yunusB2QuickChallenges,
  yunusB2ManualKnowledgeCheckExercises,
  yunusB2VocabularyChallengePairs,
  yunusB2FinalReviewExercises,
  yunusB2FinalChallengeExercises,
);

const arabicPages = buildPages(
  yunusEmreB2PagesAr,
  yunusB2QuickChallengesAr,
  yunusB2ManualKnowledgeCheckExercisesAr,
  yunusB2VocabularyChallengePairsAr,
  yunusB2FinalReviewExercisesAr,
  yunusB2FinalChallengeExercisesAr,
);

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: englishPages,
  teacherGuide: yunusB2TeacherGuide,
  teacherGuideMetadata: yunusB2TeacherGuideMetadata,
  selfStudyGuide: yunusB2SelfStudyGuide,
  studentGuideMetadata: yunusB2StudentGuideMetadata,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: arabicPages,
  teacherGuide: yunusEmreB2TeacherGuideAr,
  teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreB2SelfStudyGuideAr,
  studentGuideMetadata: yunusEmreB2StudentGuideMetadataAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
