import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './exercises';
import { yunusB2LanguageFocusExercises } from './languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './languageFocus3';

const rawYunusB2Pages: PageData[] = [
// c01a
  {
    id: 1,
    type: 'story',
    title: 'Yunus Emre and Sûfîsm',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch1.png?alt=media&token=25cb0741-f1fe-4df1-abb9-8550a2926029',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=875dc868-3960-407d-9839-bed3b5d00a39',
    content: `Yunus Emre was a great Anatolian poet and Muslim mystic/sûfî. Sûfî is a person who seeks closeness to Allah by adopting Islamic mysticism. Sûfis maintain a lifestyle within the outer (visible) and inner norms of Islam. The outer part relates to the body's acts of worship, whereas the inner side handles the morality and intentions of the heart. Sûfis adhere to moral principles that include the pursuit of becoming better people, the ability to remain patient during difficult times, the act of giving generously without expecting any return, the act of doing good to all individuals without prejudice, the response to evil with kindness, and not attaching importance to worldly possessions such as wealth, status, and fame.

In addition to his standing as a Sûfî, Yunus Emre was one of the Turkish poets to play a crucial role in the development of Old Anatolian Turkish. The words and expressions that he used made a significant contribution to the development of Turkish as a literary language. He established a literary tradition based on Sufism. One of the most important factors in the popularity of Yunus Emre’s works among the public is his style.`,
    vocabulary: [
      { word: 'Islamic mysticism', definition: 'a spiritual tradition within Islam focused on inner purification and closeness to Allah' },
      { word: 'crucial', definition: 'extremely important to the development or outcome of something' },
      { word: 'moral principles', definition: 'standards that guide judgments about right conduct and character' },
      { word: 'generously', definition: 'in a willing and giving way, especially by giving more than is expected' },
      { word: 'literary tradition', definition: 'a continuing body of writing shaped by shared styles, themes, or methods' },
    ],
    hotspots: [
      { id: 'h1-1', x: 27, y: 38, title: 'Old Anatolian Turkish', description: 'Yunus Emre played a crucial role in the development of Old Anatolian Turkish and established a literary tradition based on Sufism.' },
      { id: 'h1-2', x: 71, y: 58, title: 'Sûfî', description: 'Sûfis maintain a lifestyle within the outer acts of worship and the inner morality and intentions of the heart.' },
    ],
  },
  {
    id: 2,
    type: 'story',
    title: 'His Style and Education',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch2.png?alt=media&token=48b7e1b9-9be8-4da2-803c-5547d7f38ff0',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F01_Chapter_2_His_Style_and_Education.mp3?alt=media&token=435cb519-196c-4487-b756-03934193b755',
    content: `For, his style is neither so simple nor so complex. Thus, his works have both literary value and are easy to understand. His philosophy includes fundamental values that have a significant influence on Turkish culture and ethics in Turkish society.

According to historical accounts, he was a contemporary of famous figures such as Hacı Bektaş-ı Veli, Mevlana Celaleddin-i Rumi, and Saru Saltuk. As to the widely accepted view, he was born in 1240–41 and died in 1320–21. He is considered the founder of Turkish Sûfî literature.

Some sources note that he received a good madrasa education and had a strong knowledge of Arabic, Persian, and the Islamic sciences of his time. However, his education was not limited to madrasas. He also studied both divine love and morals at the tekke, which was a place where Sufi education was taught under the guidance of a sheikh (spiritual tutor).

At that time, tekkes were not just an institution that offers Sûfî training but they were also important civil society organizations that strengthened social solidarity and cooperation and also received support from government officials of their time.`,
    vocabulary: [
      { word: 'contemporary', definition: 'living or existing during the same historical period' },
      { word: 'solidarity', definition: 'unity and mutual support among members of a community' },
      { word: 'literary value', definition: 'importance or quality that a work has as literature' },
      { word: 'madrasas', definition: 'Islamic educational institutions in which religious and other scholarly subjects are taught' },
      { word: 'spiritual tutor', definition: 'a person who guides another person in religious or spiritual development' },
    ],
    hotspots: [
      { id: 'h2-1', x: 32, y: 63, title: 'Historical accounts', description: 'The chapter qualifies biographical claims with phrases such as “According to historical accounts” and “Some sources note”.' },
      { id: 'h2-2', x: 74, y: 34, title: 'Education', description: 'Yunus received madrasa education and also studied divine love and morals at the tekke under a sheikh.' },
    ],
  },
  {
    id: 3,
    type: 'story',
    title: 'Tekkes and Difficult Times',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch3.png?alt=media&token=c1ddd1b0-c267-4717-920a-a57294e3eb2a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F02_Chapter_3_Tekk%C3%A9s_and_Difficult_Times.mp3?alt=media&token=ab8a1aef-6f3b-472d-9cdf-27afba737acf',
    content: `Besides, they were leading institutions in the field of the fine arts, particularly poetry. Many of the great masters of Turkish poetry were trained in tekkes. Yunus Emre was also one of the great masters of poetry who had been trained under his sheikh, Taptuk Emre.

The 13th and 14th centuries, the period in which Yunus Emre was born and lived, coincided with hard times. In those years, the Anatolian Seljuks were severely weakened by the Babai uprisings. This was immediately followed by the defeat at Kösedağ. The defeat at Kösedağ facilitated the Mongols' invasion of Anatolia. Anatolia faced political, economic, and social hardships as a result of these assaults. Society was struggling to cope with these trials.

If we take a closer look at this historical atmosphere, we can better understand Anatolia—the land where Yunus Emre lived and recited his unforgettable verses.

The rule of the Anatolian Seljuk Sultan Alaeddin I (1220–1237) was the most powerful and glorious period of the Seljuks. He expanded the country’s borders and established a navy in the Mediterranean and Black Seas.`,
    vocabulary: [
      { word: 'poetry', definition: 'literary writing that uses carefully chosen language, rhythm, and imagery' },
      { word: 'coincided', definition: 'happened during the same period as another event or condition' },
      { word: 'hard times', definition: 'a period marked by serious social, political, or economic difficulty' },
      { word: 'invasion', definition: 'the act of entering a territory by force, especially with an army' },
      { word: 'navy', definition: 'the branch of a state’s armed forces that operates at sea' },
    ],
    hotspots: [
      { id: 'h3-1', x: 24, y: 52, title: 'fine arts', description: 'Tekkes were leading institutions in fine arts like poetry where great masters, including Yunus under Taptuk Emre, were trained.' },
      { id: 'h3-2', x: 66, y: 29, title: 'hard times', description: 'The chapter connects the Babai uprisings, Kösedağ and Mongol invasion with political, economic and social hardship.' },
    ],
// c01b
// c02a
  },
  {
    id: 4,
    type: 'story',
    title: 'The Babai Uprisings',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch4.png?alt=media&token=8d53944a-2f7d-432e-9623-6bfc88c6b5ac',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F03_Chapter_4_The_Babai_Uprisings.mp3?alt=media&token=3f4c837a-baeb-4f66-a2b1-afe074eb5044',
    content: `At the time of his death, the Seljuks were the most powerful and largest state in the Middle East. However, due to the poor governance of his son, Giyaseddin Keyhüsrev II (1237–1246), the Seljuk economic and social structure began to decline. Starting in the 13th century, the Turkmen population grew in Anatolia. When the migrations caused by the Mongol invasion were added to this, lives of people in Anatolia were totally turned upside down. The nomadic Oguz and Turkmen tribes, who had migrated to Anatolia from Central Asia to escape the Mongol invasion, were exhausted from wanderings and were looking for safe lands to settle in. This crowd of nomads was also causing unrest within the community. Giyaseddin Keyhüsrev II’s failure to manage this situation even worsened the social and economic chaos.

Throughout history, societies that faced difficult circumstances have always awaited a divine figure to save them. The Turkmen, too, were awaiting such a figure. In 1240, they rebelled under the leadership of Baba İshak who was the follower of Baba İlyas. Baba İlyas was the founder of a non-Sunni religious–mystical movement.`,
    vocabulary: [
      { word: 'decline', definition: 'a gradual process of becoming weaker or less effective' },
      { word: 'nomadic', definition: 'living by moving from place to place rather than settling permanently' },
      { word: 'poor governance', definition: 'weak or ineffective management of public affairs and political responsibilities' },
      { word: 'unrest', definition: 'a state of social tension, disturbance, or dissatisfaction' },
      { word: 'rebelled', definition: 'resisted or fought against established political authority' },
    ],
    hotspots: [
      { id: 'h4-1', x: 38, y: 34, title: 'Mongol invasion', description: 'Nomadic Turkmen tribes fleeing the Mongol invasion were exhausted and looking for safe lands to settle in.' },
      { id: 'h4-2', x: 73, y: 67, title: 'Turkmen rebelled', description: 'In 1240, the Turkmen rebelled under Baba İshak, a follower of Baba İlyas.' },
    ],
  },
  {
    id: 5,
    type: 'story',
    title: 'Kösedağ and the Mongols',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch5.png?alt=media&token=f84f310d-6250-4479-8259-a926a133742b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F04_Chapter_5_K%C3%B6seda%C4%9F_and_the_Mongols.mp3?alt=media&token=96f1b9f7-a211-4260-8d1a-3ce0f5723136',
    content: `In the eyes of the Turkmen, these fathers were divine saviors. The rebellion spread rapidly; the Turkmen achieved significant success. In the end, the Seljuk forces suppressed the rebellion with great difficulty and put the rebels to the sword.

However, this situation gave the Mongols in Azerbaijan the courage to attack the Seljuk Empire. In late 1242, the Mongols captured Erzurum and killed its people with swords. This disaster caused deep sorrow and fear among the Seljuk people.

Finally, in 1243, the Seljuk army and the Mongols clashed at Kösedağ, 80 km northeast of Sivas. The Mongols, using the classic false retreat and circling tactic, wiped out the Seljuk forces. Following their easy victory at Kösedağ, the Mongols destroyed and plundered Sivas, Kayseri, and Erzincan, leaving not a single stone standing. They slaughtered the men with swords; women and children were taken captive and forced to follow the Mongol army. Throughout Yunus’s life, this Mongol storm swept across Anatolia like a roller, leaving behind blood, misery, and ruins. Sources say: “The Mongols slaughtered the people of the great cities and towns so mercilessly that hardly anyone remained there.”`,
    vocabulary: [
      { word: 'false retreat', definition: 'a military tactic in which a force pretends to withdraw in order to draw the enemy forward' },
      { word: 'captive', definition: 'a person taken and held by force, especially after conflict' },
      { word: 'suppressed', definition: 'stopped or brought under control by force' },
      { word: 'plundered', definition: 'stole goods from a place by force, especially during war or disorder' },
      { word: 'slaughtered', definition: 'killed people in large numbers in a violent and brutal way' },
    ],
    hotspots: [
      { id: 'h5-1', x: 29, y: 68, title: 'false retreat', description: 'At Kösedağ in 1243, the Mongols defeated the Seljuk forces using a false retreat and circling tactic.' },
      { id: 'h5-2', x: 69, y: 42, title: 'victory at Kösedağ', description: 'The text presents Kösedağ as a turning point followed by severe destruction and human suffering.' },
    ],
  },
  {
    id: 6,
    type: 'story',
    title: 'Anatolia Under Pressure',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch6.png?alt=media&token=5e3b13e6-a70c-42e6-8207-c3988183c04c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F05_Chapter_6_Anatolia_Under_Pressure.mp3?alt=media&token=51f45879-bd44-4ebe-a200-93cd131be41d',
    content: `The weakening of the Seljuk Sultanate of Konya led to the rapid emergence of small principalities in Anatolia. They were also in constant conflict over the throne, wealth, and summer and winter pastures. The Ottoman state was still a small principality at that time.

These events created an atmosphere of panic in Anatolia that had never been seen before. In the end, an agreement was reached with the Mongols, but in time the Seljuks became a dependent state of the Mongols. The Seljuk sultans began to act almost as if they were Mongols’ civil officials. A significant part of state income began to be sent to the Mongols every year. However, this tax increased constantly and this made both the state and the people poorer.

Statesmen like Celaleddin Karatay, while on the one hand trying to manage the Mongols, were also making efforts to provide some relief to the state and the people. Nevertheless, these efforts were not enough. Finally, in 1308, the lands of Anatolia were directly attached to the Ilkhanate Empire (The Mongol state centred in Iran).`,
    vocabulary: [
      { word: 'dependent state', definition: 'a state whose political freedom is limited by a stronger power' },
      { word: 'relief', definition: 'assistance that reduces hardship, pressure, or suffering' },
      { word: 'principalities', definition: 'small territories or states ruled by a prince, ruler, or local dynasty' },
      { word: 'conflict', definition: 'a serious disagreement or struggle between groups or political powers' },
      { word: 'attached', definition: 'joined or placed under the direct authority of another political entity' },
    ],
    hotspots: [
      { id: 'h6-1', x: 22, y: 43, title: 'civil officials', description: 'The Seljuks became dependent on the Mongols, with their sultans acting almost like Mongol civil officials.' },
      { id: 'h6-2', x: 76, y: 61, title: 'Ilkhanate Empire', description: 'In 1308, after years of dependency and increasing taxation, Anatolia was directly attached to the Ilkhanate Empire.' },
    ],
  },
  {
    id: 7,
// c02b
// c03a
    type: 'story',
    title: 'Yunus Appears as a Wise Dervish',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch7.png?alt=media&token=58039088-088f-452b-b533-1c7741baca4a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F06_Chapter_7_Yunus_Appears_as_a_Wise_Dervish.mp3?alt=media&token=b7eaeaa4-0a36-4fc8-8ff5-6cd6aa8d32c4',
    content: `Anatolia was experiencing total chaos. During the same period, the shaykhs from the regions of Turkestan, Transoxiana, Khorasan, Khwarezm and Iran came to Anatolia under Mongol pressure. These shaykhs raised dervishes on their teachings; these dervishes were dominant among nomads. They were spreading a simple understanding of Islam and establishing a kind of popular Sûfîsm.

So in such an environment, Yunus Emre emerged as a wise dervish and travelled around Anatolia. He tried to respond to people’s efforts to make sense of life in hard days through the lens of his Sûfî identity, using poetry as his medium.

Yunus’s understanding of Sûfîsm is based on the Qur’an and the Sunnah, which is the collective term for the Prophet’s sayings, actions, and approvals, as well as on the thoughts and experiences of the Muslim Sûfîs who lived before him. In his poems, he expresses a vivid love for Allah as a way of life, along with fear of Allah and faithfulness to the Prophet Muhammad (pbuh).`,
    vocabulary: [
      { word: 'medium', definition: 'a means or form through which ideas are communicated' },
      { word: 'Qur’an', definition: 'Islam’s holy scripture, regarded by Muslims as revelation from Allah' },
      { word: 'chaos', definition: 'a condition of extreme disorder in which normal structures no longer function effectively' },
      { word: 'dervishes', definition: 'members of Sufi traditions who follow a disciplined spiritual path' },
      { word: 'popular Sûfîsm', definition: 'forms of Sufi religious life practiced and transmitted among ordinary communities' },
    ],
    hotspots: [
      { id: 'h7-1', x: 34, y: 28, title: 'Popular Sûfîsm', description: 'Shaykhs under Mongol pressure came to Anatolia and dervishes spread a simple understanding of Islam among nomads.' },
      { id: 'h7-2', x: 67, y: 66, title: 'wise dervish', description: 'Yunus used poetry through his Sûfî identity to respond to people trying to make sense of life in hard times.' },
    ],
  },
  {
    id: 8,
    type: 'story',
    title: 'Tawhid and True Reality',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch8.png?alt=media&token=bd2646dd-6daa-4e8f-9901-23d8e185ed04',
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
      { word: 'belief', definition: 'acceptance that an idea or religious teaching is true' },
      { word: 'manifestations', definition: 'visible or recognizable expressions of an underlying reality' },
      { word: 'source', definition: 'the origin from which something begins or is derived' },
      { word: 'vahdet-i vücut', definition: 'the Unity of Existence as presented in the chapter’s account of Yunus Emre’s Sufi thought' },
      { word: 'attributes', definition: 'qualities or characteristics understood as belonging to a person or being' },
    ],
    hotspots: [
      { id: 'h8-1', x: 25, y: 62, title: 'vahdet-i vücut', description: 'The chapter presents vahdet-i vücut as an idea within Yunus Emre’s Sûfî thought.' },
      { id: 'h8-2', x: 72, y: 37, title: 'true and only reality', description: 'The chapter states that Allah is the source of all things and the true and only reality.' },
    ],
  },
  {
    id: 9,
    type: 'story',
    title: 'Unity and Love',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch9.png?alt=media&token=23640c7b-6222-4764-8592-4ff56e258111',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F08_Chapter_9_Unity_and_Love.mp3?alt=media&token=f82c740d-efa7-4e38-b440-24dab3468a80',
    content: `In this sense, everything which is created is a reflection; the only thing that truly exists is Allah. The ultimate purpose of humanity is to reach unity with Allah.

His words remind us of Allah’s commands for achieving this unity.

Yunus says:

[POEM]
English:
“Anyone who claims to be a Muslim should know the requirements of Islam,
He should follow Allah’s command and pray the five daily prayers”
Turkish:
// c03b
// c04a
Müslümanım diyen kişi şartı nedir bilse gerek
Tanrı'nın buyruğun tutup beş vakt namaz kılsa gerek
[/POEM]

Love, another important value that stands out in Yunus Emre’s works, lies at the core of his philosophy. He places love at the foundation of the human relationship with the Creator. The love extends to the love of Allah. Therefore, those who love the Creator love the created, and those who love the created also love the Creator. Love brings unity and harmony.

The purpose of love is to reach Allah and achieve unity in His presence. From this perspective, love and unity, which lie at the essence of his thought, are interrelated. For, according to him, where love is absent, negative emotions such as anger, heartbreak and separation arise.`,
    vocabulary: [
      { word: 'harmony', definition: 'a condition in which people or ideas exist together in peaceful agreement' },
      { word: 'core', definition: 'the central and most essential part of an idea or system' },
      { word: 'Creator', definition: 'Allah understood as the One who brings creation into existence' },
      { word: 'foundation', definition: 'the basic idea or principle on which something is built' },
      { word: 'interrelated', definition: 'connected in such a way that each part influences or depends on the other' },
    ],
    hotspots: [
      { id: 'h9-1', x: 39, y: 56, title: 'love and unity', description: 'The chapter connects love of the Creator and the created with unity and harmony.' },
      { id: 'h9-2', x: 78, y: 31, title: 'Prayer and command', description: 'The quoted verse connects claiming Islam with knowing its requirements and praying the five daily prayers.' },
    ],
  },
  {
    id: 10,
    type: 'story',
    title: 'The Heart and Intellect',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch10.png?alt=media&token=6512183c-781d-4624-b112-bf69fa76a9d6',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F09_Chapter_10_The_Heart_and_Intellect.mp3?alt=media&token=c9c90510-fe86-4b60-a07d-f4602c404ac5',
    content: `Therefore, for Yunus Emre the love and the oneness of Allah are the values at the foundation of moral behavior.

In Yunus Emre’s philosophy, heart is the center of love. It is “the throne of the Lord,” that is, the place where Allah manifests Himself. For this reason, he described breaking a heart as destroying Allah’s house. Yunus says:

[POEM]
English:
“The heart is the throne of the Lord, and He looked at the heart.
Whoever destroys the heart is the most unfortunate of the two worlds.”
Turkish:
Gönül Çalab’ın tahtı, Çalap gönüle baktı.
İki cihan bedbahtı, kim gönül yıkar ise.
[/POEM]

In his view, purity of the heart is essential for the proper performance of acts of worship. At the same time, the heart is the eye that perceives the truth and the center of understanding.

Yunus Emre emphasizes not only heart but also intellect as a value, describing it as “a light from Allah that has existed since eternity.” According to him, there are three types of intellect: the practical reason, which enables a person to understand how the world works and sustain worldly life; the limited intellect, which teaches a person about the order of the hereafter; and the universal intellect, which guides one to behave with piety.`,
    vocabulary: [
      { word: 'manifests', definition: 'becomes visible, evident, or expressed' },
      { word: 'intellect', definition: 'the capacity for reason and understanding, described here as a spiritual and moral faculty' },
      { word: 'moral behavior', definition: 'conduct shaped by judgments about what is right, good, and responsible' },
      { word: 'purity', definition: 'a state of being free from moral or spiritual corruption' },
      { word: 'perceives', definition: 'recognizes, understands, or becomes aware of something' },
    ],
    hotspots: [
      { id: 'h10-1', x: 28, y: 33, title: 'center of love', description: 'In Yunus Emre’s philosophy, the heart is the center of love and is described as “the throne of the Lord.”' },
      { id: 'h10-2', x: 65, y: 64, title: 'a light from Allah', description: 'The chapter describes intellect as “a light from Allah that has existed since eternity.”' },
    ],
  },
  {
    id: 11,
    type: 'story',
    title: 'Salvation and Death',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch11.png?alt=media&token=fb865f72-084f-4947-9095-7638636c6b3b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Faudio%2F10_Chapter_11_Salvation_and_Death.mp3?alt=media&token=0cf0a108-c961-480a-bed1-f16979702959',
    content: `His understanding of unity is also evident in the relationship between the heart and reason; he emphasizes that for a person to reach salvation, heart and reason must support one another.

Yunus says:

[POEM]
English:
“May your intelligence / wisdom save you from all troubles
May happiness be yours for all the months and years to come”
Turkish:
Seni dürlü beladan kurtara akl,
Saadet ola sana cümle ay, yıl
// c04b
// c05a
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
      { word: 'advisor', definition: 'a person or influence that gives guidance about how to act or decide' },
      { word: 'heart and reason', definition: 'the two human capacities that the chapter says should support one another' },
      { word: 'preparing', definition: 'making oneself ready in advance for a future event or responsibility' },
      { word: 'meaningful', definition: 'having clear importance, purpose, or value' },
      { word: 'death', definition: 'the end of physical life, presented here as a reminder that can guide conduct' },
    ],
    hotspots: [
      { id: 'h11-1', x: 23, y: 57, title: 'heart and reason', description: 'The chapter says heart and reason must support one another for a person to reach salvation.' },
      { id: 'h11-2', x: 70, y: 39, title: 'Death', description: 'Death is presented as an advisor that can help a person live a meaningful and righteous life.' },
    ],
  },
  {
    id: 12,
    type: 'story',
    title: 'Morality and Bad Habits',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch12.png?alt=media&token=80fc3835-73b9-4dc3-8570-0a49ea04a569',
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
      { word: 'morality', definition: 'principles and standards concerning right and wrong conduct' },
      { word: 'animalistic self', definition: 'the lower self associated in the chapter with uncontrolled desires and immoral conduct' },
      { word: 'righteous life', definition: 'a life guided by morally good and correct conduct' },
      { word: 'negative traits', definition: 'harmful qualities of character or behavior' },
      { word: 'moral guide', definition: 'something that gives guidance about right conduct and character' },
    ],
    hotspots: [
      { id: 'h12-1', x: 36, y: 69, title: 'morality consists', description: 'The chapter presents morality through abandoning harmful behavior and cultivating positive qualities.' },
      { id: 'h12-2', x: 75, y: 45, title: 'negative traits', description: 'Yunus warns against arrogance, anger, stinginess, greed, envy, backbiting and slander.' },
    ],
  },
  {
// c05b
// c06a
    id: 13,
    type: 'story',
    title: 'A Lasting Legacy',
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/yunus%2Fb2%2Fimages%2Fyunus_b2_ch13.png?alt=media&token=d10621fc-a38e-4292-917d-6696c4458de1',
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
      { word: 'legacy', definition: 'a lasting influence or contribution passed on to later generations' },
      { word: 'prominent', definition: 'important, widely recognized, or influential' },
      { word: 'writings', definition: 'written works produced by an author' },
      { word: 'literary works', definition: 'written works valued as literature' },
      { word: 'future generations', definition: 'people who will live after the present generation and inherit its cultural influence' },
    ],
    hotspots: [
      { id: 'h13-1', x: 30, y: 41, title: 'Moral Legacy', description: 'Yunus Emre’s writings are presented as both literary works and a moral guide for future generations.' },
      { id: 'h13-2', x: 68, y: 70, title: 'future generations', description: 'The final chapter links patience and resistance to anger and arrogance with Yunus Emre’s lasting legacy.' },
    ],
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
  },
  { id: 15, type: 'quiz', title: 'Knowledge Check: Yunus Emre - B2', image: '', audioUrl: '', content: 'Check whole-book comprehension with eight evidence-based questions.' },
  { id: 16, type: 'vocabulary-match', title: 'Vocabulary Challenge', image: '', audioUrl: '', content: 'Match ten important story words with distinct meanings.' },
  { id: 17, type: 'glossary', title: 'Master Glossary - Part 1', image: '', content: 'Review chapter vocabulary from the first half of the story.', vocabulary: [] },
  { id: 18, type: 'glossary', title: 'Master Glossary - Part 2', image: '', content: 'Review chapter vocabulary from the second half of the story.', vocabulary: [] },
  { id: 19, type: 'exercises', title: 'Retrieval Review', image: '', content: 'Retrieve, reconnect and use the key learning through four separate activities.' },
  { id: 20, type: 'final-challenge', title: 'Final Challenge: Yunus Emre B2', image: '', content: 'Demonstrate whole-book mastery through ten independent scored activities.' },
// c06b
];

// t01a
const knowledgeFeedbackEn = {
  correct: 'Correct. The answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the named chapter evidence and try again.',
};
const knowledgeMcEn = (id: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title: 'Knowledge Check', instructions: 'Choose the best evidence-based answer.', question, options, correctAnswer, explanation, feedback: knowledgeFeedbackEn,
});
const yunusB2ManualKnowledgeCheckExercises: Exercise[] = [
  knowledgeMcEn('yu-b2-mk1','Which moral principle is explicitly included in the opening description of Sûfî conduct?',['Responding to evil with kindness and not attaching importance to wealth, status, or fame.','Seeking public status as proof of spiritual progress.','Avoiding generosity so that worldly possessions remain secure.'],0,'Chapter 1 explicitly includes responding to evil with kindness and avoiding attachment to worldly wealth, status, and fame among the moral principles it lists.'),
  knowledgeMcEn('yu-b2-mk2','According to the widely accepted view reported in Chapter 2, which dates are given for Yunus Emre’s life?',['1240–41 to 1320–21.','1220–1237.','1237–1246.'],0,'The chapter qualifies the dates with “the widely accepted view” and then gives 1240–41 for his birth and 1320–21 for his death.'),
  knowledgeMcEn('yu-b2-mk3','What concrete achievement is attributed to Alaeddin I during the strong Seljuk period described in Chapter 3?',['He established a navy in the Mediterranean and Black Seas.','He founded the Ilkhanate Empire in Iran.','He led the Babai uprising in 1240.'],0,'Chapter 3 states that Alaeddin I expanded the country’s borders and established a navy in the Mediterranean and Black Seas.'),
  knowledgeMcEn('yu-b2-mk4','How does Chapter 4 identify the relationship between Baba İshak and Baba İlyas?',['Baba İshak is described as a follower of Baba İlyas.','Baba İlyas is described as a Seljuk sultan under Baba İshak.','They are presented as Mongol commanders at Kösedağ.'],0,'The chapter says the 1240 rebellion was led by Baba İshak, who was a follower of Baba İlyas.'),
  knowledgeMcEn('yu-b2-mk5','What geographical detail does Chapter 5 give for the Battle of Kösedağ?',['It took place about 80 km northeast of Sivas.','It took place on the Mediterranean coast.','It took place inside Erzurum in late 1242.'],0,'The story places Kösedağ about 80 km northeast of Sivas; the Erzurum attack is a separate earlier event.'),
  knowledgeMcEn('yu-b2-mk6','How is the Ottoman state described during the period of fragmented Anatolian principalities in Chapter 6?',['It was still a small principality.','It already ruled all of Anatolia.','It had become the administrative centre of the Ilkhanate.'],0,'Chapter 6 explicitly notes that the Ottoman state was still a small principality at that time.'),
  knowledgeMcEn('yu-b2-mk7','Which foundations does Chapter 7 explicitly name for Yunus Emre’s understanding of Sûfîsm?',['The Qur’an, the Sunnah, and the thoughts and experiences of earlier Muslim Sûfîs.','Only the political practices of the Seljuk court.','Only the oral traditions of nomadic tribes.'],0,'The chapter names the Qur’an and Sunnah together with the thoughts and experiences of Muslim Sûfîs who lived before Yunus.'),
  knowledgeMcEn('yu-b2-mk8','In the three-part account of intellect in Chapter 10, what is the role of universal intellect?',['It guides a person to behave with piety.','It explains only how to sustain worldly life.','It removes the need for the heart in the path to salvation.'],0,'Chapter 10 states that universal intellect guides a person toward pious conduct; practical reason is the form associated with understanding and sustaining worldly life.'),
];

const finalFeedbackEn = { correct: 'Correct. The synthesis is supported across the book.', incorrect: 'Not yet. Reconnect the relevant chapters and try again.' };
const finalReplacementEn: Record<string, Exercise> = {
  'yu-b2-f6': {id:'yu-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each historical condition with its wider consequence.',question:'Connect the historical system across chapters.',matchingPairs:[{left:'Babai unrest and weak governance',right:'Internal instability deepens before Kösedağ'},{left:'Kösedağ defeat',right:'Mongol military victory opens the way to devastation and domination'},{left:'Increasing Mongol payments',right:'Political dependency becomes economic pressure on state and population'},{left:'Mongol pressure across eastern regions',right:'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'}],correctAnswer:{'Babai unrest and weak governance':'Internal instability deepens before Kösedağ','Kösedağ defeat':'Mongol military victory opens the way to devastation and domination','Increasing Mongol payments':'Political dependency becomes economic pressure on state and population','Mongol pressure across eastern regions':'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'},explanation:'The book links internal crisis, defeat, dependency and cultural movement rather than treating them as isolated facts.',feedback:finalFeedbackEn},
  'yu-b2-f7': {id:'yu-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each idea with its cross-chapter implication.',question:'Connect Yunus’s moral-spiritual framework across the later chapters.',matchingPairs:[{left:'Tawhid and love',right:'Unity becomes a foundation for relation to Creator and creation'},{left:'Heart and intellect',right:'Inner sensitivity and reason are expected to support one another'},{left:'Awareness of death',right:'Mortality can orient a person toward meaningful righteous life'},{left:'Virtues and harmful traits',right:'Moral teaching becomes observable choices rather than abstract labels'}],correctAnswer:{'Tawhid and love':'Unity becomes a foundation for relation to Creator and creation','Heart and intellect':'Inner sensitivity and reason are expected to support one another','Awareness of death':'Mortality can orient a person toward meaningful righteous life','Virtues and harmful traits':'Moral teaching becomes observable choices rather than abstract labels'},explanation:'The later chapters build a connected moral framework from theology, inward life, mortality and action.',feedback:finalFeedbackEn},
  'yu-b2-f8': {id:'yu-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book historical relationship.',question:'Complete the synthesis.',fillBlanksText:'Yunus’s poetic voice becomes socially meaningful in a period marked by political crisis, Mongol domination and a search for [blank].',correctAnswer:'meaning',explanation:'Chapter 7 explicitly links people’s search for meaning in hard times with Yunus’s use of poetry as a Sûfî medium.',feedback:finalFeedbackEn},
  'yu-b2-f9': {id:'yu-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book legacy relationship.',question:'Complete the synthesis.',fillBlanksText:'The book presents Yunus’s lasting legacy as both literary and [blank], connecting poetry with guidance for moral life.',correctAnswer:'moral',explanation:'The final chapters and conclusion explicitly present the poems as literary works and moral guidance.',feedback:finalFeedbackEn},
};
const yunusB2FinalChallengeExercisesPolished: Exercise[] = yunusB2FinalChallengeExercises.map(exercise => finalReplacementEn[exercise.id] ?? exercise);
// t01b
// t02a
const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const englishLanguageFocus: Record<number, Exercise[]> = {
  ...yunusB2LanguageFocusExercises,
  ...yunusB2LanguageFocusExercisesPart2,
  ...yunusB2LanguageFocusExercisesPart3,
  ...yunusB2LanguageFocusExercisesPart4,
};

export const yunusB2Pages: PageData[] = rawYunusB2Pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      animatedWords: undefined,
      exercises: yunusB2QuickChallenges[page.id] ? [yunusB2QuickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...page, exercises: yunusB2ManualKnowledgeCheckExercises };
  if (page.id === 16) return { ...page, vocabularyPairs: yunusB2VocabularyChallengePairs };
  if (page.id === 19) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source-framing, cause-result, concession, comparison, interpretation, necessity and possibility patterns developed across all thirteen chapters.',
    exercises: yunusB2LanguageReviewExercises,
  };
  if (page.id === 20) return { ...page, exercises: yunusB2FinalChallengeExercisesPolished };
  return page;
});

export const pages: PageData[] = yunusB2Pages;
// t02b
