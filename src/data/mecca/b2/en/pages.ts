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
//__R12__
// r12b

// t01a
//__T01__
// t01b
// t02a
const knowledgeFeedbackEn={correct:'Correct. Your answer is supported by the story evidence.',incorrect:'Not yet. Return to the relevant chapter, find the evidence, and try again.'};
const knowledgeMcEn=(id:string,question:string,options:string[],correctAnswer:number,explanation:string):Exercise=>({id,type:'multiple-choice',title:'Knowledge Check',instructions:'Choose the best answer supported by the story.',question,options,correctAnswer,explanation,feedback:knowledgeFeedbackEn});
const meccaB2ManualKnowledgeCheckExercises:Exercise[]=[
  knowledgeMcEn('me-b2-mk1','What detail does the book use to show the scale of Quraysh long-distance trade?',['The annual summer and winter caravans could include up to 2,500 camels','Every caravan consisted of exactly ten camels','Trade was limited to goods carried by individual travelers'],0,'Chapter 5 says the annual summer and winter journeys could use caravans numbering up to 2,500 camels, illustrating the scale of organized trade.'),
  knowledgeMcEn('me-b2-mk2','Which pair correctly reflects two destinations or connections in Quraysh trade?',['Egypt was an important caravan destination, while Abyssinia was connected by sea','Constantinople was the only destination and sea trade did not exist','All trade remained inside the Arabian Peninsula'],0,'Chapter 5 identifies Egypt as an important destination and describes maritime trade relations with Abyssinia.'),
  knowledgeMcEn('me-b2-mk3','Besides high lending rates, what behaviors does the social-class chapter say also pushed people into debt?',['Drinking and gambling','Pilgrimage and prayer','Poetry and genealogy'],0,'Chapter 7 adds that widespread drinking and gambling were among the reasons people repeatedly fell into debt.'),
  knowledgeMcEn('me-b2-mk4','How old was Prophet Muhammad (as) when he attended the meeting connected with Hilfü’l-Fudûl?',['Twenty years old','Forty years old','Fifty-two years old'],0,'Chapter 8 states that Prophet Muhammad (as) was twenty years old when he attended the meeting that formed Hilfü’l-Fudûl.'),
  knowledgeMcEn('me-b2-mk5','Why did the chapter say many tribes placed special value on having male children?',['Physical fighting strength and the resulting tribal protection and prestige were highly valued','Only sons were allowed to participate in trade fairs','Male children were required for pilgrimage'],0,'Chapter 10 connects the value placed on sons with physical strength, fighting capacity, tribal protection and respect among tribes.'),
  knowledgeMcEn('me-b2-mk6','Which statement is directly supported by the chapter on slavery?',['Slaves were treated as economic property and could also serve as displays of wealth or protection in war','Slavery had no economic role in Mecca','Slaves were described as the city’s most politically powerful class'],0,'Chapter 11 describes slavery as an economic institution and says enslaved people were used for labor, personal service, displays of wealth and protection in war.'),
  knowledgeMcEn('me-b2-mk7','Which practice does the religious-life chapter describe alongside pilgrimage and idol worship?',['People sought omens before taking action','People rejected every form of pilgrimage','Soothsayers were forbidden from making predictions'],0,'Chapter 12 says superstitious beliefs were widespread and that people sought omens before doing things.'),
  knowledgeMcEn('me-b2-mk8','What economic distinction does the Quraysh-and-power chapter say the Quran introduced?',['Trade is lawful while usury is unlawful','Both trade and usury are unlawful','Usury is lawful while trade is unlawful'],0,'Chapter 14 contrasts the Quraysh view of usury with the Quranic distinction that trade is lawful and usury is unlawful.'),
];
const finalFeedbackEn={correct:'Correct. Your answer synthesizes evidence from across the book.',incorrect:'Not yet. Reconnect the relevant chapters and distinguish the relationship being tested.'};
const finalReplacementEn:Record<string,Exercise>={
  'me-b2-f6':{id:'me-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each institution with the broader role it plays in the book.',question:'How do different institutions create, protect, or challenge power?',matchingPairs:[{left:'Sacred months',right:'Create safer movement that supports pilgrimage and fairs'},{left:'Tribal protection',right:'Provides security but can pressure individual conformity'},{left:'Hilfü’l-Fudûl',right:'Organizes practical resistance to injustice against vulnerable people'},{left:'Poetry as tribal media',right:'Shapes public memory, praise, blame and group identity'}],correctAnswer:{'Sacred months':'Create safer movement that supports pilgrimage and fairs','Tribal protection':'Provides security but can pressure individual conformity','Hilfü’l-Fudûl':'Organizes practical resistance to injustice against vulnerable people','Poetry as tribal media':'Shapes public memory, praise, blame and group identity'},explanation:'The book compares institutions that create security, social pressure, justice and cultural influence rather than treating power as only political office.',feedback:finalFeedbackEn},
  'me-b2-f7':{id:'me-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each group with the evidence that most carefully qualifies a broad claim.',question:'Which evidence prevents one-dimensional descriptions of Meccan society?',matchingPairs:[{left:'Women before Islam',right:'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged'},{left:'Pre-Islamic Arabs',right:'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition'},{left:'Quraysh leaders',right:'Prominence depended on status and the existing order, not simply identical levels of wealth'},{left:'Early Muslims',right:'Many vulnerable people joined despite strong pressure from established elites'}],correctAnswer:{'Women before Islam':'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged','Pre-Islamic Arabs':'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition','Quraysh leaders':'Prominence depended on status and the existing order, not simply identical levels of wealth','Early Muslims':'Many vulnerable people joined despite strong pressure from established elites'},explanation:'B2 mastery requires qualified claims that preserve variation, contradiction and social position.',feedback:finalFeedbackEn},
  'me-b2-f8':{id:'me-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book synthesis with the key concept.',question:'Complete the systems relationship.',fillBlanksText:'Across the book, sacred prestige, trade wealth, tribal protection and political [blank] repeatedly reinforce one another.',correctAnswer:'authority',explanation:'The later chapters make authority a central link between economic prestige, religious status and political leadership.',feedback:finalFeedbackEn},
  'me-b2-f9':{id:'me-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the concluding synthesis with the chapter’s own ethical language.',question:'Complete the broader meaning of Jahiliyyah.',fillBlanksText:'The conclusion treats Jahiliyyah not only as a past era but as a recurring culture shaped by human [blank], oppression and unequal worth.',correctAnswer:'arrogance',explanation:'The final chapter explicitly extends Jahiliyyah beyond one period and connects it with human arrogance, oppression and moral disorder.',feedback:finalFeedbackEn}
};
const meccaB2FinalChallengeExercisesPolished=meccaB2FinalChallengeExercises.map(exercise=>finalReplacementEn[exercise.id]??exercise);
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
