import type { PageData, TeacherGuideSection } from '../types';

type Language = 'en' | 'ar';

const chapterLabel = (page: PageData, language: Language) =>
  language === 'ar' ? `الفصل ${page.id}: ${page.title}` : `Chapter ${page.id}: ${page.title}`;

const pageVocabulary = (page: PageData) => (page.vocabulary ?? []).slice(0, 4).map((entry) => entry.word).join(', ');

export const buildB1EvidenceGuides = (effectivePages: PageData[], language: Language) => {
  const stories = effectivePages.filter((page) => page.type === 'story');

  const teacherGuide: TeacherGuideSection[] = stories.map((page) => {
    const quickQuestion = page.exercises?.[0]?.question;
    const vocab = pageVocabulary(page);

    if (language === 'ar') {
      return {
        chapter: chapterLabel(page, language),
        timing: '45 دقيقة',
        objectives: [
          'تحديد الفكرة الرئيسة ودليلين داعمين من نص الفصل.',
          'شرح علاقة سبب ونتيجة أو دافع للشخصيات بالاستناد إلى النص.',
          `استخدام مفردات الفصل في إجابة قصيرة${vocab ? `: ${vocab}` : '.'}`,
        ],
        pedagogy: 'قراءة تحليلية بمستوى B1 تعتمد على الدليل. تبقى المعلومات الدينية والتاريخية ضمن الصياغة والدرجة من اليقين التي يقدمها الفصل نفسه.',
        grammarFocus: 'روابط السبب والنتيجة، أفعال القول، والجمل المركبة القصيرة لخدمة المعنى.',
        pronunciationFocus: 'قراءة الجمل المفتاحية بصوت واضح مع الانتباه إلى النبر والتنغيم.',
        lessonPlan: '0–5 د: توقع من العنوان والصورة. 5–15 د: قراءة/استماع للفكرة العامة. 15–25 د: إعادة القراءة وتحديد دليلين. 25–35 د: مفردات في السياق وعلاقة سبب/نتيجة أو دافع. 35–42 د: تنفيذ Quick Challenge والعودة إلى الفقرة عند الخطأ. 42–45 د: بطاقة خروج من جملة ادعاء + دليل.',
        discussionPoints: [
          quickQuestion ?? 'ما الفكرة الرئيسة في هذا الفصل، وما الدليل الذي يدعمها؟',
          'أي تفصيل في النص يفسر بصورة أفضل السبب أو النتيجة أو دافع الشخصية؟',
        ],
        differentiation: {
          fastFinishers: 'اكتب فقرة قصيرة بصيغة ادعاء → دليل → تفسير، ثم أضف مقارنة أو نتيجة ثانية إذا كان النص يدعمها.',
          strugglingLearners: 'استخدم إطار الجملة: يوضح الفصل أن ___ لأن النص يقول/يبين ___.',
        },
        interactiveTips: [
          'استخدم مفردات Word Notes قبل الإجابة ثم اطلب من الطالب الإشارة إلى الفقرة التي تدعم اختياره.',
          'بعد إجابة غير صحيحة، أعد الطالب إلى الدليل ثم اسمح بمحاولة ثانية.',
        ],
        assessmentTools: {
          rubric: ['صحة الفهم', 'استخدام الدليل', 'وضوح اللغة'],
          exitTicket: ['اكتب ادعاء واحداً عن الفصل وادعمه بدليل نصي واحد.'],
        },
      };
    }

    return {
      chapter: chapterLabel(page, language),
      timing: '45 minutes',
      objectives: [
        'Identify the chapter’s main idea and at least two supporting details.',
        'Explain one cause/result relationship or character motivation using textual evidence.',
        `Use chapter vocabulary accurately in a short response${vocab ? `: ${vocab}` : '.'}`,
      ],
      pedagogy: 'Evidence-first B1 reading. Keep religious and historical claims within the wording and degree of certainty provided by the chapter itself.',
      grammarFocus: 'Cause/result linkers, reporting language, and short complex sentences used to explain meaning.',
      pronunciationFocus: 'Clear reading of key sentences with attention to word stress and narrative intonation.',
      lessonPlan: '0–5m: predict from title/image. 5–15m: read/listen for gist. 15–25m: reread and mark two pieces of evidence. 25–35m: vocabulary in context plus cause/result or motivation. 35–42m: complete the Quick Challenge and return to the paragraph after a weak answer. 42–45m: exit ticket using claim + evidence.',
      discussionPoints: [
        quickQuestion ?? 'What is the main idea of this chapter, and which detail best supports it?',
        'Which textual detail best explains a cause, result, or character motivation in this chapter?',
      ],
      differentiation: {
        fastFinishers: 'Write a short claim → evidence → explanation paragraph and add a second comparison or consequence when the text supports it.',
        strugglingLearners: 'Use the frame: The chapter shows ___ because the text says/shows ___.',
      },
      interactiveTips: [
        'Use the Word Notes before answering, then ask learners to point to the paragraph that supports their choice.',
        'After an incorrect answer, require a reread of the relevant evidence before retrying.',
      ],
      assessmentTools: {
        rubric: ['Comprehension accuracy', 'Use of evidence', 'Language clarity'],
        exitTicket: ['Write one claim about the chapter and support it with one textual detail.'],
      },
    };
  });

  const selfStudyGuide: TeacherGuideSection[] = stories.map((page) => {
    const quickQuestion = page.exercises?.[0]?.question;

    if (language === 'ar') {
      return {
        chapter: chapterLabel(page, language),
        timing: '35–40 دقيقة',
        objectives: [
          'فهم الفكرة العامة دون ترجمة كل كلمة.',
          'العثور على دليل نصي يدعم الإجابة.',
          'إعادة استخدام مفردات الفصل في تلخيص قصير.',
        ],
        pedagogy: 'تعلم مستقل قائم على القراءة ثم إعادة القراءة من أجل الدليل.',
        grammarFocus: 'لاحظ روابط السبب والنتيجة والعبارات التي تنقل قولاً أو تفسيراً.',
        pronunciationFocus: 'استمع ثم اقرأ جملة أو جملتين بصوت عالٍ مع تقليد الإيقاع.',
        lessonPlan: '1) عاين العنوان والصورة وWord Notes. 2) اقرأ/استمع مرة للفكرة العامة. 3) أعد القراءة وحدد دليلين. 4) خمن معنى المفردات من السياق ثم تحقق من Word Notes. 5) أجب عن Quick Challenge. 6) إذا أخطأت أو ترددت، ارجع إلى الفقرة المناسبة ثم أعد المحاولة. 7) اكتب ملخصاً من 2–3 جمل.',
        discussionPoints: [quickQuestion ?? 'ما الدليل في الفصل الذي يدعم إجابتك؟'],
        differentiation: {
          fastFinishers: 'أضف جملة تشرح سبباً أو نتيجة أو مقارنة مدعومة بالنص.',
          strugglingLearners: 'حدد جملة واحدة فقط في النص ثم أعد صياغتها بكلماتك قبل الإجابة.',
        },
        interactiveTips: [
          'لا تتحقق من الإجابة قبل تحديد الفقرة التي اعتمدت عليها.',
          'استخدم التغذية الراجعة كإشارة لإعادة القراءة، وليس كبديل عن النص.',
        ],
      };
    }

    return {
      chapter: chapterLabel(page, language),
      timing: '35–40 minutes',
      objectives: [
        'Understand the gist without translating every word.',
        'Locate textual evidence that supports an answer.',
        'Reuse chapter vocabulary in a short summary.',
      ],
      pedagogy: 'Independent B1 study built around read → reread → evidence → retry.',
      grammarFocus: 'Notice cause/result linkers and language used to report statements or explanations.',
      pronunciationFocus: 'Listen, then read one or two key sentences aloud while copying the rhythm.',
      lessonPlan: '1) Preview the title, image, and Word Notes. 2) Read/listen once for gist. 3) Reread and mark two pieces of evidence. 4) Guess vocabulary from context, then check Word Notes. 5) Complete the Quick Challenge. 6) If wrong or unsure, return to the relevant paragraph and retry. 7) Write a 2–3 sentence summary.',
      discussionPoints: [quickQuestion ?? 'Which evidence in the chapter supports your answer?'],
      differentiation: {
        fastFinishers: 'Add one text-supported sentence explaining a cause, consequence, or comparison.',
        strugglingLearners: 'Choose one sentence from the text, paraphrase it in simpler language, then answer.',
      },
      interactiveTips: [
        'Do not check the answer until you can point to the paragraph you used.',
        'Treat feedback as a rereading cue rather than a replacement for the text.',
      ],
    };
  });

  return { teacherGuide, selfStudyGuide };
};
