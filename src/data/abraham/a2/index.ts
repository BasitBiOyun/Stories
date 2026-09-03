import type { BookData, PageData } from '../../../types';
import { abrahamA2PagesEn } from './en/pages';
import { abrahamA2PagesAr } from './ar/pages';
import { abrahamA2FinalChallengeExercisesPolished, abrahamA2KnowledgeCheckExercisesPolished, abrahamA2QuickChallengesPolished, abrahamA2VocabularyChallengePairsPolished } from './en/exerciseSystem';
import { abrahamA2FinalChallengeExercisesArPolished, abrahamA2KnowledgeCheckExercisesArPolished, abrahamA2QuickChallengesArPolished, abrahamA2VocabularyChallengePairsArPolished } from './ar/exerciseSystem';
import { abrahamA2LanguageReviewExercises } from './en/languageReview';
import { abrahamA2LanguageReviewExercisesAr } from './ar/languageReview';
import { abrahamA2LanguageFocusExercises } from './en/languageFocus';
import { abrahamA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { abrahamA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { abrahamA2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { abrahamA2LanguageFocusExercisesPart5 } from './en/languageFocusPart5';
import { abrahamA2LanguageFocusExercisesPart6 } from './en/languageFocusPart6';
import { abrahamA2LanguageFocusExercisesPart7 } from './en/languageFocusPart7';
import { abrahamA2LanguageFocusExercisesPart8 } from './en/languageFocusPart8';
import { abrahamA2LanguageFocusExercisesPart9 } from './en/languageFocusPart9';
import { abrahamA2LanguageFocusExercisesPart10 } from './en/languageFocusPart10';
import { abrahamA2LanguageFocusExercisesPart11 } from './en/languageFocusPart11';
import { abrahamA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { abrahamA2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { abrahamA2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { abrahamA2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { abrahamA2LanguageFocusExercisesArPart5 } from './ar/languageFocusPart5';
import { abrahamA2LanguageFocusExercisesArPart6 } from './ar/languageFocusPart6';
import { abrahamA2LanguageFocusExercisesArPart7 } from './ar/languageFocusPart7';
import { abrahamA2LanguageFocusExercisesArPart8 } from './ar/languageFocusPart8';
import { abrahamA2LanguageFocusExercisesArPart9 } from './ar/languageFocusPart9';
import { abrahamA2LanguageFocusExercisesArPart10 } from './ar/languageFocusPart10';
import { abrahamA2LanguageFocusExercisesArPart11 } from './ar/languageFocusPart11';
import { abrahamA2TeacherGuideEn, abrahamA2TeacherGuideMetadataEn } from './en/teacherGuide';
import { abrahamA2TeacherGuideAr, abrahamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamA2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamA2StudentGuideSectionsPreview, abrahamA2StudentGuideMetadataPreview, abrahamA2StudentGuideTextPreview } from './en/studentGuidePreview';
import { abrahamA2SelfStudyGuideAr } from './ar/selfStudyGuide';
import { abrahamA2StudentGuideSectionsPreviewAr, abrahamA2StudentGuideMetadataPreviewAr, abrahamA2StudentGuideTextPreviewAr } from './ar/studentGuidePreview';

const STORY_IDS = new Set(Array.from({ length: 14 }, (_, index) => index + 1));

const buildEnglishPages = (): PageData[] => abrahamA2PagesEn.map(page => {
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

const buildArabicPages = (): PageData[] => abrahamA2PagesAr.map(page => {
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
  pages: buildEnglishPages(), teacherGuide: abrahamA2TeacherGuideEn, teacherGuideMetadata: abrahamA2TeacherGuideMetadataEn,
  selfStudyGuide: abrahamA2SelfStudyGuideEn, studentGuideSections: abrahamA2StudentGuideSectionsPreview, studentGuideMetadata: abrahamA2StudentGuideMetadataPreview, studentGuideText: abrahamA2StudentGuideTextPreview,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar', title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)', level: 'A2', baseFontSize: 14,
  pages: buildArabicPages(), teacherGuide: abrahamA2TeacherGuideAr, teacherGuideMetadata: abrahamA2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamA2SelfStudyGuideAr, studentGuideSections: abrahamA2StudentGuideSectionsPreviewAr, studentGuideMetadata: abrahamA2StudentGuideMetadataPreviewAr, studentGuideText: abrahamA2StudentGuideTextPreviewAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
