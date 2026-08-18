import type {
  BlueprintAssessmentItem,
  BlueprintGuideContent,
  LearningBlueprintChapter,
  LocalizedText,
} from '../../../learningBlueprint';
import type {
  BlueprintCognitiveDemandV2,
  BlueprintLearningOutcomeV2,
  BlueprintUniversalCompetency,
} from '../../../learningQualityContract';
import { L, fill, mc, tf } from './helpers';

const TYMM_FOREIGN = 'https://tymm.meb.gov.tr/beceriler/yabanci-dil-alan-becerileri';
const TYMM_CONCEPTUAL = 'https://tymm.meb.gov.tr/beceriler/kavramsal-beceriler';
const CEFR = 'https://www.coe.int/en/web/common-european-framework-reference-languages/cefr-descriptors';
const T = (en: string, ar: string): LocalizedText => L(en, ar);

type ConceptCode = 'KB2.7' | 'KB2.10' | 'KB2.13';
type OutcomeInput = {
  id: string;
  objective: LocalizedText;
  success: [LocalizedText, LocalizedText];
  competencies: BlueprintUniversalCompetency[];
  concept?: { code: ConceptCode; label: string; rationale: LocalizedText };
  production?: 'speaking' | 'writing' | 'both';
};

type GuideSpec = {
  focus: LocalizedText;
  prior: LocalizedText;
  misconception: LocalizedText;
  transfer: LocalizedText;
  reflection: LocalizedText;
  vocabulary: LocalizedText;
};

type ChapterSpec = {
  outcomes: [BlueprintLearningOutcomeV2, BlueprintLearningOutcomeV2];
  evidenceOutcome: Record<string, string>;
  retry: Record<string, LocalizedText>;
  guide: GuideSpec;
  evidenceOverrides?: Record<string, { claim: LocalizedText; evidence: LocalizedText }>;
  exerciseOverrides?: Record<string, BlueprintAssessmentItem['exercise']>;
};

const concept = (code: ConceptCode, label: string, en: string, ar: string) => ({ code, label, rationale: T(en, ar) });

const outcome = (input: OutcomeInput): BlueprintLearningOutcomeV2 => ({
  id: input.id,
  objective: input.objective,
  successCriteria: input.success,
  universalCompetencies: input.competencies,
  cefrAlignment: [{
    level: 'A2',
    mode: 'reception',
    descriptorReference: 'Overall reading comprehension',
    learnerCanDo: T(
      `I can understand a short story chapter well enough to ${input.objective.en.charAt(0).toLowerCase()}${input.objective.en.slice(1)}`,
      `أستطيع فهم فصل قصير من القصة بما يكفي لتحقيق هذا الهدف: ${input.objective.ar}`,
    ),
    rationale: T(
      'The learner works with short supported narrative prose and concrete information, sequence, comparison, or simple relationships appropriate to A2 reception.',
      'يعمل المتعلم مع نص سردي قصير ومدعوم ومعلومات واضحة أو تسلسل أو مقارنة أو علاقات بسيطة مناسبة للاستقبال في مستوى A2.',
    ),
    referenceUrl: CEFR,
  }],
  tymmAlignment: [
    {
      domain: 'foreign-language-field-skill',
      code: 'YDAB2',
      officialLabel: 'Okuma-Anlamlandırma Becerisi',
      strength: 'direct',
      rationale: T(
        'The learner must locate, connect, and make meaning from chapter information to demonstrate the outcome.',
        'يحتاج المتعلم إلى تحديد معلومات الفصل وربطها وبناء المعنى منها لإظهار ناتج التعلم.',
      ),
      observableBehaviour: T(
        'The learner identifies the relevant chapter evidence and uses it in a text-based response.',
        'يحدد المتعلم الدليل المناسب من الفصل ويستخدمه في استجابة قائمة على النص.',
      ),
      referenceUrl: TYMM_FOREIGN,
    },
    ...(input.concept ? [{
      domain: 'conceptual-skill' as const,
      code: input.concept.code,
      officialLabel: input.concept.label,
      strength: 'supporting' as const,
      rationale: input.concept.rationale,
      observableBehaviour: T(
        'The learner organises, compares, or infers from explicitly stated chapter information and explains the result simply.',
        'ينظم المتعلم معلومات الفصل الصريحة أو يقارن بينها أو يستنتج منها ثم يشرح النتيجة ببساطة.',
      ),
      referenceUrl: TYMM_CONCEPTUAL,
    }] : []),
    ...(input.production === 'speaking' || input.production === 'both' ? [{
      domain: 'foreign-language-field-skill' as const,
      code: 'YDAB3',
      officialLabel: 'Konuşma-Anlatma Becerisi',
      strength: 'supporting' as const,
      rationale: T('The transfer task requires a short meaningful A2 oral response.', 'تتطلب مهمة نقل التعلم استجابة شفوية قصيرة وذات معنى تناسب A2.'),
      observableBehaviour: T('The learner gives one or two short oral sentences supported by the chapter.', 'يقدم المتعلم جملة أو جملتين شفهيتين قصيرتين تدعمهما معلومات الفصل.'),
      referenceUrl: TYMM_FOREIGN,
    }] : []),
    ...(input.production === 'writing' || input.production === 'both' ? [{
      domain: 'foreign-language-field-skill' as const,
      code: 'YDAB4',
      officialLabel: 'Yazma-Anlatma Becerisi',
      strength: 'supporting' as const,
      rationale: T('The transfer task requires a short meaningful A2 written response.', 'تتطلب مهمة نقل التعلم استجابة كتابية قصيرة وذات معنى تناسب A2.'),
      observableBehaviour: T('The learner writes one or two short accurate sentences using chapter-supported meaning.', 'يكتب المتعلم جملة أو جملتين قصيرتين ودقيقتين مستخدمًا معنى يدعمه الفصل.'),
      referenceUrl: TYMM_FOREIGN,
    }] : []),
  ],
});

