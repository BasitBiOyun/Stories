import type { LearningBlueprintChapter, LocalizedText } from '../../../learningBlueprint';

const QUESTION_OVERRIDES: Record<string, LocalizedText> = {
  'adam-a2-c1-final': {
    en: 'Why do people have different skin colors in this chapter?',
    ar: 'لماذا تختلف ألوان بشرة الناس في هذا الفصل؟',
  },
  'adam-a2-c2-final': {
    en: 'What did Iblis think about Adam?',
    ar: 'ماذا كان إبليس يظن عن آدم؟',
  },
  'adam-a2-c3-review': {
    en: 'What can useful knowledge help people do?',
    ar: 'ماذا يساعد العلم النافع الناس على أن يفعلوا؟',
  },
  'adam-a2-c3-final': {
    en: 'Complete the sentence.',
    ar: 'أكمل الجملة.',
  },
  'adam-a2-c4-final': {
    en: 'Iblis wanted Adam to stay close to Allah’s love and mercy.',
    ar: 'أراد إبليس أن يبقى آدم قريبًا من محبة الله ورحمته.',
  },
  'adam-a2-c5-review': {
    en: 'What did Adam and Eve do after the mistake, and what did Iblis do?',
    ar: 'ماذا فعل آدم وحواء بعد الخطأ، وماذا فعل إبليس؟',
  },
  'adam-a2-c6-final': {
    en: 'Match each group with the right action.',
    ar: 'صل كل مجموعة بالفعل الصحيح.',
  },
  'adam-a2-c7-quick': {
    en: 'Complete the sentence about what Adam taught.',
    ar: 'أكمل الجملة عما علّمه آدم.',
  },
  'adam-a2-c7-review': {
    en: 'What did Adam and Eve tell their children about Iblis?',
    ar: 'ماذا قال آدم وحواء لأولادهما عن إبليس؟',
  },
  'adam-a2-c8-review': {
    en: 'Which sentence is correct about Habil and Qabil?',
    ar: 'أي جملة صحيحة عن هابيل وقابيل؟',
  },
  'adam-a2-c8-final': {
    en: 'What does the chapter teach about giving?',
    ar: 'ماذا يعلمنا الفصل عن العطاء؟',
  },
  'adam-a2-c9-knowledge': {
    en: 'How did Qabil feel after he was not angry anymore?',
    ar: 'ماذا شعر قابيل بعد أن هدأ غضبه؟',
  },
  'adam-a2-c9-final': {
    en: 'What happened to Habil after Qabil hit him?',
    ar: 'ماذا حدث لهابيل بعد أن ضربه قابيل؟',
  },
  'adam-a2-c10-final': {
    en: 'What do the stories of Allah’s messengers help us do?',
    ar: 'على ماذا تساعدنا قصص الأنبياء؟',
  },
};

const OPTION_OVERRIDES: Record<string, { en: string[]; ar: string[] }> = {
  'adam-a2-c5-review': {
    en: [
      'Adam and Eve learned; Iblis did not admit he was wrong',
      'Adam and Eve said they were right; Iblis asked forgiveness',
      'Everyone forgot the mistake and moved on',
    ],
    ar: [
      'تعلم آدم وحواء؛ ولم يعترف إبليس بأنه مخطئ',
      'قال آدم وحواء إنهما على صواب؛ وطلب إبليس المغفرة',
      'نسي الجميع الخطأ وتابعوا حياتهم',
    ],
  },
};

/**
 * Student-facing A2 language lock.
 *
 * The cognitive target may require a simple comparison or cause/result link, but
 * the question itself must stay short, concrete and readable at A2. This layer
 * changes student-facing wording only; evidence, answers and story text are untouched.
 */
export const applyAdamA2QuestionLanguageLock = (
  chapter: LearningBlueprintChapter,
): LearningBlueprintChapter => ({
  ...chapter,
  assessmentItems: chapter.assessmentItems.map(item => {
    const wording = QUESTION_OVERRIDES[item.id];
    const options = OPTION_OVERRIDES[item.id];
    if (!wording && !options) return item;
    return {
      ...item,
      exercise: {
        en: {
          ...item.exercise.en,
          ...(wording ? { question: wording.en } : {}),
          ...(options ? { options: options.en } : {}),
        },
        ar: {
          ...item.exercise.ar,
          ...(wording ? { question: wording.ar } : {}),
          ...(options ? { options: options.ar } : {}),
        },
      },
    };
  }),
});
