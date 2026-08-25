import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusExercises as adamB2LanguageFocusBaseCh1to4 } from './languageFocusBaseCh1to4';
import { adamB2LanguageFocusChapter5 } from './languageFocusChapter5';

/** Active Adam B2 English Language Focus assembled from manually authored chapter sets. */
export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusBaseCh1to4,
  ...adamB2LanguageFocusChapter5,
};
