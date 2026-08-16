import {
  defineLearningBlueprint,
  type BlueprintAssessmentItem,
  type BlueprintCognitiveFocus,
  type BlueprintStage,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b2BlueprintAuthoring';
import { mosesB2HighlightTargets } from './source';

type PointDraft = {
  key: string;
  focus: BlueprintCognitiveFocus;
  claim: LocalizedText;
  evidence: LocalizedText;
  stage: BlueprintStage;
  exercise: BlueprintAssessmentItem['exercise'];
};

type ChapterDraft = {
  chapterId: number;
  theme: LocalizedText;
  objectives: [LocalizedText, LocalizedText];
  primaryQuestion: LocalizedText;
  analysisQuestion: LocalizedText;
  points: PointDraft[];
};

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (mosesB2HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `moses-b2-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

const guides = (draft: ChapterDraft) => guideBundle({
  focus: draft.theme,
  primaryQuestion: draft.primaryQuestion,
  secondQuestion: draft.analysisQuestion,
  grammar: L(
    'Use because, therefore, whereas, however, according to the chapter, probably, and this suggests to separate evidence, inference, contrast, and degrees of certainty.',
    'استخدم لأن، ولذلك، بينما، ومع ذلك، ووفقًا للفصل، وعلى الأرجح، ويدل هذا على للفصل بين الدليل والاستنتاج والمقارنة ودرجات اليقين.',
  ),
  pronunciation: L(
    'Practise the chapter Word Notes, proper names, and stress in longer academic words before the analytical response.',
    'تدرّب على ملاحظات المفردات وأسماء الأعلام ونبر الكلمات الأكاديمية الطويلة قبل الاستجابة التحليلية.',
  ),
  fast: L(
    `Write 120–150 words answering: ${draft.analysisQuestion.en} Use two distinct details from this chapter, state what each proves, and preserve any source qualification in the text.`,
    `اكتب 120–150 كلمة تجيب عن: ${draft.analysisQuestion.ar} واستخدم دليلين مختلفين من هذا الفصل، وبيّن ما يثبته كل دليل، وحافظ على أي قيد للمصدر في النص.`,
  ),
  support: L(
    'Use: “The chapter states ___. This shows ___. A second detail is ___. Together, the evidence suggests ___. The chapter does not prove ___.”',
    'استخدم: «يذكر الفصل ___. وهذا يدل على ___. والدليل الثاني هو ___. وتشير الأدلة معًا إلى ___. ولا يثبت الفصل ___.»',
  ),
});

const drafts: ChapterDraft[] = [
  {
    chapterId: 1,
    theme: L('population growth, political fear, and the beginning of oppression', 'النمو السكاني والخوف السياسي وبداية الاضطهاد'),
    objectives: [
      L('Trace how the chapter moves from Israelite settlement and growth to political fear.', 'يتتبع انتقال الفصل من استقرار بني إسرائيل ونموهم إلى الخوف السياسي.'),
      L('Explain how fear of a possible ruling class leads to measures that make life harder for a community.', 'يشرح كيف يقود الخوف من تحوّل جماعة إلى طبقة حاكمة إلى إجراءات تجعل حياتها أصعب.'),
    ],
    primaryQuestion: L('How does demographic growth become a political concern in the chapter?', 'كيف يتحول النمو السكاني إلى قلق سياسي في الفصل؟'),
    analysisQuestion: L('How does the chapter build a cause-and-effect chain from settlement to oppression?', 'كيف يبني الفصل سلسلة سبب ونتيجة من الاستقرار إلى الاضطهاد؟'),
    points: [
      {
        key: 'growth', focus: 'cause-result', stage: 'quick',
        claim: L('The Israelites became a large community because their numbers increased rapidly.', 'أصبح بنو إسرائيل جماعة كبيرة لأن عددهم تزايد بسرعة.'),
        evidence: L('rapidly increased in number', 'تَزَايَدَ عَدَدُهُمْ بِسُرْعَةٍ'),
        exercise: mc(
          L('Which change in the Israelite community helps explain the rulers’ later concern?', 'أي تغير في جماعة بني إسرائيل يساعد على تفسير قلق الحكام لاحقًا؟'),
          { en: ['Their population increased rapidly', 'Their population disappeared', 'They became Pharaohs'], ar: ['تزايد عددهم بسرعة', 'اختفى عددهم', 'أصبحوا فراعنة'] },
          0,
          L('The chapter first stresses rapid population growth before describing political fear.', 'يؤكد الفصل أولًا النمو السكاني السريع قبل وصف الخوف السياسي.'),
        ),
      },
      {
        key: 'danger', focus: 'cause-result', stage: 'knowledge',
        claim: L('Egyptian rulers began to view the growing Israelites as a political danger.', 'بدأ الحكام المصريون ينظرون إلى بني إسرائيل المتزايدين بوصفهم خطرًا سياسيًا.'),
        evidence: L('the Egyptian rulers began to see them as a danger', 'بَدَأَ الْحُكَّامُ الْمِصْرِيُّونَ يَرَوْنَهُمْ خَطَرًا'),
        exercise: mc(
          L('What political fear follows the population growth described in Chapter 1?', 'ما الخوف السياسي الذي يتبع النمو السكاني المذكور في الفصل الأول؟'),
          { en: ['Rulers began to see the Israelites as a danger', 'Rulers wanted them to become kings immediately', 'Rulers stopped noticing the community'], ar: ['بدأ الحكام يرون بني إسرائيل خطرًا', 'أراد الحكام أن يصبحوا ملوكًا فورًا', 'توقف الحكام عن ملاحظة الجماعة'] },
          0,
          L('The chapter explicitly connects rapid growth with the rulers beginning to see the community as a danger.', 'يربط الفصل صراحة بين النمو السريع وبدء الحكام في رؤية الجماعة خطرًا.'),
        ),
      },
    ],
  },
  {
    chapterId: 2,
    theme: L('historical-source language, forced labor, and uncertainty about Exodus chronology', 'لغة المصادر التاريخية والعمل القسري وعدم اليقين في تأريخ الخروج'),
    objectives: [
      L('Distinguish sourced and probable historical claims from claims the chapter says are unknown.', 'يميز بين الادعاءات التاريخية المنسوبة إلى المصادر أو المرجحة وبين ما يصرح الفصل بأنه مجهول.'),
      L('Use hedging language accurately when discussing Pharaoh identification and Exodus chronology.', 'يستخدم لغة الترجيح بدقة عند مناقشة هوية الفرعون وتأريخ الخروج.'),
    ],
    primaryQuestion: L('Which historical claims does the chapter present cautiously rather than as certain?', 'أي الادعاءات التاريخية يقدمها الفصل بحذر بدلًا من تقديمها كحقائق يقينية؟'),
    analysisQuestion: L('Why does preserving words such as “probably” and “unknown” matter when summarizing this chapter?', 'لماذا يهم الحفاظ على ألفاظ مثل «على الأرجح» و«غير معروف» عند تلخيص هذا الفصل؟'),
    points: [
      {
        key: 'unknown-date', focus: 'inference', stage: 'quick',
        claim: L('The chapter explicitly says the exact date of the Exodus is unknown.', 'يصرح الفصل بأن التاريخ الدقيق للخروج غير معروف.'),
        evidence: L('the exact date of the Exodus from Egypt is unknown', 'التَّارِيخَ الدَّقِيقَ لِلْخُرُوجِ مِنْ مِصْرَ غَيْرُ مَعْرُوفٍ'),
        exercise: tf(
          L('The chapter gives an exact and certain date for the Exodus from Egypt.', 'يعطي الفصل تاريخًا دقيقًا ويقينيًا لخروج بني إسرائيل من مصر.'),
          false,
          L('The chapter states directly that the exact date is unknown.', 'يذكر الفصل مباشرة أن التاريخ الدقيق غير معروف.'),
        ),
      },
      {
        key: 'probable-ramses', focus: 'inference', stage: 'review',
        claim: L('Ramses II is presented as the probable Pharaoh who drowned, not as an established certainty.', 'يُعرض رمسيس الثاني بوصفه الفرعون المرجح للغرق لا بوصفه حقيقة يقينية.'),
        evidence: L('the pharaoh who drowned at sea was probably Ramses II', 'فَالْفِرْعَوْنُ الَّذِي غَرِقَ فِي الْبَحْرِ كَانَ عَلَى الْأَرْجَحِ رَمْسِيسَ الثَّانِي'),
        exercise: mc(
          L('Which wording best preserves the chapter’s historical caution about the drowned Pharaoh?', 'أي صياغة تحافظ أفضل على الحذر التاريخي في الفصل بشأن الفرعون الغارق؟'),
          { en: ['Ramses II was probably the Pharaoh', 'Ramses II is proven beyond doubt to be the Pharaoh', 'The chapter names no possible Pharaoh'], ar: ['كان رمسيس الثاني على الأرجح هو الفرعون', 'ثبت بلا أي شك أن رمسيس الثاني هو الفرعون', 'لا يذكر الفصل أي فرعون محتمل'] },
          0,
          L('The chapter uses probability language and separately notes that the exact Exodus date is unknown.', 'يستخدم الفصل لغة الترجيح ويذكر بصورة منفصلة أن التاريخ الدقيق للخروج غير معروف.'),
        ),
      },
    ],
  },
  {
    chapterId: 3,
    theme: L('the Nile, infrastructure, manpower, and political authority', 'النيل والبنية التحتية والقوة العاملة والسلطة السياسية'),
    objectives: [
      L('Explain why the Nile is presented as economically and politically vital.', 'يشرح لماذا يُعرض النيل بوصفه حيويًا اقتصاديًا وسياسيًا.'),
      L('Analyse the relationship between large infrastructure projects and forced manpower.', 'يحلل العلاقة بين مشروعات البنية التحتية الضخمة والقوة العاملة القسرية.'),
    ],
    primaryQuestion: L('What makes control of the Nile central to the chapter’s explanation of Egyptian power?', 'ما الذي يجعل السيطرة على النيل مركزية في تفسير الفصل لقوة مصر؟'),
    analysisQuestion: L('How does the chapter connect natural resources, administration, and human labor?', 'كيف يربط الفصل الموارد الطبيعية والإدارة والعمل البشري؟'),
    points: [
      {
        key: 'life-source', focus: 'main-idea', stage: 'quick',
        claim: L('The Nile is presented as the source of life for Egypt.', 'يُعرض النيل بوصفه مصدر الحياة لمصر.'),
        evidence: L('The Nile is the source of life for Egypt', 'النِّيلُ هُوَ مَصْدَرُ الْحَيَاةِ لِمِصْرَ'),
        exercise: tap(
          L('What central role does the chapter give the Nile in ancient Egypt?', 'ما الدور المركزي الذي يمنحه الفصل للنيل في مصر القديمة؟'),
          L('It is presented as the source of life for Egypt.', 'يُعرض بوصفه مصدر الحياة لمصر.'),
          L('The chapter uses this statement before explaining irrigation, transport, commerce, and authority.', 'يستخدم الفصل هذه العبارة قبل شرح الري والنقل والتجارة والسلطة.'),
        ),
      },
      {
        key: 'manpower', focus: 'cause-result', stage: 'final',
        claim: L('Large river projects required a vast amount of manpower.', 'احتاجت المشروعات النهرية الضخمة إلى قوة عمل هائلة.'),
        evidence: L('These projects demanded a vast amount of manpower', 'كَانَتْ هَذِهِ الْمَشْرُوعَاتُ تَحْتَاجُ إِلَى قُوَّةِ عَمَلٍ هَائِلَةٍ'),
        exercise: fill(
          L('Complete the chapter’s link between infrastructure and labor.', 'أكمل علاقة الفصل بين البنية التحتية والعمل.'),
          L('The river projects demanded a vast amount of [blank].', 'احتاجت المشروعات إلى [blank] هائلة.'),
          L('manpower', 'قوة عمل'),
          L('The chapter connects major Nile projects with a large labor requirement and then discusses slave manpower.', 'يربط الفصل مشروعات النيل الكبرى بالحاجة إلى قوة عمل كبيرة ثم يناقش عمل العبيد.'),
        ),
      },
    ],
  },
  {
    chapterId: 4,
    theme: L('the water motif, Moses’s survival, and foreshadowing of later salvation', 'رمزية الماء ونجاة موسى والتمهيد للنجاة اللاحقة'),
    objectives: [
      L('Identify the chapter’s account of Moses being saved after the basket reaches the palace area.', 'يحدد رواية الفصل لنجاة موسى بعد وصول السلة إلى منطقة القصر.'),
      L('Analyse how the chapter connects the Nile at Moses’s beginning with the later Red Sea salvation.', 'يحلل كيف يربط الفصل النيل في بداية حياة موسى بالنجاة اللاحقة في البحر الأحمر.'),
    ],
    primaryQuestion: L('How does water function in both the beginning and later direction of Moses’s story?', 'كيف يعمل الماء في بداية قصة موسى وفي اتجاهها اللاحق؟'),
    analysisQuestion: L('Why does the chapter deliberately connect the Nile episode with the Red Sea?', 'لماذا يربط الفصل عمدًا حادثة النيل بالبحر الأحمر؟'),
    points: [
      {
        key: 'saved', focus: 'sequence', stage: 'quick',
        claim: L('Baby Moses is found near Pharaoh’s palace and is described as miraculously saved.', 'يُعثر على الرضيع موسى قرب قصر فرعون ويُوصف بأنه نجا بأعجوبة.'),
        evidence: L('he was miraculously saved', 'وَقَدْ نَجَا بِأُعْجُوبَةٍ'),
        exercise: matching(
          L('Match the water episode with the outcome stated in the chapter.', 'صل حدث الماء بالنتيجة المذكورة في الفصل.'),
          { en: [['Basket on the Nile', 'Moses reaches the palace area and is saved'], ['Foot of a tree', 'The child is found near Pharaoh’s palace']], ar: [['السلة في النيل', 'يصل موسى إلى منطقة القصر وينجو'], ['أصل الشجرة', 'يُعثر على الطفل قرب قصر فرعون']] },
          L('The chapter locates the basket and child by the Nile near the palace and explicitly describes Moses as saved.', 'يحدد الفصل السلة والطفل عند النيل قرب القصر ويصف موسى صراحة بالنجاة.'),
        ),
      },
      {
        key: 'water-frame', focus: 'comparison', stage: 'knowledge',
        claim: L('The chapter links Moses’s early survival in water with the later salvation of his people at the Red Sea.', 'يربط الفصل نجاة موسى المبكرة في الماء بنجاة قومه لاحقًا في البحر الأحمر.'),
        evidence: L('The salvation of Prophet Moses (pbuh) and his people from the Pharaoh also took place in waters, in the Red Sea', 'نَجَاةَ النَّبِيِّ مُوسَى عَلَيْهِ السَّلَامُ وَقَوْمَهُ مِنَ الْفِرْعَوْنِ حَدَثَتْ أَيْضًا فِي الْمِيَاهِ'),
        exercise: matching(
          L('How does Chapter 4 pair the two major water settings?', 'كيف يقرن الفصل الرابع بين موقعي الماء الرئيسيين؟'),
          { en: [['Nile', 'Moses’s early survival'], ['Red Sea', 'Later salvation from Pharaoh']], ar: [['النيل', 'نجاة موسى في طفولته'], ['البحر الأحمر', 'النجاة اللاحقة من فرعون']] },
          L('The final sentence deliberately connects Moses’s first water journey with the later Red Sea salvation.', 'تربط الجملة الأخيرة عمدًا رحلة موسى الأولى في الماء بالنجاة اللاحقة في البحر الأحمر.'),
        ),
      },
    ],
  },
  {
    chapterId: 5,
    theme: L('absolute power, oppression, and the social effects of weakness', 'السلطة المطلقة والظلم وآثار الضعف الاجتماعي'),
    objectives: [
      L('Describe Pharaoh’s rule as absolute and tyrannical within the chapter.', 'يصف حكم فرعون بوصفه مطلقًا وطاغيًا داخل الفصل.'),
      L('Explain how absolute rule is connected with the oppression and dishonoring of the Children of Israel.', 'يشرح كيف ترتبط السلطة المطلقة بظلم بني إسرائيل وإهانتهم.'),
    ],
    primaryQuestion: L('How does the chapter characterize Pharaoh’s use of political power?', 'كيف يصف الفصل استخدام فرعون للسلطة السياسية؟'),
    analysisQuestion: L('What relationship does the chapter establish between absolute power and the treatment of a vulnerable community?', 'ما العلاقة التي يقيمها الفصل بين السلطة المطلقة ومعاملة جماعة مستضعفة؟'),
    points: [
      {
        key: 'absolute', focus: 'main-idea', stage: 'quick',
        claim: L('Pharaoh is presented as a tyrant ruling with absolute power.', 'يُعرض فرعون بوصفه طاغية يحكم بسلطة مطلقة.'),
        evidence: L('As a tyrant, the Pharaoh ruled Egypt with absolute power over the people', 'كَانَ فِرْعَوْنُ طَاغِيَةً يَحْكُمُ مِصْرَ بِسُلْطَةٍ مُطْلَقَةٍ عَلَى النَّاسِ'),
        exercise: fill(
          L('Complete the chapter’s description of Pharaoh’s rule.', 'أكمل وصف الفصل لحكم فرعون.'),
          L('Pharaoh ruled Egypt with [blank] power.', 'حكم فرعون مصر بسلطة [blank].'),
          L('absolute', 'مطلقة'),
          L('The opening sentence explicitly describes his rule as tyrannical and absolute.', 'تصف الجملة الافتتاحية حكمه صراحة بأنه طاغٍ ومطلق.'),
        ),
      },
      {
        key: 'oppression', focus: 'cause-result', stage: 'review',
        claim: L('Pharaoh’s rule includes direct oppression of the Children of Israel.', 'يتضمن حكم فرعون ظلمًا مباشرًا لبني إسرائيل.'),
        evidence: L('He oppressed the Children of Israel', 'يَظْلِمُ بَنِي إِسْرَائِيلَ'),
        exercise: tf(
          L('The chapter presents Pharaoh’s absolute power as protecting the Children of Israel from unfair treatment.', 'يقدم الفصل سلطة فرعون المطلقة بوصفها حماية لبني إسرائيل من المعاملة الظالمة.'),
          false,
          L('The chapter says the opposite: he oppressed them and used methods to dishonor them.', 'يقول الفصل العكس: كان يظلمهم ويستخدم وسائل لإهانتهم.'),
        ),
      },
    ],
  },
  {
    chapterId: 6,
    theme: L('economic calculation, violent policy, and Moses’s mother’s trust', 'الحساب الاقتصادي وسياسة القتل وثقة أم موسى'),
    objectives: [
      L('Explain why Pharaoh changes the killing policy when labor supply becomes a problem.', 'يشرح لماذا يغير فرعون سياسة القتل عندما تصبح القوة العاملة مشكلة.'),
      L('Analyse the contrast between political calculation and Moses’s mother acting under divine guidance.', 'يحلل المقارنة بين الحساب السياسي وتصرف أم موسى تحت الهداية الإلهية.'),
    ],
    primaryQuestion: L('Why does Pharaoh modify a policy that he had ordered for political control?', 'لماذا يعدل فرعون سياسة كان قد أمر بها للسيطرة السياسية؟'),
    analysisQuestion: L('How does the chapter contrast Pharaoh’s economic logic with the mother’s trust under danger?', 'كيف يقارن الفصل منطق فرعون الاقتصادي بثقة الأم في وقت الخطر؟'),
    points: [
      {
        key: 'manpower-policy', focus: 'cause-result', stage: 'quick',
        claim: L('Pharaoh changes the policy because killing boys is reducing the labor force.', 'يغير فرعون السياسة لأن قتل الأولاد يقلل القوة العاملة.'),
        evidence: L('the Pharaoh began to lose his manpower', 'بَدَأَ يَفْقِدُ قُوَّتَهُ الْعَامِلَةَ'),
        exercise: mc(
          L('What practical problem pushes Pharaoh toward an alternating-year policy?', 'ما المشكلة العملية التي تدفع فرعون إلى سياسة التناوب بين الأعوام؟'),
          { en: ['He is losing manpower for heavy work', 'He has too many palace nurses', 'The Nile stops flowing'], ar: ['بدأ يفقد القوة العاملة للأعمال الشاقة', 'أصبح لديه عدد كبير من مرضعات القصر', 'توقف النيل عن الجريان'] },
          0,
          L('The chapter says economic experts warn Pharaoh after the killing policy begins reducing manpower.', 'يذكر الفصل أن الخبراء الاقتصاديين يحذرون فرعون بعد أن بدأت سياسة القتل تقلل القوة العاملة.'),
        ),
      },
      {
        key: 'mother-guidance', focus: 'comparison', stage: 'final',
        claim: L('Moses’s mother puts him in the river after receiving guidance not to fear or grieve.', 'تضع أم موسى طفلها في النهر بعد تلقي توجيه بألا تخاف ولا تحزن.'),
        evidence: L('when you fear for him, then put him into the river and fear not, nor grieve', 'فَإِذَا خِفْتِ عَلَيْهِ فَأَلْقِيهِ فِي الْيَمِّ وَلَا تَخَافِي وَلَا تَحْزَنِي'),
        exercise: mc(
          L('What makes the mother’s decision to place Moses in the river different from a simple act of despair?', 'ما الذي يجعل قرار الأم وضع موسى في النهر مختلفًا عن فعل اليأس؟'),
          { en: ['The chapter presents it as a response to divine guidance and reassurance', 'She wants to abandon the child permanently', 'Pharaoh personally orders her to do it'], ar: ['يقدمه الفصل استجابة للوحي والطمأنة', 'كانت تريد التخلي عن الطفل نهائيًا', 'أمرها فرعون شخصيًا بذلك'] },
          0,
          L('The quoted guidance tells her what to do in fear and immediately tells her not to fear or grieve.', 'يخبرها التوجيه المقتبس بما تفعله عند الخوف ثم يطمئنها مباشرة بألا تخاف ولا تحزن.'),
        ),
      },
    ],
  },
  {
    chapterId: 7,
    theme: L('mercy within the palace, secret belief, and persuasion', 'الرحمة داخل القصر والإيمان السري والإقناع'),
    objectives: [
      L('Contrast Queen Asiye’s secret belief and kindness with Pharaoh’s position.', 'يقارن إيمان الملكة آسية السري ولطفها بموقف فرعون.'),
      L('Explain how her description of Moses as a ray of light supports her attempt to keep him.', 'يشرح كيف يدعم وصفها لموسى بأنه شعاع نور محاولتها الاحتفاظ به.'),
    ],
    primaryQuestion: L('How does Asiye’s response to the baby differ from the political environment around her?', 'كيف تختلف استجابة آسية للطفل عن البيئة السياسية المحيطة بها؟'),
    analysisQuestion: L('How do belief, emotion, and persuasion work together in this chapter?', 'كيف يعمل الإيمان والعاطفة والإقناع معًا في هذا الفصل؟'),
    points: [
      {
        key: 'secret-believer', focus: 'comparison', stage: 'quick',
        claim: L('Asiye is described as a secret believer unlike her husband.', 'تُوصف آسية بأنها مؤمنة في السر على خلاف زوجها.'),
        evidence: L('She was a secret believer', 'كَانَتْ مُؤْمِنَةً فِي السِّرِّ'),
        exercise: tf(
          L('The chapter describes Queen Asiye as sharing Pharaoh’s disbelief without any difference.', 'يصف الفصل الملكة آسية بأنها تشارك فرعون موقفه دون أي اختلاف.'),
          false,
          L('The chapter explicitly calls her a secret believer and contrasts her with her husband.', 'يسميها الفصل صراحة مؤمنة في السر ويقارنها بزوجها.'),
        ),
      },
      {
        key: 'ray', focus: 'motivation', stage: 'knowledge',
        claim: L('Asiye persuades Pharaoh by presenting the baby as a ray of light for them.', 'تقنع آسية فرعون بتقديم الطفل بوصفه شعاع نور لهما.'),
        evidence: L('persuaded her husband with her words that this baby would be a ray of light for both of them', 'أَقْنَعَتْ زَوْجَهَا بِكَلِمَاتِهَا أَنَّ هَذَا الطِّفْلَ سَيَكُونُ شُعَاعَ نُورٍ لَهُمَا'),
        exercise: mc(
          L('What argument does Asiye use when persuading Pharaoh to keep the baby?', 'ما الحجة التي تستخدمها آسية لإقناع فرعون بالاحتفاظ بالطفل؟'),
          { en: ['The baby could be a ray of light for them', 'The baby could command the army immediately', 'The baby was already a palace official'], ar: ['قد يكون الطفل شعاع نور لهما', 'يمكن للطفل قيادة الجيش فورًا', 'كان الطفل موظفًا في القصر بالفعل'] },
          0,
          L('Her language frames the baby as hope and supports her request to keep him.', 'تقدم لغتها الطفل بوصفه أملًا وتدعم طلبها الاحتفاظ به.'),
        ),
      },
    ],
  },
  {
    chapterId: 8,
    theme: L('identity, moral conflict, and Moses before prophethood', 'الهوية والصراع الأخلاقي وموسى قبل النبوة'),
    objectives: [
      L('Preserve the chapter’s timeline by recognizing that Moses has not yet received the prophetic mission.', 'يحافظ على تسلسل الفصل بإدراك أن موسى لم يكن قد تلقى الرسالة النبوية بعد.'),
      L('Analyse his conflict between gratitude for palace upbringing and opposition to Israelite oppression.', 'يحلل صراعه بين الامتنان لتربية القصر ومعارضة ظلم بني إسرائيل.'),
    ],
    primaryQuestion: L('What tensions shape Moses’s identity as a young man in the palace?', 'ما التوترات التي تشكل هوية موسى شابًا في القصر؟'),
    analysisQuestion: L('How does the chapter distinguish moral concern and leadership qualities from the later prophetic mission?', 'كيف يميز الفصل بين الاهتمام الأخلاقي وصفات القيادة وبين الرسالة النبوية اللاحقة؟'),
    points: [
      {
        key: 'before-mission', focus: 'sequence', stage: 'quick',
        claim: L('At this point in the narrative, Moses has not yet received his prophetic mission.', 'في هذه المرحلة من السرد لم تكن الرسالة النبوية قد نزلت على موسى بعد.'),
        evidence: L('He had not yet been given the prophetic mission', 'وَلَمْ تَكُنِ الرِّسَالَةُ النَّبَوِيَّةُ قَدْ نَزَلَتْ عَلَيْهِ بَعْدُ'),
        exercise: tap(
          L('Had Moses already received his prophetic mission during this palace-stage conflict?', 'هل كان موسى قد تلقى رسالته النبوية بالفعل أثناء صراع مرحلة القصر؟'),
          L('No. The chapter explicitly says the prophetic mission had not yet been given.', 'لا. يذكر الفصل صراحة أن الرسالة النبوية لم تكن قد نزلت عليه بعد.'),
          L('This source limit matters when interpreting his actions as a young man.', 'هذا القيد الزمني مهم عند تفسير أفعاله بوصفه شابًا.'),
        ),
      },
      {
        key: 'inner-conflict', focus: 'comparison', stage: 'review',
        claim: L('Moses struggles between gratitude toward Pharaoh and opposing the oppression of the Israelites.', 'يتردد موسى بين شكر فرعون ومعارضة الظلم الواقع على بني إسرائيل.'),
        evidence: L('He couldn’t decide whether he should be thankful to the Pharaoh or oppose the oppression against the Children of Israel', 'كَانَ مُتَرَدِّدًا بَيْنَ شُكْرِ فِرْعَوْنَ أَوْ مُعَارَضَةِ الظُّلْمِ الْوَاقِعِ عَلَى بَنِي إِسْرَائِيلَ'),
        exercise: mc(
          L('Which conflict best captures Moses’s position as a young man in Chapter 8?', 'أي صراع يعبر أفضل عن موقف موسى شابًا في الفصل الثامن؟'),
          { en: ['Gratitude for palace upbringing versus opposition to oppression', 'Choosing between two royal titles', 'Deciding whether to leave the Nile'], ar: ['الامتنان لتربية القصر مقابل معارضة الظلم', 'الاختيار بين لقبين ملكيين', 'تقرير هل يغادر النيل'] },
          0,
          L('The chapter explicitly presents this tension before the later prophetic mission.', 'يعرض الفصل هذا التوتر صراحة قبل الرسالة النبوية اللاحقة.'),
        ),
      },
    ],
  },
  {
    chapterId: 9,
    theme: L('unintentional harm, immediate repentance, and legal danger', 'الضرر غير المقصود والتوبة الفورية والخطر القانوني'),
    objectives: [
      L('Distinguish the accidental killing from an intentional act of murder.', 'يميز القتل غير المقصود من فعل القتل المتعمد.'),
      L('Analyse Moses’s immediate turn to forgiveness and the later danger created by the event.', 'يحلل توجه موسى الفوري إلى المغفرة والخطر اللاحق الناتج عن الحادثة.'),
    ],
    primaryQuestion: L('What does the chapter say about intention and consequence in the Egyptian’s death?', 'ماذا يقول الفصل عن القصد والنتيجة في موت المصري؟'),
    analysisQuestion: L('How does Moses’s response to a serious unintended consequence reveal responsibility rather than denial?', 'كيف تكشف استجابة موسى لنتيجة خطيرة غير مقصودة عن المسؤولية بدل الإنكار؟'),
    points: [
      {
        key: 'unintentional', focus: 'character-action', stage: 'quick',
        claim: L('The Egyptian’s death is presented as unintentional.', 'يُعرض موت المصري بوصفه غير مقصود.'),
        evidence: L('He unintentionally killed the Copt', 'لَقَدْ قَتَلَ الْقِبْطِيَّ مِنْ غَيْرِ قَصْدٍ'),
        exercise: matching(
          L('Match the action with the chapter’s description of intention and result.', 'صل الفعل بوصف الفصل للقصد والنتيجة.'),
          { en: [['Moses’s strike', 'Angry intervention'], ['Egyptian’s death', 'Unintentional result']], ar: [['ضربة موسى', 'تدخل في حالة غضب'], ['موت المصري', 'نتيجة غير مقصودة']] },
          L('The text distinguishes Moses’s angry intervention from an intention to kill.', 'يميز النص تدخل موسى الغاضب من نية القتل.'),
        ),
      },
      {
        key: 'forgiveness', focus: 'character-action', stage: 'final',
        claim: L('After the death, Moses immediately turns to Allah for forgiveness.', 'بعد الموت يتوجه موسى فورًا إلى الله طالبًا المغفرة.'),
        evidence: L('He immediately turned to Allah to ask for forgiveness', 'فَتَوَجَّهَ إِلَى اللهِ فَوْرًا يَطْلُبُ الْمَغْفِرَةَ'),
        exercise: tf(
          L('After the unintended death, Moses avoids responsibility and makes no request for forgiveness.', 'بعد الموت غير المقصود يتجنب موسى المسؤولية ولا يطلب المغفرة.'),
          false,
          L('The chapter says he is filled with fear and sadness and immediately asks Allah for forgiveness.', 'يذكر الفصل أنه امتلأ خوفًا وحزنًا وتوجه فورًا إلى الله طالبًا المغفرة.'),
        ),
      },
    ],
  },
  {
    chapterId: 10,
    theme: L('repentance, moral commitment, and refusing complicity with wrongdoing', 'التوبة والالتزام الأخلاقي ورفض مساندة الإجرام'),
    objectives: [
      L('Interpret Moses’s description of the repeated quarrel as evidence of a recurring problem.', 'يفسر وصف موسى للنزاع المتكرر بوصفه دليلًا على مشكلة متكررة.'),
      L('Explain the moral commitment expressed after forgiveness.', 'يشرح الالتزام الأخلاقي الذي عبّر عنه موسى بعد المغفرة.'),
    ],
    primaryQuestion: L('How does Moses move from recognizing his mistake to a new moral commitment?', 'كيف ينتقل موسى من الاعتراف بخطئه إلى التزام أخلاقي جديد؟'),
    analysisQuestion: L('What does the chapter suggest about repentance when it is followed by a decision about future conduct?', 'ماذا يقترح الفصل عن التوبة عندما تتبعها نية تتعلق بالسلوك المستقبلي؟'),
    points: [
      {
        key: 'troublemaker', focus: 'character-action', stage: 'quick',
        claim: L('Moses recognizes the repeatedly quarreling Israelite as a clear troublemaker.', 'يدرك موسى أن الإسرائيلي المتكرر في الخصام مثير واضح للمشاكل.'),
        evidence: L('you are a plain troublemaker', 'إِنَّكَ لَغَوِيٌّ مُبِينٌ'),
        exercise: fill(
          L('Complete Moses’s judgment about the man seeking help again.', 'أكمل حكم موسى على الرجل الذي يطلب المساعدة مرة أخرى.'),
          L('Moses tells him, “You are a plain [blank].”', 'قال له موسى: «إنك لَـ[blank] مبين». '),
          L('troublemaker', 'غوي'),
          L('The repeated dispute leads Moses to identify a pattern rather than treat the second incident as isolated.', 'يقود النزاع المتكرر موسى إلى التعرف على نمط بدل التعامل مع الحادثة الثانية بوصفها منفصلة.'),
        ),
      },
      {
        key: 'no-helper', focus: 'turning-point', stage: 'knowledge',
        claim: L('After forgiveness, Moses vows not to be a helper for criminals.', 'بعد المغفرة يتعهد موسى ألا يكون ظهيرًا للمجرمين.'),
        evidence: L('I will never more be a helper for the Mujrimeen', 'فَلَنْ أَكُونَ ظَهِيرًا لِلْمُجْرِمِينَ'),
        exercise: mc(
          L('Which statement shows that Moses’s repentance includes a future moral commitment?', 'أي عبارة تظهر أن توبة موسى تتضمن التزامًا أخلاقيًا للمستقبل؟'),
          { en: ['He will not be a helper for criminals', 'He will ignore every future conflict', 'He will return to palace privilege'], ar: ['لن يكون ظهيرًا للمجرمين', 'سيتجاهل كل نزاع في المستقبل', 'سيعود إلى امتيازات القصر'] },
          0,
          L('The vow follows the request for forgiveness and turns repentance into a commitment about future action.', 'يأتي التعهد بعد طلب المغفرة ويحوّل التوبة إلى التزام بشأن الفعل المستقبلي.'),
        ),
      },
    ],
  },
  {
    chapterId: 11,
    theme: L('escape, trust, and vulnerability during the journey to Midian', 'الهروب والثقة والهشاشة أثناء الرحلة إلى مدين'),
    objectives: [
      L('Explain why Midian provides a practical destination outside Pharaoh’s rule.', 'يشرح لماذا توفر مدين وجهة عملية خارج حكم فرعون.'),
      L('Analyse how the chapter represents trust during an unprepared and dangerous desert journey.', 'يحلل كيف يمثل الفصل الثقة أثناء رحلة صحراوية خطرة وغير مستعد لها.'),
    ],
    primaryQuestion: L('What makes the journey to Midian both a practical escape and a test of trust?', 'ما الذي يجعل الرحلة إلى مدين هروبًا عمليًا واختبارًا للثقة في الوقت نفسه؟'),
    analysisQuestion: L('How does the chapter contrast Moses’s lack of human protection with the trust that accompanies him?', 'كيف يقارن الفصل غياب الحماية البشرية عن موسى بالثقة التي ترافقه؟'),
    points: [
      {
        key: 'outside-rule', focus: 'cause-result', stage: 'quick',
        claim: L('Midian is significant because it is an inhabited region outside Pharaoh’s rule.', 'تكتسب مدين أهميتها لأنها منطقة مأهولة خارج حكم فرعون.'),
        evidence: L('It was a region not ruled by the Pharaoh', 'كَانَتْ بِلَادًا لَا يَحْكُمُهَا فِرْعَوْنُ'),
        exercise: mc(
          L('Why is Midian a strategically meaningful destination for Moses?', 'لماذا تُعد مدين وجهة ذات معنى عملي لموسى؟'),
          { en: ['It is inhabited and not ruled by Pharaoh', 'It is Pharaoh’s military capital', 'It is inside the palace grounds'], ar: ['هي مأهولة ولا يحكمها فرعون', 'هي العاصمة العسكرية لفرعون', 'تقع داخل أرض القصر'] },
          0,
          L('The chapter identifies Midian as the nearest inhabited area beyond Pharaoh’s rule.', 'يحدد الفصل مدين بوصفها أقرب منطقة مأهولة خارج حكم فرعون.'),
        ),
      },
      {
        key: 'companion', focus: 'theme', stage: 'review',
        claim: L('The journey emphasizes that Moses has no companion except Allah and his trust in Him.', 'تؤكد الرحلة أن موسى لا رفيق له إلا الله وثقته به.'),
        evidence: L('His only companion in this hot desert was Allah and his trust in Him', 'لَمْ يَكُنْ لَهُ رَفِيقٌ فِي هَذِهِ الصَّحْرَاءِ الْحَارَّةِ إِلَّا اللَّهُ وَثِقَتُهُ بِهِ'),
        exercise: tf(
          L('Moses crosses the desert with a protected group of human companions and guards.', 'يعبر موسى الصحراء مع مجموعة محمية من الرفاق والحراس.'),
          false,
          L('The chapter deliberately emphasizes the absence of human companionship and his trust in Allah.', 'يتعمد الفصل التأكيد على غياب الرفقة البشرية وثقته بالله.'),
        ),
      },
    ],
  },
  {
    chapterId: 12,
    theme: L('physical hardship, social observation, and helping others before oneself', 'المشقة الجسدية والملاحظة الاجتماعية ومساعدة الآخرين قبل النفس'),
    objectives: [
      L('Explain why the two women must wait at the watering place.', 'يشرح لماذا تضطر الفتاتان إلى الانتظار عند مورد الماء.'),
      L('Analyse Moses’s decision to respond to their hardship despite his own exhaustion and thirst.', 'يحلل قرار موسى الاستجابة لمشقتهما رغم إرهاقه وعطشه.'),
    ],
    primaryQuestion: L('What difficulty does Moses notice at the well, and what does he do with that information?', 'ما الصعوبة التي يلاحظها موسى عند البئر، وماذا يفعل بهذه المعلومة؟'),
    analysisQuestion: L('How does the chapter use Moses’s own physical need to make his offer of help more significant?', 'كيف يستخدم الفصل حاجة موسى الجسدية ليجعل عرضه للمساعدة أكثر دلالة؟'),
    points: [
      {
        key: 'waiting', focus: 'cause-result', stage: 'quick',
        claim: L('The women can water their animals only after the male shepherds leave with their flocks.', 'لا تستطيع الفتاتان سقي حيواناتهما إلا بعد انصراف الرعاة الرجال بقطعانهم.'),
        evidence: L('the young women could only water their animals after the male shepherds had taken their flocks away', 'لَمْ تَسْتَطِعِ الشَّابَّتَانِ سَقْيَ حَيَوَانَاتِهِمَا إِلَّا بَعْدَ أَنْ يَنْصَرِفَ الرُّعَاةُ الرِّجَالُ بِقُطْعَانِهِمْ'),
        exercise: tf(
          L('The two women can water their flock before the other shepherds without difficulty.', 'تستطيع الفتاتان سقي قطيعهما قبل بقية الرعاة من غير صعوبة.'),
          false,
          L('The chapter says the crowd forces them to wait until the male shepherds leave.', 'يذكر الفصل أن الازدحام يجبرهما على الانتظار حتى ينصرف الرعاة الرجال.'),
        ),
      },
      {
        key: 'help-before-thirst', focus: 'character-action', stage: 'final',
        claim: L('Moses notices their hardship and offers help while putting aside his own thirst.', 'يلاحظ موسى مشقتهما ويعرض المساعدة متجاوزًا عطشه.'),
        evidence: L('Forgetting his thirst, Moses approached nearer to them and asked if he could help them in any way', 'نَاسِيًا عَطَشَهُ، اقْتَرَبَ مُوسَى مِنْهُمَا وَسَأَلَ إِنْ كَانَ بِإِمْكَانِهِ مُسَاعَدَتُهُمَا بِأَيِّ شَكْلٍ'),
        exercise: matching(
          L('Match the chapter detail with what it reveals about the situation at the well.', 'صل تفصيل الفصل بما يكشفه عن الموقف عند البئر.'),
          { en: [['Moses’s own condition', 'Exhausted and thirsty'], ['His response to the women', 'He offers help after noticing their hardship']], ar: [['حال موسى نفسه', 'منهك وعطشان'], ['استجابته للفتاتين', 'يعرض المساعدة بعد ملاحظة مشقتهما']] },
          L('The contrast between Moses’s physical need and his decision to help makes the action especially significant.', 'تجعل المقارنة بين حاجة موسى الجسدية وقراره بالمساعدة الفعل ذا دلالة خاصة.'),
        ),
      },
    ],
  },
  {
    chapterId: 13,
    theme: L('service, selflessness, and the transition from the well to a safe home', 'الخدمة والإيثار والانتقال من البئر إلى بيت آمن'),
    objectives: [
      L('Trace how Moses’s act of watering the flock changes his immediate circumstances.', 'يتتبع كيف يغير فعل موسى في سقي القطيع ظروفه المباشرة.'),
      L('Infer selflessness from the order in which he helps and only later notices his own unmet need.', 'يستنتج الإيثار من ترتيب مساعدته للآخرين ثم ملاحظته لاحقًا حاجته الشخصية.'),
    ],
    primaryQuestion: L('What sequence connects Moses’s help at the well with the invitation to the family home?', 'ما التسلسل الذي يربط مساعدة موسى عند البئر بالدعوة إلى بيت الأسرة؟'),
    analysisQuestion: L('What does Moses realizing his own thirst only after helping suggest about his priorities in this scene?', 'ماذا يوحي إدراك موسى عطشه بعد المساعدة فقط عن أولوياته في هذا المشهد؟'),
    points: [
      {
        key: 'waters-flock', focus: 'sequence', stage: 'quick',
        claim: L('Moses directly waters the women’s sheep for them.', 'يسقي موسى أغنام الفتاتين لهما مباشرة.'),
        evidence: L('I will water the sheep for you.” He watered their sheep', 'سَأَسْقِي لَكُمَا الْأَغْنَامَ». فَسَقَى لَهُمَا أَغْنَامَهُمَا'),
        exercise: matching(
          L('Match Moses’s offer with the action that immediately follows.', 'صل عرض موسى بالفعل الذي يليه مباشرة.'),
          { en: [['Offer', 'I will water the sheep for you'], ['Action', 'He waters their sheep']], ar: [['العرض', 'سأسقي لكما الأغنام'], ['الفعل', 'فسقى لهما أغنامهما']] },
          L('The chapter moves immediately from the offer to the completed act of help.', 'ينتقل الفصل مباشرة من عرض المساعدة إلى إتمام فعلها.'),
        ),
      },
      {
        key: 'own-need', focus: 'inference', stage: 'knowledge',
        claim: L('Only after helping does Moses realize that he has not drunk any water.', 'بعد المساعدة فقط يدرك موسى أنه لم يشرب أي ماء.'),
        evidence: L("he suddenly realized he hadn't drunk any water", 'أَدْرَكَ أَنَّهُ لَمْ يَشْرَبْ أَيَّ مَاءٍ'),
        exercise: mc(
          L('Which detail most strongly supports an inference that Moses temporarily put others’ needs before his own?', 'أي تفصيل يدعم بقوة استنتاج أن موسى قدم حاجة الآخرين مؤقتًا على حاجته؟'),
          { en: ['He realizes only afterward that he has not drunk water', 'He refuses to help until he eats', 'He asks the women to serve him first'], ar: ['يدرك بعد ذلك فقط أنه لم يشرب ماء', 'يرفض المساعدة حتى يأكل', 'يطلب من الفتاتين خدمته أولًا'] },
          0,
          L('The ordering of events shows help first and recognition of his own thirst afterward.', 'يظهر ترتيب الأحداث المساعدة أولًا ثم إدراك عطشه بعد ذلك.'),
        ),
      },
    ],
  },
  {
    chapterId: 14,
    theme: L('safety, work, character recognition, and spiritual preparation', 'الأمان والعمل والتعرف على الشخصية والإعداد الروحي'),
    objectives: [
      L('Identify the qualities that make Moses suitable for work and shelter in Midian.', 'يحدد الصفات التي تجعل موسى مناسبًا للعمل والمأوى في مدين.'),
      L('Analyse the ten-year shepherd period as preparation rather than narrative delay.', 'يحلل فترة الرعي لعشر سنوات بوصفها إعدادًا لا تأخيرًا سرديًا.'),
    ],
    primaryQuestion: L('What changes Moses from a vulnerable stranger into a trusted member of the household?', 'ما الذي يحول موسى من غريب مستضعف إلى فرد موثوق في البيت؟'),
    analysisQuestion: L('Why does the chapter call the ten years in Midian a period of spiritual preparation for prophethood?', 'لماذا يسمي الفصل السنوات العشر في مدين فترة إعداد روحي للنبوة؟'),
    points: [
      {
        key: 'reliable-strong', focus: 'character-action', stage: 'quick',
        claim: L('The household needs someone reliable and strong, qualities associated with Moses in the scene.', 'يحتاج البيت إلى شخص موثوق وقوي، وهما صفتان ترتبطان بموسى في المشهد.'),
        evidence: L('they needed someone reliable and strong', 'بِحَاجَةٍ إِلَى شَخْصٍ مَوْثُوقٍ وَقَوِيٍّ'),
        exercise: fill(
          L('Complete the two qualities connected with the employment decision.', 'أكمل الصفتين المرتبطتين بقرار العمل.'),
          L('They needed someone [blank].', 'كانوا بحاجة إلى شخص [blank].'),
          L('reliable and strong', 'موثوق وقوي'),
          L('The chapter links the employment offer with the need for reliability and strength.', 'يربط الفصل عرض العمل بالحاجة إلى الأمانة والقوة.'),
        ),
      },
      {
        key: 'preparation', focus: 'turning-point', stage: 'review',
        claim: L('The ten years in Midian are explicitly interpreted as spiritual preparation for prophethood.', 'تُفسر السنوات العشر في مدين صراحة بوصفها إعدادًا روحيًا للنبوة.'),
        evidence: L('It was a period of spiritual preparation for prophethood', 'فَتْرَةَ إِعْدَادٍ رُوحِيٍّ لِلنُّبُوَّةِ'),
        exercise: mc(
          L('How does the chapter interpret Moses’s ten years as a shepherd in Midian?', 'كيف يفسر الفصل سنوات موسى العشر راعيًا في مدين؟'),
          { en: ['As spiritual preparation for prophethood', 'As a period with no importance', 'As a permanent abandonment of his people'], ar: ['بوصفها إعدادًا روحيًا للنبوة', 'بوصفها فترة بلا أهمية', 'بوصفها تخليًا دائمًا عن قومه'] },
          0,
          L('The chapter explicitly assigns preparatory meaning to this long period.', 'يعطي الفصل هذه الفترة الطويلة معنى إعداديًا بصورة صريحة.'),
        ),
      },
    ],
  },
  {
    chapterId: 15,
    theme: L('being lost, seeking guidance, the fire, and the beginning of prophetic mission', 'ضياع الطريق وطلب الهداية والنار وبداية الرسالة النبوية'),
    objectives: [
      L('Explain Moses’s practical reasons for approaching the distant fire.', 'يشرح الأسباب العملية لاقتراب موسى من النار البعيدة.'),
      L('Analyse how an ordinary staff becomes the focus through which the first sign is introduced.', 'يحلل كيف تصبح العصا العادية محورًا يقدم من خلاله أول آية.'),
    ],
    primaryQuestion: L('How does a practical search for warmth and direction become a turning point in Moses’s life?', 'كيف يتحول البحث العملي عن الدفء والاتجاه إلى نقطة تحول في حياة موسى؟'),
    analysisQuestion: L('Why does the chapter emphasize Moses’s ordinary use of the staff before it becomes a sign?', 'لماذا يؤكد الفصل استخدام موسى العادي للعصا قبل أن تصبح آية؟'),
    points: [
      {
        key: 'fire-purpose', focus: 'motivation', stage: 'quick',
        claim: L('Moses approaches the fire hoping to bring warmth and find guidance for the route.', 'يقترب موسى من النار آملًا في جلب الدفء والعثور على هداية للطريق.'),
        evidence: L('hoping to bring his family some fire to warm themselves and find a guide by the fire', 'آمِلًا أَنْ يَجْلِبَ لِأَهْلِهِ بَعْضَ النَّارِ لِيَسْتَدْفِئُوا وَيَجِدَ هِدَايَةً عِنْدَ النَّارِ'),
        exercise: mc(
          L('Why does Moses initially approach the fire he sees near Sinai?', 'لماذا يقترب موسى في البداية من النار التي يراها قرب سيناء؟'),
          { en: ['To seek warmth and possible guidance', 'To begin a military contest', 'To abandon his family'], ar: ['لطلب الدفء وربما الهداية', 'لبدء مسابقة عسكرية', 'لترك أسرته'] },
          0,
          L('His first purpose is practical: warmth for the family and help finding the route.', 'غرضه الأول عملي: الدفء للأسرة والمساعدة في معرفة الطريق.'),
        ),
      },
      {
        key: 'staff-focus', focus: 'turning-point', stage: 'final',
        claim: L('The question about the staff makes Moses focus on the ordinary object before its miraculous transformation.', 'يجعل السؤال عن العصا موسى يركز على الشيء العادي قبل تحوله المعجز.'),
        evidence: L('Allah asked about the staff in Moses’ hand to make him focus on it', 'سَأَلَ اللهُ عَنِ الْعَصَا فِي يَدِ مُوسَى لِيَجْعَلَهُ يُرَكِّزُ عَلَيْهَا'),
        exercise: mc(
          L('What narrative purpose does the chapter give Allah’s question about the staff?', 'ما الغرض السردي الذي يعطيه الفصل لسؤال الله عن العصا؟'),
          { en: ['It focuses Moses on the staff before the coming miracle', 'It proves the staff has no use', 'It tells Moses to discard every tool'], ar: ['يركز موسى على العصا قبل المعجزة القادمة', 'يثبت أن العصا بلا فائدة', 'يأمر موسى بالتخلي عن كل أداة'] },
          0,
          L('The chapter explicitly interprets the question as preparation for the miracle about to happen.', 'يفسر الفصل السؤال صراحة بأنه إعداد للمعجزة التي كانت على وشك الحدوث.'),
        ),
      },
    ],
  },
  {
    chapterId: 16,
    theme: L('the two signs, sacred calling, and the command to confront Pharaoh', 'الآيتان والنداء المقدس والأمر بمواجهة فرعون'),
    objectives: [
      L('Identify the staff and shining hand as the two signs described in the chapter.', 'يحدد العصا واليد البيضاء المضيئة بوصفهما الآيتين المذكورتين في الفصل.'),
      L('Explain how receiving signs is immediately connected with a mission directed toward Pharaoh and his chiefs.', 'يشرح كيف يرتبط تلقي الآيات مباشرة بمهمة موجهة إلى فرعون وملئه.'),
    ],
    primaryQuestion: L('How does the chapter move from personal reassurance to public prophetic responsibility?', 'كيف ينتقل الفصل من الطمأنة الشخصية إلى المسؤولية النبوية العامة؟'),
    analysisQuestion: L('What relationship does the chapter establish between receiving signs and being sent toward a ruler who has crossed limits?', 'ما العلاقة التي يقيمها الفصل بين تلقي الآيات والإرسال إلى حاكم تجاوز الحدود؟'),
    points: [
      {
        key: 'two-signs', focus: 'direct', stage: 'quick',
        claim: L('The staff miracle and shining hand are presented together as two great signs.', 'تُعرض معجزة العصا واليد البيضاء المضيئة معًا بوصفهما آيتين عظيمتين.'),
        evidence: L('were two great miracles', 'آيَتَيْنِ عَظِيمَتَيْنِ'),
        exercise: tf(
          L('The chapter presents the staff and the shining white hand as the two great signs given to Moses.', 'يقدم الفصل العصا واليد البيضاء المضيئة بوصفهما الآيتين العظيمتين اللتين أُعطيتا لموسى.'),
          true,
          L('Both signs are described together immediately before the command to go to Pharaoh.', 'تُذكر الآيتان معًا مباشرة قبل الأمر بالذهاب إلى فرعون.'),
        ),
      },
      {
        key: 'mission', focus: 'cause-result', stage: 'knowledge',
        claim: L('After receiving the signs, Moses is commanded to go to Pharaoh and his chiefs because they have violated the limits.', 'بعد تلقي الآيات يُؤمر موسى بالذهاب إلى فرعون وملئه لأنهم تجاوزوا الحدود.'),
        evidence: L('go to Pharaoh and his chiefs, for they are an evil group and have violated all limits', 'اذْهَبْ إِلَى فِرْعَوْنَ وَمَلَئِهِ، فَإِنَّهُمْ قَوْمٌ فَاسِقُونَ قَدْ تَجَاوَزُوا كُلَّ الْحُدُودِ'),
        exercise: mc(
          L('What responsibility follows the giving of the two signs?', 'ما المسؤولية التي تتبع إعطاء الآيتين؟'),
          { en: ['Moses must go to Pharaoh and his chiefs', 'Moses must remain permanently at the mountain', 'Moses must hide the signs from everyone'], ar: ['على موسى الذهاب إلى فرعون وملئه', 'على موسى البقاء دائمًا عند الجبل', 'على موسى إخفاء الآيات عن الجميع'] },
          0,
          L('The signs are not an isolated experience; the chapter immediately connects them with a mission against transgression.', 'ليست الآيات تجربة منعزلة؛ يربطها الفصل مباشرة بمهمة في مواجهة تجاوز الحدود.'),
        ),
      },
    ],
  },
  {
    chapterId: 17,
    theme: L('monotheism, prophetic continuity, and Abrahamic lineage', 'التوحيد واستمرار الرسالة والنسب الإبراهيمي'),
    objectives: [
      L('Explain how the chapter connects Moses’s religion with Jacob’s monotheism.', 'يشرح كيف يربط الفصل دين موسى بتوحيد يعقوب.'),
      L('Trace the chapter’s claim of prophetic continuity through Abraham’s descendants and successors.', 'يتتبع ادعاء الفصل باستمرار الرسالة عبر ذرية إبراهيم وخلفائه.'),
    ],
    primaryQuestion: L('How does the chapter place Moses within a continuing line of monotheistic guidance?', 'كيف يضع الفصل موسى داخل خط مستمر من الهداية التوحيدية؟'),
    analysisQuestion: L('What is the difference between biological descent and continuity of message in the way this chapter presents them?', 'ما الفرق بين النسب البيولوجي واستمرار الرسالة كما يقدمهما هذا الفصل؟'),
    points: [
      {
        key: 'monotheism', focus: 'comparison', stage: 'quick',
        claim: L('The chapter presents Moses’s religion as the same monotheism associated with Jacob.', 'يقدم الفصل دين موسى بوصفه التوحيد نفسه المرتبط بيعقوب.'),
        evidence: L('The religion of Moses (pbuh) was the same as that of Jacob (pbuh), which was Islamic monotheism', 'كَانَ دِينُ مُوسَى عَلَيْهِ السَّلَامُ هُوَ التَّوْحِيدُ، وَهُوَ نَفْسُ دِينِ يَعْقُوبَ عَلَيْهِ السَّلَامُ'),
        exercise: matching(
          L('Match the relationship described in the chapter.', 'صل العلاقة كما يصفها الفصل.'),
          { en: [['Moses', 'Monotheism'], ['Jacob', 'Same religious line']], ar: [['موسى', 'التوحيد'], ['يعقوب', 'الدين نفسه']] },
          L('The chapter explicitly describes continuity between Moses and Jacob through monotheism.', 'يصف الفصل صراحة الاستمرار بين موسى ويعقوب من خلال التوحيد.'),
        ),
      },
      {
        key: 'abraham-line', focus: 'sequence', stage: 'review',
        claim: L('Moses is placed among Abraham’s descendants, while later prophets are described as successors after Abraham.', 'يوضع موسى ضمن ذرية إبراهيم، ويُوصف الأنبياء اللاحقون بأنهم خلف له.'),
        evidence: L('Moses (pbuh), therefore, was one of the descendants of Abraham (pbuh)', 'كَانَ مُوسَى مِنْ ذُرِّيَّةِ إِبْرَاهِيمَ'),
        exercise: tf(
          L('The chapter disconnects Moses completely from Abraham’s lineage and prophetic legacy.', 'يفصل الفصل موسى تمامًا عن نسب إبراهيم وإرثه النبوي.'),
          false,
          L('It explicitly identifies Moses as a descendant of Abraham and describes later prophets as successors.', 'يحدد موسى صراحة من ذرية إبراهيم ويصف الأنبياء اللاحقين بالخلف.'),
        ),
      },
    ],
  },
  {
    chapterId: 18,
    theme: L('shared mission, monotheism, slavery, and Pharaoh’s claim over the Israelites', 'المهمة المشتركة والتوحيد والعبودية وادعاء فرعون ملكية بني إسرائيل'),
    objectives: [
      L('Identify Moses and Aaron as partners in delivering the message to Pharaoh.', 'يحدد موسى وهارون شريكين في تبليغ الرسالة إلى فرعون.'),
      L('Analyse the conflict between Moses’s claim that the Israelites belong to Allah and Pharaoh’s claim that they are his slaves.', 'يحلل التعارض بين قول موسى إن رب بني إسرائيل هو الله وادعاء فرعون أنهم عبيده.'),
    ],
    primaryQuestion: L('What does Moses ask Pharaoh to release, and how does Pharaoh frame the people being requested?', 'ماذا يطلب موسى من فرعون أن يطلق، وكيف يصور فرعون القوم المطلوبين؟'),
    analysisQuestion: L('How does the dialogue turn a request for release into a conflict over lordship and human ownership?', 'كيف يحول الحوار طلب الإطلاق إلى صراع حول الربوبية وملكية البشر؟'),
    points: [
      {
        key: 'release', focus: 'character-action', stage: 'quick',
        claim: L('Moses directly asks Pharaoh to send the Children of Israel with him.', 'يطلب موسى مباشرة من فرعون أن يرسل معه بني إسرائيل.'),
        evidence: L('I want you to send the Children of Israel with me', 'أُرِيدُ أَنْ تُرْسِلَ مَعِي بَنِي إِسْرَائِيلَ'),
        exercise: fill(
          L('Complete Moses’s central request to Pharaoh.', 'أكمل طلب موسى المركزي من فرعون.'),
          L('“I want you to send the [blank] with me.”', '«أريد أن ترسل معي [blank]». '),
          L('Children of Israel', 'بني إسرائيل'),
          L('The request is stated directly after Pharaoh asks Moses what he wants.', 'يُذكر الطلب مباشرة بعد سؤال فرعون لموسى عما يريد.'),
        ),
      },
      {
        key: 'slaves', focus: 'comparison', stage: 'final',
        claim: L('Pharaoh resists the request by describing the Israelites as his slaves.', 'يقاوم فرعون الطلب بوصف بني إسرائيل بأنهم عبيده.'),
        evidence: L('Why should I send them, as they are my slaves?', 'لِمَاذَا أُرْسِلُهُمْ وَهُمْ عَبِيدِي'),
        exercise: fill(
          L('Complete Pharaoh’s wording that reveals his claim of ownership over the Israelites.', 'أكمل صياغة فرعون التي تكشف ادعاءه ملكية بني إسرائيل.'),
          L('“Why should I send them, as they are my [blank]?”', '«لماذا أرسلهم وهم [blank]؟»'),
          L('slaves', 'عبيدي'),
          L('The wording exposes the political and moral conflict between Pharaoh’s ownership claim and Moses’s message.', 'تكشف الصياغة الصراع السياسي والأخلاقي بين ادعاء فرعون الملكية ورسالة موسى.'),
        ),
      },
    ],
  },
  {
    chapterId: 19,
    theme: L('threat, manipulation of the past, failed dialogue, and the turn to signs', 'التهديد واستغلال الماضي وفشل الحوار والانتقال إلى الآيات'),
    objectives: [
      L('Analyse how Pharaoh uses Moses’s upbringing and past action as rhetorical pressure.', 'يحلل كيف يستخدم فرعون تربية موسى وفعله الماضي ضغطًا خطابيًا.'),
      L('Explain why the chapter moves from intellectual dialogue to displaying the signs.', 'يشرح لماذا ينتقل الفصل من الحوار الفكري إلى إظهار الآيات.'),
    ],
    primaryQuestion: L('How does Pharaoh weaponize Moses’s past in the dialogue?', 'كيف يحول فرعون ماضي موسى إلى أداة ضغط في الحوار؟'),
    analysisQuestion: L('What marks the turning point from argument to open threat and demonstration of signs?', 'ما الذي يحدد نقطة التحول من الجدل إلى التهديد الصريح وإظهار الآيات؟'),
    points: [
      {
        key: 'past-threat', focus: 'motivation', stage: 'quick',
        claim: L('Pharaoh brings up Moses’s palace upbringing and past killing as a way to threaten him.', 'يذكر فرعون تربية موسى في القصر والقتل الماضي وسيلة لتهديده.'),
        evidence: L('Pharaoh’s talk about his past, his upbringing, and the Pharaoh’s charity was his way of threatening him', 'حَدِيثَ فِرْعَوْنَ عَنْ مَاضِيهِ، وَتَرْبِيَتِهِ، وَإِحْسَانِهِ إِلَيْهِ، مَا هُوَ إِلَّا طَرِيقَةٌ لِتَهْدِيدِهِ'),
        exercise: mc(
          L('Why does Pharaoh repeatedly mention Moses’s palace upbringing and past?', 'لماذا يكرر فرعون ذكر تربية موسى في القصر وماضيه؟'),
          { en: ['To threaten and weaken his position in the dialogue', 'To praise Moses as the new Pharaoh', 'To request forgiveness from Moses'], ar: ['لتهديده وإضعاف موقفه في الحوار', 'لتمجيد موسى بوصفه الفرعون الجديد', 'لطلب المغفرة من موسى'] },
          0,
          L('The chapter explicitly interprets Pharaoh’s references to the past as a threat.', 'يفسر الفصل صراحة إشارات فرعون إلى الماضي بوصفها تهديدًا.'),
        ),
      },
      {
        key: 'dialogue-fails', focus: 'turning-point', stage: 'knowledge',
        claim: L('When intellectual discussion does not work and Pharaoh threatens imprisonment, Moses turns to the signs.', 'عندما لا يجدي الحوار الفكري ويهدد فرعون بالسجن ينتقل موسى إلى الآيات.'),
        evidence: L('the intellectual discussions did not work', 'النِّقَاشَاتِ الْفِكْرِيَّةَ لَمْ تُجْدِ نَفْعًا'),
        exercise: mc(
          L('What development leads the chapter from verbal argument toward the display of miracles?', 'ما التطور الذي يقود الفصل من الجدل الكلامي نحو إظهار المعجزات؟'),
          { en: ['Dialogue fails and Pharaoh moves to open threats', 'Pharaoh accepts the message immediately', 'Moses decides the signs are unnecessary'], ar: ['يفشل الحوار وينتقل فرعون إلى التهديد الصريح', 'يقبل فرعون الرسالة فورًا', 'يقرر موسى أن الآيات غير ضرورية'] },
          0,
          L('The chapter states that the discussions fail, records an imprisonment threat, and then introduces the signs.', 'يذكر الفصل فشل النقاش ثم تهديد السجن ثم يقدم الآيات.'),
        ),
      },
    ],
  },
  {
    chapterId: 20,
    theme: L('miracle versus illusion and Pharaoh’s strategy to control public interpretation', 'المعجزة مقابل الخداع البصري واستراتيجية فرعون للسيطرة على تفسير الجمهور'),
    objectives: [
      L('Distinguish the magicians’ illusion from the signs attributed to Moses.', 'يميز خداع السحرة البصري من الآيات المنسوبة إلى موسى.'),
      L('Explain why Pharaoh’s advisers want a public contest rather than simply ignoring Moses.', 'يشرح لماذا يريد مستشارو فرعون مسابقة عامة بدل تجاهل موسى.'),
    ],
    primaryQuestion: L('What distinction does the chapter draw between what appears miraculous and what it calls illusion?', 'ما التمييز الذي يصنعه الفصل بين ما يبدو خارقًا وما يسميه خداعًا بصريًا؟'),
    analysisQuestion: L('Why is controlling the public impact of Moses’s signs a political problem for Pharaoh’s advisers?', 'لماذا تصبح السيطرة على تأثير آيات موسى في الجمهور مشكلة سياسية لمستشاري فرعون؟'),
    points: [
      {
        key: 'illusion', focus: 'comparison', stage: 'quick',
        claim: L('The magicians’ moving snake forms are explicitly described as only an illusion.', 'تُوصف أشكال الثعابين المتحركة لدى السحرة صراحة بأنها مجرد خداع بصري.'),
        evidence: L('this was only an illusion', 'هَذَا كَانَ مُجَرَّدَ خِدَاعٍ بَصَرِيٍّ'),
        exercise: tf(
          L('The chapter treats the magicians’ moving staffs and ropes as the same kind of genuine sign as Moses’s miracles.', 'يعامل الفصل عصي السحرة وحبالهم المتحركة بوصفها من النوع نفسه من الآيات الحقيقية مثل معجزات موسى.'),
          false,
          L('It explicitly labels the magicians’ display an illusion.', 'يسمي عرض السحرة صراحة خداعًا بصريًا.'),
        ),
      },
      {
        key: 'reduce-impact', focus: 'motivation', stage: 'review',
        claim: L('The advisers propose magicians in order to reduce the impact of Moses’s miracles on the population.', 'يقترح المستشارون السحرة لتقليل تأثير معجزات موسى على الناس.'),
        evidence: L('they aimed to lessen the impact of Moses’ miracles on the population', 'سَعَوْا لِتَقْلِيلِ تَأْثِيرِ مُعْجِزَاتِ مُوسَى عَلَى النَّاسِ'),
        exercise: mc(
          L('What political purpose does the proposed contest serve for Pharaoh’s advisers?', 'ما الغرض السياسي الذي تخدمه المسابقة المقترحة لدى مستشاري فرعون؟'),
          { en: ['To weaken the public impact of Moses’s signs', 'To help Moses spread his message', 'To end all public attention to Pharaoh'], ar: ['إضعاف تأثير آيات موسى في الناس', 'مساعدة موسى على نشر رسالته', 'إنهاء كل اهتمام عام بفرعون'] },
          0,
          L('Their strategy is explicitly aimed at controlling how the population interprets the signs.', 'تهدف استراتيجيتهم صراحة إلى التحكم في كيفية تفسير الناس للآيات.'),
        ),
      },
    ],
  },
  {
    chapterId: 21,
    theme: L('recognition by experts, collapse of illusion, and political backlash', 'اعتراف الخبراء وانهيار الخداع ورد الفعل السياسي'),
    objectives: [
      L('Trace the sequence from the staff consuming the false snakes to the magicians’ belief.', 'يتتبع التسلسل من ابتلاع العصا للثعابين المزيفة إلى إيمان السحرة.'),
      L('Explain why the chapter treats the magicians’ belief as a major defeat for Pharaoh.', 'يشرح لماذا يعد الفصل إيمان السحرة هزيمة كبرى لفرعون.'),
    ],
    primaryQuestion: L('Why does recognition by the magicians carry more weight than recognition by ordinary spectators in this chapter?', 'لماذا يحمل اعتراف السحرة وزنًا أكبر من اعتراف المشاهدين العاديين في هذا الفصل؟'),
    analysisQuestion: L('How does the defeat of illusion become a political defeat for Pharaoh?', 'كيف تتحول هزيمة الخداع البصري إلى هزيمة سياسية لفرعون؟'),
    points: [
      {
        key: 'false-snakes', focus: 'turning-point', stage: 'quick',
        claim: L('Moses’s transformed staff consumes the magicians’ false snakes before the magicians believe.', 'تلتهم عصا موسى المتحولة ثعابين السحرة المزيفة قبل إيمانهم.'),
        evidence: L('Moses’ snake ate all the magicians’ fake snakes', 'الْتَهَمَ ثُعْبَانُ مُوسَى كُلَّ ثَعَابِينِ السَّحَرَةِ الْمُزَيَّفَةِ'),
        exercise: matching(
          L('Match each display with the result described in the contest.', 'صل كل عرض بالنتيجة المذكورة في المسابقة.'),
          { en: [['Magicians’ snakes', 'Exposed as false'], ['Moses’s staff-snake', 'Consumes the false snakes']], ar: [['ثعابين السحرة', 'تنكشف بوصفها مزيفة'], ['حية عصا موسى', 'تلتهم الثعابين المزيفة']] },
          L('The contest ends the apparent equivalence between illusion and the sign.', 'تنهي المسابقة المساواة الظاهرية بين الخداع والآية.'),
        ),
      },
      {
        key: 'elite-defeat', focus: 'inference', stage: 'final',
        claim: L('The magicians’ status as elite intellectual scholars makes their belief a major defeat for Pharaoh.', 'تجعل مكانة السحرة بوصفهم نخبة من العلماء المثقفين إيمانهم هزيمة كبرى لفرعون.'),
        evidence: L('the magicians were not merely performers, but the elite intellectual scholars of ancient Egypt', 'لَمْ يَكُنِ السَّحَرَةُ مُجَرَّدَ مُؤَدِّينَ، بَلْ كَانُوا النُّخْبَةَ مِنَ الْعُلَمَاءِ الْمُثَقَّفِينَ فِي مِصْرَ الْقَدِيمَةِ'),
        exercise: tf(
          L('The chapter suggests the magicians’ belief was politically insignificant because they were merely entertainers with no intellectual standing.', 'يقترح الفصل أن إيمان السحرة كان بلا أهمية سياسية لأنهم مجرد مؤدين بلا مكانة معرفية.'),
          false,
          L('The chapter says they were elite intellectual scholars and therefore their belief was a major defeat for Pharaoh.', 'يذكر الفصل أنهم كانوا نخبة من العلماء المثقفين ولذلك كان إيمانهم هزيمة كبرى لفرعون.'),
        ),
      },
    ],
  },
  {
    chapterId: 22,
    theme: L('Exodus, entrapment, trust, and the opening of a path through the sea', 'الخروج والحصار والثقة وانفتاح الطريق في البحر'),
    objectives: [
      L('Explain the military and geographical trap facing the Israelites at the Red Sea.', 'يشرح الحصار العسكري والجغرافي الذي واجه بني إسرائيل عند البحر الأحمر.'),
      L('Compare the people’s panic with Moses’s confidence that Allah would show a way to safety.', 'يقارن هلع القوم بثقة موسى أن الله سيهديهم إلى طريق النجاة.'),
    ],
    primaryQuestion: L('Why does the Red Sea scene appear impossible from the group’s immediate physical perspective?', 'لماذا يبدو مشهد البحر الأحمر مستحيلًا من المنظور المادي المباشر للقوم؟'),
    analysisQuestion: L('How does Moses’s response redefine the situation before the sea actually parts?', 'كيف تعيد استجابة موسى تعريف الموقف قبل أن ينفلق البحر فعليًا؟'),
    points: [
      {
        key: 'trapped', focus: 'main-idea', stage: 'quick',
        claim: L('The Israelites are trapped between the Red Sea and Pharaoh’s army.', 'يُحاصر بنو إسرائيل بين البحر الأحمر وجيش فرعون.'),
        evidence: L("They were trapped with the Red Sea in front and the king's army behind them", 'كَانُوا مَحْصُورِينَ بَيْنَ الْبَحْرِ الْأَحْمَرِ أَمَامَهُمْ وَجَيْشِ الْمَلِكِ خَلْفَهُمْ'),
        exercise: fill(
          L('Complete the physical trap described at the shore.', 'أكمل الحصار المادي الموصوف عند الشاطئ.'),
          L('The Red Sea was in front and the king’s [blank] was behind them.', 'كان البحر الأحمر أمامهم و[blank] الملك خلفهم.'),
          L('army', 'جيش'),
          L('The geography and pursuit leave no ordinary escape route in the scene.', 'لا تترك الجغرافيا والمطاردة طريق هروب عاديًا في المشهد.'),
        ),
      },
      {
        key: 'trust', focus: 'comparison', stage: 'knowledge',
        claim: L('Against the group’s panic, Moses says Allah is with them and will show a way to safety.', 'في مقابل هلع القوم يؤكد موسى أن الله معهم وسيهديهم إلى طريق النجاة.'),
        evidence: L('Allah was with them and would show them the way to safety', 'أَكَّدَ لَهُمْ أَنَّ اللَّهَ مَعَهُمْ وَسَيَهْدِيهِمْ إِلَى طَرِيقِ النَّجَاةِ'),
        exercise: mc(
          L('What most clearly contrasts with the Israelites’ panic before the sea parts?', 'ما الذي يقابل بوضوح هلع بني إسرائيل قبل انفلاق البحر؟'),
          { en: ['Moses’s confidence in Allah’s guidance to safety', 'Moses’s decision to surrender to Pharaoh', 'A hidden Egyptian army arriving to help'], ar: ['ثقة موسى بهداية الله إلى النجاة', 'قرار موسى الاستسلام لفرعون', 'وصول جيش مصري خفي للمساعدة'] },
          0,
          L('The confidence is stated before the physical route through the sea appears.', 'تُذكر الثقة قبل ظهور الطريق المادي عبر البحر.'),
        ),
      },
    ],
  },
  {
    chapterId: 23,
    theme: L('guidance, Pharaoh’s reinterpretation of the miracle, drowning, and the next moral test', 'الهداية وإعادة فرعون تفسير المعجزة والغرق والاختبار الأخلاقي التالي'),
    objectives: [
      L('Analyse Pharaoh’s attempt to reinterpret the opened sea as evidence of his own power.', 'يحلل محاولة فرعون إعادة تفسير البحر المنفلق بوصفه دليلًا على قوته.'),
      L('Trace how the sea’s return ends the pursuit and how the narrative immediately introduces a new test involving idol worship.', 'يتتبع كيف تنهي عودة البحر المطاردة وكيف يقدم السرد مباشرة اختبارًا جديدًا يتعلق بعبادة الأصنام.'),
    ],
    primaryQuestion: L('How does Pharaoh interpret the same event differently from Moses and his followers?', 'كيف يفسر فرعون الحدث نفسه بطريقة مختلفة عن موسى ومن معه؟'),
    analysisQuestion: L('What does the movement from drowning to encountering idol worship suggest about the story continuing beyond physical rescue?', 'ماذا يوحي الانتقال من الغرق إلى مواجهة عبادة الأصنام عن استمرار القصة بعد النجاة المادية؟'),
    points: [
      {
        key: 'claim-command', focus: 'character-action', stage: 'quick',
        claim: L('Pharaoh claims that the sea opened at his own command.', 'يدعي فرعون أن البحر انفلق بأمره هو.'),
        evidence: L('The sea has opened at my command', 'لَقَدِ انْفَلَقَ الْبَحْرُ بِأَمْرِي'),
        exercise: mc(
          L('How does Pharaoh publicly explain the opened sea to his men?', 'كيف يفسر فرعون البحر المنفلق أمام رجاله؟'),
          { en: ['He claims it opened at his command', 'He admits Moses commanded it', 'He says the sea never opened'], ar: ['يدعي أنه انفلق بأمره', 'يعترف أن موسى أمره', 'يقول إن البحر لم ينفلق'] },
          0,
          L('The claim shows Pharaoh reinterpreting the extraordinary event as evidence for his own alleged power.', 'يظهر الادعاء إعادة فرعون تفسير الحدث الخارق بوصفه دليلًا على قوته المزعومة.'),
        ),
      },
      {
        key: 'sea-returns', focus: 'cause-result', stage: 'review',
        claim: L('Once Pharaoh’s forces are midway, the sea returns and they drown.', 'عندما يصل فرعون وجيشه إلى منتصف الطريق يعود البحر فيغرقون.'),
        evidence: L('when they were midway, Allah commanded the sea to return to its former state', 'عِنْدَمَا وَصَلُوا إِلَى مُنْتَصَفِ الطَّرِيقِ، أَمَرَ اللَّهُ الْبَحْرَ أَنْ يَعُودَ إِلَى حَالَتِهِ السَّابِقَةِ'),
        exercise: tf(
          L('After Pharaoh’s army enters the parted water, the sea remains open until they safely cross.', 'بعد دخول جيش فرعون المياه المنفلقة يبقى البحر مفتوحًا حتى يعبروا بأمان.'),
          false,
          L('The chapter says the sea returns while they are midway and closes over them.', 'يذكر الفصل أن البحر يعود وهم في منتصف الطريق وينطبق عليهم.'),
        ),
      },
      {
        key: 'new-test', focus: 'turning-point', stage: 'final',
        claim: L('After the rescue and drowning, the Israelites encounter people worshipping idols and calves.', 'بعد النجاة والغرق يرى بنو إسرائيل قومًا يعبدون الأصنام والعجول.'),
        evidence: L('they saw a group of people that worshipped idols and calves', 'رَأَوْا مَجْمُوعَةً مِنَ النَّاسِ يَعْبُدُونَ الْأَصْنَامَ وَالْعُجُولَ'),
        exercise: mc(
          L('What new challenge appears immediately after the narrative of Pharaoh’s drowning?', 'ما التحدي الجديد الذي يظهر مباشرة بعد رواية غرق فرعون؟'),
          { en: ['They encounter people worshipping idols and calves', 'They return voluntarily to Pharaoh’s palace', 'They decide no further guidance is needed'], ar: ['يرون قومًا يعبدون الأصنام والعجول', 'يعودون طوعًا إلى قصر فرعون', 'يقررون أنهم لا يحتاجون إلى هداية أخرى'] },
          0,
          L('The chapter moves directly from physical rescue toward a new religious and moral challenge.', 'ينتقل الفصل مباشرة من النجاة المادية إلى تحد ديني وأخلاقي جديد.'),
        ),
      },
    ],
  },
  {
    chapterId: 24,
    theme: L('Torah, calf worship, post-salvation responsibility, and determination', 'التوراة وعبادة العجل ومسؤولية ما بعد النجاة والعزم'),
    objectives: [
      L('Sequence Moses’s forty days on Mount Tur, receiving the Torah, and returning to calf worship.', 'يرتب إقامة موسى أربعين يومًا على جبل الطور وتلقي التوراة والعودة إلى عبادة العجل.'),
      L('Analyse why continued guidance despite repeated disobedience is connected with Great Determination.', 'يحلل لماذا يرتبط استمرار الهداية رغم تكرر العصيان بأولي العزم.'),
    ],
    primaryQuestion: L('What contrast does the chapter create between receiving guidance and the people’s behavior during Moses’s absence?', 'ما المقارنة التي يصنعها الفصل بين تلقي الهداية وسلوك القوم أثناء غياب موسى؟'),
    analysisQuestion: L('Why does the ending present salvation as the beginning of responsibility rather than the end of testing?', 'لماذا تقدم النهاية النجاة بوصفها بداية للمسؤولية لا نهاية للاختبار؟'),
    points: [
      {
        key: 'forty-days', focus: 'sequence', stage: 'quick',
        claim: L('Moses remains on Mount Tur for forty days in worship.', 'يبقى موسى على جبل الطور أربعين يومًا يعبد الله.'),
        evidence: L('He stayed on Mount Tur for forty days and worshipped Allah', 'بَقِيَ مُوسَى عَلَى جَبَلِ الطُّورِ أَرْبَعِينَ يَوْمًا يَعْبُدُ اللَّهَ'),
        exercise: tf(
          L('The chapter says Moses remains on Mount Tur for forty days before returning to his people.', 'يذكر الفصل أن موسى بقي على جبل الطور أربعين يومًا قبل العودة إلى قومه.'),
          true,
          L('The forty-day period is stated directly before the giving of the Torah.', 'تُذكر مدة الأربعين يومًا مباشرة قبل نزول التوراة.'),
        ),
      },
      {
        key: 'torah-calf', focus: 'comparison', stage: 'final',
        claim: L('While Moses receives the Torah, his return reveals calf worship among his people.', 'بينما يتلقى موسى التوراة تكشف عودته عبادة العجل بين قومه.'),
        evidence: L('During this time, the Torah (Tevrat) was given to him by Allah', 'خِلَالَ هَذِهِ الْفَتْرَةِ، أَنْزَلَ اللَّهُ عَلَيْهِ التَّوْرَاةَ'),
        exercise: matching(
          L('Match the two contrasting developments in the final chapter.', 'صل التطورين المتقابلين في الفصل الأخير.'),
          { en: [['Mount Tur', 'Moses receives the Torah'], ['Return to the people', 'Moses finds calf worship']], ar: [['جبل الطور', 'يتلقى موسى التوراة'], ['العودة إلى القوم', 'يجد موسى عبادة العجل']] },
          L('The chapter places divine guidance and the people’s renewed disobedience in direct narrative contrast.', 'يضع الفصل الهداية الإلهية وتجدد عصيان القوم في تقابل سردي مباشر.'),
        ),
      },
      {
        key: 'determination', focus: 'theme', stage: 'final',
        claim: L('Moses’s sustained effort to guide a repeatedly disobedient people is given as the reason for his title of Great Determination.', 'تُذكر جهود موسى المستمرة لهداية قوم يكررون العصيان سببًا لكونه من أولي العزم.'),
        evidence: L('Moses\'s (pbuh) efforts to guide them to the right path are the reason he is known as the Prophet of Great Determination', 'جُهُودَ مُوسَى عَلَيْهِ السَّلَامُ فِي هِدَايَتِهِمْ إِلَى الطَّرِيقِ الصَّوَابِ هِيَ السَّبَبُ فِي كَوْنِهِ يُعْرَفُ بِرَسُولِ أُولِي الْعَزْمِ'),
        exercise: tf(
          L('The chapter connects Moses’s title of Great Determination with continuing to guide his people despite difficult tests and disobedience.', 'يربط الفصل وصف موسى بأولي العزم باستمراره في هداية قومه رغم الاختبارات الصعبة والعصيان.'),
          true,
          L('The final sentence explicitly gives his continuing guidance efforts as the reason for the title.', 'تعطي الجملة الأخيرة صراحة جهود الهداية المستمرة سببًا لهذا الوصف.'),
        ),
      },
    ],
  },
];

export const mosesB2LearningBlueprint = defineLearningBlueprint({
  id: 'moses-b2',
  version: '1.0.0',
  storyId: 'moses',
  level: 'B2',
  status: 'pedagogy-reviewed',
  chapters: drafts.map((draft) => {
    const guide = guides(draft);
    return {
      chapterId: draft.chapterId,
      objectives: draft.objectives,
      evidencePoints: draft.points.map((point) => ({
        id: `moses-b2-c${draft.chapterId}-${point.key}`,
        focus: point.focus,
        claim: point.claim,
        evidence: point.evidence,
      })),
      vocabularyTargets: vocabularyTargetsFor(draft.chapterId),
      assessmentItems: draft.points.map((point) => ({
        id: point.stage === 'quick'
          ? `moses-b2-c${draft.chapterId}-quick`
          : `moses-b2-c${draft.chapterId}-${point.stage}-${point.key}`,
        learningPointId: `moses-b2-c${draft.chapterId}-${point.key}`,
        eligibleStages: [point.stage],
        exercise: point.exercise,
      })),
      teacherGuide: guide.teacherGuide,
      selfStudyGuide: guide.selfStudyGuide,
    };
  }),
});
