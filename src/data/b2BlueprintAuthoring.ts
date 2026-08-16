import type { BlueprintGuidePair, LocalizedText } from './learningBlueprint';
export { L, fill, matching, mc, tap, tf } from './a2BlueprintAuthoring';

export type B2GuideInput = {
  focus: LocalizedText;
  primaryQuestion: LocalizedText;
  secondQuestion: LocalizedText;
  grammar: LocalizedText;
  pronunciation: LocalizedText;
  fast: LocalizedText;
  support: LocalizedText;
};

export const guideBundle = (input: B2GuideInput): { teacherGuide: BlueprintGuidePair; selfStudyGuide: BlueprintGuidePair } => ({
  teacherGuide: {
    en: {
      timing: '55 minutes',
      pedagogy: `Keep the chapter itself as the evidence source. Require learners to distinguish what the chapter explicitly states from what they infer, and build an evidence → interpretation → qualification response about ${input.focus.en}.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Preview the chapter title and image, then read once for argument and narrative movement. Reread to answer: ${input.primaryQuestion.en} Require two separate pieces of chapter evidence where the text provides them. Review Word Notes in context and complete the Quick Challenge. Then discuss: ${input.secondQuestion.en} Finish with a 120–150 word analytical paragraph that labels evidence and interpretation clearly.`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Ask learners to quote or point to the exact sentence before making an inference.',
        'When two passages support different parts of an answer, require both and ask what each piece of evidence proves.',
        'Challenge overgeneralisation: if the chapter gives a source limit or attribution, preserve it in the answer.',
      ],
      assessmentTools: {
        rubric: ['Accurate analytical claim', 'Two relevant pieces of chapter evidence where available', 'Clear evidence–interpretation distinction', 'Appropriate B2 linking and qualification'],
        exitTicket: [input.secondQuestion.en],
      },
      extraResources: undefined,
    },
    ar: {
      timing: '55 دقيقة',
      pedagogy: `اجعل الفصل نفسه مصدر الدليل. اطلب من المتعلمين التمييز بين ما يصرح به الفصل وما يستنتجونه، وبناء استجابة على نمط: دليل ← تفسير ← تقييد حول ${input.focus.ar}.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `عاين عنوان الفصل والصورة، ثم اقرأ مرة لفهم الحجة والحركة السردية. أعد القراءة للإجابة عن: ${input.primaryQuestion.ar} واطلب دليلين منفصلين من الفصل عندما يتيحهما النص. راجع ملاحظات المفردات في السياق ونفذ التحدي السريع. ثم ناقش: ${input.secondQuestion.ar} واختم بفقرة تحليلية من 120–150 كلمة تميز بوضوح بين الدليل والتفسير.`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'اطلب من المتعلم الإشارة إلى الجملة الدقيقة قبل تقديم أي استنتاج.',
        'عندما تدعم فقرتان جانبين مختلفين من الإجابة، اطلب الدليلين وحدد ما الذي يثبته كل واحد.',
        'امنع التعميم الزائد: إذا وضع الفصل قيدًا للمصدر أو نسب رأيًا إلى جهة، فيجب الحفاظ على هذا القيد.',
      ],
      assessmentTools: {
        rubric: ['دقة الادعاء التحليلي', 'دليلان مناسبان من الفصل عندما يكونان متاحين', 'وضوح الفصل بين الدليل والتفسير', 'روابط وتقييد مناسب لمستوى B2'],
        exitTicket: [input.secondQuestion.ar],
      },
      extraResources: undefined,
    },
  },
  selfStudyGuide: {
    en: {
      timing: '40 minutes',
      pedagogy: `Read first for the chapter's line of thought, then reread to collect evidence about ${input.focus.en}. Mark every sentence as evidence, interpretation, or source qualification before writing.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Read the chapter once without stopping. On the second reading answer: ${input.primaryQuestion.en} Mark at least two useful sentences when the chapter provides them and note what each proves. Infer Word Notes from context before opening them. Complete the Quick Challenge. Finish by answering: ${input.secondQuestion.en} in a 120–150 word analytical paragraph using evidence → interpretation → qualification.`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Use E for explicit evidence, I for inference, and Q for a source qualification or limit.',
        'If a conclusion cannot be tied to a chapter sentence, weaken or remove it.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.en] },
      extraResources: undefined,
    },
    ar: {
      timing: '40 دقيقة',
      pedagogy: `اقرأ أولًا لفهم خط التفكير في الفصل، ثم أعد القراءة لجمع الدليل حول ${input.focus.ar}. صنف كل جملة قبل الكتابة إلى: دليل، تفسير، أو قيد للمصدر.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `اقرأ الفصل مرة دون توقف. في القراءة الثانية أجب عن: ${input.primaryQuestion.ar} وحدد جملتين مفيدتين على الأقل عندما يتيحهما النص، واكتب ما الذي يثبته كل دليل. حاول فهم ملاحظات المفردات من السياق قبل فتحها. نفذ التحدي السريع. اختم بالإجابة عن: ${input.secondQuestion.ar} في فقرة تحليلية من 120–150 كلمة بصيغة: دليل ← تفسير ← تقييد.`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'استخدم د للدليل الصريح، س للاستنتاج، وق لقيد المصدر أو حدوده.',
        'إذا لم يمكن ربط الاستنتاج بجملة من الفصل، فخففه أو احذفه.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.ar] },
      extraResources: undefined,
    },
  },
});
