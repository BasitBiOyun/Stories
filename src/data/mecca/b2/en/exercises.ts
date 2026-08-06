import { Exercise } from '../../../../types';

export const meccaB2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'From World Context to Revelation',
    instructions: 'Put the historical and social developments in the correct order.',
    question: 'Order the main stages that help explain Mecca before Islam and the rise of Islam.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The B2 story begins with the wider Byzantine-Sassanid world, then moves to Mecca, its sacred history, trade, social injustice, religious disorder, and finally the Prophet’s message against Jahiliyyah.',
    feedback: {
      correct: 'Excellent! You can follow the macro-historical argument of the B2 text.',
      incorrect: 'Some events are not in the correct order. Review how the text moves from world context to Mecca and then to Islam.'
    },
    sequencingItems: [
      { id: '1', text: 'The Byzantine and Sassanid empires exhausted each other through rivalry' },
      { id: '2', text: 'Arabia remained divided into tribes without political unity' },
      { id: '3', text: 'Mecca became important because of the Ka’ba and the legacy of Abraham and Ishmael' },
      { id: '4', text: 'The Quraysh developed Mecca into a major trade center' },
      { id: '5', text: 'Wealth, usury, slavery, and tribal pride created deep social injustice' },
      { id: '6', text: 'Idolatry, superstition, and moral decline dominated religious life' },
      { id: '7', text: 'Islam challenged this order with tawhid, justice, mercy, and equality' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'Systems of Jahiliyyah',
    instructions: 'Drag each item into the correct system category.',
    question: 'Which features belong to political, economic, social, or religious life in pre-Islamic Mecca?',
    correctAnswer: {
      'POLITICAL STRUCTURE': ['Tribal division', 'No central authority', 'Quraysh leadership'],
      'ECONOMIC STRUCTURE': ['Caravan trade', 'Usury', 'Trade fairs'],
      'SOCIAL STRUCTURE': ['Class gap', 'Slavery', 'Tribal pride'],
      'RELIGIOUS STRUCTURE': ['Idolatry', 'Pilgrimage rituals', 'Superstitions']
    },
    explanation: 'The B2 text presents Mecca as an interconnected system: politics, economics, society, and religion supported one another before Islam challenged the whole structure.',
    feedback: {
      correct: 'Correct! You recognized how the different systems worked together in Jahiliyyah Mecca.',
      incorrect: 'Some items are in the wrong group. Think about whether each item is about power, money, society, or worship.'
    },
    dragDropGroups: [
      { group: 'POLITICAL STRUCTURE', items: ['Tribal division', 'No central authority', 'Quraysh leadership'] },
      { group: 'ECONOMIC STRUCTURE', items: ['Caravan trade', 'Usury', 'Trade fairs'] },
      { group: 'SOCIAL STRUCTURE', items: ['Class gap', 'Slavery', 'Tribal pride'] },
      { group: 'RELIGIOUS STRUCTURE', items: ['Idolatry', 'Pilgrimage rituals', 'Superstitions'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Analytical Reflection',
    instructions: 'Think deeply and discuss or write your answers.',
    question: 'Why did Islam threaten the political, economic, and religious order of Mecca?',
    correctAnswer: null,
    explanation: 'Students should explain that Islam did not only change personal belief. It challenged idolatry, usury, tribal arrogance, social injustice, oppression of the weak, and the prestige of the Quraysh leaders.',
    feedback: {
      correct: 'Strong reflection! You connected belief, power, economy, and society.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'How did trade and pilgrimage strengthen Quraysh leadership?', mode: 'Individual' },
      { question: 'Why was usury more than an economic problem in Mecca?', mode: 'Pair' },
      { question: 'How did tawhid challenge idols, tribal pride, and social hierarchy at the same time?', mode: 'Class' },
      { question: 'Why does the text describe Islam as the opposite of barbarism?', mode: 'Class' },
      { question: 'How can a society look wealthy but still be morally weak?', mode: 'Pair' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'Mecca Before Islam B2 Challenge',
    instructions: 'Complete the 12-question challenge about Mecca, Jahiliyyah, and the rise of Islam.',
    question: 'Are you ready for the B2 final challenge?',
    correctAnswer: null,
    explanation: 'This quiz reviews historical context, key concepts, economic structures, social injustice, religious life, and the meaning of Islam’s challenge to Jahiliyyah.',
    feedback: {
      correct: 'Excellent! You have mastered the B2 reading on Mecca before Islam.',
      incorrect: 'Review the chapters carefully and try again. Focus on causes, contrasts, and systems.'
    },
    hints: [
      'Think about the connection between trade, pilgrimage, and power',
      'Remember that Jahiliyyah means moral and spiritual disorder, not lack of scientific knowledge',
      'Focus on how Islam challenged idolatry, usury, oppression, and tribal arrogance'
    ],
    quizQuestions: [
      {
        question: 'Why does the B2 text begin with the Byzantine and Sassanid empires?',
        options: [
          { text: 'To show the wider political world around Arabia before Islam', isCorrect: true },
          { text: 'To explain that Mecca was ruled directly by Byzantium', isCorrect: false },
          { text: 'To show that Arabia had no trade connections at all', isCorrect: false }
        ],
        hint: 'The opening chapter gives the broad historical background.'
      },
      {
        question: 'In the text, what is the main meaning of Jahiliyyah?',
        options: [
          { text: 'A lack of poetry and literature', isCorrect: false },
          { text: 'Moral and spiritual disorder before Islam', isCorrect: true },
          { text: 'A period without any trade routes', isCorrect: false }
        ],
        hint: 'Ignorance here does not mainly mean lack of scientific knowledge.'
      },
      {
        question: 'Why was Mecca described as a valley where no crops grow?',
        options: [
          { text: 'Because agriculture was the main source of wealth there', isCorrect: false },
          { text: 'Because it was controlled by the Sassanids', isCorrect: false },
          { text: 'Because its geography made settlement and trade especially significant', isCorrect: true }
        ],
        hint: 'Think about geography, Ka’ba, Zamzam, and trade.'
      },
      {
        question: 'Which event helped settlement begin in Mecca after Hagar and Ishmael were left there?',
        options: [
          { text: 'The discovery of Zamzam water', isCorrect: true },
          { text: 'The conquest of Constantinople', isCorrect: false },
          { text: 'The building of Roman trade ships', isCorrect: false }
        ],
        hint: 'The text connects settlement with water.'
      },
      {
        question: 'What role did Hashim ibn Abd Manaf play in Mecca’s development?',
        options: [
          { text: 'He ended all caravan trade', isCorrect: false },
          { text: 'He helped expand Quraysh trade through agreements and safe journeys', isCorrect: true },
          { text: 'He introduced idolatry to the Ka’ba', isCorrect: false }
        ],
        hint: 'He is connected with trade agreements and Quraysh caravans.'
      },
      {
        question: 'Why were the sacred months important for Mecca?',
        options: [
          { text: 'They stopped all religious activity in the city', isCorrect: false },
          { text: 'They made agriculture possible in the valley', isCorrect: false },
          { text: 'They created safety for pilgrimage, fairs, and trade', isCorrect: true }
        ],
        hint: 'Fighting was forbidden during these months.'
      },
      {
        question: 'What was one major effect of usury in Meccan society?',
        options: [
          { text: 'It increased the gap between the rich and the poor', isCorrect: true },
          { text: 'It removed all social classes', isCorrect: false },
          { text: 'It made slavery disappear', isCorrect: false }
        ],
        hint: 'The text says the rich became richer and the poor became poorer.'
      },
      {
        question: 'What was Hilfü’l-Fudûl?',
        options: [
          { text: 'A trade fair held after Hajj', isCorrect: false },
          { text: 'An agreement to help people oppressed in Mecca', isCorrect: true },
          { text: 'A group of magicians who served the Quraysh', isCorrect: false }
        ],
        hint: 'Young Muhammad (pbuh) attended this pact before prophethood.'
      },
      {
        question: 'How does the B2 text evaluate pre-Islamic generosity?',
        options: [
          { text: 'It says generosity never existed among Arabs', isCorrect: false },
          { text: 'It says generosity always came from pure sincerity', isCorrect: false },
          { text: 'It says generosity often became a tribal honor contest driven by fame', isCorrect: true }
        ],
        hint: 'The text gives a balanced view, not a completely negative one.'
      },
      {
        question: 'What does the text say about women in Jahiliyyah?',
        options: [
          { text: 'Their position changed according to wealth, tribe, and social class', isCorrect: true },
          { text: 'All women had exactly the same power and rights', isCorrect: false },
          { text: 'No woman could ever run a business', isCorrect: false }
        ],
        hint: 'Khadija is given as an example of a wealthy woman with business freedom.'
      },
      {
        question: 'Why were poets described as the media of the age?',
        options: [
          { text: 'Because they printed newspapers in Mecca', isCorrect: false },
          { text: 'Because they preserved tribal memory, praised tribes, and attacked enemies through poetry', isCorrect: true },
          { text: 'Because they controlled the Ka’ba directly', isCorrect: false }
        ],
        hint: 'Poetry carried public messages and tribal identity.'
      },
      {
        question: 'Why did Quraysh leaders oppose Islam so strongly?',
        options: [
          { text: 'Because Islam supported idolatry and usury', isCorrect: false },
          { text: 'Because Islam asked them to increase slavery', isCorrect: false },
          { text: 'Because Islam challenged their religious prestige, economic practices, and social power', isCorrect: true }
        ],
        hint: 'Think about tawhid, idols, usury, zakat, sadaqah, and leadership.'
      }
    ]
  }
];
