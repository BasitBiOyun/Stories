import { Exercise } from '../../../../types';

export const meccaA2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Bilal’s Journey',
    instructions: 'Put the events in the correct order.',
    question: 'Order the main events in Bilal ibn Rabah’s story.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'Bilal’s story begins in Mecca before Islam, continues with his acceptance of Islam, his suffering, his freedom, and finally his special place as the first caller to prayer.',
    feedback: {
      correct: 'Excellent! You understand the main events of Bilal’s story.',
      incorrect: 'Some events are not in the correct order. Review the story timeline again.'
    },
    sequencingItems: [
      { id: '1', text: 'Bilal is born into slavery in Mecca' },
      { id: '2', text: 'Bilal hears the message of Prophet Muhammad (pbuh)' },
      { id: '3', text: 'Bilal visits Abu Bakr and learns about Islam' },
      { id: '4', text: 'Bilal accepts Islam and repeats “Allah is One”' },
      { id: '5', text: 'Abu Bakr buys Bilal and frees him' },
      { id: '6', text: 'Bilal becomes the first person to call the Adhan' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'People in the Story',
    instructions: 'Drag the descriptions into the correct character group.',
    question: 'Match the descriptions with the correct people.',
    correctAnswer: {
      'BILAL': ['Patient Muslim', 'First caller to prayer', 'Former slave'],
      'ABU BAKR': ['Kind friend', 'Saved Bilal', 'Freed Bilal'],
      'UMAYYA': ['Cruel master', 'Idol worshipper', 'Enemy of Islam']
    },
    explanation: 'Bilal was patient and faithful. Abu Bakr helped and freed him. Umayya was cruel and opposed Islam.',
    feedback: {
      correct: 'Correct! You matched the people and descriptions very well.',
      incorrect: 'Some descriptions are in the wrong group. Think about each person’s actions in the story.'
    },
    dragDropGroups: [
      { group: 'BILAL', items: ['Patient Muslim', 'First caller to prayer', 'Former slave'] },
      { group: 'ABU BAKR', items: ['Kind friend', 'Saved Bilal', 'Freed Bilal'] },
      { group: 'UMAYYA', items: ['Cruel master', 'Idol worshipper', 'Enemy of Islam'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Think About the Lesson',
    instructions: 'Think about these questions and discuss them.',
    question: 'What is the most important lesson of Bilal ibn Rabah’s story?',
    correctAnswer: null,
    explanation: 'Students may mention tawhid, patience, courage, freedom, equality, kindness, or the value of good actions.',
    feedback: {
      correct: 'Great reflection! You connected the story to its deeper message.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why did Bilal repeat “Allah is One” even when life was very difficult?', mode: 'Individual' },
      { question: 'What can we learn from Abu Bakr freeing Bilal?', mode: 'Pair' },
      { question: 'Why is it wrong to judge people by skin color or nationality?', mode: 'Class' },
      { question: 'How did Islam change Bilal’s life?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'Bilal ibn Rabah A2 Challenge',
    instructions: 'Complete the 10-question challenge about Bilal and Mecca before Islam.',
    question: 'Are you ready for the final A2 challenge?',
    correctAnswer: null,
    explanation: 'This game reviews the main events, vocabulary, characters, and moral lessons of the A2 story of Bilal ibn Rabah.',
    feedback: {
      correct: 'Congratulations! You have mastered the A2 story of Bilal ibn Rabah!',
      incorrect: 'Keep trying! Review the chapters and try again.'
    },
    hints: [
      'Think about Bilal’s life in Mecca',
      'Remember Abu Bakr and Umayya',
      'Think about the Adhan and equality'
    ],
    quizQuestions: [
      {
        question: 'Where was Bilal born?',
        options: [
          { text: 'In Damascus', isCorrect: false },
          { text: 'In Mecca', isCorrect: true },
          { text: 'In Medina', isCorrect: false }
        ],
        hint: 'Bilal’s story begins in the city where Islam was born.'
      },
      {
        question: 'What was the period before Islam called?',
        options: [
          { text: 'The Age of Ignorance', isCorrect: true },
          { text: 'The Age of Freedom', isCorrect: false },
          { text: 'The Age of Medina', isCorrect: false }
        ],
        hint: 'Another name for it is Jahiliyyah.'
      },
      {
        question: 'Who was Bilal’s cruel master?',
        options: [
          { text: 'Abu Bakr', isCorrect: false },
          { text: 'Prophet Muhammad (pbuh)', isCorrect: false },
          { text: 'Umayya b. Halef', isCorrect: true }
        ],
        hint: 'He was one of the powerful leaders of Mecca and opposed Islam.'
      },
      {
        question: 'Why did Bilal visit Abu Bakr at night?',
        options: [
          { text: 'To ask questions about Islam', isCorrect: true },
          { text: 'To sell camels', isCorrect: false },
          { text: 'To leave Mecca with traders', isCorrect: false }
        ],
        hint: 'Bilal wanted to learn about the new religion.'
      },
      {
        question: 'What did Bilal keep saying under torture?',
        options: [
          { text: 'I want gold', isCorrect: false },
          { text: 'Allah is One', isCorrect: true },
          { text: 'I will worship idols', isCorrect: false }
        ],
        hint: 'This sentence shows tawhid.'
      },
      {
        question: 'Who bought Bilal and freed him?',
        options: [
          { text: 'Umayya', isCorrect: false },
          { text: 'Abu Bakr', isCorrect: true },
          { text: 'A poet from Mecca', isCorrect: false }
        ],
        hint: 'He was a close friend of Prophet Muhammad (pbuh).'
      },
      {
        question: 'What did Bilal become after Abu Bakr saved him?',
        options: [
          { text: 'A free Muslim', isCorrect: true },
          { text: 'A rich idol worshipper', isCorrect: false },
          { text: 'A master of slaves', isCorrect: false }
        ],
        hint: 'Abu Bakr did not keep Bilal as a slave.'
      },
      {
        question: 'What special duty did Bilal have after the Hijrah?',
        options: [
          { text: 'He built markets', isCorrect: false },
          { text: 'He called people to prayer', isCorrect: true },
          { text: 'He wrote trade agreements', isCorrect: false }
        ],
        hint: 'Bilal gave the first Adhan.'
      },
      {
        question: 'What did Bilal add to the morning Adhan?',
        options: [
          { text: 'Trade is better than sleep', isCorrect: false },
          { text: 'Gold is better than silver', isCorrect: false },
          { text: 'Prayer is better than sleep', isCorrect: true }
        ],
        hint: 'This sentence is connected to Fajr prayer.'
      },
      {
        question: 'What is one main lesson of Bilal’s story?',
        options: [
          { text: 'Only rich people are important', isCorrect: false },
          { text: 'Everyone is equal and good actions matter', isCorrect: true },
          { text: 'People should worship idols', isCorrect: false }
        ],
        hint: 'The final chapter explains equality and good actions.'
      }
    ]
  }
];
