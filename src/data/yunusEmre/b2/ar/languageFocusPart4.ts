import type { Exercise } from '../../../../types';
const feedback={correct:'صحيح. الصياغة تدعم مفهوم الأثر المستمر.',incorrect:'ليس بعد. راجع كيف يربط الفصل الأخير الماضي بالحاضر والمستقبل.'};
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'اختر أفضل تركيب.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'طابق صياغة الإرث بوظيفتها.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'اكتب خلاصة B2 مترابطة.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercisesArPart4: Record<number, Exercise[]> = {
13:[
match('yu-b2-ar-lf13-1','لغة الإرث','طابق الصياغة بوظيفتها في الخاتمة.',[{left:'مَا زَالَ / اسْتَمَرَّ',right:'يربط الأثر الماضي بالحاضر'},{left:'كِلَا ... وَ',right:'يجمع البعد الأدبي والبعد الأخلاقي'},{left:'لِلْأَجْيَالِ الْقَادِمَةِ',right:'يمد الأثر نحو المستقبل'},{left:'مِنْ خِلَالِ أَعْمَالِهِ',right:'يحدد الوسيلة التي يستمر بها التأثير'}],'لغة الإرث تجمع الإنجاز الماضي والأثر المستمر والامتداد المستقبلي.'),
mc('yu-b2-ar-lf13-2','أكثر من إرث أدبي','أي خلاصة تلائم الفصل الأخير؟',['يقدم إرث يونس بوصفه أدبياً وأخلاقياً معاً ومستمر التأثير في الأجيال.','انتهى أثره بانتهاء عصره.','يختزل الكتاب إرثه في تواريخ الميلاد والوفاة.'],0,'الخاتمة توسع الإرث إلى ما وراء الشهرة الأدبية.'),
refl('yu-b2-ar-lf13-3','الخلاصة النهائية','اكتب 6–8 جمل تشرح لماذا يبقى يونس إمره مهماً في هذا الكتاب.',['اربط اللغة والأدب والسياق التاريخي والفكر الصوفي والهداية الأخلاقية. استخدم صيغة استمرار مثل «ما زال» وبناء إضافة مزدوجة.'],'المهمة تجمع الكتاب كله في خطاب B2 بدلاً من استرجاع حقيقة واحدة.')
],
};