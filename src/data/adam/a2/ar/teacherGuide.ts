import type { TeacherGuideMetadata, TeacherGuideSection } from '../../../../types';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_CONCEPTUAL = 'https://tymm.meb.gov.tr/beceriler/kavramsal-beceriler';

export const adamA2TeacherGuideMetadataAr: TeacherGuideMetadata = {
  title: 'دليل المعلم — قصة النبي آدم (A2)',
  subtitle: 'دليل يدوي خاص بكل فصل',
  level: 'A2',
  estimatedDuration: '10 حصص، نحو 30–35 دقيقة لكل فصل',
  targetAudience: 'متعلمات ومتعلمو الإنجليزية في المرحلة المتوسطة عند مستوى CEFR A2 تقريبا.',
  targetLearners: 'متعلمين يستطيعون فهم نصوص سردية قصيرة مدعومة وإنتاج جمل شفوية أو كتابية قصيرة مع دعم مناسب.',
  purpose: 'تنمية الإنجليزية من خلال فهم القصة والاستماع والمفردات في السياق والإنتاج القصير والتأمل ونقل القيم، من دون إضافة معلومات من خارج النص.',
  approachDesc: 'ابدأ بالمعنى، واجعل القصة والصوت مصدر الدليل، ثم انتقل إلى استخدام لغوي قصير وتغذية راجعة واسترجاع ونقل. تظهر مهارات نموذج تركيا المئوي والقيم من خلال أفعال تعلم حقيقية لا من خلال عناوين شكلية.',
  assessmentEvidence: 'Quick Challenge لكل فصل، أسئلة الدليل من النص، Knowledge Check، Vocabulary Challenge، Review من أربعة أنشطة، Final Challenge، بطاقات خروج وإنتاج شفوي/كتابي قصير.',
  assessmentOverview: {
    formative: ['Quick Challenge', 'أسئلة المعلم', 'تحديد الدليل من النص', 'بطاقة الخروج', 'نقل شفوي/كتابي قصير'],
    summative: ['Knowledge Check', 'Retrieval Review', 'Vocabulary Challenge', 'Final Challenge']
  },
  readingFramework: {
    before: 'فعّل فقط المعرفة السابقة اللازمة واطلب توقعا واحدا ذا غرض من العنوان أو الصورة.',
    during: 'اقرأ/استمع أولا للمعنى العام ثم أعد القراءة بهدف محدد: دليل أو تسلسل أو مقارنة أو سبب ونتيجة.',
    after: 'استخدم استجابة قصيرة بمستوى A2 أو صلة بالقيمة ثم تحقق من قدرة المتعلم على دعمها من الفصل.'
  },
  skillsFocus: {
    reading: 'مهارة القراءة وفهم المعنى في نموذج تركيا المئوي: تحديد المعلومات الصريحة وتتبع التسلسل والمقارنة وربط السبب والنتيجة البسيطين.',
    listening: 'استخدام السرد الصوتي لمتابعة المعنى نفسه والتسلسل والمفردات الأساسية الموجودة في النص.',
    speaking: 'إنتاج جملة أو جملتين واضحتين للمقارنة أو النصيحة أو تفسير سبب باستخدام معنى يدعمه الفصل.',
    writing: 'كتابة جمل قصيرة مدعومة بالنص باستخدام التسلسل والمقارنة وbecause/so وshould وغيرها عند ملاءمتها للفصل.'
  },
  valuesFocus: ['المسؤولية', 'الاحترام', 'التواضع', 'التعلم من الأخطاء', 'العناية بالطبيعة', 'مساعدة الضعفاء', 'الصدق', 'الشكر', 'الكرم', 'ضبط النفس', 'اللطف', 'عدم مقابلة الأذى بالأذى'],
  languageFocus: ['الفكرة الرئيسة والدليل', 'التسلسل', 'السبب والنتيجة', 'المقارنة', 'المفردات في السياق', 'Simple Past', 'because/but/so', 'First Conditional', 'will/won’t', 'should للنصيحة'],
  differentiationNotes: 'خفّض العبء اللغوي من دون خفض هدف التعلم. استخدم إطار جملة أو دليلا واحدا في كل مرة أو تدريباً شفوياً قبل الكتابة.',
  sensitiveNotes: {
    title: 'ضوابط المحتوى',
    notes: ['التزم بالمعلومات الدينية والتاريخية الموجودة في نص المشروع.', 'قدّم أحداث هابيل وقابيل بهدوء ومن دون تفاصيل عنيفة إضافية.', 'لا تقدم التأمل الشخصي على أنه حقيقة دينية جديدة.']
  }
};

