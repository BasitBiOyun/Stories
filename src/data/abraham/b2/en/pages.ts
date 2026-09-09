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
  {
    id: 10,
    type: 'story',
    title: 'Challenging Star Worshippers',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F09_Chapter_10_Challenging_Star_Worshippers.mp3?alt=media&token=65391322-9f37-4c72-921a-f311d1aa59b1',
    content: `Indeed, these bodies are evidently created, controlled, managed, and made to serve a purpose. They come and go, sometimes fading from the world. However, Allah sees and knows everything; nothing can be hidden from Him. Allah is without end, everlasting without disappearance. There is no other god but Allah. Abraham (pbuh) clarified the situation for them, firstly, that the heavenly bodies are unworthy of worship and, secondly, that they are the signs of Allah. The Qur’an emphasizes this with simple logic: “And of His signs are the night and the day, and the sun and the moon. Do not bow down to the sun, nor to the moon, but bow down to Allah, Who created them both, if you really worship Him” (Surah Fussilat: 37). Abraham (pbuh)'s rational thinking helped to uncover the truth, and then the conflict between him and the worshippers of the stars and planets started. They did not remain silent.

They began arguing and threatening Abraham (pbuh). He replied: “And his people argued with him.`,
  },
  {
    id: 11,
    type: 'story',
    title: 'Arguing for Tawheed',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F10_Chapter_11_Arguing_for_Tawheed.mp3?alt=media&token=b9953447-ffeb-49fb-9009-c991b3e4ffb7',
    content: `He said, “Do you argue with me about Allah, when He has guided me? I do not fear partners you assign to Him, unless my Lord wills it. My Lord comprehends all things in knowledge. Will you not reconsider? And why should I fear the partners you give to Him, and you do not fear worshipping others alongside Allah for which He sent down to you no authority? So which of the two parties has more right to security, if you are aware?” They who believe, and do not mix their belief with injustice—those will have security, and they are (rightly) guided. That was Our argument which We gave to Abraham against his people.” (Surah En'âm: 80–83). His people attempted to argue with him and present evidence to prove the correctness of their beliefs. That these arguments are not told in the verses shows the ridiculousness of their claims. It is understood from Abraham (pbuh)'s statement, “I do not fear partners you worship alongside Allah,” that his people threatened him with the punishment of their gods.`,
  },
  {
    id: 12,
    type: 'story',
    title: 'Speaking to His Father',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F11_Chapter_12_Speaking_to_His_Father.mp3?alt=media&token=d0f15e47-a55b-4e88-a837-3a0770997c18',
    content: `Prophet Abraham (pbuh) paid no heed to this threat. As a true believer, he expressed his fear of Allah. In doing so, he declared his belief that both benefit and harm come from Allah. Abraham (pbuh) did his best to make his people mindful of the belief in the oneness of Allah and to the worship of Him alone. He told them to firmly reject the worship of idols. He said to his father and his people in Surah Enbiyâ, verses 52–56: “When he said to his father and his people, ‘What are these statues to which you are faithful?’ They said, ‘We found our parents worshiping them.’ He said, ‘You and your parents are in evident error.’ They said, ‘Are you telling us the truth, or are you just playing?’ He said, ‘Your Lord is the Lord of the heavens and the earth, the One who created them, and I bear witness to that.’”

A bitter struggle began between Abraham (pbuh) and his people. The most amazed and furious was his father, for he not only worshipped idols but shaped and sold them as well.`,
  },
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