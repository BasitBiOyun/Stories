import type { PageData, StudentGuideSection, TeacherGuideMetadata } from '../../../types';
import type { BlueprintLanguage, LearningBlueprint } from '../../learningBlueprint';

const teacherCopy = {
  en: {
    purpose: 'A Ministry-ready A2 teaching companion for Prophet Adam. Every chapter is organised around explicit learning outcomes, same-chapter evidence, TYMM foreign-language skills, CEFR A2 reception/production, formative assessment, diagnostic feedback, differentiation, and transfer.',
    approach: 'Use the story as the factual source and the Learning Blueprint as the pedagogical map. Teach meaning first, then ask learners to locate evidence, explain one simple relationship, use selected language in context, receive actionable feedback, and transfer the learning in short A2 speech or writing. TYMM codes are an alignment layer; the durable learning outcomes remain curriculum-independent.',
    assessment: 'Evidence is gathered continuously through one Quick Challenge per chapter, chapter-specific questioning, Knowledge Check, retrieval Review, curated Vocabulary Challenge, Final Challenge, exit tickets, short oral/written transfer, and learner self-checks. A correct answer alone is not enough when the task requires evidence: learners should be able to point to the relevant chapter detail.',
    before: 'Activate only the prior knowledge needed for the chapter and make a purposeful prediction. Do not pre-teach the answer or turn the opening into a lecture.',
    during: 'Read first for meaning, then reread with a precise evidence purpose. Use chapter-specific prompts, visual marking, simple comparison or cause-result organisers, and vocabulary-in-context noticing.',
    after: 'Move from evidence to a short A2 explanation or transfer task. Use the exit ticket to decide whether the learner needs retrieval practice, language support, or misconception repair.',
  },
  ar: {
    purpose: 'دليل تدريس بمستوى A2 جاهز للعرض المؤسسي لقصة النبي آدم. يُنظَّم كل فصل حول نواتج تعلم واضحة، وأدلة من الفصل نفسه، ومواءمة مع مهارات اللغة الأجنبية في نموذج معارف القرن التركي، ومستوى CEFR A2، وتقويم تكويني، وتغذية راجعة تشخيصية، وتمايز، ومهام نقل للتعلم.',
    approach: 'اجعل القصة المصدر الواقعي وخريطة التعلم في الـBlueprint الخريطة التربوية. ابدأ بالمعنى، ثم اطلب من المتعلم تحديد الدليل وشرح علاقة بسيطة واستخدام اللغة المختارة في السياق والاستفادة من تغذية راجعة قابلة للتطبيق ونقل التعلم في كلام أو كتابة قصيرة تناسب A2. رموز نموذج معارف القرن التركي طبقة مواءمة، أما نواتج التعلم الدائمة فتبقى مستقلة عن تغير المنهج.',
    assessment: 'تُجمع أدلة التعلم باستمرار من خلال تحدٍّ سريع واحد لكل فصل، وأسئلة خاصة بالفصل، واختبار المعرفة، ومراجعة الاسترجاع، وتحدي مفردات منتقى يدويًا، والتحدي النهائي، وبطاقات الخروج، ومهام نقل شفوية/كتابية قصيرة، وفحوص ذاتية للمتعلم. لا تكفي الإجابة الصحيحة وحدها عندما تتطلب المهمة دليلًا؛ ينبغي أن يستطيع المتعلم الإشارة إلى المعلومة الداعمة في الفصل.',
    before: 'فعّل فقط المعرفة السابقة اللازمة للفصل واطلب توقعًا ذا غرض. لا تقدم الإجابة مسبقًا ولا تحول البداية إلى محاضرة.',
    during: 'اقرأ أولًا من أجل المعنى، ثم أعد القراءة بهدف دقيق للبحث عن الدليل. استخدم أسئلة خاصة بالفصل وعلامات بصرية ومنظمات بسيطة للمقارنة أو السبب والنتيجة وملاحظة المفردات في السياق.',
    after: 'انتقل من الدليل إلى تفسير قصير يناسب A2 أو مهمة نقل. استخدم بطاقة الخروج لتحديد ما إذا كان المتعلم يحتاج إلى تدريب استرجاع أو دعم لغوي أو إصلاح سوء فهم.',
  },
};

