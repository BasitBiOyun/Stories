import type { PageData } from '../../../../types';

type WordNote = { word: string; definition: string };
type Hotspot = { id: string; x: number; y: number; title: string; description: string };

const story = (
  id: number,
  title: string,
  image: string,
  audioUrl: string,
  content: string,
  vocabulary: WordNote[],
  hotspots: Hotspot[],
): PageData => ({ id, type: 'story', title, image, audioUrl, content, vocabulary, hotspots });

// Canonical Yunus Emre B1 story pages: real media, paired bilingual Word Notes and two chapter hotspots.
// Learning activities are attached in ../index.ts.
export const yunusB1Pages: PageData[] = [
  story(
    1,
    'Yunus Emre and Sûfîsm',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch1-clean.png?alt=media&token=35c3e7df-520e-4293-916b-7312d4aba9a0',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F00_Chapter_1.mp3?alt=media&token=8374c2f7-3dc6-480b-ae3b-3b0145c6f071',
    `Yunus Emre was a famous Turkish poet and a Sûfî from Anatolia. A Sûfî is a person who aims to get closer to Allah by following Islamic mysticism. Sûfis lead a way of life within the outer (visible) and inner rules of Islam. The outer part is related to the body's acts of worship, while the inner side refers to the heart's intentions and morality.

Sûfis follow moral principles such as seeking to improve and become better people, being patient in times of need, giving generously without expecting anything in return, doing good to everyone without biases, responding to evil with kindness, and not attaching importance to worldly matters such as wealth, status, and fame.

In addition to being a Sûfî, Yunus Emre was one of the first to write and say poems in simple Turkish. The words and phrases which he used helped develop a better literary Turkish. Yunus Emre is known as one of the founders of Turkish Sûfî literature.`,
    [
      { word: 'Sûfî', definition: 'A Muslim who follows a spiritual path to become closer to Allah.' },
      { word: 'outer', definition: 'Related to what is visible or outward.' },
      { word: 'biases', definition: 'Unfair opinions or preferences about people.' },
      { word: 'literary', definition: 'Related to literature and artistic writing.' },
    ],
    [
      { id: 'yunus-b1-en-1-1', x: 31, y: 39, title: 'Sûfîsm', description: 'The chapter joins outward worship with inward intention and morality.' },
      { id: 'yunus-b1-en-1-2', x: 70, y: 61, title: 'Moral Principles', description: 'Patience, generosity, kindness, and reduced attachment to worldly status are central values.' },
    ],
  ),
  story(
    2,
    'His Language and Education',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch2-clean.png?alt=media&token=ef85a87c-039b-46e1-8d62-abeea2891b07',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F01_Chapter_2_His_Language_and_Education.mp3?alt=media&token=34d1568e-fb36-486e-914f-61928ab3bc20',
    `People love his works very much due to his style. It is neither too simple nor too complex. His works are very popular because they combine great literary quality with simple language. This plain language helps people understand his writings and sayings easily. Philosophy in his poems includes important moral principles that still have a significant influence on Turkish culture and society.

According to historical sources, he lived during the same era as important people like Hacı Bektaş-ı Veli and Mevlana Celaleddin Rumi. He was born around 1240–1241 and died around 1320–1321. Some sources say that he received a good madrasa education and had a strong knowledge of Arabic, Persian, and the Islamic sciences of his time. But he also studied Allah’s love and morals at the tekke, which was a place where Sûfî education was taught under the guidance of a sheikh (spiritual tutor).`,
    [
      { word: 'plain language', definition: 'Language that is clear and easy to understand.' },
      { word: 'era', definition: 'A particular period of history.' },
      { word: 'madrasa', definition: 'A traditional Islamic school or place of learning.' },
      { word: 'spiritual tutor', definition: 'A teacher who guides someone in spiritual learning.' },
    ],
    [
      { id: 'yunus-b1-en-2-1', x: 37, y: 64, title: 'Simple Language', description: 'His works combine literary quality with language people can understand.' },
      { id: 'yunus-b1-en-2-2', x: 66, y: 34, title: 'Education', description: 'The chapter describes both madrasa education and learning in a tekke.' },
    ],
  ),
  story(
    3,
    'Tekkés and Anatolia',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch3-clean.png?alt=media&token=e198d320-064d-4e55-ba56-f3157dead704',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F02_Chapter_3_Tekk%C3%A9s_and_Anatolia.mp3?alt=media&token=682bf6e3-309d-4d12-9672-3a2e89a0419e',
    `At that time, tekkes were not only places for Sûfî training. They were also important community organizations that helped people and brought them together. Furthermore, they received support from government officials. These places were very important for fine arts too, especially poetry. Many famous Turkish poets improved their skills in tekkes. Yunus Emre was also a great poet who trained under his spiritual tutor, Taptuk Emre.

Yunus Emre lived during the 13th and 14th centuries, which was a very difficult time in Anatolia. The Anatolian Seljuks were seriously weakened by the Babai revolts in the 13th century. While the negative effects of these revolts were still being felt, the defeat at Kösedağ took place. The defeat caused the Mongols' invasion of Anatolia. Because of these hard circumstances, Anatolia faced serious political, economic, and social problems. People were struggling to cope with these tough situations.`,
    [
      { word: 'community organizations', definition: 'Groups that organize help and activities for a community.' },
      { word: 'fine arts', definition: 'Creative arts such as poetry, music, and painting.' },
      { word: 'revolts', definition: 'Organized rebellions against authority.' },
      { word: 'invasion', definition: 'The act of entering a land by force.' },
    ],
    [
      { id: 'yunus-b1-en-3-1', x: 27, y: 54, title: 'Tekkés', description: 'Tekkés served spiritual, social, and cultural functions.' },
      { id: 'yunus-b1-en-3-2', x: 73, y: 35, title: 'Anatolia', description: 'The chapter places Yunus in a period of revolt, defeat, invasion, and serious social problems.' },
    ],
  ),
  story(
    4,
    'The Babai Revolts',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch4-clean.png?alt=media&token=6da91fc7-0438-4fea-8808-5856c2ad63e8',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F03_Chapter_4_The_Babai_Revolts.mp3?alt=media&token=35484302-b0f7-4108-8c31-de80109de40f',
    `If we take a closer look at this historical atmosphere, we can better understand Anatolia—the land where Yunus Emre lived and recited his unforgettable verses.

The rule of the Anatolian Seljuk Sultan Alaeddin I (1220–1237) was the most powerful and brilliant period of the Seljuks. He expanded the country’s borders and established a navy in the Mediterranean and Black Seas. At the time of his death, the Seljuks were the most powerful and largest state in the Middle East. However, because of the poor governance of his son, Giyaseddin Keyhüsrev II (1237–1246), the Seljuk economic and social structure began to decline. The Mongol invasion caused many people to migrate to Anatolia from Central Asia, which totally turned the lives of the local people upside down. At the beginning of the 13th century, the Turkmen population grew in Anatolia. However, Giyaseddin Keyhüsrev II’s failure to manage this situation worsened the social and economic chaos.`,
    [
      { word: 'navy', definition: 'A country’s military force that operates at sea.' },
      { word: 'governance', definition: 'The way a state or organization is managed.' },
      { word: 'decline', definition: 'A process of becoming weaker or less successful.' },
      { word: 'chaos', definition: 'A state of serious disorder and confusion.' },
    ],
    [
      { id: 'yunus-b1-en-4-1', x: 34, y: 31, title: 'Seljuk Anatolia', description: 'The chapter contrasts a powerful Seljuk period with later decline.' },
      { id: 'yunus-b1-en-4-2', x: 69, y: 66, title: 'Mongol Pressure', description: 'Migration and poor governance are linked with worsening social and economic chaos.' },
    ],
  ),
  story(
    5,
    'Kösedağ and Destruction',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch5-clean.png?alt=media&token=c745aa27-2c80-4af2-984c-6002e9c24247',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F04_Chapter_5_K%C3%B6seda%C4%9F_and_Destruction.mp3?alt=media&token=e36afa71-bbf1-4895-bc30-87baf97a40bb',
    `Because of many economic and social problems, the Turkmen people were looking for a way out and started a revolt against the state. They followed spiritual leaders called 'Baba', because they believed these leaders would save them. The rebellion spread rapidly; the Turkmen achieved significant success. In the end, the Seljuk forces put an end to the rebellion with great difficulty and defeated the rebels with swords.

However, this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire. In 1242, the Mongols captured Erzurum and killed its people. This disaster caused deep sorrow and fear among the Seljuk people. Finally, in 1243, the Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. The Mongols used the classic false retreat and circling tactic. Thus, they easily defeated the Seljuks. After that, the Mongols destroyed and raided Sivas, Kayseri, and Erzincan, leaving not a single stone standing.`,
    [
      { word: 'revolt', definition: 'An organized action against a government or authority.' },
      { word: 'captured', definition: 'Took control of a place by force.' },
      { word: 'clashed', definition: 'Fought or came into violent conflict.' },
      { word: 'false retreat', definition: 'A tactic in which an army pretends to withdraw to mislead the enemy.' },
    ],
    [
      { id: 'yunus-b1-en-5-1', x: 24, y: 44, title: 'Kösedağ', description: 'The 1243 battle ended in a major Seljuk defeat.' },
      { id: 'yunus-b1-en-5-2', x: 76, y: 58, title: 'Destruction', description: 'The defeat was followed by raids and destruction in major Anatolian cities.' },
    ],
  ),
  story(
    6,
    'Chaos in Anatolia',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch6-clean.png?alt=media&token=46c5c3ce-c38b-4795-be21-bf782a93fd9d',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F05_Chapter_6_Chaos_in_Anatolia.mp3?alt=media&token=d8eaa69b-4531-4735-803e-551ea619d357',
    `The men were killed with swords. The women and children were taken captive and forced to go with the Mongols. They caused a lot of destruction, sadness, and misery everywhere they went. After these cruel raids, cities were deserted. Yunus Emre lived during a time when the Mongol army invaded Anatolia.

These events created an atmosphere of panic in Anatolia that had never been seen before. Finally, an agreement was made with the Mongols, but in time the Seljuks became dependent on them. The Seljuk sultans acted almost like government officials for the Mongols. A significant part of state income began to be sent to the Mongols every year. However, this tax increased continuously and this made both the state and the people poorer. After 1277, the Mongols began to administer Anatolia through the commanders and governors that they sent. And in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire (The Mongol state centred in Iran).`,
    [
      { word: 'captive', definition: 'A person kept as a prisoner.' },
      { word: 'deserted', definition: 'Empty because people have left.' },
      { word: 'dependent', definition: 'Relying on another person or power.' },
      { word: 'state income', definition: 'Money received by a government or state.' },
    ],
    [
      { id: 'yunus-b1-en-6-1', x: 39, y: 67, title: 'Mongol Raids', description: 'The raids brought destruction, captivity, deserted cities, and panic.' },
      { id: 'yunus-b1-en-6-2', x: 65, y: 32, title: 'Ilkhanate Empire', description: 'Seljuk dependence deepened until Anatolia was directly attached to the Ilkhanate.' },
    ],
  ),
  story(
    7,
    'Yunus as a Wise Dervish',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch7-clean.png?alt=media&token=f8a95b8e-4bbb-4786-a4d3-abdba63be0ad',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F06_Chapter_7_Yunus_as_a_Wise_Dervish.mp3?alt=media&token=b49d99a5-9f7c-4fc0-9cc5-f2ad927740cf',
    `Anatolia was experiencing total chaos. During the same period, the shaykhs from the regions of Turkestan, Khorasan and Iran came to Anatolia under Mongol pressure. These shaykhs trained dervishes in their teachings. These dervishes were influential among nomads. They were spreading a simple understanding of Islam and establishing popular Sûfîsm.

So in such an environment, Yunus Emre also appeared as a wise Sûfî / dervish and travelled around Anatolia. He tried to respond to people’s efforts to make sense of life in hard days with his Sûfî identity. Poetry was his most influential tool.

Yunus’s understanding of Sûfîsm comes from the Qur’an and the Prophet's Sunnah. He was also inspired by the ideas and experiences of earlier Muslim Sûfîs.`,
    [
      { word: 'shaykhs', definition: 'Religious or spiritual teachers.' },
      { word: 'dervishes', definition: 'People following a Sûfî spiritual path.' },
      { word: 'nomads', definition: 'People who move from place to place rather than living permanently in one place.' },
      { word: 'respond', definition: 'To answer or react to a situation.' },
    ],
    [
      { id: 'yunus-b1-en-7-1', x: 35, y: 58, title: 'Wise Sûfî', description: 'Yunus appears as a travelling wise Sûfî in a society experiencing chaos.' },
      { id: 'yunus-b1-en-7-2', x: 67, y: 29, title: 'Poetry', description: 'The chapter describes poetry as his most influential tool.' },
    ],
  ),
  story(
    8,
    'Tawhid and Unity',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch8-clean.png?alt=media&token=2a72631c-304d-4007-8463-eae2d79995bc',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F07_Chapter_8_Tawhid_and_Unity.mp3?alt=media&token=932781cc-7bbf-4405-b629-4aa82c526406',
    `In his poems, he expresses a vivid love for Allah as a way of life, along with fear of Allah and loyalty to the Prophet Muhammad (pbuh).

One of the most important basic spiritual principles in his works is the idea of Tawhid, which means the Oneness of Allah. According to Yunus Emre, Allah, the Creator, is the source of all things. So everything is connected to Him. The Creator is the true and only reality. According to the theory of the unity of existence, which was a key idea for Yunus Emre, there is only one true existence in the universe, and that is Allah.

Yunus says:

[POEM]
English:
“The entire universe is Tawhid; Adam is the one who knows Tawhid.
Whoever denies this Tawhid is an enemy to his own soul.”
Turkish:
Tevhîd imiş cümle âlem, tevhîdi bilendir Âdem
Bu tevhîdi inkâr iden öz cânına düşmânımış
[/POEM]`,
    [
      { word: 'loyalty', definition: 'Strong support and faithfulness to someone.' },
      { word: 'Tawhid', definition: 'The belief that Allah is One.' },
      { word: 'Oneness', definition: 'The state of being one and undivided.' },
      { word: 'unity of existence', definition: 'The idea of one true existence described in the chapter.' },
    ],
    [
      { id: 'yunus-b1-en-8-1', x: 28, y: 36, title: 'Tawhid', description: 'Tawhid is defined as the Oneness of Allah.' },
      { id: 'yunus-b1-en-8-2', x: 72, y: 63, title: 'Unity', description: 'The chapter presents Allah as the source of all things and the true reality.' },
    ],
  ),
  story(
    9,
    'Allah’s Commands',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch9-clean.png?alt=media&token=5895a688-a4f9-4f23-a8a6-51a05df4dbd4',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F08_Chapter_9_Allah%E2%80%99s_Commands.mp3?alt=media&token=413b5ace-3eda-4ea1-a34d-f88cfc62ae28',
    `As a result of creation, the original unity lost its unity and multiple existence appeared. All creations in the world are just reflections of Allah’s names. In this way, every creature is an image, but only Allah is truly real. The main goal for humans is to reach unity with Allah.

His words remind us of Allah’s commands for achieving this unity.

Yunus says:

[POEM compact]
English:
“Anyone who claims to be a Muslim should know the requirements of Islam,
He should follow Allah’s command and pray the five daily prayers”
Turkish:
Müslümanım diyen kişi şartı nedir bilse gerek
Tanrı'nın buyruğun tutup beş vakit namaz kılsa gerek
[/POEM]

Love is a very important theme in Yunus Emre’s works. It is the most important part of his philosophy. Those who love the Creator love the created, and those who love the created also love the Creator.`,
    [
      { word: 'creation', definition: 'The act or result of bringing things into existence.' },
      { word: 'multiple existence', definition: 'The many created forms described in the chapter.' },
      { word: 'reflections', definition: 'Things that show or represent something else.' },
      { word: 'five daily prayers', definition: 'The five regular prayers Muslims perform each day.' },
    ],
    [
      { id: 'yunus-b1-en-9-1', x: 40, y: 32, title: 'Allah’s Commands', description: 'The poem names following Allah’s command and the five daily prayers.' },
      { id: 'yunus-b1-en-9-2', x: 63, y: 68, title: 'Love', description: 'The closing lines connect love of the Creator with love of created beings.' },
    ],
  ),
  story(
    10,
    'The Heart and Love',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch10-clean.png?alt=media&token=743387a9-3784-4076-bca3-042cdd7c28ab',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F09_Chapter_10_The_Heart_and_Love.mp3?alt=media&token=9e3077d5-22aa-4723-8587-db790e04157e',
    `Love brings unity and harmony. According to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.

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
    [
      { word: 'harmony', definition: 'A peaceful state in which things work well together.' },
      { word: 'heartbreak', definition: 'Deep emotional sadness or pain.' },
      { word: 'throne of the Lord', definition: 'The expression used in the chapter for the spiritual importance of the heart.' },
      { word: 'intellect', definition: 'The ability to think, understand, and reason.' },
    ],
    [
      { id: 'yunus-b1-en-10-1', x: 26, y: 62, title: 'The Heart', description: 'The chapter describes the heart as the center of love and understanding.' },
      { id: 'yunus-b1-en-10-2', x: 74, y: 37, title: 'Intellect', description: 'Intellect is also presented as an important value.' },
    ],
  ),
  story(
    11,
    'Intellect and Death',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch11-clean.png?alt=media&token=2fb97415-2254-46fa-9409-6ec1eb6678d4',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F10_Chapter_11_Intellect_and_Death.mp3?alt=media&token=9bbacec5-d4da-45ce-819d-2299f3747185',
    `He highlights that for a person to reach salvation, heart and intellect must support one another.

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
    [
      { word: 'salvation', definition: 'Being saved spiritually or reaching spiritual safety.' },
      { word: 'wisdom', definition: 'The ability to use knowledge and experience well.' },
      { word: 'advisor', definition: 'A person or thing that gives guidance.' },
      { word: 'homeland', definition: 'The place a person considers their home country or native land.' },
    ],
    [
      { id: 'yunus-b1-en-11-1', x: 38, y: 35, title: 'Intellect', description: 'Heart and intellect are presented as supporting one another.' },
      { id: 'yunus-b1-en-11-2', x: 64, y: 64, title: 'Death as an Advisor', description: 'Remembering death is connected with meaningful and honest living.' },
    ],
  ),
  story(
    12,
    'Morality and Good Habits',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch12-clean.png?alt=media&token=dd15c0c8-a21b-424a-93a8-fbb6288eebd8',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F11_Chapter_12_Morality_and_Good_Habits.mp3?alt=media&token=d1f94fde-9bcd-47b9-9dd7-64fad10e4dd3',
    `Yunus believes that true morality is about giving up bad habits that are not suitable for people. Moral principles such as honesty, patience, humility, generosity, respect, trust in Allah, and modesty are important in Yunus Emre’s works. With these principles, Yunus Emre teaches people the path to an honest life. He also taught people to avoid bad habits like being arrogant, stingy, greedy, selfish, or jealous, and gossiping.

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
    [
      { word: 'morality', definition: 'Principles about right and wrong behavior.' },
      { word: 'humility', definition: 'The quality of not thinking you are better than others.' },
      { word: 'generosity', definition: 'The willingness to give and help others.' },
      { word: 'greed', definition: 'A strong selfish desire for more wealth or possessions.' },
    ],
    [
      { id: 'yunus-b1-en-12-1', x: 30, y: 67, title: 'Morality', description: 'The chapter describes morality as building virtues and giving up harmful habits.' },
      { id: 'yunus-b1-en-12-2', x: 71, y: 31, title: 'Good Habits', description: 'Honesty, patience, humility, generosity, respect, trust, and modesty are named.' },
    ],
  ),
  story(
    13,
    'A Moral Guide',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Fimages%2Fyunus_b1_ch13-clean.png?alt=media&token=eebe2a5e-58f3-4b6d-8937-4f2d895b8537',
    'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb1%2Faudio%2F12_Chapter_13_A_Moral_Guide.mp3?alt=media&token=40b8f838-654b-4c54-9555-b670353ceebc',
    `In another verse, he talks about “patience” and says:

[POEM]
English:
“Patience is the foundation of an everlasting kingdom,
And those who are blessed with patience will reach greatness.”
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

In the following verse, he warns against “rage and arrogance”:

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
    [
      { word: 'patience', definition: 'The ability to stay calm and continue through difficulty.' },
      { word: 'rage', definition: 'Very strong anger.' },
      { word: 'arrogance', definition: 'The belief that you are better or more important than others.' },
      { word: 'moral guide', definition: 'Something that teaches or supports good and ethical behavior.' },
    ],
    [
      { id: 'yunus-b1-en-13-1', x: 25, y: 56, title: 'Moral Guide', description: 'The final chapter presents Yunus Emre’s poems as continuing moral guidance.' },
      { id: 'yunus-b1-en-13-2', x: 74, y: 33, title: 'Patience', description: 'Patience is praised, while rage and arrogance are warned against.' },
    ],
  ),
  { id: 14, type: 'quiz', title: 'Knowledge Check: Yunus Emre - B1', image: '', content: 'Check your understanding of the complete B1 story.' },
  { id: 15, type: 'vocabulary-match', title: 'Vocabulary Challenge', image: '', content: 'Match key B1 words from the story with their meanings.' },
  {
    id: 16,
    type: 'glossary',
    title: 'Master Glossary - Part 1',
    image: '',
    content: 'Review Word Notes from Chapters 1–7.',
    vocabulary: [
      { word: 'Sûfî', definition: 'A Muslim who follows a spiritual path to become closer to Allah.' },
      { word: 'outer', definition: 'Related to what is visible or outward.' },
      { word: 'biases', definition: 'Unfair opinions or preferences about people.' },
      { word: 'literary', definition: 'Related to literature and artistic writing.' },
      { word: 'plain language', definition: 'Language that is clear and easy to understand.' },
      { word: 'era', definition: 'A particular period of history.' },
      { word: 'madrasa', definition: 'A traditional Islamic school or place of learning.' },
      { word: 'spiritual tutor', definition: 'A teacher who guides someone in spiritual learning.' },
      { word: 'community organizations', definition: 'Groups that organize help and activities for a community.' },
      { word: 'fine arts', definition: 'Creative arts such as poetry, music, and painting.' },
      { word: 'revolts', definition: 'Organized rebellions against authority.' },
      { word: 'invasion', definition: 'The act of entering a land by force.' },
      { word: 'navy', definition: 'A country’s military force that operates at sea.' },
      { word: 'governance', definition: 'The way a state or organization is managed.' },
      { word: 'decline', definition: 'A process of becoming weaker or less successful.' },
      { word: 'chaos', definition: 'A state of serious disorder and confusion.' },
      { word: 'revolt', definition: 'An organized action against a government or authority.' },
      { word: 'captured', definition: 'Took control of a place by force.' },
      { word: 'clashed', definition: 'Fought or came into violent conflict.' },
      { word: 'false retreat', definition: 'A tactic in which an army pretends to withdraw to mislead the enemy.' },
      { word: 'captive', definition: 'A person kept as a prisoner.' },
      { word: 'deserted', definition: 'Empty because people have left.' },
      { word: 'dependent', definition: 'Relying on another person or power.' },
      { word: 'state income', definition: 'Money received by a government or state.' },
      { word: 'shaykhs', definition: 'Religious or spiritual teachers.' },
      { word: 'dervishes', definition: 'People following a Sûfî spiritual path.' },
      { word: 'nomads', definition: 'People who move from place to place rather than living permanently in one place.' },
      { word: 'respond', definition: 'To answer or react to a situation.' },
    ],
  },
  {
    id: 17,
    type: 'glossary',
    title: 'Master Glossary - Part 2',
    image: '',
    content: 'Review Word Notes from Chapters 8–13.',
    vocabulary: [
      { word: 'loyalty', definition: 'Strong support and faithfulness to someone.' },
      { word: 'Tawhid', definition: 'The belief that Allah is One.' },
      { word: 'Oneness', definition: 'The state of being one and undivided.' },
      { word: 'unity of existence', definition: 'The idea of one true existence described in the chapter.' },
      { word: 'creation', definition: 'The act or result of bringing things into existence.' },
      { word: 'multiple existence', definition: 'The many created forms described in the chapter.' },
      { word: 'reflections', definition: 'Things that show or represent something else.' },
      { word: 'five daily prayers', definition: 'The five regular prayers Muslims perform each day.' },
      { word: 'harmony', definition: 'A peaceful state in which things work well together.' },
      { word: 'heartbreak', definition: 'Deep emotional sadness or pain.' },
      { word: 'throne of the Lord', definition: 'The expression used in the chapter for the spiritual importance of the heart.' },
      { word: 'intellect', definition: 'The ability to think, understand, and reason.' },
      { word: 'salvation', definition: 'Being saved spiritually or reaching spiritual safety.' },
      { word: 'wisdom', definition: 'The ability to use knowledge and experience well.' },
      { word: 'advisor', definition: 'A person or thing that gives guidance.' },
      { word: 'homeland', definition: 'The place a person considers their home country or native land.' },
      { word: 'morality', definition: 'Principles about right and wrong behavior.' },
      { word: 'humility', definition: 'The quality of not thinking you are better than others.' },
      { word: 'generosity', definition: 'The willingness to give and help others.' },
      { word: 'greed', definition: 'A strong selfish desire for more wealth or possessions.' },
      { word: 'patience', definition: 'The ability to stay calm and continue through difficulty.' },
      { word: 'rage', definition: 'Very strong anger.' },
      { word: 'arrogance', definition: 'The belief that you are better or more important than others.' },
      { word: 'moral guide', definition: 'Something that teaches or supports good and ethical behavior.' },
    ],
  },
  { id: 18, type: 'exercises', title: 'Final Review & Reflection', image: '', content: 'Retrieve the book through sequencing, matching, reflection, and the Review Quiz.' },
  { id: 19, type: 'final-challenge', title: 'Final Challenge: Yunus Emre B1', image: '', content: 'Complete the 10-item whole-book Final Challenge.' },
];
