import {
  defineLearningBlueprint,
  type BlueprintVocabularyTarget,
  type LocalizedText,
} from '../../learningBlueprint';
import { L, fill, guideBundle, matching, mc, tap, tf } from '../../b2BlueprintAuthoring';
import { adamB2HighlightTargets } from './source';

const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamB2HighlightTargets[chapterId] ?? []).map((target, index) => ({
    id: `adam-b2-c${chapterId}-v${index + 1}`,
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
    `Write 120–150 words answering: ${secondQuestion.en} Use two distinct pieces of chapter evidence, explain what each proves, and add one qualification if the chapter limits the claim.`,
    `اكتب 120–150 كلمة تجيب عن: ${secondQuestion.ar} واستخدم دليلين مختلفين من الفصل، واشرح ما الذي يثبته كل منهما، وأضف قيدًا واحدًا إذا كان الفصل يحد من الادعاء.`,
  ),
  support: L(
    'Use: “The chapter states ___. This supports the claim that ___. A second detail is ___. Together, these suggest ___. However, the chapter does not state ___.”',
    'استخدم: «يذكر الفصل ___. وهذا يدعم الادعاء بأن ___. والدليل الثاني هو ___. ويشير الدليلان معًا إلى ___. ومع ذلك، لا يذكر الفصل ___.»',
  ),
});

