import type { Exercise, PageData } from '../../../../types';
import { adamB2QuickChallenges, adamB2KnowledgeCheckExercises, adamB2VocabularyChallengePairs, adamB2LanguageReviewExercises, adamB2FinalChallengeExercises } from './exercises';
import { adamB2LanguageFocusExercises } from './languageFocus';
import { adamB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { adamB2LanguageFocusExercisesPart3 } from './languageFocus3';
const B='https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/';
const IMG=['','','','','','', '2c7f06f0-1c7b-4f72-bbdc-220aebe0f3eb','888f74ef-8ab1-4399-b94f-499f280488d9','b1edc4c5-1feb-41b7-8c59-3919406cd8a4','02398d91-13a7-4809-b9a5-7e7d10e9b6c0','ccb788e1-98ea-43fc-9397-aecc67ff8d34','c520bb71-bf37-4f3e-a7fd-752ee62d8125','ea7397e9-5206-4dec-80ae-4f5fae82309d','ed61f9d6-f850-4a84-9f2f-acb6a00fc6a3','4399b928-a16f-4bdd-a697-b274b27d32c2','b599808a-3de8-4dc1-a9e0-ad6067e1903b','7a5a94a7-cbb8-458b-b865-f7281e454742','fb1cf4bc-7a18-4dab-8cde-2eab06c1ff0a'];
const AUD=['','0b8932e8-d415-4e1b-846d-5b43c5e6c8a5','a7ec7e2d-f33f-41c3-b6c8-5816abceea1a','0dcc80e8-706d-4b22-85bd-2c269180bd8b','c077f30d-5f0e-4030-a373-069abf985246','88331cdd-99ae-459f-a260-5b3f2351635f','6abb93df-41c0-4d46-81a4-bf52e53ff672','802716e0-1e3e-4f5f-99a4-a481ac28491c','7350d4c8-c0f2-4474-8c59-3919406cd8a4','81c54390-7d2e-4d99-9d10-6935c85a3bbe','be3bea4e-5ae6-488c-9a07-46e885b5d89c','2d3f4f6a-09fd-4706-bfab-b2f4b2287cd9','ecfdfa30-32b7-485c-bdf4-957a49eae96a','faef98f2-8ab5-4d08-85be-e2e9f1ae33a3','f976eee6-6b6d-4aa5-9b81-79a43cb62a61','8488bff3-a880-47ab-ba15-98e03a50b37d','f6e0a555-131a-43b3-84fc-3ef6af30ba97','260216c5-5979-433c-8ac7-a42db758c207'];
const img=(n:number)=>n<6?'':`${B}adam_b2%2Fimages%2Fadam_b2_chapter${n}.png?alt=media&token=${IMG[n]}`;
const aud=(n:number)=>`${B}adam_b2%2Faudio%2Fadam_b2_ch${n}.mp3?alt=media&token=${AUD[n]}`;
const S=(id:number,title:string,content:string,vocabulary:{word:string;definition:string}[],hotspots:NonNullable<PageData['hotspots']>):PageData=>({id,type:'story',title,image:img(id),audioUrl:aud(id),content,vocabulary,hotspots});
const V=(...x:[string,string][])=>x.map(([word,definition])=>({word,definition}));
const H=(...x:[string,number,number,string,string][])=>x.map(([id,x,y,title,description])=>({id,x,y,title,description}));
const LF:Record<number,Exercise[]>={...adamB2LanguageFocusExercises,...adamB2LanguageFocusExercisesPart2,...adamB2LanguageFocusExercisesPart3};
export const adamB2Pages:PageData[]=[
// anchor-1a
// anchor-1b
// anchor-1c
// anchor-1d
//__CH1_4__
// anchor-1e
// anchor-1f
// anchor-1g
// anchor-1h
// anchor-2a
// anchor-2b
// anchor-2c
// anchor-2d
//__CH5_8__
// anchor-2e
// anchor-2f
// anchor-2g
// anchor-2h
// anchor-3a
// anchor-3b
// anchor-3c
// anchor-3d
//__CH9_12__
// anchor-3e
// anchor-3f
// anchor-3g
// anchor-3h
// anchor-13a
// anchor-13b
//__CH13__
// anchor-13c
// anchor-13d
// anchor-14a
// anchor-14b
//__CH14_A__
// anchor-14c
// anchor-14d
//__CH14_B1__
// anchor-14e
// anchor-14f
//__CH14_B2__
// anchor-14g
// anchor-14h
// anchor-15a
// anchor-15b
//__CH15_A__
// anchor-15c
// anchor-15d
//__CH15_B__
// anchor-15e
// anchor-15f
// anchor-16a
// anchor-16b
//__CH16_A__
// anchor-16c
// anchor-16d
//__CH16_B__
// anchor-16e
// anchor-16f
// anchor-17a
// anchor-17b
//__CH17_A__
// anchor-17c
// anchor-17d
Learning about Adam (pbuh)’s tale is to know the origin of humanity. Besides, to recognize Adam (pbuh) is to know the source of knowledge and the setting in which humanity came into being. The Holy Qur’an not so much constantly talks about Satan’s anti-God position (although he is unquestionably a rebel against Allah and surely personifies this disobedient character) but rather underlies his anti-human attitude which constantly attempts to tempt man to turn from his natural-established “straight” course. Satan alone is not strong; it is only man's weakness and lack of morals and carefulness that make Satan look so strong.
In fact, all the events that Adam (pbuh) and Eve experienced are like a summary of the adventures of their descendants in worldly life.
Each character in this Qur’anic story leaves behind a deterrent tale for humanity raising a key direct question: Where should man truly find his sense of value?”`,V(['mislead','To cause someone to follow a wrong idea or path.'],['sincere servants','People genuinely devoted to Allah.'],['authority','Power or right to control or influence.'],['descendants','People who come from an earlier ancestor.'],['value','The importance or worth given to someone.']),H(['h17a',25,60,'Satan’s Limited Authority','Satan acknowledges that he has no authority over sincere servants.'],['h17b',74,32,'Human Value','The chapter asks where human beings should find their true sense of value.'])),
// anchor-17e
// anchor-17f
];
const glossary=Array.from(new Map(adamB2Pages.flatMap(p=>p.vocabulary??[]).map(v=>[v.word.toLowerCase(),v] as const)).values());
for(const page of adamB2Pages){page.exercises=adamB2QuickChallenges[page.id]?[adamB2QuickChallenges[page.id]]:[];if(LF[page.id])page.languageFocusExercises=LF[page.id];}
adamB2Pages.push(
{id:18,type:'quiz',title:'Knowledge Check',image:'',content:'Answer eight questions to check your understanding of the key ideas across Adam’s story.',exercises:adamB2KnowledgeCheckExercises},
{id:19,type:'exercises',title:'Language Review',image:'',content:'Review the grammar, stance and discourse tools developed across the chapters.',exercises:adamB2LanguageReviewExercises},
{id:20,type:'vocabulary-match',title:'Vocabulary Challenge',image:'',content:'Match key B2 words from the story with their meanings.',vocabularyPairs:adamB2VocabularyChallengePairs},
{id:21,type:'glossary',title:'Master Glossary',image:'',content:'Review the active Word Notes from all seventeen chapters.',vocabulary:glossary},
{id:22,type:'final-challenge',title:'B2 Final Challenge',image:'',content:'Complete the final challenge to demonstrate your mastery of Adam’s story.',exercises:adamB2FinalChallengeExercises});
