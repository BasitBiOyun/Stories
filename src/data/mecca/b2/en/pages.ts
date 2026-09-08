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
        feedback: {
          correct: 'Correct. You understood the social effect of usury.',
          incorrect: 'Not quite. Focus on how money lending affected society.'
        }
      }
    ]
  },
  {
    id: 8,
    type: 'story',
    title: "Injustice and Hilfü’l-Fudûl",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch8-clean.png?alt=media&token=230f0572-6df9-4e28-afe9-ea5da6376344',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F07_Chapter_8_Injustice_and_Hilf%C3%BC%E2%80%99l-Fud%C3%BBl.mp3?alt=media&token=99765b8e-c692-41bc-bbbc-bdb8c267dcb1',
    content: `Even when Prophet Muhammad (as) began calling people to Islam, these people said, “With men like us around, is it really up to Muhammad to become the leader of the Quraysh?” (see Surah Zuhruf: 31)

In such a society, orphans were oppressed, the weak were looked down on, and the poor were shown no mercy. For instance, the camels of the weak used to be taken without payment, and the goods and property of small sellers were unjustly seized by force. Furthermore, the weak and defenseless people who came to the city from outside for pilgrimage and trade were unfairly treated and oppressed. To prevent such incidents, an agreement was made by some Quraysh tribes to help people who had been oppressed in Mecca. Prophet Muhammad (as), who was twenty years old at the time, also attended this meeting. This formation was named Hilfü’l-fudûl, which means The Community of the Righteous. Young Muhammad became an enthusiastic member of the organization.

During the pre-Islamic era, those who oppressed and treated people unfairly were generally wealthy and powerful individuals. Due to its fight against injustice, Hilfu’l-Fudûl received support from the community.

This organization played a very important role in maintaining justice and order in Mecca and tried to protect the rights of the oppressed. For example, a merchant had sold goods to Ubayy b. Halef, one of Mecca’s leading figures, but had not received payment. The merchant helplessly applied to Hilfü’l-fudûl. The members of the organization told him to go to Ubayy and demand his money again, and to inform him that if he did not pay, they would collect it themselves.`,
    vocabulary: [
      { word: "orphan", definition: "A child whose parents have died." },
      { word: "defenseless", definition: "Unable to protect oneself." },
      { word: "agreement", definition: "A decision or promise made by people together." },
      { word: "Hilfü’l-Fudûl", definition: "The Community of the Righteous formed to defend the oppressed." },
      { word: "oppressed", definition: "People treated cruelly or unfairly." },
      { word: "looked down on", definition: "Treated with contempt or as inferior." },
      { word: "goods", definition: "Things that are produced to be sold." },
      { word: "property", definition: "Things or belongings that someone owns." },
      { word: "righteous", definition: "Morally good, virtuous, or fair." },
      { word: "received support", definition: "Was helped, encouraged, or approved by others." }
    ],
    hotspots: [
      { id: 'h8-1', x: 34, y: 44, title: "Hilfü’l-Fudûl", description: "To prevent such incidents, an agreement was made by some Quraysh tribes to help people who had been oppressed in Mecca. This formation was named Hilfü’l-fudûl..." },
      { id: 'h8-2', x: 68, y: 50, title: "Justice", description: "This organization played a very important role in maintaining justice and order in Mecca and tried to protect the rights of the oppressed." }
    ],
    animatedWords: ["orphan", "defenseless", "agreement", "Hilfü’l-Fudûl", "oppressed", "looked down on", "goods", "property", "righteous", "received support"],
    syncPoints: [0, 25, 50, 75],
    exercises: [
      {
        id: 'ex8-1',
        type: 'multiple-choice',
        title: "Injustice and Hilfü’l-Fudûl",
        instructions: 'Choose the correct answer according to the chapter.',
        question: "What was the purpose of Hilfü’l-Fudûl?",
        options: ["To help people who had been oppressed in Mecca", "To make trade illegal", "To build a new palace"],
        correctAnswer: 0,
        explanation: "Hilfü’l-Fudûl was formed to help oppressed people and protect their rights.",
        feedback: {
          correct: 'Correct. You understood the purpose of Hilfü’l-Fudûl.',
          incorrect: 'Not quite. Look at why the agreement was made.'
        }
      }
    ]
  },
  {
    id: 9,
    type: 'story',
    title: "Generosity and Tribal Life",
    image: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Fimages%2Fmecca_b2_ch9-clean.png?alt=media&token=9742cd4f-0908-4885-adb1-bf9970869372',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/mecca%2Fb2%2Faudio%2F08_Chapter_9_Generosity_and_Tribal_Life.mp3?alt=media&token=625e064a-2550-4e65-8f31-f5f636bfc185',
    content: `On this, Ubayy paid the money immediately. This formation also made Mecca a safer city for trade.

All sources note that the Prophet (as) spoke highly of this formation even after his prophethood and believed that Islam had further strengthened it. He used to say: “I have no desire to abandon my oath even against a herd of red-haired camels.” It is recorded that he said he would respond immediately without hesitation if he were called again (Musnad, I, 190, 317).

As the example of the Hilfu’l-Fudûl shows, it certainly doesn’t make sense to call the pre-Islamic era as entirely negative. In addition to this, for instance, the Arabs before Islam were known for their extraordinary generosity and hospitality. They used to bet on who could slay and offer the most camels for their guests. The bet was a type of gambling as well. Until one side gave up, camels used to continue to be killed, and at the end, the victor became well-known for his generosity. All of this was done for the fame of the individual and the tribe.

The admirable qualities of the Arabs before Islam, like generosity, were driven mostly by arrogance rather than real goodness. In the end, such behaviors turned into a tribal honor contest, and this led to greater problems.

Tribes were the basis of Arab society.`,
    vocabulary: [
      { word: "formation", definition: "An organized group created for a purpose." },
      { word: "oath", definition: "A serious promise." },
      { word: "generosity", definition: "The quality of giving freely." },
      { word: "hospitality", definition: "Kindness and welcome shown to guests." },
      { word: "arrogance", definition: "Pride that makes someone feel superior to others." },
      { word: "spoke highly", definition: "Expressed great approval or praise for someone." },
      { word: "abandon", definition: "To give up or leave completely." },
      { word: "hesitation", definition: "A pause or delay due to uncertainty." },
      { word: "bet on", definition: "To wager or gamble on an outcome." }
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
