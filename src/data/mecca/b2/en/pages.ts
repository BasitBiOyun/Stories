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
    content: `“And when one of them is given news of a female baby, his face darkens, and he can’t breathe with grief. He hides from the people because of the bad news given to him. Shall he keep it in humiliation, or bury it in the dust? Evil is the decision they make.”

Slavery was an economic institution in Mecca. Slaves, both male and female, were the most miserable class in society. They were bought and sold like animals. They were employed in various tasks as well as for people’s personal service. They were a show of wealth. They also acted as a weapon to protect their owner in times of war. White slaves brought from the regions of Damascus and Iraq were more expensive than black slaves brought from Africa because they served better and were skilled workers.

During this era, poets were an important part of social life and poetry was the most important part of the culture. Poetry was used to keep the tribe’s history alive. It told stories about brave ancestors and hard times. It also praised the tribe’s family and criticized enemies. Tribes were honored in poems, and poets praised conflict rather than peace and war instead of peace. There were very few poets who invited the tribes to peace and urged them to stay away from fighting. In a sense, they were serving as a media outlet. Tribes often formed a political alliance to defend each other, yet extreme tribalism made universal justice impossible when people supported their tribe even when it was wrong.`,
    vocabulary: [
      { word: "humiliation", definition: "A feeling or condition of shame and loss of dignity." },
      { word: "slavery", definition: "A system in which people are owned and forced to work." },
      { word: "institution", definition: "An established social or economic system." },
      { word: "poet", definition: "A person who writes poems." },
      { word: "media outlet", definition: "A source that spreads information and ideas to people." },
      { word: "alliance", definition: "A formal agreement or union between tribes or states for a common purpose." },
      { word: "tribalism", definition: "Extreme loyalty to one's tribe, placing tribal survival above universal justice." }
    ],
    hotspots: [
      { id: 'h11-1', x: 34, y: 44, title: "Slavery", description: "Slavery was an economic institution in Mecca. Slaves, both male and female, were the most miserable class in society. They were bought and sold like animals." },
      { id: 'h11-2', x: 68, y: 50, title: "Poets", description: "Poets were an important part of social life and poetry was the most important part of the culture. ... In a sense, they were serving as a media outlet." }
    ],
    animatedWords: ["humiliation", "slavery", "institution", "poet", "media outlet", "alliance", "tribalism"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex11-1',
        type: 'multiple-choice',
        title: "Slavery, Poets and Media",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "Why were poets important in the Age of Ignorance?",
        options: ["They kept tribal history alive and influenced society", "They controlled the Red Sea route", "They stopped all conflicts"],
        correctAnswer: 0,
        explanation: "The chapter explains that poets praised tribes, criticized enemies, and served as a kind of media outlet.",
        feedback: {
          correct: 'Correct. You understood the role of poets.',
          incorrect: 'Not quite. Focus on the paragraph about poetry and culture.'
        }
      }
    ]
  },
  {
    id: 12,
    type: 'story',
    title: "Religious Life in Mecca",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch12-clean.png?alt=media&token=ba29bc1e-dec7-4f2d-a62f-9941f38dd29d',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F11_Chapter_12_Religious_Life_in_Mecca.mp3?alt=media&token=88b84a1c-0099-4a15-9dcc-60651386c419',
    content: `Arabia was idolatrous; only a few individuals had adopted religions like Christianity. In Mecca there were some Hanifs who believed in the religion of Abraham (as), but idolatry was dominant. The number of idols in and around the Ka’ba reached 360, including Lat, Manat, and Uzza. These idols were respected by all tribes. There were idols in many houses too.

Actually, the Arabs of the Age of Ignorance accepted the presence of a higher God known as "Allah." Although they mainly worshipped idols, they believed “Allah” to be the creator. Idols were seen as go-betweens (mediators). Oddly enough they did not believe in the Resurrection and Afterlife. Before Islam, stones were placed in front of the Ka’ba and people worshipped in groups.

No doubt, pilgrimage to the Ka’ba was the most popular and common form of worship. Every tribe walked around the Ka’ba during the pilgrimage season, when fighting was forbidden and disputes between the tribes ended. They stopped in front of their own gods, offered a prayer, and bowed respectfully. Walking around the Ka’ba was generally performed naked to symbolize purification from sins.

Superstitious beliefs also dominated Arab life. Pre-Islamic Arabs thought the gods talked through kahins (soothsayers) and poets who had godly guidance and could predict the future. Before doing anything, people sought omens.`,
    vocabulary: [
      { word: "idolatrous", definition: "Connected with worshipping idols." },
      { word: "Hanif", definition: "A person who followed the religion of Abraham before Islam." },
      { word: "mediator", definition: "A go-between." },
      { word: "Resurrection", definition: "Being raised again after death." },
      { word: "omen", definition: "A sign believed to show what will happen in the future." },
    ],
    hotspots: [
      { id: 'h12-1', x: 34, y: 44, title: "Idolatry", description: "In Mecca there were some Hanifs who believed in the religion of Abraham (as), but idolatry was dominant." },
      { id: 'h12-2', x: 68, y: 50, title: "Hanifs", description: "Actually, the Arabs of the Age of Ignorance accepted the presence of a higher God known as 'Allah.' Although they mainly worshipped idols, they believed 'Allah' to be the creator." }
    ],
    animatedWords: ["idolatrous", "Hanif", "mediator", "Resurrection", "omen"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex12-1',
        type: 'multiple-choice',
        title: "Religious Life in Mecca",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "How did many Arabs before Islam view idols?",
        options: ["As mediators between them and Allah", "As trade animals", "As rulers of Byzantium"],
        correctAnswer: 0,
        explanation: "The chapter says idols were seen as go-betweens or mediators.",
        feedback: {
          correct: 'Correct. You understood the belief system described in the chapter.',
          incorrect: 'Not quite. Reread the paragraph about idols and Allah.'
        }
      }
    ]
  },
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
