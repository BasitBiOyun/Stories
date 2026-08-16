import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf, vocabularyTargetsFor } from './helpers';

export const mosesA2Chapters09to12: LearningBlueprintChapter[] = [
  {
    chapterId: 9,
    objectives: [
      L('Identify Prophet Şuayb and explain why Moses accepted his job offer.', 'يحدد النبي شعيب ويشرح لماذا قبل موسى عرض العمل.'),
      L('Follow Moses’s new family life and his decision to return to Egypt.', 'يتتبع حياة موسى الأسرية الجديدة وقراره بالعودة إلى مصر.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c9-shuayb', focus: 'direct', claim: L('The sisters’ father was Prophet Şuayb, a Messenger of Allah in Midian.', 'كان والد الفتاتين النبي شعيب، رسولًا من رسل الله في مدين.'), evidence: L('The father of these girls was Prophet Şuayb', 'كَانَ وَالِدُ هَاتَيْنِ الْفَتَاتَيْنِ هُوَ النَّبِيَّ شُعَيْبًا') },
      { id: 'moses-a2-c9-job', focus: 'character-action', claim: L('Şuayb offered Moses a job.', 'عرض شعيب على موسى عملًا.'), evidence: L('Şuayb (pbuh) offered Moses a job', 'عَرَضَ شُعَيْبٌ عَلَيْهِ السَّلَامُ عَلَى مُوسَى عَمَلًا') },
      { id: 'moses-a2-c9-stranger', focus: 'cause-result', claim: L('Moses accepted because he was a stranger in Midian and needed a job and a house.', 'قبل موسى لأنه كان غريبًا في مدين وكان بحاجة إلى عمل وبيت.'), evidence: L('because he was a stranger in Midian. He needed a job and a house', 'لِأَنَّهُ كَانَ غَرِيبًا فِي مَدْيَنَ، وَكَانَ بِحَاجَةٍ إِلَى عَمَلٍ وَبَيْتٍ') },
      { id: 'moses-a2-c9-return', focus: 'sequence', claim: L('Moses married one sister and decided to return to Egypt after ten years.', 'تزوج موسى إحدى الفتاتين وقرر العودة إلى مصر بعد عشر سنوات.'), evidence: L('After ten years, Moses decided to go back to Egypt', 'وَبَعْدَ عَشْرِ سَنَوَاتٍ، قَرَّرَ مُوسَى الْعَوْدَةَ إِلَى مِصْرَ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(9),
    assessmentItems: [
      { id: 'moses-a2-c9-quick', learningPointId: 'moses-a2-c9-shuayb', eligibleStages: ['quick'], exercise: fill(L('Complete the name of the sisters’ father.', 'أكمل اسم والد الفتاتين.'), L('Their father was Prophet [blank].', 'كان والدهما النبي [blank].'), L('Şuayb', 'شُعَيْبًا'), L('The chapter identifies their father as Prophet Şuayb.', 'يحدد الفصل والدهما بأنه النبي شعيب.')) },
      { id: 'moses-a2-c9-knowledge', learningPointId: 'moses-a2-c9-job', eligibleStages: ['knowledge'], exercise: mc(L('What did Şuayb offer Moses after inviting him to the house?', 'ماذا عرض شعيب على موسى بعد دعوته إلى البيت؟'), { en: ['A job', 'A throne', 'A place in Pharaoh’s army'], ar: ['عملًا', 'عرشًا', 'مكانًا في جيش فرعون'] }, 0, L('Şuayb offered Moses a job.', 'عرض شعيب على موسى عملًا.')) },
      { id: 'moses-a2-c9-review', learningPointId: 'moses-a2-c9-stranger', eligibleStages: ['review'], exercise: tf(L('Moses already had a house and job in Midian when he met Şuayb.', 'كان لدى موسى بيت وعمل في مدين عندما قابل شعيبًا.'), false, L('He was a stranger and needed both a job and a house.', 'كان غريبًا وكان بحاجة إلى عمل وبيت.')) },
      { id: 'moses-a2-c9-final', learningPointId: 'moses-a2-c9-return', eligibleStages: ['final'], exercise: mc(L('What decision did Moses make after ten years in Midian?', 'ما القرار الذي اتخذه موسى بعد عشر سنوات في مدين؟'), { en: ['To return to Egypt', 'To become king of Midian', 'To leave his family forever'], ar: ['العودة إلى مصر', 'أن يصبح ملك مدين', 'أن يترك أسرته إلى الأبد'] }, 0, L('After ten years, Moses decided to go back to Egypt.', 'بعد عشر سنوات قرر موسى العودة إلى مصر.')) },
    ],
    ...guideBundle({
      focus: L('Şuayb, work, being a stranger, family life, and the return decision', 'شعيب والعمل والغربة والحياة الأسرية وقرار العودة'),
      primaryQuestion: L('Why did Moses accept Şuayb’s job offer?', 'لماذا قبل موسى عرض شعيب للعمل؟'),
      secondQuestion: L('Which events show that Moses built a new life in Midian?', 'ما الأحداث التي تبين أن موسى بنى حياة جديدة في مدين؟'),
      grammar: L('Use because to explain a practical reason: he accepted because he needed a job and house.', 'استخدم «لأن» لشرح السبب العملي لقبول العمل.'),
      pronunciation: L('Practise stranger, job, married, Şuayb, and ten years.', 'تدرّب على نطق غَرِيبًا، عَمَلًا، تَزَوَّجَ، شُعَيْبًا، وعَشْرِ سَنَوَاتٍ.'),
      fast: L('Write a four-event timeline from the invitation to the return decision.', 'اكتب خطًا زمنيًا من أربعة أحداث من الدعوة حتى قرار العودة.'),
      support: L('Use: “Şuayb offered ___.” and “Moses accepted because ___.”', 'استخدم: «عرض شعيب ___.» و«قبل موسى لأن ___.»'),
    }),
  },
  {
    chapterId: 10,
    objectives: [
      L('Follow why Moses climbed the mountain and what he heard there.', 'يتتبع سبب صعود موسى الجبل وما سمعه هناك.'),
      L('Identify the message about Allah and the sign involving the walking stick.', 'يحدد رسالة التوحيد والآية المتعلقة بالعصا.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c10-fire', focus: 'motivation', claim: L('Moses saw a fire on the hillside and went to get fire for warmth.', 'رأى موسى نارًا على سفح التل وذهب ليأتي منها بما يدفئ أسرته.'), evidence: L('I will get some fire to get warm', 'سَآتِي بِبَعْضِ النَّارِ لِنَتَدَفَّأَ') },
      { id: 'moses-a2-c10-voice', focus: 'turning-point', claim: L('In the silence Moses heard Allah call him and say that He had chosen him.', 'سمع موسى في الصمت نداء الله له وإخباره بأنه اختاره.'), evidence: L('Moses, I am Allah. I chose you', 'يَا مُوسَى، إِنِّي أَنَا اللهُ. لَقَدِ اخْتَرْتُكَ') },
      { id: 'moses-a2-c10-tawhid', focus: 'theme', claim: L('Allah told Moses that there is no god but Allah.', 'قال الله لموسى: لا إله إلا أنا.'), evidence: L('There is no god but Allah', 'لَا إِلٰهَ إِلَّا أَنَا') },
      { id: 'moses-a2-c10-stick', focus: 'sequence', claim: L('Moses put down his walking stick and it turned into a big snake.', 'ألقى موسى عصاه فتحولت إلى ثعبان كبير.'), evidence: L('It turned into a big snake', 'فَتَحَوَّلَتْ إِلَى ثُعْبَانٍ كَبِيرٍ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(10),
    assessmentItems: [
      { id: 'moses-a2-c10-quick', learningPointId: 'moses-a2-c10-voice', eligibleStages: ['quick'], exercise: tap(L('Who called Moses in the silence on the mountain?', 'من نادى موسى في صمت الجبل؟'), L('Allah called Moses.', 'نادى الله موسى.'), L('Moses heard Allah say that He had chosen him.', 'سمع موسى الله يخبره بأنه اختاره.')) },
      { id: 'moses-a2-c10-knowledge', learningPointId: 'moses-a2-c10-tawhid', eligibleStages: ['knowledge'], exercise: fill(L('Complete the central message Moses heard.', 'أكمل الرسالة الأساسية التي سمعها موسى.'), L('There is no [blank] but Allah.', 'لَا [blank] إِلَّا أَنَا.'), L('god', 'إِلٰهَ'), L('Allah told Moses that there is no god but Him.', 'قال الله لموسى إنه لا إله إلا هو.')) },
      { id: 'moses-a2-c10-review', learningPointId: 'moses-a2-c10-fire', eligibleStages: ['review'], exercise: tf(L('Moses climbed the mountain because he had seen a fire and wanted warmth for his family.', 'صعد موسى الجبل لأنه رأى نارًا وأراد أن يأتي بما يدفئ أسرته.'), true, L('He told his family he would get some fire to get warm.', 'قال لأسرته إنه سيأتي ببعض النار ليتدفؤوا.')) },
      { id: 'moses-a2-c10-final', learningPointId: 'moses-a2-c10-stick', eligibleStages: ['final'], exercise: matching(L('Match the object with what happened after Allah’s command.', 'صل الشيء بما حدث بعد أمر الله.'), { en: [['Walking stick', 'turned into a big snake'], ['Ground', 'received the stick']], ar: [['العصا', 'تحولت إلى ثعبان كبير'], ['الأرض', 'أُلقيت عليها العصا']] }, L('Moses put the stick on the ground and it turned into a big snake.', 'ألقى موسى العصا على الأرض فتحولت إلى ثعبان كبير.')) },
    ],
    ...guideBundle({
      focus: L('the fire, the divine call, tawhid, and the sign of the stick', 'النار والنداء الإلهي والتوحيد وآية العصا'),
      primaryQuestion: L('Why did Moses first go toward the fire?', 'لماذا اتجه موسى أولًا نحو النار؟'),
      secondQuestion: L('What two new things did Moses learn or see on the mountain?', 'ما الأمران الجديدان اللذان سمعهما أو رآهما موسى على الجبل؟'),
      grammar: L('Practise will for an immediate plan and imperatives such as wait and put down.', 'لاحظ المستقبل القريب والأمر مثل: انتظروا، ألقِ.'),
      pronunciation: L('Practise silence, walking stick, hillside, mountain, voice, and snake.', 'تدرّب على نطق الصَّمْتِ، عَصَاكَ، سَفْحِ التَّلِّ، الْجَبَلَ، نِدَاءً، وثُعْبَانٍ.'),
      fast: L('Write the mountain scene as four ordered factual steps.', 'اكتب مشهد الجبل في أربع خطوات واقعية مرتبة.'),
      support: L('Use: “Moses saw ___.” / “He heard ___.” / “The stick became ___.”', 'استخدم: «رأى موسى ___.» / «سمع ___.» / «تحولت العصا إلى ___.»'),
    }),
  },
  {
    chapterId: 11,
    objectives: [
      L('Identify the sign of the shining hand and the message Moses was told to give Pharaoh.', 'يحدد آية اليد المضيئة والرسالة التي أُمر موسى بإبلاغها لفرعون.'),
      L('Recall Moses’s prophethood and Harun’s role in going to the palace.', 'يتذكر نبوة موسى ودور هارون في الذهاب إلى القصر.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c11-hand', focus: 'direct', claim: L('Moses took out his hand and it was shining.', 'أخرج موسى يده فإذا هي بيضاء مضيئة.'), evidence: L('your hand is now shining', 'فَإِذَا هِيَ بَيْضَاءُ مُضِيئَةٌ') },
      { id: 'moses-a2-c11-message', focus: 'direct', claim: L('Allah told Moses to go to Pharaoh and tell him that Allah is the Lord of the worlds.', 'أمر الله موسى أن يذهب إلى فرعون ويخبره أن الله رب العالمين.'), evidence: L('Go to the king and tell him Allah is the most powerful', 'اِذْهَبْ إِلَى فِرْعَوْنَ، وَأَخْبِرْهُ أَنَّ اللهَ رَبُّ الْعَالَمِينَ') },
      { id: 'moses-a2-c11-prophet', focus: 'turning-point', claim: L('Allah chose Moses and made him a prophet and Messenger.', 'اختار الله موسى وجعله نبيًا ورسولًا.'), evidence: L('Allah chose Moses and made him His prophet', 'اِخْتَارَ اللهُ مُوسَى، وَجَعَلَهُ نَبِيًّا وَرَسُولًا') },
      { id: 'moses-a2-c11-harun', focus: 'character-action', claim: L('Moses took his brother Harun with him to the palace.', 'أخذ موسى أخاه هارون معه إلى القصر.'), evidence: L('took his brother Harun with him and went to the palace', 'أَخَذَ مُوسَى عَلَيْهِ السَّلَامُ أَخَاهُ هَارُونَ عَلَيْهِ السَّلَامُ مَعَهُ، وَذَهَبَ إِلَى الْقَصْرِ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(11),
    assessmentItems: [
      { id: 'moses-a2-c11-quick', learningPointId: 'moses-a2-c11-hand', eligibleStages: ['quick'], exercise: mc(L('What happened when Moses took his hand out?', 'ماذا حدث عندما أخرج موسى يده؟'), { en: ['It was shining', 'It became a rope', 'It disappeared'], ar: ['كانت بيضاء مضيئة', 'تحولت إلى حبل', 'اختفت'] }, 0, L('His hand came out shining.', 'خرجت يده بيضاء مضيئة.')) },
      { id: 'moses-a2-c11-knowledge', learningPointId: 'moses-a2-c11-message', eligibleStages: ['knowledge'], exercise: fill(L('Complete the message Moses had to take to Pharaoh.', 'أكمل الرسالة التي كان على موسى أن يبلغها لفرعون.'), L('Go to the king and tell him Allah is the most [blank].', 'أخبر فرعون أن الله رب [blank].'), L('powerful', 'الْعَالَمِينَ'), L('The English chapter says Allah is the most powerful; the Arabic chapter says Allah is the Lord of the worlds.', 'يقول النص العربي إن الله رب العالمين، ويذكر النص الإنجليزي أن الله هو الأقوى.')) },
      { id: 'moses-a2-c11-review', learningPointId: 'moses-a2-c11-prophet', eligibleStages: ['review'], exercise: tf(L('After the message on the mountain, Allah chose Moses as His prophet.', 'بعد الرسالة اختار الله موسى وجعله نبيًا.'), true, L('The chapter directly states Moses’s prophetic mission.', 'يذكر الفصل نبوة موسى مباشرة.')) },
      { id: 'moses-a2-c11-final', learningPointId: 'moses-a2-c11-harun', eligibleStages: ['final'], exercise: matching(L('Match the brothers with the palace journey described in the chapter.', 'صل الأخوين بما يذكره الفصل عن الذهاب إلى القصر.'), { en: [['Moses', 'took his brother with him'], ['Harun', 'went with Moses to the palace']], ar: [['موسى', 'أخذ أخاه معه'], ['هارون', 'ذهب مع موسى إلى القصر']] }, L('Moses took Harun with him to the palace to give Allah’s message.', 'أخذ موسى هارون معه إلى القصر لتبليغ رسالة الله.')) },
    ],
    ...guideBundle({
      focus: L('the shining hand, the message to Pharaoh, prophethood, and Harun', 'اليد المضيئة والرسالة إلى فرعون والنبوة وهارون'),
      primaryQuestion: L('What sign did Moses see involving his hand?', 'ما الآية التي رآها موسى في يده؟'),
      secondQuestion: L('Who went with Moses to the palace, and why?', 'من ذهب مع موسى إلى القصر، ولماذا؟'),
      grammar: L('Practise put/take phrasal verbs: put in, take out; use go and tell for instructions.', 'لاحظ أفعال الأمر: أدخل، أخرج، اذهب، أخبر.'),
      pronunciation: L('Practise signs, shining, prophet, throne, take out, and Harun.', 'تدرّب على نطق آيَاتٌ، مُضِيئَةٌ، نَبِيًّا، عَرْشِهِ، أَخْرِجْهَا، وهَارُونَ.'),
      fast: L('Write one sentence about each sign and one about the mission to Pharaoh.', 'اكتب جملة عن كل آية وجملة عن المهمة إلى فرعون.'),
      support: L('Use: “His hand was ___.” and “Moses went with ___.”', 'استخدم: «كانت يده ___.» و«ذهب موسى مع ___.»'),
    }),
  },
  {
    chapterId: 12,
    objectives: [
      L('Identify Moses’s message to Pharaoh and the two signs shown in the palace.', 'يحدد رسالة موسى لفرعون والآيتين اللتين أظهرهما في القصر.'),
      L('Explain how Pharaoh responded to the signs.', 'يشرح كيف رد فرعون على الآيات.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c12-message', focus: 'direct', claim: L('Moses said he was a Messenger from the Lord of the universe.', 'قال موسى إنه رسول من رب العالمين.'), evidence: L('I am the Messenger from the Lord of the universe', 'إِنِّي رَسُولٌ مِنْ رَبِّ الْعَالَمِينَ') },
      { id: 'moses-a2-c12-signs', focus: 'sequence', claim: L('Moses’s stick became a big snake and his hand became shining white.', 'تحولت عصا موسى إلى ثعبان كبير وصارت يده بيضاء لامعة.'), evidence: L('The stick turned into a big snake', 'فَتَحَوَّلَتِ الْعَصَا إِلَى ثُعْبَانٍ كَبِيرٍ') },
      { id: 'moses-a2-c12-help', focus: 'cause-result', claim: L('Allah gave the miracles to Moses to help him.', 'أعطى الله موسى هذه الآيات ليساعده بها.'), evidence: L('Allah gave them to Moses (pbuh) to help him', 'أَعْطَاهَا اللهُ لِمُوسَى عَلَيْهِ السَّلَامُ لِيُسَاعِدَهُ بِهَا') },
      { id: 'moses-a2-c12-magic', focus: 'character-action', claim: L('Pharaoh laughed and called the signs magic.', 'سخر فرعون من موسى ووصف الآيات بأنها سحر.'), evidence: L('This is only magic', 'هٰذَا مُجَرَّدُ سِحْرٍ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(12),
    assessmentItems: [
      { id: 'moses-a2-c12-quick', learningPointId: 'moses-a2-c12-signs', eligibleStages: ['quick'], exercise: matching(L('Match each sign Moses showed with what the chapter says happened.', 'صل كل آية أظهرها موسى بما حدث في الفصل.'), { en: [['Walking stick', 'became a big snake'], ['Hand', 'became shining white']], ar: [['العصا', 'تحولت إلى ثعبان كبير'], ['اليد', 'صارت بيضاء لامعة']] }, L('The stick became a snake and the hand shone white.', 'تحولت العصا إلى ثعبان وصارت اليد بيضاء لامعة.')) },
      { id: 'moses-a2-c12-knowledge', learningPointId: 'moses-a2-c12-message', eligibleStages: ['knowledge'], exercise: mc(L('How did Moses introduce himself to Pharaoh?', 'كيف قدم موسى نفسه لفرعون؟'), { en: ['As a Messenger from the Lord of the universe', 'As a magician from Midian', 'As the new king of Egypt'], ar: ['رسولًا من رب العالمين', 'ساحرًا من مدين', 'ملك مصر الجديد'] }, 0, L('Moses said he was the Messenger from the Lord of the universe.', 'قال موسى إنه رسول من رب العالمين.')) },
      { id: 'moses-a2-c12-review', learningPointId: 'moses-a2-c12-magic', eligibleStages: ['review'], exercise: tf(L('Pharaoh accepted the signs as miracles from Allah.', 'قبل فرعون الآيات على أنها معجزات من الله.'), false, L('He mocked Moses and called the signs magic.', 'سخر من موسى ووصف الآيات بأنها سحر.')) },
      { id: 'moses-a2-c12-final', learningPointId: 'moses-a2-c12-help', eligibleStages: ['final'], exercise: fill(L('Complete why Allah gave Moses the signs.', 'أكمل سبب إعطاء الله موسى الآيات.'), L('Allah gave the miracles to Moses to [blank] him.', 'أعطى الله موسى الآيات لِـ[blank]ه بها.'), L('help', 'يُسَاعِدَ'), L('The chapter says Allah gave the signs to help Moses.', 'يقول الفصل إن الله أعطى موسى الآيات ليساعده بها.')) },
    ],
    ...guideBundle({
      focus: L('Moses’s message, the two signs, their purpose, and Pharaoh’s response', 'رسالة موسى والآيتان وهدفهما ورد فرعون'),
      primaryQuestion: L('What two signs did Moses show in the palace?', 'ما الآيتان اللتان أظهرهما موسى في القصر؟'),
      secondQuestion: L('How did Pharaoh explain the signs instead of believing?', 'كيف فسر فرعون الآيات بدل الإيمان؟'),
      grammar: L('Practise said/told and simple reporting: Moses said…, Pharaoh said….', 'تدرّب على أفعال القول البسيطة: قال موسى، وقال فرعون.'),
      pronunciation: L('Practise miracles, universe, magic, threw, laugh at, snake, and shining.', 'تدرّب على نطق آيَاتِ، الْعَالَمِينَ، سِحْرٍ، أَلْقَاهَا، سَخِرَ، ثُعْبَانٍ، ولَامِعَةً.'),
      fast: L('Make a two-column chart: what Moses showed / what Pharaoh said.', 'أنشئ جدولًا من عمودين: ما أظهره موسى / ما قاله فرعون.'),
      support: L('Use: “The stick became ___.” / “The hand became ___.”', 'استخدم: «تحولت العصا إلى ___.» / «صارت اليد ___.»'),
    }),
  },
];
