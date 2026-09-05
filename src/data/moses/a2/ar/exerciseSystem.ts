import type { Exercise } from '../../../../types';
import { mosesA2QuickChallengesAr } from './exercises';

/** نظام الأنشطة العربي المصقول لموسى A2. */
export const mosesA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...mosesA2QuickChallengesAr,
  1: {
    id: 'moses-a2-ar-quick-1', type: 'matching', title: 'القوة والإيمان', instructions: 'صِل كل تفصيل من الفصل الأول بالفكرة الصحيحة.', question: 'ما التناقض الذي يبنيه الفصل الأول؟',
    matchingPairs: [
      { left: 'ادعاء فرعون', right: 'قال إنه إله' }, { left: 'حكم فرعون', right: 'عامل الناس بظلم وقسوة' },
      { left: 'بنو إسرائيل', right: 'آمنوا بالله الواحد' }, { left: 'حالهم', right: 'عاشوا تحت ظلم فرعون' }
    ],
    correctAnswer: { 'ادعاء فرعون': 'قال إنه إله', 'حكم فرعون': 'عامل الناس بظلم وقسوة', 'بنو إسرائيل': 'آمنوا بالله الواحد', 'حالهم': 'عاشوا تحت ظلم فرعون' },
    explanation: 'يقابل الفصل بين ادعاء فرعون وحكمه الظالم وبين إيمان بني إسرائيل وحالهم الصعب.', feedback: { correct: 'صحيح.', incorrect: 'افصل بين ادعاء فرعون وأفعاله وبين إيمان بني إسرائيل وحالهم.' }
  },
  6: {
    id: 'moses-a2-ar-quick-6', type: 'matching', title: 'الخطأ والشعور والدعاء', instructions: 'صِل كل تفصيل بما حدث في الفصل السادس.', question: 'كيف استجاب موسى للحادثة غير المقصودة؟',
    matchingPairs: [{ left: 'الحادثة', right: 'تسبب موسى في موت رجل من غير قصد' }, { left: 'شعوره', right: 'حزن وندم' }, { left: 'دعاؤه', right: 'طلب من الله أن يغفر له' }],
    correctAnswer: { 'الحادثة': 'تسبب موسى في موت رجل من غير قصد', 'شعوره': 'حزن وندم', 'دعاؤه': 'طلب من الله أن يغفر له' },
    explanation: 'يفصل الفصل بين الفعل غير المقصود وبين ندم موسى وطلبه المغفرة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع الفصل من الحادثة إلى شعور موسى ثم دعائه.' }
  },
  11: {
    id: 'moses-a2-ar-quick-11', type: 'matching', title: 'الآيات والرفيق والمهمة', instructions: 'صِل كل تفصيل من الفصل الحادي عشر بدوره.', question: 'ما الذي هيأ موسى للمهمة؟',
    matchingPairs: [{ left: 'اليد البيضاء', right: 'آية من آيات قدرة الله' }, { left: 'هارون', right: 'أخو موسى ورفيقه' }, { left: 'القصر', right: 'المكان الذي ذهب إليه موسى وهارون لتبليغ الرسالة' }, { left: 'الرسالة', right: 'الله هو الأقوى' }],
    correctAnswer: { 'اليد البيضاء': 'آية من آيات قدرة الله', 'هارون': 'أخو موسى ورفيقه', 'القصر': 'المكان الذي ذهب إليه موسى وهارون لتبليغ الرسالة', 'الرسالة': 'الله هو الأقوى' },
    explanation: 'يجمع الفصل بين آية ورفيق ووجهة ورسالة.', feedback: { correct: 'صحيح.', incorrect: 'ابحث عن الآية والرفيق والوجهة والرسالة.' }
  },
  13: {
    id: 'moses-a2-ar-quick-13', type: 'matching', title: 'الآية واستجابتان', instructions: 'صِل كل تفصيل بما حدث.', question: 'كيف أدت الآية إلى استجابتين مختلفتين؟',
    matchingPairs: [{ left: 'عصا موسى', right: 'تحولت إلى ثعبان ضخم' }, { left: 'الثعبان الضخم', right: 'ابتلع ما صنعه السحرة' }, { left: 'السحرة', right: 'آمنوا برب موسى وهارون' }, { left: 'فرعون', right: 'بقي متكبرًا واستمر في إيذاء المؤمنين' }],
    correctAnswer: { 'عصا موسى': 'تحولت إلى ثعبان ضخم', 'الثعبان الضخم': 'ابتلع ما صنعه السحرة', 'السحرة': 'آمنوا برب موسى وهارون', 'فرعون': 'بقي متكبرًا واستمر في إيذاء المؤمنين' },
    explanation: 'يربط الفصل بين الآية وإيمان السحرة واستمرار فرعون في الرفض.', feedback: { correct: 'صحيح.', incorrect: 'اتبع المشهد من العصا إلى الاستجابتين.' }
  }
};

