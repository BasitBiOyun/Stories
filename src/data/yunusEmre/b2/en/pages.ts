import { PageData } from '../../../../types';
import { yunusB2FinalReviewExercises } from './exercises';

export const yunusB2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: "Yunus Emre and Sûfîsm",
    image: 'https://picsum.photos/seed/yunus-b2-chapter1/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=875dc868-3960-407d-9839-bed3b5d00a39',
    content: `Yunus Emre was a great Anatolian poet and Muslim mystic/sûfî. Sûfî is a person who seeks closeness to Allah by adopting Islamic mysticism. Sûfis maintain a lifestyle within the outer (visible) and inner norms of Islam. The outer part relates to the body's acts of worship, whereas the inner side handles the morality and intentions of the heart. Sûfis adhere to moral principles that include the pursuit of becoming better people, the ability to remain patient during difficult times, the act of giving generously without expecting any return, the act of doing good to all individuals without prejudice, the response to evil with kindness, and not attaching importance to worldly possessions such as wealth, status, and fame.

In addition to his standing as a Sûfî, Yunus Emre was one of the Turkish poets to play a crucial role in the development of Old Anatolian Turkish. The words and expressions that he used made a significant contribution to the development of Turkish as a literary language. He established a literary tradition based on Sufism. One of the most important factors in the popularity of Yunus Emre’s works among the public is his style.`,
    vocabulary: [
      { word: "mystic/sûfî", definition: "a Muslim spiritual person who seeks closeness to Allah" },
      { word: "adopting", definition: "choosing and starting to follow something" },
      { word: "maintain", definition: "continue to keep or follow something" },
      { word: "handles", definition: "deals with or manages something" },
      { word: "crucial", definition: "extremely important" },
      { word: "relates to", definition: "has a connection with or refers to something" },
      { word: "adhere to", definition: "closely follow or behave according to rules" },
      { word: "Islamic mysticism", definition: "A path of spiritual growth and direct knowledge of the Divine (Turkish: Tasavvuf)." },
      { word: "Sufism", definition: "Islamic mysticism focusing on the purification of the heart and inner devotion (Turkish: Tasavvuf)." }
    ],
    hotspots: [
      { id: 'h1-1', x: 35, y: 45, title: "Historical Context", description: "Yunus Emre played a crucial role in the development of Old Anatolian Turkish and established a literary tradition based on Sufism." },
      { id: 'h1-2', x: 68, y: 52, title: "Sûfîsm", description: "Sûfis maintain a lifestyle within the outer acts of worship and the inner morality and intentions of the heart." },
    ],
    animatedWords: ["mystic/sûfî", "adopting", "maintain", "handles", "crucial", "significant contribution", "Sufism", "Islamic mysticism", "relates to", "adhere to"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'multiple-choice',
        title: "Yunus Emre and Sûfîsm",
        instructions: 'Choose the correct answer.',
        question: "What does Chapter 1 mainly explain about Yunus Emre?",
        options: [
          "His role as a poet and Sûfî",
          "His work as a soldier",
          "His life as a merchant",
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre was a legendary Anatolian Turkish poet and a Muslim dervish (Sûfî) who made foundational contributions to Old Anatolian Turkish literature.',
        feedback: {
          correct: 'Correct! Underlining both his literary contributions and his Sûfî lifestyle defines his enduring legacy.',
          incorrect: 'Incorrect. Look at the chapter title and text: they describe him as a poet and a Sûfî, not a soldier or a merchant.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: "His Style and Education",
    image: 'https://picsum.photos/seed/yunus-b2-chapter2/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F01_Chapter_2_His_Style_and_Education.mp3?alt=media&token=435cb519-196c-4487-b756-03934193b755',
    content: `For, his style is neither so simple nor so complex. Thus, his works have both literary value and are easy to understand. His philosophy includes fundamental values that have a significant influence on Turkish culture and ethics in Turkish society.

According to historical accounts, he was a contemporary of famous figures such as Hacı Bektaş-ı Veli, Mevlana Celaleddin-i Rumi, and Saru Saltuk. As to the widely accepted view, he was born in 1240–41 and died in 1320–21. He is considered the founder of Turkish Sûfî literature.

Some sources note that he received a good madrasa education and had a strong knowledge of Arabic, Persian, and the Islamic sciences of his time. However, his education was not limited to madrasas, he also studied both divine love and morals at the tekke, which was a place where Sufi education was taught under the guidance of a sheikh, spiritual tutor.

At that time, tekkes were not just an institution that offers Sûfî training but they were also important civil society organizations that strengthened social solidarity and cooperation and also received support from government officials of their time.`,
    vocabulary: [
      { word: "contemporary", definition: "living in the same time period" },
      { word: "figures", definition: "important people" },
      { word: "solidarity", definition: "unity and support among people" },
      { word: "madrasa", definition: "An Islamic school or college of higher education (Turkish: medrese)." },
      { word: "tekke", definition: "A Sufi lodge or gathering place for spiritual education (Turkish: tekke)." },
      { word: "divine love", definition: "Profound spiritual love directed toward God (Turkish: ilâhî aşk)." },
      { word: "sheikh", definition: "A spiritual master, guide, or leader of a Sufi order (Turkish: şeyh)." }
    ],
    hotspots: [
      { id: 'h2-1', x: 35, y: 45, title: "Historical Context", description: "Yunus was a contemporary of famous historical figures such as Hacı Bektaş-ı Veli, Mevlana Celaleddin-i Rumi, and Saru Saltuk." },
      { id: 'h2-2', x: 68, y: 52, title: "Education", description: "Yunus received a strong madrasa education but also studied divine love and morals at the tekke under a sheikh." },
    ],
    animatedWords: ["contemporary", "figures", "solidarity", "madrasa", "tekke", "divine love", "sheikh"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: "His Style and Education",
        instructions: 'Choose the correct answer.',
        question: "Why were Yunus Emre’s works popular?",
        options: [
          "Because they were only for scholars",
          "Because they had literary value and were easy to understand",
          "Because they were written in Latin",
        ],
        correctAnswer: 1,
        explanation: 'Yunus Emre\'s poems were highly popular because they combined high literary value with language that was clear, accessible, and simple enough for the common people to easily understand.',
        feedback: {
          correct: 'Correct! By striking an elegant balance between deep spiritual concepts and clear language, his poems appealed to both the general public and scholars.',
          incorrect: 'Incorrect. Try again! His popular appeal came specifically because his style was beautiful yet accessible to everyone, not exclusive to scholars.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: "Tekkés and Difficult Times",
    image: 'https://picsum.photos/seed/yunus-b2-chapter3/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F02_Chapter_3_Tekk%C3%A9s_and_Difficult_Times.mp3?alt=media&token=ab8a1aef-6f3b-472d-9cdf-27afba737acf',
    content: `Besides, they were leading institutions in the field of the fine arts, particularly poetry. Many of the great masters of Turkish poetry were trained in tekkes. Yunus Emre was also one of the great masters of poetry who had been trained under his sheikh, Taptuk Emre.

The 13th and 14th centuries, the period in which Yunus Emre was born and lived, coincided with hard times. In those years, the Anatolian Seljuks were severely weakened by the Babai uprisings. This was immediately followed by the defeat at Kösedağ. The defeat at Kösedağ facilitated the Mongols' invasion of Anatolia. Anatolia faced political, economic, and social hardships as a result of these assaults. Society was struggling to cope with these trials.

If we take a closer look at this historical atmosphere, we can better understand Anatolia—the land where Yunus Emre lived and recited his unforgettable verses.

The rule of the Anatolian Seljuk Sultan Alaeddin I (1220–1237) was the most powerful and glorious period of the Seljuks. He expanded the country’s borders and established a navy in the Mediterranean and Black Seas.`,
    vocabulary: [
      { word: "fine arts", definition: "creative arts such as poetry and music" },
      { word: "coincided with", definition: "happened at the same time as something" },
      { word: "facilitated", definition: "made something easier or possible" },
      { word: "assaults", definition: "violent attacks" },
      { word: "cope with", definition: "deal with a difficult situation" },
    ],
    hotspots: [
      { id: 'h3-1', x: 35, y: 45, title: "Historical Context", description: "Tekkes were leading institutions in fine arts like poetry where great masters, including Yunus under Taptuk Emre, were trained." },
      { id: 'h3-2', x: 68, y: 52, title: "Difficult Times", description: "The 13th and 14th centuries coincided with hard times as the Seljuks were weakened by Babai uprisings and the defeat at Kösedağ." },
    ],
    animatedWords: ["fine arts", "coincided with", "facilitated", "assaults", "cope with", "trials", "recited", "glorious"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'true-false',
        title: "Tekkés and Difficult Times",
        instructions: 'Decide if the statement is true or false.',
        question: "Yunus Emre lived in a difficult period in Anatolia.",
        correctAnswer: true,
        explanation: 'Yunus Emre lived during the 13th and 14th centuries, which coincided with the Babai uprisings and the devastating Mongol invasions of Anatolia, causing massive social and economic breakdown.',
        feedback: {
          correct: 'Correct! His era was plagued by Mongol raids, uprisings, and severe political and social instability.',
          incorrect: 'Incorrect. The text shows that his lifetime was marked by severe disruption, war, and societal distress.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: "The Babai Uprisings",
    image: 'https://picsum.photos/seed/yunus-b2-chapter4/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F03_Chapter_4_The_Babai_Uprisings.mp3?alt=media&token=3f4c837a-baeb-4f66-a2b1-afe074eb5044',
    content: `At the time of his death, the Seljuks were the most powerful and largest state in the Middle East. However, due to the poor governance of his son, Giyaseddin Keyhüsrev II (1237–1246), the Seljuk economic and social structure began to decline. Starting in the 13th century, the Turkmen population grew in Anatolia. When the migrations caused by the Mongol invasion were added to this, lives of people in Anatolia were totally turned upside down. The nomadic Oguz and Turkmen tribes, who had migrated to Anatolia from Central Asia to escape the Mongol invasion, were exhausted from wanderings and were looking for safe lands to settle in. This crowd of nomads was also causing unrest within the community. Giyaseddin Keyhüsrev II’s failure to manage this situation even worsened the social and economic chaos.

Throughout history, societies that faced difficult circumstances have always awaited a divine figure to save them. The Turkmen, too, were awaiting such a figure. In 1240, they rebelled under the leadership of Baba İshak who was the follower of Baba İlyas. Baba İlyas was the founder of a non-Sunni religious–mystical movement.`,
    vocabulary: [
      { word: "decline", definition: "a process of becoming weaker" },
      { word: "migrations", definition: "movements of people from one place to another" },
      { word: "invasion", definition: "entering a place by force" },
      { word: "upside down", definition: "completely changed or disturbed" },
      { word: "nomadic", definition: "moving from place to place rather than settled" },
      { word: "follower", definition: "A disciple or spiritual pupil of a master (Turkish: mürîd)." }
    ],
    hotspots: [
      { id: 'h4-1', x: 35, y: 45, title: "Historical Context", description: "Nomadic Turkmen tribes, fleeing the Mongol invasion from Central Asia, were exhausted and looking for safe lands to settle in." },
      { id: 'h4-2', x: 68, y: 52, title: "The Babai Uprisings", description: "In 1240, the Turkmen rebelled under Baba İshak, a follower of Baba İlyas, founder of a religious-mystical movement." },
    ],
    animatedWords: ["decline", "migrations", "invasion", "upside down", "nomadic", "wanderings", "unrest", "manage", "divine figure", "follower"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: "The Babai Uprisings",
        instructions: 'Choose the correct answer.',
        question: "What worsened the social and economic chaos in Anatolia?",
        options: [
          "Poor governance and migration pressure",
          "A peaceful trade agreement",
          "A strong central government",
        ],
        correctAnswer: 0,
        explanation: 'Giyaseddin Keyhüsrev II\'s incompetent leadership combined with the sudden, massive influx of nomadic Turkmen tribes fleeing Mongol territory resulted in severe social and economic deterioration.',
        feedback: {
          correct: 'Correct! Mismanagement of nomadic migration and lack of political foresight amplified the regional turmoil.',
          incorrect: 'Incorrect. Look at the text: it details how poor governance and Mongol-induced migration pressures threw Anatolia into chaos.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: "Kösedağ and the Mongols",
    image: 'https://picsum.photos/seed/yunus-b2-chapter5/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F04_Chapter_5_K%C3%B6seda%C4%9F_and_the_Mongols.mp3?alt=media&token=96f1b9f7-a211-4260-8d1a-3ce0f5723136',
    content: `In the eyes of the Turkmen, these fathers were divine saviors. The rebellion spread rapidly; the Turkmen achieved significant success. In the end, the Seljuk forces suppressed the rebellion with great difficulty and put the rebels to the sword.

However, this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire. In late 1242, the Mongols captured Erzurum and killed its people with swords. This disaster caused deep sorrow and fear among the Seljuk people.

Finally, in 1243, the Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. The Mongols, using the classic false retreat and circling tactic, wiped out the Seljuk forces. Following their easy victory at Kösedağ, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan, leaving not a single stone standing. They slaughtered the men with swords; women and children were taken captive and forced to follow the Mongol army. Throughout Yunus’s life, this Mongol storm swept across Anatolia like a roller, leaving behind blood, misery, and ruins. Sources say: “The Mongols slaughtered the people of the great cities and towns so mercilessly that hardly anyone remained there.”`,
    vocabulary: [
      { word: "achieved", definition: "succeeded in doing something" },
      { word: "suppressed", definition: "stopped by force" },
      { word: "captured", definition: "took control of a place by force" },
      { word: "clashed", definition: "fought or came into conflict" },
      { word: "false retreat and circling tactic", definition: "a battle strategy using fake withdrawal and surrounding" },
    ],
    hotspots: [
      { id: 'h5-1', x: 35, y: 45, title: "Historical Context", description: "At Kösedağ in 1243, the Mongols wiped out the Seljuk forces using their classic false retreat and circling tactic." },
      { id: 'h5-2', x: 68, y: 52, title: "the Mongols", description: "Following their victory, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan, leaving not a single stone standing." },
    ],
    animatedWords: ["achieved", "suppressed", "captured", "clashed", "false retreat and circling tactic", "plundered", "slaughtered", "captive"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: "Kösedağ and the Mongols",
        instructions: 'Choose the correct answer.',
        question: "What happened at Kösedağ in 1243?",
        options: [
          "The Seljuks defeated the Mongols",
          "The Mongols defeated the Seljuks",
          "Yunus Emre became a sultan",
        ],
        correctAnswer: 1,
        explanation: 'In the Battle of Kösedağ (1243), the Mongols thoroughly routed the Seljuk military, launching a decades-long period of direct plunder, vassalage, and tragedy in Anatolia.',
        feedback: {
          correct: 'Correct! Under the general Bayju Noyan, Mongol forces used a classic feigned retreat to defeat the Seljuks.',
          incorrect: 'Incorrect. Look at the chapter details: the Mongols decisively defeated the Seljuks at Kösedağ, initiating a dark era of violence and control.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: "Anatolia Under Pressure",
    image: 'https://picsum.photos/seed/yunus-b2-chapter6/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F05_Chapter_6_Anatolia_Under_Pressure.mp3?alt=media&token=51f45879-bd44-4ebe-a200-93cd131be41d',
    content: `The weakening of the Seljuk Sultanate of Konya led to the rapid emergence of small principalities in Anatolia. They were also in constant conflict over the throne, wealth, and summer and winter pastures. The Ottoman state was still a small principality at that time.

These events created an atmosphere of panic in Anatolia that had never been seen before. In the end, an agreement was reached with the Mongols, but in time the Seljuks became a dependent state of the Mongols. The Seljuk sultans began to act almost as if they were Mongols’ civil officials. A significant part of state income began to be sent to the Mongols every year. However, this tax increased constantly and this made both the state and the people poorer.

Statesmen like Celaleddin Karatay, while on the one hand trying to manage the Mongols, were also making efforts to provide some relief to the state and the people. Nevertheless, these efforts were not enough. Finally, in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire (The Mongol state centred in Iran).`,
    vocabulary: [
      { word: "constant conflict", definition: "continuing disagreement or fighting" },
      { word: "dependent state", definition: "a state controlled by another power" },
      { word: "income", definition: "money received by a person or state" },
      { word: "tax", definition: "money paid to a state or authority" },
      { word: "relief", definition: "help that reduces difficulty or pain" },
      { word: "principalities", definition: "Small regional states or territories ruled by a prince or bey (Turkish: beylikler)." }
    ],
    hotspots: [
      { id: 'h6-1', x: 35, y: 45, title: "Historical Context", description: "The Seljuks became dependent on the Mongols, with their sultans acting almost like the Mongols' civil officials." },
      { id: 'h6-2', x: 68, y: 52, title: "Anatolia Under Pressure", description: "In 1308, after years of heavy taxes and pressure, Anatolia was directly attached to the Ilkhanate Empire." },
    ],
    animatedWords: ["constant conflict", "dependent state", "income", "tax", "relief", "principalities"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'true-false',
        title: "Anatolia Under Pressure",
        instructions: 'Decide if the statement is true or false.',
        question: "The Seljuks became dependent on the Mongols in time.",
        correctAnswer: true,
        explanation: 'Over time, the defeated Seljuks became entirely dependent on the Mongols, serving as puppet administrators and sending huge portions of their treasury as tribute, culminating in complete direct annexation in 1308.',
        feedback: {
          correct: 'Correct! Under the heavy burden of Mongol taxes, the Seljuks lost all autonomy, functioning merely as administrators under direct client state status.',
          incorrect: 'Incorrect. The text shows the Seljuks became a dependent state of the Mongols, ultimately being annexed directly in 1308.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: "Yunus Appears as a Wise Dervish",
    image: 'https://picsum.photos/seed/yunus-b2-chapter7/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F06_Chapter_7_Yunus_Appears_as_a_Wise_Dervish.mp3?alt=media&token=b7eaeaa4-0a36-4fc8-8ff5-6cd6aa8d32c4',
    content: `Anatolia was experiencing total chaos. During the same period, the shaykhs from the regions of Turkestan, Transoxiana, Khorasan, Khwarezm and Iran came to Anatolia under Mongol pressure. These shaykhs raised dervishes on their teachings; these dervishes were dominant among nomads. They were spreading a simple understanding of Islam and establishing a kind of popular Sûfîsm.

So in such an environment, Yunus Emre emerged as a wise dervish and travelled around Anatolia. He tried to respond to people’s efforts to make sense of life in hard days through the lens of his Sûfî identity, using poetry as his medium.

Yunus’s understanding of Sûfîsm is based on the Qur’an and the Sunnah, which is the collective term for the Prophet’s sayings, actions, and approvals, as well as on the thoughts and experiences of the Muslim Sûfîs who lived before him. In his poems, he expresses a vivid love for Allah as a way of life, along with fear of Allah and faithfulness to the Prophet Muhammad (pbuh).`,
    vocabulary: [
      { word: "raised", definition: "educated or trained someone" },
      { word: "emerged", definition: "appeared or became known" },
      { word: "respond to", definition: "answer or react to something" },
      { word: "lens", definition: "a way of looking at or understanding something" },
      { word: "medium", definition: "a tool or method for communication" },
      { word: "shaykhs", definition: "Spiritual guides, masters, or leaders of Sufi communities (Turkish: şeyhler / şeyh)." },
      { word: "Transoxiana", definition: "An ancient region in Central Asia, situated between the Amu Darya and Syr Darya rivers (Turkish: Mâverâünnehir)." },
      { word: "Khorasan", definition: "A historical region comprising parts of modern-day Iran, Afghanistan, and Central Asia (Turkish: Horasan)." },
      { word: "Khwarezm", definition: "A large oasis region in Central Asia, historically home to advanced civilizations (Turkish: Harezm)." },
      { word: "Sunnah", definition: "The collective traditions and practices of the Prophet Muhammad, acting as a guide for Muslims (Turkish: Sünnet)." }
    ],
    hotspots: [
      { id: 'h7-1', x: 35, y: 45, title: "Sûfî Thought", description: "Shaykhs fleeing Mongol pressure came to Anatolia, spreading a simple understanding of Islam and establishing popular Sûfîsm." },
      { id: 'h7-2', x: 68, y: 52, title: "Yunus Appears as a Wise Dervish", description: "Yunus emerged as a wise dervish, using poetry as his medium to help people make sense of life in hard days." },
    ],
    animatedWords: ["raised", "emerged", "respond to", "lens", "medium", "shaykhs", "Transoxiana", "Khorasan", "Khwarezm", "Sunnah"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: "Yunus Appears as a Wise Dervish",
        instructions: 'Choose the correct answer.',
        question: "How did Yunus Emre respond to difficult times?",
        options: [
          "Through poetry and his Sûfî identity",
          "By becoming a trader",
          "By building a palace",
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre traveled around devastated Anatolia, responding to the people\'s grief and spiritual search by translating deep Quranic concepts and prophetic love into beautiful Turkish poetry.',
        feedback: {
          correct: 'Correct! He used his dervish identity and clear Turkish poetry as a medium of spiritual comfort for the distressed nomadic population.',
          incorrect: 'Incorrect. Try again! The text states that Yunus responded to people\'s struggle of making sense of life in hard days using poetry and his Sûfî identity.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: "Tawhid and True Reality",
    image: 'https://picsum.photos/seed/yunus-b2-chapter8/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F07_Chapter_8_Tawhid_and_True_Reality.mp3?alt=media&token=4e5a6ee4-b0c6-4672-a007-e0c5bd10bb52',
    content: `One of the most important fundamental values in his works is the belief in tawhid which means the absolute Oneness of Allah. According to Yunus Emre, the Creator, Allah is the source of all things and, therefore, everything is connected to Him. Creator is the true and only reality. From this perspective, Yunus Emre held the idea of vahdet-i vücut. According to the theory of vahdet-i vücut, Allah, the absolute reality, desired to be known and to reveal Himself, and for this reason, He created the worlds through His attributes.

Yunus says:

[POEM]
English:
“The entire universe is Tawhid; Adam is the one who knows Tawhid.
Whoever denies this Tawhid is an enemy to his own soul.”
Turkish:
Tevhîd imiş cümle âlem, tevhîdi bilendür Âdem
Bu tevhîdi inkâr iden öz cânına düşmânımış
[/POEM]

As a result of creation, the initial unity disintegrated and multiple existence emerged. Nonetheless, this multiple existence is nothing but manifestations of the names of Allah.`,
    vocabulary: [
      { word: "true and only reality", definition: "the one real and ultimate truth" },
      { word: "absolute reality", definition: "the complete and ultimate truth" },
      { word: "reveal", definition: "make something known or visible" },
      { word: "attributes", definition: "Divine qualities (Turkish: sıfatlar - Zâtî and Subûtî sıfatlar) by which Allah manifests Himself to His creation." },
      { word: "initial unity", definition: "The primordial state of oneness (Turkish: vahdet - birlik, bütünlük) prior to the manifestation of the cosmos." },
      { word: "multiple existence", definition: "The multiplicity of created beings (Turkish: kesret - mahlûkatın çokluğu) emerging from initial unity." },
      { word: "vahdet-i vücut", definition: "The Unity of Existence (Turkish: varlığın birliği) - the mystical concept that all creation is a temporal manifestation of Allah's eternal Attributes." }
    ],
    hotspots: [
      { id: 'h8-1', x: 35, y: 45, title: "Sûfî Thought", description: "The theory of vahdet-i vücut explains that Allah created the worlds through His attributes to reveal Himself." },
      { id: 'h8-2', x: 68, y: 52, title: "True Reality", description: "Although the initial unity disintegrated into multiple existence, this multiplicity is nothing but manifestations of the names of Allah." },
    ],
    animatedWords: ["true and only reality", "absolute reality", "reveal", "attributes", "initial unity", "multiple existence", "vahdet-i vücut", "manifestations"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'multiple-choice',
        title: "Tawhid and True Reality",
        instructions: 'Choose the correct answer.',
        question: "What does tawhid mean in the text?",
        options: [
          "The power of poetry",
          "The absolute Oneness of Allah",
          "The history of the Seljuks",
        ],
        correctAnswer: 1,
        explanation: 'In Yunus Emre\'s works, tawhid refers to the absolute Oneness of Allah, whom he describes as the sole source of all things and the single absolute reality.',
        feedback: {
          correct: 'Correct! Tawhid is the bedrock principle of Islamic theology, signifying the absolute Oneness of Allah.',
          incorrect: 'Incorrect. Try again! The text explicitly defines the belief in tawhid as the absolute Oneness of Allah.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: "Unity and Love",
    image: 'https://picsum.photos/seed/yunus-b2-chapter9/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F08_Chapter_9_Unity_and_Love.mp3?alt=media&token=f82c740d-efa7-4e38-b440-24dab3468a80',
    content: `In this sense, everything which is created is a reflection; the only thing that truly exists is Allah. The ultimate purpose of humanity is to reach the unity, Allah.

His words remind us of Allah’s commands for achieving this unity.

Yunus says:

[POEM]
English:
“Anyone who claims to be a Muslim should know the requirements of Islam,
He should follow Allah’s command and pray the five daily prayers”
Turkish:
Müslümanım diyen kişi şartı nedir bilse gerek
Tanrı'nın buyruğun tutup beş vakt namaz kılsa gerek
[/POEM]

Love, another important value that stands out in Yunus Emre’s works, lies at the core of his philosophy. He places love at the foundation of the human relationship with the Creator. The love extends to the love of Allah. Therefore, those who love the Creator love the created, and those who love the created also love the Creator. Love brings unity and harmony.

The purpose of love is to reach Allah and achieve unity in His presence. From this perspective, love and unity, which lie at the essence of his thought, are interrelated. For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.`,
    vocabulary: [
      { word: "stands out", definition: "is easy to notice as important" },
      { word: "core", definition: "the central or most important part" },
      { word: "achieve", definition: "successfully reach a goal" },
      { word: "unity", definition: "the state of being united or joined as a whole" },
      { word: "love", definition: "profound affection and spiritual devotion connecting Creator and creation" },
    ],
    hotspots: [
      { id: 'h9-1', x: 35, y: 45, title: "Sûfî Thought", description: "Yunus emphasizes that anyone who claims to be a Muslim should know the requirements of Islam and pray the five daily prayers." },
      { id: 'h9-2', x: 68, y: 52, title: "Love", description: "Yunus places love at the core of his philosophy: those who love the Creator love the created, and vice-versa." },
    ],
    animatedWords: ["stands out", "core", "achieve", "unity", "love"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex9-1',
        type: 'true-false',
        title: "Unity and Love",
        instructions: 'Decide if the statement is true or false.',
        question: "Love and unity are connected in Yunus Emre’s thought.",
        correctAnswer: true,
        explanation: 'In Yunus Emre\'s thought, love and unity are profoundly interrelated because loving the creations of Allah is the gateway to loving the Creator Himself, bringing harmony and dissolving anger and separation.',
        feedback: {
          correct: 'Correct! Under his philosophy, true divine love naturally inspires a sense of unity with all of Allah\'s creations.',
          incorrect: 'Incorrect. The text shows that love and unity are closely interrelated; where love is absent, division and separation arise.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: "The Heart and Intellect",
    image: 'https://picsum.photos/seed/yunus-b2-chapter10/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F09_Chapter_10_The_Heart_and_Intellect.mp3?alt=media&token=c9c90510-fe86-4b60-a07d-f4602c404ac5',
    content: `Therefore, for Yunus Emre the love and the oneness of Allah are the values at the foundation of moral behavior.

In Yunus Emre’s philosophy, heart is the center of love. It is “the throne of the Lord,” that is, the place where Allah manifests Himself. For this reason, he described breaking a heart as destroying Allah’s house, Yunus says:

[POEM]
English:
“The heart is the throne of the Lord, and He looked at the heart.
Whoever destroys the heart is the most unfortunate of the two worlds.”
Turkish:
Gönül Çalab’ın tahtı, Çalap gönüle baktı.
İki cihan bedbahtı, kim gönül yıkar ise.
[/POEM]

In his view, purity of the heart is essential for the proper performance of acts of worship. At the same time, the heart is the eye that perceives the truth and the center of understanding.

Yunus Emre emphasizes not only heart but also intellect as a value, describing it as “a light from Allah that has existed since eternity.” According to him, there are three types of intellect: the practical reason, which enables a person to understand how the world works and sustain worldly life;`,
    vocabulary: [
      { word: "manifests", definition: "shows or reveals itself" },
      { word: "proper", definition: "correct or suitable" },
      { word: "perceives", definition: "understands or notices something" },
      { word: "intellect", definition: "Reason or intellect (Turkish: akıl) — described by Yunus as a light from Allah that has existed since eternity." },
      { word: "sustain", definition: "keep something continuing" },
    ],
    hotspots: [
      { id: 'h10-1', x: 35, y: 45, title: "Sûfî Thought", description: "The heart is the throne of the Lord where Allah manifests Himself; breaking a heart is like destroying Allah's house." },
      { id: 'h10-2', x: 68, y: 52, title: "Intellect", description: "Yunus outlines three types of intellect: practical reason, limited intellect for the hereafter, and universal intellect for piety." },
    ],
    animatedWords: ["manifests", "proper", "perceives", "intellect", "sustain"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex10-1',
        type: 'multiple-choice',
        title: "The Heart and Intellect",
        instructions: 'Choose the correct answer.',
        question: "What does Yunus Emre call the heart?",
        options: [
          "The throne of the Lord",
          "The palace of the sultan",
          "The center of trade",
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre describes the heart as "the throne of the Lord" — the sacred seat where Allah manifests Himself, making the preservation of another person\'s heart of supreme spiritual importance.',
        feedback: {
          correct: 'Correct! Because the heart is the throne of the Creator, destroying another\'s heart is comparable to destroying Allah\'s house.',
          incorrect: 'Incorrect. Try again! In the verse, Yunus calls the human heart "the throne of the Lord (Çalab)" and cautions against breaking it.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: "Salvation and Death",
    image: 'https://picsum.photos/seed/yunus-b2-chapter11/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F10_Chapter_11_Salvation_and_Death.mp3?alt=media&token=0cf0a108-c961-480a-bed1-f16979702959',
    content: `the limited intellect, which teaches a person about the order of the hereafter; and the universal intellect, which guides one to behave with piety. His understanding of unity is also evident in the relationship between the heart and reason; he emphasizes that for a person to reach salvation, heart and reason must support one another.

Yunus says:

[POEM]
English:
“May your intelligence / wisdom save you from all troubles
May happiness be yours for all the months and years to come”
Turkish:
Seni dürlü beladan kurtara akl,
Saadet ola sana cümle ay, yıl
[/POEM]

Death is another significant theme in Yunus’s poems. According to him, death is the best advisor for humanity, as the Prophet Muhammad (pbuh) said: “The one who remembers death the most and is best in preparing for it. Those are the wisest.” (İM4259 İbn Mâce, Zühd, 31) A person who lives with an understanding of death’s advisory role lives a meaningful and righteous life.

About death Yunus says:

[POEM]
English:
“Whoever comes into this world must eventually leave it,
A guest in this world, one day they must set out for their homeland”
Turkish:
Bu dünyaya gelen kişi, ahir yine gitse gerek
Misafirdir, vatanına, bir gün sefer etse gerek
[/POEM]`,
    vocabulary: [
      { word: "piety", definition: "deep love, devotion, and moral respect towards Allah (Turkish: takva / hürmet)." },
      { word: "limited intellect", definition: "A person's partial or individual intellect (Turkish: cüz-i akıl), which helps them understand hereafter matters." },
      { word: "universal intellect", definition: "The supreme, universal intellect (Turkish: küllî akıl) that guides a person to true piety and devotion." },
      { word: "evident", definition: "clear and easy to see" },
      { word: "salvation", definition: "being saved spiritually" },
      { word: "wisest", definition: "having the most wisdom" },
    ],
    hotspots: [
      { id: 'h11-1', x: 35, y: 45, title: "Sûfî Thought", description: "Yunus emphasizes that for a person to reach salvation, the heart and reason/intellect must support one another." },
      { id: 'h11-2', x: 68, y: 52, title: "Death", description: "Death is presented as the best advisor for humanity, helping a person live a meaningful and righteous life." },
    ],
    animatedWords: ["piety", "limited intellect", "universal intellect", "evident", "salvation", "wisest"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex11-1',
        type: 'multiple-choice',
        title: "Salvation and Death",
        instructions: 'Choose the correct answer.',
        question: "Why is death important in Yunus’s poems?",
        options: [
          "It is the best advisor for humanity",
          "It is only a historical event",
          "It is not mentioned in his poetry",
        ],
        correctAnswer: 0,
        explanation: 'Yunus presents death as an invaluable advisor that teaches humans the futility of worldly vanity, keeps the ego in check, and guides them to choose a virtuous and righteous life.',
        feedback: {
          correct: 'Correct! By keeping death in mind, a person stays humble, behaves honestly, and aligns with prophetic wisdom.',
          incorrect: 'Incorrect. Try again! The text highlights that Yunus describes death as the best advisor for humanity, leading to a righteous life.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: "Morality and Bad Habits",
    image: 'https://picsum.photos/seed/yunus-b2-chapter12/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F11_Chapter_12_Morality_and_Bad_Habits.mp3?alt=media&token=205f9312-bf53-4bfe-9017-a894d5c53c3e',
    content: `According to Yunus, morality consists of abandoning behaviors unbecoming for humans. In Yunus’s understanding, immoral behaviors are described as “misbehavior” of the animalistic self. Values such as honesty, patience, humility, generosity, respect, trust in Allah, and modesty are important in Yunus Emre’s works. Through these values, Yunus Emre teaches people the path to a righteous life. Additionally, by addressing negative traits such as arrogance, anger, stinginess, greed, envy, backbiting, and slander, he has warned people to stay away from these harmful habits. Yunus Emre's poems are not only literary works but also a moral guide.

Here are some of his verses concerning morality:

Yunus says:

[POEM]
English:
“I’ve fallen into the prison of greed and cannot escape
It’s a hard, rock-solid place; I cannot break free”
Turkish:
Tamah hapsine düşdüm çıkamazın
Katı berkdür divan yıkamazın
[/POEM]

In another verse talking about patience, he says:

[POEM]
English:
“Patience is the foundation of a lasting kingdom.
Those blessed with patience will achieve greatness.”
Turkish:
Sabırlu devleti dâim olısar
Nasibi sabr olanlar uluyısar
[/POEM]`,
    vocabulary: [
      { word: "abandoning", definition: "leaving something completely" },
      { word: "unbecoming", definition: "not suitable or proper" },
      { word: "righteous", definition: "morally good and correct" },
      { word: "traits", definition: "personal qualities or characteristics" },
      { word: "greed", definition: "Excessive or insatiable desire for wealth or worldly gain (Turkish: tamah / hırs / açgözlülük)." },
      { word: "trust in Allah", definition: "Profound spiritual trust and reliance on Allah's decree (Turkish: tevekkül)." },
    ],
    hotspots: [
      { id: 'h12-1', x: 35, y: 45, title: "Moral Legacy", description: "Morality consists of abandoning behaviors unbecoming for humans, described as 'misbehavior' of the animalistic self." },
      { id: 'h12-2', x: 68, y: 52, title: "Bad Habits", description: "Yunus warns people to stay away from harmful habits like arrogance, anger, stinginess, greed, envy, backbiting, and slander." },
    ],
    animatedWords: ["abandoning", "unbecoming", "righteous", "traits", "greed", "patience", "trust in Allah"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex12-1',
        type: 'true-false',
        title: "Morality and Bad Habits",
        instructions: 'Decide if the statement is true or false.',
        question: "Yunus Emre warns people against harmful habits.",
        correctAnswer: true,
        explanation: 'Yunus Emre actively warns people against harmful habits like arrogance, anger, stinginess, greed, backbiting, and slander, calling them misbehaviors of the animalistic self.',
        feedback: {
          correct: 'Correct! He cautions that getting trapped in greed and anger prevents a person from leading a righteous life.',
          incorrect: 'Incorrect. The text confirms that Yunus specifically warns readers against negative traits such as arrogance, anger, stinginess, and greed.'
        }
      }
    ]
  },
  {
    id: 13,
    type: 'story',
    title: "A Lasting Legacy",
    image: 'https://picsum.photos/seed/yunus-b2-chapter13/1200/800',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F12_Chapter_13_A_Lasting_Legacy.mp3?alt=media&token=6bd8124a-88b7-41b3-8386-a79d83d16f1f',
    content: `Yunus says:

[POEM]
English:
“Whoever possesses patience rises to the heavens,
For within patience lies every kind of skill”
Turkish:
Sabır kimdeyise ol arşa süner
Ki sabr içinde bulınur dürlü hüner
[/POEM]

In another verse warning against anger and arrogance, he says:

[POEM]
English:
“Whoever is filled with anger loses their faith
If faith is required, one must give up anger and arrogance”
Turkish:
Buşu kimdeyise imanı gider
İman gerek ise vârını gider
[/POEM]

It is obvious that Yunus Emre was not only a prominent figure in his own time but has also left a lasting legacy. His writings are valuable not only as literary works but also as a moral guide for future generations.`,
    vocabulary: [
      { word: "prominent", definition: "important and well-known" },
      { word: "lasting", definition: "continuing for a long time" },
      { word: "legacy", definition: "an important word or phrase from the chapter" },
      { word: "Risâletü’n-Nushiye", definition: "an important word or phrase from the chapter" },
      { word: "Divan", definition: "an important word or phrase from the chapter" },
      { word: "anger", definition: "Anger or fury (Turkish: buşu / öfke) — identified by Yunus as a spiritual poison." },
    ],
    hotspots: [
      { id: 'h13-1', x: 35, y: 45, title: "Moral Legacy", description: "Yunus Emre's writings are valuable not only as literary works but also as a moral guide for future generations." },
      { id: 'h13-2', x: 68, y: 52, title: "A Lasting Legacy", description: "Yunus's verses warn that anger and arrogance destroy faith, and one must give them up for spiritual growth." },
    ],
    animatedWords: ["prominent", "lasting", "legacy", "Risâletü’n-Nushiye", "Divan", "anger"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex13-1',
        type: 'multiple-choice',
        title: "A Lasting Legacy",
        instructions: 'Choose the correct answer.',
        question: "What is one reason Yunus Emre left a lasting legacy?",
        options: [
          "His works guide people morally and spiritually",
          "He ruled Anatolia as a king",
          "He created trade routes",
        ],
        correctAnswer: 0,
        explanation: 'Yunus Emre\'s lasting legacy is rooted in how his poems act as timeless, simple moral and spiritual guides for generations seeking peace, patience, and ethical behavior.',
        feedback: {
          correct: 'Correct! His writings continue to serve as a vital moral guide that bridges centuries.',
          incorrect: 'Incorrect. Try again! Yunus was a poet and dervish whose spiritual legacy continues to guide readers morally, not a ruler or trader.'
        }
      }
    ]
  },
  {
    id: 14,
    type: 'story',
    title: 'References',
    image: '',
    audioUrl: '',
    content: `Bulduk, Üçler. "Yunus Emre Çağında Anadolu’nun Siyasal ve Sosyal Durumu," DTCF Dergisi Yunus Emre Özel Sayısı, 2021, s. 57-67.

Gürer, Banu. "Yunus Emre," Türk Maarif Ansiklopedisi, https://turkmaarifansiklopedisi.org.tr/yunus-emre.

Kara, Mustafa. "Tekke," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/tekke.

Ocak, Ahmet Yaşar. "Babaîlik," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/babailik.

Ocak, Ahmet Yaşar. Babaîler İsyanı, Dergah Yayınları, İstanbul, 2011.

Öngören, Reşat. "Sufi," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/sufi.

Sevim, Ali. "Keyhüsrev II," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/keyhusrev-ii.

Sümer, Faruk. "Keykubad I," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/keykubad-i.

Sümer, Faruk. "Kösedağ Savaşı," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/kosedag-savasi.

Tatcı, Mustafa. "Yûnus Emre," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/yunus-emre.

Yazıcı, Tahsin. "Derviş," TDV İslâm Ansiklopedisi, https://islamansiklopedisi.org.tr/dervis.

Yeniterzi, Emine. "Mesnevi-i Şerif ve Risaletü’n-Nushiyye’de Ortak Değerler," I. Ulusal Yunus Emre Sempozyumu, Karaman, 2010, s. 101-116.`,
    vocabulary: [],
    hotspots: [],
    animatedWords: []
  },
  {
    id: 15,
    type: 'quiz',
    title: 'Knowledge Check: Yunus Emre - B2',
    image: 'https://picsum.photos/seed/quiz-yunus-b2/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the B2 story of Yunus Emre, his age, Sûfî thought, poetry, morality, and legacy with these True/False questions.',
    exercises: [
      {
        id: 'b2-q1',
        type: 'true-false',
        title: 'Risâletü’n-Nushiye',
        instructions: 'Decide if the statement is true or false.',
        question: 'Risâletü’n-Nushiye is a didactic book of spiritual advice in the Mesnevi style written by Yunus Emre.',
        correctAnswer: true,
        explanation: 'The text describes Risâletü’n-Nushiye as a didactic advice book in the Mesnevi style.',
        feedback: { correct: 'Correct!', incorrect: 'It is indeed his advice book in Mesnevi style.' }
      },
      {
        id: 'b2-q2',
        type: 'true-false',
        title: 'Kösedağ Battle',
        instructions: 'Decide if the statement is true or false.',
        question: 'The defeat at Kösedağ in 1243 had a peaceful and positive impact on the cultural integration of Anatolia.',
        correctAnswer: false,
        explanation: 'The defeat caused the Mongols’ invasion and created serious political, economic, and social problems.',
        feedback: { correct: 'Correct!', incorrect: 'The battle caused destructive Mongol invasions and chaos.' }
      },
      {
        id: 'b2-q3',
        type: 'true-false',
        title: 'Lesson of Patience',
        instructions: 'Decide if the statement is true or false.',
        question: 'In his verses about patience, Yunus Emre describes patience as the foundation of a lasting kingdom.',
        correctAnswer: true,
        explanation: 'Yunus says: “Patience is the foundation of a lasting kingdom. Those blessed with patience will achieve greatness.”',
        feedback: { correct: 'Correct!', incorrect: 'Patience is indeed the foundation of a lasting kingdom.' }
      },
      {
        id: 'b2-q4',
        type: 'true-false',
        title: 'Spiritual Guide',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre was a dervish pupil of Maulana Rumi, spending thirty years bringing wood to his tekke.',
        correctAnswer: false,
        explanation: 'Yunus was a dervish pupil of Taptuk Emre, not Maulana Rumi.',
        feedback: { correct: 'Correct!', incorrect: 'Taptuk Emre was his spiritual tutor.' }
      },
      {
        id: 'b2-q5',
        type: 'true-false',
        title: 'Literary Style',
        instructions: 'Decide if the statement is true or false.',
        question: 'His works are particularly famous for combining high literary quality with simple, understandable language.',
        correctAnswer: true,
        explanation: 'This combination made his expressions memorable and accessible to both common people and scholars.',
        feedback: { correct: 'Correct!', incorrect: 'His style perfectly merged high literary quality with clarity.' }
      },
      {
        id: 'b2-q6',
        type: 'true-false',
        title: 'Anatolian Turkish',
        instructions: 'Decide if the statement is true or false.',
        question: 'Yunus Emre is widely respected as one of the founders of Anatolian Turkish literature.',
        correctAnswer: true,
        explanation: 'Yunus Emre is widely respected as a pioneer and founder of Anatolian Turkish literature.',
        feedback: { correct: 'Correct!', incorrect: 'He is indeed celebrated as one of its primary founders.' }
      }
    ]
  },
  {
    id: 16,
    type: 'vocabulary-match',
    title: 'Vocabulary Challenge',
    image: 'https://picsum.photos/seed/vocab-match-yunus-b2/1200/800',
    audioUrl: '',
    content: 'Match the words from the story with their correct meanings.',
    vocabularyPairs: [
      { word: 'didactic', meaning: 'Intended to teach, particularly in having moral instruction' },
      { word: 'turbulence', meaning: 'State of conflict, confusion, or strong agitation' },
      { word: 'pioneer', meaning: 'A person who is among the first to develop a new method' },
      { word: 'sincerity', meaning: 'The quality of being free from pretense or deceit' },
      { word: 'resilience', meaning: 'The capacity to recover quickly from difficulties' },
      { word: 'adversity', meaning: 'A state of serious or continued difficulty or misfortune' }
    ]
  },
  {
    id: 17,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    content: 'A complete list of vocabulary from the first half of the story.',
    image: 'https://picsum.photos/seed/glossary1-yunus-b2/1200/800',
    vocabulary: [
      { word: 'mystical', definition: 'Relating to spiritual mystery or direct union with the Divine.' },
      { word: 'philosophy', definition: 'The study of the theoretical basis of knowledge or belief.' },
      { word: 'didactic', definition: 'Intended to teach, particularly in having moral instruction.' },
      { word: 'turbulence', definition: 'State of conflict, confusion, or strong agitation.' },
      { word: 'destruction', definition: 'The action of causing severe damage or ruin.' },
      { word: 'interaction', definition: 'Reciprocal action or influence.' },
      { word: 'pioneer', definition: 'A person who is among the first to develop or use a new method.' },
      { word: 'spiritual', definition: 'Relating to the human spirit or soul as opposed to material things.' },
      { word: 'sincerity', definition: 'The quality of being free from pretense, deceit, or hypocrisy.' },
      { word: 'humility', definition: 'A modest view of one’s own importance.' },
      { word: 'compassion', definition: 'Sympathetic pity and concern for the sufferings or misfortunes of others.' },
      { word: 'generosity', definition: 'The quality of being kind and generous.' }
    ]
  },
  {
    id: 18,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    content: 'A complete list of vocabulary from the second half of the story.',
    image: 'https://picsum.photos/seed/glossary2-yunus-b2/1200/800',
    vocabulary: [
      { word: 'disciplined', definition: 'Showing a controlled form of behavior or working.' },
      { word: 'corrected', definition: 'Made right, free from error, or trained to be proper.' },
      { word: 'crooked', definition: 'Bent, not straight, or dishonest.' },
      { word: 'approached', definition: 'Came near or nearer to in character or time.' },
      { word: 'reflection', definition: 'Serious thought or consideration.' },
      { word: 'gossiping', definition: 'Talking casually or maliciously about other people’s private lives.' },
      { word: 'arrogance', definition: 'An offensive display of superiority or self-importance.' },
      { word: 'adversity', definition: 'A state of serious or continued difficulty or misfortune.' },
      { word: 'resilience', definition: 'The capacity to recover quickly from difficulties.' },
      { word: 'didacticism', definition: 'Instruction or moralizing in an art form or literature.' },
      { word: 'legacy', definition: 'Something transmitted by or received from an ancestor or predecessor.' }
    ]
  },
  {
    id: 19,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/exercises-yunus-b2/1200/800',
    content: 'Review what you have learned about Yunus Emre B2 through sequencing, drag-and-drop, and personal reflection exercises.',
    exercises: yunusB2FinalReviewExercises
  },
  {
    id: 20,
    type: 'final-challenge',
    title: 'Final Challenge: Yunus Emre B2',
    image: 'https://picsum.photos/seed/challenge-yunus-b2/1200/800',
    content: 'Test yourself with the final challenge. Answer 10 randomized questions from the entire story.'
  }
];
