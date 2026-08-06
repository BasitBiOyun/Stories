import { PageData } from '../../../../types';
import { meccaB1FinalReviewExercises } from './exercises';

export const meccaB1Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'The City and the Age',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch1-clean.png?alt=media&token=e13d2444-ea46-44d8-8170-383aef833b68',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=32fccb2c-133f-404e-9e6e-dab63c05bd13',
    content: `Islam started in the 7th century in the city of Mecca. The period before Islam was called the Age of Ignorance, or Jahiliyyah, because religious and social disorder was common in society. Life was hard and chaotic. There was no central government in Arabia, and tribes were the basis of society.

Before Islam, Mecca was led by a council of rich merchants. For this reason, the city was known as the Republic of Merchants. Powerful people controlled many parts of life, while poor and weak people lived in misery.

Society was not fair, and people from poor backgrounds were often treated badly. The Quran describes this period as a time of ignorance and cruelty. Violence, hatred, and fighting were common in the social life of the time.`,
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The Age of Ignorance before Islam.' },
      { word: 'chaotic', definition: 'Confused, disordered, and difficult to control.' },
      { word: 'central government', definition: 'One main authority that rules a country or region.' },
      { word: 'merchant', definition: 'A person who buys and sells goods.' },
      { word: 'misery', definition: 'Great suffering or unhappiness.' }
    ],
    hotspots: [
      { id: 'h1-1', x: 34, y: 46, title: 'Mecca', description: 'Islam started in the 7th century in the city of Mecca.' },
      { id: 'h1-2', x: 69, y: 50, title: 'Republic of Merchants', description: 'Mecca was led by a council of rich merchants, and the city was known as the Republic of Merchants.' }
    ],
    animatedWords: ['Islam', 'Mecca', 'Jahiliyyah', 'tribes', 'merchants'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'true-false',
        title: 'The City and the Age',
        instructions: 'Decide if the statement is true or false.',
        question: 'Before Islam, Mecca had a strong central government that protected everyone equally.',
        correctAnswer: false,
        explanation: 'There was no central government in Arabia, and powerful merchants controlled many parts of life in Mecca.',
        feedback: {
          correct: 'Correct! Mecca did not have a fair central government.',
          incorrect: 'Not quite. The text says there was no central government and society was not fair.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'The Age of Ignorance',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch2-clean.png?alt=media&token=30b4e38f-3e89-4444-a124-90d27e776d87',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F01_Chapter_2_The_Age_of_Ignorance.mp3?alt=media&token=294fb1a4-f413-4f58-b941-8e85e7e710c5',
    content: `The Jahiliyyah was an age of barbarism. People did not truly know Allah, and many people did not have justice, order, and peace in their personal and social lives. Prophet Muhammad (as) described Islam as the opposite of barbarism. This era ended when the first revelation of the Quran began in 610 CE.

To understand the Jahiliyyah period, we must first talk about Mecca. Mecca is the holy city of Islam. Allah chose this city to be the location of His House, the Holy Ka’ba.

Prophet Muhammad (as) was also born in Mecca. He spent 52 years of his life in this city and began to teach the message of Islam here. The Qiblah, the direction Muslims face during salah, is also located in Mecca.`,
    vocabulary: [
      { word: 'barbarism', definition: 'Cruel and uncivilized behavior.' },
      { word: 'revelation', definition: 'Allah’s message sent to a prophet.' },
      { word: 'holy', definition: 'Sacred and connected with religion.' },
      { word: 'Ka’ba', definition: 'The sacred House of Allah in Mecca.' },
      { word: 'Qiblah', definition: 'The direction Muslims face while praying.' }
    ],
    hotspots: [
      { id: 'h2-1', x: 36, y: 42, title: 'Revelation', description: 'This era ended when the first revelation of the Quran began in 610 CE.' },
      { id: 'h2-2', x: 68, y: 48, title: 'The Holy Ka’ba', description: 'Allah chose this city to be the location of His House, the Holy Ka’ba.' }
    ],
    animatedWords: ['barbarism', 'revelation', 'Ka’ba', 'Qiblah', 'salah'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'Meaning of Jahiliyyah',
        instructions: 'Choose the correct answer.',
        question: 'Why was this period called the Age of Ignorance?',
        options: [
          'Because people did not have any trade routes',
          'Because people did not truly know Allah and lacked justice and peace',
          'Because Mecca had no houses or families'
        ],
        correctAnswer: 1,
        explanation: 'The term refers to religious and moral ignorance, not simply a lack of information.',
        feedback: {
          correct: 'Correct! Jahiliyyah means a society far from true belief, justice, and peace.',
          incorrect: 'Try again. Focus on belief, justice, order, and peace.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: 'The Beginning of Mecca',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch3-clean.png?alt=media&token=07bbbc1c-3b99-40a0-bb88-ab033468083b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F02_Chapter_3_The_Beginning_of_Mecca.mp3?alt=media&token=cb81d6a2-ea78-4ac0-8ec4-dcce50223e2e',
    content: `The Quran describes Mecca as a valley where no crops grow. City life began there with the building of the Ka’ba. When Prophet Abraham (as) brought his son Ishmael (as) and his wife Hagar to the city, Zamzam water had not been discovered yet. There was no population in the land.

After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca. Ishmael (as) learned Arabic from them. Later, when Ishmael (as) grew up, Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son.

Arabs accepted the religion of Abraham (as) and Ishmael (as), so the Ka’ba became a pilgrimage site. This helped the city grow rapidly.`,
    vocabulary: [
      { word: 'valley', definition: 'Low land between mountains or hills.' },
      { word: 'crops', definition: 'Plants grown for food.' },
      { word: 'population', definition: 'The people who live in a place.' },
      { word: 'settled', definition: 'Started living permanently in a place.' },
      { word: 'pilgrimage', definition: 'A religious journey to a sacred place.' }
    ],
    hotspots: [
      { id: 'h3-1', x: 37, y: 46, title: 'Zamzam', description: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca.' },
      { id: 'h3-2', x: 66, y: 44, title: 'Abraham and Ishmael', description: 'Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son.' }
    ],
    animatedWords: ['valley', 'Zamzam', 'Jurhumites', 'Ishmael', 'pilgrimage'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'tap-reveal',
        title: 'The Beginning of Mecca',
        instructions: 'Tap to reveal the answer.',
        question: 'What helped Mecca become a settlement?',
        correctAnswer: 'The discovery of Zamzam water and the building of the Ka’ba helped Mecca become a settlement.',
        explanation: 'The text connects city life in Mecca with the Ka’ba and the later discovery of Zamzam water.',
        feedback: {
          correct: 'Correct! Zamzam and the Ka’ba were central to the beginning of Mecca.',
          incorrect: 'Think about water, settlement, and the Ka’ba.'
        },
        tapRevealItems: [
          { question: 'Beginning of settlement', answer: 'Zamzam water and the Ka’ba helped Mecca grow.' }
        ]
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'The Ka’ba and Trade',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch4-clean.png?alt=media&token=0400d1bb-ab36-40c2-9ef7-cffe6a12887f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F03_Chapter_4_The_Ka%E2%80%99ba_and_Trade.mp3?alt=media&token=9a4a3cd1-c263-4fa2-beb2-d96f6e78b22f',
    content: `After Abraham (as) completed his mission and invited people for pilgrimage, he returned to Palestine. Later, the Khuza’a tribe came to Mecca, defeated the Jurhum tribe, and took control of the city.

Under Khuza’a rule, people forgot the religion of Abraham (as) and started worshipping many idols. Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.

Because people could not farm in this dry land, they made money through trade. When Islam began, the Byzantine and Sassanid empires were powerful states. They traded with both the north and south of Arabia. India, Indonesia, and China were also important for trade because they produced many different goods.`,
    vocabulary: [
      { word: 'mission', definition: 'An important task or duty.' },
      { word: 'defeated', definition: 'Won against another group in conflict.' },
      { word: 'idol', definition: 'An object wrongly worshipped as a god.' },
      { word: 'farm', definition: 'To grow food from the land.' },
      { word: 'goods', definition: 'Products that are bought and sold.' }
    ],
    hotspots: [
      { id: 'h4-1', x: 35, y: 48, title: 'Khuza’a Rule', description: 'Under Khuza’a rule, people forgot the religion of Abraham (as) and started worshipping many idols.' },
      { id: 'h4-2', x: 69, y: 48, title: 'Trade Economy', description: 'Because people could not farm in this dry land, they made money through trade.' }
    ],
    animatedWords: ['Khuza’a', 'Quraysh', 'idols', 'trade', 'goods'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: 'Trade in Mecca',
        instructions: 'Choose the correct answer.',
        question: 'Why did trade become important in Mecca?',
        options: [
          'Because people could not farm easily in the dry land',
          'Because Mecca had many large rivers',
          'Because Quraysh stopped all caravans'
        ],
        correctAnswer: 0,
        explanation: 'The dry land around Mecca was not suitable for farming, so people depended on trade.',
        feedback: {
          correct: 'Correct! The dry land made trade very important.',
          incorrect: 'Try again. Think about why farming was difficult around Mecca.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'The Trade Routes',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch5-clean.png?alt=media&token=18da4b35-0ee7-4077-bdb5-37bde9ae581b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F04_Chapter_5_The_Trade_Routes.mp3?alt=media&token=236486a7-c3f0-415c-aabe-1584a1da8bb8',
    content: `Because Mecca was in the middle of important trade routes, it became a busy and wealthy city. From the early 6th century, Mecca became a major trading center.

Hashim ibn Abd Manaf, Prophet Muhammad’s (as) great-grandfather, helped grow Mecca’s economy. He and the Quraysh leaders made special trade agreements with other tribes and nations. These agreements allowed merchants to travel safely and trade in places like Byzantium, Yemen, Iraq, and Ethiopia.

The sacred months, Zilkade, Zilhicce, Muharram, and Rajab, made the region safer. In these months, people focused on worship, showed respect, and stayed away from fighting. Because of this safe atmosphere, more people could visit the city to make Hajj.`,
    vocabulary: [
      { word: 'route', definition: 'A way or path from one place to another.' },
      { word: 'wealthy', definition: 'Rich; having a lot of money or valuable things.' },
      { word: 'agreement', definition: 'A deal or understanding between people or groups.' },
      { word: 'merchant', definition: 'A person who buys and sells goods.' },
      { word: 'sacred months', definition: 'Special months when fighting was forbidden.' }
    ],
    hotspots: [
      { id: 'h5-1', x: 34, y: 45, title: 'Trade Routes', description: 'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.' },
      { id: 'h5-2', x: 69, y: 51, title: 'Sacred Months', description: 'The sacred months made the region safer, allowing people to focus on worship and stay away from fighting.' }
    ],
    animatedWords: ['routes', 'wealthy', 'Hashim', 'agreements', 'sacred months'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'true-false',
        title: 'Safe Trade',
        instructions: 'Decide if the statement is true or false.',
        question: 'Trade agreements helped Quraysh merchants travel more safely.',
        correctAnswer: true,
        explanation: 'The text says these agreements allowed merchants to travel safely and trade in other lands.',
        feedback: {
          correct: 'Correct! Agreements supported safe trade.',
          incorrect: 'Not quite. The agreements made travel and trade safer.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'Fairs and Wealth',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch6-clean.png?alt=media&token=574cd4f3-a81a-4074-961c-10d20a950988',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F05_Chapter_6_Fairs_and_Wealth.mp3?alt=media&token=ae9ea402-14c7-42ce-b815-42754b5c0893',
    content: `Before Islam, idol worshippers continued to visit and walk around the Ka’ba. They also ran between Safa and Marwa and stood in Arafat. These practices kept Mecca active during the pilgrimage season.

This religious activity also helped business grow quickly. Big trade fairs such as Ukaz, Majannah, and Dhul-Majaz took place during this time. People attended these fairs first and then went to Arafat.

At the beginning of the 7th century, the Quraysh tribe controlled the most important trade routes and wealth in Arabia. The Quraysh traded with gold and silver coins. In the city, lending money with usury was widespread. This made the rich richer and the poor poorer.`,
    vocabulary: [
      { word: 'fair', definition: 'A large public event where people buy and sell goods.' },
      { word: 'pilgrimage season', definition: 'The time when people visit sacred places for worship.' },
      { word: 'controlled', definition: 'Had power over something.' },
      { word: 'usury', definition: 'Unfair extra money demanded on a loan.' },
      { word: 'widespread', definition: 'Existing in many places or among many people.' }
    ],
    hotspots: [
      { id: 'h6-1', x: 35, y: 45, title: 'Trade Fairs', description: 'Big trade fairs such as Ukaz, Majannah, and Dhul-Majaz took place during this time.' },
      { id: 'h6-2', x: 68, y: 52, title: 'Usury', description: 'In the city, lending money with usury was widespread. This made the rich richer and the poor poorer.' }
    ],
    animatedWords: ['Ukaz', 'Majannah', 'Dhul-Majaz', 'usury', 'wealth'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'multiple-choice',
        title: 'Fairs and Wealth',
        instructions: 'Choose the correct answer.',
        question: 'What happened because of usury in Mecca?',
        options: [
          'The poor became richer than the merchants',
          'The rich became richer and the poor became poorer',
          'All trade routes were closed'
        ],
        correctAnswer: 1,
        explanation: 'Usury helped rich lenders make more money while poor borrowers became poorer.',
        feedback: {
          correct: 'Correct! Usury deepened the gap between rich and poor.',
          incorrect: 'Try again. Think about who benefited from unfair lending.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'Rich and Poor',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch7-clean.png?alt=media&token=a9a3fcc7-94da-405f-9142-0ca4cb17bef9',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F06_Chapter_7_Rich_and_Poor.mp3?alt=media&token=1d347a5d-ee28-40d4-8672-f9a7f85796fb',
    content: `Usury caused a big gap between social classes. Powerful people were usually merchants who lent money with usury. Many people were in debt and could not pay back their debts because of high interest. Drinking and gambling were also common, and these habits often pushed people deeper into debt.

While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive. For the wealthy Quraysh, money and tribe were the most important values.

When Prophet Muhammad (as) started calling people to Islam, some rich leaders asked why Muhammad should be the leader while they were rich and important. Orphans and weak people were treated badly, and powerful people often took their property by force.`,
    vocabulary: [
      { word: 'social class', definition: 'A group in society based on wealth, status, or power.' },
      { word: 'debt', definition: 'Money that someone must pay back.' },
      { word: 'interest', definition: 'Extra money paid when borrowing money.' },
      { word: 'struggled', definition: 'Tried very hard in a difficult situation.' },
      { word: 'orphan', definition: 'A child whose parents have died.' }
    ],
    hotspots: [
      { id: 'h7-1', x: 36, y: 46, title: 'Class Gap', description: 'While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive.' },
      { id: 'h7-2', x: 69, y: 50, title: 'Weak People', description: 'Orphans and weak people were treated badly, and powerful people often took their property by force.' }
    ],
    animatedWords: ['social classes', 'debt', 'luxury', 'orphans', 'property'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'true-false',
        title: 'Social Gap',
        instructions: 'Decide if the statement is true or false.',
        question: 'Poor and weak people were always protected by the rich leaders of Mecca.',
        correctAnswer: false,
        explanation: 'The text says orphans and weak people were treated badly and their property was sometimes taken by force.',
        feedback: {
          correct: 'Correct! Weak people were often not protected.',
          incorrect: 'Not quite. The chapter shows serious injustice against weak people.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: 'Tribal Life',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch8-clean.png?alt=media&token=9d090466-b999-4e74-8c4f-6dad15b9187a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F07_Chapter_8_Tribal_Life.mp3?alt=media&token=ea43606e-904c-4b74-a5db-8dccccf39141',
    content: `Tribes were the center of Arab society. Life in the desert was very hard, so physical strength was extremely important. Men were often seen as valuable because they were fighters in wars.

To earn respect from other tribes, families wanted to have many sons. Without a tribe, people could not easily protect their lives or property. A person outside tribal protection was in great danger.

Early Arabs were highly proud of their ancestors and remembered their names carefully. The most important rule was to work for the tribe and follow it. They had to protect and honor their tribe in every situation, even when the tribe did something wrong.`,
    vocabulary: [
      { word: 'tribe', definition: 'A large family or social group with a shared identity.' },
      { word: 'physical strength', definition: 'Power of the body.' },
      { word: 'property', definition: 'Things that belong to a person.' },
      { word: 'ancestor', definition: 'A family member who lived long ago.' },
      { word: 'honor', definition: 'Respect and good reputation.' }
    ],
    hotspots: [
      { id: 'h8-1', x: 34, y: 48, title: 'Tribal Protection', description: 'Without a tribe, people could not easily protect their lives or property; a person outside tribal protection was in great danger.' },
      { id: 'h8-2', x: 69, y: 48, title: 'Tribal Loyalty', description: 'They had to protect and honor their tribe in every situation, even when the tribe did something wrong.' }
    ],
    animatedWords: ['tribes', 'strength', 'sons', 'ancestors', 'honor'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'multiple-choice',
        title: 'Tribal Life',
        instructions: 'Choose the correct answer.',
        question: 'Why were tribes important in old Arab society?',
        options: [
          'They gave people protection and social identity',
          'They stopped all trade in Mecca',
          'They made farming easy in the desert'
        ],
        correctAnswer: 0,
        explanation: 'Tribes protected people’s lives and property and shaped social identity.',
        feedback: {
          correct: 'Correct! Tribal protection was vital in that society.',
          incorrect: 'Try again. Think about protection, identity, and safety.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'Women, Slavery and Poetry',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch9-clean.png?alt=media&token=e8e2cc9d-f78b-4ca5-a8d6-a4e96edd022c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F08_Chapter_9_Women%2C_Slavery_and_Poetry.mp3?alt=media&token=82eee9ff-3413-4199-9e68-3656564216cf',
    content: `Before Islam, the life of Arab women was very different depending on their wealth and family. Rich women, like Khadija, could run their own businesses. However, many poor women had no rights and faced unfair treatment. Some fathers were ashamed to have daughters because they wanted sons to increase their power in society.

In old Mecca, slavery was an ordinary part of the economy. Slaves faced brutal conditions and were bought and sold like animals. They did the most difficult work, and owning many slaves was a sign of wealth.

Poets were also very important in social life. Poetry kept tribal history alive, praised tribes, and criticized enemies. In those days, poets were like the media of the people.`,
    vocabulary: [
      { word: 'depending on', definition: 'Being decided or affected by something.' },
      { word: 'unfair treatment', definition: 'Behavior that is not just or equal.' },
      { word: 'brutal', definition: 'Very cruel and harsh.' },
      { word: 'poet', definition: 'A person who writes poems.' },
      { word: 'media', definition: 'Ways of sharing news, ideas, and messages.' }
    ],
    hotspots: [
      { id: 'h9-1', x: 35, y: 46, title: 'Status of Women', description: 'Before Islam, the life of Arab women was very different depending on their wealth and family.' },
      { id: 'h9-2', x: 69, y: 51, title: 'Poets as Media', description: 'Poets were very important in social life. Poetry kept tribal history alive, praised tribes, and criticized enemies.' }
    ],
    animatedWords: ['Khadija', 'rights', 'slavery', 'poets', 'media'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex9-1',
        type: 'tap-reveal',
        title: 'Poets as Media',
        instructions: 'Tap to reveal the answer.',
        question: 'Why were poets like the media of their time?',
        correctAnswer: 'They shared tribal stories, praised tribes, and criticized enemies.',
        explanation: 'Poetry carried information, memory, praise, and criticism in society.',
        feedback: {
          correct: 'Correct! Poets shaped public opinion in that society.',
          incorrect: 'Think about how poetry carried messages between people.'
        },
        tapRevealItems: [
          { question: 'Poets', answer: 'They kept history alive and spread praise or criticism.' }
        ]
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'Religious Life in Mecca',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch10-clean.png?alt=media&token=37e1354e-77f9-48ab-ae90-2903c4a46bd9',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F09_Chapter_10_Religious_Life_in_Mecca.mp3?alt=media&token=0dbde837-40f1-447b-a0b2-483c175750ef',
    content: `Before Islam, most people in Arabia worshipped idols. Only a few people followed religions like Christianity. In Mecca, most people also worshipped idols. There were 360 idols, including Lat, Manat, and Uzza. They were kept in and around the Ka’ba and in homes.

Some people, called Hanifs, followed the old religion of Abraham (as). Arab people in that period actually believed in one main God, Allah, as the Creator. However, they also worshipped many idols. They thought these idols helped them talk to Allah.

Pilgrimage to the Ka’ba was the most important religious activity in early Arabia. Life in the Age of Ignorance was also full of superstitions. People believed in kahins, or soothsayers, and checked omens before making decisions.`,
    vocabulary: [
      { word: 'idol', definition: 'An object wrongly worshipped as a god.' },
      { word: 'Hanif', definition: 'A person who followed the old religion of Abraham.' },
      { word: 'Creator', definition: 'Allah, the One who created everything.' },
      { word: 'superstition', definition: 'A false belief not based on true religion or reason.' },
      { word: 'omen', definition: 'A sign people wrongly believe can show the future.' }
    ],
    hotspots: [
      { id: 'h10-1', x: 35, y: 46, title: '360 Idols', description: 'There were 360 idols, including Lat, Manat, and Uzza. They were kept in and around the Ka’ba and in homes.' },
      { id: 'h10-2', x: 68, y: 50, title: 'Hanifs', description: 'Some people, called Hanifs, followed the old religion of Abraham (as).' }
    ],
    animatedWords: ['idols', 'Lat', 'Manat', 'Uzza', 'Hanifs'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex10-1',
        type: 'multiple-choice',
        title: 'Religious Life',
        instructions: 'Choose the correct answer.',
        question: 'What did many Arabs believe about idols?',
        options: [
          'They thought idols helped them talk to Allah',
          'They believed idols created the universe alone',
          'They believed there were no idols in Mecca'
        ],
        correctAnswer: 0,
        explanation: 'The text says they believed in Allah as Creator but wrongly used idols as mediators.',
        feedback: {
          correct: 'Correct! They saw idols as mediators, which Islam rejected.',
          incorrect: 'Try again. Look at the relationship between Allah, idols, and worship.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: 'What Islam Meant',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch11-clean.png?alt=media&token=01548bf8-fb37-480a-b3ee-2b30faa1d5db',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F10_Chapter_11_What_Islam_Meant.mp3?alt=media&token=e836e9f4-a7f0-4bb7-81f3-44ef2202bf43',
    content: `Politics, economics, and religion are connected. Beliefs shape how people live. That is why powerful groups in Mecca did not like Islam. From the beginning, Islam showed that Muslims were a new community. They were going to be different from the people around them.

In 610, Prophet Muhammad (as) started teaching Islam in Mecca. The Quraysh tribe heard his message first. Some people became Muslims. When they heard Prophet Muhammad (as) read the Quran, they were sure it was from Allah.

This message changed them deeply. It touched their hearts and minds and made them feel great respect. However, many leaders ignored the Quran and stood against the Prophet (as). Prophet Muhammad (as) taught in Mecca for 13 years, in a city with about 5,000 to 10,000 people.`,
    vocabulary: [
      { word: 'politics', definition: 'Activities related to power and ruling society.' },
      { word: 'economics', definition: 'Activities related to money, work, and trade.' },
      { word: 'community', definition: 'A group of people who share beliefs or life together.' },
      { word: 'ignored', definition: 'Refused to pay attention to something.' },
      { word: 'stood against', definition: 'Opposed or resisted something.' }
    ],
    hotspots: [
      { id: 'h11-1', x: 34, y: 48, title: 'A New Community', description: 'From the beginning, Islam showed that Muslims were a new community, different from the people around them.' },
      { id: 'h11-2', x: 68, y: 46, title: 'The Quran', description: 'The message of the Quran changed them deeply; it touched their hearts and minds and made them feel great respect.' }
    ],
    animatedWords: ['politics', 'economics', 'religion', 'Quran', 'community'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex11-1',
        type: 'true-false',
        title: 'A New Society',
        instructions: 'Decide if the statement is true or false.',
        question: 'Powerful groups in Mecca immediately welcomed Islam because it protected their wealth and idols.',
        correctAnswer: false,
        explanation: 'Powerful groups opposed Islam because it challenged their beliefs, money system, and social power.',
        feedback: {
          correct: 'Correct! Many leaders saw Islam as a threat to their power.',
          incorrect: 'Not quite. The powerful groups mostly opposed Islam.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: 'The Leaders of Quraysh',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch12-clean.png?alt=media&token=e0c57ed7-e6eb-43d2-bb7d-c3ac8a1ceb99',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F11_Chapter_12_The_Leaders_of_Quraysh.mp3?alt=media&token=33ce125f-6658-4542-ac6e-1a05e1b5a0d1',
    content: `In the first few years of the call to Islam, almost none of Mecca’s super-rich people became Muslims. The leaders of Quraysh felt that Islam was a danger to their power and did not accept it.

They were very rich, and other tribes respected them because of trade and the idols in the Ka’ba. They had high prestige, making them the prestigious caretakers of pilgrimage in the Arabian region. Keeping their power and unity was very important for them. Rich leaders turned the people against the new religion.

Islam brought serious changes. For example, Quraysh used unfair money systems like usury, but the Quran forbade this and allowed only honest trade. Islam also commanded zakat and sadaqah to help the poor. Meccan leaders tried to stop Islam from growing.`,
    vocabulary: [
      { word: 'super-rich', definition: 'Extremely wealthy.' },
      { word: 'prestigious', definition: 'Respected and admired.' },
      { word: 'caretaker', definition: 'A person responsible for looking after something.' },
      { word: 'forbade', definition: 'Did not allow; made something forbidden.' },
      { word: 'zakat', definition: 'An obligatory charity in Islam.' }
    ],
    hotspots: [
      { id: 'h12-1', x: 35, y: 46, title: 'Quraysh Leaders', description: 'The leaders of Quraysh felt that Islam was a danger to their power and did not accept it.' },
      { id: 'h12-2', x: 69, y: 50, title: 'Honest Trade', description: 'Quraysh used unfair money systems like usury, but the Quran forbade this and allowed only honest trade.' }
    ],
    animatedWords: ['Quraysh', 'prestige', 'usury', 'zakat', 'sadaqah'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex12-1',
        type: 'multiple-choice',
        title: 'Quraysh and Power',
        instructions: 'Choose the correct answer.',
        question: 'Why did many Quraysh leaders oppose Islam?',
        options: [
          'They thought Islam threatened their power, wealth, and status',
          'They wanted to give all their wealth to the poor immediately',
          'They had no connection with trade or pilgrimage'
        ],
        correctAnswer: 0,
        explanation: 'They feared losing power, wealth, prestige, and control over the old religious system.',
        feedback: {
          correct: 'Correct! Islam challenged their unfair system.',
          incorrect: 'Try again. Think about power, trade, idols, and wealth.'
        }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: 'Opposition to Islam',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch13-clean.png?alt=media&token=85709003-6a84-4c91-815c-77275b994297',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F12_Chapter_13_Opposition_to_Islam.mp3?alt=media&token=6c2ea379-8f68-4384-b707-49052ae36526',
    content: `At first, the leaders of Mecca only mocked Islam. Whenever Prophet Muhammad (as) walked by, they laughed and said that he was talking about messages from heaven. But when the Quran criticized the idols and warned against false worship, their opposition became violent.

Poor Muslims and those without powerful friends suffered the most. One of them was Bilal, an Abyssinian slave and one of the first believers in Islam. His master, Umayya, often took him out in the hot midday sun. He put a heavy rock on Bilal’s chest and ordered him to give up his religion.

The leaders of Mecca went further. Between 617 and 620, they began a social and economic boycott against Muslims and those who helped them. During this hard time, the Prophet (as), Khadija, and Abu Talib spent their money to support the Muslims.`,
    vocabulary: [
      { word: 'mocked', definition: 'Made fun of someone in an unkind way.' },
      { word: 'criticized', definition: 'Said that something was wrong.' },
      { word: 'violent', definition: 'Using physical force or cruelty.' },
      { word: 'boycott', definition: 'Refusing to trade or deal with a group as pressure.' },
      { word: 'support', definition: 'To help someone in a difficult situation.' }
    ],
    hotspots: [
      { id: 'h13-1', x: 35, y: 46, title: 'Bilal', description: 'Bilal, an Abyssinian slave, was one of the first believers. His master Umayya put a heavy rock on his chest to make him give up his religion.' },
      { id: 'h13-2', x: 69, y: 50, title: 'Boycott', description: 'Between 617 and 620, they began a social and economic boycott against Muslims and those who helped them.' }
    ],
    animatedWords: ['mocked', 'idols', 'Bilal', 'Umayya', 'boycott'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex13-1',
        type: 'tap-reveal',
        title: 'Opposition',
        instructions: 'Tap to reveal the answer.',
        question: 'Who suffered most when opposition became violent?',
        correctAnswer: 'Poor Muslims and those without powerful friends suffered the most.',
        explanation: 'The text gives Bilal as an example of a weak person who suffered for his faith.',
        feedback: {
          correct: 'Correct! Weak and poor Muslims faced the harshest pressure.',
          incorrect: 'Think about Bilal and people without protection.'
        },
        tapRevealItems: [
          { question: 'Most vulnerable people', answer: 'Poor Muslims and people without powerful protection.' }
        ]
      }
    ]
  },
  {
    id: 14,
    type: 'story',
    title: 'Boycott and Pressure',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch14-clean.png?alt=media&token=fa516cba-c5c9-4e55-996b-0d62c68ab24b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F13_Chapter_14_Boycott_and_Pressure.mp3?alt=media&token=68541084-fb07-4b4b-91d0-3ef54b281a76',
    content: `During the boycott, people had no food. Some died of hunger, and others even ate tree leaves to survive. The cries of hungry children could be heard everywhere.

Prophet Muhammad (as) continued to ask people to stop worshipping idols and follow one Allah. However, the leaders were proud of their old beliefs and did not want to change. The idols brought them money, trade, and power. Losing the idols meant losing wealth and influence, so they became hostile to Islam.

They also did not want to accept that people would be judged after death. They did not want to think about punishment for hurting people, making money unfairly, drinking alcohol, or doing other evil things. Tribal loyalty was another challenge because people feared losing their tribe’s protection.`,
    vocabulary: [
      { word: 'survive', definition: 'To stay alive in a difficult or dangerous situation.' },
      { word: 'influence', definition: 'Power to affect people or events.' },
      { word: 'hostile', definition: 'Unfriendly and aggressive.' },
      { word: 'judged', definition: 'Evaluated or held responsible for actions.' },
      { word: 'loyalty', definition: 'Strong support for a person or group.' }
    ],
    hotspots: [
      { id: 'h14-1', x: 36, y: 47, title: 'Hunger', description: 'During the boycott, people had no food. Some died of hunger, and others even ate tree leaves to survive.' },
      { id: 'h14-2', x: 68, y: 50, title: 'Fear of Change', description: 'Losing the idols meant losing wealth and influence, so the leaders became hostile to Islam.' }
    ],
    animatedWords: ['boycott', 'hunger', 'idols', 'hostile', 'loyalty'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex14-1',
        type: 'true-false',
        title: 'Pressure on Muslims',
        instructions: 'Decide if the statement is true or false.',
        question: 'The boycott caused hunger and serious suffering among Muslims and their supporters.',
        correctAnswer: true,
        explanation: 'The text says some people died of hunger and others ate tree leaves to survive.',
        feedback: {
          correct: 'Correct! The boycott was a very difficult time.',
          incorrect: 'Not quite. The chapter describes hunger and suffering during the boycott.'
        }
      }
    ]
  },
  {
    id: 15,
    type: 'story',
    title: 'Islam and Justice',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Fimages%2Fmecca_b1_ch15-clean.png?alt=media&token=0074b30e-a371-4e11-8883-aaed8756a264',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb1%2Faudio%2F14_Chapter_15_Islam_and_Justice.mp3?alt=media&token=9918c557-3749-4527-87e1-ef01cbeabc92',
    content: `In old Arab society, tribal loyalty was so strong that freedom of choice was difficult. If someone left the tribe’s way, that person could lose protection. It was almost like being stateless today. The leaders of Mecca tried to prevent members of their tribes from becoming Muslim.

The Quraysh leaders said Islam was breaking up families and destroying unity. In reality, Islam was calling people to a better form of unity based on justice, mercy, and belief in one Allah.

Before Islam, Mecca was a difficult place with much unfairness. Prophet Muhammad (as) told people to be fair, respectful, and merciful. In Islam, every person is important. Background, wealth, gender, and social power do not make one person more valuable than another. Jahiliyyah means a society without justice and mercy; Islam is the opposite because it brings peace and fairness.`,
    vocabulary: [
      { word: 'freedom of choice', definition: 'The right to choose freely.' },
      { word: 'stateless', definition: 'Without protection or belonging to a recognized group or country.' },
      { word: 'prevent', definition: 'To stop something from happening.' },
      { word: 'mercy', definition: 'Kindness and forgiveness shown to others.' },
      { word: 'fairness', definition: 'Justice and equal treatment.' }
    ],
    hotspots: [
      { id: 'h15-1', x: 34, y: 47, title: 'Freedom of Choice', description: 'In old Arab society, tribal loyalty was so strong that freedom of choice was difficult.' },
      { id: 'h15-2', x: 69, y: 48, title: 'Islam and Justice', description: 'Islam was calling people to a better form of unity based on justice, mercy, and belief in one Allah.' }
    ],
    animatedWords: ['choice', 'stateless', 'justice', 'mercy', 'fairness'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex15-1',
        type: 'multiple-choice',
        title: 'Final Message',
        instructions: 'Choose the correct answer.',
        question: 'According to the chapter, what is Islam the opposite of?',
        options: [
          'Justice and mercy',
          'Trade and travel',
          'Jahiliyyah, injustice, and cruelty'
        ],
        correctAnswer: 2,
        explanation: 'The chapter explains that Jahiliyyah means a society without justice and mercy, while Islam brings peace and fairness.',
        feedback: {
          correct: 'Correct! Islam stands against Jahiliyyah, injustice, and cruelty.',
          incorrect: 'Try again. Think about the contrast between Jahiliyyah and Islam.'
        }
      }
    ]
  },
  {
    id: 16,
    type: 'quiz',
    title: 'Knowledge Check: Mecca Before Islam - B1',
    image: 'https://picsum.photos/seed/quiz-mecca-b1/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the B1 story on Mecca before Islam, Jahiliyyah, social systems, and religious life through these analytical true-false questions.',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        question: 'The Age of Ignorance (Jahiliyyah) was a state of moral and social disorder, rather than simple illiteracy.',
        correctAnswer: true,
        explanation: 'Jahiliyyah refers to a systemic lack of moral law, tribal conflict, and social injustice, not just a lack of reading and writing.',
        feedback: {
          correct: 'Correct! It was a systemic moral and spiritual vacuum.',
          incorrect: 'Actually, Jahiliyyah represents social and moral disorder rather than simple illiteracy.'
        }
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Prior to Islam, the Ka’ba was dedicated solely to the worship of one God, as established by Abraham.',
        correctAnswer: false,
        explanation: 'Before the rise of Islam, the Ka’ba was surrounded by over 360 idols representing polytheism, drifting far from Abraham’s monotheism.',
        feedback: {
          correct: 'Correct! It had become a center for idol worship.',
          incorrect: 'Actually, the Ka’ba was filled with over 360 idols before the advent of Islam.'
        }
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'The Quraysh built their immense wealth primarily through agricultural farming in the fertile valleys of Mecca.',
        correctAnswer: false,
        explanation: 'Mecca was a barren valley; the Quraysh built their wealth through major regional caravan trade and trade fairs.',
        feedback: {
          correct: 'Correct! Caravan commerce was the economic backbone of Mecca.',
          incorrect: 'Actually, Mecca was a barren desert; they succeeded through caravan trade, not agriculture.'
        }
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'The early believers and Hanifs rejected the prevailing polytheism and sought the pure monotheism of Prophet Abraham.',
        correctAnswer: true,
        explanation: 'Hanifs and early Muslims rejected idolatry and maintained that there is only one Creator, following Abraham’s path.',
        feedback: {
          correct: 'Correct! They rejected idolatry for absolute monotheism.',
          incorrect: 'Actually, Hanifs and early believers did reject polytheism.'
        }
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'The leaders of the Quraysh opposed Islam primarily because its message of ultimate equality threatened their socio-economic dominance.',
        correctAnswer: true,
        explanation: 'The Quraysh leaders feared losing their trade privileges, control over the Ka’ba, and their social power over slaves and weak classes.',
        feedback: {
          correct: 'Correct! Islam’s social justice directly challenged their power structure.',
          incorrect: 'Actually, they opposed Islam because it challenged their socio-economic and political hierarchy.'
        }
      },
      {
        id: 'q6',
        type: 'true-false',
        question: 'The Prophet Muhammad (pbuh) expressed deep love for Mecca and stated that he would never have left if his people had not forced him.',
        correctAnswer: true,
        explanation: 'Prophet Muhammad (pbuh) loved Mecca deeply as his birthplace and home, migrating only because of severe persecution.',
        feedback: {
          correct: 'Correct! He migrated to Medina due to compulsion and divine instruction, despite his intense love for Mecca.',
          incorrect: 'Actually, he expressed his deep love for Mecca in several narrations.'
        }
      }
    ]
  },
  {
    id: 17,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/mecca-b1-exercises/1200/800',
    content: 'Complete these final advanced exercises to master the lessons of Mecca and the early days of Islam.',
    exercises: meccaB1FinalReviewExercises
  },
  {
    id: 18,
    type: 'glossary',
    title: 'B1 Master Glossary - Part 1',
    content: 'Academic and narrative vocabulary from the first half of the story.',
    image: 'https://picsum.photos/seed/mecca-b1-glossary1/1200/800',
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The pre-Islamic Age of Ignorance, marked by lawlessness, moral decay, and tribal rivalry.' },
      { word: 'reconstructed', definition: 'To rebuild something after it has been damaged or destroyed.' },
      { word: 'barren', definition: 'A land too poor to produce much or any vegetation; sterile.' },
      { word: 'caravan', definition: 'A group of people, especially merchants or pilgrims, traveling together across a desert.' },
      { word: 'pilgrimage', definition: 'A journey to a sacred place for religious purposes.' },
      { word: 'protection', definition: 'The state of being kept safe from harm or injury; tribal defense.' },
      { word: 'usury', definition: 'The practice of lending money at unreasonably high rates of interest.' },
      { word: 'prestige', definition: 'Widespread respect and admiration felt for someone based on their achievements or status.' },
      { word: 'monotheism', definition: 'The doctrine or belief that there is only one God.' },
      { word: 'revelation', definition: 'The divine transmission of guidance or truth from Allah to His prophets.' },
      { word: 'stewards', definition: 'Those appointed to manage or supervise a sacred site, resource, or society.' },
      { word: 'commercial', definition: 'Concerned with or engaged in commerce, trade, and financial gain.' }
    ]
  },
  {
    id: 19,
    type: 'glossary',
    title: 'B1 Master Glossary - Part 2',
    content: 'Academic and narrative vocabulary from the second half of the story.',
    image: 'https://picsum.photos/seed/mecca-b1-glossary2/1200/800',
    vocabulary: [
      { word: 'boycott', definition: 'To withdraw from commercial or social relations with a group as a punishment or protest.' },
      { word: 'isolation', definition: 'The complete separation from others, both socially and economically.' },
      { word: 'persecution', definition: 'Hostility and ill-treatment, especially because of race or political or religious beliefs.' },
      { word: 'oppression', definition: 'Prolonged cruel or unjust treatment or control.' },
      { word: 'equality', definition: 'The state of being equal, especially in status, rights, and opportunities.' },
      { word: 'hospitality', definition: 'The friendly and generous reception and entertainment of guests, visitors, or strangers.' },
      { word: 'lineage', definition: 'Ancestral pedigree or tribal family tree; highly valued in Arabia.' },
      { word: 'customs', definition: 'Traditional practices and widely accepted ways of behaving in a particular society.' },
      { word: 'Hanif', definition: 'A person who maintained the monotheism of Abraham in pre-Islamic times.' },
      { word: 'idols', definition: 'Statues, icons, or material representations worshipped as deities.' },
      { word: 'Fajr', definition: 'The dawn prayer, the first of the five daily prayers of Islam.' },
      { word: 'sanctuary', definition: 'A holy place; a place of safety and religious refuge.' }
    ]
  },
  {
    id: 20,
    type: 'final-challenge',
    title: 'B1 Final Challenge',
    content: 'Demonstrate your comprehensive mastery of the Story of Mecca Before Islam at the B1 level.',
    image: 'https://picsum.photos/seed/mecca-b1-final-challenge/1200/800',
    exercises: [
      {
        id: 'fc1',
        type: 'multiple-choice',
        question: 'Why was the pre-Islamic era called the Age of Ignorance (Jahiliyyah)?',
        options: ['Due to a lack of trade routes', 'Due to systemic moral and spiritual disorder rather than simple illiteracy', 'Because they had no agricultural knowledge'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! It was a spiritual and moral void.', incorrect: 'Try again.' }
      },
      {
        id: 'fc2',
        type: 'multiple-choice',
        question: 'Who rebuilt the Ka’ba originally according to Islamic historical tradition?',
        options: ['The Khuza’a tribe', 'Prophets Abraham and Ishmael (AS)', 'The Quraysh merchants'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! They laid the monotheistic foundations of the Ka’ba.', incorrect: 'Try again.' }
      },
      {
        id: 'fc3',
        type: 'multiple-choice',
        question: 'Why did trade become the primary economic focus of Mecca?',
        options: ['Mecca had zero taxes', 'Mecca was located in a barren, sterile desert valley unsuitable for farming', 'The Roman Empire forced them to trade'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Lack of agriculture compelled trade.', incorrect: 'Try again.' }
      },
      {
        id: 'fc4',
        type: 'multiple-choice',
        question: 'What crucial structural role did the "four sacred months" play in Pre-Islamic Arabia?',
        options: ['They were only for agricultural harvesting', 'They provided a peaceful season of safety for pilgrimage, markets, and regional trade', 'They were months when caravans were banned'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The sacred months secured trade and worship safety.', incorrect: 'Try again.' }
      },
      {
        id: 'fc5',
        type: 'multiple-choice',
        question: 'How did usury affect Mecca’s social fabric?',
        options: ['It eliminated all poverty', 'It trapped the debtors in a destructive loop, widening the gap between rich and poor', 'It offered free loans and charity'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! High interest deepened socio-economic divisions.', incorrect: 'Try again.' }
      },
      {
        id: 'fc6',
        type: 'multiple-choice',
        question: 'Why were male sons highly valued in pre-Islamic tribal life?',
        options: ['They increased the offensive and defensive military power of the tribe', 'They were better poets and historians', 'Only sons were allowed inside the Ka’ba'],
        correctAnswer: 0,
        feedback: { correct: 'Correct! Defensive strength was life or death in tribal lands.', incorrect: 'Try again.' }
      },
      {
        id: 'fc7',
        type: 'multiple-choice',
        question: 'Who were the Hanifs in pre-Islamic Arabia?',
        options: ['Taxes officers sent by the Byzantine Empire', 'Individuals who rejected polytheism and followed the monotheist path of Abraham', 'Caravan guards hired by Quraysh'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Hanifs kept monotheistic principles alive.', incorrect: 'Try again.' }
      },
      {
        id: 'fc8',
        type: 'multiple-choice',
        question: 'Why did the Quraysh elites aggressively oppose the Prophet’s message of Islam?',
        options: ['Because Islam wanted to relocate the Ka’ba', 'Because they feared monotheism and equal social justice would shatter their economic and political power', 'Because Islam banned all trade caravans'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Pagan rituals and high-interest loans were core to their power.', incorrect: 'Try again.' }
      },
      {
        id: 'fc9',
        type: 'multiple-choice',
        question: 'What was the immediate impact of the Quraysh boycott (617-620) on early Muslims?',
        options: ['It generated massive trade wealth', 'It caused extreme hunger, starvation, and strict isolation in the mountain defiles', 'It resulted in immediate peaceful diplomacy'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The boycott was a brutal tool of economic pressure.', incorrect: 'Try again.' }
      },
      {
        id: 'fc10',
        type: 'multiple-choice',
        question: 'What is the overriding moral lesson of the Mecca narrative?',
        options: ['That we should only focus on accumulation of physical trade', 'That monotheism, social justice, and equal human dignity replace the tyranny of tribal paganism', 'That ancient customs can never be changed'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The narrative contrasts Jahiliyyah with prophetic justice.', incorrect: 'Try again.' }
      }
    ]
  }
];
