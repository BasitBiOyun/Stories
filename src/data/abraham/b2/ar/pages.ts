import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercisesAr,
  abrahamB2KnowledgeCheckExercisesAr,
  abrahamB2QuickChallengesAr,
  abrahamB2VocabularyChallengePairsAr,
} from './exercises';
import { abrahamB2LanguageFocusPart1Ar } from './languageFocus';
import { abrahamB2LanguageFocusPart2Ar } from './languageFocus2';
import { abrahamB2LanguageFocusPart3Ar } from './languageFocus3';
import { abrahamB2CanonicalVocabulary, abrahamB2HotspotCoords, abrahamB2ImageUrl } from '../en/pages';

const rawAbrahamB2PagesAr: PageData[] = [
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
// c07a
//__C07__
// c07b
// c08a
//__C08__
// c08b
// c09a
//__C09__
// c09b
// c10 unused
  {id:36,type:'quiz',title:'اختبار المعرفة — B2',content:'اختبر فهمك لقصة النبي إبراهيم عليه السلام كاملة في مستوى B2.',image:'',audioUrl:''},
  {id:37,type:'exercises',title:'مراجعة اللغة B2',content:'راجع واستعمل صيغ المصدر والموقف والزمن والتماسك والعلاقات الخطابية التي تطورت عبر الفصول الخمسة والثلاثين.',image:''},
  {id:38,type:'vocabulary-match',title:'تحدي المفردات — B2',content:'صل عشرة مصطلحات أساسية من القصة بمعانيها الدقيقة.',image:''},
  {id:39,type:'glossary',title:'مسرد القصة — B2',content:'مفردات القصة الأساسية في مستوى B2.',image:''},
  {id:40,type:'final-challenge',title:'التحدي النهائي',content:'أظهر إتقانك للقصة كاملة من خلال التحليل والدليل والمقارنة والتركيب.',image:''},
];

