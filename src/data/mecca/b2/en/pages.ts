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
//__R10__
// r10b
// r11a
        feedback: {
          correct: 'Correct! Injustice of this system prompted key alliances like Hilf al-Fudul.',
          incorrect: 'Actually, the system was highly unequal and favored elite tribal members.'
        }
      },
      {
        id: 'q3',
        type: 'true-false',
        question: 'The Quraysh established Mecca as a dominant trade hub by transforming seasonal raids into institutionalized caravan networks regulated by treaties.',
        correctAnswer: true,
        explanation: 'Under leaders like Hashim, the Quraysh negotiated treaties (ilaf) to secure safe passage, turning lawless raids into a prosperous commerce system.',
        feedback: {
          correct: 'Correct! The treaties transformed Meccan commerce.',
          incorrect: 'Actually, they instituted peaceful trade agreements to secure their trade caravans.'
        }
      },
      {
        id: 'q4',
        type: 'true-false',
        question: 'The Hanif tradition represents an indigenous Arabian trend towards monotheism that completely assimilated into the dominant pagan pantheon.',
        correctAnswer: false,
        explanation: 'Hanifs explicitly rejected pagan idol worship and maintained a strict monotheistic faith tracing back to Abraham, resisting assimilation.',
        feedback: {
          correct: 'Correct! They remained distinct and rejected idolatry.',
          incorrect: 'Actually, the Hanifs refused pagan idolatry and stayed committed to monotheism.'
        }
      },
      {
        id: 'q5',
        type: 'true-false',
        question: 'The fierce opposition of Meccan elites to the Prophet’s message was driven by theological disagreements rather than socio-economic anxieties.',
        correctAnswer: false,
        explanation: 'While theology mattered, the primary driver of elite resistance was fear that monotheism would destroy idol-based pilgrimage profits and social structures.',
        feedback: {
          correct: 'Correct! Socio-economic and political threat to their privilege was the main driver.',
          incorrect: 'Actually, economic and political power fears dominated of their opposition.'
        }
      },
      {
        id: 'q6',
        type: 'true-false',
        question: 'The Quraysh-wide boycott against Banu Hashim was a peaceful cultural protest that involved no physical or material hardship on early believers.',
        correctAnswer: false,
        explanation: 'The boycott (617-620) was a brutal socio-economic blockade that subjected early Muslims to intense starvation, isolation, and severe physical deprivation.',
        feedback: {
          correct: 'Correct! It was a severe economic and social embargo, causing tremendous physical suffering.',
          incorrect: 'Actually, the boycott was a severe embargo that caused extreme hunger and hardship.'
        }
      }
    ]
  },
  {
    id: 19,
    type: 'exercises',
    title: 'Final Review & Reflection',
    image: 'https://picsum.photos/seed/mecca-b2-exercises/1200/800',
    content: 'Complete these analytical exercises to synthesize the historical, socio-political, and religious dynamics of pre-Islamic Mecca.',
    exercises: meccaB2FinalReviewExercises
  },
  {
    id: 20,
    type: 'glossary',
    title: 'B2 Master Glossary - Part 1',
    content: 'Advanced academic vocabulary and socio-political terminology from the first half of the text.',
    image: 'https://picsum.photos/seed/mecca-b2-glossary1/1200/800',
    vocabulary: [
      { word: 'Jahiliyyah', definition: 'The state of spiritual, moral, and social ignorance and disorder preceding the rise of Islam.' },
      { word: 'hegemony', definition: 'The political, economic, or military predominance or leadership of one state or group over others.' },
      { word: 'Byzantine', definition: 'The Eastern Roman Empire, which acted as a major superpower surrounding northern Arabia.' },
      { word: 'Sassanid', definition: 'The neo-Persian Empire, the main rival of Byzantium, bordering eastern Arabia.' },
      { word: 'sedentary', definition: 'A settled way of life, characteristic of city-dwellers, contrasted with nomadic pastoralists.' },
      { word: 'nomadic', definition: 'A roaming lifestyle moving from pasture to pasture without permanent settlement.' },
      { word: 'monotheism', definition: 'The belief in and worship of a single, omnipotent, transcendent Creator.' },
      { word: 'oligarchy', definition: 'A small group of wealthy, powerful elites running the political and social affairs of a city.' },
      { word: 'lucrative', definition: 'Highly profitable trade, business, or commercial activities.' },
      { word: 'customary', definition: 'According to the traditional practices, common law, and deep-seated tribal habits of a society.' },
      { word: 'metropolis', definition: 'A large, densely populated, and economically active urban hub or city.' },
      { word: 'pilgrimage', definition: 'A religious journey to a sacred sanctuary or temple; a key source of prestige for Mecca.' }
    ]
  },
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
