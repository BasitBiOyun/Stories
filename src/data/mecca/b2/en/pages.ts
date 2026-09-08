import type { Exercise, PageData, TeacherGuideMetadata } from '../../../../types';
import { meccaB2QuickChallenges, meccaB2VocabularyChallengePairs, meccaB2FinalChallengeExercises, meccaB2FinalReviewExercises } from './exercises';
import { meccaB2LanguageFocusExercises } from './languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { meccaB2LanguageFocusExercisesPart3, meccaB2LanguageFocusExercisesPart4, meccaB2LanguageReviewExercises } from './languageFocus3';
import { meccaB2TeacherGuideMetadata } from './teacherGuide';

const rawMeccaB2Pages: PageData[] = [
// r01a
  {
    id: 1,
    type: 'story',
    title: "A City and an Age",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch1-clean.png?alt=media&token=e4c627c6-6f73-4990-85a0-67a7327ac3dc',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F00_Chapter_1.mp3?alt=media&token=ac745550-639e-4e1f-84fb-31fda7bcfd0c',
    content: `One of the most important developments of the Middle Ages (Middle Ages span between the fall of the Roman Empire in 476 CE and the conquest of Constantinople in 1453 by the Ottoman Turks) was the rise of Islam. Islam was born in the city of Mecca in the 7th century.

Two superpowers of the time were the Christian Romano-Byzantine Empire (395 CE–1453 CE) with its capital city Constantinople (which we now call Istanbul) and the Persians ruled by the Zoroastrian Sassanids (223 CE–651 CE). At that time, the Arabs were neighbors on the southeastern boundaries of the Byzantine Empire. They were also the neighbors of the Sassanids in the east.

The rivalry between these two superpowers exhausted both sides. On the other side, because the Arabs lived in tribes, there was no political unity on the Arabian Peninsula.

After describing the broad background of the time, take a closer look at the city and the era in which Prophet Muhammad (pbuh) lived and Islam rose.

The city we are talking about is Mecca, and the time period is called the Age of Ignorance.

The Age of Ignorance is the pre-Islamic era in the Arabian Peninsula that covers the period from the 5th century to the beginning of the revelation (vahiy) in 610.`,
    vocabulary: [
      { word: "Middle Ages", definition: "The historical period between the fall of the Roman Empire and the conquest of Constantinople." },
      { word: "superpower", definition: "A very powerful state or empire." },
      { word: "rivalry", definition: "Competition or conflict between two sides." },
      { word: "political unity", definition: "A situation in which people or groups are organized under one political authority." },
      { word: "revelation", definition: "A message sent by Allah to a prophet." },
      { word: "span", definition: "To extend across a period of time." },
      { word: "conquest", definition: "The act of taking control of a place by force." },
    ],
    hotspots: [
      { id: 'h1-1', x: 34, y: 44, title: "Middle Ages", description: "One of the most important developments of the Middle Ages (Middle Ages span between the fall of the Roman Empire in 476 CE and the conquest of Constantinople in 1453 by the Ottoman Turks) was the rise of Islam." },
      { id: 'h1-2', x: 68, y: 50, title: "Mecca", description: "Islam was born in the city of Mecca in the 7th century." }
    ],
    animatedWords: ["Middle Ages", "superpower", "rivalry", "political unity", "revelation", "span", "conquest"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex1-1',
        type: 'multiple-choice',
        title: "A City and an Age",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Which city is described as the city where Islam was born?",
        options: ["Mecca", "Constantinople", "Palestine"],
        correctAnswer: 0,
        explanation: "The chapter states that Islam was born in the city of Mecca in the 7th century.",
        feedback: {
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Reread the chapter and focus on the city mentioned.'
        }
      }
    ]
  },
  {
    id: 2,
    type: 'story',
    title: "Jahiliyyah and Mecca",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch2-clean.png?alt=media&token=ddc0d6e6-8369-46af-9b59-cfd241d6c19c',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F01_Chapter_2_Jahiliyyah_and_Mecca.mp3?alt=media&token=31b63252-8882-46a8-b789-d810b5945494',
    content: `The term is used to describe the beliefs and behaviors of the Arabs before the Islamic era. The meaning of "ignorance" is not the lack of science or the lack of knowledge. This period is called the Age of Ignorance because people did not truly know Allah and widely did not have justice, order, and peace both in their personal and social lives. They always sided with the powerful and the upper class. The oppressed, the weak and the poor were living a life of misery.

The Quran points to the ignorance and barbarism of the pre-Islamic era, as well as the violence, hatred, bloodshed, and other moral decline that dominated the lives of the pagan community.

The Jahiliyyah is the “age of barbarism.” In fact, the Prophet described Islam as the opposite of barbarism. An ignorant person is wild, a slave to their desires, follows their animalistic feelings, brutal and aggressive; in other words, a “barbarian.” The opposite of this is a civilized person. Although the word “jahiliyyah” essentially describes the pre-Islamic period of the Arabs, the Prophet (as) did not view it as a period of the past. On the contrary, he believed it could arise again at any moment and warned people against it.

To understand Jahiliyyah, it is necessary to describe Mecca. Mecca is in the western part of the Arabian Peninsula. This piece of land is called a peninsula because water surrounds it on three sides: the south, west, and east. (The Arabian/Persian Gulf (Basra Körfezi) is in the east, the Indian Ocean is in the south, and the Red Sea is in the west.)`,
    vocabulary: [
      { word: "Jahiliyyah", definition: "The Age of Ignorance before Islam." },
      { word: "barbarism", definition: "Cruel, uncivilized, and violent behavior." },
      { word: "oppressed", definition: "Treated cruelly and unfairly." },
      { word: "moral decline", definition: "A fall in good behavior and moral values." },
      { word: "peninsula", definition: "A piece of land surrounded by water on three sides." },
      { word: "truly", definition: "In a truthful, accurate, or sincere way." },
      { word: "era", definition: "A long and distinct period of history." },
      { word: "sided with", definition: "Supported one person or group against another." },
      { word: "upper class", definition: "The social group that has the highest status or wealth." },
      { word: "civilized", definition: "Having an advanced, polite, and well-organized society." }
    ],
    hotspots: [
      { id: 'h2-1', x: 34, y: 44, title: "Jahiliyyah", description: "This period is called the Age of Ignorance because people did not truly know Allah and widely did not have justice, order, and peace both in their personal and social lives." },
// r01b
// r02a
//__R02__
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
