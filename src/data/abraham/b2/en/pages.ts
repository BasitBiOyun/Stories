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
  {
    id: 1,
    type: 'story',
    title: 'Prophet Abraham and Tawheed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=dd864d33-97bb-47a7-a10e-8c0a68d0ffb7',
    content: `KEY WORDS: Hanifism (Haniflik, Path of Prophet Abraham (pbuh)); monotheism (Oneness and Unity of Allah); Tawheed (La ilaha illa Allah: There is no god but Allah); idol worship, idolatry (paganism, putperestlik); idolater (pagan, putperest).

In the Holy Qur’an, Prophet Abraham (pbuh) is presented as the messenger and representative of the monotheistic belief. Monotheistic belief means that I bear witness that there is no god but Allah. He has no partner, rival, or helper. Allah is unique in every way. He is also the fundamental figure of the three great monotheistic religions (Judaism, Christianity, and Islam). The fourteenth surah of the Qur’an is named Surah Ibrahim. Abraham (pbuh) is the father of two prophets: Prophet Ishmael (İsmâil) (pbuh) and Prophet Isaac (İshak) (pbuh). Prophet Ishmael (pbuh) is the direct forefather of Prophet Muhammad (pbuh). Prophet Isaac (pbuh) is the father of Prophet Jacob (Yakûb) (pbuh). Prophet Jacob is the father of Joseph (Yûsuf) (pbuh), and forefathers of Moses (Mûsâ) (pbuh), Aaron (Hârûn) (pbuh), Jonah (Yûnus) (pbuh), and Jesus (İsâ) (pbuh). Abraham (pbuh) was also given the unique name of “Allah’s friend” (halîlullah; see Surah Nisa: 125). This title was not given to any other prophet before. The Qur’an presents in detail his discovery of the oneness of Allah (Tawheed) in the middle of an idol-worshipping nation.`,
  },
  {
    id: 2,
    type: 'story',
    title: 'Abraham as Allah’s Friend',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F01_Chapter_2_Abraham_as_Allah%E2%80%99s_Friend.mp3?alt=media&token=0303777a-0c94-4898-ad1c-ce260e331d8e',
    content: `He challenged the idol worship of his time and taught people to believe in Allah alone. His life mission was to spread the message of Tawheed—the belief that Allah is One and He has no partners. During his struggle, he had very difficult tests and he passed the tests with his full trust in Allah.

In the Holy Qur’an, Abraham (pbuh) is often described as a hanîf; a hanîf is a monotheist who is not a Jew, a Christian, or an idolater (see Surah Âl-i İmrân: 67) and is also morally upright. Hanifism is the belief in the oneness of Allah taught by Prophet Abraham (pbuh). We may say that it is the former version of Islam. Human beings are capable of discovering Hanifism; that is, the existence of Allah can be found through reasoning. Actually, all prophets taught this religion. Due to the development or worsening of human capacity and capabilities, some changes in details were necessary. So, the difference between the monotheism taught by Abraham (pbuh) and the Islam taught by Muhammad is only in the acts of worship.`,
  },
  {
    id: 3,
    type: 'story',
    title: 'Hanifism and the One True Faith',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F02_Chapter_3_Hanifism_and_the_One_True_Faith.mp3?alt=media&token=171a95ce-498c-4cc6-a993-ac54abe5964e',
    content: `In fact, Judaism, Christianity, and Islam are all based on the religion of Abraham (pbuh). At the beginning of Prophet Muhammad's mission, there was a group in the Hijaz who called themselves hanîfs. They stayed away from idolatry and its practices. However, later on, this belief became mixed with idolatry and, like Judaism and Christianity, it was corrupted. We can mention the following name as one of the last hanîfs: Varaka b. Nevfel, the cousin of Muhammad's wife Khadija, went to Damascus in search of Hanifism and accepted Christianity, which was the least corrupted religion at that time. When the first revelation (vahiy) came to Muhammad (pbuh), Varaka b. Nevfel welcomed his prophethood. One day, while he was in the desert, Varaka saw Bilal al-Habashi lying under the burning sun, punished by his master. At that moment, Bilal was saying, “Ahad, Ahad,” meaning “One, One.” Hearing his words, Varaka replied, “I swear, O Bilal, One, One.”

As the last faith, Islam includes not only what Allah told Abraham (pbuh), but also what Allah told Noah (pbuh), Moses (pbuh), Jesus (pbuh), and all the other prophets (see Surah Baqarah: 285)`,
  },
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