export const mosesA2KnowledgeCheckExercisesArPolished: Exercise[] = [
  { id: 'moses-a2-ar-kc-1', type: 'multiple-choice', title: 'فرعون والحلم', instructions: 'اختر الصلة التي يدعمها الفصلان 1–2.', question: 'ما الذي يربط حكم فرعون برده على الحلم؟', options: ['الخوف والقسوة قاداه إلى ظلم بني إسرائيل وإصدار أمر جديد', 'صار رحيمًا وأطلق الجميع', 'غادر إلى مدين'], correctAnswer: 0, explanation: 'يعرض الفصلان حكم فرعون القاسي والخوف الذي أدى إلى أمره.', feedback: { correct: 'صحيح.', incorrect: 'قارن وصف فرعون في الفصل الأول بأمره في الفصل الثاني.' } },
  { id: 'moses-a2-ar-kc-2', type: 'true-false', title: 'النيل والقصر', instructions: 'حدد صحة العبارة بحسب الفصلين 3–4.', question: 'اتبعت أم موسى أمر الله، ثم وصل التابوت إلى القصر حيث أرادت آسية رعاية الطفل.', correctAnswer: true, explanation: 'يربط الفصلان رحلة النيل برعاية آسية.', feedback: { correct: 'صحيح.', incorrect: 'اتبع التابوت من الأم إلى القصر.' } },
  { id: 'moses-a2-ar-kc-3', type: 'multiple-choice', title: 'النشأة والخطأ', instructions: 'اختر العبارة الصحيحة بحسب الفصلين 5–6.', question: 'أي عبارة صحيحة؟', options: ['نشأ موسى شابًا قويًا يساعد الضعفاء ثم ندم بشدة بعد حادثة غير مقصودة', 'صار جنديًا لفرعون', 'غادر مصر قبل أن يكبر'], correctAnswer: 0, explanation: 'يربط الفصلان صفات موسى بالحادثة والندم بعدها.', feedback: { correct: 'صحيح.', incorrect: 'راجع وصف موسى الشاب واستجابته بعد الحادثة.' } },
  { id: 'moses-a2-ar-kc-4', type: 'true-false', title: 'مدين والبئر', instructions: 'حدد صحة العبارة بحسب الفصلين 7–8.', question: 'وصل موسى إلى مدين متعبًا وعطشان، ثم وجد الماء وساعد فتاتين عند البئر.', correctAnswer: true, explanation: 'ينتقل الفصلان من الوصول والحاجة إلى مشهد المساعدة.', feedback: { correct: 'صحيح.', incorrect: 'راجع الوصول إلى مدين ومشهد البئر.' } },
  { id: 'moses-a2-ar-kc-5', type: 'multiple-choice', title: 'حياة جديدة والنداء', instructions: 'اختر الصلة التي يدعمها الفصلان 9–10.', question: 'ماذا حدث بعد أن بنى موسى حياة في مدين؟', options: ['قرر العودة نحو مصر ثم كلمه الله على الجبل', 'صار ملك مدين', 'بقي عند البئر دائمًا'], correctAnswer: 0, explanation: 'ينتهي الفصل التاسع بقرار العودة، ويأتي النداء في الفصل العاشر.', feedback: { correct: 'صحيح.', incorrect: 'اربط نهاية الفصل التاسع بالفصل العاشر.' } },
  { id: 'moses-a2-ar-kc-6', type: 'multiple-choice', title: 'المهمة والآيات', instructions: 'اختر الإجابة التي يدعمها الفصلان 11–12.', question: 'ماذا فعل موسى وهارون في القصر؟', options: ['بلّغا رسالة الله وأظهرا الآيات', 'طلبا عملًا في مدين', 'بنيا سفينة'], correctAnswer: 0, explanation: 'يهيئ الفصل الحادي عشر للمهمة ويعرض الفصل الثاني عشر المواجهة والآيات.', feedback: { correct: 'صحيح.', incorrect: 'راجع المهمة والآيات في القصر.' } },
  { id: 'moses-a2-ar-kc-7', type: 'true-false', title: 'السحرة والخروج', instructions: 'حدد صحة العبارة بحسب الفصلين 13–14.', question: 'آمن السحرة بعد الآية، لكن فرعون بقي متكبرًا، ثم قاد موسى قومه للخروج ليلًا.', correctAnswer: true, explanation: 'يربط الفصلان الإيمان واستمرار الرفض ثم الخروج السري.', feedback: { correct: 'صحيح.', incorrect: 'قارن نهاية الفصل 13 بالخروج في الفصل 14.' } },
  { id: 'moses-a2-ar-kc-8', type: 'multiple-choice', title: 'البحر والنهاية', instructions: 'اختر الإجابة التي يدعمها الفصلان 15–16.', question: 'كيف تطورت النجاة الأخيرة؟', options: ['فتح الله طريقًا في البحر لقوم موسى وانتهت مطاردة فرعون في البحر', 'عاد موسى إلى القصر', 'رجع القوم إلى مدين'], correctAnswer: 0, explanation: 'يكمل الفصلان النجاة عبر البحر ونهاية المطاردة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع الطريق في البحر والمطاردة خلفهم.' } }
];

