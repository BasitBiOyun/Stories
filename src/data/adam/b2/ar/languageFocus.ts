import type { Exercise } from '../../../../types';
import { adamB2LanguageFocusExercisesAr as adamB2LanguageFocusBaseCh1to4Ar } from './languageFocusBaseCh1to4';
import { adamB2LanguageFocusChapter5Ar } from './languageFocusChapter5';
import { adamB2LanguageFocusChapter6Ar } from './languageFocusChapter6';
import { adamB2LanguageFocusChapter7Ar } from './languageFocusChapter7';

/** التجميع النشط للتركيز اللغوي العربي في آدم B2 من مجموعات الفصول المصاغة يدويا. */
export const adamB2LanguageFocusExercisesAr: Record<number, Exercise[]> = {
  ...adamB2LanguageFocusBaseCh1to4Ar,
  ...adamB2LanguageFocusChapter5Ar,
  ...adamB2LanguageFocusChapter6Ar,
  ...adamB2LanguageFocusChapter7Ar,
};
