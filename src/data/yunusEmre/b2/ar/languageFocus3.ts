import type { Exercise } from '../../../../types';

const feedback={correct:'صحيح. الصياغة تحفظ العلاقة التي يقدمها الفصل.',incorrect:'ليس بعد. راجع المعنى والربط بين الأفكار.'};
const mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'اختر المعنى أو الوظيفة الأدق.',question:q,options:o,correctAnswer:a,explanation:e,feedback});
const match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'طابق اللغة بوظيفتها.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback});
const fill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'أكمل بالصياغة المناسبة.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback});
const refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'أنتج فقرة تحليلية قصيرة.',question:q,correctAnswer:null,explanation:e,feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercisesArPart3: Record<number, Exercise[]> = {
9:[
match('yu-b2-ar-lf9-1','من الحقيقة إلى المحبة','طابق الحركة الخطابية بوظيفتها.',[{left:'بِهَذَا الْمَعْنَى',right:'يربط الفكرة الجديدة بما سبق من تفسير للحقيقة'},{left:'الْغَايَةُ الْقُصْوَى',right:'تعين الهدف الأعلى في الإطار المعروض'},{left:'حُبُّ الْخَالِقِ وَالْمَخْلُوقِ',right:'يوسع المحبة من العلاقة بالله إلى المخلوقات'},{left:'فِي الْوَقْتِ نَفْسِهِ',right:'يسمح بجمع المحبة بالممارسة الدينية دون إحلال إحداهما محل الأخرى'}],'ينتقل الفصل من الوحدة المفهومية إلى آثارها الأخلاقية والعبادية.'),
mc('yu-b2-ar-lf9-2','المحبة والعبادة','أي تركيب يطابق الفصل؟',['تظهر المحبة والوحدة إلى جانب طاعة أوامر الله والصلاة، لا بديلاً عنهما.','تحل المحبة محل الصلاة تماماً.','لا علاقة للممارسة الدينية بفكر يونس.'],0,'يجمع الفصل بين المحبة ومتطلبات العبادة في الإطار نفسه.'),
refl('yu-b2-ar-lf9-3','اربط الفكرة بالممارسة','اشرح الانتقال من تصور الوجود إلى المحبة والوئام والممارسة الدينية.',['استخدم «بهذا المعنى» و«لذلك» و«في الوقت نفسه».'],'المطلوب وصل المستويين المفهومي والعملي.')
],
10:[
match('yu-b2-ar-lf10-1','التعريف والنتيجة الأخلاقية','طابق الصياغة بوظيفتها.',[{left:'لِذَلِكَ',right:'يربط المحبة والتوحيد بالسلوك الأخلاقي'},{left:'يُوصَفُ بِأَنَّهُ',right:'يقدم وصفاً أو استعارة للقلب'},{left:'لِهَذَا السَّبَبِ',right:'يحوّل مكانة القلب إلى نتيجة أخلاقية'},{left:'أَيْ',right:'يوضح المقصود من تعبير سابق'}],'ينتقل الفصل من تعريف القلب إلى أثر أخلاقي.'),
mc('yu-b2-ar-lf10-2','من الاستعارة إلى الأخلاق','لماذا يصبح كسر القلب فعلاً خطيراً في منطق الفصل؟',['لأن القلب يوصف بعرش الرب ومركز المحبة، فتترتب على إيذائه دلالة أخلاقية قوية.','لأن النص يحظر كل عاطفة قانونياً.','لأن العقل مرفوض تماماً.'],0,'الفصل يبني نتيجة أخلاقية على وصف القلب ومكانته.'),
refl('yu-b2-ar-lf10-3','وضّح ثم استنتج','اشرح استعارة القلب ثم استخرج نتيجة أخلاقية دون تحويل الاستعارة إلى وصف تشريحي حرفي.',['استخدم «يوصف بأنه» و«أي» و«لهذا السبب».'],'تدرب المهمة على التوضيح والاستنتاج المسؤول.')
],
11:[
match('yu-b2-ar-lf11-1','التصنيف والضرورة والإمكان','طابق البناء بوظيفته.',[{left:'الْعَقْلُ الْمَحْدُودُ',right:'يصنف نوعاً من العقل بحسب وظيفته'},{left:'الْعَقْلُ الْكُلِّيُّ',right:'يقدم نوعاً موجهاً إلى التقوى'},{left:'يَجِبُ أَنْ يَدْعَمَ أَحَدُهُمَا الْآخَرَ',right:'يعبر عن ضرورة التعاون بين القلب والعقل'},{left:'يُمْكِنُ أَنْ يُسَاعِدَ',right:'يعرض أثر تذكر الموت بوصفه إمكاناً إرشادياً لا نتيجة آلية'}],'يجمع الفصل بين التصنيف والضرورة والإمكان.'),
mc('yu-b2-ar-lf11-2','تعاون لا إلغاء','أي صياغة أدق لمسار النجاة؟',['يجب أن يدعم القلب والعقل أحدهما الآخر بدلاً من إلغاء أحدهما للآخر.','العقل يجعل القلب غير ضروري.','مجرد تذكر الموت يضمن الصلاح آلياً.'],0,'النص يصرح بالتعاون بين القلب والعقل.'),
refl('yu-b2-ar-lf11-3','الموت ناصحاً','اشرح كيف يمكن لوعي الموت أن يؤدي وظيفة النصح الأخلاقي.',['استخدم «يجب» و«يمكن» و«بدلاً من» في 5–6 جمل.'],'ينبغي التمييز بين الإرشاد الأخلاقي والسبب الآلي.')
],
12:[
match('yu-b2-ar-lf12-1','لغة الفضائل والرذائل','طابق البناء بوظيفته.',[{left:'تَتَكَوَّنُ / تَتَمَثَّلُ فِي',right:'تعرّف الأخلاق من خلال فعل أو مبدأ'},{left:'قِيَمٌ مِثْلُ',right:'تقدم أمثلة للفضائل'},{left:'مِنْ خِلَالِ تَنَاوُلِ',right:'يبين كيف يعلم يونس بمواجهة الصفات السلبية'},{left:'لَيْسَتْ ... فَحَسْبُ بَلْ ... أَيْضًا',right:'تجمع الوظيفة الأدبية والوظيفة الأخلاقية للقصائد'}],'يعرّف الفصل ويضرب الأمثلة ويوسع وظيفة الشعر.'),
fill('yu-b2-ar-lf12-2','وظيفتان معاً','أكمل التوسع.','قصائد يونس ليست أعمالاً أدبية فحسب، [blank] هي أيضاً دليل أخلاقي.','بل','البناء يعطي القصائد وظيفتين متزامنتين.'),
mc('yu-b2-ar-lf12-3','الأخلاق سلوك','ماذا يفعل تعريف الأخلاق بالتخلي عن السلوك غير اللائق؟',['يربط الأخلاق بالفعل وترك السلوك الضار.','يجعل الأخلاق قائمة مشاعر فقط.','يفصل الأخلاق عن السلوك.'],0,'التعريف في الفصل عملي وسلوكي.'),
refl('yu-b2-ar-lf12-4','مقابلة أخلاقية','اكتب فقرة تقابل فضيلتين برذيلتين من الفصل.',['استخدم «مثل» و«بينما» وتركيب «ليس... فحسب بل... أيضاً».'],'ينظم المتعلم المقابلة بدلاً من سرد المفردات فقط.')
],
};

