import type { Exercise } from '../../../../types';

/**
 * Continuation of manually authored Adam B1 English Language Focus work.
 * Chapter 7 activities are derived from the actual chapter language and remain
 * separate from comprehension assessment.
 */
export const adamB1LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'adam-b1-language-7-intention-response-decision',
      type: 'matching',
      title: 'Intention, Regret, and Decision',
      instructions: 'Match each Chapter 7 expression with the meaning it adds.',
      question: 'How does the chapter distinguish intention, emotional response, learning, and a later decision?',
      matchingPairs: [
        { left: "it wasn’t on purpose", right: 'shows that the wrong action was not intentional' },
        { left: 'They were very sad about their wrong action', right: 'describes an emotional response to what happened' },
        { left: 'learned from their mistake', right: 'shows a lesson taken from a past action' },
        { left: 'decided never to repeat it', right: 'expresses a strong decision about future behavior' },
      ],
      correctAnswer: {
        "it wasn’t on purpose": 'shows that the wrong action was not intentional',
        'They were very sad about their wrong action': 'describes an emotional response to what happened',
        'learned from their mistake': 'shows a lesson taken from a past action',
        'decided never to repeat it': 'expresses a strong decision about future behavior',
      },
      explanation: 'The chapter moves from absence of intention to regret, learning, and a decision about what should not happen again. These forms help speakers explain responsibility without reducing everything to a single yes/no judgment.',
      feedback: {
        correct: 'Correct. You separated intention, feeling, learning, and commitment.',
        incorrect: 'Ask what each expression tells us: Was it intended? How did they feel? What did they learn? What did they decide?',
      },
    },
    {
      id: 'adam-b1-language-7-speech-request-cause-contrast',
      type: 'matching',
      title: 'Speech, Request, Cause, and Contrast',
      instructions: 'Match each expression with its discourse function.',
      question: 'How does Chapter 7 connect what people say with explanation and contrast?',
      matchingPairs: [
        { left: '“Are you running away from Me?”', right: 'uses direct speech to present a question exactly as spoken' },
        { left: 'Adam replied, “No, my Lord, but I am shy of You.”', right: 'reports an answer and uses “but” to qualify or contrast the first idea' },
        { left: 'They wanted Allah to pardon them', right: 'uses “want + person + to + verb” to express a desired action by someone else' },
        { left: 'because he was arrogant', right: 'gives the reason for the behavior described before it' },
        { left: 'On the other hand', right: 'signals a shift to a contrasting perspective or path' },
      ],
      correctAnswer: {
        '“Are you running away from Me?”': 'uses direct speech to present a question exactly as spoken',
        'Adam replied, “No, my Lord, but I am shy of You.”': 'reports an answer and uses “but” to qualify or contrast the first idea',
        'They wanted Allah to pardon them': 'uses “want + person + to + verb” to express a desired action by someone else',
        'because he was arrogant': 'gives the reason for the behavior described before it',
        'On the other hand': 'signals a shift to a contrasting perspective or path',
      },
      explanation: 'Direct speech brings a voice into the narrative, “but” qualifies or contrasts, “want + person + to + verb” expresses a desired action, “because” gives cause, and “on the other hand” organizes contrast across a longer stretch of discourse.',
      feedback: {
        correct: 'Good. You identified how the chapter manages voice, cause, desire, and contrast.',
        incorrect: 'Look for the exact spoken words, the desired action, the reason, and the phrase that changes perspective.',
      },
    },
    {
      id: 'adam-b1-language-7-purpose-responsibility-future',
      type: 'matching',
      title: 'Purpose and Future Responsibility',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the final paragraph move from pardon to a new role on earth?',
      matchingPairs: [
        { left: 'put them on earth to live there', right: 'uses “to + verb” to state the purpose or intended role of the move' },
        { left: 'gave them everything to rule on earth', right: 'links what was given with the purpose it would serve' },
        { left: 'They would direct, control and make everything better', right: 'uses “would” to describe expected future actions from a past narrative viewpoint' },
        { left: 'make everything better', right: 'uses “make + object + adjective” to describe causing a change of state' },
      ],
      correctAnswer: {
        'put them on earth to live there': 'uses “to + verb” to state the purpose or intended role of the move',
        'gave them everything to rule on earth': 'links what was given with the purpose it would serve',
        'They would direct, control and make everything better': 'uses “would” to describe expected future actions from a past narrative viewpoint',
        'make everything better': 'uses “make + object + adjective” to describe causing a change of state',
      },
      explanation: 'The final paragraph combines purpose infinitives with “would” for future-in-the-past expectations and “make + object + adjective” for causing change. Together they frame responsibility as an ongoing role rather than one isolated action.',
      feedback: {
        correct: 'Correct. You connected purpose, expected future action, and caused change.',
        incorrect: 'Ask what each “to + verb” is for, what “would” predicts from the past viewpoint, and what “make ... better” causes.',
      },
    },
    {
      id: 'adam-b1-language-7-build-repair-plan',
      type: 'reflection',
      title: 'Build a Repair-and-Responsibility Plan',
      instructions: 'Write or say four connected B1 sentences about a new situation where someone makes an unintentional mistake, responds responsibly, and then takes on a useful next step. Use at least four Chapter 7 patterns.',
      question: 'Can you use the chapter’s language to explain intention, response, reason, decision, and future responsibility in a new context?',
      correctAnswer: null,
      explanation: 'A strong response may include “not on purpose”, “was/were sad about ...”, “learned from ...”, “decided never to ...”, “wanted + person + to ...”, “because ...”, “on the other hand ...”, “to + verb” for purpose, or “would ...” for an expected later action.',
      feedback: {
        correct: 'Keep the four sentences connected so the intention, response, reason, and next responsibility are easy to follow.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Explain that a mistake happened but was not on purpose.', mode: 'Individual' },
        { question: 'Sentence 2 — Describe the person’s response and what they learned from the mistake.', mode: 'Individual' },
        { question: 'Sentence 3 — Give a reason and a decision using “because ...” and “decided never to ...”.', mode: 'Individual' },
        { question: 'Sentence 4 — State a useful next purpose or expected responsibility using “to + verb” and/or “would ...”.', mode: 'Pair' },
      ],
    },
  ],
};
