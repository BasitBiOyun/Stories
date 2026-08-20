import type { BookData, PageData } from '../../../types';
import { yunusA2Pages } from './en/pages';
import { yunusEmreA2PagesAr } from './ar/pages';
import {
  yunusA2QuickChallenges,
  yunusA2KnowledgeCheckExercises,
  yunusA2VocabularyChallengePairs,
  yunusA2FinalReviewExercises,
  yunusA2FinalChallengeExercises,
} from './en/exercises';
import {
  yunusA2QuickChallengesAr,
  yunusA2KnowledgeCheckExercisesAr,
  yunusA2VocabularyChallengePairsAr,
  yunusA2FinalReviewExercisesAr,
  yunusA2FinalChallengeExercisesAr,
} from './ar/exercises';
import { yunusA2TeacherGuide, yunusA2TeacherGuideMetadata } from './en/teacherGuide';
import { teacherGuide as yunusA2TeacherGuideAr, teacherGuideMetadata as yunusA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusA2SelfStudyGuide } from './en/selfStudyGuide';
import { yunusEmreA2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 8 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => yunusA2Pages.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [yunusA2QuickChallenges[page.id]] };
  if (page.id === 9) return { ...page, exercises: yunusA2KnowledgeCheckExercises };
  if (page.id === 10) return { ...page, vocabularyPairs: yunusA2VocabularyChallengePairs };
  if (page.id === 13) return { ...page, exercises: yunusA2FinalReviewExercises };
  if (page.id === 14) return { ...page, exercises: yunusA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => yunusEmreA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [yunusA2QuickChallengesAr[page.id]] };
  if (page.id === 9) return { ...page, exercises: yunusA2KnowledgeCheckExercisesAr };
  if (page.id === 10) return { ...page, vocabularyPairs: yunusA2VocabularyChallengePairsAr };
  if (page.id === 13) return { ...page, exercises: yunusA2FinalReviewExercisesAr };
  if (page.id === 14) return { ...page, exercises: yunusA2FinalChallengeExercisesAr };
  return page;
});

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: yunusA2TeacherGuide,
  teacherGuideMetadata: yunusA2TeacherGuideMetadata,
  selfStudyGuide: yunusA2SelfStudyGuide,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: yunusA2TeacherGuideAr,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreA2SelfStudyGuideAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
