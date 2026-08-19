import type { Exercise, QuizQuestion } from '../types';
import type { BlueprintLanguage } from './learningBlueprint';
import type { B2GoldStory } from './b2GoldPedagogy';

type Localized<T> = { en: T; ar: T };
type QuizSpec = {
  question: Localized<string>;
  options: Localized<[string, string, string]>;
  correct: number;
  hint: Localized<string>;
};

type ReviewProfile = {
  sequenceTitle: Localized<string>;
  sequence: Localized<string[]>;
  matchingTitle: Localized<string>;
  matching: Localized<Array<[string, string]>>;
  reflectionTitle: Localized<string>;
  reflectionQuestion: Localized<string>;
  reflectionPrompts: Localized<string[]>;
  quizTitle: Localized<string>;
  quiz: QuizSpec[];
};

const profiles: Record<B2GoldStory, ReviewProfile> = {
  adam: {
    sequenceTitle: { en: 'Creation, Choice, and Human Responsibility', ar: 'الخلق والاختيار ومسؤولية الإنسان' },
    sequence: {
      en: [
        'Adam is created and human beings are connected with a shared earthly origin.',
        'Adam is given knowledge, and the story links knowledge with a special human responsibility.',
        'Iblis judges Adam through material origin and refuses the command because of arrogance.',
        'Adam and Hawwa receive guidance in Paradise, but Iblis uses deception against the clear warning.',
        'Adam admits the mistake, seeks forgiveness, and begins life on Earth with responsibility.',
        'The story of Habil and Qabil develops the consequences of sincerity, jealousy, restraint, and uncontrolled anger.',
      ],
      ar: [
        'خُلق آدم وربطت القصة البشر بأصل أرضي مشترك.',
        'أُعطي آدم العلم وربطت القصة المعرفة بمسؤولية إنسانية خاصة.',
        'حكم إبليس على آدم من خلال الأصل المادي ورفض الأمر بسبب الكبر.',
        'تلقى آدم وحواء الهداية في الجنة لكن إبليس استخدم الخداع أمام التحذير الواضح.',
        'اعترف آدم بالخطأ وطلب المغفرة وبدأت الحياة في الأرض مع المسؤولية.',
        'تطور قصة هابيل وقابيل نتائج الإخلاص والحسد وضبط النفس والغضب غير المنضبط.',
      ],
    },
    matchingTitle: { en: 'Evidence and Meaning', ar: 'الدليل والمعنى' },
    matching: {
      en: [
        ['Shared earthly origin', 'equality rather than superiority by colour or origin'],
        ['Adam receives knowledge', 'knowledge joined with responsibility'],
        ['Iblis compares fire with soil', 'arrogance built on material origin'],
        ['Adam admits the mistake', 'repentance and responsibility instead of self-justification'],
        ['Habil gives his best and refuses violence', 'sincerity and restraint'],
      ],
      ar: [
        ['الأصل الأرضي المشترك', 'المساواة بدل التفاضل باللون أو الأصل'],
        ['يُعطى آدم العلم', 'العلم مرتبط بالمسؤولية'],
        ['يقارن إبليس النار بالتراب', 'كبر قائم على الأصل المادي'],
        ['يعترف آدم بالخطأ', 'التوبة وتحمل المسؤولية بدل تبرير النفس'],
        ['يقدم هابيل أفضل ما عنده ويرفض العنف', 'الإخلاص وضبط النفس'],
      ],
    },
    reflectionTitle: { en: 'Responsibility after Knowledge and Choice', ar: 'المسؤولية بعد العلم والاختيار' },
    reflectionQuestion: {
      en: 'How does the book contrast knowledge or guidance used responsibly with pride or desire that ignores clear limits?',
      ar: 'كيف يقارن الكتاب بين العلم أو الهداية عندما يُستخدمان بمسؤولية وبين الكبر أو الرغبة التي تتجاهل الحدود الواضحة؟',
    },
    reflectionPrompts: {
      en: [
        'Use one detail about Adam’s knowledge or repentance and one about Iblis’s refusal.',
        'How does the Paradise episode connect warning, deception, choice, and consequence?',
        'How does the Habil–Qabil story develop the earlier theme of responsibility for choices?',
      ],
      ar: [
        'استخدم تفصيلًا عن علم آدم أو توبته وتفصيلًا عن رفض إبليس.',
        'كيف يربط مشهد الجنة التحذير والخداع والاختيار والنتيجة؟',
        'كيف تطور قصة هابيل وقابيل موضوع المسؤولية عن الاختيارات الذي ظهر سابقًا؟',
      ],
    },
    quizTitle: { en: 'Adam B2 Synthesis Check', ar: 'مراجعة تركيب قصة آدم B2' },
    quiz: [
      {
        question: { en: 'How does the book use the shared origin of human beings?', ar: 'كيف يستخدم الكتاب الأصل المشترك للبشر؟' },
        options: {
          en: ['To reject superiority based simply on colour or material origin', 'To divide humanity into separate creators', 'To argue that physical origin is the only measure of value'],
          ar: ['لرفض التفاضل القائم فقط على اللون أو الأصل المادي', 'لتقسيم البشر بين خالقين مختلفين', 'للقول إن الأصل الجسدي هو المقياس الوحيد للقيمة'],
        },
        correct: 0,
        hint: { en: 'Connect common soil with the chapter’s statement about superiority.', ar: 'اربط التراب المشترك بعبارة الفصل عن التفاضل.' },
      },
      {
        question: { en: 'What larger idea is developed through Adam being taught knowledge?', ar: 'ما الفكرة الأوسع التي تتطور من خلال تعليم آدم العلم؟' },
        options: {
          en: ['Human knowledge is connected with responsibility and a distinct role', 'Knowledge removes the need for moral choices', 'Knowledge is presented only as memorising names with no wider meaning'],
          ar: ['يرتبط علم الإنسان بالمسؤولية ودور مميز', 'يلغي العلم الحاجة إلى الاختيار الأخلاقي', 'يُعرض العلم فقط كحفظ أسماء بلا معنى أوسع'],
        },
        correct: 0,
        hint: { en: 'Use the chapters that connect knowledge with human capacities and role.', ar: 'استخدم الفصول التي تربط العلم بقدرات الإنسان ودوره.' },
      },
      {
        question: { en: 'Why is Iblis’s comparison of fire and soil important?', ar: 'لماذا تعد مقارنة إبليس بين النار والتراب مهمة؟' },
        options: {
          en: ['It shows how material origin becomes the basis of an arrogant judgment', 'It proves the story values fire above all other qualities', 'It shows Adam accepted the same judgment'],
          ar: ['تبين كيف يصبح الأصل المادي أساسًا لحكم متكبر', 'تثبت أن القصة تفضل النار على كل الصفات الأخرى', 'تبين أن آدم قبل الحكم نفسه'],
        },
        correct: 0,
        hint: { en: 'Compare Iblis’s reasoning with the book’s earlier equality theme.', ar: 'قارن استدلال إبليس بموضوع المساواة السابق في الكتاب.' },
      },
      {
        question: { en: 'What makes the warning in Paradise important to the later mistake?', ar: 'ما الذي يجعل التحذير في الجنة مهمًا للخطأ اللاحق؟' },
        options: {
          en: ['The limit was clear before Iblis tried to undermine it through deception', 'No instruction had been given before the mistake', 'The warning said every tree was forbidden'],
          ar: ['كان الحد واضحًا قبل أن يحاول إبليس تقويضه بالخداع', 'لم يُعط أي توجيه قبل الخطأ', 'كان التحذير يحرم جميع الأشجار'],
        },
        correct: 0,
        hint: { en: 'Link guidance before the event with deception during the event.', ar: 'اربط الهداية قبل الحدث بالخداع أثناءه.' },
      },
      {
        question: { en: 'Which contrast best separates Adam’s response from Iblis’s?', ar: 'أي مقارنة تميز أفضل بين استجابة آدم واستجابة إبليس؟' },
        options: {
          en: ['Adam accepts responsibility and seeks forgiveness, while Iblis continues self-justification', 'Adam refuses correction while Iblis immediately repents', 'Both respond to error in exactly the same way'],
          ar: ['يتحمل آدم المسؤولية ويطلب المغفرة بينما يستمر إبليس في تبرير نفسه', 'يرفض آدم التصحيح بينما يتوب إبليس فورًا', 'يستجيب الاثنان للخطأ بالطريقة نفسها تمامًا'],
        },
        correct: 0,
        hint: { en: 'Compare what happens after each disobedient act.', ar: 'قارن ما يحدث بعد كل فعل من العصيان.' },
      },
      {
        question: { en: 'How does earthly life continue an earlier theme in the book?', ar: 'كيف تواصل الحياة الأرضية موضوعًا ظهر سابقًا في الكتاب؟' },
        options: {
          en: ['It becomes the setting where responsibility, guidance, family, and choice are lived out', 'It removes all earlier responsibility', 'It is presented as unrelated to Adam’s earlier role'],
          ar: ['تصبح مجالًا لممارسة المسؤولية والهداية والأسرة والاختيار', 'تلغي كل المسؤولية السابقة', 'تُعرض بلا علاقة بدور آدم السابق'],
        },
        correct: 0,
        hint: { en: 'Connect Adam’s role with later human life.', ar: 'اربط دور آدم بالحياة الإنسانية اللاحقة.' },
      },
      {
        question: { en: 'What does the contrast between the two offerings mainly show?', ar: 'ماذا تبين المقارنة بين القربانين أساسًا؟' },
        options: {
          en: ['The quality of the offering reflects sincerity and effort, not simply occupation or status', 'Only the physical size of a gift matters', 'A person’s job automatically decides moral value'],
          ar: ['تعكس جودة القربان الإخلاص والجهد لا المهنة أو المكانة وحدهما', 'الحجم المادي للهدية هو المهم فقط', 'تحدد المهنة القيمة الأخلاقية تلقائيًا'],
        },
        correct: 0,
        hint: { en: 'Compare what each brother chose to give.', ar: 'قارن ما اختار كل أخ أن يقدمه.' },
      },
      {
        question: { en: 'How does the Qabil episode complete the book’s responsibility theme?', ar: 'كيف يكمل مشهد قابيل موضوع المسؤولية في الكتاب؟' },
        options: {
          en: ['Jealousy and uncontrolled anger lead to consequences that cannot simply be undone', 'Violence is shown as a successful way to repair jealousy', 'The raven removes responsibility for Qabil’s choice'],
          ar: ['يقود الحسد والغضب غير المنضبط إلى نتائج لا يمكن التراجع عنها ببساطة', 'يُعرض العنف وسيلة ناجحة لإصلاح الحسد', 'يزيل الغراب مسؤولية قابيل عن اختياره'],
        },
        correct: 0,
        hint: { en: 'Connect emotion, action, regret, and consequence.', ar: 'اربط المشاعر بالفعل والندم والنتيجة.' },
      },
    ],
  },

  abraham: {
    sequenceTitle: { en: 'Reasoning, Trust, and Legacy', ar: 'الاستدلال والتوكل والإرث' },
    sequence: {
      en: [
        'Abraham grows up in an idol-worshipping environment and questions the power of created objects.',
        'He observes the star, moon, and sun and rejects changing created things as the true Creator.',
        'He challenges his father and society, then exposes the idols’ powerlessness through the temple episode.',
        'He is protected from the great fire and later challenges Nimrod’s claim to power.',
        'Migration and family decisions extend the story beyond Babylon and test trust through action.',
        'The later story connects Hagar, Ishmael, Zamzam, the Ka’ba, pilgrimage, and Abraham’s continuing legacy.',
      ],
      ar: [
        'نشأ إبراهيم في بيئة تعبد الأصنام وتساءل عن قدرة الأشياء المخلوقة.',
        'تأمل النجم والقمر والشمس ورفض أن يكون المخلوق المتغير هو الخالق الحقيقي.',
        'واجه والده ومجتمعه ثم كشف عجز الأصنام في مشهد المعبد.',
        'حُمي من النار الكبرى ثم تحدى ادعاء نمرود للقدرة.',
        'وسعت الهجرة وقرارات الأسرة القصة خارج بابل واختبرت التوكل من خلال العمل.',
        'ربطت الفصول اللاحقة هاجر وإسماعيل وزمزم والكعبة والحج بإرث إبراهيم المستمر.',
      ],
    },
    matchingTitle: { en: 'Argument, Event, and What It Shows', ar: 'الحجة والحدث وما يدل عليه' },
    matching: {
      en: [
        ['A star, moon, or sun sets', 'a changing creation cannot be the eternal Creator'],
        ['Broken idols cannot answer', 'the temple argument exposes their powerlessness'],
        ['Abraham remains calm before the fire', 'trust is shown together with steadfast action'],
        ['Nimrod cannot reverse the sun’s course', 'human political power has clear limits'],
        ['Migration and later family duties', 'faith is followed by movement, responsibility, and service'],
      ],
      ar: [
        ['يغيب النجم أو القمر أو الشمس', 'المخلوق المتغير لا يمكن أن يكون الخالق الأزلي'],
        ['لا تستطيع الأصنام المحطمة الإجابة', 'تكشف حجة المعبد عجزها'],
        ['يبقى إبراهيم هادئًا أمام النار', 'يظهر التوكل مع الثبات والعمل'],
        ['لا يستطيع نمرود عكس مسار الشمس', 'للسلطة البشرية السياسية حدود واضحة'],
        ['الهجرة ومسؤوليات الأسرة اللاحقة', 'يتبع الإيمان حركة ومسؤولية وخدمة'],
      ],
    },
    reflectionTitle: { en: 'From Observation to Committed Action', ar: 'من الملاحظة إلى العمل الملتزم' },
    reflectionQuestion: {
      en: 'How does Abraham’s story move from questioning and observation to public action, trust, and a lasting legacy?',
      ar: 'كيف تنتقل قصة إبراهيم من التساؤل والملاحظة إلى العمل العلني والتوكل والإرث الدائم؟',
    },
    reflectionPrompts: {
      en: [
        'Use one early reasoning episode and one later action.',
        'Where does the story show trust without passivity?',
        'If a historical detail is introduced with uncertainty, how should your answer preserve that uncertainty?',
      ],
      ar: [
        'استخدم مشهدًا مبكرًا للاستدلال وفعلًا لاحقًا.',
        'أين تُظهر القصة التوكل دون السلبية؟',
        'إذا قُدمت معلومة تاريخية بدرجة من عدم اليقين، كيف تحافظ إجابتك على ذلك؟',
      ],
    },
    quizTitle: { en: 'Abraham B2 Synthesis Check', ar: 'مراجعة تركيب قصة إبراهيم B2' },
    quiz: [
      {
        question: { en: 'Why are the star, moon, and sun important to Abraham’s reasoning?', ar: 'لماذا تعد النجمة والقمر والشمس مهمة في استدلال إبراهيم؟' },
        options: {
          en: ['Their change and disappearance help him reject created things as the true Creator', 'Their brightness proves each one is a permanent god', 'They lead him back to idol worship'],
          ar: ['يساعد تغيرها وغيابها على رفض المخلوقات بوصفها الخالق الحقيقي', 'يثبت سطوعها أن كل واحد إله دائم', 'تعيده إلى عبادة الأصنام'],
        },
        correct: 0,
        hint: { en: 'Focus on what happens when each object disappears.', ar: 'ركز على ما يحدث عندما يغيب كل جرم.' },
      },
      {
        question: { en: 'What is the point of Abraham telling people to ask the largest idol?', ar: 'ما هدف قول إبراهيم للناس أن يسألوا الصنم الأكبر؟' },
        options: {
          en: ['It forces them to confront the fact that the idols cannot speak or protect themselves', 'It shows Abraham believes the largest idol really acted alone', 'It proves the people had never entered the temple'],
          ar: ['يجبرهم على مواجهة حقيقة أن الأصنام لا تتكلم ولا تحمي نفسها', 'يبين أن إبراهيم يعتقد أن الصنم الأكبر فعل ذلك فعلًا', 'يثبت أن الناس لم يدخلوا المعبد من قبل'],
        },
        correct: 0,
        hint: { en: 'Use the reply the people themselves give about the idols.', ar: 'استخدم جواب الناس أنفسهم عن الأصنام.' },
      },
      {
        question: { en: 'How does the fire episode develop the theme of trust?', ar: 'كيف يطور مشهد النار موضوع التوكل؟' },
        options: {
          en: ['Abraham remains steadfast under extreme pressure and is protected by Allah', 'Abraham gives up his message before the fire', 'The story presents trust as avoiding every difficult action'],
          ar: ['يبقى إبراهيم ثابتًا تحت ضغط شديد ويحميه الله', 'يتخلى إبراهيم عن رسالته قبل النار', 'تعرض القصة التوكل بوصفه تجنب كل فعل صعب'],
        },
        correct: 0,
        hint: { en: 'Connect his response before the fire with what follows.', ar: 'اربط استجابته قبل النار بما يحدث بعدها.' },
      },
      {
        question: { en: 'Why is Abraham’s answer to Nimrod about the sun effective in the story?', ar: 'لماذا تعد إجابة إبراهيم لنمرود عن الشمس فعالة في القصة؟' },
        options: {
          en: ['It moves the argument from a ruler’s control over people to a natural order he cannot reverse', 'It accepts Nimrod’s claim that he controls creation', 'It changes the subject to trade and migration'],
          ar: ['تنقل الحجة من سيطرة الحاكم على الناس إلى نظام طبيعي لا يستطيع عكسه', 'تقبل ادعاء نمرود بأنه يتحكم في الخلق', 'تغير الموضوع إلى التجارة والهجرة'],
        },
        correct: 0,
        hint: { en: 'Compare political power with control over the sun.', ar: 'قارن السلطة السياسية بالتحكم في الشمس.' },
      },
      {
        question: { en: 'What relationship does the story build between trust and action?', ar: 'ما العلاقة التي تبنيها القصة بين التوكل والعمل؟' },
        options: {
          en: ['Trust accompanies difficult decisions, movement, and continued responsibility', 'Trust means no action or planning is ever needed', 'Trust appears only before Abraham becomes a messenger'],
          ar: ['يصاحب التوكل القرارات الصعبة والحركة واستمرار المسؤولية', 'يعني التوكل أن العمل أو التخطيط غير مطلوبين أبدًا', 'يظهر التوكل فقط قبل أن يصبح إبراهيم رسولًا'],
        },
        correct: 0,
        hint: { en: 'Use migration and later family responsibilities.', ar: 'استخدم الهجرة ومسؤوليات الأسرة اللاحقة.' },
      },
      {
        question: { en: 'Why should phrases such as “some sources” or “is believed” be kept when they occur?', ar: 'لماذا يجب الحفاظ على عبارات مثل «بعض المصادر» أو «يُعتقد» عندما تظهر؟' },
        options: {
          en: ['They show the chapter itself does not present that historical detail with complete certainty', 'They mean the entire story is fictional', 'They allow the reader to replace the chapter with outside information'],
          ar: ['تبين أن الفصل نفسه لا يقدم تلك المعلومة التاريخية بيقين كامل', 'تعني أن القصة كلها خيالية', 'تسمح للقارئ باستبدال الفصل بمعلومات خارجية'],
        },
        correct: 0,
        hint: { en: 'Preserve the degree of certainty used by the text.', ar: 'حافظ على درجة اليقين التي يستخدمها النص.' },
      },
      {
        question: { en: 'How do Hagar, Ishmael, and Zamzam extend Abraham’s story?', ar: 'كيف توسع هاجر وإسماعيل وزمزم قصة إبراهيم؟' },
        options: {
          en: ['They connect family responsibility and trust with the development of a new sacred setting', 'They return the story to Babylonian idol worship', 'They end every connection with Abraham’s mission'],
          ar: ['تربط مسؤولية الأسرة والتوكل بتطور سياق مقدس جديد', 'تعيد القصة إلى عبادة الأصنام في بابل', 'تنهي كل صلة برسالة إبراهيم'],
        },
        correct: 0,
        hint: { en: 'Connect family, place, water, and later worship.', ar: 'اربط الأسرة والمكان والماء والعبادة اللاحقة.' },
      },
      {
        question: { en: 'What makes Abraham’s legacy larger than one debate or miracle?', ar: 'ما الذي يجعل إرث إبراهيم أكبر من مناظرة أو معجزة واحدة؟' },
        options: {
          en: ['The story continues through belief, migration, family, worship, the Ka’ba, and later religious memory', 'His influence ends immediately after leaving Babylon', 'The book presents his legacy only as political rule'],
          ar: ['تستمر القصة عبر الإيمان والهجرة والأسرة والعبادة والكعبة والذاكرة الدينية اللاحقة', 'ينتهي تأثيره فور مغادرة بابل', 'يعرض الكتاب إرثه بوصفه حكمًا سياسيًا فقط'],
        },
        correct: 0,
        hint: { en: 'Think across the later chapters, not just the Babylon section.', ar: 'فكر في الفصول اللاحقة لا في قسم بابل فقط.' },
      },
    ],
  },

  moses: {
    sequenceTitle: { en: 'Pressure, Calling, and Liberation', ar: 'الضغط والرسالة والتحرر' },
    sequence: {
      en: [
        'The Children of Israel grow in Egypt and political fear develops into oppression.',
        'Moses is born under danger and is protected through the Nile, the palace, and his return to his mother.',
        'As a young man, Moses causes a death by accident, regrets it, and leaves Egypt after a warning.',
        'In Midian he helps others, builds a new life, and later begins the journey back toward Egypt.',
        'Allah calls Moses and gives him signs; Moses returns with Harun to confront Pharaoh.',
        'The confrontation, the magicians’ response, the Exodus, and the sea bring the long conflict to a decisive turning point.',
      ],
      ar: [
        'ازداد عدد بني إسرائيل في مصر وتحول الخوف السياسي إلى اضطهاد.',
        'وُلد موسى في خطر وحُمي عبر النيل والقصر وعودته إلى أمه.',
        'في شبابه تسبب موسى في وفاة بالخطأ وندم وغادر مصر بعد التحذير.',
        'في مدين ساعد الآخرين وبنى حياة جديدة ثم بدأ رحلة العودة إلى مصر.',
        'كلم الله موسى وأعطاه الآيات فعاد مع هارون لمواجهة فرعون.',
        'أدت المواجهة واستجابة السحرة والخروج والبحر إلى نقطة تحول حاسمة في الصراع الطويل.',
      ],
    },
    matchingTitle: { en: 'Pressure, Response, and Consequence', ar: 'الضغط والاستجابة والنتيجة' },
    matching: {
      en: [
        ['Population growth becomes political fear', 'oppression and forced labour increase'],
        ['Moses regrets the accidental death', 'he asks Allah for forgiveness and changes direction'],
        ['Moses sees the two women waiting', 'he helps them before seeking a reward'],
        ['Allah gives Moses signs and a mission', 'he returns to confront Pharaoh with Harun'],
        ['The magicians recognise what they see', 'their response contrasts with Pharaoh’s continuing arrogance'],
      ],
      ar: [
        ['يتحول النمو السكاني إلى خوف سياسي', 'يزداد الاضطهاد والعمل القسري'],
        ['يندم موسى على الوفاة العرضية', 'يطلب المغفرة ويغير اتجاهه'],
        ['يرى موسى المرأتين تنتظران', 'يساعدهما قبل طلب مقابل'],
        ['يعطي الله موسى الآيات والرسالة', 'يعود لمواجهة فرعون مع هارون'],
        ['يدرك السحرة ما رأوه', 'تختلف استجابتهم عن استمرار كبر فرعون'],
      ],
    },
    reflectionTitle: { en: 'How Pressure Shapes Decisions', ar: 'كيف يشكل الضغط القرارات' },
    reflectionQuestion: {
      en: 'How does the Moses story show different ways people respond to fear, power, mistakes, and clear signs?',
      ar: 'كيف تُظهر قصة موسى طرقًا مختلفة لاستجابة الناس للخوف والسلطة والأخطاء والآيات الواضحة؟',
    },
    reflectionPrompts: {
      en: [
        'Compare Pharaoh’s use of fear with Moses’s response after his mistake.',
        'Use one Midian chapter to show how action can reveal character.',
        'Compare the magicians’ response with Pharaoh’s response to the signs.',
      ],
      ar: [
        'قارن استخدام فرعون للخوف باستجابة موسى بعد خطئه.',
        'استخدم فصلًا من مدين لتبين كيف يكشف الفعل عن الشخصية.',
        'قارن استجابة السحرة باستجابة فرعون للآيات.',
      ],
    },
    quizTitle: { en: 'Moses B2 Synthesis Check', ar: 'مراجعة تركيب قصة موسى B2' },
    quiz: [
      {
        question: { en: 'How does population growth become politically important in the opening chapters?', ar: 'كيف يصبح النمو السكاني مهمًا سياسيًا في الفصول الأولى؟' },
        options: {
          en: ['Rulers begin to see the growing Israelite community as a threat and respond with oppression', 'Growth immediately gives the Israelites control of Egypt', 'The rulers respond by ending forced labour'],
          ar: ['يبدأ الحكام في رؤية الجماعة المتزايدة خطرًا ويردون بالاضطهاد', 'يمنح النمو بني إسرائيل حكم مصر فورًا', 'يرد الحكام بإنهاء العمل القسري'],
        },
        correct: 0,
        hint: { en: 'Follow the chain from growth to fear to policy.', ar: 'تتبع السلسلة من النمو إلى الخوف إلى السياسة.' },
      },
      {
        question: { en: 'Why is the Nile more than a setting in the historical background?', ar: 'لماذا يعد النيل أكثر من مجرد مكان في الخلفية التاريخية؟' },
        options: {
          en: ['It is linked with agriculture, transport, major projects, labour, and political authority', 'It removes the need for organised labour and administration', 'It is described only as a decorative landscape'],
          ar: ['يرتبط بالزراعة والنقل والمشروعات الكبرى والعمل والسلطة السياسية', 'يلغي الحاجة إلى العمل المنظم والإدارة', 'يوصف مجرد منظر طبيعي'],
        },
        correct: 0,
        hint: { en: 'Connect the river with infrastructure and power.', ar: 'اربط النهر بالبنية التحتية والسلطة.' },
      },
      {
        question: { en: 'What distinguishes Moses’s reaction to the accidental death?', ar: 'ما الذي يميز استجابة موسى للوفاة العرضية؟' },
        options: {
          en: ['He recognises the wrong, seeks forgiveness, and does not present the act as a victory', 'He celebrates the event and seeks a reward', 'He denies that anything happened'],
          ar: ['يدرك الخطأ ويطلب المغفرة ولا يقدم الفعل بوصفه انتصارًا', 'يحتفل بالحدث ويطلب مكافأة', 'ينكر أن شيئًا حدث'],
        },
        correct: 0,
        hint: { en: 'Use regret, prayer, and the decision that follows.', ar: 'استخدم الندم والدعاء والقرار الذي يأتي بعدهما.' },
      },
      {
        question: { en: 'What does Moses helping the women in Midian show?', ar: 'ماذا يوضح مساعدة موسى للمرأتين في مدين؟' },
        options: {
          en: ['He responds to visible need even while he is tired and vulnerable himself', 'He helps only after receiving payment', 'He wants to gain political power in Midian'],
          ar: ['يستجيب لحاجة واضحة رغم تعبه وضعفه هو نفسه', 'لا يساعد إلا بعد تلقي المال', 'يريد الحصول على سلطة سياسية في مدين'],
        },
        correct: 0,
        hint: { en: 'Compare his own condition with the help he gives.', ar: 'قارن حالته الشخصية بالمساعدة التي يقدمها.' },
      },
      {
        question: { en: 'How does the mountain episode change Moses’s role in the story?', ar: 'كيف يغير مشهد الجبل دور موسى في القصة؟' },
        options: {
          en: ['He receives a prophetic mission and signs, turning the return to Egypt into a mission of confrontation and guidance', 'He decides never to return to Egypt', 'He becomes a ruler of Midian'],
          ar: ['يتلقى الرسالة والآيات فتحول عودته إلى مصر إلى مهمة مواجهة وهداية', 'يقرر ألا يعود إلى مصر أبدًا', 'يصبح حاكمًا لمدين'],
        },
        correct: 0,
        hint: { en: 'Compare Moses before and after the call.', ar: 'قارن موسى قبل النداء وبعده.' },
      },
      {
        question: { en: 'Why are the magicians’ reactions important to the confrontation?', ar: 'لماذا تعد استجابة السحرة مهمة في المواجهة؟' },
        options: {
          en: ['Their change of response after seeing the signs contrasts with Pharaoh’s refusal', 'They confirm Pharaoh’s view and nothing changes', 'They leave before seeing anything'],
          ar: ['يتغير موقفهم بعد رؤية الآيات في مقابل رفض فرعون', 'يؤكدون موقف فرعون ولا يتغير شيء', 'يغادرون قبل رؤية أي شيء'],
        },
        correct: 0,
        hint: { en: 'Compare recognition with continuing arrogance.', ar: 'قارن الإدراك باستمرار الكبر.' },
      },
      {
        question: { en: 'When the chapter uses words such as “probably” for a historical identification, what should a B2 answer do?', ar: 'عندما يستخدم الفصل كلمات مثل «على الأرجح» في تحديد تاريخي، ماذا تفعل إجابة B2؟' },
        options: {
          en: ['Keep the probability instead of presenting the identification as certain', 'Remove the qualification and make the claim absolute', 'Replace the chapter with an outside theory'],
          ar: ['تحافظ على الاحتمال بدل تقديم التحديد كحقيقة يقينية', 'تحذف القيد وتجعل الادعاء مطلقًا', 'تستبدل الفصل بنظرية خارجية'],
        },
        correct: 0,
        hint: { en: 'Match your certainty to the chapter’s wording.', ar: 'طابق درجة يقينك مع صياغة الفصل.' },
      },
      {
        question: { en: 'What makes the sea episode a major turning point rather than an isolated miracle?', ar: 'ما الذي يجعل مشهد البحر نقطة تحول كبرى لا معجزة منفصلة؟' },
        options: {
          en: ['It resolves the immediate pursuit and changes the condition of the escaping community', 'It has no connection with the earlier oppression and pursuit', 'It sends Moses back to life in Pharaoh’s palace'],
          ar: ['ينهي المطاردة المباشرة ويغير وضع الجماعة الهاربة', 'لا علاقة له بالاضطهاد والمطاردة السابقين', 'يعيد موسى إلى الحياة في قصر فرعون'],
        },
        correct: 0,
        hint: { en: 'Connect oppression, escape, pursuit, and result.', ar: 'اربط الاضطهاد والهروب والمطاردة والنتيجة.' },
      },
    ],
  },

  mecca: {
    sequenceTitle: { en: 'From Regional Setting to Social Change', ar: 'من السياق الإقليمي إلى التغير الاجتماعي' },
    sequence: {
      en: [
        'The book places Arabia between major regional powers while the peninsula itself lacks one political authority.',
        'Mecca develops around the Ka’ba, settlement, pilgrimage, and a dry environment that encourages trade.',
        'Trade routes, agreements, sacred months, pilgrimage, and fairs help Mecca become wealthy and influential.',
        'Wealth and lending practices contribute to a sharp gap between powerful and vulnerable groups.',
        'Tribal protection, gender inequality, slavery, poetry, idol worship, and superstition shape social and cultural life.',
        'The message of Islam challenges beliefs and social power, helping explain why some leaders resist change.',
      ],
      ar: [
        'يضع الكتاب الجزيرة العربية بين قوى إقليمية كبرى بينما تفتقر هي نفسها إلى سلطة سياسية واحدة.',
        'تتطور مكة حول الكعبة والاستقرار والحج وبيئة جافة تدفع إلى التجارة.',
        'تساعد طرق التجارة والاتفاقات والأشهر الحرم والحج والأسواق مكة على أن تصبح غنية ومؤثرة.',
        'تسهم الثروة وممارسات الإقراض في فجوة حادة بين الأقوياء والفئات الضعيفة.',
        'تشكل الحماية القبلية وعدم المساواة والرق والشعر وعبادة الأصنام والخرافات الحياة الاجتماعية والثقافية.',
        'تتحدى رسالة الإسلام المعتقدات والسلطة الاجتماعية، مما يساعد على تفسير مقاومة بعض القادة للتغير.',
      ],
    },
    matchingTitle: { en: 'System and Consequence', ar: 'النظام والنتيجة' },
    matching: {
      en: [
        ['Dry environment and central trade routes', 'greater reliance on commerce'],
        ['Sacred months and pilgrimage', 'safer travel, visitors, fairs, and economic activity'],
        ['Usury and concentrated wealth', 'a widening gap between rich and poor'],
        ['Tribal protection', 'security for insiders but danger for people without strong protection'],
        ['Islam’s message of equality and worship of Allah alone', 'a challenge to existing beliefs and some powerful interests'],
      ],
      ar: [
        ['البيئة الجافة وموقع طرق التجارة', 'اعتماد أكبر على التجارة'],
        ['الأشهر الحرم والحج', 'سفر أكثر أمانًا وزوار وأسواق ونشاط اقتصادي'],
        ['الربا وتركز الثروة', 'اتساع الفجوة بين الأغنياء والفقراء'],
        ['الحماية القبلية', 'أمن لأفراد القبيلة وخطر على من يفتقد الحماية القوية'],
        ['رسالة الإسلام بالمساواة وعبادة الله وحده', 'تحد للمعتقدات القائمة وبعض مصالح الأقوياء'],
      ],
    },
    reflectionTitle: { en: 'How One Part of Society Affects Another', ar: 'كيف يؤثر جانب من المجتمع في جانب آخر' },
    reflectionQuestion: {
      en: 'Which connection best explains Mecca as a social system rather than a list of separate historical facts?',
      ar: 'أي علاقة تفسر مكة بوصفها نظامًا اجتماعيًا لا قائمة من المعلومات التاريخية المنفصلة؟',
    },
    reflectionPrompts: {
      en: [
        'Explain one geography → economy connection.',
        'Explain one wealth → social hierarchy connection.',
        'How did religious and economic importance help make social change politically difficult?',
      ],
      ar: [
        'اشرح علاقة واحدة من الجغرافيا إلى الاقتصاد.',
        'اشرح علاقة واحدة من الثروة إلى الطبقات الاجتماعية.',
        'كيف جعلت الأهمية الدينية والاقتصادية التغير الاجتماعي صعبًا سياسيًا؟',
      ],
    },
    quizTitle: { en: 'Mecca B2 Systems Check', ar: 'مراجعة أنظمة مكة B2' },
    quiz: [
      {
        question: { en: 'Why does the book begin with Byzantine–Sassanid rivalry and tribal Arabia?', ar: 'لماذا يبدأ الكتاب بالتنافس البيزنطي الساساني وبالجزيرة القبلية؟' },
        options: {
          en: ['To place the rise of Islam within a regional power struggle and a peninsula without one political authority', 'To prove Mecca ruled both empires', 'To show Arabia already had a single central government'],
          ar: ['لوضع ظهور الإسلام داخل صراع قوى إقليمي وجزيرة بلا سلطة سياسية واحدة', 'لإثبات أن مكة حكمت الإمبراطوريتين', 'لإظهار أن الجزيرة كانت تملك حكومة مركزية واحدة'],
        },
        correct: 0,
        hint: { en: 'Compare the organised empires with tribal fragmentation.', ar: 'قارن الإمبراطوريات المنظمة بالتجزؤ القبلي.' },
      },
      {
        question: { en: 'How are the Ka’ba and early settlement connected in the book?', ar: 'كيف ترتبط الكعبة بالاستقرار المبكر في الكتاب؟' },
        options: {
          en: ['The sacred centre is presented as a major factor in the development of settled life and later growth', 'The city becomes a farming capital before the Ka’ba exists', 'The Ka’ba is presented as unrelated to settlement'],
          ar: ['يُعرض المركز المقدس عاملًا رئيسًا في تطور الاستقرار والنمو اللاحق', 'تصبح المدينة عاصمة زراعية قبل وجود الكعبة', 'تُعرض الكعبة بلا علاقة بالاستقرار'],
        },
        correct: 0,
        hint: { en: 'Use the chapter that explains city life beginning in the valley.', ar: 'استخدم الفصل الذي يشرح بداية حياة المدينة في الوادي.' },
      },
      {
        question: { en: 'Why did Mecca’s dry environment increase the importance of trade?', ar: 'لماذا زادت البيئة الجافة في مكة أهمية التجارة؟' },
        options: {
          en: ['Limited agriculture made commerce a more important way to make a living', 'The dry land produced more crops than neighbouring regions', 'The environment prevented all travel through Mecca'],
          ar: ['حدود الزراعة جعلت التجارة وسيلة أهم للعيش', 'أنتجت الأرض الجافة محاصيل أكثر من المناطق المجاورة', 'منعت البيئة كل السفر عبر مكة'],
        },
        correct: 0,
        hint: { en: 'Connect environment with livelihood.', ar: 'اربط البيئة بطريقة كسب الرزق.' },
      },
      {
        question: { en: 'How did sacred months and pilgrimage also affect the economy?', ar: 'كيف أثرت الأشهر الحرم والحج أيضًا في الاقتصاد؟' },
        options: {
          en: ['Greater safety and religious travel supported visitors, fairs, and trade', 'They ended all caravan activity', 'They made trade illegal during pilgrimage'],
          ar: ['دعم الأمان الأكبر والسفر الديني الزوار والأسواق والتجارة', 'أنهيا كل نشاط القوافل', 'جعلا التجارة ممنوعة أثناء الحج'],
        },
        correct: 0,
        hint: { en: 'Connect safety, visitors, fairs, and commerce.', ar: 'اربط الأمان والزوار والأسواق والتجارة.' },
      },
      {
        question: { en: 'What social consequence is linked with usury and concentrated wealth?', ar: 'ما النتيجة الاجتماعية المرتبطة بالربا وتركز الثروة؟' },
        options: {
          en: ['The gap between rich and poor becomes wider and debt increases vulnerability', 'Economic differences disappear', 'Poor families become the main lenders'],
          ar: ['تتسع الفجوة بين الأغنياء والفقراء ويزيد الدين من ضعف الناس', 'تختفي الفروق الاقتصادية', 'تصبح الأسر الفقيرة أهم المقرضين'],
        },
        correct: 0,
        hint: { en: 'Use the chapters on wealth, lending, and debt.', ar: 'استخدم فصول الثروة والإقراض والديون.' },
      },
      {
        question: { en: 'Why was tribal membership so important in the social system?', ar: 'لماذا كانت عضوية القبيلة مهمة جدًا في النظام الاجتماعي؟' },
        options: {
          en: ['It provided protection and status in a society without one central political authority', 'It had no effect on safety or property', 'It replaced all family and social ties with trade contracts'],
          ar: ['وفرت الحماية والمكانة في مجتمع بلا سلطة سياسية مركزية واحدة', 'لم تؤثر في الأمن أو الممتلكات', 'استبدلت كل روابط الأسرة والمجتمع بعقود التجارة'],
        },
        correct: 0,
        hint: { en: 'Connect tribal structure with protection.', ar: 'اربط البنية القبلية بالحماية.' },
      },
      {
        question: { en: 'Why are poets compared with the media of their time?', ar: 'لماذا يُقارن الشعراء بوسائل الإعلام في عصرهم؟' },
        options: {
          en: ['Poetry preserved tribal memory, praised allies, criticised enemies, and shaped public reputation', 'Poets mainly managed agricultural taxes', 'Poetry had no social function beyond private entertainment'],
          ar: ['حفظ الشعر ذاكرة القبيلة ومدح الحلفاء وانتقد الخصوم وشكل السمعة العامة', 'كان الشعراء يديرون الضرائب الزراعية أساسًا', 'لم يكن للشعر وظيفة اجتماعية خارج الترفيه الخاص'],
        },
        correct: 0,
        hint: { en: 'Think about memory, praise, criticism, and influence.', ar: 'فكر في الذاكرة والمدح والنقد والتأثير.' },
      },
      {
        question: { en: 'Why did the message of Islam threaten some powerful leaders in the book’s explanation?', ar: 'لماذا هددت رسالة الإسلام بعض القادة الأقوياء بحسب تفسير الكتاب؟' },
        options: {
          en: ['It challenged beliefs and social values tied to prestige, inequality, and existing power', 'It promised to strengthen every existing privilege without change', 'It was presented only as a new trade agreement'],
          ar: ['تحدت معتقدات وقيمًا اجتماعية مرتبطة بالوجاهة وعدم المساواة والسلطة القائمة', 'وعدت بتقوية كل الامتيازات القائمة بلا تغيير', 'قُدمت مجرد اتفاق تجاري جديد'],
        },
        correct: 0,
        hint: { en: 'Connect religious message with social and political interest.', ar: 'اربط الرسالة الدينية بالمصلحة الاجتماعية والسياسية.' },
      },
    ],
  },

  yunusEmre: {
    sequenceTitle: { en: 'Historical Crisis, Cultural Response, and Moral Thought', ar: 'الأزمة التاريخية والاستجابة الثقافية والفكر الأخلاقي' },
    sequence: {
      en: [
        'Yunus Emre is introduced through both Sûfî identity and literary importance in Turkish.',
        'Madrasa and tekke education are presented together with the social and cultural role of tekkes.',
        'The book then explains political, economic, and social crises in Anatolia, including revolt, Kösedağ, and Mongol pressure.',
        'Within this difficult environment, Yunus appears as a travelling wise dervish who uses poetry to speak to people.',
        'Later chapters explain Tawhid, love, worship, humility, generosity, patience, and other values in his thought.',
        'The book connects those ideas with everyday moral discipline and meaningful social life.',
      ],
      ar: [
        'يُقدم يونس إمره من خلال هويته الصوفية وأهميته الأدبية في التركية.',
        'يُعرض تعليم المدرسة والتكية مع الدور الاجتماعي والثقافي للتكايا.',
        'ثم يشرح الكتاب الأزمات السياسية والاقتصادية والاجتماعية في الأناضول، ومنها الثورة وكوسه داغ والضغط المغولي.',
        'في هذه البيئة الصعبة يظهر يونس درويشًا حكيمًا متجولًا يستخدم الشعر للحديث إلى الناس.',
        'تشرح الفصول اللاحقة التوحيد والمحبة والعبادة والتواضع والكرم والصبر وغيرها من القيم في فكره.',
        'يربط الكتاب هذه الأفكار بالانضباط الأخلاقي اليومي والحياة الاجتماعية ذات المعنى.',
      ],
    },
    matchingTitle: { en: 'Context, Idea, and Function', ar: 'السياق والفكرة والوظيفة' },
    matching: {
      en: [
        ['Simple but literary Turkish', 'helps ideas reach a broad public while contributing to literary language'],
        ['Tekkes', 'spiritual education together with social solidarity and cultural activity'],
        ['Political and social crisis in Anatolia', 'the difficult environment in which Yunus’s public role becomes meaningful'],
        ['Poetry', 'a medium for communicating Sûfî ideas and moral teaching'],
        ['Tawhid, love, humility, and generosity', 'ideas translated into a moral way of living'],
      ],
      ar: [
        ['تركية ميسرة لكنها أدبية', 'تساعد الأفكار على الوصول إلى جمهور واسع وتسهم في اللغة الأدبية'],
        ['التكايا', 'تعليم روحي مع تضامن اجتماعي ونشاط ثقافي'],
        ['الأزمة السياسية والاجتماعية في الأناضول', 'البيئة الصعبة التي يكتسب فيها دور يونس العام معنى'],
        ['الشعر', 'وسيلة لتوصيل الأفكار الصوفية والتعليم الأخلاقي'],
        ['التوحيد والمحبة والتواضع والكرم', 'أفكار تتحول إلى طريقة أخلاقية للعيش'],
      ],
    },
    reflectionTitle: { en: 'How Context and Ideas Meet', ar: 'كيف يلتقي السياق بالأفكار' },
    reflectionQuestion: {
      en: 'How does the book connect the historical difficulties of Anatolia with Yunus Emre’s language, poetry, Sûfî identity, and moral message?',
      ar: 'كيف يربط الكتاب صعوبات الأناضول التاريخية بلغة يونس إمره وشعره وهويته الصوفية ورسالته الأخلاقية؟',
    },
    reflectionPrompts: {
      en: [
        'Use one historical chapter and one chapter about Yunus’s thought.',
        'Why does accessible language matter to his public influence?',
        'How are spiritual values turned into practical habits in the later chapters?',
      ],
      ar: [
        'استخدم فصلًا تاريخيًا وفصلًا عن فكر يونس.',
        'لماذا تهم اللغة الميسرة في تأثيره العام؟',
        'كيف تتحول القيم الروحية إلى عادات عملية في الفصول اللاحقة؟',
      ],
    },
    quizTitle: { en: 'Yunus Emre B2 Synthesis Check', ar: 'مراجعة تركيب يونس إمره B2' },
    quiz: [
      {
        question: { en: 'Why does Chapter 1 present Yunus as both a Sûfî and a literary figure?', ar: 'لماذا يقدم الفصل الأول يونس بوصفه صوفيًا وشخصية أدبية معًا؟' },
        options: {
          en: ['His moral-spiritual outlook and his use of Turkish are both central to the legacy described by the book', 'The two roles are presented as completely unrelated', 'The book mainly describes him as a military commander'],
          ar: ['رؤيته الأخلاقية الروحية واستخدامه للتركية كلاهما مركزيان في الإرث الذي يصفه الكتاب', 'يُعرض الدوران بلا علاقة تمامًا', 'يصفه الكتاب أساسًا قائدًا عسكريًا'],
        },
        correct: 0,
        hint: { en: 'Connect inner moral life with literary language.', ar: 'اربط الحياة الأخلاقية الباطنة باللغة الأدبية.' },
      },
      {
        question: { en: 'What broader role do tekkes have in the book?', ar: 'ما الدور الأوسع للتكايا في الكتاب؟' },
        options: {
          en: ['They combine Sûfî education with social solidarity, cooperation, and cultural activity', 'They are described only as private houses with no public role', 'They replace every political institution in Anatolia'],
          ar: ['تجمع التعليم الصوفي بالتضامن والتعاون والنشاط الثقافي', 'توصف بيوتًا خاصة فقط بلا دور عام', 'تستبدل كل المؤسسات السياسية في الأناضول'],
        },
        correct: 0,
        hint: { en: 'Use the chapters on education, society, and poetry.', ar: 'استخدم فصول التعليم والمجتمع والشعر.' },
      },
      {
        question: { en: 'Why does the book spend several chapters on Anatolia’s political crisis?', ar: 'لماذا يخصص الكتاب عدة فصول لأزمة الأناضول السياسية؟' },
        options: {
          en: ['The context helps explain the difficult society in which Yunus’s role and message developed', 'The crisis is unrelated background that the book never connects with Yunus', 'The purpose is only to memorise battle dates'],
          ar: ['يساعد السياق على تفسير المجتمع الصعب الذي تطور فيه دور يونس ورسالته', 'الأزمة خلفية بلا علاقة ولا يربطها الكتاب بيونس', 'الهدف فقط حفظ تواريخ المعارك'],
        },
        correct: 0,
        hint: { en: 'Connect historical pressure with the chapter where Yunus appears as a wise dervish.', ar: 'اربط الضغط التاريخي بالفصل الذي يظهر فيه يونس درويشًا حكيمًا.' },
      },
      {
        question: { en: 'How does poetry function in Yunus Emre’s public role?', ar: 'كيف يعمل الشعر في الدور العام ليونس إمره؟' },
        options: {
          en: ['It becomes a medium for expressing Sûfî ideas and moral meaning to people', 'It is presented only as entertainment with no relationship to his ideas', 'It replaces his use of Turkish with another language'],
          ar: ['يصبح وسيلة للتعبير عن الأفكار الصوفية والمعنى الأخلاقي للناس', 'يُعرض ترفيهًا فقط بلا علاقة بأفكاره', 'يستبدل استخدامه للتركية بلغة أخرى'],
        },
        correct: 0,
        hint: { en: 'Connect medium, audience, and message.', ar: 'اربط الوسيلة والجمهور والرسالة.' },
      },
      {
        question: { en: 'What does Tawhid do in the book’s explanation of Yunus’s thought?', ar: 'ما دور التوحيد في شرح الكتاب لفكر يونس؟' },
        options: {
          en: ['It provides a central religious idea through which creation, love, and unity are discussed', 'It is presented as a political tax policy', 'It removes every connection between Creator and creation'],
          ar: ['يوفر فكرة دينية مركزية تُناقش من خلالها الخليقة والمحبة والوحدة', 'يُعرض سياسة ضريبية سياسية', 'يلغي كل علاقة بين الخالق والخلق'],
        },
        correct: 0,
        hint: { en: 'Use the chapters on oneness, love, and unity.', ar: 'استخدم فصول الوحدانية والمحبة والوحدة.' },
      },
      {
        question: { en: 'Why should an answer say “according to historical accounts” when the chapter does?', ar: 'لماذا ينبغي للإجابة أن تقول «وفقًا للروايات التاريخية» عندما يفعل الفصل ذلك؟' },
        options: {
          en: ['It keeps the historical attribution and degree of certainty used by the chapter', 'It means every direct statement must be treated as uncertain', 'It allows the reader to invent a different biography'],
          ar: ['يحافظ على النسبة التاريخية ودرجة اليقين التي يستخدمها الفصل', 'يعني أن كل عبارة مباشرة يجب اعتبارها غير مؤكدة', 'يسمح للقارئ باختراع سيرة مختلفة'],
        },
        correct: 0,
        hint: { en: 'Preserve attribution where the text explicitly uses it.', ar: 'حافظ على النسبة حيث يستخدمها النص صراحة.' },
      },
      {
        question: { en: 'How do humility and generosity move from abstract values to daily practice?', ar: 'كيف ينتقل التواضع والكرم من قيم مجردة إلى ممارسة يومية؟' },
        options: {
          en: ['The book connects them with habits such as serving, sharing, controlling ego, and treating others well', 'The book says values matter only in poetry', 'They are presented as signs of wealth and status'],
          ar: ['يربطهما الكتاب بعادات مثل الخدمة والمشاركة وضبط النفس وحسن معاملة الآخرين', 'يقول الكتاب إن القيم تهم في الشعر فقط', 'يُعرضان علامتين على الثروة والمكانة'],
        },
        correct: 0,
        hint: { en: 'Connect moral words with concrete behaviour.', ar: 'اربط الكلمات الأخلاقية بالسلوك الملموس.' },
      },
      {
        question: { en: 'What is the strongest whole-book connection?', ar: 'ما أقوى علاقة على مستوى الكتاب كله؟' },
        options: {
          en: ['Historical hardship, cultural institutions, accessible language, and moral-spiritual ideas together help explain Yunus Emre’s influence', 'Only the battle chronology explains his importance', 'His thought is presented with no relationship to language or society'],
          ar: ['تساعد الشدة التاريخية والمؤسسات الثقافية واللغة الميسرة والأفكار الأخلاقية الروحية معًا على تفسير تأثير يونس', 'تفسر تواريخ المعارك وحدها أهميته', 'يُعرض فكره بلا علاقة باللغة أو المجتمع'],
        },
        correct: 0,
        hint: { en: 'Connect history, institutions, language, and ideas rather than choosing one alone.', ar: 'اربط التاريخ والمؤسسات واللغة والأفكار بدل اختيار جانب واحد.' },
      },
    ],
  },
};

