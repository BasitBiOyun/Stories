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
//__R11__
// r11b
// r12a
  {
    id: 21,
    type: 'glossary',
    title: 'B2 Master Glossary - Part 2',
    content: 'Advanced academic vocabulary and theological concepts from the second half of the text.',
    image: 'https://picsum.photos/seed/mecca-b2-glossary2/1200/800',
    vocabulary: [
      { word: 'usury', definition: 'The exploitative practice of lending money at exorbitant, compounding interest rates.' },
      { word: 'alliance', definition: 'A formal agreement between tribes, clauses, or states to defend one another.' },
      { word: 'boycott', definition: 'A punitive ban on social, commercial, and political relations with a targeted group.' },
      { word: 'sanctuary', definition: 'A sacred area where acts of violence, warfare, and tribal retribution are strictly forbidden.' },
      { word: 'venerated', definition: 'Highly respected, honored, and worshipped as sacred.' },
      { word: 'stewardship', definition: 'The responsible custody and care of a sacred place, resource, or society.' },
      { word: 'jurisdiction', definition: 'The official power to make legal decisions and enforce social rules.' },
      { word: 'lineage', definition: 'Direct ancestry and ancestral pedigree; the primary determinant of status in tribal society.' },
      { word: 'prestige', definition: 'High reputation, influence, or status earned through wealth, leadership, or lineage.' },
      { word: 'equality', definition: 'The prophetic principle that all humans have equal value, regardless of race, class, or origin.' },
      { word: 'tribalism', definition: 'Extreme loyalty to one’s tribe, placing tribal survival and pride above universal justice.' },
      { word: 'revelation', definition: 'The sending down of divine wisdom, commands, and guidance from Allah to His prophets (vahiy).' }
    ]
  },
  {
    id: 22,
    type: 'final-challenge',
    title: 'B2 Final Challenge',
    content: 'Demonstrate your deep mastership of the pre-Islamic Mecca historical and social systems at the B2 level.',
    image: 'https://picsum.photos/seed/mecca-b2-final-challenge/1200/800',
    exercises: [
      {
        id: 'fc1',
        type: 'multiple-choice',
        question: 'What macro-political context defined the geopolitical borders of Pre-Islamic Arabia?',
        options: ['Direct colonization and tax collection by the Roman Senate', 'The exhausted stalemate between the Byzantine and Sassanid Empires', 'Complete absolute isolation from any global empire'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The exhaustion of these empires created a power vacuum that facilitated Arab independence.', incorrect: 'Try again.' }
      },
      {
        id: 'fc2',
        type: 'multiple-choice',
        question: 'What does "Jahiliyyah" represent in the academic and spiritual context of pre-Islamic Arabia?',
        options: ['A complete lack of poetry, literature, and linguistic eloquence', 'A state of moral, social, and spiritual disorder before the light of Islam', 'A period defined by stagnant regional trade activity'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! It designates a moral void, not a lack of poetic or commercial skill.', incorrect: 'Try again.' }
      },
      {
        id: 'fc3',
        type: 'multiple-choice',
        question: 'Why was agricultural development structurally impossible in Mecca?',
        options: ['The local pagan priests strictly prohibited crop farming', 'It was a barren desert valley surrounded by sterile, rocky hills', 'The climate was too cold for crop cultivation'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The arid desert landscape forced Mecca to specialize in transit trade.', incorrect: 'Try again.' }
      },
      {
        id: 'fc4',
        type: 'multiple-choice',
        question: 'How did the custom of "ilaf" (trade treaties) transform Meccan society?',
        options: ['It abolished private property and established communal ownership', 'It substituted random desert plundering with a highly organized, safe caravan commerce network', 'It banned caravans from entering neighboring empires'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The treaties secured peaceful caravans and transit routes, fostering massive wealth.', incorrect: 'Try again.' }
      },
      {
        id: 'fc5',
        type: 'multiple-choice',
        question: 'What was the major socio-economic consequence of high-interest usury in Meccan society?',
        options: ['It provided free interest-free loans to the destitute', 'It trapped debtors in a cycle of debt-bondage, widening the class gap', 'It caused slavery to become completely obsolete'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Usury concentrated wealth in the hands of the merchant class while impoverishing debtors.', incorrect: 'Try again.' }
      },
      {
        id: 'fc6',
        type: 'multiple-choice',
        question: 'Why did pre-Islamic Arabian tribes place supreme value on having many sons?',
        options: ['Sons were the only ones allowed to write classical poems', 'They increased the offensive and defensive military and physical strength of the tribe', 'Sons could enter the Ka’ba as priests'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Tribal survival in a hostile desert relied on physical manpower and military defense.', incorrect: 'Try again.' }
      },
      {
        id: 'fc7',
        type: 'multiple-choice',
        question: 'Who were the "Hanifs" described in the pre-Islamic Arabian context?',
        options: ['Byzantine trade inspectors in Mecca', 'Individuals who rejected pagan monolatry and preserved the monotheism of Abraham', 'A localized military unit defending the Ka’ba'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! They rejected idolatry while remaining independent of Judaism and Christianity.', incorrect: 'Try again.' }
      },
      {
        id: 'fc8',
        type: 'multiple-choice',
        question: 'Why did the Meccan oligarchy aggressively resist the Prophet’s calling of Islam?',
        options: ['Because they wanted to worship more idols', 'Because Islam’s message of equal dignity, social justice, and tawhid directly threatened their socio-economic system', 'Because Islam prohibited any commercial trade'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! Monotheism threatened their revenue from pagan pilgrims and their exploitation of weaker classes.', incorrect: 'Try again.' }
      },
      {
        id: 'fc9',
        type: 'multiple-choice',
        question: 'What was the nature of the Quraysh boycott against early Muslims?',
        options: ['An intellectual debate on monotheism', 'A severe socio-economic embargo that caused extreme famine, isolation, and starvation', 'A peaceful negotiation of mutual commercial rights'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The boycott locked Banu Hashim in mountain defiles under cruel conditions.', incorrect: 'Try again.' }
      },
      {
        id: 'fc10',
        type: 'multiple-choice',
        question: 'What is the central historical-sociological theme of the Mecca Before Islam B2 text?',
        options: ['The ultimate failure of all monotheistic religions', 'The profound contrast between pagan tribal disorder (Jahiliyyah) and the universal justice, equality, and tawhid of Islam', 'The biological superiority of certain Arabian lineages'],
        correctAnswer: 1,
        feedback: { correct: 'Correct! The text highlights how Islam fundamentally reformed human rights, ethics, and theology.', incorrect: 'Try again.' }
      }
    ]
  }
];
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
