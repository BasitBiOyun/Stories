import type { Exercise, QuizQuestion } from '../types';
import type { BlueprintLanguage } from './learningBlueprint';
import type { B1GoldStory } from './b1GoldPedagogy';

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

const profiles: Record<B1GoldStory, ReviewProfile> = {
  adam: {
    sequenceTitle: { en: 'From Creation to Human Responsibility', ar: 'من الخلق إلى مسؤولية الإنسان' },
    sequence: {
      en: [
        'Adam is created and given knowledge and intellect.',
        'Iblis judges Adam through material origin and refuses to show respect.',
        'Adam and Hawwa live in Paradise with one clear restriction.',
        'Iblis uses deception and they make a mistake.',
        'Adam admits the mistake and receives forgiveness.',
        'Life on Earth continues through responsibility, family, and the lesson of Habil and Qabil.',
      ],
      ar: [
        'خُلق آدم وأُعطي العلم والعقل.',
        'حكم إبليس على آدم من خلال الأصل المادي ورفض إظهار الاحترام.',
        'عاش آدم وحواء في الجنة مع قيد واحد واضح.',
        'استخدم إبليس الخداع ووقع آدم وحواء في الخطأ.',
        'اعترف آدم بالخطأ ونال المغفرة.',
        'استمرت الحياة في الأرض بالمسؤولية والأسرة ودرس هابيل وقابيل.',
      ],
    },
    matchingTitle: { en: 'Action, Response, and Meaning', ar: 'الفعل والاستجابة والمعنى' },
    matching: {
      en: [
        ['Iblis compares fire with soil', 'arrogance based on origin'],
        ['Adam admits his mistake', 'repentance and return'],
        ['Habil gives his best offering', 'sincerity and care'],
        ['The raven digs the ground', 'a practical lesson after Qabil’s panic'],
      ],
      ar: [
        ['يقارن إبليس النار بالتراب', 'تكبر قائم على الأصل'],
        ['يعترف آدم بخطئه', 'التوبة والرجوع'],
        ['يقدم هابيل أفضل قربانه', 'الإخلاص والاهتمام'],
        ['يحفر الغراب الأرض', 'درس عملي بعد ذعر قابيل'],
      ],
    },
    reflectionTitle: { en: 'Evidence-Based Reflection', ar: 'تأمل قائم على الدليل' },
    reflectionQuestion: {
      en: 'How does the story contrast a mistake followed by responsibility with pride that refuses correction?',
      ar: 'كيف تقارن القصة بين خطأ يتبعه تحمل للمسؤولية وكِبر يرفض التصحيح؟',
    },
    reflectionPrompts: {
      en: [
        'Use one detail about Adam and one detail about Iblis.',
        'What do the two offerings show about intention and effort?',
        'How does the ending connect jealousy and uncontrolled anger with consequences?',
      ],
      ar: [
        'استخدم تفصيلًا عن آدم وتفصيلًا عن إبليس.',
        'ماذا يكشف القربانان عن النية والجهد؟',
        'كيف تربط النهاية الحسد والغضب غير المنضبط بالنتائج؟',
      ],
    },
    quizTitle: { en: 'Adam B1 Relationship Check', ar: 'مراجعة علاقات قصة آدم B1' },
    quiz: [
      {
        question: { en: 'How does the chapter connect soil from different lands with humanity?', ar: 'كيف يربط الفصل التراب من أماكن مختلفة بالبشر؟' },
        options: {
          en: ['It connects different soil with differences in human skin colour while keeping a common origin', 'It says each colour came from a different creator', 'It says soil differences changed Adam’s knowledge'],
          ar: ['يربط اختلاف التراب باختلاف ألوان البشر مع بقاء الأصل مشتركًا', 'يقول إن كل لون جاء من خالق مختلف', 'يقول إن اختلاف التراب غيّر علم آدم'],
        },
        correct: 0,
        hint: { en: 'Connect the cause in the soil description with the human result.', ar: 'اربط السبب في وصف التراب بالنتيجة المتعلقة بالبشر.' },
      },
      {
        question: { en: 'What did Iblis ignore when he treated fire as proof of superiority?', ar: 'ما الذي تجاهله إبليس عندما اعتبر النار دليلًا على الأفضلية؟' },
        options: {
          en: ['Adam’s knowledge and the chapter’s rejection of race, colour, or group as true greatness', 'The fact that Adam was also created from fire', 'The angels’ wish to make Iblis a ruler'],
          ar: ['علم آدم ورفض الفصل جعل العرق أو اللون أو الجماعة مصدرًا للعظمة', 'أن آدم خُلق من النار أيضًا', 'رغبة الملائكة في جعل إبليس خليفة'],
        },
        correct: 0,
        hint: { en: 'Compare material origin with the value the chapter emphasizes.', ar: 'قارن الأصل المادي بالقيمة التي يؤكدها الفصل.' },
      },
      {
        question: { en: 'Why was the warning about Iblis important before the test in Paradise?', ar: 'لماذا كان التحذير من إبليس مهمًا قبل اختبار الجنة؟' },
        options: {
          en: ['It identified the person who was waiting for a chance to deceive Adam', 'It explained that every tree was forbidden', 'It ended all contact between Adam and Iblis'],
          ar: ['حدد من كان ينتظر فرصة لخداع آدم', 'شرح أن جميع الأشجار محرمة', 'أنهى كل اتصال بين آدم وإبليس'],
        },
        correct: 0,
        hint: { en: 'Link Chapter 4’s intention with the deception that follows.', ar: 'اربط نية الفصل الرابع بالخداع الذي يأتي بعده.' },
      },
      {
        question: { en: 'What most clearly separates Adam’s response to his mistake from Iblis’s response to his refusal?', ar: 'ما الذي يميز بوضوح استجابة آدم لخطئه عن استجابة إبليس لرفضه؟' },
        options: {
          en: ['Adam admitted the mistake and sought forgiveness; Iblis continued defending himself', 'Adam blamed Iblis and refused responsibility; Iblis apologized', 'Both reacted in the same way'],
          ar: ['اعترف آدم بالخطأ وطلب المغفرة؛ واستمر إبليس في الدفاع عن نفسه', 'لام آدم إبليس ورفض المسؤولية؛ واعتذر إبليس', 'استجاب الاثنان بالطريقة نفسها'],
        },
        correct: 0,
        hint: { en: 'Compare what each character does after the problem.', ar: 'قارن ما يفعله كل طرف بعد المشكلة.' },
      },
      {
        question: { en: 'How does life on Earth connect with Adam’s earlier role in the story?', ar: 'كيف ترتبط الحياة في الأرض بدور آدم الذي ذُكر سابقًا؟' },
        options: {
          en: ['Earth becomes the place where human responsibility and stewardship are lived out', 'Earth removes every responsibility mentioned earlier', 'Earth is described only as a temporary hiding place'],
          ar: ['تصبح الأرض مكان ممارسة مسؤولية الإنسان وخلافته', 'تلغي الأرض كل مسؤولية ذُكرت سابقًا', 'توصف الأرض فقط كمكان للاختباء مؤقتًا'],
        },
        correct: 0,
        hint: { en: 'Connect the early “ruler/khalifa” idea with later life on Earth.', ar: 'اربط فكرة الخليفة في البداية بالحياة اللاحقة في الأرض.' },
      },
      {
        question: { en: 'What do Habil’s and Qabil’s different offerings reveal?', ar: 'ماذا يكشف اختلاف قرباني هابيل وقابيل؟' },
        options: {
          en: ['The quality of the gift reflects care and sincerity, not simply the person’s job', 'Being a shepherd automatically makes every action better', 'Only the physical size of a gift matters'],
          ar: ['تعكس جودة القربان الاهتمام والإخلاص لا نوع العمل وحده', 'كون الإنسان راعيًا يجعل كل أفعاله أفضل تلقائيًا', 'الحجم المادي للقربان هو المهم وحده'],
        },
        correct: 0,
        hint: { en: 'Compare “best sheep” with “low-value crops” and the chapter’s conclusion.', ar: 'قارن أفضل الكبش بالمحصول القليل القيمة وخلاصة الفصل.' },
      },
      {
        question: { en: 'Why is Habil’s refusal to fight back important to the conflict?', ar: 'لماذا يعد رفض هابيل القتال مهمًا في الصراع؟' },
        options: {
          en: ['It contrasts restraint and fear of Allah with Qabil’s escalating anger', 'It shows Habil did not understand the threat', 'It proves the brothers had no disagreement'],
          ar: ['يقارن ضبط النفس وخشية الله بتصاعد غضب قابيل', 'يبين أن هابيل لم يفهم التهديد', 'يثبت أن الأخوين لم يختلفا'],
        },
        correct: 0,
        hint: { en: 'Use Habil’s direct reason and Qabil’s later action.', ar: 'استخدم سبب هابيل المباشر وفعل قابيل اللاحق.' },
      },
      {
        question: { en: 'What final relationship does the story emphasize through Qabil’s regret and the raven?', ar: 'ما العلاقة النهائية التي تؤكدها القصة من خلال ندم قابيل والغراب؟' },
        options: {
          en: ['Uncontrolled jealousy and anger lead to consequences, and understanding often comes too late', 'Anger solves conflict when it is strong enough', 'The raven removes Qabil’s responsibility for his choice'],
          ar: ['يقود الحسد والغضب غير المنضبطين إلى نتائج وقد يأتي الفهم متأخرًا', 'يحل الغضب النزاع إذا كان قويًا بما يكفي', 'يزيل الغراب مسؤولية قابيل عن اختياره'],
        },
        correct: 0,
        hint: { en: 'Connect the emotional sequence with the practical lesson.', ar: 'اربط تسلسل المشاعر بالدرس العملي.' },
      },
    ],
  },

  abraham: {
    sequenceTitle: { en: 'From Questioning to Legacy', ar: 'من التساؤل إلى الإرث' },
    sequence: {
      en: [
        'Abraham grows up around idols and questions their power.',
        'He observes the star, moon, and sun and rejects changing creations as the Creator.',
        'He calls his father and people to worship Allah alone.',
        'He breaks the idols and uses the largest idol to expose their helplessness.',
        'Allah protects him from the fire, and he later challenges Nimrod’s claim to power.',
        'Migration, Hagar and Ishmael, Zamzam, and the building of the Ka’ba continue the message of Tawhid.',
      ],
      ar: [
        'نشأ إبراهيم بين الأصنام وتساءل عن قدرتها.',
        'تأمل النجم والقمر والشمس ورفض أن يكون المخلوق المتغير هو الخالق.',
        'دعا والده وقومه إلى عبادة الله وحده.',
        'حطم الأصنام واستخدم الصنم الأكبر لكشف عجزها.',
        'حماه الله من النار ثم تحدى ادعاء نمرود للقدرة.',
        'واصلت الهجرة وهاجر وإسماعيل وزمزم وبناء الكعبة رسالة التوحيد.',
      ],
    },
    matchingTitle: { en: 'Evidence and Reasoning', ar: 'الدليل والاستدلال' },
    matching: {
      en: [
        ['Idols cannot hear or move', 'evidence of powerlessness'],
        ['Star, moon, and sun set', 'created things change and disappear'],
        ['Largest idol left with the axe', 'a question exposing contradiction'],
        ['Hagar searches between Safa and Marwa', 'active effort together with trust'],
      ],
      ar: [
        ['الأصنام لا تسمع ولا تتحرك', 'دليل على العجز'],
        ['النجم والقمر والشمس تغيب', 'المخلوقات تتغير وتختفي'],
        ['ترك الصنم الأكبر مع الفأس', 'سؤال يكشف التناقض'],
        ['تسعى هاجر بين الصفا والمروة', 'العمل مع التوكل'],
      ],
    },
    reflectionTitle: { en: 'Reasoning with Evidence', ar: 'الاستدلال بالدليل' },
    reflectionQuestion: {
      en: 'How does Abraham move from observing limits in created things to acting publicly on what he believes?',
      ar: 'كيف ينتقل إبراهيم من ملاحظة حدود المخلوقات إلى التصرف علنًا وفق ما يؤمن به؟',
    },
    reflectionPrompts: {
      en: [
        'Use one example from the sky scenes and one from the idol episode.',
        'How does the fire episode change the conflict without changing Abraham’s trust?',
        'How do Hagar’s effort and Zamzam connect action with trust?',
      ],
      ar: [
        'استخدم مثالًا من مشاهد السماء ومثالًا من قصة الأصنام.',
        'كيف تغير حادثة النار الصراع دون أن تغير توكل إبراهيم؟',
        'كيف يربط سعي هاجر وزمزم بين العمل والتوكل؟',
      ],
    },
    quizTitle: { en: 'Abraham B1 Evidence Check', ar: 'مراجعة أدلة قصة إبراهيم B1' },
    quiz: [
      {
        question: { en: 'Why do the idols’ ordinary limitations matter to Abraham’s argument?', ar: 'لماذا تعد حدود الأصنام العادية مهمة في حجة إبراهيم؟' },
        options: {
          en: ['They show that objects unable to hear, move, or respond cannot have the power people claim for them', 'They show the idols needed a larger building', 'They prove people did not know how to make statues'],
          ar: ['تبين أن الأشياء التي لا تسمع ولا تتحرك ولا تستجيب لا تملك القدرة التي ينسبها الناس إليها', 'تبين أن الأصنام تحتاج إلى مبنى أكبر', 'تثبت أن الناس لم يعرفوا صناعة التماثيل'],
        },
        correct: 0,
        hint: { en: 'Connect physical inability with the claims made about the idols.', ar: 'اربط العجز المادي بالادعاءات المتعلقة بالأصنام.' },
      },
      {
        question: { en: 'What repeated observation helps Abraham reject the star, moon, and sun as the Creator?', ar: 'ما الملاحظة المتكررة التي تساعد إبراهيم على رفض النجم والقمر والشمس بوصفها الخالق؟' },
        options: {
          en: ['They appear and then set or disappear', 'They are all made by his father', 'They answer his questions aloud'],
          ar: ['تظهر ثم تغيب أو تختفي', 'يصنعها والده جميعًا', 'تجيبه بصوت مسموع'],
        },
        correct: 0,
        hint: { en: 'Look for the same change in all three observations.', ar: 'ابحث عن التغير نفسه في الملاحظات الثلاث.' },
      },
      {
        question: { en: 'How does Abraham’s father’s response mark a turning point?', ar: 'كيف يمثل رد والد إبراهيم نقطة تحول؟' },
        options: {
          en: ['Personal guidance becomes open opposition when his father threatens him and tells him to leave', 'His father immediately accepts the message', 'Abraham decides that family tradition is enough evidence'],
          ar: ['تتحول الدعوة الشخصية إلى معارضة واضحة عندما يهدده والده ويأمره بالرحيل', 'يقبل والده الرسالة فورًا', 'يقرر إبراهيم أن تقليد الأسرة دليل كافٍ'],
        },
        correct: 0,
        hint: { en: 'Compare Abraham’s invitation with his father’s answer.', ar: 'قارن دعوة إبراهيم برد والده.' },
      },
      {
        question: { en: 'Why did Abraham leave the largest idol unbroken?', ar: 'لماذا ترك إبراهيم الصنم الأكبر دون تحطيم؟' },
        options: {
          en: ['To create a question that exposed the idols’ inability to speak or act', 'Because he believed it was the most powerful idol', 'Because the people had already removed it'],
          ar: ['ليصنع سؤالًا يكشف عجز الأصنام عن الكلام أو الفعل', 'لأنه اعتقد أنه أقوى الأصنام', 'لأن الناس أخرجوه مسبقًا'],
        },
        correct: 0,
        hint: { en: 'Remember what he wanted the people to ask the largest idol.', ar: 'تذكر ما أراد من الناس أن يسألوا الصنم الأكبر عنه.' },
      },
      {
        question: { en: 'What does the fire episode show about power in the story?', ar: 'ماذا تبين حادثة النار عن القوة في القصة؟' },
        options: {
          en: ['The people can prepare danger, but Allah controls the outcome and protects Abraham', 'The people become believers before the fire is lit', 'Abraham escapes by using ordinary tools'],
          ar: ['يستطيع الناس إعداد الخطر لكن الله يملك النتيجة ويحمي إبراهيم', 'يؤمن الناس قبل إشعال النار', 'يهرب إبراهيم باستخدام أدوات عادية'],
        },
        correct: 0,
        hint: { en: 'Compare the people’s plan with what happens to the fire.', ar: 'قارن خطة الناس بما يحدث للنار.' },
      },
      {
        question: { en: 'Why is Abraham’s challenge about the sun stronger than Nimrod’s example of life and death?', ar: 'لماذا كان تحدي إبراهيم المتعلق بالشمس أقوى من مثال نمرود عن الحياة والموت؟' },
        options: {
          en: ['It asks Nimrod to control a natural order that his political power cannot command', 'It asks Nimrod to give Abraham more soldiers', 'It changes the discussion to the size of Babylon'],
          ar: ['يطلب من نمرود التحكم في نظام طبيعي لا تستطيع سلطته السياسية التحكم فيه', 'يطلب من نمرود إعطاء إبراهيم مزيدًا من الجنود', 'يحول النقاش إلى حجم بابل'],
        },
        correct: 0,
        hint: { en: 'Separate political authority from control over creation.', ar: 'افصل بين السلطة السياسية والتحكم في الخلق.' },
      },
      {
        question: { en: 'What does Hagar’s search for water add to the theme of trust?', ar: 'ماذا يضيف سعي هاجر للماء إلى موضوع التوكل؟' },
        options: {
          en: ['Trust is shown together with active effort rather than passive waiting', 'Trust means refusing to take any action', 'The search proves the valley already had many rivers'],
          ar: ['يظهر التوكل مع السعي والعمل لا الانتظار السلبي', 'يعني التوكل رفض أي عمل', 'يثبت السعي أن الوادي كان مليئًا بالأنهار'],
        },
        correct: 0,
        hint: { en: 'She trusted Allah and also kept searching.', ar: 'توكلت على الله واستمرت في السعي أيضًا.' },
      },
      {
        question: { en: 'How does the building of the Ka’ba continue the story’s central message?', ar: 'كيف يواصل بناء الكعبة الرسالة المركزية للقصة؟' },
        options: {
          en: ['It turns Abraham and Ishmael’s shared work into a lasting center connected with worship of Allah alone', 'It returns the story to worship of Babylonian idols', 'It ends the connection between Abraham and later generations'],
          ar: ['يجعل عمل إبراهيم وإسماعيل المشترك مركزًا دائمًا مرتبطًا بعبادة الله وحده', 'يعيد القصة إلى عبادة أصنام بابل', 'ينهي الصلة بين إبراهيم والأجيال اللاحقة'],
        },
        correct: 0,
        hint: { en: 'Connect the final building project with Tawhid and legacy.', ar: 'اربط مشروع البناء الأخير بالتوحيد والإرث.' },
      },
    ],
  },

  moses: {
    sequenceTitle: { en: 'Fear, Guidance, and Rescue', ar: 'الخوف والهداية والنجاة' },
    sequence: {
      en: [
        'Pharaoh’s fear grows into oppression and a violent order.',
        'Moses’s mother acts with fear but trusts Allah and places him in the Nile.',
        'Moses grows up, makes an accidental mistake, repents, and leaves Egypt.',
        'In Midian he helps the two sisters and begins a new period of life.',
        'Allah calls Moses, gives him signs, and sends Harun with him.',
        'The conflict with Pharaoh ends with belief from the magicians and the safe crossing of the sea for Moses’s people.',
      ],
      ar: [
        'يتحول خوف فرعون إلى ظلم وأمر عنيف.',
        'تتصرف أم موسى رغم الخوف وتتوكل على الله وتضعه في النيل.',
        'يكبر موسى ويقع في خطأ غير مقصود ويتوب ويغادر مصر.',
        'يساعد الفتاتين في مدين وتبدأ مرحلة جديدة من حياته.',
        'يكلم الله موسى ويعطيه الآيات ويرسل هارون معه.',
        'ينتهي الصراع مع فرعون بإيمان السحرة وعبور موسى وقومه البحر بأمان.',
      ],
    },
    matchingTitle: { en: 'Cause, Response, and Contrast', ar: 'السبب والاستجابة والمقارنة' },
    matching: {
      en: [
        ['Pharaoh fears losing power', 'oppression becomes harsher'],
        ['Moses makes an accidental mistake', 'regret and asking Allah for forgiveness'],
        ['Two sisters cannot reach the spring easily', 'Moses helps water their sheep'],
        ['Magicians recognize the sign', 'they believe while Pharaoh remains arrogant'],
      ],
      ar: [
        ['يخاف فرعون فقدان السلطة', 'يزداد الظلم'],
        ['يقع موسى في خطأ غير مقصود', 'الندم وطلب المغفرة'],
        ['لا تستطيع الفتاتان الوصول إلى الماء بسهولة', 'يساعد موسى في سقي الغنم'],
        ['يدرك السحرة حقيقة الآية', 'يؤمنون بينما يبقى فرعون متكبرًا'],
      ],
    },
    reflectionTitle: { en: 'Power and Response', ar: 'القوة والاستجابة' },
    reflectionQuestion: {
      en: 'How does the story compare people who use power to control others with people who use strength to protect, help, or guide?',
      ar: 'كيف تقارن القصة بين من يستخدم القوة للسيطرة على الآخرين ومن يستخدمها للحماية أو المساعدة أو الهداية؟',
    },
    reflectionPrompts: {
      en: ['Use Pharaoh and Moses as your main contrast.', 'Add one detail about Queen Asiye or the two sisters.', 'What changes when the magicians recognize the truth but Pharaoh refuses it?'],
      ar: ['استخدم فرعون وموسى بوصفهما المقارنة الرئيسة.', 'أضف تفصيلًا عن الملكة آسية أو الفتاتين.', 'ماذا يتغير عندما يدرك السحرة الحق بينما يرفضه فرعون؟'],
    },
    quizTitle: { en: 'Moses B1 Relationship Check', ar: 'مراجعة علاقات قصة موسى B1' },
    quiz: [
      {
        question: { en: 'How does Pharaoh’s fear of losing control affect the Children of Israel?', ar: 'كيف يؤثر خوف فرعون من فقدان السيطرة في بني إسرائيل؟' },
        options: {
          en: ['His fear becomes a reason for forced labour and harsher oppression', 'His fear makes him share power with them', 'His fear ends all work in Egypt'],
          ar: ['يتحول خوفه إلى سبب للعمل القسري وزيادة الظلم', 'يدفعه خوفه إلى مشاركتهم السلطة', 'ينهي خوفه كل العمل في مصر'],
        },
        correct: 0,
        hint: { en: 'Connect the fear with what Pharaoh makes the people do.', ar: 'اربط الخوف بما يجبر فرعون الناس على فعله.' },
      },
      {
        question: { en: 'Why does the dream interpretation become a turning point?', ar: 'لماذا يصبح تفسير الحلم نقطة تحول؟' },
        options: {
          en: ['It turns Pharaoh’s fear into an order targeting newborn boys', 'It convinces Pharaoh that there is no danger', 'It causes the Children of Israel to leave Egypt at once'],
          ar: ['يحول خوف فرعون إلى أمر يستهدف المواليد الذكور', 'يقنع فرعون بأنه لا يوجد خطر', 'يجعل بني إسرائيل يغادرون مصر فورًا'],
        },
        correct: 0,
        hint: { en: 'Follow dream → interpretation → order.', ar: 'تتبع الحلم ثم التفسير ثم الأمر.' },
      },
      {
        question: { en: 'What does Moses’s mother’s action show about fear and trust?', ar: 'ماذا يكشف تصرف أم موسى عن الخوف والتوكل؟' },
        options: {
          en: ['She is worried but still acts according to the guidance and trusts Allah’s care', 'She feels no fear and therefore takes no risk', 'She trusts Pharaoh to protect Moses'],
          ar: ['تشعر بالقلق لكنها تعمل وفق الهداية وتثق برعاية الله', 'لا تشعر بأي خوف ولذلك لا تخاطر', 'تثق بفرعون ليحمي موسى'],
        },
        correct: 0,
        hint: { en: 'The chapter contains both strong emotion and deliberate action.', ar: 'يجمع الفصل بين المشاعر القوية والفعل المقصود.' },
      },
      {
        question: { en: 'How does Moses respond after the accidental death?', ar: 'كيف يستجيب موسى بعد الوفاة غير المقصودة؟' },
        options: {
          en: ['He regrets the mistake, asks Allah for forgiveness, and later leaves when danger grows', 'He celebrates the event as a victory', 'He asks Pharaoh for a reward'],
          ar: ['يندم ويطلب المغفرة ثم يغادر عندما يزداد الخطر', 'يحتفل بالحادث بوصفه انتصارًا', 'يطلب مكافأة من فرعون'],
        },
        correct: 0,
        hint: { en: 'Track mistake → regret → danger → departure.', ar: 'تتبع الخطأ ثم الندم ثم الخطر ثم الرحيل.' },
      },
      {
        question: { en: 'Why is the Midian scene important for Moses’s character?', ar: 'لماذا يعد مشهد مدين مهمًا في إظهار شخصية موسى؟' },
        options: {
          en: ['He helps people in need even while he is a tired traveller without power or status', 'He becomes a ruler before helping anyone', 'He refuses to help because the sisters are strangers'],
          ar: ['يساعد المحتاجين رغم أنه مسافر متعب بلا سلطة أو مكانة', 'يصبح حاكمًا قبل أن يساعد أحدًا', 'يرفض المساعدة لأن الفتاتين غريبتان'],
        },
        correct: 0,
        hint: { en: 'Focus on his condition and his action at the spring.', ar: 'ركز على حاله وفعلِه عند الماء.' },
      },
      {
        question: { en: 'Why does Harun’s role matter when Moses is sent back to Pharaoh?', ar: 'لماذا يهم دور هارون عندما يُرسل موسى إلى فرعون؟' },
        options: {
          en: ['The mission includes support and communication, not isolated individual strength', 'Harun replaces the signs given to Moses', 'Harun is sent to become Pharaoh’s adviser'],
          ar: ['تتضمن المهمة الدعم والتواصل لا قوة الفرد وحده', 'يحل هارون محل الآيات التي أعطيت لموسى', 'يُرسل هارون ليصبح مستشارًا لفرعون'],
        },
        correct: 0,
        hint: { en: 'Think about companionship and the difficult message they must deliver.', ar: 'فكر في الصحبة والرسالة الصعبة التي سيبلغانها.' },
      },
      {
        question: { en: 'What is the key contrast after the magicians see Moses’s sign?', ar: 'ما المقارنة الأساسية بعد أن يرى السحرة آية موسى؟' },
        options: {
          en: ['The magicians change their response and believe, while Pharaoh continues in arrogance', 'Both the magicians and Pharaoh immediately leave Egypt', 'Pharaoh believes first and the magicians refuse'],
          ar: ['يغير السحرة موقفهم ويؤمنون بينما يستمر فرعون في الكبر', 'يغادر السحرة وفرعون مصر فورًا', 'يؤمن فرعون أولًا ويرفض السحرة'],
        },
        correct: 0,
        hint: { en: 'Compare two responses to the same event.', ar: 'قارن استجابتين للحدث نفسه.' },
      },
      {
        question: { en: 'How does the sea crossing complete the story’s conflict about power?', ar: 'كيف يكمل عبور البحر صراع القصة حول القوة؟' },
        options: {
          en: ['Moses’s people move from fear to safety through Allah’s help, while Pharaoh’s claim to power cannot save him', 'Pharaoh proves that he controls the sea', 'The crossing shows that oppression had no consequences'],
          ar: ['ينتقل قوم موسى من الخوف إلى الأمان بعون الله بينما لا تنقذ فرعون دعواه للسلطة', 'يثبت فرعون أنه يتحكم في البحر', 'يبين العبور أن الظلم بلا نتائج'],
        },
        correct: 0,
        hint: { en: 'Compare the beginning’s political power with the ending’s outcome.', ar: 'قارن القوة السياسية في البداية بالنتيجة في النهاية.' },
      },
    ],
  },

  mecca: {
    sequenceTitle: { en: 'From Social Structure to Change', ar: 'من البنية الاجتماعية إلى التغير' },
    sequence: {
      en: [
        'Arabian society is organised around tribes rather than a central government.',
        'Mecca grows through pilgrimage, caravans, markets, and periods of protected travel.',
        'Wealth and status create serious inequality, debt, slavery, and weak protection for some groups.',
        'Religious life includes idols while Hanifs preserve belief in one Creator.',
        'The first revelation marks a major religious and historical change.',
        'Islam’s message of Tawhid, justice, and dignity challenges the interests of powerful Quraysh leaders and leads to opposition and boycott.',
      ],
      ar: [
        'يقوم المجتمع العربي على القبائل بدل حكومة مركزية.',
        'تنمو مكة بالحج والقوافل والأسواق وفترات السفر الآمن.',
        'تخلق الثروة والمكانة تفاوتًا شديدًا وديونًا وعبودية وضعفًا في حماية بعض الفئات.',
        'تشمل الحياة الدينية الأصنام بينما يحافظ الحنفاء على الإيمان بالخالق الواحد.',
        'يمثل الوحي الأول تحولًا دينيًا وتاريخيًا كبيرًا.',
        'تتحدى رسالة التوحيد والعدل والكرامة مصالح قادة قريش الأقوياء فتظهر المعارضة والمقاطعة.',
      ],
    },
    matchingTitle: { en: 'Structure, Cause, and Effect', ar: 'البنية والسبب والنتيجة' },
    matching: {
      en: [
        ['Barren land around Mecca', 'greater dependence on trade'],
        ['Sacred months', 'safer movement for pilgrimage and markets'],
        ['Usury and concentrated wealth', 'a wider gap between rich and poor'],
        ['Message of equality and Tawhid', 'a challenge to established social and economic power'],
      ],
      ar: [
        ['الأرض القاحلة حول مكة', 'اعتماد أكبر على التجارة'],
        ['الأشهر الحرم', 'حركة أكثر أمانًا للحج والأسواق'],
        ['الربا وتركز الثروة', 'اتساع الفجوة بين الغني والفقير'],
        ['رسالة المساواة والتوحيد', 'تحدٍ للسلطة الاجتماعية والاقتصادية القائمة'],
      ],
    },
    reflectionTitle: { en: 'Why Did Change Meet Resistance?', ar: 'لماذا واجه التغير مقاومة؟' },
    reflectionQuestion: {
      en: 'Why can a religious message also become a social and economic challenge in the Mecca narrative?',
      ar: 'لماذا يمكن أن تصبح الرسالة الدينية أيضًا تحديًا اجتماعيًا واقتصاديًا في قصة مكة؟',
    },
    reflectionPrompts: {
      en: ['Use one detail about trade or wealth.', 'Use one detail about weak or enslaved people.', 'Connect Tawhid or equality with Quraysh leaders’ fear of losing power.'],
      ar: ['استخدم تفصيلًا عن التجارة أو الثروة.', 'استخدم تفصيلًا عن الضعفاء أو المستعبدين.', 'اربط التوحيد أو المساواة بخوف قادة قريش من فقدان السلطة.'],
    },
    quizTitle: { en: 'Mecca B1 Cause-and-Change Check', ar: 'مراجعة السبب والتغير في مكة B1' },
    quiz: [
      {
        question: { en: 'How did the absence of a central government shape society?', ar: 'كيف شكّل غياب الحكومة المركزية المجتمع؟' },
        options: {
          en: ['Tribes became the basic political and social units, and protection depended heavily on group power', 'Every person followed the same national legal system', 'Merchant councils disappeared from Mecca'],
          ar: ['أصبحت القبائل الوحدات السياسية والاجتماعية الأساسية واعتمدت الحماية بدرجة كبيرة على قوة الجماعة', 'اتبع الجميع نظامًا قانونيًا وطنيًا واحدًا', 'اختفت مجالس التجار من مكة'],
        },
        correct: 0,
        hint: { en: 'Connect “no central government” with “tribes were the basis of society.”', ar: 'اربط غياب الحكومة المركزية بكون القبائل أساس المجتمع.' },
      },
      {
        question: { en: 'Why did trade become especially important to Mecca?', ar: 'لماذا أصبحت التجارة مهمة بصورة خاصة لمكة؟' },
        options: {
          en: ['The barren environment limited farming while Mecca’s location and pilgrimage supported caravan trade', 'Mecca had the most fertile farmland in Arabia', 'Trade was the only activity allowed during the whole year'],
          ar: ['حدت البيئة القاحلة من الزراعة بينما دعم الموقع والحج تجارة القوافل', 'كانت مكة أخصب منطقة زراعية في الجزيرة العربية', 'كانت التجارة النشاط الوحيد المسموح به طوال العام'],
        },
        correct: 0,
        hint: { en: 'Connect environment with economic choice.', ar: 'اربط البيئة بالخيار الاقتصادي.' },
      },
      {
        question: { en: 'How did the sacred months support both religion and economy?', ar: 'كيف دعمت الأشهر الحرم الدين والاقتصاد معًا؟' },
        options: {
          en: ['Reduced fighting made pilgrimage, travel, and markets safer', 'They stopped all travel and trade', 'They turned Mecca into farmland'],
          ar: ['جعل تقليل القتال الحج والسفر والأسواق أكثر أمانًا', 'أوقفت كل السفر والتجارة', 'حولت مكة إلى أرض زراعية'],
        },
        correct: 0,
        hint: { en: 'Think about what safety allows people to do.', ar: 'فكر فيما يسمح الأمان للناس بفعله.' },
      },
      {
        question: { en: 'Why is usury presented as more than a private financial issue?', ar: 'لماذا يعرض الربا بوصفه أكثر من مسألة مالية فردية؟' },
        options: {
          en: ['It can trap debtors and increase the social gap between powerful lenders and poor borrowers', 'It guarantees equal wealth for all families', 'It removes the need for trade'],
          ar: ['قد يحاصر المدينين ويزيد الفجوة الاجتماعية بين المقرضين الأقوياء والمقترضين الفقراء', 'يضمن ثروة متساوية لجميع الأسر', 'يلغي الحاجة إلى التجارة'],
        },
        correct: 0,
        hint: { en: 'Follow money → debt → inequality.', ar: 'تتبع المال ثم الدين ثم عدم المساواة.' },
      },
      {
        question: { en: 'What does the treatment of weak and enslaved people reveal about status in the society described?', ar: 'ماذا تكشف معاملة الضعفاء والمستعبدين عن المكانة في المجتمع الموصوف؟' },
        options: {
          en: ['Protection and dignity were often unequal and depended on wealth, lineage, or tribal power', 'Every person had the same social protection', 'Status was based only on literary skill'],
          ar: ['كانت الحماية والكرامة غير متساويتين غالبًا وتعتمدان على الثروة أو النسب أو قوة القبيلة', 'كان لكل شخص الحماية الاجتماعية نفسها', 'كانت المكانة تعتمد فقط على المهارة الأدبية'],
        },
        correct: 0,
        hint: { en: 'Compare strong groups with people who had little protection.', ar: 'قارن الجماعات القوية بمن كانت حمايتهم قليلة.' },
      },
      {
        question: { en: 'Why are Hanifs important in the religious picture of pre-Islamic Mecca?', ar: 'لماذا يعد الحنفاء مهمين في الصورة الدينية لمكة قبل الإسلام؟' },
        options: {
          en: ['They show that belief connected with Abraham’s monotheism continued alongside widespread idolatry', 'They controlled the idol trade around the Ka’ba', 'They introduced Roman polytheism into Arabia'],
          ar: ['يبينون استمرار الإيمان المرتبط بتوحيد إبراهيم إلى جانب انتشار عبادة الأصنام', 'كانوا يسيطرون على تجارة الأصنام حول الكعبة', 'أدخلوا التعدد الروماني إلى الجزيرة العربية'],
        },
        correct: 0,
        hint: { en: 'They are a contrast within the same religious setting.', ar: 'يمثلون مقارنة داخل البيئة الدينية نفسها.' },
      },
      {
        question: { en: 'Why did Islam’s message threaten some Quraysh leaders?', ar: 'لماذا هددت رسالة الإسلام بعض قادة قريش؟' },
        options: {
          en: ['Tawhid and social justice challenged religious privilege, economic interests, and unequal power', 'It promised to strengthen every existing form of inequality', 'It required Mecca to abandon all honest trade'],
          ar: ['تحدى التوحيد والعدل الاجتماعي الامتياز الديني والمصالح الاقتصادية والسلطة غير المتساوية', 'وعد بتقوية كل أشكال عدم المساواة القائمة', 'طلب من مكة ترك كل تجارة عادلة'],
        },
        correct: 0,
        hint: { en: 'Connect belief, economy, and leadership.', ar: 'اربط الإيمان والاقتصاد والقيادة.' },
      },
      {
        question: { en: 'What does the boycott show about the conflict?', ar: 'ماذا تبين المقاطعة عن الصراع؟' },
        options: {
          en: ['Opposition moved from disagreement into organized social and economic pressure', 'The conflict ended before any pressure was used', 'The boycott made all Quraysh leaders accept Islam immediately'],
          ar: ['انتقلت المعارضة من الخلاف إلى ضغط اجتماعي واقتصادي منظم', 'انتهى الصراع قبل استخدام أي ضغط', 'جعلت المقاطعة جميع قادة قريش يقبلون الإسلام فورًا'],
        },
        correct: 0,
        hint: { en: 'Think about isolation, trade, and access to basic needs.', ar: 'فكر في العزلة والتجارة والوصول إلى الاحتياجات الأساسية.' },
      },
    ],
  },

  yunusEmre: {
    sequenceTitle: { en: 'Historical Pressure and Moral Response', ar: 'الضغط التاريخي والاستجابة الأخلاقية' },
    sequence: {
      en: [
        'Yunus Emre is introduced as a Sûfî poet who uses accessible Turkish.',
        'Madrasa and tekke education shape different parts of his learning.',
        'Tekkes also serve social, artistic, and community functions.',
        'Revolts, defeat, invasion, and hardship create serious instability in Anatolia.',
        'Yunus responds through Sûfî life and poetry focused on Tawhid, love, and the heart.',
        'His later moral teaching emphasizes meaningful life, patience, humility, and control of anger and greed.',
      ],
      ar: [
        'يُقدَّم يونس إمره شاعرًا صوفيًا يستخدم تركية سهلة.',
        'يشكل تعليم المدرسة والتكية جوانب مختلفة من تعلمه.',
        'تؤدي التكايا أيضًا أدوارًا اجتماعية وفنية ومجتمعية.',
        'تخلق الثورات والهزيمة والغزو والمشقة اضطرابًا شديدًا في الأناضول.',
        'يستجيب يونس بالحياة الصوفية والشعر الذي يركز على التوحيد والمحبة والقلب.',
        'تؤكد تعاليمه الأخلاقية اللاحقة الحياة ذات المعنى والصبر والتواضع وضبط الغضب والطمع.',
      ],
    },
    matchingTitle: { en: 'Context and Response', ar: 'السياق والاستجابة' },
    matching: {
      en: [
        ['Simple literary Turkish', 'a message ordinary people can understand'],
        ['Tekkes', 'training plus social and artistic support'],
        ['War, invasion, and social chaos', 'a stronger search for comfort and meaning'],
        ['Poetry about love, patience, and humility', 'moral guidance in difficult times'],
      ],
      ar: [
        ['التركية الأدبية البسيطة', 'رسالة يستطيع عامة الناس فهمها'],
        ['التكايا', 'تدريب مع دعم اجتماعي وفني'],
        ['الحرب والغزو والفوضى الاجتماعية', 'بحث أقوى عن الراحة والمعنى'],
        ['الشعر عن المحبة والصبر والتواضع', 'هداية أخلاقية في الأوقات الصعبة'],
      ],
    },
    reflectionTitle: { en: 'History, Language, and Meaning', ar: 'التاريخ واللغة والمعنى' },
    reflectionQuestion: {
      en: 'Why might simple language and moral poetry become especially powerful during a period of political and social instability?',
      ar: 'لماذا يمكن أن تصبح اللغة البسيطة والشعر الأخلاقي أكثر تأثيرًا في فترة من الاضطراب السياسي والاجتماعي؟',
    },
    reflectionPrompts: {
      en: ['Use one detail about Anatolian hardship.', 'Use one detail about Yunus Emre’s language or poetry.', 'Explain one value—love, patience, humility, or honesty—as a response to that context.'],
      ar: ['استخدم تفصيلًا عن صعوبات الأناضول.', 'استخدم تفصيلًا عن لغة يونس إمره أو شعره.', 'اشرح قيمة واحدة ـ المحبة أو الصبر أو التواضع أو الصدق ـ بوصفها استجابة لذلك السياق.'],
    },
    quizTitle: { en: 'Yunus Emre B1 Meaning Check', ar: 'مراجعة معنى قصة يونس إمره B1' },
    quiz: [
      {
        question: { en: 'Why is Yunus Emre’s simple Turkish important in the story?', ar: 'لماذا تعد التركية البسيطة ليونس إمره مهمة في القصة؟' },
        options: {
          en: ['It allows literary and moral ideas to reach people more directly', 'It prevents his work from having literary quality', 'It limits his work to government officials'],
          ar: ['تسمح للأفكار الأدبية والأخلاقية بالوصول إلى الناس بصورة مباشرة', 'تمنع أعماله من امتلاك جودة أدبية', 'تحصر أعماله في موظفي الحكومة'],
        },
        correct: 0,
        hint: { en: 'Connect accessibility with popularity and influence.', ar: 'اربط سهولة اللغة بالشعبية والتأثير.' },
      },
      {
        question: { en: 'What does presenting madrasa and tekke education together show?', ar: 'ماذا يوضح عرض تعليم المدرسة والتكية معًا؟' },
        options: {
          en: ['Yunus’s development includes formal learning as well as moral and spiritual training', 'The two institutions are described as identical', 'He rejects all learning outside the tekke'],
          ar: ['يشمل تطور يونس التعلم الرسمي إلى جانب التربية الأخلاقية والروحية', 'توصف المؤسستان بأنهما متطابقتان', 'يرفض كل تعلم خارج التكية'],
        },
        correct: 0,
        hint: { en: 'Compare what he learns in the two settings.', ar: 'قارن ما يتعلمه في البيئتين.' },
      },
      {
        question: { en: 'Why are tekkes more than religious training places in the story?', ar: 'لماذا تعد التكايا أكثر من أماكن للتدريب الديني في القصة؟' },
        options: {
          en: ['They also help communities, bring people together, and support arts', 'They function only as military bases', 'They exist only to collect taxes'],
          ar: ['تساعد المجتمعات وتجمع الناس وتدعم الفنون أيضًا', 'تعمل فقط كقواعد عسكرية', 'توجد فقط لجمع الضرائب'],
        },
        correct: 0,
        hint: { en: 'Look at their social and artistic functions.', ar: 'انظر إلى أدوارها الاجتماعية والفنية.' },
      },
      {
        question: { en: 'How does the difficult Anatolian context increase the importance of Yunus’s message?', ar: 'كيف يزيد السياق الأناضولي الصعب أهمية رسالة يونس؟' },
        options: {
          en: ['War, poverty, and instability increase people’s need for meaning, unity, and moral guidance', 'The chaos makes poetry completely unnecessary', 'The invasions create a long period without social problems'],
          ar: ['تزيد الحرب والفقر وعدم الاستقرار حاجة الناس إلى المعنى والوحدة والهداية الأخلاقية', 'تجعل الفوضى الشعر غير ضروري تمامًا', 'تخلق الغزوات فترة طويلة بلا مشكلات اجتماعية'],
        },
        correct: 0,
        hint: { en: 'Connect historical pressure with the search for comfort and guidance.', ar: 'اربط الضغط التاريخي بالبحث عن الراحة والهداية.' },
      },
      {
        question: { en: 'How does poetry function as a tool for Yunus Emre?', ar: 'كيف يعمل الشعر أداة لدى يونس إمره؟' },
        options: {
          en: ['It carries Sûfî ideas and moral guidance in memorable, accessible language', 'It records only trade prices and taxes', 'It separates him from ordinary people'],
          ar: ['يحمل الأفكار الصوفية والهداية الأخلاقية بلغة سهلة التذكر والفهم', 'يسجل فقط أسعار التجارة والضرائب', 'يفصله عن عامة الناس'],
        },
        correct: 0,
        hint: { en: 'Connect his literary style with his influence.', ar: 'اربط أسلوبه الأدبي بتأثيره.' },
      },
      {
        question: { en: 'What relationship does the story build between Tawhid and love?', ar: 'ما العلاقة التي تبنيها القصة بين التوحيد والمحبة؟' },
        options: {
          en: ['Belief in the oneness of Allah supports a view of creation connected through love and unity', 'Tawhid is presented as a political tax system', 'Love is described as a reason to reject all community ties'],
          ar: ['يدعم الإيمان بوحدانية الله رؤية للخلق ترتبط بالمحبة والوحدة', 'يعرض التوحيد كنظام ضريبي سياسي', 'توصف المحبة سببًا لرفض كل الروابط المجتمعية'],
        },
        correct: 0,
        hint: { en: 'Use the chapters that connect unity, love, and harmony.', ar: 'استخدم الفصول التي تربط الوحدة والمحبة والانسجام.' },
      },
      {
        question: { en: 'Why does remembering death function as moral advice in the story?', ar: 'لماذا يعمل تذكر الموت نصيحة أخلاقية في القصة؟' },
        options: {
          en: ['It encourages people to use limited life honestly and meaningfully rather than live only for status or greed', 'It tells people that daily actions have no value', 'It removes the need for patience and responsibility'],
          ar: ['يشجع الناس على استخدام الحياة المحدودة بصدق ومعنى بدل العيش للمكانة أو الطمع فقط', 'يقول إن الأفعال اليومية بلا قيمة', 'يلغي الحاجة إلى الصبر والمسؤولية'],
        },
        correct: 0,
        hint: { en: 'Connect limited life with choices about how to live.', ar: 'اربط محدودية الحياة بالاختيارات المتعلقة بكيفية العيش.' },
      },
      {
        question: { en: 'How do the final warnings about rage, arrogance, and greed fit the whole story?', ar: 'كيف تنسجم التحذيرات الأخيرة من الغضب والكبر والطمع مع القصة كلها؟' },
        options: {
          en: ['They turn Yunus’s spiritual ideas into practical habits of patience, humility, and moral self-discipline', 'They replace every earlier idea with rules about wealth', 'They show that historical context no longer matters'],
          ar: ['تحول أفكار يونس الروحية إلى عادات عملية من الصبر والتواضع والانضباط الأخلاقي', 'تستبدل كل الأفكار السابقة بقواعد عن الثروة', 'تبين أن السياق التاريخي لم يعد مهمًا'],
        },
        correct: 0,
        hint: { en: 'Connect abstract values with everyday behaviour.', ar: 'اربط القيم بالأفعال اليومية.' },
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

export const buildB1GoldReview = (
  story: B1GoldStory,
  language: BlueprintLanguage,
): Exercise[] => {
  const profile = profiles[story];
  const isAr = language === 'ar';
  const sequenceItems = localized(profile.sequence, language).map((text, index) => ({ id: String(index + 1), text }));
  const pairs = localized(profile.matching, language).map(([left, right]) => ({ left, right }));
  const reflectionPrompts = localized(profile.reflectionPrompts, language);

  return [
    {
      id: `${story}-b1-gold-review-sequence`,
      type: 'sequencing',
      title: localized(profile.sequenceTitle, language),
      instructions: isAr ? 'رتب المراحل الرئيسة بحسب تسلسل القصة.' : 'Put the main stages in the order used by the story.',
      question: isAr ? 'ما التسلسل الذي يوضح تطور القصة؟' : 'Which sequence best represents the development of the story?',
      correctAnswer: sequenceItems.map(item => item.id),
      sequencingItems: sequenceItems,
      explanation: isAr ? 'يساعد التسلسل على رؤية كيف يقود حدث أو قرار إلى المرحلة التالية.' : 'The sequence shows how an event, choice, or response leads into the next stage.',
      feedback: {
        correct: isAr ? 'صحيح. لقد استرجعت مسار القصة الرئيس.' : 'Correct. You retrieved the main narrative path.',
        incorrect: isAr ? 'راجع نقاط التحول لا التفاصيل الصغيرة، ثم أعد ترتيب المراحل.' : 'Recheck the turning points rather than minor details, then reorder the stages.',
      },
    },
    {
      id: `${story}-b1-gold-review-matching`,
      type: 'matching',
      title: localized(profile.matchingTitle, language),
      instructions: isAr ? 'صل كل تفصيل بالعلاقة أو المعنى الذي يدعمه النص.' : 'Match each story detail with the relationship or meaning supported by the text.',
      question: isAr ? 'صل الدليل بما يوضحه.' : 'Match the evidence with what it shows.',
      correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
      matchingPairs: pairs,
      explanation: isAr ? 'كل زوج يعتمد على علاقة واضحة في القصة، لا على معلومة خارجية.' : 'Every pair uses a relationship stated or clearly supported by the story, not outside information.',
      feedback: {
        correct: isAr ? 'صحيح. ربطت الأدلة بالعلاقات المناسبة.' : 'Correct. You connected the evidence with the right relationships.',
        incorrect: isAr ? 'حدد أولًا هل العلاقة سبب أم مقارنة أم استجابة، ثم حاول من جديد.' : 'First decide whether each link is a cause, contrast, or response, then try again.',
      },
    },
    {
      id: `${story}-b1-gold-review-reflection`,
      type: 'reflection',
      title: localized(profile.reflectionTitle, language),
      instructions: isAr ? 'أجب بدليل من القصة في 3–5 جمل.' : 'Answer in 3–5 sentences and use evidence from the story.',
      question: localized(profile.reflectionQuestion, language),
      correctAnswer: null,
      discussionPrompts: reflectionPrompts.map((question, index) => ({
        question,
        mode: isAr ? (index === 0 ? 'فردي' : index === 1 ? 'ثنائي' : 'صفي') : (index === 0 ? 'Individual' : index === 1 ? 'Pair' : 'Class'),
      })),
      explanation: isAr ? 'الإجابة القوية في B1 تقدم فكرة واضحة ودليلًا مناسبًا وتفسيرًا قصيرًا للعلاقة بينهما.' : 'A strong B1 response gives a clear claim, relevant story evidence, and a short explanation of the relationship.',
      feedback: {
        correct: isAr ? 'استخدمت القصة لبناء تفسير مدعوم.' : 'You used the story to build a supported explanation.',
        incorrect: isAr ? 'قلل التفسير المجرد: اختر تفصيلين من القصة واربطهما بفكرة واحدة واضحة.' : 'Reduce abstract interpretation: choose two story details and connect them to one clear claim.',
      },
    },
    {
      id: `${story}-b1-gold-review-quiz`,
      type: 'quiz-game',
      title: localized(profile.quizTitle, language),
      instructions: isAr ? 'أجب عن ثمانية أسئلة تركز على العلاقات والأدلة في القصة.' : 'Answer eight questions focused on relationships and evidence across the story.',
      question: isAr ? 'هل تستطيع تفسير ما حدث ولماذا؟' : 'Can you explain what happened and why?',
      correctAnswer: null,
      quizQuestions: makeQuizQuestions(profile.quiz, language),
      explanation: isAr ? 'تقيس الأسئلة السبب والنتيجة والمقارنة والتسلسل والاختيارات والدروس المدعومة بالنص.' : 'The questions check cause/result, comparison, sequence, choices, and story-supported lessons.',
      feedback: {
        correct: isAr ? 'أحسنت. أنت تربط أحداث القصة بدل حفظ التفاصيل فقط.' : 'Well done. You are connecting the story rather than memorising isolated details.',
        incorrect: isAr ? 'استخدم التلميح وحدد الفصل الذي يحتوي على العلاقة المطلوبة ثم أعد المحاولة.' : 'Use the hint, locate the chapter containing the relationship, and try again.',
      },
    },
  ];
};
