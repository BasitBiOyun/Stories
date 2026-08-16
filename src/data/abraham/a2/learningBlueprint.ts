import { defineLearningBlueprint, type BlueprintVocabularyTarget } from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../a2BlueprintAuthoring';
import { abrahamA2HighlightTargets } from './goldFinal';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (abrahamA2HighlightTargets[chapterId] ?? []).map(target => ({
    id: `abraham-a2-ch${chapterId}-${target.id}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

export const abrahamA2LearningBlueprint = defineLearningBlueprint({
  id: 'abraham-a2',
  version: '1.0.0',
  storyId: 'abraham',
  level: 'A2',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Identify where Abraham grew up and what people in his town worshipped.', 'يحدد المكان الذي نشأ فيه إبراهيم وما الذي كان أهل بلدته يعبدونه.'),
        L('Explain why Abraham knew the stone objects could not be gods.', 'يشرح لماذا عرف إبراهيم أن الأشياء الحجرية لا يمكن أن تكون آلهة.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c1-babylon', focus: 'direct', claim: L('Abraham was born in Babylon in Mesopotamia.', 'ولد إبراهيم في مملكة بابل في بلاد ما بين النهرين.'), evidence: L('a boy was born in the kingdom of Babylon in Mesopotamia', 'وُلِدَ صَبِيٌّ فِي مَمْلَكَةِ بَابِلَ فِي بِلَادِ مَا بَيْنَ النَّهْرَيْنِ') },
        { id: 'abraham-a2-c1-worship', focus: 'direct', claim: L('The people bowed to the stars, moon, sun, and stone objects.', 'كان الناس يسجدون للنجوم والقمر والشمس وأشياء من الحجر.'), evidence: L('They bowed to the stars, the moon, the sun, and stone objects', 'كَانُوا يَسْجُدُونَ لِلنُّجُومِ، وَالْقَمَرِ، وَالشَّمْسِ، وَأَشْيَاءَ مِنَ الْحَجَرِ') },
        { id: 'abraham-a2-c1-powerless', focus: 'comparison', claim: L('Abraham saw that the stone objects could not eat, drink, talk, move, hear, or understand.', 'رأى إبراهيم أن الأصنام الحجرية لا تأكل ولا تشرب ولا تتكلم ولا تتحرك ولا تسمع ولا تفهم.'), evidence: L('did not eat, drink, or talk', 'لَا تَأْكُلُ وَلَا تَشْرَبُ وَلَا تَتَكَلَّمُ') },
        { id: 'abraham-a2-c1-messenger', focus: 'sequence', claim: L('When Abraham grew up, Allah made him His great Messenger.', 'لما كبر إبراهيم جعله الله رسولًا عظيمًا.'), evidence: L('Allah made him His great Messenger', 'جَعَلَهُ اللهُ رَسُولًا عَظِيمًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'abraham-a2-c1-quick', learningPointId: 'abraham-a2-c1-powerless', eligibleStages: ['quick'], exercise: matching(L('Match the stone objects with what Abraham noticed about them.', 'صل الأشياء الحجرية بما لاحظه إبراهيم عنها.'), { en: [['Stone objects', 'could not eat or drink'], ['People', 'made wishes to the objects']], ar: [['الأصنام الحجرية', 'لا تأكل ولا تشرب'], ['الناس', 'طلبوا منها أمنياتهم']] }, L('Abraham saw that the stone objects could not eat, drink, or talk.', 'رأى إبراهيم أن الأصنام الحجرية لا تأكل ولا تشرب ولا تتكلم.')) },
        { id: 'abraham-a2-c1-knowledge', learningPointId: 'abraham-a2-c1-babylon', eligibleStages: ['knowledge'], exercise: mc(L('Where was Abraham born according to the chapter?', 'أين ولد إبراهيم بحسب الفصل؟'), { en: ['Babylon in Mesopotamia', 'Egypt beside the Nile', 'Mecca beside the Ka’ba'], ar: ['بابل في بلاد ما بين النهرين', 'مصر بجوار النيل', 'مكة بجوار الكعبة'] }, 0, L('The story begins with Abraham’s birth in Babylon in Mesopotamia.', 'تبدأ القصة بولادة إبراهيم في بابل في بلاد ما بين النهرين.')) },
        { id: 'abraham-a2-c1-final', learningPointId: 'abraham-a2-c1-worship', eligibleStages: ['final'], exercise: mc(L('Which things did the people bow to in Abraham’s town?', 'لأي أشياء كان أهل بلدة إبراهيم يسجدون؟'), { en: ['Stars, moon, sun, and stone objects', 'Only books and houses', 'Rivers and boats only'], ar: ['النجوم والقمر والشمس وأشياء من الحجر', 'الكتب والبيوت فقط', 'الأنهار والقوارب فقط'] }, 0, L('The chapter lists the stars, moon, sun, and stone objects.', 'يذكر الفصل النجوم والقمر والشمس وأشياء من الحجر.')) },
      ],
      ...guideBundle({
        focus: L('Babylon, false worship, and Abraham’s observations about stone objects', 'بابل والعبادة الخاطئة وملاحظات إبراهيم عن الأشياء الحجرية'),
        primaryQuestion: L('What could the stone objects not do?', 'ما الأشياء التي لم تستطع الأصنام الحجرية فعلها؟'),
        secondQuestion: L('What did the people worship instead of Allah?', 'ماذا كان الناس يعبدون بدلًا من الله؟'),
        grammar: L('Use could not to describe inability: They could not hear or talk.', 'استخدم أسلوب النفي مع الاستطاعة: لم تكن تستطيع السمع أو الكلام.'),
        pronunciation: L('Practise Babylon, Mesopotamia, Messenger, worship, and stone.', 'تدرّب على نطق بَابِلَ، النَّهْرَيْنِ، رَسُولًا، يَعْبُدُونَهُ، والحَجَرِ.'),
        fast: L('Write three short facts Abraham noticed about the idols.', 'اكتب ثلاث معلومات قصيرة لاحظها إبراهيم عن الأصنام.'),
        support: L('Use: “The people worshipped ___.” and “The stones could not ___.”', 'استخدم: «كان الناس يعبدون ___.» و«لم تستطع الحجارة أن ___.»'),
      }),
    },
    {
      chapterId: 2,
      objectives: [
        L('Describe Abraham’s father’s work and the way people treated idols.', 'يصف عمل والد إبراهيم وطريقة معاملة الناس للأصنام.'),
        L('Recall why Abraham laughed at the explanation about Mardukh.', 'يتذكر لماذا ضحك إبراهيم من تفسير والده عن مردوخ.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c2-maker', focus: 'direct', claim: L('Abraham’s father was an idol maker.', 'كان أبو إبراهيم يصنع الأصنام.'), evidence: L('Abraham’s father was an idol maker', 'كَانَ أَبُو إِبْرَاهِيمَ يَصْنَعُ الْأَصْنَامَ') },
        { id: 'abraham-a2-c2-help', focus: 'character-action', claim: L('People asked the idols for help and gave them presents.', 'كان الناس يطلبون من الأصنام المساعدة ويقدمون لها الهدايا.'), evidence: L('We ask them for help and give them presents', 'نَطْلُبُ مِنْهَا الْمُسَاعَدَةَ، وَنُقَدِّمُ لَهَا الْهَدَايَا') },
        { id: 'abraham-a2-c2-toys', focus: 'character-action', claim: L('Abraham played with the idols as toys.', 'كان إبراهيم يلعب بالأصنام كما يلعب بالألعاب.'), evidence: L('Abraham played with these idols as toys', 'إِبْرَاهِيمَ كَانَ يَلْعَبُ بِهَذِهِ الْأَصْنَامِ كَمَا يَلْعَبُ بِالْأَلْعَابِ') },
        { id: 'abraham-a2-c2-ears', focus: 'cause-result', claim: L('His father said Mardukh had big ears because he was very smart.', 'قال والده إن لمردوخ أذنين كبيرتين لأنه ذكي جدًا.'), evidence: L('He has big ears because he is very smart', 'لَهُ أُذُنَانِ كَبِيرَتَانِ لِأَنَّهُ ذَكِيٌّ جِدًّا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'abraham-a2-c2-quick', learningPointId: 'abraham-a2-c2-ears', eligibleStages: ['quick'], exercise: mc(L('Why did Abraham laugh at his father’s explanation about Mardukh?', 'لماذا ضحك إبراهيم من تفسير والده عن مردوخ؟'), { en: ['His father said the big ears meant Mardukh was smart', 'His father said Mardukh could fly', 'His father said Mardukh was made of gold'], ar: ['قال والده إن أذنيه الكبيرتين تعنيان أنه ذكي', 'قال والده إن مردوخ يستطيع الطيران', 'قال والده إن مردوخ مصنوع من الذهب'] }, 0, L('His father connected Mardukh’s large ears with being very smart, which Abraham found ridiculous.', 'ربط والده بين أذني مردوخ الكبيرتين وكونه ذكيًا، فوجد إبراهيم ذلك سخيفًا.')) },
        { id: 'abraham-a2-c2-review', learningPointId: 'abraham-a2-c2-maker', eligibleStages: ['review'], exercise: tf(L('Abraham’s father made idols from stone.', 'كان والد إبراهيم يصنع الأصنام من الحجر.'), true, L('The chapter says Abraham watched his father making idols from stone.', 'يذكر الفصل أن إبراهيم شاهد والده يصنع الأصنام من الحجر.')) },
        { id: 'abraham-a2-c2-final', learningPointId: 'abraham-a2-c2-help', eligibleStages: ['final'], exercise: matching(L('Match the people’s actions with the idols.', 'صل أفعال الناس بما كانوا يفعلونه مع الأصنام.'), { en: [['Ask', 'for help'], ['Give', 'presents']], ar: [['يطلبون', 'المساعدة'], ['يقدمون', 'الهدايا']] }, L('Abraham’s father said people asked the idols for help and gave them presents.', 'قال والد إبراهيم إن الناس يطلبون من الأصنام المساعدة ويقدمون لها الهدايا.')) },
      ],
      ...guideBundle({
        focus: L('Abraham’s father, idol making, and Abraham’s questions about Mardukh', 'والد إبراهيم وصناعة الأصنام وأسئلة إبراهيم عن مردوخ'),
        primaryQuestion: L('What did Abraham’s father make?', 'ماذا كان والد إبراهيم يصنع؟'),
        secondQuestion: L('Why did the explanation about Mardukh sound ridiculous to Abraham?', 'لماذا بدا تفسير مردوخ سخيفًا لإبراهيم؟'),
        grammar: L('Practise used to / past habits through simple past examples: Abraham watched, played, and asked.', 'تدرّب على أفعال الماضي التي تصف العادات: شاهد، لعب، وسأل.'),
        pronunciation: L('Practise idol, respect, ridiculous, presents, and Mardukh.', 'تدرّب على نطق الْأَصْنَامَ، الِاحْتِرَامَ، سَخِيفًا، الْهَدَايَا، ومَرْدُوخُ.'),
        fast: L('Write two questions Abraham could ask about powerless idols.', 'اكتب سؤالين يمكن أن يسألهما إبراهيم عن الأصنام العاجزة.'),
        support: L('Use: “His father made ___.” and “People asked the idols for ___.”', 'استخدم: «كان والده يصنع ___.» و«كان الناس يطلبون من الأصنام ___.»'),
      }),
    },
    {
      chapterId: 3,
      objectives: [
        L('Follow Abraham’s search for the one true Creator.', 'يتتبع بحث إبراهيم عن الخالق الحق الواحد.'),
        L('Explain what Abraham learned when the star and moon disappeared.', 'يشرح ما الذي فهمه إبراهيم عندما غاب الكوكب والقمر.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c3-search', focus: 'motivation', claim: L('Abraham was searching for one true Creator.', 'كان إبراهيم يبحث عن الخالق الحق الواحد.'), evidence: L('in search of one true Creator', 'يَبْحَثُ عَنِ الْخَالِقِ الْحَقِّ الْوَاحِدِ') },
        { id: 'abraham-a2-c3-star', focus: 'cause-result', claim: L('When the bright star disappeared, Abraham would not show respect to it.', 'لما غاب الكوكب المضيء لم يقبله إبراهيم ربًا.'), evidence: L('when it disappeared, he said, “I will not show respect to it', 'وَلَكِنْ لَمَّا غَابَ، قَالَ: «لَا أُحِبُّ الْآفِلِينَ') },
        { id: 'abraham-a2-c3-moon', focus: 'cause-result', claim: L('When the moon went away, Abraham understood it could not be Allah.', 'لما غاب القمر فهم إبراهيم أنه لا يمكن أن يكون الله.'), evidence: L('when the moon went away', 'لَمَّا غَابَ الْقَمَرُ') },
        { id: 'abraham-a2-c3-cave', focus: 'sequence', claim: L('Abraham found a cave on a nearby mountain and thought about Allah there.', 'وجد إبراهيم كهفًا في جبل قريب وجلس فيه يفكر في الله.'), evidence: L('he found a cave and sat there', 'وَجَدَ كَهْفًا، فَجَلَسَ فِيهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'abraham-a2-c3-quick', learningPointId: 'abraham-a2-c3-star', eligibleStages: ['quick'], exercise: tap(L('What happened that made Abraham reject the bright star as his Lord?', 'ما الذي حدث وجعل إبراهيم لا يقبل الكوكب المضيء ربًا؟'), L('The star disappeared.', 'غاب الكوكب.'), L('When the star disappeared, Abraham said he would not show respect to it.', 'لما غاب الكوكب قال إبراهيم إنه لا يحب الآفلين.')) },
        { id: 'abraham-a2-c3-knowledge', learningPointId: 'abraham-a2-c3-moon', eligibleStages: ['knowledge'], exercise: tf(L('Abraham understood the moon could not be Allah because it went away.', 'فهم إبراهيم أن القمر لا يمكن أن يكون الله لأنه غاب.'), true, L('The chapter says the moon went away and Abraham understood it could not be Allah.', 'يقول الفصل إن القمر غاب ففهم إبراهيم أنه لا يمكن أن يكون الله.')) },
      ],
      ...guideBundle({
        focus: L('Abraham’s search and what he noticed about the star and moon', 'بحث إبراهيم وما لاحظه عن الكوكب والقمر'),
        primaryQuestion: L('Why did Abraham reject the star?', 'لماذا لم يقبل إبراهيم الكوكب ربًا؟'),
        secondQuestion: L('What did the disappearing moon teach him?', 'ماذا علّمه غياب القمر؟'),
        grammar: L('Use when + past simple for events: When the moon went away, he understood.', 'استخدم «لما/عندما» مع الماضي لربط الحدث بالنتيجة.'),
        pronunciation: L('Practise Creator, search, disappeared, countryside, star, and moon.', 'تدرّب على نطق الْخَالِقِ، يَبْحَثُ، غَابَ، الرِّيفِ، كَوْكَبًا، والْقَمَرَ.'),
        fast: L('Make a two-step comparison of the star and moon.', 'اكتب مقارنة من خطوتين بين الكوكب والقمر.'),
        support: L('Use: “The star ___.” and “The moon ___.”', 'استخدم: «الكوكب ___.» و«القمر ___.»'),
      }),
    },
    {
      chapterId: 4,
      objectives: [
        L('Explain Abraham’s conclusion about the sun and the Creator.', 'يشرح استنتاج إبراهيم عن الشمس والخالق.'),
        L('Follow Abraham’s prayer, his mission, and his father’s response.', 'يتتبع دعاء إبراهيم ورسالته ورد والده.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c4-creator', focus: 'cause-result', claim: L('When the sun set, Abraham understood Allah is not a creation but the Creator of everything.', 'لما غابت الشمس فهم إبراهيم أن الله ليس مخلوقًا بل خالق كل شيء.'), evidence: L('Allah is the Creator of everything', 'اَللهُ خَالِقُ كُلِّ شَيْءٍ') },
        { id: 'abraham-a2-c4-prayer', focus: 'character-action', claim: L('Abraham put his forehead to the ground and asked Allah to guide him.', 'وضع إبراهيم جبهته على الأرض ودعا الله أن يهديه.'), evidence: L('Abraham put his forehead to the ground and spoke to Allah', 'وَضَعَ إِبْرَاهِيمُ جَبْهَتَهُ عَلَى الْأَرْضِ، وَدَعَا اللهَ') },
        { id: 'abraham-a2-c4-messenger', focus: 'turning-point', claim: L('Allah answered Abraham’s prayer and made him His Messenger.', 'استجاب الله دعاء إبراهيم وجعله رسولًا.'), evidence: L('Allah answered his prayer and made him His Messenger', 'فَاسْتَجَابَ اللهُ دُعَاءَهُ، وَجَعَلَهُ رَسُولًا لَهُ') },
        { id: 'abraham-a2-c4-father', focus: 'character-action', claim: L('Abraham’s father became angry when Abraham told him to stop worshipping stones.', 'غضب والد إبراهيم عندما طلب منه إبراهيم أن يتوقف عن عبادة الحجارة.'), evidence: L('His father got angry', 'فَغَضِبَ أَبُوهُ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'abraham-a2-c4-quick', learningPointId: 'abraham-a2-c4-creator', eligibleStages: ['quick'], exercise: fill(L('Complete Abraham’s conclusion after the sun set.', 'أكمل استنتاج إبراهيم بعد غياب الشمس.'), L('Allah is the [blank] of everything.', 'اَللهُ [blank] كُلِّ شَيْءٍ.'), L('Creator', 'خَالِقُ'), L('Abraham understood that Allah is the Creator of everything.', 'فهم إبراهيم أن الله خالق كل شيء.')) },
        { id: 'abraham-a2-c4-review', learningPointId: 'abraham-a2-c4-prayer', eligibleStages: ['review'], exercise: tf(L('Abraham put his forehead on the ground and asked Allah for the right way.', 'وضع إبراهيم جبهته على الأرض ودعا الله أن يهديه إلى الطريق الصحيح.'), true, L('The chapter describes Abraham praying for guidance.', 'يصف الفصل دعاء إبراهيم طلبًا للهداية.')) },
        { id: 'abraham-a2-c4-final', learningPointId: 'abraham-a2-c4-father', eligibleStages: ['final'], exercise: mc(L('How did Abraham’s father react when Abraham told him to stop worshipping stones?', 'كيف رد والد إبراهيم عندما طلب منه التوقف عن عبادة الحجارة؟'), { en: ['He became angry', 'He immediately agreed', 'He left Babylon happily'], ar: ['غضب', 'وافق فورًا', 'غادر بابل سعيدًا'] }, 0, L('His father became angry and asked whether Abraham was against his gods.', 'غضب والده وسأله إن كان ضد آلهته.')) },
      ],
      ...guideBundle({
        focus: L('the setting sun, Abraham’s prayer, and the beginning of his mission', 'غروب الشمس ودعاء إبراهيم وبداية رسالته'),
        primaryQuestion: L('What did Abraham understand when the sun set?', 'ماذا فهم إبراهيم عندما غابت الشمس؟'),
        secondQuestion: L('What happened after Abraham prayed for guidance?', 'ماذا حدث بعد أن دعا إبراهيم بالهداية؟'),
        grammar: L('Practise if for a simple condition in Abraham’s prayer.', 'لاحظ أسلوب الشرط في دعاء إبراهيم: إن لم يهدني الله...'),
        pronunciation: L('Practise creation, Creator, prayer, forehead, shining, and angry.', 'تدرّب على نطق مَخْلُوقًا، خَالِقُ، دُعَاءَهُ، جَبْهَتَهُ، سَاطِعَةً، وغَضِبَ.'),
        fast: L('Write a three-event sequence: sun → prayer → mission.', 'اكتب تسلسلًا من ثلاثة أحداث: الشمس ← الدعاء ← الرسالة.'),
        support: L('Use: “The sun set, so Abraham understood ___.”', 'استخدم: «غابت الشمس، ففهم إبراهيم أن ___.»'),
      }),
    },
    {
      chapterId: 5,
      objectives: [
        L('Identify Abraham’s central message to his people.', 'يحدد رسالة إبراهيم الأساسية إلى قومه.'),
        L('Compare what Allah does with what the idols cannot do.', 'يقارن بين ما يفعله الله وما لا تستطيع الأصنام فعله.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c5-message', focus: 'theme', claim: L('Abraham told the people that Allah is the one and only God.', 'قال إبراهيم لقومه إن الله هو الإله الواحد.'), evidence: L('Allah is the one and only God', 'اللهَ هُوَ الْإِلَهُ الْوَاحِدُ') },
        { id: 'abraham-a2-c5-fathers', focus: 'cause-result', claim: L('The people said they worshipped the idols because their fathers did the same.', 'قال الناس إنهم يعبدون الأصنام لأن آباءهم كانوا يفعلون ذلك.'), evidence: L('We saw our fathers worship them; because of this, we do the same', 'رَأَيْنَا آبَاءَنَا يَعْبُدُونَهَا؛ وَلِهَذَا السَّبَبِ، نَحْنُ نَفْعَلُ مِثْلَهُمْ') },
        { id: 'abraham-a2-c5-provision', focus: 'comparison', claim: L('Abraham said Allah gives him food and drink and heals him when he is sick.', 'قال إبراهيم إن الله يعطيه الطعام والشراب ويشفيه إذا مرض.'), evidence: L('He heals me when I am sick', 'وَإِذَا مَرِضْتُ، فَهُوَ يَشْفِينِي') },
        { id: 'abraham-a2-c5-listen', focus: 'character-action', claim: L('The people did not listen to Abraham.', 'لم يستمع الناس إلى إبراهيم.'), evidence: L('people didn’t listen to him', 'النَّاسَ لَمْ يَسْتَمِعُوا إِلَيْهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'abraham-a2-c5-quick', learningPointId: 'abraham-a2-c5-message', eligibleStages: ['quick'], exercise: tf(L('Abraham told the people that Allah is the one and only God.', 'قال إبراهيم للناس إن الله هو الإله الواحد.'), true, L('This is stated directly in Abraham’s call to his people.', 'هذا مذكور مباشرة في دعوة إبراهيم لقومه.')) },
        { id: 'abraham-a2-c5-knowledge', learningPointId: 'abraham-a2-c5-fathers', eligibleStages: ['knowledge'], exercise: mc(L('Why did the people say they continued worshipping the idols?', 'لماذا قال الناس إنهم استمروا في عبادة الأصنام؟'), { en: ['Because their fathers had worshipped them', 'Because Abraham told them to', 'Because the idols gave them food'], ar: ['لأن آباءهم كانوا يعبدونها', 'لأن إبراهيم أمرهم بذلك', 'لأن الأصنام أعطتهم الطعام'] }, 0, L('They said they were doing what they had seen their fathers do.', 'قالوا إنهم يفعلون ما رأوا آباءهم يفعلونه.')) },
        { id: 'abraham-a2-c5-final', learningPointId: 'abraham-a2-c5-provision', eligibleStages: ['final'], exercise: matching(L('Match Abraham’s statements about Allah with the actions in the chapter.', 'صل ما قاله إبراهيم عن الله بالأفعال المذكورة في الفصل.'), { en: [['Allah', 'gives food and drink'], ['Allah when Abraham is sick', 'heals him']], ar: [['الله', 'يعطي الطعام والشراب'], ['الله عند مرض إبراهيم', 'يشفيه']] }, L('Abraham said Allah gives him food and drink and heals him when he is sick.', 'قال إبراهيم إن الله يعطيه الطعام والشراب ويشفيه إذا مرض.')) },
      ],
      ...guideBundle({
        focus: L('Abraham’s message, the people’s inherited habit, and Allah’s real power', 'رسالة إبراهيم وعادة الناس الموروثة وقدرة الله الحقيقية'),
        primaryQuestion: L('Why did the people say they worshipped the idols?', 'لماذا قال الناس إنهم يعبدون الأصنام؟'),
        secondQuestion: L('What did Abraham say Allah does for him?', 'ماذا قال إبراهيم إن الله يفعله له؟'),
        grammar: L('Use because to give a reason: They worshipped because their fathers did.', 'استخدم «لأن» لذكر السبب: عبدوها لأن آباءهم عبدوها.'),
        pronunciation: L('Practise believe, heals, power, worship, food, and drink.', 'تدرّب على نطق أُؤْمِنُ، يَشْفِينِي، قُوَّةً، يَعْبُدُونَهَا، الطَّعَامَ، والشَّرَابَ.'),
        fast: L('Write two contrasts between Allah and the powerless idols.', 'اكتب مقارنتين بين قدرة الله وعجز الأصنام.'),
        support: L('Use: “Allah gives ___.” / “The idols cannot ___.”', 'استخدم: «الله يعطي ___.» / «الأصنام لا تستطيع ___.»'),
      }),
    },
    {
      chapterId: 6,
      objectives: [
        L('Follow Abraham’s secret plan during the festival.', 'يتتبع خطة إبراهيم السرية أثناء العيد.'),
        L('Recall what Abraham did with the largest idol and the axe.', 'يتذكر ما فعله إبراهيم بالصنم الأكبر والفأس.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c6-plan', focus: 'motivation', claim: L('Abraham made a secret plan to break the stone gods.', 'وضع إبراهيم خطة سرية لتحطيم الآلهة الحجرية.'), evidence: L('He made a plan to break all their stone gods', 'فَوَضَعَ خُطَّةً لِيُحَطِّمَ كُلَّ آلِهَتِهِمُ الْحَجَرِيَّةِ') },
        { id: 'abraham-a2-c6-festival', focus: 'sequence', claim: L('During the festival, all the people went outside the town.', 'في وقت العيد خرج جميع الناس إلى خارج المدينة.'), evidence: L('All the people went outside of town', 'فَخَرَجَ جَمِيعُ النَّاسِ إِلَى خَارِجِ الْمَدِينَةِ') },
        { id: 'abraham-a2-c6-food', focus: 'character-action', claim: L('Abraham jokingly asked the idols why they did not eat the food.', 'سأل إبراهيم الأصنام مازحًا لماذا لا تأكل الطعام.'), evidence: L('Why don’t you eat the food?', 'لِمَاذَا لَا تَأْكُلُونَ الطَّعَامَ؟') },
        { id: 'abraham-a2-c6-largest', focus: 'sequence', claim: L('Abraham left the largest idol unbroken and placed the axe around its neck.', 'ترك إبراهيم الصنم الأكبر سليمًا ووضع الفأس على عنقه.'), evidence: L('He left the largest one unbroken', 'وَتَرَكَ أَكْبَرَهَا سَلِيمًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'abraham-a2-c6-quick', learningPointId: 'abraham-a2-c6-largest', eligibleStages: ['quick'], exercise: mc(L('What did Abraham do with the largest idol after breaking the others?', 'ماذا فعل إبراهيم بالصنم الأكبر بعد تحطيم بقية الأصنام؟'), { en: ['He left it unbroken and put the axe around its neck', 'He carried it home', 'He threw it into a river'], ar: ['تركه سليمًا ووضع الفأس على عنقه', 'حمله إلى بيته', 'ألقاه في نهر'] }, 0, L('He left the largest idol unbroken and placed the axe around its neck.', 'ترك الصنم الأكبر سليمًا ووضع الفأس على عنقه.')) },
        { id: 'abraham-a2-c6-review', learningPointId: 'abraham-a2-c6-festival', eligibleStages: ['review'], exercise: tf(L('The town became empty because the people went out for a festival.', 'صارت المدينة خالية لأن الناس خرجوا إلى العيد.'), true, L('The chapter says everyone went outside the town for the festival.', 'يذكر الفصل أن الجميع خرجوا من المدينة من أجل العيد.')) },
      ],
      ...guideBundle({
        focus: L('the festival, Abraham’s plan, the axe, and the largest idol', 'العيد وخطة إبراهيم والفأس والصنم الأكبر'),
        primaryQuestion: L('Why was the town empty?', 'لماذا كانت المدينة خالية؟'),
        secondQuestion: L('What did Abraham leave beside the largest idol?', 'ماذا ترك إبراهيم عند الصنم الأكبر؟'),
        grammar: L('Practise sequence markers: when, then, in the end.', 'تدرّب على أدوات ترتيب الأحداث: لما، ثم، وفي النهاية.'),
        pronunciation: L('Practise festival, axe, unbroken, jokingly, and hurried.', 'تدرّب على نطق عِيدٌ، فَأْسًا، سَلِيمًا، مَازِحًا، ومُسْرِعًا.'),
        fast: L('Retell the plan in four ordered steps.', 'أعد سرد الخطة في أربع خطوات مرتبة.'),
        support: L('Use: “The people left for ___.” and “Abraham left the largest idol ___.”', 'استخدم: «خرج الناس إلى ___.» و«ترك إبراهيم الصنم الأكبر ___.»'),
      }),
    },
    {
      chapterId: 7,
      objectives: [
        L('Follow how the people identified and questioned Abraham.', 'يتتبع كيف عرف الناس إبراهيم وسألوه.'),
        L('Explain Abraham’s argument about idols that cannot speak, see, or protect themselves.', 'يشرح حجة إبراهيم عن الأصنام التي لا تتكلم ولا ترى ولا تحمي نفسها.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c7-shocked', focus: 'sequence', claim: L('The people were shocked when they found their stone gods in pieces.', 'صدم الناس عندما وجدوا آلهتهم الحجرية قطعًا متكسرة.'), evidence: L('all their stone gods were in pieces', 'كُلَّ آلِهَتِهِمُ الْحَجَرِيَّةِ كَانَتْ قِطَعًا مُتَكَسِّرَةً') },
        { id: 'abraham-a2-c7-biggest', focus: 'character-action', claim: L('Abraham told the people to ask the biggest idol if it could speak.', 'طلب إبراهيم من الناس أن يسألوا الصنم الأكبر إن كان يستطيع الكلام.'), evidence: L('Ask it, if it can speak!', 'فَاسْأَلُوهُ، إِنْ كَانَ يَسْتَطِيعُ أَنْ يَتَكَلَّمَ') },
        { id: 'abraham-a2-c7-admit', focus: 'turning-point', claim: L('The people said that the objects could not speak.', 'قال الناس إن هذه الأشياء لا تتكلم.'), evidence: L('these objects don’t speak', 'هَذِهِ الْأَشْيَاءَ لَا تَتَكَلَّمُ') },
        { id: 'abraham-a2-c7-protect', focus: 'comparison', claim: L('Abraham pointed out that the idols could not speak, see, or protect themselves.', 'بين إبراهيم أن الأصنام لا تتكلم ولا ترى ولا تستطيع حماية نفسها.'), evidence: L('they can’t speak or see and even protect themselves', 'لَا تَتَكَلَّمُ، وَلَا تَرَى، وَلَا تَسْتَطِيعُ حَتَّى أَنْ تَحْمِيَ نَفْسَهَا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'abraham-a2-c7-quick', learningPointId: 'abraham-a2-c7-shocked', eligibleStages: ['quick'], exercise: tf(L('The people found their stone gods broken into pieces.', 'وجد الناس آلهتهم الحجرية قطعًا متكسرة.'), true, L('This is what shocked the people at the start of the chapter.', 'هذا ما صدم الناس في بداية الفصل.')) },
        { id: 'abraham-a2-c7-knowledge', learningPointId: 'abraham-a2-c7-biggest', eligibleStages: ['knowledge'], exercise: mc(L('What did Abraham tell the people to do with the biggest idol?', 'ماذا طلب إبراهيم من الناس أن يفعلوا مع الصنم الأكبر؟'), { en: ['Ask it if it could speak', 'Carry it to Babylon', 'Give it more food'], ar: ['يسألوه إن كان يستطيع الكلام', 'يحملوه إلى بابل', 'يقدموا له مزيدًا من الطعام'] }, 0, L('Abraham told them to ask the biggest idol if it could speak.', 'طلب منهم إبراهيم أن يسألوا الصنم الأكبر إن كان يستطيع الكلام.')) },
        { id: 'abraham-a2-c7-final', learningPointId: 'abraham-a2-c7-protect', eligibleStages: ['final'], exercise: fill(L('Complete Abraham’s point about the idols.', 'أكمل حجة إبراهيم عن الأصنام.'), L('They could not even [blank] themselves.', 'لم تستطع حتى أن [blank] نفسها.'), L('protect', 'تَحْمِيَ'), L('Abraham said the idols could not even protect themselves.', 'قال إبراهيم إن الأصنام لا تستطيع حتى أن تحمي نفسها.')) },
      ],
      ...guideBundle({
        focus: L('the broken idols, the questioning, and Abraham’s argument', 'الأصنام المكسورة والاستجواب وحجة إبراهيم'),
        primaryQuestion: L('What did Abraham tell the people to ask the largest idol?', 'ماذا طلب إبراهيم من الناس أن يسألوا الصنم الأكبر؟'),
        secondQuestion: L('Which abilities did Abraham say the idols did not have?', 'ما القدرات التي قال إبراهيم إن الأصنام لا تملكها؟'),
        grammar: L('Practise can/cannot for ability: It cannot speak; they cannot protect themselves.', 'تدرّب على التعبير عن الاستطاعة ونفيها: لا تتكلم ولا تستطيع أن تحمي نفسها.'),
        pronunciation: L('Practise shocked, displeased, protect, pieces, and speak.', 'تدرّب على نطق فَصُدِمُوا، فَلَمْ يَرْضَ، تَحْمِيَ، قِطَعًا، وتَتَكَلَّمُ.'),
        fast: L('Write Abraham’s argument as two short question-and-answer lines.', 'اكتب حجة إبراهيم في سطرين قصيرين من سؤال وجواب.'),
        support: L('Use: “The idols cannot ___.”', 'استخدم: «الأصنام لا تستطيع أن ___.»'),
      }),
    },
    {
      chapterId: 8,
      objectives: [
        L('Explain why the people decided to punish Abraham.', 'يشرح لماذا قرر الناس معاقبة إبراهيم.'),
        L('Identify Abraham’s trust in Allah and how the people prepared to throw him into the fire.', 'يحدد توكل إبراهيم على الله وكيف استعد الناس لإلقائه في النار.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c8-arrogant', focus: 'cause-result', claim: L('The people knew Abraham was right but were too arrogant to accept their mistake.', 'علم الناس أن إبراهيم كان على حق لكنهم تكبروا عن قبول خطئهم.'), evidence: L('they knew Abraham was right. But they were too arrogant to accept their mistake', 'عَلِمُوا أَنَّ إِبْرَاهِيمَ كَانَ عَلَى حَقٍّ. وَلَكِنَّهُمْ كَانُوا مُتَكَبِّرِينَ جِدًّا') },
        { id: 'abraham-a2-c8-fire', focus: 'sequence', claim: L('The people collected firewood for days and made a huge dangerous fire.', 'جمع الناس الحطب أيامًا وصنعوا نارًا كبيرة خطرة.'), evidence: L('collected firewood for the fire for days', 'جَمَعَ أَهْلُ الْمَمْلَكَةِ الْحَطَبَ لِلنَّارِ أَيَّامًا') },
        { id: 'abraham-a2-c8-trust', focus: 'motivation', claim: L('Abraham stayed calm because he trusted Allah.', 'بقي إبراهيم هادئًا لأنه كان يثق بالله.'), evidence: L('Abraham (pbuh) stayed calm, because he trusted Allah', 'إِبْرَاهِيمَ عَلَيْهِ السَّلَامُ بَقِيَ هَادِئًا، لِأَنَّهُ كَانَ يَثِقُ بِاللهِ') },
        { id: 'abraham-a2-c8-catapult', focus: 'character-action', claim: L('The people used a catapult to throw Abraham into the fire.', 'استخدم الناس المنجنيق لإلقاء إبراهيم في النار.'), evidence: L('used this machine to throw Abraham (pbuh) into the fire', 'اسْتَعْمَلَ النَّاسُ هَذِهِ الْآلَةَ لِيُلْقُوا إِبْرَاهِيمَ عَلَيْهِ السَّلَامُ فِي النَّارِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'abraham-a2-c8-quick', learningPointId: 'abraham-a2-c8-trust', eligibleStages: ['quick'], exercise: tap(L('Why did Abraham remain calm while the fire was being prepared?', 'لماذا بقي إبراهيم هادئًا بينما كان الناس يجهزون النار؟'), L('Because he trusted Allah.', 'لأنه كان يثق بالله.'), L('The chapter directly says Abraham stayed calm because he trusted Allah.', 'يذكر الفصل مباشرة أن إبراهيم بقي هادئًا لأنه كان يثق بالله.')) },
        { id: 'abraham-a2-c8-review', learningPointId: 'abraham-a2-c8-catapult', eligibleStages: ['review'], exercise: mc(L('What machine did the people use to throw Abraham toward the fire?', 'ما الآلة التي استخدمها الناس لإلقاء إبراهيم في النار؟'), { en: ['A catapult', 'A boat', 'A cart'], ar: ['منجنيق', 'قارب', 'عربة'] }, 0, L('The chapter explains that a catapult was used to throw Abraham into the fire.', 'يشرح الفصل أن المنجنيق استُخدم لإلقاء إبراهيم في النار.')) },
        { id: 'abraham-a2-c8-final', learningPointId: 'abraham-a2-c8-arrogant', eligibleStages: ['final'], exercise: mc(L('Why did the people refuse to accept their mistake even though they knew Abraham was right?', 'لماذا رفض الناس قبول خطئهم رغم أنهم عرفوا أن إبراهيم كان على حق؟'), { en: ['They were too arrogant', 'They did not understand his name', 'They had already left Babylon'], ar: ['لأنهم كانوا متكبرين', 'لأنهم لم يفهموا اسمه', 'لأنهم غادروا بابل بالفعل'] }, 0, L('The chapter says they were too arrogant to accept their mistake.', 'يقول الفصل إنهم كانوا متكبرين فلم يقبلوا خطأهم.')) },
      ],
      ...guideBundle({
        focus: L('the people’s arrogance, the huge fire, Abraham’s trust, and the catapult', 'تكبر الناس والنار الكبيرة وتوكل إبراهيم والمنجنيق'),
        primaryQuestion: L('Why did Abraham stay calm?', 'لماذا بقي إبراهيم هادئًا؟'),
        secondQuestion: L('How did the people prepare to throw him into the fire?', 'كيف استعد الناس لإلقائه في النار؟'),
        grammar: L('Use because to connect feeling and reason: He stayed calm because he trusted Allah.', 'استخدم «لأن» لربط الحالة بالسبب: بقي هادئًا لأنه كان يثق بالله.'),
        pronunciation: L('Practise arrogant, trusted, dangerous, catapult, flames, and firewood.', 'تدرّب على نطق مُتَكَبِّرِينَ، يَثِقُ، الْخَطَرِ، مَنْجَنِيقٍ، اللَّهَبِ، والحَطَبَ.'),
        fast: L('Write a three-step sequence from the firewood to the catapult.', 'اكتب تسلسلًا من ثلاث خطوات من جمع الحطب إلى المنجنيق.'),
        support: L('Use: “Abraham was calm because ___.”', 'استخدم: «بقي إبراهيم هادئًا لأن ___.»'),
      }),
    },
    {
      chapterId: 9,
      objectives: [
        L('Describe how Allah protected Abraham in the fire.', 'يصف كيف حفظ الله إبراهيم في النار.'),
        L('Explain how the people reacted to the miracle.', 'يشرح كيف كان رد الناس على المعجزة.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c9-gabriel', focus: 'character-action', claim: L('Angel Gabriel offered help, but Abraham asked for nothing from him.', 'عرض جبريل المساعدة لكن إبراهيم قال إنه لا يريد شيئًا منه.'), evidence: L('Nothing from you!', 'لَا شَيْءَ مِنْكَ') },
        { id: 'abraham-a2-c9-cool', focus: 'turning-point', claim: L('Allah made the fire cool and safe for Abraham.', 'جعل الله النار باردة وآمنة لإبراهيم.'), evidence: L('The fire became cool and safe for him', 'فَصَارَتِ النَّارُ بَارِدَةً وَآمِنَةً لَهُ') },
        { id: 'abraham-a2-c9-ropes', focus: 'direct', claim: L('The fire burnt only the ropes on Abraham’s hands and feet.', 'لم تحرق النار إلا الحبال التي كانت على يدي إبراهيم ورجليه.'), evidence: L('It only burnt the ropes', 'لَمْ تُحْرِقْ إِلَّا الْحِبَالَ') },
        { id: 'abraham-a2-c9-unchanged', focus: 'character-action', claim: L('The people were amazed by the miracle but did not change their minds.', 'أدهشت المعجزة الناس لكنهم لم يغيروا رأيهم.'), evidence: L('they did not change their mind', 'لَمْ يُغَيِّرُوا رَأْيَهُمْ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'abraham-a2-c9-quick', learningPointId: 'abraham-a2-c9-cool', eligibleStages: ['quick'], exercise: fill(L('Complete what happened to the fire by Allah’s command.', 'أكمل ما حدث للنار بأمر الله.'), L('The fire became [blank] and safe for Abraham.', 'صارت النار [blank] وآمنة لإبراهيم.'), L('cool', 'بَارِدَةً'), L('Allah made the fire cool and safe for Abraham.', 'جعل الله النار باردة وآمنة لإبراهيم.')) },
        { id: 'abraham-a2-c9-knowledge', learningPointId: 'abraham-a2-c9-ropes', eligibleStages: ['knowledge'], exercise: mc(L('What did the fire burn while Abraham remained safe?', 'ماذا أحرقت النار بينما بقي إبراهيم آمنًا؟'), { en: ['Only the ropes on his hands and feet', 'His clothes and hair', 'The whole garden'], ar: ['الحبال التي على يديه ورجليه فقط', 'ملابسه وشعره', 'الحديقة كلها'] }, 0, L('The story says the fire burnt only the ropes.', 'تقول القصة إن النار لم تحرق إلا الحبال.')) },
      ],
      ...guideBundle({
        focus: L('Gabriel’s offer, the cool fire, the ropes, and the people’s reaction', 'عرض جبريل والنار الباردة والحبال ورد الناس'),
        primaryQuestion: L('What did Allah make the fire become?', 'ماذا جعل الله النار؟'),
        secondQuestion: L('Did the miracle change the people’s minds?', 'هل غيرت المعجزة رأي الناس؟'),
        grammar: L('Practise become/became to describe change: The fire became cool.', 'تدرّب على وصف التغير بالفعل «صار»: صارت النار باردة.'),
        pronunciation: L('Practise miracle, amazed, harmed, cool, ropes, and safe.', 'تدرّب على نطق الْمُعْجِزَةُ، دُهِشَ، أَذًى، بَارِدَةً، الْحِبَالَ، وآمِنَةً.'),
        fast: L('Write two facts showing Abraham was protected.', 'اكتب حقيقتين تبينان كيف حُفظ إبراهيم.'),
        support: L('Use: “The fire became ___.” / “It burnt only ___.”', 'استخدم: «صارت النار ___.» / «لم تحرق إلا ___.»'),
      }),
    },
    {
      chapterId: 10,
      objectives: [
        L('Follow Nimrod’s claim about life and death.', 'يتتبع ادعاء نمرود بشأن الحياة والموت.'),
        L('Explain Abraham’s challenge about the sun and Nimrod’s response.', 'يشرح تحدي إبراهيم بشأن الشمس ورد نمرود.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c10-meet', focus: 'motivation', claim: L('Nimrod wanted to meet Abraham after hearing about the miracle.', 'أراد نمرود مقابلة إبراهيم بعدما سمع عن المعجزة.'), evidence: L('He heard about the miracle', 'وَسَمِعَ عَنِ الْمُعْجِزَةِ') },
        { id: 'abraham-a2-c10-slaves', focus: 'sequence', claim: L('Nimrod had one slave killed and let the second slave go.', 'أمر نمرود بقتل أحد العبدين وأطلق سراح الآخر.'), evidence: L('Kill one of the slaves', 'اُقْتُلُوا أَحَدَ الْعَبْدَيْنِ') },
        { id: 'abraham-a2-c10-west', focus: 'comparison', claim: L('Abraham challenged Nimrod to make the sun rise from the west.', 'تحدى إبراهيم نمرود أن يأتي بالشمس من المغرب.'), evidence: L('Can you make the sun rise from the west?', 'فَهَلْ تَسْتَطِيعُ أَنْ تَأْتِيَ بِهَا مِنَ الْمَغْرِبِ') },
        { id: 'abraham-a2-c10-couldnt', focus: 'cause-result', claim: L('Nimrod could not meet the challenge, and this made him angrier.', 'لم يستطع نمرود تنفيذ التحدي وزاد ذلك غضبه.'), evidence: L('Nimrod couldn’t do this', 'لَمْ يَسْتَطِعْ نُمْرُودُ أَنْ يَفْعَلَ ذَلِكَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'abraham-a2-c10-quick', learningPointId: 'abraham-a2-c10-west', eligibleStages: ['quick'], exercise: mc(L('What did Abraham challenge Nimrod to do with the sun?', 'بماذا تحدى إبراهيم نمرود بشأن الشمس؟'), { en: ['Make it rise from the west', 'Stop it at noon', 'Turn it into the moon'], ar: ['أن يأتي بها من المغرب', 'أن يوقفها وقت الظهر', 'أن يحولها إلى القمر'] }, 0, L('Abraham asked Nimrod whether he could make the sun rise from the west.', 'سأل إبراهيم نمرود هل يستطيع أن يأتي بالشمس من المغرب.')) },
        { id: 'abraham-a2-c10-review', learningPointId: 'abraham-a2-c10-slaves', eligibleStages: ['review'], exercise: tf(L('Nimrod had one slave killed and allowed the other to go free.', 'أمر نمرود بقتل أحد العبدين وأطلق سراح الآخر.'), true, L('He used the two slaves in his false claim about giving life and death.', 'استخدم العبدين في ادعائه الباطل عن الإحياء والإماتة.')) },
        { id: 'abraham-a2-c10-final', learningPointId: 'abraham-a2-c10-meet', eligibleStages: ['final'], exercise: mc(L('Why did Nimrod want to meet Abraham?', 'لماذا أراد نمرود أن يلتقي إبراهيم؟'), { en: ['He had heard about the miracle', 'He wanted Abraham to build the Ka’ba', 'He needed help finding Zamzam'], ar: ['لأنه سمع عن المعجزة', 'لأنه أراد من إبراهيم بناء الكعبة', 'لأنه احتاج مساعدة في العثور على زمزم'] }, 0, L('Nimrod heard about the miracle and thought Abraham was not ordinary.', 'سمع نمرود عن المعجزة وظن أن إبراهيم ليس شخصًا عاديًا.')) },
      ],
      ...guideBundle({
        focus: L('Nimrod’s claim, the two slaves, and Abraham’s sun challenge', 'ادعاء نمرود والعبدان وتحدي الشمس'),
        primaryQuestion: L('How did Nimrod try to show that he controlled life and death?', 'كيف حاول نمرود أن يظهر أنه يتحكم في الحياة والموت؟'),
        secondQuestion: L('Which challenge could Nimrod not answer?', 'ما التحدي الذي لم يستطع نمرود تنفيذه؟'),
        grammar: L('Practise can/could for ability and inability.', 'تدرّب على التعبير عن الاستطاعة وعدمها: هل تستطيع؟ لم يستطع.'),
        pronunciation: L('Practise Nimrod, slaves, ordinary, guards, east, and west.', 'تدرّب على نطق نُمْرُودُ، عَبْدَيْنِ، عَادِيًّا، حُرَّاسَهُ، الْمَشْرِقِ، والْمَغْرِبِ.'),
        fast: L('Write the discussion as two short claims and one challenge.', 'اكتب الحوار في ادعاءين قصيرين وتحدٍ واحد.'),
        support: L('Use: “Nimrod said ___.” / “Abraham asked ___.”', 'استخدم: «قال نمرود ___.» / «سأل إبراهيم ___.»'),
      }),
    },
    {
      chapterId: 11,
      objectives: [
        L('Identify the few people who believed with Abraham in Babylon and why he left.', 'يحدد القلة الذين آمنوا مع إبراهيم في بابل ولماذا غادرها.'),
        L('Follow Abraham’s journey and arrival near Safa and Marwah.', 'يتتبع رحلة إبراهيم ووصوله قرب الصفا والمروة.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c11-believers', focus: 'direct', claim: L('Sarah and Lot were the two people named as believers with Abraham in Babylon.', 'كانت سارة ولوط هما الشخصين المذكورين ممن آمنوا مع إبراهيم في بابل.'), evidence: L('The woman’s name was Sarah (Sâre), and the man’s name was Lot (Lût)', 'كَانَ اسْمُ الْمَرْأَةِ سَارَةَ، وَكَانَ اسْمُ الرَّجُلِ لُوطًا') },
        { id: 'abraham-a2-c11-leave', focus: 'motivation', claim: L('Abraham decided to leave Babylon because no one was going to listen and he wanted to tell people in other lands about Allah’s message.', 'قرر إبراهيم مغادرة بابل لأن الناس لم يسمعوا له ولكي يبلغ رسالة الله في أراض أخرى.'), evidence: L('he decided to leave Babylon and travel to other lands to tell people about Allah’s message', 'قَرَّرَ أَنْ يُغَادِرَ بَابِلَ، وَأَنْ يُسَافِرَ إِلَى أَرَاضٍ أُخْرَى، لِيُخْبِرَ النَّاسَ بِرِسَالَةِ اللهِ') },
        { id: 'abraham-a2-c11-route', focus: 'sequence', claim: L('Abraham travelled from Babylon to Syria and Palestine on camels.', 'سافر إبراهيم من بابل إلى بلاد الشام وفلسطين على ظهور الجمال.'), evidence: L('He traveled from Babylon to Syria and Palestine on camels', 'سَافَرَ مِنْ بَابِلَ إِلَى بِلَادِ الشَّامِ وَفِلَسْطِينَ عَلَى ظُهُورِ الْجِمَالِ') },
        { id: 'abraham-a2-c11-valley', focus: 'sequence', claim: L('Abraham, Hagar, and Ishmael arrived at a quiet valley near Safa and Marwah.', 'وصل إبراهيم وهاجر وإسماعيل إلى واد هادئ قرب الصفا والمروة.'), evidence: L('a quiet valley near two small hills, Safa and Marwah', 'وَادٍ هَادِئٍ، قَرِيبٍ مِنْ تَلَّيْنِ صَغِيرَيْنِ، هُمَا الصَّفَا وَالْمَرْوَةُ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'abraham-a2-c11-quick', learningPointId: 'abraham-a2-c11-believers', eligibleStages: ['quick'], exercise: tf(L('Sarah and Lot were named among the few who believed with Abraham in Babylon.', 'ذُكرت سارة ولوط ضمن القلة الذين آمنوا مع إبراهيم في بابل.'), true, L('The chapter names Sarah and Lot as the woman and man who believed with Abraham.', 'يسمي الفصل سارة ولوط بوصفهما المرأة والرجل اللذين آمنا مع إبراهيم.')) },
        { id: 'abraham-a2-c11-knowledge', learningPointId: 'abraham-a2-c11-leave', eligibleStages: ['knowledge'], exercise: mc(L('Why did Abraham decide to leave Babylon?', 'لماذا قرر إبراهيم مغادرة بابل؟'), { en: ['To carry Allah’s message to other lands after people would not listen', 'To become king of Babylon', 'To search for the broken idols'], ar: ['ليبلغ رسالة الله في أراض أخرى بعد أن لم يسمع الناس له', 'ليصبح ملك بابل', 'ليبحث عن الأصنام المكسورة'] }, 0, L('He understood people would not listen, so he left to tell others about Allah’s message.', 'فهم أن الناس لن يسمعوا له فغادر ليبلغ الآخرين رسالة الله.')) },
        { id: 'abraham-a2-c11-final', learningPointId: 'abraham-a2-c11-valley', eligibleStages: ['final'], exercise: fill(L('Complete where the family finally arrived.', 'أكمل المكان الذي وصلت إليه الأسرة أخيرًا.'), L('They arrived at a quiet valley near Safa and [blank].', 'وصلوا إلى واد هادئ قرب الصفا و[blank].'), L('Marwah', 'الْمَرْوَةِ'), L('The chapter names the two nearby hills as Safa and Marwah.', 'يسمي الفصل التلين القريبين الصفا والمروة.')) },
      ],
      ...guideBundle({
        focus: L('the few believers, leaving Babylon, the journey, and the valley', 'القلة المؤمنة ومغادرة بابل والرحلة والوادي'),
        primaryQuestion: L('Why did Abraham leave Babylon?', 'لماذا غادر إبراهيم بابل؟'),
        secondQuestion: L('Where did the family finally arrive?', 'إلى أين وصلت الأسرة أخيرًا؟'),
        grammar: L('Practise decided to + verb for plans and purpose.', 'تدرّب على «قرر أن + فعل» للتعبير عن القرار.'),
        pronunciation: L('Practise journey, valley, tiring, Syria, Palestine, Safa, and Marwah.', 'تدرّب على نطق رِحْلَتَهُ، وَادٍ، مُتْعِبَةً، الشَّامِ، فِلَسْطِينَ، الصَّفَا، والْمَرْوَةُ.'),
        fast: L('Draw a simple route using only the places named in the chapter.', 'ارسم مسارًا بسيطًا مستخدمًا الأماكن المذكورة في الفصل فقط.'),
        support: L('Use: “He left Babylon because ___.”', 'استخدم: «غادر بابل لأن ___.»'),
      }),
    },
    {
      chapterId: 12,
      objectives: [
        L('Describe Hagar’s trust in Allah in the empty valley.', 'يصف توكل هاجر على الله في الوادي الخالي.'),
        L('Recall Abraham’s prayer and Hagar’s search for food and water.', 'يتذكر دعاء إبراهيم وبحث هاجر عن الطعام والماء.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c12-trust', focus: 'theme', claim: L('Hagar trusted that Allah would protect her and Ishmael.', 'وثقت هاجر بأن الله سيحميها وإسماعيل.'), evidence: L('He will surely protect us', 'سَيَحْمِينَا بِالتَّأْكِيدِ') },
        { id: 'abraham-a2-c12-empty', focus: 'direct', claim: L('The valley had no fruit, trees, food, or water.', 'كان الوادي بلا ثمار ولا أشجار ولا طعام ولا ماء.'), evidence: L('no fruit, no trees, no food, and no water', 'بِلَا ثِمَارٍ، وَلَا أَشْجَارٍ، وَلَا طَعَامٍ، وَلَا مَاءٍ') },
        { id: 'abraham-a2-c12-prayer', focus: 'character-action', claim: L('Abraham asked Allah to protect his family and give them blessings.', 'دعا إبراهيم الله أن يحمي أهله ويعطيهم البركات.'), evidence: L('asked Allah to give them blessings', 'دَعَا اللهَ أَنْ يُعْطِيَهُمُ الْبَرَكَاتِ') },
        { id: 'abraham-a2-c12-search', focus: 'sequence', claim: L('Hagar ran from hill to hill looking for food and water, but found no water or helper.', 'ركضت هاجر من تل إلى تل تبحث عن الطعام والماء ولم تجد ماء ولا من يساعدها.'), evidence: L('She ran from hill to hill', 'رَكَضَتْ مِنْ تَلٍّ إِلَى تَلٍّ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'abraham-a2-c12-quick', learningPointId: 'abraham-a2-c12-empty', eligibleStages: ['quick'], exercise: matching(L('Match the valley with what the chapter says it did not have.', 'صل الوادي بما يذكر الفصل أنه لم يكن موجودًا فيه.'), { en: [['Valley', 'no food or water'], ['Hagar', 'looked for food and water']], ar: [['الوادي', 'لا طعام ولا ماء'], ['هاجر', 'بحثت عن الطعام والماء']] }, L('The valley had no fruit, trees, food, or water.', 'كان الوادي بلا ثمار ولا أشجار ولا طعام ولا ماء.')) },
        { id: 'abraham-a2-c12-review', learningPointId: 'abraham-a2-c12-prayer', eligibleStages: ['review'], exercise: tf(L('Abraham asked Allah to protect his family and give them blessings.', 'دعا إبراهيم الله أن يحمي أهله ويعطيهم البركات.'), true, L('Both requests are stated in the chapter.', 'الطلبان مذكوران في الفصل.')) },
      ],
      ...guideBundle({
        focus: L('Hagar’s trust, the empty valley, Abraham’s prayer, and the search for water', 'توكل هاجر والوادي الخالي ودعاء إبراهيم والبحث عن الماء'),
        primaryQuestion: L('What was missing from the valley?', 'ما الأشياء التي لم تكن موجودة في الوادي؟'),
        secondQuestion: L('What did Abraham ask Allah to give his family?', 'ماذا طلب إبراهيم من الله لأهله؟'),
        grammar: L('Practise there was / there was no for describing a place.', 'تدرّب على وصف المكان باستخدام «كان هناك / لم يكن هناك».'),
        pronunciation: L('Practise blessings, fearlessly, useless, valley, food, and water.', 'تدرّب على نطق الْبَرَكَاتِ، بِغَيْرِ خَوْفٍ، بِلَا فَائِدَةٍ، الْوَادِي، الطَّعَامِ، والْمَاءِ.'),
        fast: L('Write four short phrases describing the valley and Hagar’s actions.', 'اكتب أربع عبارات قصيرة تصف الوادي وأفعال هاجر.'),
        support: L('Use: “There was no ___.” / “Hagar looked for ___.”', 'استخدم: «لم يكن هناك ___.» / «بحثت هاجر عن ___.»'),
      }),
    },
    {
      chapterId: 13,
      objectives: [
        L('Follow how Zamzam water appeared and what Hagar did next.', 'يتتبع كيف ظهر ماء زمزم وما فعلته هاجر بعد ذلك.'),
        L('Explain how the water led to more people living there and the building of Mecca.', 'يشرح كيف أدى الماء إلى مجيء مزيد من الناس وبناء مكة.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c13-water', focus: 'turning-point', claim: L('Water suddenly came out of the ground under Ishmael’s feet.', 'خرج الماء فجأة من الأرض تحت قدمي إسماعيل.'), evidence: L('water came out of the ground under Ishmael’s feet', 'خَرَجَ الْمَاءُ مِنَ الْأَرْضِ تَحْتَ قَدَمَيْ إِسْمَاعِيلَ') },
        { id: 'abraham-a2-c13-drink', focus: 'sequence', claim: L('Hagar drank the water and then gave some to Ishmael.', 'شربت هاجر من الماء ثم أعطت بعضه لإسماعيل.'), evidence: L('She drank the water. Then she took some water in her hands and gave it to Ishmael', 'فَشَرِبَتْ مِنَ الْمَاءِ. ثُمَّ أَخَذَتْ بَعْضَ الْمَاءِ فِي يَدَيْهَا، وَأَعْطَتْهُ لِإِسْمَاعِيلَ') },
        { id: 'abraham-a2-c13-people', focus: 'cause-result', claim: L('More people came to the area because of the Zamzam water.', 'جاء مزيد من الناس إلى المكان بسبب ماء زمزم.'), evidence: L('More people came there because of this water', 'جَاءَ نَاسٌ أَكْثَرُ إِلَى هُنَاكَ بِسَبَبِ هَذَا الْمَاءِ') },
        { id: 'abraham-a2-c13-mecca', focus: 'cause-result', claim: L('The people built a city called Mecca.', 'بنى الناس مدينة تسمى مكة.'), evidence: L('They built a city called Mecca', 'فَبَنَوْا مَدِينَةً تُسَمَّى مَكَّةَ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'abraham-a2-c13-quick', learningPointId: 'abraham-a2-c13-water', eligibleStages: ['quick'], exercise: tf(L('Zamzam water appeared from the ground under Ishmael’s feet, not because Hagar dug a well.', 'ظهر ماء زمزم من الأرض تحت قدمي إسماعيل، ولم يظهر لأن هاجر حفرت بئرًا.'), true, L('The chapter says the water suddenly came from the ground under Ishmael’s feet.', 'يقول الفصل إن الماء خرج فجأة من الأرض تحت قدمي إسماعيل.')) },
        { id: 'abraham-a2-c13-knowledge', learningPointId: 'abraham-a2-c13-drink', eligibleStages: ['knowledge'], exercise: mc(L('What did Hagar do after she saw the water?', 'ماذا فعلت هاجر بعد أن رأت الماء؟'), { en: ['She drank and gave some to Ishmael', 'She left it and returned to Babylon', 'She covered it with stones'], ar: ['شربت وأعطت بعض الماء لإسماعيل', 'تركته وعادت إلى بابل', 'غطته بالحجارة'] }, 0, L('She drank the water and then gave some to Ishmael.', 'شربت من الماء ثم أعطت بعضه لإسماعيل.')) },
        { id: 'abraham-a2-c13-review', learningPointId: 'abraham-a2-c13-people', eligibleStages: ['review'], exercise: mc(L('Why did more people begin to come to the area?', 'لماذا بدأ مزيد من الناس يأتون إلى المكان؟'), { en: ['Because of the water', 'Because Nimrod built a palace', 'Because the idols were moved there'], ar: ['بسبب الماء', 'لأن نمرود بنى قصرًا', 'لأن الأصنام نُقلت إلى هناك'] }, 0, L('The chapter says more people came because of the water.', 'يقول الفصل إن مزيدًا من الناس جاءوا بسبب الماء.')) },
        { id: 'abraham-a2-c13-final', learningPointId: 'abraham-a2-c13-mecca', eligibleStages: ['final'], exercise: mc(L('What city did the people build near the Zamzam water?', 'ما المدينة التي بناها الناس قرب ماء زمزم؟'), { en: ['Mecca', 'Babylon', 'Jerusalem'], ar: ['مكة', 'بابل', 'القدس'] }, 0, L('The chapter says they built a city called Mecca.', 'يقول الفصل إنهم بنوا مدينة تسمى مكة.')) },
      ],
      ...guideBundle({
        focus: L('the appearance of Zamzam, Hagar’s response, and the growth of Mecca', 'ظهور زمزم ورد هاجر ونشأة مكة'),
        primaryQuestion: L('Where did the water appear?', 'أين ظهر الماء؟'),
        secondQuestion: L('Why did more people come to live there?', 'لماذا جاء مزيد من الناس للعيش هناك؟'),
        grammar: L('Practise suddenly / then / later for sequencing.', 'تدرّب على كلمات ترتيب الأحداث: فجأة، ثم، وفيما بعد.'),
        pronunciation: L('Practise Zamzam, desert, gift, ground, famous, Ishmael, and Mecca.', 'تدرّب على نطق زَمْزَمَ، الصَّحْرَاءِ، هَدِيَّةً، الْأَرْضِ، مَشْهُورًا، إِسْمَاعِيلَ، ومَكَّةَ.'),
        fast: L('Make a four-step chain from Ishmael crying to Mecca being built.', 'أنشئ سلسلة من أربع خطوات من بكاء إسماعيل إلى بناء مكة.'),
        support: L('Use: “Water came from ___.” / “People built ___.”', 'استخدم: «خرج الماء من ___.» / «بنى الناس ___.»'),
      }),
    },
    {
      chapterId: 14,
      objectives: [
        L('Identify Abraham and Ishmael’s work on the Ka’ba and its importance.', 'يحدد عمل إبراهيم وإسماعيل في بناء الكعبة وأهميتها.'),
        L('Recall the message about Allah at the end of the story.', 'يتذكر الرسالة عن الله في نهاية القصة.'),
      ],
      evidencePoints: [
        { id: 'abraham-a2-c14-ishmael', focus: 'character-action', claim: L('Ishmael agreed to help Abraham build the Ka’ba.', 'وافق إسماعيل على مساعدة إبراهيم في بناء الكعبة.'), evidence: L('I will help you for sure', 'سَأُسَاعِدُكَ بِالتَّأْكِيدِ') },
        { id: 'abraham-a2-c14-holy', focus: 'direct', claim: L('The Ka’ba was the first holy place on Earth.', 'كانت الكعبة أول مكان مقدس على الأرض.'), evidence: L('the first holy place on Earth', 'أَوَّلَ مَكَانٍ مُقَدَّسٍ عَلَى الْأَرْضِ') },
        { id: 'abraham-a2-c14-hajj', focus: 'theme', claim: L('Hajj makes people remember Abraham and his family’s story.', 'يذكر الحج الناس بإبراهيم وقصة أسرته.'), evidence: L("Hajj makes us remember Abraham (pbuh) and his family's story", 'الْحَجُّ يُذَكِّرُنَا بِإِبْرَاهِيمَ عَلَيْهِ السَّلَامُ وَقِصَّةِ أُسْرَتِهِ') },
        { id: 'abraham-a2-c14-message', focus: 'theme', claim: L('The final message says there is no god but Allah and He has no partner.', 'تقول الرسالة الأخيرة لا إله إلا الله وليس له شريك.'), evidence: L('There is no god but Allah. He has no partner', 'لَا إِلَهَ إِلَّا اللهُ. لَيْسَ لَهُ شَرِيكٌ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(14),
      assessmentItems: [
        { id: 'abraham-a2-c14-quick', learningPointId: 'abraham-a2-c14-ishmael', eligibleStages: ['quick'], exercise: mc(L('Who agreed to help Abraham with the Ka’ba?', 'من وافق على مساعدة إبراهيم في بناء الكعبة؟'), { en: ['Ishmael', 'Nimrod', 'Mardukh'], ar: ['إسماعيل', 'نمرود', 'مردوخ'] }, 0, L('Ishmael told Abraham, “I will help you for sure.”', 'قال إسماعيل لإبراهيم إنه سيساعده بالتأكيد.')) },
        { id: 'abraham-a2-c14-knowledge', learningPointId: 'abraham-a2-c14-holy', eligibleStages: ['knowledge'], exercise: fill(L('Complete the description of the Ka’ba.', 'أكمل وصف الكعبة.'), L('It was the first [blank] place on Earth.', 'كانت أول مكان [blank] على الأرض.'), L('holy', 'مُقَدَّسٍ'), L('The chapter calls the Ka’ba the first holy place on Earth.', 'يصف الفصل الكعبة بأنها أول مكان مقدس على الأرض.')) },
        { id: 'abraham-a2-c14-review', learningPointId: 'abraham-a2-c14-hajj', eligibleStages: ['review'], exercise: tf(L('The chapter says Hajj helps people remember Abraham and his family’s story.', 'يقول الفصل إن الحج يذكر الناس بإبراهيم وقصة أسرته.'), true, L('This connection is stated directly after the Ka’ba is described.', 'هذه الصلة مذكورة مباشرة بعد الحديث عن الكعبة.')) },
        { id: 'abraham-a2-c14-final', learningPointId: 'abraham-a2-c14-message', eligibleStages: ['final'], exercise: fill(L('Complete the final message about Allah.', 'أكمل الرسالة الأخيرة عن الله.'), L('There is no god but Allah. He has no [blank].', 'لَا إِلَهَ إِلَّا اللهُ. لَيْسَ لَهُ [blank].'), L('partner', 'شَرِيكٌ'), L('The final message says Allah has no partner.', 'تقول الرسالة الأخيرة إن الله ليس له شريك.')) },
      ],
      ...guideBundle({
        focus: L('building the Ka’ba, Hajj, and Abraham’s final message', 'بناء الكعبة والحج ورسالة إبراهيم الأخيرة'),
        primaryQuestion: L('Who helped Abraham build the Ka’ba?', 'من ساعد إبراهيم في بناء الكعبة؟'),
        secondQuestion: L('What message about Allah closes the story?', 'ما الرسالة عن الله التي تختم القصة؟'),
        grammar: L('Practise will for a promise: I will help you.', 'تدرّب على التعبير عن الوعد بالمستقبل: سأساعدك.'),
        pronunciation: L('Practise Ka’ba, mission, holy, Hajj, unique, partner, Muslims, and Ishmael.', 'تدرّب على نطق الْكَعْبَةَ، مُهِمَّتُهُ، مُقَدَّسٍ، الْحَجِّ، وَاحِدٌ، شَرِيكٌ، الْمُسْلِمِينَ، وإِسْمَاعِيلُ.'),
        fast: L('Write three short facts linking the Ka’ba, Hajj, and the final message.', 'اكتب ثلاث معلومات قصيرة تربط الكعبة والحج والرسالة الأخيرة.'),
        support: L('Use: “Ishmael helped ___.” / “Allah has no ___.”', 'استخدم: «ساعد إسماعيل ___.» / «ليس لله ___.»'),
      }),
    },
  ],
  wholeBook: {
    knowledgeCheck: {
      title: { en: 'Knowledge Check: Abraham (pbuh)', ar: 'اختبار المعرفة: إبراهيم عليه السلام' },
      content: {
        en: 'Check eight different ideas distributed across the whole story. These questions do not repeat the Quick, Review, or Final learning points.',
        ar: 'تحقق من ثماني أفكار مختلفة موزعة على القصة كلها. لا تكرر هذه الأسئلة نقاط التحدي السريع أو المراجعة أو التحدي النهائي.',
      },
    },
    vocabularyChallenge: {
      title: { en: 'Vocabulary Challenge', ar: 'تحدي المفردات' },
      content: { en: 'Match six reviewed Word Notes from the story with their meanings.', ar: 'صل ست كلمات مراجعة من ملاحظات المفردات بمعانيها.' },
    },
    review: {
      title: { en: 'Review Challenge', ar: 'تحدي المراجعة' },
      content: { en: 'Review eight different story ideas without repeating the Quick or Knowledge questions.', ar: 'راجع ثماني أفكار مختلفة من القصة دون تكرار أسئلة التحدي السريع أو اختبار المعرفة.' },
    },
    finalChallenge: {
      title: { en: 'Final Challenge: Abraham (pbuh)', ar: 'التحدي النهائي: إبراهيم عليه السلام' },
      content: {
        en: 'Complete ten scored activities from the beginning, middle, and end of the story. The Final uses multiple-choice, matching, and fill-blanks without Tap-Reveal.',
        ar: 'أكمل عشرة أنشطة مقيمة من بداية القصة ووسطها ونهايتها. يستخدم التحدي النهائي الاختيار من متعدد والمطابقة وإكمال الفراغات دون الكشف بالنقر.',
      },
    },
    glossary: [
      { title: { en: 'Master Glossary - Part 1', ar: 'القاموس الشامل - الجزء الأول' }, content: { en: 'Reviewed Word Notes from Chapters 1–7.', ar: 'ملاحظات المفردات المراجعة من الفصول 1–7.' } },
      { title: { en: 'Master Glossary - Part 2', ar: 'القاموس الشامل - الجزء الثاني' }, content: { en: 'Reviewed Word Notes from Chapters 8–14.', ar: 'ملاحظات المفردات المراجعة من الفصول 8–14.' } },
    ],
  },
});
