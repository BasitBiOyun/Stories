import {
  defineLearningBlueprint,
  type BlueprintAssessmentItem,
  type BlueprintCognitiveFocus,
  type BlueprintStage,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b2BlueprintAuthoring';
import { meccaB2HighlightTargets } from './source';

type PointDraft = {
  key: string;
  focus: BlueprintCognitiveFocus;
  stage: BlueprintStage;
  claim: LocalizedText;
  evidence: LocalizedText;
  exercise: BlueprintAssessmentItem['exercise'];
};

type ChapterDraft = {
  chapterId: number;
  theme: LocalizedText;
  primaryQuestion: LocalizedText;
  analysisQuestion: LocalizedText;
  points: PointDraft[];
};

const V = (chapterId: number, index = 0): LocalizedText => {
  const target = meccaB2HighlightTargets[chapterId]?.[index];
  if (!target) throw new Error(`Mecca B2 Blueprint: missing canonical Word Note ${index + 1} for Chapter ${chapterId}.`);
  return L(target.en.word, target.ar.word);
};

const P = (
  chapterId: number,
  key: string,
  focus: BlueprintCognitiveFocus,
  stage: BlueprintStage,
  evidenceIndex: number,
  claim: LocalizedText,
  exercise: BlueprintAssessmentItem['exercise'],
): PointDraft => ({ key, focus, stage, claim, evidence: V(chapterId, evidenceIndex), exercise });

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (meccaB2HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `mecca-b2-c${chapterId}-v${index + 1}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

const guides = (draft: ChapterDraft) => guideBundle({
  focus: draft.theme,
  primaryQuestion: draft.primaryQuestion,
  secondQuestion: draft.analysisQuestion,
  grammar: L(
    'Use cause-effect links, contrast, concession, evidence language, and careful qualifiers such as according to the chapter, while, whereas, therefore, and this suggests.',
    'استخدم روابط السبب والنتيجة والمقارنة والاستدراك ولغة الدليل وعبارات التحفظ مثل: وفقًا للفصل، بينما، في حين، لذلك، وهذا يدل على.',
  ),
  pronunciation: L(
    'Practise the chapter Word Notes, historical names, and stress in longer academic terms before the analytical response.',
    'تدرّب على Word Notes وأسماء الأعلام ونبر المصطلحات الأكاديمية الطويلة قبل الاستجابة التحليلية.',
  ),
  fast: L(
    `Write 120–150 words answering: ${draft.analysisQuestion.en} Use two distinct chapter details where available and explain what each proves.`,
    `اكتب 120–150 كلمة تجيب عن: ${draft.analysisQuestion.ar} واستخدم دليلين مختلفين عندما يتيحهما الفصل واشرح ما الذي يثبته كل دليل.`,
  ),
  support: L(
    'Use: “The chapter states ___. This supports ___. Another detail is ___. Together, these details suggest ___.”',
    'استخدم: «يذكر الفصل ___. وهذا يدعم ___. ودليل آخر هو ___. وتشير هذه الأدلة معًا إلى ___.»',
  ),
});

const drafts: ChapterDraft[] = [
  {
    chapterId: 1,
    theme: L('regional rivalry, tribal fragmentation, and the setting of Islam', 'التنافس الإقليمي والتجزؤ القبلي وسياق ظهور الإسلام'),
    primaryQuestion: L('How does the chapter establish the regional and Arabian setting before turning to Mecca?', 'كيف يؤسس الفصل للسياق الإقليمي والعربي قبل الانتقال إلى مكة؟'),
    analysisQuestion: L('Why does the chapter place imperial rivalry beside the absence of political unity in Arabia?', 'لماذا يضع الفصل التنافس بين الإمبراطوريتين بجانب غياب الوحدة السياسية في الجزيرة العربية؟'),
    points: [
      P(1, 'setting', 'main-idea', 'quick', 0,
        L('The chapter places the rise of Islam within the broad historical setting of the Middle Ages.', 'يضع الفصل ظهور الإسلام داخل السياق التاريخي الواسع للعصور الوسطى.'),
        mc(L('What broad historical setting opens the chapter?', 'ما السياق التاريخي الواسع الذي يفتتح به الفصل؟'),
          { en: ['The Middle Ages and the rise of Islam', 'The Industrial Revolution', 'Modern European colonialism'], ar: ['العصور الوسطى وظهور الإسلام', 'الثورة الصناعية', 'الاستعمار الأوروبي الحديث'] }, 0,
          L('The chapter begins by locating the rise of Islam within the Middle Ages.', 'يبدأ الفصل بوضع ظهور الإسلام ضمن العصور الوسطى.'))),
      P(1, 'rivalry', 'cause-result', 'knowledge', 2,
        L('The rivalry between Byzantium and the Sassanids exhausted both regional superpowers.', 'أرهق التنافس بين البيزنطيين والساسانيين القوتين الإقليميتين.'),
        tf(L('The chapter says the rivalry between the two superpowers exhausted both sides.', 'يذكر الفصل أن التنافس بين القوتين العظميين أرهق الطرفين.'), true,
          L('The text states directly that the rivalry exhausted both sides.', 'ينص الفصل مباشرة على أن التنافس أرهق كلا الجانبين.'))),
      P(1, 'fragmentation', 'comparison', 'final', 3,
        L('Unlike the neighboring empires, Arabia lacked one political authority because Arabs lived in tribes.', 'بخلاف الإمبراطوريات المجاورة افتقرت الجزيرة العربية إلى سلطة سياسية واحدة بسبب التنظيم القبلي.'),
        matching(L('Match the two political settings described in the chapter.', 'صل بين السياقين السياسيين المذكورين في الفصل.'),
          { en: [['Byzantine and Sassanid worlds', 'Large rival empires'], ['Arabian Peninsula', 'No single political unity']], ar: [['العالمان البيزنطي والساساني', 'إمبراطوريتان متنافستان كبيرتان'], ['شبه الجزيرة العربية', 'لا توجد وحدة سياسية واحدة']] },
          L('The chapter contrasts imperial organization around Arabia with tribal fragmentation within the peninsula.', 'يقارن الفصل بين التنظيم الإمبراطوري حول الجزيرة والتجزؤ القبلي داخلها.'))),
    ],
  },
  {
    chapterId: 2,
    theme: L('Jahiliyyah as moral and social disorder', 'الجاهلية بوصفها اضطرابًا أخلاقيًا واجتماعيًا'),
    primaryQuestion: L('What does “ignorance” mean in the chapter?', 'ماذا يعني «الجهل» في الفصل؟'),
    analysisQuestion: L('Why is Jahiliyyah presented as more than a lack of scientific knowledge?', 'لماذا تُعرض الجاهلية بوصفها أكثر من مجرد نقص في المعرفة العلمية؟'),
    points: [
      P(2, 'meaning', 'main-idea', 'quick', 0,
        L('Jahiliyyah refers to a moral, religious, and social condition rather than simply lack of knowledge.', 'تشير الجاهلية إلى حالة دينية وأخلاقية واجتماعية لا إلى مجرد نقص المعرفة.'),
        mc(L('Which summary best matches the chapter’s meaning of Jahiliyyah?', 'أي تلخيص يطابق معنى الجاهلية في الفصل؟'),
          { en: ['Spiritual, moral, and social disorder', 'No science or practical knowledge at all', 'Only a geographical name'], ar: ['اضطراب ديني وأخلاقي واجتماعي', 'انعدام العلم والمعرفة العملية تمامًا', 'اسم جغرافي فقط'] }, 0,
          L('The chapter explicitly rejects the idea that ignorance simply means lack of science or knowledge.', 'يرفض الفصل صراحة أن يكون الجهل مجرد نقص في العلم أو المعرفة.'))),
      P(2, 'oppressed', 'cause-result', 'review', 2,
        L('The chapter connects the social order of Jahiliyyah with misery for oppressed, weak, and poor people.', 'يربط الفصل النظام الاجتماعي في الجاهلية بمعاناة المظلومين والضعفاء والفقراء.'),
        mc(L('Who is described as suffering under the unequal social order?', 'من يوصف بأنه يعاني في النظام الاجتماعي غير المتكافئ؟'),
          { en: ['The oppressed, weak, and poor', 'Only wealthy merchants', 'Only foreign rulers'], ar: ['المظلومون والضعفاء والفقراء', 'التجار الأثرياء فقط', 'الحكام الأجانب فقط'] }, 0,
          L('The opening contrasts support for the powerful with the misery of oppressed and weak groups.', 'تقارن البداية بين الانحياز للأقوياء ومعاناة الفئات المظلومة والضعيفة.'))),
    ],
  },
  {
    chapterId: 3,
    theme: L('Mecca as sacred center and settlement', 'مكة بوصفها مركزًا مقدسًا ومستوطنة'),
    primaryQuestion: L('How does the chapter connect the Ka’ba with the development of Mecca?', 'كيف يربط الفصل الكعبة بتطور مكة؟'),
    analysisQuestion: L('How are worship, settlement, and the city’s sacred identity linked?', 'كيف ترتبط العبادة والاستقرار والهوية المقدسة للمدينة؟'),
    points: [
      P(3, 'sacred-city', 'main-idea', 'quick', 0,
        L('Mecca is presented as Islam’s holy city and the location of the Ka’ba.', 'تُقدم مكة بوصفها مدينة الإسلام المقدسة وموقع الكعبة.'),
        tf(L('The chapter presents Mecca as the holy city of Islam.', 'يقدم الفصل مكة بوصفها المدينة المقدسة للإسلام.'), true,
          L('The chapter opens by identifying Mecca as the holy city of Islam.', 'يفتتح الفصل بتعريف مكة بأنها المدينة المقدسة للإسلام.'))),
      P(3, 'settlement', 'cause-result', 'final', 4,
        L('The chapter treats the Ka’ba as the main factor in Mecca becoming a settlement.', 'يعد الفصل الكعبة العامل الرئيس في تحول مكة إلى مستوطنة.'),
        fill(L('Complete the chapter’s cause-effect relationship.', 'أكمل علاقة السبب والنتيجة في الفصل.'),
          L('The Ka’ba was the main factor in Mecca becoming a [blank].', 'كانت الكعبة العامل الرئيس في تحول مكة إلى [blank].'),
          L('settlement', 'مستوطنة'),
          L('The chapter says city life began with the building of the Ka’ba.', 'يذكر الفصل أن حياة المدينة بدأت ببناء الكعبة.'))),
    ],
  },
  {
    chapterId: 4,
    theme: L('pilgrimage, Quraysh rule, and the turn toward trade', 'الحج وحكم قريش والتحول نحو التجارة'),
    primaryQuestion: L('What chain of changes leads from settlement to a trade-oriented city?', 'ما سلسلة التغيرات التي تقود من الاستقرار إلى مدينة تعتمد على التجارة؟'),
    analysisQuestion: L('How do environment and religious importance shape Mecca’s economy?', 'كيف تشكل البيئة والأهمية الدينية اقتصاد مكة؟'),
    points: [
      P(4, 'pilgrimage', 'cause-result', 'quick', 2,
        L('The Ka’ba became a pilgrimage site and helped Mecca grow.', 'أصبحت الكعبة موقعًا للحج وأسهم ذلك في نمو مكة.'),
        mc(L('What helped Mecca grow after the Ka’ba became central to worship?', 'ما الذي ساعد مكة على النمو بعد أن أصبحت الكعبة مركزًا للعبادة؟'),
          { en: ['Pilgrimage to the Ka’ba', 'A new farming empire', 'Closing caravan routes'], ar: ['الحج إلى الكعبة', 'إمبراطورية زراعية جديدة', 'إغلاق طرق القوافل'] }, 0,
          L('The chapter links pilgrimage with rapid growth of the city.', 'يربط الفصل الحج بالنمو السريع للمدينة.'))),
      P(4, 'quraysh', 'sequence', 'knowledge', 0,
        L('After earlier tribal rule, administration of Mecca and the Ka’ba passed to Quraysh in the fifth century.', 'بعد حكم قبائل سابقة انتقلت إدارة مكة والكعبة إلى قريش في القرن الخامس.'),
        tf(L('The chapter says Quraysh gained administration of Mecca and the Ka’ba in the fifth century.', 'يذكر الفصل أن قريش تولت إدارة مكة والكعبة في القرن الخامس.'), true,
          L('The chapter gives this transition as part of Mecca’s political sequence.', 'يذكر الفصل هذا الانتقال ضمن التسلسل السياسي لمكة.'))),
      P(4, 'trade', 'cause-result', 'final', 3,
        L('Because Mecca’s surroundings were unsuitable for agriculture, trade became an important means of livelihood.', 'لأن محيط مكة لم يكن مناسبًا للزراعة أصبحت التجارة وسيلة مهمة للمعيشة.'),
        mc(L('Why did trade become especially important to Mecca?', 'لماذا أصبحت التجارة مهمة بصورة خاصة لمكة؟'),
          { en: ['The surroundings were unsuitable for agriculture', 'Agriculture was forbidden', 'No caravans could leave the city'], ar: ['لم يكن المحيط مناسبًا للزراعة', 'كانت الزراعة محرمة', 'لم تستطع أي قافلة مغادرة المدينة'] }, 0,
          L('The chapter directly connects difficult agricultural conditions with reliance on trade.', 'يربط الفصل مباشرة صعوبة الزراعة بالاعتماد على التجارة.'))),
    ],
  },
  {
    chapterId: 5,
    theme: L('trade agreements and Mecca’s commercial expansion', 'الاتفاقيات التجارية والتوسع التجاري لمكة'),
    primaryQuestion: L('How did Quraysh leaders expand Mecca’s commercial reach?', 'كيف وسع زعماء قريش نطاق تجارة مكة؟'),
    analysisQuestion: L('What evidence shows that Meccan trade was organized on a large regional scale?', 'ما الأدلة التي تظهر أن تجارة مكة كانت منظمة على نطاق إقليمي واسع؟'),
    points: [
      P(5, 'caravans', 'main-idea', 'quick', 0,
        L('Large caravans linked Mecca with long-distance trade networks.', 'ربطت القوافل الكبيرة مكة بشبكات التجارة بعيدة المدى.'),
        matching(L('Match the commercial element with its role.', 'صل العنصر التجاري بدوره.'),
          { en: [['Caravans', 'Transport goods across regions'], ['Trade agreements', 'Support safer access to markets']], ar: [['القوافل', 'تنقل السلع بين المناطق'], ['الاتفاقيات التجارية', 'تدعم الوصول الآمن إلى الأسواق']] },
          L('The chapter combines agreements and caravan movement to explain Mecca’s commercial growth.', 'يجمع الفصل بين الاتفاقيات وحركة القوافل لتفسير النمو التجاري لمكة.'))),
      P(5, 'boost', 'cause-result', 'knowledge', 2,
        L('Hashim ibn Abd Manaf is presented as playing a key role in boosting Mecca’s economy through trade relations.', 'يقدم الفصل هاشم بن عبد مناف بوصفه صاحب دور رئيس في تنشيط اقتصاد مكة عبر العلاقات التجارية.'),
        mc(L('Who is identified as a key figure in boosting Mecca’s economy?', 'من يحدده الفصل بوصفه شخصية رئيسة في تنشيط اقتصاد مكة؟'),
          { en: ['Hashim ibn Abd Manaf', 'Abu Jahl', 'A Byzantine emperor'], ar: ['هاشم بن عبد مناف', 'أبو جهل', 'إمبراطور بيزنطي'] }, 0,
          L('The chapter names Hashim directly when discussing commercial agreements and economic growth.', 'يسمي الفصل هاشم مباشرة عند الحديث عن الاتفاقيات والنمو الاقتصادي.'))),
      P(5, 'scale', 'cause-result', 'review', 4,
        L('The chapter uses the size and frequency of caravan cargo to show the scale of Meccan trade.', 'يستخدم الفصل حجم القوافل وتكرارها لإظهار اتساع تجارة مكة.'),
        tf(L('The chapter presents Meccan commerce as limited to a few small local exchanges.', 'يقدم الفصل تجارة مكة بوصفها مقتصرة على مبادلات محلية صغيرة.'), false,
          L('It describes large seasonal caravans, year-round movement, and trade with several regions.', 'يصف قوافل موسمية كبيرة وحركة طوال العام وتجارة مع مناطق متعددة.'))),
    ],
  },
  {
    chapterId: 6,
    theme: L('route disruption, sacred months, pilgrimage, and commerce', 'تعطل الطرق والأشهر الحرم والحج والتجارة'),
    primaryQuestion: L('How did regional war and sacred months change trade conditions?', 'كيف غيرت الحروب الإقليمية والأشهر الحرم ظروف التجارة؟'),
    analysisQuestion: L('How does the chapter connect security, worship, and economic activity?', 'كيف يربط الفصل الأمن والعبادة والنشاط الاقتصادي؟'),
    points: [
      P(6, 'routes', 'cause-result', 'quick', 0,
        L('War made the Silk Road less usable and increased the importance of routes through the Red Sea and Arabia.', 'جعلت الحرب طريق الحرير أقل قابلية للاستخدام وزادت أهمية طرق البحر الأحمر والجزيرة العربية.'),
        mc(L('What happened when the Silk Road became difficult to use?', 'ماذا حدث عندما أصبح طريق الحرير صعب الاستخدام؟'),
          { en: ['Arabian and Red Sea routes became more important', 'All trade stopped permanently', 'Mecca became an agricultural center'], ar: ['ازدادت أهمية طرق الجزيرة والبحر الأحمر', 'توقفت التجارة نهائيًا', 'أصبحت مكة مركزًا زراعيًا'] }, 0,
          L('The chapter links imperial wars with the greater importance of alternative routes.', 'يربط الفصل الحروب الإمبراطورية بزيادة أهمية الطرق البديلة.'))),
      P(6, 'security', 'cause-result', 'review', 1,
        L('The sacred months created a safer environment that supported pilgrimage and movement.', 'خلقت الأشهر الحرم بيئة أكثر أمانًا دعمت الحج والحركة.'),
        mc(L('What did the sacred months contribute to?', 'ما الذي أسهمت فيه الأشهر الحرم؟'),
          { en: ['A safer setting for Hajj and travel', 'A ban on all travel', 'The end of pilgrimage'], ar: ['بيئة أكثر أمانًا للحج والسفر', 'منع جميع أشكال السفر', 'إنهاء الحج'] }, 0,
          L('The text says fighting was prohibited and more people could perform Hajj.', 'يذكر النص أن القتال كان محرمًا وأن مزيدًا من الناس استطاعوا أداء الحج.'))),
      P(6, 'fairs', 'cause-result', 'final', 3,
        L('Trade festivals held during the sacred months connected pilgrimage season with lively commerce.', 'ربطت الأسواق التجارية التي أقيمت في الأشهر الحرم موسم الحج بتجارة نشطة.'),
        tf(L('The chapter separates the Hajj season completely from commercial fairs.', 'يفصل الفصل موسم الحج تمامًا عن الأسواق التجارية.'), false,
          L('It states that major fairs were held during the sacred months and especially during the Hajj season.', 'ينص الفصل على أن أسواقًا كبرى كانت تقام في الأشهر الحرم وخصوصًا موسم الحج.'))),
    ],
  },
  {
    chapterId: 7,
    theme: L('usury, concentrated wealth, and social-class division', 'الربا وتركيز الثروة والانقسام الطبقي'),
    primaryQuestion: L('How does the chapter connect lending practices with social inequality?', 'كيف يربط الفصل ممارسات الإقراض بالتفاوت الاجتماعي؟'),
    analysisQuestion: L('What cause-and-effect chain links debt, wealth concentration, and class division?', 'ما سلسلة السبب والنتيجة التي تربط الدين وتركيز الثروة والانقسام الطبقي؟'),
    points: [
      P(7, 'usury', 'cause-result', 'quick', 0,
        L('Usury helped lenders increase wealth while borrowers faced heavier debt.', 'ساعد الربا المقرضين على زيادة الثروة بينما واجه المقترضون ديونًا أثقل.'),
        mc(L('What social effect does the chapter connect with usury?', 'ما الأثر الاجتماعي الذي يربطه الفصل بالربا؟'),
          { en: ['The rich became richer and the poor poorer', 'All classes became equal', 'Debt disappeared'], ar: ['ازداد الغني غنى والفقير فقرًا', 'تساوت جميع الطبقات', 'اختفت الديون'] }, 0,
          L('The chapter describes usury as part of a system that concentrated wealth and deepened poverty.', 'يصف الفصل الربا بأنه جزء من نظام يركز الثروة ويعمق الفقر.'))),
      P(7, 'aristocracy', 'cause-result', 'knowledge', 2,
        L('Money lending and concentrated wealth contributed to a powerful aristocracy in Mecca.', 'أسهم الإقراض وتركيز الثروة في نشوء أرستقراطية قوية في مكة.'),
        tf(L('The chapter connects concentrated wealth with the rise of a powerful upper class.', 'يربط الفصل تركيز الثروة بظهور طبقة عليا قوية.'), true,
          L('It explicitly describes a wealthy aristocracy and powerful lenders and capitalists.', 'يصف صراحة أرستقراطية ثرية ومقرضين وأصحاب رأس مال أقوياء.'))),
      P(7, 'class-gap', 'comparison', 'final', 4,
        L('The chapter contrasts extreme wealth with people who could barely survive.', 'يقارن الفصل بين الثراء الشديد وأناس كانوا بالكاد يستطيعون البقاء.'),
        matching(L('Match each social position with the chapter’s description.', 'صل كل وضع اجتماعي بوصفه في الفصل.'),
          { en: [['Wealthy class', 'Luxury and concentrated money'], ['Poor class', 'Could barely survive']], ar: [['الطبقة الثرية', 'ترف وتركيز للمال'], ['الطبقة الفقيرة', 'بالكاد تستطيع البقاء']] },
          L('The chapter uses a sharp contrast to show extreme social-class division.', 'يستخدم الفصل مقارنة حادة لإظهار الانقسام الطبقي الشديد.'))),
    ],
  },
  {
    chapterId: 8,
    theme: L('injustice, weak protection, and Hilfü’l-Fudûl', 'الظلم وضعف الحماية وحلف الفضول'),
    primaryQuestion: L('Why was Hilfü’l-Fudûl created?', 'لماذا أُنشئ حلف الفضول؟'),
    analysisQuestion: L('What problem in tribal protection did the agreement try to correct?', 'ما المشكلة في نظام الحماية القبلية التي حاول الاتفاق معالجتها؟'),
    points: [
      P(8, 'agreement', 'cause-result', 'quick', 2,
        L('Hilfü’l-Fudûl was an agreement created to protect people who were being oppressed.', 'كان حلف الفضول اتفاقًا أُنشئ لحماية من يتعرضون للظلم.'),
        tap(L('What problem was Hilfü’l-Fudûl created to address?', 'ما المشكلة التي أُنشئ حلف الفضول لمعالجتها؟'),
          L('The oppression of weak and unprotected people in Mecca.', 'ظلم الضعفاء ومن لا حماية لهم في مكة.'),
          L('The chapter introduces the agreement after examples of unfair treatment of weak, foreign, and defenseless people.', 'يقدم الفصل الاتفاق بعد أمثلة على المعاملة الظالمة للضعفاء والغرباء ومن لا حماية لهم.'))),
      P(8, 'justice', 'cause-result', 'review', 4,
        L('The organization is presented as helping maintain justice and protect the rights of the oppressed.', 'يقدم التنظيم بوصفه مساهمًا في حفظ العدالة وحماية حقوق المظلومين.'),
        mc(L('What social function did Hilfü’l-Fudûl serve?', 'ما الوظيفة الاجتماعية التي أدىها حلف الفضول؟'),
          { en: ['Protecting the oppressed and supporting justice', 'Increasing usury', 'Ending all pilgrimage'], ar: ['حماية المظلومين ودعم العدالة', 'زيادة الربا', 'إنهاء الحج كله'] }, 0,
          L('The chapter directly connects the alliance with justice, order, and protection of rights.', 'يربط الفصل الحلف مباشرة بالعدالة والنظام وحماية الحقوق.'))),
    ],
  },
  {
    chapterId: 9,
    theme: L('generosity, motive, and tribal competition', 'الكرم والدافع والمنافسة القبلية'),
    primaryQuestion: L('Why does the chapter refuse to describe every pre-Islamic custom as entirely negative?', 'لماذا يرفض الفصل وصف كل عادة قبل الإسلام بأنها سلبية تمامًا؟'),
    analysisQuestion: L('How can an admired action become morally distorted by motive and competition?', 'كيف يمكن أن يتشوه فعل محمود بسبب الدافع والمنافسة؟'),
    points: [
      P(9, 'generosity', 'comparison', 'quick', 2,
        L('The chapter recognizes generosity and hospitality as admired qualities in pre-Islamic Arab life.', 'يعترف الفصل بالكرم والضيافة بوصفهما من الصفات المحمودة في حياة العرب قبل الإسلام.'),
        tf(L('The chapter says generosity and hospitality were completely absent before Islam.', 'يذكر الفصل أن الكرم والضيافة كانا غائبين تمامًا قبل الإسلام.'), false,
          L('It explicitly recognizes extraordinary generosity and hospitality.', 'يعترف صراحة بوجود كرم وضيافة استثنائيين.'))),
      P(9, 'motive', 'motivation', 'final', 4,
        L('The chapter argues that generosity could be distorted when driven by arrogance, fame, and tribal honor.', 'يرى الفصل أن الكرم قد يتشوه عندما يدفعه التكبر والشهرة والشرف القبلي.'),
        fill(L('Complete the chapter’s explanation of distorted motive.', 'أكمل تفسير الفصل للدافع المشوه.'),
          L('An admired quality such as generosity could become problematic when driven by [blank].', 'قد تصبح صفة محمودة مثل الكرم مشكلة عندما يدفعها [blank].'),
          L('arrogance', 'التكبر'),
          L('The chapter contrasts generosity itself with motives of pride and tribal competition.', 'يقارن الفصل بين الكرم نفسه ودوافع الفخر والمنافسة القبلية.'))),
    ],
  },
  {
    chapterId: 10,
    theme: L('tribal protection and unequal experiences of women', 'الحماية القبلية وتفاوت أوضاع النساء'),
    primaryQuestion: L('What caution does the chapter require when describing women before Islam?', 'ما الحذر الذي يطلبه الفصل عند وصف أوضاع النساء قبل الإسلام؟'),
    analysisQuestion: L('How do social status and tribal position create different experiences in the same society?', 'كيف تخلق المكانة الاجتماعية والقبلية تجارب مختلفة داخل المجتمع نفسه؟'),
    points: [
      P(10, 'status', 'comparison', 'quick', 2,
        L('The position of women varied according to social status and tribe.', 'اختلف وضع النساء باختلاف المكانة الاجتماعية والقبيلة.'),
        mc(L('What does the chapter say affected women’s position?', 'ما الذي يقول الفصل إنه أثر في وضع النساء؟'),
          { en: ['Social status and tribe', 'Only caravan ownership', 'Only geography'], ar: ['المكانة الاجتماعية والقبيلة', 'امتلاك القوافل فقط', 'الجغرافيا فقط'] }, 0,
          L('The text explicitly says women’s position was not always the same.', 'ينص الفصل على أن وضع النساء لم يكن واحدًا دائمًا.'))),
      P(10, 'disadvantage', 'comparison', 'knowledge', 3,
        L('Many women from lower social and economic groups are described as disadvantaged and denied rights.', 'يصف الفصل كثيرًا من النساء في الفئات الاجتماعية والاقتصادية الدنيا بأنهن مهمشات ومحرومات من الحقوق.'),
        tf(L('The chapter says every woman had the same social power and legal rights.', 'يذكر الفصل أن كل النساء امتلكن القوة الاجتماعية والحقوق القانونية نفسها.'), false,
          L('It contrasts some high-status women with the severe disadvantage of many lower-status women.', 'يقارن بين بعض النساء ذوات المكانة العالية والحرمان الشديد لكثير من ذوات المكانة الدنيا.'))),
      P(10, 'tribal-strength', 'cause-result', 'final', 0,
        L('Physical strength and tribal protection strongly shaped social value and security in the desert environment.', 'شكلت القوة الجسدية والحماية القبلية قيمة الفرد وأمنه بقوة في البيئة الصحراوية.'),
        mc(L('Why did male numbers matter so much to tribes in the chapter?', 'لماذا كان عدد الذكور مهمًا جدًا للقبائل في الفصل؟'),
          { en: ['They increased fighting strength and tribal protection', 'They ended trade', 'They removed the need for tribes'], ar: ['زادوا قوة القتال والحماية القبلية', 'أنهوا التجارة', 'ألغوا الحاجة إلى القبائل'] }, 0,
          L('The chapter connects physical strength and male numbers with tribal protection and respect.', 'يربط الفصل القوة الجسدية وعدد الذكور بالحماية القبلية والاحترام.'))),
    ],
  },
  {
    chapterId: 11,
    theme: L('slavery, poetry, public influence, and tribalism', 'الرق والشعر والتأثير العام والعصبية القبلية'),
    primaryQuestion: L('What social functions are examined through slavery and poetry?', 'ما الوظائف الاجتماعية التي يناقشها الفصل من خلال الرق والشعر؟'),
    analysisQuestion: L('How can institutions and cultural voices reinforce unequal social structures?', 'كيف يمكن للمؤسسات والأصوات الثقافية أن تعزز بنى اجتماعية غير عادلة؟'),
    points: [
      P(11, 'slavery', 'main-idea', 'quick', 1,
        L('Slavery is described as an economic institution in Mecca and enslaved people as the most miserable class.', 'يصف الفصل الرق بأنه مؤسسة اقتصادية في مكة والرقيق بأنهم أتعس طبقة اجتماعية.'),
        tf(L('The chapter treats slavery as part of Mecca’s economic and social structure.', 'يعامل الفصل الرق بوصفه جزءًا من البنية الاقتصادية والاجتماعية لمكة.'), true,
          L('It explicitly calls slavery an economic institution and describes how enslaved people were used.', 'يسمي الرق صراحة مؤسسة اقتصادية ويصف كيفية استخدام الرقيق.'))),
      P(11, 'media', 'main-idea', 'review', 4,
        L('Poets preserved tribal memory and influenced public attitudes in a role compared with a media outlet.', 'حفظ الشعراء ذاكرة القبيلة وأثروا في المواقف العامة في دور يشبه وسيلة إعلامية.'),
        tf(L('The chapter says poets had almost no influence on tribal memory or public attitudes.', 'يذكر الفصل أن الشعراء لم يكن لهم تأثير يذكر في ذاكرة القبيلة أو المواقف العامة.'), false,
          L('Poetry preserved history, praised allies, criticized enemies, and shaped tribal attitudes.', 'حفظ الشعر التاريخ ومدح الحلفاء وهجا الأعداء وشكل مواقف القبيلة.'))),
    ],
  },
  {
    chapterId: 12,
    theme: L('idolatry, belief in Allah, mediation, pilgrimage, and superstition', 'عبادة الأصنام والإيمان بالله والوساطة والحج والخرافة'),
    primaryQuestion: L('Why is the religious picture in the chapter more complex than simple denial of Allah?', 'لماذا تبدو الصورة الدينية في الفصل أكثر تعقيدًا من مجرد إنكار الله؟'),
    analysisQuestion: L('How does the chapter distinguish acknowledgement of Allah from Islamic monotheism?', 'كيف يميز الفصل بين الاعتراف بالله والتوحيد الإسلامي؟'),
    points: [
      P(12, 'idolatry', 'main-idea', 'quick', 0,
        L('Idolatry is described as dominant in Mecca even though some Hanifs remained.', 'تُوصف عبادة الأصنام بأنها السائدة في مكة مع بقاء بعض الحنفاء.'),
        mc(L('Which religious pattern is described as dominant in Mecca?', 'أي نمط ديني يوصف بأنه السائد في مكة؟'),
          { en: ['Idolatry, with some Hanifs present', 'Uniform Hanifism', 'No religious practice'], ar: ['عبادة الأصنام مع وجود بعض الحنفاء', 'الحنيفية وحدها', 'غياب الممارسة الدينية'] }, 0,
          L('The chapter directly says idolatry was dominant while some Hanifs existed.', 'يذكر الفصل مباشرة أن عبادة الأصنام كانت سائدة مع وجود بعض الحنفاء.'))),
      P(12, 'mediators', 'comparison', 'knowledge', 2,
        L('Many Arabs acknowledged Allah as Creator but treated idols as mediators.', 'اعترف كثير من العرب بالله خالقًا لكنهم اتخذوا الأصنام وسطاء.'),
        mc(L('How does the chapter describe the role of idols for many Arabs?', 'كيف يصف الفصل دور الأصنام عند كثير من العرب؟'),
          { en: ['As mediators', 'As trade animals', 'As Byzantine rulers'], ar: ['بوصفها وسطاء', 'بوصفها حيوانات تجارة', 'بوصفها حكامًا بيزنطيين'] }, 0,
          L('The text explicitly calls idols go-betweens or mediators.', 'يسمي النص الأصنام صراحة وسطاء.'))),
      P(12, 'afterlife', 'comparison', 'final', 3,
        L('The chapter contrasts belief in Allah as Creator with rejection of Resurrection and the Afterlife.', 'يقارن الفصل بين الإيمان بالله خالقًا وإنكار البعث والحياة الآخرة.'),
        tf(L('According to the chapter, acknowledging Allah as Creator meant that people also accepted Resurrection and the Afterlife.', 'وفقًا للفصل كان الاعتراف بالله خالقًا يعني أيضًا قبول البعث والحياة الآخرة.'), false,
          L('The chapter says many accepted Allah as Creator but did not believe in Resurrection and the Afterlife.', 'يذكر الفصل أن كثيرين اعترفوا بالله خالقًا لكنهم لم يؤمنوا بالبعث والآخرة.'))),
    ],
  },
  {
    chapterId: 13,
    theme: L('religion, economy, political authority, and opposition to Islam', 'الدين والاقتصاد والسلطة السياسية ومعارضة الإسلام'),
    primaryQuestion: L('Why does the chapter discuss politics, economics, and religion together?', 'لماذا يناقش الفصل السياسة والاقتصاد والدين معًا؟'),
    analysisQuestion: L('How did the new Muslim community challenge several dimensions of Quraysh power at once?', 'كيف تحدى المجتمع المسلم الجديد عدة أبعاد من سلطة قريش في وقت واحد؟'),
    points: [
      P(13, 'interconnected', 'cause-result', 'quick', 0,
        L('Politics, economics, and religion are presented as interconnected areas of Meccan life.', 'تُقدم السياسة والاقتصاد والدين بوصفها مجالات مترابطة في حياة مكة.'),
        matching(L('Match each source of power with the role described in the chapter.', 'صل كل مصدر للقوة بدوره المذكور في الفصل.'),
          { en: [['Trade', 'Economic prestige'], ['Pilgrimage leadership', 'Religious and political status']], ar: [['التجارة', 'مكانة اقتصادية'], ['قيادة الحج', 'مكانة دينية وسياسية']] },
          L('The chapter explains opposition by showing how several forms of status reinforced one another.', 'يفسر الفصل المعارضة بإظهار كيف عززت أشكال متعددة من المكانة بعضها بعضًا.'))),
      P(13, 'authority', 'cause-result', 'knowledge', 2,
        L('Quraysh leaders viewed Islam as a threat to their authority and established status.', 'نظر زعماء قريش إلى الإسلام بوصفه تهديدًا لسلطتهم ومكانتهم القائمة.'),
        mc(L('Why did Quraysh leaders see the new faith as threatening?', 'لماذا رأى زعماء قريش الدين الجديد تهديدًا؟'),
          { en: ['It challenged their authority and status', 'It strengthened every existing privilege', 'It removed religion from public life'], ar: ['تحدى سلطتهم ومكانتهم', 'عزز كل امتياز قائم', 'أخرج الدين من الحياة العامة'] }, 0,
          L('The chapter explicitly connects elite opposition with protection of authority, prestige, and leadership.', 'يربط الفصل صراحة معارضة النخبة بحماية السلطة والمكانة والقيادة.'))),
      P(13, 'opposition', 'cause-result', 'review', 1,
        L('Powerful political and economic groups opposed Islam because religion affected the wider social order.', 'عارضت الجماعات السياسية والاقتصادية القوية الإسلام لأن الدين كان يؤثر في النظام الاجتماعي الأوسع.'),
        tf(L('The chapter explains opposition to Islam as purely private theological disagreement with no connection to power.', 'يفسر الفصل معارضة الإسلام بوصفها خلافًا عقائديًا خاصًا لا علاقة له بالسلطة.'), false,
          L('It begins by stating that politics, economics, and religion are interconnected.', 'يبدأ الفصل بالنص على ترابط السياسة والاقتصاد والدين.'))),
    ],
  },
  {
    chapterId: 14,
    theme: L('early believers, economic reform, and elite resistance', 'المؤمنون الأوائل والإصلاح الاقتصادي ومقاومة النخبة'),
    primaryQuestion: L('What social contrast appears between many early believers and the upper class?', 'ما التباين الاجتماعي بين كثير من المؤمنين الأوائل والطبقة العليا؟'),
    analysisQuestion: L('Why would changes to usury, charity, and leadership threaten the existing order?', 'لماذا هددت التغييرات المتعلقة بالربا والصدقة والقيادة النظام القائم؟'),
    points: [
      P(14, 'first-muslims', 'comparison', 'quick', 0,
        L('Many early Muslims were poor or enslaved, while very few came from Mecca’s super-rich.', 'كان كثير من المسلمين الأوائل من الفقراء أو الرقيق بينما جاء عدد قليل جدًا من أثرياء مكة.'),
        mc(L('Who formed a large part of the early Muslim community described here?', 'من شكل جزءًا كبيرًا من المجتمع المسلم المبكر المذكور هنا؟'),
          { en: ['Poor people and slaves', 'Only super-rich merchants', 'Foreign emperors'], ar: ['الفقراء والرقيق', 'التجار فاحشو الثراء فقط', 'الأباطرة الأجانب'] }, 0,
          L('The opening contrasts many poor and enslaved believers with the absence of most super-rich Meccans.', 'تقارن البداية كثيرًا من المؤمنين الفقراء والرقيق بغياب معظم أثرياء مكة.'))),
      P(14, 'radical-change', 'cause-result', 'review', 2,
        L('The new belief system introduced fundamental changes to accepted economic and moral practices.', 'أدخل نظام الاعتقاد الجديد تغييرات جوهرية في الممارسات الاقتصادية والأخلاقية المقبولة.'),
        mc(L('Which example shows a fundamental economic challenge to the existing order?', 'أي مثال يظهر تحديًا اقتصاديًا جوهريًا للنظام القائم؟'),
          { en: ['Distinguishing lawful trade from unlawful usury', 'Expanding usury as a religious duty', 'Ending charity'], ar: ['التفريق بين التجارة الحلال والربا الحرام', 'توسيع الربا بوصفه واجبًا دينيًا', 'إنهاء الصدقة'] }, 0,
          L('The chapter contrasts Quraysh acceptance of usury with Quranic economic and charitable commands.', 'يقارن الفصل قبول قريش للربا بالأوامر القرآنية الاقتصادية والخيرية.'))),
      P(14, 'leadership', 'motivation', 'final', 4,
        L('Maintaining leadership was a major motive behind elite resistance.', 'كان الحفاظ على القيادة دافعًا رئيسًا وراء مقاومة النخبة.'),
        matching(L('Match the elite concern with the reform described.', 'صل قلق النخبة بالإصلاح المذكور.'),
          { en: [['Leadership position', 'Fear of losing authority'], ['Wealth practices', 'Challenge to usury and neglect of the poor']], ar: [['الموقع القيادي', 'الخوف من فقدان السلطة'], ['ممارسات الثروة', 'تحدي الربا وإهمال الفقراء']] },
          L('The chapter connects resistance with both leadership status and changes to accepted economic behavior.', 'يربط الفصل المقاومة بكل من المكانة القيادية والتغييرات في السلوك الاقتصادي المقبول.'))),
    ],
  },
  {
    chapterId: 15,
    theme: L('escalating opposition, vulnerability, Bilal, and boycott', 'تصاعد المعارضة والهشاشة وبلال والمقاطعة'),
    primaryQuestion: L('How did opposition escalate as the new faith grew stronger?', 'كيف تصاعدت المعارضة مع ازدياد قوة الدين الجديد؟'),
    analysisQuestion: L('Why were people without powerful protectors especially vulnerable?', 'لماذا كان من لا يملكون حماة أقوياء أكثر عرضة للأذى؟'),
    points: [
      P(15, 'escalation', 'sequence', 'quick', 2,
        L('Opposition escalated from mockery to harsher persecution and social-economic pressure.', 'تصاعدت المعارضة من السخرية إلى اضطهاد أشد وضغط اجتماعي واقتصادي.'),
        tap(L('What pattern of escalation does the chapter describe?', 'ما نمط التصاعد الذي يصفه الفصل؟'),
          L('Mockery developed into fierce persecution and boycott.', 'تحولت السخرية إلى اضطهاد شديد ومقاطعة.'),
          L('The chapter moves from ridicule to stronger pressure and finally a social and economic boycott.', 'ينتقل الفصل من السخرية إلى ضغط أشد ثم إلى مقاطعة اجتماعية واقتصادية.'))),
      P(15, 'boycott', 'cause-result', 'final', 3,
        L('The boycott imposed social and economic isolation and caused severe material hardship.', 'فرضت المقاطعة عزلة اجتماعية واقتصادية وتسببت في معاناة مادية شديدة.'),
        fill(L('Complete the description of the pressure used against the early Muslims.', 'أكمل وصف الضغط المستخدم ضد المسلمين الأوائل.'),
          L('The Meccan elites imposed a social and economic [blank].', 'فرضت النخبة المكية [blank] اجتماعية واقتصادية.'),
          L('boycott', 'مقاطعة'),
          L('The chapter dates the boycott to 617–620 and describes severe hardship during it.', 'يؤرخ الفصل المقاطعة بين 617 و620 ويصف معاناة شديدة خلالها.'))),
    ],
  },
  {
    chapterId: 16,
    theme: L('idols, economic power, afterlife accountability, and tribal fanaticism', 'الأصنام والقوة الاقتصادية والمحاسبة في الآخرة والتعصب القبلي'),
    primaryQuestion: L('Why did both idols and tribal fanaticism reinforce resistance to Islam?', 'لماذا عزز كل من الأصنام والتعصب القبلي مقاومة الإسلام؟'),
    analysisQuestion: L('How does the chapter connect belief, economic interest, political influence, and social protection?', 'كيف يربط الفصل العقيدة والمصلحة الاقتصادية والنفوذ السياسي والحماية الاجتماعية؟'),
    points: [
      P(16, 'hostility', 'cause-result', 'quick', 0,
        L('Quraysh hostility is connected with the demand to abandon old religious practices and worship Allah alone.', 'ترتبط عداوة قريش بالمطالبة بترك الممارسات الدينية القديمة وعبادة الله وحده.'),
        mc(L('What religious demand is named as a cause of hostility?', 'ما المطلب الديني الذي يُذكر سببًا للعداوة؟'),
          { en: ['Abandon false religions and worship Allah alone', 'Add more idols', 'Stop all trade'], ar: ['ترك الأديان الباطلة وعبادة الله وحده', 'إضافة مزيد من الأصنام', 'إيقاف كل التجارة'] }, 0,
          L('The opening connects hostility with abandoning old false religion and worshipping one Allah.', 'تربط البداية العداوة بترك الدين الباطل القديم وعبادة الله الواحد.'))),
      P(16, 'tribal-pressure', 'cause-result', 'knowledge', 3,
        L('Tribal fanaticism limited freedom of choice because leaving tribal views could mean losing protection.', 'حد التعصب القبلي من حرية الاختيار لأن الخروج عن رأي القبيلة قد يعني فقدان الحماية.'),
        mc(L('Why was tribal fanaticism a barrier to individual choice?', 'لماذا كان التعصب القبلي عائقًا أمام الاختيار الفردي؟'),
          { en: ['Leaving tribal views could mean losing protection', 'Tribes had no influence', 'Everyone had state protection'], ar: ['الخروج عن رأي القبيلة قد يعني فقدان الحماية', 'لم يكن للقبائل تأثير', 'كان الجميع يتمتعون بحماية الدولة'] }, 0,
          L('The chapter compares loss of tribal protection with becoming stateless and defenseless.', 'يقارن الفصل فقدان الحماية القبلية بأن يصبح الإنسان بلا دولة ودون دفاع.'))),
    ],
  },
  {
    chapterId: 17,
    theme: L('human dignity, justice, and the chapter’s contrast with Jahiliyyah', 'الكرامة الإنسانية والعدالة ومقابلة الجاهلية'),
    primaryQuestion: L('What values are placed at the center of the chapter’s description of Islam?', 'ما القيم التي يضعها الفصل في مركز وصف الإسلام؟'),
    analysisQuestion: L('How does the closing chapter turn Jahiliyyah from a past period into a broader moral category?', 'كيف يحول الفصل الختامي الجاهلية من فترة ماضية إلى فئة أخلاقية أوسع؟'),
    points: [
      P(17, 'dignity', 'theme', 'quick', 3,
        L('Human honor and dignity are presented as central values, regardless of class or social weakness.', 'تُقدم كرامة الإنسان بوصفها قيمة مركزية بغض النظر عن الطبقة أو الضعف الاجتماعي.'),
        mc(L('What does the chapter place at the heart of Islam?', 'ما الذي يضعه الفصل في قلب الإسلام؟'),
          { en: ['Human honor and dignity', 'Tribal superiority', 'Merchant wealth'], ar: ['كرامة الإنسان', 'التفوق القبلي', 'ثروة التجار'] }, 0,
          L('The chapter says slaves, women, poor people, and the weak all deserve respect.', 'يذكر الفصل أن الرقيق والنساء والفقراء والضعفاء جميعهم يستحقون الاحترام.'))),
      P(17, 'broader-jahiliyyah', 'theme', 'review', 4,
        L('The chapter uses Jahiliyyah both for pre-Islamic Arabia and for a wider pattern of arrogance and injustice.', 'يستخدم الفصل الجاهلية لوصف Arabia قبل الإسلام وأيضًا نمط أوسع من التكبر والظلم.'),
        tf(L('In the closing chapter, Jahiliyyah is only a neutral date label with no wider moral meaning.', 'في الفصل الختامي الجاهلية مجرد تسمية زمنية محايدة بلا معنى أخلاقي أوسع.'), false,
          L('The text explicitly extends the term to cultures and ways of thinking rooted in human arrogance.', 'يمد النص المصطلح صراحة إلى ثقافات وطرائق تفكير تنبع من تكبر الإنسان.'))),
    ],
  },
];

export const meccaB2LearningBlueprint = defineLearningBlueprint({
  id: 'mecca-b2',
  version: '1.0.0',
  storyId: 'mecca',
  level: 'B2',
  status: 'pedagogy-reviewed',
  chapters: drafts.map((draft) => {
    const guide = guides(draft);
    return {
      chapterId: draft.chapterId,
      objectives: [
        L(`Explain the chapter's main relationship around ${draft.theme.en}.`, `اشرح العلاقة الرئيسة في الفصل حول ${draft.theme.ar}.`),
        L(`Support an analytical answer to: ${draft.analysisQuestion.en}`, `ادعم إجابة تحليلية عن: ${draft.analysisQuestion.ar}`),
      ],
      evidencePoints: draft.points.map((point) => ({
        id: `mecca-b2-c${draft.chapterId}-${point.key}`,
        focus: point.focus,
        claim: point.claim,
        evidence: point.evidence,
      })),
      vocabularyTargets: vocabularyTargetsFor(draft.chapterId),
      assessmentItems: draft.points.map((point) => ({
        id: point.stage === 'quick'
          ? `mecca-b2-c${draft.chapterId}-quick`
          : `mecca-b2-c${draft.chapterId}-${point.stage}-${point.key}`,
        learningPointId: `mecca-b2-c${draft.chapterId}-${point.key}`,
        eligibleStages: [point.stage],
        exercise: point.exercise,
      })),
      teacherGuide: guide.teacherGuide,
      selfStudyGuide: guide.selfStudyGuide,
    };
  }),
});
