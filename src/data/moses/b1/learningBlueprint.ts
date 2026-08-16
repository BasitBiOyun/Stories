import {
  defineLearningBlueprint,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { mosesB1HighlightTargets } from './source';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (mosesB1HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `moses-b1-c${chapterId}-v${index + 1}`,
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

export const mosesB1LearningBlueprint = defineLearningBlueprint({
  id: 'moses-b1',
  version: '1.0.0',
  storyId: 'moses',
  level: 'B1',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Explain why Pharaoh feared the Children of Israel.', 'يشرح لماذا خاف فرعون من بني إسرائيل.'),
        L('Connect Pharaoh’s fear with his oppression of the Children of Israel.', 'يربط خوف فرعون بظلمه لبني إسرائيل.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c1-fear', focus: 'cause-result', claim: L('Pharaoh feared losing control of his kingdom to the Children of Israel.', 'خاف فرعون أن تخرج المملكة من يده بسبب بني إسرائيل.'), evidence: L('would take control of his kingdom', 'تخرج المملكة من يده') },
        { id: 'moses-b1-c1-oppression', focus: 'cause-result', claim: L('Pharaoh forced the Children of Israel into dangerous, poorly paid work.', 'أجبر فرعون بني إسرائيل على العمل الشاق مقابل أجر قليل أو بلا أجر.'), evidence: L('work under heavy risks for little or no money', 'العمل الشاقّ، مقابل أَجْر قليل أو بلا أجْر') },
        { id: 'moses-b1-c1-belief', focus: 'comparison', claim: L('The Children of Israel believed in Allah and rejected Pharaoh’s claim to be a god.', 'آمن بنو إسرائيل بالله ورفضوا أن يكون فرعون إلهًا.'), evidence: L('did not believe that the Pharaoh was a god', 'لم يؤمنوا بأنّ فرعون إله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'moses-b1-c1-quick', learningPointId: 'moses-b1-c1-fear', eligibleStages: ['quick'], exercise: mc(L('What was Pharaoh afraid the Children of Israel might do?', 'ماذا خاف فرعون أن يفعل بنو إسرائيل؟'), { en: ['Take control of his kingdom', 'Leave Egypt peacefully', 'Become palace servants'], ar: ['أن تخرج المملكة من يده', 'أن يغادروا مصر بسلام', 'أن يصبحوا خدمًا في القصر'] }, 0, L('The chapter connects Pharaoh’s fear with losing control of his kingdom.', 'يربط الفصل خوف فرعون بخروج المملكة من يده.')) },
        { id: 'moses-b1-c1-knowledge', learningPointId: 'moses-b1-c1-oppression', eligibleStages: ['knowledge'], exercise: mc(L('How did Pharaoh’s fear affect the Children of Israel?', 'كيف أثّر خوف فرعون في بني إسرائيل؟'), { en: ['He forced them into dangerous work for little or no money', 'He gave them control of the palace', 'He stopped making them work'], ar: ['أجبرهم على العمل الشاق مقابل أجر قليل أو بلا أجر', 'أعطاهم السيطرة على القصر', 'أوقف عملهم تمامًا'] }, 0, L('Fear of losing power was followed by harsh treatment and forced labor.', 'تبع خوفه من فقدان السلطة ظلمٌ وعملٌ شاق مفروض عليهم.')) },
        { id: 'moses-b1-c1-review', learningPointId: 'moses-b1-c1-belief', eligibleStages: ['review'], exercise: mc(L('Which belief separated the Children of Israel from Pharaoh’s claim?', 'أي معتقد ميّز بني إسرائيل عن ادعاء فرعون؟'), { en: ['They believed in Allah and rejected Pharaoh as a god', 'They believed Pharaoh created the world', 'They worshipped the Egyptian king alone'], ar: ['آمنوا بالله ورفضوا اعتبار فرعون إلهًا', 'اعتقدوا أن فرعون خلق العالم', 'عبدوا ملك مصر وحده'] }, 0, L('The chapter says they believed in one Allah and did not accept Pharaoh as a god.', 'يقول الفصل إنهم آمنوا بالله الواحد ولم يقبلوا فرعون إلهًا.')) },
      ],
      ...G(L('fear, power, oppression, and belief', 'الخوف والسلطة والظلم والإيمان'), L('Why did Pharaoh fear the Children of Israel?', 'لماذا خاف فرعون من بني إسرائيل؟'), L('How did fear of losing power shape Pharaoh’s actions?', 'كيف أثّر خوف فرعون من فقدان السلطة في أفعاله؟'), L('Use because and that is why to connect fear with its consequences.', 'استخدم لأن ولهذا السبب لربط الخوف بنتائجه.'), L('Practise ancestor, harsh, throne, kingdom, and Pharaoh.', 'تدرّب على نطق جدّهم، قاسيًا، عرش، المملكة، وفرعون.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Trace the sequence from Pharaoh’s dream to his violent order.', 'يتتبع التسلسل من حلم فرعون إلى أمره العنيف.'),
        L('Explain how the interpretation of the dream increased danger for newborn boys.', 'يشرح كيف زاد تفسير الحلم الخطر على المواليد الذكور.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c2-dream', focus: 'sequence', claim: L('Pharaoh dreamed of a fire that harmed Egyptian houses but not the Children of Israel.', 'رأى فرعون نارًا أحرقت بيوت المصريين ولم تؤذ بني إسرائيل.'), evidence: L('burnt the houses of the Egyptians, but did not do any harm to the Children of Israel', 'أحْرقت بيوت المصريّين، لكنّها لم تُصِبْ بني إسرائيل بأذَى') },
        { id: 'moses-b1-c2-boy', focus: 'cause-result', claim: L('The advisors said a boy from the Children of Israel would threaten Egypt.', 'قال المستشارون إن صبيًا من بني إسرائيل سيكون سببًا في هلاك المصريين.'), evidence: L('A boy will be born of the Children of Israel', 'سيُولد صبيّ من بني إسرائيل') },
        { id: 'moses-b1-c2-order', focus: 'turning-point', claim: L('Pharaoh responded by ordering the killing of newborn boys from the Children of Israel.', 'رد فرعون بالأمر بقتل المواليد الذكور من بني إسرائيل.'), evidence: L('Kill all the newborn boys of the Children of Israel', 'اُقتُلوا جميع المواليد الذُّكور من بني إسرائيل') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'moses-b1-c2-quick', learningPointId: 'moses-b1-c2-dream', eligibleStages: ['quick'], exercise: matching(L('Match each group with what happened in Pharaoh’s dream.', 'صل كل جماعة بما حدث لها في حلم فرعون.'), { en: [['Egyptian houses', 'were burnt by the fire'], ['Children of Israel', 'were not harmed by the fire']], ar: [['بيوت المصريين', 'أحرقتها النار'], ['بنو إسرائيل', 'لم تصبهم النار بأذى']] }, L('The dream treats the two groups differently.', 'يعرض الحلم مصيرًا مختلفًا للجماعتين.')) },
        { id: 'moses-b1-c2-knowledge', learningPointId: 'moses-b1-c2-boy', eligibleStages: ['knowledge'], exercise: matching(L('Match the interpretation with the group connected to it.', 'صل التفسير بالجماعة المرتبطة به.'), { en: [['A boy would be born', 'from the Children of Israel'], ['Danger was predicted', 'for the Egyptian people']], ar: [['سيولد صبي', 'من بني إسرائيل'], ['تنبؤ بالخطر', 'على الشعب المصري']] }, L('The advisors connected the future boy with the Children of Israel and danger to Egypt.', 'ربط المستشارون الصبي ببني إسرائيل والخطر بالمصريين.')) },
        { id: 'moses-b1-c2-final', learningPointId: 'moses-b1-c2-order', eligibleStages: ['final'], exercise: fill(L('Complete Pharaoh’s order after the dream was interpreted.', 'أكمل أمر فرعون بعد تفسير الحلم.'), L('Pharaoh ordered his soldiers to kill the newborn [blank].', 'أمر فرعون جنوده بقتل المواليد [blank].'), L('boys', 'الذُّكور'), L('The order targeted newborn boys from the Children of Israel.', 'استهدف الأمر المواليد الذكور من بني إسرائيل.')) },
      ],
      ...G(L('dream, interpretation, fear, and violent response', 'الحلم والتفسير والخوف والاستجابة العنيفة'), L('What did Pharaoh see in the dream?', 'ماذا رأى فرعون في حلمه؟'), L('How did the advisors’ interpretation change what Pharaoh did next?', 'كيف غيّر تفسير المستشارين ما فعله فرعون بعد ذلك؟'), L('Use sequence linkers: when, then, after that, as a result.', 'استخدم روابط التسلسل: عندما، ثم، بعد ذلك، ونتيجة لذلك.'), L('Practise advisor, newborn, heartless, frightened, and broke into.', 'تدرّب على نطق مستشار، المواليد، قساة القلوب، خائفة، واقتحم.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Explain how Moses’s mother acted despite fear and sadness.', 'يشرح كيف تصرفت أم موسى رغم الخوف والحزن.'),
        L('Compare Queen Asiye’s character with Pharaoh’s character.', 'يقارن بين شخصية الملكة آسية وشخصية فرعون.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c3-basket', focus: 'sequence', claim: L('Moses’s mother placed him in a basket and put it into the river.', 'وضعت أم موسى طفلها في سلة وأرسلتها في النهر.'), evidence: L('Moses’s mother put the baby Moses in a basket', 'فوضعتْ أم موسى طفلها في سلّة') },
        { id: 'moses-b1-c3-trust', focus: 'inference', claim: L('Although she was worried, Moses’s mother trusted Allah’s care for her child.', 'رغم قلقها، وثقت أم موسى برحمة الله ورعايته لطفلها.'), evidence: L('Allah was kinder to the baby Moses than her', 'عرفت أنّ الله أرحم بموسى الرضيع منها') },
        { id: 'moses-b1-c3-asiye', focus: 'comparison', claim: L('Queen Asiye is presented as different from Pharaoh: kind-hearted and believing in Allah.', 'تُعرض الملكة آسية على أنها مختلفة عن فرعون؛ طيبة القلب وتؤمن بالله.'), evidence: L('was good, kind-hearted, and believed in Allah', 'كانت طيّبة القلب، ورحيمة، وتؤمن بالله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'moses-b1-c3-quick', learningPointId: 'moses-b1-c3-basket', eligibleStages: ['quick'], exercise: tap(L('What did Moses’s mother do with baby Moses?', 'ماذا فعلت أم موسى بالطفل موسى؟'), L('She put him in a basket and placed it in the river.', 'وضعته في سلة وجعلت السلة في النهر.'), L('This action begins the river journey.', 'يبدأ بهذا الفعل انتقال موسى عبر النهر.')) },
        { id: 'moses-b1-c3-review', learningPointId: 'moses-b1-c3-trust', eligibleStages: ['review'], exercise: tf(L('Moses’s mother was worried, but she still believed Allah cared for the baby.', 'كانت أم موسى قلقة، لكنها آمنت أن الله أرحم بالطفل.'), true, L('Her sadness is stated together with her trust in Allah’s mercy.', 'يذكر النص حزنها مع ثقتها برحمة الله.')) },
        { id: 'moses-b1-c3-final', learningPointId: 'moses-b1-c3-asiye', eligibleStages: ['final'], exercise: mc(L('How does the chapter distinguish Queen Asiye from Pharaoh?', 'كيف يميز الفصل الملكة آسية عن فرعون؟'), { en: ['She was kind-hearted and believed in Allah', 'She ordered the newborn boys to be killed', 'She feared losing the kingdom'], ar: ['كانت طيبة القلب وتؤمن بالله', 'أمرت بقتل المواليد الذكور', 'خافت من فقدان المملكة'] }, 0, L('The chapter explicitly says she was different from her husband, kind-hearted, and believing.', 'يقول الفصل صراحة إنها كانت مختلفة عن زوجها وطيبة القلب ومؤمنة بالله.')) },
      ],
      ...G(L('fear, trust, protection, and Queen Asiye’s character', 'الخوف والثقة والحماية وشخصية الملكة آسية'), L('What did Moses’s mother do after receiving guidance?', 'ماذا فعلت أم موسى بعد أن جاءها التوجيه؟'), L('What contrast does the chapter create between Queen Asiye and Pharaoh?', 'ما المقارنة التي يصنعها الفصل بين الملكة آسية وفرعون؟'), L('Use although and but to contrast fear with trust and Pharaoh with Asiye.', 'استخدم رغم ولكن للمقارنة بين الخوف والثقة وبين فرعون وآسية.'), L('Practise shelter, ashore, servants, kind-hearted, and basket.', 'تدرّب على نطق مكان آمن، الشاطئ، خدم، طيبة القلب، وسلة.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Trace how Moses returned to his mother inside the palace.', 'يتتبع كيف عاد موسى إلى أمه داخل القصر.'),
        L('Explain how Moses’s identity shaped his closeness to the Children of Israel.', 'يشرح كيف أثرت هوية موسى في قربه من بني إسرائيل.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c4-nurse', focus: 'sequence', claim: L('Moses’s sister brought their mother to become his nurse in the palace.', 'أحضرت أخت موسى أمه لتكون مرضعته في القصر.'), evidence: L('brought her mother to be Moses’s nurse in the palace', 'أحضرت أمَّها، لتكون مرضِعة موسى في القصر') },
        { id: 'moses-b1-c4-return', focus: 'turning-point', claim: L('Allah returned baby Moses to his own mother.', 'رد الله الطفل موسى إلى أمه.'), evidence: L('Allah sent Moses back to his mother', 'ردّ الله موسى إلى أمه') },
        { id: 'moses-b1-c4-identity', focus: 'motivation', claim: L('Moses felt close to the Children of Israel because his own mother was one of them.', 'شعر موسى بالقرب من بني إسرائيل لأن أمه كانت منهم.'), evidence: L('his mother was one of the Children of Israel', 'كانت أمه من بني إسرائيل') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'moses-b1-c4-quick', learningPointId: 'moses-b1-c4-return', eligibleStages: ['quick'], exercise: tf(L('Baby Moses was returned to his own mother.', 'عاد الطفل موسى إلى أمه الحقيقية.'), true, L('The chapter presents this return as Allah’s protection.', 'يعرض الفصل هذه العودة بوصفها من حماية الله.')) },
        { id: 'moses-b1-c4-knowledge', learningPointId: 'moses-b1-c4-nurse', eligibleStages: ['knowledge'], exercise: tf(L('Moses’s sister helped bring their mother into the palace as his nurse.', 'ساعدت أخت موسى في إحضار أمه إلى القصر لتكون مرضعته.'), true, L('She suggested a good woman and brought their mother.', 'اقترحت امرأة صالحة ثم أحضرت أمها.')) },
        { id: 'moses-b1-c4-final', learningPointId: 'moses-b1-c4-identity', eligibleStages: ['final'], exercise: matching(L('Match Moses’s background with the connection it helped create.', 'صل خلفية موسى بالصلة التي ساعدت على تكوينها.'), { en: [['His mother', 'was one of the Children of Israel'], ['His feeling', 'was closeness to the Children of Israel']], ar: [['أمه', 'كانت من بني إسرائيل'], ['شعوره', 'كان بالقرب من بني إسرائيل']] }, L('The chapter directly links his family origin with this sense of connection.', 'يربط الفصل مباشرة أصل أسرته بهذا الشعور بالقرب.')) },
      ],
      ...G(L('return to his mother, protection, and identity', 'العودة إلى الأم والحماية والهوية'), L('How did Moses’s mother become his nurse?', 'كيف أصبحت أم موسى مرضعته؟'), L('Why did Moses feel close to the Children of Israel as he grew older?', 'لماذا شعر موسى بالقرب من بني إسرائيل عندما كبر؟'), L('Use because to explain relationships between identity and motivation.', 'استخدم لأن لشرح العلاقة بين الهوية والدافع.'), L('Practise nurse, courage, originally, raised, and felt close to.', 'تدرّب على نطق مرضعة، شجاعة، في الأصل، ربته، وقريب من.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Distinguish an accidental action from an intentional one.', 'يميز بين الفعل غير المقصود والفعل المتعمد.'),
        L('Explain Moses’s response to his mistake and what he learned the next day.', 'يشرح استجابة موسى لخطئه وما فهمه في اليوم التالي.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c5-accident', focus: 'turning-point', claim: L('Moses accidentally caused the Egyptian man’s death while trying to help.', 'تسبب موسى في موت الرجل المصري عن غير قصد وهو يحاول المساعدة.'), evidence: L("accidentally caused someone's death", 'فتسبّب في مَصْرَعِهِ عن غير قصدٍ') },
        { id: 'moses-b1-c5-pardon', focus: 'cause-result', claim: L('Moses asked Allah for forgiveness and Allah pardoned him.', 'طلب موسى المغفرة من الله فغفر الله له.'), evidence: L('Allah pardoned him', 'فغفَر الله له') },
        { id: 'moses-b1-c5-quarrelsome', focus: 'character-action', claim: L('The second fight made Moses realize the Israelite was quarrelsome rather than peaceable.', 'جعلت المشاجرة الثانية موسى يدرك أن الرجل كثير الخصام وليس مسالمًا.'), evidence: L('the Israelite was a quarrelsome man, not a peaceable man', 'كثير الخِصام، وليس رجلًا مُسالِمًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'moses-b1-c5-quick', learningPointId: 'moses-b1-c5-accident', eligibleStages: ['quick'], exercise: fill(L('Complete the contrast about Moses’s action.', 'أكمل المقارنة حول فعل موسى.'), L('Moses caused the death [blank], not on purpose.', 'تسبب موسى في الموت [blank]، لا عن قصد.'), L('accidentally', 'عن غير قصد'), L('The chapter makes the lack of intention explicit.', 'يوضح الفصل صراحة أن الفعل لم يكن مقصودًا.')) },
        { id: 'moses-b1-c5-review', learningPointId: 'moses-b1-c5-pardon', eligibleStages: ['review'], exercise: mc(L('What followed Moses’s prayer for forgiveness?', 'ماذا حدث بعد دعاء موسى بالمغفرة؟'), { en: ['Allah pardoned him', 'Pharaoh rewarded him', 'The fight continued for many days'], ar: ['غفر الله له', 'كافأه فرعون', 'استمر القتال أيامًا كثيرة'] }, 0, L('The chapter says Allah pardoned Moses because He is Forgiving and Merciful.', 'يقول الفصل إن الله غفر لموسى لأنه غفور رحيم.')) },
        { id: 'moses-b1-c5-final', learningPointId: 'moses-b1-c5-quarrelsome', eligibleStages: ['final'], exercise: tf(L('After seeing the same man fighting again, Moses understood that he was peaceable.', 'بعد أن رأى الرجل نفسه يتشاجر مرة أخرى، فهم موسى أنه رجل مسالم.'), false, L('Moses understood the man was quarrelsome, not peaceable.', 'فهم موسى أن الرجل كثير الخصام وليس مسالمًا.')) },
      ],
      ...G(L('mistake, intention, repentance, and character judgment', 'الخطأ والنية والتوبة والحكم على السلوك'), L('Why is “accidentally” important in this chapter?', 'لماذا تعد عبارة «عن غير قصد» مهمة في هذا الفصل؟'), L('What changed in Moses’s understanding when he saw the same man fighting again?', 'ما الذي تغير في فهم موسى عندما رأى الرجل نفسه يتشاجر مرة أخرى؟'), L('Practise accidentally / on purpose and past-tense reporting.', 'تدرّب على عن غير قصد / عن قصد وعلى نقل أحداث الماضي.'), L('Practise accidentally, on purpose, pardoned, quarrelsome, and peaceable.', 'تدرّب على نطق عن غير قصد، عن قصد، فغفر، كثير الخصام، ومسالمًا.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Explain why Moses left Egypt and why Midian was safer.', 'يشرح لماذا غادر موسى مصر ولماذا كانت مدين أكثر أمانًا.'),
        L('Identify the role of guidance during Moses’s journey.', 'يحدد دور الهداية في رحلة موسى.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c6-warning', focus: 'cause-result', claim: L('A friend warned Moses that Pharaoh’s soldiers were looking for him.', 'حذّر رجل موسى من أن جنود فرعون يبحثون عنه.'), evidence: L('The Pharaoh’s soldiers are looking for you', 'إنّ جنود فرعون يبحَثون عنك') },
        { id: 'moses-b1-c6-midian', focus: 'inference', claim: L('Midian was safer because Pharaoh did not rule there.', 'كانت مدين أكثر أمانًا لأن فرعون لم يكن يحكمها.'), evidence: L('The Pharaoh was not the ruler in this land', 'لم يكن فرعون هو الحاكم في هذه الأرض') },
        { id: 'moses-b1-c6-guided', focus: 'theme', claim: L('The chapter says Moses was not alone because Allah guided him.', 'يقول الفصل إن موسى لم يكن وحده لأن الله هداه.'), evidence: L('He was not alone as Allah guided him', 'لم يكنْ وحْده، فقدْ هداه الله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'moses-b1-c6-quick', learningPointId: 'moses-b1-c6-warning', eligibleStages: ['quick'], exercise: mc(L('What immediate danger forced Moses to leave the city?', 'ما الخطر المباشر الذي أجبر موسى على مغادرة المدينة؟'), { en: ['Pharaoh’s soldiers were looking for him', 'The Nile had flooded', 'The shepherds had taken his home'], ar: ['كان جنود فرعون يبحثون عنه', 'فاض نهر النيل', 'أخذ الرعاة منزله'] }, 0, L('His friend warned that the soldiers intended to catch him.', 'حذره الرجل من أن الجنود يريدون القبض عليه.')) },
        { id: 'moses-b1-c6-knowledge', learningPointId: 'moses-b1-c6-midian', eligibleStages: ['knowledge'], exercise: mc(L('Which detail made Midian safer for Moses?', 'أي تفصيل جعل مدين أكثر أمانًا لموسى؟'), { en: ['Pharaoh did not rule there', 'It was inside Pharaoh’s palace', 'No people lived there'], ar: ['لم يكن فرعون يحكمها', 'كانت داخل قصر فرعون', 'لم يكن يعيش فيها أحد'] }, 0, L('The chapter directly states that Pharaoh was not the ruler in Midian.', 'يذكر الفصل مباشرة أن فرعون لم يكن حاكمًا في مدين.')) },
        { id: 'moses-b1-c6-review', learningPointId: 'moses-b1-c6-guided', eligibleStages: ['review'], exercise: tf(L('The journey is described as one in which Moses was completely alone without guidance.', 'يصف الفصل رحلة موسى بأنه كان وحيدًا تمامًا بلا هداية.'), false, L('The text says he was not alone because Allah guided him.', 'يقول النص إنه لم يكن وحده لأن الله هداه.')) },
      ],
      ...G(L('escape, safety, and guidance', 'الهروب والأمان والهداية'), L('Why did Moses have to leave Egypt?', 'لماذا اضطر موسى إلى مغادرة مصر؟'), L('Why does the chapter present Midian as a meaningful change in Moses’s situation?', 'لماذا يعرض الفصل مدين بوصفها تغيرًا مهمًا في وضع موسى؟'), L('Use because and therefore to explain escape and safety.', 'استخدم لأن ولذلك لشرح الهروب والأمان.'), L('Practise punishment, escaped, guided, cattle, and Midian.', 'تدرّب على نطق عقوبة، فهرب، هداه، مواشيهم، ومدين.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Explain why the two sisters had to wait at the water.', 'يشرح لماذا اضطرت الأختان إلى الانتظار عند الماء.'),
        L('Explain how Moses’s help changed the sisters’ day.', 'يشرح كيف غيّرت مساعدة موسى يوم الأختين.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c7-wait', focus: 'cause-result', claim: L('The sisters waited because their father was old and there were no young men at home to help.', 'انتظرت الأختان لأن أباهما كان مسنًا ولم يكن في البيت شباب يساعدونهما.'), evidence: L('Our father is very old. He cannot come with us. There are no young men in our house to help us', 'أبونا مُسِنّ جدًّا. لا يستطيع أنْ يأتيَ معَنا. ولا يُوجَد شباب في بيتنا يساعدوننا') },
        { id: 'moses-b1-c7-help', focus: 'character-action', claim: L('Moses noticed their difficulty and watered their sheep for them.', 'لاحظ موسى حاجتهما إلى المساعدة وسقى غنمهما.'), evidence: L('Moses understood that the two sisters needed help', 'فهِم موسى أنّ الأختيْن تحتاجان إلى المساعدة') },
        { id: 'moses-b1-c7-result', focus: 'cause-result', claim: L('Because Moses helped, the sisters returned home early without waiting for the other shepherds to leave.', 'بسبب مساعدة موسى عادت الأختان مبكرًا دون انتظار ذهاب الرعاة الآخرين.'), evidence: L('We did not have to wait until the other shepherds went away', 'فلمْ ننتظِرْ حتى يذهَب الرُّعاة الآخرون') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'moses-b1-c7-quick', learningPointId: 'moses-b1-c7-wait', eligibleStages: ['quick'], exercise: matching(L('Match each family situation with its consequence.', 'صل كل وضع أسري بنتيجته.'), { en: [['Their father was very old', 'he could not come with them'], ['There were no young men at home', 'the sisters had to take the sheep themselves']], ar: [['كان أبوهما مسنًا جدًا', 'لم يستطع أن يأتي معهما'], ['لم يوجد شباب في البيت', 'اضطرت الأختان إلى أخذ الأغنام بأنفسهما']] }, L('The sisters explain both reasons before Moses helps them.', 'تشرح الأختان السببين قبل أن يساعدهما موسى.')) },
        { id: 'moses-b1-c7-knowledge', learningPointId: 'moses-b1-c7-help', eligibleStages: ['knowledge'], exercise: matching(L('Match what Moses noticed with what he did.', 'صل ما لاحظه موسى بما فعله.'), { en: [['The sisters needed help', 'he took their sheep to the spring'], ['The sheep needed water', 'he made them drink']], ar: [['احتاجت الأختان إلى المساعدة', 'أخذ غنمهما إلى البئر'], ['احتاج الغنم إلى الماء', 'سقى الغنم']] }, L('Moses responds directly to the problem he sees.', 'يستجيب موسى مباشرة للمشكلة التي يراها.')) },
        { id: 'moses-b1-c7-final', learningPointId: 'moses-b1-c7-result', eligibleStages: ['final'], exercise: fill(L('Complete the result of Moses’s help.', 'أكمل نتيجة مساعدة موسى.'), L('The sisters returned early because they did not have to [blank] for the other shepherds to leave.', 'عادت الأختان مبكرًا لأنهما لم تضطرا إلى [blank] حتى يذهب الرعاة الآخرون.'), L('wait', 'الانتظار'), L('His help removed the delay at the water.', 'أزالت مساعدتهما التأخير عند الماء.')) },
      ],
      ...G(L('need, patience, helping others, and consequences', 'الحاجة والصبر ومساعدة الآخرين والنتائج'), L('Why did the sisters have to wait?', 'لماذا اضطرت الأختان إلى الانتظار؟'), L('What does the sisters’ early return show about the effect of Moses’s action?', 'ماذا تكشف عودتهما المبكرة عن أثر فعل موسى؟'), L('Use because and so to connect difficulty with help and result.', 'استخدم لأن ولذلك لربط الصعوبة بالمساعدة والنتيجة.'), L('Practise turn, shepherds, messenger, water, and patience.', 'تدرّب على نطق دورنا، الرعاة، رسولًا، الماء، والصبر.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Explain why Moses accepted a new life in Midian.', 'يشرح لماذا قبل موسى حياة جديدة في مدين.'),
        L('Trace the transition from years in Midian to the journey back to Egypt.', 'يتتبع الانتقال من سنوات مدين إلى رحلة العودة إلى مصر.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c8-job', focus: 'motivation', claim: L('Moses accepted the job because he was a stranger and urgently needed work and a home.', 'قبل موسى العمل لأنه كان غريبًا ويحتاج إلى عمل وبيت.'), evidence: L('he was a stranger in Midian and he urgently needed a job and a house', 'لأنه كان غريبًا في مديَن، وكان يحتاج إلى عمل وبيت') },
        { id: 'moses-b1-c8-years', focus: 'sequence', claim: L('After about ten years in Midian, Moses decided to return to Egypt with Allah’s guidance.', 'بعد نحو عشر سنوات في مدين قرر موسى العودة إلى مصر بتوجيه من الله.'), evidence: L('After living in Midian for about ten years', 'بعد أنْ عاش موسى في مدين نحو عشر سنوات') },
        { id: 'moses-b1-c8-fire', focus: 'cause-result', claim: L('During the cold journey, Moses saw a fire and went toward it to get warmth.', 'أثناء الرحلة الباردة رأى موسى نارًا وذهب إليها طلبًا للدفء.'), evidence: L('Moses saw a fire on the hillside', 'رأى موسى نارًا على جانب الجبل') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'moses-b1-c8-quick', learningPointId: 'moses-b1-c8-job', eligibleStages: ['quick'], exercise: fill(L('Complete the reason Moses accepted the offer.', 'أكمل سبب قبول موسى للعرض.'), L('Moses accepted because he was a [blank] in Midian and needed work and a home.', 'قبل موسى لأنه كان [blank] في مدين ويحتاج إلى عمل وبيت.'), L('stranger', 'غريبًا'), L('His situation in Midian explains why the offer mattered.', 'يفسر وضعه في مدين أهمية العرض.')) },
        { id: 'moses-b1-c8-review', learningPointId: 'moses-b1-c8-years', eligibleStages: ['review'], exercise: tf(L('Moses decided to return to Egypt after living in Midian for about ten years.', 'قرر موسى العودة إلى مصر بعد أن عاش في مدين نحو عشر سنوات.'), true, L('The chapter marks this as the transition into the return journey.', 'يقدم الفصل ذلك بوصفه الانتقال إلى رحلة العودة.')) },
        { id: 'moses-b1-c8-final', learningPointId: 'moses-b1-c8-fire', eligibleStages: ['final'], exercise: mc(L('Why did Moses go toward the fire on the hillside?', 'لماذا ذهب موسى نحو النار على جانب الجبل؟'), { en: ['To get something from it so his family could warm themselves', 'To hide from his family', 'To build a new house in Midian'], ar: ['ليأتي بشيء منها كي يستدفئ أهله', 'ليختبئ من أسرته', 'ليبني بيتًا جديدًا في مدين'] }, 0, L('It was dark and cold, and Moses wanted to bring warmth to his family.', 'كان الليل باردًا وأراد موسى أن يأتي لأهله بما يستدفئون به.')) },
      ],
      ...G(L('need, stability, return, and the fire on the journey', 'الحاجة والاستقرار والعودة والنار في الرحلة'), L('Why did Moses accept Şuayb’s offer?', 'لماذا قبل موسى عرض شعيب؟'), L('How does the fire mark a transition from ordinary travel to the next major event?', 'كيف تمثل النار انتقالًا من السفر العادي إلى الحدث الكبير التالي؟'), L('Use after + -ing / بعد أن to organize longer sequences.', 'استخدم after + ing / بعد أن لتنظيم التسلسل الطويل.'), L('Practise offered, stranger, valley, hillside, and guidance.', 'تدرّب على نطق عرض، غريبًا، واديًا، جانب الجبل، والهداية.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Identify the call Moses receives on the mountain.', 'يحدد النداء الذي تلقاه موسى على الجبل.'),
        L('Explain how the chapter moves from signs to prophetic mission.', 'يشرح كيف ينتقل الفصل من الآيات إلى الرسالة النبوية.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c9-chosen', focus: 'turning-point', claim: L('Allah tells Moses that he has been chosen.', 'يخبر الله موسى أنه قد اختاره.'), evidence: L('I chose you', 'لقد اخترتُك') },
        { id: 'moses-b1-c9-staff', focus: 'direct', claim: L('When Moses put down his staff, it turned into a big snake.', 'عندما وضع موسى عصاه تحولت إلى حية كبيرة.'), evidence: L('It turned into a big snake', 'فتحوّلت إلى حيّة كبيرة') },
        { id: 'moses-b1-c9-messenger', focus: 'turning-point', claim: L('After the message from Allah, Moses became a Messenger and headed to Egypt.', 'بعد الوحي صار موسى رسولًا وتوجه إلى مصر.'), evidence: L('Moses became a Messenger of Allah', 'صار موسى رسولًا من رُسل الله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'moses-b1-c9-quick', learningPointId: 'moses-b1-c9-staff', eligibleStages: ['quick'], exercise: tf(L('Moses’s staff turned into a big snake on the mountain.', 'تحولت عصا موسى إلى حية كبيرة على الجبل.'), true, L('The transformation is presented as one of Allah’s signs.', 'يعرض الفصل التحول بوصفه من آيات الله.')) },
        { id: 'moses-b1-c9-knowledge', learningPointId: 'moses-b1-c9-chosen', eligibleStages: ['knowledge'], exercise: fill(L('Complete the statement Allah says to Moses.', 'أكمل العبارة التي قيلت لموسى.'), L('Allah tells Moses: “I [blank] you.”', 'قال الله لموسى: «لقد [blank]ك».'), L('chose', 'اخترتُ'), L('The chapter explicitly marks Moses as chosen.', 'يذكر الفصل صراحة أن موسى قد اختير.')) },
        { id: 'moses-b1-c9-review', learningPointId: 'moses-b1-c9-messenger', eligibleStages: ['review'], exercise: mc(L('What new role is stated after Moses receives the message?', 'ما الدور الجديد المذكور بعد أن تلقى موسى الوحي؟'), { en: ['He became a Messenger of Allah', 'He became Pharaoh’s advisor', 'He became a shepherd in Egypt'], ar: ['صار رسولًا من رسل الله', 'أصبح مستشارًا لفرعون', 'أصبح راعيًا في مصر'] }, 0, L('The chapter connects the revelation with Moses’s mission as Messenger.', 'يربط الفصل الوحي برسالة موسى بوصفه رسولًا.')) },
      ],
      ...G(L('calling, signs, and prophetic mission', 'النداء والآيات والرسالة النبوية'), L('What changes for Moses on the mountain?', 'ما الذي يتغير في حياة موسى على الجبل؟'), L('How does the sign of the staff support the mission that follows?', 'كيف تدعم آية العصا الرسالة التي تليها؟'), L('Use reporting verbs such as told, said, ordered, and chose.', 'استخدم أفعال القول مثل قال وأمر واختار.'), L('Practise staff, signs, guidance, headed to, and Messenger.', 'تدرّب على نطق عصاه، آيات، هداية، توجه، ورسول.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Explain why Harun accompanies Moses to Pharaoh.', 'يشرح دور هارون في مرافقة موسى إلى فرعون.'),
        L('Explain why Moses moves from discussion to displaying signs.', 'يشرح لماذا انتقل موسى من الحوار إلى إظهار الآيات.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c10-harun', focus: 'character-action', claim: L('Moses took his brother Harun with him as a companion to the palace.', 'أخذ موسى أخاه هارون معه إلى القصر.'), evidence: L('took his brother Harun with him as his companion', 'فأخذ موسى (عليه السلام) أخاه هارون معه') },
        { id: 'moses-b1-c10-refusal', focus: 'cause-result', claim: L('Moses realized discussion alone would not work because Pharaoh kept refusing belief.', 'أدرك موسى أن الكلام وحده لن ينفع لأن فرعون استمر في رفض الإيمان.'), evidence: L('logical discussions would not work. The Pharaoh kept refusing to believe in Allah', 'الكلام وحْده لن ينفعَ مع فرعون. فقدْ ظلّ فرعون يرفُض الإيمان بالله') },
        { id: 'moses-b1-c10-purpose', focus: 'cause-result', claim: L('The signs were given to strengthen Moses in confronting Pharaoh.', 'أعطى الله الآيات لموسى ليقويه في مواجهة فرعون.'), evidence: L('in order to help him against the Pharaoh', 'ليُقَوّيَه في مُواجهة فرعون') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'moses-b1-c10-quick', learningPointId: 'moses-b1-c10-harun', eligibleStages: ['quick'], exercise: mc(L('Who accompanied Moses to Pharaoh’s palace?', 'من رافق موسى إلى قصر فرعون؟'), { en: ['His brother Harun', 'The two sisters', 'Moses’s mother'], ar: ['أخوه هارون', 'الأختان', 'أم موسى'] }, 0, L('Harun is named as Moses’s companion in the opening sentence.', 'يذكر هارون بوصفه مرافق موسى في بداية الفصل.')) },
        { id: 'moses-b1-c10-knowledge', learningPointId: 'moses-b1-c10-refusal', eligibleStages: ['knowledge'], exercise: mc(L('Why did Moses move from discussion to showing the signs?', 'لماذا انتقل موسى من الكلام إلى إظهار الآيات؟'), { en: ['Pharaoh kept refusing to believe', 'Harun asked him to leave', 'The advisors had already believed'], ar: ['لأن فرعون ظل يرفض الإيمان', 'لأن هارون طلب منه المغادرة', 'لأن المستشارين آمنوا بالفعل'] }, 0, L('The chapter says Moses realized discussion alone would not work.', 'يقول الفصل إن موسى أدرك أن الكلام وحده لن ينفع.')) },
        { id: 'moses-b1-c10-final', learningPointId: 'moses-b1-c10-purpose', eligibleStages: ['final'], exercise: matching(L('Match the signs with their purpose in this confrontation.', 'صل الآيات بهدفها في هذه المواجهة.'), { en: [['The staff and shining hand', 'signs from Allah'], ['Their purpose', 'to help Moses against Pharaoh']], ar: [['العصا واليد المضيئة', 'آيات من الله'], ['هدفها', 'تقوية موسى في مواجهة فرعون']] }, L('The chapter explains both what the signs are and why they were given.', 'يشرح الفصل ما الآيات ولماذا أُعطيت.')) },
      ],
      ...G(L('companionship, refusal, evidence, and confrontation', 'المرافقة والرفض والدليل والمواجهة'), L('Why does Harun go with Moses?', 'لماذا يذهب هارون مع موسى؟'), L('What does Pharaoh’s repeated refusal change about Moses’s approach?', 'ماذا يغير رفض فرعون المتكرر في طريقة موسى؟'), L('Use after and because to explain a change in strategy.', 'استخدم بعد ولأن لشرح تغير الأسلوب.'), L('Practise companion, throne, display, Harun, and Pharaoh.', 'تدرّب على نطق هارون، عرش، أظهر، مرافق، وفرعون.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Compare the magicians’ performance with Moses’s sign.', 'يقارن بين فعل السحرة وآية موسى.'),
        L('Compare the magicians’ response with Pharaoh’s response.', 'يقارن بين استجابة السحرة واستجابة فرعون.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c11-staff', focus: 'comparison', claim: L('Moses’s staff became a huge snake and swallowed what the magicians produced.', 'تحولت عصا موسى إلى حية عظيمة وابتلعت ما صنعه السحرة.'), evidence: L('his staff ate up all the snakes of the magicians', 'اِبْتَلَعَتْ عصا موسى كلّ ما صنعه السحَرة') },
        { id: 'moses-b1-c11-belief', focus: 'turning-point', claim: L('After witnessing the miracle, the magicians declared belief in the Lord of Moses and Harun.', 'بعد رؤية المعجزة أعلن السحرة إيمانهم برب موسى وهارون.'), evidence: L('We believe in the Lord of Moses and Harun', 'آمنّا بربّ موسى وهارون') },
        { id: 'moses-b1-c11-pharaoh', focus: 'comparison', claim: L('Pharaoh still refused belief because he was arrogant.', 'ظل فرعون يرفض الإيمان بسبب تكبره.'), evidence: L('The king still refused to believe in Allah, because he was arrogant', 'ظلّ فرعون يرفُض الإيمان بالله؛ لأنه كان متكبِّرًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'moses-b1-c11-quick', learningPointId: 'moses-b1-c11-staff', eligibleStages: ['quick'], exercise: matching(L('Match each side with what happened on the ground.', 'صل كل طرف بما حدث على الأرض.'), { en: [['The magicians’ sticks and ropes', 'looked like snakes'], ['Moses’s staff', 'became a huge snake and swallowed them']], ar: [['عصي السحرة وحبالهم', 'بدت كأنها أفاعي'], ['عصا موسى', 'تحولت إلى حية عظيمة وابتلعت ما صنعوه']] }, L('The chapter contrasts appearance produced by the magicians with Moses’s sign.', 'يقارن الفصل بين ما بدا من سحرهم وبين آية موسى.')) },
        { id: 'moses-b1-c11-review', learningPointId: 'moses-b1-c11-belief', eligibleStages: ['review'], exercise: tf(L('The magicians declared belief after witnessing Moses’s miracle.', 'أعلن السحرة الإيمان بعد أن رأوا معجزة موسى.'), true, L('Their response changes immediately after the miracle.', 'تتغير استجابتهم مباشرة بعد المعجزة.')) },
        { id: 'moses-b1-c11-final', learningPointId: 'moses-b1-c11-pharaoh', eligibleStages: ['final'], exercise: tf(L('Pharaoh’s response changed in the same way as the magicians’ response.', 'تغير رد فرعون بالطريقة نفسها التي تغير بها رد السحرة.'), false, L('The magicians believed, while Pharaoh still refused because of arrogance.', 'آمن السحرة بينما استمر فرعون في الرفض بسبب الكبر.')) },
      ],
      ...G(L('miracle, recognition, belief, and arrogance', 'المعجزة والإدراك والإيمان والكبر'), L('What made the magicians change their response?', 'ما الذي جعل السحرة يغيرون استجابتهم؟'), L('Why is Pharaoh’s response important when compared with the magicians?', 'لماذا تعد استجابة فرعون مهمة عند مقارنتها بالسحرة؟'), L('Use while and whereas for contrasting responses.', 'استخدم بينما في المقارنة بين الاستجابات.'), L('Practise made fun of, witnessed, arrogant, trouble, and staff.', 'تدرّب على نطق سخروا، رأى السحرة، متكبرًا، إيذاء، والعصا.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Explain why the departure from Egypt had to be secret and at night.', 'يشرح لماذا كان الخروج من مصر سرًا وفي الليل.'),
        L('Compare the people’s panic with Moses’s trust in Allah.', 'يقارن بين خوف القوم وثقة موسى بالله.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c12-secret', focus: 'sequence', claim: L('Moses told his people to leave Egypt at night and keep the plan secret.', 'أمر موسى قومه بالخروج من مصر ليلًا وحفظ الأمر سرًا.'), evidence: L('you must keep it secret. Nobody should see us. We will leave at night', 'عليكم أنْ تحفَظوا الأمر سرًّا. لا ينبغي أنْ يرانا أحد. سنخرُج في الليل') },
        { id: 'moses-b1-c12-slow', focus: 'cause-result', claim: L('The caravan moved slowly because many children and old people could not walk fast.', 'تحركت القافلة ببطء لأن الأطفال وكبار السن لم يستطيعوا المشي بسرعة.'), evidence: L('That’s why the caravan moved slowly', 'لذلك كانت القافلة تسِير ببُطْءٍ') },
        { id: 'moses-b1-c12-trust', focus: 'comparison', claim: L('The people panicked, but Moses told them Allah was with them and would show the way to safety.', 'خاف القوم بشدة، لكن موسى طمأنهم بأن الله معهم وسيريهم طريق النجاة.'), evidence: L('His people panicked. But Moses (pbuh) said: “Calm down! Allah is with us and will show us the way to safety.”', 'فخاف قومه خوفًا شديدًا. لكنّ موسى (عليه السلام) قال: "اِهْدَؤُوا! إنّ الله معَنا، وسيُرينا طريق النجاة"') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'moses-b1-c12-quick', learningPointId: 'moses-b1-c12-secret', eligibleStages: ['quick'], exercise: tap(L('How were Moses’s people told to leave Egypt?', 'كيف طُلب من قوم موسى أن يغادروا مصر؟'), L('Secretly, at night, without being seen.', 'سرًا وفي الليل من دون أن يراهم أحد.'), L('The chapter gives all three details in Moses’s instructions.', 'يذكر الفصل التفاصيل الثلاثة في تعليمات موسى.')) },
        { id: 'moses-b1-c12-knowledge', learningPointId: 'moses-b1-c12-slow', eligibleStages: ['knowledge'], exercise: tf(L('The caravan moved slowly because many children and old people tired quickly.', 'تحركت القافلة ببطء لأن الأطفال وكبار السن تعبوا سريعًا.'), true, L('Their walking speed is given as the reason for the slow caravan.', 'يقدم بطء مشيهم سببًا لبطء القافلة.')) },
        { id: 'moses-b1-c12-final', learningPointId: 'moses-b1-c12-trust', eligibleStages: ['final'], exercise: mc(L('What contrast appears when Pharaoh’s army approaches?', 'ما المقارنة التي تظهر عندما يقترب جيش فرعون؟'), { en: ['The people panic while Moses trusts Allah’s guidance', 'Moses panics while the people remain calm', 'Everyone believes Pharaoh will protect them'], ar: ['يخاف القوم بينما يثق موسى بهداية الله', 'يخاف موسى بينما يبقى القوم هادئين', 'يعتقد الجميع أن فرعون سيحميهم'] }, 0, L('The chapter places the people’s panic beside Moses’s reassurance that Allah is with them.', 'يضع الفصل خوف القوم إلى جانب طمأنة موسى بأن الله معهم.')) },
      ],
      ...G(L('secret departure, vulnerability, fear, and trust', 'الخروج السري والضعف والخوف والثقة'), L('Why did the journey have to begin secretly at night?', 'لماذا كان يجب أن تبدأ الرحلة سرًا في الليل؟'), L('How does Moses respond differently from the people when danger gets closer?', 'كيف يستجيب موسى بصورة مختلفة عن القوم عندما يقترب الخطر؟'), L('Use but and while to express contrast under pressure.', 'استخدم لكن وبينما للتعبير عن المقارنة وقت الخطر.'), L('Practise caravan, catch up with, panicked, secret, and safety.', 'تدرّب على نطق القافلة، لحق بهم، فخاف، سرًا، والنجاة.')),
    },
    {
      chapterId: 13,
      objectives: [
        L('Trace the final escape through the sea and Pharaoh’s defeat.', 'يتتبع النجاة الأخيرة عبر البحر وهزيمة فرعون.'),
        L('Explain the final lessons about power, freedom, and guidance.', 'يشرح الدروس الأخيرة عن القوة والحرية والهداية.'),
      ],
      evidencePoints: [
        { id: 'moses-b1-c13-sea', focus: 'turning-point', claim: L('The sea parted and Allah made a path for Moses and his people.', 'انشق البحر وجعل الله طريقًا لموسى وقومه.'), evidence: L('The sea parted', 'انشقّ البحر') },
        { id: 'moses-b1-c13-pharaoh', focus: 'character-action', claim: L('Even at the sea, Pharaoh claimed the opening happened by his own order.', 'حتى عند البحر ادعى فرعون أن انشقاقه حدث بأمره.'), evidence: L('The sea opened at my order', 'لقد انْشَقّ البحر بأمري') },
        { id: 'moses-b1-c13-lesson', focus: 'theme', claim: L('The final lesson rejects human enslavement and states that true power belongs to Allah.', 'يرفض الدرس الأخير استعباد الإنسان ويؤكد أن الملك الحقيقي لله وحده.'), evidence: L('no one can enslave another human being', 'الإنسان ليس ملكًا لأحد') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'moses-b1-c13-quick', learningPointId: 'moses-b1-c13-sea', eligibleStages: ['quick'], exercise: fill(L('Complete the turning point at the Red Sea.', 'أكمل نقطة التحول عند البحر الأحمر.'), L('The sea [blank], creating a path for Moses and his people.', '[blank] البحر، فظهر طريق لموسى وقومه.'), L('parted', 'انشقّ'), L('The opening of the sea creates the escape route.', 'انشقاق البحر يصنع طريق النجاة.')) },
        { id: 'moses-b1-c13-review', learningPointId: 'moses-b1-c13-pharaoh', eligibleStages: ['review'], exercise: mc(L('What does Pharaoh claim after seeing the path in the sea?', 'ماذا يدعي فرعون بعد أن يرى الطريق في البحر؟'), { en: ['The sea opened at his order', 'Moses created the sea', 'His soldiers asked the sea to close'], ar: ['أن البحر انشق بأمره', 'أن موسى خلق البحر', 'أن جنوده أمروا البحر أن ينطبق'] }, 0, L('His statement shows that he still attributes the event to his own power.', 'يظهر قوله أنه ما زال ينسب الحدث إلى قوته.')) },
        { id: 'moses-b1-c13-final', learningPointId: 'moses-b1-c13-lesson', eligibleStages: ['final'], exercise: fill(L('Complete one of the final moral lessons.', 'أكمل أحد الدروس الأخلاقية الأخيرة.'), L('No one can [blank] another human being.', 'الإنسان ليس [blank] لأحد.'), L('enslave', 'ملكًا'), L('The closing paragraph rejects one human being owning another.', 'ترفض الفقرة الأخيرة أن يكون إنسان ملكًا لإنسان آخر.')) },
      ],
      ...G(L('deliverance, arrogance, freedom, and true power', 'النجاة والكبر والحرية والقوة الحقيقية'), L('How does the sea become a path for Moses and his people?', 'كيف يصبح البحر طريقًا لموسى وقومه؟'), L('How do Pharaoh’s final claim and the chapter’s final lesson point in opposite directions?', 'كيف يسير ادعاء فرعون الأخير والدرس النهائي للفصل في اتجاهين متعاكسين؟'), L('Use although, but, and finally to organize the ending and its lesson.', 'استخدم رغم ولكن وأخيرًا لتنظيم الخاتمة ودرسها.'), L('Practise trapped, parted, midway, enslave, and guidance.', 'تدرّب على نطق محاصرين، انشق، وسط البحر، الاستعباد، والهداية.')),
    },
  ],
  wholeBook: {
    knowledgeCheck: {
      title: L('B1 Knowledge Check: Moses', 'اختبار المعرفة B1: موسى'),
      content: L('Answer eight distinct questions about causes, choices, relationships, and turning points.', 'أجب عن ثمانية أسئلة مختلفة حول الأسباب والاختيارات والعلاقات ونقاط التحول.'),
    },
    vocabularyChallenge: {
      title: L('Vocabulary in Context', 'المفردات في السياق'),
      content: L('Review ten bilingual Word Notes selected from the final chapter targets.', 'راجع عشر كلمات وعبارات ثنائية اللغة من أهداف الفصول النهائية.'),
    },
    review: {
      title: L('B1 Review: Moses', 'مراجعة B1: موسى'),
      content: L('Review eight different learning points without repeating Quick or Knowledge items.', 'راجع ثماني نقاط تعلم مختلفة دون تكرار التحدي السريع أو اختبار المعرفة.'),
    },
    finalChallenge: {
      title: L('B1 Final Challenge: Moses', 'التحدي النهائي B1: موسى'),
      content: L('Complete ten evidence-based activities from across the whole story.', 'أكمل عشرة أنشطة قائمة على الدليل من أنحاء القصة كلها.'),
    },
    glossary: [
      { title: L('Word Notes: Chapters 1–7', 'ملاحظات المفردات: الفصول 1–7') },
      { title: L('Word Notes: Chapters 8–13', 'ملاحظات المفردات: الفصول 8–13') },
    ],
  },
});
