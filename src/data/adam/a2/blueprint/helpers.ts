import type {
  BlueprintAssessmentItem,
  BlueprintGuidePair,
  BlueprintVocabularyTarget,
  LocalizedText,
} from '../../../learningBlueprint';
import { adamA2HighlightTargets } from '../highlights';

export const L = (en: string, ar: string): LocalizedText => ({ en, ar });

export const vocabularyTargetsFor = (chapterId: number): BlueprintVocabularyTarget[] =>
  (adamA2HighlightTargets[chapterId] ?? []).map(target => ({
    id: `adam-a2-ch${chapterId}-${target.id}`,
    en: { ...target.en },
    ar: { ...target.ar },
  }));

type ExercisePair = BlueprintAssessmentItem['exercise'];
type LocalizedOptions = { en: string[]; ar: string[] };
type PairRows = { en: Array<[string, string]>; ar: Array<[string, string]> };

const feedback = (explanation: LocalizedText) => ({
  en: {
    correct: 'Correct. This answer is stated in the chapter.',
    incorrect: `Return to the chapter and check this detail: ${explanation.en}`,
  },
  ar: {
    correct: 'صحيح. هذه الإجابة مذكورة في الفصل.',
    incorrect: `ارجع إلى الفصل وتحقق من هذه المعلومة: ${explanation.ar}`,
  },
});

export const mc = (
  question: LocalizedText,
  options: LocalizedOptions,
  correctAnswer: number,
  explanation: LocalizedText,
): ExercisePair => {
  const fb = feedback(explanation);
  return {
    en: {
      type: 'multiple-choice',
      title: 'Check the Text',
      instructions: 'Choose the answer supported by the chapter.',
      question: question.en,
      options: options.en,
      correctAnswer,
      explanation: explanation.en,
      feedback: fb.en,
    },
    ar: {
      type: 'multiple-choice',
      title: 'تحقق من النص',
      instructions: 'اختر الإجابة التي يدعمها الفصل.',
      question: question.ar,
      options: options.ar,
      correctAnswer,
      explanation: explanation.ar,
      feedback: fb.ar,
    },
  };
};

export const tf = (
  question: LocalizedText,
  correctAnswer: boolean,
  explanation: LocalizedText,
): ExercisePair => {
  const fb = feedback(explanation);
  return {
    en: {
      type: 'true-false',
      title: 'True or False',
      instructions: 'Decide whether the statement agrees with the chapter.',
      question: question.en,
      correctAnswer,
      explanation: explanation.en,
      feedback: fb.en,
    },
    ar: {
      type: 'true-false',
      title: 'صحيح أم خطأ',
      instructions: 'قرر هل تتفق العبارة مع الفصل أم لا.',
      question: question.ar,
      correctAnswer,
      explanation: explanation.ar,
      feedback: fb.ar,
    },
  };
};

export const tap = (
  question: LocalizedText,
  answer: LocalizedText,
  explanation: LocalizedText = answer,
): ExercisePair => {
  const fb = feedback(explanation);
  return {
    en: {
      type: 'tap-reveal',
      title: 'Think, Then Reveal',
      instructions: 'Answer from memory, then reveal the chapter answer.',
      question: question.en,
      correctAnswer: answer.en,
      explanation: explanation.en,
      tapRevealItems: [{ question: question.en, answer: answer.en }],
      feedback: fb.en,
    },
    ar: {
      type: 'tap-reveal',
      title: 'فكر ثم اكشف',
      instructions: 'أجب من ذاكرتك، ثم اكشف إجابة الفصل.',
      question: question.ar,
      correctAnswer: answer.ar,
      explanation: explanation.ar,
      tapRevealItems: [{ question: question.ar, answer: answer.ar }],
      feedback: fb.ar,
    },
  };
};

export const fill = (
  question: LocalizedText,
  sentence: LocalizedText,
  answer: LocalizedText,
  explanation: LocalizedText,
): ExercisePair => {
  const fb = feedback(explanation);
  return {
    en: {
      type: 'fill-blanks',
      title: 'Complete the Sentence',
      instructions: 'Complete the sentence with a word from the chapter.',
      question: question.en,
      fillBlanksText: sentence.en,
      correctAnswer: answer.en,
      explanation: explanation.en,
      feedback: fb.en,
    },
    ar: {
      type: 'fill-blanks',
      title: 'أكمل الجملة',
      instructions: 'أكمل الجملة بكلمة من الفصل.',
      question: question.ar,
      fillBlanksText: sentence.ar,
      correctAnswer: answer.ar,
      explanation: explanation.ar,
      feedback: fb.ar,
    },
  };
};

export const matching = (
  question: LocalizedText,
  rows: PairRows,
  explanation: LocalizedText,
): ExercisePair => {
  const fb = feedback(explanation);
  const enPairs = rows.en.map(([left, right]) => ({ left, right }));
  const arPairs = rows.ar.map(([left, right]) => ({ left, right }));
  return {
    en: {
      type: 'matching',
      title: 'Match the Details',
      instructions: 'Match each item with the detail stated in the chapter.',
      question: question.en,
      matchingPairs: enPairs,
      correctAnswer: Object.fromEntries(enPairs.map(pair => [pair.left, pair.right])),
      explanation: explanation.en,
      feedback: fb.en,
    },
    ar: {
      type: 'matching',
      title: 'صل المعلومات',
      instructions: 'صل كل عنصر بالمعلومة المذكورة في الفصل.',
      question: question.ar,
      matchingPairs: arPairs,
      correctAnswer: Object.fromEntries(arPairs.map(pair => [pair.left, pair.right])),
      explanation: explanation.ar,
      feedback: fb.ar,
    },
  };
};

