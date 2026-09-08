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
  {
    id: 13,
    type: 'story',
    title: "Islam and a New Society",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch13-clean.png?alt=media&token=19751d63-7e73-4f88-a3a8-f910cd30fbaf',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F12_Chapter_13_Islam_and_a_New_Society.mp3?alt=media&token=b9c326a7-d4f9-4f61-ba21-2b1471f84319',
    content: `Politics, economics, and religion are three interconnected areas. Religion and beliefs determine every aspect of life. So, it is understandable that Islam faced opposition from both politically and economically powerful groups in Mecca. From the start, Islam showed that this was a new group. Islam made this new Muslim community different from, and better than, the people around them.

The aristocracy provoked the public against the new religion. The leaders of the Quraysh viewed Islam as a threat to their authority. The wealth they got through trade, as well as the respect they had from other tribes, made the Quraysh the leaders of their region. They were serving as the prestigious caretakers of the pilgrimage in the Arabian Peninsula. Protecting this status and unity was very important to them.

The first people who heard the Prophet's call, which began in 610, were the Quraysh tribe of Mecca. Some of the Quraysh responded positively to his call and became Muslims. When they heard the Prophet Muhammad (as) read the Quran, they were sure it was from Allah. This message totally changed them. It touched their hearts and minds, making them cry and feel deep respect, even causing their hair to stand on end. However, a large group led by the tribal leaders denied his prophethood and opposed him fiercely.`,
    vocabulary: [
      { word: "interconnected", definition: "Connected with each other." },
      { word: "opposition", definition: "Resistance against something." },
      { word: "authority", definition: "Power or right to control." },
      { word: "prestigious", definition: "Respected and admired." },
      { word: "prophethood", definition: "The mission and status of being a prophet." },
    ],
    hotspots: [
      { id: 'h13-1', x: 34, y: 44, title: "Opposition", description: "It is understandable that Islam faced opposition from both politically and economically powerful groups in Mecca." },
      { id: 'h13-2', x: 68, y: 50, title: "New Community", description: "From the start, Islam showed that this was a new group. Islam made this new Muslim community different from, and better than, the people around them." }
    ],
    animatedWords: ["interconnected", "opposition", "authority", "prestigious", "prophethood"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex13-1',
        type: 'multiple-choice',
        title: "Islam and a New Society",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why did powerful groups in Mecca oppose Islam?",
        options: ["Because Islam threatened their political and economic authority", "Because Islam stopped people from reading", "Because Mecca had no trade"],
        correctAnswer: 0,
        explanation: "The chapter explains that powerful leaders saw Islam as a threat to their authority and status.",
        feedback: {
          correct: 'Correct. You understood the reason for opposition.',
          incorrect: 'Not quite. Focus on the relationship between religion, politics, and economics.'
        }
      }
    ]
  },
  {
    id: 14,
    type: 'story',
    title: "Quraysh and Power",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch14-clean.png?alt=media&token=b1c0b32e-d535-4f94-81c1-90d5eca7d63b',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F13_Chapter_14_Quraysh_and_Power.mp3?alt=media&token=e8232cda-fcbb-4cf3-82f6-5222960f9009',
    content: `The population of Mecca, where the Prophet (as) taught Islam for 13 years, was between 5,000 and 10,000. In the first few years of the call to Islam, there was almost no one from Mecca’s super-rich among the 46 people who became Muslims. Many of the first Muslims were the poor and the slaves. Prophet Muhammad (as) mentioned Allah’s infinite Mercy, Wisdom, Goodness and Power. This filled their hearts with joy and hope.

The upper class of the city, whose survival depended on the existing order, refused to accept the rise of a new formation and opposed it violently.

Indeed, almost none of the tribal leaders had accepted Islam. Although the leading figures of the Quraysh were not always extremely wealthy, they were prominent figures within the Quraysh, like Abu Talib.

The new belief system was introducing radical changes in every area. For instance, the Quraysh considered usury to be lawful and said, “Trade is like usury.” The Quran, however, distinguishes between usury and trade; it emphasizes that trade is halal (lawful) while usury is haram (unlawful). These people, who saw themselves as superior to others because of their wealth, ignored the Quran’s commands to be fair to the poor, to pay zakat, and to give alms as ways to purify their wealth.

Maintaining their leadership position was of vital importance to the leaders of the Quraysh. The Quraysh were saying, “Muhammad is trying to gain the upper hand over us; he wants us to obey him and become the ultimate authority over us. Never obey him.”`,
    vocabulary: [
      { word: "super-rich", definition: "Extremely wealthy people." },
      { word: "formation", definition: "A newly formed group or structure." },
      { word: "radical", definition: "Major and fundamental." },
      { word: "lawful", definition: "Allowed by law or religion." },
      { word: "leadership position", definition: "A position of authority and control." },
    ],
    hotspots: [
      { id: 'h14-1', x: 34, y: 44, title: "First Muslims", description: "In the first few years of the call to Islam, there was almost no one from Mecca’s super-rich among the 46 people who became Muslims. Many of the first Muslims were the poor and the slaves." },
      { id: 'h14-2', x: 68, y: 50, title: "Power", description: "Maintaining their leadership position was of vital importance to the leaders of the Quraysh." }
    ],
    animatedWords: ["super-rich", "formation", "radical", "lawful", "leadership position"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex14-1',
        type: 'multiple-choice',
        title: "Quraysh and Power",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Who were many of the first Muslims according to the chapter?",
        options: ["The poor and the slaves", "The emperors of Byzantium", "Only the richest merchants"],
        correctAnswer: 0,
        explanation: "The chapter states that many of the first Muslims were the poor and the slaves.",
        feedback: {
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
