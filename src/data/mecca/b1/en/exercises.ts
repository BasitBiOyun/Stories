import { Exercise } from '../../../../types';

export const meccaB1FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'From Mecca to the Message of Islam',
    instructions: 'Put the events and developments in the correct order.',
    question: 'Order the main ideas from the B1 story of Mecca and the Age of Ignorance.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The story begins with Mecca and Jahiliyyah, then explains the growth of Mecca, trade, social problems, religious life, the coming of Islam, and finally the opposition of Quraysh leaders.',
    feedback: {
      correct: 'Excellent! You understand the historical flow of Mecca before Islam.',
      incorrect: 'Some items are not in the correct order. Review the chapter titles and timeline again.'
    },
    sequencingItems: [
      { id: '1', text: 'Mecca is introduced as the city where Islam was born' },
      { id: '2', text: 'The Age of Ignorance is described as a time without justice and peace' },
      { id: '3', text: 'Abraham (AS), Ishmael (AS), Zamzam, and the Ka’ba are connected to the beginning of Mecca' },
      { id: '4', text: 'Mecca grows into a wealthy trade city through routes, caravans, fairs, and sacred months' },
      { id: '5', text: 'Social problems appear clearly: usury, poverty, tribal pride, slavery, and unfair treatment' },
      { id: '6', text: 'Religious life is dominated by idols, while a few Hanifs follow the religion of Abraham (AS)' },
      { id: '7', text: 'Islam begins in Mecca and Quraysh leaders oppose it because it threatens their power' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Meccan Society: Groups and Roles',
    instructions: 'Drag each description into the correct group.',
    question: 'Match the groups with their roles in Meccan society.',
    correctAnswer: {
      'QURAYSH LEADERS': ['Controlled trade and wealth', 'Feared losing power', 'Opposed Islam strongly'],
      'WEAK AND POOR PEOPLE': ['Suffered under unfair systems', 'Often had little protection', 'Were treated badly by powerful people'],
      'HANIFS AND EARLY BELIEVERS': ['Believed in one Allah', 'Rejected idolatry', 'Sought truth and justice']
    },
    explanation: 'The Quraysh leaders protected their economic and social position. Weak people suffered in the unfair system. Hanifs and early believers were connected to tawhid and justice.',
    feedback: {
      correct: 'Correct! You can identify the main social groups and their roles.',
      incorrect: 'Some descriptions are in the wrong group. Think about power, poverty, belief, and opposition.'
    },
    dragDropGroups: [
      { group: 'QURAYSH LEADERS', items: ['Controlled trade and wealth', 'Feared losing power', 'Opposed Islam strongly'] },
      { group: 'WEAK AND POOR PEOPLE', items: ['Suffered under unfair systems', 'Often had little protection', 'Were treated badly by powerful people'] },
      { group: 'HANIFS AND EARLY BELIEVERS', items: ['Believed in one Allah', 'Rejected idolatry', 'Sought truth and justice'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Deeper Thinking: Why Did Mecca Resist Islam?',
    instructions: 'Think about the questions and discuss them with a partner or class.',
    question: 'Why did the powerful leaders of Mecca oppose Islam?',
    correctAnswer: null,
    explanation: 'Students may mention that Islam threatened their idols, trade, usury, social power, tribal prestige, and unfair class system. They may also explain that Islam called people to one Allah, justice, mercy, and dignity.',
    feedback: {
      correct: 'Strong reflection! You connected belief, economy, and power.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why was Mecca called the Republic of Merchants?', mode: 'Individual' },
      { question: 'How did trade make Quraysh leaders powerful?', mode: 'Pair' },
      { question: 'Why did Islam’s message of tawhid challenge idol worship?', mode: 'Pair' },
      { question: 'How did Islam protect the poor, the weak, and the oppressed?', mode: 'Class' },
      { question: 'What can modern societies learn from the problems of Jahiliyyah?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'Mecca Before Islam B1 Challenge',
    instructions: 'Complete the 12-question challenge about Mecca and the Age of Ignorance.',
    question: 'Are you ready for the final B1 challenge?',
    correctAnswer: null,
    explanation: 'This game reviews the historical setting, vocabulary, social structure, religious life, and main lessons of the B1 Mecca story.',
    feedback: {
      correct: 'Congratulations! You have mastered the B1 story of Mecca before Islam!',
      incorrect: 'Keep trying! Review the chapters and focus on causes, results, and key values.'
    },
    hints: [
      'Think about Mecca, Jahiliyyah, trade, and the Ka’ba',
      'Remember the social problems: usury, poverty, slavery, and tribal pride',
      'Think about why Quraysh leaders opposed Islam'
    ],
    quizQuestions: [
      {
        question: 'Why was the pre-Islamic period called the Age of Ignorance?',
        options: [
          { text: 'Because people had no animals or markets', isCorrect: false },
          { text: 'Because people did not truly know Allah and lacked justice and peace', isCorrect: true },
          { text: 'Because Mecca was not on any trade route', isCorrect: false }
        ],
        hint: 'Jahiliyyah is connected to religious and moral disorder, not simply lack of information.'
      },
      {
        question: 'What made Mecca a holy city in Islam?',
        options: [
          { text: 'The Holy Ka’ba is located there', isCorrect: true },
          { text: 'It was the capital of the Byzantine Empire', isCorrect: false },
          { text: 'It had many rivers and farms', isCorrect: false }
        ],
        hint: 'Muslims face this sacred place during salah.'
      },
      {
        question: 'What happened after Zamzam water was discovered?',
        options: [
          { text: 'The Quraysh left Mecca forever', isCorrect: false },
          { text: 'The sacred months ended', isCorrect: false },
          { text: 'People began to settle in Mecca', isCorrect: true }
        ],
        hint: 'Water made settlement possible in a dry valley.'
      },
      {
        question: 'Why did trade become very important in Mecca?',
        options: [
          { text: 'Because the land around Mecca was not suitable for farming', isCorrect: true },
          { text: 'Because all people in Mecca were farmers', isCorrect: false },
          { text: 'Because Mecca had a large navy', isCorrect: false }
        ],
        hint: 'The text describes Mecca as a dry place where crops did not grow easily.'
      },
      {
        question: 'Which months helped create a safer atmosphere for worship and trade?',
        options: [
          { text: 'The winter months only', isCorrect: false },
          { text: 'The four sacred months', isCorrect: true },
          { text: 'The Roman festival months', isCorrect: false }
        ],
        hint: 'During these months, fighting was avoided.'
      },
      {
        question: 'What was usury in Mecca?',
        options: [
          { text: 'A type of poetry contest', isCorrect: false },
          { text: 'A pilgrimage ritual', isCorrect: false },
          { text: 'Unfair extra money charged on borrowed money', isCorrect: true }
        ],
        hint: 'It made the rich richer and the poor poorer.'
      },
      {
        question: 'Why were sons highly valued in tribal life?',
        options: [
          { text: 'Because they increased a tribe’s fighting strength and protection', isCorrect: true },
          { text: 'Because daughters could not live in Mecca', isCorrect: false },
          { text: 'Because trade was forbidden for men', isCorrect: false }
        ],
        hint: 'In desert tribal life, physical strength and protection were very important.'
      },
      {
        question: 'What role did poets have in the Age of Ignorance?',
        options: [
          { text: 'They only built caravans', isCorrect: false },
          { text: 'They acted like the media of the time', isCorrect: true },
          { text: 'They controlled the Ka’ba', isCorrect: false }
        ],
        hint: 'Poets praised tribes, criticized enemies, and kept tribal memory alive.'
      },
      {
        question: 'What did many people in Mecca worship before Islam?',
        options: [
          { text: 'Only the sun', isCorrect: false },
          { text: 'Only angels', isCorrect: false },
          { text: 'Idols kept in and around the Ka’ba', isCorrect: true }
        ],
        hint: 'The text mentions 360 idols including Lat, Manat, and Uzza.'
      },
      {
        question: 'Who were the Hanifs?',
        options: [
          { text: 'People who followed the old religion of Abraham (AS)', isCorrect: true },
          { text: 'Merchants from China', isCorrect: false },
          { text: 'Magicians who served the Quraysh', isCorrect: false }
        ],
        hint: 'They were connected to Abrahamic monotheism.'
      },
      {
        question: 'Why did Quraysh leaders oppose Islam?',
        options: [
          { text: 'Because Islam supported their idols and usury', isCorrect: false },
          { text: 'Because Islam threatened their power, wealth, and unfair social order', isCorrect: true },
          { text: 'Because Islam stopped all honest trade', isCorrect: false }
        ],
        hint: 'Think about economics, religion, and leadership.'
      },
      {
        question: 'What happened during the boycott between 617 and 620?',
        options: [
          { text: 'Muslims and their supporters faced social and economic pressure', isCorrect: false },
          { text: 'All Quraysh leaders immediately became Muslim', isCorrect: false },
          { text: 'Muslims and their supporters faced hunger and isolation', isCorrect: true }
        ],
        hint: 'The boycott caused serious suffering and hunger.'
      }
    ]
  }
];