const localized = <T,>(value: Localized<T>, language: BlueprintLanguage): T => value[language];

const makeQuizQuestions = (specs: QuizSpec[], language: BlueprintLanguage): QuizQuestion[] => specs.map(spec => ({
  question: localized(spec.question, language),
  options: localized(spec.options, language).map((text, index) => ({ text, isCorrect: index === spec.correct })),
  hint: localized(spec.hint, language),
}));

export const buildB2GoldReview = (
  story: B2GoldStory,
  language: BlueprintLanguage,
): Exercise[] => {
  const profile = profiles[story];
  const isAr = language === 'ar';
  const sequenceItems = localized(profile.sequence, language).map((text, index) => ({ id: String(index + 1), text }));
  const pairs = localized(profile.matching, language).map(([left, right]) => ({ left, right }));
  const reflectionPrompts = localized(profile.reflectionPrompts, language);

  return [
    {
      id: `${story}-b2-gold-review-sequence`,
      type: 'sequencing',
      title: localized(profile.sequenceTitle, language),
      instructions: isAr ? 'رتب المراحل الرئيسة بحسب تطور الكتاب.' : 'Put the major stages in the order developed by the book.',
      question: isAr ? 'ما التسلسل الذي يوضح تطور الأفكار والأحداث الرئيسة؟' : 'Which sequence shows the development of the book’s main events and ideas?',
      correctAnswer: sequenceItems.map(item => item.id),
      sequencingItems: sequenceItems,
      explanation: isAr ? 'يركز التسلسل على نقاط التحول والعلاقات الكبرى لا على التفاصيل الهامشية.' : 'The sequence focuses on major relationships and turning points rather than minor trivia.',
      feedback: {
        correct: isAr ? 'صحيح. لقد استرجعت المسار الرئيس للكتاب.' : 'Correct. You retrieved the book’s main development.',
        incorrect: isAr ? 'راجع نقاط التحول الكبرى وما الذي يتغير بعد كل واحدة، ثم أعد الترتيب.' : 'Recheck the major turning points and what changes after each one, then reorder the stages.',
      },
    },
    {
      id: `${story}-b2-gold-review-matching`,
      type: 'matching',
      title: localized(profile.matchingTitle, language),
      instructions: isAr ? 'صل كل تفصيل بالعلاقة أو النتيجة التي يدعمها الكتاب.' : 'Match each detail with the relationship or consequence supported by the book.',
      question: isAr ? 'صل الدليل بما يوضحه.' : 'Match the detail with what it shows.',
      correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
      matchingPairs: pairs,
      explanation: isAr ? 'تعتمد كل مطابقة على علاقة يذكرها الكتاب أو يدعمها بوضوح.' : 'Each match uses a relationship stated or clearly supported by the book.',
      feedback: {
        correct: isAr ? 'صحيح. ربطت التفاصيل بالمعاني المناسبة.' : 'Correct. You connected the details with the right meanings.',
        incorrect: isAr ? 'حدد أولًا نوع العلاقة: سبب، مقارنة، استجابة، تحول، أو نتيجة، ثم حاول من جديد.' : 'First identify the relationship: cause, contrast, response, turning point, or consequence, then try again.',
      },
    },
    {
      id: `${story}-b2-gold-review-reflection`,
      type: 'reflection',
      title: localized(profile.reflectionTitle, language),
      instructions: isAr ? 'أجب في 5–7 جمل مترابطة مستخدمًا تفصيلين دقيقين من الكتاب.' : 'Answer in 5–7 connected sentences using two accurate book details.',
      question: localized(profile.reflectionQuestion, language),
      correctAnswer: null,
      discussionPrompts: reflectionPrompts.map((question, index) => ({
        question,
        mode: isAr ? (index === 0 ? 'فردي' : index === 1 ? 'ثنائي' : 'صفي') : (index === 0 ? 'Individual' : index === 1 ? 'Pair' : 'Class'),
      })),
      explanation: isAr ? 'الإجابة القوية في B2 تشرح علاقة واضحة وتستخدم تفاصيل مناسبة ولا تضيف ما لا يدعمه الكتاب.' : 'A strong B2 response explains a clear relationship, uses relevant details, and does not add claims the book cannot support.',
      feedback: {
        correct: isAr ? 'أحسنت. استخدمت تفاصيل الكتاب لبناء تفسير واضح.' : 'Well done. You used book details to build a clear explanation.',
        incorrect: isAr ? 'اختر علاقة واحدة واضحة وتفصيلين مناسبين. لا تجعل الإجابة أكثر تجريدًا مما يسمح به الكتاب.' : 'Choose one clear relationship and two useful details. Do not make the answer more abstract than the book supports.',
      },
    },
    {
      id: `${story}-b2-gold-review-quiz`,
      type: 'quiz-game',
      title: localized(profile.quizTitle, language),
      instructions: isAr ? 'أجب عن ثمانية أسئلة تركز على العلاقات والسبب والمقارنة ونقاط التحول.' : 'Answer eight questions focused on relationships, causes, contrasts, and turning points.',
      question: isAr ? 'هل تستطيع ربط أجزاء الكتاب بدل حفظ التفاصيل المنفصلة؟' : 'Can you connect the book instead of memorising isolated details?',
      correctAnswer: null,
      quizQuestions: makeQuizQuestions(profile.quiz, language),
      explanation: isAr ? 'تقيس الأسئلة الفهم التركيبي المناسب لـB2 مع إبقاء الإجابات داخل ما يدعمه النص.' : 'The questions check B2-level synthesis while keeping answers inside what the text supports.',
      feedback: {
        correct: isAr ? 'أحسنت. أنت تربط الأفكار والأحداث على مستوى الكتاب.' : 'Well done. You are connecting ideas and events across the book.',
        incorrect: isAr ? 'استخدم التلميح وحدد الفصل أو العلاقة المطلوبة، ثم حاول مرة أخرى.' : 'Use the hint, locate the relevant chapter or relationship, and try again.',
      },
    },
  ];
};
