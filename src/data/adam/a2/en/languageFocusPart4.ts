import type { Exercise } from '../../../../types';

/**
 * Manually authored Adam A2 Language Focus continuation.
 * Each chapter is read before authoring; activities stay grounded in the chapter
 * and avoid repeating the comprehension job of Quick Challenge.
 */
export const adamA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'adam-a2-language-5-condition-result',
      type: 'matching',
      title: 'If This Happens, What Follows?',
      instructions: 'Match each Chapter 5 language pattern with the job it does.',
      question: 'How does the chapter connect a condition with a promised result?',
      matchingPairs: [
        { left: 'If you eat from that one tree, ...', right: 'introduces a condition' },
        { left: '... you will never die', right: 'gives the promised future result' },
        { left: 'if + present verb', right: 'sets up something that may happen' },
        { left: 'will + verb', right: 'states the future result of the condition' },
      ],
      correctAnswer: {
        'If you eat from that one tree, ...': 'introduces a condition',
        '... you will never die': 'gives the promised future result',
        'if + present verb': 'sets up something that may happen',
        'will + verb': 'states the future result of the condition',
      },
      explanation: 'The chapter contains a simple condition-result pattern: “If + present ..., will + verb”. The first part gives the condition; the second part gives the result that Iblis promises.',
      feedback: {
        correct: 'Correct. You separated the condition from the promised result.',
        incorrect: 'Look again at Iblis’s sentence and divide it at the comma: condition first, result second.',
      },
    },
    {
      id: 'adam-a2-language-5-mistake-response',
      type: 'matching',
      title: 'From a Mistake to a Better Decision',
      instructions: 'Match each Chapter 5 expression with what it communicates.',
      question: 'How does the chapter describe a mistake, regret, learning and a new decision?',
      matchingPairs: [
        { left: 'They made a mistake', right: 'states that they did something wrong' },
        { left: 'it wasn’t on purpose', right: 'says they did not intend the wrong action' },
        { left: 'They learned from their mistake', right: 'shows learning after something went wrong' },
        { left: 'They decided never to repeat it', right: 'expresses a decision about future behaviour' },
      ],
      correctAnswer: {
        'They made a mistake': 'states that they did something wrong',
        'it wasn’t on purpose': 'says they did not intend the wrong action',
        'They learned from their mistake': 'shows learning after something went wrong',
        'They decided never to repeat it': 'expresses a decision about future behaviour',
      },
      explanation: 'Chapter 5 gives a clear language sequence for responding to a mistake: recognise it, explain intention, learn from it and decide not to repeat it.',
      feedback: {
        correct: 'Good. You followed the language of mistake, intention, learning and decision.',
        incorrect: 'Return to the third paragraph and read the sentences after Adam and Eve eat from the tree.',
      },
    },
    {
      id: 'adam-a2-language-5-contrast-reason',
      type: 'matching',
      title: 'Two Different Responses',
      instructions: 'Match the connectors and patterns with the relationship they show.',
      question: 'How does the chapter contrast Adam and Eve’s response with Iblis’s response?',
      matchingPairs: [
        { left: 'They made a mistake, but it wasn’t on purpose', right: 'uses “but” to add an important contrast' },
        { left: 'However, Iblis took an opposite direction', right: 'changes from one response to a very different response' },
        { left: 'because he was arrogant', right: 'gives the reason for Iblis’s behaviour' },
        { left: 'He never thought he was wrong', right: 'describes his refusal to accept his mistake' },
      ],
      correctAnswer: {
        'They made a mistake, but it wasn’t on purpose': 'uses “but” to add an important contrast',
        'However, Iblis took an opposite direction': 'changes from one response to a very different response',
        'because he was arrogant': 'gives the reason for Iblis’s behaviour',
        'He never thought he was wrong': 'describes his refusal to accept his mistake',
      },
      explanation: '“But” contrasts two ideas inside one response, “however” changes direction between the two responses, and “because” gives a reason.',
      feedback: {
        correct: 'Correct. You identified contrast, change of direction and reason.',
        incorrect: 'Compare the third and fourth paragraphs and focus on “but”, “however” and “because”.',
      },
    },
    {
      id: 'adam-a2-language-5-talk-about-a-mistake',
      type: 'reflection',
      title: 'Say It: Learn from a Mistake',
      instructions: 'Write or say four short A2 sentences about a simple mistake and a better response. Use Chapter 5 language.',
      question: 'Can you explain a mistake, intention, learning and a new decision?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses the chapter’s language to move from a past mistake to reflection and a future decision.',
      feedback: {
        correct: 'Use the sentence starters to build a clear mistake-to-learning sequence.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Mistake: “I/They made a mistake when ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Intention: “It was / wasn’t on purpose.”', mode: 'Individual' },
        { question: 'Sentence 3 — Learning: “I/They learned from ...”', mode: 'Pair' },
        { question: 'Sentence 4 — Decision: “I/They decided not to ... again.”', mode: 'Pair' },
      ],
    },
  ],
};
