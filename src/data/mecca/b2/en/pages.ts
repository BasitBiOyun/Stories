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
//__R09__
// r09b
// r10a
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why was tribal fanaticism a barrier for the new religion?",
        options: ["Because a person could be left unprotected if they stepped outside the tribe’s views", "Because tribes had no influence", "Because everyone could freely choose without pressure"],
        correctAnswer: 0,
        explanation: "The chapter explains that leaving the tribe’s view could mean losing protection.",
        feedback: {
          correct: 'Correct. You understood the social pressure of tribal life.',
          incorrect: 'Not quite. Focus on the paragraph about tribal protection.'
        }
      }
    ]
  },
  {
    id: 17,
    type: 'story',
    title: "Islam Against Ignorance",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch17-clean.png?alt=media&token=9f4bf51b-6a79-4142-9b0b-4e459a1bd924',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F16_Chapter_17_Islam_Against_Ignorance.mp3?alt=media&token=e8e480f8-ffa4-4552-a463-7077542898a4',
    content: `For example, Abu Jahl, one of the leading figures of opposition to Islam, strongly rejected Islam and led his tribe in the same direction. The Quraysh were saying that Islam broke up families and because of this, the Quraysh lost power. When the Quraysh leaders blamed the Prophet, they said, “You have destroyed our unity.”

In Mecca, which was a place of oppression, injustice, and immorality before Islam, the Prophet (as) called upon people to follow justice and morality. At the heart of Islam is human honor and dignity. Islam respects humans as humans. All other differences are not important to Islam. Whether they are slaves, women, poor, or the weak, they all deserve respect.

The Age of Ignorance was the opposite of Islam. The term both refers to pre-Islamic Arabia and also describes any culture, society or way of thinking that comes from human arrogance. On the other hand, Islam is all about making the world a more fair and peaceful place.

The dreadful situation in the twenty-first century reminds us of the dark period of ignorance in seventh-century Mecca. So, the Age of Ignorance is not only a past time but also a culture that is still valid. Islam has always stood against it and will continue to do so.`,
    vocabulary: [
      { word: "opposition", definition: "Resistance against something." },
      { word: "oppression", definition: "Cruel and unfair treatment." },
      { word: "immorality", definition: "Behavior that is morally wrong." },
      { word: "human honor", definition: "The dignity and value of every human being." },
      { word: "arrogance", definition: "Pride that makes someone feel superior to others." },
    ],
    hotspots: [
      { id: 'h17-1', x: 34, y: 44, title: "Human Honor", description: "At the heart of Islam is the human being and his honor. Islam respects humans as humans. All other differences are not important to Islam." },
      { id: 'h17-2', x: 68, y: 50, title: "Against Ignorance", description: "The Age of Ignorance was the opposite of Islam. ... On the other hand, Islam is all about making the world a more fair and peaceful place." }
    ],
    animatedWords: ["opposition", "oppression", "immorality", "human honor", "arrogance"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex17-1',
        type: 'multiple-choice',
        title: "Islam Against Ignorance",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What is at the heart of Islam according to this chapter?",
        options: ["The human being and his honor", "Tribal superiority", "The wealth of merchants"],
        correctAnswer: 0,
        explanation: "The chapter says that at the heart of Islam is the human being and his honor.",
        feedback: {
          correct: 'Correct. You understood the central message of the chapter.',
          incorrect: 'Not quite. Reread the paragraph about justice, morality, and human honor.'
        }
      }
    ]
  },
  {
    id: 18,
    type: 'quiz',
    title: 'Knowledge Check: Mecca and the Transregional Context - B2',
    image: 'https://picsum.photos/seed/quiz-mecca-b2/1200/800',
    audioUrl: '',
    content: 'Test your understanding of the B2 content on Mecca, global geopolitics, socioeconomic systems, and spiritual currents through these advanced true-false exercises.',
    exercises: [
      {
        id: 'q1',
        type: 'true-false',
        question: 'The geopolitical exhaustion of the Byzantine and Sassanid empires created a strategic vacuum that facilitated the expansion of Islam.',
        correctAnswer: true,
        explanation: 'Centuries of warfare between Byzantium and Persia left both empires weak and vulnerable, shaping the global backdrop for Islam.',
        feedback: {
          correct: 'Correct! The macro-historical rivalry depleted their strength.',
          incorrect: 'Actually, their prolonged conflict did weaken both empires.'
        }
      },
      {
        id: 'q2',
        type: 'true-false',
        question: 'Prior to Islamic reform, the Meccan tribal systems (hilf) provided robust and equal legal protection for all foreign traders and slaves.',
        correctAnswer: false,
        explanation: 'Pagan Meccan tribal systems only protected those with strong tribal affiliations, leaving foreign merchants and slaves unprotected.',
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
