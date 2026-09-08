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
    ],
    hotspots: [
      { id: 'h9-1', x: 34, y: 44, title: "Generosity", description: "The Arabs before Islam were known for their extraordinary generosity and hospitality. They used to bet on who could slay and offer the most camels for their guests." },
      { id: 'h9-2', x: 68, y: 50, title: "Tribal Honor", description: "The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by arrogance rather than real goodness." }
    ],
    animatedWords: ["formation", "oath", "generosity", "hospitality", "arrogance", "spoke highly", "abandon", "hesitation", "bet on"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex9-1',
        type: 'multiple-choice',
        title: "Generosity and Tribal Life",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why does the text say some generous actions became problematic?",
        options: ["Because they were often driven by arrogance and tribal fame", "Because generosity was completely absent", "Because guests were never welcomed"],
        correctAnswer: 0,
        explanation: "The chapter says that generosity was often connected to arrogance, fame, and tribal competition.",
        feedback: {
          correct: 'Correct. You understood the deeper criticism in the chapter.',
          incorrect: 'Not quite. Focus on the paragraph about arrogance and tribal honor.'
        }
      }
    ]
  },
  {
    id: 10,
    type: 'story',
    title: "Women in Jahiliyyah",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch10-clean.png?alt=media&token=6b0d4166-dcf1-46cd-9f21-206ef00030ae',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F09_Chapter_10_Women_in_Jahiliyyah.mp3?alt=media&token=3d573926-d702-44a4-959f-9db29234f454',
    content: `In the hard desert environment, physical strength was crucial. So men were seen as the tribes' most valuable fighting members. The Arabs' main aim was to have a large number of male children because this was the only way they could be respected by other tribes. Without tribal protection, people could not protect their lives and property.

Pre-Islamic Arabs valued ancestors greatly and knew their names by heart. It was important to work for the tribe and to honor and defend it in every circumstance, no matter what the tribe did.

The position of Arab women before Islam was not always the same. It changed according to their social status and tribes. Despite limitations from society, some women managed to reach a level of some freedom. For example, Khadija, the wealthy wife of the Prophet (as), was free to run a business under her own name. Or a woman from a higher social class, like Hind bint Utbah, who was the wife of Abu Sufyan and the mother of Mu'awiya, had some power in society.

However, many women from lower social and economic groups were mistreated and disadvantaged. Those women and girls had no status and no human or legal rights in their family lives and in society. They had no say and were not allowed to give their opinions.

When news of the birth of a daughter was given to them, people in the Age of Ignorance lamented and their faces were darkened with grief and fury. They themselves were ashamed of having daughters and longed for sons to increase their power and dignity. The Holy Qur’an describes this scene in Surah Nahl, verses 58-59;`,
    vocabulary: [
      { word: "crucial", definition: "Extremely important." },
      { word: "ancestor", definition: "A family member who lived long ago." },
      { word: "social status", definition: "A person’s position in society." },
      { word: "disadvantaged", definition: "Having fewer rights, chances, or resources." },
      { word: "dignity", definition: "Honor and human worth." },
      { word: "by heart", definition: "From memory; completely." },
      { word: "mistreated", definition: "Treated badly or cruelly." },
      { word: "lamented", definition: "Expressed deep grief or sorrow." },
      { word: "longed for", definition: "Wanted or desired something very much." },
      { word: "ashamed", definition: "Feeling shame, guilt, or embarrassment." }
    ],
    hotspots: [
      { id: 'h10-1', x: 34, y: 44, title: "Tribal Protection", description: "Without tribal protection, people could not protect their lives and property." },
      { id: 'h10-2', x: 68, y: 50, title: "Women", description: "The position of Arab women before Islam was not always the same. It changed according to their social status and tribes." }
    ],
    animatedWords: ["crucial", "ancestor", "social status", "disadvantaged", "dignity", "by heart", "mistreated", "lamented", "longed for", "ashamed"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex10-1',
        type: 'multiple-choice',
        title: "Women in Jahiliyyah",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "According to the text, what affected the position of Arab women before Islam?",
        options: ["Their social status and tribes", "The number of caravans", "The Red Sea route"],
        correctAnswer: 0,
        explanation: "The chapter explains that women’s position changed according to their social status and tribes.",
        feedback: {
          correct: 'Correct. You identified the social factor.',
          incorrect: 'Not quite. Reread the paragraph about the position of Arab women.'
        }
      }
    ]
  },
  {
    id: 11,
    type: 'story',
    title: "Slavery, Poets and Media",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch11-clean.png?alt=media&token=463b4569-1c7e-401c-95ce-8c82fdad0be8',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F10_Chapter_11_Slavery%2C_Poets_and_Media.mp3?alt=media&token=05ecbabc-1d76-4ba2-9605-8e61e949263c',
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
