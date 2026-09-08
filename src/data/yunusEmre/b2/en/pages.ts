import type { Exercise, PageData } from '../../../../types';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './exercises';
import { yunusB2LanguageFocusExercises } from './languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './languageFocus3';

const rawYunusB2Pages: PageData[] = [
// c01a
//__C01__
// c01b
// c02a
//__C02__
// c02b
// c03a
//__C03__
// c03b
// c04a
//__C04__
// c04b
// c05a
//__C05__
// c05b
// c06a
//__C06__
// c06b
];

// t01a
const knowledgeFeedbackEn = {
  correct: 'Correct. The answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the named chapter evidence and try again.',
};
const knowledgeMcEn = (id: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title: 'Knowledge Check', instructions: 'Choose the best evidence-based answer.', question, options, correctAnswer, explanation, feedback: knowledgeFeedbackEn,
});
const yunusB2ManualKnowledgeCheckExercises: Exercise[] = [
  knowledgeMcEn('yu-b2-mk1','Which moral principle is explicitly included in the opening description of Sûfî conduct?',['Responding to evil with kindness and not attaching importance to wealth, status, or fame.','Seeking public status as proof of spiritual progress.','Avoiding generosity so that worldly possessions remain secure.'],0,'Chapter 1 explicitly includes responding to evil with kindness and avoiding attachment to worldly wealth, status, and fame among the moral principles it lists.'),
  knowledgeMcEn('yu-b2-mk2','According to the widely accepted view reported in Chapter 2, which dates are given for Yunus Emre’s life?',['1240–41 to 1320–21.','1220–1237.','1237–1246.'],0,'The chapter qualifies the dates with “the widely accepted view” and then gives 1240–41 for his birth and 1320–21 for his death.'),
  knowledgeMcEn('yu-b2-mk3','What concrete achievement is attributed to Alaeddin I during the strong Seljuk period described in Chapter 3?',['He established a navy in the Mediterranean and Black Seas.','He founded the Ilkhanate Empire in Iran.','He led the Babai uprising in 1240.'],0,'Chapter 3 states that Alaeddin I expanded the country’s borders and established a navy in the Mediterranean and Black Seas.'),
  knowledgeMcEn('yu-b2-mk4','How does Chapter 4 identify the relationship between Baba İshak and Baba İlyas?',['Baba İshak is described as a follower of Baba İlyas.','Baba İlyas is described as a Seljuk sultan under Baba İshak.','They are presented as Mongol commanders at Kösedağ.'],0,'The chapter says the 1240 rebellion was led by Baba İshak, who was a follower of Baba İlyas.'),
  knowledgeMcEn('yu-b2-mk5','What geographical detail does Chapter 5 give for the Battle of Kösedağ?',['It took place about 80 km northeast of Sivas.','It took place on the Mediterranean coast.','It took place inside Erzurum in late 1242.'],0,'The story places Kösedağ about 80 km northeast of Sivas; the Erzurum attack is a separate earlier event.'),
  knowledgeMcEn('yu-b2-mk6','How is the Ottoman state described during the period of fragmented Anatolian principalities in Chapter 6?',['It was still a small principality.','It already ruled all of Anatolia.','It had become the administrative centre of the Ilkhanate.'],0,'Chapter 6 explicitly notes that the Ottoman state was still a small principality at that time.'),
  knowledgeMcEn('yu-b2-mk7','Which foundations does Chapter 7 explicitly name for Yunus Emre’s understanding of Sûfîsm?',['The Qur’an, the Sunnah, and the thoughts and experiences of earlier Muslim Sûfîs.','Only the political practices of the Seljuk court.','Only the oral traditions of nomadic tribes.'],0,'The chapter names the Qur’an and Sunnah together with the thoughts and experiences of Muslim Sûfîs who lived before Yunus.'),
  knowledgeMcEn('yu-b2-mk8','In the three-part account of intellect in Chapter 10, what is the role of universal intellect?',['It guides a person to behave with piety.','It explains only how to sustain worldly life.','It removes the need for the heart in the path to salvation.'],0,'Chapter 10 states that universal intellect guides a person toward pious conduct; practical reason is the form associated with understanding and sustaining worldly life.'),
];

const finalFeedbackEn = { correct: 'Correct. The synthesis is supported across the book.', incorrect: 'Not yet. Reconnect the relevant chapters and try again.' };
const finalReplacementEn: Record<string, Exercise> = {
  'yu-b2-f6': {id:'yu-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each historical condition with its wider consequence.',question:'Connect the historical system across chapters.',matchingPairs:[{left:'Babai unrest and weak governance',right:'Internal instability deepens before Kösedağ'},{left:'Kösedağ defeat',right:'Mongol military victory opens the way to devastation and domination'},{left:'Increasing Mongol payments',right:'Political dependency becomes economic pressure on state and population'},{left:'Mongol pressure across eastern regions',right:'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'}],correctAnswer:{'Babai unrest and weak governance':'Internal instability deepens before Kösedağ','Kösedağ defeat':'Mongol military victory opens the way to devastation and domination','Increasing Mongol payments':'Political dependency becomes economic pressure on state and population','Mongol pressure across eastern regions':'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'},explanation:'The book links internal crisis, defeat, dependency and cultural movement rather than treating them as isolated facts.',feedback:finalFeedbackEn},
  'yu-b2-f7': {id:'yu-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each idea with its cross-chapter implication.',question:'Connect Yunus’s moral-spiritual framework across the later chapters.',matchingPairs:[{left:'Tawhid and love',right:'Unity becomes a foundation for relation to Creator and creation'},{left:'Heart and intellect',right:'Inner sensitivity and reason are expected to support one another'},{left:'Awareness of death',right:'Mortality can orient a person toward meaningful righteous life'},{left:'Virtues and harmful traits',right:'Moral teaching becomes observable choices rather than abstract labels'}],correctAnswer:{'Tawhid and love':'Unity becomes a foundation for relation to Creator and creation','Heart and intellect':'Inner sensitivity and reason are expected to support one another','Awareness of death':'Mortality can orient a person toward meaningful righteous life','Virtues and harmful traits':'Moral teaching becomes observable choices rather than abstract labels'},explanation:'The later chapters build a connected moral framework from theology, inward life, mortality and action.',feedback:finalFeedbackEn},
  'yu-b2-f8': {id:'yu-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book historical relationship.',question:'Complete the synthesis.',fillBlanksText:'Yunus’s poetic voice becomes socially meaningful in a period marked by political crisis, Mongol domination and a search for [blank].',correctAnswer:'meaning',explanation:'Chapter 7 explicitly links people’s search for meaning in hard times with Yunus’s use of poetry as a Sûfî medium.',feedback:finalFeedbackEn},
  'yu-b2-f9': {id:'yu-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book legacy relationship.',question:'Complete the synthesis.',fillBlanksText:'The book presents Yunus’s lasting legacy as both literary and [blank], connecting poetry with guidance for moral life.',correctAnswer:'moral',explanation:'The final chapters and conclusion explicitly present the poems as literary works and moral guidance.',feedback:finalFeedbackEn},
};
const yunusB2FinalChallengeExercisesPolished: Exercise[] = yunusB2FinalChallengeExercises.map(exercise => finalReplacementEn[exercise.id] ?? exercise);
// t01b
// t02a
//__T02__
// t02b
