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
//__C02__
// c02b
// c03a
//__C03__
// c03b
// c04a
//__C04__
// c04b
// c05a
//__C05__
// c05b
// c06a
//__C06__
// c06b
];

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
