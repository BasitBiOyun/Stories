import type { Exercise } from '../../../../types';

/** Manually authored Moses A2 Language Focus — Chapter 8 onward. */
export const mosesA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  8: [
    {
      id: 'moses-a2-language-8-question-ability',
      type: 'matching',
      title: 'Questions and Ability',
      instructions: 'Match each Chapter 8 expression with the meaning or function it adds.',
      question: 'How does the chapter ask about an action and explain that someone is not able to do something?',
      matchingPairs: [
        { left: 'Why aren’t you taking your sheep to drink water?', right: 'asks for the reason for an action that is not happening now' },
        { left: 'He cannot come with us.', right: 'expresses present inability' },
        { left: 'Why + negative present continuous?', right: 'asks why an expected action is not happening' },
        { left: 'cannot + base verb', right: 'means someone is not able to do an action' },
      ],
      correctAnswer: {
        'Why aren’t you taking your sheep to drink water?': 'asks for the reason for an action that is not happening now',
        'He cannot come with us.': 'expresses present inability',
        'Why + negative present continuous?': 'asks why an expected action is not happening',
        'cannot + base verb': 'means someone is not able to do an action',
      },
      explanation: 'The direct question uses a negative present continuous form to ask about an action expected now. “Cannot + base verb” expresses inability.',
      feedback: { correct: 'Correct. You separated the question form from the language of ability.', incorrect: 'Look at what Moses asks the sisters, then at what they say their father cannot do.' },
    },
    {
      id: 'moses-a2-language-8-purpose-result',
      type: 'matching',
      title: 'Purpose and Result',
      instructions: 'Match each expression with its function in the sisters’ explanation.',
      question: 'How do the sisters explain why they do the work and what happens because of their situation?',
      matchingPairs: [
        { left: 'There are no young men in our house to help us.', right: 'uses to + verb to show purpose' },
        { left: 'So, we take the sheep to the water.', right: 'shows a result or action that follows from the situation' },
        { left: 'There are no + plural noun', right: 'says that nobody or nothing of that kind is present' },
        { left: 'so + clause', right: 'connects a situation with what happens next' },
      ],
      correctAnswer: {
        'There are no young men in our house to help us.': 'uses to + verb to show purpose',
        'So, we take the sheep to the water.': 'shows a result or action that follows from the situation',
        'There are no + plural noun': 'says that nobody or nothing of that kind is present',
        'so + clause': 'connects a situation with what happens next',
      },
      explanation: '“To + verb” can show purpose, “there are no ...” describes absence, and “so” introduces a result or next action.',
      feedback: { correct: 'Correct. You identified absence, purpose and result.', incorrect: 'Find the sentence about who is not in the house, then the action that follows because of this situation.' },
    },
    {
      id: 'moses-a2-language-8-time-waiting',
      type: 'matching',
      title: 'Waiting and Time',
      instructions: 'Match each Chapter 8 phrase with the time meaning it gives.',
      question: 'How does the chapter talk about waiting and coming home earlier than usual?',
      matchingPairs: [
        { left: 'We wait for our turn.', right: 'describes waiting until it is your time to act' },
        { left: 'When the sisters came home early, their father asked ...', right: 'uses when to connect one past event with another' },
        { left: 'You came home very early!', right: 'says the action happened before the usual time' },
        { left: 'We did not wait for the other shepherds to leave the well.', right: 'uses wait for + person + to + verb to describe the event being waited for' },
      ],
      correctAnswer: {
        'We wait for our turn.': 'describes waiting until it is your time to act',
        'When the sisters came home early, their father asked ...': 'uses when to connect one past event with another',
        'You came home very early!': 'says the action happened before the usual time',
        'We did not wait for the other shepherds to leave the well.': 'uses wait for + person + to + verb to describe the event being waited for',
      },
      explanation: 'The chapter uses “wait for”, “when”, and “early” to organize time and expectations. “Wait for + person + to + verb” tells which event someone is waiting for.',
      feedback: { correct: 'Correct. You followed the language of turns, waiting and earlier-than-usual time.', incorrect: 'Notice which phrases tell whose turn it is, when something happened, and what event someone waited for.' },
    },
    {
      id: 'moses-a2-language-8-production',
      type: 'reflection',
      title: 'Use It: Explain a Shared Task',
      instructions: 'Imagine a safe everyday situation at home, school or a community event. Write or say four short sentences using at least three Chapter 8 language frames.',
      question: 'Can you ask about a missing action, explain an ability problem, give a result, and describe waiting or timing?',
      correctAnswer: null,
      explanation: 'A strong A2 response can use “Why aren’t you ...?”, “cannot + verb”, “There are no ... to ...”, “so ...”, “wait for ...”, “when ...”, or “early”.',
      feedback: { correct: 'Use the Chapter 8 language in a new shared-task situation instead of retelling the well scene.', incorrect: '' },
      discussionPrompts: [
        { question: 'Question — Ask why one expected action is not happening now.', mode: 'Pair' },
        { question: 'Ability — Explain one thing a person cannot do.', mode: 'Individual' },
        { question: 'Result — Add a sentence with “so”.', mode: 'Individual' },
        { question: 'Time — Add one sentence with “wait for”, “when”, or “early”.', mode: 'Individual' },
      ],
    },
  ],
};
