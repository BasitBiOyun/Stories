import type { PageData, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const teacherCopy = {
  en: {
    purpose: 'A Ministry-ready A2 teaching companion for the sixteen-chapter story of Prophet Moses. The learning path is organised around explicit chapter outcomes, same-chapter evidence, TYMM foreign-language skills, CEFR A2 reception, contextual language use, formative assessment, diagnostic feedback, differentiation, retrieval, and transfer.',
    approach: 'Use the story as the factual source and the Learning Blueprint as the pedagogical map. Read first for meaning, then ask learners to locate evidence, connect a simple cause/result or comparison, notice useful A2 language in context, respond to feedback, retrieve learning after a delay, and produce short supported speech or writing. Do not turn A2 into trivia or simplify the thinking to single-word recall.',
    assessment: 'Evidence is gathered through one Quick Challenge in every chapter, eight Knowledge Check questions, a curated six-word Vocabulary Challenge, four Retrieval Review activities with an eight-question game, ten Final Challenge activities, teacher evidence checks, exit responses, and short transfer tasks.',
  },
  ar: {
    purpose: 'دليل تدريس بمستوى A2 جاهز للعرض المؤسسي لقصة النبي موسى في ستة عشر فصلًا. ينظم مسار التعلم حول نواتج واضحة لكل فصل، وأدلة من الفصل نفسه، ومهارات اللغة الأجنبية في TYMM، واستقبال CEFR A2، واستخدام اللغة في السياق، والتقويم التكويني، والتغذية الراجعة التشخيصية، والتمايز، والاسترجاع، ونقل التعلم.',
    approach: 'اجعل القصة المصدر الواقعي وخريطة التعلم الدليل التربوي. اقرأ أولًا من أجل المعنى، ثم اطلب من المتعلم تحديد الدليل وربط سبب ونتيجة بسيطين أو إجراء مقارنة واضحة وملاحظة لغة A2 المفيدة في السياق والاستفادة من التغذية الراجعة واسترجاع التعلم بعد فترة وإنتاج كلام أو كتابة قصيرة مدعومة. لا تحول A2 إلى أسئلة تفاصيل عشوائية ولا تختزل التفكير في استرجاع كلمة واحدة.',
    assessment: 'تجمع أدلة التعلم من تحدٍّ سريع واحد في كل فصل، وثمانية أسئلة في اختبار الفهم، وتحدي مفردات منتقى من ست كلمات، وأربعة أنشطة في مراجعة الاسترجاع تتضمن لعبة من ثمانية أسئلة، وعشرة أنشطة في التحدي النهائي، وفحوص الدليل وبطاقات الخروج ومهام نقل قصيرة.',
  },
};

const rubricRows = (language: BlueprintLanguage) => language === 'en'
  ? [
      { criterion: 'Story comprehension', excellent: 'Identifies the main event, important details, and clear relationships accurately.', good: 'Understands the main event and most important details with one minor gap.', developing: 'Relies on guessing or confuses important events, people, or relationships.' },
      { criterion: 'Text evidence', excellent: 'Points to the relevant sentence or detail and explains how it supports the answer.', good: 'Finds relevant evidence after a short prompt.', developing: 'Cannot locate supporting evidence or selects an unrelated detail.' },
      { criterion: 'Cause, sequence & comparison', excellent: 'Correctly connects simple reasons/results, orders events, or compares responses when the chapter requires it.', good: 'Makes the connection with a small prompt or one minor error.', developing: 'Repeats isolated details without showing the required relationship.' },
      { criterion: 'A2 language in context', excellent: 'Uses short clear sentences and chapter-appropriate A2 forms; errors do not block meaning.', good: 'Communicates the idea with understandable A2 language and some support.', developing: 'Language errors block meaning or the learner mainly copies the story.' },
      { criterion: 'Retrieval & transfer', excellent: 'Recalls key ideas without looking and uses them accurately in one new short response.', good: 'Recalls the idea after a prompt and gives a simple application.', developing: 'Needs repeated rereading or cannot use the idea beyond copying.' },
    ]
  : [
      { criterion: 'فهم القصة', excellent: 'يحدد الحدث الرئيس والتفاصيل المهمة والعلاقات الواضحة بدقة.', good: 'يفهم الحدث الرئيس ومعظم التفاصيل المهمة مع نقص بسيط.', developing: 'يعتمد على التخمين أو يخلط بين أحداث أو أشخاص أو علاقات مهمة.' },
      { criterion: 'استخدام الدليل من النص', excellent: 'يشير إلى الجملة أو التفصيل المناسب ويشرح كيف يدعم الإجابة.', good: 'يجد دليلًا مناسبًا بعد تلميح قصير.', developing: 'لا يستطيع تحديد الدليل أو يختار تفصيلًا غير مرتبط.' },
      { criterion: 'السبب والتسلسل والمقارنة', excellent: 'يربط الأسباب والنتائج البسيطة أو يرتب الأحداث أو يقارن الردود بدقة عندما يتطلب الفصل ذلك.', good: 'ينجز الربط بعد تلميح بسيط أو مع خطأ صغير.', developing: 'يكرر تفاصيل منفصلة دون إظهار العلاقة المطلوبة.' },
      { criterion: 'استخدام لغة A2 في السياق', excellent: 'يستخدم جملًا قصيرة واضحة وتراكيب A2 مناسبة للفصل مع أخطاء لا تعيق المعنى.', good: 'يوصل الفكرة بلغة A2 مفهومة مع بعض الدعم.', developing: 'تعيق الأخطاء المعنى أو يعتمد المتعلم أساسًا على نسخ النص.' },
      { criterion: 'الاسترجاع ونقل التعلم', excellent: 'يسترجع الأفكار الأساسية دون النظر ويستخدمها بدقة في استجابة قصيرة جديدة.', good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا.', developing: 'يحتاج إلى إعادة قراءة متكررة أو لا يستطيع استخدام الفكرة خارج النسخ.' },
    ];

export const buildMosesA2GoldTeacherGuideMetadata = (
  base: TeacherGuideMetadata,
  language: BlueprintLanguage,
): TeacherGuideMetadata => {
  const copy = teacherCopy[language];
  return {
    ...base,
    purpose: copy.purpose,
    approachDesc: copy.approach,
    assessmentEvidence: copy.assessment,
    targetLearners: language === 'en'
      ? 'Lower-secondary EFL learners working at CEFR A2. The story can also be used with older A2 learners; adjust pace and scaffolding without lowering the core outcomes.'
      : 'متعلمات ومتعلمو اللغة الإنجليزية في المرحلة المتوسطة ممن يعملون عند مستوى CEFR A2. ويمكن استخدام القصة مع متعلمين أكبر سنًا في المستوى نفسه مع تكييف السرعة والدعم دون خفض نواتج التعلم الأساسية.',
    implementationPlans: language === 'en'
      ? {
          optionA: {
            title: 'One Chapter, One Lesson',
            steps: [
              { time: '5–7 min', activity: 'Orient with the title/image, activate only needed prior knowledge, and make one purposeful prediction.' },
              { time: '10–12 min', activity: 'Read/listen once for overall meaning. Keep the narrative moving instead of explaining every word.' },
              { time: '8–10 min', activity: 'Reread for the two chapter outcomes, mark evidence, and complete the Quick Challenge.' },
              { time: '5–7 min', activity: 'Use the chapter grammar/vocabulary in one short transfer response and finish with an evidence-based exit check.' },
            ],
          },
          optionB: {
            title: 'Two-Pass Chapter Cycle',
            lessons: [
              { title: 'Pass 1 — Meaning & Evidence', description: 'Read/listen for the main event, identify the two learning outcomes, and locate the story evidence that supports them. Finish with the Quick Challenge.' },
              { title: 'Pass 2 — Language, Retrieval & Transfer', description: 'Revisit selected vocabulary and the TYMM-A2 grammar focus in context, retrieve the chapter meaning without looking, and produce a short supported response.' },
            ],
          },
        }
      : {
          optionA: {
            title: 'فصل واحد في حصة واحدة',
            steps: [
              { time: '5–7 دقائق', activity: 'ابدأ بالعنوان والصورة، وفعل المعرفة السابقة الضرورية فقط، ثم ضع توقعًا واحدًا هادفًا.' },
              { time: '10–12 دقيقة', activity: 'اقرأ/استمع مرة لفهم المعنى العام مع الحفاظ على تدفق القصة بدل شرح كل كلمة.' },
              { time: '8–10 دقائق', activity: 'أعد القراءة من أجل هدفي الفصل، وحدد الدليل، ثم نفذ التحدي السريع.' },
              { time: '5–7 دقائق', activity: 'استخدم تركيب الفصل ومفرداته في استجابة نقل قصيرة، ثم اختم بفحص خروج قائم على الدليل.' },
            ],
          },
          optionB: {
            title: 'دورة من مرحلتين للفصل',
            lessons: [
              { title: 'المرحلة 1 — المعنى والدليل', description: 'اقرأ/استمع للحدث الرئيس وحدد هدفي التعلم وابحث عن الدليل الذي يدعمهما. اختم بالتحدي السريع.' },
              { title: 'المرحلة 2 — اللغة والاسترجاع والنقل', description: 'راجع المفردات المختارة وتركيب TYMM-A2 في السياق، واسترجع معنى الفصل دون النظر، ثم أنتج استجابة قصيرة مدعومة.' },
            ],
          },
        },
    assessmentOverview: {
      formative: language === 'en'
        ? ['Quick Challenge in every chapter', 'Text-evidence checks', 'Teacher observation', 'Exit response', 'Short transfer task', 'Learner correction after feedback']
        : ['التحدي السريع في كل فصل', 'فحوص الدليل من النص', 'ملاحظة المعلم', 'إجابة الخروج', 'مهمة نقل قصيرة', 'تصحيح المتعلم بعد التغذية الراجعة'],
      summative: language === 'en'
        ? ['Eight-question Knowledge Check', 'Curated six-word Vocabulary Challenge', 'Four-part Retrieval Review', 'Ten-question Final Challenge']
        : ['اختبار فهم من ثمانية أسئلة', 'تحدي مفردات منتقى من ست كلمات', 'مراجعة استرجاع من أربعة أجزاء', 'تحدٍّ نهائي من عشرة أسئلة'],
    },
    readingFramework: language === 'en'
      ? {
          before: 'Activate only what the chapter needs and make a prediction from the title/image without giving away the answer.',
          during: 'Read first for meaning, then reread for evidence, sequence, cause/result, comparison, or character response according to the chapter outcomes.',
          after: 'Move from evidence to one short A2 explanation, comparison, sequence, or transfer response; use the result to decide whether retrieval or support is needed.',
        }
      : {
          before: 'فعّل فقط ما يحتاجه الفصل وضع توقعًا من العنوان/الصورة دون كشف الإجابة.',
          during: 'اقرأ أولًا للمعنى، ثم أعد القراءة بحثًا عن الدليل أو التسلسل أو السبب والنتيجة أو المقارنة أو رد الشخصية وفق هدفي الفصل.',
          after: 'انتقل من الدليل إلى تفسير أو مقارنة أو تسلسل أو استجابة نقل قصيرة تناسب A2، واستخدم النتيجة لتحديد الحاجة إلى استرجاع أو دعم.',
        },
    skillsFocus: language === 'en'
      ? {
          reading: 'TYMM YDAB2 + CEFR A2: understand short narrative information, follow events, locate evidence, connect simple causes/results, and compare clear responses.',
          listening: 'Use the narration as a second reception route for the same main event, sequence, and key vocabulary already grounded in the story.',
          speaking: 'TYMM YDAB3 supporting: give one or two short A2 sentences that explain or compare a chapter-supported idea.',
          writing: 'TYMM YDAB4 supporting: write short evidence-based sentences for sequence, cause/result, comparison, or reflection.',
        }
      : {
          reading: 'TYMM YDAB2 + CEFR A2: فهم المعلومات السردية القصيرة وتتبع الأحداث وتحديد الدليل وربط السبب والنتيجة البسيطين ومقارنة الردود الواضحة.',
          listening: 'استخدم السرد الصوتي مسار استقبال ثانٍ للحدث والتسلسل والمفردات الأساسية نفسها الموثقة في القصة.',
          speaking: 'YDAB3 داعم: تقديم جملة أو جملتين قصيرتين بمستوى A2 تشرحان أو تقارنان فكرة يدعمها الفصل.',
          writing: 'YDAB4 داعم: كتابة جمل قصيرة قائمة على الدليل للتسلسل أو السبب والنتيجة أو المقارنة أو التأمل.',
        },
    languageFocus: language === 'en'
      ? ['Simple Past for narrative events', 'Past Progressive with Simple Past where the story supports background + event', 'could/could not for past ability or possibility', 'because/so for cause and result', 'comparisons with clear story evidence', 'must for obligation', 'will for intention, promise, or reassurance', 'Wh-questions for reason and place', 'vocabulary in context rather than isolated memorisation']
      : ['الماضي البسيط للأحداث السردية', 'الماضي المستمر مع الماضي البسيط للخلفية والحدث عندما يدعمه النص', 'could/could not للقدرة أو الإمكان في الماضي', 'because/so للسبب والنتيجة', 'المقارنة عندما يدعمها النص بوضوح', 'must للإلزام', 'will للنية أو الوعد أو الطمأنة', 'أسئلة Wh للسبب والمكان', 'المفردات في السياق بدل الحفظ المنفصل'],
    valuesFocus: language === 'en'
      ? ['Fair use of power', 'Trust in difficult situations', 'Learning and seeking forgiveness after a mistake', 'Helping people in need', 'Responding to truth without arrogance', 'Human dignity and freedom']
      : ['الاستخدام العادل للسلطة', 'الثقة في المواقف الصعبة', 'التعلم وطلب المغفرة بعد الخطأ', 'مساعدة المحتاج', 'الاستجابة للحق دون تكبر', 'كرامة الإنسان وحريته'],
    differentiationNotes: language === 'en'
      ? 'Use each chapter’s Support and Fast Finisher routes. Support reduces linguistic load while preserving the same outcome; enrichment adds evidence, connection, or transfer rather than extra trivia.'
      : 'استخدم مساري الدعم والمتقدمين في كل فصل. يقلل الدعم العبء اللغوي مع الحفاظ على ناتج التعلم نفسه، ويضيف الإثراء دليلًا أو ربطًا أو نقلًا بدل تفاصيل عشوائية إضافية.',
    rubricTitle: language === 'en' ? 'Moses A2 Learning Evidence Rubric' : 'معايير أدلة التعلم — موسى A2',
    rubricRows: rubricRows(language),
  };
};

export const buildMosesA2GoldStudentGuideSections = (language: BlueprintLanguage): StudentGuideSection[] => (
  language === 'en'
    ? [
        { title: 'Follow the Long Story', icon: 'Target', text: 'Moses’s story has sixteen chapters. Use the two goals in each chapter so you know what matters instead of trying to memorise every detail.', points: ['Read the goals before each chapter.', 'After reading, say the two ideas you can now explain.'] },
        { title: 'Find the Evidence', icon: 'Eye', text: 'Good answers come from the story. Find the sentence or detail that supports your answer before you change it.', points: ['Mark one supporting sentence.', 'Do not add outside information to a story question.'] },
        { title: 'Connect Ideas', icon: 'GitBranch', text: 'Some A2 questions ask more than one detail. Look for simple cause/result, sequence, or comparison links.', points: ['Ask: Why did this happen?', 'Ask: What changed next or how were the responses different?'] },
        { title: 'Learn Words in Context', icon: 'Stars', text: 'Learn Word Notes inside the sentences where they carry important meaning.', points: ['Guess from context first.', 'Use the word in one new short sentence after checking it.'] },
        { title: 'Use Feedback and Try Again', icon: 'Lightbulb', text: 'A wrong answer is a signal to reread one precise part, not the whole chapter.', points: ['Read the retry hint.', 'Return to the sentence or relationship it points to, then answer again.'] },
        { title: 'Retrieve Before Rereading', icon: 'CheckCircle', text: 'Before the Knowledge Check, Review, or Final Challenge, try to answer from memory first. Reread only when you need repair.', points: ['Answer before looking back.', 'After checking, explain one corrected answer in your own A2 words.'] },
      ]
    : [
        { title: 'تتبع القصة الطويلة', icon: 'Target', text: 'قصة موسى تتكون من ستة عشر فصلًا. استخدم هدفي كل فصل لمعرفة ما هو مهم بدل محاولة حفظ كل تفصيل.', points: ['اقرأ هدفي الفصل قبل البدء.', 'بعد القراءة، اذكر الفكرتين اللتين تستطيع شرحهما الآن.'] },
        { title: 'اعثر على الدليل', icon: 'Eye', text: 'الإجابة الجيدة تأتي من القصة. اعثر على الجملة أو المعلومة التي تدعم إجابتك قبل تغييرها.', points: ['حدد جملة داعمة واحدة.', 'لا تضف معلومات خارجية إلى سؤال عن القصة.'] },
        { title: 'اربط الأفكار', icon: 'GitBranch', text: 'بعض أسئلة A2 تحتاج إلى أكثر من تفصيل واحد. ابحث عن علاقة سبب ونتيجة أو تسلسل أو مقارنة بسيطة.', points: ['اسأل: لماذا حدث هذا؟', 'اسأل: ماذا تغير بعد ذلك أو كيف اختلف الردان؟'] },
        { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'تعلم ملاحظات المفردات داخل الجمل التي تحمل فيها معنى مهمًا.', points: ['خمّن المعنى من السياق أولًا.', 'بعد التحقق، استخدم الكلمة في جملة قصيرة جديدة.'] },
        { title: 'استخدم التغذية الراجعة وحاول من جديد', icon: 'Lightbulb', text: 'الإجابة الخاطئة إشارة لإعادة قراءة جزء محدد، لا الفصل كله.', points: ['اقرأ تلميح إعادة المحاولة.', 'ارجع إلى الجملة أو العلاقة التي يشير إليها ثم أجب من جديد.'] },
        { title: 'استرجع قبل إعادة القراءة', icon: 'CheckCircle', text: 'قبل اختبار الفهم أو المراجعة أو التحدي النهائي، حاول الإجابة من الذاكرة أولًا. أعد القراءة فقط عندما تحتاج إلى تصحيح.', points: ['أجب قبل الرجوع إلى النص.', 'بعد التصحيح، اشرح إجابة واحدة بلغتك المناسبة لمستوى A2.'] },
      ]
);

const WANTED_VOCABULARY = ['cruel', 'protect', 'forgive', 'guided', 'arrogant', 'safely'] as const;

export const applyMosesA2GoldVocabularyChallenge = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): PageData[] => {
  const targets = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  const selected = WANTED_VOCABULARY.map(word => {
    const target = targets.find(candidate => candidate.en.word.trim().toLocaleLowerCase() === word);
    if (!target) throw new Error(`[Moses A2 Gold Vocabulary] Missing curated word: ${word}`);
    return target;
  });

  return pages.map(page => page.id === 18
    ? {
        ...page,
        vocabularyPairs: selected.map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
        })),
      }
    : page);
};