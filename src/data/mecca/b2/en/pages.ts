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
          correct: 'Correct. You answered according to the chapter text.',
          incorrect: 'Not quite. Look at the opening paragraph of the chapter.'
        }
      }
    ]
  },
  {
    id: 15,
    type: 'story',
    title: "Opposition to the New Faith",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch15-clean.png?alt=media&token=8cf5995d-ea53-41d0-991b-b5c4d4e7099f',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F14_Chapter_15_Opposition_to_the_New_Faith.mp3?alt=media&token=bcc84aa4-8c72-43b3-8f3c-7ea4bef502f6',
    content: `Because they knew that the Prophet’s call to monotheism—which rejected oppression, injustice, exploitation, and usury—would eventually bring them face to face with people who carried out these practices.

Pagan Meccan leaders tried various methods to prevent the new faith from growing stronger. At first, they mocked just the new religion. When the Prophet (as) passed by the places where the disbelievers were sitting, they would point and laugh at him and say, “The son of the family of Abdulmuttalib is bringing news from heaven!”

However, when the Quran began to speak ill of their idols, mock them, and announce that they and their idols would be fuel for Hell, they began to oppose him fiercely. Poor people or those without powerful protectors suffered the most. One of them was Bilal, an Abyssinian slave. He became one of the first believers in Islam. His master, Umayya b. Halef, often took him out in the hot midday sun. He put a heavy rock on Bilal's chest and ordered him to give up his religion.

The Meccan elites went further and imposed a social and economic boycott on the Muslims and those who protected the Prophet (as) between 617 and 620. During this period the Prophet (as), his wife Khadija, and Abu Talib spent all their wealth to support the Muslims. Some people died of starvation; there were even those who ate tree leaves. The cries of children dying of hunger began to be heard.`,
    vocabulary: [
      { word: "monotheism", definition: "Belief in one God only." },
      { word: "exploitation", definition: "Using people unfairly for benefit." },
      { word: "mock", definition: "To laugh at someone or something cruelly." },
      { word: "boycott", definition: "Refusing social or economic contact as a form of pressure." },
      { word: "starvation", definition: "Extreme suffering or death from lack of food." },
    ],
    hotspots: [
      { id: 'h15-1', x: 34, y: 44, title: "Bilal", description: "Poor people or those without powerful protectors suffered the most. One of them was Bilal, an Abyssinian slave. He became one of the first believers in Islam." },
      { id: 'h15-2', x: 68, y: 50, title: "Boycott", description: "The Meccan elites went further and imposed a social and economic boycott on the Muslims and those who protected the Prophet (as) between 617 and 620." }
    ],
    animatedWords: ["monotheism", "exploitation", "mock", "boycott", "starvation"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex15-1',
        type: 'multiple-choice',
        title: "Opposition to the New Faith",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Who suffered the most when Meccan leaders opposed Islam fiercely?",
        options: ["Poor people or those without powerful protectors", "Only the richest leaders", "Only foreign merchants"],
        correctAnswer: 0,
        explanation: "The chapter explains that poor people and those without powerful protectors suffered the most.",
        feedback: {
          correct: 'Correct. You understood who was most vulnerable.',
          incorrect: 'Not quite. Reread the paragraph about fierce opposition.'
        }
      }
    ]
  },
  {
    id: 16,
    type: 'story',
    title: "Hostility and Tribal Fanaticism",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch16-clean.png?alt=media&token=b1e6af30-1c11-4af9-9feb-24c72b475a82',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F15_Chapter_16_Hostility_and_Tribal_Fanaticism.mp3?alt=media&token=c6663b4a-f94a-4314-82a0-adaba9132a23',
    content: `One of the main reasons for the Quraysh's hostility toward the Prophet Muhammad (as) was the Quran’s demand that they abandon their old false religions about which they boasted at every opportunity. The other was the Quran’s call for them to worship a single Allah.

The rejection of idols meant, for the Quraysh, the end of the trade on which they depended for their wealth. Leaders who built their authority on idols would lose both their political and economic influence if they lost their idols.

They also refused to believe that they would face punishment in the afterlife for their sins. It was too much for them to think that they would be judged for oppressing people, gaining money through unjust means, as well as for drinking alcohol and every kind of evil.

As mentioned above, one of the characteristics of Arab society was tribal fanaticism. This was also one of the greatest barriers for the new religion. A tribal member could not show the courage to step outside the views of his tribe. Otherwise, he would be left unprotected by his tribe—which, in today’s terms, means being stateless and falling into a defenseless situation. The leaders in Mecca tried everything to stop the new Muslims. Because of this, the "freedom of choice" that Islam talked about could not work at that time.`,
    vocabulary: [
      { word: "hostility", definition: "Strong opposition or hatred." },
      { word: "abandon", definition: "To leave or give up something." },
      { word: "afterlife", definition: "Life after death." },
      { word: "tribal fanaticism", definition: "Extreme loyalty to one’s tribe even when it is wrong." },
      { word: "stateless", definition: "Without the protection of a state or political group." },
    ],
    hotspots: [
      { id: 'h16-1', x: 34, y: 44, title: "Idols", description: "The rejection of idols meant, for the Quraysh, the end of the trade on which they depended for their wealth. Leaders who built their authority on idols would lose both their political and economic influence if they lost their idols." },
      { id: 'h16-2', x: 68, y: 50, title: "Tribal Fanaticism", description: "One of the characteristics of Arab society was tribal fanaticism. This was also one of the greatest barriers for the new religion." }
    ],
    animatedWords: ["hostility", "abandon", "afterlife", "tribal fanaticism", "stateless"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex16-1',
        type: 'multiple-choice',
        title: "Hostility and Tribal Fanaticism",
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
