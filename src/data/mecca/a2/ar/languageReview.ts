import type { Exercise } from '../../../../types';

/** مراجعة لغوية تراكمية لـ Mecca A2؛ فهم القصة الكاملة يبقى في Final Challenge. */
export const meccaA2LanguageReviewExercisesAr: Exercise[] = [
  {
    id: 'mecca-a2-ar-language-review-1-form-function', type: 'matching', title: 'الماضي والتغيّر والسبب',
    instructions: 'صِل كل تركيب بوظيفته.', question: 'ماذا يعبّر كل تركيب؟',
    matchingPairs: [
      { left: 'كان / كانت', right: 'حالة أو هوية في الماضي' },
      { left: 'أصبح / صار + صفة', right: 'تغيّر الحال' },
      { left: 'لأنّ + جملة', right: 'سبب بجملة' },
      { left: 'بسبب + اسم', right: 'سبب باسم أو تركيب اسمي' },
    ],
    correctAnswer: {
      'كان / كانت': 'حالة أو هوية في الماضي',
      'أصبح / صار + صفة': 'تغيّر الحال',
      'لأنّ + جملة': 'سبب بجملة',
      'بسبب + اسم': 'سبب باسم أو تركيب اسمي',
    },
    explanation: 'تصف هذه التراكيب الخلفية والتغيّر والسبب.',
    feedback: { correct: 'صحيح.', incorrect: 'فرّق بين الماضي والتغيّر وطريقتي ذكر السبب.' },
  },
  {
    id: 'mecca-a2-ar-language-review-2-decision', type: 'multiple-choice', title: 'من التفكير إلى القرار',
    instructions: 'اختر الجملة التي تعبّر عن قرار.', question: 'أي جملة تدل على اختيار بعد التفكير؟',
    options: ['قررت أن أطلب المساعدة.', 'فكرت في المشكلة.', 'شعرت بالخوف.'], correctAnswer: 0,
    explanation: '«قرّر أن + فعل» تعبّر عن اتخاذ قرار.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن «قررت أن».' },
  },
  {
    id: 'mecca-a2-ar-language-review-3-purpose', type: 'fill-blanks', title: 'الهدف',
    instructions: 'أكمل التركيب.', question: 'ما الحرف الذي يبيّن الهدف؟',
    fillBlanksText: 'ذهبت إلى المكتبة [blank]أدرس.', correctAnswer: 'ل',
    explanation: 'لام التعليل مع الفعل يمكن أن تبيّن الهدف.',
    feedback: { correct: 'صحيح.', incorrect: 'استعمل لام التعليل.' },
  },
  {
    id: 'mecca-a2-ar-language-review-4-duty-purpose', type: 'drag-drop', title: 'واجب أم هدف؟',
    instructions: 'صنّف العبارات حسب وظيفتها.', question: 'أيها للضرورة وأيها للهدف؟',
    dragDropGroups: [
      { group: 'واجب أو ضرورة', items: ['كان عليه أن يعمل', 'يجب أن نتبع القاعدة'] },
      { group: 'هدف', items: ['ذهب ليتعلم', 'اتصل ليسأل'] },
    ],
    correctAnswer: {
      'واجب أو ضرورة': ['كان عليه أن يعمل', 'يجب أن نتبع القاعدة'],
      'هدف': ['ذهب ليتعلم', 'اتصل ليسأل'],
    },
    explanation: '«كان عليه أن/يجب أن» للضرورة، ولام التعليل للهدف.',
    feedback: { correct: 'صحيح.', incorrect: 'اسأل: هل العبارة واجب أم تجيب عن لماذا؟' },
  },
  {
    id: 'mecca-a2-ar-language-review-5-sequence', type: 'sequencing', title: 'تفكير ثم عمل',
    instructions: 'رتّب الجمل ترتيبًا طبيعيًا.', question: 'كيف تتطور حكاية قصيرة؟',
    sequencingItems: [
      { id: '1', text: 'فكرت في المشكلة.' },
      { id: '2', text: 'قررت أن أتصرف.' },
      { id: '3', text: 'ثم بدأت أعمل.' },
      { id: '4', text: 'وفي النهاية تغير الموقف.' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'ينتقل التسلسل من التفكير إلى القرار والعمل والنتيجة.',
    feedback: { correct: 'صحيح.', incorrect: 'ابدأ بالتفكير واختم بالنتيجة.' },
  },
  {
    id: 'mecca-a2-ar-language-review-6-request-permission', type: 'matching', title: 'الطلب والإذن والرفض',
    instructions: 'صِل كل تركيب بوظيفته.', question: 'ماذا يفعل كل تركيب؟',
    matchingPairs: [
      { left: 'طلب من + شخص + أن', right: 'طلب القيام بفعل' },
      { left: 'سمح لـ + شخص + أن', right: 'إعطاء الإذن' },
      { left: 'أمر + شخص + أن', right: 'إعطاء تعليم أو أمر' },
      { left: 'رفض أن + فعل', right: 'عدم قبول القيام بالفعل' },
    ],
    correctAnswer: {
      'طلب من + شخص + أن': 'طلب القيام بفعل',
      'سمح لـ + شخص + أن': 'إعطاء الإذن',
      'أمر + شخص + أن': 'إعطاء تعليم أو أمر',
      'رفض أن + فعل': 'عدم قبول القيام بالفعل',
    },
    explanation: 'تميّز هذه التراكيب بين الطلب والإذن والأمر والرفض.',
    feedback: { correct: 'صحيح.', incorrect: 'ركّز على طلب وسمح وأمر ورفض.' },
  },
  {
    id: 'mecca-a2-ar-language-review-7-condition', type: 'fill-blanks', title: 'الشرط والنتيجة',
    instructions: 'أكمل النتيجة المستقبلية.', question: 'ما الأداة المناسبة؟',
    fillBlanksText: 'إذا تدربت، [blank] تتحسن.', correctAnswer: 'سوف',
    explanation: 'يمكن ربط الشرط بنتيجة مستقبلية باستعمال سوف أو السين.',
    feedback: { correct: 'صحيح.', incorrect: 'الجملة الثانية تحتاج إلى علامة المستقبل.' },
  },
  {
    id: 'mecca-a2-ar-language-review-8-fairness', type: 'multiple-choice', title: 'تقييم عادل',
    instructions: 'اختر الجملة التي تقيّم سلوكًا غير عادل.', question: 'أي جملة تتضمن تقييمًا؟',
    options: ['ليس من العدل الحكم على الناس بسبب لون البشرة.', 'كان الناس في السوق.', 'بدأوا يمشون.'], correctAnswer: 0,
    explanation: '«ليس من العدل + مصدر» تقيّم سلوكًا بأنه غير عادل.',
    feedback: { correct: 'صحيح.', incorrect: 'ابحث عن لغة تقييم السلوك.' },
  },
  {
    id: 'mecca-a2-ar-language-review-9-habit', type: 'true-false', title: 'عادة في الماضي',
    instructions: 'حدد هل العبارة صحيحة.', question: '«كان + فعل مضارع» يمكن أن يصف عادة متكررة في الماضي.',
    correctAnswer: true,
    explanation: 'يظهر هذا النمط في وصف الأعمال والعادات المتكررة.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع لغة العادات في الماضي.' },
  },
  {
    id: 'mecca-a2-ar-language-review-10-transfer', type: 'reflection', title: 'استخدم اللغة يوميًا',
    instructions: 'اكتب أو قل أربع جمل A2 في موقف جديد من المدرسة أو الأسرة أو النادي. لا تعِد سرد القصة.',
    question: 'هل تستطيع نقل أربعة تراكيب مختلفة إلى موقف جديد؟', correctAnswer: null,
    explanation: 'الهدف استعمال لغة الكتاب بصورة ذات معنى.',
    feedback: { correct: 'استخدم أربعة تراكيب مختلفة.', incorrect: '' },
    discussionPrompts: [
      { question: 'اذكر سببًا بـ«لأن».', mode: 'Individual' },
      { question: 'اذكر واجبًا ماضيًا بـ«كان علي أن».', mode: 'Individual' },
      { question: 'استعمل طلبًا أو إذنًا.', mode: 'Pair' },
      { question: 'اكتب جملة عن العدل.', mode: 'Pair' },
    ],
  },
];
