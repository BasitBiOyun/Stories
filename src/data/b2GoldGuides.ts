import type {
  RubricRow,
  StudentGuideMetadata,
  StudentGuideSection,
  TeacherGuideMetadata,
} from '../types';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';
import type { B2GoldStory } from './b2GoldPedagogy';

type Skills = NonNullable<TeacherGuideMetadata['skillsFocus']>;

type GuideProfile = {
  title: { en: string; ar: string };
  purpose: { en: string; ar: string };
  approach: { en: string; ar: string };
  skills: { en: Skills; ar: Skills };
  grammar: { en: string; ar: string };
  grammarSequence: { en: string[]; ar: string[] };
  vocabulary: { en: string; ar: string };
  pronunciation: { en: string; ar: string };
  values: { en: string[]; ar: string[] };
  studyFocus: { en: string; ar: string };
};

const profiles: Record<B2GoldStory, GuideProfile> = {
  adam: {
    title: { en: 'Prophet Adam B2', ar: 'قصة النبي آدم B2' },
    purpose: {
      en: 'A TYMM-linked B2 teaching companion that moves beyond recall to comparison, cause/result, turning points, careful inference, and evidence-based interpretation while keeping every conclusion inside the story.',
      ar: 'دليل تدريس B2 مرتبط بـTYMM ينتقل من التذكر إلى المقارنة والسبب والنتيجة ونقاط التحول والاستنتاج الحذر والتفسير القائم على النص مع إبقاء كل استنتاج داخل القصة.',
    },
    approach: {
      en: 'Use the story as the factual boundary. Develop the relationships between common origin and equality, knowledge and responsibility, arrogance and refusal, warning and deception, mistake and repentance, intention and offering, jealousy and consequence, and the continuation of Adam’s message.',
      ar: 'اجعل القصة الحد الواقعي للمعلومة. نمِّ العلاقات بين الأصل المشترك والمساواة، والعلم والمسؤولية، والكبر والرفض، والتحذير والخداع، والخطأ والتوبة، والنية والقربان، والحسد والنتيجة، واستمرار رسالة آدم.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B2: follow extended narration, direct speech, contrasts, warnings, emotional changes, and links between earlier and later events.',
        reading: 'TYMM YDAB2 primary + CEFR B2: select relevant details, compare positions, follow causes and consequences, identify turning points, and make careful text-supported inferences.',
        speaking: 'TYMM YDAB3 supporting: explain and justify a comparison, consequence, or interpretation with two accurate story details.',
        writing: 'TYMM YDAB4 supporting: produce connected B2 explanations and short analytical paragraphs that distinguish story detail from interpretation.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B2: تتبع السرد الممتد والكلام المباشر والمقارنات والتحذير وتغير المشاعر والروابط بين الأحداث.',
        reading: 'TYMM YDAB2 أساسي + CEFR B2: اختيار التفاصيل المناسبة ومقارنة المواقف وتتبع الأسباب والنتائج وتحديد نقاط التحول وبناء استنتاج حذر مدعوم بالنص.',
        speaking: 'TYMM YDAB3 داعم: شرح مقارنة أو نتيجة أو تفسير وتبريره بتفصيلين دقيقين من القصة.',
        writing: 'TYMM YDAB4 داعم: إنتاج تفسير مترابط وفقرة تحليلية قصيرة تميز بين تفاصيل القصة والتفسير.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: mixed past forms for narrative order; passive voice where the story foregrounds what was created, given, commanded, accepted, or taught; reported/direct speech; contrast and cause-result linkers; modals for cautious deduction; and conditional language only where it naturally serves warning, consequence, or transfer. Grammar is selected chapter by chapter rather than mechanically distributed.',
      ar: 'TYMM YDDB1 داعم: أزمنة الماضي المختلطة لترتيب السرد، والمبني للمجهول عندما يركز النص على ما خُلق أو مُنح أو أُمر به أو قُبل أو عُلّم، والكلام المباشر والمنقول، وروابط المقارنة والسبب والنتيجة، وأفعال الاحتمال للاستنتاج الحذر، والشرط فقط عندما يخدم التحذير أو النتيجة أو النقل.',
    },
    grammarSequence: {
      en: ['Creation/knowledge: passive voice, comparison, relative clauses', 'Refusal/temptation: reported speech, contrast, cause/result', 'Repentance/earthly life: mixed past, consequence linkers, modals', 'Family/legacy: comparison, intention, reported ideas, synthesis'],
      ar: ['الخلق والعلم: المبني للمجهول والمقارنة والجمل الموصولة', 'الرفض والخداع: الكلام المنقول والاستدراك والسبب والنتيجة', 'التوبة والحياة الأرضية: الماضي المختلط وروابط النتيجة والأفعال الناقصة', 'الأسرة والإرث: المقارنة والنية ونقل الأفكار والتركيب'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: recycle vocabulary that carries the book’s key relationships—origin, intellect, superiority, arrogance, deception, repentance, sincerity, jealousy, consequence, and responsibility—inside chapter sentences and later retrieval.',
      ar: 'TYMM YDDB2 داعم: أعد استخدام المفردات التي تحمل علاقات الكتاب مثل الأصل والعقل والتفوق والكبر والخداع والتوبة والإخلاص والحسد والنتيجة والمسؤولية داخل جمل الفصول والمراجعة اللاحقة.',
    },
    pronunciation: { en: 'TYMM YDDB3 supporting: practise word stress in longer abstract vocabulary and natural thought-grouping in contrast/cause sentences.', ar: 'TYMM YDDB3 داعم: تدرب على نبر الكلمات الأطول وتقسيم المعنى طبيعيًا في جمل المقارنة والسبب.' },
    values: {
      en: ['Human equality', 'Knowledge with responsibility', 'Humility instead of arrogance', 'Repentance and repair after mistakes', 'Sincerity and giving one’s best', 'Self-control against jealousy and violence'],
      ar: ['المساواة الإنسانية', 'العلم مع المسؤولية', 'التواضع بدل الكبر', 'التوبة والإصلاح بعد الخطأ', 'الإخلاص وبذل الأفضل', 'ضبط الحسد ورفض العنف'],
    },
    studyFocus: { en: 'Connect a choice, attitude, or piece of knowledge with the consequence it produces, then explain the connection with two accurate details.', ar: 'اربط اختيارًا أو موقفًا أو معرفة بالنتيجة التي تترتب عليها ثم اشرح العلاقة بتفصيلين دقيقين.' },
  },

  abraham: {
    title: { en: 'Prophet Abraham B2', ar: 'قصة النبي إبراهيم B2' },
    purpose: {
      en: 'A TYMM-linked B2 companion for following Abraham’s reasoning, challenge to idolatry, trust under pressure, migration, family decisions, worship, and legacy without turning historical uncertainty into certainty.',
      ar: 'دليل B2 مرتبط بـTYMM لتتبع استدلال إبراهيم ومواجهته للشرك وتوكله تحت الضغط وهجرته وقرارات أسرته والعبادة والإرث دون تحويل عدم اليقين التاريخي إلى يقين.',
    },
    approach: {
      en: 'Teach observation and reasoning through the actual sequence of the story. Where the chapter uses phrases such as some sources, different views, is believed, or according to another narration, preserve that degree of certainty; elsewhere focus on argument, action, consequence, trust, and legacy rather than making every chapter a source-criticism lesson.',
      ar: 'درّس الملاحظة والاستدلال من خلال تسلسل القصة نفسه. عندما يستخدم الفصل عبارات مثل بعض المصادر أو آراء مختلفة أو يُعتقد أو وفقًا لرواية أخرى فحافظ على درجة اليقين، أما بقية الفصول فركز على الحجة والفعل والنتيجة والتوكل والإرث بدل تحويل كل فصل إلى درس في نقد المصادر.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B2: follow extended dialogue, challenges, threats, journeys, instructions, family decisions, and shifts in setting.',
        reading: 'TYMM YDAB2 primary + CEFR B2: follow a line of reasoning, compare claims with observable limits, explain cause/result, distinguish certainty from qualified historical claims where relevant, and connect actions with later outcomes.',
        speaking: 'TYMM YDAB3 supporting: defend an interpretation of a decision, challenge, or turning point with two story details and an appropriate degree of certainty.',
        writing: 'TYMM YDAB4 supporting: write connected analytical responses about reasoning, opposition, trust, migration, worship, and legacy using accurate text support.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B2: تتبع الحوار الممتد والتحديات والتهديدات والرحلات والتعليمات وقرارات الأسرة وتغير المكان.',
        reading: 'TYMM YDAB2 أساسي + CEFR B2: تتبع الاستدلال ومقارنة الادعاءات بالحدود الملاحظة وشرح السبب والنتيجة والتمييز بين اليقين والادعاء التاريخي المقيد عند الحاجة وربط الأفعال بنتائجها.',
        speaking: 'TYMM YDAB3 داعم: الدفاع عن تفسير لقرار أو تحد أو نقطة تحول بتفصيلين من القصة ودرجة يقين مناسبة.',
        writing: 'TYMM YDAB4 داعم: كتابة استجابات تحليلية مترابطة حول الاستدلال والمعارضة والتوكل والهجرة والعبادة والإرث بدعم دقيق من النص.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: mixed past tenses for long narrative sequences; passive voice for events and historical framing; reporting verbs for dialogue and attributed claims; contrast/concession; modals for possibility and deduction; relative clauses; and conditionals only where the story naturally uses warning, consequence, prayer, or hypothetical comparison.',
      ar: 'TYMM YDDB1 داعم: أزمنة الماضي المختلطة للتسلسل الطويل، والمبني للمجهول للأحداث والإطار التاريخي، وأفعال النقل للحوار والادعاءات المنسوبة، والمقارنة والاستدراك، وأفعال الاحتمال والاستنتاج، والجمل الموصولة، والشرط حيث يخدم التحذير أو النتيجة أو الدعاء أو المقارنة الافتراضية.',
    },
    grammarSequence: {
      en: ['Early belief/reasoning: comparison, could/could not, reporting verbs', 'Public challenge: direct/reported speech, passive, concession', 'Migration/family: mixed past, sequence, relative clauses, purpose', 'Later legacy: passive, reported ideas, deduction, cause/result'],
      ar: ['الإيمان المبكر والاستدلال: المقارنة والقدرة وأفعال النقل', 'المواجهة العامة: الكلام المباشر والمنقول والمبني للمجهول والاستدراك', 'الهجرة والأسرة: الماضي المختلط والتسلسل والجمل الموصولة والغرض', 'الإرث اللاحق: المبني للمجهول ونقل الأفكار والاستنتاج والسبب والنتيجة'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: prioritise vocabulary that unlocks the reasoning and journey—Tawheed, monotheism, idolatry, hanif, guidance, challenge, miracle, migration, sacrifice, pilgrimage, Zamzam, and legacy—through context and recycling.',
      ar: 'TYMM YDDB2 داعم: أعط الأولوية للمفردات التي تفتح الاستدلال والرحلة مثل التوحيد والشرك والحنيف والهداية والتحدي والمعجزة والهجرة والتضحية والحج وزمزم والإرث من خلال السياق وإعادة الاستخدام.',
    },
    pronunciation: { en: 'TYMM YDDB3 supporting: practise stress in historical/religious terms and clear intonation in questions, challenges, and reported statements.', ar: 'TYMM YDDB3 داعم: تدرب على نبر المصطلحات التاريخية والدينية والتنغيم الواضح في الأسئلة والتحديات والكلام المنقول.' },
    values: {
      en: ['Seeking truth through observation', 'Questioning unsupported claims', 'Courage under pressure', 'Trust combined with action', 'Patience in migration and family responsibility', 'Service, worship, and lasting legacy'],
      ar: ['طلب الحقيقة بالملاحظة', 'مراجعة الادعاءات غير المدعومة', 'الشجاعة تحت الضغط', 'التوكل مع العمل', 'الصبر في الهجرة ومسؤولية الأسرة', 'الخدمة والعبادة والإرث الدائم'],
    },
    studyFocus: { en: 'Follow how an observation, argument, decision, or act of trust changes what happens next, and keep historical claims at the certainty level used by the chapter.', ar: 'تتبع كيف تغير الملاحظة أو الحجة أو القرار أو فعل التوكل ما يحدث لاحقًا، وحافظ على درجة اليقين التي يستخدمها الفصل في الادعاءات التاريخية.' },
  },

  moses: {
    title: { en: 'Prophet Moses B2', ar: 'قصة النبي موسى B2' },
    purpose: {
      en: 'A TYMM-linked B2 teaching companion for analysing political fear and oppression, protection, regret and responsibility, migration, leadership, signs, resistance, liberation, and consequences across an extended historical narrative.',
      ar: 'دليل تدريس B2 مرتبط بـTYMM لتحليل الخوف السياسي والاضطهاد والحماية والندم والمسؤولية والهجرة والقيادة والآيات والمقاومة والتحرر والنتائج عبر سرد تاريخي ممتد.',
    },
    approach: {
      en: 'Keep the long narrative manageable through causal chains and turning points. Use historical hedging only in chapters that actually discuss uncertain chronology or identification; elsewhere prioritise oppression and response, decision and consequence, leadership, confrontation, and liberation.',
      ar: 'اجعل السرد الطويل قابلًا للإدارة من خلال سلاسل السبب والنتيجة ونقاط التحول. استخدم التحفظ التاريخي فقط في الفصول التي تناقش فعلًا التأريخ أو الهوية غير المؤكدة، وركز في البقية على الاضطهاد والاستجابة والقرار والنتيجة والقيادة والمواجهة والتحرر.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B2: follow long narrative sequences, warnings, reported messages, confrontations, emotional shifts, and repeated patterns across chapters.',
        reading: 'TYMM YDAB2 primary + CEFR B2: trace causes and consequences, compare rulers and responses, analyse turning points, distinguish historical probability from certainty where relevant, and interpret decisions with textual support.',
        speaking: 'TYMM YDAB3 supporting: explain a political, moral, or narrative relationship and justify it with two accurate details.',
        writing: 'TYMM YDAB4 supporting: produce coherent B2 explanations using mixed past narration, cause/result, contrast, reporting, and careful deduction.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B2: تتبع التسلسلات السردية الطويلة والتحذيرات والرسائل المنقولة والمواجهات وتغير المشاعر والأنماط المتكررة.',
        reading: 'TYMM YDAB2 أساسي + CEFR B2: تتبع الأسباب والنتائج ومقارنة الحكام والاستجابات وتحليل نقاط التحول والتمييز بين الاحتمال التاريخي واليقين عند الحاجة وتفسير القرارات بدعم نصي.',
        speaking: 'TYMM YDAB3 داعم: شرح علاقة سياسية أو أخلاقية أو سردية وتبريرها بتفصيلين دقيقين.',
        writing: 'TYMM YDAB4 داعم: إنتاج تفسير B2 مترابط باستخدام الماضي المختلط والسبب والنتيجة والمقارنة والنقل والاستنتاج الحذر.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: mixed past tenses and Past Perfect for chronology; passive voice for oppression, commands, signs, and outcomes; reported speech for warnings and messages; modals for obligation, possibility, deduction, and regret; relative clauses; and contrast/cause/result linkers. Historical probability language is limited to chapters that actually require it.',
      ar: 'TYMM YDDB1 داعم: أزمنة الماضي المختلطة والماضي التام للتسلسل، والمبني للمجهول للاضطهاد والأوامر والآيات والنتائج، والكلام المنقول للتحذيرات والرسائل، والأفعال الناقصة للالتزام والاحتمال والاستنتاج والندم، والجمل الموصولة وروابط المقارنة والسبب والنتيجة.',
    },
    grammarSequence: {
      en: ['Egypt/oppression: passive, cause/result, mixed past', 'Escape/Midian: sequence, Past Perfect where useful, obligation and purpose', 'Prophethood/confrontation: reported speech, passive, modals, contrast', 'Exodus/consequences: turning-point language, deduction, result, synthesis'],
      ar: ['مصر والاضطهاد: المبني للمجهول والسبب والنتيجة والماضي المختلط', 'الهروب ومدين: التسلسل والماضي التام عند الحاجة والالتزام والغرض', 'النبوة والمواجهة: الكلام المنقول والمبني للمجهول والأفعال الناقصة والمقارنة', 'الخروج والنتائج: لغة التحول والاستنتاج والنتيجة والتركيب'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: recycle words that explain systems and choices—oppression, manpower, authority, warning, regret, guidance, companion, miracle, arrogant, enslave, liberation, and consequence—rather than isolated rare terms.',
      ar: 'TYMM YDDB2 داعم: أعد استخدام الكلمات التي تشرح الأنظمة والاختيارات مثل الاضطهاد والقوة العاملة والسلطة والتحذير والندم والهداية والرفيق والمعجزة والكبر والاستعباد والتحرر والنتيجة بدل الكلمات النادرة المعزولة.',
    },
    pronunciation: { en: 'TYMM YDDB3 supporting: practise stress in longer historical vocabulary and intonation in warnings, commands, questions, and reported speech.', ar: 'TYMM YDDB3 داعم: تدرب على نبر المفردات التاريخية الطويلة والتنغيم في التحذير والأوامر والأسئلة والكلام المنقول.' },
    values: {
      en: ['Justice against oppression', 'Protection of vulnerable people', 'Responsibility after mistakes', 'Helping without immediate reward', 'Courage in speaking truth to power', 'Freedom, patience, and trust'],
      ar: ['العدل في مواجهة الاضطهاد', 'حماية الضعفاء', 'المسؤولية بعد الخطأ', 'المساعدة دون انتظار مقابل', 'الشجاعة في قول الحق أمام السلطة', 'الحرية والصبر والتوكل'],
    },
    studyFocus: { en: 'Track the chain from political or personal pressure to a decision and then to its consequence; use historical caution only where the chapter itself signals uncertainty.', ar: 'تتبع السلسلة من الضغط السياسي أو الشخصي إلى القرار ثم النتيجة، واستخدم الحذر التاريخي فقط حيث يشير الفصل نفسه إلى عدم اليقين.' },
  },

  mecca: {
    title: { en: 'Mecca and the Age of Jahiliyyah B2', ar: 'مكة وعصر الجاهلية B2' },
    purpose: {
      en: 'A TYMM-linked B2 history-language companion for connecting geography, trade, pilgrimage, tribal organisation, social inequality, religious practice, power, and the response to Islam without reducing the book to dates and names.',
      ar: 'دليل B2 للتاريخ واللغة مرتبط بـTYMM يربط الجغرافيا والتجارة والحج والتنظيم القبلي وعدم المساواة والممارسة الدينية والسلطة والاستجابة للإسلام دون اختزال الكتاب في التواريخ والأسماء.',
    },
    approach: {
      en: 'Teach Mecca as an interacting social system. Learners should explain how environment, sacred status, trade routes, wealth, tribal protection, social hierarchy, slavery, poetry, religion, and political interest connect. Historical details matter when they explain a relationship, not as trivia.',
      ar: 'درّس مكة بوصفها نظامًا اجتماعيًا مترابطًا. يشرح المتعلم كيف ترتبط البيئة والمكانة المقدسة وطرق التجارة والثروة والحماية القبلية والطبقات والرق والشعر والدين والمصلحة السياسية. تهم التفاصيل التاريخية عندما تفسر علاقة لا بوصفها معلومات للحفظ.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B2: follow historical explanation, cause/result chains, comparisons between social groups, and changes across periods.',
        reading: 'TYMM YDAB2 primary + CEFR B2: connect environment with economy, economy with hierarchy, tribal rules with protection, belief with practice, and social power with resistance to change.',
        speaking: 'TYMM YDAB3 supporting: explain a historical relationship or contrast with two accurate details from the relevant chapter(s).',
        writing: 'TYMM YDAB4 supporting: produce structured B2 historical explanations using cause/result, comparison, passive/reporting language, and careful synthesis.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B2: تتبع الشرح التاريخي وسلاسل السبب والنتيجة والمقارنات بين الفئات الاجتماعية والتغير عبر الفترات.',
        reading: 'TYMM YDAB2 أساسي + CEFR B2: ربط البيئة بالاقتصاد والاقتصاد بالطبقات وقواعد القبيلة بالحماية والعقيدة بالممارسة والسلطة الاجتماعية بمقاومة التغير.',
        speaking: 'TYMM YDAB3 داعم: شرح علاقة تاريخية أو مقارنة بتفصيلين دقيقين من الفصل أو الفصول ذات الصلة.',
        writing: 'TYMM YDAB4 داعم: إنتاج شرح تاريخي B2 منظم باستخدام السبب والنتيجة والمقارنة والمبني للمجهول والنقل والتركيب الحذر.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: mixed past tenses for historical sequence; passive voice for social practices and institutional change; reported speech for views and reactions; cause/result and contrast linkers; modals for possibility/deduction; relative clauses for defining groups and institutions; and present forms when explaining enduring concepts.',
      ar: 'TYMM YDDB1 داعم: أزمنة الماضي المختلطة للتسلسل التاريخي، والمبني للمجهول للممارسات الاجتماعية والتغير المؤسسي، والكلام المنقول للآراء وردود الفعل، وروابط السبب والنتيجة والمقارنة، والأفعال الناقصة للاستنتاج، والجمل الموصولة لتعريف الجماعات والمؤسسات، والحاضر لشرح المفاهيم.',
    },
    grammarSequence: {
      en: ['Setting/trade: mixed past, cause/result, relative clauses', 'Wealth/social structure: comparison, passive, consequence', 'Religion/culture: present-vs-past explanation, reporting, contrast', 'Islam and opposition: reported speech, modals/deduction, cause/result synthesis'],
      ar: ['السياق والتجارة: الماضي المختلط والسبب والنتيجة والجمل الموصولة', 'الثروة والبنية الاجتماعية: المقارنة والمبني للمجهول والنتيجة', 'الدين والثقافة: شرح الماضي والحاضر والنقل والمقارنة', 'الإسلام والمعارضة: الكلام المنقول والاستنتاج والسبب والنتيجة والتركيب'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: prioritise words that explain the historical system—Jahiliyyah, peninsula, caravan, pilgrimage, sacred months, usury, prestige, tribe, slavery, monotheism, revelation, boycott, equality—and recycle them across chapters.',
      ar: 'TYMM YDDB2 داعم: أعط الأولوية للكلمات التي تشرح النظام التاريخي مثل الجاهلية وشبه الجزيرة والقافلة والحج والأشهر الحرم والربا والوجاهة والقبيلة والرق والتوحيد والوحي والمقاطعة والمساواة وأعد استخدامها عبر الفصول.',
    },
    pronunciation: { en: 'TYMM YDDB3 supporting: practise stress in historical/geographical terms and chunk longer explanatory sentences around contrast and cause linkers.', ar: 'TYMM YDDB3 داعم: تدرب على نبر المصطلحات التاريخية والجغرافية وتقسيم الجمل التفسيرية الطويلة حول روابط المقارنة والسبب.' },
    values: {
      en: ['Justice and dignity', 'Protection of weak people', 'Fair economic relations', 'Equality beyond wealth or tribe', 'Freedom from exploitation', 'Responsible use of social and political power'],
      ar: ['العدل والكرامة', 'حماية الضعفاء', 'العلاقات الاقتصادية العادلة', 'المساواة بعيدًا عن الثروة والقبيلة', 'التحرر من الاستغلال', 'الاستخدام المسؤول للسلطة الاجتماعية والسياسية'],
    },
    studyFocus: { en: 'Ask how one part of Meccan life affected another: geography → trade, trade → wealth, wealth → hierarchy, tribe → protection, belief → practice, and power → resistance to reform.', ar: 'اسأل كيف أثر جانب من حياة مكة في جانب آخر: الجغرافيا ← التجارة، التجارة ← الثروة، الثروة ← الطبقات، القبيلة ← الحماية، العقيدة ← الممارسة، والسلطة ← مقاومة الإصلاح.' },
  },

  yunusEmre: {
    title: { en: 'Yunus Emre B2', ar: 'يونس إمره B2' },
    purpose: {
      en: 'A TYMM-linked B2 companion for connecting historical context, tekke culture, Sûfî moral thought, accessible literary language, poetry, Tawhid, love, humility, service, and social meaning while keeping attributed ideas clearly attributed.',
      ar: 'دليل B2 مرتبط بـTYMM يربط السياق التاريخي وثقافة التكية والفكر الأخلاقي الصوفي واللغة الأدبية الميسرة والشعر والتوحيد والمحبة والتواضع والخدمة والمعنى الاجتماعي مع الحفاظ على نسبة الأفكار المنسوبة إلى أصحابها.',
    },
    approach: {
      en: 'Move between history and ideas without making learners perform abstract philosophy. Historical chapters focus on pressures, institutions, and consequences; conceptual chapters focus on how the text presents Yunus Emre’s ideas and values. Preserve phrases such as according to historical accounts or some sources only where the chapter uses them.',
      ar: 'انتقل بين التاريخ والأفكار دون تحويل المهمة إلى فلسفة مجردة. تركز الفصول التاريخية على الضغوط والمؤسسات والنتائج، وتركز الفصول الفكرية على كيفية عرض النص لأفكار يونس إمره وقيمه. حافظ على عبارات مثل وفقًا للروايات التاريخية أو بعض المصادر فقط حيث يستخدمها الفصل.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B2: follow historical explanation, poetic or conceptual language, contrast, and changes in focus across chapters.',
        reading: 'TYMM YDAB2 primary + CEFR B2: connect historical pressure with cultural response, distinguish attributed historical claims from direct description, compare outer/inner dimensions, and interpret ideas through details the chapter provides.',
        speaking: 'TYMM YDAB3 supporting: explain a historical or conceptual relationship and support it with two accurate details while keeping attribution clear.',
        writing: 'TYMM YDAB4 supporting: write coherent B2 explanations of context, values, language, and ideas without turning a chapter-supported interpretation into an unsupported generalisation.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B2: تتبع الشرح التاريخي واللغة الشعرية أو الفكرية والمقارنة وتغير التركيز عبر الفصول.',
        reading: 'TYMM YDAB2 أساسي + CEFR B2: ربط الضغط التاريخي بالاستجابة الثقافية والتمييز بين الادعاء التاريخي المنسوب والوصف المباشر ومقارنة الظاهر والباطن وتفسير الأفكار من خلال تفاصيل الفصل.',
        speaking: 'TYMM YDAB3 داعم: شرح علاقة تاريخية أو فكرية ودعمها بتفصيلين دقيقين مع الحفاظ على نسبة الفكرة.',
        writing: 'TYMM YDAB4 داعم: كتابة تفسير مترابط للسياق والقيم واللغة والأفكار دون تحويل تفسير مدعوم بالفصل إلى تعميم غير مدعوم.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: mixed past and passive voice for historical narration; reporting verbs and hedging for attributed accounts; relative clauses for people/institutions; contrast and concession for outer/inner or historical comparisons; modals for careful interpretation; and present forms when explaining ideas the chapter presents as part of Yunus Emre’s thought.',
      ar: 'TYMM YDDB1 داعم: الماضي المختلط والمبني للمجهول للسرد التاريخي، وأفعال النقل والتحفظ للروايات المنسوبة، والجمل الموصولة للأشخاص والمؤسسات، والمقارنة والاستدراك للظاهر والباطن أو المقارنات التاريخية، والأفعال الناقصة للتفسير الحذر، والحاضر لشرح الأفكار التي يعرضها الفصل ضمن فكر يونس إمره.',
    },
    grammarSequence: {
      en: ['Identity/education: relative clauses, reporting, present-vs-past', 'Historical crisis: mixed past, passive, cause/result', 'Yunus as response: contrast, purpose, reported ideas', 'Thought/values: present explanation, modals, concession, synthesis'],
      ar: ['الهوية والتعليم: الجمل الموصولة والنقل والحاضر مقابل الماضي', 'الأزمة التاريخية: الماضي المختلط والمبني للمجهول والسبب والنتيجة', 'يونس بوصفه استجابة: المقارنة والغرض ونقل الأفكار', 'الفكر والقيم: شرح الحاضر والأفعال الناقصة والاستدراك والتركيب'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: recycle vocabulary that unlocks both history and thought—mysticism, dervish, tekke, uprising, invasion, solidarity, Tawhid, unity, humility, generosity, patience, and arrogance—inside explanatory sentences.',
      ar: 'TYMM YDDB2 داعم: أعد استخدام المفردات التي تفتح التاريخ والفكر معًا مثل التصوف والدرويش والتكية والانتفاضة والغزو والتضامن والتوحيد والوحدة والتواضع والكرم والصبر والكبر داخل جمل تفسيرية.',
    },
    pronunciation: { en: 'TYMM YDDB3 supporting: practise historical names and Sûfî terminology, word stress in longer abstract terms, and natural intonation when reading short quoted lines.', ar: 'TYMM YDDB3 داعم: تدرب على الأسماء التاريخية والمصطلحات الصوفية ونبر الكلمات المجردة الأطول والتنغيم الطبيعي عند قراءة الأسطر المقتبسة.' },
    values: {
      en: ['Humility and self-discipline', 'Generosity and social solidarity', 'Patience during hardship', 'Responding to wrong with goodness', 'Accessible language and service to society', 'Love, honesty, and meaningful action'],
      ar: ['التواضع وضبط النفس', 'الكرم والتضامن الاجتماعي', 'الصبر في الشدائد', 'مقابلة الإساءة بالخير', 'اللغة الميسرة وخدمة المجتمع', 'المحبة والصدق والعمل الهادف'],
    },
    studyFocus: { en: 'Connect the historical situation or concrete practice in a chapter with the cultural, moral, or literary meaning the chapter itself presents.', ar: 'اربط الوضع التاريخي أو الممارسة الملموسة في الفصل بالمعنى الثقافي أو الأخلاقي أو الأدبي الذي يقدمه الفصل نفسه.' },
  },
};

const rubric = (language: BlueprintLanguage): RubricRow[] => language === 'en'
  ? [
      { criterion: 'Story accuracy', excellent: 'Uses accurate chapter information throughout.', good: 'Mostly accurate with a minor omission.', developing: 'Several details are confused or unsupported.' },
      { criterion: 'Connection / analysis', excellent: 'Explains a meaningful relationship, comparison, cause, or turning point clearly.', good: 'Explains the relationship but needs more precision.', developing: 'Mostly retells events without explaining the connection.' },
      { criterion: 'Support', excellent: 'Uses two relevant chapter details when the task calls for them.', good: 'Uses one strong detail or two partly explained details.', developing: 'Uses vague or unrelated support.' },
      { criterion: 'B2 language', excellent: 'Uses suitable complex sentences, linkers, and chapter vocabulary accurately.', good: 'Meaning is clear with some limited or repetitive language.', developing: 'Language problems make the explanation difficult to follow.' },
      { criterion: 'Interpretive control', excellent: 'Keeps conclusions within what the chapter supports and preserves uncertainty when the text signals it.', good: 'Mostly controlled with one overgeneralisation.', developing: 'Adds unsupported claims or turns possibility into certainty.' },
    ]
  : [
      { criterion: 'دقة القصة', excellent: 'يستخدم معلومات دقيقة من الفصل باستمرار.', good: 'دقيق غالبًا مع نقص بسيط.', developing: 'توجد تفاصيل متعددة مختلطة أو غير مدعومة.' },
      { criterion: 'العلاقة / التحليل', excellent: 'يشرح علاقة أو مقارنة أو سببًا أو نقطة تحول بوضوح.', good: 'يشرح العلاقة لكن يحتاج إلى دقة أكبر.', developing: 'يعيد السرد غالبًا دون شرح العلاقة.' },
      { criterion: 'الدعم', excellent: 'يستخدم تفصيلين مناسبين عندما تتطلب المهمة ذلك.', good: 'يستخدم تفصيلًا قويًا أو تفصيلين بشرح جزئي.', developing: 'يستخدم دعمًا عامًا أو غير مرتبط.' },
      { criterion: 'لغة B2', excellent: 'يستخدم جملًا مركبة وروابط ومفردات الفصل بدقة.', good: 'المعنى واضح مع لغة محدودة أو متكررة أحيانًا.', developing: 'مشكلات اللغة تجعل التفسير صعب المتابعة.' },
      { criterion: 'ضبط التفسير', excellent: 'يبقي الاستنتاج داخل ما يدعمه الفصل ويحافظ على عدم اليقين عندما يشير النص إليه.', good: 'مضبوط غالبًا مع تعميم واحد.', developing: 'يضيف ادعاءات غير مدعومة أو يحول الاحتمال إلى يقين.' },
    ];

const groupedLessons = (chapterCount: number, language: BlueprintLanguage, focus: string) => {
  const groupCount = chapterCount >= 30 ? 7 : chapterCount >= 20 ? 6 : chapterCount >= 15 ? 5 : 4;
  const size = Math.ceil(chapterCount / groupCount);
  return Array.from({ length: groupCount }, (_, index) => {
    const start = index * size + 1;
    const end = Math.min(chapterCount, (index + 1) * size);
    return language === 'en'
      ? { title: `Unit ${index + 1}: Chapters ${start}–${end}`, description: `Read, discuss and assess Chapters ${start}–${end}. Keep the unit focus on ${focus}` }
      : { title: `الوحدة ${index + 1}: الفصول ${start}–${end}`, description: `اقرأ وناقش وقيّم الفصول ${start}–${end}. حافظ على تركيز الوحدة على: ${focus}` };
  }).filter(item => !item.title.includes(`${chapterCount + 1}`));
};

export const buildB2GoldTeacherGuideMetadata = (
  base: TeacherGuideMetadata | undefined,
  story: B2GoldStory,
  language: BlueprintLanguage,
  chapterCount: number,
): TeacherGuideMetadata => {
  const profile = profiles[story];
  const units = groupedLessons(chapterCount, language, profile.studyFocus[language]);
  const assessmentEvidence = language === 'en'
    ? 'Five-part evidence: accurate understanding; meaningful connection/analysis; relevant story support; appropriate B2 language; controlled interpretation without unsupported claims.'
    : 'خمسة أدلة للتعلم: فهم دقيق، علاقة أو تحليل ذو معنى، دعم مناسب من القصة، لغة B2 مناسبة، وضبط التفسير دون ادعاءات غير مدعومة.';

  return {
    ...base,
    title: `${profile.title[language]} — Teacher Guide`,
    level: 'B2',
    estimatedDuration: language === 'en'
      ? `${chapterCount} chapter lessons plus Knowledge Check, Vocabulary Challenge, Retrieval Review, two Glossaries and Final Challenge`
      : `${chapterCount} حصة للفصول إضافة إلى اختبار الفهم وتحدي المفردات ومراجعة الاسترجاع وقسمي المعجم والتحدي النهائي`,
    targetLearners: language === 'en'
      ? 'Upper-intermediate secondary or adult learners working around CEFR B2. Tasks require connected explanation and text-supported interpretation, not university-level literary or source criticism.'
      : 'متعـلمو المرحلة الثانوية أو الكبار في مستوى يقارب CEFR B2. تتطلب المهام تفسيرًا مترابطًا مدعومًا بالنص لا نقدًا أدبيًا أو مصدريًا بمستوى جامعي.',
    purpose: profile.purpose[language],
    approachDesc: profile.approach[language],
    skillsFocus: profile.skills[language],
    grammarApproach: profile.grammar[language],
    grammarSequence: profile.grammarSequence[language],
    vocabularyApproach: profile.vocabulary[language],
    languageFocus: [profile.grammar[language], profile.vocabulary[language], profile.pronunciation[language]],
    valuesFocus: profile.values[language],
    assessmentEvidence,
    assessmentRubric: rubric(language),
    finalRubric: rubric(language),
    rubricRows: rubric(language),
    readingFramework: language === 'en'
      ? {
          before: 'Preview the title, image and two hotspots. Activate only what learners can infer from these cues; do not pre-answer the chapter.',
          during: 'Read once for the overall movement. Reread to trace the chapter’s main relationship—cause, comparison, sequence, motivation, turning point, or supported interpretation—and notice useful B2 language in context.',
          after: 'Complete the Quick Challenge, correct misunderstandings by returning to the relevant paragraph, then produce a short explanation that connects two accurate details when appropriate.',
        }
      : {
          before: 'عاين العنوان والصورة ونقطتي التفاعل. فعّل فقط ما يمكن توقعه من هذه الإشارات ولا تقدم إجابة الفصل مسبقًا.',
          during: 'اقرأ مرة للحركة العامة ثم أعد القراءة لتتبع العلاقة الرئيسة: سبب أو مقارنة أو تسلسل أو دافع أو نقطة تحول أو تفسير مدعوم، ولاحظ لغة B2 المفيدة في السياق.',
          after: 'نفذ التحدي السريع وصحح سوء الفهم بالعودة إلى الفقرة ذات الصلة، ثم قدم تفسيرًا قصيرًا يربط بين تفصيلين دقيقين عند الحاجة.',
        },
    speakingApproach: language === 'en'
      ? 'Use short pair explanations before whole-class discussion. Learners should state the relationship first, then support it with one or two accurate details and respond to a follow-up question.'
      : 'استخدم تفسيرًا قصيرًا في أزواج قبل النقاش الصفي. يذكر المتعلم العلاقة أولًا ثم يدعمها بتفصيل أو تفصيلين دقيقين ويجيب عن سؤال متابعة.',
    writingApproach: language === 'en'
      ? 'Most chapter writing should be 5–7 connected sentences or roughly 90–120 words. Use 120–150 words selectively for synthesis, comparison, or whole-book tasks rather than forcing a long analytical paragraph in every chapter.'
      : 'تكون معظم كتابات الفصول 5–7 جمل مترابطة أو نحو 90–120 كلمة. استخدم 120–150 كلمة بصورة انتقائية في مهام التركيب أو المقارنة أو الكتاب كاملًا بدل فرض فقرة تحليلية طويلة في كل فصل.',
    differentiationNotes: language === 'en'
      ? 'Support learners with chapter-specific cause/comparison/timeline/action-reason frames. Extend faster learners by adding a second detail, counterpoint, or cautious deduction only when the chapter supports it.'
      : 'ادعم المتعلمين بأطر خاصة بالفصل للسبب أو المقارنة أو الخط الزمني أو الفعل والسبب. وسّع مهمة الأسرع بإضافة تفصيل ثانٍ أو نقطة مقابلة أو استنتاج حذر فقط عندما يدعمه الفصل.',
    implementationPlans: {
      optionA: {
        title: language === 'en' ? 'Single-Chapter 50–55 Minute Cycle' : 'دورة فصل واحدة 50–55 دقيقة',
        steps: language === 'en'
          ? [
              { time: '5 min', activity: 'Title, image and hotspot prediction.' },
              { time: '10 min', activity: 'First read/listen for overall movement.' },
              { time: '12 min', activity: 'Reread for the chapter’s main relationship and two useful details.' },
              { time: '8 min', activity: 'Grammar/vocabulary noticing in authentic chapter sentences.' },
              { time: '10 min', activity: 'Quick Challenge, feedback and pair explanation.' },
              { time: '8–10 min', activity: 'Exit response or short B2 writing.' },
            ]
          : [
              { time: '5 دقائق', activity: 'توقع من العنوان والصورة ونقطتي التفاعل.' },
              { time: '10 دقائق', activity: 'قراءة/استماع أول لفهم الحركة العامة.' },
              { time: '12 دقيقة', activity: 'إعادة القراءة للعلاقة الرئيسة وتفصيلين مفيدين.' },
              { time: '8 دقائق', activity: 'ملاحظة القواعد والمفردات في جمل الفصل.' },
              { time: '10 دقائق', activity: 'التحدي السريع والتغذية الراجعة والتفسير الثنائي.' },
              { time: '8–10 دقائق', activity: 'استجابة ختامية أو كتابة B2 قصيرة.' },
            ],
      },
      optionB: {
        title: language === 'en' ? 'Whole-Book Unit Plan' : 'خطة وحدات للكتاب كاملًا',
        lessons: units,
      },
      optionC: {
        title: language === 'en' ? 'Assessment and Retrieval Cycle' : 'دورة التقييم والاسترجاع',
        steps: language === 'en'
          ? [
              { time: 'After chapters', activity: 'Knowledge Check: 8 relationship/evidence items.' },
              { time: 'Next session', activity: 'Vocabulary Challenge: 10 high-value words in context.' },
              { time: 'Review session', activity: 'Retrieval Review: sequence, matching, reflection and 8-question quiz.' },
              { time: 'Final session', activity: 'Glossary retrieval followed by the 10-item Final Challenge.' },
            ]
          : [
              { time: 'بعد الفصول', activity: 'اختبار الفهم: 8 بنود للعلاقات والدليل.' },
              { time: 'الحصة التالية', activity: 'تحدي المفردات: 10 كلمات عالية القيمة في السياق.' },
              { time: 'حصة المراجعة', activity: 'مراجعة الاسترجاع: تسلسل ومطابقة وتأمل واختبار من 8 أسئلة.' },
              { time: 'الحصة النهائية', activity: 'استرجاع المعجم ثم التحدي النهائي من 10 بنود.' },
            ],
      },
    },
    valuesEducation: {
      title: language === 'en' ? 'Values from the Story' : 'القيم المستمدة من القصة',
      description: language === 'en'
        ? 'Values are discussed through event → choice/action → consequence → story detail → reflection, not as detached slogans.'
        : 'تناقش القيم من خلال الحدث ← الاختيار/الفعل ← النتيجة ← تفصيل القصة ← التأمل، لا كشعارات منفصلة.',
      items: profile.values[language].map(value => ({ label: value, value })),
    },
  };
};

export const buildB2GoldStudentGuideMetadata = (
  story: B2GoldStory,
  language: BlueprintLanguage,
): StudentGuideMetadata => ({
  title: language === 'en' ? `${profiles[story].title.en} — Self-Study Guide` : `${profiles[story].title.ar} — دليل الدراسة الذاتية`,
  level: 'B2',
  language: language === 'en' ? 'English' : 'العربية',
  whoIsThisFor: language === 'en'
    ? 'For B2 learners studying independently. The guide helps you understand connections, check difficult answers, and explain ideas in your own words without teacher-training terminology.'
    : 'لمتعلمي B2 الذين يدرسون بصورة مستقلة. يساعدك الدليل على فهم العلاقات وتصحيح الإجابات الصعبة وشرح الأفكار بكلماتك دون مصطلحات تدريب المعلمين.',
  learningGoals: language === 'en'
    ? ['Understand the main relationship in each chapter.', 'Use story details to support your explanation.', 'Notice useful B2 grammar and vocabulary in context.', 'Correct only the part you misunderstood.', 'Explain and write clearly in your own words.']
    : ['فهم العلاقة الرئيسة في كل فصل.', 'استخدام تفاصيل القصة لدعم تفسيرك.', 'ملاحظة قواعد ومفردات B2 في السياق.', 'تصحيح الجزء الذي لم تفهمه فقط.', 'الشرح والكتابة بوضوح بكلماتك.'],
});

export const buildB2FriendlyStudentGuideSections = (
  story: B2GoldStory,
  language: BlueprintLanguage,
): StudentGuideSection[] => language === 'en'
  ? [
      { title: 'Start with the Big Picture', icon: 'Target', text: `Read ${profiles[story].title.en} once without stopping too often. First understand what is happening and what the chapter is mainly trying to show.`, points: ['Look at the title, image and hotspots first.', 'After the first reading, say the chapter’s main idea in one or two sentences.'] },
      { title: 'Read Again for Connections', icon: 'Eye', text: `On the second reading, focus on this habit: ${profiles[story].studyFocus.en}`, points: ['Find one important sentence first.', 'Find a second detail only when it helps explain the connection.', 'Do not add information that the chapter does not give.'] },
      { title: 'Notice Useful B2 Language', icon: 'BookOpen', text: 'Notice how the chapter joins ideas: past events, contrast, cause and result, reported speech, passive forms, or careful possibility. Learn the pattern through a sentence you already understand.', points: ['Choose one useful sentence pattern.', 'Use the same pattern in one sentence about the chapter.'] },
      { title: 'Learn Words in Context', icon: 'Stars', text: 'Use the sentence around a new word before opening its Word Note. At B2, knowing when and why a word is used matters more than memorising a long list.', points: ['Guess first, then check.', 'Use one important new word in your own explanation.'] },
      { title: 'Fix a Wrong Answer', icon: 'Lightbulb', text: 'A wrong answer does not mean you need to reread the whole chapter. Use the feedback to find the relevant paragraph and identify the connection you missed.', points: ['Find the sentence that changes your answer.', 'Explain to yourself what you misunderstood.', 'Try the question again from memory.'] },
      { title: 'Explain It in Your Own Words', icon: 'PenTool', text: 'Finish by closing the text for a moment and explaining one important idea. Most chapters only need a clear 5–7 sentence response; longer writing is for selected review or synthesis tasks.', points: ['State the main connection clearly.', 'Add one or two accurate story details.', 'Use a contrast, cause, or careful conclusion only when it fits.'] },
    ]
  : [
      { title: 'ابدأ بالصورة العامة', icon: 'Target', text: `اقرأ ${profiles[story].title.ar} مرة دون توقف كثير. افهم أولًا ما يحدث وما الفكرة التي يحاول الفصل توضيحها.`, points: ['انظر إلى العنوان والصورة ونقطتي التفاعل أولًا.', 'بعد القراءة الأولى عبّر عن الفكرة الرئيسة بجملة أو جملتين.'] },
      { title: 'اقرأ مرة أخرى للعلاقات', icon: 'Eye', text: `في القراءة الثانية ركز على هذه العادة: ${profiles[story].studyFocus.ar}`, points: ['اعثر على جملة مهمة أولًا.', 'أضف تفصيلًا ثانيًا فقط عندما يساعد على شرح العلاقة.', 'لا تضف معلومة لا يقدمها الفصل.'] },
      { title: 'لاحظ لغة B2 المفيدة', icon: 'BookOpen', text: 'لاحظ كيف يربط الفصل الأفكار: أحداث الماضي، المقارنة، السبب والنتيجة، الكلام المنقول، المبني للمجهول، أو الاحتمال الحذر. تعلم التركيب من جملة تفهمها بالفعل.', points: ['اختر تركيبًا واحدًا مفيدًا.', 'استخدم التركيب نفسه في جملة عن الفصل.'] },
      { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'استخدم الجملة المحيطة بالكلمة الجديدة قبل فتح ملاحظة الكلمة. في B2 فهم متى ولماذا تستخدم الكلمة أهم من حفظ قائمة طويلة.', points: ['خمّن أولًا ثم تحقق.', 'استخدم كلمة جديدة مهمة في تفسيرك.'] },
      { title: 'صحح الإجابة الخاطئة', icon: 'Lightbulb', text: 'الإجابة الخاطئة لا تعني إعادة قراءة الفصل كله. استخدم التغذية الراجعة للعثور على الفقرة ذات الصلة وحدد العلاقة التي لم تفهمها.', points: ['اعثر على الجملة التي تغير إجابتك.', 'حدد لنفسك ما الذي فهمته خطأ.', 'حاول مرة أخرى من الذاكرة.'] },
      { title: 'اشرح بكلماتك', icon: 'PenTool', text: 'في النهاية أغلق النص للحظة واشرح فكرة مهمة. تحتاج معظم الفصول إلى 5–7 جمل واضحة فقط، أما الكتابة الأطول فتستخدم في المراجعة أو التركيب.', points: ['اذكر العلاقة الرئيسة بوضوح.', 'أضف تفصيلًا أو تفصيلين دقيقين.', 'استخدم مقارنة أو سببًا أو استنتاجًا حذرًا عندما يناسب.'] },
    ];

const cleanGrammar = (value: string | undefined, language: BlueprintLanguage): string => {
  if (!value) return language === 'en' ? 'Notice one useful B2 sentence pattern from this chapter and reuse it.' : 'لاحظ تركيب B2 مفيدًا من هذا الفصل واستخدمه مرة أخرى.';
  return value
    .replace(/TYMM\s+YDDB1\s+supporting\s*[—:-]\s*/gi, '')
    .replace(/YDDB1\s*[—:-]\s*/gi, '')
    .replace(/evidence\s*[→-]\s*interpretation\s*[→-]\s*qualification/gi, 'a clear explanation with accurate chapter details')
    .trim();
};

export const buildB2FriendlyStudentGuideText = (
  blueprint: LearningBlueprint,
  story: B2GoldStory,
  language: BlueprintLanguage,
): string => {
  const chapterBlocks = blueprint.chapters.map(chapter => {
    const objective = chapter.objectives[0]?.[language] ?? '';
    const secondObjective = chapter.objectives[1]?.[language] ?? '';
    const guide = chapter.selfStudyGuide[language];
    const grammar = cleanGrammar(guide.grammarFocus, language);
    const prompts = guide.discussionPoints.slice(0, 2).map(point => `- ${point}`).join('\n');
    const keyDetail = chapter.evidencePoints[0]?.evidence[language] ?? '';

    return language === 'en'
      ? `## Chapter ${chapter.chapterId}\n\n### What to Understand\n- ${objective}\n${secondObjective ? `- ${secondObjective}\n` : ''}\n### One Useful Place to Start\nLook again at: “${keyDetail}”\n\n### Useful Language\n${grammar}\n\n### How to Study This Chapter\n1. Read once for the big picture.\n2. Read again and find the chapter’s main connection.\n3. Choose one important detail; add a second only if it helps explain the connection.\n4. Do the Quick Challenge from memory.\n5. If you are wrong, return only to the paragraph connected to the feedback.\n6. Explain one idea in 5–7 connected sentences.\n\n### Questions to Think About\n${prompts}\n\n### Quick Self-Check\n- Can I explain the main connection without looking?\n- Can I support it with an accurate chapter detail?\n- Did I avoid adding something the chapter does not say?\n- Can I use one useful B2 pattern or new word from this chapter?`
      : `## الفصل ${chapter.chapterId}\n\n### ما الذي ينبغي أن تفهمه؟\n- ${objective}\n${secondObjective ? `- ${secondObjective}\n` : ''}\n### نقطة مفيدة للبدء\nارجع إلى: «${keyDetail}»\n\n### لغة مفيدة\n${grammar}\n\n### كيف تدرس هذا الفصل؟\n1. اقرأ مرة للصورة العامة.\n2. اقرأ مرة أخرى وحدد العلاقة الرئيسة.\n3. اختر تفصيلًا مهمًا وأضف ثانيًا فقط إذا ساعد على شرح العلاقة.\n4. نفذ التحدي السريع من الذاكرة.\n5. إذا أخطأت فارجع فقط إلى الفقرة المرتبطة بالتغذية الراجعة.\n6. اشرح فكرة واحدة في 5–7 جمل مترابطة.\n\n### أسئلة للتفكير\n${prompts}\n\n### تحقق من نفسك بسرعة\n- هل أستطيع شرح العلاقة الرئيسة دون النظر؟\n- هل أستطيع دعمها بتفصيل دقيق من الفصل؟\n- هل تجنبت إضافة شيء لا يقوله الفصل؟\n- هل أستطيع استخدام تركيب B2 أو كلمة جديدة من هذا الفصل؟`;
  }).join('\n\n');

  return language === 'en'
    ? `# ${profiles[story].title.en} — B2 Self-Study Guide\n\nUse this guide when you study by yourself. B2 does not mean turning every chapter into an academic essay. Your goal is to understand the chapter, connect important ideas, check what the text actually supports, and explain the result clearly in your own English.\n\n## A Simple Routine\n1. Preview the title, image and hotspots.\n2. Read or listen once for the whole chapter.\n3. Read again for the main connection and one or two useful details.\n4. Notice one useful grammar pattern and important vocabulary in context.\n5. Do the Quick Challenge without looking.\n6. Use feedback to correct only the part you misunderstood.\n7. Finish with a clear 5–7 sentence explanation. Use a longer 100–150 word response only for selected review or synthesis tasks.\n\n${chapterBlocks}`
    : `# ${profiles[story].title.ar} — دليل الدراسة الذاتية B2\n\nاستخدم هذا الدليل عندما تدرس بمفردك. مستوى B2 لا يعني تحويل كل فصل إلى مقال أكاديمي. هدفك هو فهم الفصل وربط الأفكار المهمة والتحقق مما يدعمه النص فعلًا ثم شرح النتيجة بوضوح بكلماتك.\n\n## طريقة بسيطة للدراسة\n1. عاين العنوان والصورة ونقطتي التفاعل.\n2. اقرأ أو استمع مرة للفصل كاملًا.\n3. اقرأ مرة أخرى للعلاقة الرئيسة وتفصيل أو تفصيلين مفيدين.\n4. لاحظ تركيبًا لغويًا مفيدًا ومفردات مهمة في السياق.\n5. نفذ التحدي السريع دون النظر إلى النص.\n6. استخدم التغذية الراجعة لتصحيح الجزء الذي لم تفهمه فقط.\n7. اختم بتفسير واضح من 5–7 جمل. استخدم استجابة أطول من 100–150 كلمة فقط في بعض مهام المراجعة أو التركيب.\n\n${chapterBlocks}`;
};