export type GuideInput = {
  focus: LocalizedText;
  primaryQuestion: LocalizedText;
  secondQuestion: LocalizedText;
  grammar: LocalizedText;
  pronunciation: LocalizedText;
  fast: LocalizedText;
  support: LocalizedText;
};

export const guideBundle = (input: GuideInput): { teacherGuide: BlueprintGuidePair; selfStudyGuide: BlueprintGuidePair } => ({
  teacherGuide: {
    en: {
      timing: '30–35 minutes',
      pedagogy: `Keep the chapter text as the factual source. Model one short text-based answer, then let learners explain ${input.focus.en} in simple A2 language.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Preview the title and image. Read once for the main event. Reread the sentence needed for this question: ${input.primaryQuestion.en} Check the Word Notes in context, complete the Quick Challenge, then discuss: ${input.secondQuestion.en} End with one short factual sentence from the learner.`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Use hotspots and Word Notes to return to the relevant sentence, not as a second source of facts.',
        'After a wrong answer, ask the learner to point to the sentence that gives the answer before retrying.',
      ],
      assessmentTools: {
        rubric: ['Correct chapter detail', 'Uses the text', 'Clear A2 sentence', 'Accurate key vocabulary'],
        exitTicket: [input.secondQuestion.en],
      },
      extraResources: undefined,
    },
    ar: {
      timing: '30–35 دقيقة',
      pedagogy: `اجعل نص الفصل هو المصدر الواقعي. قدّم نموذجًا لإجابة قصيرة من النص، ثم دع المتعلمين يشرحون ${input.focus.ar} بلغة بسيطة تناسب A2.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `عاين العنوان والصورة. اقرأ مرة لفهم الحدث الرئيس. أعد القراءة للعثور على الجملة اللازمة لهذا السؤال: ${input.primaryQuestion.ar} راجع ملاحظات المفردات في السياق، ثم نفّذ التحدي السريع وناقش: ${input.secondQuestion.ar} اختم بجملة واقعية قصيرة من المتعلم.`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'استخدم نقاط التفاعل وملاحظات المفردات للعودة إلى الجملة المناسبة، لا كمصدر جديد للمعلومات.',
        'بعد الإجابة الخاطئة، اطلب من المتعلم الإشارة إلى الجملة التي تقدم الإجابة قبل إعادة المحاولة.',
      ],
      assessmentTools: {
        rubric: ['صحة معلومة الفصل', 'استخدام النص', 'وضوح جملة A2', 'دقة المفردات الأساسية'],
        exitTicket: [input.secondQuestion.ar],
      },
      extraResources: undefined,
    },
  },
  selfStudyGuide: {
    en: {
      timing: '15–20 minutes',
      pedagogy: `Read for meaning first. Use the chapter to check ${input.focus.en}; do not use outside information to decide an answer.`,
      grammarFocus: input.grammar.en,
      pronunciationFocus: input.pronunciation.en,
      lessonPlan: `Read the chapter once without stopping. Read it again and answer: ${input.primaryQuestion.en} Check the Word Notes only after guessing meaning from context. Complete the Quick Challenge. If unsure, reread the exact sentence. Finish by answering: ${input.secondQuestion.en}`,
      discussionPoints: [input.primaryQuestion.en, input.secondQuestion.en],
      differentiation: {
        fastFinishers: input.fast.en,
        strugglingLearners: input.support.en,
      },
      interactiveTips: [
        'Guess the meaning of a highlighted word from its sentence before opening the Word Note.',
        'For every correction, reread the sentence that contains the answer.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.en] },
      extraResources: undefined,
    },
    ar: {
      timing: '15–20 دقيقة',
      pedagogy: `اقرأ أولًا من أجل المعنى. استخدم الفصل للتحقق من ${input.focus.ar}، ولا تستخدم معلومات خارجية لتحديد الإجابة.`,
      grammarFocus: input.grammar.ar,
      pronunciationFocus: input.pronunciation.ar,
      lessonPlan: `اقرأ الفصل مرة من دون توقف. اقرأه مرة ثانية وأجب: ${input.primaryQuestion.ar} حاول فهم الكلمات من السياق قبل فتح ملاحظة المفردات. نفّذ التحدي السريع. إذا ترددت، فأعد قراءة الجملة نفسها. اختم بالإجابة عن: ${input.secondQuestion.ar}`,
      discussionPoints: [input.primaryQuestion.ar, input.secondQuestion.ar],
      differentiation: {
        fastFinishers: input.fast.ar,
        strugglingLearners: input.support.ar,
      },
      interactiveTips: [
        'حاول فهم الكلمة المظللة من الجملة قبل فتح ملاحظة المفردات.',
        'عند تصحيح إجابة، أعد قراءة الجملة التي تحتوي المعلومة.',
      ],
      assessmentTools: { exitTicket: [input.secondQuestion.ar] },
      extraResources: undefined,
    },
  },
});