export const buildAdamA2GoldTeacherGuideMetadata = (
  base: TeacherGuideMetadata,
  language: BlueprintLanguage,
): TeacherGuideMetadata => {
  const copy = teacherCopy[language];
  return {
    ...base,
    purpose: copy.purpose,
    approachDesc: copy.approach,
    assessmentEvidence: copy.assessment,
    assessmentOverview: {
      formative: language === 'en'
        ? ['Chapter evidence questions', 'Quick Challenge', 'Teacher observation of evidence use', 'Exit ticket', 'Short transfer task', 'Learner self-check and correction']
        : ['أسئلة الدليل في الفصل', 'التحدي السريع', 'ملاحظة المعلم لاستخدام الدليل', 'بطاقة الخروج', 'مهمة نقل قصيرة', 'الفحص الذاتي والتصحيح'],
      summative: language === 'en'
        ? ['Knowledge Check', 'Whole-book Review', 'Curated Vocabulary Challenge', 'Final Challenge']
        : ['اختبار المعرفة', 'مراجعة الكتاب', 'تحدي المفردات المنتقى', 'التحدي النهائي'],
    },
    readingFramework: {
      before: copy.before,
      during: copy.during,
      after: copy.after,
    },
    skillsFocus: language === 'en'
      ? {
          reading: 'TYMM YDAB2 + CEFR A2: understand short narrative information, locate evidence, sequence events, compare clear details, and connect simple causes/results.',
          listening: 'Use narration as a second reception route: listen for the same chapter meaning, key words, and sequence already grounded in the written story.',
          speaking: 'TYMM YDAB3 supporting: give one or two clear A2 sentences and point to the supporting chapter idea.',
          writing: 'TYMM YDAB4 supporting: produce short text-supported sentences for comparison, sequence, advice, or cause/result.',
        }
      : {
          reading: 'TYMM YDAB2 + CEFR A2: فهم معلومات سردية قصيرة وتحديد الدليل وترتيب الأحداث ومقارنة التفاصيل الواضحة وربط السبب والنتيجة البسيطين.',
          listening: 'استخدم السرد الصوتي مسار استقبال ثانٍ للمعنى نفسه والكلمات الأساسية والتسلسل الموثق في النص المكتوب.',
          speaking: 'TYMM YDAB3 داعم: تقديم جملة أو جملتين واضحتين تناسبان A2 مع الإشارة إلى فكرة داعمة من الفصل.',
          writing: 'TYMM YDAB4 داعم: إنتاج جمل قصيرة مدعومة بالنص للمقارنة أو التسلسل أو النصيحة أو السبب والنتيجة.',
        },
    languageFocus: language === 'en'
      ? ['Vocabulary in context, not isolated memorisation', 'because/but/so relationships', 'Simple Past and event sequencing', 'Comparatives and superlatives where the story supports them', 'First Conditional in Chapter 5', 'will/won’t for intention or refusal', 'Simple advice with should']
      : ['المفردات في السياق لا الحفظ المنفصل', 'علاقات لأن/لكن/لذلك', 'الماضي وترتيب الأحداث', 'المقارنة والتفضيل عندما يدعمهما النص', 'الشرط الأول في الفصل الخامس', 'will/won’t للنية أو الرفض', 'النصيحة البسيطة باستخدام should'],
    valuesFocus: language === 'en'
      ? ['Knowledge linked to useful action', 'Learning from mistakes', 'Responsibility and care', 'Honesty and gratitude', 'Controlling anger and jealousy', 'Kindness and non-retaliation']
      : ['ربط العلم بالعمل النافع', 'التعلم من الأخطاء', 'المسؤولية والرعاية', 'الصدق والشكر', 'ضبط الغضب والحسد', 'اللطف وعدم الرد بالأذى'],
    differentiationNotes: language === 'en'
      ? 'Use the chapter-specific Support and Fast Finisher routes. Support reduces linguistic load but preserves the same learning outcome; enrichment increases connection, evidence use, or transfer rather than merely adding more questions.'
      : 'استخدم مساري الدعم والمتقدمين الخاصين بكل فصل. يقلل الدعم العبء اللغوي مع الحفاظ على ناتج التعلم نفسه، بينما يزيد الإثراء الربط واستخدام الدليل أو نقل التعلم بدل مجرد إضافة أسئلة أكثر.',
  };
};