const part4Feedback={correct:'صحيح. الصياغة تدعم مفهوم الأثر المستمر.',incorrect:'ليس بعد. راجع كيف يربط الفصل الأخير الماضي بالحاضر والمستقبل.'};
const part4Mc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'اختر أفضل تركيب.',question:q,options:o,correctAnswer:a,explanation:e,feedback:part4Feedback});
const part4Match=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'طابق صياغة الإرث بوظيفتها.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback:part4Feedback});
const part4Refl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'اكتب خلاصة B2 مترابطة.',question:q,correctAnswer:null,explanation:e,feedback:part4Feedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});

export const yunusB2LanguageFocusExercisesArPart4: Record<number, Exercise[]> = {
13:[
part4Match('yu-b2-ar-lf13-1','لغة الإرث','طابق الصياغة بوظيفتها في الخاتمة.',[{left:'مَا زَالَ / اسْتَمَرَّ',right:'يربط الأثر الماضي بالحاضر'},{left:'كِلَا ... وَ',right:'يجمع البعد الأدبي والبعد الأخلاقي'},{left:'لِلْأَجْيَالِ الْقَادِمَةِ',right:'يمد الأثر نحو المستقبل'},{left:'مِنْ خِلَالِ أَعْمَالِهِ',right:'يحدد الوسيلة التي يستمر بها التأثير'}],'لغة الإرث تجمع الإنجاز الماضي والأثر المستمر والامتداد المستقبلي.'),
part4Mc('yu-b2-ar-lf13-2','أكثر من إرث أدبي','أي خلاصة تلائم الفصل الأخير؟',['يقدم إرث يونس بوصفه أدبياً وأخلاقياً معاً ومستمر التأثير في الأجيال.','انتهى أثره بانتهاء عصره.','يختزل الكتاب إرثه في تواريخ الميلاد والوفاة.'],0,'الخاتمة توسع الإرث إلى ما وراء الشهرة الأدبية.'),
part4Refl('yu-b2-ar-lf13-3','الخلاصة النهائية','اكتب 6–8 جمل تشرح لماذا يبقى يونس إمره مهماً في هذا الكتاب.',['اربط اللغة والأدب والسياق التاريخي والفكر الصوفي والهداية الأخلاقية. استخدم صيغة استمرار مثل «ما زال» وبناء إضافة مزدوجة.'],'المهمة تجمع الكتاب كله في خطاب B2 بدلاً من استرجاع حقيقة واحدة.')
],
};

