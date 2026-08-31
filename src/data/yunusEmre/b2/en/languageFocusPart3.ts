import type { Exercise } from '../../../../types';
const feedback={correct:'Correct. The language preserves the chapter relationship.',incorrect:'Not yet. Reconsider the chapter’s meaning and emphasis.'};
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'Choose the best meaning/function.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'Match language and function.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const fill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'Complete with the chapter wording.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'Produce a short analytical B2 response.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercisesPart3: Record<number, Exercise[]> = {
9:[
match('yu-b2-lf9-1','From Reality to Love','Match each discourse move with its role.',[
{left:'In this sense',right:'links the new paragraph to the previous explanation of reality'},{left:'the ultimate purpose',right:'states the highest goal in the presented framework'},{left:'love of the Creator and the created',right:'extends love vertically and socially'},{left:'while / but',right:'can mark the chapter’s distinction between claim and actual religious practice'}],'The chapter moves from metaphysical unity to ethical and religious implications.'),
mc('yu-b2-lf9-2','Love and Practice','Which synthesis best fits the chapter?',['Love and unity are presented alongside obedience and prayer, not as substitutes for them.','Love replaces all religious practice.','Prayer is unrelated to Yunus’s understanding of unity.'],0,'The prose and quoted verse place love and religious command in the same framework.'),
refl('yu-b2-lf9-3','Connect Ideas Across Paragraphs','Explain how the chapter moves from “everything is a reflection” to love, harmony and religious practice.',['Use in this sense, therefore, and while or at the same time.'],'B2 discourse work should connect the conceptual and practical layers.')
],
10:[
match('yu-b2-lf10-1','Definition and Moral Consequence','Match each structure with its role.',[
{left:'Therefore',right:'connects love and oneness with moral behavior'},{left:'is described as',right:'frames the heart through a metaphor or attributed description'},{left:'for this reason',right:'turns the status of the heart into an ethical consequence'},{left:'that is',right:'clarifies a figurative expression'}],'The chapter explains moral implications by defining and clarifying key concepts.'),
mc('yu-b2-lf10-2','Metaphor to Ethics','Why is “breaking a heart” treated seriously?',['Because the heart is described as the throne of the Lord and center of love, so harming it carries moral weight.','Because the chapter says emotions are legally forbidden.','Because intellect is rejected completely.'],0,'The chapter moves from metaphorical description to ethical implication.'),
refl('yu-b2-lf10-3','Clarify, Then Infer','Explain the heart metaphor and one moral consequence without presenting the metaphor as a literal anatomical claim.',['Use is described as, that is, and for this reason.'],'The task practices clarification and responsible inference.')
],
11:[
match('yu-b2-lf11-1','Classification and Necessity','Match each structure with its function.',[
{left:'the limited intellect',right:'classifies one form of intellect by function'},{left:'the universal intellect',right:'classifies a broader guiding form connected with piety'},{left:'must support one another',right:'states necessity for heart-reason cooperation'},{left:'can help',right:'presents death-awareness as a possible ethical guide rather than mechanical certainty'}],'The chapter combines classification, necessity and possibility.'),
mc('yu-b2-lf11-2','Necessary Cooperation','Which wording best represents salvation in the chapter?',['Heart and reason must support one another rather than one eliminating the other.','Universal intellect makes the heart unnecessary.','Death guarantees righteousness automatically.'],0,'The text explicitly emphasizes cooperation between heart and reason.'),
refl('yu-b2-lf11-3','Mortality as Advice','Explain how awareness of death can function as an advisor in the chapter’s moral framework.',['Use must, can, and rather than. Write 5–6 sentences.'],'The response should distinguish moral guidance from automatic cause.')
],
12:[
match('yu-b2-lf12-1','Positive and Negative Moral Language','Match the structure with its function.',[
{left:'consists of',right:'defines morality through a core action'},{left:'values such as',right:'introduces examples of virtues'},{left:'by addressing',right:'shows how Yunus teaches through confronting negative traits'},{left:'not only ... but also',right:'presents poems as literature and moral guidance together'}],'The chapter defines, exemplifies and expands Yunus’s moral teaching.'),
fill('yu-b2-lf12-2','Dual Function','Complete the book’s expanded claim.','Yunus Emre’s poems are not only literary works but [blank] a moral guide.','also','The correlative structure gives the poems two simultaneous functions.'),
mc('yu-b2-lf12-3','Definition Through Action','What does “morality consists of abandoning behaviors unbecoming for humans” do?',['It defines morality partly through rejecting harmful conduct.','It says morality is only a list of emotions.','It separates morality from behavior.'],0,'“Consists of” introduces a defining component.'),
refl('yu-b2-lf12-4','Balanced Moral Paragraph','Write a paragraph contrasting two virtues with two harmful traits from the chapter.',['Use such as, while, and not only ... but also.'],'The production task organizes moral contrast without turning it into a vocabulary list.')
],
};