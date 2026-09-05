import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart6Ar: Record<number, Exercise[]> = {
  9: [
    {
      id: 'moses-a2-ar-language-9-ability-need', type: 'matching', title: 'القدرة والحاجة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يعبّر الفصل عن عدم القدرة والحاجة والسبب؟',
      matchingPairs: [
        { left: 'لم يكن قادرًا على مساعدة بناته', right: 'عدم القدرة في الماضي' },
        { left: 'كان بحاجة إلى عمل وبيت', right: 'الحاجة إلى شيء' },
        { left: 'لأنه كان غريبًا في مدين', right: 'ذكر السبب' },
        { left: 'بحاجة إلى + اسم', right: 'تركيب للاحتياج' },
      ],
      correctAnswer: {
        'لم يكن قادرًا على مساعدة بناته': 'عدم القدرة في الماضي', 'كان بحاجة إلى عمل وبيت': 'الحاجة إلى شيء',
        'لأنه كان غريبًا في مدين': 'ذكر السبب', 'بحاجة إلى + اسم': 'تركيب للاحتياج',
      },
      explanation: 'يميّز الفصل بين عدم القدرة والحاجة وسبب الاختيار.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين ما لم يستطع فعله وما كان يحتاج إليه.' },
    },
    {
      id: 'moses-a2-ar-language-9-intention-instruction', type: 'multiple-choice', title: 'الرغبة والتوجيه',
      instructions: 'اختر الجملة التي تعبّر عن رغبة.', question: 'أي جملة تستعمل «أريد أن + فعل»؟',
      options: ['أريد أن أشكره على عمله', 'اذهبي ونادي الشاب', 'قبل موسى العمل'], correctAnswer: 0,
      explanation: '«أريد أن + فعل» تعبّر عن رغبة أو نية.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «أريد أن».' },
    },
    {
      id: 'moses-a2-ar-language-9-change-time', type: 'sequencing', title: 'التغير عبر الزمن',
      instructions: 'رتّب المراحل.', question: 'كيف ينظم الفصل بداية الحياة الجديدة ثم القرار اللاحق؟',
      sequencingItems: [
        { id: '1', text: 'بدأ موسى يقيم مع العائلة.' },
        { id: '2', text: 'بعد ذلك تزوج إحدى الفتاتين.' },
        { id: '3', text: 'مرت عشر سنوات.' },
        { id: '4', text: 'قرر موسى العودة إلى مصر.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تساعد «بدأ»، و«بعد ذلك»، و«بعد + مدة»، و«قرر» على ترتيب التغيرات.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ ببداية الإقامة ثم الحدث اللاحق فالمدة فالقرار.' },
    },
    {
      id: 'moses-a2-ar-language-9-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل فرصة جديدة في المدرسة أو البيت.', question: 'هل تستطيع ذكر حاجة وسبب، ثم رغبة أو عرضًا، ثم قرارًا لاحقًا؟',
      correctAnswer: null, explanation: 'استخدم «بحاجة إلى»، و«لأن»، و«أريد أن»، و«بعد ذلك»، و«قرر».', feedback: { correct: 'اجعل المثال جديدًا وبسيطًا.', incorrect: '' },
      discussionPrompts: [
        { question: 'اذكر حاجة.', mode: 'Individual' }, { question: 'اشرح سببًا.', mode: 'Individual' },
        { question: 'عبّر عن رغبة أو عرض.', mode: 'Pair' }, { question: 'اختم بقرار لاحق.', mode: 'Individual' },
      ],
    },
  ],
};
