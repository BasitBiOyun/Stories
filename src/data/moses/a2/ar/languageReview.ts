import type { Exercise } from '../../../../types';

/** مراجعة لغوية تراكمية لموسى A2. */
export const mosesA2LanguageReviewExercisesAr: Exercise[] = [
  {
    id: 'moses-a2-ar-language-review-1-form-function', type: 'matching', title: 'التركيب والوظيفة',
    instructions: 'صِل كل تركيب بوظيفته.', question: 'ماذا يساعدنا كل تركيب على أن نعبّر؟',
    matchingPairs: [
      { left: 'كان + فعل مضارع', right: 'خلفية أو حالة مستمرة في الماضي' },
      { left: 'لأن + جملة', right: 'ذكر السبب' },
      { left: 'لذلك + جملة', right: 'ذكر النتيجة' },
      { left: 'ثم / بعد + مدة', right: 'ترتيب الأحداث' }
    ],
    correctAnswer: { 'كان + فعل مضارع': 'خلفية أو حالة مستمرة في الماضي', 'لأن + جملة': 'ذكر السبب', 'لذلك + جملة': 'ذكر النتيجة', 'ثم / بعد + مدة': 'ترتيب الأحداث' },
    explanation: 'تنظم هذه التراكيب الماضي والسبب والنتيجة والتسلسل.', feedback: { correct: 'صحيح.', incorrect: 'افصل بين الخلفية والسبب والنتيجة والترتيب.' }
  },
  {
    id: 'moses-a2-ar-language-review-2-ability', type: 'multiple-choice', title: 'عدم القدرة في الماضي',
    instructions: 'اختر الجملة الصحيحة.', question: 'أي جملة تعبّر عن عدم القدرة في الماضي؟',
    options: ['لم يستطع أن يكمل لأنه كان متعبًا.', 'لا يستطيع أمس أن يكمل.', 'سوف لم يستطع أن يكمل.'], correctAnswer: 0,
    explanation: '«لم يستطع أن + فعل» تعبّر عن عدم القدرة في الماضي.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «لم يستطع أن».' }
  },
  {
    id: 'moses-a2-ar-language-review-3-purpose', type: 'fill-blanks', title: 'الغاية',
    instructions: 'أكمل حرف الغاية.', question: 'ما الحرف المناسب؟',
    fillBlanksText: 'ذهبت إلى المكتبة [blank]أدرس.', correctAnswer: 'ل',
    explanation: 'تستخدم اللام قبل الفعل لبيان الغاية.', feedback: { correct: 'صحيح.', incorrect: 'نحتاج لام الغاية.' }
  },
  {
    id: 'moses-a2-ar-language-review-4-command-report', type: 'drag-drop', title: 'توجيه مباشر أم منقول؟',
    instructions: 'صنّف الأمثلة حسب وظيفتها.', question: 'أي العبارات توجيه مباشر وأيها تنقل توجيهًا؟',
    dragDropGroups: [
      { group: 'توجيه مباشر', items: ['انتظر هنا!', 'افتح الكتاب!'] },
      { group: 'توجيه منقول', items: ['قال لي أن أنتظر.', 'طلب منا أن نفتح الكتاب.'] }
    ],
    correctAnswer: { 'توجيه مباشر': ['انتظر هنا!', 'افتح الكتاب!'], 'توجيه منقول': ['قال لي أن أنتظر.', 'طلب منا أن نفتح الكتاب.'] },
    explanation: 'صيغة التوجيه المباشر تخاطب الشخص مباشرة، بينما الجملة الأخرى تنقل ما طُلب.', feedback: { correct: 'صحيح.', incorrect: 'افصل بين الكلام المباشر والكلام المنقول.' }
  },
  {
    id: 'moses-a2-ar-language-review-5-future-time', type: 'fill-blanks', title: 'المستقبل والزمن',
    instructions: 'أكمل أداة المستقبل.', question: 'ما الكلمة التي تكمل الجملة؟',
    fillBlanksText: 'عندما ننتهي من هذا العمل، [blank] نعود إلى البيت.', correctAnswer: 'سوف',
    explanation: 'تأتي «سوف» قبل الفعل المضارع لنتيجة مستقبلية.', feedback: { correct: 'صحيح.', incorrect: 'استخدم أداة مستقبل قبل الفعل.' }
  },
  {
    id: 'moses-a2-ar-language-review-6-change', type: 'multiple-choice', title: 'تغيّر الحالة',
    instructions: 'اختر الجملة الصحيحة.', question: 'أي جملة تستعمل «أصبح» لوصف حالة جديدة؟',
    options: ['أصبح المكان هادئًا.', 'أصبح المكان إلى هادئ.', 'المكان أصبح أن هادئ.'], correctAnswer: 0,
    explanation: '«أصبح + اسم/صفة» تصف الانتقال إلى حالة جديدة.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «أصبح + صفة».' }
  },
  {
    id: 'moses-a2-ar-language-review-7-place-movement', type: 'matching', title: 'المكان والحركة',
    instructions: 'صِل التعبير بمعناه.', question: 'كيف نصف الموقع والوصول والبحث؟',
    matchingPairs: [
      { left: 'أمام / خلف', right: 'الموقع' },
      { left: 'في وسط + مكان', right: 'موقع في المنتصف' },
      { left: 'وصل إلى + مكان', right: 'الوصول إلى مكان' },
      { left: 'بحث عن', right: 'البحث عن شخص أو شيء' }
    ],
    correctAnswer: { 'أمام / خلف': 'الموقع', 'في وسط + مكان': 'موقع في المنتصف', 'وصل إلى + مكان': 'الوصول إلى مكان', 'بحث عن': 'البحث عن شخص أو شيء' },
    explanation: 'تتكرر لغة المكان والحركة في فصول الرحلة.', feedback: { correct: 'صحيح.', incorrect: 'افصل بين الموقع والوصول والبحث.' }
  },
  {
    id: 'moses-a2-ar-language-review-8-question-ability', type: 'true-false', title: 'السؤال عن القدرة',
    instructions: 'حدد صحة العبارة.', question: 'يمكن أن نستخدم «هل تستطيع أن + فعل؟» للسؤال عن قدرة شخص على فعل شيء.',
    correctAnswer: true, explanation: 'هذه صيغة شائعة للسؤال عن القدرة.', feedback: { correct: 'صحيح.', incorrect: 'فكر في معنى «يستطيع».' }
  },
  {
    id: 'moses-a2-ar-language-review-9-sequence', type: 'sequencing', title: 'بناء قصة قصيرة',
    instructions: 'رتّب الحركات اللغوية.', question: 'كيف تنتقل قصة قصيرة من المشكلة إلى النتيجة؟',
    sequencingItems: [
      { id: '1', text: 'في البداية كانت هناك مشكلة.' },
      { id: '2', text: 'قرر شخص أن يساعد.' },
      { id: '3', text: 'ثم قام بالفعل.' },
      { id: '4', text: 'وفي النهاية تغيرت الحالة.' }
    ],
    correctAnswer: ['1','2','3','4'], explanation: 'تنظم «في البداية»، و«قرر»، و«ثم»، و«في النهاية» قصة بسيطة.', feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالمشكلة ثم القرار ثم الفعل ثم النتيجة.' }
  },
  {
    id: 'moses-a2-ar-language-review-10-transfer', type: 'reflection', title: 'استعمل اللغة في حياتك اليومية',
    instructions: 'اكتب أربع جمل قصيرة عن موقف يومي جديد.', question: 'هل تستطيع استعمال لغة الكتاب دون إعادة سرد القصة؟',
    correctAnswer: null, explanation: 'الهدف نقل القواعد والوظائف إلى استعمال جديد.', feedback: { correct: 'استعمل البدايات الأربع واجعل الجمل ذات معنى.', incorrect: '' },
    discussionPrompts: [
      { question: 'الجملة 1 — «أمس لم أستطع أن ... لأن ...»', mode: 'Individual' },
      { question: 'الجملة 2 — «قررت أن ... لكي ...»', mode: 'Individual' },
      { question: 'الجملة 3 — «هل تستطيع أن ...؟»', mode: 'Pair' },
      { question: 'الجملة 4 — «عندما ...، سوف ...»', mode: 'Pair' }
    ]
  }
];
