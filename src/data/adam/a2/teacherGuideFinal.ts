import type { TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage } from '../../learningBlueprint';

export const finalizeAdamA2TeacherGuideMetadata = (
  metadata: TeacherGuideMetadata,
  language: BlueprintLanguage,
): TeacherGuideMetadata => {
  if (language === 'ar') {
    return {
      ...metadata,
      targetLearners: 'متعلمات ومتعلمو اللغة الإنجليزية في المرحلة المتوسطة ممن يعملون عند مستوى CEFR A2. يمكن للمعلم تكييف سرعة الدرس وكمية الدعم مع العمر والخبرة دون تغيير نواتج التعلم الأساسية.',
      implementationPlans: {
        optionA: {
          title: 'فصل واحد في حصة واحدة',
          steps: [
            { time: '5–7 دقائق', activity: 'تهيئة قصيرة: العنوان والصورة وتوقع واحد، ثم مراجعة الكلمات الضرورية فقط.' },
            { time: '10–12 دقيقة', activity: 'قراءة/استماع أول من أجل المعنى العام دون إيقاف القصة لشرح كل كلمة.' },
            { time: '8–10 دقائق', activity: 'قراءة ثانية بهدف محدد: تحديد دليل من الفصل، ثم تنفيذ Quick Challenge ومناقشة سبب الإجابة.' },
            { time: '5–7 دقائق', activity: 'استخدام لغوي قصير أو مهمة نقل ثم بطاقة خروج تحدد الحاجة إلى دعم أو مراجعة إضافية.' },
          ],
        },
        optionB: {
          title: 'دورة من مرحلتين للفصل',
          lessons: [
            { title: 'المرحلة 1 — المعنى والدليل', description: 'اقرأ واستمع من أجل الفكرة الرئيسة، ثم حدد الأحداث أو العلاقات الواضحة والدليل الذي يدعمها. اختم بالتحدي السريع.' },
            { title: 'المرحلة 2 — اللغة والاسترجاع والنقل', description: 'راجع المفردات والبنية اللغوية المستهدفة في سياقها، استرجع الفكرة دون النظر إلى النص، ثم استخدمها في جملة أو إجابة قصيرة جديدة تناسب A2.' },
          ],
        },
      },
      rubricTitle: 'معايير أدلة التعلم — A2',
      rubricRows: [
        {
          criterion: 'فهم القصة',
          excellent: 'يحدد الفكرة الرئيسة والتفاصيل الأساسية والعلاقات الواضحة بدقة.',
          good: 'يفهم الفكرة الرئيسة ومعظم التفاصيل، مع خطأ أو نقص بسيط.',
          developing: 'يعتمد على التخمين أو يخلط بين أحداث أو أفكار أساسية.',
        },
        {
          criterion: 'استخدام الدليل من النص',
          excellent: 'يشير إلى الجملة أو التفصيل المناسب الذي يدعم الإجابة.',
          good: 'يجد دليلاً مناسبًا بعد تلميح قصير من المعلم.',
          developing: 'لا يستطيع تحديد الدليل أو يستخدم تفصيلاً غير مرتبط بالإجابة.',
        },
        {
          criterion: 'المفردات في السياق',
          excellent: 'يفهم الكلمات المستهدفة في سياق القصة ويستخدم بعضها في جملة قصيرة صحيحة المعنى.',
          good: 'يتعرف على المعنى في السياق لكنه يحتاج إلى دعم عند إعادة الاستخدام.',
          developing: 'يعتمد على حفظ منفصل للكلمة أو يخلط معناها في السياق.',
        },
        {
          criterion: 'استخدام اللغة بمستوى A2',
          excellent: 'ينتج جملاً قصيرة وواضحة مستخدمًا التراكيب المناسبة للفصل مع أخطاء لا تعيق المعنى.',
          good: 'يوصل المعنى بجمل A2 مفهومة مع بعض الأخطاء أو الحاجة إلى نموذج قصير.',
          developing: 'تمنع الأخطاء المتكررة وضوح المعنى أو يعتمد المتعلم على النسخ المباشر.',
        },
        {
          criterion: 'الاسترجاع ونقل التعلم',
          excellent: 'يسترجع الفكرة الأساسية دون النظر إلى النص ويطبقها في إجابة أو مثال قصير جديد.',
          good: 'يسترجع الفكرة بعد تلميح ويقدم تطبيقًا بسيطًا.',
          developing: 'يحتاج إلى إعادة قراءة متكررة أو ينسخ النص دون إظهار فهم مستقل.',
        },
      ],
    };
  }

  return {
    ...metadata,
    targetLearners: 'Lower-secondary EFL learners working at CEFR A2. Teachers may adjust pace and scaffolding for age and prior experience without changing the core learning outcomes.',
    implementationPlans: {
      optionA: {
        title: 'One Chapter, One Lesson',
        steps: [
          { time: '5–7 min', activity: 'Orient briefly: use the title and image, make one purposeful prediction, and pre-teach only vocabulary that is essential for access.' },
          { time: '10–12 min', activity: 'First read/listen for overall meaning. Keep the story moving instead of stopping to explain every word.' },
          { time: '8–10 min', activity: 'Reread with one evidence purpose, then complete the Quick Challenge and discuss why the answer fits the chapter.' },
          { time: '5–7 min', activity: 'Use one short language or transfer task and finish with an exit ticket that identifies support or retrieval needs.' },
        ],
      },
      optionB: {
        title: 'Two-Pass Chapter Cycle',
        lessons: [
          { title: 'Pass 1 — Meaning & Evidence', description: 'Read and listen for the main idea, identify clear events or relationships, and locate the chapter evidence that supports them. Finish with the Quick Challenge.' },
          { title: 'Pass 2 — Language, Retrieval & Transfer', description: 'Revisit the selected vocabulary and grammar in context, retrieve the chapter idea without looking, then use it in one new short A2 spoken or written response.' },
        ],
      },
    },
    rubricTitle: 'A2 Learning Evidence Rubric',
    rubricRows: [
      {
        criterion: 'Story comprehension',
        excellent: 'Identifies the main idea, key details, and clear chapter relationships accurately.',
        good: 'Understands the main idea and most key details with one minor gap or error.',
        developing: 'Relies on guessing or confuses important events or ideas.',
      },
      {
        criterion: 'Text evidence',
        excellent: 'Points to the relevant sentence or detail that supports the answer.',
        good: 'Finds relevant evidence after a short teacher prompt.',
        developing: 'Cannot locate supporting evidence or selects an unrelated detail.',
      },
      {
        criterion: 'Vocabulary in context',
        excellent: 'Understands target words in the story context and can reuse selected words meaningfully.',
        good: 'Recognises contextual meaning but needs support to reuse the word.',
        developing: 'Treats vocabulary as isolated memorisation or confuses its contextual meaning.',
      },
      {
        criterion: 'A2 language use',
        excellent: 'Produces short, clear sentences with chapter-appropriate A2 forms; errors do not block meaning.',
        good: 'Communicates the meaning in understandable A2 sentences with some errors or a short frame.',
        developing: 'Frequent errors block meaning or the learner depends on copying the text.',
      },
      {
        criterion: 'Retrieval & transfer',
        excellent: 'Recalls the key idea without looking and applies it in one new short response or example.',
        good: 'Recalls the idea with a prompt and gives a simple application.',
        developing: 'Needs repeated rereading or copies the story without showing independent understanding.',
      },
    ],
  };
};
