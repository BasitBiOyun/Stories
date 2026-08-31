import type { Exercise } from '../../../../types';
const feedback={correct:'Correct. The relationship matches the chapter language.',incorrect:'Not yet. Recheck the chapter and the discourse relationship.'};
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'Choose the best chapter-grounded language choice.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'Match form and function.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const fill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'Complete with the chapter language.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'Produce a coherent B2 response.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});
const seq=(id:string,title:string,q:string,items:{id:string;text:string}[],ans:string[],e:string):Exercise=>({id,type:'sequencing',title,instructions:'Put the discourse steps in a coherent order.',question:q,sequencingItems:items,correctAnswer:ans,explanation:e,feedback});

export const yunusB2LanguageFocusExercisesPart2: Record<number, Exercise[]> = {
5:[
seq('yu-b2-lf5-1','Turning Point and Consequence','Order the chapter’s cause-and-consequence movement.',[
{id:'a',text:'The Babai rebellion is suppressed with difficulty.'},{id:'b',text:'The situation encourages Mongol attack.'},{id:'c',text:'Kösedağ ends in Seljuk defeat.'},{id:'d',text:'Following the victory, cities are plundered and civilians suffer.'}],['a','b','c','d'],'The chapter uses “however,” “finally,” and “following” to move from one turning point to its consequences.'),
match('yu-b2-lf5-2','Reporting and Evidence','Match the language with its discourse role.',[
{left:'However',right:'shifts from suppression of the rebellion to a new danger'},{left:'Finally',right:'marks the decisive battle in the sequence'},{left:'Following their victory',right:'connects military outcome with later devastation'},{left:'Sources say',right:'attributes a severe historical description to sources'}],'The language separates narration, consequence and source attribution.'),
refl('yu-b2-lf5-3','Write a Qualified Turning Point','Explain why Kösedağ is more than a battlefield event in this chapter.',['Use one sequencing connector, one consequence connector, and one attribution phrase such as sources say.'],'The response should connect battle, domination and civilian suffering.')
],
6:[
match('yu-b2-lf6-1','Dependency as a Process','Match the structure with its role.',[
{left:'led to',right:'introduces a consequence of Seljuk weakening'},{left:'as if they were',right:'compares Seljuk sultans to Mongol civil officials without literal identity'},{left:'while ... were also',right:'presents two simultaneous strategies by statesmen'},{left:'Nevertheless',right:'concedes the effort but states its insufficiency'}],'The chapter represents dependency as a gradual political-economic process.'),
mc('yu-b2-lf6-2','Comparison Without Overstatement','What does “almost as if they were Mongols’ civil officials” mean?',['Their autonomy had become so limited that their behavior resembled subordinate officials.','They literally became Mongol citizens and lost every Seljuk title immediately.','They defeated the Mongols and appointed them as officials.'],0,'“As if” creates an interpretive comparison, not a literal identity statement.'),
fill('yu-b2-lf6-3','Concession','Complete the transition.','Statesmen tried to provide relief. [blank], these efforts were not enough.','Nevertheless','The connector acknowledges effort before presenting its limitation.'),
refl('yu-b2-lf6-4','From Agreement to Annexation','Describe the stages by which political agreement became dependency and then direct attachment.',['Use led to, in time, nevertheless, and finally.'],'The task requires process writing rather than isolated dates.')
],
7:[
match('yu-b2-lf7-1','Historical Pressure and Response','Match the pattern with its meaning.',[
{left:'under Mongol pressure',right:'identifies the circumstance driving shaykhs toward Anatolia'},{left:'during the same period',right:'synchronizes migration and Anatolian chaos'},{left:'through his Sûfî identity',right:'shows the interpretive perspective Yunus used'},{left:'using poetry as his medium',right:'identifies how he communicated his response'}],'The chapter links context, perspective and medium.'),
mc('yu-b2-lf7-2','Medium and Purpose','Which sentence best represents Yunus’s role?',['He used poetry through a Sûfî perspective to respond to people seeking meaning in hard times.','He ended Mongol domination through political office.','He avoided public communication during the crisis.'],0,'The chapter defines poetry as his medium, not political power.'),
refl('yu-b2-lf7-3','Context → Perspective → Medium','Write 5–7 sentences explaining how the chapter moves from crisis to Yunus’s response.',['Include under pressure, through, and using.'],'A strong paragraph makes the grammatical relationships carry the historical interpretation.')
],
8:[
match('yu-b2-lf8-1','Framing a Theological View','Match the phrase with its function.',[
{left:'According to Yunus Emre',right:'attributes the claim to Yunus’s thought'},{left:'therefore',right:'draws a conclusion from Allah as source of all things'},{left:'From this perspective',right:'signals a conceptual viewpoint before vahdet-i vücut'},{left:'for this reason',right:'connects divine self-disclosure with creation in the presented theory'}],'B2 source fidelity matters especially when presenting theological or philosophical claims.'),
mc('yu-b2-lf8-2','Keep the Attribution','Which formulation is most responsible?',['The chapter presents vahdet-i vücut as part of Yunus Emre’s Sûfî thought.','All Muslims necessarily define reality through exactly this theory.','The chapter proves every theological school uses the same vocabulary.'],0,'The source attributes the theory to the chapter’s presentation of Yunus’s thought.'),
refl('yu-b2-lf8-3','Explain a Concept With Attribution','Explain the chapter’s connection between tawhid, true reality and creation.',['Use according to, therefore, and from this perspective. Do not universalize beyond the chapter.'],'The task combines conceptual coherence with careful attribution.')
],
};