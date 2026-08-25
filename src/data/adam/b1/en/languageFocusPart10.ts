import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam B1 English Language Focus for Chapter 11.
 * Activities are grounded in the chapter language and remain separate from the
 * Quick Challenge's event-sequencing comprehension task.
 */
export const adamB1LanguageFocusExercisesPart10: Record<number, Exercise[]> = {
  11: [
    {
      id: 'adam-b1-language-11-cause-threat-refusal',
      type: 'matching',
      title: 'Cause, Threat, and Refusal',
      instructions: 'Match each Chapter 11 expression with the meaning or function it carries.',
      question: 'How does the chapter use short language patterns to explain motive, threat, and refusal?',
      matchingPairs: [
        { left: 'Allah accepted Habil’s offering, because he gave from his heart.', right: 'uses “because” to explain the reason for an outcome' },
        { left: 'I will kill you.', right: 'uses “will” in direct speech to express a threat or strong intention' },
        { left: 'I won’t fight back and harm you.', right: 'uses “won’t” to refuse a future action' },
        { left: 'you are my brother and I fear Allah', right: 'adds reasons that support the refusal' },
      ],
      correctAnswer: {
        'Allah accepted Habil’s offering, because he gave from his heart.': 'uses “because” to explain the reason for an outcome',
        'I will kill you.': 'uses “will” in direct speech to express a threat or strong intention',
        'I won’t fight back and harm you.': 'uses “won’t” to refuse a future action',
        'you are my brother and I fear Allah': 'adds reasons that support the refusal',
      },
      explanation: 'Chapter 11 contrasts two future-oriented statements: one person announces harmful intent, while the other refuses harm and supports that refusal with reasons.',
      feedback: {
        correct: 'Correct. You identified cause, threat, refusal, and supporting reason.',
        incorrect: 'Look at what “because”, “will”, “won’t”, and “and” are doing in each statement.',
      },
    },
    {
      id: 'adam-b1-language-11-regret-indirect-question',
      type: 'matching',
      title: 'Regret and Not Knowing What to Do',
      instructions: 'Match each expression with the function it performs after the violent action.',
      question: 'How does the language show reflection, uncertainty, and comparison?',
      matchingPairs: [
        { left: 'I killed my brother.', right: 'states a completed past action directly' },
        { left: 'I did the worst thing in life.', right: 'evaluates a past action with a superlative expression' },
        { left: 'I don’t know what I should do with his dead body.', right: 'uses an embedded question to express uncertainty about the next action' },
        { left: 'I am worse than this raven.', right: 'uses a comparative form to judge oneself against another being' },
        { left: 'I cannot hide my brother’s dead body.', right: 'uses “cannot” to express inability' },
      ],
      correctAnswer: {
        'I killed my brother.': 'states a completed past action directly',
        'I did the worst thing in life.': 'evaluates a past action with a superlative expression',
        'I don’t know what I should do with his dead body.': 'uses an embedded question to express uncertainty about the next action',
        'I am worse than this raven.': 'uses a comparative form to judge oneself against another being',
        'I cannot hide my brother’s dead body.': 'uses “cannot” to express inability',
      },
      explanation: 'The chapter moves from naming a completed action to judging it, admitting uncertainty, comparing oneself with the raven, and expressing inability. These forms help build a coherent voice of regret and panic.',
      feedback: {
        correct: 'Good. You separated completed action, evaluation, uncertainty, comparison, and inability.',
        incorrect: 'Ask whether the sentence reports what happened, judges it, asks indirectly what to do, compares, or expresses inability.',
      },
    },
    {
      id: 'adam-b1-language-11-process-and-guidance',
      type: 'multiple-choice',
      title: 'Describe a Process and What It Teaches',
      instructions: 'Choose the passage that uses Chapter 11 language relationships naturally in a new context.',
      question: 'Which passage clearly links a reaction, a developing action, uncertainty, guidance, and a later self-evaluation?',
      options: [
        'When Eren saw the damaged shelf, he started checking each piece. He did not know what he should repair first, so his uncle showed him the way to support the weak side. Afterward, Eren said, “I was less careful than I should have been, but now I know what to do.”',
        'When Eren damaged shelf started because should what repair way less now.',
        'Eren checking uncle because what should the way and less than repaired first.',
      ],
      correctAnswer: 0,
      explanation: 'The first passage uses “when” to frame a reaction, “started + -ing” for a developing action, an embedded “what ... should ...” question for uncertainty, “showed him the way to ...” for guidance, and comparison/evaluation in the closing sentence.',
      feedback: {
        correct: 'Correct. The language forms build one connected development rather than isolated sentences.',
        incorrect: 'Choose the option where reaction, process, uncertainty, guidance, and evaluation are all expressed in complete connected sentences.',
      },
    },
    {
      id: 'adam-b1-language-11-reflect-and-revise',
      type: 'reflection',
      title: 'From a Bad Choice to a Better Next Step',
      instructions: 'Write or say four connected B1 sentences about someone who makes a serious mistake and then has to decide what to do next. Use at least four Chapter 11 patterns.',
      question: 'Can you use the chapter’s language to express cause, a strong intention or refusal, uncertainty, guidance, comparison, or inability in a new situation?',
      correctAnswer: null,
      explanation: 'A strong response may use “because ...”, “I will ... / I won’t ...”, “when ...”, “started + -ing”, “I don’t know what I should ...”, “showed ... the way to ...”, “worse/better than ...”, or “cannot ...”. Keep the sentences connected around one new situation rather than retelling Chapter 11.',
      feedback: {
        correct: 'Keep the response coherent: show the choice, the reaction, the uncertainty, and the next step.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — State the situation and, if useful, explain a reason with “because”.', mode: 'Individual' },
        { question: 'Sentence 2 — Express a strong intention or refusal with “will” or “won’t”.', mode: 'Individual' },
        { question: 'Sentence 3 — Show uncertainty with “I don’t know what I should ...” or a process with “started + -ing”.', mode: 'Individual' },
        { question: 'Sentence 4 — Add guidance, comparison, or inability to show what the person learns next.', mode: 'Pair' },
      ],
    },
  ],
};
