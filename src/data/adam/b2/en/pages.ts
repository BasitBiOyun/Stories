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
S(9,'Repentance & Descent to Earth',`Adam (pbuh) severely regretted what he had done. He immediately turned towards Allah. His regret itself was the reason for Allah’s mercy upon him. “They said, ‘Our Lord, we have done wrong to ourselves. Unless You forgive us, and have mercy on us, we will be among the losers.’” (A’raf: 23) Then Adam (pbuh) received words from his Lord (to learn how to ask for forgiveness), so His Lord pardoned him (accepted his repentance). Verily, He is the One Who forgives (accepts repentance), the Most Merciful. (Baqarah: 37) We said, “Go down from it (the Paradise), all of you. Yet whenever guidance comes to you from Me, then whoever follows My guidance—they have nothing to fear, nor shall they grieve.” (Baqarah: 38)

Allah taught Adam (pbuh) how to ask for forgiveness. This unintentional mistake committed by Adam (pbuh) was forgiven by Allah upon his repentance. This means that Allah did not abandon Adam (pbuh); He immediately turned towards Adam (pbuh), too. Adam (pbuh) and Eve left Paradise and descended upon Earth. At that time, there was neither a community nor a congregation. After a period of time following their descent to Earth, when a community emerged, Adam (pbuh) was given prophethood, thus becoming the first human, the first father, and the first prophet. We understand from the verses that humans are open to sinning and sometimes rebelling against their Lord. However, in order to remain an honoured human, they must recognize their mistakes, seek the fault within themselves, and immediately turn towards Allah.`,V(['regretted','Felt deep sorrow about a past action.'],['mercy','Compassion and forgiveness shown to someone.'],['repentance','Sincere regret followed by returning to what is right.'],['prophethood','The divinely appointed role of a prophet.'],['honoured','Regarded as having dignity and respected status.']),H(['h9a',24,64,'Repentance Accepted','Adam regrets his mistake and receives mercy.'],['h9b',76,38,'Life on Earth','Adam and Eve descend and human life on Earth begins.'])),
S(10,'The Settlement on Earth',`Allah knew that Adam (pbuh) and Eve would eat of the tree and descend to Earth. He knew that Satan would violate their innocence. That experience was essential for their life on Earth; it was a cornerstone of their vicegerency. It was meant to teach Adam (pbuh), Eve, and their offspring the knowledge that Satan is their enemy and that the right path is to act in accordance with what they have heard from the Creator. The Creator is Knower, Powerful, Just, and Merciful.

Adam (pbuh)’s descending to Earth, then, did not imply dishonour or humiliation, but rather it was an honorable and respected settlement on Earth. And thus began the story of humankind and its struggle against Satan on Earth. There are many hadiths about the place of Adam (pbuh)’s descending upon Earth. Ibn Abbas, who narrated many hadiths, said: “Adam (pbuh) descended on land ‘Dihna’ between Mecca and Taif.”

It is also reported that Adam (pbuh) descended with the Black Stone (a large black stone set into the wall of the Ka’ba in Mecca. It is said to have come from Paradise).

Ibn Umar said that Adam (pbuh) descended on As-Safa and Eve on Al-Marwa (names of two mountains in the neighborhood of the Sacred House (Ka’ba) in Mecca. Part of the rites of pilgrimage (hajj) includes walking and running between these two hills in remembrance of Hajar's search for water).`,V(['innocence','A state of moral purity.'],['cornerstone','A basic part on which something depends.'],['vicegerency','Responsibility for stewardship and entrusted duties on Earth.'],['humiliation','The experience of being stripped of dignity.'],['pilgrimage','A religious journey to a spiritually important place.']),H(['h10a',33,31,'A Responsible Settlement','The descent begins responsibility rather than humiliation.'],['h10b',69,67,'Places of Descent','The chapter records traditional reports about places of descent.'])),
S(11,'Adam (pbuh)’s Life on Earth',`Ebu Hureyre reported that the Prophet Muhammad (pbuh) said: “The best of days on which the sun has risen is Friday. On this day Adam (pbuh) was created, and on this day he was descended to Earth.” (see Müslim, Cuma 17, 18; also Tirmizî, Cuma 1, 2; Nesâî, Cuma 4, 45)

Adam (pbuh) knew he said goodbye to peace, and he left Paradise. On Earth, he had to face conflict and struggle. No sooner had one ended than another began. He also had to work hard to keep himself alive. He had to protect himself with clothes and weapons and protect himself from the wild.

Above all, he had to struggle with the spirit of evil. Satan, the cause of his displacement from Paradise, continues to deceive him and his children. Satan wants human beings not to remember Allah, yet the removal of Allah from the human mind means the removal of meaning and purpose from human life.

The battle between good and evil is continuous, but those who follow Allah's guidance should fear nothing, while those who disobey Allah and follow Iblis will be away from the mercy of Allah along with him. Adam (pbuh) understood all this, and with the knowledge of this suffering, he started his life on Earth.

The only thing that eased his grief was that he was master of the Earth and had to make it ruled by him. He had to maintain, cultivate, construct, and populate the Earth. He also had to reproduce and raise children who would change and improve the world.`,V(['conflict','A serious struggle between opposing forces.'],['struggle','A sustained effort to overcome difficulty.'],['guidance','Direction toward the right course of action.'],['cultivate','To prepare and use land for growing crops.'],['populate','To establish or increase a population in a place.']),H(['h11a',27,48,'Struggle on Earth','Adam faces physical hardship and moral struggle.'],['h11b',75,70,'Building Human Life','Cultivation, construction, and future generations shape life on Earth.'])),
S(12,'The Conflict of Habil and Qabil',`One of the earthly blisses was reached when Adam (pbuh) and Eve witnessed the birth of their first children. The children grew up to be strong and healthy young adults. Qabil cultivated the land while Habil raised cattle. In time, there arose a conflict between the two sons. Adam (pbuh) was in a difficult situation. He wanted peace and harmony in his family, so he prayed to Allah for help. Allah commanded that each son offer a sacrifice, and he whose offering was accepted would have the right on his side. Habil offered his best cattle while Qabil offered his worst grain. Qabil’s sacrifice was not accepted by Allah because of his insincerity in his offering. This angered Qabil even further. “I will kill you! I refuse to see you happy while I remain unhappy!”

The story of Habil and Qabil is narrated in the Holy Qur’an without mentioning names as follows: “Tell them in all truth the story of the two sons of Adam. When they made an offering and it was accepted from one of them and was not accepted from the other, the latter said: ‘I will surely kill you.’ Thereupon the former said: ‘Allah accepts offerings only from the God-fearing.’” (Maide: 27)

The Qur’an narrates this story in a simple manner. It does not openly mention anything from the details found in the Torah, as, according to the Qur’an, the only thing that needs to be known is the wisdom of the story. Habil and Qabil are referred to as Adam (pbuh)’s two sons without their names being given. Although we don’t know the whole story, Adam (pbuh)’s children, Habil and Qabil, were involved in a conflict that resulted in Qabil killing Habil. Habil’s response displayed his pious character, saying:`,V(['blisses','Experiences of deep happiness or joy.'],['harmony','A peaceful state in which people fit well together.'],['sacrifice','An offering given for a religious purpose.'],['insincerity','Lack of genuine intention or honesty.'],['pious','Deeply committed to religious faith and conduct.']),H(['h12a',40,66,'The Two Offerings','Habil gives his best while Qabil’s offering lacks sincerity.'],['h12b',62,34,'From Conflict to Threat','Qabil’s anger develops into a threat.'])),
// anchor-3e
// anchor-3f
// anchor-3g
// anchor-3h
// anchor-4a
// anchor-4b
// anchor-4c
// anchor-4d
//__CH13_17__
// anchor-4e
// anchor-4f
// anchor-4g
// anchor-4h
];
const glossary=Array.from(new Map(adamB2Pages.flatMap(p=>p.vocabulary??[]).map(v=>[v.word.toLowerCase(),v] as const)).values());
for(const page of adamB2Pages){page.exercises=adamB2QuickChallenges[page.id]?[adamB2QuickChallenges[page.id]]:[];if(LF[page.id])page.languageFocusExercises=LF[page.id];}
adamB2Pages.push(
{id:18,type:'quiz',title:'Knowledge Check',image:'',content:'Answer eight questions to check your understanding of the key ideas across Adam’s story.',exercises:adamB2KnowledgeCheckExercises},
{id:19,type:'exercises',title:'Language Review',image:'',content:'Review the grammar, stance and discourse tools developed across the chapters.',exercises:adamB2LanguageReviewExercises},
{id:20,type:'vocabulary-match',title:'Vocabulary Challenge',image:'',content:'Match key B2 words from the story with their meanings.',vocabularyPairs:adamB2VocabularyChallengePairs},
{id:21,type:'glossary',title:'Master Glossary',image:'',content:'Review the active Word Notes from all seventeen chapters.',vocabulary:glossary},
{id:22,type:'final-challenge',title:'B2 Final Challenge',image:'',content:'Complete the final challenge to demonstrate your mastery of Adam’s story.',exercises:adamB2FinalChallengeExercises});
