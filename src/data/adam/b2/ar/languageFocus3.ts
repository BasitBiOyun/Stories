import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusChapter13Ar } from './languageFocusChapter13';
import { adamB2LanguageFocusChapter14Ar } from './languageFocusChapter14';
import { adamB2LanguageFocusChapter15Ar } from './languageFocusChapter15';
import { adamB2LanguageFocusChapter16Ar } from './languageFocusChapter16';
import { adamB2LanguageFocusChapter17Ar } from './languageFocusChapter17';

export { adamB2LanguageReviewExercisesAr } from './languageReview';

/** Arabic Language Focus — Chapters 13–17. */
export const adamB2LanguageFocusExercisesArPart3: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusChapter13Ar,
  ...adamB2LanguageFocusChapter14Ar,
  ...adamB2LanguageFocusChapter15Ar,
  ...adamB2LanguageFocusChapter16Ar,
  ...adamB2LanguageFocusChapter17Ar,
};
