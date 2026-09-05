import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart6: Record<number, Exercise[]> = {
  7: [
    {
      id: 'mecca-a2-language-7-belief-choice', type: 'matching', title: 'Belief and Choice',
      instructions: 'Match each Chapter 7 pattern with its job.', question: 'How does the chapter describe belief, support and decision?',
      matchingPairs: [
        { left: 'there is no ... but ...', right: 'states an exclusive belief' },
        { left: 'wanted to be + noun/adjective', right: 'expresses a wish or choice' },
        { left: 'knew that + clause', right: 'states something understood as true' },
        { left: 'in the end', right: 'introduces the final result' },
      ],
      correctAnswer: { 'there is no ... but ...': 'states an exclusive belief', 'wanted to be + noun/adjective': 'expresses a wish or choice', 'knew that + clause': 'states something understood as true', 'in the end': 'introduces the final result' },
      explanation: 'Chapter 7 combines belief, knowledge and final decision language.', feedback: { correct: 'Correct.', incorrect: 'Separate belief, wish, knowledge and result.' },
    },
    {
      id: 'mecca-a2-language-7-difficulty', type: 'multiple-choice', title: 'Future From the Past',
      instructions: 'Choose the sentence that correctly reports a future situation from a past point of view.', question: 'Which sentence is correct?',
      options: ['He knew that life would be difficult.', 'He knew that life will difficult.', 'He know life would difficult.'], correctAnswer: 0,
      explanation: '“Would + base verb/be” can report a future expectation from a past point of view.', feedback: { correct: 'Correct.', incorrect: 'Use knew that + would be.' },
    },
    {
      id: 'mecca-a2-language-7-result', type: 'fill-blanks', title: 'Final Result',
      instructions: 'Complete the phrase.', question: 'Which word completes the chapter result marker?',
      fillBlanksText: 'In the [blank], he accepted Islam.', correctAnswer: 'end',
      explanation: '“In the end” introduces the final result after thinking or difficulty.', feedback: { correct: 'Correct.', incorrect: 'Use the final-result phrase from the chapter.' },
    },
    {
      id: 'mecca-a2-language-7-production', type: 'reflection', title: 'Describe a Difficult Choice',
      instructions: 'Write or say four short A2 sentences about a difficult but safe choice.', question: 'Can you express belief, expected difficulty and a final decision?', correctAnswer: null,
      explanation: 'Use at least three Chapter 7 patterns.', feedback: { correct: 'Keep the sequence clear.', incorrect: '' },
      discussionPrompts: [
        { question: 'Use “I wanted to ...”.', mode: 'Individual' },
        { question: 'Add “I knew that ...”.', mode: 'Individual' },
        { question: 'Use “would be ...”.', mode: 'Individual' },
        { question: 'Finish with “In the end ...”.', mode: 'Pair' },
      ],
    },
  ],
};
