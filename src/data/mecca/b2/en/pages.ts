import type { Exercise, PageData, TeacherGuideMetadata } from '../../../../types';
import { meccaB2QuickChallenges, meccaB2VocabularyChallengePairs, meccaB2FinalChallengeExercises, meccaB2FinalReviewExercises } from './exercises';
import { meccaB2LanguageFocusExercises } from './languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { meccaB2LanguageFocusExercisesPart3, meccaB2LanguageFocusExercisesPart4, meccaB2LanguageReviewExercises } from './languageFocus3';
import { meccaB2TeacherGuideMetadata } from './teacherGuide';

const rawMeccaB2Pages: PageData[] = [
// r01a
//__R01__
// r01b
// r02a
      { id: 'h2-2', x: 68, y: 50, title: "Peninsula", description: "This piece of land is called a peninsula because water surrounds it on three sides: the south, west, and east." }
    ],
    animatedWords: ["Jahiliyyah", "barbarism", "oppressed", "moral decline", "peninsula", "truly", "era", "sided with", "upper class", "civilized"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex2-1',
        type: 'multiple-choice',
        title: "Jahiliyyah and Mecca",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why is this period called the Age of Ignorance?",
        options: ["Because people did not truly know Allah and lacked justice, order, and peace", "Because people did not know how to trade", "Because there were no cities in Arabia"],
        correctAnswer: 0,
        explanation: "The chapter explains that ignorance refers to spiritual and moral disorder, not simply lack of scientific knowledge.",
        feedback: {
          correct: 'Correct. You understood the meaning of Jahiliyyah.',
          incorrect: 'Not quite. Focus on the explanation of “ignorance” in the text.'
        }
      }
    ]
  },
  {
    id: 3,
    type: 'story',
    title: "The Holy City",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch3-clean.png?alt=media&token=2e0ead7d-354d-414b-855f-68ebe0325821',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F02_Chapter_3_The_Holy_City.mp3?alt=media&token=c4c83d65-5191-426b-9cb3-f81504080779',
    content: `Mecca is the holy city of Islam. Allah chose this city to be the location of His House, the Holy Ka’ba. (See Âl-i Imran, 96.) It was also in this city that the last Prophet, Muhammad (pbuh), was born and spent 52 years of his life; 40 years of his life in this city before his prophethood and almost 13 years after it. And here he began to spread the message of Islam.

The Qiblah is also located in the city, which is the direction towards which Muslims face while they are performing their daily prayers, salah.

Prophet Muhammad (pbuh) loved this city so much that while leaving Mecca during his migration to Medina, He (pbuh) said: "I love you more than any other city. Had my people not forced me to leave, I would never have left you." (Sunan al-Tirmidhi, 3925).

Mecca is described in the Holy Quran as “a valley where no crops grow” (Surah Ibrahim: 37). The Ka’ba is the main factor in the establishment of Mecca as a settlement. It can be said that city life began here only with the building of the Ka’ba.

When Prophet Abraham (as) brought his son Ishmael and his wife Hagar to the city and left them there, the Zamzam water had not yet been discovered, so there was no population living there. This date is approximately between 2200 and 2000 B.C.`,
    vocabulary: [
      { word: "holy", definition: "Sacred and connected with worship." },
      { word: "Ka’ba", definition: "The Holy House of Allah in Mecca." },
      { word: "Qiblah", definition: "The direction Muslims face during prayer." },
      { word: "migration", definition: "Moving from one place to another." },
      { word: "settlement", definition: "A place where people begin to live." },
    ],
    hotspots: [
      { id: 'h3-1', x: 34, y: 44, title: "Ka’ba", description: "The Ka’ba is the main factor in the establishment of Mecca as a settlement. It can be said that city life began here only with the building of the Ka’ba." },
      { id: 'h3-2', x: 68, y: 50, title: "Qiblah", description: "The Qiblah is also located in the city, which is the direction towards which Muslims face while they are performing their daily prayers, salah." }
    ],
    animatedWords: ["holy", "Ka’ba", "Qiblah", "migration", "settlement"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex3-1',
        type: 'multiple-choice',
        title: "The Holy City",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What is described as the main factor in the establishment of Mecca as a settlement?",
        options: ["The Ka’ba", "The Red Sea", "The Byzantine Empire"],
        correctAnswer: 0,
        explanation: "The chapter says that city life began in Mecca with the building of the Ka’ba.",
        feedback: {
          correct: 'Correct. The Ka’ba is central to the establishment of Mecca.',
          incorrect: 'Not quite. Look again at the sentence about city life in Mecca.'
        }
      }
    ]
  },
  {
    id: 4,
    type: 'story',
    title: "The Ka’ba and the Quraysh",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch4-clean.png?alt=media&token=4a2bb961-4045-4f8c-9f81-97d5ad10d425',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F03_Chapter_4_The_Ka%E2%80%99ba_and_the_Quraysh.mp3?alt=media&token=ff1aec97-a9a9-4832-955f-2bce598ee1cf',
    content: `After the discovery of the Zamzam water, the Jurhumites (Cürhümlüler) from Yemen settled in Mecca. Ishmael, who was the first offspring of Abraham (as) to speak Arabic, learned the language from the Jurhumites. Later, when Ishmael grew up, Abraham (as) came to the city to reconstruct the Holy Ka’ba with his son. For the Arabs who accepted the religion taught by Abraham (as) and Ishmael (as), the Ka’ba became a pilgrimage site; this helped the city grow rapidly. After Abraham (as) invited people for pilgrimage (hajj) and completed his mission, he returned to Palestine.

Then a new tribe, the Khuza’a (Huzâa), came to Mecca, defeated the Jurhumites, and established their rule over the city. During the rule of this tribe, people forgot the religion of Abraham (as) (monotheism) and spread idolatry throughout the city. In the 5th century, the administration of Mecca and the Ka’ba passed to the Quraysh tribe. Pre-Islamic Mecca was administered by a council of mostly wealthy merchants.

Since the surroundings of the city were not suitable for agriculture, people tried to make a living with trade.

In the period when Islam came, the Byzantine and Sassanid empires, which were the two most powerful states in the region, had trade with Arabia in both the northern and southern regions.
// r02b
// r03a
//__R03__
// r03b
// r04a
//__R04__
// r04b
// r05a
//__R05__
// r05b
// r06a
//__R06__
// r06b
// r07a
//__R07__
// r07b
// r08a
//__R08__
// r08b
// r09a
//__R09__
// r09b
// r10a
//__R10__
// r10b
// r11a
//__R11__
// r11b
// r12a
//__R12__
// r12b

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b
// t03a
//__T03__
// t03b
// t04a
//__T04__
// t04b
// t05a
//__T05__
// t05b
