import type { Exercise } from '../../../../types';
const feedback={correct:'Correct. The claim is supported by the final chapter framing.',incorrect:'Not yet. Return to the final chapter and its statement about lasting influence.'};
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'Choose the best synthesis.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'Match each legacy claim with its function.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'Write a coherent B2 synthesis.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercisesPart4: Record<number, Exercise[]> = {
13:[
match('yu-b2-lf13-1','Legacy Language','Match the language move with its role in a conclusion.',[
{left:'has continued to',right:'connects past influence with the present'},{left:'both ... and',right:'joins literary and moral dimensions of legacy'},{left:'for future generations',right:'projects influence beyond Yunus’s own period'},{left:'through his works',right:'identifies the medium through which influence continues'}],'A legacy chapter typically links past achievement, continuing effect and future relevance.'),
mc('yu-b2-lf13-2','Beyond Literary Fame','Which synthesis best fits the conclusion?',['Yunus’s legacy is presented as both literary and moral, continuing through later generations.','His influence ended with his own century.','The book reduces his legacy to historical dates.'],0,'The final chapter explicitly broadens legacy beyond literary value alone.'),
refl('yu-b2-lf13-3','Final Synthesis','Write a 6–8 sentence conclusion explaining why Yunus Emre remains significant in this book.',['Connect language/literature, historical context, Sûfî thought and moral guidance. Use both ... and plus one present-perfect form such as has continued to.'],'The task asks learners to synthesize the whole book through B2 discourse rather than recall one fact.')
],
};