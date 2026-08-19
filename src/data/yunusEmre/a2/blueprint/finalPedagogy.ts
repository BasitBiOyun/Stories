import type {
  BlueprintAssessmentItem,
  BlueprintGuideContent,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type { BlueprintCognitiveDemandV2 } from '../../../learningQualityContract';
import { L, fill, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';

const T = (en: string, ar: string): LocalizedText => L(en, ar);

type LocalizedLines = { en: string[]; ar: string[] };
type GuideSpec = {
  teacherPedagogy: LocalizedText;
  teacherLessonPlan: LocalizedText;
  teacherTips: LocalizedLines;
  teacherPreReading: LocalizedLines;
  teacherWhileReading: LocalizedLines;
  selfPedagogy: LocalizedText;
  selfLessonPlan: LocalizedText;
  selfTips: LocalizedLines;
  selfStudySequence: LocalizedLines;
};

const quicks: Record<number, { learningPointId: string; exercise: BlueprintAssessmentItem['exercise']; demand: BlueprintCognitiveDemandV2 }> = {
  1: {
    learningPointId: 'yunus-a2-c1-simple',
    exercise: mc(
      T('Why could ordinary people understand Yunus Emre’s poems easily?', 'لماذا كان الناس يفهمون قصائد يونس إمره بسهولة؟'),
      { en: ['He used simple Turkish', 'He wrote only for madrasa teachers', 'He used only foreign words'], ar: ['استخدم لغة تركية بسيطة', 'كتب لمعلمي المدارس فقط', 'استخدم كلمات أجنبية فقط'] },
      0,
      T('The chapter directly connects simple Turkish with people being able to understand his poems.', 'يربط الفصل مباشرة بين اللغة التركية البسيطة وقدرة الناس على فهم قصائده.'),
    ),
    demand: 'connect',
  },
  2: {
    learningPointId: 'yunus-a2-c2-needy',
    exercise: matching(
      T('Match the dervishes’ view of wealth with what they did.', 'صل نظرة الدراويش إلى المال بما كانوا يفعلونه.'),
      { en: [['Wealth', 'kept in the hand, not the heart'], ['What they had', 'shared with the needy']], ar: [['المال', 'في اليد لا في القلب'], ['ما عندهم', 'شاركوه مع المحتاجين']] },
      T('The chapter explains generosity by saying wealth stayed in their hands to be shared, not in their hearts.', 'يشرح الفصل الكرم بأن المال كان في أيديهم ليشاركوه، لا في قلوبهم.'),
    ),
    demand: 'connect',
  },
  3: {
    learningPointId: 'yunus-a2-c3-less',
    exercise: matching(
      T('Match the disciplined dervish habits described in the chapter.', 'صل عادات الدراويش المنضبطة المذكورة في الفصل.'),
      { en: [['Eating', 'less'], ['Speaking', 'less'], ['Sleeping', 'less']], ar: [['الأكل', 'قليلًا'], ['الكلام', 'قليلًا'], ['النوم', 'قليلًا']] },
      T('The chapter says dervishes ate less, spoke less, and slept less while spending time on useful activities.', 'يقول الفصل إن الدراويش كانوا يأكلون ويتكلمون وينامون قليلًا ويقضون وقتهم في أعمال مفيدة.'),
    ),
    demand: 'compare',
  },
  4: {
    learningPointId: 'yunus-a2-c4-wood',
    exercise: mc(
      T('Which ordinary service did Taptuk assign to Yunus as part of his training?', 'أي خدمة عادية كلف تابتوك يونس بها كجزء من تدريبه؟'),
      { en: ['Collecting wood from the mountain', 'Selling poems in the city', 'Working in a palace'], ar: ['جمع الحطب من الجبل', 'بيع القصائد في المدينة', 'العمل في قصر'] },
      0,
      T('Taptuk assigned Yunus to collect wood from the mountain as a service in the dervish house.', 'كلف تابتوك يونس بجمع الحطب من الجبل بوصفه خدمة في دار الدراويش.'),
    ),
    demand: 'identify',
  },
  5: {
    learningPointId: 'yunus-a2-c5-ego',
    exercise: tap(
      T('The chapter says the wood is Yunus’s ego. What simple inner training does the wood work represent?', 'يقول الفصل إن الحطب يرمز إلى نفس يونس. ما التدريب الداخلي البسيط الذي يمثله العمل بالحطب؟'),
      T('Training and fixing his heart and ego.', 'تدريب قلبه ونفسه وإصلاحهما.'),
      T('The outer work is cutting and choosing wood; the chapter says the inner meaning is training and fixing his own heart and ego.', 'العمل الظاهر هو قطع الحطب واختياره، ويقول الفصل إن المعنى الداخلي هو تدريب قلبه ونفسه وإصلاحهما.'),
    ),
    demand: 'connect',
  },
  6: {
    learningPointId: 'yunus-a2-c6-door',
    exercise: mc(
      T('Why did Yunus call the dervish house a “door of honesty and goodness”?', 'لماذا سمى يونس دار الدراويش «باب الصدق والخير»؟'),
      { en: ['He connected straight wood with straight and honest character', 'He wanted to sell the wood at the door', 'He thought nature had no lessons'], ar: ['ربط الحطب المستقيم بالخلق المستقيم والصادق', 'أراد بيع الحطب عند الباب', 'ظن أن الطبيعة لا تحمل دروسًا'] },
      0,
      T('Yunus said crooked wood and a crooked person could not enter this place, connecting straightness with honesty and goodness.', 'قال يونس إن الحطب المعوج والإنسان غير المستقيم لا يدخلان هذا المكان، فربط الاستقامة بالصدق والخير.'),
    ),
    demand: 'connect',
  },
  7: {
    learningPointId: 'yunus-a2-c7-daisy',
    exercise: mc(
      T('What made Yunus’s return different from the other students’ return?', 'ما الذي جعل عودة يونس مختلفة عن عودة الطلاب الآخرين؟'),
      { en: ['He brought only one daisy while the others brought many flowers', 'He brought a large bundle of wood', 'He returned before everyone with the biggest bunch'], ar: ['أحضر أقحوانة واحدة بينما أحضر الآخرون أزهارًا كثيرة', 'أحضر حزمة كبيرة من الحطب', 'عاد قبل الجميع بأكبر باقة'] },
      0,
      T('Yunus returned late with a single daisy while the others had picked many flowers.', 'عاد يونس متأخرًا ومعه أقحوانة واحدة بينما قطف الآخرون أزهارًا كثيرة.'),
    ),
    demand: 'compare',
  },
  8: {
    learningPointId: 'yunus-a2-c8-best',
    exercise: mc(
      T('Which advice from the final chapter applies to ordinary daily work?', 'أي نصيحة من الفصل الأخير تنطبق على العمل اليومي العادي؟'),
      { en: ['Always do your best and do every job well', 'Only important-looking jobs deserve care', 'Avoid ordinary work whenever possible'], ar: ['ابذل جهدك دائمًا وأد كل عمل جيدًا', 'الأعمال التي تبدو مهمة فقط تستحق العناية', 'تجنب العمل العادي متى أمكن'] },
      0,
      T('The final chapter says every job is important and people should always do their best and work well.', 'يقول الفصل الأخير إن كل عمل مهم وإن على الناس بذل جهدهم وإتقان العمل.'),
    ),
    demand: 'connect',
  },
};

const finalOverrides: Record<string, { exercise: BlueprintAssessmentItem['exercise']; demand?: BlueprintCognitiveDemandV2 }> = {
  'yunus-a2-c1-final': {
    exercise: mc(
      T('Which statement correctly connects Yunus Emre and Mevlana in Chapter 1?', 'أي عبارة تربط يونس إمره ومولانا بصورة صحيحة في الفصل الأول؟'),
      {
        en: ['They lived in the same period, and Mevlana died before Yunus', 'Yunus died before Mevlana', 'They lived in completely different centuries'],
        ar: ['عاشا في الفترة نفسها، وتوفي مولانا قبل يونس', 'توفي يونس قبل مولانا', 'عاشا في قرون مختلفة تمامًا'],
      },
      0,
      T('The chapter says Yunus and Mevlana lived in the same period; Mevlana died in 1273 and Yunus died later.', 'يقول الفصل إن يونس ومولانا عاشا في الفترة نفسها، وتوفي مولانا سنة 1273 ثم توفي يونس بعده.'),
    ),
    demand: 'sequence',
  },
  'yunus-a2-c2-final': {
    exercise: matching(
      T('Match each Chapter 2 group with what it shows about dervish character.', 'صل كل مجموعة من الفصل الثاني بما توضحه عن أخلاق الدراويش.'),
      {
        en: [['Jealousy and selfishness', 'bad habits the dervishes tried to leave'], ['Generosity and kindness', 'good qualities shown by the dervishes']],
        ar: [['الحسد والأنانية', 'عادات سيئة حاول الدراويش تركها'], ['الكرم واللطف', 'صفات حسنة أظهرها الدراويش']],
      },
      T('Chapter 2 contrasts generous, kind behaviour with bad habits such as jealousy and selfishness.', 'يقارن الفصل الثاني بين السلوك الكريم واللطيف وبين عادات سيئة مثل الحسد والأنانية.'),
    ),
    demand: 'compare',
  },
  'yunus-a2-c3-final': {
    exercise: mc(
      T('Which set contains only values named at the start of Chapter 3?', 'أي مجموعة تحتوي فقط على القيم المذكورة في بداية الفصل الثالث؟'),
      {
        en: [
          'Honesty, patience, humility, generosity, respect, trust in Allah',
          'Honesty, patience, jealousy, generosity, respect, trust in Allah',
          'Honesty, patience, humility, generosity, gossiping, trust in Allah',
        ],
        ar: [
          'الصدق والصبر والتواضع والكرم والاحترام والثقة بالله',
          'الصدق والصبر والحسد والكرم والاحترام والثقة بالله',
          'الصدق والصبر والتواضع والكرم والنميمة والثقة بالله',
        ],
      },
      0,
      T('The chapter opens with honesty, patience, humility, generosity, respect, and trust in Allah.', 'يفتتح الفصل بالصدق والصبر والتواضع والكرم والاحترام والثقة بالله.'),
    ),
    demand: 'compare',
  },
  'yunus-a2-c4-final-1': {
    exercise: mc(
      T('What did Yunus promise his teacher about service?', 'بماذا وعد يونس معلمه بخصوص الخدمة؟'),
      {
        en: ['To do whatever service Taptuk asked of him', 'To serve only when the work was easy', 'To choose his own duties instead of following Taptuk’s request'],
        ar: ['أن يقوم بأي خدمة يطلبها منه تابتوك', 'أن يخدم فقط عندما يكون العمل سهلًا', 'أن يختار مهامه بنفسه بدل اتباع طلب تابتوك'],
      },
      0,
      T('Yunus told his teacher, “I will do whatever service you ask of me.”', 'قال يونس لمعلمه إنه سيقوم بأي خدمة يطلبها منه.'),
    ),
    demand: 'identify',
  },
  'yunus-a2-c6-final': {
    exercise: fill(
      T('Complete the idea about what Yunus first learned in the mountains.', 'أكمل الفكرة عما تعلمه يونس أولًا في الجبال.'),
      T('In the mountains, Yunus first learned to be [blank] with Allah.', 'في الجبال، تعلم يونس أولًا أن يكون [blank] مع الله.'),
      T('alone', 'وَحيدًا'),
      T('The chapter says the quiet mountains were where Yunus first learned to be alone with Allah.', 'يقول الفصل إن الجبال الهادئة كانت المكان الذي تعلم فيه يونس أولًا أن يكون وحيدًا مع الله.'),
    ),
    demand: 'connect',
  },
  'yunus-a2-c8-final-1': {
    exercise: mc(
      T('What does Yunus say about the care we should give to daily work?', 'ماذا يقول يونس عن العناية التي ينبغي أن نعطيها للعمل اليومي؟'),
      {
        en: ['Every job is important, so we should do it well and do our best', 'Only difficult or important-looking jobs deserve full effort', 'Ordinary daily work does not need the same care'],
        ar: ['كل عمل مهم، لذلك ينبغي أن نؤديه جيدًا ونبذل جهدنا', 'الأعمال الصعبة أو التي تبدو مهمة فقط تستحق كامل الجهد', 'العمل اليومي العادي لا يحتاج إلى العناية نفسها'],
      },
      0,
      T('The final chapter says every job is important and people should always do their best when they work.', 'يقول الفصل الأخير إن كل عمل مهم وإن على الناس بذل جهدهم دائمًا عند العمل.'),
    ),
    demand: 'connect',
  },
};

const guideSpecs: Record<number, GuideSpec> = {
  1: {
    teacherPedagogy: T(
      'Build a short biography from chapter evidence, but do not let the lesson become a date quiz. Use the dates to organise the life story, then focus on two meaningful relationships: simple Turkish helped ordinary people understand Yunus’s poems, and Taptuk Emre guided his dervish learning.',
      'ابنِ سيرة قصيرة من أدلة الفصل، لكن لا تحول الدرس إلى اختبار تواريخ. استخدم التواريخ لتنظيم السيرة ثم ركز على علاقتين مهمتين: اللغة التركية البسيطة ساعدت الناس على فهم قصائد يونس، وتابتوك إمره وجّه تعلمه في طريق الدراويش.',
    ),
    teacherLessonPlan: T(
      '1. Show the title and image and ask what students already know about a poet. 2. Read the first paragraph and mark the sentence linking simple Turkish with easy understanding. 3. Build a four-point life line using only facts in the chapter. 4. Reread the Taptuk Emre sentences and identify teacher and pupil. 5. Complete the Quick Challenge and ask students to point to the supporting sentence. 6. Finish with two A2 sentences: one about Yunus’s language and one about his teacher.',
      '1. اعرض العنوان والصورة واسأل ما الذي يعرفه الطلاب عن الشاعر. 2. اقرأ الفقرة الأولى وحدد الجملة التي تربط اللغة التركية البسيطة بسهولة الفهم. 3. ابن خطًا زمنيًا من أربع نقاط باستخدام حقائق الفصل فقط. 4. أعد قراءة جمل تابتوك إمره وحدد المعلم والتلميذ. 5. نفذ التحدي السريع واطلب من الطلاب الإشارة إلى جملة الدليل. 6. اختم بجملتين بسيطتين: واحدة عن لغة يونس وأخرى عن معلمه.',
    ),
    teacherTips: {
      en: ['Open the Simple Turkish hotspot after students find the cause-result sentence themselves.', 'Use the Taptuk Emre hotspot to confirm the teacher-pupil relationship, then close it and ask for a one-sentence retell.'],
      ar: ['افتح نقطة اللغة التركية البسيطة بعد أن يجد الطلاب جملة السبب والنتيجة بأنفسهم.', 'استخدم نقطة تابتوك إمره لتأكيد علاقة المعلم بالتلميذ، ثم أغلقها واطلب إعادة سرد بجملة واحدة.'],
    },
    teacherPreReading: { en: ['Ask students to predict why a poet might choose simple language.'], ar: ['اطلب من الطلاب توقع سبب اختيار الشاعر لغة بسيطة.'] },
    teacherWhileReading: { en: ['Mark one biography fact and one sentence that explains Yunus’s influence; keep facts and explanations separate.'], ar: ['حدد حقيقة واحدة من السيرة وجملة واحدة تشرح تأثير يونس، وافصل بين الحقيقة والتفسير.'] },
    selfPedagogy: T(
      'Study Chapter 1 as a mini biography with a purpose: learn the basic life facts, then explain why simple Turkish and Taptuk Emre matter. Dates help you organise the story; they are not the only goal.',
      'ادرس الفصل الأول كسيرة قصيرة لها هدف: تعلم حقائق الحياة الأساسية ثم اشرح لماذا كانت اللغة التركية البسيطة وتابتوك إمره مهمين. تساعدك التواريخ على تنظيم القصة وليست الهدف الوحيد.',
    ),
    selfLessonPlan: T(
      '1. Read once for who Yunus Emre was. 2. Underline the simple-Turkish sentence. 3. Write four short timeline notes. 4. Find Taptuk Emre and write “teacher → pupil”. 5. Do the Quick Challenge without looking. 6. Check the exact sentence if needed and write a two-sentence mini biography.',
      '1. اقرأ مرة لمعرفة من كان يونس إمره. 2. ضع خطًا تحت جملة اللغة التركية البسيطة. 3. اكتب أربع ملاحظات زمنية قصيرة. 4. اعثر على تابتوك إمره واكتب «معلم ← تلميذ». 5. نفذ التحدي السريع من الذاكرة. 6. تحقق من الجملة الدقيقة عند الحاجة واكتب سيرة من جملتين.',
    ),
    selfTips: { en: ['Keep dates in a small timeline, not in a long memorisation list.', 'Say aloud: “People understood his poems because …”'], ar: ['ضع التواريخ في خط زمني صغير لا في قائمة حفظ طويلة.', 'قل بصوت عال معنى: «فهم الناس قصائده لأن…».'] },
    selfStudySequence: { en: ['Identify Yunus.', 'Find the language-result link.', 'Build the mini timeline.', 'Find Taptuk Emre.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair from the exact sentence if needed.', 'Write two factual sentences.'], ar: ['حدد يونس.', 'اعثر على علاقة اللغة بالنتيجة.', 'ابن الخط الزمني الصغير.', 'حدد تابتوك إمره.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح من الجملة الدقيقة عند الحاجة.', 'اكتب جملتين واقعيتين.'] },
  },
  2: {
    teacherPedagogy: T(
      'Teach Chapter 2 through behaviour, not abstract labels alone. Contrast “wealth in the hand, not the heart” with sharing, then sort concrete examples into qualities to practise and bad habits to leave. Make students justify each choice with the chapter.',
      'علّم الفصل الثاني من خلال السلوك لا من خلال المصطلحات المجردة وحدها. قارن بين «المال في اليد لا في القلب» وبين المشاركة، ثم صنف الأمثلة إلى صفات تمارس وعادات سيئة تترك، واطلب تبرير كل اختيار من الفصل.',
    ),
    teacherLessonPlan: T(
      '1. Start with two examples: keeping everything for yourself / sharing with someone in need. 2. Read the wealth paragraph and draw “hand” and “heart” columns. 3. Add the needy and charity evidence to the hand column. 4. Read the second paragraph and sort kindness, generosity, jealousy, selfishness, and gossiping into “show” or “leave”. 5. Complete the Quick Challenge using the wealth paragraph. 6. Exit with one sentence about a generous action and one bad habit to leave.',
      '1. ابدأ بمثالين: الاحتفاظ بكل شيء للنفس / المشاركة مع محتاج. 2. اقرأ فقرة المال وارسم عمودين «اليد» و«القلب». 3. أضف دليل المحتاجين والصدقة إلى عمود اليد. 4. اقرأ الفقرة الثانية وصنف اللطف والكرم والحسد والأنانية والنميمة إلى «نظهرها» أو «نتركها». 5. نفذ التحدي السريع باستخدام فقرة المال. 6. اختم بجملة عن فعل كريم وعادة سيئة ينبغي تركها.',
    ),
    teacherTips: {
      en: ['Use the Hearts and Eyes hotspot to distinguish inner understanding from physical seeing.', 'Use the The Needy hotspot only after learners locate the sharing sentence; then contrast generosity with jealousy/selfishness using separate meanings.'],
      ar: ['استخدم نقطة القلوب والعيون للتمييز بين الفهم الداخلي والرؤية الجسدية.', 'استخدم نقطة المحتاجين بعد أن يجد المتعلمون جملة المشاركة، ثم قارن الكرم بالحسد والأنانية بمعان منفصلة.'],
    },
    teacherPreReading: { en: ['Ask: Can a person have money but still call themselves poor? Keep the question open until the text explains it.'], ar: ['اسأل: هل يمكن أن يملك الإنسان مالًا ومع ذلك يسمي نفسه فقيرًا؟ اترك السؤال مفتوحًا حتى يشرحه النص.'] },
    teacherWhileReading: { en: ['Track two evidence chains: wealth → sharing with the needy; bad habit → effort to leave it.'], ar: ['تتبع سلسلتي دليل: المال ← المشاركة مع المحتاجين، والعادة السيئة ← محاولة تركها.'] },
    selfPedagogy: T(
      'Use two simple contrasts: what dervishes did with wealth, and which habits they tried to show or leave. Do not memorise a list without connecting each word to behaviour.',
      'استخدم مقارنتين بسيطتين: ما الذي فعله الدراويش بالمال، وما الصفات التي أظهروها أو حاولوا تركها. لا تحفظ قائمة من دون ربط الكلمات بالسلوك.',
    ),
    selfLessonPlan: T(
      '1. Read the wealth paragraph. 2. Write “hand” and “heart” and add the chapter meaning beside each. 3. Find the sentence about the needy. 4. Read the habit list and make two groups: good qualities / bad habits to leave. 5. Do the Quick Challenge. 6. Explain one contrast aloud without copying the text.',
      '1. اقرأ فقرة المال. 2. اكتب «اليد» و«القلب» وضع معنى الفصل بجانب كل منهما. 3. اعثر على جملة المحتاجين. 4. اقرأ قائمة العادات واجعل مجموعتين: صفات حسنة / عادات سيئة تترك. 5. نفذ التحدي السريع. 6. اشرح مقارنة واحدة بصوت عال دون نسخ النص.',
    ),
    selfTips: { en: ['Give jealousy and selfishness different meanings in your notes; do not treat them as the same word.', 'Use the sharing sentence as your evidence for generosity.'], ar: ['اكتب للحسد والأنانية معنيين مختلفين في ملاحظاتك ولا تعاملهما ككلمة واحدة.', 'استخدم جملة المشاركة دليلًا على الكرم.'] },
    selfStudySequence: { en: ['Read the wealth idea.', 'Map hand vs heart.', 'Find the needy evidence.', 'Sort good and bad habits.', 'Check key Word Notes.', 'Complete the Quick Challenge.', 'Correct from the exact paragraph.', 'Explain one behaviour-value link.'], ar: ['اقرأ فكرة المال.', 'اربط اليد بالقلب.', 'حدد دليل المحتاجين.', 'صنف العادات الحسنة والسيئة.', 'راجع ملاحظات الكلمات الأساسية.', 'نفذ التحدي السريع.', 'صحح من الفقرة الدقيقة.', 'اشرح علاقة بين السلوك والقيمة.'] },
  },
  3: {
    teacherPedagogy: T(
      'Treat the poem as supported A2 meaning, not as an abstract literary puzzle. First identify the explicit values and disciplined habits in the prose; then use selected poem lines to show humility, patience, self-control, and selflessness.',
      'تعامل مع القصيدة بوصفها معنى مدعومًا يناسب A2 لا لغزًا أدبيًا مجردًا. حدد أولًا القيم والعادات المنضبطة الصريحة في النثر، ثم استخدم أبياتًا مختارة لإظهار التواضع والصبر وضبط النفس ونكران الذات.',
    ),
    teacherLessonPlan: T(
      '1. Review two good/bad habits from Chapter 2. 2. Read the opening value list and circle the values. 3. Read the poem slowly in short lines and paraphrase only the simple message. 4. Find “ate less, spoke less, slept less” and compare the three habits. 5. Complete the Quick Challenge by matching each habit with “less”. 6. End with three short “A dervish needs to …” sentences supported by the chapter.',
      '1. راجع عادتين حسنتين أو سيئتين من الفصل الثاني. 2. اقرأ قائمة القيم في البداية وضع دائرة حولها. 3. اقرأ القصيدة ببطء في أسطر قصيرة واشرح معناها البسيط فقط. 4. اعثر على «أكل أقل وتكلم أقل ونام أقل» وقارن العادات الثلاث. 5. نفذ التحدي السريع بربط كل عادة بـ«أقل». 6. اختم بثلاث جمل قصيرة عن ما يحتاج إليه الدرويش وفق الفصل.',
    ),
    teacherTips: { en: ['Use the Path of Dervishhood hotspot before the poem to frame the difficulty as moral training.', 'Use the Useful Activities hotspot after the “less” pattern so students see what the saved time was used for.'], ar: ['استخدم نقطة طريق الدراويش قبل القصيدة لتوضيح أن الصعوبة تدريب أخلاقي.', 'استخدم نقطة الأعمال المفيدة بعد نمط «أقل» ليرى الطلاب كيف استُخدم الوقت.'] },
    teacherPreReading: { en: ['Ask whether becoming a better person can require practice and self-control.'], ar: ['اسأل هل يمكن أن يحتاج تحسين الأخلاق إلى تدريب وضبط للنفس.'] },
    teacherWhileReading: { en: ['Separate values, poem images, and daily habits into three small groups; do not merge them into one abstract list.'], ar: ['افصل القيم وصور القصيدة والعادات اليومية في ثلاث مجموعات صغيرة ولا تدمجها في قائمة مجردة واحدة.'] },
    selfPedagogy: T('Read the prose first, then the poem. Use the prose to anchor the poem’s simple message and pay special attention to the repeated “less” pattern.', 'اقرأ النثر أولًا ثم القصيدة. استخدم النثر لتثبيت المعنى البسيط للقصيدة وانتبه خصوصًا إلى نمط «أقل» المتكرر.'),
    selfLessonPlan: T('1. Circle the opening values. 2. Read the poem line by line. 3. Write one simple meaning for two poem images. 4. Find ate/spoke/slept less. 5. Do the Quick Challenge. 6. Write three short rules for the disciplined life.', '1. ضع دائرة حول قيم البداية. 2. اقرأ القصيدة سطرًا سطرًا. 3. اكتب معنى بسيطًا لصورتين من القصيدة. 4. اعثر على أكل/تكلم/نام أقل. 5. نفذ التحدي السريع. 6. اكتب ثلاث قواعد قصيرة للحياة المنضبطة.'),
    selfTips: { en: ['Do not try to explain every poem image at B1/B2 depth.', 'Use the final prose paragraph to check your understanding of discipline.'], ar: ['لا تحاول تفسير كل صورة شعرية بعمق B1/B2.', 'استخدم الفقرة النثرية الأخيرة للتحقق من فهم الانضباط.'] },
    selfStudySequence: { en: ['Find the values.', 'Read the poem slowly.', 'Paraphrase two images simply.', 'Find the three “less” habits.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair from the prose evidence.', 'Write three discipline rules.'], ar: ['حدد القيم.', 'اقرأ القصيدة ببطء.', 'اشرح صورتين ببساطة.', 'حدد عادات «أقل» الثلاث.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح من دليل النثر.', 'اكتب ثلاث قواعد للانضباط.'] },
  },
  4: {
    teacherPedagogy: T('Teach the chapter as a service sequence with a stated purpose. Students should distinguish the visible job—collecting wood—from why Taptuk gave ordinary service: humility, willingness, training the ego, and leaving bad behaviour.', 'علّم الفصل كتسلسل خدمة له هدف مذكور. ينبغي أن يميز الطلاب بين العمل الظاهر—جمع الحطب—وسبب إعطاء تابتوك خدمة عادية: التواضع والاستعداد وتدريب النفس وترك السلوك السيئ.'),
    teacherLessonPlan: T('1. Predict what a woodcutter does. 2. Read Yunus’s promise to serve and underline the promise. 3. Put the service events in order: promise → assignment → mountain → carrying wood. 4. Reread the sentence about the primary goal and contrast job vs purpose. 5. Complete the Quick Challenge. 6. Retell the sequence with four past-tense sentences and one purpose sentence.', '1. توقع ما يفعله الحطاب. 2. اقرأ وعد يونس بالخدمة وضع خطًا تحته. 3. رتب أحداث الخدمة: الوعد ← التكليف ← الجبل ← حمل الحطب. 4. أعد قراءة جملة الهدف الأساسي وقارن بين العمل والهدف. 5. نفذ التحدي السريع. 6. أعد السرد بأربع جمل في الماضي وجملة واحدة عن الهدف.'),
    teacherTips: { en: ['Use Wood-Cutting Duties to confirm the assigned task after students reconstruct the sequence.', 'Use Crooked Wood to prepare the next chapter, but do not teach the full symbol before Chapter 5.'], ar: ['استخدم نقطة مهام قطع الحطب لتأكيد المهمة بعد أن يعيد الطلاب بناء التسلسل.', 'استخدم نقطة الحطب المعوج للتهيئة للفصل التالي دون شرح الرمز كاملًا قبل الفصل الخامس.'] },
    teacherPreReading: { en: ['Ask which ordinary jobs can teach responsibility or patience.'], ar: ['اسأل أي الأعمال العادية يمكن أن تعلم المسؤولية أو الصبر.'] },
    teacherWhileReading: { en: ['Mark each action verb and one sentence that states the purpose behind the service.'], ar: ['حدد أفعال الأحداث وجملة واحدة تذكر الهدف من الخدمة.'] },
    selfPedagogy: T('Follow the action sequence first; then add the reason behind the work. Keep “what Yunus did” and “why the service mattered” as two separate notes.', 'اتبع تسلسل الأفعال أولًا ثم أضف سبب أهمية العمل. احتفظ بملاحظتين منفصلتين: «ماذا فعل يونس» و«لماذا كانت الخدمة مهمة».'),
    selfLessonPlan: T('1. Find Yunus’s promise. 2. List the four main service actions in order. 3. Underline “primary goal”. 4. Write the job on one side and its purpose on the other. 5. Do the Quick Challenge. 6. Retell the chapter in four short sentences.', '1. اعثر على وعد يونس. 2. اكتب أفعال الخدمة الأربعة بالترتيب. 3. ضع خطًا تحت «الهدف الأساسي». 4. اكتب العمل في جهة وهدفه في الجهة الأخرى. 5. نفذ التحدي السريع. 6. أعد سرد الفصل في أربع جمل قصيرة.'),
    selfTips: { en: ['Use past verbs to keep the event order clear.', 'Save the full wood/ego interpretation for Chapter 5.'], ar: ['استخدم أفعال الماضي للحفاظ على ترتيب الأحداث.', 'اترك تفسير الحطب والنفس الكامل للفصل الخامس.'] },
    selfStudySequence: { en: ['Find the promise.', 'Order the service actions.', 'Identify the duty.', 'Find the stated purpose.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair sequence/purpose if needed.', 'Retell in four sentences.'], ar: ['حدد الوعد.', 'رتب أفعال الخدمة.', 'حدد المهمة.', 'اعثر على الهدف المذكور.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح التسلسل أو الهدف عند الحاجة.', 'أعد السرد في أربع جمل.'] },
  },
  5: {
    teacherPedagogy: T('Use a concrete two-column model: outer work / inner training. The text itself gives the link, so students do not need abstract symbolism beyond A2. Connect straight wood, the axe, heart, ego, and forty years only where the chapter states the relationship.', 'استخدم نموذجًا ملموسًا من عمودين: العمل الظاهر / التدريب الداخلي. النص نفسه يعطي العلاقة، لذلك لا يحتاج الطلاب إلى رمزية مجردة تتجاوز A2. اربط الحطب المستقيم والفأس والقلب والنفس وأربعين عامًا فقط حيث يذكر الفصل العلاقة.'),
    teacherLessonPlan: T('1. Recall the crooked-wood rule from Chapter 4. 2. Read the opening question about carrying firewood and choosing straight pieces. 3. Build an outer/inner chart: wood work → heart and ego training; axe → fixing a bad part. 4. Find the forty-year sentence and discuss what repeated practice shows. 5. Complete the Quick Challenge. 6. Finish with one “It looks like … but in fact …” sentence.', '1. استرجع قاعدة الحطب المعوج من الفصل الرابع. 2. اقرأ السؤال الافتتاحي عن حمل الحطب واختيار القطع المستقيمة. 3. ابن جدول ظاهر/باطن: عمل الحطب ← تدريب القلب والنفس؛ الفأس ← إصلاح جزء سيئ. 4. اعثر على جملة الأربعين عامًا وناقش ما الذي يظهره التكرار. 5. نفذ التحدي السريع. 6. اختم بجملة على نمط «يبدو أن… لكن في الحقيقة…».'),
    teacherTips: { en: ['Use Straightest Pieces for the visible action first.', 'Open Heart and Ego only after students state the outer action, so the hotspot confirms rather than replaces interpretation.'], ar: ['استخدم نقطة أكثر القطع استقامة للعمل الظاهر أولًا.', 'افتح نقطة القلب والنفس بعد أن يذكر الطلاب العمل الظاهر حتى تؤكد النقطة التفسير ولا تستبدله.'] },
    teacherPreReading: { en: ['Show or draw one straight and one crooked line and ask what the previous chapter said about them.'], ar: ['اعرض أو ارسم خطًا مستقيمًا وآخر معوجًا واسأل ماذا قال الفصل السابق عنهما.'] },
    teacherWhileReading: { en: ['Mark every sentence where the text moves from physical wood to heart/ego meaning.'], ar: ['حدد كل جملة ينتقل فيها النص من الحطب المادي إلى معنى القلب والنفس.'] },
    selfPedagogy: T('Make the metaphor simple and text-based: first write what Yunus physically did, then write the inner meaning the chapter gives to that action.', 'اجعل الرمز بسيطًا ومبنيًا على النص: اكتب أولًا ما فعله يونس جسديًا ثم اكتب المعنى الداخلي الذي يعطيه الفصل لذلك الفعل.'),
    selfLessonPlan: T('1. Reread the last sentence of Chapter 4. 2. Read Chapter 5 and mark wood/axe actions. 3. Create an “outer work / inner meaning” table. 4. Add the forty-year detail as evidence of long practice. 5. Do the Quick Challenge. 6. Write one “looks like / in fact” sentence.', '1. أعد قراءة الجملة الأخيرة من الفصل الرابع. 2. اقرأ الفصل الخامس وحدد أفعال الحطب والفأس. 3. أنشئ جدول «العمل الظاهر / المعنى الداخلي». 4. أضف تفصيل الأربعين عامًا دليلًا على طول التدريب. 5. نفذ التحدي السريع. 6. اكتب جملة «يبدو / في الحقيقة».'),
    selfTips: { en: ['If your explanation becomes abstract, return to the exact wood/heart sentence.', 'Use forty years as evidence of repeated service, not as an isolated number.'], ar: ['إذا أصبح تفسيرك مجردًا فارجع إلى جملة الحطب والقلب الدقيقة.', 'استخدم الأربعين عامًا دليلًا على الخدمة المتكررة لا رقمًا منفصلًا.'] },
    selfStudySequence: { en: ['Recall crooked wood.', 'Mark the physical actions.', 'Find the heart/ego sentences.', 'Build the outer/inner table.', 'Add forty years as evidence.', 'Complete the Quick Challenge.', 'Repair from the exact comparison.', 'Write one contrast sentence.'], ar: ['استرجع الحطب المعوج.', 'حدد الأفعال الظاهرة.', 'اعثر على جمل القلب والنفس.', 'ابن جدول الظاهر والباطن.', 'أضف الأربعين عامًا دليلًا.', 'نفذ التحدي السريع.', 'صحح من المقارنة الدقيقة.', 'اكتب جملة مقارنة واحدة.'] },
  },
  6: {
    teacherPedagogy: T('Separate two ideas that students may blend together: the “door of honesty and goodness” explains straight character, while the nature paragraph explains how Yunus learned to look for lessons and deeper meaning. Use the setting to support reflection, not as decoration.', 'افصل بين فكرتين قد يخلط بينهما الطلاب: «باب الصدق والخير» يشرح استقامة الخلق، وفقرة الطبيعة تشرح كيف تعلم يونس البحث عن الدروس والمعنى الأعمق. استخدم المكان لدعم التأمل لا للزينة.'),
    teacherLessonPlan: T('1. Review the outer/inner wood link from Chapter 5. 2. Read Yunus’s answer about the door and identify who/what cannot enter. 3. Paraphrase the honesty idea in one A2 sentence. 4. Read the nature paragraph and list mountains, trees, animals, and rivers. 5. Connect the list to “found a lesson from everything”. 6. Complete the Quick Challenge and finish with one nature lesson supported by the text.', '1. راجع علاقة الحطب الظاهر بالمعنى الداخلي من الفصل الخامس. 2. اقرأ جواب يونس عن الباب وحدد من أو ما لا يستطيع الدخول. 3. أعد صياغة فكرة الصدق بجملة A2 واحدة. 4. اقرأ فقرة الطبيعة واكتب الجبال والأشجار والحيوانات والأنهار. 5. اربط القائمة بعبارة «وجد درسًا من كل شيء». 6. نفذ التحدي السريع واختم بدرس واحد من الطبيعة يدعمه النص.'),
    teacherTips: { en: ['Use Door of Honesty and Goodness for the straight-character connection.', 'Use Nature after students list the natural elements, then ask what changed when Yunus looked more deeply.'], ar: ['استخدم نقطة باب الصدق والخير لربط الاستقامة بالأخلاق.', 'استخدم نقطة الطبيعة بعد أن يعدد الطلاب عناصرها، ثم اسأل ماذا تغير عندما نظر يونس بعمق.'] },
    teacherPreReading: { en: ['Ask whether a place can help someone think more carefully about their behaviour.'], ar: ['اسأل هل يمكن لمكان ما أن يساعد الإنسان على التفكير بدقة في سلوكه.'] },
    teacherWhileReading: { en: ['Use two evidence colours: honesty/straightness and nature/learning.'], ar: ['استخدم لونين للدليل: الصدق/الاستقامة والطبيعة/التعلم.'] },
    selfPedagogy: T('Read Chapter 6 in two parts: first the door/honesty answer, then the nature/learning paragraph. Keep one note for each relationship.', 'اقرأ الفصل السادس في جزأين: أولًا جواب الباب/الصدق، ثم فقرة الطبيعة/التعلم. احتفظ بملاحظة لكل علاقة.'),
    selfLessonPlan: T('1. Read the door quote. 2. Write what “straight” means for character in this chapter. 3. List four things from nature. 4. Find what Yunus learned from them. 5. Do the Quick Challenge. 6. Write one sentence connecting a setting detail with a lesson.', '1. اقرأ قول الباب. 2. اكتب معنى «الاستقامة» في الأخلاق في هذا الفصل. 3. اكتب أربعة أشياء من الطبيعة. 4. اعثر على ما تعلمه يونس منها. 5. نفذ التحدي السريع. 6. اكتب جملة تربط تفصيلًا من المكان بدرس.'),
    selfTips: { en: ['Do not stop at naming mountains, trees, animals, and rivers; ask what Yunus learned.', 'Keep “door of honesty” and “nature lesson” as two linked but different ideas.'], ar: ['لا تتوقف عند تسمية الجبال والأشجار والحيوانات والأنهار؛ اسأل ماذا تعلم يونس.', 'احتفظ بفكرتي «باب الصدق» و«درس الطبيعة» كفكرتين مترابطتين لكن مختلفتين.'] },
    selfStudySequence: { en: ['Read the door answer.', 'Explain straight character simply.', 'List the nature details.', 'Find the lesson sentence.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair the two relationships separately.', 'Write one supported connection.'], ar: ['اقرأ جواب الباب.', 'اشرح استقامة الخلق ببساطة.', 'اكتب تفاصيل الطبيعة.', 'اعثر على جملة الدرس.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح العلاقتين كلًا على حدة.', 'اكتب علاقة مدعومة.'] },
  },
  7: {
    teacherPedagogy: T('Use comparison and reason. Students should first notice the visible contrast—many flowers versus one daisy—then explain Yunus’s reason from the text. Do not judge the number of flowers before reading his explanation.', 'استخدم المقارنة والسبب. ينبغي أن يلاحظ الطلاب أولًا الفرق الظاهر—أزهار كثيرة مقابل أقحوانة واحدة—ثم يشرحوا سبب يونس من النص. لا تحكم على عدد الأزهار قبل قراءة تفسيره.'),
    teacherLessonPlan: T('1. Predict what students might bring back from a flower task. 2. Read Taptuk’s instruction and the other dervishes’ return. 3. Pause when Yunus returns with one daisy and ask for neutral observations only. 4. Read the mocking/whispering lines and then Yunus’s explanation. 5. Build “difference → reason” on the board. 6. Complete the Quick Challenge and retell the event in four steps.', '1. توقع ما قد يحضره الطلاب من مهمة الأزهار. 2. اقرأ تعليمات تابتوك وعودة الدراويش الآخرين. 3. توقف عند عودة يونس بأقحوانة واحدة واطلب ملاحظات محايدة فقط. 4. اقرأ سطور السخرية والهمس ثم تفسير يونس. 5. اكتب على اللوح «الاختلاف ← السبب». 6. نفذ التحدي السريع وأعد سرد الحدث في أربع خطوات.'),
    teacherTips: { en: ['Use A Single Daisy to establish the visible difference.', 'Use Name of Allah only after students read Yunus’s explanation, so the hotspot confirms his stated reason.'], ar: ['استخدم نقطة أقحوانة واحدة لإثبات الفرق الظاهر.', 'استخدم نقطة اسم الله بعد أن يقرأ الطلاب تفسير يونس حتى تؤكد النقطة السبب المذكور.'] },
    teacherPreReading: { en: ['Ask what information is needed before deciding whether bringing one flower was a poor result.'], ar: ['اسأل ما المعلومات اللازمة قبل الحكم على أن إحضار زهرة واحدة نتيجة ضعيفة.'] },
    teacherWhileReading: { en: ['Track four events: task, many flowers, one daisy, explanation.'], ar: ['تتبع أربعة أحداث: المهمة، الأزهار الكثيرة، الأقحوانة الواحدة، التفسير.'] },
    selfPedagogy: T('Do not answer “Why one daisy?” until you have read Yunus’s explanation. First record the event difference, then record the reason.', 'لا تجب عن «لماذا أقحوانة واحدة؟» قبل قراءة تفسير يونس. سجل أولًا الفرق في الحدث ثم السبب.'),
    selfLessonPlan: T('1. Write the task in one phrase. 2. Note what the other dervishes brought. 3. Note what Yunus brought. 4. Read his explanation and underline because/reason information. 5. Do the Quick Challenge. 6. Retell the event as task → contrast → reaction → reason.', '1. اكتب المهمة في عبارة واحدة. 2. سجل ما أحضره الدراويش الآخرون. 3. سجل ما أحضره يونس. 4. اقرأ تفسيره وحدد معلومات السبب. 5. نفذ التحدي السريع. 6. أعد السرد: المهمة ← الفرق ← رد الفعل ← السبب.'),
    selfTips: { en: ['Separate what people saw from why Yunus acted that way.', 'Use the exact reason in the chapter before adding any personal reflection.'], ar: ['افصل بين ما رآه الناس وسبب تصرف يونس.', 'استخدم السبب الدقيق في الفصل قبل إضافة أي تأمل شخصي.'] },
    selfStudySequence: { en: ['Identify the task.', 'Compare the returns.', 'Notice the reaction.', 'Find Yunus’s reason.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair the reason if needed.', 'Retell four events.'], ar: ['حدد المهمة.', 'قارن العودتين.', 'لاحظ رد الفعل.', 'اعثر على سبب يونس.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح السبب عند الحاجة.', 'أعد سرد أربعة أحداث.'] },
  },
  8: {
    teacherPedagogy: T('Use the dying daisy only as the bridge into the explicit closing lesson. The learning goal is not simply to remember the flower’s final words; students should connect remembering Allah, doing every job well, and doing their best with a meaningful and fruitful daily life.', 'استخدم الأقحوانة التي تموت جسرًا إلى الدرس الختامي الصريح. الهدف ليس مجرد تذكر كلمات الزهرة الأخيرة؛ بل ربط ذكر الله وإتقان كل عمل وبذل الجهد بحياة يومية ذات معنى ومثمرة.'),
    teacherLessonPlan: T('1. Revisit the last moment of Chapter 7 and read the daisy’s words. 2. Ask why the flower is now ready to be picked. 3. Move immediately to the final paragraph and underline the advice verbs: remember, do, do our best. 4. Match each piece of advice with daily-life examples. 5. Complete the Quick Challenge. 6. Exit with two rules for daily life and one sentence explaining the result: a meaningful and fruitful life.', '1. عد إلى اللحظة الأخيرة من الفصل السابع واقرأ كلمات الأقحوانة. 2. اسأل لماذا أصبحت الزهرة مستعدة للقطف. 3. انتقل مباشرة إلى الفقرة الأخيرة وحدد أفعال النصيحة: اذكر، افعل، ابذل جهدك. 4. صل كل نصيحة بأمثلة من الحياة اليومية. 5. نفذ التحدي السريع. 6. اختم بقاعدتين للحياة اليومية وجملة تشرح النتيجة: حياة ذات معنى ومثمرة.'),
    teacherTips: { en: ['Use My Time only to close the daisy event.', 'Use Meaningful and Fruitful Life for the final cause-result link, then ask students for one ordinary job they can do carefully.'], ar: ['استخدم نقطة «انتهى وقتي» لإغلاق حدث الأقحوانة فقط.', 'استخدم نقطة الحياة ذات المعنى والمثمرة لعلاقة السبب والنتيجة الختامية، ثم اطلب عملًا عاديًا يمكن للطلاب أداؤه بعناية.'] },
    teacherPreReading: { en: ['Ask students to recall the two earlier stories—wood and flower—in one sentence each.'], ar: ['اطلب من الطلاب تذكر قصتي الحطب والزهرة بجملة واحدة لكل منهما.'] },
    teacherWhileReading: { en: ['Mark the transition from the daisy’s final words to Yunus’s direct advice for daily life.'], ar: ['حدد الانتقال من كلمات الأقحوانة الأخيرة إلى نصيحة يونس المباشرة للحياة اليومية.'] },
    selfPedagogy: T('Treat the daisy sentence as the end of the event and the final paragraph as the real lesson. Make a short advice → result map for daily life.', 'اعتبر جملة الأقحوانة نهاية الحدث والفقرة الأخيرة هي الدرس الحقيقي. أنشئ خريطة قصيرة «نصيحة ← نتيجة» للحياة اليومية.'),
    selfLessonPlan: T('1. Read why the daisy is ready to be picked. 2. Draw a line and separate “story ending” from “final lesson”. 3. Underline remember Allah, do every job well, and do our best. 4. Write the result: meaningful and fruitful life. 5. Do the Quick Challenge. 6. Apply one rule to an ordinary job you do today.', '1. اقرأ لماذا أصبحت الأقحوانة مستعدة للقطف. 2. ارسم خطًا وافصل «نهاية القصة» عن «الدرس الختامي». 3. ضع خطًا تحت ذكر الله وإتقان كل عمل وبذل الجهد. 4. اكتب النتيجة: حياة ذات معنى ومثمرة. 5. نفذ التحدي السريع. 6. طبق قاعدة واحدة على عمل عادي تقوم به اليوم.'),
    selfTips: { en: ['Do not stop after the daisy; the paragraph after it contains the whole-book advice.', 'Use one ordinary daily task for transfer instead of inventing a new story fact.'], ar: ['لا تتوقف عند الأقحوانة؛ فالفقرة بعدها تحمل نصيحة الكتاب الختامية.', 'استخدم مهمة يومية عادية للنقل بدل اختراع حقيقة جديدة في القصة.'] },
    selfStudySequence: { en: ['Close the daisy event.', 'Separate event from lesson.', 'Find the three advice ideas.', 'Connect advice to the result.', 'Check Word Notes.', 'Complete the Quick Challenge.', 'Repair from the final paragraph.', 'Apply one rule to daily life.'], ar: ['اختم حدث الأقحوانة.', 'افصل الحدث عن الدرس.', 'حدد أفكار النصيحة الثلاث.', 'اربط النصيحة بالنتيجة.', 'راجع ملاحظات المفردات.', 'نفذ التحدي السريع.', 'صحح من الفقرة الأخيرة.', 'طبق قاعدة على الحياة اليومية.'] },
  },
};

const retry = (focus: string, language: 'en' | 'ar'): string => {
  const en: Record<string, string> = {
    direct: 'Return to the sentence that directly names this detail. Do not choose a nearby biography fact.',
    sequence: 'Reread the event and check what happened before and after it.',
    comparison: 'Put the two habits, actions, or situations side by side and check the stated difference.',
    'cause-result': 'Find the because/result relationship and separate the reason from the result.',
    'character-action': 'Find the person or group in the question and check what they actually did.',
    motivation: 'Find the sentence that explains why the action happened. Use the stated reason only.',
    theme: 'Return to the explicit value or lesson and connect it with the event instead of choosing a random detail.',
  };
  const ar: Record<string, string> = {
    direct: 'ارجع إلى الجملة التي تذكر هذه المعلومة مباشرة ولا تختر حقيقة سيرة قريبة.',
    sequence: 'أعد قراءة الحدث وتحقق مما حدث قبله وبعده.',
    comparison: 'ضع العادتين أو الفعلين أو الموقفين جنبًا إلى جنب وتحقق من الفرق المذكور.',
    'cause-result': 'ابحث عن علاقة السبب والنتيجة وافصل السبب عن النتيجة.',
    'character-action': 'اعثر على الشخص أو المجموعة في السؤال وتحقق مما فعلوه فعلًا.',
    motivation: 'ابحث عن الجملة التي تشرح سبب الفعل واستخدم السبب المذكور فقط.',
    theme: 'ارجع إلى القيمة أو الدرس الصريح واربطه بالحدث بدل اختيار تفصيل عشوائي.',
  };
  return (language === 'en' ? en : ar)[focus] ?? (language === 'en' ? 'Return to the relevant chapter evidence and check the exact relationship.' : 'ارجع إلى دليل الفصل المناسب وتحقق من العلاقة الدقيقة.');
};

const demand = (focus: string): BlueprintCognitiveDemandV2 => {
  if (focus === 'sequence') return 'sequence';
  if (focus === 'comparison') return 'compare';
  if (focus === 'cause-result' || focus === 'character-action' || focus === 'motivation') return 'connect';
  if (focus === 'theme' || focus === 'inference') return 'infer';
  return 'identify';
};

const improve = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter, override?: BlueprintCognitiveDemandV2): BlueprintAssessmentItem => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  const focus = point?.focus ?? 'direct';
  const enExplanation = item.exercise.en.explanation || point?.claim.en || '';
  const arExplanation = item.exercise.ar.explanation || point?.claim.ar || '';
  return {
    ...item,
    learningOutcomeId: point?.learningOutcomeId ?? item.learningOutcomeId,
    exercise: {
      en: { ...item.exercise.en, feedback: { correct: enExplanation ? `Correct. ${enExplanation}` : 'Correct. The answer matches the chapter.', incorrect: retry(focus, 'en') } },
      ar: { ...item.exercise.ar, feedback: { correct: arExplanation ? `صحيح. ${arExplanation}` : 'صحيح. الإجابة تطابق الفصل.', incorrect: retry(focus, 'ar') } },
    },
    quality: {
      cognitiveDemand: override ?? demand(focus),
      assessmentPurpose: T('Measure a meaningful biographical or value-based chapter idea without reducing the book to dates and trivia.', 'قياس فكرة ذات معنى من السيرة أو القيم دون اختزال الكتاب في التواريخ والتفاصيل العشوائية.'),
      successEvidence: point?.claim ?? T('The learner gives the response supported by the linked evidence.', 'يقدم المتعلم الاستجابة التي يدعمها الدليل المرتبط.'),
      misconceptionTargets: [T('The learner may remember a visible detail but miss the simple relationship or lesson attached to it.', 'قد يتذكر المتعلم تفصيلًا ظاهرًا لكنه يغفل العلاقة أو الدرس البسيط المرتبط به.')],
      feedback: { correct: T('Confirm and connect the response to evidence.', 'تأكيد الاستجابة وربطها بالدليل.'), incorrect: T('Redirect to the relevant evidence without giving the answer immediately.', 'إعادة التوجيه إلى الدليل المناسب دون إعطاء الإجابة مباشرة.'), rationale: T('The retry cue keeps the learner inside the chapter and repairs the specific relationship.', 'يبقي تلميح إعادة المحاولة المتعلم داخل الفصل ويعالج العلاقة المحددة.') },
    },
  };
};

