import type { Exercise } from '../../../../types';

export const meccaA2LanguageFocusExercisesPart5: Record<number, Exercise[]> = {
  6: [
    {
      id: 'mecca-a2-language-6-thinking', type: 'matching', title: 'Thinking and Deciding',
      instructions: 'Match each Chapter 6 pattern with its job.', question: 'How does the chapter describe Bilal’s thinking and secret visit?',
      matchingPairs: [
        { left: 'thought about + noun', right: 'describes a topic in someone’s mind' },
        { left: 'decided to + verb', right: 'shows a decision' },
        { left: 'did not want anyone to + verb', right: 'expresses a negative wish about another person’s action' },
        { left: 'started to + verb', right: 'shows the beginning of an action' },
      ],
      correctAnswer: { 'thought about + noun': 'describes a topic in someone’s mind', 'decided to + verb': 'shows a decision', 'did not want anyone to + verb': 'expresses a negative wish about another person’s action', 'started to + verb': 'shows the beginning of an action' },
      explanation: 'Chapter 6 uses thinking, decision and intention language.', feedback: { correct: 'Correct.', incorrect: 'Separate thinking, decision, wish and beginning.' },
    },
    {
      id: 'mecca-a2-language-6-sequence', type: 'sequencing', title: 'A Secret Visit',
      instructions: 'Put the language moves in a natural story order.', question: 'How can a short past narrative move from decision to arrival?',
      sequencingItems: [
        { id: '1', text: 'He decided to visit someone.' },
        { id: '2', text: 'He left secretly.' },
        { id: '3', text: 'He walked on a hidden path.' },
        { id: '4', text: 'When he arrived, he knocked on the door.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: 'Sequence language helps organise a short narrative.', feedback: { correct: 'Correct.', incorrect: 'Start with the decision and finish with arrival.' },
    },
    {
      id: 'mecca-a2-language-6-time', type: 'fill-blanks', title: 'Arrival',
      instructions: 'Complete the time clause.', question: 'Which connector introduces the arrival event?',
      fillBlanksText: '[blank] he arrived at Abu Bakr’s house, he knocked on the door.', correctAnswer: 'When',
      explanation: '“When + past clause” connects two past events.', feedback: { correct: 'Correct.', incorrect: 'Use the chapter time connector.' },
    },
    {
      id: 'mecca-a2-language-6-production', type: 'reflection', title: 'Tell a Short Visit Story',
      instructions: 'Write or say four short A2 sentences about a safe secret or surprise visit.', question: 'Can you use decision, sequence and time language?', correctAnswer: null,
      explanation: 'Use at least three Chapter 6 patterns.', feedback: { correct: 'Keep the story in order.', incorrect: '' },
      discussionPrompts: [
        { question: 'Begin with “I decided to ...”.', mode: 'Individual' },
        { question: 'Add one action done secretly.', mode: 'Individual' },
        { question: 'Use “When I arrived ...”.', mode: 'Individual' },
        { question: 'Finish with “I started to ...”.', mode: 'Pair' },
      ],
    },
  ],
};
