import { Exercise } from '../../../../types';

export const abrahamA2ExercisesEn: Exercise[] = [
  // Shared exercises could go here
];

export const abrahamA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'The Life of Abraham',
    instructions: 'Put the events in the correct order.',
    question: 'Order the story events.',
    correctAnswer: ['1', '2', '3', '4', '5'],
    explanation: 'The story follows the search for truth, the miracle of the fire, the journey to Mecca, the gift of Zamzam, and the building of the Ka’ba.',
    feedback: {
      correct: 'Perfect! You have a great memory of Abraham’s journey.',
      incorrect: 'Some events are in the wrong place. Remember his journey from Babylon to Mecca.'
    },
    sequencingItems: [
      { id: '1', text: 'Abraham looks at the stars, moon, and sun' },
      { id: '2', text: 'Abraham stays safe in the big fire' },
      { id: '3', text: 'Hagar and Ishmael arrive in the valley' },
      { id: '4', text: 'Zamzam water comes out of the ground' },
      { id: '5', text: 'Abraham and Ishmael build the Ka’ba' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Qualities of Abraham',
    instructions: 'Drag the items into the correct category.',
    question: 'Categorize these items.',
    correctAnswer: {
      'QUALITIES OF ABRAHAM': ['Honesty', 'Courage', 'Trust in Allah'],
      'BELIEFS IN BABYLON': ['Idols', 'Stars', 'Stone objects']
    },
    explanation: 'Abraham was honest and brave, while the people of Babylon wrongly worshipped objects like idols and stars.',
    feedback: {
      correct: 'Correct! You understood the contrast well.',
      incorrect: 'Check your categories again.'
    },
    dragDropGroups: [
      { group: 'QUALITIES OF ABRAHAM', items: ['Honesty', 'Courage', 'Trust in Allah'] },
      { group: 'BELIEFS IN BABYLON', items: ['Idols', 'Stars', 'Stone objects'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Deep Thinking',
    instructions: 'Think about these questions and discuss them.',
    question: 'Why is it important to ask questions and think for yourself?',
    correctAnswer: null,
    explanation: 'Asking questions helped Abraham find the truth about the one true Creator.',
    feedback: {
      correct: 'Excellent reflection!',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why is it important to ask questions like Abraham did?', mode: 'Individual' },
      { question: 'What does "trust in Allah" mean in Hagar’s story?', mode: 'Pair' },
      { question: 'How does the Ka’ba bring people together today?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Abraham Challenge',
    instructions: 'Complete the 7-step journey through the story.',
    question: 'Are you ready for the final challenge?',
    correctAnswer: null,
    explanation: 'This game covers the major milestones of Prophet Abraham’s life.',
    feedback: {
      correct: 'Congratulations! You are a master of the Story of Abraham (pbuh)!',
      incorrect: 'Don’t give up! Review the story and try again.'
    },
    hints: ['Think about his search in the stars', 'Remember the miracle in the fire', 'Recall the valley and the water'],
    quizQuestions: [
      {
        question: 'Where was Abraham (pbuh) born?',
        options: [
          { text: 'Mecca', isCorrect: false },
          { text: 'Babylon', isCorrect: true },
          { text: 'Syria', isCorrect: false }
        ],
        hint: 'It was an ancient kingdom in Mesopotamia.'
      },
      {
        question: 'What did Abraham’s father do?',
        options: [
          { text: 'He was an idol maker', isCorrect: true },
          { text: 'He was a shepherd', isCorrect: false },
          { text: 'He was a king', isCorrect: false }
        ],
        hint: 'He made objects out of stone that people worshipped.'
      },
      {
        question: 'What happened when Abraham was thrown into the fire?',
        options: [
          { text: 'The fire became cool and safe', isCorrect: true },
          { text: 'Rain fell and stopped it', isCorrect: false },
          { text: 'He escaped before falling', isCorrect: false }
        ],
        hint: 'It was a great miracle from Allah.'
      },
      {
        question: 'Who was the king who argued with Abraham?',
        options: [
          { text: 'Pharaoh', isCorrect: false },
          { text: 'Abu Jahl', isCorrect: false },
          { text: 'Nimrod', isCorrect: true }
        ],
        hint: 'He claimed he could give life and death.'
      },
      {
        question: 'What is the name of the special water in Mecca?',
        options: [
          { text: 'River Nile', isCorrect: false },
          { text: 'Zamzam', isCorrect: true },
          { text: 'Kawthar', isCorrect: false }
        ],
        hint: 'It appeared under baby Ishmael’s feet.'
      },
      {
        question: 'Between which two hills did Hagar run?',
        options: [
          { text: 'Uhud and Nur', isCorrect: false },
          { text: 'Safa and Marwah', isCorrect: true },
          { text: 'Arafat and Mina', isCorrect: false }
        ],
        hint: 'Pilgrims still walk between them today.'
      },
      {
        question: 'What did Abraham and Ishmael build together?',
        options: [
          { text: 'A palace', isCorrect: false },
          { text: 'A big masjid', isCorrect: false },
          { text: 'The Ka’ba', isCorrect: true }
        ],
        hint: 'It is the House of Allah in Mecca.'
      }
    ]
  }
];