export const buildAdamA2GoldStudentGuideSections = (language: BlueprintLanguage): StudentGuideSection[] => (
  language === 'en'
    ? [
        { title: 'Study with a Purpose', icon: 'Target', text: 'Each chapter has two clear goals. Read to achieve those goals, not to memorise every sentence.', points: ['Read the goals before the chapter.', 'After reading, say what you can now do.'] },
        { title: 'Find the Evidence', icon: 'Eye', text: 'Good answers come from the story. Find the sentence or detail that supports your answer.', points: ['Mark one supporting sentence.', 'Do not use outside information to answer a story question.'] },
        { title: 'Learn Words in Context', icon: 'Stars', text: 'Focus on the words that unlock the chapter meaning. Learn them inside the sentence where they are used.', points: ['Guess from context first.', 'Use the word in a new short sentence after checking its meaning.'] },
        { title: 'Use Feedback and Try Again', icon: 'Lightbulb', text: 'If an answer is wrong, use the hint to find the sentence you need. Check what you misunderstood, then try again.', points: ['Read the retry hint.', 'Return to the sentence it points to, then answer again.'] },
        { title: 'Say and Write What You Learned', icon: 'PenTool', text: 'Understanding is stronger when you can express it. Finish each chapter with a short speaking or writing task.', points: ['Use clear A2 language.', 'Keep every story fact accurate.'] },
        { title: 'Check Yourself', icon: 'CheckCircle', text: 'Use the chapter self-checks to decide whether you are ready to move on or need another short practice round.', points: ['Answer without looking first.', 'If unsure, use the retry steps instead of rereading everything.'] },
      ]
    : [
        { title: 'ادرس بهدف', icon: 'Target', text: 'لكل فصل هدفان واضحان. اقرأ لتحقيقهما لا لحفظ كل جملة.', points: ['اقرأ هدفي الفصل قبل أن تبدأ.', 'بعد القراءة، قل ما الذي أصبحت قادرًا على فعله.'] },
        { title: 'اعثر على الدليل', icon: 'Eye', text: 'الإجابة الجيدة تأتي من القصة. اعثر على الجملة أو المعلومة التي تدعم إجابتك.', points: ['حدد جملة داعمة واحدة.', 'لا تستخدم معلومات خارجية للإجابة عن سؤال القصة.'] },
        { title: 'تعلم الكلمات في السياق', icon: 'Stars', text: 'ركز على الكلمات التي تفتح معنى الفصل وتعلمها داخل الجملة التي وردت فيها.', points: ['خمّن المعنى من السياق أولًا.', 'بعد التحقق من المعنى، استخدم الكلمة في جملة قصيرة جديدة.'] },
        { title: 'استخدم التغذية الراجعة وحاول من جديد', icon: 'Lightbulb', text: 'إذا كانت الإجابة خاطئة، استخدم التلميح للعثور على الجملة التي تحتاجها. تحقق مما فهمته خطأ ثم حاول من جديد.', points: ['اقرأ تلميح إعادة المحاولة.', 'ارجع إلى الجملة التي يشير إليها ثم أجب من جديد.'] },
        { title: 'تحدث واكتب عما تعلمته', icon: 'PenTool', text: 'يقوى الفهم عندما تستطيع التعبير عنه. اختم كل فصل بمهمة قصيرة شفوية أو كتابية.', points: ['استخدم لغة واضحة تناسب A2.', 'حافظ على دقة كل معلومة في القصة.'] },
        { title: 'اختبر نفسك', icon: 'CheckCircle', text: 'استخدم فحوص الفصل الذاتية لتقرر هل أنت مستعد للانتقال أم تحتاج إلى تدريب قصير آخر.', points: ['أجب أولًا دون النظر.', 'إذا ترددت، استخدم خطوات إعادة المحاولة بدل إعادة قراءة كل شيء.'] },
      ]
);

