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
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch6-clean.png?alt=media&token=910919c7-b2e6-4c4b-a6e7-0511c73eeaaa',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F05_Chapter_6_Sacred_Months_and_Trade.mp3?alt=media&token=242dadf2-33f1-446e-aa11-8aee2dc422ce',
    content: `During this period, the Silk Road—the most important of the eastern trade routes that connected the Indian Ocean to the Mediterranean—became unusable in the 6th century CE due to the wars between the Byzantine and Sassanid empires. This made the Red Sea route and the overland route through Arabia highly important.

The safe environment created by the sacred months (These are the four sacred lunar months during which fighting is prohibited. During this period, which consists of Zilkade, Zilhicce, Muharram, and Rajab, people focus on worship, show respect, and refrain from sinning, with the aim of creating an atmosphere of peace.) made it possible for more people to perform the Hajj. (During the pre-Islamic Jahiliyyah period, the Arabs continued to visit the Ka’ba and the sacred sites in its neighborhood. Pagan people would walk around the Ka’ba, perform the sa'y between Safa and Marwah, and stand in Arafat.)

Hajj also meant more lively trade. In addition, major trade festivals such as Ukaz (Ukâz), Majannah (Mecenne), and Dhul-Majaz (Zülmecâz) were also held during the sacred months. They were particularly held during the Hajj season, and after people attended these fairs, they went to Arafat.

Because of its extensive trade activities, Mecca was described as the "Republic of Traders."

So, at the beginning of the 7th century, the Quraysh gained control of the most important trade route and wealth in Arabia.`,
    vocabulary: [
      { word: "Silk Road", definition: "An important trade route connecting East and West." },
      { word: "sacred months", definition: "Four lunar months during which fighting was prohibited." },
      { word: "prohibited", definition: "Not allowed." },
      { word: "trade festival", definition: "A large gathering where people buy and sell goods." },
      { word: "extensive", definition: "Very large or wide in range." },
      { word: "overland route", definition: "A trade or travel route across land rather than sea." },
      { word: "pagan", definition: "A person who worships many gods or idols." },
      { word: "Marwah", definition: "A sacred hill near the Ka’ba in Mecca." }
    ],
    hotspots: [
      { id: 'h6-1', x: 34, y: 44, title: "Sacred Months", description: "The safe environment created by the sacred months (These are the four sacred lunar months during which fighting is prohibited...) made it possible for more people to perform the Hajj." },
      { id: 'h6-2', x: 68, y: 50, title: "Trade Festivals", description: "Major trade festivals such as Ukaz (Ukâz), Majannah (Mecenne), and Dhul-Majaz (Zülmecâz) were also held during the sacred months." }
    ],
    animatedWords: ["Silk Road", "sacred months", "prohibited", "trade festival", "extensive", "overland route", "pagan", "Marwah"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex6-1',
        type: 'multiple-choice',
        title: "Sacred Months and Trade",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What did the sacred months make possible?",
        options: ["A safer environment for more people to perform Hajj", "The end of all trade", "The destruction of Mecca"],
        correctAnswer: 0,
        explanation: "The chapter states that the sacred months created a safe environment for Hajj and trade.",
        feedback: {
          correct: 'Correct. The sacred months supported both worship and trade.',
          incorrect: 'Not quite. Reread the paragraph about the sacred months.'
        }
      }
    ]
  },
  {
    id: 7,
    type: 'story',
    title: "Social Classes in Mecca",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch7-clean.png?alt=media&token=6fb13f37-a434-4468-bf64-d956bb7ecda2',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F06_Chapter_7_Social_Classes_in_Mecca.mp3?alt=media&token=15d61607-1493-435a-b106-c39713f3026f',
    content: `The Quraysh used coins, as well as gold and silver, in their trade. Paying a fee to borrow money—which is usury (faiz)—played a very significant role in the economic activities of the time. This practice also affected the social structure. Usury, which means additional money on the original amount of money, is “ribâ” in Arabic. The Quraysh added to their wealth through lending at usury. It was the easiest and most profitable way to increase one’s wealth. As a result of the money trade, there was a wealthy aristocracy in the city. In such an environment where trade and money were so important, all human relationships were based on making more money. Money lenders and capitalists were the city’s most powerful class. They imposed enormous borrowing rates on debts. This system was designed to make the rich richer and the poor poorer. Vices of drinking and gambling were also so common that this was also one reason why people were constantly falling into debt.

Due to the big money ownership in the hands of certain individuals, social class division was at an extremely high level. In fact, there were rich people who ate from gold plates and drank from silver cups and crystal glasses, but there were also poor people who could barely survive.

There was a huge gap between the rich and the poor even in the most basic human relationships. Among the upper class of the Quraysh, money, wealth, children, and family were a source of pride and competition.`,
    vocabulary: [
      { word: "usury", definition: "Lending money and taking unfair extra payment back." },
      { word: "ribâ", definition: "The Arabic term for usury." },
      { word: "aristocracy", definition: "A powerful upper class in society." },
      { word: "capitalist", definition: "A person who owns wealth and uses it for profit." },
      { word: "social class", definition: "A group of people with a similar economic or social position." },
      { word: "survive", definition: "To continue to live or exist, especially in spite of danger or hardship." },
      { word: "imposed", definition: "Forced something on others by authority or power." }
    ],
    hotspots: [
      { id: 'h7-1', x: 34, y: 44, title: "Usury", description: "The Quraysh added to their wealth through lending at usury. ... This system was designed to make the rich richer and the poor poorer." },
      { id: 'h7-2', x: 68, y: 50, title: "Social Classes", description: "Due to the big money ownership in the hands of certain individuals, social class division was at an extremely high level." }
    ],
    animatedWords: ["usury", "ribâ", "aristocracy", "capitalist", "social class", "survive", "imposed"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex7-1',
        type: 'multiple-choice',
        title: "Social Classes in Mecca",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What was one result of usury in Mecca?",
        options: ["The rich became richer and the poor became poorer", "All people became equal", "Trade completely stopped"],
        correctAnswer: 0,
        explanation: "The chapter explains that usury was part of a system that made the rich richer and the poor poorer.",
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
