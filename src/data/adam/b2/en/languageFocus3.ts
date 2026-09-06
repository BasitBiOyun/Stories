import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusChapter13 } from './languageFocusChapter13';
import { adamB2LanguageFocusChapter14 } from './languageFocusChapter14';
import { adamB2LanguageFocusChapter15 } from './languageFocusChapter15';
import { adamB2LanguageFocusChapter16 } from './languageFocusChapter16';
import { adamB2LanguageFocusChapter17 } from './languageFocusChapter17';

export { adamB2LanguageReviewExercises } from './languageReview';

/** Adam B2 English Language Focus — Chapters 13–17. */
export const adamB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusChapter13,
  ...adamB2LanguageFocusChapter14,
  ...adamB2LanguageFocusChapter15,
  ...adamB2LanguageFocusChapter16,
  ...adamB2LanguageFocusChapter17,
};