const specs: Record<number, ChapterSpec> = {
  1: {
    outcomes: [
      outcome({
        id: 'adam-a2-c1-o1',
        objective: T('Identify Adam’s creation from soil and the human responsibility on Earth stated in the chapter.', 'يحدد خلق آدم من التراب ومسؤولية الإنسان في الأرض كما يذكرهما الفصل.'),
        success: [T('Selects soil as the stated material of Adam’s creation.', 'يختار التراب بوصفه المادة المذكورة لخلق آدم.'), T('Identifies the stated human role on Earth without adding outside information.', 'يحدد دور الإنسان المذكور في الأرض دون إضافة معلومات خارجية.')],
        competencies: ['comprehend-explicit-information'], production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c1-o2',
        objective: T('Follow the opening sequence and explain the simple link between soil from different places and different skin colours.', 'يتتبع تسلسل البداية ويشرح العلاقة البسيطة التي يذكرها الفصل بين التراب من أماكن مختلفة واختلاف ألوان البشرة.'),
        success: [T('Recognises that the angels waited with curiosity.', 'يتعرف أن الملائكة انتظرت بفضول.'), T('Connects soil from different parts of Earth with the skin-colour explanation in the chapter.', 'يربط التراب من أماكن مختلفة بتفسير ألوان البشرة في الفصل.')],
        competencies: ['sequence-events', 'cause-effect-reasoning'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner organises opening details into a simple sequence and cause-result relationship.', 'ينظم المتعلم تفاصيل البداية في تسلسل وعلاقة سبب ونتيجة بسيطة.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c1-creation': 'adam-a2-c1-o1', 'adam-a2-c1-earth-role': 'adam-a2-c1-o1', 'adam-a2-c1-curiosity': 'adam-a2-c1-o2', 'adam-a2-c1-colors': 'adam-a2-c1-o2' },
    retry: {
      'adam-a2-c1-quick': T('Look at the first paragraph and find the material named directly after “created him from…”.', 'ارجع إلى الفقرة الأولى وابحث عن المادة المذكورة مباشرة بعد معنى «خلقه من…».'),
      'adam-a2-c1-knowledge': T('Return to Allah’s statement to the angels and choose only the human role named there.', 'ارجع إلى قول الله للملائكة واختر دور الإنسان المذكور هناك فقط.'),
      'adam-a2-c1-review': T('Reread the sentence immediately after the angels were surprised; focus on how they waited.', 'أعد قراءة الجملة بعد تعجب الملائكة وركز على كيفية انتظارهم.'),
      'adam-a2-c1-final': T('Find the sentence beginning “Because of this” and identify what the explanation refers to.', 'ابحث عن الجملة التي تبدأ بمعنى «لهذا السبب» وحدد إلى ماذا يعود التفسير.'),
    },
    guide: {
      focus: T('Build a creation → role → reaction → explanation chain from the opening.', 'ابن سلسلة الخلق ← الدور ← رد الفعل ← التفسير من البداية.'),
      prior: T('Learners can recognise basic past-event verbs and simple before/after language.', 'يستطيع المتعلمون تعرف أفعال الأحداث الماضية ولغة قبل/بعد البسيطة.'),
      misconception: T('Learners may confuse Adam’s soil with Iblis’s fire introduced later.', 'قد يخلط المتعلمون بين تراب آدم ونار إبليس التي تظهر لاحقًا.'),
      transfer: T('Write two A2 sentences: one about Adam’s creation and one about the human responsibility on Earth.', 'اكتب جملتين بمستوى A2: واحدة عن خلق آدم وأخرى عن مسؤولية الإنسان في الأرض.'),
      reflection: T('Which answer came from one sentence, and which required connecting two details?', 'أي إجابة جاءت من جملة واحدة وأيها احتاجت إلى ربط معلومتين؟'),
      vocabulary: T('Prioritise soil, curiosity, and Earth because they carry the chapter meaning.', 'ركز على التراب والفضول والأرض لأنها تحمل معنى الفصل.'),
    },
  },
  2: {
    outcomes: [
      outcome({
        id: 'adam-a2-c2-o1', objective: T('Explain the chapter’s link between Adam’s knowledge and the respect shown to him.', 'يشرح علاقة الفصل بين علم آدم والاحترام الذي أظهر له.'),
        success: [T('Identifies that Allah gave Adam knowledge and taught him to think.', 'يحدد أن الله علّم آدم العلم والتفكير.'), T('Identifies the command to show Adam respect.', 'يحدد الأمر بإظهار الاحترام لآدم.')],
        competencies: ['comprehend-explicit-information', 'cause-effect-reasoning'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner connects knowledge, understanding, and respect as related chapter ideas.', 'يربط المتعلم بين العلم والفهم والاحترام بوصفها أفكارًا مترابطة.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c2-o2', objective: T('Compare the angels’ reaction to Adam with Iblis’s reaction using the chapter.', 'يقارن بين موقف الملائكة من آدم وموقف إبليس باستخدام الفصل.'),
        success: [T('Identifies the angels’ admiration and respect.', 'يحدد إعجاب الملائكة واحترامها.'), T('Identifies Iblis’s dismissive view of Adam and states the contrast simply.', 'يحدد نظرة إبليس السلبية إلى آدم ويذكر الفرق ببساطة.')],
        competencies: ['compare-and-contrast', 'comprehend-explicit-information'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The chapter presents two clearly different reactions to Adam.', 'يعرض الفصل ردّي فعل مختلفين بوضوح تجاه آدم.'), production: 'both',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c2-respect-command': 'adam-a2-c2-o1', 'adam-a2-c2-knowledge': 'adam-a2-c2-o1', 'adam-a2-c2-angels': 'adam-a2-c2-o2', 'adam-a2-c2-iblis-view': 'adam-a2-c2-o2' },
    retry: {
      'adam-a2-c2-quick': T('Read the whole sentence and ask what Allah gave Adam before the words about teaching him to think.', 'اقرأ الجملة كاملة واسأل ماذا علّم الله آدم قبل الكلام عن التفكير.'),
      'adam-a2-c2-knowledge': T('Look only at the first quoted command in this chapter and choose the action named there.', 'انظر فقط إلى الأمر المقتبس الأول في الفصل واختر الفعل المذكور.'),
      'adam-a2-c2-review': T('Find the sentence about all the angels and use only the verbs describing their reaction.', 'اعثر على الجملة عن الملائكة واستخدم فقط الأفعال التي تصف موقفهم.'),
      'adam-a2-c2-final': T('Reread the sentence about Iblis’s view of Adam and choose the description that matches it.', 'أعد قراءة الجملة عن نظرة إبليس إلى آدم واختر الوصف المطابق.'),
    },
    guide: {
      focus: T('Connect knowledge with understanding, then compare the angels’ and Iblis’s reactions.', 'اربط العلم بالفهم ثم قارن بين موقف الملائكة وموقف إبليس.'),
      prior: T('Recall Chapter 1’s creation detail and use simple but/because links.', 'استرجع معلومة الخلق من الفصل الأول واستخدم لكن/لأن ببساطة.'),
      misconception: T('Learners may transfer Iblis’s negative reaction to the angels or treat “wiser” as physical strength.', 'قد ينقل المتعلمون موقف إبليس السلبي إلى الملائكة أو يفهمون «أكثر علمًا» كقوة جسدية.'),
      transfer: T('Write two linked sentences using because and but to explain knowledge and the different reactions.', 'اكتب جملتين مترابطتين باستخدام لأن ولكن لشرح العلم واختلاف الموقفين.'),
      reflection: T('Which word best helped you understand the chapter: knowledge, respect, or wiser?', 'أي كلمة ساعدتك أكثر على فهم الفصل: العلم أم الاحترام أم أكثر علمًا؟'),
      vocabulary: T('Prioritise knowledge, respect, and wiser in context.', 'ركز على العلم والاحترام وأكثر علمًا في السياق.'),
    },
  },
  3: {
    outcomes: [
      outcome({
        id: 'adam-a2-c3-o1', objective: T('Explain why Iblis claimed he was better and identify the arrogance in that comparison.', 'يشرح لماذا ادعى إبليس أنه أفضل ويحدد التكبر في هذه المقارنة.'),
        success: [T('Matches Iblis with fire and Adam with soil/clay.', 'يربط إبليس بالنار وآدم بالتراب/الطين.'), T('Recognises that the chapter directly describes Iblis as arrogant.', 'يتعرف أن الفصل يصف إبليس مباشرة بالتكبر.')],
        competencies: ['compare-and-contrast', 'character-and-motivation'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The learner compares the two origins exactly as Iblis compares them.', 'يقارن المتعلم بين الأصلين كما يقارنهما إبليس.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c3-o2', objective: T('Distinguish the chapter’s idea of real value from Iblis’s idea that origin makes someone better.', 'يميز بين فكرة الفصل عن القيمة وفكرة إبليس أن الأصل يجعل الشخص أفضل.'),
        success: [T('Identifies useful knowledge as helping people do good and stop bad.', 'يحدد العلم النافع بوصفه مساعدًا على فعل الخير ومنع الشر.'), T('Recognises that clay or fire does not itself make someone valuable.', 'يتعرف أن التراب أو النار لا يجعلان الشخص ذا قيمة بذاتهما.')],
        competencies: ['compare-and-contrast', 'cause-effect-reasoning'], concept: concept('KB2.10', 'Çıkarım Yapma Becerisi', 'The learner connects the explicit statements about origin and useful knowledge to identify the value message.', 'يربط المتعلم عبارات الأصل والعلم النافع لتحديد رسالة القيمة في الفصل.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c3-origin': 'adam-a2-c3-o1', 'adam-a2-c3-arrogance': 'adam-a2-c3-o1', 'adam-a2-c3-useful-knowledge': 'adam-a2-c3-o2', 'adam-a2-c3-sent-away': 'adam-a2-c3-o2' },
    evidenceOverrides: {
      'adam-a2-c3-sent-away': { claim: T('Clay or fire does not by itself make anyone valuable.', 'التراب أو النار لا يجعلان الشخص كريمًا بذاتهما.'), evidence: T('For Allah, the clay or the fire did not make anybody valuable', 'عِنْدَ اللهِ، التُّرَابُ أَوِ النَّارُ لَا يَجْعَلُ أَحَدًا كَرِيمًا') },
    },
    exerciseOverrides: {
      'adam-a2-c3-final': fill(T('Complete the chapter’s idea about origin and value.', 'أكمل فكرة الفصل عن الأصل والقيمة.'), T('For Allah, clay or fire did not make anybody [blank].', 'عِنْدَ اللهِ، التُّرَابُ أَوِ النَّارُ لَا يَجْعَلُ أَحَدًا [blank].'), T('valuable', 'كَرِيمًا'), T('The chapter says clay or fire does not by itself make anyone valuable.', 'يقول الفصل إن التراب أو النار لا يجعلان أحدًا كريمًا بذاتهما.')),
    },
    retry: {
      'adam-a2-c3-quick': T('Compare the two materials in Iblis’s own statement: which one does he name for himself and which for Adam?', 'قارن المادتين في كلام إبليس: أيهما ذكر لنفسه وأيهما لآدم؟'),
      'adam-a2-c3-knowledge': T('Find the sentence that directly names Iblis’s character after his answer.', 'اعثر على الجملة التي تسمي صفة إبليس مباشرة بعد جوابه.'),
      'adam-a2-c3-review': T('Read the useful-knowledge sentence and focus on what that knowledge helps a person do.', 'اقرأ جملة العلم النافع وركز على ما يساعد الإنسان على فعله.'),
      'adam-a2-c3-final': T('Use the sentence beginning “For Allah / عند الله” and complete only the missing value word.', 'استخدم الجملة التي تبدأ بـ«عند الله» وأكمل كلمة القيمة الناقصة فقط.'),
    },
    guide: {
      focus: T('Compare Iblis’s origin-based claim with the chapter’s useful-knowledge idea of value.', 'قارن ادعاء إبليس القائم على الأصل بفكرة الفصل عن قيمة العلم النافع.'),
      prior: T('Recall that Adam was created from soil and had been given knowledge.', 'استرجع أن آدم خُلق من التراب وأنه أُعطي العلم.'),
      misconception: T('Learners may assume the chapter agrees with Iblis that material of origin determines value.', 'قد يظن المتعلمون أن الفصل يوافق إبليس على أن مادة الأصل تحدد القيمة.'),
      transfer: T('Write one “Iblis thought…” sentence and one “The chapter says…” sentence to show the contrast.', 'اكتب جملة بمعنى «ظن إبليس…» وأخرى بمعنى «يقول الفصل…» لإظهار الفرق.'),
      reflection: T('What makes the two ideas about value different?', 'ما الذي يجعل الفكرتين عن القيمة مختلفتين؟'),
      vocabulary: T('Prioritise arrogant, valuable, fire, and clay.', 'ركز على متكبر وقيمة ونار وطين.'),
    },
  },
  4: {
    outcomes: [
      outcome({
        id: 'adam-a2-c4-o1', objective: T('Identify Allah’s warning about Iblis and explain Iblis’s stated plan against Adam.', 'يحدد تحذير الله من إبليس ويشرح خطة إبليس المذكورة ضد آدم.'),
        success: [T('Identifies the warning to be careful about Iblis.', 'يحدد التحذير من إبليس وضرورة الحذر.'), T('Identifies that Iblis planned to move Adam away from Allah’s mercy/love.', 'يحدد أن إبليس خطط لإبعاد آدم عن رحمة/محبة الله.')],
        competencies: ['character-and-motivation', 'comprehend-explicit-information'], concept: concept('KB2.10', 'Çıkarım Yapma Becerisi', 'The learner links Iblis’s anger with the goal stated for his plan.', 'يربط المتعلم غضب إبليس بهدف خطته المذكور.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c4-o2', objective: T('Explain why Eve was created in the chapter and identify the one-tree warning in Paradise.', 'يشرح لماذا خُلقت حواء في الفصل ويحدد تحذير الشجرة الواحدة في الجنة.'),
        success: [T('Connects Adam’s loneliness with the creation of Eve.', 'يربط وحدة آدم بخلق حواء.'), T('Identifies the instruction not to go near one tree.', 'يحدد التعليمات بعدم الاقتراب من شجرة واحدة.')],
        competencies: ['cause-effect-reasoning', 'comprehend-explicit-information'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner connects a stated reason with its result while keeping the two warnings separate.', 'يربط المتعلم السبب بنتيجته مع إبقاء التحذيرين منفصلين.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c4-iblis-anger': 'adam-a2-c4-o1', 'adam-a2-c4-warning-iblis': 'adam-a2-c4-o1', 'adam-a2-c4-eve': 'adam-a2-c4-o2', 'adam-a2-c4-tree': 'adam-a2-c4-o2' },
    evidenceOverrides: {
      'adam-a2-c4-iblis-anger': { claim: T('Iblis wanted Adam to lose Allah’s love and planned to move him away from Allah’s mercy.', 'خطط إبليس لإبعاد آدم عن رحمة الله.'), evidence: T("He wanted Adam to lose Allah's love, just like himself", 'لِذَلِكَ، خَطَّطَ لِإِبْعَادِ آدَمَ عَنْ رَحْمَةِ اللهِ') },
    },
    exerciseOverrides: {
      'adam-a2-c4-final': tf(T('Iblis wanted Adam to remain close to Allah’s love and mercy.', 'أراد إبليس أن يبقى آدم قريبًا من محبة الله ورحمته.'), false, T('The chapter gives the opposite plan: Iblis wanted Adam to lose Allah’s love and be away from His mercy.', 'يذكر الفصل الخطة المعاكسة: أراد إبليس إبعاد آدم عن رحمة الله.')),
    },
    retry: {
      'adam-a2-c4-quick': T('Find the final instruction and choose only what Adam and Eve were told not to approach.', 'اعثر على التعليمات الأخيرة واختر فقط ما نُهيا عن الاقتراب منه.'),
      'adam-a2-c4-knowledge': T('Reread the two sentences around Adam feeling lonely and look at what happened next.', 'أعد قراءة الجملتين حول شعور آدم بالوحدة وانظر ما حدث بعد ذلك.'),
      'adam-a2-c4-review': T('There are two warnings here. Look at the first paragraph, not the final tree sentence.', 'يوجد تحذيران هنا. انظر إلى الفقرة الأولى لا إلى جملة الشجرة الأخيرة.'),
      'adam-a2-c4-final': T('Find the sentence explaining Iblis’s plan. What did he want to happen to Adam?', 'اعثر على الجملة التي تشرح خطة إبليس. ماذا أراد أن يحدث لآدم؟'),
    },
    guide: {
      focus: T('Distinguish the warning about Iblis from the tree warning, and connect loneliness with the creation of Eve.', 'ميز بين التحذير من إبليس وتحذير الشجرة واربط الوحدة بخلق حواء.'),
      prior: T('Learners can identify a simple warning and understand because/so relationships.', 'يستطيع المتعلمون تحديد تحذير بسيط وفهم علاقات لأن/لذلك.'),
      misconception: T('Learners may combine the warning about Iblis and the warning about the tree as if they were the same statement.', 'قد يدمج المتعلمون التحذير من إبليس وتحذير الشجرة كأنهما عبارة واحدة.'),
      transfer: T('Write one because/so sentence about Adam and Eve and one separate warning sentence.', 'اكتب جملة لأن/لذلك عن آدم وحواء وجملة تحذير منفصلة.'),
      reflection: T('How did separating the two warnings help you understand the chapter?', 'كيف ساعدك الفصل بين التحذيرين على فهم الفصل؟'),
      vocabulary: T('Prioritise warning and lonely because they signal the two main relationships.', 'ركز على التحذير والوحدة لأنهما يشيران إلى العلاقتين الرئيسيتين.'),
    },
  },
  5: {
    outcomes: [
      outcome({
        id: 'adam-a2-c5-o1', objective: T('Identify Iblis’s lie and explain how Adam and Eve came to make a mistake.', 'يحدد كذبة إبليس ويشرح كيف وقع آدم وحواء في الخطأ.'),
        success: [T('Identifies the promise that they would never die.', 'يحدد الوعد بأنهما لن يموتا أبدًا.'), T('Recognises that the mistake was not on purpose.', 'يتعرف أن الخطأ لم يكن مقصودًا.')],
        competencies: ['comprehend-explicit-information', 'cause-effect-reasoning'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner organises lie → forgotten warning → mistake as a simple causal sequence.', 'ينظم المتعلم الكذبة ← نسيان التحذير ← الخطأ في تسلسل سببي بسيط.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c5-o2', objective: T('Compare Adam and Eve’s response to being wrong with Iblis’s response and identify learning from mistakes.', 'يقارن بين موقف آدم وحواء من الخطأ وموقف إبليس ويحدد التعلم من الأخطاء.'),
        success: [T('Explains that Adam and Eve were sorry, asked forgiveness, learned, and chose not to repeat the mistake.', 'يشرح أن آدم وحواء حزنا وطلبا المغفرة وتعلما وقررا ألا يكررا الخطأ.'), T('Contrasts this with Iblis not admitting that he was wrong.', 'يقارن ذلك بإبليس الذي لم يعترف بأنه مخطئ.')],
        competencies: ['compare-and-contrast', 'reflection-and-self-regulation'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The chapter explicitly presents two different responses to being wrong.', 'يعرض الفصل بوضوح موقفين مختلفين من الوقوع في الخطأ.'), production: 'both',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c5-friend-lie': 'adam-a2-c5-o2', 'adam-a2-c5-never-die': 'adam-a2-c5-o1', 'adam-a2-c5-not-purpose': 'adam-a2-c5-o1', 'adam-a2-c5-learned': 'adam-a2-c5-o2' },
    evidenceOverrides: {
      'adam-a2-c5-friend-lie': { claim: T('Unlike Adam and Eve, Iblis did not admit that he was wrong because he was arrogant.', 'على خلاف آدم وحواء، لم يعترف إبليس بأنه مخطئ لأنه كان متكبرًا.'), evidence: T('He never thought he was wrong, because he was arrogant', 'فَلِأَنَّهُ كانَ مُتَكَبِّرًا، لَمْ يَعْتَرِفْ أَبَدًا بِأَنَّهُ مُخْطِئٌ') },
    },
    exerciseOverrides: {
      'adam-a2-c5-review': mc(T('Which statement best shows the different responses to being wrong?', 'أي عبارة تبين أفضل اختلاف الموقفين من الخطأ؟'), { en: ['Adam and Eve learned from the mistake; Iblis did not admit he was wrong', 'Adam and Eve said they were right; Iblis asked forgiveness', 'Everyone forgot the mistake and moved on'], ar: ['تعلم آدم وحواء من الخطأ؛ ولم يعترف إبليس بأنه مخطئ', 'قال آدم وحواء إنهما على صواب؛ وطلب إبليس المغفرة', 'نسي الجميع الخطأ وتابعوا حياتهم'] }, 0, T('Adam and Eve learned from their mistake, while Iblis did not admit that he was wrong.', 'تعلم آدم وحواء من خطئهما، بينما لم يعترف إبليس بأنه مخطئ.')),
    },
    retry: {
      'adam-a2-c5-quick': T('Find the sentence containing “on purpose / يقصدا” and decide from that sentence only.', 'ابحث عن الجملة التي فيها معنى «عن قصد/يقصدا» وقرر منها فقط.'),
      'adam-a2-c5-knowledge': T('Return to Iblis’s first quoted promise and use its final verb.', 'ارجع إلى أول وعد مقتبس لإبليس واستخدم فعله الأخير.'),
      'adam-a2-c5-review': T('Compare what Adam and Eve did after the mistake with what the final paragraph says about Iblis.', 'قارن ما فعله آدم وحواء بعد الخطأ بما تقوله الفقرة الأخيرة عن إبليس.'),
      'adam-a2-c5-final': T('Reread the sentences after they felt sad. What did they learn and decide?', 'أعد قراءة الجمل بعد حزنهما. ماذا تعلما وماذا قررا؟'),
    },
    guide: {
      focus: T('Teach a repair cycle: deception → mistake → regret → learning, contrasted with refusing to admit a mistake.', 'قدّم دورة إصلاح: خداع ← خطأ ← ندم ← تعلم، مع مقارنتها برفض الاعتراف بالخطأ.'),
      prior: T('Learners can follow a short event sequence and understand a simple contrast.', 'يستطيع المتعلمون متابعة تسلسل قصير وفهم مقارنة بسيطة.'),
      misconception: T('Learners may reduce the chapter to the tree event and miss what happens after the mistake.', 'قد يختزل المتعلمون الفصل في حدث الشجرة ويفوتهم ما بعد الخطأ.'),
      transfer: T('Write two sentences: “After the mistake, Adam and Eve…” and “Iblis, however…”.', 'اكتب جملتين: «بعد الخطأ، آدم وحواء…» و«أما إبليس فـ…».'),
      reflection: T('Which step changes a mistake into learning in this chapter?', 'أي خطوة تحول الخطأ إلى تعلم في هذا الفصل؟'),
      vocabulary: T('Prioritise mistake, on purpose, and arrogant/superior.', 'ركز على الخطأ وعن قصد والمتكبر/الأفضل.'),
    },
  },
  6: {
    outcomes: [
      outcome({
        id: 'adam-a2-c6-o1', objective: T('Follow the move to Earth after forgiveness and identify the support Adam and Eve received for life there.', 'يتتبع الانتقال إلى الأرض بعد المغفرة ويحدد ما تلقاه آدم وحواء للحياة فيها.'),
        success: [T('Identifies that Allah forgave them and put them on Earth.', 'يحدد أن الله غفر لهما وأنزلهما إلى الأرض.'), T('Identifies that they were taught/given what they needed to manage life on Earth.', 'يحدد أنهما تعلما وأُعطيا ما يحتاجان إليه لإدارة الحياة في الأرض.')],
        competencies: ['sequence-events', 'comprehend-explicit-information'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner connects forgiveness, transition, and preparation in sequence.', 'يربط المتعلم المغفرة والانتقال والاستعداد في تسلسل.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c6-o2', objective: T('Identify responsibilities for life on Earth and contrast them with Iblis’s continuing aim.', 'يحدد مسؤوليات الحياة في الأرض ويقارنها بهدف إبليس المستمر.'),
        success: [T('Identifies protecting nature and helping the weak as responsibilities.', 'يحدد المحافظة على الطبيعة ومساعدة الضعفاء كمسؤوليتين.'), T('Identifies that Iblis wanted people to forget Allah in daily life.', 'يحدد أن إبليس أراد أن ينسى الناس الله في حياتهم اليومية.')],
        competencies: ['compare-and-contrast', 'transfer-and-application'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The learner distinguishes constructive responsibilities from the opposing aim stated for Iblis.', 'يميز المتعلم المسؤوليات البناءة عن هدف إبليس المعاكس.'), production: 'both',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c6-forgiven-earth': 'adam-a2-c6-o1', 'adam-a2-c6-manage-earth': 'adam-a2-c6-o1', 'adam-a2-c6-responsibilities': 'adam-a2-c6-o2', 'adam-a2-c6-iblis-goal': 'adam-a2-c6-o2' },
    retry: {
      'adam-a2-c6-quick': T('Follow the first sentence in order: what happened before they were put on Earth?', 'اتبع الجملة الأولى بالترتيب: ماذا حدث قبل نزولهما إلى الأرض؟'),
      'adam-a2-c6-knowledge': T('Find the sentence explaining what Allah taught and gave them for life on Earth.', 'اعثر على الجملة التي تشرح ما علّمهما الله وأعطاهما للحياة في الأرض.'),
      'adam-a2-c6-review': T('Use the responsibility list and choose the actions that care for Earth and vulnerable people.', 'استخدم قائمة المسؤوليات واختر الأفعال التي ترعى الأرض والضعفاء.'),
      'adam-a2-c6-final': T('Look at the repeated final idea about Iblis and identify what he wanted people to forget.', 'انظر إلى الفكرة الختامية المتكررة عن إبليس وحدد ما أراد أن ينساه الناس.'),
    },
    guide: {
      focus: T('Connect forgiveness with a new life on Earth, then distinguish responsibility from Iblis’s opposing aim.', 'اربط المغفرة بالحياة الجديدة في الأرض ثم ميز المسؤولية عن هدف إبليس المعاكس.'),
      prior: T('Recall the mistake-and-repair sequence from Chapter 5.', 'استرجع تسلسل الخطأ والإصلاح من الفصل الخامس.'),
      misconception: T('Learners may see the move to Earth only as punishment and miss forgiveness, preparation, and responsibility stated in the chapter.', 'قد يرى المتعلمون الانتقال إلى الأرض كعقوبة فقط ويفوتهم ذكر المغفرة والاستعداد والمسؤولية.'),
      transfer: T('Choose two Earth responsibilities from the chapter and write one practical example for each.', 'اختر مسؤوليتين في الأرض من الفصل واكتب مثالًا عمليًا لكل منهما.'),
      reflection: T('How does the chapter connect responsibility with daily life?', 'كيف يربط الفصل المسؤولية بالحياة اليومية؟'),
      vocabulary: T('Prioritise crops, manage/rule, protect, and weak in context.', 'ركز على الزروع والإدارة والمحافظة والضعفاء في السياق.'),
    },
  },
  7: {
    outcomes: [
      outcome({
        id: 'adam-a2-c7-o1', objective: T('Identify Adam’s role as the first Messenger in the chapter and summarise the main teachings he gave people.', 'يحدد دور آدم كأول رسول ويلخص أهم ما علّمه للناس.'),
        success: [T('Identifies Adam as the first Messenger stated in the chapter.', 'يحدد آدم كأول رسول مذكور في الفصل.'), T('Names teachings such as honesty, doing good, stopping bad, and remembering Allah.', 'يذكر الصدق وفعل الخير ومنع الشر وذكر الله.')],
        competencies: ['identify-main-idea', 'comprehend-explicit-information'], production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c7-o2', objective: T('Explain how Adam and Eve guided their children through good behaviour, gratitude, and a warning about Iblis.', 'يشرح كيف وجّه آدم وحواء أولادهما إلى حسن السلوك والشكر والتحذير من إبليس.'),
        success: [T('Identifies that they taught their children to behave well and thank Allah.', 'يحدد أنهما علما أولادهما حسن السلوك وشكر الله.'), T('Identifies Iblis as the enemy, not a friend, in their warning.', 'يحدد إبليس كعدو لا صديق في التحذير.')],
        competencies: ['transfer-and-application', 'comprehend-explicit-information'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner organises several teachings into a coherent picture of guidance.', 'ينظم المتعلم عدة تعاليم في صورة متماسكة للتوجيه.'), production: 'both',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c7-children': 'adam-a2-c7-o2', 'adam-a2-c7-first-messenger': 'adam-a2-c7-o1', 'adam-a2-c7-teaching': 'adam-a2-c7-o1', 'adam-a2-c7-enemy': 'adam-a2-c7-o2' },
    evidenceOverrides: {
      'adam-a2-c7-children': { claim: T('Adam and Eve taught their children to behave well and thank Allah.', 'علّم آدم وحواء أولادهما أن يحسنوا إلى الناس وأن يشكروا الله.'), evidence: T('Adam (pbuh) and Eve taught their children to behave well for the love of Allah and to thank Him', 'عَلَّمَ آدَمُ (عليه السَّلامُ) وَحَوّاءُ أَوْلادَهُما أَنْ يُحْسِنوا إِلى النّاسِ مِنْ أَجْلِ مَحَبَّةِ اللهِ، وَأَنْ يَشْكُروا اللهَ') },
    },
    exerciseOverrides: {
      'adam-a2-c7-final': fill(T('Complete one way Adam and Eve guided their children.', 'أكمل إحدى طرق توجيه آدم وحواء لأولادهما.'), T('Adam and Eve taught their children to [blank] well and to thank Allah.', 'عَلَّمَ آدَمُ وَحَوّاءُ أَوْلادَهُما أَنْ [blank] إِلى النّاسِ وَأَنْ يَشْكُروا اللهَ.'), T('behave', 'يُحْسِنوا'), T('The chapter says they taught their children to behave well and thank Allah.', 'يقول الفصل إنهما علما أولادهما أن يحسنوا إلى الناس وأن يشكروا الله.')),
    },
    retry: {
      'adam-a2-c7-quick': T('Read the teaching list and use the adjective immediately after “to be / أن يكونوا”.', 'اقرأ قائمة التعليم واستخدم الصفة التي تأتي بعد معنى «أن يكونوا».'),
      'adam-a2-c7-knowledge': T('Find the sentence beginning “Then Allah made Adam…” and decide from that sentence.', 'اعثر على الجملة التي تبدأ بمعنى «ثم جعل الله آدم…» وقرر منها.'),
      'adam-a2-c7-review': T('Reread the warning to the children and compare it with Iblis’s earlier claim that he was a friend.', 'أعد قراءة التحذير للأولاد وقارنه بادعاء إبليس السابق أنه صديق.'),
      'adam-a2-c7-final': T('Look at the first positive teaching action in the family paragraph, before the words about thanking Allah.', 'انظر إلى أول فعل تعليمي إيجابي في فقرة الأسرة قبل الكلام عن شكر الله.'),
    },
    guide: {
      focus: T('Move from Adam’s Messenger role to the practical guidance given to people and children.', 'انتقل من دور آدم كرسول إلى التوجيه العملي للناس والأولاد.'),
      prior: T('Learners can recognise a short advice list and a friend/enemy contrast.', 'يستطيع المتعلمون تعرف قائمة نصائح قصيرة والمقارنة بين الصديق والعدو.'),
      misconception: T('Learners may memorise “first Messenger” as a title without connecting it to what Adam taught.', 'قد يحفظ المتعلمون «أول رسول» كلقب دون ربطه بما علّمه آدم.'),
      transfer: T('Write three short “Adam taught…” lines: one for people, one for children, and one warning.', 'اكتب ثلاثة أسطر قصيرة بمعنى «علّم آدم…»: للناس، وللأولاد، وللتحذير.'),
      reflection: T('Which teaching is easiest to show through a real action?', 'أي تعليم يسهل إظهاره بفعل حقيقي؟'),
      vocabulary: T('Prioritise honest, behave, enemy, and remember.', 'ركز على صادقين ويحسنوا وعدو ويذكروا.'),
    },
  },
  8: {
    outcomes: [
      outcome({
        id: 'adam-a2-c8-o1', objective: T('Compare Habil and Qabil through their work and character descriptions.', 'يقارن بين هابيل وقابيل من خلال عملهما وصفاتهما.'),
        success: [T('Matches Habil with shepherd and Qabil with farmer.', 'يربط هابيل بالراعي وقابيل بالمزارع.'), T('Contrasts Habil’s kind/gentle description with Qabil’s jealousy.', 'يقارن لطف هابيل بحسد قابيل.')],
        competencies: ['compare-and-contrast'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The learner compares two characters using the same dimensions: work and character.', 'يقارن المتعلم شخصيتين باستخدام العمل والصفة.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c8-o2', objective: T('Use the two offerings to explain the chapter’s stated lesson about giving the best and most loved.', 'يستخدم القربانين لشرح درس الفصل عن تقديم أفضل وأحب ما نملك.'),
        success: [T('Identifies Habil’s best/healthiest sheep as his offering.', 'يحدد أفضل وأصح خروف عند هابيل كقربانه.'), T('States that real goodness means giving the best and most loved.', 'يذكر أن الخير الحقيقي هو إعطاء أفضل وأحب ما نملك.')],
        competencies: ['infer-from-evidence', 'transfer-and-application'], concept: concept('KB2.10', 'Çıkarım Yapma Becerisi', 'The learner connects the offering contrast with the explicit lesson at the end.', 'يربط المتعلم فرق القربانين بالدرس الصريح في النهاية.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c8-jobs': 'adam-a2-c8-o1', 'adam-a2-c8-character': 'adam-a2-c8-o1', 'adam-a2-c8-habil-offering': 'adam-a2-c8-o2', 'adam-a2-c8-qabil-offering': 'adam-a2-c8-o2' },
    exerciseOverrides: {
      'adam-a2-c8-final': mc(T('What lesson does the chapter state after describing the two offerings?', 'ما الدرس الذي يذكره الفصل بعد وصف القربانين؟'), { en: ['Real goodness is giving the best and the most loved', 'Goodness means keeping the best for yourself', 'A person’s job is the only thing that matters'], ar: ['الخير الحقيقي هو أن نعطي أفضل وأحب ما نملك', 'الخير يعني أن نحتفظ بأفضل ما نملك لأنفسنا', 'عمل الشخص هو الشيء الوحيد المهم'] }, 0, T('The chapter directly states that real goodness is giving the best and the most loved.', 'يذكر الفصل مباشرة أن الخير الحقيقي هو أن نعطي أفضل وأحب ما نملك.')),
    },
    retry: {
      'adam-a2-c8-quick': T('Build a two-column Habil/Qabil table and use only the jobs named in the chapter.', 'أنشئ جدول هابيل/قابيل واستخدم فقط العملين المذكورين في الفصل.'),
      'adam-a2-c8-knowledge': T('Reread the character description before the jobs and identify which brother is gentle and which is jealous.', 'أعد قراءة وصف الشخصيتين قبل العمل وحدد من اللطيف ومن الحسود.'),
      'adam-a2-c8-review': T('Find the sentence describing Habil’s gift and focus on the quality of what he chose.', 'اعثر على الجملة التي تصف قربان هابيل وركز على جودة ما اختاره.'),
      'adam-a2-c8-final': T('Use only the final sentence of the chapter: it states the lesson directly.', 'استخدم الجملة الأخيرة فقط؛ فهي تذكر الدرس مباشرة.'),
    },
    guide: {
      focus: T('Compare the brothers fairly, then connect the offering contrast to the explicit lesson about giving one’s best.', 'قارن بين الأخوين بعدل ثم اربط فرق القربانين بالدرس الصريح عن تقديم الأفضل.'),
      prior: T('Learners can use a two-column comparison and understand best/better language.', 'يستطيع المتعلمون استخدام مقارنة بعمودين وفهم لغة الأفضل.'),
      misconception: T('Learners may focus on the brothers’ jobs as the reason for value instead of the quality and attitude shown in the offerings.', 'قد يركز المتعلمون على عمل الأخوين بوصفه سبب القيمة بدل جودة الموقف في القربانين.'),
      transfer: T('Write one comparison sentence about the brothers and one sentence explaining the chapter’s “real goodness” lesson.', 'اكتب جملة مقارنة عن الأخوين وجملة تشرح درس «الخير الحقيقي» في الفصل.'),
      reflection: T('What detail shows that the lesson is about giving one’s best, not about having a particular job?', 'ما التفصيل الذي يبين أن الدرس عن تقديم الأفضل لا عن امتلاك عمل معين؟'),
      vocabulary: T('Prioritise shepherd, farmer, offering, gentle, and jealous.', 'ركز على راعٍ ومزارع وقربان ولطيف وحسود.'),
    },
  },
  9: {
    outcomes: [
      outcome({
        id: 'adam-a2-c9-o1', objective: T('Contrast Habil’s peaceful response with Qabil’s anger and recognise the later change in Qabil’s feelings.', 'يقارن بين رد هابيل المسالم وغضب قابيل ويتعرف تغير مشاعر قابيل لاحقًا.'),
        success: [T('Identifies that Habil would not fight back or harm his brother.', 'يحدد أن هابيل لن يرد أو يؤذي أخاه.'), T('Identifies that Qabil’s anger cooled and he became sad and afraid/panicked.', 'يحدد أن غضب قابيل هدأ ثم حزن وخاف/اضطرب.')],
        competencies: ['compare-and-contrast', 'sequence-events', 'reflection-and-self-regulation'], concept: concept('KB2.7', 'Karşılaştırma Becerisi', 'The learner contrasts two responses and notices a later emotional change.', 'يقارن المتعلم ردين ويلاحظ تغيرًا عاطفيًا لاحقًا.'), production: 'speaking',
      }),
      outcome({
        id: 'adam-a2-c9-o2', objective: T('Follow the serious consequence of Qabil’s attack and explain what the crow showed him afterward without focusing on graphic detail.', 'يتتبع النتيجة الخطيرة لاعتداء قابيل ويشرح ما علّمه الغراب دون التركيز على تفاصيل عنيفة.'),
        success: [T('States the consequence that Habil died.', 'يذكر النتيجة وهي موت هابيل.'), T('Explains that the crow’s digging showed Qabil how to bury his brother.', 'يشرح أن حفر الغراب علّم قابيل كيف يدفن أخاه.')],
        competencies: ['sequence-events', 'cause-effect-reasoning'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner organises consequence → confusion → crow demonstration as a calm sequence.', 'ينظم المتعلم النتيجة ← الحيرة ← تعليم الغراب في تسلسل هادئ.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c9-threat': 'adam-a2-c9-o1', 'adam-a2-c9-habil-response': 'adam-a2-c9-o1', 'adam-a2-c9-death': 'adam-a2-c9-o2', 'adam-a2-c9-crow': 'adam-a2-c9-o2' },
    evidenceOverrides: {
      'adam-a2-c9-threat': { claim: T('After Qabil’s anger cooled, he became very sad and started to panic.', 'بعد أن هدأ غضب قابيل حزن كثيرًا وبدأ يشعر بالخوف والاضطراب.'), evidence: T('Soon, Qabil’s anger cooled and he felt so sad. But also he started to panic', 'بَعْدَ وَقْتٍ قَصِيرٍ، هَدَأَ غَضَبُ قَابِيلَ وَحَزِنَ كَثِيرًا. لَكِنَّهُ بَدَأَ يَشْعُرُ بِالْخَوْفِ وَيَضْطَرِبُ') },
    },
    exerciseOverrides: {
      'adam-a2-c9-knowledge': mc(T('What changed after Qabil’s anger cooled?', 'ماذا تغير بعد أن هدأ غضب قابيل؟'), { en: ['He became very sad and started to panic', 'He became happier and forgot everything', 'He immediately returned to farming'], ar: ['حزن كثيرًا وبدأ يشعر بالخوف والاضطراب', 'أصبح أسعد ونسي كل شيء', 'عاد فورًا إلى الزراعة'] }, 0, T('The chapter says Qabil’s anger cooled; then he felt very sad and started to panic.', 'يقول الفصل إن غضب قابيل هدأ ثم حزن كثيرًا وبدأ يشعر بالخوف والاضطراب.')),
      'adam-a2-c9-final': mc(T('What was the serious result of Qabil’s attack on Habil?', 'ما النتيجة الخطيرة لاعتداء قابيل على هابيل؟'), { en: ['Habil died', 'Habil became a farmer', 'The brothers returned to their earlier disagreement'], ar: ['مات هابيل', 'أصبح هابيل مزارعًا', 'عاد الأخوان إلى خلافهما السابق'] }, 0, T('The chapter states that Habil died as a result of Qabil’s attack.', 'يذكر الفصل أن هابيل مات نتيجة اعتداء قابيل.')),
    },
    retry: {
      'adam-a2-c9-quick': T('Reread what the crow did with the ground and what Qabil understood from it.', 'أعد قراءة ما فعله الغراب بالتراب وما فهمه قابيل منه.'),
      'adam-a2-c9-knowledge': T('Find the words immediately after “anger cooled / هدأ غضب” and choose the feelings that follow.', 'اعثر على الكلمات بعد «هدأ غضب» واختر المشاعر التي تليها.'),
      'adam-a2-c9-review': T('Use Habil’s own reply and focus on what he says he will not do.', 'استخدم رد هابيل نفسه وركز على ما يقول إنه لن يفعله.'),
      'adam-a2-c9-final': T('Focus on the result of the attack, not the method. What happened to Habil?', 'ركز على نتيجة الاعتداء لا طريقته. ماذا حدث لهابيل؟'),
    },
    guide: {
      focus: T('Handle the violent event through response, consequence, regret, and learning—never through graphic detail.', 'عالج الحدث العنيف من خلال رد الفعل والنتيجة والندم والتعلم، لا من خلال التفاصيل العنيفة.'),
      prior: T('Recall the Chapter 8 contrast between jealousy and gentle behaviour.', 'استرجع مقارنة الفصل الثامن بين الحسد واللطف.'),
      misconception: T('Learners may become focused on the attack detail and miss Habil’s non-retaliation, the consequence, and Qabil’s later regret/panic.', 'قد يركز المتعلمون على تفصيل الاعتداء ويفوتهم عدم رد هابيل والنتيجة وندم قابيل وخوفه لاحقًا.'),
      transfer: T('Create a four-step non-graphic sequence: peaceful response → serious consequence → regret/panic → crow lesson.', 'أنشئ تسلسلًا هادئًا من أربع خطوات: رد مسالم ← نتيجة خطيرة ← ندم/خوف ← درس الغراب.'),
      reflection: T('Which response in the chapter prevents harm, and which emotion appears after harm has happened?', 'أي استجابة في الفصل تمنع الأذى، وأي شعور يظهر بعد وقوعه؟'),
      vocabulary: T('Prioritise harm, anger, panic, crow, and digging calmly in context.', 'ركز على الأذى والغضب والخوف/الاضطراب والغراب والحفر بهدوء وفي السياق.'),
    },
  },
  10: {
    outcomes: [
      outcome({
        id: 'adam-a2-c10-o1', objective: T('State the chapter’s final lessons about jealousy, anger, good behaviour, and kindness.', 'يذكر دروس الفصل الختامية عن الحسد والغضب وحسن السلوك واللطف.'),
        success: [T('States that people should stay away from jealousy and control anger.', 'يذكر أن الناس ينبغي أن يبتعدوا عن الحسد ويسيطروا على الغضب.'), T('Identifies good behaviour and kindness as part of the continuing message.', 'يحدد حسن الخلق واللطف كجزء من الرسالة المستمرة.')],
        competencies: ['identify-main-idea', 'reflection-and-self-regulation', 'transfer-and-application'], concept: concept('KB2.10', 'Çıkarım Yapma Becerisi', 'The learner connects the ending with explicitly stated behavioural lessons.', 'يربط المتعلم النهاية بالدروس السلوكية المذكورة صراحة.'), production: 'both',
      }),
      outcome({
        id: 'adam-a2-c10-o2', objective: T('Explain how Adam’s message continues and identify the stated purpose of messenger stories.', 'يشرح كيف تستمر رسالة آدم ويحدد الغرض المذكور من قصص الأنبياء.'),
        success: [T('Identifies that Adam’s children and grandchildren spread his message.', 'يحدد أن أولاد آدم وأحفاده نشروا رسالته.'), T('Identifies that messenger stories help people live an honest/good life.', 'يحدد أن قصص الأنبياء تساعد الناس على عيش حياة صادقة/صالحة.')],
        competencies: ['identify-main-idea', 'sequence-events', 'transfer-and-application'], concept: concept('KB2.13', 'Yapılandırma Becerisi', 'The learner links continuation of the message with the final statement about why messenger stories matter.', 'يربط المتعلم استمرار الرسالة بالعبارة الأخيرة عن أهمية قصص الأنبياء.'), production: 'writing',
      }),
    ],
    evidenceOutcome: { 'adam-a2-c10-sadness': 'adam-a2-c10-o2', 'adam-a2-c10-lesson': 'adam-a2-c10-o1', 'adam-a2-c10-message-spread': 'adam-a2-c10-o2', 'adam-a2-c10-kindness': 'adam-a2-c10-o1' },
    evidenceOverrides: {
      'adam-a2-c10-sadness': { claim: T('The stories of Allah’s messengers help people live an honest/good life.', 'قصص الأنبياء تساعدنا على أن نعيش حياة صالحة.'), evidence: T('The stories of His messengers help us to live an honest life', 'قِصَصَ الأَنْبِياءِ تُساعِدُنا عَلَى أَنْ نَعيشَ حَياةً صَالِحَةً') },
    },
    exerciseOverrides: {
      'adam-a2-c10-final': mc(T('According to the final sentence, what do the stories of Allah’s messengers help people do?', 'بحسب الجملة الأخيرة، على ماذا تساعدنا قصص الأنبياء؟'), { en: ['Live an honest life', 'Remember only names and dates', 'Avoid helping other people'], ar: ['أن نعيش حياة صالحة', 'أن نتذكر الأسماء والتواريخ فقط', 'أن نتجنب مساعدة الآخرين'] }, 0, T('The final sentence says messenger stories help us live an honest life; the Arabic chapter expresses this as a good/righteous life.', 'تقول الجملة الأخيرة إن قصص الأنبياء تساعدنا على أن نعيش حياة صالحة.')),
    },
    retry: {
      'adam-a2-c10-quick': T('Read the first paragraph after Adam’s sadness and identify the two “should” actions.', 'اقرأ الفقرة الأولى بعد حزن آدم وحدد فعلي النصيحة.'),
      'adam-a2-c10-knowledge': T('Read the message-spread sentence and identify the second family group after children.', 'اقرأ جملة انتشار الرسالة وحدد مجموعة الأسرة الثانية بعد الأولاد.'),
      'adam-a2-c10-review': T('Find the sentence about good behaviour and kindness and choose only the positive behaviours.', 'اعثر على جملة حسن الخلق واللطف واختر السلوكين الإيجابيين فقط.'),
      'adam-a2-c10-final': T('Use only the final sentence of the story: what does it say the stories help us do?', 'استخدم الجملة الأخيرة فقط: ماذا تقول إن القصص تساعدنا على فعله؟'),
    },
    guide: {
      focus: T('Use the ending to synthesise behavioural lessons and the continuing purpose of the message, not trivia.', 'استخدم النهاية لجمع الدروس السلوكية وغرض الرسالة المستمرة لا المعلومات الهامشية.'),
      prior: T('Recall key earlier events and understand simple should-advice.', 'استرجع الأحداث الأساسية وافهم النصيحة البسيطة.'),
      misconception: T('Learners may focus only on Adam’s sadness or family facts and miss the explicit final lessons.', 'قد يركز المتعلمون على الحزن أو معلومات الأسرة ويفوتهم الدرس الصريح.'),
      transfer: T('Write four short “The story teaches…” sentences supported by Chapter 10.', 'اكتب أربع جمل قصيرة بمعنى «تعلمنا القصة…» مدعومة من الفصل العاشر.'),
      reflection: T('Which final lesson connects most clearly to an earlier chapter?', 'أي درس ختامي يرتبط بوضوح أكبر بفصل سابق؟'),
      vocabulary: T('Prioritise jealousy, well-behaved, worldwide, and advises.', 'ركز على الحسد وحسن الخلق وفي كل العالم وتدعو.'),
    },
  },
};

const demandFor = (item: BlueprintAssessmentItem, chapter: LearningBlueprintChapter): BlueprintCognitiveDemandV2 => {
  const point = chapter.evidencePoints.find(candidate => candidate.id === item.learningPointId);
  switch (point?.focus) {
    case 'sequence': return 'sequence';
    case 'cause-result': return 'connect';
    case 'comparison': return 'compare';
    case 'inference': return 'infer';
    case 'motivation': return 'infer';
    case 'theme': return 'connect';
    default: return item.id.endsWith('-quick') ? 'retrieve' : 'identify';
  }
};

const buildGuide = (
  chapter: LearningBlueprintChapter,
  spec: ChapterSpec,
  language: 'en' | 'ar',
  selfStudy: boolean,
): BlueprintGuideContent => {
  const old = selfStudy ? chapter.selfStudyGuide[language] : chapter.teacherGuide[language];
  const outcomeIds = spec.outcomes.map(item => item.id);
  const objectives = spec.outcomes.map(item => item.objective[language]);
  const success = spec.outcomes.flatMap(item => item.successCriteria.map(criterion => criterion[language]));
  const evidenceClaims = chapter.evidencePoints.map(point => (spec.evidenceOverrides?.[point.id]?.claim ?? point.claim)[language]);
  const g = spec.guide;
  const isEn = language === 'en';

  if (selfStudy) {
    const steps = isEn ? [
      `Orient: read the two goals and the focus — ${g.focus.en}`,
      'Predict one likely chapter idea without checking the answer.',
      'Read once without stopping for the main meaning.',
      `Find evidence: locate these four ideas — ${evidenceClaims.join(' / ')}`,
      `Notice language: ${g.vocabulary.en}`,
      'Complete the Quick Challenge from memory, then locate the supporting sentence.',
      `Repair if needed: ${g.misconception.en} Use the item-specific retry prompt instead of rereading everything.`,
      `Produce and transfer: ${g.transfer.en}`,
      `Reflect: ${g.reflection.en}`,
    ] : [
      `تهيأ: اقرأ الهدفين ومحور الفصل — ${g.focus.ar}`,
      'توقع فكرة واحدة محتملة دون التحقق من الإجابة.',
      'اقرأ مرة واحدة دون توقف لفهم المعنى الرئيس.',
      `اعثر على الدليل: حدد الأفكار الأربع — ${evidenceClaims.join(' / ')}`,
      `لاحظ اللغة: ${g.vocabulary.ar}`,
      'أكمل التحدي السريع من الذاكرة ثم حدد الجملة الداعمة.',
      `أصلح عند الحاجة: ${g.misconception.ar} استخدم توجيه إعادة المحاولة الخاص بالسؤال بدل إعادة قراءة كل شيء.`,
      `أنتج وانقل التعلم: ${g.transfer.ar}`,
      `تأمل: ${g.reflection.ar}`,
    ];
    return {
      ...old,
      objectives,
      learningOutcomeIds: outcomeIds,
      studySequence: steps,
      selfCheck: success.slice(0, 2),
      repairStrategy: [isEn ? `${g.misconception.en} Return only to the evidence named by the retry feedback, explain the correction, then answer again.` : `${g.misconception.ar} ارجع فقط إلى الدليل الذي تشير إليه تغذية إعادة المحاولة واشرح التصحيح ثم أجب من جديد.`],
      transferTask: g.transfer[language],
      reflectionPrompt: g.reflection[language],
      pedagogy: isEn ? `Study for understanding, evidence, repair, and transfer. ${g.focus.en}` : `ادرس من أجل الفهم والدليل والإصلاح ونقل التعلم. ${g.focus.ar}`,
      lessonPlan: steps.map((step, index) => `${index + 1}. ${step}`).join(' '),
      discussionPoints: success.slice(0, 2),
      differentiation: {
        fastFinishers: isEn ? `Extend the transfer by connecting two different evidence points: ${g.transfer.en}` : `وسع مهمة النقل بربط دليلين مختلفين: ${g.transfer.ar}`,
        strugglingLearners: isEn ? `Use one evidence claim at a time and a sentence frame before answering. Misconception watch: ${g.misconception.en}` : `استخدم ادعاء دليل واحدًا في كل مرة وإطار جملة قبل الإجابة. انتبه إلى سوء الفهم: ${g.misconception.ar}`,
      },
      interactiveTips: [g.vocabulary[language], isEn ? 'After a wrong answer, repair one misconception and retry from evidence.' : 'بعد الإجابة الخاطئة أصلح سوء فهم واحدًا ثم حاول من الدليل من جديد.'],
      assessmentTools: { exitTicket: [g.transfer[language], g.reflection[language]] },
    };
  }

  const pre = isEn
    ? `Activate only this prerequisite: ${g.prior.en} Ask one prediction linked to the focus: ${g.focus.en}`
    : `فعّل فقط هذه المعرفة السابقة: ${g.prior.ar} واطلب توقعًا واحدًا مرتبطًا بالمحور: ${g.focus.ar}`;
  const whileOne = isEn
    ? `First read for meaning. On the second read, learners locate and mark the four evidence claims: ${evidenceClaims.join(' / ')}`
    : `قراءة أولى للمعنى. في القراءة الثانية يحدد المتعلمون أدلة الأفكار الأربع: ${evidenceClaims.join(' / ')}`;
  const whileTwo = isEn
    ? `Ask learners to explain which evidence supports each of the two outcomes; explicitly monitor this misconception: ${g.misconception.en}`
    : `اطلب من المتعلمين شرح الدليل الداعم لكل ناتج من الناتجين وراقب هذا الفهم الخاطئ تحديدًا: ${g.misconception.ar}`;
  const post = isEn ? `Transfer the learning without adding new facts: ${g.transfer.en}` : `انقل التعلم دون إضافة معلومات جديدة: ${g.transfer.ar}`;

  return {
    ...old,
    objectives,
    learningOutcomeIds: outcomeIds,
    priorKnowledge: [g.prior[language]],
    anticipatedMisconceptions: [g.misconception[language]],
    preReading: [pre],
    whileReading: [whileOne, whileTwo],
    postReading: [post],
    expectedResponses: evidenceClaims,
    formativeAssessment: success,
    transferTask: g.transfer[language],
    reflectionPrompt: g.reflection[language],
    pedagogy: isEn
      ? `Gold alignment: TYMM YDAB2 is direct; YDAB3/YDAB4 are supporting only where the transfer activates speaking/writing; CEFR A2 Overall reading comprehension. Move meaning → evidence → short explanation → feedback/repair → transfer. ${g.focus.en}`
      : `مواءمة Gold: TYMM YDAB2 مباشر، وYDAB3/YDAB4 داعمان فقط عندما تفعل مهمة النقل الكلام/الكتابة، مع CEFR A2 للفهم القرائي العام. انتقل من المعنى ← الدليل ← تفسير قصير ← تغذية راجعة/إصلاح ← نقل التعلم. ${g.focus.ar}`,
    lessonPlan: `1. ${pre} 2. ${whileOne} 3. ${whileTwo} 4. ${post} 5. ${isEn ? `Exit ticket: ${g.reflection.en}` : `بطاقة الخروج: ${g.reflection.ar}`}`,
    discussionPoints: [g.reflection[language], g.transfer[language]],
    differentiation: {
      fastFinishers: isEn ? `Connect two evidence points and extend the transfer without adding outside facts: ${g.transfer.en}` : `اربط دليلين ووسع مهمة النقل دون إضافة معلومات خارجية: ${g.transfer.ar}`,
      strugglingLearners: isEn ? `Reduce language load, not cognitive goal: show one evidence claim at a time, provide a sentence frame, then remove the scaffold. ${g.misconception.en}` : `قلل العبء اللغوي لا الهدف المعرفي: اعرض دليلًا واحدًا في كل مرة وقدم إطار جملة ثم أزل الدعم. ${g.misconception.ar}`,
    },
    interactiveTips: [
      isEn ? `Misconception watch: ${g.misconception.en}` : `تنبيه إلى سوء الفهم: ${g.misconception.ar}`,
      g.vocabulary[language],
      isEn ? 'Do not accept unsupported recall when the outcome requires a relationship; ask “Which chapter detail supports that?”' : 'لا تقبل الاسترجاع غير المدعوم عندما يتطلب الناتج علاقة؛ اسأل: «أي تفصيل من الفصل يدعم ذلك؟»',
      isEn ? 'After a wrong response, use the item-specific retry prompt before allowing a second attempt.' : 'بعد الإجابة الخاطئة استخدم توجيه إعادة المحاولة الخاص بالسؤال قبل المحاولة الثانية.',
    ],
    assessmentTools: {
      rubric: isEn ? ['Accurate chapter evidence', 'Matches the learning outcome', 'Clear A2 meaning', 'Appropriate key language'] : ['دليل صحيح من الفصل', 'يتوافق مع ناتج التعلم', 'معنى واضح يناسب A2', 'لغة أساسية مناسبة'],
      exitTicket: [g.transfer[language], g.reflection[language]],
    },
    extraResources: { links: [
      { label: 'TYMM — Yabancı Dil Alan Becerileri', url: TYMM_FOREIGN },
      { label: 'TYMM — Kavramsal Beceriler', url: TYMM_CONCEPTUAL },
      { label: 'CEFR Descriptors', url: CEFR },
    ] },
  };
};

export const upgradeAdamA2ChapterToGold = (chapter: LearningBlueprintChapter): LearningBlueprintChapter => {
  const spec = specs[chapter.chapterId];
  if (!spec) throw new Error(`[Adam A2 Gold] Missing specification for Chapter ${chapter.chapterId}.`);

  const evidencePoints = chapter.evidencePoints.map(point => {
    const learningOutcomeId = spec.evidenceOutcome[point.id];
    if (!learningOutcomeId) throw new Error(`[Adam A2 Gold] Missing outcome mapping for ${point.id}.`);
    return { ...point, ...(spec.evidenceOverrides?.[point.id] ?? {}), learningOutcomeId };
  });

  const assessmentItems = chapter.assessmentItems.map(item => {
    const learningOutcomeId = spec.evidenceOutcome[item.learningPointId];
    if (!learningOutcomeId) throw new Error(`[Adam A2 Gold] Missing assessment outcome for ${item.id}.`);
    const exercise = spec.exerciseOverrides?.[item.id] ?? item.exercise;
    const retry = spec.retry[item.id];
    if (!retry) throw new Error(`[Adam A2 Gold] Missing retry feedback for ${item.id}.`);
    const point = evidencePoints.find(candidate => candidate.id === item.learningPointId)!;
    const targetOutcome = spec.outcomes.find(candidate => candidate.id === learningOutcomeId)!;
    const correct = T(
      `Correct. ${exercise.en.explanation || point.claim.en}`,
      `صحيح. ${exercise.ar.explanation || point.claim.ar}`,
    );
    const misconception = T(
      `The learner may substitute a nearby detail for the evidence required by this item. Chapter misconception to monitor: ${spec.guide.misconception.en}`,
      `قد يستبدل المتعلم الدليل المطلوب بتفصيل قريب. سوء الفهم الذي ينبغي مراقبته في الفصل: ${spec.guide.misconception.ar}`,
    );

    return {
      ...item,
      learningOutcomeId,
      exercise: {
        en: { ...exercise.en, feedback: { correct: correct.en, incorrect: retry.en } },
        ar: { ...exercise.ar, feedback: { correct: correct.ar, incorrect: retry.ar } },
      },
      quality: {
        cognitiveDemand: demandFor(item, { ...chapter, evidencePoints }),
        assessmentPurpose: T(
          `Measure “${point.claim.en}” as evidence toward the outcome: ${targetOutcome.objective.en}`,
          `قياس «${point.claim.ar}» بوصفه دليلًا على ناتج التعلم: ${targetOutcome.objective.ar}`,
        ),
        successEvidence: point.claim,
        misconceptionTargets: [misconception],
        feedback: {
          correct,
          incorrect: retry,
          rationale: T(
            'Correct feedback confirms the evidence connection; incorrect feedback directs the learner to the precise reading move needed for a better second attempt without simply giving the answer.',
            'تؤكد تغذية الإجابة الصحيحة علاقة الدليل، بينما توجه تغذية الإجابة الخاطئة المتعلم إلى خطوة القراءة الدقيقة اللازمة لمحاولة ثانية أفضل دون إعطاء الإجابة مباشرة.',
          ),
        },
      },
    };
  });

  return {
    ...chapter,
    objectives: spec.outcomes.map(item => item.objective),
    learningMap: {
      learningOutcomes: spec.outcomes,
      languageTargets: {
        reading: [T(`Locate and connect evidence for Chapter ${chapter.chapterId}’s two learning outcomes.`, `حدد واربط الدليل لناتجي التعلم في الفصل ${chapter.chapterId}.`)],
        speaking: [T('Give one short A2 answer and point to its supporting chapter detail.', 'قدم إجابة شفوية قصيرة تناسب A2 وأشر إلى المعلومة الداعمة.')],
        writing: [T('Write one or two short accurate sentences for the chapter transfer task.', 'اكتب جملة أو جملتين قصيرتين ودقيقتين لمهمة نقل الفصل.')],
        vocabulary: [spec.guide.vocabulary],
        grammar: [T(chapter.teacherGuide.en.grammarFocus || 'Use a chapter language pattern to express meaning clearly.', chapter.teacherGuide.ar.grammarFocus || 'استخدم نمطًا لغويًا من الفصل للتعبير عن المعنى بوضوح.')],
        pronunciation: [T(chapter.teacherGuide.en.pronunciationFocus || 'Practise key chapter words clearly.', chapter.teacherGuide.ar.pronunciationFocus || 'تدرب على نطق الكلمات الأساسية بوضوح.')],
      },
      transferGoal: spec.guide.transfer,
    },
    evidencePoints,
    assessmentItems,
    teacherGuide: {
      en: buildGuide(chapter, spec, 'en', false),
      ar: buildGuide(chapter, spec, 'ar', false),
    },
    selfStudyGuide: {
      en: buildGuide(chapter, spec, 'en', true),
      ar: buildGuide(chapter, spec, 'ar', true),
    },
  };
};
