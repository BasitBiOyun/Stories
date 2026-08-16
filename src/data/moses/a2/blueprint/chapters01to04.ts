import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const mosesA2Chapters01to04: LearningBlueprintChapter[] = [
  {
    chapterId: 1,
    objectives: [
      L('Identify Pharaoh as an unfair ruler and explain why he feared the Children of Israel.', 'يحدد فرعون بوصفه حاكمًا ظالمًا ويشرح سبب خوفه من بني إسرائيل.'),
      L('Recall the belief of the Children of Israel and the work Pharaoh forced them to do.', 'يتذكر عقيدة بني إسرائيل والعمل الذي أجبرهم فرعون عليه.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c1-cruel', focus: 'direct', claim: L('Pharaoh was an unfair and cruel ruler.', 'كان فرعون حاكمًا ظالمًا وقاسيًا.'), evidence: L('an unfair and cruel ruler', 'حَاكِمًا ظَالِمًا وَقَاسِيًا') },
      { id: 'moses-a2-c1-belief', focus: 'direct', claim: L('The Children of Israel believed in one Allah.', 'كان بنو إسرائيل يؤمنون بإله واحد.'), evidence: L('They believed in one Allah', 'كَانُوا يُؤْمِنُونَ بِإِلٰهٍ وَاحِدٍ') },
      { id: 'moses-a2-c1-fear', focus: 'cause-result', claim: L('Pharaoh feared that the Children of Israel might take control of his kingdom.', 'خاف فرعون من أن يستولي بنو إسرائيل على مملكته.'), evidence: L('feared that this crowd took control of his kingdom', 'خَافَ فِرْعَوْنُ مِنْ أَنْ يَسْتَوْلُوا عَلَى مَمْلَكَتِهِ') },
      { id: 'moses-a2-c1-work', focus: 'character-action', claim: L('Pharaoh forced the Children of Israel to do dangerous work for no money.', 'أجبر فرعون بني إسرائيل على أعمال خطرة دون أجر.'), evidence: L('dangerous work for no money', 'أَعْمَالٍ خَطِرَةٍ دُونَ أَجْرٍ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(1),
    assessmentItems: [
      { id: 'moses-a2-c1-quick', learningPointId: 'moses-a2-c1-cruel', eligibleStages: ['quick'], exercise: tf(L('Pharaoh was a fair and gentle ruler of Egypt.', 'كان فرعون حاكمًا عادلًا ولطيفًا في مصر.'), false, L('The chapter calls Pharaoh unfair and cruel.', 'يصف الفصل فرعون بأنه ظالم وقاسٍ.')) },
      { id: 'moses-a2-c1-knowledge', learningPointId: 'moses-a2-c1-belief', eligibleStages: ['knowledge'], exercise: mc(L('Which belief separated the Children of Israel from Pharaoh?', 'ما العقيدة التي ميزت بني إسرائيل عن فرعون؟'), { en: ['They believed in one Allah', 'They believed Pharaoh was a god', 'They worshipped the king’s soldiers'], ar: ['كانوا يؤمنون بإله واحد', 'كانوا يعتقدون أن فرعون إله', 'كانوا يعبدون جنود الملك'] }, 0, L('They believed in one Allah and did not think Pharaoh was a god.', 'كانوا يؤمنون بإله واحد ولم يعتقدوا أن فرعون إله.')) },
      { id: 'moses-a2-c1-review', learningPointId: 'moses-a2-c1-fear', eligibleStages: ['review'], exercise: tf(L('Pharaoh feared that the large group might take control of his kingdom.', 'خاف فرعون من أن يستولي القوم الكثيرون على مملكته.'), true, L('Fear of losing control is given as a reason for his behavior.', 'يذكر الفصل خوفه من فقدان مملكته سببًا لسلوكه.')) },
      { id: 'moses-a2-c1-final', learningPointId: 'moses-a2-c1-work', eligibleStages: ['final'], exercise: mc(L('What kind of work did Pharaoh force the Children of Israel to do?', 'أي نوع من العمل أجبر فرعون بني إسرائيل عليه؟'), { en: ['Dangerous work for no money', 'Easy work with high pay', 'Only work inside the palace'], ar: ['أعمال خطرة دون أجر', 'أعمال سهلة بأجر كبير', 'العمل داخل القصر فقط'] }, 0, L('He forced them to do dangerous work for no money.', 'أجبرهم على القيام بأعمال خطرة دون أجر.')) },
    ],
    ...guideBundle({
      focus: L('Pharaoh’s rule, his fear, and the treatment of the Children of Israel', 'حكم فرعون وخوفه ومعاملته لبني إسرائيل'),
      primaryQuestion: L('Why was Pharaoh afraid of the Children of Israel?', 'لماذا خاف فرعون من بني إسرائيل؟'),
      secondQuestion: L('Which sentence shows that Pharaoh used his power unfairly?', 'أي جملة تبين أن فرعون استخدم سلطته بظلم؟'),
      grammar: L('Use because to give a simple reason: Pharaoh was rude because he was afraid.', 'استخدم «بسبب/لأن» لذكر السبب البسيط.'),
      pronunciation: L('Practise cruel, ruler, believe, Egypt, and Pharaoh.', 'تدرّب على نطق ظَالِمًا، حَاكِمًا، يُؤْمِنْ، مِصْرَ، وفِرْعَوْنُ.'),
      fast: L('Write three short facts about Pharaoh without repeating the Quick Challenge sentence.', 'اكتب ثلاث معلومات قصيرة عن فرعون من دون تكرار جملة التحدي السريع.'),
      support: L('Use: “Pharaoh was ___.” and “The Children of Israel believed ___.”', 'استخدم: «كان فرعون ___.» و«كان بنو إسرائيل يؤمنون بـ ___.»'),
    }),
  },
  {
    chapterId: 2,
    objectives: [
      L('Follow the dream, its interpretation, and Pharaoh’s order.', 'يتتبع الحلم وتفسيره وأمر فرعون.'),
      L('Recognize how the soldiers treated the families in the chapter.', 'يتعرف على طريقة معاملة الجنود للأسر في الفصل.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c2-fire', focus: 'direct', claim: L('Pharaoh saw a fire coming from Jerusalem in his dream.', 'رأى فرعون نارًا قادمة من القدس في حلمه.'), evidence: L('The fire came from Jerusalem', 'كانَتِ النّارُ قادِمَةً مِنَ القُدْسِ') },
      { id: 'moses-a2-c2-boy', focus: 'direct', claim: L('The helpers and magicians said a boy would be born from the Children of Israel.', 'قال المساعدون والسحرة إن صبيًا سيولد من بني إسرائيل.'), evidence: L('A boy will be born from the Children of Israel', 'سَيُولَدُ صَبِيٌّ مِنْ بَنِي إِسْرائِيلَ') },
      { id: 'moses-a2-c2-order', focus: 'sequence', claim: L('Pharaoh ordered his soldiers to kill the baby boys of the Children of Israel.', 'أمر فرعون جنوده بقتل أطفال بني إسرائيل الذكور.'), evidence: L('Kill all the baby boys of the Children of Israel', 'اُقْتُلُوا جَمِيعَ أَطْفالِ بَنِي إِسْرائِيلَ الذُّكُورِ') },
      { id: 'moses-a2-c2-heartless', focus: 'character-action', claim: L('The soldiers showed no kindness and were heartless.', 'لم يظهر الجنود رحمة وكانوا قساة.'), evidence: L('They were unkind and heartless', 'كانُوا قُسَاةً وَعَدِيمِي الرَّحْمَةِ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(2),
    assessmentItems: [
      { id: 'moses-a2-c2-quick', learningPointId: 'moses-a2-c2-fire', eligibleStages: ['quick'], exercise: mc(L('Which image appeared in Pharaoh’s dream?', 'ما الصورة التي ظهرت في حلم فرعون؟'), { en: ['A fire from Jerusalem', 'A boat on the Nile', 'A mountain covered with snow'], ar: ['نار قادمة من القدس', 'قارب في النيل', 'جبل مغطى بالثلج'] }, 0, L('He saw a fire coming from Jerusalem.', 'رأى نارًا قادمة من القدس.')) },
      { id: 'moses-a2-c2-knowledge', learningPointId: 'moses-a2-c2-boy', eligibleStages: ['knowledge'], exercise: fill(L('Complete the prediction given to Pharaoh.', 'أكمل التفسير الذي قيل لفرعون.'), L('They said a [blank] would be born from the Children of Israel.', 'قالوا: سَيُولَدُ [blank] مِنْ بَنِي إِسْرائِيلَ.'), L('boy', 'صَبِيٌّ'), L('The helpers and magicians predicted the birth of a boy.', 'تنبأ المساعدون والسحرة بولادة صبي.')) },
      { id: 'moses-a2-c2-review', learningPointId: 'moses-a2-c2-order', eligibleStages: ['review'], exercise: tf(L('Pharaoh told his soldiers to leave the baby boys alone.', 'أمر فرعون جنوده أن يتركوا الأطفال الذكور وشأنهم.'), false, L('Pharaoh gave the opposite order in the chapter.', 'أعطى فرعون الأمر المعاكس في الفصل.')) },
      { id: 'moses-a2-c2-final', learningPointId: 'moses-a2-c2-heartless', eligibleStages: ['final'], exercise: mc(L('How does the chapter describe the soldiers after the families cried?', 'كيف يصف الفصل الجنود بعد بكاء الأسر؟'), { en: ['Unkind and heartless', 'Gentle and helpful', 'Afraid and confused'], ar: ['قساة وعديمي الرحمة', 'لطفاء ومتعاونين', 'خائفين ومحتارين'] }, 0, L('The soldiers had no kindness; they were unkind and heartless.', 'لم يبدِ الجنود أي رحمة وكانوا قساة وعديمي الرحمة.')) },
    ],
    ...guideBundle({
      focus: L('the dream, its interpretation, and the cruel order that followed', 'الحلم وتفسيره والأمر القاسي الذي تبعه'),
      primaryQuestion: L('What happened first: the dream, the interpretation, or the order?', 'ما الذي حدث أولًا: الحلم أم التفسير أم الأمر؟'),
      secondQuestion: L('Which detail shows that the soldiers had no mercy?', 'أي تفصيل يبين أن الجنود لم تكن لديهم رحمة؟'),
      grammar: L('Use past simple to sequence events: saw, woke up, called, told.', 'لاحظ أفعال الماضي لترتيب الأحداث: رأى، استيقظ، استدعى، قال.'),
      pronunciation: L('Practise dream, fire, magicians, soldiers, and heartless.', 'تدرّب على نطق حُلْمًا، نارًا، السَّحَرَةَ، جُنودِهِ، وعَدِيمِي الرَّحْمَةِ.'),
      fast: L('Make a four-step event chain using only facts from Chapter 2.', 'أنشئ سلسلة من أربع خطوات مستخدمًا معلومات الفصل الثاني فقط.'),
      support: L('Use the sequence: dream → helpers → order → soldiers.', 'استخدم التسلسل: الحلم ← المساعدون ← الأمر ← الجنود.'),
    }),
  },
  {
    chapterId: 3,
    objectives: [
      L('Explain why Moses’s mother used the basket and the River Nile.', 'يشرح لماذا استخدمت أم موسى التابوت ونهر النيل.'),
      L('Recall how she responded emotionally and whom she asked to follow the basket.', 'يتذكر حالتها الشعورية ومن طلبت منه متابعة التابوت.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c3-basket', focus: 'sequence', claim: L('Allah told Moses’s mother to put her baby in a basket and take it to the River Nile.', 'أوحى الله إلى أم موسى أن تضع طفلها في تابوت وتلقيه في نهر النيل.'), evidence: L('Take the basket to the River Nile', 'فَأَلْقِي التَّابوتَ في نَهْرِ النِّيلِ') },
      { id: 'moses-a2-c3-protect', focus: 'direct', claim: L('Allah told Moses’s mother that He would protect the baby.', 'أخبر الله أم موسى أنه سيحفظ طفلها.'), evidence: L('Allah will protect him', 'إِنَّ اللهَ سَيَحْفَظُهُ') },
      { id: 'moses-a2-c3-daughter', focus: 'character-action', claim: L('Moses’s mother told her daughter to follow the basket.', 'طلبت أم موسى من ابنتها أن تتبع التابوت.'), evidence: L('told her daughter to follow the basket', 'أَخْبَرَتِ ابْنَتَها أَنْ تَتْبَعَ التَّابوتَ') },
      { id: 'moses-a2-c3-trust', focus: 'theme', claim: L('Moses’s mother trusted that Allah was kinder to baby Moses than she was.', 'عرفت أم موسى أن الله أرحم بطفلها منها.'), evidence: L('Allah was kinder to the baby Moses than her', 'عَرَفَتْ أَنَّ اللهَ أَرْحَمُ بِطِفْلِها مِنْها') },
    ],
    vocabularyTargets: vocabularyTargetsFor(3),
    assessmentItems: [
      { id: 'moses-a2-c3-quick', learningPointId: 'moses-a2-c3-basket', eligibleStages: ['quick'], exercise: tap(L('Where was Moses’s mother told to take the basket?', 'إلى أين أُمرت أم موسى أن تأخذ التابوت؟'), L('To the River Nile.', 'إلى نهر النيل.'), L('Allah told her to take the basket to the River Nile.', 'أوحى الله إليها أن تلقي التابوت في نهر النيل.')) },
      { id: 'moses-a2-c3-knowledge', learningPointId: 'moses-a2-c3-protect', eligibleStages: ['knowledge'], exercise: tf(L('Moses’s mother was told that Allah would protect her baby.', 'أُخبرت أم موسى أن الله سيحفظ طفلها.'), true, L('The promise of protection is stated directly in the chapter.', 'وعد الحفظ مذكور مباشرة في الفصل.')) },
      { id: 'moses-a2-c3-review', learningPointId: 'moses-a2-c3-daughter', eligibleStages: ['review'], exercise: mc(L('Who followed the basket after Moses’s mother became worried?', 'من الذي تابع التابوت بعدما شعرت أم موسى بالقلق؟'), { en: ['Her daughter', 'A palace servant', 'One of Pharaoh’s soldiers'], ar: ['ابنتها', 'خادم من القصر', 'أحد جنود فرعون'] }, 0, L('She told her daughter to follow the basket.', 'أخبرت ابنتها أن تتبع التابوت.')) },
      { id: 'moses-a2-c3-final', learningPointId: 'moses-a2-c3-trust', eligibleStages: ['final'], exercise: fill(L('Complete what Moses’s mother understood about Allah’s care.', 'أكمل ما عرفته أم موسى عن رحمة الله بطفلها.'), L('She knew that Allah was [blank] to baby Moses than she was.', 'عَرَفَتْ أَنَّ اللهَ [blank] بِطِفْلِها مِنْها.'), L('kinder', 'أَرْحَمُ'), L('She trusted that Allah was kinder to baby Moses than she was.', 'عرفت أن الله أرحم بطفلها منها.')) },
    ],
    ...guideBundle({
      focus: L('fear, trust, the basket, and the River Nile', 'الخوف والثقة والتابوت ونهر النيل'),
      primaryQuestion: L('What instructions did Moses’s mother receive?', 'ما التعليمات التي تلقتها أم موسى؟'),
      secondQuestion: L('What detail shows that she trusted Allah despite being worried?', 'ما التفصيل الذي يبين ثقتها بالله رغم قلقها؟'),
      grammar: L('Practise imperatives from the message: take, put, protect/follow.', 'لاحظ أسلوب الأمر في النص: خذي، ضعي، ألقي.'),
      pronunciation: L('Practise basket, protect, worried, carried, and River Nile.', 'تدرّب على نطق تَابُوتًا، سَيَحْفَظُهُ، قَلِقَةً، فَحَمَلَهُ، ونَهْرِ النِّيلِ.'),
      fast: L('Retell the basket sequence in four short sentences.', 'أعد سرد تسلسل التابوت في أربع جمل قصيرة.'),
      support: L('Use: “She put Moses in ___.” and “Allah would ___ him.”', 'استخدم: «وضعت موسى في ___.» و«الله سيـ ___ـه.»'),
    }),
  },
  {
    chapterId: 4,
    objectives: [
      L('Describe Queen Asiye’s reaction to baby Moses.', 'يصف موقف آسية من الطفل موسى.'),
      L('Follow how Moses’s sister helped find a nurse for the baby.', 'يتتبع كيف ساعدت أخت موسى في إيجاد مرضعة للطفل.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c4-palace', focus: 'sequence', claim: L('The basket reached the waterside near Pharaoh’s palace.', 'وصل التابوت إلى الشاطئ قريبًا من قصر فرعون.'), evidence: L('near the king’s palace', 'قَريبًا مِنْ قَصْرِ فِرْعَوْنَ') },
      { id: 'moses-a2-c4-asiye', focus: 'character-action', claim: L('Asiye believed in Allah and was good and kind-hearted.', 'كانت آسية تؤمن بالله وكانت طيبة القلب ورحيمة.'), evidence: L('She believed in Allah. She was good and kind-hearted', 'كانَتْ تُؤْمِنُ بِاللهِ، وَكانَتْ طَيِّبَةَ القَلْبِ وَرَحِيمَةً') },
      { id: 'moses-a2-c4-care', focus: 'character-action', claim: L('Asiye said she would take the baby to the palace and look after him.', 'قالت آسية إنها ستأخذ الطفل إلى القصر وتعتني به.'), evidence: L('I will take him to the palace and look after him', 'سَآخُذُهُ إِلَى القَصْرِ وَأَعْتَنِي بِهِ') },
      { id: 'moses-a2-c4-sister', focus: 'sequence', claim: L('Moses’s sister told Asiye that she knew a good woman who could nurse the baby.', 'قالت أخت موسى لآسية إنها تعرف امرأة طيبة يمكن أن تكون مرضعة للطفل.'), evidence: L('I know a good woman', 'أَعْرِفُ امْرَأَةً طَيِّبَةً') },
    ],
    vocabularyTargets: vocabularyTargetsFor(4),
    assessmentItems: [
      { id: 'moses-a2-c4-quick', learningPointId: 'moses-a2-c4-palace', eligibleStages: ['quick'], exercise: matching(L('Match the basket’s location with the place named in the chapter.', 'صل موقع التابوت بالمكان المذكور في الفصل.'), { en: [['The basket', 'near the palace'], ['The palace', 'beside the waterside']], ar: [['التابوت', 'قريب من القصر'], ['القصر', 'قرب شاطئ النهر']] }, L('The basket came to the waterside near the palace.', 'وصل التابوت إلى شاطئ النهر قريبًا من القصر.')) },
      { id: 'moses-a2-c4-knowledge', learningPointId: 'moses-a2-c4-asiye', eligibleStages: ['knowledge'], exercise: mc(L('Which description fits Asiye in this chapter?', 'أي وصف يطابق آسية في هذا الفصل؟'), { en: ['She believed in Allah and was kind-hearted', 'She was a heartless soldier', 'She wanted the basket sent away'], ar: ['كانت تؤمن بالله وطيبة القلب', 'كانت جندية عديمة الرحمة', 'أرادت إبعاد التابوت'] }, 0, L('Asiye was different from her husband: she believed in Allah and was kind-hearted.', 'كانت آسية مختلفة عن زوجها؛ تؤمن بالله وطيبة القلب.')) },
      { id: 'moses-a2-c4-review', learningPointId: 'moses-a2-c4-care', eligibleStages: ['review'], exercise: tf(L('Asiye said she would take the baby to the palace and care for him.', 'قالت آسية إنها ستأخذ الطفل إلى القصر وتعتني به.'), true, L('Her decision to care for the baby is stated directly.', 'قرارها بالاعتناء بالطفل مذكور مباشرة.')) },
      { id: 'moses-a2-c4-final', learningPointId: 'moses-a2-c4-sister', eligibleStages: ['final'], exercise: fill(L('Complete what Moses’s sister told Asiye.', 'أكمل ما قالته أخت موسى لآسية.'), L('She said, “I know a good [blank].”', 'قالت: «أَعْرِفُ [blank] طَيِّبَةً».'), L('woman', 'امْرَأَةً'), L('Moses’s sister said she knew a good woman who could nurse the baby.', 'قالت أخت موسى إنها تعرف امرأة طيبة يمكن أن تكون مرضعة.')) },
    ],
    ...guideBundle({
      focus: L('the basket’s arrival, Asiye’s kindness, and Moses’s sister’s action', 'وصول التابوت ورحمة آسية ودور أخت موسى'),
      primaryQuestion: L('How was Asiye different from her husband?', 'كيف كانت آسية مختلفة عن زوجها؟'),
      secondQuestion: L('How did Moses’s sister help the baby?', 'كيف ساعدت أخت موسى الطفل؟'),
      grammar: L('Practise will for a simple future decision: I will take him; she will be a good nurse.', 'لاحظ التعبير عن المستقبل في القرار والوعد: سأخذه، ستكون مرضعة.'),
      pronunciation: L('Practise palace, kind-hearted, nurse, love, and Asiye.', 'تدرّب على نطق قَصْرِ، رَحِيمَةً، مُرْضِعَةٍ، حُبًّا، وآسِيَة.'),
      fast: L('Write two short character sentences about Asiye and one about Moses’s sister.', 'اكتب جملتين قصيرتين عن آسية وجملة عن أخت موسى.'),
      support: L('Use: “Asiye was ___.” and “Moses’s sister knew ___.”', 'استخدم: «كانت آسية ___.» و«عرفت أخت موسى ___.»'),
    }),
  },
];
