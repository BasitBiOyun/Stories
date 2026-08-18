import type { PageData, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const curatedWords = new Set(['simple turkish', 'honesty', 'humble', 'ego', 'deeper meaning', 'meaningful']);

export const applyYunusA2GoldVocabularyChallenge = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): PageData[] => {
  const allTargets = blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets);
  const selected = allTargets.filter(target => curatedWords.has(target.en.word.toLowerCase()));
  const unique = allTargets.filter((target, index, array) => array.findIndex(candidate => candidate.en.word.toLowerCase() === target.en.word.toLowerCase()) === index);
  const finalTargets = selected.length === 6 ? selected : unique.slice(0, 6);
  return pages.map(page => page.id === 10
    ? { ...page, vocabularyPairs: finalTargets.map(target => ({ word: target[language].word, meaning: target[language].definition })) }
    : page);
};

const rubricRows = (language: BlueprintLanguage) => language === 'en'
  ? [
      { criterion: 'Biography & story comprehension', excellent: 'Identifies important life facts, events, values, and clear chapter relationships accurately.', good: 'Understands the main event and most important details with one minor gap.', developing: 'Confuses important events, people, values, or relationships.' },
      { criterion: 'Text evidence', excellent: 'Finds the relevant sentence or detail and explains how it supports the answer.', good: 'Finds relevant evidence after a short prompt.', developing: 'Uses an unrelated detail or cannot locate support.' },
      { criterion: 'Connection & simple meaning', excellent: 'Connects cause/result, comparison, service, or a simple text-supported inner meaning accurately.', good: 'Makes the connection with a small prompt or one minor error.', developing: 'Repeats visible details without the relationship or lesson.' },
      { criterion: 'A2 language in context', excellent: 'Uses short clear sentences and chapter-appropriate A2 forms; errors do not block meaning.', good: 'Communicates the idea with understandable A2 language and some support.', developing: 'Language errors block meaning or the learner mainly copies the story.' },
      { criterion: 'Retrieval & transfer', excellent: 'Recalls key ideas without looking and uses them accurately in a new short response about values or daily life.', good: 'Recalls the idea after a prompt and gives a simple application.', developing: 'Needs repeated rereading or cannot use the idea beyond copying.' },
    ]
  : [
      { criterion: 'فهم السيرة والقصة', excellent: 'يحدد حقائق الحياة والأحداث والقيم والعلاقات الواضحة في الفصول بدقة.', good: 'يفهم الحدث الرئيس ومعظم التفاصيل المهمة مع نقص بسيط.', developing: 'يخلط بين أحداث أو أشخاص أو قيم أو علاقات مهمة.' },
      { criterion: 'استخدام الدليل من النص', excellent: 'يجد الجملة أو التفصيل المناسب ويشرح كيف يدعم الإجابة.', good: 'يجد دليلًا مناسبًا بعد تلميح قصير.', developing: 'يستخدم تفصيلًا غير مرتبط أو لا يستطيع تحديد الدليل.' },
      { criterion: 'الربط والمعنى البسيط', excellent: 'يربط السبب والنتيجة أو المقارنة أو الخدمة أو المعنى الداخلي البسيط المدعوم بالنص بدقة.', good: 'ينجز الربط بعد تلميح بسيط أو مع خطأ صغير.', developing: 'يكرر التفاصيل الظاهرة دون العلاقة أو الدرس.' },
      { criterion: 'استخدام لغة A2 في السياق', excellent: 'يستخدم جملًا قصيرة واضحة وتراكيب A2 مناسبة للفصل مع أخطاء لا تعيق المعنى.', good: 'يوصل الفكرة بلغة A2 مفهومة مع بعض الدعم.', developing: 'تعيق الأخطاء المعنى أو يعتمد أساسًا على نسخ النص.' },
      { criterion: 'الاسترجاع ونقل التعلم', excellent: 'يسترجع الأفكار الأساسية دون النظر ويستخدمها بدقة في استجابة قصيرة جديدة عن القيم أو الحياة اليومية.', good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا.', developing: 'يحتاج إلى إعادة قراءة متكررة أو لا يستطيع استخدام الفكرة خارج النسخ.' },
    ];

export const buildYunusA2GoldTeacherGuideMetadata = (base: TeacherGuideMetadata, language: BlueprintLanguage): TeacherGuideMetadata => ({
  ...base,
  purpose: language === 'en'
    ? 'A publication-ready A2 teaching companion for the eight-chapter Yunus Emre story. It connects biography, Turkish cultural heritage, story evidence, TYMM foreign-language skills, CEFR A2 reception, contextual language, values, retrieval, and short transfer.'
    : 'دليل تدريس بمستوى A2 جاهز للنشر لقصة يونس إمره في ثمانية فصول، يربط السيرة والتراث الثقافي التركي ودليل القصة بمهارات اللغة الأجنبية في TYMM واستقبال CEFR A2 واللغة في السياق والقيم والاسترجاع والنقل القصير.',
  approachDesc: language === 'en'
    ? 'Teach meaning before terminology. Use biography facts when they explain influence, then move to clear chapter relationships: generosity, discipline, service, self-training, learning from nature, and careful daily work. Keep symbolic interpretation at a supported A2 level: visible action plus one simple inner meaning stated by the text.'
    : 'ابدأ بالمعنى قبل المصطلحات. استخدم حقائق السيرة عندما تشرح التأثير ثم انتقل إلى العلاقات الواضحة في الفصول: الكرم والانضباط والخدمة وتدريب النفس والتعلم من الطبيعة وإتقان العمل اليومي. حافظ على التفسير الرمزي في مستوى A2 مدعوم: فعل ظاهر ومعنى داخلي بسيط يذكره النص.',
  targetLearners: language === 'en'
    ? 'Lower-secondary EFL learners working at CEFR A2; older A2 learners can use the same outcomes with adjusted pacing and discussion depth.'
    : 'متعلمات ومتعلمو اللغة الإنجليزية في المرحلة المتوسطة عند مستوى CEFR A2، ويمكن للمتعلمين الأكبر سنًا استخدام النواتج نفسها مع تكييف السرعة وعمق النقاش.',
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
        before: 'Use the title/image for one purposeful prediction and activate only the biography or value background needed for the chapter.',
        during: 'Read once for the main event, then reread for evidence, value, cause/result, comparison, or the simple inner meaning explicitly supported by the text.',
        after: 'Move from evidence to one short A2 explanation, comparison, or transfer response. Avoid turning biography into a date quiz or symbolism into abstract analysis.',
      }
    : {
        before: 'استخدم العنوان/الصورة لتوقع هادف واحد وفعل فقط خلفية السيرة أو القيم اللازمة للفصل.',
        during: 'اقرأ مرة للحدث الرئيس ثم أعد القراءة للدليل أو القيمة أو السبب والنتيجة أو المقارنة أو المعنى الداخلي البسيط الذي يدعمه النص صراحة.',
        after: 'انتقل من الدليل إلى تفسير أو مقارنة أو استجابة نقل قصيرة تناسب A2، وتجنب تحويل السيرة إلى اختبار تواريخ أو الرمزية إلى تحليل مجرد.',
      },
  skillsFocus: language === 'en'
    ? {
        reading: 'TYMM YDAB2 + CEFR A2: understand short biographical/narrative information, locate evidence, follow sequence, compare clear details, and connect simple causes and meanings.',
        listening: 'Use narration as a second route to the same chapter meaning, sequence, selected vocabulary, and values.',
        speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences supported by a chapter idea.',
        writing: 'TYMM YDAB4 supporting: write short text-supported sentences for cause, comparison, sequence, simple meaning, or transfer.',
      }
    : {
        reading: 'TYMM YDAB2 + CEFR A2: فهم معلومات السيرة والسرد القصيرة وتحديد الدليل وتتبع التسلسل ومقارنة التفاصيل وربط الأسباب والمعاني البسيطة.',
        listening: 'استخدم السرد الصوتي مسارًا ثانيًا لمعنى الفصل وتسلسله ومفرداته المختارة وقيمه.',
        speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين تناسبان A2 ومدعومتين بفكرة من الفصل.',
        writing: 'TYMM YDAB4 داعم: كتابة جمل قصيرة مدعومة بالنص للسبب أو المقارنة أو التسلسل أو المعنى البسيط أو النقل.',
      },
  languageFocus: language === 'en'
    ? ['Simple Past for biography', 'because and simple cause-result', 'not only … but also', 'tried to and less comparisons', 'will for willingness and never for repeated negative behaviour', 'looks like … but in fact …', 'can/cannot and simple if clauses', 'could not + verb', 'should/must for advice']
    : ['الماضي البسيط للسيرة', 'because والسبب والنتيجة البسيطان', 'not only … but also', 'tried to والمقارنة بـ less', 'will للاستعداد وnever للسلوك المنفي المتكرر', 'looks like … but in fact …', 'can/cannot وجمل if البسيطة', 'could not + verb', 'should/must للنصيحة'],
  grammarSequence: language === 'en'
    ? ['Ch1–2: biography, because, addition and effort', 'Ch3–4: less, must/need, willingness, never', 'Ch5–6: outer/inner contrast, can/cannot, simple if', 'Ch7–8: could not, because, should/must, cause-result advice']
    : ['الفصلان 1–2: السيرة وbecause والإضافة والجهد', 'الفصلان 3–4: less وmust/need والاستعداد وnever', 'الفصلان 5–6: مقارنة الظاهر والداخل وcan/cannot وif البسيط', 'الفصلان 7–8: could not وbecause وshould/must ونصيحة السبب والنتيجة'],
  differentiationNotes: language === 'en'
    ? 'Reduce language load without reducing the outcome. Use sentence frames and one marked evidence sentence for support; extend fast finishers through comparison or transfer, not extra dates or abstract symbolism.'
    : 'خفف العبء اللغوي دون خفض ناتج التعلم. استخدم أطر الجمل وجملة دليل محددة للدعم، ووسع عمل المتقدمين بالمقارنة أو النقل لا بإضافة تواريخ أو رمزية مجردة.',
  implementationPlans: language === 'en'
    ? {
        optionA: { title: 'One Chapter, One Lesson', steps: [
          { time: '5–7 min', activity: 'Orient with title/image, activate only needed background, and make one purposeful prediction.' },
          { time: '10–12 min', activity: 'Read/listen once for overall meaning without explaining every word.' },
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
          { time: '5–7 دقائق', activity: 'ابدأ بالعنوان والصورة وفعل الخلفية الضرورية فقط ثم ضع توقعًا واحدًا هادفًا.' },
          { time: '10–12 دقيقة', activity: 'اقرأ/استمع مرة للمعنى العام دون شرح كل كلمة.' },
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

export const buildYunusA2GoldStudentGuideSections = (language: BlueprintLanguage): StudentGuideSection[] => language === 'en'
  ? [
      { title: 'Read for Meaning, Not Dates', icon: 'Target', text: 'Use biography facts when they help you understand Yunus’s influence and learning journey.', points: ['Read the two goals first.', 'Ask what the chapter explains, not only what date it gives.'] },
      { title: 'Find the Evidence', icon: 'Eye', text: 'Find the sentence or detail that supports each answer or simple meaning.', points: ['Mark one useful detail for each goal.', 'Do not add outside information.'] },
      { title: 'Connect Action and Meaning', icon: 'Lightbulb', text: 'Some chapters give an ordinary action a simple inner meaning, such as wood work and heart training.', points: ['State the visible action first.', 'Then state only the meaning the text itself gives.'] },
      { title: 'Learn Words in Context', icon: 'Stars', text: 'Learn important words inside the sentence where they carry the chapter meaning.', points: ['Guess from context first.', 'Use the checked word in one short new sentence.'] },
      { title: 'Use Feedback and Try Again', icon: 'CheckCircle', text: 'If an answer is wrong, use the hint to return only to the evidence or relationship you need.', points: ['Read the retry hint.', 'Name what you mixed up, then answer again.'] },
      { title: 'Retrieve and Apply', icon: 'PenTool', text: 'Remember the idea later and express it in one or two clear A2 sentences about values or daily life.', points: ['Answer from memory before looking.', 'Keep the connection simple and story-supported.'] },
    ]
  : [
      { title: 'اقرأ للمعنى لا للتواريخ', icon: 'Target', text: 'استخدم حقائق السيرة عندما تساعدك على فهم تأثير يونس ورحلة تعلمه.', points: ['اقرأ الهدفين أولًا.', 'اسأل ما الذي يشرحه الفصل لا ما التاريخ الذي يذكره فقط.'] },
      { title: 'اعثر على الدليل', icon: 'Eye', text: 'حدد الجملة أو التفصيل الذي يدعم كل إجابة أو معنى بسيط.', points: ['حدد تفصيلًا مفيدًا لكل هدف.', 'لا تضف معلومات خارجية.'] },
      { title: 'اربط الفعل بالمعنى', icon: 'Lightbulb', text: 'تعطي بعض الفصول العمل العادي معنى داخليًا بسيطًا مثل عمل الحطب وتدريب القلب.', points: ['اذكر الفعل الظاهر أولًا.', 'ثم اذكر فقط المعنى الذي يعطيه النص.'] },
      { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'تعلم الكلمات المهمة داخل الجملة التي تحمل معنى الفصل.', points: ['خمّن من السياق أولًا.', 'استخدم الكلمة بعد التحقق في جملة قصيرة جديدة.'] },
      { title: 'استخدم التغذية الراجعة وحاول من جديد', icon: 'CheckCircle', text: 'إذا أخطأت فاستخدم التلميح للعودة فقط إلى الدليل أو العلاقة التي تحتاجها.', points: ['اقرأ تلميح إعادة المحاولة.', 'حدد ما الذي خلطت فيه ثم أجب من جديد.'] },
      { title: 'استرجع وطبق', icon: 'PenTool', text: 'تذكر الفكرة لاحقًا وعبّر عنها في جملة أو جملتين واضحتين عن القيم أو الحياة اليومية.', points: ['أجب من الذاكرة قبل النظر.', 'حافظ على الربط بسيطًا ومدعومًا بالقصة.'] },
    ];
