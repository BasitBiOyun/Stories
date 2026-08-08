import type { Exercise, PageData } from '../../../types';
import { mosesB2PagesAr } from './ar/pages';

type VocabularyEntry = NonNullable<PageData['vocabulary']>[number];

type ArabicQuestionSpec = {
  chapterId: number;
  title: string;
  question: string;
  options: [string, string, string];
  correctAnswer: 0 | 1 | 2;
  explanation: string;
  retry: string;
};

export const mosesB2GoldContractAr = {
  storyIds: Array.from({ length: 24 }, (_, index) => index + 1),
  knowledgeCheckPageId: 25,
  vocabularyPageId: 26,
  glossaryPageIds: [27, 28] as const,
  reviewPageId: 29,
  finalChallengePageId: 30,
  knowledgeQuestions: 8,
  reviewQuestions: 8,
  finalQuestions: 10,
} as const;

const normalize = (value: string): string => value
  .toLowerCase()
  .normalize('NFKD')
  .replace(/\p{M}/gu, '')
  .replace(/[^\p{L}\p{N}]+/gu, ' ')
  .trim();

const rotateObjectiveOptions = (exercise: Exercise): Exercise => {
  if (
    exercise.type !== 'multiple-choice'
    || !exercise.options
    || exercise.options.length < 2
    || typeof exercise.correctAnswer !== 'number'
  ) return exercise;

  const shift = [...exercise.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % exercise.options.length;
  if (!shift) return exercise;

  return {
    ...exercise,
    options: [...exercise.options.slice(-shift), ...exercise.options.slice(0, -shift)],
    correctAnswer: (exercise.correctAnswer + shift) % exercise.options.length,
  };
};

const buildQuestion = (spec: ArabicQuestionSpec, id: string): Exercise => rotateObjectiveOptions({
  id,
  type: 'multiple-choice',
  title: spec.title,
  instructions: 'اختر أفضل إجابة بالاعتماد على الدليل الوارد في الفصل.',
  question: spec.question,
  options: [...spec.options],
  correctAnswer: spec.correctAnswer,
  explanation: spec.explanation,
  feedback: {
    correct: `صحيح. ${spec.explanation}`,
    incorrect: spec.retry,
  },
});

export const mosesB2QuestionSpecsAr: ArabicQuestionSpec[] = [
  {
    chapterId: 1,
    title: 'الخلفية والسبب والنتيجة',
    question: 'لماذا بدأ الحكام المصريون ينظرون إلى تزايد عدد بني إسرائيل بوصفه تهديداً سياسياً؟',
    options: [
      'لأن عددهم كان يزداد بسرعة، وخشي الحكام أن يتحولوا إلى طبقة حاكمة.',
      'لأنهم غادروا مصر نهائياً واستقروا جميعاً في كنعان.',
      'لأنهم سيطروا على النيل ومنعوا المصريين من استخدام مياهه.',
    ],
    correctAnswer: 0,
    explanation: 'يربط الفصل بين الزيادة السريعة في عدد بني إسرائيل وبين خوف الحكام من تحولهم إلى قوة أو طبقة حاكمة.',
    retry: 'ارجع إلى نهاية الفصل وحدد العلاقة بين النمو السكاني وخوف الحكام من فقدان السيطرة.',
  },
  {
    chapterId: 2,
    title: 'الحذر التاريخي',
    question: 'أي عبارة تحافظ بصورة أدق على درجة اليقين التي يستخدمها الفصل عند الحديث عن زمن الخروج وهوية الفرعون الذي غرق؟',
    options: [
      'التاريخ الدقيق غير معلوم، والفصل ينقل عن المصادر ترجيح وقوع الخروج في أوائل القرن الثالث عشر قبل الميلاد ويرجح رمسيس الثاني.',
      'الفصل يثبت تاريخاً واحداً قطعياً للخروج ويحدد رمسيس الثاني دون أي احتمال أو خلاف.',
      'الفصل ينفي وجود أي مصدر يربط الخروج بالقرن الثالث عشر قبل الميلاد.',
    ],
    correctAnswer: 0,
    explanation: 'النص يستخدم عبارات مثل بحسب المصادر ومعظم المصادر وعلى الأرجح، ويذكر أن التاريخ الدقيق للخروج غير معروف.',
    retry: 'ابحث في الفصل عن عبارات الترجيح وعدم اليقين، ولا تحول الترجيح إلى حقيقة قطعية.',
  },
  {
    chapterId: 3,
    title: 'الموارد والسلطة',
    question: 'كيف يربط الفصل بين السيطرة على النيل وبين سلطة الفرعون السياسية؟',
    options: [
      'المشروعات الكبرى حول النيل احتاجت إلى إدارة وقوة عمل واسعة، فارتبط التحكم في الموارد والعمل بسلطة مركزية قوية.',
      'جعل النيل الإدارة السياسية غير ضرورية لأن الزراعة لم تحتج إلى تنظيم.',
      'يعرض الفصل سلطة الفرعون بوصفها منفصلة تماماً عن العمل والزراعة والمشروعات.',
    ],
    correctAnswer: 0,
    explanation: 'يربط الفصل بين القنوات والري والنقل، والحاجة إلى قوة عمل كبيرة وإدارة قوية، وبين سلطة الفرعون.',
    retry: 'أعد قراءة الجزء الأخير من الفصل واربط بين قوة العمل والإدارة والسلطة.',
  },
  {
    chapterId: 4,
    title: 'صورة الماء المتكررة',
    question: 'لماذا يمثل الماء رابطاً مهماً داخل هذا الفصل؟',
    options: [
      'ينجو موسى رضيعاً عبر مياه النيل، ثم يربط الفصل ذلك بالنجاة اللاحقة لموسى وقومه عند البحر الأحمر.',
      'يقرر الفصل أن موسى أصبح بحاراً وقضى معظم حياته في الأنهار.',
      'يقول الفصل إن النيل والبحر الأحمر مسطح مائي واحد.',
    ],
    correctAnswer: 0,
    explanation: 'يصل الفصل صراحة بين نجاة موسى في مياه النيل في بداية حياته وبين نجاة قومه لاحقاً عبر البحر الأحمر.',
    retry: 'قارن الجمل الأخيرة من الفصل برحلة الرضيع في النيل.',
  },
  {
    chapterId: 5,
    title: 'الخوف والطغيان',
    question: 'ما علاقة السبب والنتيجة الأساسية في قرار فرعون في هذا الفصل؟',
    options: [
      'الخوف من فقدان العرش دفع فرعون إلى تشديد الإجراءات القاسية ضد بني إسرائيل.',
      'الازدهار الاقتصادي دفع فرعون إلى التخلي عن السيطرة على بني إسرائيل.',
      'طلب آسية من فرعون أن يحرر بني إسرائيل فوراً فاستجاب لها.',
    ],
    correctAnswer: 0,
    explanation: 'يربط الفصل بين خوف فرعون من غلام من بني إسرائيل يهدد عرشه وبين أمره القاسي ضد المواليد.',
    retry: 'حدد أولاً ما الذي خافه فرعون، ثم ما القرار الذي اتخذه بعد ذلك.',
  },
  {
    chapterId: 6,
    title: 'السياسة وقوة العمل',
    question: 'لماذا تغيرت سياسة فرعون من قتل المواليد الذكور كل عام إلى سياسة التناوب بين عام وآخر؟',
    options: [
      'لأن القتل المستمر كان يقلل قوة العمل اللازمة للأعمال الشاقة، فاقترح الخبراء الاقتصاديون التناوب.',
      'لأن فرعون قرر أن الأعمال الشاقة لم تعد مفيدة لاقتصاد مصر.',
      'لأنه أراد أن يصبح بنو إسرائيل أقوى سياسياً من المصريين.',
    ],
    correctAnswer: 0,
    explanation: 'يذكر الفصل أن فرعون بدأ يفقد قوة العمل لأن بني إسرائيل كانوا يقومون بكثير من الأعمال الشاقة، فاقترح الخبراء سياسة التناوب.',
    retry: 'ابحث عن الفقرة التي تجمع بين قوة العمل ورأي الخبراء الاقتصاديين والسياسة الجديدة.',
  },
  {
    chapterId: 7,
    title: 'مقارنة الشخصيات',
    question: 'ما التباين الذي يصنعه موقف آسية من الرضيع موسى داخل قصر فرعون؟',
    options: [
      'رحمتها وإيمانها السري يتباينان مع خوف فرعون واستعماله القهري للسلطة.',
      'يبين موقفها أن قيمها وأولوياتها كانت مطابقة تماماً لقيم فرعون.',
      'كان هدفها الأساسي إعداد الرضيع ليصبح قائداً عسكرياً في جيش فرعون.',
    ],
    correctAnswer: 0,
    explanation: 'يصف الفصل آسية بأنها طيبة القلب ومؤمنة سراً، وهو ما يصنع مقابلة واضحة مع حكم فرعون القائم على الخوف والقهر.',
    retry: 'قارن وصف آسية في هذا الفصل بوصف فرعون في الفصول السابقة.',
  },
  {
    chapterId: 8,
    title: 'الهوية والصراع الأخلاقي',
    question: 'لماذا يعيش موسى صراعاً داخلياً وهو ينشأ في القصر؟',
    options: [
      'لأنه يعيش في القصر ويتمتع بحمايته، لكنه يشعر بالقرب من بني إسرائيل المظلومين ويميل إلى نصرة الضعفاء والعدل.',
      'لأنه لا يستطيع الاختيار بين أن يصبح ساحراً مصرياً أو بحاراً في النيل.',
      'لأنه يريد ترك القصر فقط لأنه لا يحب طعامه.',
    ],
    correctAnswer: 0,
    explanation: 'يضع الفصل موسى بين حياته في القصر وصلته ببني إسرائيل الذين كان الضعفاء منهم ينظرون إليه طلباً للحماية والعدل.',
    retry: 'راجع الجمل التي تتحدث عن نشأته في القصر وأمه وبني إسرائيل ونظر الضعفاء إليه.',
  },
  {
    chapterId: 9,
    title: 'الخطأ والاستجابة',
    question: 'ماذا يكشف رد فعل موسى المباشر بعد موت المصري خطأً عن شخصيته؟',
    options: [
      'أدرك خطأه وشعر بالخوف والحزن وتوجه إلى الله طالباً المغفرة بدلاً من الاحتفال بما حدث.',
      'عد موت الرجل انتصاراً وبدأ يبحث عن نزاع آخر.',
      'رفض أي مسؤولية لأن الرجل كان مصرياً.',
    ],
    correctAnswer: 0,
    explanation: 'يشدد الفصل على أن القتل كان غير مقصود وأن موسى امتلأ خوفاً وحزناً وتوجه فوراً إلى الله طالباً المغفرة.',
    retry: 'ركز على الجمل التي تأتي مباشرة بعد موت المصري وعلى مشاعر موسى وما فعله بعدها.',
  },
  {
    chapterId: 10,
    title: 'التعلم من تكرار النزاع',
    question: 'ماذا يساعد النزاع الثاني مع الرجل نفسه موسى على إدراكه؟',
    options: [
      'أن الرجل يدخل في النزاعات مراراً، لذلك يصفه موسى بأنه مثير للمشكلات ويصبح أكثر حذراً.',
      'أن النزاع الأول لم يحدث أصلاً وكان مجرد وهم.',
      'أن الرجل أصبح مستشاراً رسمياً لفرعون.',
    ],
    correctAnswer: 0,
    explanation: 'يعرض الفصل الرجل نفسه وهو يطلب المساعدة مرة أخرى، فيصفه موسى بأنه مثير للمشكلات بينما ينتشر خبر حادثة اليوم السابق.',
    retry: 'قارن طلب المساعدة في اليوم الثاني بكلمات موسى للرجل نفسه.',
  },
  {
    chapterId: 11,
    title: 'قرار تحت التهديد',
    question: 'لماذا يشكل تحذير الرجل القادم من أقصى المدينة نقطة تحول لموسى؟',
    options: [
      'لأنه يقدم خبراً محدداً بأن الملأ يتشاورون لقتله، فيتحول الخوف إلى خطر مباشر ويغادر موسى مصر.',
      'لأنه يخبره بأن فرعون اختاره ليكون الحاكم القادم.',
      'لأنه يثبت أن طريق مدين تحت سيطرة جيش فرعون بالكامل.',
    ],
    correctAnswer: 0,
    explanation: 'ينقل التحذير الوضع من خوف عام إلى خطر محدد: القوم يتشاورون لقتل موسى، ولذلك يخرج من مصر.',
    retry: 'حدد ما الذي قاله الرجل عن خطة الملأ، ثم ما الذي فعله موسى بعد ذلك.',
  },
  {
    chapterId: 12,
    title: 'الشخصية من خلال الفعل',
    question: 'ماذا يمكن أن نستنتج من ملاحظة موسى لمشقة المرأتين وهو نفسه مرهق وجائع؟',
    options: [
      'أنه ظل منتبهاً إلى حاجة الآخرين ومستعداً للمساعدة رغم ما كان يعانيه هو من تعب وحاجة.',
      'أنه ساعد فقط لأنه توقع أجراً فورياً من المرأتين.',
      'أن تعبه منعه تماماً من ملاحظة ما يحدث حول البئر.',
    ],
    correctAnswer: 0,
    explanation: 'يصف الفصل حاجة موسى إلى الراحة والطعام والشراب، ومع ذلك يلاحظ صعوبة المرأتين ويقترب ليعرض المساعدة.',
    retry: 'قارن حالة موسى الجسدية بما لاحظه عند البئر وما عرضه على المرأتين.',
  },
  {
    chapterId: 13,
    title: 'من العزلة إلى الأمان',
    question: 'لماذا تعد دعوة موسى إلى بيت أسرة المرأتين مهمة في مسار رحلته؟',
    options: [
      'تنقله من الجوع والعزلة إلى بيت مريح ومتآلف يستطيع فيه أن يروي ما جرى له في مصر.',
      'تعيده مباشرة إلى قصر فرعون في مصر.',
      'تنهي علاقته بالأسرة فور انتهاء الطعام.',
    ],
    correctAnswer: 0,
    explanation: 'يقابل الفصل بين تعب موسى ووحدته وبين البيت المتآلف الذي يستقبله ويسمع منه أحداث هروبه من مصر.',
    retry: 'قارن حالة موسى قبل الدعوة بوصف البيت بعد وصوله إليه.',
  },
  {
    chapterId: 14,
    title: 'الإعداد قبل الرسالة',
    question: 'كيف يفسر الفصل سنوات موسى العشر في مدين؟',
    options: [
      'فترة من العمل والاستقرار والإعداد الروحي قبل بدء رسالته النبوية.',
      'فترة تخلى فيها نهائياً عن أي مسؤولية تجاه قومه.',
      'تدريباً عسكرياً نظمته له سلطات فرعون.',
    ],
    correctAnswer: 0,
    explanation: 'يصف الفصل السنوات العشر في مدين صراحة بأنها فترة مهمة في حياة موسى وإعداد روحي للنبوة.',
    retry: 'ابحث عن الجملة التي تشرح أهمية السنوات العشر في حياة موسى.',
  },
  {
    chapterId: 15,
    title: 'الانتباه قبل الآية',
    question: 'وفقاً للفصل، لماذا يوجه السؤال إلى موسى عن العصا العادية قبل أن تتحول؟',
    options: [
      'لتركيز انتباهه على الشيء المألوف قبل التحول المعجز الذي سيقع أمامه.',
      'لأن موسى كان ممنوعاً من حمل الخشب على الجبل.',
      'لأن موسى نسي اسم الشيء الذي في يده.',
    ],
    correctAnswer: 0,
    explanation: 'يذكر الفصل أن السؤال عن العصا كان لتوجيه انتباه موسى إليها قبل المعجزة التي ستقع.',
    retry: 'أعد قراءة الجملة التي تسبق أمر إلقاء العصا مباشرة.',
  },
  {
    chapterId: 16,
    title: 'الآيات والمسؤولية',
    question: 'كيف ترتبط الآيتان اللتان أعطيتا لموسى بمهمته الجديدة في هذا الفصل؟',
    options: [
      'تعطيان له كآيتين من ربه ثم يتبع ذلك الأمر بالذهاب إلى فرعون وملئه.',
      'تعطيان له حتى يتجنب الحديث مع فرعون نهائياً.',
      'تعطيان له أساساً لتسهيل عمل الرعي في مدين.',
    ],
    correctAnswer: 0,
    explanation: 'يعرض الفصل العصا واليد المضيئة آيتين ثم يربطهما مباشرة بأمر موسى بالذهاب إلى فرعون وقومه.',
    retry: 'اربط وصف الآيتين بالأمر الذي يأتي بعدهما في النص.',
  },
  {
    chapterId: 17,
    title: 'استمرار رسالة التوحيد',
    question: 'ما الاستمرارية التي يبرزها الفصل عندما يربط موسى بيعقوب وإبراهيم؟',
    options: [
      'يعرض رسالة موسى جزءاً من تقليد نبوي توحيدي واحد امتد عبر أسلافه كما يصفه الفصل.',
      'يقول إن موسى جاء بنظام عبادة لا صلة له بمن سبقه من الأنبياء.',
      'يجعل النسب وحده أهم من العبادة والهداية.',
    ],
    correctAnswer: 0,
    explanation: 'يربط الفصل موسى بيعقوب وإبراهيم ويصف دينه ضمن الاستمرار التوحيدي نفسه الذي ينسبه إلى أسلافه.',
    retry: 'راجع الجمل الأخيرة عن يعقوب وإبراهيم والذرية والتوحيد.',
  },
  {
    chapterId: 18,
    title: 'استراتيجية فرعون الخطابية',
    question: 'لماذا يذكر فرعون موسى بأنه تربى في القصر وأكل من طعامه ونال من ماله؟',
    options: [
      'ليستعمل اعتماد موسى السابق على القصر وسيلة لتقويض طلبه الحالي وإظهار السلطة عليه.',
      'ليعتذر له عن اضطهاد بني إسرائيل.',
      'ليعرض عليه وظيفة مؤرخ للقصر مقابل ترك موضوع الحرية.',
    ],
    correctAnswer: 0,
    explanation: 'يعرض الفصل فرعون وهو يستخدم ماضي موسى في القصر وتربيته فيه في سياق السخرية والضغط على موقفه الحالي.',
    retry: 'تابع أسئلة فرعون المتتالية عن اسم موسى وطفولته وتربيته في القصر والطعام والمال.',
  },
  {
    chapterId: 19,
    title: 'من الجدال إلى الدليل',
    question: 'لماذا ينتقل موسى من الحوار الطويل إلى إظهار الآيات؟',
    options: [
      'لأن فرعون يرفض الحوار ويهدد بالسجن، فيعرض موسى أن يأتي بشيء مقنع وحق.',
      'لأن موسى نسي الرسالة وأراد تسلية أهل القصر.',
      'لأن فرعون آمن بالفعل وطلب احتفالاً فقط.',
    ],
    correctAnswer: 0,
    explanation: 'يذكر الفصل أن النقاش لم ينجح وأن فرعون انتقل إلى التهديد، ثم عرض موسى أن يأتي بدليل مقنع قبل إظهار الآية.',
    retry: 'تتبع التسلسل من اتهامات فرعون وتهديده إلى سؤال موسى عن إحضار شيء مقنع.',
  },
  {
    chapterId: 20,
    title: 'الغاية السياسية من المسابقة',
    question: 'لماذا اقترح مستشارو فرعون استدعاء أمهر السحرة؟',
    options: [
      'أرادوا تقليد ما رآه الناس لتقليل أثر آيات موسى في الجمهور وحماية سلطة فرعون.',
      'أرادوا أن يصبح السحرة تلاميذ لموسى قبل حضور الناس.',
      'أرادوا منع أي جمهور من مشاهدة المواجهة.',
    ],
    correctAnswer: 0,
    explanation: 'يذكر الفصل أن الهدف من استدعاء السحرة كان تقليل أثر آيات موسى في الناس بإظهار شيء يشبهها أمام الجمهور.',
    retry: 'ابحث عن الجملة التي تشرح ما الذي كان مستشارو فرعون يريدون تحقيقه من خلال السحرة.',
  },
  {
    chapterId: 21,
    title: 'اعتراف أهل الخبرة',
    question: 'لماذا يمثل إيمان السحرة هزيمة شديدة لرواية فرعون؟',
    options: [
      'لأن الفصل يقدمهم بوصفهم نخبة خبيرة بالسحر، فاعترافهم بآية موسى يقوض محاولة فرعون تفسيرها على أنها خدعة مماثلة.',
      'لأنهم كانوا الأشخاص الوحيدين في مصر الذين يعرفون القراءة والكتابة.',
      'لأن إيمانهم زاد عدد جنود فرعون وقوة سيطرته.',
    ],
    correctAnswer: 0,
    explanation: 'تنبع أهمية موقفهم من كونهم خبراء في المجال الذي استعمله فرعون لمعارضة موسى، ولذلك كان اعترافهم بالآية تحولاً علنياً كبيراً.',
    retry: 'اربط وصف السحرة بأنهم من النخبة الخبيرة بهدف فرعون من تنظيم المسابقة.',
  },
  {
    chapterId: 22,
    title: 'الهلع والثقة',
    question: 'ما التباين الأساسي عندما يصل بنو إسرائيل إلى البحر ويلحق بهم جيش فرعون؟',
    options: [
      'يهلع القوم لأنهم يبدون محاصرين، بينما يعبر موسى عن ثقته بأن الله معه وسيهديهم إلى النجاة.',
      'يبقى القوم هادئين بينما يقرر موسى الاستسلام لفرعون.',
      'يعتقد الجميع أن فرعون هو الذي شق البحر قبل أن يفعل موسى شيئاً.',
    ],
    correctAnswer: 0,
    explanation: 'يقابل الفصل بين هلع بني إسرائيل عند رؤية الجيش وبين ثقة موسى بأن الله معهم وسيهديهم إلى طريق النجاة.',
    retry: 'قارن رد فعل القوم عند رؤية الجيش بكلام موسى مباشرة بعد ذلك.',
  },
  {
    chapterId: 23,
    title: 'الكبر بعد ظهور الدليل',
    question: 'ماذا يكشف ادعاء فرعون أن البحر انفتح بأمره عن طريقته في تفسير ما شاهده؟',
    options: [
      'يكشف أنه يفسر حتى الدليل المخالف لدعواه من خلال كبره وادعائه للسلطة.',
      'يكشف أنه قبل رسالة موسى وأمر جيشه بالتوقف.',
      'يكشف أنه اعترف بعجزه وطلب الهداية قبل دخول البحر.',
    ],
    correctAnswer: 0,
    explanation: 'مع أن البحر انفتح بأمر الله كما يروي الفصل، ينسب فرعون الحدث إلى أمره هو، فيظهر كيف يوجه الكبر تفسيره للحدث.',
    retry: 'راجع كلام فرعون بعد رؤية البحر المفتوح وقارنه بما يذكره الفصل عن سبب انشقاقه.',
  },
  {
    chapterId: 24,
    title: 'الحرية والمسؤولية',
    question: 'لماذا يعد مشهد العجل مهماً بعد نجاة بني إسرائيل من فرعون؟',
    options: [
      'لأنه يبين أن التحرر من الظلم لا يلغي الحاجة المستمرة إلى الإيمان والشكر والهداية والانضباط الأخلاقي.',
      'لأنه يبين أن الخروج من مصر حل فوراً كل مشكلة روحية واجتماعية.',
      'لأنه يثبت أن رسالة موسى انتهت قبل أن يتلقى التوراة.',
    ],
    correctAnswer: 0,
    explanation: 'يضع الفصل الميل إلى عبادة العجل بعد النجاة، فيبرز أن الحرية من القهر يجب أن تتبعها مسؤولية وهداية واستقامة.',
    retry: 'قارن النجاة من فرعون بما حدث بعد ذلك من طلب صنم وعبادة العجل وتلقي التوراة.',
  },
];

const specByChapter = new Map(mosesB2QuestionSpecsAr.map((spec) => [spec.chapterId, spec]));

const uniqueVocabulary = (entries: VocabularyEntry[]): VocabularyEntry[] => {
  const seen = new Set<string>();
  return entries.filter((entry) => {
    const key = normalize(entry.word);
    if (!key || seen.has(key) || !entry.definition?.trim()) return false;
    seen.add(key);
    return true;
  });
};

const bookDefinitionMap = new Map<string, { word: string; definition: string }>();
for (const page of mosesB2PagesAr) {
  for (const entry of page.vocabulary || []) {
    const key = normalize(entry.word);
    if (key && !bookDefinitionMap.has(key) && entry.definition?.trim()) {
      bookDefinitionMap.set(key, { word: entry.word, definition: entry.definition.trim() });
    }
  }
}

const normalizeChapterVocabulary = (page: PageData): VocabularyEntry[] => {
  const current = uniqueVocabulary([...(page.vocabulary || [])]);
  const additions: VocabularyEntry[] = [];

  for (const word of page.animatedWords || []) {
    const key = normalize(word);
    if (!key || current.some((entry) => normalize(entry.word) === key)) continue;
    const found = bookDefinitionMap.get(key);
    if (found) additions.push({ word, definition: found.definition });
  }

  if (current.length + additions.length < 4) {
    const content = ` ${normalize(page.content)} `;
    const candidates = [...bookDefinitionMap.entries()]
      .filter(([key]) => key.length >= 3 && content.includes(` ${key} `))
      .sort((a, b) => b[0].length - a[0].length);
    for (const [key, found] of candidates) {
      if ([...current, ...additions].some((entry) => normalize(entry.word) === key)) continue;
      additions.push({ word: found.word, definition: found.definition });
      if (current.length + additions.length >= 4) break;
    }
  }

  return uniqueVocabulary([...current, ...additions]).slice(0, 7);
};

const storyPages = mosesB2GoldContractAr.storyIds.map((id) => {
  const page = mosesB2PagesAr.find((candidate) => candidate.id === id && candidate.type === 'story');
  if (!page) throw new Error(`Moses B2 Arabic Gold: canonical story page ${id} is missing.`);
  const spec = specByChapter.get(id);
  if (!spec) throw new Error(`Moses B2 Arabic Gold: Quick Challenge spec for chapter ${id} is missing.`);
  return {
    ...page,
    vocabulary: normalizeChapterVocabulary(page),
    exercises: [buildQuestion(spec, `moses-b2-ar-gold-qc-${id}`)],
  };
});

const storyById = new Map(storyPages.map((page) => [page.id, page]));

const pickSpecs = (chapterIds: number[], prefix: string): Exercise[] => chapterIds.map((chapterId, index) => {
  const spec = specByChapter.get(chapterId);
  if (!spec) throw new Error(`Moses B2 Arabic Gold: assessment source chapter ${chapterId} is missing.`);
  return buildQuestion(spec, `${prefix}-${index + 1}`);
});

const knowledge = pickSpecs([1, 4, 7, 10, 13, 16, 19, 22], 'moses-b2-ar-gold-k');
const review = pickSpecs([3, 6, 9, 12, 15, 18, 21, 24], 'moses-b2-ar-gold-r');
const finalChallenge = pickSpecs([2, 5, 8, 11, 14, 16, 18, 20, 22, 23], 'moses-b2-ar-gold-f');

const allVocabulary = uniqueVocabulary(storyPages.flatMap((page) => page.vocabulary || []));
const vocabularyPairs = allVocabulary.slice(0, 10).map((entry) => ({ word: entry.word, meaning: entry.definition }));

const midpoint = Math.ceil(storyPages.length / 2);
const glossary1 = uniqueVocabulary([
  ...storyPages.slice(0, midpoint).flatMap((page) => page.vocabulary || []),
  ...allVocabulary,
]).slice(0, 18);
const glossary2 = uniqueVocabulary([
  ...storyPages.slice(midpoint).flatMap((page) => page.vocabulary || []),
  ...allVocabulary,
]).slice(0, 18);

export const mosesB2PagesGoldAr: PageData[] = mosesB2PagesAr.map((page) => {
  const story = storyById.get(page.id);
  if (story) return story;

  if (page.id === mosesB2GoldContractAr.knowledgeCheckPageId) {
    return {
      ...page,
      title: 'اختبار المعرفة والتحليل — موسى B2',
      content: 'راجع الأدلة والأسباب والمقارنات ونقاط التحول في القصة اعتماداً على النص العربي نفسه.',
      exercises: knowledge,
    };
  }

  if (page.id === mosesB2GoldContractAr.vocabularyPageId) {
    return {
      ...page,
      title: 'مفردات B2 في السياق',
      content: 'طابق عشر كلمات أو عبارات من فصول القصة بمعانيها كما تستخدم في السياق.',
      vocabularyPairs,
    };
  }

  if (page.id === mosesB2GoldContractAr.glossaryPageIds[0]) {
    return {
      ...page,
      content: 'مفردات مختارة من النصف الأول من القصة العربية المعتمدة.',
      vocabulary: glossary1,
    };
  }

  if (page.id === mosesB2GoldContractAr.glossaryPageIds[1]) {
    return {
      ...page,
      content: 'مفردات مختارة من النصف الثاني من القصة العربية المعتمدة.',
      vocabulary: glossary2,
    };
  }

  if (page.id === mosesB2GoldContractAr.reviewPageId) {
    return {
      ...page,
      title: 'تحدي المراجعة — B2',
      content: 'اربط الأدلة بالأسباب واختيارات الشخصيات والنتائج قبل الانتقال إلى التحدي النهائي.',
      exercises: review,
    };
  }

  if (page.id === mosesB2GoldContractAr.finalChallengePageId) {
    return {
      ...page,
      title: 'التحدي النهائي — B2',
      content: 'أجب عن عشرة أسئلة موضوعية تغطي القصة كاملة، واجعل دليلك هو النص العربي المعتمد.',
      exercises: finalChallenge,
    };
  }

  return page;
});