const bullets = (values: string[]) => values.map(value => `- ${value}`).join('\n');

export const buildAdamA2GoldStudentGuideText = (
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): string => {
  const intro = language === 'en'
    ? '# Prophet Adam A2 — Self-Study Path\n\nUse this guide chapter by chapter. Do not try to memorise the whole story. Understand the main ideas, find the supporting details, learn useful language in context, correct mistakes, and show what you can do.'
    : '# قصة النبي آدم A2 — مسار الدراسة الذاتية\n\nاستخدم هذا الدليل فصلًا فصلًا. لا تحاول حفظ القصة كلها. افهم الأفكار الرئيسة، وحدد المعلومات الداعمة، وتعلم اللغة المفيدة في السياق، وصحح الأخطاء، وأظهر ما تستطيع فعله.';

  const chapterSections = blueprint.chapters.map((chapter) => {
    const guide = chapter.selfStudyGuide[language];
    const outcomes = chapter.learningMap?.learningOutcomes ?? [];
    const goals = outcomes.map(item => item.objective[language]);
    const success = outcomes.flatMap(item => item.successCriteria.map(criterion => criterion[language]));
    const steps = guide.studySequence ?? [];
    const checks = guide.selfCheck ?? [];
    const retrySteps = guide.repairStrategy ?? [];

    const labels = language === 'en'
      ? { goals: 'Goals', success: 'You are successful when…', path: 'Study Path', check: 'Self-Check', retry: 'If You Get Stuck', use: 'Use What You Learned', reflection: 'Reflection' }
      : { goals: 'الأهداف', success: 'تكون ناجحًا عندما…', path: 'مسار الدراسة', check: 'الفحص الذاتي', retry: 'إذا واجهت صعوبة', use: 'استخدم ما تعلمته', reflection: 'التأمل' };

    const chapterTitle = language === 'en' ? `## Chapter ${chapter.chapterId}` : `## الفصل ${chapter.chapterId}`;
    return [
      chapterTitle,
      `### ${labels.goals}`,
      bullets(goals),
      `### ${labels.success}`,
      bullets(success),
      `### ${labels.path}`,
      steps.map((step, index) => `${index + 1}. ${step}`).join('\n'),
      `### ${labels.check}`,
      bullets(checks),
      `### ${labels.retry}`,
      bullets(retrySteps),
      `### ${labels.use}`,
      guide.transferTask || '',
      `### ${labels.reflection}`,
      guide.reflectionPrompt || '',
    ].join('\n\n');
  }).join('\n\n---\n\n');

  return `${intro}\n\n---\n\n${chapterSections}`;
};

export const ADAM_A2_GOLD_VOCABULARY_TARGET_IDS = [
  'adam-a2-ch1-soil',
  'adam-a2-ch2-knowledge',
  'adam-a2-ch3-arrogant',
  'adam-a2-ch5-mistake',
  'adam-a2-ch8-offering',
  'adam-a2-ch10-jealousy',
] as const;

export const applyAdamA2GoldVocabularyChallenge = (
  pages: PageData[],
  blueprint: LearningBlueprint,
  language: BlueprintLanguage,
): PageData[] => {
  const byId = new Map(blueprint.chapters.flatMap(chapter => chapter.vocabularyTargets).map(target => [target.id, target]));
  const selected = ADAM_A2_GOLD_VOCABULARY_TARGET_IDS.flatMap(id => {
    const target = byId.get(id);
    return target ? [target] : [];
  });

  return pages.map(page => page.id === 12
    ? {
        ...page,
        vocabularyPairs: selected.map(target => ({
          word: target[language].word,
          meaning: target[language].definition,
        })),
      }
    : page);
};
