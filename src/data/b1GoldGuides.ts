import type { StudentGuideMetadata, StudentGuideSection, TeacherGuideMetadata } from '../types';
import type { BlueprintLanguage, LearningBlueprint } from './learningBlueprint';
import type { B1GoldStory } from './b1GoldPedagogy';

type Skills = NonNullable<TeacherGuideMetadata['skillsFocus']>;

type GuideProfile = {
  title: { en: string; ar: string };
  purpose: { en: string; ar: string };
  approach: { en: string; ar: string };
  skills: { en: Skills; ar: Skills };
  grammar: { en: string; ar: string };
  grammarSequence: { en: string[]; ar: string[] };
  vocabulary: { en: string; ar: string };
  values: { en: string[]; ar: string[] };
  studyFocus: { en: string; ar: string };
};

const profiles: Record<B1GoldStory, GuideProfile> = {
  adam: {
    title: { en: 'Prophet Adam B1', ar: 'قصة النبي آدم B1' },
    purpose: {
      en: 'A B1 teaching companion that moves from accurate story understanding to cause/result, comparison, motivation, supported inference, and short evidence-based explanation. TYMM alignment is used as a transparent curriculum map rather than as decoration.',
      ar: 'دليل تدريس B1 ينتقل من فهم القصة بدقة إلى السبب والنتيجة والمقارنة والدافع والاستنتاج المدعوم والتفسير القصير القائم على الدليل. تُستخدم مواءمة TYMM خريطة منهجية واضحة لا مجرد تسمية.',
    },
    approach: {
      en: 'Use the story itself as the factual source. The B1 task is to explain relationships: knowledge and responsibility, origin and arrogance, warning and deception, mistake and repentance, intention and offering, jealousy and consequence. Keep interpretation inside what the chapter can support.',
      ar: 'اجعل القصة نفسها المصدر الواقعي. تتمثل مهمة B1 في شرح العلاقات: العلم والمسؤولية، الأصل والكبر، التحذير والخداع، الخطأ والتوبة، النية والقربان، الحسد والنتيجة. أبقِ التفسير داخل ما يستطيع الفصل دعمه.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B1: follow the narrated sequence, notices of warning, direct speech, emotional shifts, and key contrasts already grounded in the text.',
        reading: 'TYMM YDAB2 primary + CEFR B1: identify main ideas and evidence, explain cause/result, compare responses, and make simple supported inferences about choices and consequences.',
        speaking: 'TYMM YDAB3 supporting: give a short claim → evidence → explanation response about a chapter relationship or comparison.',
        writing: 'TYMM YDAB4 supporting: write 3–5 connected sentences using relevant chapter evidence rather than retelling every detail.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B1: تتبع تسلسل السرد والتحذير والكلام المباشر وتغير المشاعر والمقارنات الأساسية الموثقة في النص.',
        reading: 'TYMM YDAB2 أساسي + CEFR B1: تحديد الأفكار الرئيسة والدليل وشرح السبب والنتيجة ومقارنة الاستجابات وبناء استنتاج بسيط مدعوم حول الاختيارات والنتائج.',
        speaking: 'TYMM YDAB3 داعم: تقديم استجابة قصيرة على نمط ادعاء ← دليل ← تفسير حول علاقة أو مقارنة في الفصل.',
        writing: 'TYMM YDAB4 داعم: كتابة 3–5 جمل مترابطة تستخدم دليلًا مناسبًا من الفصل بدل إعادة سرد كل التفاصيل.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: grammar follows the actual story language—narrative past forms; present forms for continuing ideas; because/so/however for cause and contrast; comparatives; passive patterns such as was created/was given/was accepted when they occur naturally; reporting verbs and direct/reported speech; and B1 conditional language only when it serves a genuine comparison or transfer task. Third Conditional is not imposed as a chapter target.',
      ar: 'TYMM YDDB1 داعم: تتبع القواعد لغة القصة نفسها—أزمنة الماضي للسرد، والحاضر للأفكار المستمرة، وروابط السبب والمقارنة، وصيغ التفضيل، والمبني للمجهول مثل was created/was given/was accepted عندما يظهر طبيعيًا، وأفعال القول والكلام المباشر والمنقول، والشرط بمستوى B1 فقط عندما يخدم مهمة حقيقية. ولا يُفرض الشرط الثالث هدفًا للفصول.',
    },
    grammarSequence: {
      en: ['Ch1–3: narrative past/present distinction, comparison, because/however', 'Ch4–6: reporting language, warning, deception, sequence', 'Ch7–9: passive forms, consequence, repentance, responsibility', 'Ch10–12: while/but comparison, intention, direct/reported speech, cause/result'],
      ar: ['الفصول 1–3: الماضي/الحاضر والمقارنة وروابط السبب والاستدراك', 'الفصول 4–6: أفعال القول والتحذير والخداع والتسلسل', 'الفصول 7–9: المبني للمجهول والنتيجة والتوبة والمسؤولية', 'الفصول 10–12: المقارنة والنية والكلام المباشر والمنقول والسبب والنتيجة'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: recycle words that unlock the book’s relationships—knowledge, intellect, arrogance, origin, deception, repentance, sincerity, jealousy, regret, responsibility—inside evidence sentences rather than isolated lists.',
      ar: 'TYMM YDDB2 داعم: أعد استخدام الكلمات التي تفتح علاقات الكتاب مثل العلم والعقل والكبر والأصل والخداع والتوبة والإخلاص والحسد والندم والمسؤولية داخل جمل الدليل لا في قوائم منفصلة.',
    },
    values: {
      en: ['Knowledge linked to responsibility', 'Humility instead of superiority based on origin', 'Admitting and repairing mistakes', 'Sincerity and giving one’s best', 'Self-control in jealousy and anger', 'Non-violence and responsibility for consequences'],
      ar: ['ربط العلم بالمسؤولية', 'التواضع بدل التفاضل بالأصل', 'الاعتراف بالخطأ وإصلاحه', 'الإخلاص وبذل الأفضل', 'ضبط الحسد والغضب', 'رفض العنف وتحمل نتائج الاختيارات'],
    },
    studyFocus: { en: 'Track how a choice or attitude leads to a consequence, then support the relationship with one or two chapter details.', ar: 'تتبع كيف يقود الاختيار أو الموقف إلى نتيجة ثم ادعم العلاقة بتفصيل أو تفصيلين من الفصل.' },
  },

  abraham: {
    title: { en: 'Prophet Abraham B1', ar: 'قصة النبي إبراهيم B1' },
    purpose: {
      en: 'A story-grounded B1 companion for explaining observation, questioning, evidence, cause/result, opposition, trust, effort, and legacy through TYMM foreign-language skills and CEFR B1 reception/production.',
      ar: 'دليل B1 قائم على القصة لشرح الملاحظة والتساؤل والدليل والسبب والنتيجة والمعارضة والتوكل والسعي والإرث من خلال مهارات TYMM ومستوى CEFR B1.',
    },
    approach: {
      en: 'Teach Abraham’s reasoning as a sequence of observations and responses, not as abstract philosophy. Learners should identify what the text shows, explain how one detail weakens or supports a claim, and connect trust with action in later chapters.',
      ar: 'درّس استدلال إبراهيم بوصفه تسلسلًا من الملاحظات والاستجابات لا فلسفة مجردة. يحدد المتعلم ما يبينه النص ويشرح كيف يضعف تفصيل ادعاءً أو يدعمه ويربط التوكل بالعمل في الفصول اللاحقة.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B1: follow questions, replies, threats, decisions, journeys, and turning points in the narrated story.',
        reading: 'TYMM YDAB2 primary + CEFR B1: locate evidence, follow reasoning, compare claims with observable limits, explain causes/results, and make supported conclusions.',
        speaking: 'TYMM YDAB3 supporting: explain a reason, challenge, contrast, or decision in short connected B1 speech with a story detail.',
        writing: 'TYMM YDAB4 supporting: write 3–5 sentence evidence-based explanations of reasoning, opposition, effort, or legacy.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B1: تتبع الأسئلة والردود والتهديدات والقرارات والرحلات ونقاط التحول في السرد.',
        reading: 'TYMM YDAB2 أساسي + CEFR B1: تحديد الدليل وتتبع الاستدلال ومقارنة الادعاءات بحدود المخلوقات وشرح الأسباب والنتائج وبناء استنتاجات مدعومة.',
        speaking: 'TYMM YDAB3 داعم: شرح سبب أو تحد أو مقارنة أو قرار في كلام B1 قصير مترابط مع تفصيل من القصة.',
        writing: 'TYMM YDAB4 داعم: كتابة 3–5 جمل قائمة على الدليل تشرح الاستدلال أو المعارضة أو السعي أو الإرث.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: use used to where the chapter describes repeated past behaviour; could/could not and can/cannot for ability and powerlessness; because/when/so for reasoning; comparatives; First Conditional where it actually appears in the prayer; reporting verbs for dialogue; passive forms where events are described through what was done; and Past Perfect only when it helps order two past events clearly. B1 structures are selected from the story, not distributed mechanically.',
      ar: 'TYMM YDDB1 داعم: استخدم used to حيث يصف الفصل سلوكًا ماضيًا متكررًا، وcould/could not وcan/cannot للقدرة والعجز، وروابط السبب والزمن، والمقارنة، والشرط الأول حيث يظهر فعلًا في الدعاء، وأفعال القول للحوار، والمبني للمجهول حيث يصف النص ما فُعل، والماضي التام فقط عندما يساعد على ترتيب حدثين ماضيين. تُختار تراكيب B1 من القصة ولا توزع آليًا.',
    },
    grammarSequence: {
      en: ['Ch1–3: could/could not, used to, because/when, comparison', 'Ch4–6: First Conditional in context, reporting verbs, sequence and intention', 'Ch7–9: passive forms, cause/result, contrast, change', 'Ch10–13: challenge language, decisions, Past Perfect where useful, legacy and reported ideas'],
      ar: ['الفصول 1–3: القدرة والعجز وused to والسبب والزمن والمقارنة', 'الفصول 4–6: الشرط الأول في سياقه وأفعال القول والتسلسل والنية', 'الفصول 7–9: المبني للمجهول والسبب والنتيجة والمقارنة والتغير', 'الفصول 10–13: لغة التحدي والقرارات والماضي التام عند الحاجة والإرث ونقل الأفكار'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: vocabulary should serve the reasoning and narrative—Creator, idols, worship, guidance, challenge, miracle, migration, trust, Zamzam, legacy—through context, recycling, and short production.',
      ar: 'TYMM YDDB2 داعم: تخدم المفردات الاستدلال والسرد مثل الخالق والأصنام والعبادة والهداية والتحدي والمعجزة والهجرة والتوكل وزمزم والإرث، وتُتعلم في السياق مع إعادة الاستخدام والإنتاج القصير.',
    },
    values: {
      en: ['Seeking truth through observation and evidence', 'Respectful questioning of unsupported claims', 'Courage under opposition', 'Trust combined with active effort', 'Patience during migration and hardship', 'Building a lasting legacy around Tawhid and service'],
      ar: ['البحث عن الحقيقة بالملاحظة والدليل', 'مراجعة الادعاءات غير المدعومة باحترام', 'الشجاعة أمام المعارضة', 'التوكل مع السعي', 'الصبر في الهجرة والمشقة', 'بناء إرث دائم حول التوحيد والخدمة'],
    },
    studyFocus: { en: 'Ask what evidence changes the argument, then explain the link rather than memorising names or isolated miracles.', ar: 'اسأل أي دليل يغيّر الحجة ثم اشرح العلاقة بدل حفظ الأسماء أو المعجزات منفصلة.' },
  },

  moses: {
    title: { en: 'Prophet Moses B1', ar: 'قصة النبي موسى B1' },
    purpose: {
      en: 'A B1 teaching companion for a long narrative of fear, oppression, protection, mistake and repentance, helping others, guidance, confrontation, and rescue. TYMM skills are tied directly to chapter evidence and language.',
      ar: 'دليل تدريس B1 لسرد طويل عن الخوف والظلم والحماية والخطأ والتوبة ومساعدة الآخرين والهداية والمواجهة والنجاة. ترتبط مهارات TYMM مباشرة بدليل الفصول ولغتها.',
    },
    approach: {
      en: 'Use the long story to practise tracking causes, choices, responses, and contrasts over time. Keep sensitive events factual and non-graphic. Learners explain how fear becomes oppression, how mistakes are followed by repair, and how different people respond to the same evidence.',
      ar: 'استخدم القصة الطويلة لتدريب تتبع الأسباب والاختيارات والاستجابات والمقارنات عبر الزمن. اعرض الأحداث الحساسة بصورة واقعية وغير تصويرية. يشرح المتعلم كيف يتحول الخوف إلى ظلم وكيف يتبع الخطأ إصلاح وكيف يستجيب أشخاص مختلفون للدليل نفسه.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B1: follow a long narrated sequence, warnings, reassurance, requests, commands, reported information, and changes in response.',
        reading: 'TYMM YDAB2 primary + CEFR B1: explain fear→action, mistake→repair, help→result, evidence→response, and oppression→rescue using chapter evidence.',
        speaking: 'TYMM YDAB3 supporting: compare responses or explain a turning point in short connected B1 speech.',
        writing: 'TYMM YDAB4 supporting: write 3–5 sentence cause/result, comparison, or turning-point explanations supported by the story.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B1: تتبع السرد الطويل والتحذير والطمأنة والطلبات والأوامر والمعلومات المنقولة وتغير الاستجابة.',
        reading: 'TYMM YDAB2 أساسي + CEFR B1: شرح الخوف←الفعل والخطأ←الإصلاح والمساعدة←النتيجة والدليل←الاستجابة والظلم←النجاة باستخدام دليل الفصل.',
        speaking: 'TYMM YDAB3 داعم: مقارنة الاستجابات أو شرح نقطة تحول في كلام B1 قصير مترابط.',
        writing: 'TYMM YDAB4 داعم: كتابة 3–5 جمل تشرح السبب والنتيجة أو المقارنة أو نقطة التحول بدليل من القصة.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: Simple Past and Past Progressive for narrative/background; because/so/as a result for cause; could/could not for past ability or possibility; modals for obligation/advice; reporting verbs and reported speech where characters relay warnings or information; passive voice for actions done to people or objects; Past Perfect when it clarifies earlier past events; and Second Conditional only as a limited B1 transfer tool, never as a forced story fact.',
      ar: 'TYMM YDDB1 داعم: الماضي البسيط والمستمر للسرد والخلفية، وروابط السبب والنتيجة، وcould/could not للقدرة أو الإمكان الماضي، والأفعال الناقصة للإلزام والنصيحة، وأفعال القول والكلام المنقول عند نقل التحذيرات أو المعلومات، والمبني للمجهول للأفعال الواقعة على الأشخاص أو الأشياء، والماضي التام لتوضيح حدث أسبق عند الحاجة، والشرط الثاني فقط أداة نقل محدودة لا حقيقة مفروضة على القصة.',
    },
    grammarSequence: {
      en: ['Ch1–3: cause/result, sequence, Past Simple/Past Progressive', 'Ch4–6: accidental action, regret, reporting and warning language', 'Ch7–9: helping, requests, modal meaning, change of setting', 'Ch10–13: reported speech, passive voice, evidence/response, Past Perfect where useful, rescue and reassurance'],
      ar: ['الفصول 1–3: السبب والنتيجة والتسلسل والماضي البسيط/المستمر', 'الفصول 4–6: الفعل غير المقصود والندم ولغة القول والتحذير', 'الفصول 7–9: المساعدة والطلبات ومعاني الأفعال الناقصة وتغير المكان', 'الفصول 10–13: الكلام المنقول والمبني للمجهول والدليل/الاستجابة والماضي التام عند الحاجة والنجاة والطمأنة'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: recycle vocabulary through the story’s relationships—oppression, protection, regret, forgiveness, guidance, companion, arrogant, signs, rescue, freedom—rather than treating words as a separate list.',
      ar: 'TYMM YDDB2 داعم: أعد استخدام المفردات عبر علاقات القصة مثل الظلم والحماية والندم والمغفرة والهداية والرفقة والكبر والآيات والنجاة والحرية بدل جعلها قائمة منفصلة.',
    },
    values: {
      en: ['Justice and responsible use of power', 'Trust while taking responsible action', 'Admitting and repairing mistakes', 'Helping people without status or reward', 'Courage supported by companionship', 'Human dignity, freedom, and resistance to oppression'],
      ar: ['العدل والاستخدام المسؤول للسلطة', 'التوكل مع العمل المسؤول', 'الاعتراف بالخطأ وإصلاحه', 'مساعدة الناس دون انتظار مكانة أو مكافأة', 'الشجاعة المدعومة بالصحبة', 'كرامة الإنسان والحرية ومقاومة الظلم'],
    },
    studyFocus: { en: 'Track a cause or warning across more than one event, then compare how different characters respond.', ar: 'تتبع سببًا أو تحذيرًا عبر أكثر من حدث ثم قارن استجابات الشخصيات المختلفة.' },
  },

  mecca: {
    title: { en: 'Mecca and Jahiliyyah B1', ar: 'مكة والجاهلية B1' },
    purpose: {
      en: 'A B1 social-history companion that uses TYMM skills to explain how environment, trade, tribes, status, belief, inequality, reform, and resistance interact in the Mecca narrative.',
      ar: 'دليل B1 للتاريخ الاجتماعي يستخدم مهارات TYMM لشرح تفاعل البيئة والتجارة والقبائل والمكانة والإيمان وعدم المساواة والإصلاح والمقاومة في قصة مكة.',
    },
    approach: {
      en: 'Teach historical relationships rather than a list of dates and names. Learners explain how a barren environment supports trade, how trade and tribal power affect inequality, how religious ideas connect with social order, and why reform can threaten established interests.',
      ar: 'درّس العلاقات التاريخية بدل قائمة تواريخ وأسماء. يشرح المتعلم كيف تدعم البيئة القاحلة التجارة وكيف تؤثر التجارة وقوة القبيلة في عدم المساواة وكيف ترتبط الأفكار الدينية بالنظام الاجتماعي ولماذا قد يهدد الإصلاح المصالح القائمة.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B1: follow historical narration, before/after contrasts, explanations of systems, and reported reactions to change.',
        reading: 'TYMM YDAB2 primary + CEFR B1: explain historical cause/result, compare groups and conditions, identify turning points, and infer why power groups resist change using text evidence.',
        speaking: 'TYMM YDAB3 supporting: explain a social contrast or cause/result chain in short evidence-based B1 speech.',
        writing: 'TYMM YDAB4 supporting: write 3–5 connected sentences explaining a historical relationship, not merely defining a term.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B1: تتبع السرد التاريخي ومقارنات قبل/بعد وشرح الأنظمة وردود الفعل المنقولة على التغير.',
        reading: 'TYMM YDAB2 أساسي + CEFR B1: شرح السبب والنتيجة التاريخيين ومقارنة الجماعات والظروف وتحديد نقاط التحول واستنتاج سبب مقاومة أصحاب القوة للتغير بدليل من النص.',
        speaking: 'TYMM YDAB3 داعم: شرح مقارنة اجتماعية أو سلسلة سبب ونتيجة في كلام B1 قصير قائم على الدليل.',
        writing: 'TYMM YDAB4 داعم: كتابة 3–5 جمل مترابطة تشرح علاقة تاريخية بدل تعريف مصطلح فقط.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: there was/were and narrative past for historical conditions; used to for repeated past practices where appropriate; past passive for institutions, construction, treatment, and rules; comparatives for social differences; because/therefore/as a result/while for historical relationships; reported speech for claims and reactions; Past Perfect to establish earlier conditions before later change; and conditional language for consequences only when the text supports it.',
      ar: 'TYMM YDDB1 داعم: there was/were والماضي للسياق التاريخي، وused to للعادات الماضية عند الملاءمة، والمبني للمجهول للمؤسسات والبناء والمعاملة والقواعد، والمقارنة للفروق الاجتماعية، وروابط السبب والنتيجة والتباين، والكلام المنقول للادعاءات وردود الفعل، والماضي التام لإظهار ما سبق تغيرًا لاحقًا، والشرط للنتائج عندما يدعمه النص.',
    },
    grammarSequence: {
      en: ['Ch1–3: there was/were, past conditions, Past Perfect for earlier settlement context', 'Ch4–7: cause/result, comparison, used to, past passive', 'Ch8–11: social systems, reporting language, consequence and contrast', 'Ch12–15: turning points, reported reaction, boycott/opposition, change and consequence'],
      ar: ['الفصول 1–3: there was/were والظروف الماضية والماضي التام للسياق الأسبق للاستقرار', 'الفصول 4–7: السبب والنتيجة والمقارنة وused to والمبني للمجهول', 'الفصول 8–11: الأنظمة الاجتماعية ولغة النقل والنتيجة والمقارنة', 'الفصول 12–15: نقاط التحول ورد الفعل المنقول والمقاطعة/المعارضة والتغير والنتيجة'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: prioritize social-history words that unlock relationships—Jahiliyyah, barren, caravan, pilgrimage, usury, prestige, monotheism, revelation, boycott, oppression, equality—and recycle them in causes and contrasts.',
      ar: 'TYMM YDDB2 داعم: أعط الأولوية لمفردات التاريخ الاجتماعي التي تفتح العلاقات مثل الجاهلية والقحولة والقافلة والحج والربا والمكانة والتوحيد والوحي والمقاطعة والظلم والمساواة وأعد استخدامها في الأسباب والمقارنات.',
    },
    values: {
      en: ['Human dignity across status and lineage', 'Justice in social and economic life', 'Protection of weak and marginalized people', 'Freedom of belief and rejection of coercive power', 'Honest trade and social responsibility', 'Equality as a challenge to inherited privilege'],
      ar: ['كرامة الإنسان مهما كانت المكانة والنسب', 'العدل في الحياة الاجتماعية والاقتصادية', 'حماية الضعفاء والمهمشين', 'حرية الإيمان ورفض السلطة القسرية', 'التجارة الصادقة والمسؤولية الاجتماعية', 'المساواة بوصفها تحديًا للامتياز الموروث'],
    },
    studyFocus: { en: 'Build historical chains: condition → cause → social result → response to change.', ar: 'ابنِ سلاسل تاريخية: ظرف ← سبب ← نتيجة اجتماعية ← استجابة للتغير.' },
  },

  yunusEmre: {
    title: { en: 'Yunus Emre B1', ar: 'يونس إمره B1' },
    purpose: {
      en: 'A B1 biography-and-context companion linking Yunus Emre’s language, education, Anatolian historical pressure, Sûfî ideas, poetry, and moral guidance through TYMM skills and evidence-based interpretation.',
      ar: 'دليل B1 للسيرة والسياق يربط لغة يونس إمره وتعليمه وضغوط تاريخ الأناضول والأفكار الصوفية والشعر والهداية الأخلاقية من خلال مهارات TYMM والتفسير القائم على الدليل.',
    },
    approach: {
      en: 'Keep symbolic and spiritual ideas at supported B1 depth. Learners should connect historical conditions with the need for meaning, explain why accessible poetry mattered, and translate ideas such as love, patience, humility, and moral self-control into clear text-supported relationships—not abstract theological analysis.',
      ar: 'حافظ على الأفكار الرمزية والروحية في عمق B1 مدعوم. يربط المتعلم الظروف التاريخية بالحاجة إلى المعنى ويشرح أهمية الشعر السهل ويحول أفكار المحبة والصبر والتواضع وضبط النفس إلى علاقات واضحة مدعومة بالنص لا تحليل لاهوتي مجرد.',
    },
    skills: {
      en: {
        listening: 'TYMM YDAB1 supporting + CEFR B1: follow biographical and historical narration, explanations of institutions, poetry themes, and changes from context to response.',
        reading: 'TYMM YDAB2 primary + CEFR B1: connect historical cause/result, compare educational/social roles, interpret clearly signposted ideas, and explain how values respond to context.',
        speaking: 'TYMM YDAB3 supporting: explain one historical-to-moral connection or compare two ideas in short evidence-based B1 speech.',
        writing: 'TYMM YDAB4 supporting: write 3–5 sentence responses linking a chapter idea with its evidence and significance.',
      },
      ar: {
        listening: 'TYMM YDAB1 داعم + CEFR B1: تتبع السرد السيري والتاريخي وشرح المؤسسات وموضوعات الشعر والانتقال من السياق إلى الاستجابة.',
        reading: 'TYMM YDAB2 أساسي + CEFR B1: ربط السبب والنتيجة التاريخيين ومقارنة الأدوار التعليمية والاجتماعية وتفسير الأفكار الواضحة وشرح استجابة القيم للسياق.',
        speaking: 'TYMM YDAB3 داعم: شرح صلة واحدة بين التاريخ والقيمة أو مقارنة فكرتين في كلام B1 قصير قائم على الدليل.',
        writing: 'TYMM YDAB4 داعم: كتابة 3–5 جمل تربط فكرة الفصل بدليلها وأهميتها.',
      },
    },
    grammar: {
      en: 'TYMM YDDB1 supporting: relative clauses for defining people and institutions; Simple Past for biography and historical events; Past Perfect when one past event must be placed before another; passive voice for historical processes; because/while/therefore for context and consequence; reporting verbs for Yunus’s ideas; modals for advice and moral recommendation; and conditional language only for clear B1 transfer tasks. Grammar remains tied to the chapter’s actual communicative job.',
      ar: 'TYMM YDDB1 داعم: الجمل الموصولة لتعريف الأشخاص والمؤسسات، والماضي البسيط للسيرة والأحداث التاريخية، والماضي التام عندما يلزم وضع حدث قبل آخر، والمبني للمجهول للعمليات التاريخية، وروابط السياق والنتيجة، وأفعال القول لنقل أفكار يونس، والأفعال الناقصة للنصيحة الأخلاقية، والشرط لمهام نقل B1 الواضحة فقط. تبقى القواعد مرتبطة بوظيفة الفصل.',
    },
    grammarSequence: {
      en: ['Ch1–3: relative clauses, cause/result, biography and institutions', 'Ch4–6: historical past, Past Perfect and passive where useful, consequence', 'Ch7–10: reporting ideas, comparison, because/therefore, definition and interpretation', 'Ch11–13: modals for advice, consequence, contrast, moral recommendation and legacy'],
      ar: ['الفصول 1–3: الجمل الموصولة والسبب والنتيجة والسيرة والمؤسسات', 'الفصول 4–6: الماضي التاريخي والماضي التام والمبني للمجهول عند الحاجة والنتيجة', 'الفصول 7–10: نقل الأفكار والمقارنة وروابط السبب وتعريف الأفكار وتفسيرها', 'الفصول 11–13: الأفعال الناقصة للنصيحة والنتيجة والمقارنة والتوجيه الأخلاقي والإرث'],
    },
    vocabulary: {
      en: 'TYMM YDDB2 supporting: build a working vocabulary around mysticism, tekke/dervish, destruction and comfort, harmony, humility, generosity, patience, greed, rage, and arrogance, always tied to historical or moral context.',
      ar: 'TYMM YDDB2 داعم: ابنِ مفردات عملية حول التصوف والتكية والدرويش والدمار والراحة والانسجام والتواضع والسخاء والصبر والطمع والغضب والكبر واربطها دائمًا بالسياق التاريخي أو الأخلاقي.',
    },
    values: {
      en: ['Accessible language in service of community', 'Patience and resilience in unstable times', 'Humility and disciplined self-development', 'Love and harmony rather than division', 'Using art and poetry for moral guidance', 'Controlling rage, arrogance, greed, and harmful speech'],
      ar: ['استخدام اللغة السهلة في خدمة المجتمع', 'الصبر والقدرة على الصمود في الأوقات المضطربة', 'التواضع وتهذيب النفس', 'المحبة والانسجام بدل الانقسام', 'استخدام الفن والشعر للهداية الأخلاقية', 'ضبط الغضب والكبر والطمع والكلام المؤذي'],
    },
    studyFocus: { en: 'Connect historical context to Yunus Emre’s response, then explain one value or literary choice with evidence.', ar: 'اربط السياق التاريخي باستجابة يونس إمره ثم اشرح قيمة أو اختيارًا أدبيًا واحدًا بدليل.' },
  },
};

const rubricRows = (language: BlueprintLanguage) => language === 'en'
  ? [
      { criterion: 'Story / context understanding', excellent: 'Explains main ideas, important details, and key relationships accurately.', good: 'Explains the main idea and most important relationships with one minor gap.', developing: 'Retells isolated facts without showing the main relationship.' },
      { criterion: 'Evidence use', excellent: 'Selects one or two relevant chapter details and explains how they support the claim.', good: 'Selects relevant evidence but needs a prompt to explain the link.', developing: 'Uses unrelated detail, outside information, or unsupported interpretation.' },
      { criterion: 'Cause, comparison & inference', excellent: 'Explains cause/result, comparison, motivation, or a simple inference accurately when required.', good: 'Shows the relationship with a small prompt or one minor error.', developing: 'Names details without connecting them.' },
      { criterion: 'B1 language use', excellent: 'Uses connected B1 sentences and chapter-appropriate grammar; errors do not block meaning.', good: 'Communicates clearly with some support and manageable errors.', developing: 'Depends on copying or errors frequently block the relationship being explained.' },
      { criterion: 'Retrieval & transfer', excellent: 'Recalls key ideas after a delay and applies them accurately in a short new response.', good: 'Recalls the idea with a prompt and gives a simple supported application.', developing: 'Needs repeated rereading or cannot use the idea beyond copying.' },
    ]
  : [
      { criterion: 'فهم القصة / السياق', excellent: 'يشرح الأفكار الرئيسة والتفاصيل المهمة والعلاقات الأساسية بدقة.', good: 'يشرح الفكرة الرئيسة ومعظم العلاقات المهمة مع نقص بسيط.', developing: 'يعيد سرد معلومات منفصلة دون إظهار العلاقة الرئيسة.' },
      { criterion: 'استخدام الدليل', excellent: 'يختار تفصيلًا أو تفصيلين مناسبين ويشرح كيف يدعمان الادعاء.', good: 'يختار دليلًا مناسبًا لكنه يحتاج إلى تلميح لشرح العلاقة.', developing: 'يستخدم تفصيلًا غير مرتبط أو معلومة خارجية أو تفسيرًا غير مدعوم.' },
      { criterion: 'السبب والمقارنة والاستنتاج', excellent: 'يشرح السبب والنتيجة أو المقارنة أو الدافع أو الاستنتاج البسيط بدقة عند الحاجة.', good: 'يظهر العلاقة بعد تلميح بسيط أو مع خطأ صغير.', developing: 'يسمي التفاصيل دون ربطها.' },
      { criterion: 'استخدام لغة B1', excellent: 'يستخدم جمل B1 مترابطة وتراكيب مناسبة للفصل مع أخطاء لا تعيق المعنى.', good: 'يوصل المعنى بوضوح مع بعض الدعم وأخطاء محدودة.', developing: 'يعتمد على النسخ أو تعيق الأخطاء شرح العلاقة كثيرًا.' },
      { criterion: 'الاسترجاع ونقل التعلم', excellent: 'يسترجع الأفكار بعد فترة ويستخدمها بدقة في استجابة قصيرة جديدة.', good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا مدعومًا.', developing: 'يحتاج إلى إعادة قراءة متكررة أو لا يستطيع استخدام الفكرة خارج النسخ.' },
    ];

export const buildB1GoldTeacherGuideMetadata = (
  base: TeacherGuideMetadata,
  story: B1GoldStory,
  language: BlueprintLanguage,
  chapterCount: number,
): TeacherGuideMetadata => {
  const p = profiles[story];
  const isAr = language === 'ar';
  return {
    ...base,
    title: isAr ? `${p.title.ar} — دليل المعلم` : `${p.title.en} — Teacher Guide`,
    level: 'B1',
    targetLearners: isAr
      ? 'متعلمات ومتعلمو اللغة الإنجليزية عند مستوى CEFR B1. يمكن تكييف السرعة والدعم مع العمر دون تحويل B1 إلى حفظ بسيط أو تحليل B2 مجرد.'
      : 'EFL learners working at CEFR B1. Pace and scaffolding may change with age, but B1 should remain relationship-focused rather than becoming A2 recall or B2 abstract analysis.',
    purpose: p.purpose[language],
    approachDesc: p.approach[language],
    assessmentEvidence: isAr
      ? `تُجمع أدلة التعلم عبر تحد سريع في كل فصل من الفصول الـ${chapterCount}، واختبار فهم من 8 أسئلة، وتحدي مفردات من 10 كلمات، ومراجعة استرجاع من أربعة أجزاء تتضمن لعبة من 8 أسئلة، وتحد نهائي من 10 أسئلة، إلى جانب استجابات قصيرة قائمة على الدليل.`
      : `Learning evidence comes from one Quick Challenge in each of the ${chapterCount} chapters, an 8-question Knowledge Check, a 10-word Vocabulary Challenge, a four-part Retrieval Review with an 8-question game, a 10-question Final Challenge, and short evidence-based responses.`,
    assessmentOverview: {
      formative: isAr
        ? ['Quick Challenge في كل فصل', 'تحديد دليل من النص', 'شرح السبب/المقارنة/الدافع', 'بطاقة خروج', 'تصحيح الإجابة بعد التغذية الراجعة', 'استجابة B1 من 3–5 جمل']
        : ['Quick Challenge in every chapter', 'Text-evidence check', 'Cause/comparison/motivation explanation', 'Exit ticket', 'Correction after feedback', '3–5 sentence B1 response'],
      summative: isAr
        ? ['Knowledge Check — 8', 'Vocabulary Challenge — 10', 'Retrieval Review — أربعة أجزاء / 8 أسئلة', 'Final Challenge — 10']
        : ['Knowledge Check — 8', 'Vocabulary Challenge — 10', 'Retrieval Review — four parts / 8 questions', 'Final Challenge — 10'],
    },
    readingFramework: {
      before: isAr
        ? 'فعّل فقط السياق اللازم للفصل وحدد سؤال قراءة واحدًا يتعلق بالسبب أو المقارنة أو نقطة التحول.'
        : 'Activate only the context needed for the chapter and set one reading purpose around a cause, comparison, motivation, or turning point.',
      during: isAr
        ? `اقرأ مرة للفكرة الرئيسة ثم أعد القراءة وفق هذا التركيز: ${p.studyFocus.ar} افصل بين ما يقوله النص وما تستنتجه منه.`
        : `Read once for the main idea, then reread with this focus: ${p.studyFocus.en} Keep what the text states separate from what you infer.`,
      after: isAr
        ? 'انتقل من الدليل إلى استجابة قصيرة: ادعاء ← دليل ← تفسير. إذا كان الدليل لا يدعم التفسير فعدّل التفسير لا القصة.'
        : 'Move from evidence to a short claim → evidence → explanation response. If the evidence does not support the interpretation, revise the interpretation rather than the story.',
    },
    skillsFocus: p.skills[language],
    grammarApproach: p.grammar[language],
    grammarSequence: p.grammarSequence[language],
    vocabularyApproach: p.vocabulary[language],
    valuesFocus: p.values[language],
    languageFocus: p.grammarSequence[language],
    differentiationNotes: isAr
      ? 'يقلل الدعم العبء اللغوي لا ناتج التعلم: استخدم دليلًا محددًا وإطار جملة. ويزيد الإثراء عدد الروابط أو جودة الدليل لا التجريد أو المعلومات الخارجية.'
      : 'Support reduces language load, not the learning outcome: mark evidence and use a sentence frame. Enrichment adds a second relationship or stronger evidence, not abstract theory or outside facts.',
    implementationPlans: {
      optionA: {
        title: isAr ? 'فصل واحد — حصة B1 واحدة' : 'One Chapter — One B1 Lesson',
        steps: isAr
          ? [
              { time: '5–7 دقائق', activity: 'العنوان/الصورة + سؤال قراءة واحد دون تقديم الإجابة.' },
              { time: '12–15 دقيقة', activity: 'قراءة/استماع للفكرة الرئيسة ثم قراءة ثانية لتحديد دليلين.' },
              { time: '10–12 دقيقة', activity: 'Quick Challenge ثم شرح العلاقة: سبب أو مقارنة أو دافع أو نقطة تحول.' },
              { time: '8–10 دقائق', activity: 'لغة الفصل في السياق ثم استجابة 3–5 جمل وبطاقة خروج.' },
            ]
          : [
              { time: '5–7 min', activity: 'Use the title/image and set one reading question without pre-teaching the answer.' },
              { time: '12–15 min', activity: 'Read/listen for the main idea, then reread to locate two useful pieces of evidence.' },
              { time: '10–12 min', activity: 'Complete the Quick Challenge and explain the target relationship: cause, comparison, motivation, or turning point.' },
              { time: '8–10 min', activity: 'Reuse chapter language in context, then produce a 3–5 sentence response and exit ticket.' },
            ],
      },
      optionB: {
        title: isAr ? 'دورة B1 من مرحلتين' : 'Two-Pass B1 Cycle',
        lessons: isAr
          ? [
              { title: 'المرحلة 1 — المعنى والدليل', description: 'اقرأ/استمع للفكرة الرئيسة، حدد العلاقة المستهدفة، واجمع دليلين ثم أكمل التحدي السريع.' },
              { title: 'المرحلة 2 — اللغة والاسترجاع والتفسير', description: 'راجع المفردات والتراكيب التي يستخدمها الفصل فعلًا، استرجع الفكرة دون النظر، ثم اكتب أو قل استجابة ادعاء ← دليل ← تفسير.' },
            ]
          : [
              { title: 'Pass 1 — Meaning & Evidence', description: 'Read/listen for the main idea, identify the target relationship, collect two pieces of evidence, and complete the Quick Challenge.' },
              { title: 'Pass 2 — Language, Retrieval & Explanation', description: 'Revisit the vocabulary and grammar actually used by the chapter, retrieve the relationship without looking, then produce a claim → evidence → explanation response.' },
            ],
      },
    },
    rubricTitle: isAr ? 'معايير أدلة التعلم — B1' : 'B1 Learning Evidence Rubric',
    rubricRows: rubricRows(language),
    assessmentRubric: rubricRows(language),
  };
};

export const buildB1GoldStudentGuideSections = (
  story: B1GoldStory,
  language: BlueprintLanguage,
): StudentGuideSection[] => {
  const p = profiles[story];
  return language === 'en'
    ? [
        { title: 'Read for Relationships', icon: 'Target', text: p.studyFocus.en, points: ['Read once for the main idea.', 'On the second reading, look for two details that explain the relationship.'] },
        { title: 'Separate Evidence and Inference', icon: 'Eye', text: 'B1 allows simple inference, but the story must support it.', points: ['Mark what the chapter states.', 'Write your inference separately and check which detail supports it.'] },
        { title: 'Use Grammar to Explain Meaning', icon: 'GitBranch', text: p.grammar.en, points: ['Notice the structure inside the chapter first.', 'Reuse it only when it helps explain the story relationship.'] },
        { title: 'Learn Vocabulary in Context', icon: 'Stars', text: p.vocabulary.en, points: ['Guess from context before opening the note.', 'Reuse selected words in your own evidence-based sentence.'] },
        { title: 'Repair, Don’t Reread Everything', icon: 'Lightbulb', text: 'Wrong answers should send you back to one relationship or evidence point.', points: ['Read the retry feedback.', 'Find the named evidence and explain why your first answer failed.'] },
        { title: 'Retrieve and Explain', icon: 'PenTool', text: 'Finish with a 3–5 sentence claim → evidence → explanation response.', points: ['Try from memory first.', 'Use one or two accurate details; do not add outside facts.'] },
      ]
    : [
        { title: 'اقرأ للعلاقات', icon: 'Target', text: p.studyFocus.ar, points: ['اقرأ مرة للفكرة الرئيسة.', 'في القراءة الثانية ابحث عن تفصيلين يشرحان العلاقة.'] },
        { title: 'افصل الدليل عن الاستنتاج', icon: 'Eye', text: 'يسمح B1 باستنتاج بسيط لكن يجب أن تدعمه القصة.', points: ['حدد ما يقوله الفصل صراحة.', 'اكتب استنتاجك بصورة منفصلة وحدد الدليل الذي يدعمه.'] },
        { title: 'استخدم القواعد لشرح المعنى', icon: 'GitBranch', text: p.grammar.ar, points: ['لاحظ التركيب داخل الفصل أولًا.', 'أعد استخدامه فقط عندما يساعد على شرح علاقة في القصة.'] },
        { title: 'تعلم المفردات في السياق', icon: 'Stars', text: p.vocabulary.ar, points: ['خمّن المعنى من السياق قبل فتح الملاحظة.', 'استخدم الكلمات المختارة في جملة جديدة قائمة على الدليل.'] },
        { title: 'صحح ولا تعِد قراءة كل شيء', icon: 'Lightbulb', text: 'الإجابة الخاطئة تعيدك إلى علاقة أو دليل محدد لا إلى الكتاب كله.', points: ['اقرأ تغذية إعادة المحاولة.', 'اعثر على الدليل المحدد واشرح لماذا لم تنجح إجابتك الأولى.'] },
        { title: 'استرجع واشرح', icon: 'PenTool', text: 'اختم بـ3–5 جمل على نمط ادعاء ← دليل ← تفسير.', points: ['حاول من الذاكرة أولًا.', 'استخدم تفصيلًا أو تفصيلين دقيقين ولا تضف معلومات خارجية.'] },
      ];
};

export const buildB1GoldStudentGuideMetadata = (
  story: B1GoldStory,
  language: BlueprintLanguage,
): StudentGuideMetadata => {
  const p = profiles[story];
  return {
    title: language === 'en' ? `${p.title.en} — B1 Self-Study Guide` : `${p.title.ar} — دليل الدراسة الذاتية B1`,
    level: 'B1',
    language: language === 'en' ? 'English' : 'العربية',
    whoIsThisFor: language === 'en'
      ? 'For CEFR B1 learners ready to move beyond direct recall into cause/result, comparison, motivation, sequence, and supported inference.'
      : 'لمتعلمي CEFR B1 المستعدين للانتقال من الاسترجاع المباشر إلى السبب والنتيجة والمقارنة والدافع والتسلسل والاستنتاج المدعوم.',
    estimatedStudyTime: language === 'en' ? '35–40 minutes per chapter' : '35–40 دقيقة لكل فصل',
    learningGoals: language === 'en'
      ? ['Understand the chapter relationship', 'Find one or two pieces of evidence', 'Use B1 language in context', 'Repair a misconception', 'Retrieve and explain in 3–5 sentences']
      : ['فهم علاقة الفصل', 'العثور على دليل أو دليلين', 'استخدام لغة B1 في السياق', 'تصحيح سوء الفهم', 'الاسترجاع والشرح في 3–5 جمل'],
  };
};

export const buildB1GoldStudentGuideText = (
  blueprint: LearningBlueprint,
  story: B1GoldStory,
  language: BlueprintLanguage,
): string => {
  const p = profiles[story];
  const chapterBlocks = blueprint.chapters.map(chapter => {
    const guide = chapter.selfStudyGuide[language];
    const goals = chapter.objectives.map((objective, index) => `${index + 1}. ${objective[language]}`).join('\n');
    const prompts = guide.discussionPoints.map(point => `- ${point}`).join('\n');
    if (language === 'en') {
      return `## Chapter ${chapter.chapterId}\n\n### Goals\n${goals}\n\n### Language to Notice\n${guide.grammarFocus || 'Use the chapter language to explain the relationship clearly.'}\n\n### Study Route\n1. Read once for the main idea.\n2. Reread and mark two useful details.\n3. Complete the Quick Challenge.\n4. If wrong, use the retry feedback to repair only the confused relationship.\n5. Answer one prompt in 3–5 sentences: claim → evidence → explanation.\n\n### Prompts\n${prompts}`;
    }
    return `## الفصل ${chapter.chapterId}\n\n### الأهداف\n${goals}\n\n### اللغة التي تلاحظها\n${guide.grammarFocus || 'استخدم لغة الفصل لشرح العلاقة بوضوح.'}\n\n### مسار الدراسة\n1. اقرأ مرة للفكرة الرئيسة.\n2. أعد القراءة وحدد تفصيلين مفيدين.\n3. نفذ التحدي السريع.\n4. إذا أخطأت فاستخدم التغذية الراجعة لتصحيح العلاقة التي اختلطت عليك فقط.\n5. أجب عن سؤال واحد في 3–5 جمل: ادعاء ← دليل ← تفسير.\n\n### أسئلة\n${prompts}`;
  }).join('\n\n');

  return language === 'en'
    ? `# ${p.title.en} — B1 Self-Study Guide\n\nB1 does not mean abstract analysis. It means explaining clear relationships with evidence. ${p.studyFocus.en}\n\n## TYMM / CEFR Focus\n${p.skills.en.reading}\n\n${p.grammar.en}\n\n${chapterBlocks}`
    : `# ${p.title.ar} — دليل الدراسة الذاتية B1\n\nلا يعني B1 التحليل المجرد؛ بل شرح العلاقات الواضحة بدليل. ${p.studyFocus.ar}\n\n## تركيز TYMM / CEFR\n${p.skills.ar.reading}\n\n${p.grammar.ar}\n\n${chapterBlocks}`;
};
