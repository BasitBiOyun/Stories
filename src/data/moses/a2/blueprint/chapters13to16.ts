import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tf, vocabularyTargetsFor } from './helpers';

export const mosesA2Chapters13to16: LearningBlueprintChapter[] = [
  {
    chapterId: 13,
    objectives: [
      L('Follow what the magicians put on the ground and what happened after Moses threw his stick.', 'يتتبع ما وضعه السحرة على الأرض وما حدث بعد أن ألقى موسى عصاه.'),
      L('Compare the magicians’ belief with Pharaoh’s continued arrogance.', 'يقارن بين إيمان السحرة واستمرار تكبر فرعون.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c13-ropes', focus: 'sequence', claim: L('The magicians put down sticks and ropes that moved like snakes.', 'وضع السحرة العصي والحبال على الأرض فبدت كأنها تسعى.'), evidence: L('They put down the sticks and ropes on the ground', 'فَوَضَعُوا الْعِصِيَّ وَالْحِبَالَ عَلَى الْأَرْضِ') },
      { id: 'moses-a2-c13-snake', focus: 'sequence', claim: L('Moses’s stick became a huge snake and ate what the magicians had made.', 'تحولت عصا موسى إلى ثعبان ضخم وابتلعت ما صنعه السحرة.'), evidence: L('His stick quickly ate all the snakes of the magicians', 'وَسُرْعَانَ مَا ابْتَلَعَتْ مَا صَنَعَهُ السَّحَرَةُ') },
      { id: 'moses-a2-c13-belief', focus: 'turning-point', claim: L('The magicians bowed down and said they believed in the Lord of Moses and Harun.', 'سجد السحرة لله وقالوا إنهم يؤمنون برب موسى وهارون.'), evidence: L('We believe in the Lord of Moses and Harun', 'نَحْنُ نُؤْمِنُ بِرَبِّ مُوسَى وَهَارُونَ') },
      { id: 'moses-a2-c13-arrogant', focus: 'character-action', claim: L('Pharaoh remained arrogant and continued to harm Moses and his people.', 'بقي فرعون متكبرًا واستمر في إيذاء موسى وقومه.'), evidence: L('because he was arrogant', 'لِأَنَّهُ كَانَ مُتَكَبِّرًا') },
    ],
    vocabularyTargets: vocabularyTargetsFor(13),
    assessmentItems: [
      { id: 'moses-a2-c13-quick', learningPointId: 'moses-a2-c13-ropes', eligibleStages: ['quick'], exercise: tf(L('The magicians placed sticks and ropes on the ground.', 'وضع السحرة العصي والحبال على الأرض.'), true, L('The chapter describes both sticks and ropes in the magicians’ display.', 'يذكر الفصل العصي والحبال في عرض السحرة.')) },
      { id: 'moses-a2-c13-knowledge', learningPointId: 'moses-a2-c13-snake', eligibleStages: ['knowledge'], exercise: matching(L('Match Moses’s stick with the result of Allah’s command.', 'صل عصا موسى بالنتيجة بعد أمر الله.'), { en: [['Moses’s stick', 'became a huge snake'], ['The huge snake', 'ate the magicians’ snakes']], ar: [['عصا موسى', 'تحولت إلى ثعبان ضخم'], ['الثعبان الضخم', 'ابتلع ما صنعه السحرة']] }, L('Moses’s stick became a huge snake and overcame what the magicians showed.', 'تحولت عصا موسى إلى ثعبان ضخم وابتلعت ما صنعه السحرة.')) },
      { id: 'moses-a2-c13-review', learningPointId: 'moses-a2-c13-belief', eligibleStages: ['review'], exercise: tf(L('After seeing what happened, the magicians declared belief in the Lord of Moses and Harun.', 'بعد ما رأوه أعلن السحرة إيمانهم برب موسى وهارون.'), true, L('They bowed down and announced their belief.', 'سجدوا لله وأعلنوا إيمانهم.')) },
      { id: 'moses-a2-c13-final', learningPointId: 'moses-a2-c13-arrogant', eligibleStages: ['final'], exercise: mc(L('Why did Pharaoh still refuse to believe according to the chapter?', 'لماذا استمر فرعون في رفض الإيمان بحسب الفصل؟'), { en: ['He was arrogant', 'He had forgotten the palace', 'He wanted to move to Midian'], ar: ['لأنه كان متكبرًا', 'لأنه نسي القصر', 'لأنه أراد الانتقال إلى مدين'] }, 0, L('The chapter says Pharaoh still did not believe because he was arrogant.', 'يقول الفصل إن فرعون لم يؤمن لأنه كان متكبرًا.')) },
    ],
    ...guideBundle({
      focus: L('the magicians’ display, Moses’s sign, belief, and Pharaoh’s arrogance', 'عرض السحرة وآية موسى والإيمان وتكبر فرعون'),
      primaryQuestion: L('What changed the magicians’ response to Moses?', 'ما الذي غيّر موقف السحرة من موسى؟'),
      secondQuestion: L('How was Pharaoh’s response different from the magicians’ response?', 'كيف اختلف رد فرعون عن رد السحرة؟'),
      grammar: L('Use then and after for simple event order; use because for Pharaoh’s reason.', 'استخدم «ثم/بعد» لترتيب الأحداث و«لأن» لذكر سبب فرعون.'),
      pronunciation: L('Practise ropes, huge, arrogant, magicians, and believe.', 'تدرّب على نطق حِبَالًا، ضَخْمٍ، مُتَكَبِّرًا، السَّحَرَةَ، ونُؤْمِنُ.'),
      fast: L('Write two contrast sentences: the magicians…, but Pharaoh….', 'اكتب جملتين للمقارنة: السحرة... لكن فرعون....'),
      support: L('Use: “The magicians believed ___.” / “Pharaoh was ___.”', 'استخدم: «آمن السحرة بـ ___.» / «كان فرعون ___.»'),
    }),
  },
  {
    chapterId: 14,
    objectives: [
      L('Explain why Moses and his people left Egypt at night and kept the journey secret.', 'يشرح لماذا خرج موسى وقومه من مصر ليلًا وحافظوا على سرية الرحلة.'),
      L('Identify why the caravan moved slowly and what awaited them at the sea.', 'يحدد سبب بطء القافلة وما كان ينتظرهم عند البحر.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c14-night', focus: 'direct', claim: L('Allah told Moses to travel with his people at night.', 'أمر الله موسى أن يخرج بقومه ليلًا.'), evidence: L('Travel with your people at night', 'اُخْرُجْ بِقَوْمِكَ لَيْلًا') },
      { id: 'moses-a2-c14-secret', focus: 'character-action', claim: L('Moses told his people to keep the journey secret.', 'قال موسى لقومه أن يحافظوا على سرية الرحلة.'), evidence: L('you must keep it secret', 'عَلَيْكُمْ أَنْ تُحَافِظُوا عَلَى سِرِّيَّةِ الْأَمْرِ') },
      { id: 'moses-a2-c14-slow', focus: 'cause-result', claim: L('The caravan moved slowly because there were many old people and children.', 'تحركت القافلة ببطء لأن فيها كثيرًا من كبار السن والأطفال.'), evidence: L('Their caravan moved slowly', 'تَحَرَّكَتْ قَافِلَتُهُمْ بِبُطْءٍ') },
      { id: 'moses-a2-c14-sea', focus: 'turning-point', claim: L('At sunrise the group reached the sea while Pharaoh prepared his huge army.', 'عند شروق الشمس وصل القوم إلى البحر وأعد فرعون جيشه الضخم.'), evidence: L('When the sun rose, they arrived at the sea', 'عِنْدَمَا أَشْرَقَتِ الشَّمْسُ، وَصَلُوا إِلَى الْبَحْرِ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(14),
    assessmentItems: [
      { id: 'moses-a2-c14-quick', learningPointId: 'moses-a2-c14-night', eligibleStages: ['quick'], exercise: fill(L('Complete Allah’s travel instruction to Moses.', 'أكمل أمر الله لموسى في السفر.'), L('Travel with your people at [blank].', 'اُخْرُجْ بِقَوْمِكَ [blank].'), L('night', 'لَيْلًا'), L('Allah told Moses to travel with his people at night.', 'أمر الله موسى أن يخرج بقومه ليلًا.')) },
      { id: 'moses-a2-c14-knowledge', learningPointId: 'moses-a2-c14-secret', eligibleStages: ['knowledge'], exercise: mc(L('What did Moses tell his people to do with their travel plan?', 'ماذا طلب موسى من قومه أن يفعلوا بخطة الرحلة؟'), { en: ['Keep it secret', 'Tell Pharaoh immediately', 'Write it on the palace wall'], ar: ['يحافظوا على سريتها', 'يخبروا فرعون فورًا', 'يكتبوها على جدار القصر'] }, 0, L('Moses told them to keep the departure secret.', 'طلب منهم موسى المحافظة على سرية الخروج.')) },
      { id: 'moses-a2-c14-review', learningPointId: 'moses-a2-c14-slow', eligibleStages: ['review'], exercise: tf(L('The caravan moved slowly because the group included old people and children.', 'تحركت القافلة ببطء لأن المجموعة ضمت كبار السن والأطفال.'), true, L('The chapter explains that children and old people could not walk fast.', 'يوضح الفصل أن الأطفال وكبار السن لم يستطيعوا المشي بسرعة.')) },
      { id: 'moses-a2-c14-final', learningPointId: 'moses-a2-c14-sea', eligibleStages: ['final'], exercise: matching(L('Match the sunrise events at the end of the chapter.', 'صل أحداث شروق الشمس في نهاية الفصل.'), { en: [['Moses’s people', 'arrived at the sea'], ['Pharaoh', 'prepared his huge army']], ar: [['قوم موسى', 'وصلوا إلى البحر'], ['فرعون', 'أعد جيشه الضخم']] }, L('At sunrise the people reached the sea and Pharaoh prepared his army.', 'عند شروق الشمس وصل القوم إلى البحر وأعد فرعون جيشه.')) },
    ],
    ...guideBundle({
      focus: L('night travel, secrecy, the slow caravan, and arrival at the sea', 'السفر ليلًا والسرية وبطء القافلة والوصول إلى البحر'),
      primaryQuestion: L('Why did Moses tell the people to keep the journey secret?', 'لماذا طلب موسى من قومه الحفاظ على سرية الرحلة؟'),
      secondQuestion: L('What made the caravan slow?', 'ما الذي جعل القافلة بطيئة؟'),
      grammar: L('Practise must for a strong instruction: you must keep it secret; we must hide it.', 'لاحظ التعبير عن الإلزام: عليكم أن، يجب أن.'),
      pronunciation: L('Practise journey, secret, caravan, prepared, night, and sea.', 'تدرّب على نطق الرِّحْلَةِ، سِرِّيَّةِ، قَافِلَتُهُمْ، أَعَدَّ، اللَّيْلِ، والْبَحْرِ.'),
      fast: L('Write a four-step escape plan using only Chapter 14 facts.', 'اكتب خطة خروج من أربع خطوات مستخدمًا معلومات الفصل الرابع عشر فقط.'),
      support: L('Use: “They left at ___.” and “The caravan moved ___.”', 'استخدم: «غادروا في ___.» و«تحركت القافلة ___.»'),
    }),
  },
  {
    chapterId: 15,
    objectives: [
      L('Describe the trapped position of Moses’s people and Moses’s response to their fear.', 'يصف موقف قوم موسى المحاصر ورد موسى على خوفهم.'),
      L('Follow the opening of the sea and the people’s safe crossing.', 'يتتبع انشقاق البحر وعبور القوم بأمان.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c15-calm', focus: 'character-action', claim: L('The people panicked, but Moses told them to calm down and trust Allah’s help.', 'خاف القوم، لكن موسى طلب منهم الهدوء والثقة بهداية الله.'), evidence: L('Calm down! Allah is with us', 'اِهْدَؤُوا! إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ') },
      { id: 'moses-a2-c15-trapped', focus: 'direct', claim: L('The sea was in front and Pharaoh’s army was behind, so there was no place to escape.', 'كان البحر أمامهم وجيش فرعون خلفهم فلم يكن لديهم مكان للهروب.'), evidence: L('The sea was in front of them. The king and his army were behind them', 'كَانَ الْبَحْرُ أَمَامَهُمْ، وَكَانَ فِرْعَوْنُ وَجَيْشُهُ خَلْفَهُمْ') },
      { id: 'moses-a2-c15-parted', focus: 'sequence', claim: L('Moses hit the sea with his stick and the sea parted.', 'ضرب موسى البحر بعصاه فانشق البحر.'), evidence: L('He hit the sea and the sea parted', 'فَضَرَبَ مُوسَى الْبَحْرَ بِعَصَاهُ، فَانْشَقَّ الْبَحْرُ') },
      { id: 'moses-a2-c15-safe', focus: 'sequence', claim: L('Moses and his people walked safely between walls of water.', 'سار موسى وقومه بأمان بين جدران من الماء.'), evidence: L('safely walked between the walls of water', 'سَارَ مُوسَى عَلَيْهِ السَّلَامُ وَقَوْمُهُ بِأَمَانٍ بَيْنَ جُدْرَانٍ مِنَ الْمَاءِ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(15),
    assessmentItems: [
      { id: 'moses-a2-c15-quick', learningPointId: 'moses-a2-c15-calm', eligibleStages: ['quick'], exercise: mc(L('What did Moses tell the frightened people to do?', 'ماذا قال موسى لقومه الخائفين أن يفعلوا؟'), { en: ['Calm down and trust Allah’s help', 'Return to Pharaoh', 'Swim across immediately'], ar: ['يهدؤوا ويثقوا بهداية الله', 'يعودوا إلى فرعون', 'يسبحوا فورًا'] }, 0, L('Moses told them to calm down because Allah was with them.', 'طلب منهم موسى أن يهدؤوا لأن الله معهم.')) },
      { id: 'moses-a2-c15-knowledge', learningPointId: 'moses-a2-c15-trapped', eligibleStages: ['knowledge'], exercise: matching(L('Match each direction with what blocked the people.', 'صل كل جهة بما كان يحاصر القوم.'), { en: [['In front', 'the sea'], ['Behind', 'Pharaoh and his army']], ar: [['أمامهم', 'البحر'], ['خلفهم', 'فرعون وجيشه']] }, L('The sea was in front and Pharaoh’s army was behind.', 'كان البحر أمامهم وفرعون وجيشه خلفهم.')) },
      { id: 'moses-a2-c15-review', learningPointId: 'moses-a2-c15-parted', eligibleStages: ['review'], exercise: tf(L('The sea parted after Moses hit it with his stick.', 'انشق البحر بعد أن ضربه موسى بعصاه.'), true, L('Allah told Moses to hit the sea with his stick, and it parted.', 'أمر الله موسى أن يضرب البحر بعصاه فانشق.')) },
      { id: 'moses-a2-c15-final', learningPointId: 'moses-a2-c15-safe', eligibleStages: ['final'], exercise: fill(L('Complete how Moses and his people crossed.', 'أكمل كيف عبر موسى وقومه.'), L('They walked [blank] between the walls of water.', 'ساروا [blank] بين جدران من الماء.'), L('safely', 'بِأَمَانٍ'), L('The chapter says they walked safely between the walls of water.', 'يقول الفصل إنهم ساروا بأمان بين جدران الماء.')) },
    ],
    ...guideBundle({
      focus: L('fear, the trapped position, the opening of the sea, and safe crossing', 'الخوف والحصار وانشقاق البحر والعبور الآمن'),
      primaryQuestion: L('Why did the people think there was no escape?', 'لماذا ظن القوم أنه لا يوجد مخرج؟'),
      secondQuestion: L('What happened after Moses hit the sea?', 'ماذا حدث بعد أن ضرب موسى البحر؟'),
      grammar: L('Practise position language: in front of, behind, between.', 'تدرّب على ألفاظ المكان: أمام، خلف، بين.'),
      pronunciation: L('Practise panicked, parted, safely, calm down, caught, and sea.', 'تدرّب على نطق فَخَافَ، فَانْشَقَّ، بِأَمَانٍ، اِهْدَؤُوا، لَحِقَ بِهِمْ، والْبَحْرُ.'),
      fast: L('Draw the scene and label front, behind, and the safe road.', 'ارسم المشهد وضع تسميات: أمام، خلف، والطريق الآمن.'),
      support: L('Use: “The sea was ___.” / “The army was ___.”', 'استخدم: «كان البحر ___.» / «كان الجيش ___.»'),
    }),
  },
  {
    chapterId: 16,
    objectives: [
      L('Follow what Pharaoh claimed and what happened after he entered the sea.', 'يتتبع ما ادعاه فرعون وما حدث بعد دخوله البحر.'),
      L('State the final lessons the chapter gives about ownership and Allah’s power.', 'يذكر الدروس الختامية عن ملكية الناس وقدرة الله.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c16-claim', focus: 'character-action', claim: L('Pharaoh claimed that he had told the sea to open.', 'ادعى فرعون أنه أمر البحر أن ينفلق.'), evidence: L('I told the sea to open, and it opened', 'لَقَدْ أَمَرْتُ الْبَحْرَ أَنْ يَنْفَلِقَ، فَانْفَلَقَ') },
      { id: 'moses-a2-c16-closed', focus: 'sequence', claim: L('When Pharaoh and his soldiers were midway, Allah closed the sea over them.', 'عندما وصل فرعون وجنوده إلى منتصف الطريق أغلق الله البحر عليهم.'), evidence: L('Allah closed the sea over them', 'أَغْلَقَ اللهُ الْبَحْرَ عَلَيْهِمْ') },
      { id: 'moses-a2-c16-died', focus: 'sequence', claim: L('Pharaoh and his soldiers died in the water.', 'مات فرعون وجنوده في الماء.'), evidence: L('they died in the water', 'مَاتُوا فِي الْمَاءِ') },
      { id: 'moses-a2-c16-lessons', focus: 'theme', claim: L('The story says no one can own another person and only Allah has power over us.', 'تقول القصة إن الناس ليسوا ملكًا لأحد وإن الله وحده صاحب القدرة والسلطان.'), evidence: L('no one can own another person', 'النَّاسَ لَيْسُوا مِلْكًا لِأَحَدٍ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(16),
    assessmentItems: [
      { id: 'moses-a2-c16-quick', learningPointId: 'moses-a2-c16-claim', eligibleStages: ['quick'], exercise: tf(L('Pharaoh claimed that he had made the sea open.', 'ادعى فرعون أنه هو الذي جعل البحر ينفلق.'), true, L('Pharaoh made this claim to his soldiers before entering the water.', 'قال فرعون هذا الادعاء لجنوده قبل دخول الماء.')) },
      { id: 'moses-a2-c16-knowledge', learningPointId: 'moses-a2-c16-closed', eligibleStages: ['knowledge'], exercise: mc(L('What happened when Pharaoh and his soldiers reached the middle of the sea road?', 'ماذا حدث عندما وصل فرعون وجنوده إلى منتصف طريق البحر؟'), { en: ['Allah closed the sea over them', 'The road became wider', 'Moses returned to them'], ar: ['أغلق الله البحر عليهم', 'أصبح الطريق أوسع', 'عاد موسى إليهم'] }, 0, L('Allah closed the sea over them when they were midway.', 'أغلق الله البحر عليهم عندما كانوا في منتصف الطريق.')) },
      { id: 'moses-a2-c16-review', learningPointId: 'moses-a2-c16-died', eligibleStages: ['review'], exercise: tf(L('Pharaoh and his soldiers escaped safely from the water.', 'خرج فرعون وجنوده من الماء بأمان.'), false, L('The chapter says they died in the water.', 'يقول الفصل إنهم ماتوا في الماء.')) },
      { id: 'moses-a2-c16-final', learningPointId: 'moses-a2-c16-lessons', eligibleStages: ['final'], exercise: matching(L('Match the final lessons with their meaning in the chapter.', 'صل الدروس الختامية بمعناها في الفصل.'), { en: [['People', 'cannot be owned by another person'], ['Allah', 'has power over us']], ar: [['الناس', 'ليسوا ملكًا لأحد'], ['الله', 'وحده صاحب القدرة والسلطان']] }, L('The chapter ends with lessons about human freedom and Allah’s power.', 'يختم الفصل بدروس عن حرية الإنسان وقدرة الله.')) },
    ],
    ...guideBundle({
      focus: L('Pharaoh’s claim, the closing sea, the outcome, and the final lessons', 'ادعاء فرعون وانطباق البحر والنتيجة والدروس الختامية'),
      primaryQuestion: L('What did Pharaoh claim before entering the sea?', 'ماذا ادعى فرعون قبل دخول البحر؟'),
      secondQuestion: L('What two lessons does the final paragraph state?', 'ما الدرسان اللذان تذكرهما الفقرة الأخيرة؟'),
      grammar: L('Practise said/told for a claim and simple final-result language: in the end.', 'تدرّب على أفعال القول وعلى تعبير النتيجة مثل «في النهاية».'),
      pronunciation: L('Practise midway, lessons, power, sea, and water.', 'تدرّب على نطق مُنْتَصَفِ، دُرُوسًا، الْقُدْرَةِ، الْبَحْرَ، والْمَاءِ.'),
      fast: L('Write two factual ending sentences and two lesson sentences.', 'اكتب جملتين عن نهاية الأحداث وجملتين عن الدروس.'),
      support: L('Use: “Allah closed ___.” and “The story teaches ___.”', 'استخدم: «أغلق الله ___.» و«تعلمنا القصة ___.»'),
    }),
  },
];