const abrahamB2LanguageReviewExercisesAr: Exercise[] = [
  {id:'abraham-b2-ar-language-review-1-source-qualification',type:'matching',title:'المصدر ودرجة اليقين',instructions:'صل كل صيغة بالدرجة التي تعبّر بها عن الالتزام بالمعلومة.',question:'كيف يفرّق الكاتب بين الإسناد المباشر والرواية والاعتقاد التاريخي والقول غير المحسوم؟',matchingPairs:[{left:'بحسب / وفقًا لـ...',right:'إسناد مباشر إلى مصدر محدد'},{left:'تشير بعض المصادر إلى أن...',right:'عرض معلومة محدودة الدليل دون تحويلها إلى حقيقة محسومة'},{left:'يُعتقد أن...',right:'نقل اعتقاد تاريخي مع مسافة عن اليقين'},{left:'رُوي / يُقال إن...',right:'نقل رواية أو قول متداول دون التزام كامل بصحته'}],correctAnswer:{'بحسب / وفقًا لـ...':'إسناد مباشر إلى مصدر محدد','تشير بعض المصادر إلى أن...':'عرض معلومة محدودة الدليل دون تحويلها إلى حقيقة محسومة','يُعتقد أن...':'نقل اعتقاد تاريخي مع مسافة عن اليقين','رُوي / يُقال إن...':'نقل رواية أو قول متداول دون التزام كامل بصحته'},explanation:'تكررت في الفصول صيغ تضبط المسافة بين الدليل والرواية والاعتقاد والتفسير.',feedback:{correct:'صحيح. حافظت على درجة اليقين التي تحملها كل صيغة.',incorrect:'اسأل: هل العبارة تسند إلى مصدر محدد، أم تقيد الدليل، أم تنقل اعتقادًا، أم تروي قولًا على مسافة؟'}},
  {id:'abraham-b2-ar-language-review-2-viewpoint-time',type:'matching',title:'الزمن من منظور الماضي',instructions:'صل كل تركيب بالمنظور الزمني الذي يبنيه.',question:'كيف تستخدم العربية الزمن والسياق لربط حدث لاحق بنقطة سابقة في الماضي؟',matchingPairs:[{left:'كان سيغادر',right:'خطة مستقبلية تُرى من نقطة ماضية'},{left:'كان يعلم أنه سيصبح...',right:'تطور لاحق معروض من منظور سابق'},{left:'كان قد تغيّر بالفعل',right:'حدث اكتمل قبل حدث ماضٍ آخر'},{left:'كان على وشك أن يبدأ حين...',right:'فعل وشيك قطعه أو غيّر مساره حدث آخر'}],correctAnswer:{'كان سيغادر':'خطة مستقبلية تُرى من نقطة ماضية','كان يعلم أنه سيصبح...':'تطور لاحق معروض من منظور سابق','كان قد تغيّر بالفعل':'حدث اكتمل قبل حدث ماضٍ آخر','كان على وشك أن يبدأ حين...':'فعل وشيك قطعه أو غيّر مساره حدث آخر'},explanation:'تستخدم العربية في الفصول كان + سـ، وكان قد، وعلى وشك أن لضبط ترتيب الأحداث والمنظور إليها.',feedback:{correct:'صحيح. ميّزت بين المستقبل من منظور الماضي والخلفية السابقة والفعل الوشيك.',incorrect:'افصل بين ما سيحدث لاحقًا من نقطة ماضية، وما كان قد اكتمل قبلها، وما كان على وشك البدء.'}},
  {id:'abraham-b2-ar-language-review-3-contrast-reframing',type:'multiple-choice',title:'الاستدراك وإعادة التأطير',instructions:'اختر الجملة التي تقر بنقطة أولى ثم تعيد ضبطها بدقة.',question:'أي جملة تستخدم الاستدراك والتصحيح دون تبسيط مخل؟',options:['مع أن النظام يبدو صارمًا، فإن هدفه ليس مجرد العقاب، بل توضيح ما هو متوقع من الجميع.','النظام صارم لأنه صارم، ولذلك فهو صارم.','النظام إما ناجح تمامًا أو عديم الفائدة تمامًا.'],correctAnswer:0,explanation:'تقر الجملة الأولى بانطباع أولي ثم تعيد توجيه المعنى بواسطة ليس... بل... .',feedback:{correct:'صحيح. الاستدراك لا يلغي النقطة الأولى بل يعيد تفسيرها.',incorrect:'ابحث عن جملة تبدأ بإقرار محدود ثم تنقل مركز الحجة إلى معنى أدق.'}},
  {id:'abraham-b2-ar-language-review-4-cause-purpose-result',type:'sequencing',title:'بناء سلسلة السبب والغاية والنتيجة',instructions:'رتب الجمل لتكوين فقرة تحليلية مترابطة.',question:'كيف تميز فقرة B2 بين المشكلة والغاية والإجراء والنتيجة؟',sequencingItems:[{id:'1',text:'كان النظام القديم يسبب تأخرًا متكررًا.'},{id:'2',text:'ولتقليل هذا التأخر، غيّر الفريق ترتيب الخطوات.'},{id:'3',text:'وأضاف فحصًا أخيرًا لكي تُكتشف الأخطاء في وقت أبكر.'},{id:'4',text:'ولذلك أصبح العمل أسرع من غير أن يُلغى فحص الجودة.'}],correctAnswer:['1','2','3','4'],explanation:'ينتقل التسلسل من السبب أو المشكلة إلى الغاية، ثم الإجراء، ثم نتيجة محسوبة.',feedback:{correct:'صحيح. أصبحت العلاقات بين الجمل واضحة.',incorrect:'ابدأ بالمشكلة، ثم اذكر الغاية، ثم الإجراء، ثم النتيجة.'}},
  {id:'abraham-b2-ar-language-review-5-condition-consequence',type:'multiple-choice',title:'الشرط والنتيجة بدرجة مناسبة',instructions:'اختر الجملة التي تجعل قوة النتيجة متناسبة مع قوة الشرط.',question:'أي جملة تضبط العلاقة بين الشرط والنتيجة بصورة أفضل؟',options:['إن بقيت الأدلة ناقصة، فينبغي أن تبقى النتيجة قابلة للمراجعة.','إن كان تفصيل واحد غير مؤكد، فالحجة كلها خاطئة بالضرورة.','إن لم تتفق كل المصادر، فجميع التفسيرات صحيحة بالدرجة نفسها.'],correctAnswer:0,explanation:'الجملة الأولى تربط نقص الدليل بنتيجة متناسبة معه، لا بحكم مطلق.',feedback:{correct:'صحيح. النتيجة لا تتجاوز ما يسمح به الشرط.',incorrect:'تجنب نتيجة أقوى من الشرط أو الأدلة التي سبقتها.'}},
  {id:'abraham-b2-ar-language-review-6-reference-cohesion',type:'matching',title:'الإحالة والتماسك بين الجمل',instructions:'صل كل تركيب بوظيفته في ربط أجزاء الفقرة.',question:'كيف يحافظ الكاتب على الترابط من غير تكرار الأسماء والأفكار نفسها؟',matchingPairs:[{left:'الذين...',right:'إضافة وصف محدد مع إبقاء المرجع نفسه حاضرًا'},{left:'المكان الذي / حيث...',right:'ربط موقع بالمعلومة المتعلقة بما يحدث فيه'},{left:'هذا القرار',right:'الإحالة إلى فعل أو فكرة كاملة وردت قبلها'},{left:'كان بعضهم... بينما كان آخرون...',right:'تنظيم مجموعات متوازية دون تعميمها كلها في حكم واحد'}],correctAnswer:{'الذين...':'إضافة وصف محدد مع إبقاء المرجع نفسه حاضرًا','المكان الذي / حيث...':'ربط موقع بالمعلومة المتعلقة بما يحدث فيه','هذا القرار':'الإحالة إلى فعل أو فكرة كاملة وردت قبلها','كان بعضهم... بينما كان آخرون...':'تنظيم مجموعات متوازية دون تعميمها كلها في حكم واحد'},explanation:'تسهم صلة الموصول والإحالة والربط المتوازي في تماسك الفقرة على مستوى يتجاوز الجملة المفردة.',feedback:{correct:'صحيح. لكل تركيب وظيفة مختلفة في التماسك.',incorrect:'حدد هل التركيب يصف مرجعًا، أو يثبت مكانًا، أو يعود إلى فكرة سابقة، أو يقابل بين مجموعات.'}},
  {id:'abraham-b2-ar-language-review-7-evidence-interpretation',type:'fill-blanks',title:'الفصل بين الدليل والتفسير',instructions:'أكمل الجملة بصيغة تعرض التفسير بوصفه احتمالًا لا حقيقة مباشرة.',question:'أي تعبير يمنع تحويل الاستنتاج إلى حقيقة غير مقيدة؟',fillBlanksText:'النمط ظاهر في البيانات، ومع ذلك [blank] علامة على تغير في السلوك، لا دليلًا قاطعًا عليه وحده.',correctAnswer:'يمكن فهمه على أنه',explanation:'صيغة يمكن فهمه على أنه تميز بوضوح بين ما نراه في الدليل وبين التفسير الذي نستنتجه منه.',feedback:{correct:'صحيح. بقي التفسير منفصلًا عن الدليل المباشر.',incorrect:'استخدم صيغة تقدم قراءة محتملة ولا تقول إن الدليل يثبتها يقينًا.'}},
  {id:'abraham-b2-ar-language-review-8-transfer',type:'reflection',title:'تطبيق B2: فقرة تحليلية مقيدة ومتوازنة',instructions:'اكتب أو قدم شفهيا فقرة مترابطة من 8–10 جمل عن قضية خارج القصة مثل قرار مدرسي أو ادعاء تاريخي أو نقاش تقني أو رياضي أو ظاهرة اجتماعية.',question:'هل تستطيع دمج أدوات اللغة والخطاب في حجة واحدة دقيقة بدل استخدام تراكيب منفصلة؟',correctAnswer:null,explanation:'الهدف هو نقل المهارة: ضبط المصدر والزمن والموقف والاستدراك والسبب والغاية والشرط والإحالة والتفسير المقيد.',feedback:{correct:'استخدم التراكيب لخدمة الدقة والموقف والتماسك.',incorrect:''},discussionPrompts:[{question:'انسب أو قيد ادعاء واحدًا على الأقل بصيغة مثل بحسب... أو تشير بعض المصادر... أو يُعتقد أن... .',mode:'Individual'},{question:'استخدم تركيبًا واحدًا ينظر إلى المستقبل من نقطة في الماضي مثل كان سيـ أو كان يعلم أن... سيـ، أو استخدم كان قد للخلفية السابقة.',mode:'Individual'},{question:'أدخل استدراكًا حقيقيًا وعلاقة واضحة بين السبب والغاية والنتيجة.',mode:'Pair'},{question:'اختم بنتيجة لا تتجاوز في يقينها أو نطاقها الأدلة التي قدمتها.',mode:'Pair'}]},
];
const arabicFinalFeedback={correct:'صحيح. إجابتك مدعومة بالقصة على مستوى الكتاب كله.',incorrect:'ليست دقيقة بعد. قارن بين الفصول ذات الصلة ثم حاول مرة أخرى.'};
const arabicFinalOverrides:Record<string,Exercise>={
'ab-b2-ar-f4':{id:'ab-b2-ar-f4',type:'true-false',title:'التحدي النهائي',instructions:'قرر هل الادعاء مدعوم بالقصة أم لا.',question:'يميّز الفصل الثالث والثلاثون بين التضحية بالحيوان بوصفها ممارسة نبوية سابقة وبين التضحية البشرية التي ينسبها إلى عبدة الأصنام.',correctAnswer:true,explanation:'يذكر الفصل أن أنبياء قبل إبراهيم قدّموا حيوانات، ويقابل ذلك بالتضحية البشرية التي ينسبها إلى عبدة الأصنام.',feedback:arabicFinalFeedback},
'ab-b2-ar-f6':{id:'ab-b2-ar-f6',type:'matching',title:'التحدي النهائي',instructions:'صل كل سياق بالتغير التحليلي الذي يسببه.',question:'كيف يجعل السياق حجة إبراهيم أكثر حدة في مراحل مختلفة من القصة؟',correctAnswer:{},matchingPairs:[{left:'أبوه يعبد الأصنام ويصنعها ويبيعها',right:'يجمع الخلاف بين العقيدة والأسرة ومصدر المعيشة'},{left:'يخلو المعبد في الاحتفال ويبقى الطعام أمام تماثيل صامتة',right:'يتيح السياق اختباراً عملياً لفكرة قدرة الأصنام على الفعل'},{left:'يدّعي نمرود القدرة على الإحياء والإماتة من موقع السلطة',right:'تنتقل المناظرة من التحكم السياسي إلى نظام كوني لا يملكه الحاكم'}],explanation:'تغيّر السياقات ما يمكن اختباره: سلطة الأسرة، وفاعلية الأصنام، وحدود القوة السياسية.',feedback:arabicFinalFeedback},
'ab-b2-ar-f7':{id:'ab-b2-ar-f7',type:'matching',title:'التحدي النهائي',instructions:'صل كل فرع أو مكان بالامتداد اللاحق الذي يصفه السرد.',question:'كيف يوسّع السرد إرث إبراهيم ليتجاوز شخصاً واحداً ومكاناً واحداً؟',correctAnswer:{},matchingPairs:[{left:'نسل إسماعيل',right:'مكة والحجاز والسلسلة المرتبطة بالنبي محمد صلى الله عليه وسلم في السرد'},{left:'نسل إسحاق',right:'السلسلة المرتبطة بيعقوب وأنبياء لاحقين في السرد'},{left:'الكعبة بعد رفع قواعدها',right:'مكان عبادة وحج مستمر يقدمه السرد للناس بما يتجاوز فرعاً أسرياً واحداً'}],explanation:'تجمع الخاتمة بين خطوط الأسرة ومكان عبادة عابر للمناطق، فيصبح الإرث نسبياً وجغرافياً معاً.',feedback:arabicFinalFeedback},
'ab-b2-ar-f8':{id:'ab-b2-ar-f8',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل الخلاصة العابرة للفصول بأفضل كلمة تحليلية.',question:'أكمل المقابلة بين مناظرة الأصنام ومناظرة نمرود.',fillBlanksText:'ينقل إبراهيم الحجة مراراً من [blank] الموروثة أو السياسية إلى دليل يمكن فحصه.',correctAnswer:'السلطة',explanation:'يحتج عبدة الأصنام بالموروث، ويعتمد نمرود على قوة الملك، بينما يعيد إبراهيم توجيه النقاش إلى دليل قابل للملاحظة أو الاختبار.',feedback:arabicFinalFeedback},
'ab-b2-ar-f9':{id:'ab-b2-ar-f9',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل خلاصة الكتاب بالمفهوم الأنسب.',question:'أكمل خلاصة الفصول الأسرية الأخيرة.',fillBlanksText:'من التضحية إلى بناء الكعبة والحج، تحوّل الفصول الأخيرة طاعة الأسرة إلى [blank] مستمر.',correctAnswer:'إرث',explanation:'تربط الفصول الأخيرة بين الطاعة والكعبة والحج والذرية واستمرار الهداية في إرث باقٍ.',feedback:arabicFinalFeedback},
};
const arabicFinalChallenge=abrahamB2FinalChallengeExercisesAr.map(exercise=>arabicFinalOverrides[exercise.id]??exercise);

const STORY_IDS=new Set(Array.from({length:35},(_,index)=>index+1));
const arabicLanguageFocus:Record<number,Exercise[]>={...abrahamB2LanguageFocusPart1Ar,...abrahamB2LanguageFocusPart2Ar,...abrahamB2LanguageFocusPart3Ar};
const arabicAudioTokens=[
'ac141b9d-73c1-436e-9db5-e2dc3fe06fd0','2fe1ca83-0f4c-439b-84ad-893cfb155a19','f1628231-d7ef-4286-85d8-189a6cb72063','d2cab735-0f57-44e7-bf8a-e3e94d5fd540','9b385b4b-8229-4f70-bab4-a0e45a2ed9e4','7a447a31-0345-4e56-88fd-3face653336a','b69ea386-7b1a-4f10-9381-64bf4c81eab6','995beb9f-6ab9-4d16-947b-df0fe3419498','654667a2-9814-4833-a9c8-e63820c057ae','99e6a224-24cd-467d-857e-36ee636d9a0e','88f3cd04-ae9c-4031-aa19-8f9ea4462984','12af9feb-44d1-424a-b6eb-4b649c86655e','af710c60-adba-4d84-96e0-656a02adf01b','e31e0d8b-73e8-4fdf-aee1-f2b58cd926be','0bdc1948-ec66-446a-a11e-0043ec1b1bfe','2bcc1fc7-8b32-40ac-ac01-0ce2bf51d479','4e9a095b-2754-4809-b887-c324a9e9c05c','27dbb89e-cd63-4734-836d-b537d733800a','fa8fa126-fc86-4021-9996-2962e572a9c0','31325634-d850-42bf-a833-50e605d6d2f2','99cdb781-fde1-4824-a5d0-3f61c578e18b','e029f713-f051-415a-b795-dc1fc3c380ba','2d25817f-bddf-43db-bc00-53571ae66188','07c73128-1201-4926-b4fa-919b92d57f32','51a50c70-9ac8-496f-a7ad-0183159b1225','15521c55-6b94-427a-8f7d-471b92a04a4c','4557144f-66f6-4aae-942e-75b4895014fa','5d0add92-2802-4fea-8e44-15d2beccbc9d','6262ae57-39b0-47ab-a45f-8c1f70e3c482','6c8fea82-b220-45d7-9f06-628ef3a4c080','3724a893-f982-40d6-b829-4156355f1d7d','cabc451b-7eec-4642-b419-050782bce547','a401acfd-0c85-47bd-a479-869eaa157720','68f33245-b35d-42b4-b930-097a3bcec62b','eb631425-7204-4c9e-8d0f-70af5b7ea0e1'] as const;
const arabicAudioUrl=(chapter:number)=>`https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fabraham_b2%2Faudio%2Farabic_audio%2FCHAPTER%20${chapter}.mp3?alt=media&token=${arabicAudioTokens[chapter-1]}`;
const normalizeArabicChar=(char:string)=>char.replace(/[\u064B-\u065F\u0670\u0640\u0610-\u061A\u06D6-\u06ED\u200B-\u200F\uFEFF]/g,'').replace(/[أإآٱ]/g,'ا').replace(/ى/g,'ي').replace(/ة/g,'ه');
const normalizeArabic=(text:string)=>Array.from(text).map(normalizeArabicChar).join('').replace(/\s+/g,' ').trim();
const findArabicSurface=(content:string,needle:string):string|null=>{
 let normalized='';const originalIndices:number[]=[];let previousWasSpace=false;
 for(let i=0;i<content.length;i+=1){const part=normalizeArabicChar(content[i]);if(!part)continue;if(/\s/.test(part)){if(previousWasSpace)continue;normalized+=' ';originalIndices.push(i);previousWasSpace=true;continue;}previousWasSpace=false;normalized+=part;originalIndices.push(i);}
 const target=normalizeArabic(needle);const startInNormalized=normalized.indexOf(target);if(startInNormalized<0||target.length===0)return null;const start=originalIndices[startInNormalized];const lastMapped=originalIndices[startInNormalized+target.length-1];if(start==null||lastMapped==null)return null;let end=lastMapped+1;while(end<content.length&&/[\u064B-\u065F\u0670\u0610-\u061A\u06D6-\u06ED]/.test(content[end]))end+=1;return content.slice(start,end);
};
type ResolvedArabicVocab={word:string;definition:string};
const standardizeArabicPage=(page:PageData):PageData=>{
 if(!STORY_IDS.has(page.id))return page;
 const seeds=abrahamB2CanonicalVocabulary[page.id]??[];
 const resolved=seeds.map(([,arNeedle,,arDefinition])=>{const word=findArabicSurface(page.content??'',arNeedle);return word?{word,definition:arDefinition}:null;}).filter((item):item is ResolvedArabicVocab=>item!==null).slice(0,5);
 if(resolved.length!==5)console.warn(`[Abraham B2 AR] Chapter ${page.id} resolved ${resolved.length}/5 canonical vocabulary pairs.`);
 const coordinates=abrahamB2HotspotCoords(page.id);
 return {...page,image:abrahamB2ImageUrl(page.id),audioUrl:arabicAudioUrl(page.id),vocabulary:resolved,hotspots:resolved.slice(0,2).map((item,index)=>({id:`ab-b2-runtime-hs-${page.id}-${index+1}`,...coordinates[index],title:item.word,description:item.definition})),animatedWords:undefined,syncPoints:undefined,timedChunks:undefined};
};
const standardizedArabicPages=rawAbrahamB2PagesAr.map(standardizeArabicPage);
const arabicGlossary=standardizedArabicPages.filter(page=>STORY_IDS.has(page.id)).flatMap(page=>page.vocabulary??[]);
export const abrahamB2PagesAr:PageData[]=standardizedArabicPages.map(page=>{
 if(STORY_IDS.has(page.id)){const languageFocusExercises=arabicLanguageFocus[page.id];return {...page,exercises:[abrahamB2QuickChallengesAr[page.id]],...(languageFocusExercises?{languageFocusExercises}:{})};}
 if(page.id===36)return {...page,exercises:abrahamB2KnowledgeCheckExercisesAr};
 if(page.id===37)return {...page,exercises:abrahamB2LanguageReviewExercisesAr};
 if(page.id===38)return {...page,vocabularyPairs:abrahamB2VocabularyChallengePairsAr};
 if(page.id===39)return {...page,vocabulary:arabicGlossary};
 if(page.id===40)return {...page,exercises:arabicFinalChallenge};
 return page;
});
export const pages:PageData[]=abrahamB2PagesAr;
