import type { Exercise } from '../../../../types';
import { abrahamB2LanguageFocusChapter1 } from './languageFocusChapter1';
import { abrahamB2LanguageFocusChapter2 } from './languageFocusChapter2';
import { abrahamB2LanguageFocusChapter3 } from './languageFocusChapter3';
import { abrahamB2LanguageFocusChapter4 } from './languageFocusChapter4';
import { abrahamB2LanguageFocusChapter5 } from './languageFocusChapter5';
import { abrahamB2LanguageFocusChapter6 } from './languageFocusChapter6';

/** Active Abraham B2 English Language Focus assembled from manually authored chapter sets. */
export const abrahamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter1,
  ...abrahamB2LanguageFocusChapter2,
  ...abrahamB2LanguageFocusChapter3,
  ...abrahamB2LanguageFocusChapter4,
  ...abrahamB2LanguageFocusChapter5,
  ...abrahamB2LanguageFocusChapter6,
};
