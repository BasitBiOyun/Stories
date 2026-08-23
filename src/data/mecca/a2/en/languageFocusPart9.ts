import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the Chapter 10 story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart9: Record<number, Exercise[]> = {
  10: [
    {
      id: 'mecca-a2-language-10-agreement-and-offers',
      type: 'matching',
      title: 'Agreement and Offers',
      instructions: 'Match each Chapter 10 expression with the language job it does.',
      question: 'How does the chapter show agreement and imagined offers?',
      matchingPairs: [
        { left: 'Umayya agreed to sell Bilal', right: 'agree to + verb shows that someone accepts a plan or action' },
        { left: 'If you offered me only one piece of gold, I would still sell him to you', right: 'if + past, would + verb describes an imagined situation and result' },
        { left: 'If you asked me for one hundred pieces of gold, I would still pay', right: 'the same if ... would ... frame shows what someone says they would do in another imagined situation' },
        { left: 'Abu Bakr replied', right: 'reply introduces an answer in a conversation' },
      ],
      correctAnswer: {
        'Umayya agreed to sell Bilal': 'agree to + verb shows that someone accepts a plan or action',
        'If you offered me only one piece of gold, I would still sell him to you': 'if + past, would + verb describes an imagined situation and result',
        'If you asked me for one hundred pieces of gold, I would still pay': 'the same if ... would ... frame shows what someone says they would do in another imagined situation',
        'Abu Bakr replied': 'reply introduces an answer in a conversation',
      },
      explanation: 'Chapter 10 uses “agreed to” for accepted action and two parallel “if ... would ...” sentences for imagined offers in the dialogue.',
      feedback: {
        correct: 'Correct. You identified agreement, imagined conditions and a reply.',
        incorrect: 'Look again at “agreed to ...” and the two sentences beginning with “If ...”.',
      },
    },
    {
      id: 'mecca-a2-language-10-manner-and-order',
      type: 'matching',
      title: 'How and When Things Happen',
      instructions: 'Match each expression with what it tells us.',
      question: 'How does Chapter 10 add information about manner and order?',
      matchingPairs: [
        { left: 'Finally', right: 'shows that something happens at the end of a process' },
        { left: 'Bilal stood up with difficulty', right: 'with + noun can describe how an action happens' },
        { left: 'He went to see Prophet Muhammad first', right: 'first shows which action came before another' },
        { left: 'After that day', right: 'marks a new point in time after an earlier event' },
      ],
      correctAnswer: {
        Finally: 'shows that something happens at the end of a process',
        'Bilal stood up with difficulty': 'with + noun can describe how an action happens',
        'He went to see Prophet Muhammad first': 'first shows which action came before another',
        'After that day': 'marks a new point in time after an earlier event',
      },
      explanation: 'These expressions help the reader follow sequence and understand how an action happens.',
      feedback: {
        correct: 'Good. You separated sequence words from a phrase describing manner.',
        incorrect: 'Ask: does the expression tell us when something happens, or how it happens?',
      },
    },
    {
      id: 'mecca-a2-language-10-change-and-choice',
      type: 'matching',
      title: 'A Change in Status',
      instructions: 'Match the Chapter 10 language with its function.',
      question: 'How does the chapter describe a new situation and a choice?',
      matchingPairs: [
        { left: 'He was now a free man', right: 'now shows that the situation is different at this point' },
        { left: 'He was no longer a slave', right: 'no longer shows that an earlier situation has ended' },
        { left: 'Bilal became a free Muslim', right: 'become + noun/adjective describes a change of state or status' },
        { left: 'Abu Bakr could keep Bilal as a slave, but he did not', right: 'could + verb, but ... did not contrasts a possible action with the action actually chosen' },
      ],
      correctAnswer: {
        'He was now a free man': 'now shows that the situation is different at this point',
        'He was no longer a slave': 'no longer shows that an earlier situation has ended',
        'Bilal became a free Muslim': 'become + noun/adjective describes a change of state or status',
        'Abu Bakr could keep Bilal as a slave, but he did not': 'could + verb, but ... did not contrasts a possible action with the action actually chosen',
      },
      explanation: 'The chapter uses “now”, “no longer” and “became” to show change, and “could ... but did not” to contrast possibility with choice.',
      feedback: {
        correct: 'Correct. You identified language for change and for a possible action that was not chosen.',
        incorrect: 'Focus on “now”, “no longer”, “became”, and “could ... but he did not”.',
      },
    },
    {
      id: 'mecca-a2-language-10-production',
      type: 'reflection',
      title: 'Say It: Change and Choice',
      instructions: 'Create a new A2 situation about a student, team or family task. Say or write four short sentences: show agreement with “agreed to”, make one imagined sentence with “If ... would ...”, describe a change with “now/no longer/became”, and contrast possibility with choice using “could ... but did not”. Do not retell Chapter 10.',
      question: 'Can you use Chapter 10 language to describe a different change and decision?',
      correctAnswer: null,
      explanation: 'A strong response uses the four Chapter 10 frames in one simple new situation.',
      feedback: {
        correct: 'Use all four language frames in one clear situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Agreement — Use “agreed to + verb”.', mode: 'Individual' },
        { question: 'Imagined situation — Use “If ... , ... would ...”.', mode: 'Individual' },
        { question: 'Change — Use “now”, “no longer” or “became”.', mode: 'Individual' },
        { question: 'Choice — Use “could ... but did not”.', mode: 'Pair' },
      ],
    },
  ],
};
