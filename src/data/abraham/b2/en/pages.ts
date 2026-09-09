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
  {
    id: 13,
    type: 'story',
    title: 'Debating the Idolaters',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F12_Chapter_13_Debating_the_Idolaters.mp3?alt=media&token=49e3bd81-8558-4803-a119-d779ee1504d7',
    content: `Abraham (pbuh) felt that it was his duty as a good son to advise his father against this evil so that his father could be saved from Allah's punishment. He was a wise son, so he did not make his father feel embarrassed, or make fun of his job. He told him that he loved him; in that way, he hoped to increase fatherly love. Then he kindly asked him why he worshipped lifeless statues who could not hear, see, or protect him. Before his father got angry, he quickly added an explanation, as recorded in Surah Maryam, verses 42–48: “He (Abraham) said to his father, ‘O my father, why do you worship what can neither hear, nor see, nor benefit you in any way? O my father, there has come to me knowledge that never came to you. So follow me, and I will guide you along a straight way.

O my father, do not worship Satan. Satan is disobedient to the Most Beneficent (Allah). O my father, I fear that a punishment from the Most Beneficent (Allah) will afflict you, and you become a friend of Satan.’ He (his father) said, ‘Are you rejecting my gods, O Abraham?`,
  },
  {
    id: 14,
    type: 'story',
    title: 'Calling People to Reconsider',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F13_Chapter_14_Calling_People_to_Reconsider.mp3?alt=media&token=ca625f7c-f2ba-44c4-ac96-28790a4fdacf',
    content: `If you do not stop this, I will stone you. So leave me alone for a while before I punish you.’ Abraham said, ‘Peace be upon you. I will ask my Lord to forgive you; He has been Kind to me. And I will turn away from you, and from what you pray to instead of Allah. And I will pray to my Lord, and I hope I will not be disappointed in my prayer to my Lord.’” Abraham (pbuh) kindly spoke to his father with clear logic and sense. His father's harsh behavior towards Abraham (pbuh) did not stop him from carrying the message of truth. He was angry and sad to see people bow down before idols; he was determined to put an end to these practices and went to the town to debate with the people. In fact, he knew well that he might face negative consequences. Just as a wise doctor looks for the cause of an illness to find the right cure, or a clever judge questions a suspect to uncover the truth, Abraham (pbuh) questioned them to reveal the reality of their situation.`,
  },
  {
    id: 15,
    type: 'story',
    title: 'Breaking the Idols',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F14_Chapter_15_Breaking_the_Idols.mp3?alt=media&token=be5a070b-45e9-4408-bddd-1929f6023e6e',
    content: `"Do the idols see you when you bow down before them? Do they benefit you in any way? " They quickly tried to defend their beliefs. They argued that they knew the idols were lifeless but that their forefathers had worshipped them; to them, this confirmed their belief. Abraham (pbuh) explained that their forefathers had been wrong. This angered them and they responded: "Are you criticizing our gods and our forefathers? Or are you just joking? " Abraham (pbuh) showed no fear as he replied: "I am serious. I come to you with a true religion. I have been sent with guidance from our Lord Who alone is worthy of worship, Who is the Creator of the heavens and the earth, and Who regulates all affairs of life, unlike the dumb idols which are just stone and wood. " To persuade them that the idols could not harm him, he challenged: "I have already criticized them; see if they have any power to harm me by now!

" Abraham (pbuh) did not give up arguing with the idolaters.`,
  },
  {
    id: 16,
    type: 'story',
    title: 'The Broken Temple',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F15_Chapter_16_The_Broken_Temple.mp3?alt=media&token=3ebcb16d-df42-4d8b-88ca-ef8c847804d4',
    content: `Allah said in Surah Şuarâ, verses 69–82: “And describe to them the story of Abraham. When he said to his father and his people, “What do you worship?” They said, “We worship idols, and we remain faithful to them.” He said, “Do they hear you when you pray? Or do they benefit you, or harm you?” They said, “But we found our ancestors doing so.” He said, “Have you considered what you worship— You and your ancient ancestors? They are enemies to me, but not so the Lord of the Worlds. He who created me, and guides me. He who feeds me, and waters me. And when I get sick, He heals me. He who makes me die, and then revives me. He who, I hope, will forgive my sins on the Day of Resurrection?” He explained to them the beauty of Allah's creation, His power, and His wisdom. Idol worship is hated by Allah, as Allah is the Lord of the universe Who created mankind, offers guidance, provides human beings with food and drink and heals the sick.`,
  },
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
//__C10__
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