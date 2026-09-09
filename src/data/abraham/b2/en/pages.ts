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
  {
    id: 17,
    type: 'story',
    title: 'Questioned Before the People',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F16_Chapter_17_Questioned_Before_the_People.mp3?alt=media&token=bfbc27f2-54a1-4bcd-b331-f81774155d0a',
    content: `Allah also will cause them to die and bring them back to life again. However, idolaters would not give up but held on tightly to their idols. Abraham (pbuh) left his father's house and quit any further interest in his people and what they worshipped. Actually, he decided to do something shocking to show their error. He knew that there was going to be a great celebration outside the town. All the people would attend it. Abraham (pbuh) waited until the city was empty, then cautiously made his way to the temple. The streets leading to it and the temple itself were empty. The priests had also gone to the festival outside the city. Abraham (pbuh) went there with a sharp axe. He looked at the stone and wood statues of the gods and at the food put in front of them as offerings. He approached one of the statues and asked: "The food in front of you is getting cold.

Why don't you eat? " The statue kept silent and rigid.`,
  },
  {
    id: 18,
    type: 'story',
    title: 'The Decision to Burn Abraham',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F17_Chapter_18_The_Decision_to_Burn_Abraham.mp3?alt=media&token=0ae53990-9b95-450d-a818-ad940a9f4d58',
    content: `Abraham (pbuh) asked all the other statues around him: "Will you not eat of the offering before you? " (Surah Sâffât: 91). He was mocking them, for he knew they would not eat. He once again asked them: "What is the matter with you that you do not speak? " (Surah Sâffât: 92). He then raised his axe and started smashing the false gods worshipped by the people. He destroyed them all except one. On its neck, he hung the axe. He left the temple. He had fulfilled his duty to show his people a practical proof of their foolishness in worshipping something other than Allah. When the people returned, they were shocked to see their gods smashed into pieces, spread all over the temple. They tried to find out who had done that to their idols and Abraham (pbuh)'s name came to their minds. Allah said in Surah Enbiyâ, verses 59–67: “They said, “Who did this to our gods? He is certainly one of the wrongdoers.” They said, “We heard a youth mentioning them.`,
  },
  {
    id: 19,
    type: 'story',
    title: 'Thrown into the Fire',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F18_Chapter_19_Thrown_into_the_Fire.mp3?alt=media&token=d5a3e204-3a26-4084-a741-ede788f383a3',
    content: `He is called Abraham.” They said, “Bring him before the eyes of the people, so that they may witness.” They said, “Are you the one who did this to our gods, O Abraham?” He said, “But it was this biggest of them that did it. Ask them, if they can speak.” Then they turned to one another and said, “You yourselves are the wrongdoers.” But they reverted to their old ideas: “You certainly know that these do not speak.” He said, “Do you worship, instead of Allah, what can neither benefit you in anything, nor harm you? Shame on you, and on what you worship instead of Allah. Do you not understand?” They furiously demanded that Abraham (pbuh) be arrested and judged. Abraham (pbuh) did not resist. This was exactly what he was aiming for, so that he could demonstrate to them in public that their beliefs were foolish. At the trial, they asked him if he was responsible for breaking the idols.

Smiling, he told them to ask the biggest idol which was still undamaged.`,
  },
  {
    id: 20,
    type: 'story',
    title: 'The Faith of the Believers',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F19_Chapter_20_The_Faith_of_the_Believers.mp3?alt=media&token=1dc71341-e358-4deb-962e-ca26d2c893b2',
    content: `He told them that it must be the culprit! They replied that he knew well that the idol could not speak or move. These words gave Abraham (pbuh) the chance to show the foolishness of worshipping these lifeless objects. They had no answer for Abraham (pbuh). In fact, they realized the stupidity of their beliefs; however, their arrogance would not allow them to admit their foolishness. All they could do was use their authority as tyrants to punish Abraham (pbuh). They kept him in chains and planned their revenge. Anger was burning in their hearts. They agreed that Abraham (pbuh) should be burned alive. They decided to throw Abraham (pbuh) into the biggest fire they could build. All the citizens were ordered to gather wood as a service to their gods. For several days they collected fuel. They dug a deep pit, filled it with firewood, and set it on fire. They brought a catapult with which to throw Abraham (pbuh) into the fire. Abraham (pbuh) was put on the catapult; his hands and feet were tied.`,
  },
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