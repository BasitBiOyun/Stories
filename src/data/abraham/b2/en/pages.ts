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
  {
    id: 25,
    type: 'story',
    title: 'Sarah and Hajar',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F24_Chapter_25_Sarah_and_Hajar.mp3?alt=media&token=0e2106bf-baee-4089-957e-bf08c73f8146',
    content: `When Abraham (pbuh) realized that no one else was going to believe in his call, he decided to emigrate. He left his people and traveled with his wife Sarah and Lot to Egypt. Allah told us: “So Lût believed in him (Abraham's message of Islamic Monotheism). He (Abraham) said: 'I will emigrate for the sake of my Lord. Verily, He is the All Mighty, the All Wise”(Surah Ankebût: 26). After Egypt, Abraham (pbuh) traveled to Palestine and settled there. He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness. Abraham (pbuh)'s wife Sarah was sterile. She had been given an Egyptian woman, Hajar, as a servant when they were in Egypt. Abraham (pbuh) had aged and his hair was gray after many years spent in calling people to Allah. Sarah thought she could not have a child. Therefore, she suggested Abraham (pbuh) get married to Hajar. Hajar gave birth to her first son, Ishmael, when Abraham (pbuh) was an old man.`,
  },
  {
    id: 26,
    type: 'story',
    title: 'Hajar’s Trust in the Desert',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F25_Chapter_26_Hajar%E2%80%99s_Trust_in_the_Desert.mp3?alt=media&token=fb5f22dc-235c-4535-ac20-2dd9ab13218f',
    content: `Some time later, Allah gave Abraham (pbuh) another son from his first wife, Sarah. The name of this second son was Isaac (İshak). Allah told Abraham (pbuh) that these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam. From Ishmael's descendants came Prophet Muhammad (pbuh), while from Isaac's came Moses (pbuh) and Jesus (pbuh). One day, Allah told Abraham (pbuh) that he should take Hajar and Ishmael to the Sacred City, Mecca. This was another test for Abraham (pbuh) while Ishmael was still a little child. It was part of Allah’s master plan. He informed Abraham (pbuh) that He would construct the sacred city with Ishmael's hands and make its water run for Ishmael. In a few days, Abraham (pbuh) set out with his wife Hajar and their son Ishmael. Hajar was still nursing Ishmael and the child was still breastfeeding. Abraham (pbuh) walked through cultivated land, desert, and mountains until he reached the desert of the Arabian Peninsula and came to an uncultivated valley near two small hills called Safa and Marwa.`,
  },
  {
    id: 27,
    type: 'story',
    title: 'Hajar and Ishmael Search for Water',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F26_Chapter_27_Hajar_and_Ishmael_Search_for_Water.mp3?alt=media&token=d14daae7-e2e0-455c-bda1-66ab2239854c',
    content: `The valley had no fruit, no trees, no food, no water, and no sign of life. Abraham (pbuh) left them with a skin of water and a leather bag full of dates (hurma). As Abraham (pbuh) began walking away, leaving them behind, Hajar became anxious as to what was happening. Abraham (pbuh) continued walking. Hajar asked him: "Has Allah commanded you to leave us here? " He replied: "Yes. I am leaving you to Allah’s care. " Feeling a degree of comfort in this answer, this great woman said: "I am satisfied to be with Allah! We are not going to be lost, since Allah is with us. " Hajar came to understand that Abraham (pbuh) was not acting on his own decision; Allah had commanded him to leave them. Abraham (pbuh) advanced as far as the upper parts of Mecca. He stopped in a place where they could not see him.

He turned his face towards the direction where the Ka‘ba stands today and raised his hands, praying as follows: "O Our Lord!`,
  },
  {
    id: 28,
    type: 'story',
    title: 'Zamzam Appears',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F27_Chapter_28_Zamzam_Appears.mp3?alt=media&token=baf68a2a-1d4c-4428-972b-f49b47c307b2',
    content: `I have made some of my offspring to dwell in a valley with no cultivation, by Your Sacred House (the Ka‘ba at Mecca); in order, O our Lord, that they may offer prayers perfectly (Iqamat as salat); so fill some hearts among men with love towards them, and O Allah provide them with fruits so that they may give thanks" (Surah Ibrâhim: 37). Abraham (pbuh) had to take Hajar and Ishmael away from Palestine to a new place. This was about the rebuilding of the temple, that is, the Ka‘ba. According to Allah’s intention, Hajar and Ishmael had to leave Palestine and settle in the barren valley of Mecca, near the place of the old temple, to reconstruct the Holy Ka‘ba which was lost after Noah’s Flood, making this place the renewed center of monotheism: Islam. Over the years, Ishmael’s children had children; one of them was Muhammad, the Prophet of Islam (pbuh).

They spread all over the Arabian Peninsula to carry their grandfather Abraham (pbuh)’s message of monotheism.`,
  },
  {
    id: 29,
    type: 'story',
    title: 'Mecca Is Settled',
    image: '',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2F28_Chapter_29_Mecca_Is_Settled.mp3?alt=media&token=780ddf21-7c82-4189-9eb7-08eb04c16bbb',
    content: `Ibn Abbas, a companion of Prophet Muhammad (pbuh) who narrated many hadiths, said “ Ishmael's mother went on suckling Ishmael and drinking from the water. When the water in the water skin was used up, she became thirsty and her child also became thirsty. She started looking at Ishmael in grief. Hajar began searching for water. Leaving Ishmael under a tree, she began climbing the rocky slope of a nearby hill, Safa. ‘Maybe there is a caravan passing by,’ she thought to herself. Then, she moved across to the opposite hill, Marwa, but still saw nothing. She ran between the two hills of Safa and Marwa seven times looking for signs of water or help. Hagar’s patient search for water is directly comparable to the running (sa’y) between Safa and Marwah.” Her effort was later symbolized by all Muslims in Hajj. Actually, there is almost no difference between the pilgrimage called by Abraham (pbuh) and the pilgrimage of Islam.

Exhausted and sad, she heard a voice but could not find where it came from.`,
  },
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