import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusExercises as adamB2LanguageFocusBaseCh1to4 } from './languageFocusBaseCh1to4';
import { adamB2LanguageFocusChapter5 } from './languageFocusChapter5';
import { adamB2LanguageFocusChapter6 } from './languageFocusChapter6';
import { adamB2LanguageFocusChapter7 } from './languageFocusChapter7';
import { adamB2LanguageFocusChapter8 } from './languageFocusChapter8';
import { adamB2LanguageFocusChapter9 } from './languageFocusChapter9';
import { adamB2LanguageFocusChapter10 } from './languageFocusChapter10';

/** Active Adam B2 English Language Focus assembled from manually authored chapter sets. */
export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusBaseCh1to4,
  ...adamB2LanguageFocusChapter5,
  ...adamB2LanguageFocusChapter6,
  ...adamB2LanguageFocusChapter7,
  ...adamB2LanguageFocusChapter8,
  ...adamB2LanguageFocusChapter9,
  ...adamB2LanguageFocusChapter10,
};
