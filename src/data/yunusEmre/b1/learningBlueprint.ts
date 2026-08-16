import {
  defineLearningBlueprint,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { yunusEmreB1HighlightTargets } from './source';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (yunusEmreB1HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `yunus-b1-c${chapterId}-v${index + 1}`,
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

export const yunusEmreB1LearningBlueprint = defineLearningBlueprint({
  id: 'yunus-emre-b1',
  version: '1.0.0',
  storyId: 'yunusEmre',
  level: 'B1',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Explain how the chapter defines a Sûfî and Sûfî life.', 'يشرح كيف يعرّف الفصل الصوفي والحياة الصوفية.'),
        L('Identify Yunus Emre’s contribution to simple literary Turkish.', 'يحدد إسهام يونس إمره في اللغة التركية الأدبية البسيطة.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c1-sufi', focus: 'direct', claim: L('A Sûfî seeks closeness to Allah through Islamic mysticism.', 'يسعى الصوفي إلى التقرب من الله باتباع التصوف الإسلامي.'), evidence: L('aims to get closer to Allah by following Islamic mysticism', 'يَسْعَى إِلَى التَّقَرُّبِ مِنَ اللهِ بِاتِّبَاعِ التَّصَوُّفِ الْإِسْلَامِيِّ') },
        { id: 'yunus-b1-c1-morality', focus: 'main-idea', claim: L('The chapter connects Sûfî life with patience, generosity, kindness, and less attachment to worldly status.', 'يربط الفصل الحياة الصوفية بالصبر والسخاء واللطف وعدم التعلق بالمكانة الدنيوية.'), evidence: L('being patient in times of need, giving generously without expecting anything in return', 'وَالتَّحَلِّي بِالصَّبْرِ فِي أَوْقَاتِ الشِّدَّةِ، وَالْعَطَاءِ بِسَخَاءٍ دُونَ انْتِظَارِ مُقَابِلٍ') },
        { id: 'yunus-b1-c1-language', focus: 'turning-point', claim: L('Yunus Emre was among the first to use simple Turkish for poetry.', 'كان يونس إمره من أوائل من استخدموا التركية البسيطة في الشعر.'), evidence: L('one of the first to write and say poems in simple Turkish', 'مِنْ أَوَائِلِ مَنْ كَتَبُوا الْقَصَائِدَ وَقَالُوهَا بِاللُّغَةِ التُّرْكِيَّةِ الْبَسِيطَةِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'yunus-b1-c1-quick', learningPointId: 'yunus-b1-c1-sufi', eligibleStages: ['quick'], exercise: mc(L('According to the chapter, what is the central aim of a Sûfî?', 'وفقًا للفصل، ما الهدف المركزي للصوفي؟'), { en: ['To get closer to Allah', 'To gain political power', 'To collect worldly wealth'], ar: ['التقرب من الله', 'الحصول على سلطة سياسية', 'جمع الثروة الدنيوية'] }, 0, L('The chapter directly defines a Sûfî through the aim of closeness to Allah.', 'يعرّف الفصل الصوفي مباشرة من خلال هدف التقرب من الله.')) },
        { id: 'yunus-b1-c1-knowledge', learningPointId: 'yunus-b1-c1-morality', eligibleStages: ['knowledge'], exercise: mc(L('Which pair best matches the moral principles described in the chapter?', 'أي زوج يطابق المبادئ الأخلاقية المذكورة في الفصل؟'), { en: ['Patience and generosity', 'Fame and status', 'Bias and revenge'], ar: ['الصبر والسخاء', 'الشهرة والمكانة', 'التحيز والانتقام'] }, 0, L('Patience and generous giving are explicitly listed among the principles.', 'يذكر النص الصبر والعطاء بسخاء صراحة ضمن المبادئ.')) },
        { id: 'yunus-b1-c1-review', learningPointId: 'yunus-b1-c1-language', eligibleStages: ['review'], exercise: mc(L('What literary contribution does the chapter connect with Yunus Emre?', 'ما الإسهام الأدبي الذي يربطه الفصل بيونس إمره؟'), { en: ['Using simple Turkish in poetry', 'Writing only in Persian', 'Ending Turkish poetry'], ar: ['استخدام التركية البسيطة في الشعر', 'الكتابة بالفارسية فقط', 'إنهاء الشعر التركي'] }, 0, L('The chapter says he was among the first to write and say poems in simple Turkish.', 'يقول الفصل إنه كان من أوائل من كتبوا القصائد وقالوها بالتركية البسيطة.')) },
      ],
      ...G(L('Sûfî identity, moral conduct, and simple Turkish', 'الهوية الصوفية والسلوك الأخلاقي والتركية البسيطة'), L('How does the chapter define a Sûfî?', 'كيف يعرّف الفصل الصوفي؟'), L('How do Yunus Emre’s moral and literary qualities appear together in this chapter?', 'كيف تظهر الصفات الأخلاقية والأدبية ليونس إمره معًا في هذا الفصل؟'), L('Use relative clauses with who and which to define people and ideas.', 'استخدم الجمل الموصولة لتعريف الأشخاص والأفكار.'), L('Practise Sûfî, mysticism, morality, literary, and biases.', 'تدرّب على نطق التصوف، الأخلاق، أدبية، وتحيز.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain why Yunus Emre’s language was accessible.', 'يشرح لماذا كانت لغة يونس إمره سهلة الوصول إلى الناس.'),
        L('Identify the two educational settings mentioned in the chapter.', 'يحدد نوعي البيئة التعليمية المذكورين في الفصل.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c2-style', focus: 'cause-result', claim: L('His works became popular because they combined literary quality with simple language.', 'حظيت أعماله بالشعبية لأنها جمعت الجودة الأدبية واللغة البسيطة.'), evidence: L('combine great literary quality with simple language', 'تَجْمَعُ بَيْنَ الْجَوْدَةِ الْأَدَبِيَّةِ الْعَالِيَةِ وَاللُّغَةِ الْبَسِيطَةِ') },
        { id: 'yunus-b1-c2-dates', focus: 'direct', claim: L('The chapter places his life roughly between 1240–1241 and 1320–1321.', 'يضع الفصل حياته تقريبًا بين 1240–1241 و1320–1321.'), evidence: L('born around 1240–1241 and died around 1320–1321', 'وُلِدَ حَوَالَيْ عَام 1240–1241 وَتُوُفِّيَ حَوَالَيْ عَام 1320–1321') },
        { id: 'yunus-b1-c2-tekke', focus: 'comparison', claim: L('Besides madrasa learning, he studied Allah’s love and morals at a tekke.', 'إلى جانب تعليم المدرسة، درس محبة الله والأخلاق في التكية.'), evidence: L('he also studied Allah’s love and morals at the tekke', 'دَرَسَ أَيْضًا مَحَبَّةَ اللَّهِ وَالْأَخْلَاقَ فِي التَّكِيَّةِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'yunus-b1-c2-quick', learningPointId: 'yunus-b1-c2-style', eligibleStages: ['quick'], exercise: matching(L('Match the feature of Yunus Emre’s works with its result.', 'صل سمة أعمال يونس إمره بنتيجتها.'), { en: [['Simple language', 'helps people understand easily'], ['Literary quality', 'is combined with accessible expression']], ar: [['اللغة البسيطة', 'تساعد الناس على الفهم بسهولة'], ['الجودة الأدبية', 'تجتمع مع التعبير السهل']] }, L('The chapter links popularity to both literary quality and understandable language.', 'يربط الفصل الشعبية بالجودة الأدبية واللغة المفهومة معًا.')) },
        { id: 'yunus-b1-c2-knowledge', learningPointId: 'yunus-b1-c2-dates', eligibleStages: ['knowledge'], exercise: tf(L('The chapter dates Yunus Emre’s life approximately from 1240–1241 to 1320–1321.', 'يؤرخ الفصل حياة يونس إمره تقريبًا من 1240–1241 إلى 1320–1321.'), true, L('Those approximate birth and death dates are stated in the chapter.', 'يذكر الفصل هذين التاريخين التقريبيين للميلاد والوفاة.')) },
        { id: 'yunus-b1-c2-final', learningPointId: 'yunus-b1-c2-tekke', eligibleStages: ['final'], exercise: fill(L('Complete the place where Yunus studied Allah’s love and morals.', 'أكمل اسم المكان الذي درس فيه يونس محبة الله والأخلاق.'), L('He studied Allah’s love and morals at the [blank].', 'درس محبة الله والأخلاق في [blank].'), L('tekke', 'التكية'), L('The chapter names the tekke as the place of this Sûfî education.', 'يسمي الفصل التكية مكانًا لهذه التربية الصوفية.')) },
      ],
      ...G(L('accessible language and formal/spiritual education', 'اللغة السهلة والتعليم الرسمي والروحي'), L('Why were his works easy for people to understand?', 'لماذا كانت أعماله سهلة الفهم للناس؟'), L('What does the chapter suggest by presenting madrasa and tekke education together?', 'ماذا يوضح الفصل بعرض تعليم المدرسة والتكية معًا؟'), L('Use because, while, and also to connect reasons and two kinds of education.', 'استخدم لأن وبينما وأيضًا لربط الأسباب ونوعي التعليم.'), L('Practise plain, era, madrasa, tekke, sheikh, and literary.', 'تدرّب على نطق بسيطة، العصر، المدرسة، التكية، الشيخ، وأدبية.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Describe the social and artistic roles of tekkes.', 'يصف الأدوار الاجتماعية والفنية للتكايا.'),
        L('Connect Yunus Emre’s training with the difficult Anatolian context.', 'يربط تدريب يونس إمره بالسياق الأناضولي الصعب.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c3-community', focus: 'main-idea', claim: L('Tekkes were community organizations that helped people and brought them together.', 'كانت التكايا مؤسسات اجتماعية تساعد الناس وتجمعهم.'), evidence: L('important community organizations that helped people and brought them together', 'مُؤَسَّسَاتٍ اجْتِمَاعِيَّةً مُهِمَّةً تُسَاعِدُ النَّاسَ وَتَجْمَعُهُمْ') },
        { id: 'yunus-b1-c3-poetry', focus: 'character-action', claim: L('Tekkes supported fine arts, especially poetry, and Yunus trained under Taptuk Emre.', 'دعمت التكايا الفنون الجميلة وخاصة الشعر، وتدرّب يونس على يد تابتوك إمره.'), evidence: L('trained under his spiritual tutor, Taptuk Emre', 'تَلَقَّى تَدْرِيبَهُ عَلَى يَدِ مُرْشِدِهِ الرُّوحِيِّ، تَابْتُوك إِمْرَه') },
        { id: 'yunus-b1-c3-context', focus: 'cause-result', claim: L('Babai revolts and Mongol invasion contributed to serious problems in Anatolia.', 'أسهمت ثورات البابائيين والغزو المغولي في مشكلات خطيرة في الأناضول.'), evidence: L('Anatolia faced serious political, economic, and social problems', 'وَاجَهَتِ الْأَنَاضُولُ مُشْكِلَاتٍ سِيَاسِيَّةً وَاقْتِصَادِيَّةً وَاجْتِمَاعِيَّةً خَطِيرَةً') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'yunus-b1-c3-quick', learningPointId: 'yunus-b1-c3-community', eligibleStages: ['quick'], exercise: fill(L('Complete the social role of tekkes.', 'أكمل الدور الاجتماعي للتكايا.'), L('Tekkes helped people and brought them [blank].', 'كانت التكايا تساعد الناس و[blank].'), L('together', 'تجمعهم'), L('The chapter presents tekkes as community organizations as well as training places.', 'يعرض الفصل التكايا كمؤسسات اجتماعية إلى جانب كونها أماكن للتدريب.')) },
        { id: 'yunus-b1-c3-review', learningPointId: 'yunus-b1-c3-poetry', eligibleStages: ['review'], exercise: tf(L('The chapter says Yunus Emre trained under Taptuk Emre.', 'يقول الفصل إن يونس إمره تدرّب على يد تابتوك إمره.'), true, L('Taptuk Emre is named as Yunus Emre’s spiritual tutor.', 'يذكر تابتوك إمره بوصفه المرشد الروحي ليونس إمره.')) },
        { id: 'yunus-b1-c3-final', learningPointId: 'yunus-b1-c3-context', eligibleStages: ['final'], exercise: mc(L('Which statement best describes Anatolia in the historical context of this chapter?', 'أي عبارة تصف الأناضول في السياق التاريخي لهذا الفصل؟'), { en: ['It faced serious political, economic, and social problems', 'It had no major political problems', 'It was isolated from Mongol pressure'], ar: ['واجهت مشكلات سياسية واقتصادية واجتماعية خطيرة', 'لم تواجه مشكلات سياسية كبيرة', 'كانت بعيدة عن ضغط المغول'] }, 0, L('The chapter directly describes serious problems across political, economic, and social life.', 'يصف الفصل مباشرة مشكلات خطيرة في الحياة السياسية والاقتصادية والاجتماعية.')) },
      ],
      ...G(L('tekkes, poetry, training, and historical pressure', 'التكايا والشعر والتدريب والضغط التاريخي'), L('What roles did tekkes have besides Sûfî training?', 'ما الأدوار التي كانت للتكايا إلى جانب التدريب الصوفي؟'), L('How does the difficult historical setting help explain the importance of tekkes?', 'كيف يساعد السياق التاريخي الصعب على فهم أهمية التكايا؟'), L('Use not only … but also and because of to connect multiple roles and causes.', 'استخدم ليس فقط... بل أيضًا وبسبب لربط الأدوار والأسباب.'), L('Practise tekke, fine arts, revolts, defeat, Taptuk Emre, and Anatolia.', 'تدرّب على نطق التكايا، الفنون الجميلة، ثورات، هزيمة، تابتوك إمره، والأناضول.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Compare strong and declining periods of Seljuk rule.', 'يقارن بين فترتي القوة والتراجع في الحكم السلجوقي.'),
        L('Explain how governance and migration affected social stability.', 'يشرح كيف أثرت الإدارة والهجرة في الاستقرار الاجتماعي.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c4-alaeddin', focus: 'comparison', claim: L('Alaeddin I’s rule is presented as the Seljuks’ most powerful and brilliant period.', 'يُعرض عهد علاء الدين الأول بوصفه أقوى وألمع فترة للسلاجقة.'), evidence: L('most powerful and brilliant period of the Seljuks', 'أَقْوَى وَأَلْمَعَ فَتْرَةٍ فِي تَارِيخِ السَّلَاجِقَةِ') },
        { id: 'yunus-b1-c4-decline', focus: 'cause-result', claim: L('Poor governance under Giyaseddin Keyhüsrev II led the economic and social structure to decline.', 'أدى سوء الإدارة في عهد غياث الدين كيخسرو الثاني إلى تراجع البنية الاقتصادية والاجتماعية.'), evidence: L('the Seljuk economic and social structure began to decline', 'بَدَأَتِ الْبِنْيَةُ الِاقْتِصَادِيَّةُ وَالِاجْتِمَاعِيَّةُ لِلسَّلَاجِقَةِ فِي التَّرَاجُعِ') },
        { id: 'yunus-b1-c4-chaos', focus: 'cause-result', claim: L('Failure to manage the changing population worsened social and economic chaos.', 'أدى الفشل في إدارة الوضع السكاني المتغير إلى تفاقم الفوضى الاجتماعية والاقتصادية.'), evidence: L('failure to manage this situation worsened the social and economic chaos', 'أَدَّى فَشَلُ غِيَاثِ الدِّينِ كَيْخُسْرَوْ الثَّانِي فِي إِدَارَةِ هَذَا الْوَضْعِ إِلَى تَفَاقُمِ الْفَوْضَى الِاجْتِمَاعِيَّةِ وَالِاقْتِصَادِيَّةِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'yunus-b1-c4-quick', learningPointId: 'yunus-b1-c4-alaeddin', eligibleStages: ['quick'], exercise: tf(L('The chapter describes Alaeddin I’s rule as a powerful and brilliant Seljuk period.', 'يصف الفصل عهد علاء الدين الأول بأنه فترة قوية ولامعة للسلاجقة.'), true, L('The chapter explicitly calls this the most powerful and brilliant period.', 'يسمي الفصل هذه الفترة صراحة أقوى وألمع فترة.')) },
        { id: 'yunus-b1-c4-knowledge', learningPointId: 'yunus-b1-c4-decline', eligibleStages: ['knowledge'], exercise: mc(L('What change followed poor governance under Giyaseddin Keyhüsrev II?', 'ما التغير الذي أعقب سوء الإدارة في عهد غياث الدين كيخسرو الثاني؟'), { en: ['Economic and social decline', 'A new golden age', 'The end of migration'], ar: ['تراجع اقتصادي واجتماعي', 'عصر ذهبي جديد', 'نهاية الهجرة'] }, 0, L('The chapter directly links poor governance with decline in the Seljuk economic and social structure.', 'يربط الفصل مباشرة سوء الإدارة بتراجع البنية الاقتصادية والاجتماعية.')) },
        { id: 'yunus-b1-c4-final', learningPointId: 'yunus-b1-c4-chaos', eligibleStages: ['final'], exercise: matching(L('Match the cause with the result described in the chapter.', 'صل السبب بالنتيجة المذكورة في الفصل.'), { en: [['Failure to manage the situation', 'worsened social and economic chaos'], ['Large migration to Anatolia', 'changed local life']], ar: [['الفشل في إدارة الوضع', 'فاقم الفوضى الاجتماعية والاقتصادية'], ['الهجرة الكبيرة إلى الأناضول', 'غيّرت حياة السكان المحليين']] }, L('The chapter connects management failure and migration with worsening instability.', 'يربط الفصل فشل الإدارة والهجرة بتزايد عدم الاستقرار.')) },
      ],
      ...G(L('Seljuk strength, governance, migration, and decline', 'قوة السلاجقة والإدارة والهجرة والتراجع'), L('How does the chapter contrast Alaeddin I with his successor?', 'كيف يقارن الفصل بين علاء الدين الأول وخليفته؟'), L('Which causes does the chapter give for growing instability?', 'ما الأسباب التي يذكرها الفصل لتزايد عدم الاستقرار؟'), L('Use whereas, however, because of, and led to for historical contrast and causation.', 'استخدم بينما ومع ذلك وبسبب وأدى إلى للمقارنة والسببية التاريخية.'), L('Practise recited, verses, governance, decline, migration, and navy.', 'تدرّب على نطق ألقى، أبياته، الإدارة، التراجع، الهجرة، وأسطول.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Trace the sequence from Turkmen revolt to the Battle of Kösedağ.', 'يتتبع التسلسل من تمرد التركمان إلى معركة كوسه داغ.'),
        L('Explain the immediate destruction after the Mongol victory.', 'يشرح الدمار المباشر بعد انتصار المغول.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c5-revolt', focus: 'cause-result', claim: L('Economic and social problems pushed Turkmen groups to seek a way out and revolt.', 'دفعت المشكلات الاقتصادية والاجتماعية التركمان إلى البحث عن مخرج والتمرد.'), evidence: L('Because of many economic and social problems, the Turkmen people were looking for a way out and started a revolt', 'بِسَبَبِ مَشْكِلَاتٍ اقْتِصَادِيَّةٍ وَاجْتِمَاعِيَّةٍ كَثِيرَةٍ، كَانَ التُّرْكْمَانُ يَبْحَثُونَ عَنْ مَخْرَجٍ، فَبَدَأُوا تَمَرُّدًا') },
        { id: 'yunus-b1-c5-tactic', focus: 'sequence', claim: L('The Mongols used a false-retreat and circling tactic at Kösedağ.', 'استخدم المغول تكتيك التراجع الزائف والتطويق في كوسه داغ.'), evidence: L('used the classic false retreat and circling tactic', 'اسْتَخْدَمَ الْمَغُولُ تَكْتِيكَ التَّرَاجُعِ الزَّائِفِ وَالتَّطْوِيقِ الْكَلَاسِيكِيَّ') },
        { id: 'yunus-b1-c5-destruction', focus: 'turning-point', claim: L('After victory, Mongol forces destroyed and raided major Anatolian cities.', 'بعد الانتصار دمّر المغول ونهبوا مدنًا أناضولية كبرى.'), evidence: L('destroyed and raided Sivas, Kayseri, and Erzincan', 'دَمَّرَ الْمَغُولُ سِيوَاسَ وَقَيْصَرِي وَأَرْزِنْجَانَ وَنَهَبُوهَا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'yunus-b1-c5-quick', learningPointId: 'yunus-b1-c5-revolt', eligibleStages: ['quick'], exercise: tap(L('What conditions pushed the Turkmen people toward revolt?', 'ما الظروف التي دفعت التركمان إلى التمرد؟'), L('Many economic and social problems made them seek a way out.', 'دفعتهم مشكلات اقتصادية واجتماعية كثيرة إلى البحث عن مخرج.'), L('The chapter begins the revolt with economic and social pressure.', 'يبدأ الفصل التمرد بضغط اقتصادي واجتماعي.')) },
        { id: 'yunus-b1-c5-review', learningPointId: 'yunus-b1-c5-tactic', eligibleStages: ['review'], exercise: mc(L('Which tactic does the chapter say the Mongols used at Kösedağ?', 'أي تكتيك يذكر الفصل أن المغول استخدموه في كوسه داغ؟'), { en: ['False retreat and circling', 'Naval blockade', 'Castle siege only'], ar: ['التراجع الزائف والتطويق', 'حصار بحري', 'حصار القلاع فقط'] }, 0, L('The tactic is explicitly named in the battle account.', 'يسمي سرد المعركة هذا التكتيك صراحة.')) },
        { id: 'yunus-b1-c5-final', learningPointId: 'yunus-b1-c5-destruction', eligibleStages: ['final'], exercise: tf(L('After Kösedağ, the Mongols destroyed and raided Sivas, Kayseri, and Erzincan.', 'بعد كوسه داغ دمّر المغول ونهبوا سيفاس وقيسري وأرزنجان.'), true, L('The chapter names those cities among the places destroyed and raided.', 'يسمي الفصل هذه المدن ضمن الأماكن التي دُمّرت ونُهبت.')) },
      ],
      ...G(L('revolt, military defeat, and destruction', 'التمرد والهزيمة العسكرية والدمار'), L('Why did the Turkmen revolt begin?', 'لماذا بدأ تمرد التركمان؟'), L('How did the Battle of Kösedağ change the situation in Anatolia?', 'كيف غيّرت معركة كوسه داغ الوضع في الأناضول؟'), L('Use because, however, finally, and after that to build a historical sequence.', 'استخدم لأن ومع ذلك وأخيرًا وبعد ذلك لبناء تسلسل تاريخي.'), L('Practise revolt, captured, defeated, Kösedağ, raided, and sorrow.', 'تدرّب على نطق تمرد، استولى، هزمت، كوسه داغ، نهب، وحزن.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Describe the human and urban effects of Mongol raids.', 'يصف الآثار البشرية والعمرانية للغارات المغولية.'),
        L('Explain how Seljuk political and financial dependence developed.', 'يشرح كيف تطورت التبعية السياسية والمالية للسلاجقة.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c6-deserted', focus: 'cause-result', claim: L('Cruel raids left cities deserted.', 'تركت الغارات الوحشية المدن مهجورة.'), evidence: L('After these cruel raids, cities were deserted', 'وَبَعْدَ هَذِهِ الْغَارَاتِ الْوَحْشِيَّةِ، أَصْبَحَتِ الْمُدُنُ مَهْجُورَةً') },
        { id: 'yunus-b1-c6-dependent', focus: 'turning-point', claim: L('Over time the Seljuks became dependent on the Mongols.', 'أصبح السلاجقة مع مرور الوقت تابعين للمغول.'), evidence: L('in time the Seljuks became dependent on them', 'السَّلَاجِقَةَ أَصْبَحُوا مَعَ مُرُورِ الْوَقْتِ تَابِعِينَ لَهُمْ') },
        { id: 'yunus-b1-c6-tax', focus: 'cause-result', claim: L('Increasing tax payments made both the state and the people poorer.', 'جعلت الضرائب المتزايدة الدولة والشعب أكثر فقرًا.'), evidence: L('this tax increased continuously and this made both the state and the people poorer', 'كَانَتْ هَذِهِ الضَّرِيبَةُ تَزْدَادُ بِاسْتِمْرَارٍ، مِمَّا جَعَلَ الدَّوْلَةَ وَالشَّعْبَ أَكْثَرَ فَقْرًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'yunus-b1-c6-quick', learningPointId: 'yunus-b1-c6-deserted', eligibleStages: ['quick'], exercise: mc(L('What happened to cities after the cruel raids?', 'ماذا حدث للمدن بعد الغارات الوحشية؟'), { en: ['They became deserted', 'They became richer', 'They became independent'], ar: ['أصبحت مهجورة', 'أصبحت أغنى', 'أصبحت مستقلة'] }, 0, L('The chapter directly says cities were deserted after the raids.', 'يقول الفصل مباشرة إن المدن أصبحت مهجورة بعد الغارات.')) },
        { id: 'yunus-b1-c6-knowledge', learningPointId: 'yunus-b1-c6-dependent', eligibleStages: ['knowledge'], exercise: tf(L('The Seljuks gradually became dependent on the Mongols.', 'أصبح السلاجقة تدريجيًا تابعين للمغول.'), true, L('The chapter states this political dependence directly.', 'يذكر الفصل هذه التبعية السياسية مباشرة.')) },
        { id: 'yunus-b1-c6-review', learningPointId: 'yunus-b1-c6-tax', eligibleStages: ['review'], exercise: tf(L('Increasing Mongol tax demands made both the state and the people poorer.', 'جعلت الضرائب المغولية المتزايدة الدولة والشعب أكثر فقرًا.'), true, L('The chapter explicitly connects rising tax with growing poverty.', 'يربط الفصل صراحة ارتفاع الضريبة بتزايد الفقر.')) },
      ],
      ...G(L('raids, dependence, taxation, and impoverishment', 'الغارات والتبعية والضرائب والإفقار'), L('What effects did Mongol raids have on ordinary life?', 'ما آثار الغارات المغولية في حياة الناس؟'), L('How did military defeat turn into political and economic dependence?', 'كيف تحولت الهزيمة العسكرية إلى تبعية سياسية واقتصادية؟'), L('Use became, began to, and made to describe gradual change and consequences.', 'استخدم أصبح وبدأ وجعل لوصف التغير التدريجي والنتائج.'), L('Practise captive, deserted, dependent, income, tax, and Ilkhanate.', 'تدرّب على نطق أسرى، مهجورة، تابعين، دخل، ضريبة، وإيلخانية.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Explain why dervishes became influential in the chaotic Anatolian setting.', 'يشرح لماذا أصبح الدراويش مؤثرين في بيئة الأناضول المضطربة.'),
        L('Identify Yunus Emre’s main tool and stated sources of Sûfî understanding.', 'يحدد أداة يونس إمره الرئيسة والمصادر المذكورة لفهمه الصوفي.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c7-dervishes', focus: 'cause-result', claim: L('Shaykhs trained dervishes who spread a simple understanding of Islam.', 'درّب الشيوخ الدراويش الذين نشروا فهمًا بسيطًا للإسلام.'), evidence: L('These shaykhs trained dervishes on their teachings', 'دَرَّبَ هَؤُلَاءِ الشُّيُوخُ الدَّرَاوِيشَ عَلَى تَعَالِيمِهِمْ') },
        { id: 'yunus-b1-c7-poetry', focus: 'character-action', claim: L('Yunus Emre used poetry as his most influential tool in hard times.', 'استخدم يونس إمره الشعر بوصفه أداته الأكثر تأثيرًا في الأيام الصعبة.'), evidence: L('Poetry was his most influential tool', 'كَانَ الشِّعْرُ أَدَاتَهُ الْأَكْثَرَ تَأْثِيرًا') },
        { id: 'yunus-b1-c7-sources', focus: 'direct', claim: L('The chapter says his Sûfî understanding came from the Qur’an and the Prophet’s Sunnah.', 'يقول الفصل إن فهمه للتصوف يستمد من القرآن وسنة النبي.'), evidence: L('comes from the Qur’an and the Prophet\'s Sunnah', 'يَسْتَمِدُّ يُونُس إِمْرَه فَهْمَهُ لِلتَّصَوُّفِ مِنَ الْقُرْآنِ الْكَرِيمِ وَسُنَّةِ النَّبِيِّ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'yunus-b1-c7-quick', learningPointId: 'yunus-b1-c7-dervishes', eligibleStages: ['quick'], exercise: matching(L('Match the group with its role in the chapter.', 'صل الجماعة بدورها في الفصل.'), { en: [['Shaykhs', 'trained dervishes'], ['Dervishes', 'spread a simple understanding of Islam']], ar: [['الشيوخ', 'درّبوا الدراويش'], ['الدراويش', 'نشروا فهمًا بسيطًا للإسلام']] }, L('The chapter gives these two connected roles.', 'يعرض الفصل هذين الدورين المترابطين.')) },
        { id: 'yunus-b1-c7-knowledge', learningPointId: 'yunus-b1-c7-poetry', eligibleStages: ['knowledge'], exercise: mc(L('What does the chapter call Yunus Emre’s most influential tool?', 'ما الذي يسميه الفصل أداة يونس إمره الأكثر تأثيرًا؟'), { en: ['Poetry', 'Military power', 'Trade'], ar: ['الشعر', 'القوة العسكرية', 'التجارة'] }, 0, L('The chapter explicitly identifies poetry as his most influential tool.', 'يحدد الفصل الشعر صراحة بوصفه أداته الأكثر تأثيرًا.')) },
        { id: 'yunus-b1-c7-final', learningPointId: 'yunus-b1-c7-sources', eligibleStages: ['final'], exercise: fill(L('Complete the stated sources of Yunus Emre’s Sûfî understanding.', 'أكمل المصادر المذكورة لفهم يونس إمره الصوفي.'), L('His Sûfî understanding comes from the Qur’an and the Prophet’s [blank].', 'يستمد فهمه للتصوف من القرآن و[blank] النبي.'), L('Sunnah', 'سنة'), L('The chapter names the Qur’an and the Prophet’s Sunnah.', 'يسمي الفصل القرآن وسنة النبي.')) },
      ],
      ...G(L('dervishes, poetry, and the stated sources of Yunus’s Sûfî thought', 'الدراويش والشعر والمصادر المذكورة لفكر يونس الصوفي'), L('How did Sûfî teachers respond to the chaotic period?', 'كيف استجاب المعلمون الصوفيون للفترة المضطربة؟'), L('Why was poetry especially important for Yunus Emre in this setting?', 'لماذا كان الشعر مهمًا بصورة خاصة ليونس إمره في هذا السياق؟'), L('Use who, under, and through to describe people, pressure, and means.', 'استخدم أدوات الربط لوصف الأشخاص والضغط والوسيلة.'), L('Practise shaykhs, dervishes, nomads, poetry, Qur’an, and Sunnah.', 'تدرّب على نطق الشيوخ، الدراويش، البدو، الشعر، القرآن، والسنة.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Identify the chapter’s definition of Tawhid.', 'يحدد تعريف الفصل للتوحيد.'),
        L('Explain how the chapter presents Allah as the source and true existence.', 'يشرح كيف يعرض الفصل الله بوصفه المصدر والوجود الحقيقي.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c8-love', focus: 'main-idea', claim: L('Yunus expresses strong love for Allah together with fear of Allah and loyalty to the Prophet.', 'يعبر يونس عن محبة قوية لله مع خشية الله والولاء للنبي.'), evidence: L('love for Allah as a way of life, along with fear of Allah and loyalty to the Prophet Muhammad', 'مَحَبَّةٍ صَادِقَةٍ وَقَوِيَّةٍ لِلهِ بِوَصْفِهَا طَرِيقًا فِي الْحَيَاةِ، مَعَ خَشْيَةِ اللهِ وَالْوَلاءِ لِلنَّبِيِّ مُحَمَّدٍ') },
        { id: 'yunus-b1-c8-tawhid', focus: 'direct', claim: L('Tawhid means the Oneness of Allah.', 'التوحيد يعني وحدانية الله.'), evidence: L('Tawhid which means the Oneness of Allah', 'فِكْرَةُ التَّوْحِيدِ الَّتِي تَعْنِي وَحْدَانِيَّةَ اللهِ') },
        { id: 'yunus-b1-c8-existence', focus: 'theme', claim: L('The chapter states that there is one true existence in the universe, Allah.', 'يذكر الفصل أن في الكون وجودًا حقيقيًا واحدًا هو الله.'), evidence: L('there is only one true existence in the universe, and that is Allah', 'لَا يُوجَدُ فِي الْكَوْنِ إِلَّا وُجُودٌ حَقِيقِيٌّ وَاحِدٌ، وَهُوَ اللهُ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'yunus-b1-c8-quick', learningPointId: 'yunus-b1-c8-love', eligibleStages: ['quick'], exercise: fill(L('Complete the devotion described at the start of the chapter.', 'أكمل صورة التعبد المذكورة في بداية الفصل.'), L('Yunus expresses love for Allah together with fear of Allah and [blank] to the Prophet.', 'يعبر يونس عن محبة الله وخشيته و[blank] للنبي.'), L('loyalty', 'الولاء'), L('The opening sentence combines love, fear of Allah, and loyalty to the Prophet.', 'تجمع الجملة الافتتاحية بين المحبة والخشية والولاء للنبي.')) },
        { id: 'yunus-b1-c8-review', learningPointId: 'yunus-b1-c8-tawhid', eligibleStages: ['review'], exercise: tf(L('In this chapter, Tawhid means the Oneness of Allah.', 'في هذا الفصل يعني التوحيد وحدانية الله.'), true, L('The chapter provides this definition directly.', 'يقدم الفصل هذا التعريف مباشرة.')) },
        { id: 'yunus-b1-c8-final', learningPointId: 'yunus-b1-c8-existence', eligibleStages: ['final'], exercise: mc(L('According to the chapter’s presentation of unity of existence, what is the one true existence?', 'وفقًا لعرض الفصل لوحدة الوجود، ما الوجود الحقيقي الواحد؟'), { en: ['Allah', 'Worldly wealth', 'Political power'], ar: ['الله', 'الثروة الدنيوية', 'السلطة السياسية'] }, 0, L('The chapter explicitly says the one true existence is Allah.', 'يقول الفصل صراحة إن الوجود الحقيقي الواحد هو الله.')) },
      ],
      ...G(L('love of Allah, Tawhid, and unity', 'محبة الله والتوحيد والوحدة'), L('How does the chapter define Tawhid?', 'كيف يعرّف الفصل التوحيد؟'), L('How are love, Tawhid, and the idea of true existence connected in the chapter?', 'كيف ترتبط المحبة والتوحيد وفكرة الوجود الحقيقي في الفصل؟'), L('Use according to the chapter and that means to attribute and explain ideas carefully.', 'استخدم وفقًا للفصل وهذا يعني لنسبة الأفكار وشرحها بدقة.'), L('Practise Tawhid, vivid, loyalty, existence, Creator, and unity.', 'تدرّب على نطق التوحيد، الولاء، الوجود، الخالق، والوحدة.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Identify the worship practice emphasized in Yunus Emre’s quoted verse.', 'يحدد العبادة التي يؤكدها بيت يونس إمره المقتبس.'),
        L('Explain the relationship between love of the Creator and created beings in the chapter.', 'يشرح العلاقة بين محبة الخالق والمخلوقات في الفصل.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c9-multiplicity', focus: 'sequence', claim: L('The chapter describes original unity as followed by multiple created existence.', 'يصف الفصل الوحدة الأصلية بأنها تلتها كثرة المخلوقات.'), evidence: L('the original unity lost its unity and multiple existence appeared', 'فُقِدَتِ الْوَحْدَةُ الْأَصْلِيَّةُ وَظَهَرَتِ الْكَثْرَةُ') },
        { id: 'yunus-b1-c9-prayer', focus: 'direct', claim: L('The quoted verse says a Muslim should follow Allah’s command and pray five daily prayers.', 'يقول البيت المقتبس إن المسلم يتبع أمر الله ويصلي الصلوات الخمس.'), evidence: L('follow Allah’s command and pray the five daily prayers', 'يَتَّبِعَ أَمْرَ اللهِ وَأَنْ يُصَلِّيَ الصَّلَوَاتِ الْخَمْسَ') },
        { id: 'yunus-b1-c9-love', focus: 'comparison', claim: L('The chapter links love of the Creator with love of created beings in both directions.', 'يربط الفصل محبة الخالق بمحبة المخلوقات في الاتجاهين.'), evidence: L('Those who love the Creator love the created, and those who love the created also love the Creator', 'مَنْ يُحِبُّ الْخَالِقَ يُحِبُّ الْمَخْلُوقَاتِ، وَمَنْ يُحِبُّ الْمَخْلُوقَاتِ يُحِبُّ الْخَالِقَ أَيْضًا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'yunus-b1-c9-quick', learningPointId: 'yunus-b1-c9-multiplicity', eligibleStages: ['quick'], exercise: tf(L('The chapter describes multiplicity as appearing after original unity.', 'يصف الفصل الكثرة بأنها ظهرت بعد الوحدة الأصلية.'), true, L('The opening sentence states this sequence directly.', 'تذكر الجملة الافتتاحية هذا التسلسل مباشرة.')) },
        { id: 'yunus-b1-c9-knowledge', learningPointId: 'yunus-b1-c9-prayer', eligibleStages: ['knowledge'], exercise: mc(L('Which practice does the quoted verse explicitly require?', 'أي عبادة يطلبها البيت المقتبس صراحة؟'), { en: ['The five daily prayers', 'Avoiding all work', 'Seeking wealth'], ar: ['الصلوات الخمس', 'ترك كل عمل', 'طلب الثروة'] }, 0, L('The verse explicitly mentions following Allah’s command and praying five daily prayers.', 'يذكر البيت صراحة اتباع أمر الله وأداء الصلوات الخمس.')) },
        { id: 'yunus-b1-c9-review', learningPointId: 'yunus-b1-c9-love', eligibleStages: ['review'], exercise: mc(L('How does the chapter connect love of Allah with love of creation?', 'كيف يربط الفصل محبة الله بمحبة المخلوقات؟'), { en: ['Each love is connected to the other', 'They are presented as opposites', 'Created beings should never be loved'], ar: ['كل منهما مرتبط بالآخر', 'يُعرضان بوصفهما متضادين', 'لا ينبغي محبة المخلوقات أبدًا'] }, 0, L('The final sentence presents love of Creator and created as mutually connected.', 'تعرض الجملة الأخيرة محبة الخالق والمخلوقات بوصفهما مترابطتين.')) },
      ],
      ...G(L('worship, unity, and love of Creator and creation', 'العبادة والوحدة ومحبة الخالق والمخلوقات'), L('What religious requirement does Yunus mention in the poem?', 'ما الواجب الديني الذي يذكره يونس في البيت؟'), L('How does the chapter connect worship with its wider theme of love?', 'كيف يربط الفصل العبادة بموضوع المحبة الأوسع؟'), L('Use should, must, and those who to express requirements and relationships.', 'استخدم صيغ الوجوب والجمل الموصولة للتعبير عن المتطلبات والعلاقات.'), L('Practise requirements, unity, creation, five daily prayers, Creator, and love.', 'تدرّب على نطق شروط، الوحدة، الخلق، الصلوات الخمس، الخالق، والحب.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Explain the relationship between love and harmony in the chapter.', 'يشرح العلاقة بين الحب والانسجام في الفصل.'),
        L('Identify the roles given to the heart and intellect.', 'يحدد الأدوار التي يمنحها الفصل للقلب والعقل.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c10-harmony', focus: 'cause-result', claim: L('Love brings unity and harmony, while its absence brings negative emotions.', 'يجلب الحب الوحدة والانسجام، بينما يسبب غيابه مشاعر سلبية.'), evidence: L('Love brings unity and harmony', 'يَجْلِبُ الْحُبُّ الْوَحْدَةَ وَالِانْسِجَامَ') },
        { id: 'yunus-b1-c10-heart', focus: 'theme', claim: L('The heart is presented as the center of love and the “throne of the Lord.”', 'يُعرض القلب بوصفه مركز الحب و«عرش الرب».'), evidence: L('heart is the center of love. It is “the throne of the Lord”', 'الْقَلْبُ هُوَ مَرْكَزُ الْحُبِّ. فَهُوَ «عَرْشُ الرَّبِّ»') },
        { id: 'yunus-b1-c10-intellect', focus: 'comparison', claim: L('Yunus also values intellect and describes it as a light from Allah.', 'يقدّر يونس العقل أيضًا ويصفه بأنه نور من الله.'), evidence: L('described it as “a light from Allah that has existed since eternity”', 'وَصَفَهُ بِأَنَّهُ «نُورٌ مِنَ اللهِ مَوْجُودٌ مُنْذُ الْأَزَلِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'yunus-b1-c10-quick', learningPointId: 'yunus-b1-c10-harmony', eligibleStages: ['quick'], exercise: tap(L('What does love bring according to the opening sentence?', 'ماذا يجلب الحب وفقًا للجملة الافتتاحية؟'), L('Unity and harmony.', 'الوحدة والانسجام.'), L('The chapter opens by saying love brings unity and harmony.', 'يفتتح الفصل بالقول إن الحب يجلب الوحدة والانسجام.')) },
        { id: 'yunus-b1-c10-knowledge', learningPointId: 'yunus-b1-c10-heart', eligibleStages: ['knowledge'], exercise: mc(L('Which description of the heart appears in the chapter?', 'أي وصف للقلب يظهر في الفصل؟'), { en: ['The center of love and the throne of the Lord', 'A symbol of wealth', 'Only a physical organ'], ar: ['مركز الحب وعرش الرب', 'رمز للثروة', 'عضو جسدي فقط'] }, 0, L('The chapter gives both descriptions directly.', 'يقدم الفصل الوصفين مباشرة.')) },
        { id: 'yunus-b1-c10-final', learningPointId: 'yunus-b1-c10-intellect', eligibleStages: ['final'], exercise: matching(L('Match heart and intellect with the descriptions given in the chapter.', 'صل القلب والعقل بالوصفين الواردين في الفصل.'), { en: [['Heart', 'center of love'], ['Intellect', 'a light from Allah']], ar: [['القلب', 'مركز الحب'], ['العقل', 'نور من الله']] }, L('The chapter values both heart and intellect, but gives each a distinct description.', 'يقدّر الفصل القلب والعقل مع إعطاء كل منهما وصفًا مميزًا.')) },
      ],
      ...G(L('love, heart, understanding, and intellect', 'الحب والقلب والفهم والعقل'), L('What happens when love is present or absent?', 'ماذا يحدث عند وجود الحب أو غيابه؟'), L('How does the chapter present heart and intellect as complementary values?', 'كيف يعرض الفصل القلب والعقل بوصفهما قيمتين متكاملتين؟'), L('Use when, where, while, and also to compare states and values.', 'استخدم عندما وحيث وبينما وأيضًا للمقارنة بين الحالات والقيم.'), L('Practise heart, reveals, intellect, eternity, harmony, and truth.', 'تدرّب على نطق القلب، يتجلى، العقل، الأزل، الانسجام، والحقيقة.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Explain why heart and intellect must support one another.', 'يشرح لماذا يجب أن يدعم القلب والعقل أحدهما الآخر.'),
        L('Describe the advisory role of death in the chapter.', 'يصف الدور الإرشادي للموت في الفصل.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c11-support', focus: 'cause-result', claim: L('Heart and intellect must support one another for a person to reach salvation.', 'يجب أن يدعم القلب والعقل أحدهما الآخر ليبلغ الإنسان الخلاص.'), evidence: L('heart and intellect must support one another', 'الْقَلْبَ وَالْعَقْلَ يَجِبُ أَنْ يَدْعَمَ أَحَدُهُمَا الْآخَرَ') },
        { id: 'yunus-b1-c11-advisor', focus: 'theme', claim: L('Death is presented as the best advisor for humanity.', 'يُعرض الموت بوصفه أفضل ناصح للإنسان.'), evidence: L('death is the best advisor for humanity', 'الْمَوْتَ هُوَ أَفْضَلُ نَاصِحٍ لِلْإِنْسَانِ') },
        { id: 'yunus-b1-c11-guest', focus: 'inference', claim: L('The quoted poem describes human life in the world as a temporary stay before departure.', 'يصف البيت المقتبس حياة الإنسان في الدنيا بأنها إقامة مؤقتة قبل الرحيل.'), evidence: L('A guest in this world, one day they must set out for their homeland', 'فَهُوَ ضَيْفٌ فِي هَذَا الْعَالَمِ، وَلَا بُدَّ أَنْ يَسْتَعِدَّ لِلرَّحِيلِ يَوْمًا إِلَى وَطَنِهِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'yunus-b1-c11-quick', learningPointId: 'yunus-b1-c11-support', eligibleStages: ['quick'], exercise: matching(L('Match the two values with the relationship stated in the chapter.', 'صل القيمتين بالعلاقة المذكورة في الفصل.'), { en: [['Heart', 'must support intellect'], ['Intellect', 'must support heart']], ar: [['القلب', 'يدعم العقل'], ['العقل', 'يدعم القلب']] }, L('The chapter states that heart and intellect must support one another.', 'يذكر الفصل أن القلب والعقل يجب أن يدعم أحدهما الآخر.')) },
        { id: 'yunus-b1-c11-review', learningPointId: 'yunus-b1-c11-advisor', eligibleStages: ['review'], exercise: tf(L('The chapter presents death as an advisor that can help a person live meaningfully.', 'يعرض الفصل الموت بوصفه ناصحًا يمكن أن يساعد الإنسان على عيش حياة ذات معنى.'), true, L('The chapter calls death the best advisor and connects awareness of it with meaningful and honest life.', 'يسمي الفصل الموت أفضل ناصح ويربط فهمه بحياة ذات معنى وصدق.')) },
        { id: 'yunus-b1-c11-final', learningPointId: 'yunus-b1-c11-guest', eligibleStages: ['final'], exercise: tf(L('The quoted poem presents a person as a permanent resident of this world.', 'يقدم البيت المقتبس الإنسان بوصفه مقيمًا دائمًا في هذا العالم.'), false, L('The poem calls the person a guest who will one day depart.', 'يسمي البيت الإنسان ضيفًا سيستعد يومًا للرحيل.')) },
      ],
      ...G(L('heart, intellect, death, and meaningful life', 'القلب والعقل والموت والحياة ذات المعنى'), L('Why must heart and intellect support one another?', 'لماذا يجب أن يدعم القلب والعقل أحدهما الآخر؟'), L('How does remembering death affect the way a person lives according to the chapter?', 'كيف يؤثر تذكر الموت في طريقة عيش الإنسان وفقًا للفصل؟'), L('Use must, who, and one day to express necessity, description, and future departure.', 'استخدم صيغ الوجوب والوصف والزمن المستقبلي.'), L('Practise intellect, salvation, death, wisest, guest, and set out.', 'تدرّب على نطق العقل، الخلاص، الموت، الأكياس، ضيف، والرحيل.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Distinguish the good and bad habits listed in the chapter.', 'يميز بين العادات الحسنة والسيئة المذكورة في الفصل.'),
        L('Explain why the chapter calls Yunus Emre’s poetry a moral guide.', 'يشرح لماذا يسمي الفصل شعر يونس إمره دليلًا أخلاقيًا.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c12-morality', focus: 'main-idea', claim: L('True morality is presented as giving up bad habits that do not fit human beings.', 'تُعرض الأخلاق الحقيقية بوصفها التخلي عن العادات السيئة التي لا تليق بالإنسان.'), evidence: L('true morality is about giving up bad habits that do not fit humans', 'الْأَخْلاقَ الْحَقيقِيَّةَ تَعْني التَّخَلِّيَ عَنِ الْعاداتِ السَّيِّئَةِ الَّتي لا تَلِيقُ بِالْإِنْسانِ') },
        { id: 'yunus-b1-c12-good', focus: 'comparison', claim: L('Honesty, patience, humility, generosity, respect, trust in Allah, and modesty are listed as important principles.', 'تُذكر الصدق والصبر والتواضع والكرم والاحترام والتوكل على الله والحياء كمبادئ مهمة.'), evidence: L('honesty, patience, humility, generosity, respect, trust in Allah, and modesty', 'الصِّدْقِ، وَالصَّبْرِ، وَالتَّواضُعِ، وَالْكَرَمِ، وَالِاحْتِرامِ، وَالتَّوَكُّلِ عَلى اللهِ، وَالْحَياءِ') },
        { id: 'yunus-b1-c12-guide', focus: 'theme', claim: L('The chapter says Yunus Emre’s poems are also a moral guide.', 'يقول الفصل إن قصائد يونس إمره دليل أخلاقي أيضًا.'), evidence: L('poems are not only literary works but also a moral guide', 'قَصائِدُ يُونُسَ إِمْرَه لَيْسَتْ أَعْمالًا أَدَبِيَّةً فَقَطْ، بَلْ هِيَ أَيْضًا دَليلٌ أَخْلاقِيٌّ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'yunus-b1-c12-quick', learningPointId: 'yunus-b1-c12-morality', eligibleStages: ['quick'], exercise: mc(L('How does the chapter define true morality?', 'كيف يعرّف الفصل الأخلاق الحقيقية؟'), { en: ['Giving up bad habits that do not fit humans', 'Collecting as much wealth as possible', 'Avoiding all moral advice'], ar: ['التخلي عن العادات السيئة التي لا تليق بالإنسان', 'جمع أكبر قدر ممكن من الثروة', 'تجنب كل نصيحة أخلاقية'] }, 0, L('The first sentence gives this definition directly.', 'تقدم الجملة الأولى هذا التعريف مباشرة.')) },
        { id: 'yunus-b1-c12-knowledge', learningPointId: 'yunus-b1-c12-good', eligibleStages: ['knowledge'], exercise: matching(L('Match the type with examples from the chapter.', 'صل النوع بأمثلة من الفصل.'), { en: [['Good principles', 'patience and generosity'], ['Bad habits', 'greed and jealousy']], ar: [['المبادئ الحسنة', 'الصبر والكرم'], ['العادات السيئة', 'الطمع والحسد']] }, L('The chapter lists virtues and harmful habits separately.', 'يسرد الفصل الفضائل والعادات الضارة بصورة منفصلة.')) },
        { id: 'yunus-b1-c12-final', learningPointId: 'yunus-b1-c12-guide', eligibleStages: ['final'], exercise: mc(L('Besides being literary works, what does the chapter call Yunus Emre’s poems?', 'إلى جانب كونها أعمالًا أدبية، ماذا يسمي الفصل قصائد يونس إمره؟'), { en: ['A moral guide', 'A tax record', 'A military manual'], ar: ['دليلًا أخلاقيًا', 'سجل ضرائب', 'دليلًا عسكريًا'] }, 0, L('The chapter explicitly calls the poems a moral guide.', 'يسمي الفصل القصائد صراحة دليلًا أخلاقيًا.')) },
      ],
      ...G(L('virtues, harmful habits, and poetry as moral guidance', 'الفضائل والعادات الضارة والشعر بوصفه إرشادًا أخلاقيًا'), L('Which habits does Yunus encourage and which does he reject?', 'ما العادات التي يشجعها يونس وما التي يرفضها؟'), L('Why can a poem function as a moral guide according to this chapter?', 'لماذا يمكن للقصيدة أن تعمل دليلًا أخلاقيًا وفقًا لهذا الفصل؟'), L('Use such as, not only … but also, and should/avoid for examples and advice.', 'استخدم مثل وليس فقط... بل أيضًا وصيغ النصيحة لعرض الأمثلة والإرشاد.'), L('Practise morality, humility, generosity, gossiper, trust in Allah, and greed.', 'تدرّب على نطق الأخلاق، التواضع، الكرم، النميمة، التوكل، والطمع.')),
    },
    {
      chapterId: 13,
      objectives: [
        L('Explain how the poems connect patience with greatness and skill.', 'يشرح كيف تربط الأبيات الصبر بالعظمة والفضائل.'),
        L('Identify the warning about anger and the works named at the end.', 'يحدد التحذير من الغضب والأعمال المذكورة في النهاية.'),
      ],
      evidencePoints: [
        { id: 'yunus-b1-c13-patience', focus: 'theme', claim: L('The quoted verses present patience as a foundation for lasting greatness.', 'تعرض الأبيات الصبر بوصفه أساسًا للدوام والعظمة.'), evidence: L('Patience is the foundation of a lasting kingdom', 'الصَّبْرُ أَسَاسُ مُلْكٍ دَائِمٍ') },
        { id: 'yunus-b1-c13-rage', focus: 'cause-result', claim: L('The quoted verse warns that anger harms faith and should be given up.', 'يحذر البيت من أن الغضب يضر الإيمان ويجب تركه.'), evidence: L('Whoever is filled with anger loses their faith', 'مَنْ يَمْلَأُ الْغَضَبُ قَلْبَهُ يَفْقِدُ إِيمَانَهُ') },
        { id: 'yunus-b1-c13-legacy', focus: 'main-idea', claim: L('The chapter says his poems remain valuable as a moral guide for future generations.', 'يقول الفصل إن قصائده ما زالت ذات قيمة بوصفها دليلًا أخلاقيًا للأجيال القادمة.'), evidence: L('poems are still valuable today as a moral guide for future generations', 'مَا زَالَتْ قَصَائِدُهُ ذَاتَ قِيمَةٍ حَتَّى الْيَوْمِ كَدَلِيلٍ أَخْلَاقِيٍّ لِلْأَجْيَالِ الْقَادِمَةِ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'yunus-b1-c13-quick', learningPointId: 'yunus-b1-c13-patience', eligibleStages: ['quick'], exercise: fill(L('Complete the first moral lesson in the chapter.', 'أكمل أول درس أخلاقي في الفصل.'), L('[blank] is the foundation of a lasting kingdom.', '[blank] أساس ملك دائم.'), L('Patience', 'الصبر'), L('The first quoted verse begins with this statement about patience.', 'يبدأ البيت المقتبس الأول بهذه العبارة عن الصبر.')) },
        { id: 'yunus-b1-c13-review', learningPointId: 'yunus-b1-c13-rage', eligibleStages: ['review'], exercise: mc(L('What warning about anger appears in the quoted verse?', 'ما التحذير من الغضب الذي يظهر في البيت المقتبس؟'), { en: ['Anger can damage faith', 'Anger always brings wisdom', 'Anger is required for patience'], ar: ['الغضب يمكن أن يضر الإيمان', 'الغضب يجلب الحكمة دائمًا', 'الغضب ضروري للصبر'] }, 0, L('The verse says a person filled with anger loses faith and should give up rage.', 'يقول البيت إن من يملأ الغضب قلبه يفقد إيمانه وينبغي أن يترك الغضب.')) },
        { id: 'yunus-b1-c13-final', learningPointId: 'yunus-b1-c13-legacy', eligibleStages: ['final'], exercise: fill(L('Complete how the chapter describes the continuing value of Yunus Emre’s poems.', 'أكمل وصف الفصل للقيمة المستمرة لقصائد يونس إمره.'), L('His poems remain valuable as a moral [blank] for future generations.', 'ما زالت قصائده ذات قيمة بوصفها [blank] أخلاقيًا للأجيال القادمة.'), L('guide', 'دليلًا'), L('The chapter explicitly describes the poems as a moral guide for future generations.', 'يصف الفصل القصائد صراحة بأنها دليل أخلاقي للأجيال القادمة.')) },
      ],
      ...G(L('patience, anger, faith, and lasting moral legacy', 'الصبر والغضب والإيمان والإرث الأخلاقي الدائم'), L('What does Yunus say about patience and anger?', 'ماذا يقول يونس عن الصبر والغضب؟'), L('Why does the chapter present Yunus Emre as valuable for future generations?', 'لماذا يعرض الفصل يونس إمره بوصفه ذا قيمة للأجيال القادمة؟'), L('Use whoever, if, and because to express moral conditions and consequences.', 'استخدم أدوات الشرط والسبب للتعبير عن الشروط والنتائج الأخلاقية.'), L('Practise patience, rage, arrogance, faith, moral guide, and Divan.', 'تدرّب على نطق الصبر، الغضب، التكبر، الإيمان، دليل أخلاقي، والديوان.')),
    },
  ],
});
