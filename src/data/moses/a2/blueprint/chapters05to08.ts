import type { LearningBlueprintChapter } from '../../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tf, vocabularyTargetsFor } from './helpers';

export const mosesA2Chapters05to08: LearningBlueprintChapter[] = [
  {
    chapterId: 5,
    objectives: [
      L('Explain how Moses returned to his mother and grew up safely.', 'يشرح كيف عاد موسى إلى أمه ونشأ في مكان آمن.'),
      L('Identify Moses’s willingness to help weak people and the event that begins in the bazaar.', 'يحدد استعداد موسى لمساعدة الضعفاء والحدث الذي يبدأ في السوق.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c5-mother', focus: 'sequence', claim: L('Allah sent Moses back to his mother.', 'رد الله موسى إلى أمه.'), evidence: L('Allah sent Moses back to his mother', 'فَرَدَّ اللهُ مُوسَى إِلَى أُمِّهِ') },
      { id: 'moses-a2-c5-safe', focus: 'direct', claim: L('Moses grew up in a safe place in the house of the king.', 'نشأ موسى في مكان آمن في بيت فرعون.'), evidence: L('Moses grew up in a safe place', 'نَشَأَ مُوسَى فِي مَكَانٍ آمِنٍ') },
      { id: 'moses-a2-c5-weak', focus: 'character-action', claim: L('Young Moses was always ready to help weak people.', 'كان موسى الشاب مستعدًا دائمًا لمساعدة الضعفاء.'), evidence: L('ready to help the weak people', 'مُسْتَعِدًّا لِمُسَاعَدَةِ الضُّعَفَاءِ') },
      { id: 'moses-a2-c5-bazaar', focus: 'turning-point', claim: L('In the bazaar Moses saw two men fighting, and one was Egyptian.', 'رأى موسى في السوق رجلين يتخاصمان وكان أحدهما مصريًا.'), evidence: L('He saw two men fighting. One of them was an Egyptian', 'رَأَى رَجُلَيْنِ يَتَخَاصَمَانِ. كَانَ أَحَدُهُمَا مِصْرِيًّا') },
    ],
    vocabularyTargets: vocabularyTargetsFor(5),
    assessmentItems: [
      { id: 'moses-a2-c5-quick', learningPointId: 'moses-a2-c5-mother', eligibleStages: ['quick'], exercise: fill(L('Complete the chapter’s return statement.', 'أكمل جملة العودة في الفصل.'), L('Allah sent Moses back to his [blank].', 'فَرَدَّ اللهُ مُوسَى إِلَى [blank].'), L('mother', 'أُمِّهِ'), L('Allah sent baby Moses back to his mother.', 'رد الله الطفل موسى إلى أمه.')) },
      { id: 'moses-a2-c5-knowledge', learningPointId: 'moses-a2-c5-safe', eligibleStages: ['knowledge'], exercise: mc(L('Where did Moses grow up according to the chapter?', 'أين نشأ موسى بحسب الفصل؟'), { en: ['In a safe place in the king’s house', 'Alone beside the Nile', 'In a shepherd’s tent in Midian'], ar: ['في مكان آمن في بيت فرعون', 'وحيدًا بجانب النيل', 'في خيمة راعٍ في مدين'] }, 0, L('Moses grew up safely in the house of the king.', 'نشأ موسى في مكان آمن في بيت فرعون.')) },
      { id: 'moses-a2-c5-review', learningPointId: 'moses-a2-c5-weak', eligibleStages: ['review'], exercise: tf(L('As a young man, Moses was ready to help weak people.', 'كان موسى شابًا مستعدًا لمساعدة الضعفاء.'), true, L('The chapter presents helping the weak as part of Moses’s character.', 'يقدم الفصل مساعدة الضعفاء بوصفها من صفات موسى.')) },
      { id: 'moses-a2-c5-final', learningPointId: 'moses-a2-c5-bazaar', eligibleStages: ['final'], exercise: mc(L('What did Moses notice while walking in the bazaar?', 'ماذا لاحظ موسى وهو يمشي في السوق؟'), { en: ['Two men fighting', 'A basket floating away', 'Magicians holding ropes'], ar: ['رجلين يتخاصمان', 'تابوتًا يبتعد في الماء', 'سحرة يحملون الحبال'] }, 0, L('He saw two men fighting, and one of them was Egyptian.', 'رأى رجلين يتخاصمان وكان أحدهما مصريًا.')) },
    ],
    ...guideBundle({
      focus: L('return to family, safe growth, helping the weak, and the bazaar turning point', 'العودة إلى الأسرة والنشأة الآمنة ومساعدة الضعفاء وبداية حدث السوق'),
      primaryQuestion: L('How did Moses return to his mother?', 'كيف عاد موسى إلى أمه؟'),
      secondQuestion: L('What does the chapter tell us about Moses before the fight begins?', 'ماذا يخبرنا الفصل عن موسى قبل أن يبدأ الشجار؟'),
      grammar: L('Practise grew up, became, and was ready to for simple life changes.', 'تدرّب على «نشأ»، «أصبح»، و«كان مستعدًا» لوصف التغير.'),
      pronunciation: L('Practise protector, safe, weak, mother, and bazaar.', 'تدرّب على نطق الْحَافِظِينَ، آمِنٍ، الضُّعَفَاءِ، أُمِّهِ، والسُّوقِ.'),
      fast: L('Write a four-sentence mini-biography of Moses up to the bazaar scene.', 'اكتب سيرة قصيرة من أربع جمل لموسى حتى مشهد السوق.'),
      support: L('Use: “Moses grew up ___.” and “He was ready to ___.”', 'استخدم: «نشأ موسى ___.» و«كان مستعدًا لـ ___.»'),
    }),
  },
  {
    chapterId: 6,
    objectives: [
      L('Distinguish the accidental death from an intentional act.', 'يميز بين الموت الذي حدث بغير قصد والفعل المتعمد.'),
      L('Follow Moses’s regret, prayer, forgiveness, and the warning to leave the city.', 'يتتبع ندم موسى ودعاءه ومغفرة الله والتحذير بالخروج من المدينة.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c6-help', focus: 'character-action', claim: L('A weak man from the Children of Israel called for help and Moses ran to help him.', 'استنجد رجل ضعيف من بني إسرائيل فأسرع موسى لمساعدته.'), evidence: L('shouted: “Help me!” Moses ran to help him', 'صَرَخَ الرَّجُلُ الضَّعِيفُ مِنْ بَنِي إِسْرَائِيلَ: "النَّجْدَةَ!". فَأَسْرَعَ مُوسَى لِمُسَاعَدَتِهِ') },
      { id: 'moses-a2-c6-accident', focus: 'direct', claim: L('Moses accidentally caused a man’s death.', 'تسبب موسى في موت رجل عن غير قصد.'), evidence: L("accidentally caused someone's death", 'تَسَبَّبَ في مَوْتِ رَجُلٍ عَنْ غَيْرِ قَصْدٍ') },
      { id: 'moses-a2-c6-forgive', focus: 'character-action', claim: L('Moses prayed to Allah for forgiveness, and Allah forgave him.', 'دعا موسى الله طالبًا المغفرة فغفر الله له.'), evidence: L('Forgive me', 'فَاغْفِرْ لِي') },
      { id: 'moses-a2-c6-warning', focus: 'sequence', claim: L('A man warned Moses that Pharaoh’s soldiers were looking for him and told him to leave the city.', 'حذر رجل موسى من أن جنود فرعون يبحثون عنه وأمره بالخروج من المدينة.'), evidence: L('Run away from the city', 'اُخْرُجْ مِنَ الْمَدِينَةِ') },
    ],
    vocabularyTargets: vocabularyTargetsFor(6),
    assessmentItems: [
      { id: 'moses-a2-c6-quick', learningPointId: 'moses-a2-c6-forgive', eligibleStages: ['quick'], exercise: mc(L('What did Moses ask Allah for after the accident?', 'ماذا طلب موسى من الله بعد الحادثة؟'), { en: ['Forgiveness', 'A new palace', 'More money'], ar: ['المغفرة', 'قصرًا جديدًا', 'مالًا أكثر'] }, 0, L('Moses made dua and asked Allah to forgive him.', 'دعا موسى الله وطلب منه المغفرة.')) },
      { id: 'moses-a2-c6-knowledge', learningPointId: 'moses-a2-c6-accident', eligibleStages: ['knowledge'], exercise: tf(L('The chapter says Moses caused the man’s death on purpose.', 'يقول الفصل إن موسى تسبب في موت الرجل عن قصد.'), false, L('The chapter explicitly says it happened accidentally, not on purpose.', 'ينص الفصل على أن ذلك حدث عن غير قصد.')) },
      { id: 'moses-a2-c6-review', learningPointId: 'moses-a2-c6-warning', eligibleStages: ['review'], exercise: mc(L('Why did the man tell Moses to leave the city?', 'لماذا قال الرجل لموسى أن يخرج من المدينة؟'), { en: ['The soldiers were looking for him', 'The Nile was flooding', 'Şuayb had called him'], ar: ['لأن الجنود كانوا يبحثون عنه', 'لأن النيل كان يفيض', 'لأن شعيبًا ناداه'] }, 0, L('The warning said the soldiers were looking for Moses.', 'قال التحذير إن الجنود يبحثون عن موسى.')) },
      { id: 'moses-a2-c6-final', learningPointId: 'moses-a2-c6-help', eligibleStages: ['final'], exercise: matching(L('Match the people with their actions at the start of the bazaar incident.', 'صل الأشخاص بأفعالهم في بداية حادثة السوق.'), { en: [['The weak man', 'called for help'], ['Moses', 'ran to help']], ar: [['الرجل الضعيف', 'استنجد'], ['موسى', 'أسرع للمساعدة']] }, L('The weak man called for help and Moses ran to help him.', 'استنجد الرجل الضعيف فأسرع موسى لمساعدته.')) },
    ],
    ...guideBundle({
      focus: L('accident, regret, forgiveness, and the warning to escape', 'الحادثة والندم والمغفرة والتحذير بالهروب'),
      primaryQuestion: L('Which words show that the death was not intentional?', 'ما الكلمات التي تبين أن الموت لم يكن مقصودًا؟'),
      secondQuestion: L('What did Moses do after realizing the result of his action?', 'ماذا فعل موسى بعد أن أدرك نتيجة فعله؟'),
      grammar: L('Contrast accidentally / on purpose and notice because for a reason.', 'قارن بين «عن غير قصد» و«عن قصد»، ولاحظ استعمال «لأن» للسبب.'),
      pronunciation: L('Practise upset, forgive, accidentally, run away, and dua.', 'تدرّب على نطق بِحُزْنٍ شَدِيدٍ، فَاغْفِرْ لِي، عَنْ غَيْرِ قَصْدٍ، اُخْرُجْ، ودَعَا.'),
      fast: L('Write two sentences separating the action from Moses’s response afterward.', 'اكتب جملتين تفصلان بين الفعل ورد موسى بعده.'),
      support: L('Use: “It happened ___.” and “Moses asked Allah to ___.”', 'استخدم: «حدث ذلك ___.» و«طلب موسى من الله أن ___.»'),
    }),
  },
  {
    chapterId: 7,
    objectives: [
      L('Follow Moses’s escape from Egypt to Midian.', 'يتتبع هروب موسى من مصر إلى مدين.'),
      L('Identify Allah’s guidance and the new setting at the well.', 'يحدد هداية الله والمكان الجديد عند البئر.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c7-escape', focus: 'sequence', claim: L('Moses escaped from the soldiers and left Egypt.', 'هرب موسى من الجنود وغادر مصر.'), evidence: L('Moses escaped from the soldiers. He left Egypt', 'هَرَبَ مُوسَى مِنَ الْجُنُودِ. غَادَرَ مِصْرَ') },
      { id: 'moses-a2-c7-guided', focus: 'theme', claim: L('Allah guided Moses during his journey.', 'هدى الله موسى في رحلته.'), evidence: L('Allah guided him', 'هَدَاهُ اللهُ') },
      { id: 'moses-a2-c7-midian', focus: 'direct', claim: L('Pharaoh was not the ruler in Midian.', 'لم يكن فرعون حاكمًا في مدين.'), evidence: L('The king of Egypt was not the ruler there', 'لَمْ يَكُنْ فِرْعَوْنُ هُوَ الْحَاكِمَ هُنَاكَ') },
      { id: 'moses-a2-c7-well', focus: 'sequence', claim: L('Moses found a well with shepherds while two girls sat far from the water.', 'وجد موسى بئرًا ورعاة بينما جلست فتاتان بعيدًا عن الماء.'), evidence: L('Soon, he found a well', 'وَسُرْعَانَ مَا وَجَدَ بِئْرًا') },
    ],
    vocabularyTargets: vocabularyTargetsFor(7),
    assessmentItems: [
      { id: 'moses-a2-c7-quick', learningPointId: 'moses-a2-c7-escape', eligibleStages: ['quick'], exercise: tf(L('Moses left Egypt after escaping from the soldiers.', 'غادر موسى مصر بعد أن هرب من الجنود.'), true, L('The chapter begins the journey with his escape from the soldiers.', 'يبدأ الفصل رحلته بالهروب من الجنود.')) },
      { id: 'moses-a2-c7-knowledge', learningPointId: 'moses-a2-c7-guided', eligibleStages: ['knowledge'], exercise: mc(L('Who guided Moses during the long journey?', 'من هدى موسى أثناء الرحلة الطويلة؟'), { en: ['Allah', 'Pharaoh', 'The magicians'], ar: ['الله', 'فرعون', 'السحرة'] }, 0, L('The chapter says Allah guided him.', 'يقول الفصل إن الله هداه.')) },
      { id: 'moses-a2-c7-review', learningPointId: 'moses-a2-c7-midian', eligibleStages: ['review'], exercise: tf(L('Midian was another place ruled by Pharaoh.', 'كانت مدين مكانًا آخر يحكمه فرعون.'), false, L('The chapter states that Pharaoh was not the ruler there.', 'ينص الفصل على أن فرعون لم يكن الحاكم هناك.')) },
      { id: 'moses-a2-c7-final', learningPointId: 'moses-a2-c7-well', eligibleStages: ['final'], exercise: matching(L('Match the people at the well with what Moses saw.', 'صل من عند البئر بما رآه موسى.'), { en: [['Shepherds', 'watering animals'], ['Two girls', 'sitting far from the water']], ar: [['الرعاة', 'يسقون الحيوانات'], ['الفتاتان', 'تجلسان بعيدًا عن الماء']] }, L('The shepherds were watering animals while the two girls stayed away from the well.', 'كان الرعاة يسقون حيواناتهم بينما بقيت الفتاتان بعيدًا عن البئر.')) },
    ],
    ...guideBundle({
      focus: L('escape, guidance, Midian, and the well scene', 'الهروب والهداية ومدين ومشهد البئر'),
      primaryQuestion: L('Why was Midian different from Egypt for Moses?', 'لماذا كانت مدين مختلفة عن مصر بالنسبة لموسى؟'),
      secondQuestion: L('What did Moses see when he found water?', 'ماذا رأى موسى عندما وجد الماء؟'),
      grammar: L('Use past simple journey verbs: escaped, left, travelled, arrived, found.', 'لاحظ أفعال الرحلة في الماضي: هرب، غادر، سافر، وصل، وجد.'),
      pronunciation: L('Practise escaped, guided, thirsty, Midian, well, and shepherds.', 'تدرّب على نطق هَرَبَ، هَدَاهُ، عَطْشَانَ، مَدْيَنَ، بِئْرًا، ورُعَاةً.'),
      fast: L('Draw a five-step journey line from Egypt to the well in Midian.', 'ارسم خط رحلة من خمس خطوات من مصر إلى بئر مدين.'),
      support: L('Use: “Moses left ___ and arrived at ___.”', 'استخدم: «غادر موسى ___ ووصل إلى ___.»'),
    }),
  },
  {
    chapterId: 8,
    objectives: [
      L('Explain why the sisters waited at the well.', 'يشرح لماذا انتظرت الفتاتان عند البئر.'),
      L('Describe Moses’s help and the effect it had on their return home.', 'يصف مساعدة موسى وأثرها في عودتهما إلى البيت.'),
    ],
    evidencePoints: [
      { id: 'moses-a2-c8-wait', focus: 'cause-result', claim: L('The sisters waited because their father was old and they had to wait for their turn.', 'انتظرت الفتاتان لأن والدهما شيخ كبير وكان عليهما انتظار دورهما.'), evidence: L('We wait for our turn', 'نَنْتَظِرُ دَوْرَنَا') },
      { id: 'moses-a2-c8-need', focus: 'character-action', claim: L('Moses understood that the two sisters needed help.', 'أدرك موسى أن الفتاتين بحاجة إلى المساعدة.'), evidence: L('Moses understood the two sisters needed help', 'أَدْرَكَ مُوسَى أَنَّ الْفَتَاتَيْنِ بِحَاجَةٍ إِلَى الْمُسَاعَدَةِ') },
      { id: 'moses-a2-c8-water', focus: 'character-action', claim: L('Moses took their sheep to the water and gave them a drink.', 'أخذ موسى غنمهما إلى الماء وسقاها.'), evidence: L('He took their sheep to the water and gave them a drink', 'فَأَخَذَ غَنَمَهُمَا إِلَى الْمَاءِ وَسَقَاهَا') },
      { id: 'moses-a2-c8-early', focus: 'cause-result', claim: L('The sisters came home early because Moses helped them water their sheep.', 'عادت الفتاتان إلى البيت مبكرًا لأن موسى ساعدهما في سقي الغنم.'), evidence: L('you came home very early', 'عُدْتُمَا إِلَى الْبَيْتِ مُبَكِّرًا جِدًّا') },
    ],
    vocabularyTargets: vocabularyTargetsFor(8),
    assessmentItems: [
      { id: 'moses-a2-c8-quick', learningPointId: 'moses-a2-c8-wait', eligibleStages: ['quick'], exercise: matching(L('Match the sisters’ situation with the reason given in the chapter.', 'صل حالة الفتاتين بالسبب المذكور في الفصل.'), { en: [['Their father', 'was very old'], ['The sisters', 'waited for their turn']], ar: [['والدهما', 'كان شيخًا كبيرًا'], ['الفتاتان', 'انتظرتا دورهما']] }, L('Their father was very old, so the sisters took the sheep and waited for their turn.', 'كان والدهما شيخًا كبيرًا، فأخذتا الغنم وانتظرتا دورهما.')) },
      { id: 'moses-a2-c8-knowledge', learningPointId: 'moses-a2-c8-need', eligibleStages: ['knowledge'], exercise: mc(L('What did Moses understand about the two sisters?', 'ماذا أدرك موسى عن الفتاتين؟'), { en: ['They needed help', 'They wanted to sell the sheep', 'They were looking for Pharaoh'], ar: ['كانتا بحاجة إلى المساعدة', 'أرادتا بيع الغنم', 'كانتا تبحثان عن فرعون'] }, 0, L('Moses understood that the two sisters needed help.', 'أدرك موسى أن الفتاتين بحاجة إلى المساعدة.')) },
      { id: 'moses-a2-c8-review', learningPointId: 'moses-a2-c8-water', eligibleStages: ['review'], exercise: tf(L('Moses helped the sisters by watering their sheep.', 'ساعد موسى الفتاتين بسقي غنمهما.'), true, L('He took their sheep to the water and gave them a drink.', 'أخذ غنمهما إلى الماء وسقاها.')) },
      { id: 'moses-a2-c8-final', learningPointId: 'moses-a2-c8-early', eligibleStages: ['final'], exercise: fill(L('Complete the father’s surprised question.', 'أكمل سؤال الأب المتعجب.'), L('“You came home very [blank]!”', '«لقد عدتما إلى البيت [blank] جدًا!»'), L('early', 'مُبَكِّرًا'), L('The sisters arrived home earlier than usual after receiving help.', 'عادت الفتاتان إلى البيت مبكرًا بعد المساعدة.')) },
    ],
    ...guideBundle({
      focus: L('waiting, recognizing need, helping, and the sisters’ early return', 'الانتظار وإدراك الحاجة والمساعدة والعودة المبكرة'),
      primaryQuestion: L('Why did the sisters wait instead of going straight to the water?', 'لماذا انتظرت الفتاتان بدل الذهاب مباشرة إلى الماء؟'),
      secondQuestion: L('What changed after Moses helped them?', 'ما الذي تغير بعد أن ساعدهما موسى؟'),
      grammar: L('Practise so for simple result: their father was old, so they took the sheep.', 'تدرّب على «لذلك» لربط السبب بالنتيجة.'),
      pronunciation: L('Practise sisters, turn, help, sheep, and early.', 'تدرّب على نطق الْفَتَاتَيْنِ، دَوْرَنَا، الْمُسَاعَدَةِ، غَنَمَهُمَا، ومُبَكِّرًا.'),
      fast: L('Write the problem and solution in two short pairs of sentences.', 'اكتب المشكلة والحل في زوجين من الجمل القصيرة.'),
      support: L('Use: “The sisters waited because ___.” and “Moses helped by ___.”', 'استخدم: «انتظرت الفتاتان لأن ___.» و«ساعد موسى بأن ___.»'),
    }),
  },
];
