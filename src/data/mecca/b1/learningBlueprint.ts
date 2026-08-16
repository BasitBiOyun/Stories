import {
  defineLearningBlueprint,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b1BlueprintAuthoring';
import { meccaB1HighlightTargets } from './source';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (meccaB1HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `mecca-b1-c${chapterId}-v${index + 1}`,
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

export const meccaB1LearningBlueprint = defineLearningBlueprint({
  id: 'mecca-b1',
  version: '1.0.0',
  storyId: 'mecca',
  level: 'B1',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Explain why Mecca before Islam depended on tribes rather than a central government.', 'يشرح لماذا اعتمد مجتمع مكة قبل الإسلام على القبائل بدل حكومة مركزية.'),
        L('Connect economic power with social inequality in pre-Islamic Mecca.', 'يربط القوة الاقتصادية بعدم المساواة الاجتماعية في مكة قبل الإسلام.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c1-government', focus: 'main-idea', claim: L('Arabia had no central government and tribes were the basis of society.', 'لم تكن هناك حكومة مركزية وكانت القبائل أساس المجتمع.'), evidence: L('There was no central government in Arabia, and tribes were the basis of society', 'ولم تكن في ذلك الوقت حكومة مركزية في شِبْه الجزيرة العربية. وكانت القبائل هي أسَاس المجتمع') },
        { id: 'mecca-b1-c1-merchants', focus: 'cause-result', claim: L('A council of rich merchants led Mecca and powerful people controlled many parts of life.', 'قاد مكة مجلس من التجار الأغنياء وسيطر الأقوياء على جوانب كثيرة من الحياة.'), evidence: L('Mecca was led by a council of rich merchants', 'كان يَقودُ مكّة مجلس من التجّار الأغنياء') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'mecca-b1-c1-quick', learningPointId: 'mecca-b1-c1-government', eligibleStages: ['quick'], exercise: mc(L('What was the main political structure described in Arabia before Islam?', 'ما البنية السياسية الأساسية التي يصفها الفصل في جزيرة العرب قبل الإسلام؟'), { en: ['There was no central government and tribes formed the basis of society', 'One emperor ruled all tribes directly', 'Every city had the same written law'], ar: ['لم تكن هناك حكومة مركزية وكانت القبائل أساس المجتمع', 'كان إمبراطور واحد يحكم جميع القبائل مباشرة', 'كان لكل مدينة القانون المكتوب نفسه'] }, 0, L('The chapter directly says there was no central government and tribes were the basis of society.', 'يقول الفصل مباشرة إنه لم تكن هناك حكومة مركزية وإن القبائل كانت أساس المجتمع.')) },
        { id: 'mecca-b1-c1-knowledge', learningPointId: 'mecca-b1-c1-merchants', eligibleStages: ['knowledge'], exercise: tf(L('Mecca was led by a council of rich merchants before Islam.', 'كان يقود مكة قبل الإسلام مجلس من التجار الأغنياء.'), true, L('This is why the chapter says the city was known as the Republic of Merchants.', 'ولهذا يقول الفصل إن المدينة عرفت بجمهورية التجار.')) },
      ],
      ...G(L('tribes, political order, merchant power, and inequality', 'القبائل والنظام السياسي وقوة التجار وعدم المساواة'), L('What replaced a central government in the social structure?', 'ما الذي قام مقام الحكومة المركزية في البنية الاجتماعية؟'), L('How did political and economic power affect weak people?', 'كيف أثرت القوة السياسية والاقتصادية في الضعفاء؟'), L('Use because, while, and there was/there were to connect social conditions.', 'استخدم لأن وبينما وصيغ كان/كانت لربط الظروف الاجتماعية.'), L('Practise Jahiliyyah, chaotic, central government, merchant, and misery.', 'تدرّب على نطق عصر الجاهلية، فوضوية، حكومة مركزية، تجار، وبؤس.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain the meaning of Jahiliyyah using belief, justice, order, and peace.', 'يشرح معنى الجاهلية من خلال الإيمان والعدل والنظام والسلام.'),
        L('Identify why Mecca is central to the chapter’s description of Islam.', 'يحدد لماذا تحتل مكة مكانة مركزية في وصف الإسلام في الفصل.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c2-revelation', focus: 'turning-point', claim: L('The Jahiliyyah era ended when the first Quranic revelation began in 610 CE.', 'انتهى عصر الجاهلية عندما بدأ نزول الوحي الأول من القرآن عام 610 ميلادي.'), evidence: L('This era ended when the first revelation of the Quran began in 610 CE', 'وَانْتَهَى هذا العصر عندما بَدَأَ نزول الوحي الأول من القرآن الكريم عام 610 ميلادي') },
        { id: 'mecca-b1-c2-holy-city', focus: 'main-idea', claim: L('Mecca is described as the holy city of Islam and the location of the Ka’ba.', 'توصف مكة بأنها البلدة المقدسة في الإسلام ومكان الكعبة.'), evidence: L('Mecca is the holy city of Islam', 'مكة هي البلدة المقدّسة في الإسلام') },
        { id: 'mecca-b1-c2-qiblah', focus: 'direct', claim: L('The Qiblah is located in Mecca.', 'تقع القبلة في مكة.'), evidence: L('The Qiblah, the direction Muslims face during salah, is also located in Mecca', 'وتقع القبْلة أيضا في هذه البلدة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'mecca-b1-c2-quick', learningPointId: 'mecca-b1-c2-revelation', eligibleStages: ['quick'], exercise: matching(L('Match the event with its role in the chapter.', 'صل الحدث بدوره في الفصل.'), { en: [['First Quranic revelation in 610 CE', 'marks the end of the Jahiliyyah era'], ['Mecca', 'is introduced as the holy city of Islam']], ar: [['نزول الوحي الأول عام 610', 'يمثل نهاية عصر الجاهلية'], ['مكة', 'تقدم بوصفها البلدة المقدسة في الإسلام']] }, L('The chapter uses revelation as a historical turning point and Mecca as the central setting.', 'يستخدم الفصل الوحي نقطة تحول تاريخية ومكة مكانًا مركزيًا.')) },
        { id: 'mecca-b1-c2-knowledge', learningPointId: 'mecca-b1-c2-holy-city', eligibleStages: ['knowledge'], exercise: mc(L('Why is Mecca especially important in this chapter?', 'لماذا تحظى مكة بأهمية خاصة في هذا الفصل؟'), { en: ['It is the holy city of Islam and the location of the Ka’ba', 'It was the capital of the Byzantine Empire', 'It was the main farming region of Arabia'], ar: ['هي البلدة المقدسة في الإسلام ومكان الكعبة', 'كانت عاصمة الإمبراطورية البيزنطية', 'كانت المنطقة الزراعية الرئيسة في الجزيرة العربية'] }, 0, L('The chapter explicitly calls Mecca the holy city of Islam and links it with the Ka’ba.', 'يسمي الفصل مكة صراحة البلدة المقدسة في الإسلام ويربطها بالكعبة.')) },
        { id: 'mecca-b1-c2-final', learningPointId: 'mecca-b1-c2-qiblah', eligibleStages: ['final'], exercise: fill(L('Complete the location detail from the chapter.', 'أكمل معلومة المكان في الفصل.'), L('The Qiblah is located in [blank].', 'تقع القبلة في [blank].'), L('Mecca', 'مكة'), L('The chapter states that the Qiblah is located in Mecca.', 'يذكر الفصل أن القبلة تقع في مكة.')) },
      ],
      ...G(L('Jahiliyyah, revelation, Mecca, the Ka’ba, and Qiblah', 'الجاهلية والوحي ومكة والكعبة والقبلة'), L('What event marks the end of the era described as Jahiliyyah?', 'ما الحدث الذي يمثل نهاية عصر الجاهلية؟'), L('How does the chapter connect Mecca with belief and worship?', 'كيف يربط الفصل مكة بالإيمان والعبادة؟'), L('Use past simple for historical events and present simple for continuing facts.', 'استخدم الماضي للأحداث التاريخية والحاضر للحقائق المستمرة.'), L('Practise barbarism, revelation, holy, Ka’ba, and Qiblah.', 'تدرّب على نطق وحشية، الوحي، البلدة المقدسة، الكعبة، والقبلة.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Trace the development from an empty valley to a growing pilgrimage center.', 'يتتبع التطور من واد بلا سكان إلى مركز حج متنامٍ.'),
        L('Explain how Zamzam and the Ka’ba supported settlement and growth.', 'يشرح كيف دعم زمزم والكعبة الاستقرار والنمو.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c3-empty', focus: 'sequence', claim: L('When Abraham brought Hagar and Ishmael, Zamzam had not yet been discovered and the land had no population.', 'عندما جاء إبراهيم بهاجر وإسماعيل لم يكن زمزم قد اكتشف ولم يكن في الأرض سكان.'), evidence: L('Zamzam water had not been discovered yet. There was no population in the land', 'لم يكن ماء زمزم قد اكْتُشِفَ بعدُ، لذلك لم يكن هناك أيّ سكّان في هذه الأرض') },
        { id: 'mecca-b1-c3-settlement', focus: 'cause-result', claim: L('After Zamzam was discovered, the Jurhumites settled in Mecca.', 'بعد اكتشاف زمزم استقرت قبيلة جرهم في مكة.'), evidence: L('After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca', 'بعد اكتشاف ماء زمزم، استقرت قبيلة جرهم اليمنية في مكة') },
        { id: 'mecca-b1-c3-growth', focus: 'cause-result', claim: L('The Ka’ba became a pilgrimage site and this helped Mecca grow rapidly.', 'أصبحت مكة مركزًا للحج وبدأت تنمو بسرعة.'), evidence: L('the Ka’ba became a pilgrimage site. This helped the city grow rapidly', 'أصبحت مكة مركزاً للحج وبدأت تنمو بسرعة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'mecca-b1-c3-quick', learningPointId: 'mecca-b1-c3-empty', eligibleStages: ['quick'], exercise: fill(L('Complete the condition of the valley before settlement.', 'أكمل حالة الوادي قبل الاستقرار.'), L('Zamzam had not been discovered and there was no [blank] in the land.', 'لم يكن زمزم قد اكتشف ولم يكن في الأرض أي [blank].'), L('population', 'سكّان'), L('The chapter describes the valley before Zamzam as having no population.', 'يصف الفصل الوادي قبل زمزم بأنه بلا سكان.')) },
        { id: 'mecca-b1-c3-knowledge', learningPointId: 'mecca-b1-c3-settlement', eligibleStages: ['knowledge'], exercise: tf(L('The Jurhumites settled in Mecca after the discovery of Zamzam water.', 'استقرت قبيلة جرهم في مكة بعد اكتشاف ماء زمزم.'), true, L('The chapter gives this as the sequence of events.', 'يعرض الفصل هذا بوصفه تسلسل الأحداث.')) },
        { id: 'mecca-b1-c3-final', learningPointId: 'mecca-b1-c3-growth', eligibleStages: ['final'], exercise: mc(L('What helped the city grow rapidly according to the final paragraph?', 'ما الذي ساعد المدينة على النمو بسرعة وفق الفقرة الأخيرة؟'), { en: ['The Ka’ba became a pilgrimage site', 'All trade routes disappeared', 'The valley became a farming empire'], ar: ['أصبحت مكة مركزًا للحج', 'اختفت جميع طرق التجارة', 'تحول الوادي إلى إمبراطورية زراعية'] }, 0, L('The chapter connects pilgrimage to the Ka’ba with rapid urban growth.', 'يربط الفصل الحج إلى الكعبة بالنمو السريع للمدينة.')) },
      ],
      ...G(L('settlement, Zamzam, the Ka’ba, and urban growth', 'الاستقرار وزمزم والكعبة ونمو المدينة'), L('What was the valley like before Zamzam was discovered?', 'كيف كان الوادي قبل اكتشاف زمزم؟'), L('How did water and pilgrimage change Mecca?', 'كيف غيّر الماء والحج مكة؟'), L('Use before, after, later, and because to explain sequence and cause.', 'استخدم قبل وبعد ولاحقًا ولأن لشرح التسلسل والسبب.'), L('Practise valley, crops, population, settled, and pilgrimage.', 'تدرّب على نطق واد، زرع، سكان، استقرت، والحج.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Explain the change from Abraham’s religion to idol worship under Khuza’a rule.', 'يشرح التحول من دين إبراهيم إلى عبادة الأصنام تحت حكم خزاعة.'),
        L('Connect Mecca’s dry land with its dependence on trade.', 'يربط جفاف أرض مكة باعتمادها على التجارة.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c4-idols', focus: 'turning-point', claim: L('Under Khuza’a rule people forgot Abraham’s religion and began worshipping idols.', 'تحت حكم خزاعة نسي الناس دين إبراهيم وبدأوا يعبدون أصنامًا كثيرة.'), evidence: L('Under Khuza’a rule, people forgot the religion of Abraham (as) and started worshipping many idols', 'وتحت حكم خزاعة، نَسِيَ الناس دين إبراهيم وبدؤُوا يَعْبُدُون أصنامًا كثيرة') },
        { id: 'mecca-b1-c4-trade', focus: 'cause-result', claim: L('Because the dry land was difficult to farm, people made money through trade.', 'بسبب صعوبة الزراعة في الأرض الجافة كسب الناس المال بالتجارة.'), evidence: L('Because people could not farm in this dry land, they made money through trade', 'وبسبب عدم قدرة الناس على الزِراعة في هذه الأرض الجافّة، كَسَبُوا المال عن طريق التجارة') },
        { id: 'mecca-b1-c4-quraysh', focus: 'sequence', claim: L('In the fifth century Quraysh took control of Mecca and the Ka’ba.', 'في القرن الخامس سيطرت قريش على مكة والكعبة.'), evidence: L('in the 5th century, the Quraysh tribe took over the city and the Ka’ba', 'في القرْن الخامس، سَيْطَرَتْ قبيلة قريْش على مكّة والكعبة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'mecca-b1-c4-quick', learningPointId: 'mecca-b1-c4-idols', eligibleStages: ['quick'], exercise: tf(L('Under Khuza’a rule, people returned fully to Abraham’s religion.', 'تحت حكم خزاعة عاد الناس بالكامل إلى دين إبراهيم.'), false, L('The chapter says they forgot Abraham’s religion and started worshipping many idols.', 'يقول الفصل إنهم نسوا دين إبراهيم وبدأوا يعبدون أصنامًا كثيرة.')) },
        { id: 'mecca-b1-c4-review', learningPointId: 'mecca-b1-c4-trade', eligibleStages: ['review'], exercise: mc(L('Why did trade become economically important in Mecca?', 'لماذا أصبحت التجارة مهمة اقتصاديًا في مكة؟'), { en: ['The dry land made farming difficult', 'The city had many large rivers', 'People refused to buy imported goods'], ar: ['جعلت الأرض الجافة الزراعة صعبة', 'كانت في المدينة أنهار كبيرة كثيرة', 'رفض الناس شراء البضائع المستوردة'] }, 0, L('The chapter directly links difficult farming conditions with trade.', 'يربط الفصل مباشرة صعوبة الزراعة بالتجارة.')) },
        { id: 'mecca-b1-c4-final', learningPointId: 'mecca-b1-c4-quraysh', eligibleStages: ['final'], exercise: matching(L('Match the ruling group with the change described in the chapter.', 'صل الجماعة الحاكمة بالتغير المذكور في الفصل.'), { en: [['Khuza’a', 'idol worship spread after people forgot Abraham’s religion'], ['Quraysh', 'took control of Mecca and the Ka’ba']], ar: [['خزاعة', 'انتشرت عبادة الأصنام بعد نسيان دين إبراهيم'], ['قريش', 'سيطرت على مكة والكعبة']] }, L('The chapter presents these as two successive political-religious changes.', 'يعرض الفصل هذين بوصفهما تغيرين سياسيين ودينيين متتابعين.')) },
      ],
      ...G(L('religious change, political control, dry land, and trade', 'التحول الديني والسيطرة السياسية والأرض الجافة والتجارة'), L('What changed under Khuza’a rule?', 'ما الذي تغير تحت حكم خزاعة؟'), L('How did geography influence Mecca’s economy?', 'كيف أثرت الجغرافيا في اقتصاد مكة؟'), L('Use because and later to connect cause and historical sequence.', 'استخدم لأن ولاحقًا لربط السبب والتسلسل التاريخي.'), L('Practise mission, defeated, idol, farm, and goods.', 'تدرّب على نطق واجبه، هزمت، أصنامًا، الزراعة، والبضائع.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Explain why Mecca became wealthy through its location and trade agreements.', 'يشرح لماذا أصبحت مكة غنية بفضل موقعها والاتفاقيات التجارية.'),
        L('Explain how the sacred months supported safer travel and pilgrimage.', 'يشرح كيف دعمت الأشهر الحرم السفر الآمن والحج.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c5-location', focus: 'cause-result', claim: L('Mecca became busy and wealthy because it stood in the middle of important trade routes.', 'أصبحت مكة مزدحمة وغنية لأنها تقع في وسط طرق التجارة.'), evidence: L('Because Mecca was in the middle of important trade routes, it became a busy and wealthy city', 'بسبب وقوع مكة في وسط طرق التجارة هذه، أَصْبَحَتْ مدينة مزدحمة وغنيّة جدًّا') },
        { id: 'mecca-b1-c5-agreements', focus: 'cause-result', claim: L('Trade agreements allowed merchants to travel and trade safely in other lands.', 'سمحت الاتفاقيات للتجار بالسفر والتجارة بأمان في بلاد أخرى.'), evidence: L('These agreements allowed merchants to travel safely and trade in places like Byzantium, Yemen, Iraq, and Ethiopia', 'وسمحت هذه الاتّفاقيّات للتجّار بأنْ يسافروا بأمان ويُتاجِروا في أماكن مثل بيزنطة واليمن والعراق وإثيوبيا') },
        { id: 'mecca-b1-c5-sacred', focus: 'cause-result', claim: L('During the sacred months people stayed away from fighting, creating a safer atmosphere for worship and Hajj.', 'في الأشهر الحرم ابتعد الناس عن القتال فصارت الأجواء أكثر أمنًا للعبادة والحج.'), evidence: L('people focused on worship, showed respect, and stayed away from fighting', 'كان الناس يُرَكِّزون على العبادة، ويُظْهِرون الاحترام، ويَبْتَعِدون عن القتال') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'mecca-b1-c5-quick', learningPointId: 'mecca-b1-c5-location', eligibleStages: ['quick'], exercise: tap(L('Why did Mecca become a busy and wealthy city?', 'لماذا أصبحت مكة مدينة مزدحمة وغنية؟'), L('Because it was in the middle of important trade routes.', 'لأنها كانت تقع في وسط طرق التجارة المهمة.'), L('The chapter directly connects Mecca’s location on trade routes with its wealth and activity.', 'يربط الفصل مباشرة موقع مكة على طرق التجارة بازدهارها ونشاطها.')) },
        { id: 'mecca-b1-c5-knowledge', learningPointId: 'mecca-b1-c5-agreements', eligibleStages: ['knowledge'], exercise: mc(L('What was the practical effect of Quraysh trade agreements?', 'ما الأثر العملي للاتفاقيات التجارية التي عقدتها قريش؟'), { en: ['Merchants could travel and trade more safely', 'Merchants had to stop travelling', 'Farming replaced trade'], ar: ['تمكن التجار من السفر والتجارة بأمان أكبر', 'اضطر التجار إلى التوقف عن السفر', 'حلت الزراعة محل التجارة'] }, 0, L('The agreements made travel and trade in several regions safer.', 'جعلت الاتفاقيات السفر والتجارة في مناطق متعددة أكثر أمانًا.')) },
        { id: 'mecca-b1-c5-review', learningPointId: 'mecca-b1-c5-sacred', eligibleStages: ['review'], exercise: tf(L('During the sacred months, people stayed away from fighting.', 'في الأشهر الحرم كان الناس يبتعدون عن القتال.'), true, L('The chapter says the sacred months created a safer atmosphere for worship and visits to Mecca.', 'يقول الفصل إن الأشهر الحرم خلقت أجواء أكثر أمنًا للعبادة وزيارة مكة.')) },
      ],
      ...G(L('trade routes, agreements, safety, and pilgrimage', 'طرق التجارة والاتفاقيات والأمن والحج'), L('What made Mecca a major trading center?', 'ما الذي جعل مكة مركزًا تجاريًا رئيسيًا؟'), L('How did agreements and sacred months reduce risk for merchants and pilgrims?', 'كيف خففت الاتفاقيات والأشهر الحرم المخاطر على التجار والحجاج؟'), L('Use because, allowed, and because of this to explain cause and result.', 'استخدم لأن وسمحت وبسبب ذلك لشرح السبب والنتيجة.'), L('Practise route, wealthy, agreement, merchant, and sacred months.', 'تدرّب على نطق طرق التجارة، غنية، اتفاقيات، التجار، والأشهر الحرم.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Explain the connection between pilgrimage activity, trade fairs, and wealth.', 'يشرح العلاقة بين نشاط الحج والأسواق التجارية والثروة.'),
        L('Explain the social effect of widespread usury.', 'يشرح الأثر الاجتماعي لانتشار الربا.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c6-fairs', focus: 'sequence', claim: L('Large trade fairs took place during the pilgrimage period.', 'أقيمت أسواق تجارية كبرى في فترة الحج.'), evidence: L('Big trade fairs such as Ukaz, Majannah, and Dhul-Majaz took place during this time', 'كانت هناك أسواق تجارية كبرى في هذا الوقت، مثل عُكاظ ومَجَنَّة وذِي المَجاز') },
        { id: 'mecca-b1-c6-control', focus: 'main-idea', claim: L('Quraysh controlled the most important trade routes and wealth in Arabia.', 'سيطرت قريش على أهم طرق التجارة والثروة في شبه الجزيرة العربية.'), evidence: L('the Quraysh tribe controlled the most important trade routes and wealth in Arabia', 'كَانَتْ قبيلة قريش تُسَيْطِرُ على أهمّ طرُق التجارة والثروة في شبْه جزيرة العرب') },
        { id: 'mecca-b1-c6-usury', focus: 'cause-result', claim: L('Usury made the rich richer and the poor poorer.', 'جعل الربا الأغنياء أكثر ثراء والفقراء أكثر فقرًا.'), evidence: L('This made the rich richer and the poor poorer', 'صَارَ الأغنياء أَكْثَرَ ثَراءً، بَيْنَمَا ازْدَادَ الفُقراء فَقْراً') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'mecca-b1-c6-quick', learningPointId: 'mecca-b1-c6-fairs', eligibleStages: ['quick'], exercise: mc(L('Which activity accompanied the pilgrimage season in the chapter?', 'أي نشاط رافق موسم الحج في الفصل؟'), { en: ['Large trade fairs such as Ukaz, Majannah, and Dhul-Majaz', 'A ban on all buying and selling', 'Large farming festivals'], ar: ['أسواق تجارية كبرى مثل عكاظ ومجنة وذي المجاز', 'منع كامل للبيع والشراء', 'مهرجانات زراعية كبرى'] }, 0, L('The chapter directly names the three trade fairs.', 'يسمي الفصل الأسواق التجارية الثلاثة مباشرة.')) },
        { id: 'mecca-b1-c6-knowledge', learningPointId: 'mecca-b1-c6-control', eligibleStages: ['knowledge'], exercise: tf(L('At the beginning of the seventh century, Quraysh controlled important trade routes and wealth in Arabia.', 'في بداية القرن السابع كانت قريش تسيطر على أهم طرق التجارة والثروة في الجزيرة العربية.'), true, L('The chapter states this directly.', 'يذكر الفصل ذلك مباشرة.')) },
        { id: 'mecca-b1-c6-final', learningPointId: 'mecca-b1-c6-usury', eligibleStages: ['final'], exercise: tf(L('Usury reduced the gap between rich and poor in Mecca.', 'قلل الربا الفجوة بين الأغنياء والفقراء في مكة.'), false, L('The chapter says the opposite: the rich became richer and the poor became poorer.', 'يقول الفصل العكس: صار الأغنياء أكثر ثراء وازداد الفقراء فقرًا.')) },
      ],
      ...G(L('pilgrimage, fairs, trade control, and usury', 'الحج والأسواق والسيطرة التجارية والربا'), L('What commercial activity took place around the pilgrimage period?', 'ما النشاط التجاري الذي وقع في فترة الحج؟'), L('How did usury affect social inequality?', 'كيف أثر الربا في عدم المساواة الاجتماعية؟'), L('Use while and this made to contrast social outcomes.', 'استخدم بينما وأدى هذا إلى للمقارنة بين النتائج الاجتماعية.'), L('Practise fair, controlled, usury, and widespread.', 'تدرّب على نطق أسواق، تسيطر، الربا، وانتشار.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Explain how debt and usury widened the class gap.', 'يشرح كيف وسع الدين والربا الفجوة الطبقية.'),
        L('Compare the lives of rich people with the treatment of poor and weak people.', 'يقارن حياة الأغنياء بمعاملة الفقراء والضعفاء.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c7-luxury', focus: 'comparison', claim: L('The rich lived in luxury while the poor struggled to survive.', 'عاش الأغنياء في ترف بينما وجد الفقراء صعوبة في العيش.'), evidence: L('While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive', 'وبينما كان الأغنياء يعيشون في تَرَف بالأطباق الذهبيّة والكؤوس الفضّيّة، كان الفقراء يَجِدونَ صعوبة في العيْش') },
        { id: 'mecca-b1-c7-weak', focus: 'cause-result', claim: L('Orphans and weak people were treated badly and powerful people sometimes took their property by force.', 'عومل اليتامى والضعفاء بسوء وكان الأقوياء يأخذون أموالهم غصبًا.'), evidence: L('Orphans and weak people were treated badly, and powerful people often took their property by force', 'وكان اليتامى والضُعفاء يُعامَلونَ بشكْل سيّء، وكان الأقوياء غالبًا يأْخذون أمْوالهم غصبًا') },
        { id: 'mecca-b1-c7-debt', focus: 'cause-result', claim: L('Many people could not repay debt because of high interest.', 'لم يستطع كثير من الناس قضاء ديونهم بسبب الربا الفاحش.'), evidence: L('could not pay back their debts because of high interest', 'ولم يَسْتَطيعوا أنْ يَقْضوا ديونهم بسبب الربا الفاحش') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'mecca-b1-c7-quick', learningPointId: 'mecca-b1-c7-luxury', eligibleStages: ['quick'], exercise: matching(L('Match each social group with the condition described in the chapter.', 'صل كل فئة اجتماعية بالحالة المذكورة في الفصل.'), { en: [['The rich', 'lived in luxury'], ['The poor', 'struggled to survive']], ar: [['الأغنياء', 'عاشوا في ترف'], ['الفقراء', 'وجدوا صعوبة في العيش']] }, L('The chapter directly contrasts wealthy luxury with poor people’s struggle.', 'يقارن الفصل مباشرة بين ترف الأغنياء ومعاناة الفقراء.')) },
        { id: 'mecca-b1-c7-review', learningPointId: 'mecca-b1-c7-weak', eligibleStages: ['review'], exercise: mc(L('Which example most clearly shows injustice toward weak people?', 'أي مثال يوضح بصورة أوضح الظلم الواقع على الضعفاء؟'), { en: ['Powerful people took the property of orphans and weak people by force', 'Rich people used silver cups', 'Merchants travelled to other lands'], ar: ['كان الأقوياء يأخذون أموال اليتامى والضعفاء غصبًا', 'استخدم الأغنياء الكؤوس الفضية', 'سافر التجار إلى بلاد أخرى'] }, 0, L('The chapter explicitly describes forced seizure of weak people’s property.', 'يصف الفصل صراحة أخذ أموال الضعفاء بالقوة.')) },
        { id: 'mecca-b1-c7-final', learningPointId: 'mecca-b1-c7-debt', eligibleStages: ['final'], exercise: mc(L('Why could many people not repay their debts?', 'لماذا لم يستطع كثير من الناس قضاء ديونهم؟'), { en: ['Because of high interest', 'Because money no longer existed', 'Because all lending was forbidden'], ar: ['بسبب الربا الفاحش', 'لأن المال لم يعد موجودًا', 'لأن الإقراض كله كان ممنوعًا'] }, 0, L('The chapter directly links unpaid debt with high interest.', 'يربط الفصل مباشرة عدم قضاء الديون بالربا الفاحش.')) },
      ],
      ...G(L('class division, debt, luxury, and injustice toward weak people', 'الفجوة الطبقية والدين والترف وظلم الضعفاء'), L('How does the chapter contrast rich and poor lives?', 'كيف يقارن الفصل حياة الأغنياء والفقراء؟'), L('How did debt and social power reinforce inequality?', 'كيف عزز الدين والقوة الاجتماعية عدم المساواة؟'), L('Use while, because of, and could not to explain contrast and consequence.', 'استخدم بينما وبسبب ولم يستطع لشرح المقارنة والنتيجة.'), L('Practise social class, debt, interest, struggled, and orphan.', 'تدرّب على نطق الطبقات الاجتماعية، دين، الربا الفاحش، صعوبة في العيش، واليتامى.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Explain why tribal protection was essential in old Arab society.', 'يشرح لماذا كانت حماية القبيلة أساسية في المجتمع العربي القديم.'),
        L('Evaluate the tension between loyalty and wrongdoing described in the chapter.', 'يفسر التوتر بين الولاء والخطأ الذي يصفه الفصل.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c8-protection', focus: 'cause-result', claim: L('Without tribal protection, people could not easily protect life or property and were in great danger.', 'من دون حماية القبيلة لم يستطع الناس حماية حياتهم أو أموالهم وكانوا في خطر.'), evidence: L('Without a tribe, people could not easily protect their lives or property', 'وبدون القبيلة، لَمْ يستطع الناس أن يَحْموا حياتهم أو أموالهم') },
        { id: 'mecca-b1-c8-strength', focus: 'cause-result', claim: L('Physical strength was important because men were fighters in wars.', 'كانت القوة البدنية مهمة لأن الرجال كانوا يقاتلون في الحروب.'), evidence: L('physical strength was extremely important. Men were often seen as valuable because they were fighters in wars', 'كانت القوّة البدنيّة أمْرا حيويّا. وكان الرِجال هم الأعضاء الأكثر قيمة لأَنّهمْ كانوا يُقاتِلون في الحروب') },
        { id: 'mecca-b1-c8-loyalty', focus: 'theme', claim: L('People were expected to protect and honor the tribe even when it did something wrong.', 'كان الناس مطالبين بنصرة القبيلة حتى عندما تفعل خطأ أو ظلمًا.'), evidence: L('even when the tribe did something wrong', 'مهما فعلتْ قبيلتهم من خطأ أو ظلم') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'mecca-b1-c8-quick', learningPointId: 'mecca-b1-c8-protection', eligibleStages: ['quick'], exercise: fill(L('Complete the relationship between tribe and safety.', 'أكمل العلاقة بين القبيلة والأمان.'), L('Without a tribe, people could not easily protect their lives or [blank].', 'بدون القبيلة لم يستطع الناس أن يحموا حياتهم أو [blank].'), L('property', 'أموالهم'), L('The chapter links tribal belonging with protection of life and property.', 'يربط الفصل الانتماء القبلي بحماية الحياة والمال.')) },
        { id: 'mecca-b1-c8-knowledge', learningPointId: 'mecca-b1-c8-strength', eligibleStages: ['knowledge'], exercise: mc(L('Why was physical strength especially valued?', 'لماذا كانت القوة البدنية ذات قيمة خاصة؟'), { en: ['Men were fighters in wars', 'It made farming easy', 'It replaced tribal identity'], ar: ['لأن الرجال كانوا يقاتلون في الحروب', 'لأنها جعلت الزراعة سهلة', 'لأنها حلت محل الهوية القبلية'] }, 0, L('The chapter connects physical strength directly with fighting in wars.', 'يربط الفصل القوة البدنية مباشرة بالقتال في الحروب.')) },
        { id: 'mecca-b1-c8-final', learningPointId: 'mecca-b1-c8-loyalty', eligibleStages: ['final'], exercise: fill(L('Complete the chapter’s criticism of unconditional tribal loyalty.', 'أكمل نقد الفصل للولاء القبلي غير المشروط.'), L('People had to support the tribe even when it did something [blank].', 'كان عليهم نصرة القبيلة حتى عندما تفعل [blank].'), L('wrong', 'خطأ أو ظلمًا'), L('The chapter says tribal loyalty continued even when the tribe acted wrongly.', 'يقول الفصل إن الولاء للقبيلة استمر حتى عندما فعلت خطأ أو ظلمًا.')) },
      ],
      ...G(L('tribal protection, physical strength, ancestry, and loyalty', 'حماية القبيلة والقوة البدنية والأجداد والولاء'), L('Why was life outside tribal protection dangerous?', 'لماذا كانت الحياة خارج حماية القبيلة خطرة؟'), L('What problem appears when loyalty continues even after wrongdoing?', 'ما المشكلة عندما يستمر الولاء حتى بعد الخطأ؟'), L('Use because and even when to explain reason and concession.', 'استخدم لأن وحتى عندما لشرح السبب والاستدراك.'), L('Practise tribe, physical strength, property, ancestor, and honor.', 'تدرّب على نطق القبيلة، القوة البدنية، أموالهم، أجدادهم، والاحترام.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Compare how wealth and family affected women’s lives.', 'يقارن أثر الثروة والعائلة في حياة النساء.'),
        L('Explain why poets are compared with media in the chapter.', 'يشرح لماذا يقارن الفصل الشعراء بوسائل الإعلام.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c9-women', focus: 'comparison', claim: L('Rich women could run businesses while many poor women had no rights and faced unfair treatment.', 'استطاعت نساء غنيات إدارة أعمالهن بينما لم تملك كثير من الفقيرات حقوقًا وواجهن معاملة غير عادلة.'), evidence: L('Rich women, like Khadija, could run their own businesses. However, many poor women had no rights and faced unfair treatment', 'النساء الغنيّات، مثل السيّدة خديجة زوجة النبي، كُنَّ يَسْتَطِعْنَ أنْ يُدِرْنَ أعمالهن الخاصّة. ومع ذلك، كان كثير من النساء الفقيرات لا يملِكْن أيّ حقوق ويُواجِهْنَ معاملة غير عادلة') },
        { id: 'mecca-b1-c9-poetry', focus: 'main-idea', claim: L('Poets acted like media because poetry preserved history, praised tribes, and criticized enemies.', 'كان الشعراء مثل الإعلام لأن الشعر حفظ التاريخ ومدح القبائل وهجا الأعداء.'), evidence: L('poets were like the media of the people', 'وكان الشعراء هم إعلام ذلك الوقت') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'mecca-b1-c9-quick', learningPointId: 'mecca-b1-c9-women', eligibleStages: ['quick'], exercise: tf(L('The chapter says all women had the same social and economic position before Islam.', 'يقول الفصل إن جميع النساء كانت لهن المكانة الاجتماعية والاقتصادية نفسها قبل الإسلام.'), false, L('The chapter contrasts rich women who could run businesses with many poor women who lacked rights.', 'يقارن الفصل بين نساء غنيات استطعن إدارة الأعمال وكثير من الفقيرات اللواتي افتقدن الحقوق.')) },
        { id: 'mecca-b1-c9-review', learningPointId: 'mecca-b1-c9-poetry', eligibleStages: ['review'], exercise: tf(L('Poets are compared with media because poetry carried history, praise, and criticism.', 'يقارن الشعراء بالإعلام لأن الشعر نقل التاريخ والمدح والهجاء.'), true, L('The chapter explicitly describes poets as the media of the people.', 'يصف الفصل الشعراء صراحة بأنهم إعلام ذلك الوقت.')) },
      ],
      ...G(L('social status, women, slavery, poetry, and communication', 'المكانة الاجتماعية والنساء والعبودية والشعر والاتصال'), L('How did wealth affect women’s lives?', 'كيف أثرت الثروة في حياة النساء؟'), L('Why could poetry shape public memory and opinion?', 'لماذا استطاع الشعر تشكيل الذاكرة والرأي العام؟'), L('Use however and while to make supported contrasts.', 'استخدم لكن وبينما لبناء مقارنات يدعمها النص.'), L('Practise depending on, unfair treatment, brutal, poet, and media.', 'تدرّب على نطق بناء على، معاملة غير عادلة، ظروف قاسية، الشعراء، وإعلام.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Describe the mixture of belief in Allah and idol worship in pre-Islamic Mecca.', 'يصف اجتماع الإيمان بالله الخالق مع عبادة الأصنام في مكة قبل الإسلام.'),
        L('Compare the Hanifs with the dominant religious practices.', 'يقارن الحنفاء بالممارسات الدينية السائدة.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c10-idols', focus: 'direct', claim: L('There were 360 idols in and around the Ka’ba and in homes.', 'كان هناك 360 صنمًا داخل الكعبة وحولها وفي البيوت.'), evidence: L('There were 360 idols, including Lat, Manat, and Uzza', 'وكان هناك ٣٦٠ صَنَما، من بيْنها اللَّات والعُزَّى ومَناة') },
        { id: 'mecca-b1-c10-hanifs', focus: 'comparison', claim: L('Hanifs followed the old religion of Abraham.', 'اتبع الحنفاء دين إبراهيم في التوحيد.'), evidence: L('Some people, called Hanifs, followed the old religion of Abraham (as)', 'وكان هناك أشخاص يُعْرَفُونَ بالحُنَفاء، يَتَّبِعُونَ دين إبراهيم عليه السلام') },
        { id: 'mecca-b1-c10-mediators', focus: 'cause-result', claim: L('Many people believed in Allah as Creator but worshipped idols because they thought the idols brought them closer to Allah.', 'آمن كثير من الناس بالله خالقًا لكنهم عبدوا الأصنام لأنهم ظنوا أنها تقربهم إلى الله.'), evidence: L('They thought these idols helped them talk to Allah', 'ويظنون أنها تشفع وتقربهم عند الله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'mecca-b1-c10-quick', learningPointId: 'mecca-b1-c10-idols', eligibleStages: ['quick'], exercise: tap(L('How many idols does the chapter say were kept in and around the Ka’ba and in homes?', 'كم صنمًا يذكر الفصل أنها كانت داخل الكعبة وحولها وفي البيوت؟'), L('360 idols.', '360 صنمًا.'), L('The chapter explicitly gives the number 360.', 'يذكر الفصل صراحة العدد 360.')) },
        { id: 'mecca-b1-c10-knowledge', learningPointId: 'mecca-b1-c10-hanifs', eligibleStages: ['knowledge'], exercise: mc(L('Who followed the old religion of Abraham according to the chapter?', 'من الذين اتبعوا دين إبراهيم القديم وفق الفصل؟'), { en: ['The Hanifs', 'The usury lenders', 'The trade fair organizers'], ar: ['الحنفاء', 'المرابون', 'منظمو الأسواق التجارية'] }, 0, L('The chapter identifies the Hanifs as followers of Abraham’s old religion.', 'يحدد الفصل الحنفاء بوصفهم أتباع دين إبراهيم.')) },
        { id: 'mecca-b1-c10-final', learningPointId: 'mecca-b1-c10-mediators', eligibleStages: ['final'], exercise: matching(L('Match each belief with the role described in the chapter.', 'صل كل اعتقاد بالدور المذكور في الفصل.'), { en: [['Allah', 'was believed to be the Creator'], ['Idols', 'were wrongly treated as helpers or mediators']], ar: [['الله', 'آمنوا به بوصفه الخالق'], ['الأصنام', 'ظنوا أنها تشفع وتقربهم إلى الله']] }, L('The chapter distinguishes belief in Allah as Creator from the added worship of idols.', 'يفرق الفصل بين الإيمان بالله خالقًا وبين إضافة عبادة الأصنام.')) },
      ],
      ...G(L('idols, Hanifs, belief in Allah, and religious mediation', 'الأصنام والحنفاء والإيمان بالله والوساطة الدينية'), L('What religious practices were common around the Ka’ba?', 'ما الممارسات الدينية الشائعة حول الكعبة؟'), L('What contradiction does the chapter show between belief in Allah and worship of idols?', 'ما التناقض الذي يبينه الفصل بين الإيمان بالله وعبادة الأصنام؟'), L('Use although/however to explain a contradiction in belief and practice.', 'استخدم مع ذلك أو رغم أن لشرح التناقض بين الاعتقاد والممارسة.'), L('Practise idol, Hanif, Creator, superstition, and omen.', 'تدرّب على نطق الأصنام، الحنفاء، الخالق، الخرافات، والتطير.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Explain why Islam formed a new community distinct from existing power structures.', 'يشرح لماذا شكل الإسلام جماعة جديدة مختلفة عن هياكل القوة القائمة.'),
        L('Describe the effect of hearing the Quran on early believers.', 'يصف أثر سماع القرآن في المؤمنين الأوائل.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c11-community', focus: 'main-idea', claim: L('From the beginning Islam showed that Muslims were a new community.', 'منذ البداية جعل الإسلام المسلمين جماعة جديدة.'), evidence: L('From the beginning, Islam showed that Muslims were a new community', 'ومنْذ البداية، جَعَلَ الإسلام المسلمين جماعة جديدة') },
        { id: 'mecca-b1-c11-quran', focus: 'character-action', claim: L('Some listeners became sure the Quran was from Allah when they heard the Prophet read it.', 'تأكد بعض السامعين أن القرآن من عند الله عندما سمعوا النبي يقرأه.'), evidence: L('When they heard Prophet Muhammad (as) read the Quran, they were sure it was from Allah', 'وعندما سَمِعَ هؤلاء النبي محمد صلى الله عليه وسلم يَقْرَأُ القرآن، تَأَكَّدُوا أنه من عند الله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'mecca-b1-c11-quick', learningPointId: 'mecca-b1-c11-community', eligibleStages: ['quick'], exercise: mc(L('What social change does the chapter emphasize from the beginning of Islam?', 'ما التغير الاجتماعي الذي يؤكد عليه الفصل منذ بداية الإسلام؟'), { en: ['Muslims formed a new community', 'All tribal systems immediately disappeared', 'All Meccan leaders accepted Islam'], ar: ['شكل المسلمون جماعة جديدة', 'اختفت الأنظمة القبلية فورًا', 'قبل جميع زعماء مكة الإسلام'] }, 0, L('The chapter says Islam showed Muslims were a new community.', 'يقول الفصل إن الإسلام جعل المسلمين جماعة جديدة.')) },
        { id: 'mecca-b1-c11-review', learningPointId: 'mecca-b1-c11-quran', eligibleStages: ['review'], exercise: mc(L('What convinced some early listeners that the message was from Allah?', 'ما الذي جعل بعض السامعين الأوائل يتأكدون أن الرسالة من عند الله؟'), { en: ['Hearing Prophet Muhammad read the Quran', 'Seeing new trade agreements', 'Joining a tribal council'], ar: ['سماع النبي محمد يقرأ القرآن', 'رؤية اتفاقيات تجارية جديدة', 'الانضمام إلى مجلس قبلي'] }, 0, L('The chapter directly links hearing the Quran with this conviction.', 'يربط الفصل مباشرة سماع القرآن بهذا اليقين.')) },
      ],
      ...G(L('a new community, the Quran, belief, and opposition', 'الجماعة الجديدة والقرآن والإيمان والمعارضة'), L('What made the Muslim community different from its surroundings?', 'ما الذي جعل جماعة المسلمين مختلفة عمن حولها؟'), L('How did the Quran produce different responses among listeners and leaders?', 'كيف أحدث القرآن استجابات مختلفة لدى السامعين والزعماء؟'), L('Use when, however, and stood against to describe contrasting reactions.', 'استخدم عندما ولكن ووقفوا ضد لوصف ردود الفعل المتباينة.'), L('Practise politics, economics, community, ignored, and stood against.', 'تدرّب على نطق السياسة، الاقتصاد، جماعة جديدة، تجاهلوا، ووقفوا ضد.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Explain why Quraysh leaders viewed Islam as a threat to their power.', 'يشرح لماذا رأى زعماء قريش الإسلام تهديدًا لقوتهم.'),
        L('Compare existing financial practices with the economic changes commanded by Islam.', 'يقارن الممارسات المالية القائمة بالتغييرات الاقتصادية التي أمر بها الإسلام.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c12-threat', focus: 'motivation', claim: L('Quraysh leaders felt Islam was a danger to their power and did not accept it.', 'شعر زعماء قريش أن الإسلام خطر على قوتهم ولم يؤمنوا به.'), evidence: L('The leaders of Quraysh felt that Islam was a danger to their power and did not accept it', 'شَعَرَ زعماء قريش أنّ الإسلام خطَرٌ على قوّتهم، وَلَمْ يُؤْمِنُوا به') },
        { id: 'mecca-b1-c12-economy', focus: 'comparison', claim: L('The Quran forbade usury and allowed honest trade, while Islam also commanded zakat and sadaqah to help the poor.', 'منع القرآن الربا وأجاز التجارة الصادقة وأمر الإسلام بالزكاة والصدقة لمساعدة الفقراء.'), evidence: L('the Quran forbade this and allowed only honest trade. Islam also commanded zakat and sadaqah to help the poor', 'ولكنّ القرآن يَمْنَعُ هذا وَيَقُولُ إنّ التجارة الصادقة هي المسموح بها فقطْ. كما أَنَّهُمْ تَجَاهَلُوا أوامر الإسلام مثل الزكاة والصدقة لمساعدة الفقراء') },
        { id: 'mecca-b1-c12-unity', focus: 'motivation', claim: L('Maintaining power and unity was very important to the leaders.', 'كان الحفاظ على القوة والبقاء بصوت واحد مهمًا جدًا للزعماء.'), evidence: L('Keeping their power and unity was very important for them', 'وَكَانَ من المهمّ جدًّا بالنسبة لهم أَنْ يُحَافِظُوا على قوّتهم وَأَنْ يَبْقَوْا بصوْت واحد') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'mecca-b1-c12-quick', learningPointId: 'mecca-b1-c12-threat', eligibleStages: ['quick'], exercise: matching(L('Match the leaders with the reaction described in the chapter.', 'صل الزعماء برد الفعل المذكور في الفصل.'), { en: [['Quraysh leaders', 'felt Islam threatened their power'], ['Rich leaders', 'turned people against the new religion']], ar: [['زعماء قريش', 'شعروا أن الإسلام خطر على قوتهم'], ['الزعماء الأغنياء', 'جعلوا الناس ضد الدين الجديد']] }, L('The chapter links leadership status with organized resistance to Islam.', 'يربط الفصل مكانة الزعماء بالمقاومة المنظمة للإسلام.')) },
        { id: 'mecca-b1-c12-knowledge', learningPointId: 'mecca-b1-c12-economy', eligibleStages: ['knowledge'], exercise: mc(L('Which economic change did Islam bring according to the chapter?', 'أي تغيير اقتصادي جاء به الإسلام وفق الفصل؟'), { en: ['It forbade usury and allowed honest trade', 'It required all trade to stop', 'It made usury compulsory'], ar: ['منع الربا وأجاز التجارة الصادقة', 'أوجب إيقاف كل التجارة', 'جعل الربا واجبًا'] }, 0, L('The chapter explicitly contrasts usury with honest trade and mentions zakat and sadaqah.', 'يقارن الفصل صراحة بين الربا والتجارة الصادقة ويذكر الزكاة والصدقة.')) },
        { id: 'mecca-b1-c12-final', learningPointId: 'mecca-b1-c12-unity', eligibleStages: ['final'], exercise: mc(L('What did Quraysh leaders especially want to preserve?', 'ما الذي أراد زعماء قريش الحفاظ عليه بصورة خاصة؟'), { en: ['Their power and unity', 'A farming economy', 'The end of pilgrimage'], ar: ['قوتهم ووحدتهم', 'اقتصاد زراعي', 'نهاية الحج'] }, 0, L('The chapter says keeping their power and unity was very important for them.', 'يقول الفصل إن الحفاظ على قوتهم والبقاء بصوت واحد كان مهمًا جدًا لهم.')) },
      ],
      ...G(L('power, prestige, usury, honest trade, and charity', 'القوة والمكانة والربا والتجارة الصادقة والصدقة'), L('Why did leaders see Islam as a danger?', 'لماذا رأى الزعماء الإسلام خطرًا؟'), L('How did Islamic economic rules challenge existing interests?', 'كيف تحدت القواعد الاقتصادية الإسلامية المصالح القائمة؟'), L('Use because, but, and while to compare old practices with new rules.', 'استخدم لأن ولكن وبينما لمقارنة الممارسات القديمة بالقواعد الجديدة.'), L('Practise super-rich, prestigious, caretaker, forbade, and zakat.', 'تدرّب على نطق أغنياء، أصحاب مكانة، خدام الحجاج، يمنع، والزكاة.')),
    },
    {
      chapterId: 13,
      objectives: [
        L('Explain how opposition changed from mockery to violence.', 'يشرح كيف تحولت المعارضة من السخرية إلى العنف.'),
        L('Use Bilal and the boycott as evidence of escalating pressure.', 'يستخدم بلال والمقاطعة دليلًا على تصاعد الضغط.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c13-bilal', focus: 'character-action', claim: L('Umayya put a heavy rock on Bilal’s chest and ordered him to give up his religion.', 'وضع أمية صخرة ثقيلة على صدر بلال وأمره أن يترك دينه.'), evidence: L('He put a heavy rock on Bilal’s chest and ordered him to give up his religion', 'وَيَضَعُ صخرة ثقيلة على صدْر بلال، ويأمُره أنْ يَتْرُكَ دينه') },
        { id: 'mecca-b1-c13-boycott', focus: 'turning-point', claim: L('Between 617 and 620 the leaders began a social and economic boycott against Muslims and their supporters.', 'بين عامي 617 و620 بدأ الزعماء مقاطعة اجتماعية واقتصادية ضد المسلمين ومن ساعدهم.'), evidence: L('Between 617 and 620, they began a social and economic boycott against Muslims and those who helped them', 'فبين عاميْ ٦١٧ و ٦٢٠، بَدَأُوا مقاطعة اجتماعية واقتصادية ضدّ المسلمين والذين ساعَدوهُمْ') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'mecca-b1-c13-quick', learningPointId: 'mecca-b1-c13-bilal', eligibleStages: ['quick'], exercise: fill(L('Complete the detail about Bilal’s persecution.', 'أكمل تفصيل تعذيب بلال.'), L('Umayya put a heavy [blank] on Bilal’s chest.', 'وضع أمية [blank] ثقيلة على صدر بلال.'), L('rock', 'صخرة'), L('The chapter gives this as a direct example of violent pressure on a weak believer.', 'يقدم الفصل هذا مثالًا مباشرًا على الضغط العنيف على مؤمن ضعيف.')) },
        { id: 'mecca-b1-c13-review', learningPointId: 'mecca-b1-c13-boycott', eligibleStages: ['review'], exercise: tf(L('The social and economic boycott began between 617 and 620.', 'بدأت المقاطعة الاجتماعية والاقتصادية بين عامي 617 و620.'), true, L('The chapter gives these dates directly.', 'يذكر الفصل هذين التاريخين مباشرة.')) },
      ],
      ...G(L('mockery, violence, Bilal, and organized boycott', 'السخرية والعنف وبلال والمقاطعة المنظمة'), L('How did the treatment of opponents change?', 'كيف تغيرت معاملة المعارضين؟'), L('What do Bilal and the boycott show about the escalation of pressure?', 'ماذا يبين بلال والمقاطعة عن تصاعد الضغط؟'), L('Use at first, but when, and went further to show escalation.', 'استخدم في البداية ولكن عندما وزادوا لعرض التصاعد.'), L('Practise mocked, criticized, violent, Bilal, and boycott.', 'تدرّب على نطق سخروا، ينتقد، بعنف، بلال، ومقاطعة.')),
    },
    {
      chapterId: 14,
      objectives: [
        L('Describe the human cost of the boycott.', 'يصف الكلفة الإنسانية للمقاطعة.'),
        L('Explain the economic and moral reasons for continued hostility to Islam.', 'يشرح الأسباب الاقتصادية والأخلاقية لاستمرار العداء للإسلام.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c14-hunger', focus: 'cause-result', claim: L('The boycott caused extreme hunger; some people died and others ate tree leaves to survive.', 'سببت المقاطعة جوعًا شديدًا؛ فمات بعض الناس وأكل آخرون أوراق الشجر ليعيشوا.'), evidence: L('Some died of hunger, and others even ate tree leaves to survive', 'فمات بعضهم من الجوع، وأكَل آخرون أوراق الشجر لكي يعيشوا') },
        { id: 'mecca-b1-c14-wealth', focus: 'motivation', claim: L('Leaders became hostile because losing idols also meant losing wealth and influence.', 'أصبح الزعماء أعداء للإسلام لأن ترك الأصنام يعني فقدان الثروة والمكانة.'), evidence: L('Losing the idols meant losing wealth and influence, so they became hostile to Islam', 'وإذا ترَكوا أصنامهم، فقَدوا ثروتهم ومكانتهم، وهذا جعلهم أعداءً للإسلام') },
        { id: 'mecca-b1-c14-accountability', focus: 'motivation', claim: L('They also resisted the idea of being held responsible after death for harmful actions.', 'كما قاوموا فكرة الحساب بعد الموت على الأعمال السيئة.'), evidence: L('They also did not want to accept that people would be judged after death', 'كما أنّهم لم يَقْبَلوا أنْ يُعاقَبوا على أعمالهم السيّئة بعد الموت') },
      ],
      vocabularyTargets: vocabularyTargetsFor(14),
      assessmentItems: [
        { id: 'mecca-b1-c14-quick', learningPointId: 'mecca-b1-c14-hunger', eligibleStages: ['quick'], exercise: tf(L('The boycott became so severe that some people ate tree leaves to survive.', 'اشتدت المقاطعة حتى أكل بعض الناس أوراق الشجر لكي يعيشوا.'), true, L('The chapter gives hunger and eating tree leaves as direct evidence of suffering.', 'يذكر الفصل الجوع وأكل أوراق الشجر دليلًا مباشرًا على المعاناة.')) },
        { id: 'mecca-b1-c14-review', learningPointId: 'mecca-b1-c14-wealth', eligibleStages: ['review'], exercise: mc(L('Why did the idols have an economic importance for some leaders?', 'لماذا كانت للأصنام أهمية اقتصادية لبعض الزعماء؟'), { en: ['Losing them meant losing wealth and influence', 'They made farming easier', 'They ended all trade'], ar: ['تركها كان يعني فقدان الثروة والمكانة', 'كانت تجعل الزراعة أسهل', 'كانت تنهي التجارة كلها'] }, 0, L('The chapter directly connects idols with money, trade, power, wealth, and influence.', 'يربط الفصل مباشرة الأصنام بالمال والتجارة والقوة والثروة والمكانة.')) },
        { id: 'mecca-b1-c14-final', learningPointId: 'mecca-b1-c14-accountability', eligibleStages: ['final'], exercise: tf(L('The leaders welcomed the idea of being held responsible after death for injustice.', 'رحب الزعماء بفكرة الحساب بعد الموت على الظلم.'), false, L('The chapter says they did not want to accept such accountability.', 'يقول الفصل إنهم لم يريدوا قبول هذا الحساب.')) },
      ],
      ...G(L('boycott, hunger, economic interest, and moral accountability', 'المقاطعة والجوع والمصلحة الاقتصادية والحساب الأخلاقي'), L('What evidence shows the severity of the boycott?', 'ما الدليل على شدة المقاطعة؟'), L('How were economic interests and moral accountability connected to opposition?', 'كيف ارتبطت المصالح الاقتصادية والحساب الأخلاقي بالمعارضة؟'), L('Use so, because, and also to connect multiple motivations and consequences.', 'استخدم لذلك ولأن وكذلك لربط الدوافع والنتائج المتعددة.'), L('Practise survive, influence, hostile, judged, and loyalty.', 'تدرّب على نطق يعيشوا، مكانتهم، أعداء، الحساب، والعصبية القبلية.')),
    },
    {
      chapterId: 15,
      objectives: [
        L('Explain how tribal loyalty restricted freedom of choice.', 'يشرح كيف قيد الولاء القبلي حرية الاختيار.'),
        L('Compare Jahiliyyah with the justice, mercy, and equality described as Islamic values.', 'يقارن الجاهلية بالعدل والرحمة والمساواة التي يعرضها الفصل قيمًا إسلامية.'),
      ],
      evidencePoints: [
        { id: 'mecca-b1-c15-choice', focus: 'cause-result', claim: L('Strong tribal loyalty made freedom of choice difficult because leaving the tribe’s way could mean losing protection.', 'جعلت العصبية القبلية حرية الاختيار صعبة لأن مخالفة طريق القبيلة قد تعني فقدان الحماية.'), evidence: L('tribal loyalty was so strong that freedom of choice was difficult', 'فإنّ "حريّة الاختيار" التي تكلّم عنها الإسلام لم تكن تعمَل في ذلك الوقت بسبب العصبية القاسية') },
        { id: 'mecca-b1-c15-unity', focus: 'comparison', claim: L('Islam called for a better unity based on justice, mercy, and belief in one Allah.', 'دعا الإسلام إلى وحدة أرقى تقوم على العدل والرحمة والإيمان بالله الواحد.'), evidence: L('a better form of unity based on justice, mercy, and belief in one Allah', 'كان الإسلام يدعو لوحدة أرقى تقوم على العدل والرحمة والإيمان بالله الواحد الأحد') },
        { id: 'mecca-b1-c15-opposite', focus: 'theme', claim: L('The chapter presents Islam as the opposite of a society without justice and mercy.', 'يعرض الفصل الإسلام نقيضًا لمجتمع يغيب عنه العدل والرحمة.'), evidence: L('Jahiliyyah means a society without justice and mercy; Islam is the opposite because it brings peace and fairness', 'إن الجاهلية تعني غياب العدل والرحمة، بينما الإسلام هو نقيضها التام لأنه يجلب السلام والحرية والكرامة الإنسانية لجميع البشر') },
      ],
      vocabularyTargets: vocabularyTargetsFor(15),
      assessmentItems: [
        { id: 'mecca-b1-c15-quick', learningPointId: 'mecca-b1-c15-choice', eligibleStages: ['quick'], exercise: mc(L('Why was freedom of choice difficult in the tribal system?', 'لماذا كانت حرية الاختيار صعبة في النظام القبلي؟'), { en: ['Leaving the tribe’s way could mean losing protection', 'Every person had complete legal independence', 'Tribes encouraged members to reject all tribal rules'], ar: ['مخالفة طريق القبيلة قد تعني فقدان الحماية', 'كان لكل شخص استقلال قانوني كامل', 'شجعت القبائل أفرادها على رفض كل قواعدها'] }, 0, L('The chapter connects strong tribal loyalty with loss of protection for those who left the tribe’s way.', 'يربط الفصل العصبية القبلية بفقدان الحماية لمن يخالف طريق القبيلة.')) },
        { id: 'mecca-b1-c15-review', learningPointId: 'mecca-b1-c15-unity', eligibleStages: ['review'], exercise: tf(L('The chapter says Islam called for unity based on justice, mercy, and belief in one Allah.', 'يقول الفصل إن الإسلام دعا إلى وحدة تقوم على العدل والرحمة والإيمان بالله الواحد.'), true, L('This is the chapter’s direct description of the better form of unity.', 'هذا هو الوصف المباشر في الفصل لشكل الوحدة الأفضل.')) },
        { id: 'mecca-b1-c15-final', learningPointId: 'mecca-b1-c15-opposite', eligibleStages: ['final'], exercise: fill(L('Complete the final contrast in the book.', 'أكمل المقارنة النهائية في الكتاب.'), L('Jahiliyyah is described as a society without justice and [blank].', 'تُعرَّف الجاهلية بأنها غياب العدل و[blank].'), L('mercy', 'الرحمة'), L('The final chapter contrasts the absence of justice and mercy with Islam’s values.', 'يقارن الفصل الأخير غياب العدل والرحمة بقيم الإسلام.')) },
      ],
      ...G(L('freedom, tribal loyalty, justice, mercy, equality, and human dignity', 'الحرية والعصبية القبلية والعدل والرحمة والمساواة والكرامة الإنسانية'), L('Why did tribal loyalty make independent choice difficult?', 'لماذا جعلت العصبية القبلية الاختيار المستقل صعبًا؟'), L('How does the final chapter define the contrast between Jahiliyyah and Islam?', 'كيف يعرّف الفصل الأخير الفرق بين الجاهلية والإسلام؟'), L('Use in reality, while, and because to compare two social systems.', 'استخدم في الواقع وبينما ولأن لمقارنة نظامين اجتماعيين.'), L('Practise freedom of choice, stateless, prevent, mercy, and fairness.', 'تدرّب على نطق حرية الاختيار، بدون وطن، لمنع، الرحمة، والعدل.')),
    },
  ],
});
