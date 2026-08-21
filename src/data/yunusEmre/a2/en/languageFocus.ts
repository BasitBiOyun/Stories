import type { Exercise } from '../../../../types';

/**
 * Manually authored, chapter-specific language work.
 * These are not generated from a fixed template: each chapter is read first,
 * then only language that is genuinely useful and visible in that text is practised.
 */
export const yunusA2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'yunus-a2-language-1-past-life-forms',
      type: 'matching',
      title: 'Past Life Forms',
      instructions: 'Match each verb or phrase with the past form used in Chapter 1.',
      question: 'How does Chapter 1 talk about finished events in Yunus Emre’s life?',
      matchingPairs: [
        { left: 'be', right: 'was' },
        { left: 'be born', right: 'was born' },
        { left: 'become', right: 'became' },
        { left: 'travel', right: 'traveled' },
      ],
      correctAnswer: {
        be: 'was',
        'be born': 'was born',
        become: 'became',
        travel: 'traveled',
      },
      explanation: 'Chapter 1 is a short biography. It uses past forms such as “was born”, “became” and “traveled” to tell finished events in Yunus Emre’s life.',
      feedback: {
        correct: 'Good. You found the main past-life forms used in the chapter.',
        incorrect: 'Return to Chapter 1 and look for “was born”, “became” and “traveled”.',
      },
    },
    {
      id: 'yunus-a2-language-1-meaning-links',
      type: 'matching',
      title: 'Meaning Links',
      instructions: 'Match each story chunk with the job it does in the sentence.',
      question: 'What do because, after and when help the writer express?',
      matchingPairs: [
        { left: 'because he wrote and said them in simple Turkish', right: 'gives a reason' },
        { left: 'After he completed his madrasa education', right: 'shows what happened next' },
        { left: 'when Mevlana died', right: 'connects an event to a time' },
      ],
      correctAnswer: {
        'because he wrote and said them in simple Turkish': 'gives a reason',
        'After he completed his madrasa education': 'shows what happened next',
        'when Mevlana died': 'connects an event to a time',
      },
      explanation: 'The chapter uses “because” for a reason, “after” to organise events, and “when” to connect information to a time.',
      feedback: {
        correct: 'Correct. You connected the language chunks with their functions.',
        incorrect: 'Read the full sentences around because, after and when. Ask: reason, next event, or time?',
      },
    },
    {
      id: 'yunus-a2-language-1-mini-biography',
      type: 'reflection',
      title: 'Say It: Mini Biography',
      instructions: 'Use Chapter 1 to give a short three-sentence biography. Speak in complete sentences.',
      question: 'Can you retell three important facts about Yunus Emre using the chapter’s language?',
      correctAnswer: null,
      explanation: 'A clear A2 response can combine a birth fact, an education or life-change fact, and one more past event from the chapter.',
      feedback: {
        correct: 'Use three accurate past-life sentences from Chapter 1.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Start with birth: “Yunus Emre was born ...”', mode: 'Individual' },
        { question: 'Sentence 2 — Continue with change: “After he completed ..., he became ...”', mode: 'Individual' },
        { question: 'Sentence 3 — Add one more fact: “He traveled ...”, “He lived ...”, or “He was ... when ...”', mode: 'Pair' },
      ],
    },
  ],
};
