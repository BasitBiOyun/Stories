import { Exercise } from '../../../../types';

export const mosesB2FinalReviewExercises: Exercise[] = [
  {
    id: 'final-1',
    type: 'sequencing',
    title: 'The Journey of Moses',
    instructions: 'Put the major events of the B2 narrative in the correct chronological order.',
    question: 'Sequence the high-level historical events of the story.',
    correctAnswer: ['1', '2', '3', '4', '5', '6', '7'],
    explanation: 'The B2 narrative traces the full circle: from Pharaoh’s initial decree and Moses’s hidden childhood/youth, through his years of training in Midian, to his ultimate return as a Prophet, resulting in the magicians’ belief, the Exodus, and the drowning of the tyrant.',
    feedback: {
      correct: 'Stellar work! You have perfectly sequenced the deep biographical arc of Prophet Moses (pbuh).',
      incorrect: 'A few milestones are misplaced. Think about the sequence from the initial Nile basket to the final return and parting of the sea.'
    },
    sequencingItems: [
      { id: '1', text: 'Pharaoh commands the systematic killing of Israelite newborn boys due to a vision of fire from Jerusalem.' },
      { id: '2', text: 'Moses’s mother places him in a basket on the River Nile, leading to his adoption by Queen Asiye.' },
      { id: '3', text: 'Moses grows up as a prince but possesses a deep sense of justice for the oppressed Israelites.' },
      { id: '4', text: 'Following an accidental killing, Moses receives a warning, flees to Midian, and works ten years for Prophet Shu’ayb.' },
      { id: '5', text: 'Allah calls Moses by name at the sacred valley of Tuwa (Mount Sinai), granting him the staff and the white hand.' },
      { id: '6', text: 'Moses returns with his brother Harun (Aaron); the elite magicians recognize the divine signs and declare their belief.' },
      { id: '7', text: 'The Exodus takes place, culminating in the parting of the Red Sea and the absolute drowning of Pharaoh’s forces.' }
    ]
  },
  {
    id: 'final-2',
    type: 'drag-drop',
    title: 'B2 Character Roles & Virtues',
    instructions: 'Drag the descriptive active traits, status labels, and moral postures into the correct character group.',
    question: 'Match the behavioral profiles to the appropriate characters in the B2 text.',
    correctAnswer: {
      'MOSES': ['Generous helper', 'Humble in mistake', 'Relies on Allah’s guidance'],
      'PHARAOH': ['Arrogant tyrant', 'Oppressive dictator', 'Power-hungry ruler'],
      'THE MAGICIANS': ['Elite scholars', 'Sincere truth-seekers', 'Courageous believers'],
      'QUEEN ASIYE': ['Secret believer', 'Compassionate protector', 'Brave maternal figure']
    },
    explanation: 'Moses displays humility and helper behavior. Pharaoh represents the peak of pride and tyranny. The magicians represent intellectual scholars transforming into courageous believers. Queen Asiye represents silent faith and protective mercy.',
    feedback: {
      correct: 'Excellent pairing! You understand the complex psychological and moral dimensions of the B2 character profiles.',
      incorrect: 'Some characteristics are unmatched. Re-evaluate how each character’s status and actions are presented.'
    },
    dragDropGroups: [
      { group: 'MOSES', items: ['Generous helper', 'Humble in mistake', 'Relies on Allah’s guidance'] },
      { group: 'PHARAOH', items: ['Arrogant tyrant', 'Oppressive dictator', 'Power-hungry ruler'] },
      { group: 'THE MAGICIANS', items: ['Elite scholars', 'Sincere truth-seekers', 'Courageous believers'] },
      { group: 'QUEEN ASIYE', items: ['Secret believer', 'Compassionate protector', 'Brave maternal figure'] }
    ]
  },
  {
    id: 'final-3',
    type: 'reflection',
    title: 'Intellectual & Theological Reflection',
    instructions: 'Contemplate these advanced questions and engage in high-level analytical discussion.',
    question: 'How does the B2 story of Prophet Moses (pbuh) analyze the nature of absolute power, faith, and liberation?',
    correctAnswer: null,
    explanation: 'Reflective responses should target themes of power blind spots, humility built during shepherding, or how true faith liberates a person from the fear of physical punishment.',
    feedback: {
      correct: 'Inspiring interpretation! Your insights show a mature grasp of the thematic, literary, and ethical lessons of the narrative.',
      incorrect: ''
    },
    discussionPrompts: [
      { question: 'Why did Pharaoh’s elite intellectual magicians embrace belief almost instantly, while Pharaoh remained blind despite his absolute political status?', mode: 'Individual' },
      { question: 'What does Moses’s decade as a humble shepherd in Midian teach us about the preparation and shift in character required for genuine leadership?', mode: 'Pair' },
      { question: 'How does the contrast between Pharaoh’s magician-led illusions and Allah’s actual miracles redefine our understanding of reality and truth in society?', mode: 'Class' }
    ]
  },
  {
    id: 'final-4',
    type: 'quiz-game',
    title: 'The Prophet Moses B2 Mastery Challenge',
    instructions: 'Examine your knowledge with this comprehensive 10-question challenge designed to test academic comprehension at the upper-intermediate level.',
    question: 'Are you prepared to demonstrate complete mastery of the B2 Prophet Moses (pbuh) narrative?',
    correctAnswer: null,
    explanation: 'This interactive quiz validates comprehension of the historical, theological, linguistic, and character aspects of the B2 curriculum.',
    feedback: {
      correct: 'Phenomenal achievement! You have achieved complete mastery of the B2 Story of Prophet Moses (pbuh)! Your comprehension of the text is exemplary.',
      incorrect: 'Return to the chapters to review specific vocabulary, historical connections, and character motivations, then attempt the challenge again.'
    },
    hints: [
      'Recall Pharaoh’s economic policy adjustments regarding the alternate-year baby killings.',
      'Reflect on the exact reasons why the magicians capitulated.',
      'Recall Moses’s statements of trust when facing the sea.'
    ],
    quizQuestions: [
      {
        question: 'What led to Pharaoh’s initial decree of babe killings?',
        options: [
          { text: 'A vision of fire from Jerusalem destroying Egyptian houses but sparing the Israelites', isCorrect: true },
          { text: 'A famine that hit Egypt due to overpopulation', isCorrect: false },
          { text: 'A direct challenge from neighboring empires', isCorrect: false }
        ],
        hint: 'Pharaoh called advisors to interpret his dream of flames.'
      },
      {
        question: 'Why did Pharaoh’s economic advisors suggest alternating the killings of Israelite baby boys?',
        options: [
          { text: 'Because of a loss of manual labor and manpower needed for heavy Egyptian projects', isCorrect: true },
          { text: 'Because of a shift in the astrological calendar', isCorrect: false },
          { text: 'Because of pressure from surrounding kingdoms demanding mercy', isCorrect: false }
        ],
        hint: 'The Israelites performed most of the hard labor in the kingdom.'
      },
      {
        question: 'Why did Queen Asiye desire to keep baby Moses as her own in the palace?',
        options: [
          { text: 'She was sterile, longed for a child, and viewed the baby as a potential "ray of light"', isCorrect: true },
          { text: 'She wanted to use him to claim political power from her husband', isCorrect: false },
          { text: 'She recognized him instantly as a future prophet of the Israelites', isCorrect: false }
        ],
        hint: 'Her maternal compassion was combined with a biological challenge.'
      },
      {
        question: 'In Moses’s youth, what was the primary source of his inner conflict?',
        options: [
          { text: 'Balancing his luxurious palace upbringing with his moral opposition to the oppression of his original people', isCorrect: true },
          { text: 'Choosing which of the Egyptian gods to worship at court', isCorrect: false },
          { text: 'Struggling to learn the complex magical arts of the priests', isCorrect: false }
        ],
        hint: 'He knew he was originally an Israelite raised as a Prince.'
      },
      {
        question: 'Why did the young man of faith warning Moses urge him to leave Egypt after the accidental killing?',
        options: [
          { text: 'Because political chiefs were taking counsel to impose the death penalty on him', isCorrect: true },
          { text: 'Because a great sandstorm was about to destroy the bazzar', isCorrect: false },
          { text: 'Because the Children of Israel had decided to stay forever', isCorrect: false }
        ],
        hint: 'The man arrived from the farthest part of the city with urgent news.'
      },
      {
        question: 'What key lessons did Moses cultivate during his ten-year shepherd tenure in Midian?',
        options: [
          { text: 'Humility, patience, responsibility, and deep spiritual preparation away from luxury', isCorrect: true },
          { text: 'Advanced combat tactics and survival training against desert beasts', isCorrect: false },
          { text: 'Trade routes, wealth building, and pastoral accounting methods', isCorrect: false }
        ],
        hint: 'This hidden period of transition trained his character before his prophet mission.'
      },
      {
        question: 'Why did Allah query Moses about the staff in his hand at Mount Sinai before transforming it?',
        options: [
          { text: 'To concentrate his attention on the ordinary staff so he would fully grasp the miraculous change', isCorrect: true },
          { text: 'Because He wanted Moses to throw it away and never use it again', isCorrect: false },
          { text: 'To test whether Moses could identify simple wood from the mountain', isCorrect: false }
        ],
        hint: 'Preparing a person’s focus is essential before demonstrating a divine sign.'
      },
      {
        question: 'Why was the magicians’ declaration of belief considered a devastating moral defeat for Pharaoh?',
        options: [
          { text: 'Because they were elite intellectual scholars of Egypt whose recognition of a miracle proved Pharaoh and his magic false', isCorrect: true },
          { text: 'Because they had paid Pharaoh large sums of money in taxes', isCorrect: false },
          { text: 'Because court entertainment programs had to be suspended permanently', isCorrect: false }
        ],
        hint: 'In ancient Egypt, magic was linked to high science, religion, and the state.'
      },
      {
        question: 'How did the magicians respond when Pharaoh threatened them with mutilation and death?',
        options: [
          { text: 'They stood firm, stating they would not choose safety over the clear Truth that had reached them', isCorrect: true },
          { text: 'They tearfully begged for forgiveness and reverted to trickery', isCorrect: false },
          { text: 'They escaped to Midian under the cover of darkness', isCorrect: false }
        ],
        hint: 'Faith had entered their hearts, rendering physical threats powerless.'
      },
      {
        question: 'What is the absolute final theological lesson presented at the parting of the Red Sea?',
        options: [
          { text: 'That worldly status, wealth, and armies cannot defend an oppressor against the absolute justice of Allah', isCorrect: true },
          { text: 'That the Red Sea undergoes rapid and predictable low tide shifts', isCorrect: false },
          { text: 'That prophets must always carry wooden staffs for safety on sandy beaches', isCorrect: false }
        ],
        hint: 'The story’s conclusion balances human pride against ultimate reality.'
      }
    ]
  }
];

export const exercises = mosesB2FinalReviewExercises;
