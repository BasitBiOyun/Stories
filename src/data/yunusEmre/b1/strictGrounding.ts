import type { Exercise, PageData } from '../../../types';

type Language = 'en' | 'ar';

const groundedTrueFalse = (
  id: string,
  language: Language,
  question: string,
  explanation: string,
): Exercise => ({
  id,
  type: 'true-false',
  title: language === 'ar' ? 'دليل من الفصل' : 'Chapter Evidence',
  instructions: language === 'ar'
    ? 'حدّد هل العبارة مدعومة مباشرة بنص الفصل.'
    : 'Decide whether the statement is directly supported by the chapter.',
  question,
  correctAnswer: true,
  explanation,
  feedback: {
    correct: language === 'ar' ? `صحيح. ${explanation}` : `Correct. ${explanation}`,
    incorrect: language === 'ar'
      ? 'ارجع إلى الجملة ذات الصلة في الفصل ثم حاول مرة أخرى.'
      : 'Return to the relevant sentence in the chapter and try again.',
  },
});

const specs = {
  en: {
    8: [
      'The chapter says Tawhid means the Oneness of Allah.',
      'The chapter explicitly introduces Tawhid as the Oneness of Allah and presents it as an important spiritual principle in Yunus Emre’s works.',
    ],
    9: [
      'In the poem quoted in the chapter, Yunus says a Muslim should follow Allah’s command and pray the five daily prayers.',
      'The quoted verse says that a person who claims to be Muslim should know the requirements of Islam, follow Allah’s command, and pray the five daily prayers.',
    ],
    10: [
      'In Yunus Emre’s philosophy, the chapter describes the heart as the center of love and the center of understanding.',
      'The chapter directly says that the heart is the center of love, the eye that sees the truth, and the center of understanding.',
    ],
  },
  ar: {
    8: [
      'يقول الفصل إن التوحيد يعني وحدانية الله.',
      'يقدّم الفصل التوحيد بوصفه وحدانية الله ومبدأً روحيًا مهمًا في أعمال يونس إمره.',
    ],
    9: [
      'في الأبيات الواردة في الفصل، يقول يونس إن على المسلم اتباع أمر الله وأداء الصلوات الخمس.',
      'تقول الأبيات إن من يدّعي الإسلام ينبغي أن يعرف شروط الإسلام ويتبع أمر الله ويؤدي الصلوات الخمس.',
    ],
    10: [
      'في فلسفة يونس إمره، يصف الفصل القلب بأنه مركز الحب ومركز الفهم.',
      'يقول الفصل مباشرة إن القلب مركز الحب، والعين التي ترى الحقيقة، ومركز الفهم.',
    ],
  },
} as const;

export const groundRemainingYunusB1Challenges = (pages: PageData[], language: Language): PageData[] => pages.map((page) => {
  if (page.type !== 'story' || ![8, 9, 10].includes(page.id)) return page;
  const spec = specs[language][page.id as 8 | 9 | 10];
  const exercise = groundedTrueFalse(`yunus-b1-strict-${page.id}-${language}`, language, spec[0], spec[1]);
  return { ...page, exercises: [exercise, ...(page.exercises ?? []).slice(1)] };
});
