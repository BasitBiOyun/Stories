import { Exercise } from '../../../../types';

export const yunusB1FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Yunus Emre in His Time',
    instructions: 'Put the events and ideas in the correct order.',
    question: 'Order the main historical and spiritual flow of the B1 story.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The B1 story first introduces Yunus Emre and Sûfîsm, then explains his education and the difficult historical background of Anatolia. After this, it presents Yunus as a wise dervish and focuses on tawhid, love, heart, intellect, death, morality, and his lasting moral legacy.',
    feedback: {
      correct: 'Excellent! You followed both the historical and spiritual development of the story.',
      incorrect: 'Some events are not in the correct order. Review the chapters and follow the movement from historical context to moral teaching.'
    },
    sequencingItems: [
      { id: '1', text: 'Yunus Emre is introduced as a Turkish poet and Sûfî from Anatolia' },
      { id: '2', text: 'His simple but literary language and education are explained' },
      { id: '3', text: 'Tekkés and the difficult situation in Anatolia are described' },
      { id: '4', text: 'The Babai revolts, Kösedağ, and Mongol destruction create chaos' },
      { id: '5', text: 'Yunus appears as a wise dervish and uses poetry as his tool' },
      { id: '6', text: 'His ideas about tawhid, love, heart, intellect, and death are presented' },
      { id: '7', text: 'The story ends by showing Yunus Emre as a lasting moral guide' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Historical Context and Spiritual Response',
    instructions: 'Drag each item into the correct group.',
    question: 'Which items belong to the historical context and which belong to Yunus Emre’s spiritual response?',
    correctAnswer: {
      'HISTORICAL CONTEXT': ['Babai revolts', 'Kösedağ defeat', 'Mongol invasion', 'Economic and social chaos'],
      'SPIRITUAL RESPONSE': ['Popular Sûfîsm', 'Poetry as a tool', 'Love for Allah', 'Moral guidance']
    },
    explanation: 'The text explains the difficult historical conditions of Anatolia and then shows how Yunus Emre responded to these hard times through Sûfîsm, poetry, love, and morality.',
    feedback: {
      correct: 'Correct! You separated historical events from Yunus Emre’s spiritual and moral response.',
      incorrect: 'Some items are in the wrong group. Think about whether the item is a historical event or a spiritual/moral idea.'
    },
    dragDropGroups: [
      { group: 'HISTORICAL CONTEXT', items: ['Babai revolts', 'Kösedağ defeat', 'Mongol invasion', 'Economic and social chaos'] },
      { group: 'SPIRITUAL RESPONSE', items: ['Popular Sûfîsm', 'Poetry as a tool', 'Love for Allah', 'Moral guidance'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Historical Thinking and Moral Reflection',
    instructions: 'Think about the questions and discuss them with a partner or class.',
    question: 'How did the difficult historical period of Anatolia make Yunus Emre’s message more meaningful?',
    correctAnswer: null,
    explanation: 'Students may explain that war, invasion, poverty, fear, and chaos made people search for meaning. Yunus Emre responded to this situation with poetry, Sûfîsm, love for Allah, unity, patience, and moral guidance.',
    feedback: {
      correct: 'Strong reflection! You connected historical conditions with Yunus Emre’s spiritual message.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why were tekkés important during difficult times in Anatolia?', mode: 'Pair' },
      { question: 'How did Yunus Emre use poetry as a tool?', mode: 'Individual' },
      { question: 'Why are love and tawhid connected in Yunus Emre’s thought?', mode: 'Pair' },
      { question: 'Why does the story describe the heart as the center of love and understanding?', mode: 'Class' },
      { question: 'How can remembering death help people live better lives?', mode: 'Class' },
      { question: 'Which moral value in the story is most needed in today’s world? Why?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Yunus Emre B1 Challenge',
    instructions: 'Complete the 12-question challenge about the B1 story.',
    question: 'Are you ready for the final B1 challenge?',
    correctAnswer: null,
    explanation: 'This game reviews the historical background, vocabulary, key concepts, moral values, and spiritual lessons of the B1 story of Yunus Emre.',
    feedback: {
      correct: 'Congratulations! You have mastered the B1 story of Yunus Emre!',
      incorrect: 'Keep trying! Review the chapters and focus on the historical background, key concepts, and values.'
    },
    hints: [
      'Think about Sûfîsm, tekkés, and Yunus Emre’s education',
      'Remember the Babai revolts, Kösedağ, and Mongol pressure',
      'Review tawhid, love, heart, intellect, death, and morality'
    ],
    quizQuestions: [
      {
        question: 'How does the text describe a Sûfî?',
        options: [
          { text: 'A person who aims to get closer to Allah by following Islamic mysticism', isCorrect: true },
          { text: 'A person who only studies military history', isCorrect: false },
          { text: 'A ruler who collects taxes from Anatolia', isCorrect: false }
        ],
        hint: 'Chapter 1 defines Sûfî in relation to Allah and Islamic mysticism.'
      },
      {
        question: 'Why were Yunus Emre’s works popular among people?',
        options: [
          { text: 'Because he wrote only for government officials', isCorrect: false },
          { text: 'Because his works combined literary quality with simple language', isCorrect: true },
          { text: 'Because he wrote them in a completely foreign language', isCorrect: false }
        ],
        hint: 'Chapter 2 explains his style and language.'
      },
      {
        question: 'What were tekkés besides places of Sûfî training?',
        options: [
          { text: 'Only military castles', isCorrect: false },
          { text: 'Only trade markets', isCorrect: false },
          { text: 'Community organizations that helped people and supported fine arts', isCorrect: true }
        ],
        hint: 'Chapter 3 explains the social and artistic role of tekkés.'
      },
      {
        question: 'What caused serious political, economic, and social problems in Anatolia?',
        options: [
          { text: 'The Babai revolts, Kösedağ defeat, and Mongol invasion', isCorrect: true },
          { text: 'Yunus Emre’s poetry', isCorrect: false },
          { text: 'The building of the Ka’ba', isCorrect: false }
        ],
        hint: 'The early historical chapters describe these problems.'
      },
      {
        question: 'What happened at Kösedağ in 1243?',
        options: [
          { text: 'The Seljuks defeated the Mongols easily', isCorrect: false },
          { text: 'The Mongols defeated the Seljuks', isCorrect: true },
          { text: 'Yunus Emre became a sultan', isCorrect: false }
        ],
        hint: 'Chapter 5 describes the clash at Kösedağ.'
      },
      {
        question: 'How did Yunus Emre respond to people’s search for meaning in hard times?',
        options: [
          { text: 'By becoming a trader on the Silk Road', isCorrect: false },
          { text: 'By joining the Mongol army', isCorrect: false },
          { text: 'Through his Sûfî identity and poetry', isCorrect: true }
        ],
        hint: 'Chapter 7 says poetry was his most influential tool.'
      },
      {
        question: 'What does tawhid mean in the story?',
        options: [
          { text: 'The Oneness of Allah', isCorrect: true },
          { text: 'A battle tactic', isCorrect: false },
          { text: 'A type of tax', isCorrect: false }
        ],
        hint: 'Chapter 8 directly explains tawhid.'
      },
      {
        question: 'According to Yunus Emre, what is the only true reality?',
        options: [
          { text: 'Worldly fame', isCorrect: false },
          { text: 'Allah', isCorrect: true },
          { text: 'Human wealth', isCorrect: false }
        ],
        hint: 'The chapter about tawhid and unity explains this idea.'
      },
      {
        question: 'What does love bring according to the text?',
        options: [
          { text: 'Anger and separation', isCorrect: false },
          { text: 'Only worldly status', isCorrect: false },
          { text: 'Unity and harmony', isCorrect: true }
        ],
        hint: 'Chapter 10 connects love with unity and harmony.'
      },
      {
        question: 'How is the heart described in Yunus Emre’s philosophy?',
        options: [
          { text: 'The center of love and the eye that sees the truth', isCorrect: true },
          { text: 'A place for pride and anger', isCorrect: false },
          { text: 'A symbol of trade and money', isCorrect: false }
        ],
        hint: 'Chapter 10 focuses on the heart.'
      },
      {
        question: 'Why is death important in Yunus Emre’s poems?',
        options: [
          { text: 'Because it teaches people to ignore morality', isCorrect: false },
          { text: 'Because it is a good advisor for living a meaningful and honest life', isCorrect: true },
          { text: 'Because it removes the need for patience', isCorrect: false }
        ],
        hint: 'Chapter 11 says death is the best advisor for humanity.'
      },
      {
        question: 'Which group contains only bad habits warned against in the story?',
        options: [
          { text: 'Honesty, patience, humility', isCorrect: false },
          { text: 'Generosity, respect, trust in Allah', isCorrect: false },
          { text: 'Arrogance, stinginess, greed, gossiping', isCorrect: true }
        ],
        hint: 'Chapter 12 lists bad habits to avoid.'
      }
    ]
  }
];