export const adamA2TeacherGuideAr: TeacherGuideSection[] = [
  {
    chapter: 'الفصل 1 — البداية والخلق', timing: '30–35 دقيقة',
    objectives: ['تحديد خلق آدم من التراب ومسؤولية الإنسان في الأرض.', 'تتبع التسلسل وشرح العلاقة البسيطة بين التراب من أماكن مختلفة واختلاف ألوان البشرة.'],
    pedagogy: 'ابن سلسلة: الخلق ← المسؤولية ← موقف الملائكة ← التفسير. مهارة القراءة/فهم المعنى في TYMM مباشرة، والكلام والكتابة القصيران داعمان. القيم: المسؤولية واحترام التنوع الإنساني كما يقدمه الفصل.',
    grammarFocus: 'Simple Past للأحداث المكتملة مع ملاحظة be going to للدور المستقبلي المذكور.', pronunciationFocus: 'messenger, soil, curiosity, Earth',
    lessonPlan: '1. توقع واحد من العنوان/الصورة. 2. قراءة/استماع للحدث الرئيس. 3. تحديد مادة الخلق ودور الإنسان ورد الملائكة وتفسير اختلاف الألوان. 4. Quick Challenge. 5. جملة عن الخلق وأخرى عن المسؤولية. 6. بطاقة خروج عن علاقة سبب ونتيجة.',
    discussionPoints: ['ما المسؤولية التي يذكرها الفصل للإنسان؟', 'كيف يربط الفصل بين التراب من أماكن مختلفة والتنوع؟'],
    differentiation: { fastFinishers: 'اكتب أربع جمل قصيرة بالتسلسل.', strugglingLearners: 'استخدم: «خُلق آدم من ___.» و«الإنسان مسؤول عن ___.»' },
    interactiveTips: ['استخدم hotspot للعودة إلى الجملة الداعمة فقط.', 'دعم مفاهيمي: التسلسل والسبب والنتيجة.', 'صلة بالقيم: المسؤولية واحترام الاختلاف.'],
    assessmentTools: { rubric: ['معلومة صحيحة', 'دليل من النص', 'جملة A2 واضحة'], exitTicket: ['اذكر مسؤولية واحدة من الفصل.'] },
    extraResources: { links: [{ label: 'TYMM — مهارات اللغة الأجنبية', url: TYMM_FOREIGN }, { label: 'TYMM — المهارات المفاهيمية', url: TYMM_CONCEPTUAL }] }
  },
  {
    chapter: 'الفصل 2 — العلم والاحترام', timing: '30–35 دقيقة',
    objectives: ['شرح علاقة العلم والتفكير بتعلم آدم.', 'مقارنة موقف الملائكة بموقف إبليس.'],
    pedagogy: 'استخدم مقارنة بعمودين: العلم/الاحترام مقابل الكبر/الاحتقار. القيم: العلم والاحترام والتواضع. مهارات TYMM: القراءة والمقارنة مع إنتاج قصير باستخدام but/because.',
    grammarFocus: 'because للسبب والمقارنة البسيطة.', pronunciationFocus: 'knowledge, respect, understand, wiser',
    lessonPlan: '1. استرجاع معلومة من الفصل الأول. 2. قراءة ما أُعطي لآدم. 3. عمود للملائكة وآخر لإبليس. 4. Quick Challenge. 5. «The angels…, but Iblis…». 6. بطاقة خروج عن أهمية العلم.',
    discussionPoints: ['ما الذي ساعد آدم على التعلم؟', 'ما أوضح فرق بين الموقفين؟'],
    differentiation: { fastFinishers: 'اكتب جملتين للمقارنة.', strugglingLearners: 'استخدم جدول Angels / Iblis مع إطار جملة.' },
    interactiveTips: ['اطلب الجملة الداعمة قبل قبول المقارنة.', 'الاحترام يظهر بالفعل لا بالاسم فقط.', 'دعم مفاهيمي: المقارنة.'], assessmentTools: { exitTicket: ['أكمل: “The angels respected Adam, but Iblis ___.”'] }
  },
  {
    chapter: 'الفصل 3 — الكبر والأصل والقيمة', timing: '30–35 دقيقة',
    objectives: ['شرح سبب ادعاء إبليس أنه أفضل.', 'تمييز فكرة إبليس عن فكرة الفصل عن القيمة الحقيقية.'],
    pedagogy: 'افصل بوضوح بين «ظن إبليس» و«يقول الفصل». قارن النار والتراب ثم حدد الكبر واستنتج درس القيمة. القيم: التواضع ورفض التفوق بسبب الأصل وربط العلم النافع بالعمل الجيد.',
    grammarFocus: 'better/more valuable مع because.', pronunciationFocus: 'arrogant, valuable, fire, clay',
    lessonPlan: '1. قراءة مقارنة إبليس. 2. تحديد arrogant. 3. تحديد جملة القيمة/العلم النافع. 4. Quick Challenge. 5. جملة “Iblis thought…” وأخرى “The chapter says…”. 6. بطاقة خروج بكلمة valuable.',
    discussionPoints: ['لماذا يوصف كلام إبليس بالكبر؟', 'ما الذي يقدمه الفصل بوصفه أهم من الأصل؟'],
    differentiation: { fastFinishers: 'اكتب ثلاث جمل تقارن الفكرتين.', strugglingLearners: 'بطاقتان: Iblis thought / Chapter says.' },
    interactiveTips: ['لا تخلط بين قول الشخصية ورسالة الفصل.', 'صلة بالقيم: التواضع والمساواة في القيمة.', 'دعم مفاهيمي: المقارنة والاستنتاج.'], assessmentTools: { exitTicket: ['أكمل: “Fire or soil does not make a person ___.”'] }
  },
  {
    chapter: 'الفصل 4 — آدم وحواء والتحذيران', timing: '30–35 دقيقة',
    objectives: ['ربط وحدة آدم بخلق حواء.', 'تمييز التحذير من إبليس عن تحذير الشجرة.'],
    pedagogy: 'امنع دمج التحذيرين. استخدم سبب/نتيجة للوحدة ثم منظم بصري لتحذير إبليس وتحذير الشجرة. القيم: الصحبة والانتباه للتوجيه واتخاذ القرار بعناية.',
    grammarFocus: 'لغة التحذير والأمر والنهي، مع فهم not to من السياق.', pronunciationFocus: 'lonely, warning, Paradise, careful',
    lessonPlan: '1. توقع. 2. تحديد سبب ظهور حواء. 3. صندوقان للتحذيرين. 4. Quick Challenge. 5. جملة because/so وجملة تحذير. 6. بطاقة خروج تذكر التحذيرين منفصلين.',
    discussionPoints: ['لماذا أُعطي آدم حواء؟', 'كيف يختلف التحذيران؟'],
    differentiation: { fastFinishers: 'اشرح التحذيرين في ثلاث جمل.', strugglingLearners: 'اكتب الكلمات الأساسية فقط في صندوقين.' },
    interactiveTips: ['ابق التحذيرين منفصلين بصريا.', 'صلة بالقيم: الانتباه والاختيار المسؤول.', 'دعم مفاهيمي: السبب والنتيجة والتصنيف.'], assessmentTools: { exitTicket: ['اكتب تحذيرا واحدا من الفصل.'] }
  },
  {
    chapter: 'الفصل 5 — الخطأ والندم والإصلاح', timing: '30–35 دقيقة',
    objectives: ['تحديد كذبة إبليس وكيف وقع الخطأ.', 'مقارنة موقف آدم وحواء من الخطأ بموقف إبليس.'],
    pedagogy: 'نظم الفصل: كذبة ← نسيان التحذير ← خطأ ← ندم ← مغفرة ← قرار بعدم التكرار. القيمة ليست «لا تخطئ» بل اعترف وأصلح وتعلم.',
    grammarFocus: 'First Conditional في كلام إبليس وSimple Past للأحداث.', pronunciationFocus: 'mistake, regret, forgive, repeat',
    lessonPlan: '1. تحديد وعد إبليس. 2. بناء التسلسل. 3. تحديد “not on purpose”. 4. Quick Challenge. 5. مقارنة الموقف من الخطأ. 6. فعل صحي بعد الخطأ. 7. بطاقة خروج تبدأ بـ“They learned…”.',
    discussionPoints: ['لماذا كان كلام إبليس كذبا؟', 'ماذا فعل آدم وحواء بعد فهم الخطأ؟'],
    differentiation: { fastFinishers: 'اكتب التسلسل بست مراحل.', strugglingLearners: 'استخدم بطاقات first/then/after that.' },
    interactiveTips: ['استخدم الخطأ في النشاط كفرصة للإصلاح وإعادة المحاولة.', 'القيم: الصدق مع النفس والندم والتعلم من الخطأ.'], assessmentTools: { exitTicket: ['اذكر فعلين بعد الخطأ.'] }
  },
  {
    chapter: 'الفصل 6 — الحياة والمسؤولية في الأرض', timing: '30–35 دقيقة',
    objectives: ['ربط المغفرة ببداية الحياة في الأرض.', 'تحديد مسؤوليات مثل حماية الطبيعة ومساعدة الضعفاء.'],
    pedagogy: 'لا تختزل الانتقال إلى الأرض في العقوبة؛ الفصل يذكر أيضا المغفرة والاستعداد والمسؤولية. استخدم شبكة مسؤوليات تنتقل من النص إلى مثال يومي.',
    grammarFocus: 'Simple Past والتسلسل مع ملاحظة الأعمال المستقبلية المخططة.', pronunciationFocus: 'crops, protect, nature, weak',
    lessonPlan: '1. Tap & Reveal. 2. قراءة ما حدث بعد المغفرة. 3. تحديد قائمة المسؤوليات. 4. تصنيف: رعاية الأرض / رعاية الناس. 5. مثال عملي لمسؤوليتين. 6. بطاقة خروج “We can…”.',
    discussionPoints: ['ما المسؤوليات المذكورة؟', 'كيف تظهر واحدة منها في حياة الطالب؟'],
    differentiation: { fastFinishers: 'أربع مسؤوليات مع أمثلة.', strugglingLearners: 'استخدم “We can ___ to help/protect ___.”' },
    interactiveTips: ['صلة مباشرة بالقيم: المسؤولية والبيئة ومساعدة الضعفاء.', 'اجعل أمثلة النقل واقعية لعمر الطالب.', 'دعم مفاهيمي: التصنيف والتطبيق.'], assessmentTools: { exitTicket: ['أكمل: “On Earth, people should help ___.”'] }
  },
  {
    chapter: 'الفصل 7 — أول رسول والتوجيه', timing: '30–35 دقيقة',
    objectives: ['ربط دور آدم كرسول بما علّمه.', 'شرح توجيه الأولاد إلى حسن السلوك والشكر والتحذير.'],
    pedagogy: 'لا تحفظ لقب «أول رسول» منفصلا؛ اربطه بالفعل: الصدق وفعل الخير ومنع الشر وذكر الله وحسن السلوك والشكر. القيم واضحة ويمكن نقلها في نصيحة A2 قصيرة.',
    grammarFocus: 'should للنصيحة مع ملاحظة teach + person + to.', pronunciationFocus: 'honest, behave, remember, enemy',
    lessonPlan: '1. تحديد قائمة التعاليم. 2. Quick Challenge. 3. تصنيف التعاليم. 4. جملتان “Adam taught…”. 5. “Students should…” في سياق المدرسة. 6. بطاقة خروج: تعليم + فعل.',
    discussionPoints: ['ماذا علّم آدم؟', 'أي تعليم يسهل إظهاره بفعل؟'],
    differentiation: { fastFinishers: 'ثلاث جمل نصيحة.', strugglingLearners: 'استخدم “Adam taught people to ___.”' },
    interactiveTips: ['القيم: الصدق والعمل الجيد والشكر والتوجيه المسؤول.', 'لا تضف التزامات دينية من خارج الفصل.', 'دعم الكلام والكتابة في TYMM.'], assessmentTools: { exitTicket: ['تعليم واحد + فعل يبينه.'] }
  },
  {
    chapter: 'الفصل 8 — هابيل وقابيل وتقديم الأفضل', timing: '30–35 دقيقة',
    objectives: ['مقارنة الأخوين في العمل والصفة.', 'استخدام القربانين لشرح درس تقديم الأفضل.'],
    pedagogy: 'قارن الأخوين على الأبعاد نفسها حتى لا يُفهم أن نوع العمل يعطي قيمة أخلاقية. الرسالة تأتي من الموقف وجودة العطاء. القيم: الإخلاص والكرم والجهد وتجنب الحسد.',
    grammarFocus: 'better/best/healthiest وbut.', pronunciationFocus: 'shepherd, farmer, offering, jealousy',
    lessonPlan: '1. جدول Habil/Qabil. 2. ملء العمل والصفة. 3. Quick Challenge للقربانين. 4. تحديد جملة “real goodness”. 5. جملة مقارنة وجملة درس. 6. مثال مناسب للعمر عن بذل الأفضل.',
    discussionPoints: ['ما الاختلافات المذكورة فعلا؟', 'ما الدليل أن الدرس عن الموقف لا عن نوع العمل؟'],
    differentiation: { fastFinishers: 'جملتان للمقارنة مع دليل وجملة للدرس.', strugglingLearners: 'استخدم: work / character / offering.' },
    interactiveTips: ['راقب خطأ ربط القيمة بنوع العمل.', 'صلة بالقيم: الكرم والإخلاص والجهد.', 'دعم مفاهيمي: المقارنة والاستنتاج.'], assessmentTools: { exitTicket: ['أكمل: “Real goodness means ___.”'] }
  },
  {
    chapter: 'الفصل 9 — الغضب وعدم الرد والغراب', timing: '30–35 دقيقة',
    objectives: ['تحديد رد هابيل السلمي.', 'تتبع النتائج وشرح ما أظهره الغراب لقابيل.'],
    pedagogy: 'قدّم الفصل بهدوء ومن دون تفاصيل عنيفة إضافية. ركز على لغة التهديد/الرفض ونتائج الغضب وعدم رد الأذى والتعلم من الغراب. القيم: ضبط النفس والسلام وعدم مقابلة الأذى بالأذى.',
    grammarFocus: 'will/won’t للنية والرفض وSimple Past للتسلسل.', pronunciationFocus: 'harm, anger, panic, crow, digging',
    lessonPlan: '1. إطار محتوى هادئ. 2. مقارنة “I will” و“I won’t”. 3. Quick Challenge. 4. إعادة السرد في أربع خطوات غير عنيفة. 5. شرح ما تعلمه قابيل من الغراب. 6. فعل آمن عند الغضب. 7. بطاقة خروج “Habil chose not to…”.',
    discussionPoints: ['ماذا رفض هابيل أن يفعل؟', 'ما نتيجة الغضب غير المنضبط؟'],
    differentiation: { fastFinishers: 'أربع خطوات + جملة درس.', strugglingLearners: 'أربع بطاقات تسلسل وإطار جملة.' },
    interactiveTips: ['لا تضف تفاصيل عنف.', 'صلة بالقيم: الاستجابة السلمية وضبط الغضب.', 'دعم الكلام: إعادة سرد ونصيحة بسيطة.'], assessmentTools: { exitTicket: ['اذكر فعلا سلميا عند الغضب.'] }
  },
  {
    chapter: 'الفصل 10 — الدروس الأخيرة واستمرار الرسالة', timing: '30–35 دقيقة',
    objectives: ['ذكر الدروس الصريحة عن الحسد والغضب واللطف.', 'شرح استمرار رسالة آدم عن طريق أولاده وأحفاده.'],
    pedagogy: 'استخدم النهاية للجمع لا لجمع معلومات هامشية. اربط الأحداث السابقة بالنصائح الأخيرة وعبّر عنها في جمل نصيحة بسيطة. تتكامل القراءة والكلام والكتابة.',
    grammarFocus: 'should + base verb للنصيحة.', pronunciationFocus: 'jealousy, worldwide, well-behaved, message, kind',
    lessonPlan: '1. Quick Challenge عن استمرار الرسالة. 2. وضع خط تحت كل نصيحة صريحة. 3. ربط درس نهائي بحدث سابق. 4. ثلاث جمل should. 5. استرجاع فكرة من ثلاثة فصول قبل Review. 6. بطاقة خروج: درس + حدث داعم.',
    discussionPoints: ['لماذا تنتهي القصة بالنصيحة؟', 'أي درس يرتبط بوضوح بحدث سابق؟'],
    differentiation: { fastFinishers: 'فقرة من أربع جمل “The story teaches…”.', strugglingLearners: 'اختر بطاقة قيمة واستخدم “People should ___.”' },
    interactiveTips: ['ادعم كل درس كبير بحدث من القصة.', 'Review تدريب وFinal مجموعة أسئلة مستقلة.', 'دعم مفاهيمي: الجمع ونقل التعلم.'], assessmentTools: { exitTicket: ['درس واحد + حدث يدعمه.'] }
  }
];
