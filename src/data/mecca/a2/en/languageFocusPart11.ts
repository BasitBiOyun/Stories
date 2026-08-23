import type { Exercise } from '../../../../types';

/**
 * Additional chapter-specific English Language Focus for Mecca A2.
 * Authored manually from the Chapter 12 story text; Quick Challenge remains comprehension-focused.
 */
export const meccaA2LanguageFocusExercisesPart11: Record<number, Exercise[]> = {
  12: [
    {
      id: 'mecca-a2-language-12-habit-meaning',
      type: 'matching',
      title: 'Habit and Meaning',
      instructions: 'Match each Chapter 12 expression with the language job it does.',
      question: 'How does the chapter describe a past habit and explain words?',
      matchingPairs: [
        { left: 'Bilal used to start the morning call to prayer very early', right: 'used to + verb describes a repeated past habit' },
        { left: 'He added the words ...', right: 'added introduces something new that was included' },
        { left: 'which means “Prayer is better than sleep”', right: 'which means explains the meaning of words or an expression' },
        { left: 'every morning', right: 'shows how often an action happens' },
      ],
      correctAnswer: {
        'Bilal used to start the morning call to prayer very early': 'used to + verb describes a repeated past habit',
        'He added the words ...': 'added introduces something new that was included',
        'which means “Prayer is better than sleep”': 'which means explains the meaning of words or an expression',
        'every morning': 'shows how often an action happens',
      },
      explanation: 'Chapter 12 uses “used to” for a repeated past action and “which means” to explain an expression.',
      feedback: {
        correct: 'Correct. You identified language for habit, addition, meaning and frequency.',
        incorrect: 'Look again at “used to”, “added”, “which means”, and “every morning”.',
      },
    },
    {
      id: 'mecca-a2-language-12-reaction-instruction',
      type: 'matching',
      title: 'Reaction and Instruction',
      instructions: 'Match the Chapter 12 pattern with its function.',
      question: 'How does the chapter show a reaction and tell someone what to do?',
      matchingPairs: [
        { left: 'The Prophet was pleased with this', right: 'be pleased with + noun shows a positive reaction' },
        { left: 'told him to repeat it', right: 'tell + person + to + verb gives an instruction' },
        { left: 'repeat it every morning', right: 'verb + time expression combines an action with frequency' },
        { left: 'he gave his last speech', right: 'simple past reports a completed event in the past' },
      ],
      correctAnswer: {
        'The Prophet was pleased with this': 'be pleased with + noun shows a positive reaction',
        'told him to repeat it': 'tell + person + to + verb gives an instruction',
        'repeat it every morning': 'verb + time expression combines an action with frequency',
        'he gave his last speech': 'simple past reports a completed event in the past',
      },
      explanation: 'The chapter moves from a positive reaction to an instruction, then later reports a completed historical event.',
      feedback: {
        correct: 'Good. You separated reaction, instruction, frequency and completed past action.',
        incorrect: 'Ask whether each expression shows a feeling, an instruction, frequency, or a finished event.',
      },
    },
    {
      id: 'mecca-a2-language-12-equality-reason',
      type: 'matching',
      title: 'Equality and Reason',
      instructions: 'Match each expression with what it communicates.',
      question: 'How does Chapter 12 express equality, comparison and reason?',
      matchingPairs: [
        { left: 'all people are equal', right: 'all + plural noun makes a statement about everyone in a group' },
        { left: 'No skin color is better than another', right: 'better than compares two things and rejects superiority here' },
        { left: 'it is wrong to dislike or disrespect people', right: 'it is wrong to + verb evaluates an action as unacceptable' },
        { left: 'because of the color of their skin', right: 'because of + noun gives the reason for an action or situation' },
      ],
      correctAnswer: {
        'all people are equal': 'all + plural noun makes a statement about everyone in a group',
        'No skin color is better than another': 'better than compares two things and rejects superiority here',
        'it is wrong to dislike or disrespect people': 'it is wrong to + verb evaluates an action as unacceptable',
        'because of the color of their skin': 'because of + noun gives the reason for an action or situation',
      },
      explanation: 'These patterns help the chapter make a general statement, compare, evaluate behavior, and give a reason.',
      feedback: {
        correct: 'Correct. You identified the chapter’s language for equality, comparison, evaluation and reason.',
        incorrect: 'Focus on “all”, “better than”, “it is wrong to”, and “because of”.',
      },
    },
    {
      id: 'mecca-a2-language-12-production',
      type: 'reflection',
      title: 'Use It: A Fair Rule',
      instructions: 'Create a new A2 situation about school, a club, a family or a team. Say or write four short sentences: describe one past habit with “used to”, explain a word or rule with “which means”, give an instruction with “tell ... to ...”, and make a fair statement using “equal”, “better than”, “it is wrong to”, or “because of”. Do not retell Chapter 12.',
      question: 'Can you use Chapter 12 language to explain a routine or rule and express fairness in a new situation?',
      correctAnswer: null,
      explanation: 'A strong response transfers the chapter’s language of habit, explanation, instruction and fairness to a new everyday context.',
      feedback: {
        correct: 'Use the four language functions in one clear new situation.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Past habit — Use “used to”.', mode: 'Individual' },
        { question: 'Meaning — Use “which means”.', mode: 'Individual' },
        { question: 'Instruction — Use “tell ... to ...”.', mode: 'Individual' },
        { question: 'Fairness — Use one comparison/evaluation/reason pattern.', mode: 'Pair' },
      ],
    },
  ],
};
