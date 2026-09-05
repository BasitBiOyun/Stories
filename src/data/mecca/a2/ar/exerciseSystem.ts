import type { Exercise } from '../../../../types';
import { meccaA2QuickChallengesAr } from './exercises';

/** نظام الأنشطة العربي المصقول والفعّال لبلال / مكة A2. */
export const meccaA2QuickChallengesArPolished: Record<number, Exercise> = {
  ...meccaA2QuickChallengesAr,
};

export const meccaA2KnowledgeCheckExercisesArPolished: Exercise[] = [
  {
    id: 'mecca-a2-ar-kc-1', type: 'multiple-choice', title: 'البداية والمجتمع', instructions: 'اختر الإجابة التي يدعمها الفصلان 1–2.',
    question: 'أي عبارة تجمع بداية بلال بالمجتمع الذي عاش فيه؟',
    options: ['ولد بلال في مكة في العبودية، وتصف القصة فجوة كبيرة بين الأغنياء والفقراء', 'ولد بلال تاجرًا غنيًا في مجتمع متساوٍ تمامًا', 'ولد بلال في المدينة بعد الهجرة'], correctAnswer: 0,
    explanation: 'يقدم الفصل الأول بداية بلال، ويصف الفصل الثاني عدم المساواة في المجتمع.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع الفصلين 1–2.' },
  },
  {
    id: 'mecca-a2-ar-kc-2', type: 'true-false', title: 'القوة والحياة اليومية', instructions: 'حدد هل العبارة توافق الفصلين 3–4.',
    question: 'كان أمية غنيًا قويًا، بينما كان بلال يعمل عملًا شاقًا ويُعامل من دون احترام.',
    correctAnswer: true,
    explanation: 'يربط الفصلان بين قوة أمية وحياة بلال اليومية الصعبة.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع مكانة أمية وحياة بلال اليومية.' },
  },
  {
    id: 'mecca-a2-ar-kc-3', type: 'multiple-choice', title: 'الرسالة والأسئلة', instructions: 'اختر الإجابة التي يدعمها الفصلان 5–6.',
    question: 'ماذا فعل بلال بعد أن سمع الرسالة الجديدة عن العبادة والعدل والمساواة؟',
    options: ['فكر فيها وذهب سرًا إلى أبي بكر ليسأل', 'صار قائدًا غنيًا فورًا', 'توقف عن التفكير في الدين'], correctAnswer: 0,
    explanation: 'يقدم الفصل الخامس الرسالة، ويعرض الفصل السادس تفكير بلال وزيارته السرية لأبي بكر.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع القصة من سماع الرسالة إلى الزيارة السرية.' },
  },
  {
    id: 'mecca-a2-ar-kc-4', type: 'true-false', title: 'القرار والضغط', instructions: 'حدد هل العبارة توافق الفصلين 7–8.',
    question: 'دخل بلال في الإسلام مع أنه توقع الصعوبة، ثم رفض مدح الأصنام تحت الضغط.',
    correctAnswer: true,
    explanation: 'يعرض الفصل السابع قرار بلال، ويعرض الفصل الثامن رفضه تحت الضغط.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع قرار بلال وردّه على أمية.' },
  },
  {
    id: 'mecca-a2-ar-kc-5', type: 'multiple-choice', title: 'العدل والحرية', instructions: 'اختر الإجابة التي يدعمها الفصلان 9–10.',
    question: 'كيف استجاب أبو بكر لوضع بلال؟',
    options: ['سأل عن الظلم، وتفاوض مع أمية، واشترى بلالًا ثم حرره', 'طلب من بلال العودة إلى الأصنام', 'طلب من بلال أن يعمل لأمية مدة أطول'], correctAnswer: 0,
    explanation: 'ينتقل الفصلان من الاعتراض على الظلم إلى شراء بلال وتحريره.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع أسئلة أبي بكر وما فعله بعد الاتفاق.' },
  },
  {
    id: 'mecca-a2-ar-kc-6', type: 'multiple-choice', title: 'دور عام', instructions: 'اختر الحدث الذي يدعمه الفصل 11.',
    question: 'ما المسؤولية الجديدة التي حصل عليها بلال بعد الهجرة؟',
    options: ['اختير لينادي الناس إلى الصلاة', 'عاد خادمًا لأمية', 'قاد قافلة تجارية'], correctAnswer: 0,
    explanation: 'يصف الفصل الحادي عشر دور بلال المحترم في الأذان.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع جزء الأذان في الفصل 11.' },
  },
  {
    id: 'mecca-a2-ar-kc-7', type: 'true-false', title: 'الأذان والمساواة', instructions: 'حدد هل العبارة توافق الفصل 12.',
    question: 'يربط الفصل الثاني عشر بين تفصيل في أذان الصبح وتعليم أن الناس لا يُحتقرون بسبب لون البشرة.',
    correctAnswer: true,
    explanation: 'الفكرتان مذكورتان في الفصل الثاني عشر.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع بداية الفصل 12 ونهايته.' },
  },
  {
    id: 'mecca-a2-ar-kc-8', type: 'multiple-choice', title: 'الحياة اللاحقة والدرس الأخير', instructions: 'اختر الإجابة التي يدعمها الفصل 13.',
    question: 'أي تفصيل يوافق نهاية القصة؟',
    options: ['اشتد حزن بلال بعد وفاة النبي ﷺ، ثم غادر لاحقًا، ويختم الفصل بقيمة القلب والعمل الصالح', 'عاد بلال إلى أمية والعبودية', 'صار بلال حاكم مكة'], correctAnswer: 0,
    explanation: 'يصف الفصل الأخير حزن بلال ورحيله والدرس الأخير عن قيمة الإنسان.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع أحداث الفصل الأخير ورسالة ختامه.' },
  },
];

