import { PageData } from '../../../../types';
import { adamA2FinalReviewExercises } from './exercises';

export const adamA2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Opening & The Creation',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_ch1.png?alt=media&token=ca08c6ed-5540-4dc8-b880-7de3d943ce9c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%201%20(1).mp3?alt=media&token=09559d75-7a75-414f-a910-3933daa696f9',
    content: "Adam (pbuh) is the first messenger of Allah and the father of all humans. Allah created him from soil and cared about him very much because he was the first human. We are the grandchildren of Adam (pbuh), so we can learn many lessons from this fantastic story. \n\nAllah created the sky and the earth. After that, he told the angels that he was going to create a human. He said, ''The human is going to become the ruler on earth. The ruler is going to live on earth for many years.'' Angels got surprised. They began waiting with curiosity. \n\nThen Allah's angels collected soil from different parts of the earth, and Allah shaped Adam. Because of this, humans have different skin colors. \n\nProphet Muhammad (pbuh) said that Allah created Adam (pbuh) from a handful of dust from different lands. So the children of Adam (pbuh) are white, red, black, and yellow in color.",
    vocabulary: [
      { word: 'Messenger', definition: 'A person who carries a message from Allah.' },
      { word: 'soil', definition: 'The top layer of earth in which plants grow.' },
      { word: 'curiosity', definition: 'A strong desire to know or learn something.' }
    ],
    hotspots: [
      { id: 'h1', x: 30, y: 40, title: 'Soil', description: 'Allah created Adam from soil.' },
      { id: 'h2', x: 70, y: 20, title: 'Earth', description: 'Allah created the sky and the earth.' }
    ],
    animatedWords: ['soil', 'sky', 'earth', 'dust'],
    syncPoints: [0, 18, 38, 60],
    timedChunks: [
      { start: 0.176, end: 3.5, text: "Adam (pbuh) is the first messenger of" },
      { start: 4.0, end: 6.663, text: "Allah and the father of all humans." },
      { start: 8.044, end: 10.828, text: "Allah created him from soil and cared" },
      { start: 10.868, end: 11.881, text: "about him very" },
      { start: 11.914, end: 14.852, text: "much because he was the first human." },
      { start: 16.088, end: 18.786, text: "We are the grandchildren of Adam (pbuh)," },
      { start: 20.118, end: 22.611, text: "so we can learn many lessons" },
      { start: 22.651, end: 23.651, text: "from this fantastic" },
      { start: 24.151, end: 27.938, text: "story. Allah created the sky and" },
      { start: 27.970, end: 31.310, text: "the earth. After that, he told the" },
      { start: 31.326, end: 34.120, text: "angels that he was going to create a human." },
      { start: 35.420, end: 38.953, text: "He said, the human is going to become the" },
      { start: 39.033, end: 42.806, text: "ruler on earth. The ruler is going to live" },
      { start: 43.306, end: 45.583, text: "on earth for many years." },
      { start: 45.623, end: 47.575, text: "Angels got surprised." },
      { start: 48.442, end: 51.931, text: "They began waiting with" },
      { start: 51.971, end: 53.162, text: "curiosity. Then Allah's" },
      { start: 53.243, end: 56.518, text: "angels collected soil from different parts of the earth," },
      { start: 57.336, end: 61.173, text: "and Allah shaped Adam. Because of this," },
      { start: 61.607, end: 63.661, text: "humans have different skin colors." },
      { start: 64.962, end: 68.831, text: "Prophet Muhammad (pbuh) said that Allah" },
      { start: 69.331, end: 72.456, text: "created Adam (pbuh) from a handful of" },
      { start: 72.496, end: 73.550, text: "dust from different" },
      { start: 74.050, end: 78.125, text: "lands. So the children of Adam (pbuh) are" },
      { start: 78.142, end: 81.657, text: "white, red, black, and" },
      { start: 81.834, end: 82.834, text: "yellow in color." }
    ],
    exercises: [
      {
        id: 'ex1-1',
        type: 'true-false',
        title: 'Origin of Adam',
        instructions: 'Decide if the statement is true or false.',
        question: 'Allah created Adam (pbuh) from fire.',
        correctAnswer: false,
        explanation: 'Allah created Adam (pbuh) from soil (clay), while He created Iblis from fire.',
        feedback: {
          correct: 'Correct! Allah created Adam (pbuh) from the earth.',
          incorrect: 'Not quite. Remember, Allah shaped Adam (pbuh) from soil.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'Knowledge and Respect',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter2.png?alt=media&token=649ddbc9-ea42-4fe9-9a58-09ce1d27191a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter2.mp3?alt=media&token=1e1580e8-16b3-4957-8f44-0f06bed5ec21',
    content: "Allah told His angels “After I have created Adam and given him life, show respect to him.” Adam could learn and understand. He was wiser than the angels, because Allah gave Adam knowledge and taught him to think. He learned more than angels knew. \n\nAll the angels thought that Adam was amazing. They all admired him and respected him. But Iblis didn’t think so. Iblis thought Adam was an unimportant creature created from clay.",
    vocabulary: [
      { word: 'respect', definition: 'A feeling of deep admiration for someone.' },
      { word: 'wiser', definition: 'Having or showing experience, knowledge, and good judgment.' },
      { word: 'clay', definition: 'Soft earth that can be shaped.' }
    ],
    hotspots: [
      { id: 'h2-1', x: 40, y: 30, title: 'Knowledge', description: 'Allah gave Adam knowledge and taught him to think.' },
      { id: 'h2-2', x: 60, y: 50, title: 'Angels', description: 'The angels admired Adam and respected him.' }
    ],
    animatedWords: ['knowledge', 'think', 'amazing', 'understand'],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'Respect for Adam (pbuh)',
        instructions: 'Choose the correct answer.',
        question: 'Who refused to show respect to Adam (pbuh)?',
        options: ['The Angels', 'Iblis', 'The Animals'],
        correctAnswer: 1,
        explanation: 'While all the angels respected Adam (pbuh) as Allah commanded, Iblis refused because of his pride and jealousy.',
        feedback: {
          correct: 'Correct! Iblis was the only one who disobeyed.',
          incorrect: 'Try again. Most creatures respected him, but one did not.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: "Iblis's Arrogance",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter3.png?alt=media&token=47e43312-d51a-45a8-9349-7f2f097d37a2',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%203%20(1).mp3?alt=media&token=cd9880b6-62a1-4810-9ded-7054952d9039',
    content: "Then Allah asked Iblis “Why didn’t you respect Adam?” Iblis said “I am better than Adam. You created me from fire, and You created Adam from soil.” \n\nIblis was arrogant. He thought he was more important and more valuable than Adam. He came from the fire and believed his origin was better. He thought little and was wrong about Adam. Iblis couldn’t see that Adam had perfect knowledge and it was for the good of every creature of Allah. This knowledge made Adam more valuable. \n\nFor Allah, the clay or the fire did not make anybody valuable. But useful knowledge makes people great, because with this knowledge human can do good and stop bad. \n\nBut Iblis continued saying he was right and the Creator was wrong. Allah said to Iblis “Go away! You are far from My love and care.” \n\nAdam was now in Paradise.",
    vocabulary: [
      { word: 'arrogant', definition: 'Having an exaggerated sense of one\'s own importance or abilities.' },
      { word: 'valuable', definition: 'Extremely useful or important.' },
      { word: 'creature', definition: 'An animal or person, especially as distinct from a human.' }
    ],
    hotspots: [
      { id: 'h3-1', x: 25, y: 45, title: 'Fire', description: 'Iblis thought fire was better than soil.' },
      { id: 'h3-2', x: 75, y: 35, title: 'Arrogant', description: 'Iblis was arrogant. He thought he was more important than Adam.' }
    ],
    animatedWords: ['fire', 'clay', 'arrogant'],
    exercises: [
      {
        id: 'ex3-1',
        type: 'multiple-choice',
        title: 'The Value of Knowledge',
        instructions: 'Choose the best answer based on the story.',
        question: 'Why was Adam more valuable than Iblis?',
        options: ['He was stronger', 'He had knowledge', 'He lived longer'],
        correctAnswer: 1,
        explanation: 'Allah gave Adam knowledge and taught him to think, which made him more valuable than Iblis, who was only proud of his origin.',
        feedback: {
          correct: 'Excellent! Knowledge and the ability to learn are what made Adam special.',
          incorrect: 'Think again. What did Allah give Adam that the angels and Iblis did not have?'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'Paradise and the Warning',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter4.png?alt=media&token=1d8c7a12-f7d4-4b4b-8435-43e353ae29ff',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter4.mp3?alt=media&token=f914c90b-6fe7-4cbc-881d-a92f77495bc3',
    content: "Iblis got angry with Adam and hated him. He didn’t want Allah to be nice with Adam. Iblis thought because of Adam, Allah put him far from His love. He waited for a chance. He wanted Adam to lose Allah's love, just like himself. Allah told Adam to be careful about Iblis. \n\nThen, Adam started to feel lonely in Paradise. So, Allah gave him a wife. Her name was Eve (Hawwa). They started to live together in Paradise. It was more wonderful than we can imagine. All the gifts in paradise were for them. But Allah had only one warning. HE told Adam and Eve not to go near one tree.",
    vocabulary: [
      { word: 'lonely', definition: 'Sad because one has no friends or company.' },
      { word: 'wonderful', definition: 'Inspiring delight, pleasure, or admiration.' },
      { word: 'warning', definition: 'A statement or event that indicates a possible or impending danger.' }
    ],
    hotspots: [
      { id: 'h4-1', x: 35, y: 40, title: 'Eve (Hawwa)', description: 'Allah gave him a wife. Her name was Eve (Hawwa).' },
      { id: 'h4-2', x: 65, y: 25, title: 'Tree', description: 'HE told Adam and Eve not to go near one tree.' }
    ],
    exercises: [
      {
        id: 'ex4-1',
        type: 'tap-reveal',
        title: 'The Divine Warning',
        instructions: 'Tap to reveal the answer.',
        question: 'What was the only warning Allah gave to Adam and Eve?',
        correctAnswer: 'Not to go near one specific tree.',
        explanation: 'Allah allowed them to enjoy everything in Paradise except for one tree.',
        feedback: {
          correct: 'Correct! This was a test of their obedience.',
          incorrect: 'Try to remember what they were told to avoid.'
        },
        tapRevealItems: [
          { question: 'The Warning', answer: 'Do not go near one specific tree.' }
        ]
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: "Satan's Lie and Regret",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter5.png?alt=media&token=76cd56fb-6403-4eed-9d22-2125689e9ab1',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%205%20(1).mp3?alt=media&token=99c3f2f1-6939-4348-bdbf-ef1fd9611730',
    content: "When Adam and Eve were happy in Paradise, Iblis came near them and told them he was their friend. It was a big lie. He softly spoke to them: “If you eat from that one tree, you will never die.” \n\nAfter a while, Iblis finally made them believe his lie. They forgot Allah’s warning. Unfortunately, people are sometimes forgetful. \n\nAdam and Eve ate fruit from that banned tree. They made a mistake, but it wasn’t on purpose. They were very sad about their wrong action. They said sorry to Allah. They learned from their mistake and decided never to repeat it. They wanted Allah to excuse them. \n\nHowever, Iblis took an opposite direction. He never thought he was wrong, because he was arrogant. He believed that he was superior, smarter and more important than the human. Iblis’ character makes it hard to do the right thing and see the difference between good and bad.",
    vocabulary: [
      { word: 'lie', definition: 'Something that is not true.' },
      { word: 'mistake', definition: 'Something you do that is wrong.' },
      { word: 'superior', definition: 'Higher in rank, status, or quality.' }
    ],
    hotspots: [
      { id: 'h5-1', x: 45, y: 35, title: 'Lie', description: 'Iblis told them he was their friend. It was a big lie.' },
      { id: 'h5-2', x: 55, y: 60, title: 'Mistake', description: 'They made a mistake, but it wasn’t on purpose. They were very sad.' }
    ],
    animatedWords: ['on purpose'],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: 'The Lie of Iblis',
        instructions: 'Choose the correct answer.',
        question: 'What did Iblis tell Adam and Eve to trick them?',
        options: ['They would become angels', 'They would never die', 'They would find gold'],
        correctAnswer: 1,
        explanation: 'Iblis lied and told them that if they ate from the forbidden tree, they would never die.',
        feedback: {
          correct: 'Correct! He used a big lie to deceive them.',
          incorrect: 'Think about what Iblis promised them to make them eat the fruit.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'Life on Earth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter6.png?alt=media&token=98ad5740-e8d4-4413-8b73-b4b53e959d2d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%206%20(1).mp3?alt=media&token=4b5d3fa6-dc2d-41d3-89cf-5a361e34aeba',
    content: "Allah excused Adam and Eve and put them on earth to live there. Allah taught and gave them everything to rule on earth. They were the rulers of the planet earth. They were going to direct and make everything better on the planet. They were using land to grow crops and keep animals. They were going to build buildings for housing, protect the nature and help the weak. \n\nBut Iblis also followed Adam and Eve on earth. He was still around. He wanted people not to remember Allah in their daily lives.",
    vocabulary: [
      { word: 'crops', definition: 'A cultivated plant that is grown as food.' },
      { word: 'rule', definition: 'To exercise ultimate power or authority over an area.' },
      { word: 'planet', definition: 'A celestial body moving in an orbit around a star.' }
    ],
    hotspots: [
      { id: 'h6-1', x: 30, y: 50, title: 'Earth', description: 'Allah excused Adam and Eve and put them on earth to live there.' },
      { id: 'h6-2', x: 70, y: 40, title: 'Land', description: 'They were using land to grow crops and keep animals.' }
    ],
    animatedWords: ['excused'],
    exercises: [
      {
        id: 'p6-ex1',
        type: 'fill-blanks',
        title: 'The Warning',
        instructions: 'Complete the sentence about the warning in Paradise.',
        fillBlanksText: 'Allah told Adam and Eve: "You may eat anything in Paradise, but do not go near this [blank]."',
        correctAnswer: 'tree',
        feedback: {
          correct: 'Exactly! They were warned about one specific tree.',
          incorrect: 'Think about what was forbidden in the garden.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'The First Messenger',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter7.png?alt=media&token=2cca3dac-2759-4016-824a-106d09ff0781',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter7.mp3?alt=media&token=38ea267e-8e50-4369-bad9-a2b925c4247a',
    content: "Adam and Eve lived on earth many years. They had good and hard days. Some days brought them peace, some days were difficult. They had also lots of children. We are all one of their children. Then, Allah made Adam His first Messenger. He was the first Messenger of Islam. He started teaching people to be honest, do good, stop bad and always remember Allah. \n\nAdam (pbuh) and Eve taught their children to behave well for the love of Allah and to thank Him for His help and good things in life. They also warned their children against Iblis, because Iblis was their enemy, not their friend. \n\nAfter the death of Adam (pbuh), Allah sent many other messengers. They taught the people right and wrong and the ways to stay away from Iblis. All the prophets took the same way. They wanted to make people remember Allah.",
    vocabulary: [
      { word: 'honest', definition: 'Free of deceit and untruthfulness; sincere.' },
      { word: 'behave', definition: 'Act or conduct oneself in a specified way.' },
      { word: 'enemy', definition: 'A person who is actively opposed or hostile to someone.' }
    ],
    hotspots: [
      { id: 'h7-1', x: 40, y: 45, title: 'Messenger', description: 'Allah made Adam His first Messenger.' },
      { id: 'h7-2', x: 60, y: 30, title: 'Children', description: 'Adam and Eve taught their children to behave well.' }
    ],
    exercises: [
      {
        id: 'p7-ex1',
        type: 'multiple-choice',
        title: 'The First Messenger',
        question: 'Who was the first Messenger of Allah?',
        options: ['Iblis', 'Habil', 'Adam (pbuh)'],
        correctAnswer: 2,
        feedback: {
          correct: 'Correct! Adam (pbuh) was the first Messenger sent to guide humanity.',
          incorrect: 'Try again. Think about who Allah chose to guide the first people.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'Story of Habil and Qabil',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter8.png?alt=media&token=4a3d55b6-fba5-4d1b-ac6d-368ea81562f6',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2FAdam%20A2%20Chapter%208%20(1).mp3?alt=media&token=ef8be57b-54c9-4332-a754-d525086a80d9',
    content: "Adam (pbuh) and Eve had two sons, Habil and Qabil. They were very different. Habil was kind, gentle and loved taking care of animals. Qabil was mostly jealous. When they grew up, Habil became a shepherd. He kept cows, sheep and other animals. Qabil was a farmer, he worked on the farm and grew crops. \n\nOne day they were in a serious disagreement. To solve the problem they had to offer an offering to Allah. Habil brought his best and healtiest sheep as a gift for Allah, but Qabil brought just a handful of his crops. It wasn’t very valuable. Qabil didn’t care to please Allah and his father Adam (pbuh). Real goodness is giving the best and the most loved.",
    vocabulary: [
      { word: 'shepherd', definition: 'A person who tends and rears sheep.' },
      { word: 'farmer', definition: 'A person who owns or manages a farm.' },
      { word: 'offering', definition: 'A thing offered to Allah.' }
    ],
    hotspots: [
      { id: 'h8-1', x: 35, y: 55, title: 'Sheep', description: 'Habil brought his best sheep as a gift for Allah.' },
      { id: 'h8-2', x: 65, y: 45, title: 'Crops', description: 'Qabil brought just a handful of his crops.' }
    ],
    exercises: [
      {
        id: 'ex8-1',
        type: 'drag-drop',
        title: 'Brothers and Qualities',
        instructions: 'Drag the traits to the correct brother.',
        question: 'Match the characters to their traits.',
        dragDropGroups: [
          { group: 'Habil', items: ['Sincerity', 'Kindness'] },
          { group: 'Qabil', items: ['Jealousy', 'Selfishness'] }
        ],
        correctAnswer: {
          'Habil': ['Sincerity', 'Kindness'],
          'Qabil': ['Jealousy', 'Selfishness']
        },
        explanation: 'Habil was sincere and gave his best, while Qabil was jealous and selfish.',
        feedback: {
          correct: 'Well done! You understand the difference between the two brothers.',
          incorrect: 'Check the story again. Who was jealous?'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'The First Crime',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter9.png?alt=media&token=12a5e3e0-c1be-47c1-9a1d-0b64288ddf56',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter9.mp3?alt=media&token=25446a2e-d966-4fdc-9def-e7b43c8cf34c',
    content: "Allah was pleased with Habil’s offering, because he gave from his heart. Qabil’s face became very dark with anger and said “I will kill you”. When Habil heard this, he said “I won’t fight back and harm you, you are my brother and I fear Allah.” Qabil started fighting with his brother and hit him with a stone. Habil died there. \n\nSoon, Qabil’s anger cooled and he felt so sad. But also he started to panic. He said “I killed my brother, I did the worst thing in life, now I don’t know what I should do with his dead body.” Then, Allah sent a crow, it landed on the ground near Qabil and started digging it. The crow showed Qabil the way to put his brother dead body in the hole. Qabil cried and said “I am worse than this crow. I cannot hide my brother’s dead body.”",
    vocabulary: [
      { word: 'crow', definition: 'A large black bird.' },
      { word: 'panic', definition: 'Sudden uncontrollable fear or anxiety.' },
      { word: 'digging', definition: 'Break up and move earth with a tool or claws.' }
    ],
    hotspots: [
      { id: 'h9-1', x: 50, y: 20, title: 'Crow', description: 'The crow showed Qabil the way to put his brother dead body in the hole.' },
      { id: 'h9-2', x: 40, y: 60, title: 'Panic', description: 'Soon, Qabil’s anger cooled and he felt so sad. But also he started to panic.' }
    ],
    exercises: [
      {
        id: 'ex9-1',
        type: 'true-false',
        title: 'The Crow\'s Lesson',
        instructions: 'Decide if the statement is true or false.',
        question: 'Allah sent a crow to show Qabil how to bury his brother.',
        correctAnswer: true,
        explanation: 'Allah sent a crow that started digging the ground to teach Qabil how to bury the dead body.',
        feedback: {
          correct: 'Correct! Even a small bird was sent by Allah to teach a lesson.',
          incorrect: 'Remember the bird that appeared after Qabil killed Habil.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'The Story of Adam (pbuh)',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam_a2_chapter10.png?alt=media&token=97c7a607-186e-439b-9f2d-8d4c9b11bd7f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter10.mp3?alt=media&token=13905754-598c-4330-935f-9c845af1072f',
    content: "He left far away. Adam (pbuh) became very sad. He lost both of his sons on the same day. The story tells us that good people should stay away from jealousy and control their anger. \n\nAdam was a Messenger of Allah and a father of his another children. He had to continue his life. He got old over the years. His children and grandchildren spread his message worldwide. This message still advises people to love and respect Allah. It tells them to be well-behaved and kind to others. \n\nAllah never leaves people alone. The stories of His messengers help us to live an honest life.",
    vocabulary: [
      { word: 'jealousy', definition: 'The state or feeling of being jealous.' },
      { word: 'story', definition: 'A description of past events.' },
      { word: 'worldwide', definition: 'Extending or reaching throughout the world.' }
    ],
    hotspots: [
      { id: 'h10-1', x: 45, y: 40, title: 'Old', description: 'He got old over the years.' },
      { id: 'h10-2', x: 55, y: 30, title: 'Message', description: 'His children and grandchildren spread his message worldwide.' }
    ],
    exercises: [
      {
        id: 'ex10-1',
        type: 'true-false',
        title: 'Lessons from Adam (pbuh)',
        instructions: 'Decide if the statement is true or false.',
        question: 'Adam (pbuh) taught his children to be honest and kind.',
        correctAnswer: true,
        explanation: 'As the first Messenger, Adam (pbuh) taught his children to behave well, be honest, and remember Allah.',
        feedback: {
          correct: 'Correct! He was a great teacher for his family.',
          incorrect: 'Actually, he did teach them to be good and honest.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'quiz',
    title: 'Knowledge Check: Adam (pbuh)',
    image: 'https://picsum.photos/seed/quiz-adam/1200/800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    content: 'Test your understanding of the story of Adam (pbuh).',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        question: 'Allah created Adam (pbuh) from fire.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Allah created Adam (pbuh) from soil.',
          incorrect: 'Incorrect. Allah created Adam (pbuh) from soil, while He created Iblis from fire.'
        },
        explanation: 'Allah created Adam (pbuh) from the clay of the earth.'
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Iblis was arrogant and refused to respect Adam (pbuh).',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! Iblis thought he was better because he was made of fire.',
          incorrect: 'Actually, Iblis refused to respect Adam (pbuh) because of his pride.'
        },
        explanation: 'Arrogance led Iblis to believe he was superior to Adam (pbuh).'
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'Habil was a farmer and Qabil was a shepherd.',
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Habil was a shepherd and Qabil was a farmer.',
          incorrect: 'Actually, Habil kept animals (shepherd) and Qabil grew crops (farmer).'
        },
        explanation: 'Habil was the shepherd who offered his best sheep to Allah.'
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'Allah taught Adam (pbuh) the names of all things.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! This showed the angels the high status of Adam (pbuh).',
          incorrect: 'Actually, Allah did teach Adam (pbuh) the names of all things.'
        },
        explanation: 'Adam (pbuh) was given knowledge that even the angels did not have.'
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'Adam (pbuh) and Hawwa lived in Paradise first.',
        correctAnswer: true,
        feedback: {
          correct: 'Correct! They lived in Paradise before being sent to Earth.',
          incorrect: 'Actually, their journey began in Paradise.'
        },
        explanation: 'Paradise was their first home before the test on Earth.'
      },
      {
        id: 'q6',
        type: 'true-false',
        question: "Qabil's offering was accepted by Allah.",
        correctAnswer: false,
        feedback: {
          correct: 'Correct! Only Habil\'s offering was accepted because of his sincerity.',
          incorrect: 'Actually, Qabil\'s offering was not accepted.'
        },
        explanation: 'Allah accepts from those who are sincere and pious.'
      }
    ]
  },
  {
    id: 12,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge',
    image: 'https://picsum.photos/seed/vocab-match/1200/800',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    content: 'Match the words from the story with their correct meanings.',
    vocabularyPairs: [
      { word: 'Messenger', meaning: 'A person carrying a divine message' },
      { word: 'Arrogant', meaning: 'Thinking one is better than others' },
      { word: 'Regret', meaning: 'Feeling sorry for a mistake' },
      { word: 'Shepherd', meaning: 'A person who looks after sheep' },
      { word: 'Offering', meaning: 'An act of giving something to Allah to have his pleasure' },
      { word: 'Jealousy', meaning: 'Feeling unhappy because of others\' success' }
    ]
  },
  {
    id: 13,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    content: 'Complete these final exercises to master the lessons of Prophet Adam (pbuh).',
    exercises: adamA2FinalReviewExercises
  },
  {
    id: 14,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    content: 'A complete list of vocabulary from the first half of the story.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [
      { word: 'Messenger', definition: 'A person who carries a message from Allah.' },
      { word: 'soil', definition: 'The top layer of earth in which plants grow.' },
      { word: 'curiosity', definition: 'A strong desire to know or learn something.' },
      { word: 'respect', definition: 'A feeling of deep admiration for someone.' },
      { word: 'wiser', definition: 'Having or showing experience, knowledge, and good judgment.' },
      { word: 'jealous', definition: 'Feeling or showing envy of someone or their achievements.' },
      { word: 'arrogant', definition: 'Having an exaggerated sense of one\'s own importance or abilities.' },
      { word: 'valuable', definition: 'Extremely useful or important.' },
      { word: 'creature', definition: 'Any living thing created by Allah.' },
      { word: 'lonely', definition: 'Sad because one has no friends or company.' },
      { word: 'wonderful', definition: 'Inspiring delight, pleasure, or admiration.' },
      { word: 'warning', definition: 'A statement or event that indicates a possible or impending danger.' }
    ]
  },
  {
    id: 15,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    content: 'A complete list of vocabulary from the second half of the story.',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723',
    vocabulary: [
      { word: 'dishonesty', definition: 'The action of not telling the truth.' },
      { word: 'regret', definition: 'A feeling of sadness about a mistake.' },
      { word: 'superior', definition: 'Higher in rank, status, or quality.' },
      { word: 'crops', definition: 'A cultivated plant that is grown as food.' },
      { word: 'rule', definition: 'To exercise ultimate power or authority over an area.' },
      { word: 'planet', definition: 'A celestial body moving in an orbit around a star.' },
      { word: 'honest', definition: 'Free of deceit and untruthfulness; sincere.' },
      { word: 'behave', definition: 'Act or conduct oneself in a specified way.' },
      { word: 'enemy', definition: 'A person who is actively opposed or hostile to someone.' },
      { word: 'shepherd', definition: 'A person who tends and rears sheep.' },
      { word: 'farmer', definition: 'A person who owns or manages a farm.' },
      { word: 'offering', definition: 'A thing offered to Allah.' }
    ]
  },
  {
    id: 16,
    type: 'final-challenge',
    title: 'Final Challenge',
    content: 'Test your knowledge of the entire story of Prophet Adam (pbuh).',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fimages%2Fadam-a2_adam_a2_chapter10.png?alt=media&token=1547f902-5af2-4d83-94a6-7d0b70ca0723'
  }
];