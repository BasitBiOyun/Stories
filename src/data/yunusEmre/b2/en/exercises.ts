import { Exercise } from '../../../../types';

export const yunusB2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'Yunus Emre: Life, Context and Legacy',
    instructions: 'Put the events and ideas in the correct order.',
    question: 'Order the main stages in the B2 text about Yunus Emre.',
    correctAnswer: ['1', '2', '3', '4', '5', '6'],
    explanation: 'The text begins with Yunus Emre as a Sûfî poet, then explains his education and historical context, continues with his spiritual ideas, and ends with morality and legacy.',
    feedback: {
      correct: 'Excellent! You can follow the full structure of the B2 text.',
      incorrect: 'Some stages are not in the correct order. Review the chapter sequence from biography to legacy.'
    },
    sequencingItems: [
      { id: '1', text: 'Yunus Emre is introduced as an Anatolian poet and Muslim Sûfî.' },
      { id: '2', text: 'His style, madrasa education, tekke training, important people of that era, and spiritual tutor are explained.' },
      { id: '3', text: 'The difficult political and social atmosphere of Anatolia is described.' },
      { id: '4', text: 'Yunus appears as a wise dervish responding to people through poetry.' },
      { id: '5', text: 'His ideas about tawhid, unity, love, heart, intellect and death are discussed.' },
      { id: '6', text: 'His moral teachings, criticism of bad habits and lasting legacy are presented.' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Key Concepts in Yunus Emre B2',
    instructions: 'Drag the concepts into the correct groups.',
    question: 'Match each concept with its correct category.',
    correctAnswer: {
      'SPIRITUAL CONCEPTS': ['tawhid', 'vahdet-i vücut', 'divine love'],
      'SOCIAL-HISTORICAL CONTEXT': ['Babai uprisings', 'Kösedağ', 'Mongol invasion'],
      'MORAL VALUES': ['patience', 'humility', 'generosity']
    },
    explanation: 'The B2 text combines spiritual concepts, historical background, and moral values to explain Yunus Emre more deeply.',
    feedback: {
      correct: 'Correct! You matched the main concepts with their categories.',
      incorrect: 'Check the categories again. Some words belong to history, some to spirituality, and some to morality.'
    },
    dragDropGroups: [
      { group: 'SPIRITUAL CONCEPTS', items: ['tawhid', 'vahdet-i vücut', 'divine love'] },
      { group: 'SOCIAL-HISTORICAL CONTEXT', items: ['Babai uprisings', 'Kösedağ', 'Mongol invasion'] },
      { group: 'MORAL VALUES', items: ['patience', 'humility', 'generosity'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Analytical Reflection',
    instructions: 'Think deeply and discuss or write your answer.',
    question: 'Why is Yunus Emre presented not only as a poet but also as a moral and spiritual guide?',
    correctAnswer: null,
    explanation: 'Students may explain that Yunus Emre used simple but meaningful language, taught tawhid and love for Allah, warned against bad habits, and guided people during difficult historical times.',
    feedback: {
      correct: 'Strong reflection! You connected literature, history, spirituality and morality.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'How did difficult historical conditions make Yunus Emre’s message more important?', mode: 'Individual' },
      { question: 'Why does Yunus connect love for the Creator with love for the created?', mode: 'Pair' },
      { question: 'What is the relationship between heart and intellect in Yunus Emre’s thought?', mode: 'Class' },
      { question: 'How can poetry become a moral guide for society?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'Yunus Emre B2 Final Challenge',
    instructions: 'Complete the 12-question challenge about the B2 text.',
    question: 'Are you ready for the Yunus Emre B2 final challenge?',
    correctAnswer: null,
    explanation: 'This quiz reviews Yunus Emre’s life, historical context, Sûfî identity, key concepts, moral values and legacy.',
    feedback: {
      correct: 'Excellent! You have mastered the B2 Yunus Emre unit.',
      incorrect: 'Review the chapters and try again. Focus on concepts and cause-effect connections.'
    },
    hints: [
      'Think about Sûfîsm, tekke and madrasa education',
      'Remember the historical context: Babai uprisings, Kösedağ and Mongol pressure',
      'Focus on tawhid, love, heart, intellect, death and morality'
    ],
    quizQuestions: [
      {
        question: 'How does the text define a Sûfî?',
        options: [
          { text: 'A person who seeks closeness to Allah through Islamic mysticism', isCorrect: true },
          { text: 'A person who only studies political history', isCorrect: false },
          { text: 'A person who rejects poetry and art', isCorrect: false }
        ],
        hint: 'The definition is connected to Tasavvuf and closeness to Allah.'
      },
      {
        question: 'Why were Yunus Emre’s works popular among the public?',
        options: [
          { text: 'Because they were written only for scholars', isCorrect: false },
          { text: 'Because his style had literary value and was easy to understand', isCorrect: true },
          { text: 'Because they avoided moral questions', isCorrect: false }
        ],
        hint: 'Think about his language and style.'
      },
      {
        question: 'What was a tekke in the context of the text?',
        options: [
          { text: 'A military castle built by the Mongols', isCorrect: false },
          { text: 'A market place for merchants', isCorrect: false },
          { text: 'A place where Sûfî education was taught under a sheikh', isCorrect: true }
        ],
        hint: 'It was connected to spiritual training.'
      },
      {
        question: 'Which event helped the Mongols invade Anatolia more easily?',
        options: [
          { text: 'The defeat at Kösedağ', isCorrect: true },
          { text: 'The discovery of Zamzam', isCorrect: false },
          { text: 'The building of the Ka’ba', isCorrect: false }
        ],
        hint: 'This event happened in 1243.'
      },
      {
        question: 'Why did many shaykhs and dervishes come to Anatolia?',
        options: [
          { text: 'Because Anatolia had no poetry tradition', isCorrect: false },
          { text: 'Because of Mongol pressure in regions such as Khorasan and Iran', isCorrect: true },
          { text: 'Because they wanted to join the Byzantine army', isCorrect: false }
        ],
        hint: 'The text connects this migration with Mongol pressure.'
      },
      {
        question: 'What does tawhid mean in Yunus Emre’s works?',
        options: [
          { text: 'The importance of tribal pride', isCorrect: false },
          { text: 'The rejection of moral responsibility', isCorrect: false },
          { text: 'The absolute Oneness of Allah', isCorrect: true }
        ],
        hint: 'It is one of the most important spiritual principles in the text.'
      },
      {
        question: 'According to the text, why is love central in Yunus Emre’s philosophy?',
        options: [
          { text: 'Because love connects the human relationship with the Creator and creation', isCorrect: true },
          { text: 'Because love replaces worship completely', isCorrect: false },
          { text: 'Because love is only a literary decoration', isCorrect: false }
        ],
        hint: 'Think about loving the Creator and the created.'
      },
      {
        question: 'How does Yunus Emre describe the heart?',
        options: [
          { text: 'As an unimportant part of worship', isCorrect: false },
          { text: 'As the throne of the Lord and the center of love', isCorrect: true },
          { text: 'As a symbol of political power', isCorrect: false }
        ],
        hint: 'The text says breaking a heart is like destroying Allah’s house.'
      },
      {
        question: 'What role does intellect have in Yunus Emre’s thought?',
        options: [
          { text: 'It is useless for spiritual life', isCorrect: false },
          { text: 'It only helps people earn money', isCorrect: false },
          { text: 'It supports the heart and guides a person toward salvation', isCorrect: true }
        ],
        hint: 'Heart and reason must support one another.'
      },
      {
        question: 'Why is death an important theme in Yunus Emre’s poems?',
        options: [
          { text: 'Because remembering death can guide people to a meaningful and righteous life', isCorrect: true },
          { text: 'Because death makes morality unnecessary', isCorrect: false },
          { text: 'Because death is treated only as a historical fact', isCorrect: false }
        ],
        hint: 'The text presents death as an advisor.'
      },
      {
        question: 'Which group includes values emphasized by Yunus Emre?',
        options: [
          { text: 'Anger, greed, arrogance and slander', isCorrect: false },
          { text: 'Honesty, patience, humility and generosity', isCorrect: true },
          { text: 'Wealth, fame, status and competition', isCorrect: false }
        ],
        hint: 'Think about the moral qualities praised in the text.'
      },
      {
        question: 'What is one reason Yunus Emre has a lasting legacy?',
        options: [
          { text: 'He only wrote for the political elite', isCorrect: false },
          { text: 'He avoided religious and moral themes', isCorrect: false },
          { text: 'His poetry became both a literary tradition and a moral guide', isCorrect: true }
        ],
        hint: 'The text connects his poetry with literature, Sûfîsm and morality.'
      }
    ]
  }
];
