import type { BookData, PageData } from '../../../types';
import { applyHistoricalEntitiesToPage } from '../../../features/historical-entities';
import { abrahamA2PagesEn } from './en/pages';
import { abrahamA2PagesAr } from './ar/pages';
import { abrahamA2FinalChallengeExercisesPolished, abrahamA2KnowledgeCheckExercisesPolished, abrahamA2QuickChallengesPolished, abrahamA2VocabularyChallengePairsPolished, abrahamA2LanguageReviewExercises } from './en/exercises';
import { abrahamA2FinalChallengeExercisesArPolished, abrahamA2KnowledgeCheckExercisesArPolished, abrahamA2QuickChallengesArPolished, abrahamA2VocabularyChallengePairsArPolished, abrahamA2LanguageReviewExercisesAr } from './ar/exercises';
import { abrahamA2LanguageFocusExercises } from './en/languageFocus';
import { abrahamA2LanguageFocusExercisesPart2, abrahamA2LanguageFocusExercisesPart3, abrahamA2LanguageFocusExercisesPart4, abrahamA2LanguageFocusExercisesPart5, abrahamA2LanguageFocusExercisesPart6 } from './en/languageFocus2';
import { abrahamA2LanguageFocusExercisesPart7, abrahamA2LanguageFocusExercisesPart8, abrahamA2LanguageFocusExercisesPart9, abrahamA2LanguageFocusExercisesPart10, abrahamA2LanguageFocusExercisesPart11 } from './en/languageFocus3';
import { abrahamA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { abrahamA2LanguageFocusExercisesArPart2, abrahamA2LanguageFocusExercisesArPart3, abrahamA2LanguageFocusExercisesArPart4, abrahamA2LanguageFocusExercisesArPart5, abrahamA2LanguageFocusExercisesArPart6 } from './ar/languageFocus2';
import { abrahamA2LanguageFocusExercisesArPart7, abrahamA2LanguageFocusExercisesArPart8, abrahamA2LanguageFocusExercisesArPart9, abrahamA2LanguageFocusExercisesArPart10, abrahamA2LanguageFocusExercisesArPart11 } from './ar/languageFocus3';

const STORY_IDS = new Set(Array.from({ length: 14 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => abrahamA2PagesEn.map(sourcePage => {
  const page = applyHistoricalEntitiesToPage(sourcePage, 'abraham-a2', 'en');
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamA2LanguageFocusExercises[page.id] ?? abrahamA2LanguageFocusExercisesPart2[page.id] ?? abrahamA2LanguageFocusExercisesPart3[page.id] ?? abrahamA2LanguageFocusExercisesPart4[page.id] ?? abrahamA2LanguageFocusExercisesPart5[page.id] ?? abrahamA2LanguageFocusExercisesPart6[page.id] ?? abrahamA2LanguageFocusExercisesPart7[page.id] ?? abrahamA2LanguageFocusExercisesPart8[page.id] ?? abrahamA2LanguageFocusExercisesPart9[page.id] ?? abrahamA2LanguageFocusExercisesPart10[page.id] ?? abrahamA2LanguageFocusExercisesPart11[page.id];
    return { ...page, exercises: [abrahamA2QuickChallengesPolished[page.id]], ...(languageFocusExercises ? { languageFocusExercises } : {}) };
  }
  if (page.id === 15) return { ...page, exercises: abrahamA2KnowledgeCheckExercisesPolished };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamA2VocabularyChallengePairsPolished };
  if (page.id === 17) return { ...page, title: 'Language Review', content: 'Review and use the grammar patterns and language functions from all fourteen chapters.', exercises: abrahamA2LanguageReviewExercises };
  if (page.id === 20) return { ...page, exercises: abrahamA2FinalChallengeExercisesPolished };
  return page;
});

const buildArabicPages = (): PageData[] => abrahamA2PagesAr.map(sourcePage => {
  const page = applyHistoricalEntitiesToPage(sourcePage, 'abraham-a2', 'ar');
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = abrahamA2LanguageFocusExercisesAr[page.id] ?? abrahamA2LanguageFocusExercisesArPart2[page.id] ?? abrahamA2LanguageFocusExercisesArPart3[page.id] ?? abrahamA2LanguageFocusExercisesArPart4[page.id] ?? abrahamA2LanguageFocusExercisesArPart5[page.id] ?? abrahamA2LanguageFocusExercisesArPart6[page.id] ?? abrahamA2LanguageFocusExercisesArPart7[page.id] ?? abrahamA2LanguageFocusExercisesArPart8[page.id] ?? abrahamA2LanguageFocusExercisesArPart9[page.id] ?? abrahamA2LanguageFocusExercisesArPart10[page.id] ?? abrahamA2LanguageFocusExercisesArPart11[page.id];
    return { ...page, exercises: [abrahamA2QuickChallengesArPolished[page.id]], ...(languageFocusExercises ? { languageFocusExercises } : {}) };
  }
  if (page.id === 15) return { ...page, exercises: abrahamA2KnowledgeCheckExercisesArPolished };
  if (page.id === 16) return { ...page, vocabularyPairs: abrahamA2VocabularyChallengePairsArPolished };
  if (page.id === 17) return { ...page, title: 'مراجعة اللغة', content: 'راجع واستعمل تراكيب القواعد والوظائف اللغوية التي تعلمتها في الفصول الأربعة عشر.', exercises: abrahamA2LanguageReviewExercisesAr };
  if (page.id === 20) return { ...page, exercises: abrahamA2FinalChallengeExercisesArPolished };
  return page;
});

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en', title: 'Stories of the Prophets: Abraham (A2)', level: 'A2', baseFontSize: 13,
  pages: buildEnglishPages(), teacherGuide: [],
  selfStudyGuide: [],
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar', title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)', level: 'A2', baseFontSize: 14,
  pages: buildArabicPages(), teacherGuide: [],
  selfStudyGuide: [],
};

export const abrahamA2BookData = abrahamA2BookDataEn;
