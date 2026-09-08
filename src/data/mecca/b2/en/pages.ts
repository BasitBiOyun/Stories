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
//__R02__
// r02b
// r03a
India also played a very important role in Arabia's trade. There were many products made in India, Indonesia, and China.`,
    vocabulary: [
      { word: "offspring", definition: "A child or descendant." },
      { word: "reconstruct", definition: "To build again." },
      { word: "pilgrimage", definition: "A religious journey to a sacred place." },
      { word: "monotheism", definition: "Belief in one God only." },
      { word: "idolatry", definition: "Worshipping idols." },
      { word: "tribe", definition: "A group of people with the same language and ancestors." }
    ],
    hotspots: [
      { id: 'h4-1', x: 34, y: 44, title: "Pilgrimage", description: "For the Arabs who accepted the religion taught by Abraham (as) and Ishmael (as), the Ka’ba became a pilgrimage site; this helped the city grow rapidly." },
      { id: 'h4-2', x: 68, y: 50, title: "Quraysh", description: "In the 5th century, the administration of Mecca and the Ka’ba passed to the Quraysh tribe." }
    ],
    animatedWords: ["offspring", "reconstruct", "pilgrimage", "monotheism", "idolatry", "tribe"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex4-1',
        type: 'multiple-choice',
        title: "The Ka’ba and the Quraysh",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did people in Mecca try to make a living with trade?",
        options: ["Because the surroundings were not suitable for agriculture", "Because there were no caravans", "Because farming was forbidden"],
        correctAnswer: 0,
        explanation: "The chapter explains that Mecca’s surroundings were not suitable for agriculture.",
        feedback: {
          correct: 'Correct. Trade became necessary because agriculture was difficult.',
          incorrect: 'Not quite. Focus on the sentence about the surroundings of the city.'
        }
      }
    ]
  },
  {
    id: 5,
    type: 'story',
    title: "Mecca as a Trade Center",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch5-clean.png?alt=media&token=be2f5347-2e03-4503-b8dc-04444062e85a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F04_Chapter_5_Mecca_as_a_Trade_Center.mp3?alt=media&token=5daf39d9-8b4f-42ca-bce6-523e06230d54',
    content: `Tribes from Yemen brought these products to the coast of Yemen and they organized caravans to transport them to Iraq, Syria, Palestine, and Egypt.

Mecca began to develop into a trade center from the early 6th century CE (Common Era: Milattan Sonra). Hashim ibn Abd Manaf, the great-grandfather of Muhammad (as), played a key role in boosting the economy of Mecca. He, along with the leaders of the Quraysh tribe, made trade deals with some tribes and nations, and they were given permission to travel freely. These agreements also allowed Quraysh merchants to enter Byzantium, Yemen, Iraq, and Abyssinia (Ethiopia). The summer and winter journeys described in the Holy Quran were organized once a year with large caravans (see, Surah Quraysh: 1-4). These caravans numbered up to 2,500 camels.

This meant approximately 2–3 shiploads of cargo. At that time, the typical Roman trade ship had a carrying capacity of around 100–150 tons. This number shows us how large the trade was.

In addition to these, many caravans left Mecca at almost every time of the year. For example, one of the places where the Quraysh caravans traveled for trade was Egypt, the Byzantine Empire’s wealthiest region. Abyssinia was also a place with which the Quraysh had trade relations by sea. Suhayl b. Amr and Uthman Ibn Affan were shipowners from the Quraysh tribe. So, beginning with the settlement of the Quraysh tribe in Mecca in the mid-5th century A.D., the city of Mecca gradually developed into a center of trade.`,
    vocabulary: [
      { word: "caravan", definition: "A group of people, animals, or vehicles traveling together." },
      { word: "trade center", definition: "A place where buying and selling are very important." },
      { word: "boost", definition: "To increase or improve something." },
      { word: "merchant", definition: "A person who buys and sells goods." },
      { word: "cargo", definition: "Goods carried by ship, camel, or vehicle." },
      { word: "Hashim ibn Abd Manaf", definition: "The great-grandfather of Prophet Muhammad (as) who played a key role in boosting Mecca's economy." }
    ],
    hotspots: [
      { id: 'h5-1', x: 34, y: 44, title: "Caravans", description: "The summer and winter journeys described in the Holy Quran were organized once a year with large caravans (see, Surah Quraysh: 1-4). These caravans numbered up to 2,500 camels." },
      { id: 'h5-2', x: 68, y: 50, title: "Trade Center", description: "Beginning with the settlement of the Quraysh tribe in Mecca in the mid-5th century A.D., the city of Mecca gradually developed into a center of trade." }
    ],
    animatedWords: ["caravan", "trade center", "boost", "merchant", "cargo", "Hashim ibn Abd Manaf"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex5-1',
        type: 'multiple-choice',
        title: "Mecca as a Trade Center",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Who played a key role in boosting the economy of Mecca?",
        options: ["Hashim ibn Abd Manaf", "Khuza’a", "Abu Jahl"],
        correctAnswer: 0,
        explanation: "The chapter says that Hashim ibn Abd Manaf played a key role in boosting Mecca’s economy.",
        feedback: {
          correct: 'Correct. You identified the key historical figure.',
          incorrect: 'Not quite. Look again at the paragraph about the early 6th century CE.'
        }
      }
    ]
  },
  {
    id: 6,
    type: 'story',
    title: "Sacred Months and Trade",
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