export const adamB2LearningBlueprint = defineLearningBlueprint({
  id: 'adam-b2',
  version: '1.0.0',
  storyId: 'adam',
  level: 'B2',
  status: 'pedagogy-reviewed',
  chapters: [
    {
      chapterId: 1,
      objectives: [
        L('Analyse how the introduction frames Adam’s creation and human earthly life.', 'يحلل كيف تقدم المقدمة خلق آدم وحياة الإنسان على الأرض.'),
        L('Distinguish the chapter’s portrayal of Satan as a rebel against Allah from his role as an enemy of humanity.', 'يميز بين عرض الشيطان متمردًا على الله ودوره عدوًا للإنسانية.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c1-creation', focus: 'direct', claim: L('Adam is presented as directly created without parents.', 'يُعرض آدم على أنه خُلق مباشرة من غير أبوين.'), evidence: L('created from clay without parents', 'خلق من التراب بدون أم ولا أب') },
        { id: 'adam-b2-c1-enemy', focus: 'comparison', claim: L('The chapter emphasizes Satan as Adam’s and humanity’s rival and enemy rather than as a rival to Allah.', 'يؤكد الفصل الشيطان منافسًا وعدوًا لآدم والإنسان أكثر من كونه معارضًا لله.'), evidence: L('a rival and enemy of Adam (pbuh) rather than Allah', 'يعرض كمنافس وعدو لآدم وللإنسان، أكثر من كونه معارضا لله') },
        { id: 'adam-b2-c1-good-evil', focus: 'theme', claim: L('Earthly life is framed as a field of contrast between good and evil.', 'تُعرض الحياة الأرضية بوصفها ميدانًا يتقابل فيه الخير والشر.'), evidence: L('earthly life is the scene of a division and contrast between good and evil', 'حياة الإنسان على الأرض هي ميدان يتناقض فيه الخير والشر') },
      ],
      vocabularyTargets: vocabularyTargetsFor(1),
      assessmentItems: [
        { id: 'adam-b2-c1-quick', learningPointId: 'adam-b2-c1-creation', eligibleStages: ['quick'], exercise: mc(L('Which feature makes Adam’s creation different from the creation of later humans in this chapter?', 'ما السمة التي تجعل خلق آدم مختلفًا عن خلق البشر اللاحقين في هذا الفصل؟'), { en: ['He was created without parents', 'He was born into an existing family', 'He developed from another human community'], ar: ['خُلق من غير أب ولا أم', 'وُلد في أسرة موجودة', 'تطور من جماعة بشرية سابقة'] }, 0, L('The introduction explicitly presents Adam as created from earthly material without parents.', 'تقدم المقدمة آدم صراحة مخلوقًا من مادة أرضية من غير أبوين.')) },
        { id: 'adam-b2-c1-knowledge', learningPointId: 'adam-b2-c1-enemy', eligibleStages: ['knowledge'], exercise: mc(L('How does the chapter primarily position Satan within Adam’s story?', 'كيف يضع الفصل الشيطان أساسًا داخل قصة آدم؟'), { en: ['As an enemy and rival of Adam and humanity', 'As a rival equal to Allah', 'As a neutral observer'], ar: ['عدوًا ومنافسًا لآدم والإنسانية', 'منافسًا مساويًا لله', 'مراقبًا محايدًا'] }, 0, L('The chapter distinguishes Satan’s rebellion against Allah from his anti-human role in the narrative.', 'يميز الفصل بين تمرد الشيطان على الله ودوره المعادي للإنسان في السرد.')) },
        { id: 'adam-b2-c1-review', learningPointId: 'adam-b2-c1-good-evil', eligibleStages: ['review'], exercise: mc(L('What larger pattern does the introduction use to describe human life on Earth?', 'ما النمط الأوسع الذي تستخدمه المقدمة لوصف حياة الإنسان على الأرض؟'), { en: ['A continuing contrast between good and evil', 'A life without moral conflict', 'A purely material competition'], ar: ['تعارض مستمر بين الخير والشر', 'حياة بلا صراع أخلاقي', 'منافسة مادية فقط'] }, 0, L('The final sentence of the introduction explicitly frames earthly life through the contrast of good and evil.', 'تؤطر الجملة الأخيرة من المقدمة الحياة الأرضية صراحة من خلال تعارض الخير والشر.')) },
      ],
      ...G(L('creation, narrative framing, and the contrast of good and evil', 'الخلق والتأطير السردي وتعارض الخير والشر'), L('How does the introduction establish the special features of Adam’s story?', 'كيف تؤسس المقدمة السمات الخاصة لقصة آدم؟'), L('How do the chapter’s statements about Satan and good versus evil prepare the reader for later conflict?', 'كيف تمهد عبارات الفصل عن الشيطان والخير والشر للصراع اللاحق؟'), L('Use whereas, rather than, and is presented as to compare narrative roles precisely.', 'استخدم بينما وبدلًا من ويُعرض بوصفه للمقارنة الدقيقة بين الأدوار السردية.'), L('Practise miraculous, philosophical, rival, factual, and unseen.', 'تدرّب على نطق معجز، فلسفي، منافس، حقيقة، وغيبية.')),
    },
    {
      chapterId: 2,
      objectives: [
        L('Explain how different creation terms are connected to one material process.', 'يشرح كيف ترتبط ألفاظ الخلق المختلفة بعملية مادية واحدة.'),
        L('Evaluate how the chapter moves from common earthly origin to human equality and distinct human capacities.', 'يقيم انتقال الفصل من الأصل الأرضي المشترك إلى المساواة البشرية والقدرات الإنسانية المميزة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c2-materials', focus: 'comparison', claim: L('Earth, water, and clay are presented as expressions describing the composition and stages of mud.', 'تُعرض ألفاظ التراب والماء والطين بوصفها تعبيرات عن مكونات الطين ومراحله.'), evidence: L('earth (türâb), water (mâ’), clay (tîn)', 'التراب والماء والطين') },
        { id: 'adam-b2-c2-equality', focus: 'inference', claim: L('A shared origin in soil is used to reject superiority based on colour.', 'يُستخدم الأصل الترابي المشترك لرفض التفاضل بسبب اللون.'), evidence: L('people are from the same soil and they have no superiority over one another due to the difference in their colors', 'فإن الناس في الأصل من تراب واحد، ولا فضل لبعضهم على بعض بسبب اختلاف ألوانهم') },
        { id: 'adam-b2-c2-capacities', focus: 'main-idea', claim: L('Adam is described as the first ancestor of a separate human species with spiritual, moral, mental, and psychological abilities.', 'يُوصف آدم بأنه أول أب لنوع بشري مستقل مُنح قدرات روحية وأخلاقية وعقلية ونفسية.'), evidence: L('first ancestor of a completely separate species of human being', 'أول أب لنوع بشري مستقل') },
      ],
      vocabularyTargets: vocabularyTargetsFor(2),
      assessmentItems: [
        { id: 'adam-b2-c2-quick', learningPointId: 'adam-b2-c2-materials', eligibleStages: ['quick'], exercise: tf(L('The chapter treats earth, water, and clay as unrelated accounts of Adam’s creation.', 'يعامل الفصل التراب والماء والطين بوصفها روايات غير مترابطة لخلق آدم.'), false, L('It presents the terms as descriptions of the composition and stages of mud.', 'يعرض هذه الألفاظ بوصفها أوصافًا لمكونات الطين ومراحله.')) },
        { id: 'adam-b2-c2-knowledge', learningPointId: 'adam-b2-c2-equality', eligibleStages: ['knowledge'], exercise: tf(L('The shared origin described in the chapter supports superiority based on skin colour.', 'يدعم الأصل المشترك المذكور في الفصل التفاضل بين الناس بسبب لون البشرة.'), false, L('The chapter draws the opposite conclusion: people share one soil and colour difference gives no superiority.', 'يستنتج الفصل العكس: الناس من أصل ترابي واحد ولا يمنح اختلاف اللون تفوقًا.')) },
        { id: 'adam-b2-c2-final', learningPointId: 'adam-b2-c2-capacities', eligibleStages: ['final'], exercise: fill(L('Complete the chapter’s description of Adam as the first ancestor of a separate human species.', 'أكمل وصف الفصل لآدم بأنه أول أب لنوع بشري مستقل.'), L('Adam was the first ancestor of a completely separate species of [blank] being.', 'كان آدم أول أب لنوع [blank] مستقل.'), L('human', 'بشري'), L('The chapter explicitly describes a separate human species and then lists the abilities given to Adam.', 'يصف الفصل صراحة نوعًا بشريًا مستقلًا ثم يذكر القدرات التي مُنحت لآدم.')) },
      ],
      ...G(L('material origin, diversity, equality, and human capacities', 'الأصل المادي والتنوع والمساواة والقدرات الإنسانية'), L('How does the chapter connect the different terms for Adam’s material origin?', 'كيف يربط الفصل الألفاظ المختلفة لأصل آدم المادي؟'), L('How does the chapter move from diverse soil to an argument about equality and human distinctiveness?', 'كيف ينتقل الفصل من تنوع التراب إلى حجة عن المساواة والتميز الإنساني؟'), L('Use although, therefore, and due to to distinguish evidence from the conclusion drawn from it.', 'استخدم مع أن ولذلك وبسبب للفصل بين الدليل والنتيجة المستخلصة منه.'), L('Practise composition, ancestor, species, spiritual, psychological, and superiority.', 'تدرّب على نطق خليط، أول أب، نوع بشري، روحية، نفسية، وتفاضل.')),
    },
    {
      chapterId: 3,
      objectives: [
        L('Analyse the relationship between Adam’s value, knowledge, and human intellectual capacity.', 'يحلل العلاقة بين قيمة آدم والعلم والقدرة العقلية للإنسان.'),
        L('Distinguish the Qur’anic dialogue about knowledge from the chapter’s interpretation of what the “names” may represent.', 'يميز بين الحوار القرآني عن العلم وتفسير الفصل لما قد تمثله «الأسماء».'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c3-value', focus: 'cause-result', claim: L('Breathing the spirit into Adam is presented as showing the value Allah gave him and the beginning of human life.', 'يُعرض نفخ الروح في آدم بوصفه دالًا على القيمة التي أعطاها الله له وبداية حياة الإنسان.'), evidence: L('shows the value that Allah gave him', 'يدل على القيمة التي أعطاها الله له') },
        { id: 'adam-b2-c3-limits', focus: 'comparison', claim: L('The angels acknowledge that their knowledge is limited to what Allah taught them.', 'تقر الملائكة بأن علمها محدود بما علمها الله.'), evidence: L('We have no knowledge except what You have taught us', 'لا علم لنا إلا ما علمتنا') },
        { id: 'adam-b2-c3-civilization', focus: 'inference', claim: L('The chapter interprets the names as foundational to language, intelligence, science, technology, and culture.', 'يفسر الفصل الأسماء بوصفها أساسًا للغة والعقل والعلم والتكنولوجيا والثقافة.'), evidence: L('knowledge is the basis of science, technology, and culture', 'فالأسماء هي الركيزة الأساسية للعلم والتكنولوجيا والثقافة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(3),
      assessmentItems: [
        { id: 'adam-b2-c3-quick', learningPointId: 'adam-b2-c3-value', eligibleStages: ['quick'], exercise: tap(L('What does the chapter say the breathing of the spirit into Adam shows?', 'ماذا يقول الفصل إن نفخ الروح في آدم يدل عليه؟'), L('It shows the value Allah gave Adam and marks the beginning of human life.', 'يدل على القيمة التي أعطاها الله لآدم وعلى بداية حياة الإنسان.'), L('This is the explicit interpretation offered in the opening paragraph.', 'هذا هو التفسير الصريح الذي تقدمه الفقرة الافتتاحية.')) },
        { id: 'adam-b2-c3-review', learningPointId: 'adam-b2-c3-limits', eligibleStages: ['review'], exercise: tf(L('In the quoted dialogue, the angels claim knowledge independent of what Allah taught them.', 'تدعي الملائكة في الحوار المقتبس علمًا مستقلًا عما علمها الله.'), false, L('They explicitly say that they know only what Allah has taught them.', 'تقول الملائكة صراحة إنها لا تعلم إلا ما علمها الله.')) },
        { id: 'adam-b2-c3-final', learningPointId: 'adam-b2-c3-civilization', eligibleStages: ['final'], exercise: mc(L('Which interpretation does the chapter give to the knowledge of the “names”?', 'أي تفسير يقدمه الفصل للعلم بـ«الأسماء»؟'), { en: ['A basis for language, intelligence, science, technology, and culture', 'Only the ability to memorize a fixed list', 'Knowledge limited to physical strength'], ar: ['أساس للغة والعقل والعلم والتكنولوجيا والثقافة', 'قدرة على حفظ قائمة ثابتة فقط', 'علم يقتصر على القوة الجسدية'] }, 0, L('The chapter explicitly expands the meaning of this knowledge toward learning, language, intelligence, and civilization.', 'يوسع الفصل صراحة معنى هذا العلم ليشمل التعلم واللغة والعقل والحضارة.')) },
      ],
      ...G(L('knowledge, human value, intellectual limits, and civilisation', 'العلم والقيمة الإنسانية وحدود المعرفة والحضارة'), L('What kinds of claims about knowledge are explicit in the Qur’anic dialogue, and which are the chapter’s interpretations?', 'ما الادعاءات عن العلم الصريحة في الحوار القرآني، وما الذي يقدمه الفصل بوصفه تفسيرًا؟'), L('How does the chapter connect knowledge with human responsibility and civilisation without treating interpretation as quotation?', 'كيف يربط الفصل العلم بالمسؤولية الإنسانية والحضارة من غير أن يعامل التفسير بوصفه اقتباسًا؟'), L('Use the text states, the chapter interprets, may represent, and this suggests to label levels of certainty.', 'استخدم يذكر النص ويفسر الفصل وقد تمثل ويشير هذا إلى لتمييز درجات اليقين.'), L('Practise vicegerent, extraordinary, fundamental, knowledge, civilisation, and judgement.', 'تدرّب على نطق الخليفة، الاستثنائية، الأساس، العلم، الحضارة، والأحكام.')),
    },
    {
      chapterId: 4,
      objectives: [
        L('Compare worldly knowledge and revelation as complementary forms of guidance.', 'يقارن بين المعرفة الدنيوية والوحي بوصفهما شكلين متكاملين من الهداية.'),
        L('Trace the transition from the honour of knowledge to Iblis’s refusal and material claim of superiority.', 'يتتبع الانتقال من شرف العلم إلى رفض إبليس وادعائه التفوق المادي.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c4-complement', focus: 'comparison', claim: L('Worldly knowledge and revelation are presented as complementary rather than alternatives.', 'تُعرض المعرفة الدنيوية والوحي بوصفهما متكاملين لا بديلين.'), evidence: L('These two types of knowledge are not alternatives to each other, but rather they complete one another', 'وهذان النوعان لا يغني أحدهما عن الآخر، بل يكمل أحدهما الآخر') },
        { id: 'adam-b2-c4-value', focus: 'cause-result', claim: L('The chapter connects Adam’s and humanity’s honour with the power of knowledge given by Allah.', 'يربط الفصل تكريم آدم وذريته بقوة العلم التي منحهم الله إياها.'), evidence: L('because of the power of knowledge that Allah gave them', 'هو قوة العلم التي منحهم الله إياها') },
        { id: 'adam-b2-c4-fire-clay', focus: 'motivation', claim: L('Iblis justifies refusing the command by claiming that fire is superior to clay.', 'يبرر إبليس رفض الأمر بادعاء أن النار أفضل من الطين.'), evidence: L('I am better than he (Adam); You created me from fire, and You created him from clay', 'أنا خير منه خلقتني من نار وخلقته من طين') },
      ],
      vocabularyTargets: vocabularyTargetsFor(4),
      assessmentItems: [
        { id: 'adam-b2-c4-quick', learningPointId: 'adam-b2-c4-complement', eligibleStages: ['quick'], exercise: matching(L('Match each type of knowledge with the role assigned to it in the chapter.', 'صل كل نوع من المعرفة بالدور الذي يسنده إليه الفصل.'), { en: [['Worldly knowledge', 'helps maintain worldly life'], ['Revelation', 'explains human role, duty, and Allah’s order']], ar: [['المعرفة الدنيوية', 'تساعد على استمرار الحياة الدنيا'], ['الوحي', 'يشرح دور الإنسان وواجبه والنظام الذي وضعه الله']] }, L('The chapter says the two forms are complementary because they answer different needs.', 'يقول الفصل إن النوعين متكاملان لأن لكل منهما حاجة مختلفة يجيب عنها.')) },
        { id: 'adam-b2-c4-knowledge', learningPointId: 'adam-b2-c4-value', eligibleStages: ['knowledge'], exercise: mc(L('What reason does the chapter give for considering Adam and his offspring especially honoured?', 'ما السبب الذي يقدمه الفصل لاعتبار آدم وذريته مكرمين على نحو خاص؟'), { en: ['The power of knowledge Allah gave them', 'Their material origin alone', 'Their freedom from responsibility'], ar: ['قوة العلم التي منحهم الله إياها', 'مادة خلقهم وحدها', 'عدم وجود مسؤولية عليهم'] }, 0, L('The first sentence directly links this honour with the power of knowledge.', 'تربط الجملة الأولى هذا التكريم مباشرة بقوة العلم.')) },
        { id: 'adam-b2-c4-final', learningPointId: 'adam-b2-c4-fire-clay', eligibleStages: ['final'], exercise: tf(L('Iblis explains his refusal by claiming that Adam’s clay origin is superior to his own fire origin.', 'يفسر إبليس رفضه بادعاء أن أصل آدم من الطين أفضل من أصله من النار.'), false, L('His argument is the reverse: he claims that being created from fire makes him better than Adam, who was created from clay.', 'حجته عكس ذلك: يدعي أن خلقه من النار يجعله أفضل من آدم الذي خُلق من الطين.')) },
      ],
      ...G(L('complementary knowledge, honour, obedience, and Iblis’s material comparison', 'تكامل المعرفة والتكريم والطاعة ومقارنة إبليس المادية'), L('Why does the chapter insist that worldly knowledge and revelation are not alternatives?', 'لماذا يؤكد الفصل أن المعرفة الدنيوية والوحي ليس أحدهما بديلًا عن الآخر؟'), L('How does the narrative move from knowledge as honour to Iblis’s false measure of superiority?', 'كيف ينتقل السرد من العلم بوصفه تكريمًا إلى معيار إبليس الخاطئ للتفوق؟'), L('Use both … and, whereas, in contrast, and because to compare two standards of value.', 'استخدم كلاهما وبينما وعلى النقيض ولأن للمقارنة بين معيارين للقيمة.'), L('Practise offspring, alternatives, revelation, prostrate, arrogant, fire, and clay.', 'تدرّب على نطق ذريته، الوحي، التكامل، السجود، استكبر، النار، والطين.')),
    },
    {
      chapterId: 5,
      objectives: [
        L('Explain the chapter’s distinction between prostration as worship and prostration as obedience and respect.', 'يشرح تمييز الفصل بين سجود العبادة والسجود بوصفه طاعة واحترامًا.'),
        L('Analyse how knowledge and material origin become competing standards of value.', 'يحلل كيف يصبح العلم والأصل المادي معيارين متنافسين للقيمة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c5-prostration', focus: 'comparison', claim: L('The angels’ prostration is presented as obedience to Allah and respect for Adam, not worship of Adam.', 'يُعرض سجود الملائكة بوصفه طاعة لله واحترامًا لآدم لا عبادة له.'), evidence: L('Angels’ prostration means obedience to Allah to show respect and admiration to Adam', 'وإنما كان سجودهم طاعة لله، وإظهارا للاحترام والتقدير لآدم') },
        { id: 'adam-b2-c5-arrogance', focus: 'motivation', claim: L('Iblis’s arrogance is traced to his belief that his origin was superior to Adam’s.', 'يُرد كبر إبليس إلى اعتقاده أن أصله أفضل من أصل آدم.'), evidence: L('Iblis’ arrogance came from his belief that his origin was superior to Adam (pbuh)’s', 'جاء كبر إبليس من اعتقاده أن أصله أفضل من أصل آدم') },
        { id: 'adam-b2-c5-knowledge', focus: 'comparison', claim: L('Adam’s knowledge is described as including knowledge of the Creator and the worldly knowledge needed to inhabit Earth.', 'يوصف علم آدم بأنه يجمع العلم بالخالق والعلم الدنيوي اللازم للسكن في الأرض.'), evidence: L('knowledge included knowledge of the Creator', 'وكان علم آدم (عليه السلام) يشمل العلم بالله') },
      ],
      vocabularyTargets: vocabularyTargetsFor(5),
      assessmentItems: [
        { id: 'adam-b2-c5-quick', learningPointId: 'adam-b2-c5-prostration', eligibleStages: ['quick'], exercise: fill(L('Complete the chapter’s interpretation of the angels’ prostration.', 'أكمل تفسير الفصل لسجود الملائكة.'), L('Their prostration expressed obedience to Allah and [blank] for Adam.', 'كان سجودهم طاعة لله وإظهارًا لـ[blank] لآدم.'), L('respect', 'الاحترام'), L('The chapter explicitly distinguishes respect and obedience from worship.', 'يميز الفصل صراحة بين الاحترام والطاعة وبين العبادة.')) },
        { id: 'adam-b2-c5-review', learningPointId: 'adam-b2-c5-arrogance', eligibleStages: ['review'], exercise: mc(L('What does the chapter identify as the root of Iblis’s arrogance?', 'ما الذي يحدده الفصل بوصفه أصل كبر إبليس؟'), { en: ['His belief that his material origin was superior', 'A lack of knowledge about Adam', 'Fear that Adam would worship him'], ar: ['اعتقاده أن أصله المادي أفضل', 'عدم معرفته بآدم', 'خوفه من أن يعبده آدم'] }, 0, L('The chapter directly links his arrogance with a claim of superiority based on origin.', 'يربط الفصل مباشرة كبره بادعاء التفوق القائم على الأصل.')) },
        { id: 'adam-b2-c5-final', learningPointId: 'adam-b2-c5-knowledge', eligibleStages: ['final'], exercise: matching(L('Match the two dimensions of Adam’s knowledge described in the chapter.', 'صل بُعدي علم آدم كما يصفهما الفصل.'), { en: [['Knowledge of the Creator', 'faith or Islam'], ['Worldly knowledge', 'knowledge needed to inhabit and master the Earth']], ar: [['العلم بالله', 'الإيمان أو الإسلام'], ['العلم الدنيوي', 'العلم اللازم للسكن في الأرض والسيطرة عليها']] }, L('The chapter explicitly gives both dimensions of Adam’s knowledge.', 'يذكر الفصل صراحة بُعدي علم آدم.')) },
      ],
      ...G(L('prostration, knowledge, origin, and competing standards of human worth', 'السجود والعلم والأصل ومعايير القيمة الإنسانية المتنافسة'), L('How does the chapter prevent the angels’ prostration from being misunderstood?', 'كيف يمنع الفصل إساءة فهم سجود الملائكة؟'), L('What contrast does the chapter build between knowledge-based honour and origin-based arrogance?', 'ما المقارنة التي يبنيها الفصل بين التكريم القائم على العلم والكبر القائم على الأصل؟'), L('Use not … but rather, because, while, and based on to make analytical distinctions.', 'استخدم ليس... بل ولأن وبينما وبناءً على لصنع تمييزات تحليلية.'), L('Practise inability, obedience, unapparent, admiration, ethnicity, and inhabit.', 'تدرّب على نطق العجز، الطاعة، خفيًا، التقدير، الانتماء العرقي، والسكن.')),
    },
    {
      chapterId: 6,
      objectives: [
        L('Trace the contrasting paths of Adam and Satan after the command in Paradise.', 'يتتبع المسارين المتباينين لآدم والشيطان بعد الأمر في الجنة.'),
        L('Explain how Satan’s stated plan targets the human straight path.', 'يشرح كيف تستهدف خطة الشيطان المعلنة الصراط المستقيم للإنسان.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c6-command', focus: 'direct', claim: L('Adam and his wife are allowed to inhabit and eat in the Garden but forbidden to approach one tree.', 'يُسمح لآدم وزوجته بالسكن والأكل في الجنة مع النهي عن الاقتراب من شجرة واحدة.'), evidence: L('inhabit the Garden, you and your wife, and eat whatever you wish; but do not approach this tree', 'اسكن أنت وزوجك الجنة فكلا من حيث شئتما ولا تقربا هذه الشجرة') },
        { id: 'adam-b2-c6-vow', focus: 'motivation', claim: L('Satan announces a plan to wait for Adam’s children on the straight path and approach them from every direction.', 'يعلن الشيطان خطة للجلوس لذرية آدم على الصراط المستقيم وإتيانهم من جهات متعددة.'), evidence: L('I will surely sit in wait for them (Adam’s children) on Your Straight Path', 'لأقعدن لهم صراطك المستقيم') },
        { id: 'adam-b2-c6-contrast', focus: 'comparison', claim: L('The narrative contrasts Satan reaching a point of no return with Adam taking a different path.', 'يقارن السرد بين وصول الشيطان إلى نقطة اللاعودة وسلوك آدم طريقًا مختلفًا.'), evidence: L('Satan reached the point of no return by challenging his Creator, Adam (pbuh) took a path completely different from him', 'بينما وصل الشيطان إلى نقطة اللاعودة بتحديه لخالقه، سلك آدم (عليه السلام) طريقا مختلفا تماما') },
      ],
      vocabularyTargets: vocabularyTargetsFor(6),
      assessmentItems: [
        { id: 'adam-b2-c6-quick', learningPointId: 'adam-b2-c6-command', eligibleStages: ['quick'], exercise: mc(L('Which statement best captures the command given to Adam and his wife?', 'أي عبارة تلخص بصورة أدق الأمر الموجه إلى آدم وزوجته؟'), { en: ['Enjoy the Garden but do not approach the specified tree', 'Leave the Garden immediately', 'Avoid every tree in the Garden'], ar: ['اسكنا الجنة وانتفعا بها ولا تقربا الشجرة المحددة', 'اخرجا من الجنة فورًا', 'ابتعدا عن كل أشجار الجنة'] }, 0, L('The command combines broad permission with one explicit limit.', 'يجمع الأمر بين إباحة واسعة وحد واحد صريح.')) },
        { id: 'adam-b2-c6-knowledge', learningPointId: 'adam-b2-c6-vow', eligibleStages: ['knowledge'], exercise: fill(L('Complete the location Satan says he will target.', 'أكمل الموضع الذي يقول الشيطان إنه سيستهدفه.'), L('Satan says he will wait for Adam’s children on the [blank] Path.', 'يقول الشيطان إنه سيقعد لذرية آدم على [blank] المستقيم.'), L('Straight', 'الصراط'), L('The quoted verse identifies the Straight Path as the place of Satan’s planned interference.', 'تحدد الآية المقتبسة الصراط المستقيم موضعًا لتدخل الشيطان المخطط.')) },
        { id: 'adam-b2-c6-review', learningPointId: 'adam-b2-c6-contrast', eligibleStages: ['review'], exercise: tf(L('The chapter presents Adam and Satan as taking the same path after Satan challenges his Creator.', 'يعرض الفصل آدم والشيطان سالكين الطريق نفسه بعد تحدي الشيطان لخالقه.'), false, L('The chapter explicitly says Adam took a completely different path.', 'يقول الفصل صراحة إن آدم سلك طريقًا مختلفًا تمامًا.')) },
      ],
      ...G(L('command, limits, temptation strategy, and contrasting moral paths', 'الأمر والحدود واستراتيجية الغواية والمسارات الأخلاقية المتباينة'), L('What is permitted and what is prohibited in the Garden?', 'ما المباح وما المحظور في الجنة؟'), L('How does the chapter use the contrast between Adam’s and Satan’s paths to prepare the temptation narrative?', 'كيف يستخدم الفصل التباين بين مساري آدم والشيطان لتمهيد سرد الغواية؟'), L('Use while, in contrast, although, and intends to to compare paths and intentions.', 'استخدم بينما وعلى النقيض ومع أن وينوي للمقارنة بين المسارات والنوايا.'), L('Practise inhabit, outcast, deceive, straight path, wrongdoers, and judgement.', 'تدرّب على نطق اسكن، رجيم، لأغوينهم، الصراط المستقيم، الظالمين، والدين.')),
    },
    {
      chapterId: 7,
      objectives: [
        L('Analyse how the chapter describes human forgetfulness and Satan’s manipulation.', 'يحلل كيف يصف الفصل النسيان الإنساني وتلاعب الشيطان.'),
        L('Trace the movement from persuasive promise to decision and immediate emotional consequence.', 'يتتبع الانتقال من الوعد المقنع إلى القرار والنتيجة الشعورية المباشرة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c7-forgetfulness', focus: 'cause-result', claim: L('The chapter connects human forgetfulness and weakening determination with vulnerability to manipulation.', 'يربط الفصل النسيان الإنساني وضعف العزم بالقابلية للتلاعب.'), evidence: L('man tends to forget. His heart changes, and his determination weakens', 'الإنسان يميل إلى النسيان. فقلبه يتقلب، وعزمه يضعف') },
        { id: 'adam-b2-c7-promise', focus: 'motivation', claim: L('Satan’s persuasion uses the promise of becoming angels or immortals while presenting himself as a sincere adviser.', 'تستخدم وسوسة الشيطان وعد التحول إلى ملكين أو خالدين مع تقديم نفسه ناصحًا مخلصًا.'), evidence: L('lest you become angels, or become immortals', 'إلا أن تكونا ملكين أو تكونا من الخالدين') },
        { id: 'adam-b2-c7-consequence', focus: 'turning-point', claim: L('Immediately after eating, Adam experiences pain, sadness, shame, and the end of internal harmony.', 'بعد الأكل مباشرة يشعر آدم بالألم والحزن والخجل ويزول الانسجام الداخلي.'), evidence: L('filled with pain, sadness, and shame', 'امتلأ بالألم والحزن والخجل') },
      ],
      vocabularyTargets: vocabularyTargetsFor(7),
      assessmentItems: [
        { id: 'adam-b2-c7-quick', learningPointId: 'adam-b2-c7-forgetfulness', eligibleStages: ['quick'], exercise: tf(L('The chapter presents Adam’s determination as permanently unchanging and immune to forgetfulness.', 'يعرض الفصل عزم آدم ثابتًا دائمًا ومحصنًا من النسيان.'), false, L('It explicitly says human beings tend to forget and determination can weaken.', 'يقول الفصل صراحة إن الإنسان يميل إلى النسيان وأن العزم قد يضعف.')) },
        { id: 'adam-b2-c7-knowledge', learningPointId: 'adam-b2-c7-promise', eligibleStages: ['knowledge'], exercise: mc(L('Which promise forms the core of Satan’s persuasion in the quoted verse?', 'أي وعد يشكل جوهر وسوسة الشيطان في الآية المقتبسة؟'), { en: ['Becoming angels or immortals', 'Receiving greater worldly wealth', 'Returning immediately to Earth'], ar: ['أن يصيرا ملكين أو من الخالدين', 'الحصول على ثروة دنيوية أكبر', 'الهبوط الفوري إلى الأرض'] }, 0, L('The temptation is framed around angelic status or immortality.', 'تُصاغ الغواية حول مرتبة الملائكة أو الخلود.')) },
        { id: 'adam-b2-c7-final', learningPointId: 'adam-b2-c7-consequence', eligibleStages: ['final'], exercise: mc(L('What immediate inner change follows Adam’s eating in the chapter?', 'ما التغير الداخلي المباشر الذي يلي أكل آدم في الفصل؟'), { en: ['Pain, sadness, shame, and loss of internal harmony', 'Complete emotional calm', 'Pride and a stronger sense of superiority'], ar: ['الألم والحزن والخجل وزوال الانسجام الداخلي', 'هدوء نفسي كامل', 'الكبر وزيادة الشعور بالتفوق'] }, 0, L('The chapter describes an immediate emotional and internal rupture after the act.', 'يصف الفصل انكسارًا شعوريًا وداخليًا مباشرًا بعد الفعل.')) },
      ],
      ...G(L('forgetfulness, persuasion, temptation, and internal consequence', 'النسيان والإقناع والغواية والنتيجة الداخلية'), L('Which human vulnerability does Satan exploit, and how does the chapter describe it?', 'أي ضعف إنساني يستغله الشيطان، وكيف يصفه الفصل؟'), L('How does the narrative move from suggestion to decision and then to emotional consequence?', 'كيف ينتقل السرد من الوسوسة إلى القرار ثم إلى النتيجة الشعورية؟'), L('Use by + -ing, because, as soon as, and as a result to trace manipulation and consequence.', 'استخدم أدوات الوسيلة والسبب والفورية والنتيجة لتتبع التلاعب والنتائج.'), L('Practise immortals, whispered, sincere, preoccupied, determination, and harmony.', 'تدرّب على نطق الخالدين، فوسوس، الناصحين، منشغلين، العزم، والانسجام.')),
    },
    {
      chapterId: 8,
      objectives: [
        L('Explain the immediate response to nakedness and the chapter’s interpretation of hayâ.', 'يشرح الاستجابة المباشرة للعري وتفسير الفصل للحياء.'),
        L('Respect the chapter’s explicit source limit concerning the forbidden tree.', 'يحافظ على قيد المصدر الصريح في الفصل بشأن الشجرة المحرمة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c8-tree-limit', focus: 'inference', claim: L('The chapter explicitly states that the Holy Qur’an does not describe the forbidden tree.', 'يذكر الفصل صراحة أن القرآن الكريم لا يصف الشجرة المحرمة.'), evidence: L('This tree is not described in the Holy Qur\'an', 'وهذه الشجرة لم يصفها القرآن الكريم') },
        { id: 'adam-b2-c8-haya', focus: 'cause-result', claim: L('Their haste to cover themselves is interpreted through hayâ as an inborn human disposition.', 'يُفسر إسراعهما إلى الستر من خلال الحياء بوصفه فطرة إنسانية.'), evidence: L('the sense of shame (hayâ) is inborn human nature', 'لأن الحياء فطرة في الإنسان') },
        { id: 'adam-b2-c8-shy', focus: 'character-action', claim: L('Adam’s response to Allah is framed as shame before his Lord rather than an attempt to flee.', 'تُعرض استجابة آدم بوصفها حياءً من ربه لا محاولة للفرار.'), evidence: L('No, my Lord, but I am shy of You', 'لا يا رب، ولكن حياء منك') },
      ],
      vocabularyTargets: vocabularyTargetsFor(8),
      assessmentItems: [
        { id: 'adam-b2-c8-quick', learningPointId: 'adam-b2-c8-tree-limit', eligibleStages: ['quick'], exercise: tap(L('What does the chapter say the Holy Qur’an does not tell us about the forbidden tree?', 'ما الذي يقول الفصل إن القرآن الكريم لا يخبرنا به عن الشجرة المحرمة؟'), L('It does not describe or identify the tree.', 'لا يصف الشجرة ولا يحدد نوعها.'), L('The chapter explicitly marks this as a source limit; no tree type should be inferred from the story.', 'يضع الفصل هذا قيدًا صريحًا للمصدر؛ فلا ينبغي استنتاج نوع الشجرة من القصة.')) },
        { id: 'adam-b2-c8-review', learningPointId: 'adam-b2-c8-haya', eligibleStages: ['review'], exercise: mc(L('Why does the chapter say Adam and Eve hurried to cover themselves?', 'لماذا يقول الفصل إن آدم وحواء أسرعا إلى ستر نفسيهما؟'), { en: ['Because hayâ is described as an inborn human disposition', 'Because they were ordered to build a shelter', 'Because the tree leaves had special powers'], ar: ['لأن الحياء يوصف بأنه فطرة في الإنسان', 'لأنهما أُمرا ببناء مأوى', 'لأن أوراق الشجرة كانت لها قوى خاصة'] }, 0, L('The chapter directly links the act of covering with hayâ and human nature.', 'يربط الفصل مباشرة فعل الستر بالحياء والفطرة الإنسانية.')) },
        { id: 'adam-b2-c8-final', learningPointId: 'adam-b2-c8-shy', eligibleStages: ['final'], exercise: fill(L('Complete Adam’s stated reason when asked whether he was running away.', 'أكمل سبب آدم المعلن عندما سُئل هل يفر.'), L('“No, my Lord, but I am [blank] of You.”', '«لا يا رب، ولكن [blank] منك.»'), L('shy', 'حياء'), L('The quoted reply explicitly describes Adam’s state as shame before Allah.', 'يصف الرد المقتبس حالة آدم صراحة بالحياء من الله.')) },
      ],
      ...G(L('hayâ, repentance, immediate consequence, and source limits', 'الحياء والتوبة والنتيجة المباشرة وحدود المصدر'), L('What does the chapter explicitly say happened after they tasted the tree?', 'ماذا يقول الفصل صراحة إنه حدث بعد أن ذاقا الشجرة؟'), L('Why is it important at B2 level to distinguish the chapter’s explicit description from claims about what kind of tree it was?', 'لماذا من المهم في مستوى B2 التمييز بين وصف الفصل الصريح والادعاءات عن نوع الشجرة؟'), L('Use the Qur’an does not describe, according to the chapter, therefore, and cannot be concluded to mark source limits.', 'استخدم لا يصف القرآن ووفقًا للفصل ولذلك ولا يمكن استنتاجه لبيان حدود المصدر.'), L('Practise deception, evident, hayâ, unclad, forgiveness, and forbidden.', 'تدرّب على نطق بغرور، ظهرت، الحياء، عاريان، المغفرة، والمحرمة.')),
    },
    {
      chapterId: 9,
      objectives: [
        L('Analyse repentance as a response to error rather than denial or self-justification.', 'يحلل التوبة بوصفها استجابة للخطأ بدل الإنكار أو تبرير الذات.'),
        L('Explain the chapter’s sequence from regret and forgiveness to descent and later prophethood.', 'يشرح تسلسل الفصل من الندم والمغفرة إلى الهبوط ثم النبوة لاحقًا.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c9-regret', focus: 'cause-result', claim: L('Adam’s regret is explicitly presented as a reason for Allah’s mercy upon him.', 'يُعرض ندم آدم صراحة سببًا لرحمة الله به.'), evidence: L('His regret itself was the reason for Allah’s mercy upon him', 'وكان ندمه نفسه سببا لرحمة الله به') },
        { id: 'adam-b2-c9-response', focus: 'theme', claim: L('The chapter says an honoured human should recognise mistakes, seek the fault within, and return to Allah immediately.', 'يقول الفصل إن الإنسان المكرم ينبغي أن يعرف خطأه ويبحث عن التقصير في نفسه ويرجع إلى الله فورًا.'), evidence: L('recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah', 'يجب عليه أن يعرف خطأه، وأن يبحث عن التقصير في نفسه، وأن يرجع إلى الله فورا') },
      ],
      vocabularyTargets: vocabularyTargetsFor(9),
      assessmentItems: [
        { id: 'adam-b2-c9-quick', learningPointId: 'adam-b2-c9-regret', eligibleStages: ['quick'], exercise: matching(L('Match each part of the repentance sequence with its function in the chapter.', 'صل كل جزء من تسلسل التوبة بوظيفته في الفصل.'), { en: [['Adam’s regret', 'is linked to Allah’s mercy'], ['Words from his Lord', 'teach him how to ask forgiveness']], ar: [['ندم آدم', 'يرتبط برحمة الله'], ['كلمات من ربه', 'تعلمه كيف يطلب المغفرة']] }, L('The chapter connects inner regret with mercy and divine teaching with the form of seeking forgiveness.', 'يربط الفصل الندم الداخلي بالرحمة وتعليم الله بطريقة طلب المغفرة.')) },
        { id: 'adam-b2-c9-knowledge', learningPointId: 'adam-b2-c9-response', eligibleStages: ['knowledge'], exercise: tf(L('The chapter presents preserving human honour as requiring people to blame others first and delay returning to Allah.', 'يعرض الفصل الحفاظ على كرامة الإنسان بأنه يتطلب لوم الآخرين أولًا وتأخير الرجوع إلى الله.'), false, L('It states the opposite: recognise the mistake, seek the fault within oneself, and return to Allah immediately.', 'يذكر العكس: معرفة الخطأ والبحث عن التقصير في النفس والرجوع إلى الله فورًا.')) },
      ],
      ...G(L('regret, mercy, responsibility, forgiveness, and return to Allah', 'الندم والرحمة والمسؤولية والمغفرة والرجوع إلى الله'), L('What sequence does the chapter establish between regret, asking forgiveness, and mercy?', 'ما التسلسل الذي يقيمه الفصل بين الندم وطلب المغفرة والرحمة؟'), L('How does Adam’s response to error differ from a response based on denial or external blame?', 'كيف تختلف استجابة آدم للخطأ عن استجابة تقوم على الإنكار أو لوم الخارج؟'), L('Use immediately, unless, after, and in order to to explain sequence and purpose.', 'استخدم فورًا وإن لم وبعد ولكي لشرح التسلسل والغرض.'), L('Practise regretted, mercy, repentance, pardoned, prophethood, and guidance.', 'تدرّب على نطق ندم، رحمة، تاب، المغفرة، النبوة، والهدى.')),
    },
    {
      chapterId: 10,
      objectives: [
        L('Evaluate the chapter’s interpretation of descent as honourable settlement rather than humiliation.', 'يقيم تفسير الفصل للهبوط بوصفه استقرارًا مكرمًا لا إذلالًا.'),
        L('Explain why the Paradise experience is called a cornerstone of vicegerency.', 'يشرح لماذا تسمى تجربة الجنة ركنًا أساسيًا من الخلافة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c10-settlement', focus: 'comparison', claim: L('Descent to Earth is explicitly framed as honourable settlement rather than dishonour or humiliation.', 'يؤطر الهبوط إلى الأرض صراحة بوصفه استقرارًا مكرمًا لا إهانة أو إذلالًا.'), evidence: L('did not imply dishonour or humiliation, but rather it was an honorable and respected settlement on Earth', 'لم يكن دليلا على الإهانة أو الإذلال، بل كان استقرارا مكرّما ومحترما في الأرض') },
        { id: 'adam-b2-c10-cornerstone', focus: 'cause-result', claim: L('The experience is described as essential for earthly life and a cornerstone of vicegerency because it teaches that Satan is an enemy and guidance must come from the Creator.', 'توصف التجربة بأنها ضرورية للحياة الأرضية وركن من الخلافة لأنها تعلم عداوة الشيطان واتباع هدى الخالق.'), evidence: L('That experience was essential for their life on Earth; it was a cornerstone of their vicegerency', 'وكانت تلك تجربة ضرورية لحياتهما على الأرض، وكانت ركنا أساسيا من خلافتهما') },
      ],
      vocabularyTargets: vocabularyTargetsFor(10),
      assessmentItems: [
        { id: 'adam-b2-c10-quick', learningPointId: 'adam-b2-c10-settlement', eligibleStages: ['quick'], exercise: fill(L('Complete the chapter’s contrast concerning descent to Earth.', 'أكمل المقارنة التي يقدمها الفصل بشأن الهبوط إلى الأرض.'), L('The descent was not humiliation; it was an honourable and respected [blank] on Earth.', 'لم يكن الهبوط إذلالًا؛ بل كان [blank] مكرمًا ومحترمًا في الأرض.'), L('settlement', 'استقرارًا'), L('The chapter explicitly replaces a humiliation reading with an honourable-settlement reading.', 'يستبدل الفصل صراحة قراءة الإذلال بقراءة الاستقرار المكرم.')) },
        { id: 'adam-b2-c10-final', learningPointId: 'adam-b2-c10-cornerstone', eligibleStages: ['final'], exercise: tf(L('The chapter treats the experience in Paradise as unrelated to the responsibilities of vicegerency on Earth.', 'يعامل الفصل تجربة الجنة بوصفها غير مرتبطة بمسؤوليات الخلافة في الأرض.'), false, L('It calls the experience essential for earthly life and a cornerstone of vicegerency.', 'يسمي التجربة ضرورية للحياة على الأرض وركنًا أساسيًا من الخلافة.')) },
      ],
      ...G(L('descent, honour, vicegerency, experience, and guidance', 'الهبوط والتكريم والخلافة والتجربة والهداية'), L('How does the chapter explicitly reject a humiliation-only reading of descent?', 'كيف يرفض الفصل صراحة قراءة الهبوط بوصفه إذلالًا فقط؟'), L('What does the chapter say the Paradise experience teaches Adam, Eve, and their descendants for life on Earth?', 'ماذا يقول الفصل إن تجربة الجنة تعلم آدم وحواء وذريتهما للحياة على الأرض؟'), L('Use not … but rather, because, so that, and is described as to evaluate competing interpretations.', 'استخدم ليس... بل ولأن ولكي ويوصف بأنه لتقييم التفسيرات المتنافسة.'), L('Practise vicegerency, humiliation, descended, pilgrimage, cornerstone, and settlement.', 'تدرّب على نطق الخلافة، الإذلال، هبط، الحج، ركن، والاستقرار.')),
    },
    {
      chapterId: 11,
      objectives: [
        L('Analyse the double struggle of survival and moral resistance in Adam’s earthly life.', 'يحلل الصراع المزدوج للبقاء والمقاومة الأخلاقية في حياة آدم الأرضية.'),
        L('Explain how remembrance, meaning, and constructive responsibility are connected.', 'يشرح كيف يرتبط ذكر الله بالمعنى والمسؤولية العمرانية.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c11-struggle', focus: 'main-idea', claim: L('Life on Earth is presented as continuous conflict involving survival and struggle against evil.', 'تُعرض الحياة على الأرض بوصفها صراعًا مستمرًا يشمل البقاء ومجاهدة الشر.'), evidence: L('On Earth, he had to face conflict and struggle', 'وكان عليه في الأرض أن يواجه الصراع والكفاح') },
        { id: 'adam-b2-c11-meaning', focus: 'cause-result', claim: L('The chapter connects removing Allah from the human mind with removing meaning and purpose from life.', 'يربط الفصل إبعاد الله عن عقل الإنسان بإبعاد المعنى والغاية عن حياته.'), evidence: L('the removal of Allah from the human mind means the removal of meaning and purpose from human life', 'إبعاد الله عن عقل الإنسان يعني إبعاد المعنى والغاية عن حياته') },
        { id: 'adam-b2-c11-building', focus: 'character-action', claim: L('Adam’s responsibility includes maintaining, cultivating, constructing, and populating the Earth and raising children who improve it.', 'تشمل مسؤولية آدم الحفاظ على الأرض وزراعتها وبناءها وتعميرها وتربية أولاد يحسنون العالم.'), evidence: L('maintain, cultivate, construct, and populate the Earth', 'يحافظ على الأرض، ويزرعها، ويبنيها، ويعمرها') },
      ],
      vocabularyTargets: vocabularyTargetsFor(11),
      assessmentItems: [
        { id: 'adam-b2-c11-quick', learningPointId: 'adam-b2-c11-struggle', eligibleStages: ['quick'], exercise: mc(L('Which description best captures Adam’s earthly condition in this chapter?', 'أي وصف يلخص بصورة أدق حال آدم في الأرض في هذا الفصل؟'), { en: ['A life of practical survival and moral struggle', 'A return to uninterrupted Paradise peace', 'A life without responsibility for the Earth'], ar: ['حياة تجمع كفاح البقاء والصراع الأخلاقي', 'عودة إلى سلام الجنة بلا انقطاع', 'حياة بلا مسؤولية عن الأرض'] }, 0, L('The chapter combines physical survival with an ongoing struggle against evil.', 'يجمع الفصل بين البقاء المادي والصراع المستمر ضد الشر.')) },
        { id: 'adam-b2-c11-review', learningPointId: 'adam-b2-c11-meaning', eligibleStages: ['review'], exercise: tf(L('The chapter separates remembrance of Allah from meaning and purpose in human life.', 'يفصل الفصل ذكر الله عن المعنى والغاية في حياة الإنسان.'), false, L('It explicitly connects forgetting Allah with losing meaning and purpose.', 'يربط الفصل صراحة إبعاد الله بفقدان المعنى والغاية.')) },
        { id: 'adam-b2-c11-final', learningPointId: 'adam-b2-c11-building', eligibleStages: ['final'], exercise: matching(L('Match Adam’s earthly responsibilities with their objects in the chapter.', 'صل مسؤوليات آدم الأرضية بما تتعلق به في الفصل.'), { en: [['The Earth', 'maintain, cultivate, construct, and populate it'], ['Children', 'raise them to change and improve the world']], ar: [['الأرض', 'يحافظ عليها ويزرعها ويبنيها ويعمرها'], ['الأولاد', 'يربيهم ليغيروا العالم ويحسنوه']] }, L('The final paragraph gives constructive duties toward both the Earth and the next generation.', 'تعطي الفقرة الأخيرة واجبات عمرانية تجاه الأرض والجيل التالي.')) },
      ],
      ...G(L('survival, moral conflict, remembrance, meaning, and constructive responsibility', 'البقاء والصراع الأخلاقي والذكر والمعنى والمسؤولية العمرانية'), L('What two kinds of struggle does the chapter describe in Adam’s earthly life?', 'ما نوعا الصراع اللذان يصفهما الفصل في حياة آدم على الأرض؟'), L('How does the chapter connect spiritual remembrance with practical responsibility for Earth and future generations?', 'كيف يربط الفصل الذكر الروحي بالمسؤولية العملية عن الأرض والأجيال القادمة؟'), L('Use above all, yet, while, and means that to rank and connect different kinds of responsibility.', 'استخدم فوق كل ذلك ومع ذلك وبينما ويعني أن لترتيب أنواع المسؤولية وربطها.'), L('Practise conflict, displacement, continuous, cultivate, populate, and purpose.', 'تدرّب على نطق الصراع، الخروج، مستمرة، يزرعها، يعمرها، والغاية.')),
    },
    {
      chapterId: 12,
      objectives: [
        L('Analyse sincerity as the key distinction between the two offerings.', 'يحلل الإخلاص بوصفه الفارق الرئيس بين القربانين.'),
        L('Respect the chapter’s statement about the Qur’an’s selective narrative focus and unnamed brothers.', 'يحافظ على عبارة الفصل عن تركيز القرآن الانتقائي وعدم ذكر اسمي الأخوين.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c12-offering', focus: 'cause-result', claim: L('Qabil’s offering is rejected because of insincerity, while Habil offers his best cattle.', 'يُرفض قربان قابيل بسبب عدم إخلاصه بينما يقدم هابيل أفضل ما عنده.'), evidence: L('Qabil’s sacrifice was not accepted by Allah because of his insincerity in his offering', 'ولم يتقبل الله قربان قابيل بسبب عدم إخلاصه في تقديمه') },
        { id: 'adam-b2-c12-source', focus: 'inference', claim: L('The chapter says the Qur’an does not openly include Torah details and does not give the brothers’ names, focusing instead on the wisdom of the story.', 'يقول الفصل إن القرآن لا يذكر صراحة تفاصيل التوراة ولا اسمي الأخوين، ويركز بدلًا من ذلك على حكمة القصة.'), evidence: L('the only thing that needs to be known is the wisdom of the story', 'الشيء الذي ينبغي أن يُعرف، بحسب القرآن، هو الحكمة من القصة') },
      ],
      vocabularyTargets: vocabularyTargetsFor(12),
      assessmentItems: [
        { id: 'adam-b2-c12-quick', learningPointId: 'adam-b2-c12-offering', eligibleStages: ['quick'], exercise: tf(L('The chapter says Qabil’s offering was rejected simply because he worked the land rather than raising cattle.', 'يقول الفصل إن قربان قابيل رُفض لمجرد أنه كان يزرع الأرض بدل رعي الماشية.'), false, L('The stated reason is his insincerity in the offering, not his occupation.', 'السبب المذكور هو عدم إخلاصه في القربان لا مهنته.')) },
        { id: 'adam-b2-c12-knowledge', learningPointId: 'adam-b2-c12-source', eligibleStages: ['knowledge'], exercise: matching(L('Match each narrative feature with the chapter’s description of the Qur’anic account.', 'صل كل سمة سردية بوصف الفصل للرواية القرآنية.'), { en: [['Names of the two brothers', 'not given in the Qur’anic telling'], ['Torah-style details', 'not openly included; the wisdom is emphasised']], ar: [['اسما الأخوين', 'لا يذكرهما السرد القرآني'], ['تفاصيل على نمط التوراة', 'لا تُذكر صراحة ويُركز على الحكمة']] }, L('The chapter explicitly warns against filling the Qur’anic account with details it does not provide.', 'ينبه الفصل صراحة إلى عدم ملء الرواية القرآنية بتفاصيل لا تقدمها.')) },
      ],
      ...G(L('sincerity, sacrifice, conflict, and disciplined source reading', 'الإخلاص والقربان والنزاع والقراءة المنضبطة للمصدر'), L('What evidence does the chapter give for the different outcomes of the two offerings?', 'ما الدليل الذي يقدمه الفصل لاختلاف نتيجة القربانين؟'), L('Why does the chapter’s comment about unnamed brothers and omitted details matter for evidence-based reading?', 'لماذا تهم ملاحظة الفصل عن عدم ذكر الاسمين وحذف التفاصيل في القراءة القائمة على الدليل؟'), L('Use according to the Qur’an, the chapter does not state, whereas, and because to qualify claims.', 'استخدم بحسب القرآن ولا يذكر الفصل وبينما ولأن لتقييد الادعاءات.'), L('Practise bliss, sacrifice, insincerity, pious, offering, and wisdom.', 'تدرّب على نطق أفراح، قربان، الإخلاص، التقوى، القربان، والحكمة.')),
    },
    {
      chapterId: 13,
      objectives: [
        L('Compare Habil’s non-aggressive response with Qabil’s rebellious and selfish attitude.', 'يقارن بين رد هابيل غير العدواني وموقف قابيل المتمرد والأناني.'),
        L('Analyse the chapter’s claim that goodness requires control of destructive thoughts and desires.', 'يحلل قول الفصل إن الخير يتطلب السيطرة على الأفكار والرغبات المدمرة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c13-contrast', focus: 'comparison', claim: L('Habil is described as respectful and obedient while Qabil is arrogant, selfish, and disobedient.', 'يُوصف هابيل بالعقل والاحترام والطاعة بينما يوصف قابيل بالكبر والأنانية والعصيان.'), evidence: L('Habil was intelligent, respectful, and always ready to obey the will of Allah', 'وكان هابيل عاقلا، ومحترما، ومستعدا دائما لطاعة إرادة الله') },
        { id: 'adam-b2-c13-control', focus: 'theme', claim: L('The path to goodness is described as controlling evil thoughts and actions and moderating desires.', 'يوصف طريق الخير بأنه السيطرة على الأفكار والأفعال السيئة والاعتدال في الرغبات.'), evidence: L('The path to goodness is in controlling evil thoughts and actions and being moderate in desires', 'والطريق إلى الخير يكون في السيطرة على الأفكار والأفعال السيئة، وفي الاعتدال في الرغبات') },
      ],
      vocabularyTargets: vocabularyTargetsFor(13),
      assessmentItems: [
        { id: 'adam-b2-c13-quick', learningPointId: 'adam-b2-c13-contrast', eligibleStages: ['quick'], exercise: matching(L('Match each brother with the character traits used in the chapter.', 'صل كل أخ بالصفات التي يستخدمها الفصل.'), { en: [['Habil', 'respectful and ready to obey Allah'], ['Qabil', 'arrogant, selfish, and disobedient']], ar: [['هابيل', 'محترم ومستعد لطاعة الله'], ['قابيل', 'متكبر وأناني وعاصٍ']] }, L('The chapter creates a direct moral contrast between the two brothers.', 'يبني الفصل مقارنة أخلاقية مباشرة بين الأخوين.')) },
        { id: 'adam-b2-c13-review', learningPointId: 'adam-b2-c13-control', eligibleStages: ['review'], exercise: mc(L('According to the chapter, what is necessary for moving toward goodness?', 'وفقًا للفصل، ما الضروري للسير نحو الخير؟'), { en: ['Controlling evil thoughts and actions and moderating desires', 'Following every strong desire', 'Avoiding all responsibility for choices'], ar: ['السيطرة على الأفكار والأفعال السيئة والاعتدال في الرغبات', 'اتباع كل رغبة قوية', 'تجنب كل مسؤولية عن الاختيارات'] }, 0, L('The chapter explicitly defines the path to goodness through self-control and moderation.', 'يحدد الفصل صراحة طريق الخير بالسيطرة على النفس والاعتدال.')) },
      ],
      ...G(L('human moral potential, self-control, compassion, and contrasting character', 'الإمكان الأخلاقي للإنسان وضبط النفس والرحمة وتباين الشخصية'), L('How does the chapter construct the contrast between Habil and Qabil?', 'كيف يبني الفصل المقارنة بين هابيل وقابيل؟'), L('What does the chapter imply about moral responsibility when it says humans have potential for both good and evil?', 'ماذا يعني الفصل بشأن المسؤولية الأخلاقية عندما يقول إن الإنسان يملك قابلية الخير والشر؟'), L('Use although, while, in contrast, and requires to compare character and moral choice.', 'استخدم مع أن وبينما وعلى النقيض ويتطلب للمقارنة بين الشخصية والاختيار الأخلاقي.'), L('Practise rebellious, compassion, aggressive, moderate, selfish, and consequence.', 'تدرّب على نطق متمرد، رحمة، عدواني، الاعتدال، أناني، والعاقبة.')),
    },
    {
      chapterId: 14,
      objectives: [
        L('Trace the movement from murder to guilt, confusion, and the lesson of burial.', 'يتتبع الانتقال من القتل إلى الذنب والحيرة ودرس الدفن.'),
        L('Explain how the raven episode is connected to preserving human dignity after death.', 'يشرح كيف ترتبط حادثة الغراب بحفظ كرامة الإنسان بعد الموت.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c14-crime', focus: 'turning-point', claim: L('Qabil’s killing of Habil is described as the first death and first criminal act committed by humans on Earth.', 'يوصف قتل قابيل لهابيل بأنه أول موت وأول جريمة يرتكبها الإنسان على الأرض.'), evidence: L('This was the first death and the first criminal act committed by man on Earth', 'وكان هذا أول موت وأول جريمة ارتكبها الإنسان على الأرض') },
        { id: 'adam-b2-c14-raven', focus: 'cause-result', claim: L('The raven episode teaches burial and is explicitly linked with preserving human dignity after death.', 'تعلم حادثة الغراب الدفن وترتبط صراحة بحفظ كرامة الإنسان بعد الموت.'), evidence: L('the highness of a human had to be preserved even after death', 'كرامة الإنسان يجب أن تُحفظ حتى بعد موته') },
      ],
      vocabularyTargets: vocabularyTargetsFor(14),
      assessmentItems: [
        { id: 'adam-b2-c14-quick', learningPointId: 'adam-b2-c14-crime', eligibleStages: ['quick'], exercise: matching(L('Match the turning point with the consequence stated in the chapter.', 'صل نقطة التحول بالنتيجة المذكورة في الفصل.'), { en: [['Qabil kills Habil', 'the first death and criminal act'], ['Adam cannot find Habil', 'he becomes filled with grief']], ar: [['قتل قابيل هابيل', 'أول موت وأول جريمة'], ['عدم عثور آدم على هابيل', 'امتلاؤه بالحزن']] }, L('The chapter links the murder with both a historical first and immediate family grief.', 'يربط الفصل القتل بكونه أول جريمة وبالحزن الأسري المباشر.')) },
        { id: 'adam-b2-c14-final', learningPointId: 'adam-b2-c14-raven', eligibleStages: ['final'], exercise: mc(L('Why does the chapter say Allah sends the ravens in the burial episode?', 'لماذا يقول الفصل إن الله أرسل الغرابين في حادثة الدفن؟'), { en: ['To teach burial while preserving human dignity after death', 'To punish Adam for searching', 'To teach Qabil how to hunt'], ar: ['لتعليم الدفن مع حفظ كرامة الإنسان بعد الموت', 'لمعاقبة آدم على البحث', 'لتعليم قابيل الصيد'] }, 0, L('The chapter explicitly links the ravens with mercy, burial, and preservation of human dignity.', 'يربط الفصل صراحة الغرابين بالرحمة والدفن وحفظ كرامة الإنسان.')) },
      ],
      ...G(L('murder, guilt, burial, mercy, and human dignity', 'القتل والذنب والدفن والرحمة وكرامة الإنسان'), L('How does Qabil’s condition change after the murder?', 'كيف تتغير حالة قابيل بعد القتل؟'), L('How does the raven episode transform a scene of crime into a lesson about dignity after death?', 'كيف تحول حادثة الغراب مشهد الجريمة إلى درس عن الكرامة بعد الموت؟'), L('Use at first, meanwhile, as a mercy, and in order to to explain narrative transition and purpose.', 'استخدم في البداية وفي هذه الأثناء ورحمةً ولكي لشرح الانتقال السردي والغرض.'), L('Practise familial, burdened, victorious, corpse, guilt, dignity, and raven.', 'تدرّب على نطق روابط الأسرة، مثقلًا، الغالب، الجثة، الذنب، الكرامة، والغراب.')),
    },
    {
      chapterId: 15,
      objectives: [
        L('Distinguish regret after wrongdoing from the chapter’s broader account of choosing evil and following guidance.', 'يميز الندم بعد الخطأ من عرض الفصل الأوسع لاختيار الشر واتباع الهداية.'),
        L('Compare Qabil and Habil as two moral types in the chapter’s interpretation.', 'يقارن قابيل وهابيل بوصفهما نموذجين أخلاقيين في تفسير الفصل.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c15-burial', focus: 'sequence', claim: L('After seeing the raven, Qabil buries his brother and the chapter calls this the first human burial.', 'بعد رؤية الغراب يدفن قابيل أخاه ويسمي الفصل ذلك أول دفن للإنسان.'), evidence: L('Qabil then buried his brother. This was also the first burial of man', 'ثم دفن أخاه بعد ذلك. وكان هذا أيضا أول دفن للإنسان') },
        { id: 'adam-b2-c15-guidance', focus: 'theme', claim: L('The chapter presents revelation-guided choice of truth and goodness as a way to purify human nature from evil.', 'يعرض الفصل اختيار الحق والخير بهدى الوحي سبيلًا لتطهير الطبيعة الإنسانية من الشرور.'), evidence: L('choosing the truth over falsehood and goodness over evil will purify human nature from evils', 'واختيار الحق بدل الباطل، والخير بدل الشر، يطهر الطبيعة الإنسانية من الشرور') },
      ],
      vocabularyTargets: vocabularyTargetsFor(15),
      assessmentItems: [
        { id: 'adam-b2-c15-quick', learningPointId: 'adam-b2-c15-burial', eligibleStages: ['quick'], exercise: fill(L('Complete the historical first identified after Qabil follows the raven’s example.', 'أكمل السابقة التاريخية التي يحددها الفصل بعد اتباع قابيل مثال الغراب.'), L('Qabil buried his brother; this was the first human [blank].', 'دفن قابيل أخاه؛ وكان هذا أول [blank] للإنسان.'), L('burial', 'دفن'), L('The chapter explicitly calls it the first burial of man.', 'يسميه الفصل صراحة أول دفن للإنسان.')) },
        { id: 'adam-b2-c15-review', learningPointId: 'adam-b2-c15-guidance', eligibleStages: ['review'], exercise: tf(L('The chapter argues that choosing truth and goodness under the guidance of revelation can purify human nature from evil.', 'يقول الفصل إن اختيار الحق والخير بهدى الوحي يمكن أن يطهر الطبيعة الإنسانية من الشرور.'), true, L('This is the explicit moral interpretation given after the burial episode.', 'هذا هو التفسير الأخلاقي الصريح الذي يقدمه الفصل بعد حادثة الدفن.')) },
      ],
      ...G(L('regret, consequences, revelation, moral choice, and purification', 'الندم والعواقب والوحي والاختيار الأخلاقي والتطهير'), L('What does Qabil’s regret change, and what does it not change, in the sequence of events?', 'ماذا يغير ندم قابيل وما الذي لا يغيره في تسلسل الأحداث؟'), L('How does the chapter move from one person’s crime to a general claim about revelation and moral choice?', 'كيف ينتقل الفصل من جريمة شخص واحد إلى قول عام عن الوحي والاختيار الأخلاقي؟'), L('Use consequence, while, represents, and illustrates that to move from event to interpretation carefully.', 'استخدم العاقبة وبينما ويمثل ويوضح أن للانتقال من الحدث إلى التفسير بدقة.'), L('Practise regret, guilt, consequences, revelation, righteousness, and daily bread.', 'تدرّب على نطق الأسى، الذنب، العاقبة، الوحي، الصلاح، وقوت اليوم.')),
    },
    {
      chapterId: 16,
      objectives: [
        L('Explain how Adam’s role shifts from personal experience to teaching later generations.', 'يشرح كيف ينتقل دور آدم من التجربة الشخصية إلى تعليم الأجيال اللاحقة.'),
        L('Identify the unity the chapter attributes to prophets despite different names and miracles.', 'يحدد الوحدة التي ينسبها الفصل إلى الأنبياء رغم اختلاف الأسماء والمعجزات.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c16-successor', focus: 'turning-point', claim: L('Near death, Adam appoints Seth as his successor and teaches him acts of worship.', 'قرب وفاته يجعل آدم شيثًا خليفة له ويعلمه العبادات.'), evidence: L('he appointed his son Seth to be his successor', 'جعل ابنه شيث خليفة له') },
        { id: 'adam-b2-c16-unity', focus: 'main-idea', claim: L('The chapter says later prophets may differ in names and miracles but share the call to Allah’s straight path.', 'يقول الفصل إن الأنبياء قد يختلفون في الأسماء والمعجزات لكنهم يجتمعون في الدعوة إلى صراط الله المستقيم.'), evidence: L('they would be united in one thing: the call to follow Allah’s straight path', 'سيجتمعون في شيء واحد، وهو الدعوة إلى اتباع صراط الله المستقيم') },
      ],
      vocabularyTargets: vocabularyTargetsFor(16),
      assessmentItems: [
        { id: 'adam-b2-c16-quick', learningPointId: 'adam-b2-c16-successor', eligibleStages: ['quick'], exercise: mc(L('What continuity step does Adam take as his death approaches?', 'ما خطوة الاستمرار التي يتخذها آدم مع اقتراب وفاته؟'), { en: ['He appoints Seth as his successor', 'He ends all teaching', 'He appoints Qabil as his only guide'], ar: ['يجعل شيثًا خليفة له', 'ينهي كل تعليم', 'يجعل قابيل مرشده الوحيد'] }, 0, L('The chapter directly states that Seth is appointed as Adam’s successor.', 'يذكر الفصل مباشرة أن شيثًا جُعل خليفة لآدم.')) },
        { id: 'adam-b2-c16-knowledge', learningPointId: 'adam-b2-c16-unity', eligibleStages: ['knowledge'], exercise: mc(L('What remains common among the prophets according to Adam’s final teaching in the chapter?', 'ما الذي يبقى مشتركًا بين الأنبياء وفق تعليم آدم الأخير في الفصل؟'), { en: ['The call to follow Allah’s straight path', 'Exactly the same names and miracles', 'The same historical location'], ar: ['الدعوة إلى اتباع صراط الله المستقيم', 'الأسماء والمعجزات نفسها تمامًا', 'المكان التاريخي نفسه'] }, 0, L('The chapter contrasts different names and miracles with one shared call.', 'يقارن الفصل اختلاف الأسماء والمعجزات بدعوة واحدة مشتركة.')) },
      ],
      ...G(L('succession, teaching, prophetic continuity, and legacy', 'الخلافة والتعليم واستمرار النبوة والإرث'), L('How does Adam prepare his children for guidance after his death?', 'كيف يهيئ آدم أولاده للهداية بعد وفاته؟'), L('How does the chapter define continuity when prophets can differ in names and miracles?', 'كيف يعرّف الفصل الاستمرار مع إمكان اختلاف الأنبياء في الأسماء والمعجزات؟'), L('Use although, despite, would, and be united in to express continuity through difference.', 'استخدم مع أن ورغم وسوف ويجتمعون في للتعبير عن الاستمرار مع الاختلاف.'), L('Practise successor, scrolls, legacy, miracles, straight path, and Angel of Death.', 'تدرّب على نطق الخليفة، الصحف، الإرث، المعجزات، الصراط المستقيم، وملك الموت.')),
    },
    {
      chapterId: 17,
      objectives: [
        L('Explain the stated limit on Satan’s authority over sincere servants.', 'يشرح الحد المعلن لسلطان الشيطان على العباد المخلصين.'),
        L('Analyse the chapter’s final claim that Satan appears strong through human weakness, moral lack, and carelessness.', 'يحلل قول الفصل الأخير إن قوة الشيطان الظاهرة تنشأ من ضعف الإنسان ونقص الأخلاق والغفلة.'),
      ],
      evidencePoints: [
        { id: 'adam-b2-c17-authority', focus: 'theme', claim: L('The quoted passage states that Satan has no authority over Allah’s sincere servants.', 'يذكر المقطع المقتبس أن الشيطان لا سلطان له على عباد الله المخلصين.'), evidence: L('Over My servants you have no authority', 'إن عبادي ليس لك عليهم سلطان') },
        { id: 'adam-b2-c17-weakness', focus: 'inference', claim: L('The chapter says Satan is not strong by himself; human weakness, lack of morals, and carelessness make him appear strong.', 'يقول الفصل إن الشيطان ليس قويًا بذاته، بل يقويه ضعف الإنسان ونقصه الأخلاقي وغفلته.'), evidence: L('Satan alone is not strong; it is only man\'s weakness and lack of morals and carefulness that make Satan look so strong', 'والشيطان ليس قويا في نفسه، ولكن الذي يقويه هو ضعف الإنسان، ونقصه الأخلاقي، وغفلته') },
      ],
      vocabularyTargets: vocabularyTargetsFor(17),
      assessmentItems: [
        { id: 'adam-b2-c17-quick', learningPointId: 'adam-b2-c17-authority', eligibleStages: ['quick'], exercise: tf(L('The quoted passage gives Satan unrestricted authority over all of Allah’s servants.', 'يعطي المقطع المقتبس الشيطان سلطانًا غير محدود على جميع عباد الله.'), false, L('The passage explicitly denies his authority over Allah’s servants and identifies followers of error as the exception.', 'ينفي المقطع صراحة سلطانه على عباد الله ويجعل أتباع الغواية استثناءً.')) },
        { id: 'adam-b2-c17-final', learningPointId: 'adam-b2-c17-weakness', eligibleStages: ['final'], exercise: tf(L('The chapter explains Satan’s apparent strength as completely independent of human moral weakness and carelessness.', 'يفسر الفصل قوة الشيطان الظاهرة بأنها مستقلة تمامًا عن ضعف الإنسان الأخلاقي وغفلته.'), false, L('It explicitly says human weakness, moral lack, and carelessness make Satan look strong.', 'يقول الفصل صراحة إن ضعف الإنسان ونقصه الأخلاقي وغفلته هي التي تجعل الشيطان يبدو قويًا.')) },
      ],
      ...G(L('authority, sincerity, temptation, human weakness, and the final question of value', 'السلطان والإخلاص والغواية والضعف الإنساني والسؤال الأخير عن القيمة'), L('What limit does the quoted passage place on Satan’s authority?', 'ما الحد الذي يضعه المقطع المقتبس لسلطان الشيطان؟'), L('How does the chapter shift responsibility from an all-powerful tempter toward human moral vigilance?', 'كيف ينقل الفصل المسؤولية من صورة الغاوي المطلق القوة إلى يقظة الإنسان الأخلاقية؟'), L('Use no authority over, except, rather, and this suggests to analyse limits and responsibility.', 'استخدم لا سلطان له على وإلا وبل ويشير هذا إلى لتحليل الحدود والمسؤولية.'), L('Practise mislead, unquestionably, deterrent, descendants, authority, sincere, and worldly life.', 'تدرّب على نطق الإضلال، سلطان، عبرة، ذرية، المخلصين، والجوهر الحقيقي.')),
    },
  ],
});
