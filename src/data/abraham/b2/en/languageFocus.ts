import type { Exercise } from '../../../../types';
import { abrahamB2LanguageFocusChapter1 } from './languageFocusChapter1';
import { abrahamB2LanguageFocusChapter2 } from './languageFocusChapter2';
import { abrahamB2LanguageFocusChapter3 } from './languageFocusChapter3';

/** Active Abraham B2 English Language Focus assembled from manually authored chapter sets. */
export const abrahamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter1,
  ...abrahamB2LanguageFocusChapter2,
  ...abrahamB2LanguageFocusChapter3,
};
