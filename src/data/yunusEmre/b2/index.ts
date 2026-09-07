import type { BookData, Exercise, PageData } from '../../../types';
import { yunusB2Pages } from './en/pages';
import { yunusEmreB2PagesAr } from './ar/pages';
import { yunusB2QuickChallenges, yunusB2VocabularyChallengePairs, yunusB2FinalChallengeExercises } from './en/exercises';
import { yunusB2QuickChallengesAr, yunusB2VocabularyChallengePairsAr, yunusB2FinalChallengeExercisesAr } from './ar/exercises';
import { yunusB2LanguageFocusExercises } from './en/languageFocus';
import { yunusB2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import { yunusB2LanguageFocusExercisesPart3, yunusB2LanguageFocusExercisesPart4, yunusB2LanguageReviewExercises } from './en/languageFocus3';
import { yunusB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { yunusB2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import { yunusB2LanguageFocusExercisesArPart3, yunusB2LanguageFocusExercisesArPart4, yunusB2LanguageReviewExercisesAr } from './ar/languageFocus3';
import { yunusB2TeacherGuide, yunusB2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB2SelfStudyGuide, yunusB2StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB2TeacherGuideAr, yunusEmreB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB2SelfStudyGuideAr, yunusEmreB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

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

const knowledgeFeedbackAr = {
  correct: 'صحيح. الإجابة مدعومة بدليل من القصة.',
  incorrect: 'ليست بعد. ارجع إلى دليل الفصل المحدد ثم حاول مرة أخرى.',
};
const knowledgeMcAr = (id: string, question: string, options: string[], correctAnswer: number, explanation: string): Exercise => ({
  id, type: 'multiple-choice', title: 'اختبار المعرفة', instructions: 'اختر أفضل إجابة وفق دليل النص.', question, options, correctAnswer, explanation, feedback: knowledgeFeedbackAr,
});
const yunusB2ManualKnowledgeCheckExercisesAr: Exercise[] = [
  knowledgeMcAr('yu-b2-ar-mk1','أي مبدأ أخلاقي يذكره الفصل الأول صراحة ضمن سلوك الصوفي؟',['مقابلة الشر باللطف وعدم التعلق بالمال والمكانة والشهرة.','السعي إلى الشهرة دليلاً على التقدم الروحي.','ترك الكرم من أجل المحافظة على الممتلكات.'],0,'يذكر الفصل صراحة مقابلة الشر باللطف وعدم تعليق الأهمية على متاع الدنيا مثل المال والمكانة والشهرة.'),
  knowledgeMcAr('yu-b2-ar-mk2','وفقاً للرأي السائد الذي ينقله الفصل الثاني، ما التاريخان المذكوران لميلاد يونس إمره ووفاته؟',['1240–41 و1320–1321.','1220–1237 و1243.','1237–1246 و1308.'],0,'يحافظ السؤال على قيد المصدر: الفصل يقول «وفقاً للرأي السائد» ثم يذكر 1240–41 للميلاد و1320–1321 للوفاة.'),
  knowledgeMcAr('yu-b2-ar-mk3','ما الإنجاز الملموس الذي ينسبه الفصل الثالث إلى علاء الدين الأول في فترة قوة السلاجقة؟',['أنشأ أسطولاً بحرياً في البحر المتوسط والبحر الأسود.','أسس الدولة الإيلخانية في إيران.','قاد انتفاضة البابائيين سنة 1240.'],0,'ينص الفصل على أنه وسع حدود البلاد وأنشأ أسطولاً في البحر الأبيض المتوسط والبحر الأسود.'),
  knowledgeMcAr('yu-b2-ar-mk4','كيف يحدد الفصل الرابع العلاقة بين بابا إسحاق وبابا إلياس؟',['كان بابا إسحاق مريداً لبابا إلياس.','كان بابا إلياس سلطاناً سلجوقياً يعمل تحت قيادة بابا إسحاق.','كانا قائدين مغوليين في كوسه داغ.'],0,'يذكر الفصل أن تمرد 1240 كان بقيادة بابا إسحاق الذي كان مريداً لبابا إلياس.'),
  knowledgeMcAr('yu-b2-ar-mk5','ما التفصيل الجغرافي الذي يقدمه الفصل الخامس عن موقع معركة كوسه داغ؟',['وقعت على بعد نحو 80 كم شمال شرقي سيفاس.','وقعت على ساحل البحر المتوسط.','وقعت داخل أرضروم في أواخر 1242.'],0,'يضع النص كوسه داغ على بعد 80 كم شمال شرقي سيفاس، أما هجوم أرضروم فهو حدث سابق منفصل.'),
  knowledgeMcAr('yu-b2-ar-mk6','كيف يصف الفصل السادس الدولة العثمانية في زمن ظهور الإمارات الأناضولية الصغيرة؟',['كانت لا تزال إمارة صغيرة.','كانت قد حكمت الأناضول كلها بالفعل.','كانت مركز الإدارة الإيلخانية.'],0,'يقول الفصل صراحة إن الدولة العثمانية كانت في ذلك الوقت لا تزال إمارة صغيرة.'),
  knowledgeMcAr('yu-b2-ar-mk7','ما المصادر التي يذكرها الفصل السابع صراحة كأساس لفهم يونس إمره للتصوف؟',['القرآن والسنة وأفكار الصوفيين المسلمين السابقين وتجاربهم.','الممارسات السياسية للبلاط السلجوقي فقط.','التقاليد الشفوية للقبائل الرحل فقط.'],0,'ينص الفصل على القرآن والسنة، إضافة إلى أفكار الصوفيين المسلمين الذين سبقوه وتجاربهم.'),
  knowledgeMcAr('yu-b2-ar-mk8','في عرض أنواع العقل الثلاثة في الفصل 10، ما وظيفة العقل الكلي؟',['يهدي الإنسان إلى التصرف بالتقوى.','يشرح فقط كيفية تدبير الحياة الدنيوية.','يلغي حاجة الإنسان إلى القلب في طريق النجاة.'],0,'يذكر الفصل 10 أن العقل الكلي يهدي المرء إلى التصرف بالتقوى، بينما يرتبط العقل العملي بفهم العالم وتدبير الحياة الدنيوية.'),
];

const finalFeedbackEn={correct:'Correct. The synthesis is supported across the book.',incorrect:'Not yet. Reconnect the relevant chapters and try again.'};
const finalReplacementEn: Record<string, Exercise> = {
'yu-b2-f6': {id:'yu-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each historical condition with its wider consequence.',question:'Connect the historical system across chapters.',matchingPairs:[{left:'Babai unrest and weak governance',right:'Internal instability deepens before Kösedağ'},{left:'Kösedağ defeat',right:'Mongol military victory opens the way to devastation and domination'},{left:'Increasing Mongol payments',right:'Political dependency becomes economic pressure on state and population'},{left:'Mongol pressure across eastern regions',right:'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'}],correctAnswer:{'Babai unrest and weak governance':'Internal instability deepens before Kösedağ','Kösedağ defeat':'Mongol military victory opens the way to devastation and domination','Increasing Mongol payments':'Political dependency becomes economic pressure on state and population','Mongol pressure across eastern regions':'Shaykhs and dervishes move toward Anatolia and influence its religious-cultural life'},explanation:'The book links internal crisis, defeat, dependency and cultural movement rather than treating them as isolated facts.',feedback:finalFeedbackEn},
'yu-b2-f7': {id:'yu-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each idea with its cross-chapter implication.',question:'Connect Yunus’s moral-spiritual framework across the later chapters.',matchingPairs:[{left:'Tawhid and love',right:'Unity becomes a foundation for relation to Creator and creation'},{left:'Heart and intellect',right:'Inner sensitivity and reason are expected to support one another'},{left:'Awareness of death',right:'Mortality can orient a person toward meaningful righteous life'},{left:'Virtues and harmful traits',right:'Moral teaching becomes observable choices rather than abstract labels'}],correctAnswer:{'Tawhid and love':'Unity becomes a foundation for relation to Creator and creation','Heart and intellect':'Inner sensitivity and reason are expected to support one another','Awareness of death':'Mortality can orient a person toward meaningful righteous life','Virtues and harmful traits':'Moral teaching becomes observable choices rather than abstract labels'},explanation:'The later chapters build a connected moral framework from theology, inward life, mortality and action.',feedback:finalFeedbackEn},
'yu-b2-f8': {id:'yu-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book historical relationship.',question:'Complete the synthesis.',fillBlanksText:'Yunus’s poetic voice becomes socially meaningful in a period marked by political crisis, Mongol domination and a search for [blank].',correctAnswer:'meaning',explanation:'Chapter 7 explicitly links people’s search for meaning in hard times with Yunus’s use of poetry as a Sûfî medium.',feedback:finalFeedbackEn},
'yu-b2-f9': {id:'yu-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book legacy relationship.',question:'Complete the synthesis.',fillBlanksText:'The book presents Yunus’s lasting legacy as both literary and [blank], connecting poetry with guidance for moral life.',correctAnswer:'moral',explanation:'The final chapters and conclusion explicitly present the poems as literary works and moral guidance.',feedback:finalFeedbackEn},
};

const finalFeedbackAr={correct:'صحيح. التركيب مدعوم عبر فصول الكتاب.',incorrect:'ليس بعد. أعد وصل الفصول ذات الصلة ثم حاول مرة أخرى.'};
const finalReplacementAr: Record<string, Exercise> = {
'yu-b2-ar-f6': {id:'yu-b2-ar-f6',type:'matching',title:'التحدي النهائي',instructions:'طابق الحالة التاريخية بنتيجتها الأوسع.',question:'اربط النظام التاريخي عبر الفصول.',matchingPairs:[{left:'اضطراب البابائيين وضعف الإدارة',right:'تعمق الاضطراب الداخلي قبل كوسه داغ'},{left:'هزيمة كوسه داغ',right:'فتح النصر المغولي الطريق للدمار والهيمنة'},{left:'تزايد المدفوعات للمغول',right:'تحولت التبعية السياسية إلى ضغط اقتصادي على الدولة والناس'},{left:'الضغط المغولي في المناطق الشرقية',right:'تحرك الشيوخ والدراويش نحو الأناضول وتأثر المجال الديني والثقافي'}],correctAnswer:{'اضطراب البابائيين وضعف الإدارة':'تعمق الاضطراب الداخلي قبل كوسه داغ','هزيمة كوسه داغ':'فتح النصر المغولي الطريق للدمار والهيمنة','تزايد المدفوعات للمغول':'تحولت التبعية السياسية إلى ضغط اقتصادي على الدولة والناس','الضغط المغولي في المناطق الشرقية':'تحرك الشيوخ والدراويش نحو الأناضول وتأثر المجال الديني والثقافي'},explanation:'يربط الكتاب الأزمة الداخلية والهزيمة والتبعية والحركة الثقافية في سلسلة واحدة.',feedback:finalFeedbackAr},
'yu-b2-ar-f7': {id:'yu-b2-ar-f7',type:'matching',title:'التحدي النهائي',instructions:'طابق الفكرة بأثرها المركب عبر الفصول.',question:'اربط الإطار الأخلاقي والروحي في الفصول الأخيرة.',matchingPairs:[{left:'التوحيد والمحبة',right:'تصبح الوحدة أساساً للعلاقة بالخالق والمخلوق'},{left:'القلب والعقل',right:'يتعاون الحس الباطن والفهم العقلي في طريق النجاة'},{left:'تذكر الموت',right:'يمكن للوعي بالفناء أن يوجه إلى حياة ذات معنى وصلاح'},{left:'الفضائل والصفات الضارة',right:'تتحول الأخلاق إلى اختيارات سلوكية لا أسماء مجردة'}],correctAnswer:{'التوحيد والمحبة':'تصبح الوحدة أساساً للعلاقة بالخالق والمخلوق','القلب والعقل':'يتعاون الحس الباطن والفهم العقلي في طريق النجاة','تذكر الموت':'يمكن للوعي بالفناء أن يوجه إلى حياة ذات معنى وصلاح','الفضائل والصفات الضارة':'تتحول الأخلاق إلى اختيارات سلوكية لا أسماء مجردة'},explanation:'تبني الفصول الأخيرة إطاراً مترابطاً من العقيدة والباطن والموت والعمل.',feedback:finalFeedbackAr},
'yu-b2-ar-f8': {id:'yu-b2-ar-f8',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل العلاقة التاريخية الجامعة.',question:'أكمل الخلاصة.',fillBlanksText:'يصبح صوت يونس الشعري ذا معنى اجتماعي في زمن الأزمة والهيمنة المغولية وبحث الناس عن [blank].',correctAnswer:'المعنى',explanation:'يربط الفصل السابع بحث الناس عن معنى في الأيام الصعبة باستخدام يونس الشعر وسيلة صوفية.',feedback:finalFeedbackAr},
'yu-b2-ar-f9': {id:'yu-b2-ar-f9',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل علاقة الإرث الجامعة.',question:'أكمل الخلاصة.',fillBlanksText:'يقدم الكتاب إرث يونس المستمر بوصفه أدبياً و[blank] في الوقت نفسه، إذ تصل القصائد بالأخلاق والهداية.',correctAnswer:'أخلاقياً',explanation:'تقدم الفصول الأخيرة الشعر عملاً أدبياً ودليلاً أخلاقياً للأجيال.',feedback:finalFeedbackAr},
};

const yunusB2QuickChallengesPolished = yunusB2QuickChallenges;
const yunusB2VocabularyChallengePairsPolished = yunusB2VocabularyChallengePairs;
const yunusB2FinalChallengeExercisesPolished: Exercise[] = yunusB2FinalChallengeExercises.map(exercise => finalReplacementEn[exercise.id] ?? exercise);
const yunusB2QuickChallengesArPolished = yunusB2QuickChallengesAr;
const yunusB2VocabularyChallengePairsArPolished = yunusB2VocabularyChallengePairsAr;
const yunusB2FinalChallengeExercisesArPolished: Exercise[] = yunusB2FinalChallengeExercisesAr.map(exercise => finalReplacementAr[exercise.id] ?? exercise);

type StoryVocabulary = NonNullable<PageData['vocabulary']>;

const yunusB2CanonicalVocabularyEn: Record<number, StoryVocabulary> = {
  1: [
    { word: 'Islamic mysticism', definition: 'a spiritual tradition within Islam focused on inner purification and closeness to Allah' },
    { word: 'crucial', definition: 'extremely important to the development or outcome of something' },
  ],
  2: [
    { word: 'contemporary', definition: 'living or existing during the same historical period' },
    { word: 'solidarity', definition: 'unity and mutual support among members of a community' },
  ],
  3: [
    { word: 'fine arts', definition: 'creative arts valued for aesthetic expression, such as poetry' },
    { word: 'coincided', definition: 'happened during the same period as another event or condition' },
  ],
  4: [
    { word: 'decline', definition: 'a gradual process of becoming weaker or less effective' },
    { word: 'nomadic', definition: 'living by moving from place to place rather than settling permanently' },
  ],
  5: [
    { word: 'false retreat and circling tactic', definition: 'a military strategy that uses a planned withdrawal to draw an enemy into encirclement' },
    { word: 'captive', definition: 'a person taken and held by force, especially after conflict' },
  ],
  6: [
    { word: 'dependent state', definition: 'a state whose political freedom is limited by a stronger power' },
    { word: 'relief', definition: 'assistance that reduces hardship, pressure, or suffering' },
  ],
  7: [
    { word: 'medium', definition: 'a means or form through which ideas are communicated' },
    { word: 'Sunnah', definition: 'the Prophet Muhammad’s sayings, actions, and approvals used as guidance in Islam' },
  ],
  8: [
    { word: 'tawhid', definition: 'the belief in the absolute Oneness of Allah' },
    { word: 'manifestations', definition: 'visible or recognizable expressions of an underlying reality' },
  ],
  9: [
    { word: 'harmony', definition: 'a condition in which people or ideas exist together in peaceful agreement' },
    { word: 'core', definition: 'the central and most essential part of an idea or system' },
  ],
  10: [
    { word: 'manifests', definition: 'becomes visible, evident, or expressed' },
    { word: 'intellect', definition: 'the capacity for reason and understanding, described here as a spiritual and moral faculty' },
  ],
  11: [
    { word: 'piety', definition: 'religious and moral conduct shaped by awareness of Allah and commitment to what is right' },
    { word: 'salvation', definition: 'spiritual deliverance or being saved from a harmful moral or spiritual state' },
  ],
  12: [
    { word: 'greed', definition: 'an excessive desire to gain or possess more than one needs' },
    { word: 'humility', definition: 'the quality of avoiding pride and not considering oneself superior to others' },
  ],
  13: [
    { word: 'legacy', definition: 'a lasting influence or contribution passed on to later generations' },
    { word: 'arrogance', definition: 'an attitude of excessive pride or superiority toward others' },
  ],
};

const yunusB2CanonicalVocabularyAr: Record<number, StoryVocabulary> = {
  1: [
    { word: 'التَّصَوُّفِ الْإِسْلَامِيِّ', definition: 'طريق روحي وأخلاقي داخل الإسلام يركز على تزكية الباطن والقرب من الله.' },
    { word: 'مِحْوَرِيًّا', definition: 'بصورة أساسية شديدة التأثير في تطور أمر أو نتيجته.' },
  ],
  2: [
    { word: 'مُعَاصِرًا', definition: 'عاش أو وُجد في الفترة التاريخية نفسها.' },
    { word: 'التَّضَامُنَ', definition: 'وحدة أفراد المجتمع ودعم بعضهم بعضًا.' },
  ],
  3: [
    { word: 'الْفُنُونِ الْجَمِيلَةِ', definition: 'فنون إبداعية تقوم على التعبير الجمالي، مثل الشعر.' },
    { word: 'تَزَامَنَ', definition: 'حدث في الفترة نفسها التي حدث فيها أمر آخر.' },
  ],
  4: [
    { word: 'التَّدَهْوُرِ', definition: 'عملية تدريجية يصبح فيها الوضع أضعف أو أقل استقرارًا.' },
    { word: 'الرُّحَّلُ', definition: 'جماعات تنتقل من مكان إلى آخر ولا تستقر بصورة دائمة.' },
  ],
  5: [
    { word: 'خُطَّةَ الانْسِحَابِ الْكَاذِبِ وَالتَّطْوِيقِ', definition: 'استراتيجية عسكرية تقوم على التراجع المخطط لجذب الخصم ثم تطويقه.' },
    { word: 'أَسْرَى', definition: 'أشخاص أُخذوا واحتُجزوا بالقوة، ولا سيما بعد القتال.' },
  ],
  6: [
    { word: 'دَوْلَةً تَابِعَةً', definition: 'دولة تكون حريتها السياسية محدودة بسبب خضوعها لقوة أقوى.' },
    { word: 'التَّخْفِيفِ', definition: 'مساعدة أو إجراء يقلل المشقة أو الضغط أو المعاناة.' },
  ],
  7: [
    { word: 'وَسِيلَةً', definition: 'أداة أو طريقة تُنقل من خلالها الأفكار والمعاني.' },
    { word: 'السُّنَّةِ', definition: 'أقوال النبي محمد وأفعاله وتقريراته التي تُتخذ هديًا في الإسلام.' },
  ],
  8: [
    { word: 'التَّوْحِيدِ', definition: 'الإيمان بوحدانية الله المطلقة.' },
    { word: 'مَظَاهِرَ', definition: 'صور أو تعبيرات يظهر من خلالها معنى أو حقيقة كامنة.' },
  ],
  9: [
    { word: 'الانْسِجَامَ', definition: 'حالة من التوافق والتعايش دون نزاع.' },
    { word: 'جَوْهَرِ', definition: 'الجزء المركزي والأكثر أهمية في فكرة أو نظام.' },
  ],
  10: [
    { word: 'يَتَجَلَّى', definition: 'يظهر أو يصبح واضحًا في صورة يمكن إدراكها.' },
    { word: 'الْعَقْلِ', definition: 'ملكة الفهم والاستدلال، ويعرضها الفصل بوصفها قدرة ذات بعد أخلاقي وروحي.' },
  ],
  11: [
    { word: 'التَّقْوَى', definition: 'سلوك ديني وأخلاقي يقوم على مراقبة الله والالتزام بما هو صواب.' },
    { word: 'النَّجَاةَ', definition: 'الخلاص الروحي أو التحرر من حالة أخلاقية أو روحية ضارة.' },
  ],
  12: [
    { word: 'الطَّمَعِ', definition: 'رغبة مفرطة في امتلاك أو تحصيل أكثر مما يحتاجه الإنسان.' },
    { word: 'التَّوَاضُعِ', definition: 'ترك الكبر وعدم النظر إلى النفس على أنها أعلى من الآخرين.' },
  ],
  13: [
    { word: 'إِرْثًا', definition: 'أثر أو إسهام باقٍ ينتقل إلى الأجيال اللاحقة.' },
    { word: 'الْكِبْرِ', definition: 'شعور مفرط بالتفوق يدفع إلى التعالي على الآخرين.' },
  ],
};

const STORY_IDS = new Set(Array.from({ length: 13 }, (_, index) => index + 1));
const englishLanguageFocus: Record<number, Exercise[]> = { ...yunusB2LanguageFocusExercises, ...yunusB2LanguageFocusExercisesPart2, ...yunusB2LanguageFocusExercisesPart3, ...yunusB2LanguageFocusExercisesPart4 };
const arabicLanguageFocus: Record<number, Exercise[]> = { ...yunusB2LanguageFocusExercisesAr, ...yunusB2LanguageFocusExercisesArPart2, ...yunusB2LanguageFocusExercisesArPart3, ...yunusB2LanguageFocusExercisesArPart4 };

const buildPages = (pages: PageData[], quickChallenges: Record<number, Exercise>, languageFocus: Record<number, Exercise[]>, knowledgeCheck: Exercise[], vocabularyPairs: { word: string; meaning: string }[], languageReview: Exercise[], finalChallenge: Exercise[], language: 'en' | 'ar'): PageData[] => pages.map((page) => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = languageFocus[page.id];
    const canonicalVocabulary = language === 'ar' ? yunusB2CanonicalVocabularyAr[page.id] : yunusB2CanonicalVocabularyEn[page.id];
    return {
      ...page,
      animatedWords: undefined,
      vocabulary: canonicalVocabulary ?? page.vocabulary,
      exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 15) return { ...page, exercises: knowledgeCheck };
  if (page.id === 16) return { ...page, vocabularyPairs };
  if (page.id === 19) return { ...page, title: language === 'ar' ? 'مراجعة اللغة B2' : 'B2 Language Review', content: language === 'ar' ? 'راجع واستعمل لغة نسبة المصادر والسبب والنتيجة والاستدراك والمقارنة والتفسير والضرورة والإمكان التي تطورت عبر الفصول الثلاثة عشر.' : 'Review and use the source-framing, cause-result, concession, comparison, interpretation, necessity and possibility patterns developed across all thirteen chapters.', exercises: languageReview };
  if (page.id === 20) return { ...page, exercises: finalChallenge };
  return page;
});

const englishPages = buildPages(yunusB2Pages, yunusB2QuickChallengesPolished, englishLanguageFocus, yunusB2ManualKnowledgeCheckExercises, yunusB2VocabularyChallengePairsPolished, yunusB2LanguageReviewExercises, yunusB2FinalChallengeExercisesPolished, 'en');
const arabicPages = buildPages(yunusEmreB2PagesAr, yunusB2QuickChallengesArPolished, arabicLanguageFocus, yunusB2ManualKnowledgeCheckExercisesAr, yunusB2VocabularyChallengePairsArPolished, yunusB2LanguageReviewExercisesAr, yunusB2FinalChallengeExercisesArPolished, 'ar');

export const yunusEmreB2BookDataEn: BookData = { id: 'yunusEmre-b2-en', title: 'Yunus Emre: History, Poetry, and Moral Thought (B2)', level: 'B2', baseFontSize: 13, pages: englishPages, teacherGuide: yunusB2TeacherGuide, teacherGuideMetadata: yunusB2TeacherGuideMetadata, selfStudyGuide: yunusB2SelfStudyGuide, studentGuideMetadata: yunusB2StudentGuideMetadata };
export const yunusEmreB2BookDataAr: BookData = { id: 'yunusEmre-b2-ar', title: 'يونس إمره: التاريخ والشعر والفكر الأخلاقي (B2)', level: 'B2', baseFontSize: 14, pages: arabicPages, teacherGuide: yunusEmreB2TeacherGuideAr, teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataAr, selfStudyGuide: yunusEmreB2SelfStudyGuideAr, studentGuideMetadata: yunusEmreB2StudentGuideMetadataAr };
export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