export const meccaA2VocabularyChallengePairsArPolished = [
  { word: 'العدل', meaning: 'معاملة الناس بإنصاف' },
  { word: 'الحرية', meaning: 'حالة الإنسان الذي ليس عبدًا أو سجينًا' },
  { word: 'سرًّا', meaning: 'بطريقة خفية' },
  { word: 'رفض', meaning: 'قال لا ولم يوافق على فعل شيء' },
  { word: 'أُنقذ', meaning: 'نُجّي من خطر أو أذى' },
  { word: 'محترم', meaning: 'يُعامل بالتقدير والأهمية' },
];

export const meccaA2FinalChallengeExercisesArPolished: Exercise[] = [
  {
    id: 'mecca-a2-ar-final-1', type: 'multiple-choice', title: 'بلال ومكة', instructions: 'اختر الإجابة التي يدعمها الفصلان 1–2.',
    question: 'ما التناقض الذي يظهر في بداية الكتاب؟',
    options: ['كان بلال قليل القوة الاجتماعية، وكانت مكة شديدة التفاوت بين الأغنياء والفقراء', 'بدأ بلال أغنى رجل في مجتمع متساوٍ', 'بدأت القصة في المدينة بعد الهجرة'], correctAnswer: 0,
    explanation: 'تثبت الفصول الأولى مكانة بلال والمجتمع غير المتساوي حوله.',
    feedback: { correct: 'صحيح.', incorrect: 'استخدم الفصلين 1–2.' },
  },
  {
    id: 'mecca-a2-ar-final-2', type: 'true-false', title: 'أمية وبلال', instructions: 'حدد هل العبارة توافق الفصلين 3–4.',
    question: 'كان لأمية مال ونفوذ، بينما كانت حياة بلال اليومية مليئة بالعمل الشاق وسوء المعاملة.',
    correctAnswer: true,
    explanation: 'يتطور هذا التناقض في الفصلين 3–4.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع فصلي القوة والحياة اليومية.' },
  },
  {
    id: 'mecca-a2-ar-final-3', type: 'sequencing', title: 'من السماع إلى القرار', instructions: 'رتب تطورات الفصول 5–7.',
    question: 'كيف انتقل بلال من سماع الرسالة إلى اختيار الإسلام؟',
    sequencingItems: [
      { id: '1', text: 'سمع بلال أفكارًا عن العبادة والعدل والمساواة' },
      { id: '2', text: 'فكر بلال في الرسالة بعمق' },
      { id: '3', text: 'ذهب سرًا إلى أبي بكر وسأل' },
      { id: '4', text: 'دخل بلال في الإسلام مع توقعه الصعوبة' },
    ],
    correctAnswer: ['1', '2', '3', '4'],
    explanation: 'تعرض الفصول 5–7 السماع والتفكير والتعلّم ثم القرار.',
    feedback: { correct: 'صحيح.', incorrect: 'اتبع الفصول 5 ثم 6 ثم 7.' },
  },
  {
    id: 'mecca-a2-ar-final-4', type: 'multiple-choice', title: 'تحت الضغط', instructions: 'اختر الإجابة التي يدعمها الفصل 8.',
    question: 'ماذا فعل بلال عندما حاول أمية أن يجعله يمدح الأصنام؟',
    options: ['رفض واستمر يقول إن الله واحد', 'وافق فورًا', 'طلب العودة إلى اعتقاده السابق'], correctAnswer: 0,
    explanation: 'يعرض الفصل الثامن ثبات بلال تحت الضغط.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع جواب بلال في نهاية الفصل 8.' },
  },
  {
    id: 'mecca-a2-ar-final-5', type: 'matching', title: 'العدل والإنقاذ والحرية', instructions: 'صل كل فعل من الفصلين 9–10 بنتيجته.',
    question: 'كيف غيّرت أفعال أبي بكر الموقف؟',
    matchingPairs: [
      { left: 'سأل أبو بكر أمية', right: 'تحدى ظلم معاقبة بلال بسبب إيمانه' },
      { left: 'اشترى أبو بكر بلالًا', right: 'أُنقذ بلال من أمية' },
      { left: 'حرر أبو بكر بلالًا', right: 'لم يعد بلال عبدًا' },
    ],
    correctAnswer: {
      'سأل أبو بكر أمية': 'تحدى ظلم معاقبة بلال بسبب إيمانه',
      'اشترى أبو بكر بلالًا': 'أُنقذ بلال من أمية',
      'حرر أبو بكر بلالًا': 'لم يعد بلال عبدًا',
    },
    explanation: 'ينتقل الفصلان من الاعتراض على الظلم إلى الإنقاذ والحرية.',
    feedback: { correct: 'صحيح.', incorrect: 'استخدم الفصلين 9–10.' },
  },
  {
    id: 'mecca-a2-ar-final-6', type: 'true-false', title: 'دور تغيّر', instructions: 'حدد هل العبارة توافق الفصل 11.',
    question: 'بعد الهجرة أصبح في قصة بلال دور عام محترم، وهو النداء إلى الصلاة.',
    correctAnswer: true,
    explanation: 'يصف الفصل 11 دور بلال في الأذان.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع الفصل 11.' },
  },
  {
    id: 'mecca-a2-ar-final-7', type: 'multiple-choice', title: 'تعليم المساواة', instructions: 'اختر الإجابة التي يدعمها الفصل 12.',
    question: 'أي فكرة توافق تعليم المساواة في الفصل؟',
    options: ['لون البشرة لا يجعل إنسانًا أفضل من إنسان آخر', 'المال يجعل الإنسان أعلى قيمة', 'القادة فقط يستحقون الاحترام'], correctAnswer: 0,
    explanation: 'يرفض الفصل 12 الحكم على قيمة الإنسان بلون البشرة.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع جزء خطبة الوداع.' },
  },
  {
    id: 'mecca-a2-ar-final-8', type: 'fill-blanks', title: 'الدرس الأخير', instructions: 'أكمل الكلمة الأساسية.',
    question: 'أكمل العبارة.', fillBlanksText: 'المهم هو القلب والأعمال [blank].', correctAnswer: 'الصالحة',
    explanation: 'ينتهي الفصل 13 بالتركيز على القلب والأعمال الصالحة.',
    feedback: { correct: 'صحيح.', incorrect: 'ارجع إلى الجملة الأخيرة في الفصل 13.' },
  },
  {
    id: 'mecca-a2-ar-final-9', type: 'multiple-choice', title: 'حياة بلال اللاحقة', instructions: 'اختر التفصيل الذي يدعمه الفصل 13.',
    question: 'ماذا حدث عندما وجد بلال البقاء في المدينة مؤلمًا جدًا؟',
    options: ['طلب الرحيل وذهب لاحقًا إلى دمشق', 'عاد إلى بيت أمية', 'ترك إيمانه'], correctAnswer: 0,
    explanation: 'يصف الفصل الأخير رحيله وحياته اللاحقة.',
    feedback: { correct: 'صحيح.', incorrect: 'راجع منتصف الفصل 13.' },
  },
  {
    id: 'mecca-a2-ar-final-10', type: 'sequencing', title: 'محطات القصة كاملة', instructions: 'رتب المحطات الكبرى.',
    question: 'أي ترتيب يمثل قصة بلال من بدايتها إلى نهايتها؟',
    sequencingItems: [
      { id: '1', text: 'يعيش بلال في العبودية داخل مكة غير المتساوية' },
      { id: '2', text: 'يسمع بلال الرسالة الجديدة ويبحث عن إجابات' },
      { id: '3', text: 'يدخل بلال في الإسلام ويثبت تحت الضغط' },
      { id: '4', text: 'يشتري أبو بكر بلالًا ويحرره' },
      { id: '5', text: 'يحصل بلال على دور عام في النداء إلى الصلاة' },
      { id: '6', text: 'تربط الفصول الأخيرة بين المساواة والحزن وقيمة العمل الصالح' },
    ],
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'تغطي هذه المحطات تطور القصة عبر الفصول 1–13.',
    feedback: { correct: 'صحيح.', incorrect: 'استخدم البداية والقرار والحرية والأذان والنهاية كنقاط ثابتة.' },
  },
];
