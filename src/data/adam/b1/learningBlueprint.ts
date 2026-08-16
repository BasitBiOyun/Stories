import { defineLearningBlueprint, type BlueprintVocabularyTarget } from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { adamB1ExplicitHighlightTargets } from './highlights';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamB1ExplicitHighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `adam-b1-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

export const adamB1LearningBlueprint = defineLearningBlueprint({
  id: 'adam-b1',
  version: '1.0.0',
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
      ...guideBundle({ focus: L('Adam’s creation and humanity’s responsibility on earth', 'خلق آدم ومسؤولية الإنسان في الأرض'), primaryQuestion: L('How is Adam introduced in the first paragraph?', 'كيف يقدّم الفصل آدم في الفقرة الأولى؟'), secondQuestion: L('What responsibility does the idea of a ruler on earth suggest?', 'ما المسؤولية التي تشير إليها فكرة الخليفة في الأرض؟'), grammar: L('Use past and present forms to distinguish story events from continuing ideas.', 'استخدم الماضي والحاضر للتمييز بين أحداث القصة والأفكار المستمرة.'), pronunciation: L('Practise Messenger, soil, ruler, earth, and curiosity.', 'تدرّب على نطق رسول، التراب، خليفة، الأرض، وفضول.'), fast: L('Write a claim → evidence → explanation response about humanity’s role on earth.', 'اكتب استجابة: ادعاء ← دليل ← تفسير حول دور الإنسان في الأرض.'), support: L('Use the frame: “The chapter says ___. This shows ___.”', 'استخدم الإطار: «يقول الفصل ___. وهذا يوضح ___.»') }),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain the link between different soil and human diversity.', 'يشرح العلاقة بين اختلاف التراب وتنوع البشر.'),
        L('Identify the importance of knowledge and intellect in Adam’s story.', 'يحدد أهمية العلم والعقل في قصة آدم.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c2-diversity', focus: 'cause-result', claim: L('Soil from different parts of the earth is linked to different human skin colors.', 'يربط الفصل بين التراب من أماكن مختلفة واختلاف ألوان بشرة الناس.'), evidence: L('soil from different parts of the earth', 'ترابا من أماكن مختلفة من الأرض') },
        { id: 'adam-b1-c2-intellect', focus: 'cause-result', claim: L('Allah gave Adam life and intellect so that he could learn and understand.', 'أعطى الله آدم الحياة والعقل لكي يتعلم ويفهم.'), evidence: L('life and intellect to learn and understand', 'الحياة والعقل لكي يتعلم ويفهم') },
        { id: 'adam-b1-c2-knowledge', focus: 'comparison', claim: L('Adam was given more knowledge than the angels.', 'أُعطي آدم علمًا أكثر من الملائكة.'), evidence: L('more knowledge than angels', 'علما أكثر من الملائكة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'adam-b1-c2-quick', learningPointId: 'adam-b1-c2-diversity', eligibleStages: ['quick'], exercise: matching(L('Match the cause and result described in the chapter.', 'صل السبب بالنتيجة المذكورة في الفصل.'), { en: [['Soil from different lands', 'different human skin colors'], ['Life and intellect', 'ability to learn and understand']], ar: [['تراب من أماكن مختلفة', 'اختلاف ألوان بشرة الناس'], ['الحياة والعقل', 'القدرة على التعلم والفهم']] }, L('The chapter connects different soil with human diversity and intellect with learning.', 'يربط الفصل اختلاف التراب بتنوع البشر والعقل بالتعلم.')) },
        { id: 'adam-b1-c2-knowledge', learningPointId: 'adam-b1-c2-intellect', eligibleStages: ['knowledge'], exercise: mc(L('Why did Allah give Adam intellect according to the chapter?', 'لماذا أعطى الله آدم العقل وفقًا للفصل؟'), { en: ['To learn and understand', 'To become physically stronger', 'To live without responsibility'], ar: ['لكي يتعلم ويفهم', 'ليصبح أقوى جسديًا', 'ليعيش بلا مسؤولية'] }, 0, L('The chapter directly connects intellect with learning and understanding.', 'يربط الفصل العقل مباشرة بالتعلم والفهم.')) },
        { id: 'adam-b1-c2-review', learningPointId: 'adam-b1-c2-knowledge', eligibleStages: ['review'], exercise: tf(L('The chapter says Adam received more knowledge than the angels.', 'يقول الفصل إن آدم أُعطي علمًا أكثر من الملائكة.'), true, L('This comparison is stated at the end of the chapter.', 'ترد هذه المقارنة في نهاية الفصل.')) },
      ],
      ...guideBundle({ focus: L('human diversity, intellect, and knowledge', 'تنوع البشر والعقل والعلم'), primaryQuestion: L('How does the chapter explain differences in human skin color?', 'كيف يفسر الفصل اختلاف ألوان بشرة الناس؟'), secondQuestion: L('Why is knowledge more important than physical origin in this part of the story?', 'لماذا يبدو العلم أهم من أصل المادة في هذا الجزء من القصة؟'), grammar: L('Practise cause/result language with because, so, and that is why.', 'تدرّب على روابط السبب والنتيجة مثل لأن، لذلك، ولهذا السبب.'), pronunciation: L('Practise intellect, knowledge, skin colors, respect, and angels.', 'تدرّب على نطق العقل، العلم، ألوان البشرة، الاحترام، والملائكة.'), fast: L('Compare the two causes and results in the chapter in four sentences.', 'قارن بين علاقتي السبب والنتيجة في الفصل في أربع جمل.'), support: L('Use: “Because ___, ___.” / “The chapter says ___.”', 'استخدم: «لأن ___، فإن ___.» / «يقول الفصل ___.»') }),
    },
    {
      chapterId: 3,
      objectives: [
        L('Explain the reasoning behind Iblis’s arrogance.', 'يشرح التفكير الذي أدى إلى تكبر إبليس.'),
        L('Identify the chapter’s wider message about superiority.', 'يحدد رسالة الفصل الأوسع عن الأفضلية.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c3-fire', focus: 'motivation', claim: L('Iblis claimed superiority because he was created from fire while Adam was created from soil.', 'ادعى إبليس الأفضلية لأنه خُلق من نار بينما خُلق آدم من التراب.'), evidence: L('You created me from fire, and You created Adam (pbuh) from soil', 'خلقتني من نار، وخلقته من تراب') },
        { id: 'adam-b1-c3-origin', focus: 'cause-result', claim: L('Iblis believed his origin made him more important than Adam.', 'اعتقد إبليس أن أصله يجعله أهم من آدم.'), evidence: L('because he believed his origin was superior', 'لأنه كان يعتقد أن أصله أفضل') },
        { id: 'adam-b1-c3-message', focus: 'theme', claim: L('The chapter rejects race, color, or group membership as sources of true superiority.', 'يرفض الفصل أن يكون العرق أو اللون أو الانتماء إلى جماعة مصدرًا حقيقيًا للأفضلية.'), evidence: L('did not come from race, color, or being a member of a certain group', 'لا تأتي الأفضلية أو العظمة من العرق، أو اللون، أو الانتماء إلى جماعة معينة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'adam-b1-c3-quick', learningPointId: 'adam-b1-c3-fire', eligibleStages: ['quick'], exercise: fill(L('Complete Iblis’s comparison.', 'أكمل مقارنة إبليس.'), L('Iblis said he was created from [blank], while Adam was created from soil.', 'قال إبليس إنه خُلق من [blank]، بينما خُلق آدم من التراب.'), L('fire', 'نار'), L('Iblis directly compared fire with soil.', 'قارن إبليس مباشرة بين النار والتراب.')) },
        { id: 'adam-b1-c3-knowledge', learningPointId: 'adam-b1-c3-origin', eligibleStages: ['knowledge'], exercise: mc(L('What belief caused Iblis to judge himself as more important?', 'أي اعتقاد جعل إبليس يرى نفسه أهم؟'), { en: ['His origin was superior', 'He had more knowledge than Adam', 'The angels asked him to lead them'], ar: ['أن أصله أفضل', 'أنه كان أعلم من آدم', 'أن الملائكة طلبت منه قيادتها'] }, 0, L('The chapter says Iblis believed his origin was superior.', 'يقول الفصل إن إبليس كان يعتقد أن أصله أفضل.')) },
        { id: 'adam-b1-c3-final', learningPointId: 'adam-b1-c3-message', eligibleStages: ['final'], exercise: mc(L('Which idea best expresses the chapter’s wider lesson about superiority?', 'أي فكرة تعبّر أفضل عن رسالة الفصل الأوسع حول الأفضلية؟'), { en: ['Race, color, and group do not create true greatness', 'Fire always makes a being better than soil', 'A person’s group decides all moral value'], ar: ['العرق واللون والجماعة لا تصنع العظمة الحقيقية', 'النار تجعل المخلوق دائمًا أفضل من التراب', 'جماعة الإنسان تحدد كل قيمته الأخلاقية'] }, 0, L('The final sentence rejects race, color, and group membership as sources of greatness.', 'ترفض الجملة الأخيرة العرق واللون والانتماء الجماعي كمصادر للعظمة.')) },
      ],
      ...guideBundle({ focus: L('arrogance, origin, and the meaning of superiority', 'الكبر والأصل ومعنى الأفضلية'), primaryQuestion: L('What reason did Iblis give for considering himself better?', 'ما السبب الذي ذكره إبليس لاعتبار نفسه أفضل؟'), secondQuestion: L('How does the final sentence challenge Iblis’s reasoning?', 'كيف تتحدى الجملة الأخيرة تفكير إبليس؟'), grammar: L('Use because and however to contrast Iblis’s reasoning with the chapter’s conclusion.', 'استخدم لأن ومع ذلك للمقارنة بين تفكير إبليس وخلاصة الفصل.'), pronunciation: L('Practise arrogant, superior, origin, fire, and soil.', 'تدرّب على نطق متكبر، أفضل، أصله، نار، والتراب.'), fast: L('Write a short paragraph showing why Iblis’s argument fails according to the chapter.', 'اكتب فقرة قصيرة توضح لماذا يفشل منطق إبليس وفقًا للفصل.'), support: L('Use: “Iblis believed ___. However, the chapter says ___.”', 'استخدم: «اعتقد إبليس ___. ومع ذلك يقول الفصل ___.»') }),
    },
    {
      chapterId: 4,
      objectives: [
        L('Describe Iblis’s reaction after his refusal.', 'يصف رد فعل إبليس بعد رفضه.'),
        L('Explain why Adam is warned to be careful of Iblis.', 'يشرح لماذا حُذّر آدم من إبليس.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c4-defiance', focus: 'character-action', claim: L('Iblis continued insisting that he was right.', 'استمر إبليس في الإصرار على أنه كان محقًا.'), evidence: L('continued saying he was right', 'استمر إبليس في القول إنه كان محقا') },
        { id: 'adam-b1-c4-enemy', focus: 'cause-result', claim: L('Iblis became angry with Adam and looked for a chance to keep him away from Allah’s kindness.', 'غضب إبليس من آدم وانتظر فرصة ليبعده عن رحمة الله.'), evidence: L('waited for a chance to keep Adam (pbuh) away from Allah’s kindness', 'انتظر فرصة ليُبعِد آدم (عليه السلام) عن رحمة الله') },
        { id: 'adam-b1-c4-warning', focus: 'direct', claim: L('Allah told Adam that Iblis was his enemy and warned him to be careful.', 'قال الله لآدم إن إبليس عدو له وأمره أن يكون حذرًا.'), evidence: L('Iblis was his enemy and told him to be careful', 'إبليس عدو له، وأمره أن يكون حذرًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'adam-b1-c4-quick', learningPointId: 'adam-b1-c4-warning', eligibleStages: ['quick'], exercise: tf(L('Allah warned Adam that Iblis was his enemy.', 'حذّر الله آدم من أن إبليس عدو له.'), true, L('The warning is stated directly at the end of the chapter.', 'يرد التحذير مباشرة في نهاية الفصل.')) },
        { id: 'adam-b1-c4-review', learningPointId: 'adam-b1-c4-defiance', eligibleStages: ['review'], exercise: tf(L('After the conflict, Iblis immediately admitted that he was wrong.', 'بعد الخلاف اعترف إبليس فورًا بأنه كان مخطئًا.'), false, L('The chapter says he continued claiming that he was right.', 'يقول الفصل إنه استمر في الادعاء بأنه كان محقًا.')) },
        { id: 'adam-b1-c4-final', learningPointId: 'adam-b1-c4-enemy', eligibleStages: ['final'], exercise: mc(L('Why did Iblis wait for a chance to approach Adam again?', 'لماذا انتظر إبليس فرصة للعودة إلى آدم؟'), { en: ['To keep Adam away from Allah’s kindness', 'To teach Adam new knowledge', 'To ask Adam for forgiveness'], ar: ['ليبعد آدم عن رحمة الله', 'ليعلم آدم علمًا جديدًا', 'ليطلب من آدم المغفرة'] }, 0, L('The chapter directly states Iblis’s intention.', 'يذكر الفصل نية إبليس مباشرة.')) },
      ],
      ...guideBundle({ focus: L('defiance, enmity, and warning', 'العناد والعداوة والتحذير'), primaryQuestion: L('How did Iblis react instead of admitting his mistake?', 'كيف تصرف إبليس بدلًا من الاعتراف بخطئه؟'), secondQuestion: L('What does the warning to Adam reveal about the next conflict?', 'ماذا يكشف تحذير آدم عن الصراع القادم؟'), grammar: L('Practise reporting verbs and cause/result clauses.', 'تدرّب على أفعال القول وجمل السبب والنتيجة.'), pronunciation: L('Practise Creator, enemy, careful, kindness, and warning.', 'تدرّب على نطق الخالق، عدو، حذرًا، الرحمة، والتحذير.'), fast: L('Explain the chain: refusal → anger → enmity → warning.', 'اشرح السلسلة: الرفض ← الغضب ← العداوة ← التحذير.'), support: L('Use four short linked sentences with because and so.', 'استخدم أربع جمل قصيرة مترابطة باستعمال لأن ولذلك.') }),
    },
    {
      chapterId: 5,
      objectives: [
        L('Identify the single restriction in Paradise.', 'يحدد القيد الوحيد في الجنة.'),
        L('Explain how Iblis used deception to challenge that restriction.', 'يشرح كيف استخدم إبليس الخداع لمواجهة ذلك القيد.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c5-companion', focus: 'cause-result', claim: L('Allah gave Adam Eve as a companion when he felt lonely.', 'خلق الله حواء لآدم عندما شعر بالوحدة.'), evidence: L('feel lonely. Allah gave him a wife called Eve (Hawwa) to be his companion', 'شَعَرَ آدَمُ (عَلَيْهِ السَّلَامُ) بِالْوِحْدَةِ فِي الْجَنَّةِ، فَخَلَقَ اللهُ لَهُ زَوْجَةً اسْمُهَا حَوَّاءُ') },
        { id: 'adam-b1-c5-tree', focus: 'direct', claim: L('Allah asked Adam and Eve not to go near one tree.', 'طلب الله من آدم وحواء ألا يقتربا من شجرة معينة.'), evidence: L('not to go near one tree', 'أَلَّا يَقْتَرِبَا مِنْ شَجَرَةٍ مُعَيَّنَةٍ') },
        { id: 'adam-b1-c5-lie', focus: 'motivation', claim: L('Iblis pretended to be their friend and promised they would never die if they ate from the tree.', 'ادعى إبليس أنه صديقهما ووعدهما بأنهما لن يموتا إذا أكلا من الشجرة.'), evidence: L('pretending to be their friend. It was a big lie', 'قَالَ إِنَّهُ صَدِيقُهُمَا. كَانَتْ هَذِهِ كِذْبَةً كَبِيرَةً') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'adam-b1-c5-quick', learningPointId: 'adam-b1-c5-tree', eligibleStages: ['quick'], exercise: tap(L('What was the one restriction in Paradise?', 'ما القيد الوحيد في الجنة؟'), L('Adam and Eve were told not to go near one tree.', 'طُلب من آدم وحواء ألا يقتربا من شجرة معينة.'), L('The chapter describes only this one restriction.', 'يصف الفصل هذا القيد الواحد فقط.')) },
        { id: 'adam-b1-c5-knowledge', learningPointId: 'adam-b1-c5-companion', eligibleStages: ['knowledge'], exercise: mc(L('What happened after Adam began to feel lonely?', 'ماذا حدث بعد أن شعر آدم بالوحدة؟'), { en: ['Allah gave him Eve as a companion', 'He immediately left Paradise', 'Iblis became his teacher'], ar: ['خلق الله له حواء', 'غادر الجنة فورًا', 'أصبح إبليس معلمه'] }, 0, L('The chapter links Adam’s loneliness with the creation of Eve.', 'يربط الفصل وحدة آدم بخلق حواء.')) },
        { id: 'adam-b1-c5-final', learningPointId: 'adam-b1-c5-lie', eligibleStages: ['final'], exercise: matching(L('Match Iblis’s appearance with his real action.', 'صل مظهر إبليس بفعله الحقيقي.'), { en: [['What he pretended to be', 'their friend'], ['What he actually used', 'a lie']], ar: [['ما ادعى أنه عليه', 'صديقهما'], ['ما استخدمه في الحقيقة', 'كذبة']] }, L('The contrast between friendship and deception is explicit in the chapter.', 'المقارنة بين الصداقة والخداع واضحة في الفصل.')) },
      ],
      ...guideBundle({ focus: L('the restriction in Paradise and Iblis’s deception', 'القيد في الجنة وخداع إبليس'), primaryQuestion: L('What was Adam and Eve’s only restriction?', 'ما القيد الوحيد الذي وُضع لآدم وحواء؟'), secondQuestion: L('Why is pretending to be a friend important to Iblis’s strategy?', 'لماذا كان ادعاء الصداقة مهمًا في خطة إبليس؟'), grammar: L('Use if-clauses to report the promise made by Iblis.', 'استخدم جمل الشرط لنقل الوعد الذي قاله إبليس.'), pronunciation: L('Practise lonely, blessings, lie, tree, and companion.', 'تدرّب على نطق الوحدة، النعم، كذبة، شجرة، وحواء.'), fast: L('Write three sentences separating Iblis’s claim from what the chapter calls it.', 'اكتب ثلاث جمل تفصل بين ادعاء إبليس وما يسميه الفصل حقيقةً.'), support: L('Use: “Iblis said ___. The chapter calls this ___.”', 'استخدم: «قال إبليس ___. ويسمي الفصل هذا ___.»') }),
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
        { id: 'adam-b1-c6-review', learningPointId: 'adam-b1-c6-forgot', eligibleStages: ['review'], exercise: tf(L('The chapter says Iblis’s lies caused them to forget Allah’s warning.', 'يقول الفصل إن كذب إبليس جعلهما ينسيان تحذير الله.'), true, L('This cause-and-result link appears in the first paragraph.', 'تظهر علاقة السبب والنتيجة في الفقرة الأولى.')) },
        { id: 'adam-b1-c6-final', learningPointId: 'adam-b1-c6-inborn', eligibleStages: ['final'], exercise: fill(L('Complete the chapter’s statement about modesty.', 'أكمل عبارة الفصل عن الحياء.'), L('The sense of shame is [blank] human nature.', 'الحياء [blank] في الإنسان.'), L('inborn', 'فطرة'), L('The chapter explicitly describes shame or modesty as natural and inborn.', 'يصف الفصل الحياء صراحة بأنه فطري.')) },
      ],
      ...guideBundle({ focus: L('deception, consequences, and inborn modesty', 'الخداع والنتائج والحياء الفطري'), primaryQuestion: L('What changed immediately after Adam and Eve ate?', 'ما الذي تغير مباشرة بعد أن أكل آدم وحواء؟'), secondQuestion: L('What evidence does the chapter use to describe modesty as natural?', 'ما الدليل الذي يستخدمه الفصل لوصف الحياء بأنه فطري؟'), grammar: L('Practise sequence and consequence language: after, when, so, because.', 'تدرّب على لغة التسلسل والنتيجة: بعد، عندما، لذلك، لأن.'), pronunciation: L('Practise forbidden, shame, inborn, tree leaves, and warning.', 'تدرّب على نطق الممنوعة، الخجل، فطرة، أوراق الأشجار، والتحذير.'), fast: L('Create a four-step consequence chain from deception to covering themselves.', 'أنشئ سلسلة من أربع خطوات من الخداع إلى تغطية أنفسهما.'), support: L('Use: “First ___. Then ___. As a result ___.”', 'استخدم: «أولًا ___. ثم ___. ونتيجة لذلك ___.»') }),
    },
    {
      chapterId: 7,
      objectives: [
        L('Compare repentance with arrogance.', 'يقارن بين التوبة والكبر.'),
        L('Explain why admitting a mistake changes the direction of the story.', 'يشرح لماذا يغير الاعتراف بالخطأ مسار القصة.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c7-repent', focus: 'character-action', claim: L('Adam and Eve apologized, learned from their mistake, and decided not to repeat it.', 'اعتذر آدم وحواء وتعلما من خطئهما وصمما على عدم تكراره.'), evidence: L('said sorry to Allah, learned from their mistake and decided never to repeat it', 'اعْتَذَرَا إِلَى اللهِ، وَتَعَلَّمَا مِنْ خَطَئِهِمَا، وَصَمَّمَا عَلَى عَدَمِ تَكْرَارِهِ') },
        { id: 'adam-b1-c7-iblis', focus: 'comparison', claim: L('Iblis chose the opposite response and never admitted he was wrong.', 'اختار إبليس ردًا معاكسًا ولم يعترف بأنه كان مخطئًا.'), evidence: L('He never admitted he was wrong', 'لَمْ يَعْتَرِفْ أَبَدًا بِأَنَّهُ كَانَ مُخْطِئًا') },
        { id: 'adam-b1-c7-barrier', focus: 'theme', claim: L('The chapter calls arrogance the biggest barrier to acting rightly and distinguishing right from wrong.', 'يسمي الفصل الكبر أكبر عقبة أمام التصرف الصحيح والتمييز بين الصواب والخطأ.'), evidence: L('Arrogance is the biggest barrier', 'الْكِبْرَ هُوَ أَكْبَرُ عَقَبَةٍ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'adam-b1-c7-quick', learningPointId: 'adam-b1-c7-iblis', eligibleStages: ['quick'], exercise: matching(L('Match each response to the character or characters.', 'صل كل رد فعل بالشخصية المناسبة.'), { en: [['Adam and Eve', 'admitted the mistake and asked forgiveness'], ['Iblis', 'refused to admit he was wrong']], ar: [['آدم وحواء', 'اعترفا بالخطأ وطلبا المغفرة'], ['إبليس', 'رفض الاعتراف بأنه كان مخطئًا']] }, L('The chapter deliberately contrasts the two responses.', 'يقارن الفصل عمدًا بين الردين.')) },
        { id: 'adam-b1-c7-knowledge', learningPointId: 'adam-b1-c7-repent', eligibleStages: ['knowledge'], exercise: mc(L('Which action best shows repentance in the chapter?', 'أي فعل يوضح التوبة أفضل في الفصل؟'), { en: ['Learning from the mistake and deciding not to repeat it', 'Insisting that the mistake was correct', 'Blaming another person and doing nothing'], ar: ['التعلم من الخطأ والعزم على عدم تكراره', 'الإصرار على أن الخطأ كان صحيحًا', 'لوم شخص آخر وعدم فعل شيء'] }, 0, L('Repentance is shown through apology, learning, and a decision not to repeat the mistake.', 'تظهر التوبة في الاعتذار والتعلم والعزم على عدم تكرار الخطأ.')) },
        { id: 'adam-b1-c7-final', learningPointId: 'adam-b1-c7-barrier', eligibleStages: ['final'], exercise: mc(L('Why does the chapter describe arrogance as a barrier?', 'لماذا يصف الفصل الكبر بأنه عقبة؟'), { en: ['It prevents a person from seeing and acting on what is right', 'It makes a person learn faster', 'It removes every difficult choice'], ar: ['لأنه يمنع الإنسان من رؤية الصواب والعمل به', 'لأنه يجعل الإنسان يتعلم أسرع', 'لأنه يزيل كل اختيار صعب'] }, 0, L('The chapter links arrogance with failure to distinguish and act on right and wrong.', 'يربط الفصل الكبر بالعجز عن التمييز بين الصواب والخطأ والتصرف الصحيح.')) },
      ],
      ...guideBundle({ focus: L('repentance versus arrogance', 'التوبة مقابل الكبر'), primaryQuestion: L('What steps show that Adam and Eve truly responded to their mistake?', 'ما الخطوات التي تبين أن آدم وحواء استجابا لخطئهما بصدق؟'), secondQuestion: L('Why does Iblis’s refusal to admit error matter?', 'لماذا يعد رفض إبليس الاعتراف بالخطأ مهمًا؟'), grammar: L('Use contrast language: on the other hand, while, unlike, whereas.', 'استخدم لغة المقارنة والاستدراك: من ناحية أخرى، بينما، على خلاف.'), pronunciation: L('Practise mistake, pardon, barrier, earth, and arrogance.', 'تدرّب على نطق خطأ، يغفر، عقبة، الأرض، والكبر.'), fast: L('Write a comparison paragraph using one piece of evidence for each response.', 'اكتب فقرة مقارنة تستخدم دليلًا واحدًا لكل رد فعل.'), support: L('Use: “Adam and Eve ___. In contrast, Iblis ___.”', 'استخدم: «آدم وحواء ___. وعلى العكس، إبليس ___.»') }),
    },
    {
      chapterId: 8,
      objectives: [
        L('Describe the new responsibilities and difficulties of life on earth.', 'يصف المسؤوليات والصعوبات الجديدة للحياة في الأرض.'),
        L('Explain why Iblis continued to follow humanity.', 'يشرح لماذا استمر إبليس في متابعة البشر.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c8-survive', focus: 'comparison', claim: L('Life on earth required struggle and hard work to survive.', 'تطلبت الحياة في الأرض الكفاح والعمل الجاد للبقاء.'), evidence: L('struggle to survive and work hard', 'يُكَافِحَ مِنْ أَجْلِ الْبَقَاءِ') },
        { id: 'adam-b1-c8-responsibility', focus: 'main-idea', claim: L('Adam and Eve were responsible for farming, shelter, protecting nature, and helping the weak.', 'كان على آدم وحواء الزراعة وبناء المسكن وحماية الطبيعة ومساعدة الضعفاء.'), evidence: L('protect the nature and help the weak', 'يَحْمِيَانِ الطَّبِيعَةَ، وَيُسَاعِدَانِ الضُّعَفَاءَ') },
        { id: 'adam-b1-c8-iblis', focus: 'motivation', claim: L('Iblis followed humanity because he wanted people not to remember Allah.', 'تبع إبليس البشر لأنه أراد إبعاد الناس عن ذكر الله.'), evidence: L('wanted people not to remember Allah', 'حَاوَلَ لِيُبْعِدَ النَّاسَ عَنْ ذِكْرِ اللهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'adam-b1-c8-quick', learningPointId: 'adam-b1-c8-survive', eligibleStages: ['quick'], exercise: fill(L('Complete the contrast with life in Paradise.', 'أكمل المقارنة مع الحياة في الجنة.'), L('On earth, they had to [blank] to survive.', 'في الأرض كان عليهما أن [blank] من أجل البقاء.'), L('struggle', 'يكافحا'), L('Earth is described as requiring struggle and hard work.', 'تُوصف الأرض بأنها تتطلب الكفاح والعمل الجاد.')) },
        { id: 'adam-b1-c8-review', learningPointId: 'adam-b1-c8-responsibility', eligibleStages: ['review'], exercise: tf(L('The chapter includes protecting nature and helping the weak among human responsibilities.', 'يذكر الفصل حماية الطبيعة ومساعدة الضعفاء ضمن مسؤوليات الإنسان.'), true, L('Both responsibilities are stated in the opening sentence.', 'ترد المسؤوليتان في بداية الفصل.')) },
        { id: 'adam-b1-c8-final', learningPointId: 'adam-b1-c8-iblis', eligibleStages: ['final'], exercise: mc(L('What was Iblis trying to achieve on earth?', 'ما الذي كان إبليس يحاول تحقيقه في الأرض؟'), { en: ['Make people forget Allah', 'Help people build shelters', 'Teach people to grow crops'], ar: ['إبعاد الناس عن ذكر الله', 'مساعدة الناس على بناء المساكن', 'تعليم الناس زراعة المحاصيل'] }, 0, L('The chapter states that Iblis wanted people not to remember Allah.', 'يقول الفصل إن إبليس حاول إبعاد الناس عن ذكر الله.')) },
      ],
      ...guideBundle({ focus: L('earthly responsibility, survival, and continued temptation', 'المسؤولية في الأرض والبقاء واستمرار الإغواء'), primaryQuestion: L('How did life on earth differ from life in Paradise?', 'كيف اختلفت الحياة في الأرض عن الحياة في الجنة؟'), secondQuestion: L('How are practical responsibilities and spiritual danger presented together?', 'كيف يعرض الفصل المسؤوليات العملية والخطر الروحي معًا؟'), grammar: L('Use had to / كان عليه to express necessity and responsibility.', 'استخدم كان عليه للتعبير عن الضرورة والمسؤولية.'), pronunciation: L('Practise struggle, survive, clothes, nature, and descendants.', 'تدرّب على نطق يكافح، البقاء، الملابس، الطبيعة، والأبناء.'), fast: L('Classify chapter details into survival, responsibility, and spiritual danger.', 'صنّف تفاصيل الفصل إلى البقاء والمسؤولية والخطر الروحي.'), support: L('Use three headings and copy one supporting phrase under each.', 'استخدم ثلاثة عناوين وضع تحت كل واحد عبارة داعمة من الفصل.') }),
    },
    {
      chapterId: 9,
      objectives: [
        L('Explain Adam’s role as the first Messenger once a community formed.', 'يشرح دور آدم كأول رسول بعد تكوّن المجتمع.'),
        L('Identify the shared purpose of later messengers.', 'يحدد الغرض المشترك للأنبياء الذين جاءوا بعده.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c9-first', focus: 'sequence', claim: L('Adam became the first Messenger when a community came into being.', 'أصبح آدم أول رسول عندما تكوّن مجتمع.'), evidence: L('when a community came out, Adam (pbuh) became the first Messenger of Allah', 'عِنْدَمَا تَكَوَّنَ مُجْتَمَعٌ، أَصْبَحَ آدَمُ أَوَّلَ رَسُولٍ لِلهِ') },
        { id: 'adam-b1-c9-teaching', focus: 'character-action', claim: L('Adam taught people to live righteously, act honestly, do good, and avoid evil.', 'علّم آدم الناس الحياة الصحيحة والتصرف بصدق وفعل الخير وتجنب الشر.'), evidence: L('live righteously and act honestly', 'عَيْشِ حَيَاةٍ صَحِيحَةٍ، وَالتَّصَرُّفِ بِصِدْقٍ') },
        { id: 'adam-b1-c9-children', focus: 'direct', claim: L('Adam and Eve taught their children to worship only Allah and beware of Iblis.', 'علّم آدم وحواء أولادهما عبادة الله وحده والحذر من إبليس.'), evidence: L('taught their children to pray only to Allah and be aware of Iblis', 'عَلَّمَ آدَمُ وَحَوَّاءُ أَوْلَادَهُمَا عِبَادَةَ اللهِ وَحْدَهُ') },
        { id: 'adam-b1-c9-path', focus: 'theme', claim: L('Later messengers continued to show people the right path and how to stay away from Iblis.', 'واصل الأنبياء بعد آدم إظهار الطريق الصحيح وطرق الابتعاد عن إبليس.'), evidence: L('show people the right path and the ways to stay away from Iblis', 'لِيُظْهِرُوا لِلنَّاسِ الطَّرِيقَ الصَّحِيحَ وَطُرُقَ الِابْتِعَادِ عَنْ إِبْلِيسَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'adam-b1-c9-quick', learningPointId: 'adam-b1-c9-teaching', eligibleStages: ['quick'], exercise: tf(L('Adam taught people to live rightly and act honestly.', 'علّم آدم الناس أن يعيشوا حياة صحيحة ويتصرفوا بصدق.'), true, L('These teaching goals are stated directly.', 'ترد هذه الأهداف التعليمية مباشرة.')) },
        { id: 'adam-b1-c9-knowledge', learningPointId: 'adam-b1-c9-first', eligibleStages: ['knowledge'], exercise: mc(L('When did Adam become the first Messenger according to this chapter?', 'متى أصبح آدم أول رسول وفقًا لهذا الفصل؟'), { en: ['When a community formed', 'Before he was created', 'Only after the story of Habil and Qabil'], ar: ['عندما تكوّن مجتمع', 'قبل أن يُخلق', 'فقط بعد قصة هابيل وقابيل'] }, 0, L('The chapter connects the formation of a community with Adam’s role as Messenger.', 'يربط الفصل تكوّن المجتمع بدور آدم كرسول.')) },
        { id: 'adam-b1-c9-review', learningPointId: 'adam-b1-c9-children', eligibleStages: ['review'], exercise: tf(L('Adam and Eve warned their children that Iblis was an enemy, not a friend.', 'حذّر آدم وحواء أولادهما من أن إبليس ليس صديقًا لهم.'), true, L('The chapter includes this warning in their teaching.', 'يتضمن الفصل هذا التحذير ضمن تعليمهما.')) },
        { id: 'adam-b1-c9-final', learningPointId: 'adam-b1-c9-path', eligibleStages: ['final'], exercise: matching(L('Match the continuing prophetic task with its purpose.', 'صل المهمة النبوية المستمرة بهدفها.'), { en: [['Show the right path', 'guide people toward good'], ['Ways to stay away from Iblis', 'protect people from deception']], ar: [['إظهار الطريق الصحيح', 'هداية الناس إلى الخير'], ['طرق الابتعاد عن إبليس', 'حماية الناس من التضليل']] }, L('The chapter presents both guidance and protection from Iblis as continuing prophetic work.', 'يعرض الفصل الهداية والحماية من إبليس بوصفهما عملًا نبويًا مستمرًا.')) },
      ],
      ...guideBundle({ focus: L('prophetic guidance and a continuing message', 'الهداية النبوية واستمرار الرسالة'), primaryQuestion: L('What changed when a community formed?', 'ما الذي تغير عندما تكوّن مجتمع؟'), secondQuestion: L('Which parts of Adam’s teaching continued through later messengers?', 'أي أجزاء من تعليم آدم استمرت مع الأنبياء اللاحقين؟'), grammar: L('Practise reporting verbs: taught, showed, told, reminded.', 'تدرّب على أفعال القول والتعليم مثل علّم، بيّن، قال، ذكّر.'), pronunciation: L('Practise community, honestly, sacred texts, right path, and messenger.', 'تدرّب على نطق مجتمع، بصدق، الكتب المقدسة، الطريق الصحيح، ورسول.'), fast: L('Create a two-column comparison of Adam’s teaching and later messengers’ teaching.', 'أنشئ مقارنة بعمودين بين تعليم آدم وتعليم الأنبياء بعده.'), support: L('Use one exact phrase from the chapter in each column.', 'استخدم عبارة دقيقة واحدة من الفصل في كل عمود.') }),
    },
    {
      chapterId: 10,
      objectives: [
        L('Compare Habil and Qabil’s characters and work.', 'يقارن بين شخصية هابيل وقابيل وعملهما.'),
        L('Explain how the two offerings reveal different attitudes.', 'يشرح كيف تكشف القربانان موقفين مختلفين.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c10-work', focus: 'comparison', claim: L('Habil became a shepherd while Qabil became a farmer.', 'أصبح هابيل راعيًا بينما أصبح قابيل مزارعًا.'), evidence: L('Habil became a shepherd', 'أَصْبَحَ هَابِيلُ رَاعِيًا') },
        { id: 'adam-b1-c10-character', focus: 'comparison', claim: L('Habil is described as kind and gentle, while Qabil is described as jealous.', 'يوصف هابيل بأنه لطيف وهادئ بينما يوصف قابيل بالحسد.'), evidence: L('Habil was kind, gentle', 'كَانَ هَابِيلُ لَطِيفًا وَهَادِئَ الطِّبَاعِ') },
        { id: 'adam-b1-c10-offerings', focus: 'character-action', claim: L('Habil brought his best sheep, but Qabil brought only a low-value handful of crops.', 'قدّم هابيل أفضل كبش عنده، بينما قدّم قابيل حفنة قليلة القيمة من محصوله.'), evidence: L('Habil brought his best and healtiest sheep', 'أَحْضَرَ هَابِيلُ كَهَدِيَّةٍ لِلهِ أَفْضَلَ وَأَصَحَّ كَبْشٍ عِنْدَهُ') },
        { id: 'adam-b1-c10-goodness', focus: 'theme', claim: L('The chapter defines real goodness as giving the best and most loved.', 'يعرّف الفصل الخير الحقيقي بأنه إعطاء أفضل وأحب شيء.'), evidence: L('real goodness is giving out the best and the most loved', 'الْخَيْرُ الْحَقِيقِيُّ هُوَ أَنْ تُعْطِيَ أَفْضَلَ وَأَحَبَّ شَيْءٍ إِلَيْكَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'adam-b1-c10-quick', learningPointId: 'adam-b1-c10-work', eligibleStages: ['quick'], exercise: tap(L('What work did each brother do?', 'ما عمل كل واحد من الأخوين؟'), L('Habil was a shepherd; Qabil was a farmer.', 'كان هابيل راعيًا وكان قابيل مزارعًا.'), L('Their different work is stated in the first paragraph.', 'يُذكر عملهما المختلف في الفقرة الأولى.')) },
        { id: 'adam-b1-c10-knowledge', learningPointId: 'adam-b1-c10-character', eligibleStages: ['knowledge'], exercise: matching(L('Match each brother with the trait stated in the chapter.', 'صل كل أخ بالصفة المذكورة في الفصل.'), { en: [['Habil', 'kind and gentle'], ['Qabil', 'jealous']], ar: [['هابيل', 'لطيف وهادئ الطبع'], ['قابيل', 'حاسد']] }, L('The chapter contrasts their personalities before the disagreement.', 'يقارن الفصل بين شخصيتيهما قبل الخلاف.')) },
        { id: 'adam-b1-c10-review', learningPointId: 'adam-b1-c10-offerings', eligibleStages: ['review'], exercise: tf(L('Habil offered his best sheep, while Qabil brought only a small, low-value part of his crops.', 'قدّم هابيل أفضل كبش عنده، بينما قدّم قابيل حفنة قليلة القيمة من محصوله.'), true, L('The different quality of the offerings is stated directly.', 'يذكر الفصل اختلاف جودة القربانين مباشرة.')) },
        { id: 'adam-b1-c10-final', learningPointId: 'adam-b1-c10-goodness', eligibleStages: ['final'], exercise: mc(L('Which principle does the chapter state after describing the two offerings?', 'أي مبدأ يذكره الفصل بعد وصف القربانين؟'), { en: ['Real goodness means giving the best and most loved', 'A gift is valuable only when it is large', 'The type of job decides a person’s goodness'], ar: ['الخير الحقيقي هو إعطاء أفضل وأحب شيء', 'لا تكون الهدية قيمة إلا إذا كانت كبيرة', 'نوع العمل يحدد خير الإنسان'] }, 0, L('The final sentence gives this principle directly.', 'تذكر الجملة الأخيرة هذا المبدأ مباشرة.')) },
      ],
      ...guideBundle({ focus: L('character, intention, and the quality of the offerings', 'الشخصية والنية وجودة القربان'), primaryQuestion: L('How are Habil and Qabil different before the offering?', 'كيف يختلف هابيل وقابيل قبل تقديم القربان؟'), secondQuestion: L('What do the two offerings reveal about care and intention?', 'ماذا يكشف القربانان عن الاهتمام والنية؟'), grammar: L('Use while and but to make clear comparisons.', 'استخدم بينما ولكن لبناء مقارنات واضحة.'), pronunciation: L('Practise disagreement, offering, jealous, farmer, and shepherd.', 'تدرّب على نطق خلاف، قربان، حاسد، مزارع، وراعٍ.'), fast: L('Write a comparison using two details about character and two about the offerings.', 'اكتب مقارنة تستخدم تفصيلين عن الشخصية وتفصيلين عن القربان.'), support: L('Use: “Habil ___, while Qabil ___.”', 'استخدم: «هابيل ___، بينما قابيل ___.»') }),
    },
    {
      chapterId: 11,
      objectives: [
        L('Trace the consequences of Qabil’s anger.', 'يتتبع نتائج غضب قابيل.'),
        L('Explain the practical and moral role of the raven.', 'يشرح الدور العملي والأخلاقي للغراب.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c11-raven', focus: 'direct', claim: L('Allah sent a raven that dug the ground and showed Qabil what to do with his brother’s body.', 'أرسل الله غرابًا حفر الأرض وأرى قابيل ما يفعله بجثة أخيه.'), evidence: L('sent a raven which landed near Qabil and started digging the ground', 'أَرْسَلَ اللهُ غُرَابًا، وَقَفَ الْغُرَابُ بِالْقُرْبِ مِنْ قَابِيلَ وَبَدَأَ يَحْفِرُ الْأَرْضَ') },
        { id: 'adam-b1-c11-habil', focus: 'motivation', claim: L('Habil refused to fight back because Qabil was his brother and he feared Allah.', 'رفض هابيل القتال لأن قابيل أخوه ولأنه يخاف الله.'), evidence: L('I won’t fight back and harm you, you are my brother and I fear Allah', 'لَنْ أُقَاتِلَكَ وَلَنْ أُؤْذِيَكَ، أَنْتَ أَخِي وَأَنَا أَخَافُ اللهَ') },
        { id: 'adam-b1-c11-regret', focus: 'cause-result', claim: L('After Qabil’s anger cooled, he became sad, regretful, and panicked.', 'بعد أن هدأ غضب قابيل شعر بالندم والخوف والذعر.'), evidence: L('Qabil’s anger cooled and he felt so sad but also started to panic', 'هَدَأَ غَضَبُ قَابِيلَ، شَعَرَ بِالنَّدَمِ وَالْخَوْفِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'adam-b1-c11-quick', learningPointId: 'adam-b1-c11-raven', eligibleStages: ['quick'], exercise: mc(L('What did the raven’s action show Qabil?', 'ماذا أظهر فعل الغراب لقابيل؟'), { en: ['How to place his brother’s body in the ground', 'How to find a new farm', 'How to call Adam'], ar: ['كيف يضع جثة أخيه في الأرض', 'كيف يجد مزرعة جديدة', 'كيف ينادي آدم'] }, 0, L('The raven dug the ground and showed Qabil what to do with the body.', 'حفر الغراب الأرض وأرى قابيل ما يفعله بالجثة.')) },
        { id: 'adam-b1-c11-knowledge', learningPointId: 'adam-b1-c11-habil', eligibleStages: ['knowledge'], exercise: mc(L('Why did Habil say he would not fight back?', 'لماذا قال هابيل إنه لن يقاتل؟'), { en: ['He feared Allah and would not harm his brother', 'He wanted Qabil to become a farmer', 'He did not understand the threat'], ar: ['لأنه يخاف الله ولا يريد إيذاء أخيه', 'لأنه أراد أن يصبح قابيل مزارعًا', 'لأنه لم يفهم التهديد'] }, 0, L('Habil gives both reasons in his direct reply.', 'يذكر هابيل السببين في رده المباشر.')) },
        { id: 'adam-b1-c11-review', learningPointId: 'adam-b1-c11-regret', eligibleStages: ['review'], exercise: tf(L('Qabil’s panic came after his anger cooled and he realized what he had done.', 'بدأ ذعر قابيل بعد أن هدأ غضبه وأدرك ما فعله.'), true, L('The chapter presents anger, killing, regret, and panic in that order.', 'يعرض الفصل الغضب ثم القتل ثم الندم والذعر بهذا الترتيب.')) },
      ],
      ...guideBundle({ focus: L('anger, non-violence, regret, and the raven’s lesson', 'الغضب ورفض العنف والندم ودرس الغراب'), primaryQuestion: L('What reason did Habil give for refusing to fight?', 'ما السبب الذي ذكره هابيل لرفض القتال؟'), secondQuestion: L('Why is the raven both a practical and moral lesson for Qabil?', 'لماذا يمثل الغراب درسًا عمليًا وأخلاقيًا لقابيل؟'), grammar: L('Practise sequence language and reported/direct speech.', 'تدرّب على لغة التسلسل والكلام المباشر والمنقول.'), pronunciation: L('Practise panic, raven, digging, anger, and regret.', 'تدرّب على نطق الذعر، غراب، يحفر، الغضب، والندم.'), fast: L('Write the event chain from threat to the raven in five steps.', 'اكتب سلسلة الأحداث من التهديد إلى الغراب في خمس خطوات.'), support: L('Number five short events in the order they happen.', 'رقّم خمسة أحداث قصيرة حسب ترتيب وقوعها.') }),
    },
    {
      chapterId: 12,
      objectives: [
        L('Identify the moral lessons drawn from the loss of Habil and Qabil.', 'يحدد الدروس الأخلاقية المستخلصة من فقد هابيل وقابيل.'),
        L('Explain how Adam’s message is presented as continuing beyond his lifetime.', 'يشرح كيف تُعرض رسالة آدم بوصفها مستمرة بعد حياته.'),
      ],
      evidencePoints: [
        { id: 'adam-b1-c12-anger', focus: 'theme', claim: L('The story teaches believers to avoid jealousy and control anger.', 'تعلم القصة المؤمنين الابتعاد عن الحسد والتحكم في الغضب.'), evidence: L('stay away from jealousy and control their anger', 'يَبْتَعِدُوا عَنِ الْحَسَدِ وَأَنْ يَتَحَكَّمُوا فِي غَضَبِهِمْ') },
        { id: 'adam-b1-c12-worldwide', focus: 'sequence', claim: L('Adam’s children and grandchildren spread his message to different parts of the world.', 'نقل أولاد آدم رسالته إلى أماكن مختلفة من العالم.'), evidence: L('spread his message worldwide', 'نَقَلُوا رِسَالَةَ جَدِّهِمْ إِلَى كُلِّ مَكَانٍ فِي الْعَالَمِ') },
        { id: 'adam-b1-c12-return', focus: 'theme', claim: L('The continuing message includes admitting mistakes and turning back to Allah.', 'تتضمن الرسالة المستمرة الاعتراف بالأخطاء والرجوع إلى الله.'), evidence: L('admitting mistakes and turning back to Allah', 'الِاعْتِرَافِ بِأَخْطَائِهِمْ وَالرُّجُوعِ إِلَى اللهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'adam-b1-c12-quick', learningPointId: 'adam-b1-c12-anger', eligibleStages: ['quick'], exercise: matching(L('Match each danger with the response taught by the chapter.', 'صل كل خطر بالاستجابة التي يعلمها الفصل.'), { en: [['Jealousy', 'stay away from it'], ['Anger', 'control it']], ar: [['الحسد', 'الابتعاد عنه'], ['الغضب', 'التحكم فيه']] }, L('Both lessons are stated together near the beginning of the chapter.', 'يُذكر الدرسان معًا قرب بداية الفصل.')) },
        { id: 'adam-b1-c12-review', learningPointId: 'adam-b1-c12-worldwide', eligibleStages: ['review'], exercise: tf(L('The chapter says Adam’s message spread to different parts of the world through his descendants.', 'يقول الفصل إن رسالة آدم انتشرت في أنحاء العالم عن طريق أبنائه.'), true, L('The chapter describes his descendants carrying the message worldwide.', 'يصف الفصل أبناءه وهم ينقلون الرسالة إلى أنحاء العالم.')) },
        { id: 'adam-b1-c12-final', learningPointId: 'adam-b1-c12-return', eligibleStages: ['final'], exercise: fill(L('Complete one continuing lesson of Adam’s story.', 'أكمل أحد الدروس المستمرة من قصة آدم.'), L('People should admit mistakes and turn back to [blank].', 'على الناس الاعتراف بأخطائهم والرجوع إلى [blank].'), L('Allah', 'الله'), L('The final paragraph explicitly links admitting mistakes with returning to Allah.', 'تربط الفقرة الأخيرة صراحة بين الاعتراف بالأخطاء والرجوع إلى الله.')) },
      ],
      ...guideBundle({ focus: L('the continuing legacy of Adam’s message', 'استمرار إرث رسالة آدم'), primaryQuestion: L('Which lessons does the chapter draw from jealousy and anger?', 'ما الدروس التي يستخلصها الفصل من الحسد والغضب؟'), secondQuestion: L('How does the final chapter connect Adam’s story with guidance for later people?', 'كيف يربط الفصل الأخير قصة آدم بهداية من جاء بعده؟'), grammar: L('Use still, continue, and present simple to discuss a message that remains relevant.', 'استخدم ما زال ويستمر والحاضر للحديث عن رسالة باقية.'), pronunciation: L('Practise worldwide, admitting, message, jealousy, and legacy.', 'تدرّب على نطق كل مكان في العالم، الاعتراف، الرسالة، الحسد، والإرث.'), fast: L('Write a short conclusion using two lessons and two pieces of evidence from the chapter.', 'اكتب خاتمة قصيرة تستخدم درسين ودليلين من الفصل.'), support: L('Use: “The story teaches ___. The chapter supports this with ___.”', 'استخدم: «تعلم القصة ___. ويدعم الفصل ذلك بـ ___.»') }),
    },
  ],
  wholeBook: {
    knowledgeCheck: {
      title: L('B1 Knowledge Check: Adam', 'اختبار المعرفة B1: آدم'),
      content: L('Use the story chapters to answer relationship and cause/result questions.', 'استخدم فصول القصة للإجابة عن أسئلة العلاقات والسبب والنتيجة.'),
    },
    review: {
      title: L('B1 Review: Adam', 'مراجعة B1: آدم'),
      content: L('Review the book through distinct learning points from across the story.', 'راجع الكتاب من خلال نقاط تعلم مختلفة من أنحاء القصة.'),
    },
    finalChallenge: {
      title: L('B1 Final Challenge: Adam', 'التحدي النهائي B1: آدم'),
      content: L('Complete the final evidence-based challenge without repeating earlier learning points.', 'أكمل التحدي النهائي القائم على الدليل دون تكرار نقاط التعلم السابقة.'),
    },
    glossary: [
      { title: L('Word Notes: Chapters 1–6', 'ملاحظات المفردات: الفصول 1–6') },
      { title: L('Word Notes: Chapters 7–12', 'ملاحظات المفردات: الفصول 7–12') },
    ],
  },
});
