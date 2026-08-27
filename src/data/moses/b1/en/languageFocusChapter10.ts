import type { Exercise } from '../../../../types';

/** Moses B1 Chapter 10 Language Focus, manually derived from the English story text. */
export const mosesB1LanguageFocusChapter10: Record<number, Exercise[]> = {
  10: [
    {
      id: 'moses-b1-language-10-effort-realization',
      type: 'matching',
      title: 'Effort, Realization and Necessity',
      instructions: 'Match each expression with the function it performs in the argument.',
      question: 'How does the chapter move from trying to persuade Pharaoh to deciding that another step is necessary?',
      matchingPairs: [
        { left: 'After making every effort to convince him', right: 'shows that Moses tried persuasion fully before changing approach' },
        { left: 'Moses realized that logical discussions would not work.', right: 'expresses a conclusion based on what happened' },
        { left: 'The Pharaoh kept refusing to believe in Allah.', right: 'shows an action continuing despite repeated attempts' },
        { left: 'Moses had no choice but to display the miracles.', right: 'expresses necessity when other options have failed' },
      ],
      correctAnswer: {
        'After making every effort to convince him': 'shows that Moses tried persuasion fully before changing approach',
        'Moses realized that logical discussions would not work.': 'expresses a conclusion based on what happened',
        'The Pharaoh kept refusing to believe in Allah.': 'shows an action continuing despite repeated attempts',
        'Moses had no choice but to display the miracles.': 'expresses necessity when other options have failed',
      },
      explanation: 'The paragraph builds a clear progression: sustained effort → realization → continued refusal → necessary next action.',
      feedback: {
        correct: 'Correct. You identified how the language builds the decision step by step.',
        incorrect: 'Look for the phrase showing effort, the verb showing a conclusion, the continuing refusal, and the expression of necessity.',
      },
    },
    {
      id: 'moses-b1-language-10-action-result',
      type: 'matching',
      title: 'Action and Visible Result',
      instructions: 'Match each action with the result language that follows it.',
      question: 'How does the chapter connect Moses’s actions with immediate visible changes?',
      matchingPairs: [
        { left: 'Moses got his staff and threw it on the ground.', right: 'sets up the action before the change' },
        { left: 'The staff turned into a big snake!', right: 'states the visible result with “turned into”' },
        { left: 'Then he put his arm in his armpit.', right: 'uses “Then” to move to the next action' },
        { left: 'When he got out his arm, it was shining white!', right: 'uses “When” to connect the action with the resulting state' },
      ],
      correctAnswer: {
        'Moses got his staff and threw it on the ground.': 'sets up the action before the change',
        'The staff turned into a big snake!': 'states the visible result with “turned into”',
        'Then he put his arm in his armpit.': 'uses “Then” to move to the next action',
        'When he got out his arm, it was shining white!': 'uses “When” to connect the action with the resulting state',
      },
      explanation: 'The chapter uses sequence markers and change-of-state language to make the progression from action to result easy to follow.',
      feedback: {
        correct: 'Good. You followed the language from action to visible outcome.',
        incorrect: 'Separate the action, the sequence marker, and the words that describe the resulting state.',
      },
    },
    {
      id: 'moses-b1-language-10-purpose-contrast',
      type: 'matching',
      title: 'Purpose and Contrast',
      instructions: 'Match each expression with the relationship it creates.',
      question: 'How does the chapter explain why the signs were given and how Pharaoh responded?',
      matchingPairs: [
        { left: 'Allah gave them to Moses', right: 'introduces the source of the signs' },
        { left: 'in order to help him against the Pharaoh', right: 'states purpose explicitly' },
        { left: 'These were miracles of Allah.', right: 'identifies what the signs mean in the narrative' },
        { left: 'The king and his advisors laughed at him.', right: 'creates a contrasting human response after the purpose and signs are explained' },
      ],
      correctAnswer: {
        'Allah gave them to Moses': 'introduces the source of the signs',
        'in order to help him against the Pharaoh': 'states purpose explicitly',
        'These were miracles of Allah.': 'identifies what the signs mean in the narrative',
        'The king and his advisors laughed at him.': 'creates a contrasting human response after the purpose and signs are explained',
      },
      explanation: '“In order to” explains purpose, while the final reaction contrasts the intended support of the signs with Pharaoh’s mocking response.',
      feedback: {
        correct: 'Correct. You distinguished purpose from the contrasting response.',
        incorrect: 'Find the phrase answering “Why were the signs given?” and then compare it with Pharaoh’s reaction.',
      },
    },
    {
      id: 'moses-b1-language-10-connected-production',
      type: 'reflection',
      title: 'Explain a Change of Approach',
      instructions: 'Write or say five connected B1 sentences about a person who first tries one solution, realizes it is not working, chooses another action, sees a result, and explains the purpose of that action. Do not retell the chapter.',
      question: 'Can you connect effort, realization, necessity, result and purpose in one short explanation?',
      correctAnswer: null,
      explanation: 'Keep one situation throughout. Useful language includes “After making every effort...”, “realized that...”, “kept...”, “had no choice but to...”, “When...”, “turned into/became...”, and “in order to...”.',
      feedback: {
        correct: 'Keep the five sentences connected so the change of approach is easy to follow.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the first solution and the effort made.', mode: 'Individual' },
        { question: 'Sentence 2 — Use “realized that...” to explain why the first approach was not working.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “had no choice but to...” or another natural necessity expression for the next step.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “When...” or a sequence marker to show the result of the new action.', mode: 'Pair' },
        { question: 'Sentence 5 — Use “in order to...” to explain the purpose of the new action.', mode: 'Pair' },
      ],
    },
  ],
};
