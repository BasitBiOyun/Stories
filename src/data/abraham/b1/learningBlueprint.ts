import {
  defineLearningBlueprint,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { abrahamB1HighlightTargets } from './source';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (abrahamB1HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `abraham-b1-c${chapterId}-v${index + 1}`,
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

export const abrahamB1LearningBlueprint = defineLearningBlueprint({
  id: 'abraham-b1',
  version: '1.0.0',
  storyId: 'abraham',
  level: 'B1',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Identify the beliefs surrounding Abraham in Babylon.', 'يحدد المعتقدات التي أحاطت بإبراهيم في بابل.'),
        L('Explain why the idols in the chapter are presented as powerless.', 'يشرح لماذا يعرض الفصل الأصنام بوصفها عاجزة.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c1-babylon-beliefs', focus: 'main-idea', claim: L('People in Babylon worshipped created things such as stars, the moon, the sun, and statues.', 'كان أهل بابل يعبدون أشياء مخلوقة مثل النجوم والقمر والشمس والتماثيل.'), evidence: L('people worshipped the stars, the moon, the sun, and statues made from wood and stone', 'يَعْبُدون النجوم والقمر والشمس والتماثيل المصنوعة من الخشب والحجر') },
        { id: 'abraham-b1-c1-idol-limits', focus: 'comparison', claim: L('The idols could not eat, drink, talk, or move by themselves.', 'لم تكن الأصنام قادرة على الأكل أو الشرب أو الكلام أو الحركة بنفسها.'), evidence: L('these idols did not eat, drink, or talk', 'هذه الأصنام لا تأكل ولا تشرب ولا تتكلّم') },
        { id: 'abraham-b1-c1-prayers', focus: 'inference', claim: L('The statues could not hear or understand the prayers directed to them.', 'لم تكن التماثيل تسمع الدعوات الموجهة إليها أو تفهمها.'), evidence: L('these prayers and wishes could not be heard or understood by the statues', 'لم تكن التماثيل تَسْمَعها أو تَفْهَمها') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'abraham-b1-c1-quick', learningPointId: 'abraham-b1-c1-babylon-beliefs', eligibleStages: ['quick'], exercise: mc(L('What did many people in Abraham’s homeland worship?', 'ماذا كان كثير من الناس في وطن إبراهيم يعبدون؟'), { en: ['Stars, the moon, the sun, and statues', 'Only Allah', 'Only living teachers'], ar: ['النجوم والقمر والشمس والتماثيل', 'الله وحده', 'المعلمين الأحياء فقط'] }, 0, L('The chapter lists celestial bodies and statues among the objects of worship.', 'يسرد الفصل الأجرام السماوية والتماثيل ضمن ما كانوا يعبدونه.')) },
        { id: 'abraham-b1-c1-knowledge', learningPointId: 'abraham-b1-c1-idol-limits', eligibleStages: ['knowledge'], exercise: mc(L('Which detail most directly shows the idols were powerless?', 'أي تفصيل يوضح بصورة مباشرة أن الأصنام كانت عاجزة؟'), { en: ['They could not eat, drink, or talk', 'They were kept in a large building', 'People stood near them'], ar: ['لم تكن تأكل أو تشرب أو تتكلم', 'كانت موضوعة في بيت كبير', 'كان الناس يقفون قربها'] }, 0, L('The story explicitly describes ordinary actions the idols could not perform.', 'يصف النص صراحة أفعالًا عادية لم تكن الأصنام قادرة عليها.')) },
        { id: 'abraham-b1-c1-review', learningPointId: 'abraham-b1-c1-prayers', eligibleStages: ['review'], exercise: mc(L('Why does the final scene in the chapter weaken the people’s belief in the statues?', 'لماذا يضعف المشهد الأخير في الفصل اعتقاد الناس في التماثيل؟'), { en: ['The statues could not hear or understand the prayers', 'The statues answered every request', 'The statues left the building'], ar: ['لأن التماثيل لم تكن تسمع الدعوات أو تفهمها', 'لأن التماثيل أجابت كل طلب', 'لأن التماثيل غادرت بيت العبادة'] }, 0, L('People asked the statues for help, but the statues could not hear or understand them.', 'طلب الناس المساعدة من التماثيل، لكنها لم تكن تسمعهم أو تفهمهم.')) },
      ],
      ...G(L('belief, created things, and the powerlessness of idols', 'المعتقد والمخلوقات وعجز الأصنام'), L('What did people in Babylon worship?', 'ماذا كان أهل بابل يعبدون؟'), L('Which chapter details show that the idols could not respond to people?', 'ما التفاصيل التي تبين أن الأصنام لم تكن قادرة على الاستجابة للناس؟'), L('Use can/cannot and could/could not to describe ability.', 'استخدم صيغ القدرة والعجز لوصف ما تستطيع الأشياء فعله وما لا تستطيع.'), L('Practise Babylon, idols, statues, worshipped, and intelligent.', 'تدرّب على نطق بابل، أصنام، تماثيل، يعبدون، وعاقل.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain how Abraham’s father was connected with idol making.', 'يشرح صلة والد إبراهيم بصناعة الأصنام.'),
        L('Recognize the contrast between the claims about Mardukh and Abraham’s treatment of the statue.', 'يلاحظ التناقض بين الادعاءات حول مردوخ وطريقة تعامل إبراهيم مع التمثال.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c2-azer', focus: 'direct', claim: L('Abraham’s father Azer made idols.', 'كان آزر والد إبراهيم يصنع الأصنام.'), evidence: L('Abraham’s father was an idol maker, named Azer', 'كان والد إبراهيم صانع أصنام يُدعى آزر') },
        { id: 'abraham-b1-c2-mardukh-claim', focus: 'comparison', claim: L('Azer connected Mardukh’s large ears with supposed deep knowledge.', 'ربط آزر أذني مردوخ الكبيرتين بما زعم أنه معرفة عميقة.'), evidence: L('These big ears show his deep knowledge', 'هذه الأذنان الكبيرتان تَدُلّان على معرفته العميقة') },
        { id: 'abraham-b1-c2-toys', focus: 'character-action', claim: L('Abraham treated the idols like toys by riding and kicking them.', 'عامل إبراهيم الأصنام كالألعاب فركب على ظهورها وركلها أحيانًا.'), evidence: L('he rode on their backs and sometimes kicked them', 'كان يَرْكَب على ظهورها، وأحيانًا يَرْكُلها') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'abraham-b1-c2-quick', learningPointId: 'abraham-b1-c2-azer', eligibleStages: ['quick'], exercise: matching(L('Match each person with the detail stated in the chapter.', 'صل كل شخص بالتفصيل المذكور في الفصل.'), { en: [['Azer', 'made idols'], ['Abraham', 'watched his father make idols']], ar: [['آزر', 'كان يصنع الأصنام'], ['إبراهيم', 'كان يراقب والده وهو يصنع الأصنام']] }, L('The chapter directly connects Azer with idol making and Abraham with watching him.', 'يربط الفصل آزر مباشرة بصناعة الأصنام وإبراهيم بمراقبته.')) },
        { id: 'abraham-b1-c2-knowledge', learningPointId: 'abraham-b1-c2-mardukh-claim', eligibleStages: ['knowledge'], exercise: tf(L('Azer said Mardukh’s large ears showed deep knowledge.', 'قال آزر إن أذني مردوخ الكبيرتين تدلان على معرفة عميقة.'), true, L('That is the explanation Azer gives Abraham for the statue’s large ears.', 'هذا هو التفسير الذي أعطاه آزر لإبراهيم بشأن أذني التمثال الكبيرتين.')) },
        { id: 'abraham-b1-c2-final', learningPointId: 'abraham-b1-c2-toys', eligibleStages: ['final'], exercise: fill(L('Complete the detail showing how Abraham treated the idols.', 'أكمل التفصيل الذي يبين كيف تعامل إبراهيم مع الأصنام.'), L('Abraham sometimes rode on the idols’ backs and [blank] them.', 'كان إبراهيم يركب على ظهور الأصنام وأحيانًا [blank].'), L('kicked', 'يركلها'), L('The chapter says he treated the idols like toys and sometimes kicked them.', 'يقول الفصل إنه عامل الأصنام كالألعاب وكان يركلها أحيانًا.')) },
      ],
      ...G(L('human-made idols and Abraham’s early questioning', 'الأصنام المصنوعة بأيدي البشر وتساؤل إبراهيم المبكر'), L('What did Azer do for a living?', 'ماذا كان آزر يصنع؟'), L('How does Abraham’s behavior toward the statues contrast with his father’s beliefs?', 'كيف يتناقض تعامل إبراهيم مع التماثيل مع اعتقاد والده فيها؟'), L('Use reporting verbs such as said, replied, asked, and told.', 'استخدم أفعال القول مثل قال وأجاب وسأل وأخبر.'), L('Practise idol maker, Mardukh, deep knowledge, father, and statue.', 'تدرّب على نطق صانع أصنام، مردوخ، معرفة عميقة، والد، وتمثال.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Explain what Abraham was searching for as a young man.', 'يشرح ما الذي كان إبراهيم يبحث عنه وهو شاب.'),
        L('Use the star and moon episode to identify the reasoning in the chapter.', 'يستخدم مشهد النجم والقمر لتحديد طريقة الاستدلال في الفصل.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c3-search', focus: 'main-idea', claim: L('Abraham was searching for the one true Creator.', 'كان إبراهيم يبحث عن الخالق الحقيقي الواحد.'), evidence: L('Abraham was in search of one true Creator', 'كان إبراهيم يَبْحَث عن الخالق الحقيقي الواحد') },
        { id: 'abraham-b1-c3-setting', focus: 'comparison', claim: L('The people still honored idols while Abraham searched for the one true Creator.', 'استمر الناس في إظهار الاحترام للأصنام بينما كان إبراهيم يبحث عن الخالق الحقيقي الواحد.'), evidence: L('they were still showing love and respect to idols. On the other hand, Abraham was in search of one true Creator', 'كان يُحْزِنه أنْ يرى أهل المملكة ما زالوا يُظْهِرون الحبّ والاحترام للأصنام. ومن ناحية أخرى، كان إبراهيم يَبْحَث عن الخالق الحقيقي الواحد') },
        { id: 'abraham-b1-c3-star-reasoning', focus: 'cause-result', claim: L('Abraham rejected the star as an object of worship because it set and disappeared.', 'رفض إبراهيم عبادة النجم لأنه يغيب ويختفي.'), evidence: L('I will not show respect to it or worship it, because it sets and disappears', 'لن أُظْهِر له الاحترام، ولن أَعْبُدَه؛ لأنه يَغِيب ويختفي') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'abraham-b1-c3-quick', learningPointId: 'abraham-b1-c3-search', eligibleStages: ['quick'], exercise: fill(L('Complete the chapter’s description of Abraham’s search.', 'أكمل وصف الفصل لبحث إبراهيم.'), L('Abraham was searching for the one true [blank].', 'كان إبراهيم يبحث عن [blank] الحقيقي الواحد.'), L('Creator', 'الخالق'), L('The chapter describes his search as a search for the one true Creator.', 'يصف الفصل بحثه بأنه بحث عن الخالق الحقيقي الواحد.')) },
        { id: 'abraham-b1-c3-review', learningPointId: 'abraham-b1-c3-setting', eligibleStages: ['review'], exercise: tf(L('The chapter contrasts people who still honored idols with Abraham’s search for the true Creator.', 'يقارن الفصل بين قوم ما زالوا يعظمون الأصنام وإبراهيم الذي يبحث عن الخالق الحقيقي.'), true, L('The paragraph explicitly places the two attitudes in contrast.', 'تضع الفقرة الموقفين في مقابلة واضحة.')) },
        { id: 'abraham-b1-c3-final', learningPointId: 'abraham-b1-c3-star-reasoning', eligibleStages: ['final'], exercise: mc(L('Why did Abraham refuse to worship the bright star?', 'لماذا رفض إبراهيم عبادة النجم الساطع؟'), { en: ['Because it set and disappeared', 'Because it was too far from Babylon', 'Because nobody else could see it'], ar: ['لأنه كان يغيب ويختفي', 'لأنه كان بعيدًا جدًا عن بابل', 'لأن أحدًا غيره لم يكن يراه'] }, 0, L('He rejects the star when he sees that it sets and disappears.', 'يرفض النجم عندما يرى أنه يغيب ويختفي.')) },
      ],
      ...G(L('searching for the Creator and reasoning from change', 'البحث عن الخالق والاستدلال من التغير'), L('What was Abraham searching for?', 'عن ماذا كان إبراهيم يبحث؟'), L('How did the star help Abraham explain what should not be worshipped?', 'كيف ساعد مشهد النجم إبراهيم على بيان ما لا ينبغي عبادته؟'), L('Use because and when to explain reasons and changes.', 'استخدم لأن وعندما لشرح الأسباب والتغيرات.'), L('Practise Creator, faded, countryside, star, moon, and cave.', 'تدرّب على نطق الخالق، أفل، الريف، نجم، قمر، وكهف.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Explain how the setting sun completes Abraham’s reasoning about created things.', 'يشرح كيف يكمل غروب الشمس استدلال إبراهيم بشأن المخلوقات.'),
        L('Identify the transition from personal guidance to calling his father.', 'يحدد الانتقال من طلب الهداية لنفسه إلى دعوة والده.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c4-sun', focus: 'cause-result', claim: L('When the sun set, Abraham understood it could not be Allah.', 'عندما غربت الشمس أدرك إبراهيم أنها لا يمكن أن تكون الله.'), evidence: L('when it set, he understood that Allah could not be one of the creations', 'عندما غَرَبَت الشمس، أدرك أن الله لا يمكن أن يكون من المخلوقات') },
        { id: 'abraham-b1-c4-guidance', focus: 'motivation', claim: L('Abraham prostrated and asked Allah for guidance.', 'سجد إبراهيم وطلب من الله الهداية والعون.'), evidence: L('prostrated himself and asked Allah for help', 'فسجد إبراهيم وطلب العون من الله') },
        { id: 'abraham-b1-c4-father', focus: 'turning-point', claim: L('Abraham’s father answered his call with anger, a threat, and an order to leave.', 'رد والد إبراهيم على دعوته بالغضب والتهديد وأمره بالرحيل.'), evidence: L('If you do not stop speaking like this, I will stone you. Leave here now', 'إنْ لم تَتَوَقَّفْ عن هذا الكلام، فسأرجُمك. اِرْحَلْ من هنا الآن') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'abraham-b1-c4-quick', learningPointId: 'abraham-b1-c4-sun', eligibleStages: ['quick'], exercise: tf(L('Abraham accepted the sun as Allah after seeing that it set.', 'قبل إبراهيم الشمس بوصفها الله بعد أن رآها تغرب.'), false, L('The setting sun led him to the opposite conclusion: it was a created thing.', 'قاد غروب الشمس إلى النتيجة العكسية: إنها من المخلوقات.')) },
        { id: 'abraham-b1-c4-knowledge', learningPointId: 'abraham-b1-c4-guidance', eligibleStages: ['knowledge'], exercise: matching(L('Match Abraham’s action with its purpose.', 'صل فعل إبراهيم بالغرض منه.'), { en: [['He prostrated', 'worship and humility'], ['He asked Allah for help', 'guidance to the right way']], ar: [['سجد', 'العبادة والتواضع'], ['طلب العون من الله', 'الهداية إلى الطريق الصحيح']] }, L('Both actions occur as Abraham turns to Allah for guidance.', 'يحدث الفعلان عندما يتوجه إبراهيم إلى الله طالبًا الهداية.')) },
        { id: 'abraham-b1-c4-final', learningPointId: 'abraham-b1-c4-father', eligibleStages: ['final'], exercise: tf(L('Abraham’s father welcomed his message and asked him to stay.', 'رحب والد إبراهيم برسالته وطلب منه البقاء.'), false, L('His father threatened to stone him and told him to leave.', 'هدده والده بالرجم وأمره بالرحيل.')) },
      ],
      ...G(L('guidance, mission, and family opposition', 'الهداية والرسالة ومعارضة الأسرة'), L('What did Abraham understand when the sun set?', 'ماذا أدرك إبراهيم عندما غربت الشمس؟'), L('How does the chapter move from Abraham seeking guidance to guiding others?', 'كيف ينتقل الفصل من طلب إبراهيم للهداية إلى دعوة الآخرين؟'), L('Use if-clauses and reporting language to describe the father’s response.', 'استخدم جمل الشرط وأفعال القول لوصف رد الأب.'), L('Practise prostrated, guide, Messenger, recognized, sun, and father.', 'تدرّب على نطق سجد، يهدي، رسول، أدرك، الشمس، والأب.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Explain why the people continued worshipping idols.', 'يشرح لماذا استمر الناس في عبادة الأصنام.'),
        L('Compare Abraham’s description of Allah with the statues’ lack of power.', 'يقارن بين وصف إبراهيم لقدرة الله وعجز التماثيل.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c5-tradition', focus: 'motivation', claim: L('The people said they worshipped the statues because their fathers had done the same.', 'قال الناس إنهم يعبدون التماثيل لأن آباءهم كانوا يفعلون ذلك.'), evidence: L('We saw our fathers worship them; because of this, we do the same', 'لقد رأينا آباءنا يَعْبُدونها، ولذلك نحن نَفْعَل مثلهم') },
        { id: 'abraham-b1-c5-provision', focus: 'comparison', claim: L('Abraham contrasted Allah’s provision and healing with the statues’ powerlessness.', 'قارن إبراهيم بين رزق الله وشفائه وبين عجز التماثيل.'), evidence: L('My Allah gives me food and drink when I need them, and heals me when I am sick', 'ربّي يُطْعِمني ويَسْقيني عندما أحتاج إلى الطعام والشراب، ويَشْفِيني عندما أَمْرَض') },
        { id: 'abraham-b1-c5-ignored', focus: 'character-action', claim: L('Abraham wanted the people to reconsider their beliefs, but they ignored him.', 'أراد إبراهيم من الناس أن يعيدوا النظر في معتقداتهم لكنهم تجاهلوه.'), evidence: L('He wanted them to reconsider their beliefs. They ignored him', 'كان يُريد منهم أن يُعيدوا النظر في معتقداتهم، لكنّهم تَجاهَلوه') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'abraham-b1-c5-quick', learningPointId: 'abraham-b1-c5-tradition', eligibleStages: ['quick'], exercise: tap(L('What reason did the people give for worshipping the statues?', 'ما السبب الذي ذكره الناس لعبادة التماثيل؟'), L('They had seen their fathers worship them and followed the same practice.', 'رأوا آباءهم يعبدونها فاتبعوا الممارسة نفسها.'), L('The people defended the practice by referring to what their fathers had done.', 'دافع الناس عن الممارسة بالإشارة إلى ما كان يفعله آباؤهم.')) },
        { id: 'abraham-b1-c5-knowledge', learningPointId: 'abraham-b1-c5-provision', eligibleStages: ['knowledge'], exercise: mc(L('Which contrast did Abraham use when speaking to his people?', 'أي مقارنة استخدمها إبراهيم عند حديثه إلى قومه؟'), { en: ['Allah provides food, drink, and healing while statues cannot', 'Statues provide food while Allah cannot', 'Both Allah and statues need people to feed them'], ar: ['الله يرزق الطعام والشراب ويشفي بينما التماثيل عاجزة', 'التماثيل ترزق الطعام بينما الله لا يفعل', 'الله والتماثيل كلاهما يحتاج إلى من يطعمه'] }, 0, L('Abraham names provision and healing as actions of Allah that the statues cannot perform.', 'يذكر إبراهيم الرزق والشفاء من أفعال الله التي لا تستطيع التماثيل فعلها.')) },
        { id: 'abraham-b1-c5-review', learningPointId: 'abraham-b1-c5-ignored', eligibleStages: ['review'], exercise: mc(L('What happened after Abraham urged the people to reconsider their beliefs?', 'ماذا حدث بعد أن دعا إبراهيم الناس إلى إعادة النظر في معتقداتهم؟'), { en: ['They ignored him', 'They immediately destroyed every idol', 'They asked him to become king'], ar: ['تجاهلوه', 'حطموا جميع الأصنام فورًا', 'طلبوا منه أن يصبح ملكًا'] }, 0, L('The final sentence states that the people ignored him.', 'تذكر الجملة الأخيرة أن الناس تجاهلوه.')) },
      ],
      ...G(L('tradition, evidence, and reconsidering beliefs', 'التقليد والدليل وإعادة النظر في المعتقدات'), L('Why did the people say they worshipped the statues?', 'لماذا قال الناس إنهم يعبدون التماثيل؟'), L('How did Abraham compare Allah’s actions with the statues’ abilities?', 'كيف قارن إبراهيم بين أفعال الله وقدرات التماثيل؟'), L('Use because, while, and but to compare reasons and contrasts.', 'استخدم لأن وبينما ولكن للمقارنة بين الأسباب والتناقضات.'), L('Practise furious, reconsider, harm, ignored, food, and healing.', 'تدرّب على نطق غضب، يعيدوا النظر، ضرر، تجاهلوه، الطعام، والشفاء.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Trace how the celebration created an opportunity for Abraham’s plan.', 'يتتبع كيف أتاح الاحتفال فرصة لتنفيذ خطة إبراهيم.'),
        L('Explain the purpose of leaving the largest statue untouched with the axe.', 'يشرح أهمية ترك التمثال الأكبر سليمًا وتعليق الفأس عليه.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c6-empty-town', focus: 'cause-result', claim: L('The celebration took the people outside town and left Abraham an opportunity to enter the temple.', 'أخرج الاحتفال الناس من المدينة وأتاح لإبراهيم فرصة دخول المعبد.'), evidence: L('All the people usually went outside of town', 'كان الناس عادةً يَخْرُجون خارج المدينة') },
        { id: 'abraham-b1-c6-food', focus: 'inference', claim: L('Food left in front of the statues highlighted that they could not even eat it.', 'أبرز الطعام الموضوع أمام التماثيل أنها لا تستطيع حتى أكله.'), evidence: L('There were plates of food in front of them', 'وكانت أمامها أطباق من الطعام') },
        { id: 'abraham-b1-c6-largest', focus: 'turning-point', claim: L('Abraham broke the idols but left the largest statue untouched and hung the axe around its neck.', 'حطم إبراهيم الأصنام لكنه ترك التمثال الأكبر سليمًا وعلق الفأس حول عنقه.'), evidence: L('left the largest statue in the temple untouched, hung the axe around its neck', 'وترك أكبر تمثال في المعبد سليمًا، وعلَّق الفأس حول عنقه') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'abraham-b1-c6-quick', learningPointId: 'abraham-b1-c6-empty-town', eligibleStages: ['quick'], exercise: mc(L('What gave Abraham the chance to enter the temple while the town was empty?', 'ما الذي أتاح لإبراهيم دخول المعبد بينما كانت المدينة خالية؟'), { en: ['A large celebration outside town', 'A sudden flood', 'A royal invitation'], ar: ['احتفال كبير خارج المدينة', 'فيضان مفاجئ', 'دعوة من الملك'] }, 0, L('The people usually went outside town for the celebration.', 'كان الناس يخرجون خارج المدينة من أجل الاحتفال.')) },
        { id: 'abraham-b1-c6-review', learningPointId: 'abraham-b1-c6-food', eligibleStages: ['review'], exercise: tf(L('The plates of food in front of the statues had been eaten by the idols.', 'كانت الأصنام قد أكلت أطباق الطعام الموضوعة أمامها.'), false, L('Abraham joked about the untouched food because the statues could not eat it.', 'سخر إبراهيم من الطعام غير المأكول لأن التماثيل لم تكن قادرة على أكله.')) },
        { id: 'abraham-b1-c6-final', learningPointId: 'abraham-b1-c6-largest', eligibleStages: ['final'], exercise: matching(L('Match the idols with what Abraham did in the temple.', 'صل الأصنام بما فعله إبراهيم في المعبد.'), { en: [['Most idols', 'he broke them'], ['Largest statue', 'he left it untouched and hung the axe on it']], ar: [['معظم الأصنام', 'حطمها'], ['التمثال الأكبر', 'تركه سليمًا وعلق الفأس عليه']] }, L('The contrast between the broken idols and the untouched largest statue prepares the next chapter’s argument.', 'يمهد التناقض بين الأصنام المحطمة والتمثال الأكبر السليم لحجة الفصل التالي.')) },
      ],
      ...G(L('planning, the temple, and a deliberate contrast', 'الخطة والمعبد والتناقض المقصود'), L('Why was the town empty?', 'لماذا كانت المدينة خالية؟'), L('Why is the untouched largest statue important to the sequence of events?', 'لماذا يعد بقاء التمثال الأكبر سليمًا مهمًا في تسلسل الأحداث؟'), L('Use sequence language such as until, then, after, and finally.', 'استخدم روابط التسلسل مثل حتى ثم وبعد ذلك وأخيرًا.'), L('Practise temple, axe, ridiculous, food, largest, and untouched.', 'تدرّب على نطق معبد، فأس، سخيف، الطعام، الأكبر، وسليمًا.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Explain how Abraham used the people’s own admission about the idols.', 'يشرح كيف استخدم إبراهيم اعتراف الناس أنفسهم بشأن الأصنام.'),
        L('Identify how arrogance and attachment to forefathers affected the people’s response.', 'يحدد أثر الكبر والتعلق بالآباء في استجابة الناس.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c7-admission', focus: 'comparison', claim: L('The people themselves admitted that the idols could not speak.', 'اعترف الناس بأن الأصنام لا تستطيع الكلام.'), evidence: L('You are well aware that these idols don’t speak', 'أنت تَعْلَم جيّدًا أنّ هذه الأصنام لا تَتَكَلَّم') },
        { id: 'abraham-b1-c7-arrogance', focus: 'motivation', claim: L('Arrogance prevented the people from accepting the truth and admitting they were wrong.', 'منع الكبر الناس من قبول الحقيقة والاعتراف بخطئهم.'), evidence: L('they were so arrogant that they couldn’t accept the truth and admit they were wrong', 'كانوا مُتَكَبِّرين جدًّا، فلم يَسْتَطِيعوا قَبُول الحقيقة والاعتراف بأنّهم كانوا مُخْطِئين') },
        { id: 'abraham-b1-c7-punishment', focus: 'turning-point', claim: L('The people ended the confrontation by demanding that Abraham be burned and punished.', 'أنهى الناس المواجهة بالمطالبة بإحراق إبراهيم ومعاقبته.'), evidence: L('Burn him! Burn him! In the name of our gods, punish him', 'أَحْرِقوه! أَحْرِقوه! عاقِبوه من أجْل آلهتنا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'abraham-b1-c7-quick', learningPointId: 'abraham-b1-c7-admission', eligibleStages: ['quick'], exercise: matching(L('Match the speaker with the point made in the confrontation.', 'صل المتحدث بالنقطة التي قالها في المواجهة.'), { en: [['The people', 'the idols do not speak'], ['Abraham', 'why worship what cannot speak, see, or protect itself?']], ar: [['الناس', 'الأصنام لا تتكلم'], ['إبراهيم', 'لماذا تعبدون ما لا يتكلم ولا يرى ولا يحمي نفسه؟']] }, L('Abraham builds his challenge on the people’s own admission.', 'يبني إبراهيم حجته على اعتراف الناس أنفسهم.')) },
        { id: 'abraham-b1-c7-knowledge', learningPointId: 'abraham-b1-c7-arrogance', eligibleStages: ['knowledge'], exercise: tf(L('The chapter says arrogance made it harder for the people to accept that they were wrong.', 'يقول الفصل إن الكبر جعل قبول الناس لخطئهم أكثر صعوبة.'), true, L('The text directly connects their arrogance with refusing the truth and refusing to admit error.', 'يربط النص مباشرة بين تكبرهم ورفض الحقيقة والاعتراف بالخطأ.')) },
        { id: 'abraham-b1-c7-final', learningPointId: 'abraham-b1-c7-punishment', eligibleStages: ['final'], exercise: mc(L('How did the people finally respond after refusing Abraham’s argument?', 'كيف استجاب الناس في النهاية بعد رفض حجة إبراهيم؟'), { en: ['They called for him to be burned and punished', 'They made him their leader', 'They quietly left Babylon'], ar: ['طالبوا بإحراقه ومعاقبته', 'جعلوه قائدًا لهم', 'غادروا بابل بهدوء'] }, 0, L('The chapter ends with the crowd shouting for Abraham to be burned.', 'ينتهي الفصل بصراخ الناس مطالبين بإحراق إبراهيم.')) },
      ],
      ...G(L('admission, arrogance, and refusal of truth', 'الاعتراف والكبر ورفض الحق'), L('What did the people admit about the idols?', 'بماذا اعترف الناس بشأن الأصنام؟'), L('Why did admitting the idols could not speak fail to change the people’s final decision?', 'لماذا لم يغير اعترافهم بعجز الأصنام قرارهم النهائي؟'), L('Use although, but, and because to explain contradiction and motivation.', 'استخدم مع أن ولكن ولأن لشرح التناقض والدافع.'), L('Practise smashed, forefathers, arrogant, speak, protect, and truth.', 'تدرّب على نطق محطمة، آباءهم، متكبرين، تتكلم، تحمي، والحقيقة.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Explain Abraham’s calm response to the threat of the fire.', 'يشرح هدوء إبراهيم أمام تهديد النار.'),
        L('Describe the contrast between the fire’s intensity and its effect on Abraham.', 'يصف التناقض بين شدة النار وأثرها في إبراهيم.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c8-trust', focus: 'motivation', claim: L('Abraham stayed calm because he trusted Allah.', 'ظل إبراهيم هادئًا لأنه كان يثق بالله.'), evidence: L('Abraham (pbuh) stayed calm because he trusted Allah', 'ظلّ إبراهيم عليه السلام هادئًا؛ لأنّه كان يَثِق بالله') },
        { id: 'abraham-b1-c8-heat', focus: 'direct', claim: L('The fire was so hot that birds could not fly over the flames.', 'كانت النار شديدة الحرارة حتى إن الطيور لم تستطع الطيران فوق اللهب.'), evidence: L('even birds couldn’t fly over the rising flames', 'حتى إنّ الطيور لم تَسْتَطِع أنْ تَطِير فوق اللهب المتصاعد') },
        { id: 'abraham-b1-c8-result', focus: 'comparison', claim: L('The fire left Abraham safe but burned the ropes binding his hands and feet.', 'تركت النار إبراهيم آمنًا لكنها أحرقت الحبال التي قيدت يديه وقدميه.'), evidence: L('It only burnt the ropes on his hands and feet. He sat in the middle of the fire safely', 'ولم تَحْرِق إلا الحبال المربوطة على يديه وقدميه. وجلس في وسط النار بأمان') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'abraham-b1-c8-quick', learningPointId: 'abraham-b1-c8-trust', eligibleStages: ['quick'], exercise: fill(L('Complete the reason for Abraham’s calmness.', 'أكمل سبب هدوء إبراهيم.'), L('Abraham stayed calm because he [blank] Allah.', 'ظل إبراهيم هادئًا لأنه كان [blank] بالله.'), L('trusted', 'يثق'), L('The chapter directly connects his calmness with trust in Allah.', 'يربط الفصل هدوءه مباشرة بثقته بالله.')) },
        { id: 'abraham-b1-c8-knowledge', learningPointId: 'abraham-b1-c8-heat', eligibleStages: ['knowledge'], exercise: matching(L('Match the detail with what it shows about the fire.', 'صل التفصيل بما يوضحه عن النار.'), { en: [['Birds could not fly over it', 'the heat was extremely strong'], ['People could not approach it', 'the fire was enormous']], ar: [['لم تستطع الطيور الطيران فوقها', 'كانت الحرارة شديدة جدًا'], ['لم يستطع الناس الاقتراب منها', 'كانت النار هائلة']] }, L('Both details emphasize the extraordinary size and heat of the fire.', 'يؤكد التفصيلان شدة النار وضخامتها.')) },
        { id: 'abraham-b1-c8-review', learningPointId: 'abraham-b1-c8-result', eligibleStages: ['review'], exercise: mc(L('What did the fire burn according to the chapter?', 'ماذا أحرقت النار وفقًا للفصل؟'), { en: ['The ropes binding Abraham, not Abraham himself', 'Abraham but not the ropes', 'The whole crowd'], ar: ['الحبال التي قيدت إبراهيم لا إبراهيم نفسه', 'إبراهيم دون الحبال', 'جميع الناس'] }, 0, L('The fire became safe for Abraham and burned only the ropes.', 'صارت النار آمنة لإبراهيم ولم تحرق إلا الحبال.')) },
      ],
      ...G(L('trust under pressure and the fire miracle', 'الثقة وقت الشدة ومعجزة النار'), L('Why did Abraham remain calm?', 'لماذا بقي إبراهيم هادئًا؟'), L('How does the chapter contrast the strength of the fire with what happened to Abraham?', 'كيف يقارن الفصل بين شدة النار وما حدث لإبراهيم؟'), L('Use so...that and because to express degree and reason.', 'استخدم تراكيب النتيجة والسبب للتعبير عن الشدة والدافع.'), L('Practise approach, catapult, fire, flames, ropes, and safely.', 'تدرّب على نطق الاقتراب، المنجنيق، النار، اللهب، الحبال، وبأمان.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Explain how the people reacted after seeing Abraham survive the fire.', 'يشرح كيف استجاب الناس بعد نجاة إبراهيم من النار.'),
        L('Compare Nimrod’s claim about life and death with Abraham’s challenge about the sun.', 'يقارن بين ادعاء نمرود بشأن الحياة والموت وتحدي إبراهيم له بشأن الشمس.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c9-unchanged', focus: 'character-action', claim: L('The miracle embarrassed the people, but their anger and arrogance did not change.', 'أشعرت المعجزة الناس بالخجل لكن غضبهم واستكبارهم لم يتغيرا.'), evidence: L('their anger and arrogance remained unchanged', 'لكنّ غضبَهم واستكبارَهم لم يَتَغَيَّرا') },
        { id: 'abraham-b1-c9-nimrod-demo', focus: 'comparison', claim: L('Nimrod tried to support his claim about life and death by killing one slave and freeing another.', 'حاول نمرود دعم ادعائه بشأن الإحياء والإماتة بقتل عبد وإطلاق الآخر.'), evidence: L('The guards killed one of the slaves, then Nimrod said, “I let the second slave live; let him go.”', 'فَقَتَل الحُرّاس أحدَ العبدين، ثم قال نمرود: أَبْقَيْتُ على حياة العبد الثاني، فأَطْلِقوا سراحه') },
        { id: 'abraham-b1-c9-sun', focus: 'turning-point', claim: L('Abraham challenged Nimrod to make the sun rise from the west.', 'تحدى إبراهيم نمرود أن يجعل الشمس تطلع من المغرب.'), evidence: L('Allah makes the sun rise in the east. Can you make the sun rise from the west', 'إنّ الله يجعل الشمس تَطْلُع من المشرق، فهل تستطيع أن تجعلها تَطْلُع من المغرب') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'abraham-b1-c9-quick', learningPointId: 'abraham-b1-c9-unchanged', eligibleStages: ['quick'], exercise: tf(L('Seeing Abraham unharmed immediately removed the people’s anger and arrogance.', 'أزالت رؤية إبراهيم سالمًا غضب الناس واستكبارهم فورًا.'), false, L('The chapter explicitly says their anger and arrogance remained unchanged.', 'يذكر الفصل صراحة أن غضبهم واستكبارهم لم يتغيرا.')) },
        { id: 'abraham-b1-c9-review', learningPointId: 'abraham-b1-c9-nimrod-demo', eligibleStages: ['review'], exercise: tf(L('Nimrod tried to prove his claim by killing one slave and releasing another.', 'حاول نمرود إثبات ادعائه بقتل عبد وإطلاق سراح الآخر.'), true, L('That is the example Nimrod gives when claiming power over life and death.', 'هذا هو المثال الذي استخدمه نمرود عندما ادعى القدرة على الإحياء والإماتة.')) },
        { id: 'abraham-b1-c9-final', learningPointId: 'abraham-b1-c9-sun', eligibleStages: ['final'], exercise: tf(L('Nimrod was able to answer Abraham by making the sun rise from the west.', 'استطاع نمرود أن يجيب إبراهيم فجعل الشمس تطلع من المغرب.'), false, L('The chapter says Nimrod could not do this; only Allah has that power.', 'يقول الفصل إن نمرود لم يستطع ذلك وإن القدرة لله وحده.')) },
      ],
      ...G(L('human claims of power and the limits of kingship', 'ادعاءات القوة البشرية وحدود سلطة الملوك'), L('How did the people react to the miracle?', 'كيف استجاب الناس للمعجزة؟'), L('Why was Abraham’s challenge about the sun stronger than Nimrod’s example with the two slaves?', 'لماذا كان تحدي إبراهيم بشأن الشمس أقوى من مثال نمرود بالعبدين؟'), L('Use contrast language such as however, yet, but, and while.', 'استخدم روابط الاستدراك والمقارنة مثل لكن ومع ذلك وبينما.'), L('Practise miracle, rage, Nimrod, life, death, east, and west.', 'تدرّب على نطق معجزة، غضب، نمرود، يحيي، يميت، المشرق، والمغرب.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Identify who shared Abraham’s faith before he left Babylon.', 'يحدد من شارك إبراهيم إيمانه قبل مغادرة بابل.'),
        L('Explain why Abraham left Babylon and where the later family journey led.', 'يشرح لماذا غادر إبراهيم بابل وإلى أين قادت الرحلة العائلية لاحقًا.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c10-leave', focus: 'cause-result', claim: L('Abraham decided to leave Babylon because nobody was going to listen to his message.', 'قرر إبراهيم مغادرة بابل لأنه أدرك أن أحدًا لن يستجيب لرسالته.'), evidence: L('nobody was going to listen to his message. Therefore, he decided to leave Babylon', 'أدرك إبراهيم عليه السلام أن أحدًا لن يَسْتَجِيبَ لرسالته. لذلك، قرّر مُغادَرة بابل') },
        { id: 'abraham-b1-c10-believers', focus: 'direct', claim: L('Only Sarah and Lot from his people shared Abraham’s faith in Allah.', 'لم يشاركه الإيمان بالله من قومه إلا سارة ولوط.'), evidence: L('Only one woman and one man of his people shared his faith in Allah', 'لم يُشاركه في إيمانه بالله من قومه إلا امرأة واحدة ورجل واحد') },
        { id: 'abraham-b1-c10-valley', focus: 'sequence', claim: L('The family eventually reached a lonely valley near Safa and Marwa.', 'وصلت الأسرة في النهاية إلى واد منعزل قرب الصفا والمروة.'), evidence: L('reached a lonely valley near two small hills, Safa and Marwa', 'وصلوا إلى وادٍ مُنْعَزِل بالقرب من تَلَّيْن صغيريْن، هما الصفا والمروة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'abraham-b1-c10-quick', learningPointId: 'abraham-b1-c10-leave', eligibleStages: ['quick'], exercise: tap(L('Why did Abraham decide to leave Babylon?', 'لماذا قرر إبراهيم مغادرة بابل؟'), L('He realized nobody was going to listen to his message, so he left to spread Allah’s message elsewhere.', 'أدرك أن أحدًا لن يستجيب لرسالته، فغادر لينشر رسالة الله في أماكن أخرى.'), L('The chapter directly links the decision to leave with the lack of response to his message.', 'يربط الفصل مباشرة قرار المغادرة بعدم الاستجابة لرسالته.')) },
        { id: 'abraham-b1-c10-knowledge', learningPointId: 'abraham-b1-c10-believers', eligibleStages: ['knowledge'], exercise: mc(L('Who shared Abraham’s faith among his people before he left Babylon?', 'من شارك إبراهيم إيمانه من قومه قبل أن يغادر بابل؟'), { en: ['Sarah and Lot', 'Nimrod and Azer', 'All the people of Babylon'], ar: ['سارة ولوط', 'نمرود وآزر', 'جميع أهل بابل'] }, 0, L('The chapter identifies one woman, Sarah, and one man, Lot.', 'يحدد الفصل امرأة هي سارة ورجلًا هو لوط.')) },
        { id: 'abraham-b1-c10-final', learningPointId: 'abraham-b1-c10-valley', eligibleStages: ['final'], exercise: matching(L('Match the place with the journey detail in the chapter.', 'صل المكان بتفصيل الرحلة في الفصل.'), { en: [['Babylon', 'Abraham decided to leave it'], ['Safa and Marwa', 'the lonely valley was near these two hills']], ar: [['بابل', 'قرر إبراهيم مغادرتها'], ['الصفا والمروة', 'كان الوادي المنعزل قرب هذين التلين']] }, L('The chapter moves from departure from Babylon to the later journey ending near Safa and Marwa.', 'ينتقل الفصل من مغادرة بابل إلى الرحلة اللاحقة التي انتهت قرب الصفا والمروة.')) },
      ],
      ...G(L('migration, mission, and the family journey', 'الهجرة والرسالة ورحلة الأسرة'), L('Who shared Abraham’s faith?', 'من شارك إبراهيم إيمانه؟'), L('How did the failure of his public mission in Babylon lead to a new stage of the story?', 'كيف أدى عدم استجابة قومه في بابل إلى مرحلة جديدة من القصة؟'), L('Use therefore, because, and finally to connect cause and sequence.', 'استخدم لذلك ولأن وأخيرًا لربط السبب والتسلسل.'), L('Practise faith, camelback, valley, Sarah, Lot, Safa, and Marwa.', 'تدرّب على نطق إيمان، على ظهر جمل، واد، سارة، لوط، الصفا، والمروة.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Explain Hagar’s trust in Allah in the desert valley.', 'يشرح ثقة هاجر بالله في الوادي الصحراوي.'),
        L('Connect Hagar’s search for water with the later ritual of sa’y.', 'يربط بحث هاجر عن الماء بشعيرة السعي لاحقًا.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c11-search', focus: 'cause-result', claim: L('When food and water ran out, Hagar ran between the hills looking for water and food.', 'عندما نفد الطعام والماء بدأت هاجر تجري بين التلين بحثًا عن الماء والطعام.'), evidence: L('their food and water ran out. Hagar needed to feed her child. She helplessly started running from one hill to another looking for water and food', 'نَفِد طعامهم وماؤهم. وكانت هاجر بحاجة إلى إطعام طفلها. فبدأت تَجْرِي وهي لا حَوْل لها ولا قُوّة، من تَلّ إلى آخر، بحثًا عن الماء والطعام') },
        { id: 'abraham-b1-c11-trust', focus: 'motivation', claim: L('Hagar believed Allah would protect her and Ishmael.', 'آمنت هاجر بأن الله سيحفظها وإسماعيل.'), evidence: L('Allah will never let us die; He will surely protect us', 'لَنْ يَتْرُكَنَا الله نَمُوت أبدًا، بل سَيَحْفَظُنا بالتأكيد') },
        { id: 'abraham-b1-c11-say', focus: 'theme', claim: L('Hagar’s seven journeys between the hills are remembered as sa’y in Hajj and Umrah.', 'يُذكر جهد هاجر بين التلين سبع مرات في شعيرة السعي في الحج والعمرة.'), evidence: L('She ran between these two hills seven times. This effort by Hagar is known as “sa’y” in Hajj and Umrah rituals', 'رَكَضَت بين هذين التلّين سبع مرات. ويُعْرَف هذا الجهد الذي بَذَلَتْه هاجر باسم “السعي” في مناسك الحجّ والعمرة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'abraham-b1-c11-quick', learningPointId: 'abraham-b1-c11-search', eligibleStages: ['quick'], exercise: mc(L('Why did Hagar begin running from one hill to another?', 'لماذا بدأت هاجر تجري من تل إلى آخر؟'), { en: ['Their food and water ran out and she needed help for her child', 'She wanted to return to Babylon', 'She was looking for temple statues'], ar: ['نفد الطعام والماء وكانت تحتاج إلى ما يعين طفلها', 'أرادت العودة إلى بابل', 'كانت تبحث عن تماثيل المعبد'] }, 0, L('The chapter connects the search with the loss of food and water and Ishmael’s need.', 'يربط الفصل البحث بنفاد الطعام والماء وحاجة إسماعيل.')) },
        { id: 'abraham-b1-c11-knowledge', learningPointId: 'abraham-b1-c11-trust', eligibleStages: ['knowledge'], exercise: tf(L('Hagar believed Allah would surely protect them in the valley.', 'كانت هاجر تؤمن بأن الله سيحفظهما في الوادي.'), true, L('She says directly that Allah will protect them.', 'تقول مباشرة إن الله سيحفظهما.')) },
        { id: 'abraham-b1-c11-review', learningPointId: 'abraham-b1-c11-say', eligibleStages: ['review'], exercise: mc(L('What later act of worship remembers Hagar’s seven journeys between the hills?', 'أي عبادة لاحقة تذكر جري هاجر سبع مرات بين التلين؟'), { en: ['Sa’y in Hajj and Umrah', 'The building of Babylon', 'The use of a catapult'], ar: ['السعي في الحج والعمرة', 'بناء بابل', 'استخدام المنجنيق'] }, 0, L('The chapter names this remembered effort as sa’y.', 'يسمي الفصل هذا الجهد المتذكر بالسعي.')) },
      ],
      ...G(L('trust, effort, and the origin of sa’y', 'الثقة والسعي وأصل شعيرة السعي'), L('Why did Hagar search between the hills?', 'لماذا بحثت هاجر بين التلين؟'), L('How does the chapter connect Hagar’s personal struggle with a continuing act of worship?', 'كيف يربط الفصل بين معاناة هاجر الشخصية وعبادة مستمرة؟'), L('Use when, because, and so to connect need, action, and result.', 'استخدم عندما ولأن ولذلك لربط الحاجة بالفعل والنتيجة.'), L('Practise blessings, ritual, sa’y, Safa, Marwa, water, and child.', 'تدرّب على نطق بارك، النسك، سعي، الصفا، المروة، الماء، والطفل.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Trace the appearance of Zamzam and its immediate effect on Hagar and Ishmael.', 'يتتبع ظهور زمزم وأثره المباشر في هاجر وإسماعيل.'),
        L('Explain how the spring contributed to settlement and the growth of Mecca.', 'يشرح كيف أسهم النبع في الاستقرار ونمو مكة.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c12-water', focus: 'sequence', claim: L('Water began flowing from the ground under Ishmael’s feet while Hagar was searching.', 'بدأ الماء يتدفق من الأرض تحت قدمي إسماعيل بينما كانت هاجر تبحث.'), evidence: L('water started flowing from the ground under the feet of Ishmael', 'بدأ الماء فجأة يَتَدَفَّق من الأرض تحت قَدَمَيْ إسماعيل') },
        { id: 'abraham-b1-c12-settlement', focus: 'cause-result', claim: L('More people settled in the valley because of the sacred spring.', 'استقر مزيد من الناس في الوادي بسبب النبع المبارك.'), evidence: L('More people came to settle there because of this sacred spring', 'وجاء المزيد من الناس لِيَسْتَقِرّوا هناك بسبب هذا النَّبْع المبارك') },
        { id: 'abraham-b1-c12-mecca', focus: 'turning-point', claim: L('The growing settlement became a city called Mecca.', 'تحول الاستقرار المتزايد إلى مدينة تسمى مكة.'), evidence: L('They started building up a city called Mecca', 'وبَدَؤوا يَبْنُون مدينة تُسَمّى مكة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'abraham-b1-c12-quick', learningPointId: 'abraham-b1-c12-water', eligibleStages: ['quick'], exercise: matching(L('Match the person with the detail in the Zamzam scene.', 'صل الشخص بالتفصيل في مشهد زمزم.'), { en: [['Ishmael', 'water flowed from the ground under his feet'], ['Hagar', 'she saw the water and collected it']], ar: [['إسماعيل', 'تدفق الماء من الأرض تحت قدميه'], ['هاجر', 'رأت الماء وجمعت منه']] }, L('The chapter describes both Ishmael’s position and Hagar’s response to the water.', 'يصف الفصل موضع إسماعيل واستجابة هاجر للماء.')) },
        { id: 'abraham-b1-c12-review', learningPointId: 'abraham-b1-c12-settlement', eligibleStages: ['review'], exercise: tf(L('The sacred spring encouraged more people to settle in the valley.', 'شجع النبع المبارك مزيدًا من الناس على الاستقرار في الوادي.'), true, L('The chapter directly says people came to settle there because of the spring.', 'يقول الفصل مباشرة إن الناس جاؤوا للاستقرار هناك بسبب النبع.')) },
        { id: 'abraham-b1-c12-final', learningPointId: 'abraham-b1-c12-mecca', eligibleStages: ['final'], exercise: fill(L('Complete the result of the growing settlement.', 'أكمل نتيجة نمو الاستقرار.'), L('They began building a city called [blank].', 'بدأوا يبنون مدينة تسمى [blank].'), L('Mecca', 'مكة'), L('The final paragraph names the city as Mecca.', 'تسمي الفقرة الأخيرة المدينة مكة.')) },
      ],
      ...G(L('Zamzam, settlement, and the growth of Mecca', 'زمزم والاستقرار ونمو مكة'), L('Where did the water appear?', 'أين ظهر الماء؟'), L('How did one spring change the future of the valley?', 'كيف غيّر نبع واحد مستقبل الوادي؟'), L('Use because of, so, and later to describe cause and development.', 'استخدم بسبب ولذلك ولاحقًا لوصف السبب والتطور.'), L('Practise thirst, spring, sacred, Zamzam, settle, and Mecca.', 'تدرّب على نطق عطش، نبع، المبارك، زمزم، يستقروا، ومكة.')),
    },
    {
      chapterId: 13,
      objectives: [
        L('Explain how Abraham and Ishmael rebuilt the Ka’ba.', 'يشرح كيف أعاد إبراهيم وإسماعيل بناء الكعبة.'),
        L('Identify the final message of Oneness carried through Abraham’s descendants.', 'يحدد رسالة التوحيد النهائية التي حملها نسل إبراهيم.'),
      ],
      evidencePoints: [
        { id: 'abraham-b1-c13-build', focus: 'character-action', claim: L('Allah commanded Abraham to build the Ka’ba, and Ishmael agreed to help him.', 'أمر الله إبراهيم ببناء الكعبة ووافق إسماعيل على مساعدته.'), evidence: L('Allah commanded Abraham (pbuh) to build the House of Allah, the Ka’ba', 'أَمَرَ اللهُ إبراهيمَ عليه السلام أن يَبْنِيَ بيت الله، الكعبة') },
        { id: 'abraham-b1-c13-foundations', focus: 'sequence', claim: L('Father and son found the foundations of the old building and built on them.', 'عثر الأب والابن على أساسات البناء القديم وبدآ البناء فوقها.'), evidence: L('Father and son found the foundations of the old building and began to construct the new building on it', 'فعَثَر الأب والابن على أساسات البناء القديم، وبدآ في تَشْيِيد البناء الجديد فوقها') },
        { id: 'abraham-b1-c13-oneness', focus: 'theme', claim: L('The story ends with the message that Allah is One and has no partner, rival, or helper.', 'تنتهي القصة برسالة أن الله واحد لا شريك له ولا ند ولا معين.'), evidence: L('There is no god but Allah. He has no partner, rival, or helper', 'لا إله إلا الله. ليس له شريك، ولا نِدّ، ولا مُعِين') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'abraham-b1-c13-quick', learningPointId: 'abraham-b1-c13-build', eligibleStages: ['quick'], exercise: fill(L('Complete Abraham’s task at the end of the story.', 'أكمل مهمة إبراهيم في نهاية القصة.'), L('Allah commanded Abraham to build the [blank].', 'أمر الله إبراهيم أن يبني [blank].'), L('Ka’ba', 'الكعبة'), L('The chapter opens with Allah commanding Abraham to build the Ka’ba.', 'يفتتح الفصل بأمر الله إبراهيم ببناء الكعبة.')) },
        { id: 'abraham-b1-c13-final-foundations', learningPointId: 'abraham-b1-c13-foundations', eligibleStages: ['final'], exercise: mc(L('What did Abraham and Ishmael find before constructing the new building?', 'ماذا وجد إبراهيم وإسماعيل قبل تشييد البناء الجديد؟'), { en: ['The foundations of the old building', 'A palace belonging to Nimrod', 'A group of Babylonian idols'], ar: ['أساسات البناء القديم', 'قصرًا لنمرود', 'مجموعة من أصنام بابل'] }, 0, L('The chapter says father and son found the old foundations and built on them.', 'يقول الفصل إن الأب والابن عثرا على الأساسات القديمة وبنيا فوقها.')) },
        { id: 'abraham-b1-c13-final-oneness', learningPointId: 'abraham-b1-c13-oneness', eligibleStages: ['final'], exercise: tf(L('The final message says Allah has partners and helpers.', 'تقول الرسالة النهائية إن لله شركاء ومعينين.'), false, L('The chapter states the opposite: Allah has no partner, rival, or helper.', 'يذكر الفصل العكس: ليس لله شريك ولا ند ولا معين.')) },
      ],
      ...G(L('the Ka’ba, legacy, and the Oneness of Allah', 'الكعبة والإرث ووحدانية الله'), L('How did Abraham and Ishmael begin rebuilding the Ka’ba?', 'كيف بدأ إبراهيم وإسماعيل إعادة بناء الكعبة؟'), L('How does the final paragraph connect Abraham’s family with the continuing message of Oneness?', 'كيف تربط الفقرة الأخيرة أسرة إبراهيم باستمرار رسالة التوحيد؟'), L('Use past-tense sequence language and present-tense statements for continuing beliefs.', 'استخدم الماضي لتسلسل الأحداث والحاضر لعرض المعتقدات المستمرة.'), L('Practise foundations, Hajj, Oneness, Ka’ba, Ishmael, and Arabian Peninsula.', 'تدرّب على نطق أساسات، الحج، وحدانية، الكعبة، إسماعيل، وشبه الجزيرة العربية.')),
    },
  ],
});
