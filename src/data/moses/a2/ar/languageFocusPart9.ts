import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart9Ar: Record<number, Exercise[]> = {
  12: [
    {
      id: 'moses-a2-ar-language-12-message-thought', type: 'matching', title: 'الرسالة والرأي والقرار',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يعبّر الفصل عن الرسالة والرأي والقرار؟',
      matchingPairs: [
        { left: 'أخبر موسى فرعون عن الله', right: 'نقل موضوع الحديث' },
        { left: 'ظن أن موسى مجنون', right: 'رأي أو اعتقاد' },
        { left: 'قرر موسى أن يظهر آيات الله', right: 'قرار أو نية' },
        { left: 'إني رسول من رب العالمين', right: 'رسالة مباشرة' },
      ],
      correctAnswer: {
        'أخبر موسى فرعون عن الله': 'نقل موضوع الحديث', 'ظن أن موسى مجنون': 'رأي أو اعتقاد',
        'قرر موسى أن يظهر آيات الله': 'قرار أو نية', 'إني رسول من رب العالمين': 'رسالة مباشرة',
      },
      explanation: 'يفرق الفصل بين نقل الرسالة والرأي والقرار والكلام المباشر.', feedback: { correct: 'صحيح.', incorrect: 'حدّد من ينقل رسالة ومن يعبّر عن رأي ومن يتخذ قرارًا.' },
    },
    {
      id: 'moses-a2-ar-language-12-change-sequence', type: 'sequencing', title: 'الفعل والتحول',
      instructions: 'رتّب الخطوات.', question: 'كيف يعرض الفصل الآيات بالترتيب؟',
      sequencingItems: [
        { id: '1', text: 'أخذ موسى عصاه.' },
        { id: '2', text: 'ألقاها على الأرض.' },
        { id: '3', text: 'تحولت العصا إلى ثعبان كبير.' },
        { id: '4', text: 'ثم أظهر آية اليد.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تستخدم الأفعال الماضية و«ثم» لترتيب الأحداث، و«تحول إلى» لوصف التغير.', feedback: { correct: 'صحيح.', incorrect: 'اتبع المشهد خطوة خطوة.' },
    },
    {
      id: 'moses-a2-ar-language-12-purpose-ability', type: 'multiple-choice', title: 'القدرة',
      instructions: 'اختر الجملة التي تعبّر عن القدرة.', question: 'أي جملة تستعمل «يستطيع»؟',
      options: ['كل سحرتي يستطيعون فعل هذا', 'هذا مجرد سحر', 'سخر فرعون ومساعدوه من موسى'], correctAnswer: 0,
      explanation: '«يستطيع + فعل» تعبّر عن القدرة.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن كلمة «يستطيعون».' },
    },
    {
      id: 'moses-a2-ar-language-12-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل أنك تعرض مهارة أو تجربة بسيطة.', question: 'هل تستطيع التعبير عن رأي أو قرار، ووصف تحول، وذكر قدرة؟',
      correctAnswer: null, explanation: 'استخدم «ظن أن»، و«قرر أن»، و«تحول إلى»، و«يستطيع».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر رأيًا أو اعتقادًا.', mode: 'Pair' }, { question: 'اذكر قرارًا.', mode: 'Individual' },
        { question: 'صف تحولًا.', mode: 'Individual' }, { question: 'اذكر قدرة.', mode: 'Individual' },
      ],
    },
  ],
};
