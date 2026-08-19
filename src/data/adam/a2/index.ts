import type { BookData, PageData } from '../../../types';
import { adamA2Pages } from './en/pages';
import { adamA2PagesAr } from './ar/pages';
import {
  adamA2FinalChallengeExercises,
  adamA2FinalReviewExercises,
  adamA2KnowledgeCheckExercises,
  adamA2QuickChallenges,
  adamA2VocabularyChallengePairs,
} from './en/exercises';
import {
  adamA2FinalChallengeExercisesAr,
  adamA2FinalReviewExercisesAr,
  adamA2KnowledgeCheckExercisesAr,
  adamA2QuickChallengesAr,
  adamA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { adamA2TeacherGuide, adamA2TeacherGuideMetadata } from './en/teacherGuide';
import { adamA2TeacherGuideAr, adamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import {
  adamA2SelfStudyGuide,
  adamA2StudentGuideMetadata,
  adamA2StudentGuideSections,
  adamA2StudentGuideText,
} from './en/selfStudyGuide';
import {
  adamA2SelfStudyGuideAr,
  adamA2StudentGuideMetadataAr,
  adamA2StudentGuideSectionsAr,
  adamA2StudentGuideTextAr,
} from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 10 }, (_, index) => index + 1));

const preserveApprovedEnglishStoryFixes = (page: PageData): PageData => {
  if (!STORY_IDS.has(page.id)) return page;
  const replacements: Array<[string, string]> = page.id === 7
    ? [['They had also lots of children.', 'They also had lots of children.']]
    : page.id === 9
      ? [['his brother dead body', "his brother's dead body"]]
      : [];
  if (!replacements.length) return page;
  const replace = (value: string) => replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  return {
    ...page,
    content: replace(page.content),
    timedChunks: page.timedChunks?.map(chunk => ({ ...chunk, text: replace(chunk.text) })),
  };
};

const buildEnglishPages = (): PageData[] => adamA2Pages.map(rawPage => {
  const page = preserveApprovedEnglishStoryFixes(rawPage);
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [adamA2QuickChallenges[page.id]] };
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercises };
  if (page.id === 12) return { ...page, exercises: undefined, vocabularyPairs: adamA2VocabularyChallengePairs };
  if (page.id === 13) return { ...page, exercises: adamA2FinalReviewExercises };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => adamA2PagesAr.map(page => {
  if (STORY_IDS.has(page.id)) return { ...page, exercises: [adamA2QuickChallengesAr[page.id]] };
  if (page.id === 11) return { ...page, exercises: adamA2KnowledgeCheckExercisesAr };
  if (page.id === 12) return { ...page, exercises: undefined, vocabularyPairs: adamA2VocabularyChallengePairsAr };
  if (page.id === 13) return { ...page, exercises: adamA2FinalReviewExercisesAr };
  if (page.id === 16) return { ...page, exercises: adamA2FinalChallengeExercisesAr };
  return page;
});

export const adamA2BookDataEn: BookData = {
  id: 'a2-prophets-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: adamA2TeacherGuide,
  teacherGuideMetadata: adamA2TeacherGuideMetadata,
  selfStudyGuide: adamA2SelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSections,
  studentGuideMetadata: adamA2StudentGuideMetadata,
  studentGuideText: adamA2StudentGuideText,
};

export const adamA2BookDataAr: BookData = {
  id: 'a2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: adamA2TeacherGuideAr,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

export const adamA2BookData = adamA2BookDataEn;
