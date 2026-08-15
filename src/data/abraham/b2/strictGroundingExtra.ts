import type { Exercise, PageData } from '../../../types';

type Language = 'en' | 'ar';

const specs = {
  en: {
    14: [
      'His father’s harsh behavior did not stop Abraham from carrying the message of truth, and he went to the town to debate with the people.',
      'Chapter 14 directly says that his father’s harsh behavior did not stop him and that he went to the town to debate with the people.',
    ],
    20: [
      'After the people admitted that the idol could not speak or move, they decided that Abraham should be burned alive.',
      'Chapter 20 says the people admitted the idol could not speak or move, had no answer for Abraham, and then agreed that he should be burned alive.',
    ],
    22: [
      'After the fire burnt out, Abraham stepped out of the pit completely unharmed.',
      'Chapter 22 directly states that Abraham stepped out of the pit completely unharmed after the fire burnt out.',
    ],
  },
  ar: {
    14: [
      'لم يمنع سلوك أبيه القاسي إبراهيم من مواصلة رسالة الحق، فذهب إلى البلدة ليناقش الناس.',
      'يقول الفصل الرابع عشر مباشرة إن سلوك أبيه القاسي لم يوقفه عن حمل رسالة الحق وإنه ذهب إلى البلدة ليناقش الناس.',
    ],
    20: [
      'بعد أن أقر الناس بأن الصنم لا يستطيع الكلام أو الحركة، قرروا إحراق إبراهيم حيًا.',
      'يذكر الفصل العشرون أن الناس أقروا بأن الصنم لا يستطيع الكلام أو الحركة، ولم يجدوا جوابًا لإبراهيم، ثم اتفقوا على إحراقه حيًا.',
    ],
    22: [
      'بعد أن خمدت النار خرج إبراهيم من الحفرة دون أن يصاب بأذى.',
      'يقول الفصل الثاني والعشرون مباشرة إن إبراهيم خرج من الحفرة دون أن يصاب بأذى بعد أن خمدت النار.',
    ],
  },
} as const;

const exercise = (chapterId: number, language: Language, question: string, explanation: string): Exercise => ({
  id: `abraham-b2-extra-${chapterId}-${language}`,
  type: 'true-false',
  title: language === 'ar' ? 'دليل مباشر من الفصل' : 'Direct Chapter Evidence',
  instructions: language === 'ar' ? 'حدّد هل العبارة مدعومة مباشرة بالفصل.' : 'Decide whether the statement is directly supported by the chapter.',
  question,
  correctAnswer: true,
  explanation,
  feedback: {
    correct: language === 'ar' ? `صحيح. ${explanation}` : `Correct. ${explanation}`,
    incorrect: language === 'ar' ? 'ارجع إلى الفصل ثم حاول مرة أخرى.' : 'Return to the chapter and try again.',
  },
});

export const groundFinalAbrahamB2Leakage = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || ![14, 20, 22].includes(page.id)) return page;
  const spec = specs[language][page.id as 14 | 20 | 22];
  return { ...page, exercises: [exercise(page.id, language, spec[0], spec[1]), ...(page.exercises ?? []).slice(1)] };
});
