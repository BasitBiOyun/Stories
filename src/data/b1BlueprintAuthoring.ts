import type { BlueprintGuidePair, LocalizedText } from './learningBlueprint';
export { L, fill, matching, mc, tap, tf } from './a2BlueprintAuthoring';

export type B1GuideInput = {
  focus: LocalizedText;
  primaryQuestion: LocalizedText;
  secondQuestion: LocalizedText;
  grammar: LocalizedText;
  pronunciation: LocalizedText;
  fast: LocalizedText;
  support: LocalizedText;
};

export const guideBundle = (input: B1GuideInput): { teacherGuide: BlueprintGuidePair; selfStudyGuide: BlueprintGuidePair } => ({
  teacherGuide: {
    en: {
      timing: '45 minutes',
      pedagogy: `Keep the chapter itself as the evidence source. Model a claim → evidence → explanation response, then let learners explain ${input.focus.en} in B1-level language.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Preview the title and image. Read once for the main idea, then reread for evidence. Ask: ${input.primaryQuestion.en} Require learners to point to the sentence that supports the answer. Review Word Notes in context, complete the Quick Challenge, then discuss: ${input.secondQuestion.en} Finish with a short claim → evidence → explanation response.`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Ask learners to separate what the chapter states from what they infer from it.',
        'After an answer, require one sentence of textual evidence before accepting the explanation.',
      ],
      assessmentTools: {
        rubric: ['Accurate claim', 'Relevant chapter evidence', 'Clear explanation', 'Appropriate B1 language'],
        exitTicket: [input.secondQuestion.en],
      },
      extraResources: undefined,
    },
    ar: {
      timing: '45 دقيقة',
      pedagogy: `اجعل الفصل نفسه مصدر الدليل. قدّم نموذجًا لإجابة على نمط: ادعاء ← دليل ← تفسير، ثم دع المتعلمين يشرحون ${input.focus.ar} بلغة تناسب B1.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `عاين العنوان والصورة. اقرأ مرة لفهم الفكرة الرئيسة، ثم أعد القراءة بحثًا عن الدليل. اسأل: ${input.primaryQuestion.ar} واطلب من المتعلمين الإشارة إلى الجملة التي تدعم الإجابة. راجع ملاحظات المفردات في السياق، ثم نفّذ التحدي السريع وناقش: ${input.secondQuestion.ar} اختم بإجابة قصيرة: ادعاء ← دليل ← تفسير.`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'اطلب من المتعلمين الفصل بين ما يقوله الفصل صراحة وما يستنتجونه منه.',
        'بعد كل إجابة، اطلب جملة واحدة من النص بوصفها دليلًا قبل قبول التفسير.',
      ],
      assessmentTools: {
        rubric: ['دقة الادعاء', 'دليل مناسب من الفصل', 'وضوح التفسير', 'لغة مناسبة لمستوى B1'],
        exitTicket: [input.secondQuestion.ar],
      },
      extraResources: undefined,
    },
  },
  selfStudyGuide: {
    en: {
      timing: '35–40 minutes',
      pedagogy: `Read for the main idea first, then reread to collect evidence about ${input.focus.en}. Keep facts and interpretation separate.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Read the chapter once without stopping. On the second reading answer: ${input.primaryQuestion.en} Underline the sentence that proves your answer. Guess Word Notes from context before opening them. Complete the Quick Challenge. Finish by answering: ${input.secondQuestion.en} in claim → evidence → explanation form.`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Mark one sentence as evidence for each answer.',
        'If an inference is not supported by a chapter sentence, revise it.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.en] },
      extraResources: undefined,
    },
    ar: {
      timing: '35–40 دقيقة',
      pedagogy: `اقرأ أولًا لفهم الفكرة الرئيسة، ثم أعد القراءة لجمع الدليل حول ${input.focus.ar}. افصل بين المعلومة والتفسير.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `اقرأ الفصل مرة دون توقف. في القراءة الثانية أجب عن: ${input.primaryQuestion.ar} وحدد الجملة التي تثبت إجابتك. حاول فهم ملاحظات المفردات من السياق قبل فتحها. نفّذ التحدي السريع. اختم بالإجابة عن: ${input.secondQuestion.ar} بصيغة: ادعاء ← دليل ← تفسير.`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'حدد جملة واحدة من النص بوصفها دليلًا لكل إجابة.',
        'إذا لم يدعم الفصل الاستنتاج بجملة واضحة، فعدّل الاستنتاج.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.ar] },
      extraResources: undefined,
    },
  },
});