const reviewFeedback={correct:'صحيح. استخدمت العلاقة اللغوية التي تطورت عبر الكتاب.',incorrect:'ليس بعد. راجع أنماط مراجعة اللغة ووظائفها.'};
const reviewMatch=(id:string,title:string,q:string,p:{left:string;right:string}[],e:string):Exercise=>({id,type:'matching',title,instructions:'طابق الصياغة بوظيفتها التراكمية.',question:q,matchingPairs:p,correctAnswer:Object.fromEntries(p.map(x=>[x.left,x.right])),explanation:e,feedback:reviewFeedback});
const reviewMc=(id:string,title:string,q:string,o:string[],a:number,e:string):Exercise=>({id,type:'multiple-choice',title,instructions:'اختر الصياغة الأقوى لمستوى B2.',question:q,options:o,correctAnswer:a,explanation:e,feedback:reviewFeedback});
const reviewFill=(id:string,title:string,q:string,text:string,a:string,e:string):Exercise=>({id,type:'fill-blanks',title,instructions:'أكمل بالرابط الأكثر اتساقاً.',question:q,fillBlanksText:text,correctAnswer:a,explanation:e,feedback:reviewFeedback});
const reviewRefl=(id:string,title:string,q:string,p:string[],e:string):Exercise=>({id,type:'reflection',title,instructions:'اكتب استجابة B2 مترابطة مستخدماً موارد اللغة التراكمية.',question:q,correctAnswer:null,explanation:e,feedback:reviewFeedback,discussionPrompts:p.map(question=>({question,mode:'Individual'}))});
const reviewSeq=(id:string,title:string,q:string,items:{id:string;text:string}[],ans:string[],e:string):Exercise=>({id,type:'sequencing',title,instructions:'رتب حركات الخطاب.',question:q,sequencingItems:items,correctAnswer:ans,explanation:e,feedback:reviewFeedback});

