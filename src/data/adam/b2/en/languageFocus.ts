import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusExercises as adamB2LanguageFocusBaseCh1to4 } from './languageFocusBaseCh1to4';
import { adamB2LanguageFocusChapter5 } from './languageFocusChapter5';
import { adamB2LanguageFocusChapter6 } from './languageFocusChapter6';

/** Adam B2 English Language Focus — Chapters 1–6. */
export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusBaseCh1to4,
  ...adamB2LanguageFocusChapter5,
  ...adamB2LanguageFocusChapter6,
};
