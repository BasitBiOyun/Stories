import { PageData } from '../../../../types';
import { yunusB1FinalReviewExercises } from './exercises';

export const yunusB1Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: 'Yunus Emre and Sûfîsm',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch1.png?alt=media&token=b93c35e6-d0dd-4676-bdce-33b2daf8466b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=8374c2f7-3dc6-480b-ae3b-3b0145c6f071',
    content: `Yunus Emre was a famous Turkish poet and a Sûfî from Anatolia. Sûfî is a person who aims to get closer to Allah by following Islamic mysticism. Sûfis lead a way of life within the outer (visible) and inner rules of Islam. The outer part is related to the body's acts of worship, while the inner side refers to the heart's intentions and morality.

Sûfis follow moral principles such as seeking to improve and become better people, being patient in times of need, giving generously without expecting anything in return, doing good to everyone without biases, responding to evil with kindness, and not attaching importance to worldly matters such as wealth, status, and fame.

In addition to being a Sûfî, Yunus Emre was one of the first to write and say poems in simple Turkish. The words and phrases which he used helped develop a better literary Turkish. Yunus Emre is known as one of the founders of Turkish Sûfî literature.`,
    vocabulary: [
      { word: 'is related to', definition: 'has a connection with something' },
      { word: 'refers to', definition: 'means or points to something' },
      { word: 'in return', definition: 'as a reward or response' },
      { word: 'biases', definition: 'unfair opinions about people' },
      { word: 'responding to', definition: 'answering or reacting to something' },
      { word: 'Islamic mysticism', definition: 'a spiritual path in Islam focusing on the inner, mystical dimension of the faith (Turkish: Tasavvuf)' },
      { word: 'literary', definition: 'related to literature and writing of high artistic value (Turkish: edebî)' }
    ],
    hotspots: [
      { id: 'h1-1', x: 35, y: 45, title: 'Sûfîsm', description: 'A Sûfî aims to get closer to Allah by leading a way of life within the outer rules of worship and inner rules of heart morality.' },
      { id: 'h1-2', x: 68, y: 52, title: 'Moral Principles', description: 'Sûfis follow moral principles like being patient, giving generously, responding to evil with kindness, and not attaching importance to worldly wealth.' }
    ],
    animatedWords: ['is related to', 'refers to', 'in return', 'biases', 'responding to', 'phrases', 'Islamic mysticism', 'literary'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'multiple-choice',
        title: 'Yunus Emre and Sûfîsm',
        instructions: 'Choose the correct answer.',
        question: 'What is a Sûfî?',
        options: [
          'A person who seeks closeness to Allah',
          'A person who only studies trade',
          'A ruler of Anatolia'
        ],
        correctAnswer: 0,
        explanation: 'A Sûfî is a person who aims to get closer to Allah by following Islamic mysticism (Tasavvuf).',
        feedback: {
          correct: 'Correct! A Sûfî seeks closeness to Allah through physical worship and heart purity.',
          incorrect: 'Incorrect. Try again! Remember, Sûfîsm is an Islamic spiritual path focusing on devotion to Allah rather than rulers or trade.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: 'His Language and Education',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch2.png?alt=media&token=2c28d0bc-45f8-4349-9f30-214105c165cd',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F01_Chapter_2_His_Language_and_Education.mp3?alt=media&token=34d1568e-fb36-486e-914f-61928ab3bc20',
    content: `People love his works very much due to his style. It is not too simple, but also not too complex either. His works are very popular because they combine great literary quality with simple language. This plain language helps people understand his writings and sayings easily. Philosophy in his poems includes important moral principles that still have a significant influence on Turkish culture and society.

According to historical sources, he lived during the same era as important people like Hacı Bektaş-ı Veli and Mevlana Celaleddin Rumi. He was born around 1240–1241 and died around 1320–1321. Some sources say that he received a good madrasa education and had a strong knowledge of Arabic, Persian, and the Islamic sciences of his time. But he also studied Allah’s love and morals at the tekke, which was a place where Sûfî education was taught under the guidance of a sheikh (spiritual tutor).`,
    vocabulary: [
      { word: 'due to', definition: 'because of' },
      { word: 'either', definition: 'also used in negative statements' },
      { word: 'plain', definition: 'simple and easy to understand' },
      { word: 'includes', definition: 'has something as a part' },
      { word: 'era', definition: 'a period of history' },
      { word: 'Allah’s love', definition: 'a deep spiritual love for the Creator (Turkish: ilâhî aşk)' },
      { word: 'sheikh', definition: 'a spiritual teacher or leader in Sûfîsm (Turkish: şeyh)' }
    ],
    hotspots: [
      { id: 'h2-1', x: 35, y: 45, title: 'Simple Language', description: 'Yunus’s works are very popular because they combine great literary quality with plain language, helping people understand his writings easily.' },
      { id: 'h2-2', x: 68, y: 52, title: 'Education', description: 'Yunus received a good madrasa education, but he also studied Allah’s love and morals at the tekke under a sheikh.' }
    ],
    animatedWords: ['due to', 'either', 'plain', 'includes', 'era', 'received', 'spiritual tutor', 'Allah’s love', 'sheikh'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: 'His Language and Education',
        instructions: 'Choose the correct answer.',
        question: 'Why do people love Yunus Emre’s works?',
        options: [
          'Because his language combines quality and clarity',
          'Because he wrote only in Arabic',
          'Because he lived in a palace'
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre\'s poems are popular because they combine great literary quality with plain, simple Turkish, making deep spiritual truths easy to understand.',
        feedback: {
          correct: 'Correct! His simple and clear style made profound spiritual messages easy for everyone to grasp.',
          incorrect: 'Incorrect. Try again! Yunus Emre is known for using simple and accessible language, not writing in palaces or only in Arabic.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: 'Tekkés and Anatolia',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch3.png?alt=media&token=054d4f52-f652-4def-aaed-83ab7cd03be3',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F02_Chapter_3_Tekk%C3%A9s_and_Anatolia.mp3?alt=media&token=682bf6e3-309d-4d12-9672-3a2e89a0419e',
    content: `At that time, tekkes were not only places for Sûfî training. They were also important community organizations that helped people and brought them together. Furthermore, they received support from government officials. These places were very important for fine arts too, especially poetry. Many famous Turkish poets improved their skills in tekkes. Yunus Emre was also a great poet who trained under his spiritual tutor, Taptuk Emre.

Yunus Emre lived during the 13th and 14th centuries, which was a very difficult time in Anatolia. The Anatolian Seljuks were seriously weakened by the Babai revolts in the 13th century. While the negative effects of these revolts were still being felt, the defeat at Kösedağ took place. The defeat caused the Mongols' invasion of Anatolia. Because of these hard circumstances, Anatolia faced serious political, economic, and social problems. People were struggling to cope with these tough situations.`,
    vocabulary: [
      { word: 'training', definition: 'learning and practice for a skill or way of life' },
      { word: 'fine arts', definition: 'arts such as poetry, music, and painting' },
      { word: 'revolts', definition: 'rebellions against authority' },
      { word: 'defeat', definition: 'loss in a battle or struggle' },
      { word: 'caused', definition: 'made something happen' }
    ],
    hotspots: [
      { id: 'h3-1', x: 35, y: 45, title: 'Tekkés', description: 'Tekkes were places for Sûfî training, but also important community organizations that helped people and supported fine arts, especially poetry.' },
      { id: 'h3-2', x: 68, y: 52, title: 'Difficult Times', description: 'The 13th and 14th centuries were a very difficult time in Anatolia due to the Babai revolts and the Mongol invasion.' }
    ],
    animatedWords: ['training', 'fine arts', 'revolts', 'defeat', 'caused', 'circumstances', 'cope with', 'tough'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'true-false',
        title: 'Tekkés and Anatolia',
        instructions: 'Decide if the statement is true or false.',
        question: 'Tekkés were important places for Sûfî training and fine arts.',
        correctAnswer: true,
        explanation: 'Tekkes served as community organizations and centers for Sûfî education, spiritual training, social support, and fine arts like poetry.',
        feedback: {
          correct: 'Correct! Tekkes were central to both spiritual development and classical Sufi arts like poetry.',
          incorrect: 'Incorrect. Actually, tekkes played a vital role in community support, Sûfî education, and training poets and artists.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: 'The Babai Revolts',
    image: 'https://picsum.photos/seed/yunus-b1-chapter4/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F03_Chapter_4_The_Babai_Revolts.mp3?alt=media&token=35484302-b0f7-4108-8c31-de80109de40f',
    content: `If we take a closer look at this historical atmosphere, we can better understand Anatolia—the land where Yunus Emre lived and recited his unforgettable verses.

The rule of the Anatolian Seljuk Sultan Alaeddin I (1220–1237) was the most powerful and brilliant period of the Seljuks. He expanded the country’s borders and established a navy in the Mediterranean and Black Seas. At the time of his death, the Seljuks were the most powerful and largest state in the Middle East. However, because of the poor governance of his son, Giyaseddin Keyhüsrev II (1237–1246), the Seljuk economic and social structure began to decline. The Mongol invasion caused many people to migrate to Anatolia from Central Asia, which totally turned the lives of the local people upside down. At the beginning of the 13th century, the Turkmen population grew in Anatolia. However, Giyaseddin Keyhüsrev II’s failure to manage this situation worsened the social and economic chaos.`,
    vocabulary: [
      { word: 'recited', definition: 'said aloud, especially poetry' },
      { word: 'verses', definition: 'lines of poetry (Turkish: dize)' },
      { word: 'brilliant', definition: 'excellent or very impressive' },
      { word: 'expanded', definition: 'made larger' },
      { word: 'navy', definition: 'a country’s military force at sea' }
    ],
    hotspots: [
      { id: 'h4-1', x: 35, y: 45, title: 'Seljuk Anatolia', description: 'Under Sultan Alaeddin I, the Seljuks were very powerful, but poor governance under his son led to economic and social decline.' },
      { id: 'h4-2', x: 68, y: 52, title: 'Babai Revolts', description: 'The Mongol invasion forced many people to migrate to Anatolia, which turned the lives of local people upside down and created chaos.' }
    ],
    animatedWords: ['recited', 'verses', 'brilliant', 'expanded', 'navy', 'governance', 'decline', 'upside down', 'failure', 'manage'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: 'The Babai Revolts',
        instructions: 'Choose the correct answer.',
        question: 'What happened after poor governance and migrations?',
        options: [
          'Social and economic chaos worsened',
          'Anatolia became completely peaceful',
          'The Mongols left Anatolia'
        ],
        correctAnswer: 0,
        explanation: 'Due to Giyaseddin Keyhüsrev II\'s poor governance and the large influx of refugees fleeing the Mongols, social and economic chaos in Anatolia worsened considerably.',
        feedback: {
          correct: 'Correct! Under Giyaseddin Keyhüsrev II\'s misrule, social and economic structures suffered under massive migration pressures.',
          incorrect: 'Incorrect. Look at the text: Giyaseddin Keyhüsrev II\'s failure to manage Turkmen migration worsened the social and economic chaos.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: 'Kösedağ and Destruction',
    image: 'https://picsum.photos/seed/yunus-b1-chapter5/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F04_Chapter_5_K%C3%B6seda%C4%9F_and_Destruction.mp3?alt=media&token=e36afa71-bbf1-4895-bc30-87baf97a40bb',
    content: `Because of many economic and social problems, the Turkmen people were looking for a way out and started a revolt against the state. They followed spiritual leaders called 'Baba', because they believed these leaders would save them. The rebellion spread rapidly; the Turkmen achieved significant success. In the end, the Seljuk forces put an end to the rebellion with great difficulty and defeated the rebels with swords.

However, this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire. In 1242, the Mongols captured Erzurum and killed its people. This disaster caused deep sorrow and fear among the Seljuk people. Finally, in 1243, the Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. The Mongols used the classic false retreat and circling tactic. Thus, they easily defeated the Seljuks. After that, the Mongols destroyed and raided Sivas, Kayseri, and Erzincan, leaving not a single stone standing.`,
    vocabulary: [
      { word: 'a way out', definition: 'a solution to a difficult problem' },
      { word: 'achieved', definition: 'succeeded in doing something' },
      { word: 'put an end to', definition: 'stopped something completely' },
      { word: 'defeated', definition: 'won against someone' },
      { word: 'captured', definition: 'took control of a place' }
    ],
    hotspots: [
      { id: 'h5-1', x: 35, y: 45, title: 'Kösedağ', description: 'At the Battle of Kösedağ in 1243, the Mongols used a false retreat and circling tactic to easily defeat the Seljuk army.' },
      { id: 'h5-2', x: 68, y: 52, title: 'Mongol Destruction', description: 'After their victory, the Mongols destroyed and raided Sivas, Kayseri, and Erzincan, leaving not a single stone standing.' }
    ],
    animatedWords: ['a way out', 'achieved', 'put an end to', 'defeated', 'captured', 'sorrow', 'clashed', 'false retreat and circling tactic', 'raided'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: 'Kösedağ and Destruction',
        instructions: 'Choose the correct answer.',
        question: 'What happened at Kösedağ?',
        options: [
          'The Mongols defeated the Seljuks',
          'Yunus became a ruler',
          'The Ka’ba was rebuilt'
        ],
        correctAnswer: 0,
        explanation: 'In the Battle of Kösedağ (1243), the Mongols used their false retreat and circling tactic to easily defeat the weakened Seljuks, leading to the destruction of major cities like Sivas and Kayseri.',
        feedback: {
          correct: 'Correct! The Mongols decisively defeated the Seljuks at Kösedağ, marking the breakdown of Seljuk authority.',
          incorrect: 'Incorrect. Try again! The Battle of Kösedağ was a massive disaster where the Seljuks suffered a heavy defeat by the Mongols.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: 'Chaos in Anatolia',
    image: 'https://picsum.photos/seed/yunus-b1-chapter6/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F05_Chapter_6_Chaos_in_Anatolia.mp3?alt=media&token=d8eaa69b-4531-4735-803e-551ea619d357',
    content: `The men were killed with swords. The women and children were taken captive and forced to go with the Mongols. They caused a lot of destruction, sadness, and misery everywhere they went. After these cruel raids, cities were deserted. Yunus Emre lived during a time when the Mongol army invaded Anatolia.

These events created an atmosphere of panic in Anatolia that had never been seen before. Finally, an agreement was made with the Mongols, but in time the Seljuks became dependent on them. The Seljuk sultans acted almost like government officials for the Mongols. A significant part of state income began to be sent to the Mongols every year. However, this tax increased continuously and this made both the state and the people poorer. After 1277, the Mongols began to administer Anatolia through the commanders and governors that they sent. And in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire (The Mongol state centred in Iran).`,
    vocabulary: [
      { word: 'captive', definition: 'held as a prisoner' },
      { word: 'deserted', definition: 'empty because people left' },
      { word: 'dependent', definition: 'needing another power or person' },
      { word: 'income', definition: 'money received' },
      { word: 'tax', definition: 'money paid to a ruler or state' }
    ],
    hotspots: [
      { id: 'h6-1', x: 35, y: 45, title: 'Chaos', description: 'Mongol raids caused destruction and panic, making cities deserted and forcing the Seljuks to become dependent on them.' },
      { id: 'h6-2', x: 68, y: 52, title: 'Ilkhanate Pressure', description: 'The Mongols administered Anatolia through governors after 1277, and directly attached the lands to the Ilkhanate Empire in 1308.' }
    ],
    animatedWords: ['captive', 'deserted', 'dependent', 'income', 'tax', 'attached to'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'true-false',
        title: 'Chaos in Anatolia',
        instructions: 'Decide if the statement is true or false.',
        question: 'The Seljuks became dependent on the Mongols in time.',
        correctAnswer: true,
        explanation: 'Following their defeat and subsequent agreements, the Seljuk sultans became dependent on the Mongols, virtually acting as their officials, until Anatolia was directly annexed in 1308.',
        feedback: {
          correct: 'Correct! The Seljuk state lost its independence and had to send heavy annual taxes to the Mongols.',
          incorrect: 'Incorrect. The text confirms that over time, the Seljuks became dependent on the Mongols, who eventually administered Anatolia directly.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: 'Yunus as a Wise Dervish',
    image: 'https://picsum.photos/seed/yunus-b1-chapter7/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F06_Chapter_7_Yunus_as_a_Wise_Dervish.mp3?alt=media&token=b49d99a5-9f7c-4fc0-9cc5-f2ad927740cf',
    content: `Anatolia was experiencing total chaos. During the same period, the shaykhs from the regions of Turkestan, Khorasan and Iran came to Anatolia under Mongol pressure. These shaykhs trained dervishes on their teachings. These dervishes were influential among nomads. They were spreading a simple understanding of Islam and establishing popular Sûfîsm.

So in such an environment, Yunus Emre also appeared as a wise Sûfî / dervish and travelled around Anatolia. He tried to respond to people’s efforts to make sense of life in hard days with his Sûfî identity. Poetry was his most influential tool.

Yunus’s understanding of Sûfîsm comes from the Qur’an and the Prophet's Sunnah. He was also inspired by the ideas and experiences of earlier Muslim Sûfîs.`,
    vocabulary: [
      { word: 'trained', definition: 'taught or prepared someone' },
      { word: 'nomads', definition: 'people who move from place to place' },
      { word: 'appeared', definition: 'came into view or became known' },
      { word: 'respond', definition: 'answer or react' },
      { word: 'tool', definition: 'something used to do a job' },
      { word: 'shaykhs', definition: 'spiritual teachers or leaders in Sûfîsm (Turkish: şeyh)' },
      { word: 'Prophet’s Sunnah', definition: 'the sayings, actions, and approvals of the Prophet Muhammad (Turkish: Sünnet)' }
    ],
    hotspots: [
      { id: 'h7-1', x: 35, y: 45, title: 'Wise Dervish', description: 'Shaykhs came to Anatolia under Mongol pressure and trained dervishes, spreading a simple understanding of popular Sûfîsm.' },
      { id: 'h7-2', x: 68, y: 52, title: 'Poetry as a Tool', description: 'Yunus traveled around Anatolia to help people make sense of life in hard days, using poetry as his most influential tool.' }
    ],
    animatedWords: ['trained', 'nomads', 'appeared', 'respond', 'tool', 'inspired', 'shaykhs', 'Prophet’s Sunnah'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: 'Yunus as a Wise Dervish',
        instructions: 'Choose the correct answer.',
        question: 'How did Yunus respond to hard times?',
        options: [
          'Through Sûfî identity and poetry',
          'By becoming a soldier',
          'By leaving poetry forever'
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre responded to the suffering and confusion of his people through his Sûfî identity and by using poetry as a powerful tool to spread comfort and spiritual meaning.',
        feedback: {
          correct: 'Correct! He used his poetry and spiritual insight to help people cope with the devastation of the Mongol invasions.',
          incorrect: 'Incorrect. Try again! The text highlights that Yunus responded with his Sûfî identity and used poetry as his most influential tool.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: '**Tawhid** and Unity',
    image: 'https://picsum.photos/seed/yunus-b1-chapter8/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F07_Chapter_8_Tawhid_and_Unity.mp3?alt=media&token=932781cc-7bbf-4405-b629-4aa82c526406',
    content: `In his poems, he expresses a vivid love for Allah as a way of life, along with fear of Allah and loyalty to the Prophet Muhammad (pbuh).

One of the most important basic spiritual principles in his works is the idea of **Tawhid** which means the Oneness of Allah. According to Yunus Emre, the Creator, Allah is the source of all things. So everything is connected to Him. Creator is the true and only reality. According to the theory of the unity of existence, which was a key idea for Yunus Emre, there is only one true existence in the universe, and that is Allah.

Yunus says:

[POEM]
English:
“The entire universe is **Tawhid**; Adam is the one who knows **Tawhid**.
Whoever denies this **Tawhid** is an enemy to his own soul.”
Turkish:
Tevhîd imiş cümle âlem, tevhîdi bilendir Âdem
Bu tevhîdi inkâr iden öz cânına düşmânımış
[/POEM]`,
    vocabulary: [
      { word: 'vivid', definition: 'very clear and strong' },
      { word: 'loyalty', definition: 'faithfulness and strong support' },
      { word: 'true and only reality', definition: 'the real and ultimate truth' },
      { word: 'the unity of existence', definition: 'the idea that true existence belongs to Allah (Turkish: vahdet-i vücut)' },
      { word: 'existence', definition: 'the state of being real or alive' }
    ],
    hotspots: [
      { id: 'h8-1', x: 35, y: 45, title: 'Tawhid', description: 'Tawhid means the Oneness of Allah. Yunus teaches that Allah is the source of all things, and everything is connected to Him.' },
      { id: 'h8-2', x: 68, y: 52, title: 'Unity', description: 'According to vahdet-i vücut (the unity of existence), there is only one true existence in the universe, and that is Allah.' }
    ],
    animatedWords: ['vivid', 'loyalty', 'true and only reality', 'the unity of existence', 'existence'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'true-false',
        title: 'Tawhid and Unity',
        instructions: 'Decide if the statement is true or false.',
        question: '**Tawhid** means the Oneness of Allah.',
        correctAnswer: true,
        explanation: '**Tawhid** is the foundational Islamic belief in the absolute Oneness of Allah, whom Yunus Emre describes as the source of all things and the single ultimate reality in the universe.',
        feedback: {
          correct: 'Correct! **Tawhid** represents the Oneness of Allah, a central theme in Yunus Emre\'s poems.',
          incorrect: 'Incorrect. **Tawhid** is the fundamental term in Islam referring explicitly to the absolute Oneness and unity of Allah.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: 'Allah’s Commands',
    image: 'https://picsum.photos/seed/yunus-b1-chapter9/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F08_Chapter_9_Allah%E2%80%99s_Commands.mp3?alt=media&token=413b5ace-3eda-4ea1-a34d-f88cfc62ae28',
    content: `As a result of creation, the original unity lost its unity and multiple existence appeared. All creations in the world are just reflections of Allah’s names. In this way, every creature is an image, but only Allah is truly real. The main goal for humans is to reach unity with Allah.

His words remind us of Allah’s commands for achieving this unity.

Yunus says:

[POEM]
English:
“Anyone who claims to be a Muslim should know the requirements of Islam,
He should follow Allah’s command and pray the five daily prayers”
Turkish:
Müslümanım diyen kişi şartı nedir bilse gerek
Tanrı'nın buyruğun tutup beş vakit namaz kılsa gerek
[/POEM]

Love is a very important theme in Yunus Emre’s works. It is the most important part of his philosophy. Those who love the Creator love the created, and those who love the created also love the Creator.`,
    vocabulary: [
      { word: 'original unity', definition: 'the first state of oneness (Turkish: vahdet)' },
      { word: 'multiple existence', definition: 'many created beings or forms (Turkish: kesret)' },
      { word: 'requirements', definition: 'things that are necessary' }
    ],
    hotspots: [
      { id: 'h9-1', x: 35, y: 45, title: 'Allah’s Commands', description: 'Yunus reminds Muslims to follow Allah’s command and pray the five daily prayers as a requirement of Islam.' },
      { id: 'h9-2', x: 68, y: 52, title: 'Love', description: 'Love lies at the core of his philosophy: those who love the Creator must also love the created, and vice-versa.' }
    ],
    animatedWords: ['original unity', 'multiple existence', 'requirements'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex9-1',
        type: 'multiple-choice',
        title: 'Allah’s Commands',
        instructions: 'Choose the correct answer.',
        question: 'What does Yunus remind Muslims to do?',
        options: [
          'Follow Allah’s command and pray',
          'Ignore worship',
          'Seek only wealth'
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre explicitly asserts that Muslims must follow Allah\'s command, fulfill the requirements of Islam, and establish their five daily prayers to achieve spiritual discipline and unity.',
        feedback: {
          correct: 'Correct! Fulfilling the five daily prayers on time is emphasized by Yunus as an essential requirement to follow Allah\'s commands.',
          incorrect: 'Incorrect. Try again! Yunus reminds and encourages Muslims to pray and obey Allah\'s commands as the basis of the faith.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: 'The Heart and Love',
    image: 'https://picsum.photos/seed/yunus-b1-chapter10/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F09_Chapter_10_The_Heart_and_Love.mp3?alt=media&token=9e3077d5-22aa-4723-8587-db790e04157e',
    content: `Love brings unity and harmony. According to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.

In Yunus Emre’s philosophy, heart is the center of love. It is “the throne of the Lord,” that is, the place where Allah reveals Himself. For this reason, he described breaking a heart as destroying Allah’s house. He says:

[POEM]
English:
“The heart is the throne of the Lord, and He looked at it;
Whoever destroys the heart is unfortunate in both worlds.”
Turkish:
Gönül Çalab’ın tahtı, Çalap gönüle baktı;
İki cihan bedbahtı, kim gönül yıkar ise.
[/POEM]

Heart is the eye that sees the truth and the center of understanding.

Yunus Emre emphasizes not only heart but also intellect as a value; he described it as “a light from Allah that has existed since eternity.”`,
    vocabulary: [
      { word: 'reveals', definition: 'shows or makes known' },
      { word: 'intellect', definition: 'the ability to think and understand (Turkish: akıl)' },
      { word: 'existed', definition: 'was real or alive' },
      { word: 'eternity', definition: 'time without beginning or end' }
    ],
    hotspots: [
      { id: 'h10-1', x: 35, y: 45, title: 'The Heart', description: 'The heart is the throne of the Lord, where Allah reveals Himself. Breaking a heart is described as destroying Allah’s house.' },
      { id: 'h10-2', x: 68, y: 52, title: 'Intellect', description: 'Intellect (akıl) is also valued as a sacred light from Allah that has existed since eternity.' }
    ],
    animatedWords: ['reveals', 'intellect', 'existed', 'eternity'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex10-1',
        type: 'multiple-choice',
        title: 'The Heart and Love',
        instructions: 'Choose the correct answer.',
        question: 'Why is the heart important in Yunus’s philosophy?',
        options: [
          'It is the center of love and understanding',
          'It is only a physical organ',
          'It is less important than wealth'
        ],
        correctAnswer: 0,
        explanation: 'In Yunus\'s philosophy, the heart is considered the \'throne of the Lord\'—the center of divine love, spiritual insight, and direct understanding of the truth.',
        feedback: {
          correct: 'Correct! Because the heart is where Allah reveals Himself, breaking a heart is like destroying His house.',
          incorrect: 'Incorrect. Try again! The text describes the heart as a deeply sacred spiritual vessel, the center of love and divine revelation.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: 'Intellect and Death',
    image: 'https://picsum.photos/seed/yunus-b1-chapter11/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F10_Chapter_11_Intellect_and_Death.mp3?alt=media&token=9bbacec5-d4da-45ce-819d-2299f3747185',
    content: `He highlights that for a person to reach salvation, heart and intellect must support one another.

He says:

[POEM]
English:
“May your intelligence / wisdom save you from all troubles
May happiness be yours for all the months and years to come”
Turkish:
Seni türlü beladan kurtara akıl,
Saadet ola sana cümle ay, yıl
[/POEM]

Death is another significant theme in Yunus’s poems. According to him, death is the best advisor for humanity, as the Prophet Muhammad (pbuh) said: “The one who remembers death the most and is best in preparing for it. Those are the wisest.” (İM4259 İbn Mâce, Zühd, 31) A person who lives with an understanding of death’s advisory role lives a meaningful and honest life.

About death he says:

[POEM]
English:
“Whoever comes into this world must later leave it,
A guest in this world, one day they must set out for their homeland”
Turkish:
Bu dünyaya gelen kişi, ahir yine gitse gerek
Misafirdir, vatanına bir gün sefer etse gerek
[/POEM]`,
    vocabulary: [
      { word: 'highlights', definition: 'emphasizes or shows as important' },
      { word: 'salvation', definition: 'being saved spiritually' },
      { word: 'Death', definition: 'the end of worldly life' },
      { word: 'wisest', definition: 'the most wise' },
      { word: 'set out', definition: 'begin a journey' }
    ],
    hotspots: [
      { id: 'h11-1', x: 35, y: 45, title: 'Intellect and Death', description: 'For a person to reach spiritual salvation, the heart and the intellect must support one another.' },
      { id: 'h11-2', x: 68, y: 52, title: 'Death as Advisor', description: 'Yunus teaches that death is the best advisor for humanity, helping a person live a meaningful and honest life.' }
    ],
    animatedWords: ['highlights', 'salvation', 'Death', 'wisest', 'set out'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex11-1',
        type: 'true-false',
        title: 'Intellect and Death',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus presents death as an important advisor for humanity.',
        correctAnswer: true,
        explanation: 'Yunus states that death is the best advisor for humanity, helping people remain humble and keep perspective on what truly matters in this life.',
        feedback: {
          correct: 'Correct! Remembering death functions as an advisor to guide us towards a meaningful, honest, and spiritually humble life.',
          incorrect: 'Incorrect. Look closely at the text: it explicitly describes death as \'the best advisor for humanity\' based on prophetic teachings.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: 'Morality and Good Habits',
    image: 'https://picsum.photos/seed/yunus-b1-chapter12/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F11_Chapter_12_Morality_and_Good_Habits.mp3?alt=media&token=d1f94fde-9bcd-47b9-9dd7-64fad10e4dd3',
    content: `Yunus believes that true morality is about giving up bad habits that do not fit humans. Moral principles such as honesty, patience, humility, generosity, respect, trust in Allah, and modesty are important in Yunus Emre’s works. With these principles, Yunus Emre teaches people the path to an honest life. He also taught people to avoid bad habits like being arrogant, stingy, greedy, gossiper, selfish, or jealous.

Yunus Emre's poems are not only literary works but also a moral guide.

Here are some of his verses about morality:

Yunus says:

[POEM]
English:
“I’ve fallen into the prison of greed and cannot escape
It’s a hard, rock-solid place; I cannot break free”
Turkish:
Tamah hapsine düştüm çıkamam
Katı berktir duvarı yıkamam
[/POEM]`,
    vocabulary: [
      { word: 'morality', definition: 'good behavior and right actions' },
      { word: 'fit', definition: 'suitable or proper' },
      { word: 'honest', definition: 'truthful and fair' },
      { word: 'gossiper', definition: 'a person who talks about others badly or unnecessarily' },
      { word: 'literary', definition: 'related to literature (Turkish: edebî)' },
      { word: 'trust in Allah', definition: 'relying on Allah’s plan and guidance (Turkish: tevekkül)' },
      { word: 'greed', definition: 'an intense and selfish desire for wealth or power (Turkish: tamah)' }
    ],
    hotspots: [
      { id: 'h12-1', x: 35, y: 45, title: 'Morality', description: 'True morality is about giving up bad habits that do not fit humans, such as greed, arrogance, or jealousy.' },
      { id: 'h12-2', x: 68, y: 52, title: 'Good Habits', description: 'Good principles like patience, honesty, humility, generosity, and trust in Allah teach the path to an honest life.' }
    ],
    animatedWords: ['morality', 'fit', 'honest', 'gossiper', 'literary', 'moral guide', 'greed', 'escape', 'rock-solid', 'break free', 'trust in Allah'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex12-1',
        type: 'multiple-choice',
        title: 'Morality and Good Habits',
        instructions: 'Choose the correct answer.',
        question: 'What does Yunus warn people against?',
        options: [
          'Bad habits such as greed and gossip',
          'Honesty and patience',
          'Helping others'
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre strongly counsels against destructive behaviors like greed (tamah), gossip, arrogance, stinginess, and selfishness, while promoting virtues like patience and honesty.',
        feedback: {
          correct: 'Correct! Yunus advises everyone to shed internal faults like greed and gossip in order to cultivate a noble moral character.',
          incorrect: 'Incorrect. Try again! Yunus warns us against bad habits like greed, gossiping, and arrogance. Positive traits like honesty and patience are encouraged, not warned against.'
        }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: 'A Moral Guide',
    image: 'https://picsum.photos/seed/yunus-b1-chapter13/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F12_Chapter_13_A_Moral_Guide.mp3?alt=media&token=40b8f838-654b-4c54-9555-b670353ceebc',
    content: `In another verse he talks about “patience”, he says:

[POEM]
English:
“Patience is the foundation of a lasting kingdom.
Those blessed with patience will reach greatness.”
Turkish:
Sabırlu devleti dâim olur
Nasibi sabır olanlar ulu olur
[/POEM]

[POEM]
English:
“Whoever possesses patience rises to the heavens,
For within patience lies every kind of skill”
Turkish:
Sabır kimde ise o arşa yükselir
Ki sabrın içinde bulunur türlü hünerler
[/POEM]

In the following verse he warns against “rage and arrogance”, he says:

[POEM]
English:
“Whoever is filled with anger loses their faith
If faith is required, one must give up rage”
Turkish:
Buşu kimde ise imanı gider
İman gerek ise öfkeyi gider
[/POEM]

It is clear that Yunus Emre was an important person of his era, and his poems are still valuable today as a moral guide for future generations.

His works are as follows:

Risâletü’n-Nushiye (a book of moral advice)

Divan (his collected poems)`,
    vocabulary: [
      { word: 'rage', definition: 'very strong anger (Turkish: buşu)' },
      { word: 'arrogance', definition: 'thinking you are better than others' }
    ],
    hotspots: [
      { id: 'h13-1', x: 35, y: 45, title: 'Moral Guide', description: 'Yunus\'s works, like Risâletü’n-Nushiye and his Divan, remain valuable today as a moral guide for future generations.' },
      { id: 'h13-2', x: 68, y: 52, title: 'Lasting Legacy', description: 'Yunus Emre left a lasting legacy, warning against anger and arrogance while promoting patience and faith.' }
    ],
    animatedWords: ['rage', 'arrogance'],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex13-1',
        type: 'multiple-choice',
        title: 'A Moral Guide',
        instructions: 'Choose the correct answer.',
        question: 'What is one reason Yunus Emre is still valuable today?',
        options: [
          'His poems are a moral guide',
          'He wrote about trade taxes only',
          'He rejected all poetry'
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre\'s poems remain highly valuable today because they act as a profound spiritual and moral guide, offering timeless wisdom on patience, anger management, and humble living.',
        feedback: {
          correct: 'Correct! His poems and hymns provide timeless ethical teachings that guide future generations.',
          incorrect: 'Incorrect. Try again! Yunus Emre is celebrated because his works serve as an enduring moral and spiritual guide, not because of trade records or rejecting poetry.'
        }
      }
    ]
  },
  {
    id: 14,
    type: 'quiz',
    title: 'Knowledge Check: Yunus Emre - B1',
    image: 'https://picsum.photos/seed/quiz-yunus-b1/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the B1 story of Yunus Emre with these True/False questions.',
    exercises: [
      {
        id: 'b1-q1',
        type: 'true-false',
        title: 'Sûfîsm Concept',
        instructions: 'Decide if the statement is true or false.',
        question: 'Sûfîsm is an Islamic mystical approach (Tasavvuf) focused on getting closer to Allah.',
        correctAnswer: true,
        explanation: 'Sûfîsm is defined as a path to closeness to Allah by following Islamic mysticism (Tasavvuf).',
        feedback: { correct: 'Correct!', incorrect: 'Sûfîsm is focused on getting closer to Allah.' }
      },
      {
        id: 'b1-q2',
        type: 'true-false',
        title: 'Yunus’s Literary Language',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre wrote his poems in a very complex, heavy Persian dialect that was hard for common people to follow.',
        correctAnswer: false,
        explanation: 'Yunus was one of the first to write poems in simple Turkish, helping to build a rich and clear literary language.',
        feedback: { correct: 'Correct!', incorrect: 'His poems are beloved specifically because of their simple and accessible language.' }
      },
      {
        id: 'b1-q3',
        type: 'true-false',
        title: 'Anatolian Chaos',
        instructions: 'Decide if the statement is true or false.',
        question: 'Anatolia faced serious political, economic, and social chaos in the 13th and 14th centuries due to the Babai uprisings and the Mongol invasion.',
        correctAnswer: true,
        explanation: 'These events caused massive destruction, forcing people to search deeply for spiritual comfort and guidance.',
        feedback: { correct: 'Correct!', incorrect: 'Anatolia was indeed suffering from severe political and social chaos.' }
      },
      {
        id: 'b1-q4',
        type: 'true-false',
        title: 'The Sûfî Heart',
        instructions: 'Decide if the statement is true or false.',
        question: 'In Yunus Emre’s philosophy, the heart is described as the center of divine love and the spiritual eye that sees the truth.',
        correctAnswer: true,
        explanation: 'Yunus places the heart at the core of human spirituality and direct understanding.',
        feedback: { correct: 'Correct!', incorrect: 'The heart is the ultimate vessel of love in Yunus’s poetry.' }
      },
      {
        id: 'b1-q5',
        type: 'true-false',
        title: 'Morality Guidance',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre taught that people should embrace bad habits like greed, jealousy, and arrogance if they wanted to survive in difficult times.',
        correctAnswer: false,
        explanation: 'Yunus explicitly warned people to stay away from behavior unbecoming for humans, counseling instead patience, honesty, and humility.',
        feedback: { correct: 'Correct!', incorrect: 'He warned people to abandon bad habits.' }
      },
      {
        id: 'b1-q6',
        type: 'true-false',
        title: 'Risâletü’n-Nushiye',
        instructions: 'Decide if the statement is true or false.',
        question: 'Risâletü’n-Nushiye is a didactic book of advice written by Yunus Emre in the Mesnevi style.',
        correctAnswer: true,
        explanation: 'Risâletü’n-Nushiye is indeed a book of moral advice written in the Mesnevi style.',
        feedback: {
          correct: 'Correct!',
          incorrect: 'Actually, it is a famous advice book written by Yunus.'
        }
      }
    ]
  },
  {
    id: 15,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge',
    image: 'https://picsum.photos/seed/vocab-match-yunus-b1/1200/800',
    audioUrl: '',
    content: 'Match the words from the story with their correct meanings.',
    vocabularyPairs: [
      { word: 'mysticism', meaning: 'Spiritual belief of direct union with God' },
      { word: 'dervish', meaning: 'A member of a Muslim mystical order' },
      { word: 'humility', meaning: 'A modest view of one’s own importance' },
      { word: 'generosity', meaning: 'The quality of being kind and generous' },
      { word: 'greed', meaning: 'An intense and selfish desire for wealth or power' }
    ]
  },
  {
    id: 16,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    content: 'A complete list of vocabulary from the first half of the story.',
    image: 'https://picsum.photos/seed/glossary1-yunus-b1/1200/800',
    vocabulary: [
      { word: 'mysticism', definition: 'Spiritual belief of direct union with God.' },
      { word: 'era', definition: 'A particular period in history.' },
      { word: 'destruction', definition: 'The action of causing severe damage.' },
      { word: 'comfort', definition: 'Relief from suffering or distress.' },
      { word: 'poet', definition: 'A writer of poems.' },
      { word: 'harmony', definition: 'Agreement or accord.' },
      { word: 'dervish', definition: 'A member of a Muslim mystical order.' },
      { word: 'pupil', definition: 'A student under the supervision of a teacher.' },
      { word: 'guidance', definition: 'Leadership or direction.' },
      { word: 'moral', definition: 'Related to principles of right and wrong behavior.' },
      { word: 'humility', definition: 'A modest view of one’s own importance.' },
      { word: 'charity', definition: 'Voluntary giving of help or money.' }
    ]
  },
  {
    id: 17,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    content: 'A complete list of vocabulary from the second half of the story.',
    image: 'https://picsum.photos/seed/glossary2-yunus-b1/1200/800',
    vocabulary: [
      { word: 'generosity', definition: 'The quality of being kind and generous.' },
      { word: 'patience', definition: 'The capacity to accept delay or trouble calmly.' },
      { word: 'disciplined', definition: 'Showing a controlled form of behavior or working.' },
      { word: 'condition', definition: 'A direct prerequisite for a state or situation.' },
      { word: 'training', definition: 'The process of learning the skills needed for something.' },
      { word: 'purify', definition: 'To make clean or free from impurities.' },
      { word: 'whisper', definition: 'To speak very softly using one’s breath.' },
      { word: 'approach', definition: 'To come near or nearer to something.' },
      { word: 'daily lives', definition: 'Regular, everyday experiences.' },
      { word: 'greed', definition: 'An intense and selfish desire for wealth or power.' },
      { word: 'gossiper', definition: 'Someone who repeats rumors and personal facts about others.' }
    ]
  },
  {
    id: 18,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/exercises-yunus-b1/1200/800',
    content: 'Review what you have learned about Yunus Emre through sequencing, grouping, and reflective exercises.',
    exercises: yunusB1FinalReviewExercises
  },
  {
    id: 19,
    type: 'final-challenge',
    title: 'Final Challenge: Yunus Emre B1',
    image: 'https://picsum.photos/seed/challenge-yunus-b1/1200/800',
    content: 'Test yourself with the final challenge. Answer 10 randomized questions from the entire story.'
  }
];
