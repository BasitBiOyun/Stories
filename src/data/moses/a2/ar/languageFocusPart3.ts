import type { Exercise } from '../../../../types';

export const mosesA2LanguageFocusExercisesPart3Ar: Record<number, Exercise[]> = {
  4: [
    {
      id: 'moses-a2-ar-language-4-past-movement', type: 'matching', title: 'أفعال الماضي والحركة',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الحركة والأحداث المكتملة؟',
      matchingPairs: [
        { left: 'وصل التابوت إلى شاطئ النهر', right: 'وصول شيء إلى مكان' },
        { left: 'رأى خدم القصر التابوت', right: 'حدث مكتمل في الماضي' },
        { left: 'أخذوه إلى فرعون وآسية', right: 'حركة نحو شخص أو مكان' },
        { left: 'أسرعت أخت موسى إلى آسية', right: 'حركة شخص نحو شخص آخر' },
      ],
      correctAnswer: {
        'وصل التابوت إلى شاطئ النهر': 'وصول شيء إلى مكان', 'رأى خدم القصر التابوت': 'حدث مكتمل في الماضي',
        'أخذوه إلى فرعون وآسية': 'حركة نحو شخص أو مكان', 'أسرعت أخت موسى إلى آسية': 'حركة شخص نحو شخص آخر',
      },
      explanation: 'تتبع أفعال الماضي وحرف «إلى» حركة الأشخاص والأشياء.', feedback: { correct: 'صحيح.', incorrect: 'لاحظ الفعل ثم اتجاه الحركة.' },
    },
    {
      id: 'moses-a2-ar-language-4-description-contrast', type: 'multiple-choice', title: 'الوصف والاختلاف',
      instructions: 'اختر الجملة التي تقارن بين شخصين.', question: 'أي جملة تستعمل «مختلف عن»؟',
      options: ['كانت آسية مختلفة عن زوجها', 'كانت طيبة القلب ورحيمة', 'وصل التابوت إلى شاطئ النهر'], correctAnswer: 0,
      explanation: '«مختلف عن» يبيّن الفرق بين طرفين.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن كلمة «مختلفة».' },
    },
    {
      id: 'moses-a2-ar-language-4-future-command', type: 'fill-blanks', title: 'قرار في المستقبل',
      instructions: 'أكمل الجملة بحرف المستقبل.', question: 'كيف تعبّر آسية عن قرار للمستقبل؟',
      fillBlanksText: '[blank]آخذه إلى القصر وأعتني به.', correctAnswer: 'س',
      explanation: 'تدخل السين على الفعل المضارع للتعبير عن المستقبل: سآخذه.', feedback: { correct: 'صحيح.', incorrect: 'أضف حرف المستقبل قبل الفعل.' },
    },
    {
      id: 'moses-a2-ar-language-4-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'أنشئ موقفًا بسيطًا عن مساعدة شخص.', question: 'هل تستطيع وصف شخص، وبيان اختلاف، وذكر قرار للمستقبل، وإعطاء أمر آمن؟',
      correctAnswer: null, explanation: 'استخدم «كان/كانت + صفة»، و«مختلف عن»، و«سـ + فعل»، وفعل أمر.', feedback: { correct: 'استخدم التراكيب في موقف جديد.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف شخصًا بصفتين.', mode: 'Individual' }, { question: 'استخدم «مختلف عن».', mode: 'Individual' },
        { question: 'قل ما ستفعله لاحقًا.', mode: 'Individual' }, { question: 'أعطِ أمرًا آمنًا.', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'moses-a2-ar-language-5-care-change', type: 'matching', title: 'الرعاية والتغيّر',
      instructions: 'صِل كل عبارة بوظيفتها.', question: 'كيف يصف الفصل الرعاية والنمو والتغيّر؟',
      matchingPairs: [
        { left: 'لترعى الطفل', right: 'غاية الرعاية' },
        { left: 'اعتنت أمه بالطفل موسى', right: 'فعل رعاية في الماضي' },
        { left: 'نشأ موسى في مكان آمن', right: 'نمو مع الزمن' },
        { left: 'أصبح موسى شابًا قويًا', right: 'انتقال إلى حالة جديدة' },
      ],
      correctAnswer: {
        'لترعى الطفل': 'غاية الرعاية', 'اعتنت أمه بالطفل موسى': 'فعل رعاية في الماضي',
        'نشأ موسى في مكان آمن': 'نمو مع الزمن', 'أصبح موسى شابًا قويًا': 'انتقال إلى حالة جديدة',
      },
      explanation: 'تستخدم «أصبح» للتغير، و«نشأ» للنمو، واللام للغرض.', feedback: { correct: 'صحيح.', incorrect: 'ميّز بين الرعاية والنمو والتغير.' },
    },
    {
      id: 'moses-a2-ar-language-5-habit-reason', type: 'fill-blanks', title: 'ذكر السبب',
      instructions: 'أكمل أداة السبب.', question: 'ما الكلمة التي تربط الفكرة بسببها؟',
      fillBlanksText: 'كان يحب بني إسرائيل [blank] أمه كانت من بني إسرائيل.', correctAnswer: 'لأن',
      explanation: 'تدخل «لأن» على جملة تشرح السبب.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج أداة تجيب عن «لماذا؟».' },
    },
    {
      id: 'moses-a2-ar-language-5-background-event', type: 'multiple-choice', title: 'خلفية الحدث',
      instructions: 'اختر الجملة التي تصف فعلًا مستمرًا في خلفية المشهد.', question: 'أي جملة تعطي خلفية قبل حدث جديد؟',
      options: ['كان يمشي في السوق', 'رأى رجلين يتخاصمان', 'أصبح موسى شابًا قويًا'], correctAnswer: 0,
      explanation: '«كان + فعل مضارع» يمكن أن يصف فعلًا مستمرًا في الخلفية.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «كان + مضارع».' },
    },
    {
      id: 'moses-a2-ar-language-5-production', type: 'reflection', title: 'استخدم اللغة',
      instructions: 'اكتب ثلاث أو أربع جمل عن شخص يساعد الآخرين.', question: 'هل تستطيع استعمال «أصبح»، و«دائمًا»، و«لأن»، وجملة خلفية بـ«كان + مضارع»؟',
      correctAnswer: null, explanation: 'انقل لغة الفصل إلى موقف جديد.', feedback: { correct: 'اجعل الجمل مترابطة وبسيطة.', incorrect: '' },
      discussionPrompts: [
        { question: 'صف تغيرًا بـ«أصبح».', mode: 'Individual' }, { question: 'صف عادة بـ«دائمًا».', mode: 'Individual' },
        { question: 'اذكر سببًا بـ«لأن».', mode: 'Individual' }, { question: 'أضف خلفية بـ«كان + فعل مضارع».', mode: 'Pair' },
      ],
    },
  ],
};
