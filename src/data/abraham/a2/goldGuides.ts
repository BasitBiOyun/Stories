import type { PageData, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const curatedWords = new Set(['worship', 'creator', 'arrogant', 'miracle', 'journey', 'unique']);

export const applyAbrahamA2GoldVocabularyChallenge = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): PageData[] => {
  const allTargets = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  const selected = allTargets.filter(target => curatedWords.has(target.en.word.toLowerCase()));
  const finalTargets = selected.length === 6 ? selected : allTargets.filter((target, index, array) => {
    const key = target.en.word.toLowerCase();
    return array.findIndex(candidate => candidate.en.word.toLowerCase() === key) === index;
  }).slice(0, 6);

  return pages.map(page => page.id === 16
    ? {
        ...page,
        vocabularyPairs: finalTargets.map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
        })),
      }
    : page);
};

const rubricRows = (language: BlueprintLanguage) => language === 'en'
  ? [
      { criterion: 'Story comprehension', excellent: 'Identifies main events, important details, and clear relationships accurately.', good: 'Understands the main event and most important details with one minor gap.', developing: 'Confuses important events, people, or relationships.' },
      { criterion: 'Text evidence', excellent: 'Finds the relevant sentence or detail and explains how it supports the answer.', good: 'Finds relevant evidence after a short prompt.', developing: 'Uses an unrelated detail or cannot locate support.' },
      { criterion: 'Cause, comparison & sequence', excellent: 'Connects simple reasons/results, comparisons, and ordered events accurately when required.', good: 'Makes the relationship with a small prompt or one minor error.', developing: 'Repeats isolated facts without showing the required relationship.' },
      { criterion: 'A2 language in context', excellent: 'Uses short clear sentences and chapter-appropriate A2 forms; errors do not block meaning.', good: 'Communicates the idea with understandable A2 language and some support.', developing: 'Language errors block meaning or the learner mainly copies the story.' },
      { criterion: 'Retrieval & transfer', excellent: 'Recalls key ideas without looking and uses them accurately in one new short response.', good: 'Recalls the idea after a prompt and gives a simple application.', developing: 'Needs repeated rereading or cannot use the idea beyond copying.' },
    ]
  : [
      { criterion: 'فهم القصة', excellent: 'يحدد الأحداث الرئيسة والتفاصيل المهمة والعلاقات الواضحة بدقة.', good: 'يفهم الحدث الرئيس ومعظم التفاصيل المهمة مع نقص بسيط.', developing: 'يخلط بين أحداث أو أشخاص أو علاقات مهمة.' },
      { criterion: 'استخدام الدليل من النص', excellent: 'يجد الجملة أو التفصيل المناسب ويشرح كيف يدعم الإجابة.', good: 'يجد دليلًا مناسبًا بعد تلميح قصير.', developing: 'يستخدم تفصيلًا غير مرتبط أو لا يستطيع تحديد الدليل.' },
      { criterion: 'السبب والمقارنة والتسلسل', excellent: 'يربط الأسباب والنتائج والمقارنات وتسلسل الأحداث البسيط بدقة عند الحاجة.', good: 'ينجز العلاقة بعد تلميح بسيط أو مع خطأ صغير.', developing: 'يكرر حقائق منفصلة دون إظهار العلاقة المطلوبة.' },
      { criterion: 'استخدام لغة A2 في السياق', excellent: 'يستخدم جملًا قصيرة واضحة وتراكيب A2 مناسبة للفصل مع أخطاء لا تعيق المعنى.', good: 'يوصل الفكرة بلغة A2 مفهومة مع بعض الدعم.', developing: 'تعيق الأخطاء المعنى أو يعتمد أساسًا على نسخ النص.' },
      { criterion: 'الاسترجاع ونقل التعلم', excellent: 'يسترجع الأفكار الأساسية دون النظر ويستخدمها بدقة في استجابة قصيرة جديدة.', good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا.', developing: 'يحتاج إلى إعادة قراءة متكررة أو لا يستطيع استخدام الفكرة خارج النسخ.' },
    ];

export const buildAbrahamA2GoldTeacherGuideMetadata = (
  base: TeacherGuideMetadata,
  language: BlueprintLanguage,
): TeacherGuideMetadata => ({
  ...base,
  purpose: language === 'en'
    ? 'A publication-ready A2 teaching companion for the fourteen-chapter story of Prophet Abraham. Each chapter connects story evidence, TYMM foreign-language skills, CEFR A2 reception, contextual language, diagnostic feedback, retrieval, and short transfer.'
    : 'دليل تدريس بمستوى A2 جاهز للنشر لقصة النبي إبراهيم في أربعة عشر فصلًا. يربط كل فصل دليل القصة بمهارات اللغة الأجنبية في TYMM واستقبال CEFR A2 واللغة في السياق والتغذية الراجعة التشخيصية والاسترجاع والنقل القصير.',
  approachDesc: language === 'en'
    ? 'Teach meaning first. Ask learners to locate evidence, connect a simple cause/result or comparison, notice useful A2 language in context, correct misunderstandings, retrieve learning later, and express the idea in short supported speech or writing. Do not reduce the story to names and trivia.'
    : 'ابدأ بالمعنى. اطلب من المتعلم تحديد الدليل وربط سبب ونتيجة بسيطين أو إجراء مقارنة واضحة وملاحظة لغة A2 المفيدة في السياق وتصحيح سوء الفهم واسترجاع التعلم لاحقًا والتعبير عنه بكلام أو كتابة قصيرة مدعومة. لا تختزل القصة في الأسماء والتفاصيل العشوائية.',
  targetLearners: language === 'en'
    ? 'Lower-secondary EFL learners working at CEFR A2; the same outcomes can be used with older A2 learners by adjusting pace and scaffolding.'
    : 'متعلمات ومتعلمو اللغة الإنجليزية في المرحلة المتوسطة عند مستوى CEFR A2، ويمكن استخدام النواتج نفسها مع متعلمين أكبر سنًا مع تكييف السرعة والدعم.',
  assessmentEvidence: language === 'en'
    ? 'Learning evidence comes from one Quick Challenge per chapter, eight Knowledge Check questions, a curated six-word Vocabulary Challenge, four Retrieval Review activities including an eight-question game, ten Final Challenge activities, exit responses, and short text-supported transfer tasks.'
    : 'تأتي أدلة التعلم من تحد سريع واحد لكل فصل، وثمانية أسئلة في اختبار الفهم، وتحدي مفردات منتقى من ست كلمات، وأربعة أنشطة في مراجعة الاسترجاع تتضمن لعبة من ثمانية أسئلة، وعشرة أنشطة في التحدي النهائي، وإجابات خروج، ومهام نقل قصيرة مدعومة بالنص.',
  assessmentOverview: {
    formative: language === 'en'
      ? ['Quick Challenge in every chapter', 'Text-evidence check', 'Teacher observation', 'Exit response', 'Short transfer task', 'Learner correction after feedback']
      : ['التحدي السريع في كل فصل', 'فحص الدليل من النص', 'ملاحظة المعلم', 'إجابة الخروج', 'مهمة نقل قصيرة', 'تصحيح المتعلم بعد التغذية الراجعة'],
    summative: language === 'en'
      ? ['Eight-question Knowledge Check', 'Curated six-word Vocabulary Challenge', 'Four-part Retrieval Review', 'Ten-question Final Challenge']
      : ['اختبار فهم من ثمانية أسئلة', 'تحدي مفردات منتقى من ست كلمات', 'مراجعة استرجاع من أربعة أجزاء', 'تحد نهائي من عشرة أسئلة'],
  },
  readingFramework: language === 'en'
    ? {
        before: 'Activate only the prior knowledge needed for the chapter and make one purposeful prediction from the title or image.',
        during: 'Read once for the main event, then reread for evidence, sequence, cause/result, comparison, or character response according to the chapter goals.',
        after: 'Move from evidence to one short A2 explanation, comparison, sequence, or transfer response and use the result to decide whether support is needed.',
      }
    : {
        before: 'فعّل فقط المعرفة السابقة اللازمة للفصل وضع توقعًا واحدًا هادفًا من العنوان أو الصورة.',
        during: 'اقرأ مرة للحدث الرئيس ثم أعد القراءة للدليل أو التسلسل أو السبب والنتيجة أو المقارنة أو رد الشخصية وفق أهداف الفصل.',
        after: 'انتقل من الدليل إلى تفسير أو مقارنة أو تسلسل أو استجابة نقل قصيرة تناسب A2 واستخدم النتيجة لتحديد الحاجة إلى الدعم.',
      },
  skillsFocus: language === 'en'
    ? {
        reading: 'TYMM YDAB2 + CEFR A2: understand short narrative information, locate evidence, follow sequence, compare clear details, and connect simple causes/results.',
        listening: 'Use narration as a second route to the same chapter meaning, sequence, and selected vocabulary.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences supported by a chapter idea.',
        writing: 'TYMM YDAB4 supporting: write short text-supported sentences for reason, comparison, sequence, or transfer.',
      }
    : {
        reading: 'TYMM YDAB2 + CEFR A2: فهم المعلومات السردية القصيرة وتحديد الدليل وتتبع التسلسل ومقارنة التفاصيل الواضحة وربط الأسباب والنتائج البسيطة.',
        listening: 'استخدم السرد الصوتي مسارًا ثانيًا لمعنى الفصل نفسه وتسلسله ومفرداته المختارة.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين تناسبان A2 ومدعومتين بفكرة من الفصل.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل قصيرة مدعومة بالنص للسبب أو المقارنة أو التسلسل أو النقل.',
      },
  languageFocus: language === 'en'
    ? ['Simple Past and event sequencing', 'could/could not and can/cannot', 'because/so/but cause and contrast', 'comparatives where the story uses them', 'First Conditional in the chapter prayer', 'will for willingness and expectation', 'there was / there was no for place description']
    : ['الماضي البسيط وتسلسل الأحداث', 'could/could not وcan/cannot', 'because/so/but للسبب والمقارنة', 'المقارنة عندما يستخدمها النص', 'الشرط الأول في دعاء الفصل', 'will للاستعداد والتوقع', 'there was / there was no لوصف المكان'],
  grammarSequence: language === 'en'
    ? ['Ch1–2: Simple Past + inability/reason', 'Ch3–4: could/could not, comparison, First Conditional in context', 'Ch5–7: because + can/cannot + question forms', 'Ch8–10: reason, change, contrast, ability/challenge', 'Ch11–14: decisions, there was/no, sequence, will']
    : ['الفصلان 1–2: الماضي البسيط + العجز/السبب', 'الفصلان 3–4: could/could not والمقارنة والشرط الأول في السياق', 'الفصول 5–7: because + can/cannot + صيغ السؤال', 'الفصول 8–10: السبب والتغير والمقارنة والاستطاعة/التحدي', 'الفصول 11–14: القرارات ووصف المكان والتسلسل وwill'],
  differentiationNotes: language === 'en'
    ? 'Reduce linguistic load without reducing the learning outcome. Use sentence frames and one marked evidence sentence for support; extend fast finishers through comparison, cause-result, or short transfer rather than extra trivia.'
    : 'خفف العبء اللغوي دون خفض ناتج التعلم. استخدم أطر الجمل وجملة دليل محددة للدعم، ووسع عمل المتقدمين بالمقارنة أو السبب والنتيجة أو النقل القصير بدل إضافة تفاصيل عشوائية.',
  implementationPlans: language === 'en'
    ? {
        optionA: {
          title: 'One Chapter, One Lesson',
          steps: [
            { time: '5–7 min', activity: 'Orient with title/image, activate only needed prior knowledge, and make one purposeful prediction.' },
            { time: '10–12 min', activity: 'Read/listen once for overall meaning without explaining every word.' },
            { time: '8–10 min', activity: 'Reread for the two chapter goals, mark evidence, and complete the Quick Challenge.' },
            { time: '5–7 min', activity: 'Reuse the grammar/vocabulary focus in one short transfer response and finish with an evidence-based exit check.' },
          ],
        },
        optionB: {
          title: 'Two-Pass Chapter Cycle',
          lessons: [
            { title: 'Pass 1 — Meaning & Evidence', description: 'Read/listen for the main event, identify the two learning goals, locate evidence, and finish with the Quick Challenge.' },
            { title: 'Pass 2 — Language, Retrieval & Transfer', description: 'Revisit selected vocabulary and A2 grammar in context, retrieve the chapter meaning without looking, and produce a short supported response.' },
          ],
        },
      }
    : {
        optionA: {
          title: 'فصل واحد في حصة واحدة',
          steps: [
            { time: '5–7 دقائق', activity: 'ابدأ بالعنوان والصورة وفعل المعرفة السابقة الضرورية فقط ثم ضع توقعًا واحدًا هادفًا.' },
            { time: '10–12 دقيقة', activity: 'اقرأ/استمع مرة للمعنى العام دون شرح كل كلمة.' },
            { time: '8–10 دقائق', activity: 'أعد القراءة لهدفي الفصل وحدد الدليل ثم نفذ التحدي السريع.' },
            { time: '5–7 دقائق', activity: 'أعد استخدام التركيب والمفردات في استجابة نقل قصيرة واختم بفحص خروج قائم على الدليل.' },
          ],
        },
        optionB: {
          title: 'دورة من مرحلتين للفصل',
          lessons: [
            { title: 'المرحلة 1 — المعنى والدليل', description: 'اقرأ/استمع للحدث الرئيس وحدد هدفي التعلم وابحث عن الدليل ثم اختم بالتحدي السريع.' },
            { title: 'المرحلة 2 — اللغة والاسترجاع والنقل', description: 'راجع المفردات المختارة وتراكيب A2 في السياق واسترجع معنى الفصل دون النظر ثم أنتج استجابة قصيرة مدعومة.' },
          ],
        },
      },
  rubricTitle: language === 'en' ? 'Assessment / Learning Evidence' : 'التقويم / أدلة التعلم',
  rubricRows: rubricRows(language),
  assessmentRubric: rubricRows(language),
});

export const buildAbrahamA2GoldStudentGuideSections = (language: BlueprintLanguage): StudentGuideSection[] => language === 'en'
  ? [
      { title: 'Study with a Purpose', icon: 'Target', text: 'Each chapter has two goals. Read to understand those ideas, not to memorise every sentence.', points: ['Read the goals first.', 'After reading, say what you can now explain.'] },
      { title: 'Find the Evidence', icon: 'Eye', text: 'Good answers come from the story. Find the sentence or detail that supports your answer.', points: ['Mark one useful detail for each goal.', 'Do not use outside information for a story question.'] },
      { title: 'Notice the Connection', icon: 'Lightbulb', text: 'Many chapters ask you to connect a reason and result, compare two responses, or follow a sequence.', points: ['Look for because, but, so, when, then, and later.', 'Ask what changed and why.'] },
      { title: 'Learn Words in Context', icon: 'Stars', text: 'Learn important words inside the sentence where they carry the chapter meaning.', points: ['Guess from context first.', 'After checking, use the word in one short new sentence.'] },
      { title: 'Use Feedback and Try Again', icon: 'CheckCircle', text: 'If an answer is wrong, use the hint to find only the sentence or relationship you need.', points: ['Read the retry hint.', 'Explain what you mixed up, then answer again.'] },
      { title: 'Retrieve and Express', icon: 'PenTool', text: 'Understanding is stronger when you can remember and express the idea later.', points: ['Answer from memory before looking.', 'Finish with one or two clear A2 sentences.'] },
    ]
  : [
      { title: 'ادرس بهدف', icon: 'Target', text: 'لكل فصل هدفان. اقرأ لفهم هاتين الفكرتين لا لحفظ كل جملة.', points: ['اقرأ الهدفين أولًا.', 'بعد القراءة قل ما الذي أصبحت قادرًا على شرحه.'] },
      { title: 'اعثر على الدليل', icon: 'Eye', text: 'الإجابة الجيدة تأتي من القصة. اعثر على الجملة أو التفصيل الذي يدعم إجابتك.', points: ['حدد تفصيلًا مفيدًا لكل هدف.', 'لا تستخدم معلومات خارجية في سؤال القصة.'] },
      { title: 'لاحظ العلاقة', icon: 'Lightbulb', text: 'تطلب فصول كثيرة ربط السبب والنتيجة أو مقارنة ردين أو تتبع تسلسل.', points: ['ابحث عن روابط السبب والمقارنة والتسلسل.', 'اسأل ما الذي تغير ولماذا.'] },
      { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'تعلم الكلمات المهمة داخل الجملة التي تحمل معنى الفصل.', points: ['خمّن من السياق أولًا.', 'بعد التحقق استخدم الكلمة في جملة قصيرة جديدة.'] },
      { title: 'استخدم التغذية الراجعة وحاول من جديد', icon: 'CheckCircle', text: 'إذا أخطأت فاستخدم التلميح للعثور فقط على الجملة أو العلاقة التي تحتاجها.', points: ['اقرأ تلميح إعادة المحاولة.', 'حدد ما الذي خلطت فيه ثم أجب من جديد.'] },
      { title: 'استرجع وعبّر', icon: 'PenTool', text: 'يقوى الفهم عندما تستطيع تذكر الفكرة والتعبير عنها لاحقًا.', points: ['أجب من الذاكرة قبل النظر.', 'اختم بجملة أو جملتين واضحتين تناسبان A2.'] },
    ];
