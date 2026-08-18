import type { PageData, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const curatedWords = new Set(['justice', 'freedom', 'equal', 'truth', 'rescued', 'respected']);

export const applyMeccaA2GoldVocabularyChallenge = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): PageData[] => {
  const allTargets = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  const selected = allTargets.filter(target => curatedWords.has(target.en.word.toLowerCase()));
  const unique = allTargets.filter((target, index, array) => array.findIndex(candidate => candidate.en.word.toLowerCase() === target.en.word.toLowerCase()) === index);
  const finalTargets = selected.length === 6 ? selected : unique.slice(0, 6);
  return pages.map(page => page.id === 15
    ? { ...page, vocabularyPairs: finalTargets.map(target => ({ word: target[language].word, meaning: target[language].definition })) }
    : page);
};

const rubricRows = (language: BlueprintLanguage) => language === 'en'
  ? [
      { criterion: 'Story & social-context comprehension', excellent: 'Identifies the main event, important social conditions, and character responses accurately.', good: 'Understands the main event and most important context with one minor gap.', developing: 'Confuses major events, roles, or social conditions.' },
      { criterion: 'Text evidence', excellent: 'Finds the relevant sentence or detail and explains how it supports the response.', good: 'Finds relevant evidence after a short prompt.', developing: 'Uses an unrelated detail or cannot locate support.' },
      { criterion: 'Cause, contrast & choice', excellent: 'Connects simple causes/results, social contrasts, and character choices accurately when required.', good: 'Makes the relationship with a small prompt or one minor error.', developing: 'Repeats isolated details without the required relationship.' },
      { criterion: 'A2 language in context', excellent: 'Uses short clear sentences and chapter-appropriate A2 forms; errors do not block meaning.', good: 'Communicates the idea with understandable A2 language and some support.', developing: 'Language errors block meaning or the learner mainly copies the text.' },
      { criterion: 'Retrieval & transfer', excellent: 'Recalls key ideas without looking and uses them accurately in a new short response about fairness, choice, freedom, or equality.', good: 'Recalls the idea after a prompt and gives a simple application.', developing: 'Needs repeated rereading or cannot use the idea beyond copying.' },
    ]
  : [
      { criterion: 'فهم القصة والسياق الاجتماعي', excellent: 'يحدد الحدث الرئيس والظروف الاجتماعية المهمة وردود الشخصيات بدقة.', good: 'يفهم الحدث الرئيس ومعظم السياق المهم مع نقص بسيط.', developing: 'يخلط بين أحداث أو أدوار أو ظروف اجتماعية رئيسة.' },
      { criterion: 'استخدام الدليل من النص', excellent: 'يجد الجملة أو التفصيل المناسب ويشرح كيف يدعم الاستجابة.', good: 'يجد دليلًا مناسبًا بعد تلميح قصير.', developing: 'يستخدم تفصيلًا غير مرتبط أو لا يستطيع تحديد الدليل.' },
      { criterion: 'السبب والمقارنة والاختيار', excellent: 'يربط الأسباب والنتائج والمقارنات الاجتماعية واختيارات الشخصيات بدقة عند الحاجة.', good: 'ينجز العلاقة بعد تلميح بسيط أو مع خطأ صغير.', developing: 'يكرر تفاصيل منفصلة دون إظهار العلاقة المطلوبة.' },
      { criterion: 'استخدام لغة A2 في السياق', excellent: 'يستخدم جملًا قصيرة واضحة وتراكيب A2 مناسبة للفصل مع أخطاء لا تعيق المعنى.', good: 'يوصل الفكرة بلغة A2 مفهومة مع بعض الدعم.', developing: 'تعيق الأخطاء المعنى أو يعتمد أساسًا على نسخ النص.' },
      { criterion: 'الاسترجاع ونقل التعلم', excellent: 'يسترجع الأفكار الأساسية دون النظر ويستخدمها بدقة في استجابة قصيرة جديدة عن العدل أو الاختيار أو الحرية أو المساواة.', good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا.', developing: 'يحتاج إلى إعادة قراءة متكررة أو لا يستطيع استخدام الفكرة خارج النسخ.' },
    ];

export const buildMeccaA2GoldTeacherGuideMetadata = (base: TeacherGuideMetadata, language: BlueprintLanguage): TeacherGuideMetadata => ({
  ...base,
  purpose: language === 'en'
    ? 'A publication-ready A2 teaching companion for the thirteen-chapter story of Bilal ibn Rabah and Mecca. It connects narrative evidence, social-history context, TYMM foreign-language skills, CEFR A2 reception, contextual language, diagnostic feedback, retrieval, and transfer.'
    : 'دليل تدريس بمستوى A2 جاهز للنشر لقصة بلال بن رباح ومكة في ثلاثة عشر فصلًا، يربط الدليل السردي والسياق الاجتماعي التاريخي بمهارات اللغة الأجنبية في TYMM واستقبال CEFR A2 واللغة في السياق والتغذية الراجعة التشخيصية والاسترجاع والنقل.',
  approachDesc: language === 'en'
    ? 'Teach the story as a sequence of social conditions, choices, responses, and change. Keep sensitive descriptions factual and non-graphic. Ask learners to locate evidence, connect simple causes or contrasts, notice useful A2 language, correct misconceptions, retrieve key ideas, and express them in short supported speech or writing.'
    : 'درّس القصة بوصفها تسلسلًا من الظروف الاجتماعية والاختيارات وردود الأفعال والتغير. حافظ على عرض التفاصيل الحساسة بصورة واقعية وغير تصويرية. اطلب من المتعلم تحديد الدليل وربط الأسباب أو المقارنات البسيطة وملاحظة لغة A2 المفيدة وتصحيح سوء الفهم واسترجاع الأفكار والتعبير عنها بكلام أو كتابة قصيرة مدعومة.',
  targetLearners: language === 'en'
    ? 'Lower-secondary EFL learners working at CEFR A2; older A2 learners can use the same outcomes with age-appropriate pacing and discussion.'
    : 'متعلمات ومتعلمو اللغة الإنجليزية في المرحلة المتوسطة عند مستوى CEFR A2، ويمكن للمتعلمين الأكبر سنًا استخدام النواتج نفسها مع تكييف السرعة والنقاش.',
  assessmentEvidence: language === 'en'
    ? 'Evidence comes from one Quick Challenge per chapter, eight Knowledge Check questions, a curated six-word Vocabulary Challenge, four Retrieval Review activities with an eight-question game, ten Final Challenge activities, exit responses, and short text-supported transfer tasks.'
    : 'تأتي أدلة التعلم من تحد سريع واحد لكل فصل، وثمانية أسئلة في اختبار الفهم، وتحدي مفردات منتقى من ست كلمات، وأربعة أنشطة في مراجعة الاسترجاع تتضمن لعبة من ثمانية أسئلة، وعشرة أنشطة في التحدي النهائي، وإجابات خروج، ومهام نقل قصيرة مدعومة بالنص.',
  assessmentOverview: {
    formative: language === 'en'
      ? ['Quick Challenge in every chapter', 'Text-evidence checks', 'Teacher observation', 'Exit response', 'Short transfer task', 'Learner correction after feedback']
      : ['التحدي السريع في كل فصل', 'فحوص الدليل من النص', 'ملاحظة المعلم', 'إجابة الخروج', 'مهمة نقل قصيرة', 'تصحيح المتعلم بعد التغذية الراجعة'],
    summative: language === 'en'
      ? ['Eight-question Knowledge Check', 'Curated six-word Vocabulary Challenge', 'Four-part Retrieval Review', 'Ten-question Final Challenge']
      : ['اختبار فهم من ثمانية أسئلة', 'تحدي مفردات منتقى من ست كلمات', 'مراجعة استرجاع من أربعة أجزاء', 'تحد نهائي من عشرة أسئلة'],
  },
  readingFramework: language === 'en'
    ? {
        before: 'Use the title/image for one purposeful prediction and activate only the social or story knowledge the chapter needs.',
        during: 'Read once for the main event, then reread for evidence, social contrast, cause/result, choice, or response according to the chapter goals.',
        after: 'Move from evidence to one short A2 explanation, contrast, sequence, or transfer response. Do not turn sensitive suffering into a recall contest.',
      }
    : {
        before: 'استخدم العنوان/الصورة لتوقع هادف واحد وفعل فقط المعرفة الاجتماعية أو السردية اللازمة للفصل.',
        during: 'اقرأ مرة للحدث الرئيس ثم أعد القراءة للدليل أو المقارنة الاجتماعية أو السبب والنتيجة أو الاختيار أو الرد وفق أهداف الفصل.',
        after: 'انتقل من الدليل إلى تفسير أو مقارنة أو تسلسل أو استجابة نقل قصيرة تناسب A2، ولا تحول المعاناة الحساسة إلى مسابقة حفظ.',
      },
  skillsFocus: language === 'en'
    ? {
        reading: 'TYMM YDAB2 + CEFR A2: understand short narrative/social-history information, locate evidence, follow sequence, compare clear situations, and connect simple causes/results.',
        listening: 'Use narration as a second route to the same chapter meaning, sequence, selected vocabulary, and social contrasts.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences supported by a chapter detail.',
        writing: 'TYMM YDAB4 supporting: write short text-supported sentences for cause, contrast, sequence, choice, or transfer.',
      }
    : {
        reading: 'TYMM YDAB2 + CEFR A2: فهم المعلومات السردية والاجتماعية التاريخية القصيرة وتحديد الدليل وتتبع التسلسل ومقارنة المواقف وربط الأسباب والنتائج البسيطة.',
        listening: 'استخدم السرد الصوتي مسارًا ثانيًا لمعنى الفصل وتسلسله ومفرداته المختارة ومقارناته الاجتماعية.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين تناسبان A2 ومدعومتين بتفصيل من الفصل.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل قصيرة مدعومة بالنص للسبب أو المقارنة أو التسلسل أو الاختيار أو النقل.',
      },
  languageFocus: language === 'en'
    ? ['Simple Past and past facts', 'there was/were and comparatives', 'had to / must for obligation and rules', 'decided to / refused to', 'because, but, so and sequence linkers', 'First Conditional where it appears in Chapter 8', 'became / was now for change', 'equality language and “What matters is …”']
    : ['الماضي البسيط وحقائق الماضي', 'there was/were والمقارنة', 'had to / must للإلزام والقواعد', 'decided to / refused to', 'because وbut وso وروابط التسلسل', 'الشرط الأول حيث يظهر في الفصل 8', 'became / was now للتغير', 'لغة المساواة و“What matters is …”'],
  grammarSequence: language === 'en'
    ? ['Ch1–3: past facts, there was/were, comparison', 'Ch4–6: had to, must, decided to, sequence', 'Ch7–9: contrast, refused to, First Conditional in context, asked … to', 'Ch10–13: change of state, chose … to, repeated past routine, equality/conclusion language']
    : ['الفصول 1–3: حقائق الماضي وthere was/were والمقارنة', 'الفصول 4–6: had to وmust وdecided to والتسلسل', 'الفصول 7–9: المقارنة وrefused to والشرط الأول في السياق وasked … to', 'الفصول 10–13: تغير الحال وchose … to والعادة الماضية ولغة المساواة والخلاصة'],
  differentiationNotes: language === 'en'
    ? 'Reduce language load without reducing the outcome. Use sentence frames and one marked evidence sentence for support; extend fast finishers through comparison, cause-result, or transfer rather than more sensitive detail.'
    : 'خفف العبء اللغوي دون خفض ناتج التعلم. استخدم أطر الجمل وجملة دليل محددة للدعم، ووسع عمل المتقدمين بالمقارنة أو السبب والنتيجة أو النقل بدل إضافة تفاصيل حساسة.',
  implementationPlans: language === 'en'
    ? {
        optionA: { title: 'One Chapter, One Lesson', steps: [
          { time: '5–7 min', activity: 'Orient with title/image, activate only needed context, and make one purposeful prediction.' },
          { time: '10–12 min', activity: 'Read/listen once for overall meaning; keep sensitive content factual and non-graphic.' },
          { time: '8–10 min', activity: 'Reread for the two chapter goals, mark evidence, and complete the Quick Challenge.' },
          { time: '5–7 min', activity: 'Reuse the chapter language in a short transfer response and finish with an evidence-based exit check.' },
        ] },
        optionB: { title: 'Two-Pass Chapter Cycle', lessons: [
          { title: 'Pass 1 — Meaning & Evidence', description: 'Read/listen for the main event, identify the two goals, locate evidence, and finish with the Quick Challenge.' },
          { title: 'Pass 2 — Language, Retrieval & Transfer', description: 'Revisit selected vocabulary and A2 grammar in context, retrieve the chapter meaning without looking, and produce a short supported response.' },
        ] },
      }
    : {
        optionA: { title: 'فصل واحد في حصة واحدة', steps: [
          { time: '5–7 دقائق', activity: 'ابدأ بالعنوان والصورة وفعل السياق الضروري فقط ثم ضع توقعًا واحدًا هادفًا.' },
          { time: '10–12 دقيقة', activity: 'اقرأ/استمع مرة للمعنى العام مع عرض المحتوى الحساس بصورة واقعية وغير تصويرية.' },
          { time: '8–10 دقائق', activity: 'أعد القراءة لهدفي الفصل وحدد الدليل ثم نفذ التحدي السريع.' },
          { time: '5–7 دقائق', activity: 'أعد استخدام لغة الفصل في استجابة نقل قصيرة واختم بفحص خروج قائم على الدليل.' },
        ] },
        optionB: { title: 'دورة من مرحلتين للفصل', lessons: [
          { title: 'المرحلة 1 — المعنى والدليل', description: 'اقرأ/استمع للحدث الرئيس وحدد الهدفين وابحث عن الدليل ثم اختم بالتحدي السريع.' },
          { title: 'المرحلة 2 — اللغة والاسترجاع والنقل', description: 'راجع المفردات المختارة وتراكيب A2 في السياق واسترجع معنى الفصل دون النظر ثم أنتج استجابة قصيرة مدعومة.' },
        ] },
      },
  rubricTitle: language === 'en' ? 'Assessment / Learning Evidence' : 'التقويم / أدلة التعلم',
  rubricRows: rubricRows(language),
  assessmentRubric: rubricRows(language),
});

export const buildMeccaA2GoldStudentGuideSections = (language: BlueprintLanguage): StudentGuideSection[] => language === 'en'
  ? [
      { title: 'Read for the Main Change', icon: 'Target', text: 'Each chapter has two goals. Follow what situation, choice, or response matters most.', points: ['Read the goals first.', 'After reading, say what changed or what the chapter shows.'] },
      { title: 'Find the Evidence', icon: 'Eye', text: 'Use the story itself for answers. Find the sentence or detail that supports the idea.', points: ['Mark one useful detail for each goal.', 'Do not add outside information.'] },
      { title: 'Notice Social Contrasts', icon: 'Lightbulb', text: 'The story often compares rich/poor, power/powerlessness, slavery/freedom, pressure/choice, and discrimination/equality.', points: ['Look for but, because, so, before, and after.', 'Ask what is different and why it matters.'] },
      { title: 'Learn Words in Context', icon: 'Stars', text: 'Learn words that unlock the social and story meaning inside their sentence.', points: ['Guess from context first.', 'Use the checked word in one short new sentence.'] },
      { title: 'Use Feedback and Try Again', icon: 'CheckCircle', text: 'If an answer is wrong, use the hint to return only to the evidence or relationship you need.', points: ['Read the retry hint.', 'Name what you mixed up, then answer again.'] },
      { title: 'Retrieve and Express', icon: 'PenTool', text: 'Remember the idea later and express it in one or two clear A2 sentences.', points: ['Answer from memory before looking.', 'Keep sensitive events factual and focus on the meaning.'] },
    ]
  : [
      { title: 'اقرأ من أجل التغير الرئيس', icon: 'Target', text: 'لكل فصل هدفان. تتبع الموقف أو الاختيار أو الرد الأكثر أهمية.', points: ['اقرأ الهدفين أولًا.', 'بعد القراءة قل ما الذي تغير أو ما الذي يبينه الفصل.'] },
      { title: 'اعثر على الدليل', icon: 'Eye', text: 'استخدم القصة نفسها للإجابات وحدد الجملة أو التفصيل الداعم.', points: ['حدد تفصيلًا مفيدًا لكل هدف.', 'لا تضف معلومات خارجية.'] },
      { title: 'لاحظ المقارنات الاجتماعية', icon: 'Lightbulb', text: 'تقارن القصة كثيرًا بين الغني والفقير والقوة والضعف والعبودية والحرية والضغط والاختيار والتمييز والمساواة.', points: ['ابحث عن روابط السبب والمقارنة والتسلسل.', 'اسأل ما المختلف ولماذا هو مهم.'] },
      { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'تعلم الكلمات التي تفتح المعنى الاجتماعي والسردي داخل جملتها.', points: ['خمّن من السياق أولًا.', 'استخدم الكلمة بعد التحقق في جملة قصيرة جديدة.'] },
      { title: 'استخدم التغذية الراجعة وحاول من جديد', icon: 'CheckCircle', text: 'إذا أخطأت فاستخدم التلميح للعودة فقط إلى الدليل أو العلاقة التي تحتاجها.', points: ['اقرأ تلميح إعادة المحاولة.', 'حدد ما الذي خلطت فيه ثم أجب من جديد.'] },
      { title: 'استرجع وعبّر', icon: 'PenTool', text: 'تذكر الفكرة لاحقًا وعبّر عنها في جملة أو جملتين واضحتين تناسبان A2.', points: ['أجب من الذاكرة قبل النظر.', 'حافظ على عرض الأحداث الحساسة بصورة واقعية وركز على المعنى.'] },
    ];
