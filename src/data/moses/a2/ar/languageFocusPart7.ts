import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart7Ar: Record<number, Exercise[]> = {
  10: [
    {
      id: 'moses-a2-ar-language-10-setting-change', type: 'matching', title: 'المكان وتغيّر الحال',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الجو والمكان والتغيّر؟',
      matchingPairs: [
        { left: 'كان الشتاء', right: 'خلفية زمنية' },
        { left: 'لم يكن هناك أحد في الطريق', right: 'عدم وجود شخص' },
        { left: 'بدأ الظلام يحل', right: 'بداية تغيّر' },
        { left: 'اشتد البرد', right: 'ازدياد حالة' },
      ],
      correctAnswer: {
        'كان الشتاء': 'خلفية زمنية', 'لم يكن هناك أحد في الطريق': 'عدم وجود شخص',
        'بدأ الظلام يحل': 'بداية تغيّر', 'اشتد البرد': 'ازدياد حالة',
      },
      explanation: 'يبني الفصل المشهد باستعمال «كان»، و«لم يكن هناك»، و«بدأ»، و«اشتد».', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الزمن والمكان وبداية التغير.' },
    },
    {
      id: 'moses-a2-ar-language-10-future-purpose', type: 'fill-blanks', title: 'المستقبل والغاية',
      instructions: 'أكمل أداة الغاية.', question: 'لماذا سيأتي موسى بالنار؟',
      fillBlanksText: 'سآتي ببعض النار [blank]نتدفأ.', correctAnswer: 'ل',
      explanation: 'تأتي اللام قبل الفعل لبيان الغاية: لنتدفأ.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج لام الغاية.' },
    },
    {
      id: 'moses-a2-ar-language-10-command-change', type: 'sequencing', title: 'الأمر والاستجابة والتحوّل',
      instructions: 'رتّب الخطوات.', question: 'كيف ينتقل المشهد من الأمر إلى التحول؟',
      sequencingItems: [
        { id: '1', text: 'قيل لموسى: ألق عصاك.' },
        { id: '2', text: 'ألقى موسى عصاه.' },
        { id: '3', text: 'تحولت العصا إلى ثعبان كبير.' },
        { id: '4', text: 'رأى موسى النتيجة.' },
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'يميز الفصل بين الأمر وتنفيذه ثم التحول.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالأمر ثم التنفيذ ثم التحول.' },
    },
    {
      id: 'moses-a2-ar-language-10-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مساء باردًا في موقف يومي.', question: 'هل تستطيع وصف تغير، وإعطاء توجيه، وذكر فعل قادم وغاية منه؟',
      correctAnswer: null, explanation: 'استخدم «بدأ»، وفعل أمر، و«سـ + فعل»، و«لـ + فعل».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف شيئًا بدأ يتغير.', mode: 'Individual' }, { question: 'أعط توجيهًا بسيطًا.', mode: 'Pair' },
        { question: 'قل ما ستفعله بعد قليل.', mode: 'Individual' }, { question: 'اذكر الغاية منه.', mode: 'Individual' },
      ],
    },
  ],
};
