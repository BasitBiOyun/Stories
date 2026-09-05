import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
  5: [
    {
      id: 'mecca-a2-language-5-reason-duty', type: 'matching', title: 'Reason, Duty and Ability',
      instructions: 'Match each Chapter 5 pattern with its job.', question: 'How does the chapter explain Bilal’s situation?',
      matchingPairs: [
        { left: 'because + clause', right: 'gives a reason' },
        { left: 'had to + verb', right: 'shows past necessity' },
        { left: 'did not have any + noun', right: 'shows lack in the past' },
        { left: 'had no power to + verb', right: 'shows lack of ability or control' },
      ],
      correctAnswer: { 'because + clause': 'gives a reason', 'had to + verb': 'shows past necessity', 'did not have any + noun': 'shows lack in the past', 'had no power to + verb': 'shows lack of ability or control' },
      explanation: 'Chapter 5 combines reason, necessity and lack.', feedback: { correct: 'Correct.', incorrect: 'Separate reason, necessity and lack.' },
    },
    {
      id: 'mecca-a2-language-5-reporting', type: 'multiple-choice', title: 'Reporting a Message',
      instructions: 'Choose the sentence that correctly reports what the Prophet taught.', question: 'Which sentence is correct?',
      options: ['He taught that people must be fair and equal.', 'He taught people must fair and equal.', 'He taught that people be fair equal.'], correctAnswer: 0,
      explanation: '“Taught that + clause” reports a teaching or message.', feedback: { correct: 'Correct.', incorrect: 'Use taught that followed by a complete clause.' },
    },
    {
      id: 'mecca-a2-language-5-command', type: 'fill-blanks', title: 'Reported Instruction',
      instructions: 'Complete the sentence with one word.', question: 'Which word completes the reported instruction?',
      fillBlanksText: 'He told the people of Mecca [blank] stop worshipping idols.', correctAnswer: 'to',
      explanation: '“Told + person + to + verb” reports an instruction.', feedback: { correct: 'Correct.', incorrect: 'Use the infinitive marker before stop.' },
    },
    {
      id: 'mecca-a2-language-5-production', type: 'reflection', title: 'Explain a New Message',
      instructions: 'Write or say four short A2 sentences about a new rule or idea.', question: 'Can you give a reason, report a message and state an instruction?', correctAnswer: null,
      explanation: 'Use at least three Chapter 5 patterns.', feedback: { correct: 'Keep the message clear and simple.', incorrect: '' },
      discussionPrompts: [
        { question: 'Give a reason with because.', mode: 'Individual' },
        { question: 'Use “had to ...” once.', mode: 'Individual' },
        { question: 'Report an idea with “taught that ...”.', mode: 'Individual' },
        { question: 'Report an instruction with “told ... to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
