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
//__C02__
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
