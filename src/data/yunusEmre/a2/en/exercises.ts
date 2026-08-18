import { Exercise } from '../../../../types';

export const yunusA2FinalReviewExercises: Exercise[] = [
  {
    id: 'yunus-a2-review-sequence',
    type: 'sequencing',
    title: 'Yunus Emre’s Learning Journey',
    instructions: 'Put the main developments in the correct order.',
    question: 'How does the story move from biography to daily-life lessons?',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The book introduces Yunus as a poet and dervish, follows his disciplined training and service, develops the straight-wood lesson, then uses nature and the daisy story before ending with advice for daily life.',
    feedback: { correct: 'Correct. You connected the main stages of Yunus’s learning journey.', incorrect: 'Begin with the poet/dervish introduction, then follow training, wood service, inner meaning, nature, and the final lesson.' },
    sequencingItems: [
      { id: '1', text: 'Yunus is introduced as a poet who used simple Turkish and became Taptuk Emre’s pupil' },
      { id: '2', text: 'The story explains the disciplined values and habits of dervish life' },
      { id: '3', text: 'Taptuk gives Yunus the ordinary service of collecting wood' },
      { id: '4', text: 'The wood work is explained as training the heart and ego' },
      { id: '5', text: 'Yunus learns from nature and returns with a single daisy' },
      { id: '6', text: 'The story ends with advice to remember Allah and do every job well' }
    ]
  },
  {
    id: 'yunus-a2-review-match',
    type: 'matching',
    title: 'Outer Action and Inner Meaning',
    instructions: 'Match each story detail with the simple meaning attached to it in the chapters.',
    question: 'What does each action or image teach?',
    matchingPairs: [
      { left: 'Simple Turkish', right: 'helped people understand the poems' },
      { left: 'Sharing with the needy', right: 'showed generosity' },
      { left: 'Straight wood', right: 'connected with honest and corrected character' },
      { left: 'Looking at nature', right: 'helped Yunus find deeper lessons' }
    ],
    correctAnswer: {
      'Simple Turkish': 'helped people understand the poems',
      'Sharing with the needy': 'showed generosity',
      'Straight wood': 'connected with honest and corrected character',
      'Looking at nature': 'helped Yunus find deeper lessons'
    },
    explanation: 'These matches connect visible details with the straightforward meanings stated in the story.',
    feedback: { correct: 'Correct. You connected the story details with their chapter meanings.', incorrect: 'Check Chapters 1, 2, 5–6 and compare the visible action with the explanation given in the text.' }
  },
  {
    id: 'yunus-a2-review-reflection',
    type: 'reflection',
    title: 'Work, Character, and Meaning',
    instructions: 'Think from the story and give a short A2 response.',
    question: 'How can an ordinary job become part of learning or self-improvement in Yunus Emre’s story?',
    correctAnswer: null,
    explanation: 'Woodcutting looked ordinary, but the story says it trained Yunus’s heart and ego and taught him to do the right thing carefully.',
    feedback: { correct: 'Support your answer with the wood story and one final daily-life lesson.', incorrect: '' },
    discussionPrompts: [
      { question: 'What was Yunus’s ordinary duty?', mode: 'Individual' },
      { question: 'What inner meaning did the story give to that work?', mode: 'Pair' },
      { question: 'How does Chapter 8 turn that story into advice for daily life?', mode: 'Class' }
    ]
  },
  {
    id: 'yunus-a2-review-quiz',
    type: 'quiz-game',
    title: 'Yunus Emre A2 Retrieval Review',
    instructions: 'Answer eight questions from across the story. Use the hint only when you need it.',
    question: 'Can you reconnect the main ideas without rereading everything?',
    correctAnswer: null,
    explanation: 'The questions review language, values, discipline, service, simple symbolic meaning, nature, and daily-life lessons.',
    feedback: { correct: 'Good retrieval. Keep connecting each answer to the chapter evidence.', incorrect: 'Use the hint to return to the relevant chapter idea, then try again.' },
    quizQuestions: [
      { question: 'Why could people understand Yunus Emre’s poems easily?', options: [{ text: 'He used simple Turkish', isCorrect: true }, { text: 'He wrote only for scholars', isCorrect: false }, { text: 'He avoided Turkish', isCorrect: false }], hint: 'Look at the language-result link in Chapter 1.' },
      { question: 'What did dervishes do with wealth that was “in their hands”?', options: [{ text: 'They shared what they had with the needy', isCorrect: true }, { text: 'They kept everything for themselves', isCorrect: false }, { text: 'They used it only to travel', isCorrect: false }], hint: 'Use the wealth and charity paragraph in Chapter 2.' },
      { question: 'What did “ate less, spoke less, slept less” show?', options: [{ text: 'A moderate and disciplined way of life', isCorrect: true }, { text: 'A plan to become famous poets', isCorrect: false }, { text: 'A rule against useful activities', isCorrect: false }], hint: 'Read the final paragraph before Yunus’s training is named.' },
      { question: 'Why was collecting wood more than an ordinary chore in the story?', options: [{ text: 'It was part of training the ego and leaving bad behaviour', isCorrect: true }, { text: 'It was a way to become rich', isCorrect: false }, { text: 'It was preparation for a market job', isCorrect: false }], hint: 'Chapter 4 states the primary goal of the service.' },
      { question: 'What simple inner meaning does Chapter 5 give the wood work?', options: [{ text: 'Training and fixing Yunus’s heart and ego', isCorrect: true }, { text: 'Building a new city', isCorrect: false }, { text: 'Winning a flower contest', isCorrect: false }], hint: 'Compare the outer work with what the text says happens “in fact”.' },
      { question: 'What did Yunus learn to do in nature?', options: [{ text: 'Find lessons and deeper meaning in what he saw', isCorrect: true }, { text: 'Ignore everything except wood', isCorrect: false }, { text: 'Avoid quiet places', isCorrect: false }], hint: 'Use Chapter 6’s paragraph about trees, animals, rivers, and deeper meaning.' },
      { question: 'Why did Yunus bring only one daisy?', options: [{ text: 'He said the other flowers were remembering Allah, so he could not cut them', isCorrect: true }, { text: 'There were no other flowers', isCorrect: false }, { text: 'Taptuk asked him to bring exactly one flower', isCorrect: false }], hint: 'The number matters because of Yunus’s reason, not because the field was empty.' },
      { question: 'What final lesson connects the wood and flower stories with daily life?', options: [{ text: 'Remember Allah and do every job well and correctly', isCorrect: true }, { text: 'Only unusual jobs are important', isCorrect: false }, { text: 'Daily work has no deeper value', isCorrect: false }], hint: 'Use the final paragraph of Chapter 8.' }
    ]
  }
];
