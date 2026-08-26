import type { Exercise } from '../../../../types';
import { abrahamB2LanguageFocusChapter1Ar } from './languageFocusChapter1';
import { abrahamB2LanguageFocusChapter2Ar } from './languageFocusChapter2';
import { abrahamB2LanguageFocusChapter3Ar } from './languageFocusChapter3';

/** تمارين التركيز اللغوي النشطة في إبراهيم B2، مجمعة من مجموعات الفصول المؤلفة يدويًا. */
export const abrahamB2LanguageFocusExercisesAr: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter1Ar,
  ...abrahamB2LanguageFocusChapter2Ar,
  ...abrahamB2LanguageFocusChapter3Ar,
};