const applyGuideSpec = (
  guide: BlueprintGuideContent,
  spec: GuideSpec,
  language: 'en' | 'ar',
  kind: 'teacher' | 'selfStudy',
): BlueprintGuideContent => kind === 'teacher'
  ? {
      ...guide,
      pedagogy: spec.teacherPedagogy[language],
      lessonPlan: spec.teacherLessonPlan[language],
      interactiveTips: spec.teacherTips[language],
      preReading: spec.teacherPreReading[language],
      whileReading: spec.teacherWhileReading[language],
    }
  : {
      ...guide,
      pedagogy: spec.selfPedagogy[language],
      lessonPlan: spec.selfLessonPlan[language],
      interactiveTips: spec.selfTips[language],
      studySequence: spec.selfStudySequence[language],
    };

export const applyYunusA2FinalPedagogy = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const quick = quicks[chapter.chapterId];
  const guideSpec = guideSpecs[chapter.chapterId];
  if (!quick) throw new Error(`[Yunus A2 Gold] Missing Quick Challenge for Chapter ${chapter.chapterId}.`);
  if (!guideSpec) throw new Error(`[Yunus A2 Gold] Missing guide specification for Chapter ${chapter.chapterId}.`);

  const items = chapter.assessmentItems.map((item) => {
    if (item.id === `yunus-a2-c${chapter.chapterId}-quick`) {
      return { ...item, learningPointId: quick.learningPointId, exercise: quick.exercise };
    }
    const finalOverride = finalOverrides[item.id];
    return finalOverride ? { ...item, exercise: finalOverride.exercise } : item;
  });

  return {
    ...chapter,
    assessmentItems: items.map(item => improve(
      item,
      chapter,
      item.id === `yunus-a2-c${chapter.chapterId}-quick`
        ? quick.demand
        : finalOverrides[item.id]?.demand,
    )),
    teacherGuide: {
      en: applyGuideSpec(chapter.teacherGuide.en, guideSpec, 'en', 'teacher'),
      ar: applyGuideSpec(chapter.teacherGuide.ar, guideSpec, 'ar', 'teacher'),
    },
    selfStudyGuide: {
      en: applyGuideSpec(chapter.selfStudyGuide.en, guideSpec, 'en', 'selfStudy'),
      ar: applyGuideSpec(chapter.selfStudyGuide.ar, guideSpec, 'ar', 'selfStudy'),
    },
  };
};