export const mosesA2VocabularyChallengePairsArPolished = [
  { word: 'قاسٍ', meaning: 'شديد القسوة ولا يعامل الآخرين برحمة' },
  { word: 'يحمي', meaning: 'يحفظ شخصًا من الخطر' },
  { word: 'يغفر', meaning: 'يعفو عن الخطأ' },
  { word: 'هداية', meaning: 'إرشاد إلى الطريق الصحيح' },
  { word: 'غريب', meaning: 'شخص جديد أو غير معروف في مكان' },
  { word: 'انشق', meaning: 'انفتح أو انفصل إلى أجزاء' }
];

export const mosesA2FinalChallengeExercisesArPolished: Exercise[] = [
  { id: 'moses-a2-ar-final-1', type: 'multiple-choice', title: 'الظلم والخطر', instructions: 'اختر الصلة التي يدعمها الفصلان 1–2.', question: 'لماذا ازداد الخطر على بني إسرائيل؟', options: ['زاد خوف فرعون قسوته وأدى إلى أمر جديد', 'صار موسى ملكًا', 'غادرت آسية مصر'], correctAnswer: 0, explanation: 'تربط البداية بين خوف فرعون وظلمه وأمره القاسي.', feedback: { correct: 'صحيح.', incorrect: 'استخدم الفصلين 1–2.' } },
  { id: 'moses-a2-ar-final-2', type: 'multiple-choice', title: 'الثقة والرعاية', instructions: 'اختر الصلة التي يدعمها الفصلان 3–4.', question: 'أي زوج يربط الفصلين بصورة صحيحة؟', options: ['اتبعت أم موسى أمر الله ثم اختارت آسية رعاية الطفل', 'ذهب فرعون إلى مدين وصار موسى ساحرًا', 'وجد هارون التابوت وأعاده'], correctAnswer: 0, explanation: 'تقود رحلة النيل إلى مشهد الرعاية في القصر.', feedback: { correct: 'صحيح.', incorrect: 'اتبع الطفل من أمه إلى آسية.' } },
  { id: 'moses-a2-ar-final-3', type: 'true-false', title: 'الصفة والندم', instructions: 'حدد صحة العبارة بحسب الفصلين 5–6.', question: 'وصف موسى بأنه مستعد لمساعدة الضعفاء، وبعد الحادثة غير المقصودة ندم وطلب المغفرة من الله.', correctAnswer: true, explanation: 'التفصيلان مذكوران في الفصلين.', feedback: { correct: 'صحيح.', incorrect: 'راجع صفات موسى واستجابته بعد الحادثة.' } },
  { id: 'moses-a2-ar-final-4', type: 'matching', title: 'مدين: الحاجة والمساعدة والحياة الجديدة', instructions: 'صِل كل مرحلة من الفصول 7–9 بدورها.', question: 'كيف تغير مدين وضع موسى؟', matchingPairs: [{ left: 'الوصول', right: 'كان موسى متعبًا وبحث عن الماء' }, { left: 'البئر', right: 'ساعد الفتاتين' }, { left: 'بيت شعيب', right: 'وجد عملًا وبدأ حياة جديدة' }], correctAnswer: { 'الوصول': 'كان موسى متعبًا وبحث عن الماء', 'البئر': 'ساعد الفتاتين', 'بيت شعيب': 'وجد عملًا وبدأ حياة جديدة' }, explanation: 'تنتقل الفصول من الحاجة إلى المساعدة ثم إلى حياة مستقرة.', feedback: { correct: 'صحيح.', incorrect: 'اتبع مراحل مدين الثلاث.' } },
  { id: 'moses-a2-ar-final-5', type: 'sequencing', title: 'النداء والمهمة', instructions: 'رتّب أحداث الفصلين 10–11.', question: 'كيف انتقل موسى من مشهد الجبل إلى المهمة؟', sequencingItems: [{ id: '1', text: 'رأى موسى النار' }, { id: '2', text: 'كلم الله موسى' }, { id: '3', text: 'أُعطي موسى الآيات' }, { id: '4', text: 'ذهب هارون مع موسى نحو القصر' }], correctAnswer: ['1','2','3','4'], explanation: 'هيأ النداء والآيات موسى للمهمة.', feedback: { correct: 'صحيح.', incorrect: 'استخدم الفصلين 10–11.' } },
  { id: 'moses-a2-ar-final-6', type: 'multiple-choice', title: 'فرعون والسحرة', instructions: 'اختر المقارنة التي يدعمها الفصلان 12–13.', question: 'كيف اختلف رد فرعون عن رد السحرة؟', options: ['رفض فرعون الآيات ثم آمن السحرة لاحقًا', 'آمن الجميع مباشرة', 'غادر الجميع إلى مدين'], correctAnswer: 0, explanation: 'تتطور المواجهة إلى استجابتين متعاكستين.', feedback: { correct: 'صحيح.', incorrect: 'قارن الفصلين 12 و13.' } },
  { id: 'moses-a2-ar-final-7', type: 'true-false', title: 'الخروج من مصر', instructions: 'حدد صحة العبارة بحسب الفصل 14.', question: 'قاد موسى قومه للخروج من مصر ليلًا بسرية لأن ظلم فرعون وجيشه بقيا خطرًا عليهم.', correctAnswer: true, explanation: 'يعرض الفصل الخروج نجاة من الظلم المستمر.', feedback: { correct: 'صحيح.', incorrect: 'راجع سبب الخروج ووقته.' } },
  { id: 'moses-a2-ar-final-8', type: 'fill-blanks', title: 'الطريق في البحر', instructions: 'أكمل الكلمة الأساسية من الفصل 15.', question: 'أكمل الجملة.', fillBlanksText: 'فتح الله [blank] في البحر لموسى وقومه.', correctAnswer: 'طريقًا', explanation: 'يصف الفصل طريقًا في البحر.', feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى مشهد انشقاق البحر.' } },
  { id: 'moses-a2-ar-final-9', type: 'multiple-choice', title: 'ادعاء فرعون الأخير', instructions: 'اختر التفصيل المذكور في الفصل 16.', question: 'ماذا ادعى فرعون قبل أن يتبع الطريق المفتوح؟', options: ['ادعى أنه أمر البحر أن ينفتح', 'قال إن موسى يحكم مصر', 'قال إن السحرة فتحوا البحر'], correctAnswer: 0, explanation: 'يذكر الفصل ادعاء فرعون قبل استمرار المطاردة.', feedback: { correct: 'صحيح.', incorrect: 'اقرأ كلام فرعون في بداية الفصل الأخير.' } },
  { id: 'moses-a2-ar-final-10', type: 'sequencing', title: 'محطات القصة كاملة', instructions: 'رتّب المحطات الكبرى.', question: 'أي ترتيب يمثل قصة موسى A2 من البداية إلى النهاية؟', sequencingItems: [{ id: '1', text: 'وصل موسى الطفل إلى القصر' }, { id: '2', text: 'غادر موسى مصر ووصل إلى مدين' }, { id: '3', text: 'كلم الله موسى وأعطاه الآيات' }, { id: '4', text: 'واجه موسى وهارون فرعون' }, { id: '5', text: 'قاد موسى قومه للخروج من مصر' }, { id: '6', text: 'انشق البحر وانتهت المطاردة الأخيرة' }], correctAnswer: ['1','2','3','4','5','6'], explanation: 'تغطي هذه المحطات القصة من الطفولة إلى النجاة الأخيرة.', feedback: { correct: 'صحيح.', incorrect: 'استخدم مراحل القصة الكبرى.' } }
];
