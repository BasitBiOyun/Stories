import type { Exercise } from '../../../../types';

/**
 * Continued A2 Language Focus work for Yunus Emre (Look → Practise → Use).
 * Every quoted sentence comes from the English chapter text.
 */
export const yunusA2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
  5: [
    {
      id: 'yunus-a2-language-5-question-functions',
      type: 'sequencing',
      title: 'From “It Looked Like” to “In Fact”',
      instructions: 'Put the sentences from Chapter 5 in order.',
      question: 'What did it look like, and what was really happening?',
      sequencingItems: [
        { id: '1', text: 'It looked like Yunus was working with wood to fix crooked pieces.' },
        { id: '2', text: 'But in fact, he was training his own heart and ego.' },
        { id: '3', text: 'Every time he used the axe, he made a bad part of himself better.' },
        { id: '4', text: 'This service taught him how to have a good heart and do the right thing.' },
      ],
      correctAnswer: ['1', '2', '3', '4'],
      explanation: '“It looked like …” gives a first idea: what we see. “But in fact …” gives the true meaning. “Every time …” shows something that happens again and again. “This service taught him how to …” gives the result: what Yunus learned.',
      feedback: {
        correct: 'Correct. You followed the chapter from the first idea to the true meaning and the result.',
        incorrect: 'Read the second paragraph of Chapter 5. Start with “It looked like”. Which sentence says what is true “in fact”?',
      },
    },
    {
      id: 'yunus-a2-language-5-appearance-reality',
      type: 'sentence-building',
      title: 'Build Taptuk’s Question',
      instructions: 'Put the words in order to make Taptuk’s question.',
      question: 'What did Taptuk ask Yunus?',
      sentenceChunks: ['Why', 'do you', 'always', 'bring', 'straight pieces?'],
      correctAnswer: null,
      explanation: 'To ask about a habit, use: Why + do + you + (always) + verb … ? “Always” comes before the main verb: “Why do you always bring straight pieces?” The other question, “Is there no crooked wood in the mountains?”, starts with “Is there” to ask if something exists.',
      feedback: {
        correct: 'Well done. You built the question in the right order.',
        incorrect: 'Look at the last line of Chapter 5. Start with “Why”, then “do you”. “Always” goes before “bring”.',
      },
    },
    {
      id: 'yunus-a2-language-5-explain-deeper-meaning',
      type: 'reflection',
      title: 'Say It: What the Work Really Means',
      instructions: 'Say four short sentences about what Yunus’s work really meant.',
      question: 'What was Yunus really learning?',
      correctAnswer: null,
      explanation: 'A strong A2 response uses the chapter’s own discourse pattern: first impression, deeper reality, repeated action and learning.',
      feedback: {
        correct: 'Use the four sentence starters to explain the chapter’s deeper meaning clearly.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Say how it looked: “At first, it looked like Yunus was …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what was true: “But in fact, he was …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what happened each time: “Every time he …, he …”', mode: 'Pair' },
        { question: 'Sentence 4 — Say what he learned: “This service taught him how to …”', mode: 'Pair' },
      ],
    },
  ],
  6: [
    {
      id: 'yunus-a2-language-6-change-learning',
      type: 'matching',
      title: 'If You Look Closely',
      instructions: 'Match the beginnings and endings from the end of Chapter 6.',
      question: 'What are the mountains like, and what can you find?',
      matchingHeadings: { left: 'Beginning', right: 'Ending' },
      matchingPairs: [
        { left: 'The mountains are', right: 'quiet and far from people.' },
        { left: 'There are', right: 'trees, animals, and rivers.' },
        { left: 'If you look closely,', right: 'you find a deeper meaning in everything in nature.' },
        { left: 'Everything', right: 'tells a story.' },
      ],
      correctAnswer: {
        'The mountains are': 'quiet and far from people.',
        'There are': 'trees, animals, and rivers.',
        'If you look closely,': 'you find a deeper meaning in everything in nature.',
        'Everything': 'tells a story.',
      },
      explanation: '“Are” + adjectives describes a place (quiet, far from people). “There are” + plural nouns says what is in a place. “If you look closely, you find …” has two parts: first what you do, then what happens. “Everything” is singular, so the verb takes -s: “tells”.',
      feedback: {
        correct: 'Good. You rebuilt the sentences about the mountains.',
        incorrect: 'Read the last paragraph of Chapter 6. Which ending is a list of things? Which ending starts with “you find”?',
      },
    },
    {
      id: 'yunus-a2-language-6-if-observation',
      type: 'word-bank',
      title: 'Helped Him Think, Made It Purer',
      instructions: 'Fill each gap from the word bank. Two words are not needed.',
      question: 'What comes after “helped the dervish”, “made his heart” and “learned”?',
      fillBlanksText: 'Nature and living alone helped the dervish [blank] deeply about himself. During this time, Yunus made his heart [blank]. … He first learned [blank] alone with Allah in the mountains.',
      wordBank: ['think', 'purer', 'to be', 'thinking', 'being'],
      correctAnswer: ['think', 'purer', 'to be'],
      explanation: 'After “help + person”, use the base verb: “helped the dervish think”. “Make + thing + adjective” shows a change: “made his heart purer” (more pure than before). After “learn”, use “to + verb”: “learned to be alone”.',
      feedback: {
        correct: 'Correct. You used the right form after helped, made and learned.',
        incorrect: 'Read the second and third paragraphs of Chapter 6 again. We say “helped him think”, not “helped him thinking”, and “learned to be”, not “learned being”.',
      },
    },
    {
      id: 'yunus-a2-language-6-learning-from-nature',
      type: 'reflection',
      title: 'Say It: Learning from a Place',
      instructions: 'Say four short sentences about how nature helped Yunus.',
      question: 'How did the mountains help Yunus learn?',
      correctAnswer: null,
      explanation: 'A strong A2 response combines description, help/change language and the chapter’s simple if-result pattern.',
      feedback: {
        correct: 'Use the chapter’s own language to connect place, learning and discovery.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the place: “The mountains were … and …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say how nature helped: “Nature helped Yunus …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say what he learned: “He learned to …”', mode: 'Pair' },
        { question: 'Sentence 4 — Say what you can find: “If you look closely, you …”', mode: 'Pair' },
      ],
    },
  ],
};
