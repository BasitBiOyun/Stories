import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart11Ar: Record<number, Exercise[]> = {
  15: [
    {
      id: 'moses-a2-ar-language-15-position-reassurance', type: 'matching', title: 'المكان والطمأنينة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل موقع الخطر ويطمئن القوم؟',
      matchingPairs: [
        { left: 'كان البحر أمامهم', right: 'وصف ما أمام المجموعة' },
        { left: 'كان فرعون وجيشه خلفهم', right: 'وصف ما خلف المجموعة' },
        { left: 'اهدؤوا', right: 'طلب الهدوء' },
        { left: 'سيهدين', right: 'طمأنة بالمستقبل' }
      ],
      correctAnswer: {
        'كان البحر أمامهم': 'وصف ما أمام المجموعة', 'كان فرعون وجيشه خلفهم': 'وصف ما خلف المجموعة',
        'اهدؤوا': 'طلب الهدوء', 'سيهدين': 'طمأنة بالمستقبل'
      },
      explanation: 'يجمع المشهد بين ألفاظ المكان والتوجيه وصيغة المستقبل.', feedback: { correct: 'صحيح.', incorrect: 'فرّق بين المكان والطمأنة.' }
    },
    {
      id: 'moses-a2-ar-language-15-command-change', type: 'sequencing', title: 'التوجيه والتحول والنتيجة',
      instructions: 'رتّب الخطوات.', question: 'كيف ينتقل المشهد من التوجيه إلى الطريق الآمن؟',
      sequencingItems: [
        { id: '1', text: 'قيل لموسى أن يضرب البحر بعصاه.' },
        { id: '2', text: 'انشق البحر.' },
        { id: '3', text: 'أصبحت الأمواج جدرانًا عالية.' },
        { id: '4', text: 'ظهر طريق في البحر.' }
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'ترتب القصة التوجيه ثم التغير ثم الحالة الجديدة ثم النتيجة.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالتوجيه ثم اتبع النتيجة.' }
    },
    {
      id: 'moses-a2-ar-language-15-safe-movement', type: 'fill-blanks', title: 'الموقع في الوسط',
      instructions: 'أكمل حرف المكان.', question: 'كيف نصف السير في وسط شيئين؟',
      fillBlanksText: 'سار القوم بأمان [blank] جدران من الماء.', correctAnswer: 'بين',
      explanation: 'تستخدم «بين» لوصف موقع في الوسط.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج كلمة مكان تعني في الوسط.' }
    },
    {
      id: 'moses-a2-ar-language-15-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'تخيل مجموعة تحتاج إلى المرور بأمان في مكان مزدحم.', question: 'هل تستطيع وصف ما أمامهم وخلفهم، وطمأنتهم، ثم وصف طريق آمن؟',
      correctAnswer: null, explanation: 'استخدم «أمام»، و«خلف»، وصيغة توجيه، و«سـ + فعل»، و«بين» و«بأمان».', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف ما أمام المجموعة وما خلفها.', mode: 'Individual' },
        { question: 'قدّم طمأنة قصيرة.', mode: 'Pair' },
        { question: 'اذكر شيئًا سيحدث.', mode: 'Individual' },
        { question: 'صف طريقًا آمنًا.', mode: 'Individual' }
      ]
    }
  ],
  16: [
    {
      id: 'moses-a2-ar-language-16-place-time', type: 'matching', title: 'المكان والزمن',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يحدد الفصل المكان والزمن في المشهد الأخير؟',
      matchingPairs: [
        { left: 'قريبين جدًا من ورائهم', right: 'موقع خلف مجموعة' },
        { left: 'في وسط البحر', right: 'موقع في المنتصف' },
        { left: 'عندما وصلوا إلى منتصف الطريق', right: 'تحديد وقت حدث آخر' },
        { left: 'وفي النهاية', right: 'تقديم النتيجة الأخيرة' }
      ],
      correctAnswer: {
        'قريبين جدًا من ورائهم': 'موقع خلف مجموعة', 'في وسط البحر': 'موقع في المنتصف',
        'عندما وصلوا إلى منتصف الطريق': 'تحديد وقت حدث آخر', 'وفي النهاية': 'تقديم النتيجة الأخيرة'
      },
      explanation: 'تساعد ألفاظ المكان و«عندما» و«في النهاية» على ترتيب المشهد.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين المكان والزمن والختام.' }
    },
    {
      id: 'moses-a2-ar-language-16-claim-command-result', type: 'multiple-choice', title: 'تقديم الكلام',
      instructions: 'اختر الجملة التي تقدّم كلامًا إلى جماعة.', question: 'أي جملة تستعمل «قال لـ»؟',
      options: ['قال فرعون لجنوده', 'في وسط البحر', 'وفي النهاية'], correctAnswer: 0,
      explanation: '«قال لـ + شخص» تقدم المخاطب الذي وُجّه إليه الكلام.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «قال ... لجنوده».' }
    },
    {
      id: 'moses-a2-ar-language-16-final-sequence', type: 'sequencing', title: 'الحدث الأخير',
      instructions: 'رتّب العبارات زمنيًا.', question: 'كيف ينظم الفصل نهاية المطاردة؟',
      sequencingItems: [
        { id: '1', text: 'دخل فرعون وجنوده الطريق.' },
        { id: '2', text: 'وصلوا إلى منتصف الطريق.' },
        { id: '3', text: 'أغلق البحر عليهم.' },
        { id: '4', text: 'وصلت القصة إلى نتيجتها الأخيرة.' }
      ],
      correctAnswer: ['1','2','3','4'], explanation: 'تستخدم أحداث الماضي و«عندما» و«في النهاية» لترتيب الخاتمة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع الحدث من الدخول إلى منتصف الطريق ثم النتيجة.' }
    },
    {
      id: 'moses-a2-ar-language-16-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'اكتب أو قل خاتمة قصيرة لحدث يومي آمن.', question: 'هل تستطيع استعمال عبارة مكان، و«عندما»، و«في النهاية» لترتيب الحدث؟',
      correctAnswer: null, explanation: 'انقل لغة المكان والزمن والترتيب إلى موقف جديد.', feedback: { correct: 'اجعل الخاتمة واضحة وبسيطة.', incorrect: '' },
      discussionPrompts: [
        { question: 'ابدأ بعبارة مكان.', mode: 'Individual' },
        { question: 'أضف جملة تبدأ بـ«عندما».', mode: 'Individual' },
        { question: 'اختم بـ«في النهاية».', mode: 'Pair' }
      ]
    }
  ]
};