export const yunusB2LanguageReviewExercisesAr: Exercise[] = [
reviewMatch('yu-b2-ar-lr1','المصدر ودرجة اليقين','طابق الصياغة بدرجة الادعاء.',[{left:'وَفْقًا لِلرِّوَايَاتِ التَّارِيخِيَّةِ',right:'تنسب المعلومة إلى الروايات'},{left:'تُشِيرُ بَعْضُ الْمَصَادِرِ',right:'تقيد الادعاء ببعض المصادر'},{left:'وَفْقًا لِلرَّأْيِ السَّائِدِ',right:'تعبر عن قبول واسع دون يقين مطلق'},{left:'يُقَدِّمُ الْفَصْلُ / وَفْقًا لِيُونُس',right:'يحصر التفسير في إطار النص أو صاحب الفكرة'}],'التحكم في مصدر الادعاء وقوته مهارة أساسية في قراءة B2.'),
reviewMatch('yu-b2-ar-lr2','السبب والنتيجة والعملية','طابق الرابط بالعلاقة.',[{left:'بِسَبَبِ',right:'سبب'},{left:'نَتِيجَةً لِذَلِكَ / أَدَّى إِلَى',right:'نتيجة'},{left:'مَعَ مُرُورِ الْوَقْتِ / أَخِيرًا',right:'مرحلة في عملية'},{left:'وَمَعَ ذَلِكَ',right:'استدراك أو إقرار بحدود'}],'الفصول التاريخية تعتمد على علاقات دقيقة لا على سرد حقائق منفصلة.'),
reviewSeq('yu-b2-ar-lr3','من الدليل إلى التفسير','رتب حركات فقرة تاريخية قوية.',[{id:'a',text:'قدم الحالة التاريخية بلغة منضبطة بالمصدر.'},{id:'b',text:'اربط الأسباب المتداخلة.'},{id:'c',text:'بين النتيجة أو نقطة التحول.'},{id:'d',text:'اشرح لماذا يهم هذا السياق في فهم يونس.'}],['a','b','c','d'],'الفقرة المتماسكة تتحرك من الدليل إلى العلاقة ثم التفسير.'),
reviewMc('yu-b2-ar-lr4','تشبيه منضبط','أي صياغة أدق؟',['تصرف السلاطين تقريباً كأنهم موظفون مدنيون للمغول، وهو تشبيه يوضح شدة التبعية دون مساواة حرفية.','أصبح السلاطين حرفياً موظفين مغولاً في كل معنى فوراً.','يثبت التشبيه زوال الدولة في اللحظة نفسها.'],0,'«كأن» و«تقريباً» تضبطان قوة المقارنة.'),
reviewFill('yu-b2-ar-lr5','استدراك وحدود','أكمل العلاقة.','بذل رجال الدولة جهوداً لتخفيف الضغط، [blank] استمرت التبعية البنيوية.','ومع ذلك','يعترف الرابط بالجهد ويبين في الوقت نفسه حدوده.'),
reviewMatch('yu-b2-ar-lr6','الفكرة والنتيجة الأخلاقية','طابق الصياغة بالحركة التي تدعمها.',[{left:'مِنْ هَذَا الْمَنْظُورِ',right:'يفتح زاوية تفسير'},{left:'لِذَلِكَ / لِهَذَا السَّبَبِ',right:'يستنتج نتيجة من فكرة سابقة'},{left:'يُوصَفُ بِأَنَّهُ / أَيْ',right:'يعرف أو يوضح مفهوماً أو استعارة'},{left:'يَجِبُ / يُمْكِنُ',right:'يميز الضرورة من الإمكان'}],'الفصول الفكرية تتطلب انتقالاً منضبطاً من المفهوم إلى الأثر.'),
reviewMc('yu-b2-ar-lr7','المعنى المزدوج','أي صياغة تجمع حجة الكتاب دون اختزال؟',['يونس مهم ليس بوصفه شخصية أدبية فحسب، بل أيضاً صوتاً أخلاقياً وروحياً عاش داخل أزمة تاريخية واستجاب لها.','إما أن يكون شاعراً أو صوفياً ولا يمكن وصل الدورين.','يفسر السياق التاريخي وحده جميع أفكاره تفسيراً كاملاً.'],0,'يجمع الكتاب الأدوار والسياق دون إلغاء الفروق بينها.'),
reviewRefl('yu-b2-ar-lr8','إنتاج تراكمي B2','اكتب 7–9 جمل تشرح كيف ينتقل الكتاب من الأزمة التاريخية إلى إرث أدبي وأخلاقي مستمر.',['استخدم عبارة نسبة للمصدر، وعلاقة سبب ونتيجة، واستدراكاً، ورابطاً من الفكرة إلى النتيجة، وتركيب إضافة مزدوجة مثل «ليس... فحسب بل... أيضاً».'],'المهمة تطلب اختيار اللغة لبناء المعنى عبر الكتاب كله، لا إعادة اختبار الفهم.')
];
