import { defineLearningBlueprint, type BlueprintVocabularyTarget, type LocalizedText } from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { adamB1ExplicitHighlightTargets } from './highlights';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamB1ExplicitHighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `adam-b1-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

const G = (
  focus: LocalizedText,
  primaryQuestion: LocalizedText,
  secondQuestion: LocalizedText,
  grammar: LocalizedText,
  pronunciation: LocalizedText,
) => guideBundle({
  focus,
  primaryQuestion,
  secondQuestion,
  grammar,
  pronunciation,
  fast: L(
    `Write 4–5 sentences answering: ${secondQuestion.en} Use one exact chapter detail as evidence.`,
    `اكتب 4–5 جمل تجيب عن: ${secondQuestion.ar} واستخدم تفصيلًا واحدًا دقيقًا من الفصل بوصفه دليلًا.`,
  ),
  support: L(
    'Use: “My claim is ___. The chapter says ___. This shows ___.”',
    'استخدم: «ادعائي هو ___. يقول الفصل ___. وهذا يوضح ___.»',
  ),
});

export const adamB1LearningBlueprint = defineLearningBlueprint({
  id: 'adam-b1',
  version: '1.0.1',
  storyId: 'adam',
  level: 'B1',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Identify Adam’s place in the story and the responsibility given to humanity.', 'يحدد مكانة آدم في القصة والمسؤولية التي أُعطيت للإنسان.'),
        L('Explain how the chapter connects creation with humanity’s role on earth.', 'يشرح كيف يربط الفصل بين الخلق ودور الإنسان في الأرض.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c1-first', focus: 'direct', claim: L('Adam is described as the first Messenger and father of all humans.', 'يصف الفصل آدم بأنه أول رسول وأبو البشر جميعًا.'), evidence: L('the first Messenger and the father of all humans', 'أول رسول وأبو البشر جميعا') },
        { id: 'adam-b1-c1-soil', focus: 'direct', claim: L('Allah created Adam from soil.', 'خلق الله آدم من التراب.'), evidence: L('created him from soil', 'خلقه الله من التراب') },
        { id: 'adam-b1-c1-role', focus: 'main-idea', claim: L('Allah decided to place a ruler on earth.', 'قرر الله أن يجعل خليفة في الأرض.'), evidence: L('decided to place a ruler (halîfe) on earth', 'قرر أن يجعل خليفة في الأرض') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'adam-b1-c1-quick', learningPointId: 'adam-b1-c1-first', eligibleStages: ['quick'], exercise: mc(L('Which description of Adam is stated at the beginning of the chapter?', 'أي وصف لآدم ورد في بداية الفصل؟'), { en: ['The first Messenger and father of all humans', 'The first farmer on earth', 'The first king of Babylon'], ar: ['أول رسول وأبو البشر جميعًا', 'أول مزارع في الأرض', 'أول ملك في بابل'] }, 0, L('The opening sentence gives both roles directly.', 'تذكر الجملة الأولى هاتين المكانتين مباشرة.')) },
        { id: 'adam-b1-c1-knowledge', learningPointId: 'adam-b1-c1-soil', eligibleStages: ['knowledge'], exercise: tf(L('The chapter says Adam was created from soil.', 'يقول الفصل إن آدم خُلق من التراب.'), true, L('The chapter states that Allah created Adam from soil.', 'يذكر الفصل أن الله خلق آدم من التراب.')) },
        { id: 'adam-b1-c1-final', learningPointId: 'adam-b1-c1-role', eligibleStages: ['final'], exercise: fill(L('Complete the statement about humanity’s role on earth.', 'أكمل العبارة المتعلقة بدور الإنسان في الأرض.'), L('Allah decided to place a [blank] on earth.', 'قرر الله أن يجعل [blank] في الأرض.'), L('ruler', 'خليفة'), L('The chapter uses the idea of a ruler or khalifa on earth.', 'يستخدم الفصل فكرة الخليفة في الأرض.')) },
      ],
      ...G(L('Adam’s creation and humanity’s responsibility on earth', 'خلق آدم ومسؤولية الإنسان في الأرض'), L('How is Adam introduced in the first paragraph?', 'كيف يقدّم الفصل آدم في الفقرة الأولى؟'), L('What responsibility does the idea of a ruler on earth suggest?', 'ما المسؤولية التي تشير إليها فكرة الخليفة في الأرض؟'), L('Use past and present forms to distinguish story events from continuing ideas.', 'استخدم الماضي والحاضر للتمييز بين أحداث القصة والأفكار المستمرة.'), L('Practise Messenger, soil, ruler, earth, and curiosity.', 'تدرّب على نطق رسول، التراب، خليفة، الأرض، وفضول.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain the link between different soil and human diversity.', 'يشرح العلاقة بين اختلاف التراب وتنوع البشر.'),
        L('Identify the importance of knowledge and intellect in Adam’s story.', 'يحدد أهمية العلم والعقل في قصة آدم.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c2-diversity', focus: 'cause-result', claim: L('The chapter links soil from different parts of the earth with different human skin colors.', 'يربط الفصل التراب من أماكن مختلفة من الأرض باختلاف ألوان بشرة الناس.'), evidence: L('soil from different parts of the earth and Allah shaped Adam (pbuh). That’s why humans have different skin colors', 'ترابا من أماكن مختلفة من الأرض، وخلق الله آدم (عليه السلام). ولهذا السبب أصبحت ألوان بشرة الناس مختلفة') },
        { id: 'adam-b1-c2-intellect', focus: 'cause-result', claim: L('Allah gave Adam life and intellect to learn and understand.', 'أعطى الله آدم الحياة والعقل لكي يتعلم ويفهم.'), evidence: L('life and intellect to learn and understand', 'الحياة والعقل لكي يتعلم ويفهم') },
        { id: 'adam-b1-c2-knowledge', focus: 'comparison', claim: L('Adam was given more knowledge than the angels.', 'أُعطي آدم علمًا أكثر من الملائكة.'), evidence: L('more knowledge than angels', 'علما أكثر من الملائكة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'adam-b1-c2-quick', learningPointId: 'adam-b1-c2-diversity', eligibleStages: ['quick'], exercise: matching(L('Match each cause with the result described in the chapter.', 'صل كل سبب بالنتيجة المذكورة في الفصل.'), { en: [['Soil from different lands', 'different human skin colors'], ['Life and intellect', 'learning and understanding']], ar: [['تراب من أماكن مختلفة', 'اختلاف ألوان بشرة الناس'], ['الحياة والعقل', 'التعلم والفهم']] }, L('The chapter presents both relationships directly.', 'يعرض الفصل العلاقتين مباشرة.')) },
        { id: 'adam-b1-c2-knowledge', learningPointId: 'adam-b1-c2-intellect', eligibleStages: ['knowledge'], exercise: mc(L('What purpose is connected with Adam’s intellect in the chapter?', 'ما الغرض المرتبط بعقل آدم في الفصل؟'), { en: ['Learning and understanding', 'Becoming physically stronger', 'Living without responsibility'], ar: ['التعلم والفهم', 'أن يصبح أقوى جسديًا', 'العيش بلا مسؤولية'] }, 0, L('The chapter directly connects intellect with learning and understanding.', 'يربط الفصل العقل مباشرة بالتعلم والفهم.')) },
        { id: 'adam-b1-c2-review', learningPointId: 'adam-b1-c2-knowledge', eligibleStages: ['review'], exercise: tf(L('Adam is described as having more knowledge than the angels.', 'يصف الفصل آدم بأن لديه علمًا أكثر من الملائكة.'), true, L('This comparison appears at the end of the chapter.', 'تظهر هذه المقارنة في نهاية الفصل.')) },
      ],
      ...G(L('human diversity, intellect, and knowledge', 'تنوع البشر والعقل والعلم'), L('How does the chapter explain differences in human skin color?', 'كيف يفسر الفصل اختلاف ألوان بشرة الناس؟'), L('How are intellect and knowledge connected with Adam’s role?', 'كيف يرتبط العقل والعلم بدور آدم؟'), L('Practise cause/result language with because, so, and that is why.', 'تدرّب على روابط السبب والنتيجة مثل لأن، لذلك، ولهذا السبب.'), L('Practise intellect, knowledge, skin colors, respect, and angels.', 'تدرّب على نطق العقل، العلم، ألوان البشرة، الاحترام، والملائكة.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Explain the reasoning behind Iblis’s arrogance.', 'يشرح التفكير الذي أدى إلى تكبر إبليس.'),
        L('Identify the chapter’s wider message about superiority.', 'يحدد رسالة الفصل الأوسع عن الأفضلية.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c3-fire', focus: 'motivation', claim: L('Iblis compared his creation from fire with Adam’s creation from soil.', 'قارن إبليس خلقه من النار بخلق آدم من التراب.'), evidence: L('You created me from fire, and You created Adam (pbuh) from soil', 'خلقتني من نار، وخلقته من تراب') },
        { id: 'adam-b1-c3-origin', focus: 'cause-result', claim: L('Iblis believed his origin was superior.', 'اعتقد إبليس أن أصله أفضل.'), evidence: L('because he believed his origin was superior', 'لأنه كان يعتقد أن أصله أفضل') },
        { id: 'adam-b1-c3-message', focus: 'theme', claim: L('The chapter rejects race, color, and group membership as sources of true greatness.', 'يرفض الفصل العرق واللون والانتماء إلى جماعة كمصادر للعظمة الحقيقية.'), evidence: L('superiority or greatness did not come from race, color, or being a member of a certain group', 'لا تأتي الأفضلية أو العظمة من العرق، أو اللون، أو الانتماء إلى جماعة معينة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'adam-b1-c3-quick', learningPointId: 'adam-b1-c3-fire', eligibleStages: ['quick'], exercise: fill(L('Complete Iblis’s comparison.', 'أكمل مقارنة إبليس.'), L('Iblis said he was created from [blank], while Adam was created from soil.', 'قال إبليس إنه خُلق من [blank]، بينما خُلق آدم من التراب.'), L('fire', 'نار'), L('Iblis directly compared fire with soil.', 'قارن إبليس مباشرة بين النار والتراب.')) },
        { id: 'adam-b1-c3-knowledge', learningPointId: 'adam-b1-c3-origin', eligibleStages: ['knowledge'], exercise: mc(L('What belief supported Iblis’s arrogant judgment?', 'أي اعتقاد دعم حكم إبليس المتكبر؟'), { en: ['His origin was superior', 'He had more knowledge than Adam', 'The angels asked him to lead them'], ar: ['أن أصله أفضل', 'أنه كان أعلم من آدم', 'أن الملائكة طلبت منه قيادتها'] }, 0, L('The chapter says Iblis believed his origin was superior.', 'يقول الفصل إن إبليس كان يعتقد أن أصله أفضل.')) },
        { id: 'adam-b1-c3-final', learningPointId: 'adam-b1-c3-message', eligibleStages: ['final'], exercise: mc(L('Which idea best expresses the chapter’s wider lesson about superiority?', 'أي فكرة تعبّر أفضل عن رسالة الفصل الأوسع حول الأفضلية؟'), { en: ['Race, color, and group do not create true greatness', 'Fire always makes a being better than soil', 'Group membership decides moral value'], ar: ['العرق واللون والجماعة لا تصنع العظمة الحقيقية', 'النار تجعل المخلوق دائمًا أفضل من التراب', 'الانتماء إلى جماعة يحدد القيمة الأخلاقية'] }, 0, L('The final sentence rejects race, color, and group membership as sources of greatness.', 'ترفض الجملة الأخيرة العرق واللون والانتماء الجماعي كمصادر للعظمة.')) },
      ],
      ...G(L('arrogance, origin, and the meaning of superiority', 'الكبر والأصل ومعنى الأفضلية'), L('What reason did Iblis give for considering himself better?', 'ما السبب الذي ذكره إبليس لاعتبار نفسه أفضل؟'), L('How does the final sentence challenge Iblis’s reasoning?', 'كيف تتحدى الجملة الأخيرة تفكير إبليس؟'), L('Use because and however to contrast Iblis’s reasoning with the chapter’s conclusion.', 'استخدم لأن ومع ذلك للمقارنة بين تفكير إبليس وخلاصة الفصل.'), L('Practise arrogant, superior, origin, fire, and soil.', 'تدرّب على نطق متكبر، أفضل، أصله، نار، والتراب.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Describe Iblis’s reaction after his refusal.', 'يصف رد فعل إبليس بعد رفضه.'),
        L('Explain why Adam is warned to be careful of Iblis.', 'يشرح لماذا حُذّر آدم من إبليس.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c4-defiance', focus: 'character-action', claim: L('Iblis continued saying that he was right.', 'استمر إبليس في القول إنه كان محقًا.'), evidence: L('continued saying he was right', 'استمر إبليس في القول إنه كان محقا') },
        { id: 'adam-b1-c4-enemy', focus: 'cause-result', claim: L('Iblis waited for a chance to keep Adam away from Allah’s kindness.', 'انتظر إبليس فرصة ليبعد آدم عن رحمة الله.'), evidence: L('waited for a chance to keep Adam (pbuh) away from Allah’s kindness', 'انتظر فرصة ليُبعِد آدم (عليه السلام) عن رحمة الله') },
        { id: 'adam-b1-c4-warning', focus: 'direct', claim: L('Allah told Adam that Iblis was his enemy and told him to be careful.', 'قال الله لآدم إن إبليس عدو له وأمره أن يكون حذرًا.'), evidence: L('Iblis was his enemy and told him to be careful', 'إبليس عدو له، وأمره أن يكون حذرًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'adam-b1-c4-quick', learningPointId: 'adam-b1-c4-warning', eligibleStages: ['quick'], exercise: tf(L('Allah warned Adam that Iblis was his enemy.', 'حذّر الله آدم من أن إبليس عدو له.'), true, L('The warning is stated at the end of the chapter.', 'يرد التحذير في نهاية الفصل.')) },
        { id: 'adam-b1-c4-review', learningPointId: 'adam-b1-c4-defiance', eligibleStages: ['review'], exercise: mc(L('What did Iblis do instead of admitting that he was wrong?', 'ماذا فعل إبليس بدلًا من الاعتراف بأنه كان مخطئًا؟'), { en: ['He continued saying he was right', 'He asked Adam for forgiveness', 'He accepted the judgment calmly'], ar: ['استمر يقول إنه كان محقًا', 'طلب المغفرة من آدم', 'تقبل الحكم بهدوء'] }, 0, L('The opening sentence says Iblis continued claiming that he was right.', 'تقول الجملة الأولى إن إبليس استمر في الادعاء بأنه كان محقًا.')) },
        { id: 'adam-b1-c4-final', learningPointId: 'adam-b1-c4-enemy', eligibleStages: ['final'], exercise: mc(L('What did Iblis wait for a chance to do?', 'ما الذي انتظر إبليس فرصة لفعله؟'), { en: ['Keep Adam away from Allah’s kindness', 'Teach Adam new knowledge', 'Help Adam remain in Paradise'], ar: ['إبعاد آدم عن رحمة الله', 'تعليم آدم علمًا جديدًا', 'مساعدة آدم على البقاء في الجنة'] }, 0, L('The chapter directly states Iblis’s intention.', 'يذكر الفصل نية إبليس مباشرة.')) },
      ],
      ...G(L('defiance, enmity, and warning', 'العناد والعداوة والتحذير'), L('How did Iblis react instead of admitting his mistake?', 'كيف تصرف إبليس بدلًا من الاعتراف بخطئه؟'), L('What does the warning to Adam reveal about the next conflict?', 'ماذا يكشف تحذير آدم عن الصراع القادم؟'), L('Practise reporting verbs and cause/result clauses.', 'تدرّب على أفعال القول وجمل السبب والنتيجة.'), L('Practise Creator, enemy, careful, kindness, and warning.', 'تدرّب على نطق الخالق، عدو، حذرًا، الرحمة، والتحذير.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Identify the single restriction in Paradise.', 'يحدد القيد الوحيد في الجنة.'),
        L('Explain how Iblis used deception to challenge that restriction.', 'يشرح كيف استخدم إبليس الخداع لمواجهة ذلك القيد.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c5-companion', focus: 'cause-result', claim: L('After Adam began to feel lonely, Allah gave him Eve as a companion.', 'بعد أن شعر آدم بالوحدة خلق الله له حواء.'), evidence: L('started to feel lonely. Allah gave him a wife called Eve (Hawwa) to be his companion', 'شَعَرَ آدَمُ (عَلَيْهِ السَّلَامُ) بِالْوِحْدَةِ فِي الْجَنَّةِ، فَخَلَقَ اللهُ لَهُ زَوْجَةً اسْمُهَا حَوَّاءُ') },
        { id: 'adam-b1-c5-tree', focus: 'direct', claim: L('Allah asked Adam and Eve not to go near one tree.', 'طلب الله من آدم وحواء ألا يقتربا من شجرة معينة.'), evidence: L('not to go near one tree', 'أَلَّا يَقْتَرِبَا مِنْ شَجَرَةٍ مُعَيَّنَةٍ') },
        { id: 'adam-b1-c5-lie', focus: 'motivation', claim: L('Iblis pretended to be their friend, and the chapter calls this a big lie.', 'ادعى إبليس أنه صديقهما ويسمي الفصل ذلك كذبة كبيرة.'), evidence: L('pretending to be their friend. It was a big lie', 'قَالَ إِنَّهُ صَدِيقُهُمَا. كَانَتْ هَذِهِ كِذْبَةً كَبِيرَةً') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'adam-b1-c5-quick', learningPointId: 'adam-b1-c5-tree', eligibleStages: ['quick'], exercise: tap(L('What was the one restriction in Paradise?', 'ما القيد الوحيد في الجنة؟'), L('Adam and Eve were told not to go near one tree.', 'طُلب من آدم وحواء ألا يقتربا من شجرة معينة.'), L('The chapter describes only this one restriction.', 'يصف الفصل هذا القيد الواحد فقط.')) },
        { id: 'adam-b1-c5-knowledge', learningPointId: 'adam-b1-c5-companion', eligibleStages: ['knowledge'], exercise: mc(L('What happened after Adam began to feel lonely?', 'ماذا حدث بعد أن شعر آدم بالوحدة؟'), { en: ['Allah gave him Eve as a companion', 'He immediately left Paradise', 'Iblis became his teacher'], ar: ['خلق الله له حواء', 'غادر الجنة فورًا', 'أصبح إبليس معلمه'] }, 0, L('The chapter links Adam’s loneliness with Eve becoming his companion.', 'يربط الفصل شعور آدم بالوحدة بخلق حواء له.')) },
        { id: 'adam-b1-c5-final', learningPointId: 'adam-b1-c5-lie', eligibleStages: ['final'], exercise: matching(L('Match Iblis’s appearance with the chapter’s judgment.', 'صل مظهر إبليس بحكم الفصل عليه.'), { en: [['What he pretended to be', 'their friend'], ['What the chapter calls it', 'a big lie']], ar: [['ما ادعى أنه عليه', 'صديقهما'], ['ما يسميه الفصل', 'كذبة كبيرة']] }, L('The chapter directly contrasts claimed friendship with deception.', 'يقارن الفصل مباشرة بين ادعاء الصداقة والخداع.')) },
      ],
      ...G(L('the restriction in Paradise and Iblis’s deception', 'القيد في الجنة وخداع إبليس'), L('What was Adam and Eve’s only restriction?', 'ما القيد الوحيد الذي وُضع لآدم وحواء؟'), L('Why is pretending to be a friend important to Iblis’s strategy?', 'لماذا كان ادعاء الصداقة مهمًا في خطة إبليس؟'), L('Use if-clauses to report the promise made by Iblis.', 'استخدم جمل الشرط لنقل الوعد الذي قاله إبليس.'), L('Practise lonely, blessings, lie, tree, and companion.', 'تدرّب على نطق الوحدة، النعم، كذبة، شجرة، وحواء.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Trace the immediate effects of eating from the forbidden tree.', 'يتتبع الآثار المباشرة للأكل من الشجرة الممنوعة.'),
        L('Explain how the chapter connects modesty with human nature.', 'يشرح كيف يربط الفصل الحياء بالطبيعة الإنسانية.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c6-forgot', focus: 'cause-result', claim: L('Iblis’s deception led Adam and Eve to forget Allah’s warning.', 'أدى خداع إبليس إلى نسيان آدم وحواء تحذير الله.'), evidence: L('they forgot the warning Allah had given them', 'أَنْسَاهُمَا تَحْذِيرَ اللهِ') },
        { id: 'adam-b1-c6-shame', focus: 'turning-point', claim: L('After eating, Adam felt pain, sadness, and shame.', 'بعد الأكل شعر آدم بالحزن والخجل والألم.'), evidence: L('pain, sadness and shame', 'بِالْحُزْنِ وَالْخَجَلِ وَالْأَلَمِ') },
        { id: 'adam-b1-c6-inborn', focus: 'theme', claim: L('The chapter describes a sense of shame as inborn human nature.', 'يصف الفصل الحياء بأنه فطرة في الإنسان.'), evidence: L('sense of shame (hayâ) is inborn human nature', 'الْحَيَاءَ فِطْرَةٌ فِي الْإِنْسَانِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'adam-b1-c6-quick', learningPointId: 'adam-b1-c6-shame', eligibleStages: ['quick'], exercise: mc(L('Which feelings appeared immediately after Adam ate?', 'ما المشاعر التي ظهرت مباشرة بعد أن أكل آدم؟'), { en: ['Pain, sadness, and shame', 'Pride, joy, and excitement', 'Calmness and indifference'], ar: ['الحزن والخجل والألم', 'الفخر والفرح والحماس', 'الهدوء وعدم الاهتمام'] }, 0, L('The chapter lists these feelings directly.', 'يسرد الفصل هذه المشاعر مباشرة.')) },
        { id: 'adam-b1-c6-review', learningPointId: 'adam-b1-c6-forgot', eligibleStages: ['review'], exercise: tf(L('Iblis’s lies caused Adam and Eve to forget Allah’s warning.', 'جعل خداع إبليس آدم وحواء ينسيان تحذير الله.'), true, L('This cause-and-result link appears in the first paragraph.', 'تظهر علاقة السبب والنتيجة في الفقرة الأولى.')) },
        { id: 'adam-b1-c6-final', learningPointId: 'adam-b1-c6-inborn', eligibleStages: ['final'], exercise: fill(L('Complete the chapter’s statement about modesty.', 'أكمل عبارة الفصل عن الحياء.'), L('The sense of shame is [blank] human nature.', 'الحياء [blank] في الإنسان.'), L('inborn', 'فطرة'), L('The chapter explicitly describes shame or modesty as natural and inborn.', 'يصف الفصل الحياء صراحة بأنه فطري.')) },
      ],
      ...G(L('deception, consequences, and inborn modesty', 'الخداع والنتائج والحياء الفطري'), L('What changed immediately after Adam and Eve ate?', 'ما الذي تغير مباشرة بعد أن أكل آدم وحواء؟'), L('What evidence does the chapter use to describe modesty as natural?', 'ما الدليل الذي يستخدمه الفصل لوصف الحياء بأنه فطري؟'), L('Practise sequence and consequence language: after, when, so, because.', 'تدرّب على لغة التسلسل والنتيجة: بعد، عندما، لذلك، لأن.'), L('Practise forbidden, shame, inborn, tree leaves, and warning.', 'تدرّب على نطق الممنوعة، الخجل، فطرة، أوراق الأشجار، والتحذير.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Compare repentance with arrogance.', 'يقارن بين التوبة والكبر.'),
        L('Explain why admitting a mistake changes the direction of the story.', 'يشرح لماذا يغير الاعتراف بالخطأ مسار القصة.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c7-repent', focus: 'character-action', claim: L('Adam and Eve apologized, learned from their mistake, and decided not to repeat it.', 'اعتذر آدم وحواء وتعلما من خطئهما وصمما على عدم تكراره.'), evidence: L('said sorry to Allah, learned from their mistake and decided never to repeat it', 'اعْتَذَرَا إِلَى اللهِ، وَتَعَلَّمَا مِنْ خَطَئِهِمَا، وَصَمَّمَا عَلَى عَدَمِ تَكْرَارِهِ') },
        { id: 'adam-b1-c7-iblis', focus: 'comparison', claim: L('Iblis never admitted he was wrong.', 'لم يعترف إبليس بأنه كان مخطئًا.'), evidence: L('He never admitted he was wrong', 'لَمْ يَعْتَرِفْ أَبَدًا بِأَنَّهُ كَانَ مُخْطِئًا') },
        { id: 'adam-b1-c7-barrier', focus: 'theme', claim: L('The chapter describes arrogance as the biggest barrier to right action and moral judgment.', 'يصف الفصل الكبر بأنه أكبر عقبة أمام التصرف الصحيح والتمييز الأخلاقي.'), evidence: L('Arrogance is the biggest barrier to act the right way and see between right and wrong, good and bad', 'الْكِبْرَ هُوَ أَكْبَرُ عَقَبَةٍ أَمَامَ التَّصَرُّفِ بِطَرِيقَةٍ صَحِيحَةٍ، وَأَمَامَ التَّمْيِيزِ بَيْنَ الصَّوَابِ وَالْخَطَأِ، وَبَيْنَ الْخَيْرِ وَالشَّرِّ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'adam-b1-c7-quick', learningPointId: 'adam-b1-c7-iblis', eligibleStages: ['quick'], exercise: matching(L('Match each response with the character or characters.', 'صل كل رد فعل بالشخصية المناسبة.'), { en: [['Adam and Eve', 'admitted the mistake and asked forgiveness'], ['Iblis', 'refused to admit he was wrong']], ar: [['آدم وحواء', 'اعترفا بالخطأ وطلبا المغفرة'], ['إبليس', 'رفض الاعتراف بأنه كان مخطئًا']] }, L('The chapter deliberately contrasts the two responses.', 'يقارن الفصل عمدًا بين الردين.')) },
        { id: 'adam-b1-c7-knowledge', learningPointId: 'adam-b1-c7-repent', eligibleStages: ['knowledge'], exercise: mc(L('Which action best shows repentance in the chapter?', 'أي فعل يوضح التوبة أفضل في الفصل؟'), { en: ['Learning from the mistake and deciding not to repeat it', 'Insisting that the mistake was correct', 'Blaming another person and doing nothing'], ar: ['التعلم من الخطأ والعزم على عدم تكراره', 'الإصرار على أن الخطأ كان صحيحًا', 'لوم شخص آخر وعدم فعل شيء'] }, 0, L('Repentance is shown through apology, learning, and a decision not to repeat the mistake.', 'تظهر التوبة في الاعتذار والتعلم والعزم على عدم تكرار الخطأ.')) },
        { id: 'adam-b1-c7-final', learningPointId: 'adam-b1-c7-barrier', eligibleStages: ['final'], exercise: mc(L('Why is arrogance presented as a barrier in this chapter?', 'لماذا يُعرض الكبر بوصفه عقبة في هذا الفصل؟'), { en: ['It blocks right action and clear moral judgment', 'It makes learning faster', 'It removes every difficult choice'], ar: ['لأنه يمنع التصرف الصحيح والتمييز الواضح بين الخير والشر', 'لأنه يجعل التعلم أسرع', 'لأنه يزيل كل اختيار صعب'] }, 0, L('The chapter links arrogance with failure to act rightly and distinguish right from wrong.', 'يربط الفصل الكبر بالعجز عن التصرف الصحيح والتمييز بين الصواب والخطأ.')) },
      ],
      ...G(L('repentance versus arrogance', 'التوبة مقابل الكبر'), L('What steps show that Adam and Eve responded to their mistake?', 'ما الخطوات التي تبين استجابة آدم وحواء لخطئهما؟'), L('Why does Iblis’s refusal to admit error matter?', 'لماذا يعد رفض إبليس الاعتراف بالخطأ مهمًا؟'), L('Use contrast language: on the other hand, while, unlike, whereas.', 'استخدم لغة المقارنة والاستدراك: من ناحية أخرى، بينما، على خلاف.'), L('Practise mistake, pardon, barrier, earth, and arrogance.', 'تدرّب على نطق خطأ، يغفر، عقبة، الأرض، والكبر.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Describe the new responsibilities and difficulties of life on earth.', 'يصف المسؤوليات والصعوبات الجديدة للحياة في الأرض.'),
        L('Explain why Iblis continued to follow humanity.', 'يشرح لماذا استمر إبليس في متابعة البشر.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c8-survive', focus: 'comparison', claim: L('Life on earth required struggle and hard work to survive.', 'تطلبت الحياة في الأرض الكفاح والعمل الجاد للبقاء.'), evidence: L('struggle to survive and work hard', 'يُكَافِحَ مِنْ أَجْلِ الْبَقَاءِ عَلَى قَيْدِ الْحَيَاةِ فِي الْأَرْضِ. كَمَا كَانَ عَلَيْهِ أَنْ يَعْمَلَ بِجِدٍّ') },
        { id: 'adam-b1-c8-responsibility', focus: 'main-idea', claim: L('Their responsibilities included protecting nature and helping the weak.', 'شملت مسؤولياتهما حماية الطبيعة ومساعدة الضعفاء.'), evidence: L('protect the nature and help the weak', 'يَحْمِيَانِ الطَّبِيعَةَ، وَيُسَاعِدَانِ الضُّعَفَاءَ') },
        { id: 'adam-b1-c8-iblis', focus: 'motivation', claim: L('Iblis wanted people not to remember Allah.', 'حاول إبليس إبعاد الناس عن ذكر الله.'), evidence: L('wanted people not to remember Allah', 'حَاوَلَ لِيُبْعِدَ النَّاسَ عَنْ ذِكْرِ اللهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'adam-b1-c8-quick', learningPointId: 'adam-b1-c8-survive', eligibleStages: ['quick'], exercise: fill(L('Complete the contrast with life in Paradise.', 'أكمل المقارنة مع الحياة في الجنة.'), L('On earth, they had to [blank] to survive.', 'في الأرض كان عليهما أن [blank] من أجل البقاء.'), L('struggle', 'يكافحا'), L('Earth is described as requiring struggle and hard work.', 'تُوصف الأرض بأنها تتطلب الكفاح والعمل الجاد.')) },
        { id: 'adam-b1-c8-review', learningPointId: 'adam-b1-c8-responsibility', eligibleStages: ['review'], exercise: mc(L('Which pair is explicitly named among human responsibilities on earth?', 'أي زوج يُذكر صراحة ضمن مسؤوليات الإنسان في الأرض؟'), { en: ['Protect nature and help the weak', 'Avoid all work and live alone', 'Leave the land unused and ignore others'], ar: ['حماية الطبيعة ومساعدة الضعفاء', 'تجنب كل عمل والعيش منفردين', 'ترك الأرض بلا استخدام وتجاهل الآخرين'] }, 0, L('The chapter explicitly names protecting nature and helping the weak.', 'يذكر الفصل صراحة حماية الطبيعة ومساعدة الضعفاء.')) },
        { id: 'adam-b1-c8-final', learningPointId: 'adam-b1-c8-iblis', eligibleStages: ['final'], exercise: tf(L('Iblis followed humanity because he wanted people to remember Allah more.', 'تبع إبليس البشر لأنه أراد أن يذكروا الله أكثر.'), false, L('The chapter says the opposite: he wanted people not to remember Allah.', 'يقول الفصل العكس: حاول إبعاد الناس عن ذكر الله.')) },
      ],
      ...G(L('earthly responsibility, survival, and continued temptation', 'المسؤولية في الأرض والبقاء واستمرار الإغواء'), L('How did life on earth differ from life in Paradise?', 'كيف اختلفت الحياة في الأرض عن الحياة في الجنة؟'), L('How are practical responsibilities and spiritual danger presented together?', 'كيف يعرض الفصل المسؤوليات العملية والخطر الروحي معًا؟'), L('Use had to / كان عليه to express necessity and responsibility.', 'استخدم كان عليه للتعبير عن الضرورة والمسؤولية.'), L('Practise struggle, survive, clothes, nature, and descendants.', 'تدرّب على نطق يكافح، البقاء، الملابس، الطبيعة، والأبناء.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Explain Adam’s role as the first Messenger once a community formed.', 'يشرح دور آدم كأول رسول بعد تكوّن المجتمع.'),
        L('Identify the shared purpose of later messengers.', 'يحدد الغرض المشترك للأنبياء الذين جاءوا بعده.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c9-first', focus: 'sequence', claim: L('Adam became the first Messenger when a community formed.', 'أصبح آدم أول رسول عندما تكوّن مجتمع.'), evidence: L('when a community came out, Adam (pbuh) became the first Messenger of Allah', 'عِنْدَمَا تَكَوَّنَ مُجْتَمَعٌ، أَصْبَحَ آدَمُ أَوَّلَ رَسُولٍ لِلهِ') },
        { id: 'adam-b1-c9-teaching', focus: 'character-action', claim: L('Adam taught people to live righteously and act honestly.', 'علّم آدم الناس أن يعيشوا حياة صحيحة ويتصرفوا بصدق.'), evidence: L('live righteously and act honestly', 'عَيْشِ حَيَاةٍ صَحِيحَةٍ، وَالتَّصَرُّفِ بِصِدْقٍ') },
        { id: 'adam-b1-c9-children', focus: 'direct', claim: L('Adam and Eve taught their children to worship only Allah and be careful of Iblis’s tricks.', 'علّم آدم وحواء أولادهما عبادة الله وحده والحذر من حيل إبليس.'), evidence: L('taught their children to pray only to Allah and be aware of Iblis and his tricks', 'عَلَّمَ آدَمُ وَحَوَّاءُ أَوْلَادَهُمَا عِبَادَةَ اللهِ وَحْدَهُ، وَأَنَّ إِبْلِيسَ لَيْسَ صَدِيقًا لَهُمْ، وَأَنَّ عَلَيْهِمْ أَنْ يَكُونُوا حَذِرِينَ مِنْ حِيَلِهِ') },
        { id: 'adam-b1-c9-path', focus: 'theme', claim: L('Later messengers showed people the right path and ways to stay away from Iblis.', 'أظهر الأنبياء اللاحقون للناس الطريق الصحيح وطرق الابتعاد عن إبليس.'), evidence: L('show people the right path and the ways to stay away from Iblis', 'لِيُظْهِرُوا لِلنَّاسِ الطَّرِيقَ الصَّحِيحَ وَطُرُقَ الِابْتِعَادِ عَنْ إِبْلِيسَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'adam-b1-c9-quick', learningPointId: 'adam-b1-c9-teaching', eligibleStages: ['quick'], exercise: tf(L('Adam taught people to live rightly and act honestly.', 'علّم آدم الناس أن يعيشوا حياة صحيحة ويتصرفوا بصدق.'), true, L('These teaching goals are stated directly.', 'ترد هذه الأهداف التعليمية مباشرة.')) },
        { id: 'adam-b1-c9-knowledge', learningPointId: 'adam-b1-c9-first', eligibleStages: ['knowledge'], exercise: mc(L('What event is connected with Adam becoming the first Messenger?', 'ما الحدث المرتبط بأن يصبح آدم أول رسول؟'), { en: ['The formation of a community', 'The building of the first city', 'The arrival of a raven'], ar: ['تكوّن مجتمع', 'بناء أول مدينة', 'وصول غراب'] }, 0, L('The chapter connects the formation of a community with Adam’s role as Messenger.', 'يربط الفصل تكوّن المجتمع بدور آدم كرسول.')) },
        { id: 'adam-b1-c9-review', learningPointId: 'adam-b1-c9-children', eligibleStages: ['review'], exercise: tf(L('Adam and Eve taught their children to be careful of Iblis’s tricks.', 'علّم آدم وحواء أولادهما أن يكونوا حذرين من حيل إبليس.'), true, L('This warning is part of their teaching in the chapter.', 'هذا التحذير جزء من تعليمهما في الفصل.')) },
        { id: 'adam-b1-c9-final', learningPointId: 'adam-b1-c9-path', eligibleStages: ['final'], exercise: matching(L('Match each continuing prophetic task with its purpose.', 'صل كل مهمة نبوية مستمرة بهدفها.'), { en: [['Show the right path', 'guide people toward good'], ['Teach ways to stay away from Iblis', 'protect people from deception']], ar: [['إظهار الطريق الصحيح', 'هداية الناس إلى الخير'], ['تعليم طرق الابتعاد عن إبليس', 'حماية الناس من التضليل']] }, L('The chapter presents guidance and protection from Iblis as continuing prophetic work.', 'يعرض الفصل الهداية والحماية من إبليس بوصفهما عملًا نبويًا مستمرًا.')) },
      ],
      ...G(L('prophetic guidance and a continuing message', 'الهداية النبوية واستمرار الرسالة'), L('What changed when a community formed?', 'ما الذي تغير عندما تكوّن مجتمع؟'), L('Which parts of Adam’s teaching continued through later messengers?', 'أي أجزاء من تعليم آدم استمرت مع الأنبياء اللاحقين؟'), L('Practise reporting verbs: taught, showed, told, reminded.', 'تدرّب على أفعال القول والتعليم مثل علّم، بيّن، قال، ذكّر.'), L('Practise community, honestly, sacred texts, right path, and messenger.', 'تدرّب على نطق مجتمع، بصدق، الكتب المقدسة، الطريق الصحيح، ورسول.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Compare Habil and Qabil’s characters and work.', 'يقارن بين شخصية هابيل وقابيل وعملهما.'),
        L('Explain how the two offerings reveal different attitudes.', 'يشرح كيف يكشف القربانان موقفين مختلفين.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c10-work', focus: 'comparison', claim: L('Habil became a shepherd while Qabil became a farmer.', 'أصبح هابيل راعيًا بينما أصبح قابيل مزارعًا.'), evidence: L('Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer', 'أَصْبَحَ هَابِيلُ رَاعِيًا. كَانَ يَعْتَنِي بِالْأَبْقَارِ وَالْأَغْنَامِ وَالْحَيَوَانَاتِ الْأُخْرَى. أَمَّا قَابِيلُ فَعَمِلَ مُزَارِعًا') },
        { id: 'adam-b1-c10-character', focus: 'comparison', claim: L('Habil is described as kind and gentle, while Qabil is described as jealous.', 'يوصف هابيل بأنه لطيف وهادئ بينما يوصف قابيل بالحسد.'), evidence: L('Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous', 'كَانَ هَابِيلُ لَطِيفًا وَهَادِئَ الطِّبَاعِ، وَكَانَ يُحِبُّ الِاعْتِنَاءَ بِالْحَيَوَانَاتِ. أَمَّا قَابِيلُ فَكَانَ حَاسِدًا فِي غَالِبِ الْأَحْيَانِ') },
        { id: 'adam-b1-c10-offerings', focus: 'character-action', claim: L('Habil brought his best sheep, but Qabil brought a low-value handful of crops.', 'قدّم هابيل أفضل كبش عنده، بينما قدّم قابيل حفنة قليلة القيمة من محصوله.'), evidence: L('Habil brought his best and healtiest sheep as a gift for Allah, but Qabil brought just a handful of his crops that wasn’t very valuable', 'أَحْضَرَ هَابِيلُ كَهَدِيَّةٍ لِلهِ أَفْضَلَ وَأَصَحَّ كَبْشٍ عِنْدَهُ، لَكِنَّ قَابِيلَ أَحْضَرَ فَقَطْ حَفْنَةً مِنْ مَحْصُولِهِ لَا قِيمَةَ لَهَا') },
        { id: 'adam-b1-c10-goodness', focus: 'theme', claim: L('The chapter defines real goodness as giving the best and most loved.', 'يعرّف الفصل الخير الحقيقي بأنه إعطاء أفضل وأحب شيء.'), evidence: L('real goodness is giving out the best and the most loved', 'الْخَيْرُ الْحَقِيقِيُّ هُوَ أَنْ تُعْطِيَ أَفْضَلَ وَأَحَبَّ شَيْءٍ إِلَيْكَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'adam-b1-c10-quick', learningPointId: 'adam-b1-c10-work', eligibleStages: ['quick'], exercise: tap(L('What work did each brother do?', 'ما عمل كل واحد من الأخوين؟'), L('Habil was a shepherd; Qabil was a farmer.', 'كان هابيل راعيًا وكان قابيل مزارعًا.'), L('Their different work is stated in the first paragraph.', 'يُذكر عملهما المختلف في الفقرة الأولى.')) },
        { id: 'adam-b1-c10-knowledge', learningPointId: 'adam-b1-c10-character', eligibleStages: ['knowledge'], exercise: matching(L('Match each brother with the trait stated in the chapter.', 'صل كل أخ بالصفة المذكورة في الفصل.'), { en: [['Habil', 'kind and gentle'], ['Qabil', 'jealous']], ar: [['هابيل', 'لطيف وهادئ الطبع'], ['قابيل', 'حاسد']] }, L('The chapter contrasts their personalities before the disagreement.', 'يقارن الفصل بين شخصيتيهما قبل الخلاف.')) },
        { id: 'adam-b1-c10-review', learningPointId: 'adam-b1-c10-offerings', eligibleStages: ['review'], exercise: mc(L('Which contrast accurately describes the brothers’ offerings?', 'أي مقارنة تصف قرباني الأخوين بدقة؟'), { en: ['Habil gave his best sheep; Qabil gave a low-value handful of crops', 'Habil gave poor crops; Qabil gave his best sheep', 'Both brothers gave equally valuable gifts'], ar: ['قدّم هابيل أفضل كبش؛ وقدّم قابيل حفنة قليلة القيمة من محصوله', 'قدّم هابيل محصولًا ضعيفًا؛ وقدّم قابيل أفضل كبش', 'قدّم الأخوان هديتين متساويتين في القيمة'] }, 0, L('The chapter directly contrasts the quality of the two offerings.', 'يقارن الفصل مباشرة بين جودة القربانين.')) },
        { id: 'adam-b1-c10-final', learningPointId: 'adam-b1-c10-goodness', eligibleStages: ['final'], exercise: mc(L('Which principle follows the description of the two offerings?', 'أي مبدأ يأتي بعد وصف القربانين؟'), { en: ['Real goodness means giving the best and most loved', 'A gift is good only if it is physically large', 'A person’s job decides moral value'], ar: ['الخير الحقيقي هو إعطاء أفضل وأحب شيء', 'لا تكون الهدية جيدة إلا إذا كانت كبيرة الحجم', 'نوع العمل يحدد القيمة الأخلاقية'] }, 0, L('The final sentence gives this principle directly.', 'تذكر الجملة الأخيرة هذا المبدأ مباشرة.')) },
      ],
      ...G(L('character, intention, and the quality of the offerings', 'الشخصية والنية وجودة القربان'), L('How are Habil and Qabil different before the offering?', 'كيف يختلف هابيل وقابيل قبل تقديم القربان؟'), L('What do the two offerings reveal about care and intention?', 'ماذا يكشف القربانان عن الاهتمام والنية؟'), L('Use while and but to make clear comparisons.', 'استخدم بينما ولكن لبناء مقارنات واضحة.'), L('Practise disagreement, offering, jealous, farmer, and shepherd.', 'تدرّب على نطق خلاف، قربان، حاسد، مزارع، وراعٍ.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Trace the consequences of Qabil’s anger.', 'يتتبع نتائج غضب قابيل.'),
        L('Explain the practical and moral role of the raven.', 'يشرح الدور العملي والأخلاقي للغراب.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c11-raven', focus: 'direct', claim: L('Allah sent a raven that dug the ground near Qabil.', 'أرسل الله غرابًا حفر الأرض بالقرب من قابيل.'), evidence: L('sent a raven which landed near Qabil and started digging the ground', 'أَرْسَلَ اللهُ غُرَابًا، وَقَفَ الْغُرَابُ بِالْقُرْبِ مِنْ قَابِيلَ وَبَدَأَ يَحْفِرُ الْأَرْضَ') },
        { id: 'adam-b1-c11-habil', focus: 'motivation', claim: L('Habil refused to fight back because Qabil was his brother and he feared Allah.', 'رفض هابيل القتال لأن قابيل أخوه ولأنه يخاف الله.'), evidence: L('I won’t fight back and harm you, you are my brother and I fear Allah', 'لَنْ أُقَاتِلَكَ وَلَنْ أُؤْذِيَكَ، أَنْتَ أَخِي وَأَنَا أَخَافُ اللهَ') },
        { id: 'adam-b1-c11-regret', focus: 'cause-result', claim: L('After Qabil’s anger cooled, sadness and panic followed.', 'بعد أن هدأ غضب قابيل تبعه الندم والخوف والذعر.'), evidence: L('Qabil’s anger cooled and he felt so sad but also started to panic', 'هَدَأَ غَضَبُ قَابِيلَ، شَعَرَ بِالنَّدَمِ وَالْخَوْفِ، أُصِيبَ بِالذُّعْرِ أَيْضًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'adam-b1-c11-quick', learningPointId: 'adam-b1-c11-raven', eligibleStages: ['quick'], exercise: mc(L('What action by the raven gave Qabil a practical lesson?', 'أي فعل للغراب قدّم لقابيل درسًا عمليًا؟'), { en: ['It dug the ground', 'It carried crops', 'It flew to Paradise'], ar: ['حفر الأرض', 'حمل المحاصيل', 'طار إلى الجنة'] }, 0, L('The raven landed near Qabil and began digging the ground.', 'وقف الغراب بالقرب من قابيل وبدأ يحفر الأرض.')) },
        { id: 'adam-b1-c11-knowledge', learningPointId: 'adam-b1-c11-habil', eligibleStages: ['knowledge'], exercise: mc(L('Why did Habil say he would not fight back?', 'لماذا قال هابيل إنه لن يقاتل؟'), { en: ['He feared Allah and would not harm his brother', 'He wanted Qabil to become a farmer', 'He did not understand the threat'], ar: ['لأنه يخاف الله ولا يريد إيذاء أخيه', 'لأنه أراد أن يصبح قابيل مزارعًا', 'لأنه لم يفهم التهديد'] }, 0, L('Habil gives both reasons in his direct reply.', 'يذكر هابيل السببين في رده المباشر.')) },
        { id: 'adam-b1-c11-review', learningPointId: 'adam-b1-c11-regret', eligibleStages: ['review'], exercise: tf(L('Qabil’s sadness and panic appeared after his anger cooled.', 'ظهر ندم قابيل وخوفه وذعره بعد أن هدأ غضبه.'), true, L('The chapter presents these reactions in that order.', 'يعرض الفصل هذه المشاعر بهذا الترتيب.')) },
      ],
      ...G(L('anger, non-violence, regret, and the raven’s lesson', 'الغضب ورفض العنف والندم ودرس الغراب'), L('What reason did Habil give for refusing to fight?', 'ما السبب الذي ذكره هابيل لرفض القتال؟'), L('Why is the raven both a practical and moral lesson for Qabil?', 'لماذا يمثل الغراب درسًا عمليًا وأخلاقيًا لقابيل؟'), L('Practise sequence language and reported/direct speech.', 'تدرّب على لغة التسلسل والكلام المباشر والمنقول.'), L('Practise panic, raven, digging, anger, and regret.', 'تدرّب على نطق الذعر، غراب، يحفر، الغضب، والندم.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Identify the moral lessons drawn from the loss of Habil and Qabil.', 'يحدد الدروس الأخلاقية المستخلصة من فقد هابيل وقابيل.'),
        L('Explain how Adam’s message is presented as continuing beyond his lifetime.', 'يشرح كيف تُعرض رسالة آدم بوصفها مستمرة بعد حياته.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c12-anger', focus: 'theme', claim: L('The story teaches believers to avoid jealousy and control anger.', 'تعلم القصة المؤمنين الابتعاد عن الحسد والتحكم في الغضب.'), evidence: L('stay away from jealousy and control their anger', 'يَبْتَعِدُوا عَنِ الْحَسَدِ وَأَنْ يَتَحَكَّمُوا فِي غَضَبِهِمْ') },
        { id: 'adam-b1-c12-worldwide', focus: 'sequence', claim: L('Adam’s children and grandchildren spread his message worldwide.', 'نقل أولاد آدم رسالته إلى أنحاء العالم.'), evidence: L('His children and grandchildren moved to different parts of the world and spread his message worldwide', 'تَفَرَّقَ أَوْلَادُهُ فِي أَمَاكِنَ مُخْتَلِفَةٍ مِنَ الْعَالَمِ، وَنَقَلُوا رِسَالَةَ جَدِّهِمْ إِلَى كُلِّ مَكَانٍ فِي الْعَالَمِ') },
        { id: 'adam-b1-c12-return', focus: 'theme', claim: L('The continuing message includes admitting mistakes and turning back to Allah.', 'تتضمن الرسالة المستمرة الاعتراف بالأخطاء والرجوع إلى الله.'), evidence: L('admitting mistakes and turning back to Allah', 'الِاعْتِرَافِ بِأَخْطَائِهِمْ وَالرُّجُوعِ إِلَى اللهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'adam-b1-c12-quick', learningPointId: 'adam-b1-c12-anger', eligibleStages: ['quick'], exercise: matching(L('Match each danger with the response taught by the chapter.', 'صل كل خطر بالاستجابة التي يعلمها الفصل.'), { en: [['Jealousy', 'stay away from it'], ['Anger', 'control it']], ar: [['الحسد', 'الابتعاد عنه'], ['الغضب', 'التحكم فيه']] }, L('Both lessons are stated together near the beginning of the chapter.', 'يُذكر الدرسان معًا قرب بداية الفصل.')) },
        { id: 'adam-b1-c12-review', learningPointId: 'adam-b1-c12-worldwide', eligibleStages: ['review'], exercise: mc(L('How did Adam’s message continue as his family spread across the world?', 'كيف استمرت رسالة آدم مع انتشار أسرته في العالم؟'), { en: ['His children and grandchildren carried it to different places', 'The message ended when Adam grew old', 'Only one person was allowed to remember it'], ar: ['نقلها أولاده إلى أماكن مختلفة من العالم', 'انتهت الرسالة عندما كبر آدم', 'سُمح لشخص واحد فقط بتذكرها'] }, 0, L('The chapter says his descendants spread the message worldwide.', 'يقول الفصل إن أولاده نقلوا الرسالة إلى أنحاء العالم.')) },
        { id: 'adam-b1-c12-final', learningPointId: 'adam-b1-c12-return', eligibleStages: ['final'], exercise: fill(L('Complete one continuing lesson of Adam’s story.', 'أكمل أحد الدروس المستمرة من قصة آدم.'), L('People should admit mistakes and turn back to [blank].', 'على الناس الاعتراف بأخطائهم والرجوع إلى [blank].'), L('Allah', 'الله'), L('The final paragraph explicitly links admitting mistakes with returning to Allah.', 'تربط الفقرة الأخيرة صراحة بين الاعتراف بالأخطاء والرجوع إلى الله.')) },
      ],
      ...G(L('the continuing legacy of Adam’s message', 'استمرار إرث رسالة آدم'), L('Which lessons does the chapter draw from jealousy and anger?', 'ما الدروس التي يستخلصها الفصل من الحسد والغضب؟'), L('How does the final chapter connect Adam’s story with guidance for later people?', 'كيف يربط الفصل الأخير قصة آدم بهداية من جاء بعده؟'), L('Use still, continue, and present simple to discuss a message that remains relevant.', 'استخدم ما زال ويستمر والحاضر للحديث عن رسالة باقية.'), L('Practise worldwide, admitting, message, jealousy, and legacy.', 'تدرّب على نطق كل مكان في العالم، الاعتراف، الرسالة، الحسد، والإرث.')),
    },
  ],
  wholeBook: {
    knowledgeCheck: {
      title: L('B1 Knowledge Check: Adam', 'اختبار المعرفة B1: آدم'),
      content: L('Use the story chapters to answer relationship and cause/result questions.', 'استخدم فصول القصة للإجابة عن أسئلة العلاقات والسبب والنتيجة.'),
    },
    review: {
      title: L('B1 Review: Adam', 'مراجعة B1: آدم'),
      content: L('Review eight distinct learning points through a balanced mix of multiple-choice and true/false questions.', 'راجع ثماني نقاط تعلم مختلفة بمزيج متوازن من الاختيار من متعدد والصواب والخطأ.'),
    },
    finalChallenge: {
      title: L('B1 Final Challenge: Adam', 'التحدي النهائي B1: آدم'),
      content: L('Complete ten evidence-based activities using distinct learning points and varied interaction types.', 'أكمل عشرة أنشطة قائمة على الدليل باستخدام نقاط تعلم مختلفة وأنواع تفاعل متنوعة.'),
    },
    glossary: [
      { title: L('Word Notes: Chapters 1–6', 'ملاحظات المفردات: الفصول 1–6') },
      { title: L('Word Notes: Chapters 7–12', 'ملاحظات المفردات: الفصول 7–12') },
    ],
  },
});
