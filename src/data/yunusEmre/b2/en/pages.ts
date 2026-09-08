import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './exercises';
import { yunusB2LanguageFocusExercises } from './languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './languageFocus3';

const rawYunusB2Pages: PageData[] = [
// c01a
//__C01__
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
