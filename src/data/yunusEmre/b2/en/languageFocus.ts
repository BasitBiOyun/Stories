import type { Exercise } from '../../../../types';

const feedback = { correct: 'Correct. The language choice fits the chapter context.', incorrect: 'Not yet. Return to the chapter wording and reconsider the relationship or function.' };
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'Choose the option that best preserves the chapter meaning and language function.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'Match each language pattern with its function in this chapter.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const fill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'Complete the sentence with the chapter language.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'Produce a short B2 response using the target relationship naturally.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercises: Record<number, Exercise[]> = {
1:[
match('yu-b2-lf1-1','Outer and Inner','How does the chapter organize Sûfî life?',[
{left:'whereas',right:'contrasts outward worship with inward morality and intention'},
{left:'without expecting any return',right:'adds the condition that generosity is not transactional'},
{left:'in addition to',right:'adds Yunus’s literary contribution to his spiritual identity'}],'The chapter builds Yunus’s importance through contrast, condition and addition.'),
mc('yu-b2-lf1-2','Meaning Through Contrast','Which sentence best preserves the chapter’s contrast?',['The outer side concerns visible acts of worship, whereas the inner side concerns morality and intention.','The outer and inner sides are unrelated traditions.','The inner side replaces outward worship completely.'],0,'“Whereas” marks two complementary dimensions rather than opposition that cancels one side.'),
refl('yu-b2-lf1-3','Two Dimensions','Explain how the chapter presents Yunus as important in two different but connected fields.',['Write 5–6 sentences. Use whereas or while once, and in addition to once.'],'A B2 response should connect spiritual and literary importance without reducing either one.'),
fill('yu-b2-lf1-4','Non-Transactional Giving','Complete the ethical condition.','Sûfîs give generously without expecting any [blank].','return','The phrase expresses generosity without a material exchange.')
],
2:[
match('yu-b2-lf2-1','Qualified Biography','Match the source-framing language with its effect.',[
{left:'According to historical accounts',right:'attributes a biographical claim to historical reporting'},
{left:'widely accepted view',right:'signals broad acceptance without claiming absolute certainty'},
{left:'Some sources note',right:'limits a claim to part of the source tradition'},
{left:'not limited to ... also',right:'expands education from madrasa learning to tekke formation'}],'B2 historical writing distinguishes certainty, attribution and scope.'),
mc('yu-b2-lf2-2','Balanced Style','Which reformulation keeps “neither so simple nor so complex”?',['His style avoids both extremes while remaining literary and accessible.','His style is extremely simple and therefore has no literary value.','His style is deliberately difficult for ordinary readers.'],0,'Neither…nor places the style between two extremes.'),
fill('yu-b2-lf2-3','Expanded Education','Complete the expansion.','His education was not limited to madrasas; he [blank] studied divine love and morals at the tekke.','also','“Also” extends the educational profile rather than replacing the madrasa.'),
refl('yu-b2-lf2-4','Write With Source Caution','Summarize Yunus’s education without making uncertain details sound certain.',['Write 5–7 sentences. Use one attribution phrase and one not only/not limited to structure.'],'The task combines historical caution with coherent educational synthesis.')
],
3:[
match('yu-b2-lf3-1','Historical Chain','Match the connector with the relationship it creates.',[
{left:'was followed by',right:'places one historical development after another'},
{left:'facilitated',right:'shows that one event made a later event easier'},
{left:'as a result of',right:'marks consequence'},
{left:'If we take a closer look',right:'frames historical context as a route to interpretation'}],'The chapter moves from sequence to causality and then to interpretive framing.'),
mc('yu-b2-lf3-2','Cause, Not Just Sequence','Which statement best represents the chapter?',['The Kösedağ defeat followed earlier unrest and facilitated Mongol invasion, creating wider hardship.','The Mongol invasion happened with no relation to Seljuk weakness.','The historical section is unrelated to understanding Yunus.'],0,'The text explicitly builds a causal historical chain.'),
refl('yu-b2-lf3-3','Context Before Interpretation','Explain why the chapter asks readers to examine the historical atmosphere before interpreting Yunus.',['Write a short analytical paragraph using followed by, as a result, and therefore or so.'],'The production task turns chronological facts into a coherent explanatory chain.')
],
4:[
match('yu-b2-lf4-1','Interacting Causes','Match the structure with the causal role.',[
{left:'due to poor governance',right:'identifies a political cause'},
{left:'when migrations ... were added',right:'shows an additional pressure entering an existing crisis'},
{left:'to escape the Mongol invasion',right:'expresses purpose/motivation'},
{left:'even worsened',right:'shows intensification of an already serious condition'}],'The uprising is framed through interacting political, migration and social pressures.'),
mc('yu-b2-lf4-2','Avoid a Single-Cause Claim','Which is the strongest B2 synthesis?',['Poor governance combined with displacement and unrest, and failure to manage these pressures worsened the crisis.','The crisis had only one cause: religion.','Migration immediately stabilized Anatolia.'],0,'The chapter does not support a one-cause explanation.'),
fill('yu-b2-lf4-3','Purpose in Migration','Complete the purpose relationship.','The tribes migrated to Anatolia to [blank] the Mongol invasion.','escape','The infinitive explains why the nomadic groups moved.'),
refl('yu-b2-lf4-4','Multi-Cause Explanation','Write a paragraph explaining why the Babai uprising emerged in a wider crisis.',['Use due to, when ... was added, and worsened or intensified.'],'B2 historical explanation should show interaction rather than list isolated facts.')
],
};