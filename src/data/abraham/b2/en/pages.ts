import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
//__C01__
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

// c07a
//__C07__
// c07b

// c08a
//__C08__
// c08b

// c09a
//__C09__
// c09b

// c10a
  {
    id: 34,
    type: 'story',
    title: 'The First Call to Pilgrimage',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F33_Chapter_34_The_First_Call_to_Pilgrimage.mp3?alt=media&token=0e5a8118-0498-4e50-a826-e6aaca1b8cc4',
    content: `Prophet Muhammad (pbuh) said: “Indeed this place has been made sacred by Allah since the day He created the heavens and the earth, and it will remain so until the Day of Judgment” (Sunan an-Nasa'i, 2874). Abraham (pbuh) said to Ishmael: “O Ishmael, Allah has commanded me to do an important task, and you will help me in this task.” Ishmael replied, “I will help you for sure.” Abraham (pbuh) said, “The Almighty Allah commanded me to build a house for Himself.” Father and son found the foundations of the old structure and began to build the Ka‘ba on it. When the building became high and the old man Abraham (pbuh) could no longer lift the stones to such a high position, he stood over the stone of Al-Maqam and Ishmael carried on handing him the stones, and both of them were saying: “O our Lord! Accept this service from us; verily You are the All Hearer, the All Knower” (Surah Baqarah: 127).

Abraham (pbuh) traveled to Mecca in response to Allah’s command to establish the sacred Kaba.`,
  },
  {
    id: 35,
    type: 'story',
    title: 'The Legacy of Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F34_Chapter_35_The_Legacy_of_Abraham.mp3?alt=media&token=a7065900-a5e2-4469-aa93-a4a284b627f5',
    content: `He was but the restorer of the structure that was originally built long before. No other place of worship is older than the Ka‘ba of Mecca. Reconstruction of the Ka‘ba and the call to pilgrimage (see Surah Hajj: 27) are clear evidence that Prophet Abraham (pbuh) established the religion and invited those living in that region at that time to embrace it. This belief is known as Hanifism. Reconstructing the Holy Kaba was the completion of Abraham (pbuh)’s mission. He built a place of worship for all people, not just people of a chosen race or color. This actually reminds us of the oneness of Allah. During Hajj Muslims are reminded of many events of Allah’s beloved “friend” Abraham (pbuh) and his family. Before his death, Abraham (pbuh) left Palestine to Isaac and Mecca to Ishmael, and sent his other children eastward. His son Ishmael taught his father Abraham (pbuh)'s faith in the Hijaz region, and in this region, his Hanif faith coexisted with idolatry.

The ‘Beloved servant of Allah’ about whom Allah said, “I will make you a leader to the nations,” returned to Palestine and died there. When people have lost their way and are looking for salvation, Abraham (pbuh) has always been there to show them the right path. This is especially true in societies where morals have worsened and the real path that Allah showed them has been corrupted.`,
  },
  {
    id: 36,
    type: 'quiz',
    title: 'B2 Knowledge Check',
    image: '',
    audioUrl: '',
    content: 'Check your understanding of the complete Prophet Abraham B2 story.',
  },
  {
    id: 37,
    type: 'exercises',
    title: 'B2 Language Review',
    image: '',
    content: 'Review and use the source, stance, time, cohesion and discourse patterns developed across all thirty-five chapters.',
  },
  {
    id: 38,
    type: 'vocabulary-match',
    title: 'B2 Vocabulary Challenge',
    image: '',
    content: 'Match ten meaning-bearing story terms with their precise meanings.',
  },
  {
    id: 39,
    type: 'glossary',
    title: 'B2 Story Glossary',
    image: '',
    content: 'Academic and narrative vocabulary from the complete B2 story.',
  },
  {
    id: 40,
    type: 'final-challenge',
    title: 'Final Challenge',
    image: '',
    content: 'Demonstrate whole-book B2 mastery through analysis, evidence, comparison, and synthesis.',
  },
// c10b

// c11a
//__C11__
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
// t03a
//__T03__
// t03b