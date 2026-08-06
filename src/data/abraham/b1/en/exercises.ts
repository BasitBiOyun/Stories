import { Exercise } from '../../../../types';

export const abrahamB1FinalReviewExercises: Exercise[] = [
  {
    id: 'b1-abraham-final-1',
    type: 'sequencing',
    title: 'Chronological Narrative Analysis',
    instructions: 'Arrange the pivotal moments of Prophet Abraham\'s story in their correct chronological sequence.',
    question: 'Sequence the narrative milestones.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The B1 narrative moves from Abraham\'s early rejection of idols, to his search for the true Creator, his public struggle against idolatry, the fire miracle, the debate with Nimrod, migration, Hagar and Ishmael in the valley, Zamzam, and finally the building of the Ka\'ba.',
    feedback: {
      correct: 'Excellent analytical skills! You have mastered the chronological flow of the B1 Abraham narrative.',
      incorrect: 'Some milestones are misaligned. Think about the cause-and-effect chain from Babylon to Mecca.'
    },
    sequencingItems: [
      { id: '1', text: 'Abraham grows up in Babylon among people who worship idols, stars, the moon, and the sun' },
      { id: '2', text: 'He reflects on the star, moon, and sun and understands that Allah is the Creator, not a creation' },
      { id: '3', text: 'He challenges his father and his people and calls them to worship Allah alone' },
      { id: '4', text: 'He breaks the idols and leaves the axe with the largest statue to expose their helplessness' },
      { id: '5', text: 'The people throw him into the great fire, but Allah makes it cool and safe for him' },
      { id: '6', text: 'Abraham debates Nimrod and later leaves Babylon to spread Allah\'s message' },
      { id: '7', text: 'Hagar and Ishmael settle in the valley, Zamzam appears, and Abraham and Ishmael build the Ka\'ba' }
    ]
  },
  {
    id: 'b1-abraham-final-2',
    type: 'drag-drop',
    title: 'Ethical Categorization',
    instructions: 'Classify the following concepts based on their role in the narrative of Prophet Abraham.',
    question: 'Categorize the moral and immoral attributes.',
    correctAnswer: {
      'VIRTUES (PROPHETIC PATH)': ['Truth-Seeking', 'Courage', 'Trust in Allah', 'Patience', 'Gratitude'],
      'VICES (PATH OF IDOLATRY)': ['Arrogance', 'Blind Imitation', 'False Worship', 'Anger', 'Denial of Truth']
    },
    explanation: 'The story contrasts Abraham\'s search for truth, courage, and trust in Allah with the arrogance, blind imitation, anger, and denial of the idolaters and Nimrod.',
    feedback: {
      correct: 'Correct! You have a clear understanding of the ethical framework presented in the story.',
      incorrect: 'Some concepts are misplaced. Ask whether each concept leads people toward truth or away from it.'
    },
    dragDropGroups: [
      { group: 'VIRTUES (PROPHETIC PATH)', items: ['Truth-Seeking', 'Courage', 'Trust in Allah', 'Patience', 'Gratitude'] },
      { group: 'VICES (PATH OF IDOLATRY)', items: ['Arrogance', 'Blind Imitation', 'False Worship', 'Anger', 'Denial of Truth'] }
    ]
  },
  {
    id: 'b1-abraham-final-3',
    type: 'reflection',
    title: 'Philosophical Reflection',
    instructions: 'Engage with these complex themes and formulate your own perspective.',
    question: 'How does Abraham\'s reasoning about the star, moon, and sun show the difference between the Creator and creation?',
    correctAnswer: true,
    explanation: 'The story teaches that created things appear, disappear, change, and depend on Allah. Abraham understands that the true Creator cannot be limited like created things.',
    feedback: {
      correct: 'Insightful reflection! These are the core lessons for B1 learners.',
      incorrect: 'Please reflect on the prompts above and connect your answer to the story.'
    },
    discussionPrompts: [
      { question: 'Why is blind imitation dangerous when people are searching for truth?', mode: 'Individual' },
      { question: 'Analyze how Abraham used logic when people asked him about the broken idols.', mode: 'Pair' },
      { question: 'Discuss how Hagar\'s effort between Safa and Marwa combines trust in Allah with active struggle.', mode: 'Class' }
    ]
  },
  {
    id: 'b1-abraham-final-4',
    type: 'quiz-game',
    title: 'Narrative Masterclass',
    instructions: 'Navigate through the complex layers of the story in this final interactive challenge.',
    question: 'Are you prepared to demonstrate your mastery of the B1 level content?',
    correctAnswer: null,
    explanation: 'This challenge evaluates your understanding of vocabulary, themes, chronology, and narrative details.',
    feedback: {
      correct: 'Outstanding! You have successfully completed the B1 Masterclass on Prophet Abraham (pbuh).',
      incorrect: 'Keep exploring the depth of the story. Clear thinking and patience lead to mastery.'
    },
    hints: [
      'Focus on the contrast between lifeless idols and the living Creator',
      'Remember how Abraham used questions to reveal false beliefs',
      'Consider the links between trust, effort, Zamzam, and the Ka\'ba'
    ],
    quizQuestions: [
      {
        question: 'Why could Abraham not accept the idols as gods?',
        options: [
          { text: 'Because they were made in another city', isCorrect: false },
          { text: 'Because they could not eat, drink, move, hear, understand, help, or harm', isCorrect: true },
          { text: 'Because they were too small for the temple', isCorrect: false }
        ],
        hint: 'Consider the limitations of idols as lifeless, physical objects.'
      },
      {
        question: 'What did Abraham understand after observing the star, moon, and sun?',
        options: [
          { text: 'Created things that appear and disappear cannot be Allah', isCorrect: true },
          { text: 'The sun was stronger than the moon and should be worshipped', isCorrect: false },
          { text: 'The stars were hidden gods in the sky', isCorrect: false }
        ],
        hint: 'Focus on what happens when each heavenly body sets or fades.'
      },
      {
        question: 'Why did Abraham leave the largest idol unbroken with the axe around its neck?',
        options: [
          { text: 'He wanted the people to repair the temple quickly', isCorrect: false },
          { text: 'He wanted to expose the helplessness of idols through a logical question', isCorrect: true },
          { text: 'He was afraid of the largest idol', isCorrect: false }
        ],
        hint: 'Remember what Abraham told the people to ask.'
      },
      {
        question: 'What does the fire miracle primarily show in the story?',
        options: [
          { text: 'Allah protects His messenger and has power over creation', isCorrect: true },
          { text: 'The people of Babylon became sincere believers immediately', isCorrect: false },
          { text: 'Abraham escaped before the fire was lit', isCorrect: false }
        ],
        hint: 'The fire was commanded to become cool and safe.'
      },
      {
        question: 'How did Abraham answer Nimrod\'s claim that he could give life and death?',
        options: [
          { text: 'He asked Nimrod to build a new temple', isCorrect: false },
          { text: 'He asked Nimrod to make the sun rise from the west', isCorrect: true },
          { text: 'He asked Nimrod to walk between Safa and Marwa', isCorrect: false }
        ],
        hint: 'Abraham moved the debate to something only Allah can control.'
      },
      {
        question: 'What does Hagar\'s running between Safa and Marwa represent?',
        options: [
          { text: 'A combination of sincere effort, patience, and trust in Allah', isCorrect: true },
          { text: 'A search for statues in the desert', isCorrect: false },
          { text: 'A journey away from Mecca forever', isCorrect: false }
        ],
        hint: 'She did not give up even when there was no visible water.'
      },
      {
        question: 'Why is Zamzam important in the story?',
        options: [
          { text: 'It was a gift from Allah in the desert and helped life begin in the valley', isCorrect: true },
          { text: 'It was a river from Babylon', isCorrect: false },
          { text: 'It was water brought by Nimrod\'s guards', isCorrect: false }
        ],
        hint: 'Think about what appeared under Ishmael\'s feet.'
      },
      {
        question: 'What is the message connected to Abraham, Ishmael, the Ka\'ba, and their descendants?',
        options: [
          { text: 'There is no god but Allah, and He has no partner', isCorrect: true },
          { text: 'People should worship the sun because it is bright', isCorrect: false },
          { text: 'Only one nation can worship Allah', isCorrect: false }
        ],
        hint: 'The final part of the story highlights Tawheed and the legacy of Abraham.'
      }
    ]
  }
];
