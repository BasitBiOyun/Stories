import type { PageData, TeacherGuideSection } from '../types';
import type { B2GoldLanguage } from './b2GoldFactory';

const label = (page: PageData, language: B2GoldLanguage): string =>
  language === 'ar' ? `الفصل ${page.id}: ${page.title}` : `Chapter ${page.id}: ${page.title}`;

const words = (page: PageData): string[] => (page.vocabulary ?? []).slice(0, 5).map((entry) => entry.word);

export const buildB2EvidenceGuides = ({
  effectivePages,
  storyIds,
  language,
}: {
  effectivePages: PageData[];
  storyIds: number[];
  language: B2GoldLanguage;
}): { teacherGuide: TeacherGuideSection[]; selfStudyGuide: TeacherGuideSection[] } => {
  const pages = storyIds.map((id) => {
    const page = effectivePages.find((candidate) => candidate.id === id && candidate.type === 'story');
    if (!page) throw new Error(`B2 Gold guides: story page ${id} is missing.`);
    return page;
  });

  const teacherGuide = pages.map((page): TeacherGuideSection => {
    const question = page.exercises?.[0]?.question?.trim();
    if (!question) throw new Error(`B2 Gold guides: chapter ${page.id} Quick Challenge question is missing.`);
    const vocabulary = words(page);
    const vocabularyText = vocabulary.join(language === 'ar' ? '، ' : ', ');

    if (language === 'ar') {
      return {
        chapter: label(page, language),
        timing: '55 دقيقة',
        objectives: [
          `الإجابة عن سؤال الفصل المركزي وتبريرها: ${question}`,
          'اختيار دليلين على الأقل من نص الفصل لدعم التفسير.',
          `استخدام مفردات الفصل في سياقها: ${vocabularyText || 'مفردات الفصل'}.`,
          'التمييز بين المعلومة النصية والاستنتاج والتأمل المفتوح.',
        ],
        pedagogy: 'استخدم قراءة B2 قائمة على الدليل: الفكرة العامة أولاً، ثم تحديد السبب أو المقارنة أو نقطة التحول، ثم العودة إلى النص قبل قبول أي تفسير.',
        grammarFocus: 'لغة التعليل والاستدلال والمقارنة: لأن، لذلك، نتيجةً لذلك، بينما، في المقابل، وفقاً للفصل، يدل هذا على.',
        pronunciationFocus: vocabulary.length ? `راجع نطق: ${vocabularyText}.` : 'راجع نطق مفردات الفصل الأساسية.',
        lessonPlan: '0–7 د: معاينة. 7–20 د: قراءة للفكرة العامة. 20–33 د: قراءة ثانية وتحديد دليلين. 33–42 د: مقارنة خيارات Quick Challenge. 42–48 د: الإجابة والعودة إلى الفقرة عند الخطأ. 48–55 د: كتابة فكرة → دليل → تفسير وبطاقة خروج.',
        discussionPoints: [
          question,
          'ما الدليلان الأقوى في الفصل لدعم الإجابة؟',
          'أي تفسير بديل هو الأضعف دعماً من النص، ولماذا؟',
        ],
        differentiation: {
          fastFinishers: 'اكتب فقرة تحليلية من 120–150 كلمة مستخدماً دليلين من الفصل وعبارتي ربط على الأقل.',
          strugglingLearners: 'استخدم جدول: الفكرة → الدليل → ما الذي يوضحه الدليل، ثم أعد Quick Challenge.',
        },
        interactiveTips: [
          'استخدم نقاط التفاعل لتحديد موضع الفكرة ثم تحقق منها في نص القصة.',
          'استنتج معنى الكلمة من السياق قبل فتح Word Notes.',
          'بعد الإجابة الخاطئة، عد إلى الفقرة المناسبة ثم حاول من جديد.',
        ],
        assessmentTools: {
          rubric: ['اختيار الدليل', 'تحليل B2', 'المفردات في السياق', 'وضوح التفسير'],
          exitTicket: ['فكرة واحدة يدعمها الفصل', 'الدليل الذي يدعمها'],
        },
        extraResources: undefined,
      };
    }

    return {
      chapter: label(page, language),
      timing: '55 minutes',
      objectives: [
        `Answer and justify the chapter's central question: ${question}`,
        'Support the interpretation with at least two details from the canonical chapter.',
        `Use selected B2 vocabulary accurately in context: ${vocabularyText || 'the chapter Word Notes'}.`,
        'Distinguish textual evidence from inference and open reflection.',
      ],
      pedagogy: 'Use evidence-first B2 close reading: establish gist, identify cause/comparison/turning point, and require chapter evidence before accepting interpretation.',
      grammarFocus: 'Evidence and relationship language: because, therefore, as a result, however, whereas, according to the chapter, this suggests, and this is supported by.',
      pronunciationFocus: vocabulary.length ? `Review stress and pronunciation for: ${vocabularyText}.` : 'Review the chapter Word Notes.',
      lessonPlan: '0–7 min: Preview. 7–20 min: Read/listen for gist. 20–33 min: Reread and mark two pieces of evidence. 33–42 min: Compare Quick Challenge options. 42–48 min: Answer; after a wrong response, return to the relevant paragraph before retrying. 48–55 min: Write claim → evidence → explanation and complete an exit ticket.',
      discussionPoints: [
        question,
        'Which two details from the chapter best support your answer?',
        'Which alternative interpretation is least supported, and what evidence rules it out?',
      ],
      differentiation: {
        fastFinishers: 'Write a 120–150 word analytical paragraph using two pieces of evidence and at least two B2 linking expressions.',
        strugglingLearners: 'Use a Claim → Evidence → What it shows frame, complete one row, then retry the Quick Challenge.',
      },
      interactiveTips: [
        'Use hotspots as evidence prompts, not substitutes for the canonical paragraph.',
        'Infer Word Note meanings from context before checking the definition.',
        'After an incorrect answer, return to the relevant paragraph and retry.',
      ],
      assessmentTools: {
        rubric: ['Evidence selection', 'B2 inference/analysis', 'Vocabulary in context', 'Explanation clarity'],
        exitTicket: ['One supported claim', 'The sentence or event that supports it'],
      },
      extraResources: undefined,
    };
  });

  const selfStudyGuide = pages.map((page): TeacherGuideSection => {
    const question = page.exercises?.[0]?.question?.trim();
    if (!question) throw new Error(`B2 Gold self-study: chapter ${page.id} Quick Challenge question is missing.`);
    const vocabulary = words(page);
    const vocabularyText = vocabulary.join(language === 'ar' ? '، ' : ', ');

    if (language === 'ar') {
      return {
        chapter: label(page, language),
        timing: '40 دقيقة',
        objectives: [
          `فهم سؤال الفصل والإجابة عنه: ${question}`,
          'تحديد الدليل قبل الاختيار بين التفسيرات.',
          `استخدام مفردات الفصل في سياقها: ${vocabularyText || 'مفردات الفصل'}.`,
          'كتابة استجابة قصيرة وفق نموذج الفكرة والدليل والتفسير.',
        ],
        pedagogy: 'ادرس في ثلاث جولات: الفكرة العامة، ثم الدليل والمفردات، ثم التحليل. لا تستخدم معلومات خارج الفصل لتحديد الإجابة.',
        lessonPlan: `عاين العنوان والصورة وWord Notes. اقرأ مرة للفكرة العامة. اقرأ ثانية وحدد دليلين يساعدانك على الإجابة عن: «${question}». نفذ Quick Challenge. إذا أخطأت أو ترددت، عد إلى الفقرة ذات الصلة ثم حاول مرة أخرى. اختم بملخص من 5–7 جمل: فكرة → دليل → تفسير.`,
        discussionPoints: [
          `اسأل نفسك: ${question}`,
          'ما الجملة أو الحدث الأقوى دليلاً؟',
          'ما التأمل الذي يمكنك إضافته بعد فصله عن المعلومة النصية؟',
        ],
        differentiation: {
          fastFinishers: 'اكتب 120–150 كلمة واشرح أيضاً لماذا لا يدعم النص الخيارين الآخرين بالقدر نفسه.',
          strugglingLearners: 'انسخ جملة ذات صلة، ضع خطاً تحت الكلمات الأساسية، وأكمل: «يدل هذا على أن…».',
        },
        interactiveTips: [
          'استنتج معنى الكلمة قبل فتح Word Notes.',
          'استخدم hotspot للوصول إلى الفكرة ثم تحقق منها في النص.',
          'بعد Quick Challenge اكتب سبباً نصياً واحداً لصحة الإجابة.',
        ],
        extraResources: undefined,
      };
    }

    return {
      chapter: label(page, language),
      timing: '40 minutes',
      objectives: [
        `Understand and answer the chapter's central question: ${question}`,
        'Find and mark evidence before choosing between plausible interpretations.',
        `Use B2 vocabulary in context: ${vocabularyText || 'the chapter Word Notes'}.`,
        'Produce a short claim-evidence-explanation response.',
      ],
      pedagogy: 'Study independently in three passes: gist, evidence/vocabulary, then analysis. Do not use outside facts to decide the chapter answer.',
      lessonPlan: `Preview the title, image, hotspots, and Word Notes. Read once for gist. Reread and mark two details that help answer: “${question}” Complete the Quick Challenge. If wrong or uncertain, return to the relevant paragraph and try again. Finish with a 5–7 sentence claim-evidence-explanation summary.`,
      discussionPoints: [
        `Ask yourself: ${question}`,
        'What exact sentence or event is the strongest evidence?',
        'What reflection can you add after separating it from the chapter’s factual claims?',
      ],
      differentiation: {
        fastFinishers: 'Write 120–150 words and explain why the two distractors are less well supported.',
        strugglingLearners: 'Copy one relevant sentence, underline key words, and complete: “This evidence shows that…”.',
      },
      interactiveTips: [
        'Infer highlighted words from context before opening Word Notes.',
        'Use hotspots to locate ideas, then verify them in the prose.',
        'After the Quick Challenge, write one sentence explaining why the correct answer has stronger evidence.',
      ],
      extraResources: undefined,
    };
  });

  return { teacherGuide, selfStudyGuide };
};
