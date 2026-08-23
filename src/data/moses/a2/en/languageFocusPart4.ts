import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 6 onward. */
export const mosesA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  6: [
    {
      id: 'moses-a2-language-6-purpose-accident',
      type: 'matching',
      title: 'Purpose and an Unplanned Result',
      instructions: 'Match each Chapter 6 expression with the meaning it adds.',
      question: 'How does the chapter show why Moses acted and whether the result was planned?',
      matchingPairs: [
        { left: 'Moses ran to help him.', right: 'uses to + verb to show purpose' },
        { left: 'He accidentally caused someone’s death.', right: 'shows that the result was not planned' },
        { left: 'to help + person', right: 'answers the question “Why did he run?”' },
        { left: 'accidentally', right: 'means “not on purpose”' },
      ],
      correctAnswer: {
        'Moses ran to help him.': 'uses to + verb to show purpose',
        'He accidentally caused someone’s death.': 'shows that the result was not planned',
        'to help + person': 'answers the question “Why did he run?”',
        'accidentally': 'means “not on purpose”',
      },
      explanation: '“To + base verb” can explain purpose. “Accidentally” tells us that an action or result was not intended.',
      feedback: { correct: 'Correct. You separated purpose from an unplanned result.', incorrect: 'Ask first why the action happened, then whether the result was intended.' },
    },
    {
      id: 'moses-a2-language-6-feeling-reason',
      type: 'matching',
      title: 'Feelings and Reasons',
      instructions: 'Match each expression with its function.',
      question: 'How does Chapter 6 connect a feeling with its reason?',
      matchingPairs: [
        { left: 'Moses was very upset.', right: 'states a strong feeling' },
        { left: 'He was so sorry because he accidentally caused someone’s death.', right: 'connects a feeling with its reason' },
        { left: 'because + clause', right: 'introduces the reason for a feeling or action' },
        { left: 'so + adjective', right: 'makes the adjective stronger' },
      ],
      correctAnswer: {
        'Moses was very upset.': 'states a strong feeling',
        'He was so sorry because he accidentally caused someone’s death.': 'connects a feeling with its reason',
        'because + clause': 'introduces the reason for a feeling or action',
        'so + adjective': 'makes the adjective stronger',
      },
      explanation: 'The chapter uses feeling adjectives, “so” for intensity, and “because” to explain why someone feels that way.',
      feedback: { correct: 'Correct. You identified feeling, intensity and reason.', incorrect: 'Find the feeling word, then the word that answers “why?”.' },
    },
    {
      id: 'moses-a2-language-6-warning-language',
      type: 'matching',
      title: 'A Warning About Danger',
      instructions: 'Match the warning language with what it communicates.',
      question: 'How does Moses’s friend describe danger happening now and danger expected next?',
      matchingPairs: [
        { left: 'The king’s soldiers are looking for you.', right: 'describes a situation happening now' },
        { left: 'They are going to catch you.', right: 'warns about an expected future result' },
        { left: 'Soldiers of the king will kill you.', right: 'states a strong future warning' },
        { left: 'Run away from the city.', right: 'gives an urgent command' },
      ],
      correctAnswer: {
        'The king’s soldiers are looking for you.': 'describes a situation happening now',
        'They are going to catch you.': 'warns about an expected future result',
        'Soldiers of the king will kill you.': 'states a strong future warning',
        'Run away from the city.': 'gives an urgent command',
      },
      explanation: 'Present continuous can describe what is happening now. “Be going to” and “will” can express future danger, while an imperative gives direct advice or a command.',
      feedback: { correct: 'Correct. You followed the warning from present danger to future danger and action.', incorrect: 'Separate what is happening now, what is expected next, and what the listener is told to do.' },
    },
    {
      id: 'moses-a2-language-6-production',
      type: 'reflection',
      title: 'Use It: Give a Safe Warning',
      instructions: 'Create a new safe A2 situation, such as bad weather or a closed road. Write or say three or four short sentences using at least three frames below.',
      question: 'Can you explain a purpose, give a reason and warn someone about what is happening now and what may happen next?',
      correctAnswer: null,
      explanation: 'A strong response can use “to + verb”, “because”, “is/are + verb-ing”, “be going to”, “will”, and one safe imperative such as “Wait here” or “Take another road”.',
      feedback: { correct: 'Use the Chapter 6 language in a new safe situation rather than retelling the bazaar scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Purpose — Say why someone does one action using “to + verb”.', mode: 'Individual' },
        { question: 'Reason — Add one sentence with “because”.', mode: 'Individual' },
        { question: 'Now — Describe one thing that is happening now.', mode: 'Individual' },
        { question: 'Warning — Say what is going to happen or will happen, then give one safe instruction.', mode: 'Pair' },
      ],
    },
  ],
};
