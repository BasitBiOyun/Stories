import type { BookData, Exercise, PageData } from '../../../types';

import { mosesB2Pages as rawMosesB2Pages } from './en/pages';
import {
  mosesB2FinalChallengeExercises,
  mosesB2KnowledgeCheckExercises,
  mosesB2QuickChallenges,
  mosesB2VocabularyChallengePairs,
} from './en/exercises';
import { mosesB2LanguageFocusExercises } from './en/languageFocus';
import { mosesB2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import {
  mosesB2LanguageFocusExercisesPart3,
  mosesB2LanguageFocusExercisesPart4,
  mosesB2LanguageReviewExercises,
} from './en/languageFocus3';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide } from './en/selfStudyGuide';

import { pages as rawMosesB2PagesAr } from './ar/pages';
import {
  mosesB2FinalChallengeExercisesAr,
  mosesB2KnowledgeCheckExercisesAr,
  mosesB2QuickChallengesAr,
  mosesB2VocabularyChallengePairsAr,
} from './ar/exercises';
import { mosesB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesB2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import {
  mosesB2LanguageFocusExercisesArPart3,
  mosesB2LanguageFocusExercisesArPart4,
  mosesB2LanguageReviewExercisesAr,
} from './ar/languageFocus3';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 24 }, (_, index) => index + 1));
const STORAGE_BASE = 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/';
const IMAGE_TOKENS = ['',
  '56fc134a-cdf0-4b42-8e16-45eb9ca06c8b','a3812fa5-fe4c-4e40-b2ec-72c2f789a451','34ae67a1-2514-4cb2-bf9a-2cd519fc30d4','eb2e0b66-db4e-46ac-8e1e-c51f5ed8871c','ddb12468-059a-42bb-9e06-9e0c35c0abc4','ca8146a7-3856-4465-90c0-5f8b2aae08fb','ad1d3e13-6de0-4039-b10c-40e614b5e1fa','db47b6e8-42a5-4b0f-b12d-2fbf0954f1a3','5b070a5c-de08-4a18-beb8-2a9e32393301','ad54e0bf-d71f-4f96-b6ca-4bfe4a2a3999','5f17bd1f-fd3c-42b6-8c7e-5fb754947e0f','cee91ed0-849c-4d0f-8639-4f20e3f554ad','5f03c11a-6834-450d-835c-ca919fa8b585','4f44b5f1-0e50-4952-81a4-62f1d94e74a8','c6380e4e-dde1-4e40-abdb-685797ad560e','a8961826-9a59-4ea4-9339-219d8f49db02','c5c4f5b0-3709-4354-958d-7da3695b074d','67df034f-b106-4024-8206-0ac05bab639f','d942d39a-d09f-400f-8e86-692c963443bf','74415857-f5f3-4536-bf56-72e27ecc34e0','1790ef59-49f4-412f-8696-2ffdb5dfc493','645abbdf-fc63-43fa-bb71-3affa988fac0','ff045137-d9a3-474a-89cf-49293b022a88','5fec4ebc-efd7-48b2-9912-c45235fbd333'
];
const AR_AUDIO_TOKENS = ['',
  'd4931324-b778-4471-88ae-64c4abb6118d','c69e1455-6ffa-48b7-adbc-02647f69cb06','25d48968-47f7-4365-8fa1-9f96553e8e7d','e44d7e9c-0207-4ed9-bf69-55b85b17319a','367ac8a5-acca-4633-9fec-a16c662612e4','d7d40280-f49d-4db1-a518-3818d0de0505','e980f377-6d1d-44e0-bb5d-24d252c6bf6a','04c75502-02ba-4fc9-bf3e-22b6bf4e3223','62612320-62ec-4c85-afdf-49abc572a91a','bd5ffc06-c808-43e3-86d7-df2f8a8cf6aa','0d1f6d42-fbb9-4521-982a-024daf59740d','a96ee0c7-433f-48d8-838a-40d898134c58','7d078ed7-e208-4114-9237-147962006e9d','ccb58850-2178-4608-ab82-f71c9af3c5e5','a638154c-d175-485d-9afc-5e2e25e92797','253706e7-bdb2-4852-8112-ed376a4dadc6','5db4d849-e4eb-483e-a4e3-9ccad0744c84','d130c9d9-5d2d-47a0-a120-91e7dd65bd3a','d20a5e16-2ef9-4b94-9859-f32273dbc7e7','09021201-8934-46c7-be6c-358c27546ff5','320a3122-c152-49ec-8b73-920c63bfbe60','eaa8795d-8c04-4570-8fa9-ddc4a65eeb60','07eb83c6-ffea-4655-9ec4-0b65cacfd3f9','7c6e1b99-b159-4c2e-bcab-743a427020a7'
];
const HOTSPOT_COORDS: Record<number, [number, number, number, number]> = {
  1:[28,36,72,58],2:[34,63,68,34],3:[25,52,74,42],4:[38,32,66,65],5:[22,44,77,56],6:[31,68,70,30],
  7:[26,35,73,62],8:[36,57,64,28],9:[24,64,76,38],10:[33,31,69,67],11:[27,48,75,70],12:[40,66,62,34],
  13:[23,30,78,54],14:[35,69,67,40],15:[29,43,71,65],16:[37,34,63,71],17:[25,60,74,32],18:[32,28,70,61],
  19:[21,55,79,37],20:[39,62,65,29],21:[28,41,72,68],22:[34,70,67,36],23:[24,33,76,59],24:[38,54,62,73],
};

type VocabPair = [string, string, string, string];
const V: Record<number, VocabPair[]> = {
  4: [
    ['growing population','A population whose size is increasing over time.','الْعَدَدِ الْمُتَزَايِدِ','عدد السكان الذي يزداد مع مرور الوقت.'],
    ['miraculously','In a way that appears to result from extraordinary divine intervention.','بِأُعْجُوبَةٍ','بطريقة خارقة للمألوف توحي بتدخل إلهي.'],
    ['Coptic language','The historical Egyptian language associated with the Coptic tradition.','اللُّغَةِ الْقِبْطِيَّةِ','اللغة التاريخية المرتبطة بالتراث القبطي في مصر.'],
    ['salvation','Deliverance from serious danger, destruction, or oppression.','نَجَاةَ','الخلاص من خطر شديد أو هلاك أو ظلم.'],
    ['regularly','Repeated according to a consistent pattern or frequency.','بِانْتِظَامٍ','بصورة متكررة وفق نمط ثابت أو متقارب.'],
  ],
  5: [
    ['tyrant','A ruler who uses power harshly and without fair limits.','طَاغِيَةً','حاكم يتجاوز حدود السلطة ويستخدمها لقهر الناس دون عدل.'],
    ['absolute power','Political control exercised without meaningful limits or shared authority.','سُلْطَةٍ مُطْلَقَةٍ','سيطرة سياسية لا تخضع لقيود حقيقية أو مشاركة في القرار.'],
    ['despotic','Relating to harsh rule based on the unchecked will of one ruler.','الْمُسْتَبِدُّونَ','متعلق بحكم فردي قاس يفرض إرادته دون رقابة.'],
    ['vision','A dream or mental image understood as carrying a significant message.','رُؤْيَا','حلم أو صورة ذهنية تُفهم على أنها تحمل دلالة مهمة.'],
    ['paganism','Religious belief or practice centred on multiple deities or idols.','الْوَثَنِيَّةَ','اعتقاد أو ممارسة دينية تقوم على عبادة آلهة متعددة أو أصنام.'],
  ],
  6: [
    ['policy','An agreed plan or rule used to guide official decisions.','السِّيَاسَةِ','خطة أو قاعدة معتمدة لتوجيه القرارات الرسمية.'],
    ['suckle','To feed a baby directly with breast milk.','أَرْضِعِيهِ','إطعام الرضيع مباشرة من لبن الأم.'],
    ['grieve','To experience deep sorrow because of loss, fear, or suffering.','تَحْزَنِي','الشعور بحزن عميق بسبب فقد أو خوف أو معاناة.'],
    ['economic experts','Specialists who advise on resources, labour, and economic decisions.','خُبَرَاؤُهُ الِاقْتِصَادِيُّونَ','متخصصون يقدمون الرأي في الموارد والعمل والقرارات الاقتصادية.'],
    ['economically realistic','Practical when judged according to economic needs and available resources.','وَاقِعِيٌّ اقْتِصَادِيًّا','عملي وممكن عند النظر إلى الحاجات والموارد الاقتصادية.'],
  ],
  7: [
    ['persuade','To influence someone to accept an idea by giving reasons or appeals.','أَقْنَعَتْ','جعلت شخصًا يقبل فكرة باستعمال أسباب أو حجج.'],
    ['ray of light','A figurative expression for a source of hope in a difficult situation.','شُعَاعَ نُورٍ','تعبير مجازي عن مصدر للأمل في ظرف صعب.'],
    ['sterile','Unable to have biological children.','عَقِيمٌ','غير قادرة على الإنجاب.'],
    ['secret believer','A person who holds faith privately because public belief may be dangerous.','مُؤْمِنَةً فِي السِّرِّ','شخص يحافظ على إيمانه سرًا لأن إظهاره قد يكون خطرًا.'],
    ['wet nurse','A woman who breastfeeds and cares for another woman’s baby.','مُرْضِعَةٍ','امرأة ترضع طفل امرأة أخرى وتعتني به.'],
  ],
  8: [
    ['astonished','Extremely surprised by something unexpected or difficult to explain.','دُهِشَ','شعر بدهشة شديدة أمام أمر غير متوقع.'],
    ['inner strength','Emotional and moral resilience that helps a person remain steady under pressure.','قُوَّةً بَاطِنِيَّةً','قدرة نفسية وأخلاقية تساعد الإنسان على الثبات تحت الضغط.'],
    ['prophetic mission','The divinely assigned responsibility of a prophet to convey guidance.','الرِّسَالَةُ النَّبَوِيَّةُ','المسؤولية التي يكلف الله بها النبي لتبليغ الهداية.'],
    ['oppose','To resist or act against an idea, policy, or injustice.','مُعَارَضَةِ','مقاومة فكرة أو سياسة أو ظلم وعدم قبوله.'],
    ['wisdom','The ability to make sound judgments by combining knowledge and experience.','حِكْمَةً','القدرة على إصدار أحكام سليمة تجمع بين المعرفة والخبرة.'],
  ],
  10: [
    ['wronged myself','Recognized that one’s own action had caused moral wrongdoing.','ظَلَمْتُ نَفْسِي','أقر بأن فعله ألحق بنفسه خطأً أخلاقيًا.'],
    ['troublemaker','A person who repeatedly creates conflict or disorder.','غَوِيٌّ','شخص يكرر إثارة النزاع والمشكلات.'],
    ['criminals','People who commit serious offences or unlawful acts.','الْمُجْرِمِينَ','أشخاص يرتكبون جرائم أو أفعالًا خطيرة مخالفة للحق.'],
    ['seize','To take hold of someone suddenly and forcefully.','يَبْطِشَ','الإمساك بشخص أو مهاجمته بقوة وبشكل مفاجئ.'],
    ['do right','To act in a morally correct and constructive way.','الْمُصْلِحِينَ','العمل بما هو صحيح والسعي إلى الإصلاح.'],
  ],
  11: [
    ['taking counsel','Discussing a serious matter collectively before making a decision.','يَأْتَمِرُونَ','التشاور في أمر مهم قبل اتخاذ قرار.'],
    ['Zalimeen','A Qur’anic term used here for people characterized by wrongdoing and oppression.','الظَّالِمِينَ','الذين يتصفون بالظلم والعدوان على حقوق الآخرين.'],
    ['inhabited','Occupied by people who live permanently or regularly in a place.','مَأْهُولَةٍ','مكان يسكنه الناس بصورة دائمة أو منتظمة.'],
    ['companion','A person who accompanies another during a journey or period of life.','رَفِيقٌ','شخص يرافق غيره في سفر أو مرحلة من الحياة.'],
    ['pursuit','The act of following someone closely in order to catch them.','الْمُطَارَدَةِ','ملاحقة شخص عن قرب بقصد الوصول إليه أو الإمساك به.'],
  ],
  13: [
    ['harmonious','Characterized by peaceful, balanced, and cooperative relationships.','مُتَنَاغِمَةٍ','متصفة بعلاقات سلمية ومتوازنة ومتعاونة.'],
    ['in person','By meeting or speaking with someone directly rather than through another person.','بِنَفْسِهِ','بالمقابلة المباشرة دون وسيط.'],
    ['unfortunate','Involving events that cause difficulty, loss, or sadness.','الْمُؤْسِفَةَ','متعلق بأحداث تسبب صعوبة أو خسارة أو حزنًا.'],
    ['grateful','Feeling appreciation for help or kindness received.','مُمْتَنٌّ','شاعر بالتقدير للمساعدة أو الإحسان الذي تلقاه.'],
    ['invitation','A request asking someone to come to a place or take part in something.','الدَّعْوَةِ','طلب موجه لشخص للحضور أو المشاركة في أمر.'],
  ],
  17: [
    ['monotheism','Belief in and worship of one God alone.','التَّوْحِيدُ','الإيمان بإله واحد وعبادته وحده.'],
    ['descendant','A person belonging to a later generation of a particular ancestor.','ذُرِّيَّةِ','شخص من نسل سابق ينتمي إلى جيل لاحق.'],
    ['successor','Someone who follows another person in a role, mission, or tradition.','خَلَفًا','من يأتي بعد غيره ويتابع دوره أو رسالته.'],
    ['greater signs','Extraordinary signs presented as clear evidence of divine power.','آيَاتِنَا الْكُبْرَىٰ','آيات عظيمة تُظهر بوضوح القدرة الإلهية.'],
    ['desires','Strong personal wants that can influence judgment and behaviour.','هَوَاهُ','رغبات شخصية قوية قد تؤثر في الحكم والسلوك.'],
  ],
  18: [
    ['delivered the message','Communicated an important religious message directly to its intended recipient.','تَبْلِيغِ الرِّسَالَةِ','إيصال رسالة دينية مهمة مباشرة إلى من وُجهت إليه.'],
    ['mercy','Compassion combined with forgiveness and care for others.','رَحْمَتِهِ','رحمة تجمع بين العطف والمغفرة والرعاية.'],
    ['permission','Formal or explicit approval allowing an action to take place.','الْإِذْنَ','موافقة واضحة تسمح بحدوث فعل معين.'],
    ['defenseless','Unable to protect oneself effectively from danger or attack.','لَا حِيلَةَ لَهُ','عاجز عن حماية نفسه بصورة فعالة من الخطر.'],
    ['mockingly','In a way that ridicules or treats another person with scorn.','بِسُخْرِيَةٍ','بطريقة تهزأ بالآخر أو تنظر إليه باستخفاف.'],
  ],
  19: [
    ['upbringing','The conditions, care, and influences through which a child is raised.','تَرْبِيَتِهِ','الظروف والرعاية والتأثيرات التي ينشأ فيها الطفل.'],
    ['irony','Language that conveys a meaning different from or critical of its literal wording.','سُخْرِيَتِهِ','أسلوب يحمل معنى مخالفًا للظاهر أو ينتقده بطريقة غير مباشرة.'],
    ['imprison','To confine a person in prison and remove their freedom of movement.','الْمَسْجُونِينَ','حجز شخص في السجن وحرمانه من حرية الحركة.'],
    ['revenge','Harm done in return for a previous injury or offence.','الِانْتِقَامِ','إيقاع الضرر ردًا على أذى أو إساءة سابقة.'],
    ['convincing','Strong enough in evidence or reasoning to persuade someone.','مُقْنِعٍ','قوي في حجته أو دليله إلى درجة تدفع إلى الاقتناع.'],
  ],
  20: [
    ['brightness','The intensity or quality of visible light.','بَرِيقِهَا','شدة الضوء أو وضوح لمعانه.'],
    ['detain','To keep a person in official custody or prevent them from leaving.','يَقُومَ بِحَبْسِ','احتجاز شخص ومنعه من المغادرة تحت سلطة رسمية.'],
    ['impact','A strong effect that changes how people think, feel, or act.','تَأْثِيرِ','أثر قوي يغير طريقة التفكير أو الشعور أو التصرف.'],
    ['competition','An organized situation in which sides try to prove greater ability or success.','الْمُنَافَسَةِ','موقف منظم يحاول فيه أطراف إثبات تفوقهم أو نجاحهم.'],
    ['illusion','A false appearance that seems real even though it is not.','خِدَاعٍ بَصَرِيٍّ','مظهر مضلل يبدو حقيقيًا مع أنه ليس كذلك.'],
  ],
  21: [
    ['transformed','Changed completely from one form or state into another.','تَتَحَوَّلُ','تغيرت من شكل أو حالة إلى أخرى بصورة واضحة.'],
    ['disappointment','The feeling produced when an expected result fails to happen.','خَيْبَةَ أَمَلٍ','الشعور الناتج عن عدم تحقق نتيجة كانت متوقعة.'],
    ['responsibility','A position or duty for which a person is expected to be accountable.','الْمَسْؤُولِيَّةِ','واجب أو منصب يتحمل صاحبه تبعاته ويحاسب عليه.'],
    ['manipulate','To influence people or events strategically, often for one’s own purpose.','يَتَحَكَّمُوا','التأثير في الناس أو الأحداث بمهارة لتحقيق غرض معين.'],
    ['subjects','People who live under the political authority of a ruler.','رَعَايَاهُ','أشخاص يعيشون تحت السلطة السياسية لحاكم.'],
  ],
  22: [
    ['genocide','The deliberate attempt to destroy a national, ethnic, or other human group.','إِبَادَةِ','محاولة متعمدة للقضاء على جماعة بشرية أو تدميرها.'],
    ['mobilized','Organized and prepared people or forces for immediate action.','حَشَدَ','جمع الأفراد أو القوات وهيأهم للتحرك.'],
    ['trapped','Unable to escape because all safe routes are blocked.','مَحْصُورِينَ','عاجزون عن الهرب بسبب انغلاق طرق النجاة.'],
    ['parted','Separated into two sides so that a passage opened between them.','انْفَلَقَ','انشق إلى جانبين وظهر ممر بينهما.'],
    ['pursued','Followed closely with the intention of catching someone.','مُطَارَدَتِهِمْ','ملاحقة أشخاص عن قرب بقصد اللحاق بهم.'],
    ['inherit','To receive or take possession of something left by others.','وَأَوْرَثْنَاهَا','تلقي ما تركه آخرون والانتقال إلى امتلاكه.'],
  ],
  23: [
    ['extraordinary','Far beyond what is ordinary or normally expected.','الْخَارِقَ','متجاوز للمألوف أو لما يُتوقع عادة.'],
    ['inspired','Received or conveyed guidance understood as coming from a divine source.','أَوْحَيْنَا','تلقي أو إيصال هداية مصدرها إلهي.'],
    ['drowned','Died because water prevented normal breathing.','أَغْرَقْنَا','ماتوا في الماء بسبب تعذر التنفس.'],
    ['miracle','An extraordinary event understood as a sign of divine power.','الْمُعْجِزَةَ','حدث خارق يُفهم بوصفه دليلاً على القدرة الإلهية.'],
    ['midway','At approximately the middle point of a route or process.','مُنْتَصَفِ','عند النقطة الواقعة تقريبًا في وسط طريق أو عملية.'],
    ['idols','Physical objects or images treated as objects of worship.','الْأَصْنَامَ','أشياء أو تماثيل مادية تُتخذ موضوعًا للعبادة.'],
  ],
  24: [
    ['oppression','Cruel or unjust control exercised over people or a group.','ظُلْمِ','سيطرة قاسية أو غير عادلة تمارس على أفراد أو جماعة.'],
    ['rebel','To reject or act against legitimate authority or a command.','تَعْصُونَ','رفض أمر مشروع أو مخالفته بالفعل.'],
    ['worship','To express religious devotion and submission to a deity.','عِبَادَةِ','إظهار الخضوع والتعبد الديني لمعبود.'],
    ['Torah','The scripture described in the story as being given to Moses by Allah.','التَّوْرَاةَ','الكتاب الذي يذكر النص أن الله أنزله على موسى عليه السلام.'],
    ['calf','A young cow; here, the statue around which some Israelites gathered in worship.','الْعِجْلِ','ولد البقرة، ويشير هنا إلى التمثال الذي عُبد.'],
    ['determination','The quality of continuing firmly despite difficulty or resistance.','الْعَزْمِ','الثبات على الاستمرار رغم الصعوبة أو المقاومة.'],
  ],
};

const EN_FIXES: Record<number, [string, string][]> = {
  1: [['(BC: Before Christ (Milâttan Önce),', '(BC: Before Christ [Milâttan Önce]),']],
  4: [['ancient people of Egypt) The journey', 'ancient people of Egypt). The journey']],
  5: [["He oppressed the Children of Israel (known as the offspring of Prophet Jacob (Ya’kub (pbuh)).", "He oppressed the Children of Israel, known as the offspring of Prophet Jacob (Ya’kub (pbuh))."]],
  8: [['Allah gave Moses with perfect health', 'Allah gave Moses perfect health']],
  9: [['and the other of his enemy.', 'and the other of his enemy. The man of his own party asked him for help against his enemy, so Moses struck him with his fist and killed him.”']],
  10: [['The man of his own party asked him for help against his enemy, so Moses struck him with his fist and killed him. ', '']],
  15: [['sheep.”Allah asked', 'sheep.” Allah asked']],
  22: [["Moses said: ‘Truly!", "Moses said: ‘Truly! With me is my Lord; He will guide me.’”"]],
  23: [["With me is my Lord; He will guide me.’ ", '']],
};
const AR_FIXES: Record<number, [string, string][]> = {
  22: [['قَالَ كَلَّا»', 'قَالَ: «كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ»']],
  23: [['«كَلَّا إِنَّ مَعِيَ رَبِّي سَيَهْدِينِ». ', '']],
};

const imageUrl = (n: number) => `${STORAGE_BASE}Moses%2Fb2%2Fimages%2Fmoses_b2_ch${n}-clean.png?alt=media&token=${IMAGE_TOKENS[n]}`;
const arabicAudioUrl = (n: number) => {
  const fileName = n <= 12 ? `chapter ${n}.mp3` : `chapter${n}.mp3`;
  return `${STORAGE_BASE}Moses%2Fb2%2Faudio%2Farabic_audio%2F${encodeURIComponent(fileName)}?alt=media&token=${AR_AUDIO_TOKENS[n]}`;
};
const fixText = (content: string, fixes: [string, string][] = []) => fixes.reduce((text, [from, to]) => text.replace(from, to), content);

const cleanRuntimePage = (page: PageData, isArabic: boolean): PageData => {
  const cleaned: PageData = { ...page };
  delete cleaned.exercises;
  delete cleaned.sequencingItems;
  delete cleaned.vocabularyPairs;
  delete cleaned.syncPoints;

  if (!STORY_IDS.has(page.id)) return { ...cleaned, image: '' };

  const override = V[page.id];
  const vocabulary = override
    ? override.map(pair => isArabic ? { word: pair[2], definition: pair[3] } : { word: pair[0], definition: pair[1] })
    : (cleaned.vocabulary ?? []).slice(0, 6).map(item => ({ ...item, definition: item.definition.replace(/\bcruely\b/g, 'cruelly') }));
  const c = HOTSPOT_COORDS[page.id];
  const oldHotspots = (cleaned.hotspots ?? []).slice(0, 2);
  const hotspots = [0, 1].map(i => {
    const old = oldHotspots[i] ?? {
      id: `h${page.id}-${i + 1}`,
      x: c[i * 2],
      y: c[i * 2 + 1],
      title: isArabic ? 'فكرة من الفصل' : 'Chapter Insight',
      description: isArabic ? 'فكرة مرتبطة مباشرة بأحداث هذا الفصل.' : 'An idea directly connected with this chapter.',
    };
    return { ...old, id: `h${page.id}-${i + 1}`, x: c[i * 2], y: c[i * 2 + 1] };
  });
  const content = fixText(cleaned.content ?? '', (isArabic ? AR_FIXES : EN_FIXES)[page.id]);

  return {
    ...cleaned,
    image: imageUrl(page.id),
    audioUrl: isArabic ? arabicAudioUrl(page.id) : '',
    content,
    vocabulary,
    hotspots,
    animatedWords: undefined,
  };
};

const mosesB2Pages = rawMosesB2Pages.map(page => cleanRuntimePage(page, false));
const mosesB2PagesAr = rawMosesB2PagesAr.map(page => cleanRuntimePage(page, true));

const englishFinalFeedback = {
  correct: 'Correct. Your answer is supported by evidence across the story.',
  incorrect: 'Not yet. Reconnect the claim with evidence from the relevant chapters and try again.',
};

const arabicFinalFeedback = {
  correct: 'صحيح. إجابتك مدعومة بأدلة مترابطة من القصة.',
  incorrect: 'ليس بعد. اربط الفكرة بالأدلة من الفصول ذات الصلة ثم حاول مرة أخرى.',
};

const finalMatching = (
  id: string,
  title: string,
  instructions: string,
  question: string,
  pairs: { left: string; right: string }[],
  explanation: string,
  feedback: { correct: string; incorrect: string },
): Exercise => ({
  id,
  type: 'matching',
  title,
  instructions,
  question,
  matchingPairs: pairs,
  correctAnswer: Object.fromEntries(pairs.map(pair => [pair.left, pair.right])),
  explanation,
  feedback,
});

const finalFill = (
  id: string,
  title: string,
  instructions: string,
  question: string,
  fillBlanksText: string,
  correctAnswer: string,
  explanation: string,
  feedback: { correct: string; incorrect: string },
): Exercise => ({
  id,
  type: 'fill-blanks',
  title,
  instructions,
  question,
  fillBlanksText,
  correctAnswer,
  explanation,
  feedback,
});

const englishFinalOverrides: Record<string, Exercise> = {
  'mo-b2-f6': finalMatching(
    'mo-b2-f6',
    'Final Challenge',
    'Match each idea with the cross-chapter evidence or issue that best fits it.',
    'Match each person or group with the action that most clearly reveals a value or stance.',
    [
      { left: 'Asiye', right: 'Uses compassion and persuasion to protect the baby inside a violent political environment' },
      { left: 'Moses at the well', right: 'Serves others despite his own exhaustion and thirst' },
      { left: 'The magicians', right: 'Let expert recognition of the sign outweigh political safety' },
      { left: 'Moses at the sea', right: 'Expresses trust before a visible route of escape appears' },
    ],
    'The four actions connect compassion, service, evidence-based conviction, and trust with observable choices across different stages of the story.',
    englishFinalFeedback,
  ),
  'mo-b2-f7': finalMatching(
    'mo-b2-f7',
    'Final Challenge',
    'Match each idea with the cross-chapter evidence or issue that best fits it.',
    'Match each conflict with the deeper issue it develops across the narrative.',
    [
      { left: 'Nile projects and forced labor', right: 'Resource control is tied to exploited manpower and political authority' },
      { left: 'Moses asks for the Israelites’ release', right: 'Freedom and lordship confront Pharaoh’s claim to own people' },
      { left: 'The contest with the magicians', right: 'Evidence and expert recognition confront managed public illusion' },
      { left: 'Calf worship after liberation', right: 'Physical freedom does not remove the need for continuing moral guidance' },
    ],
    'These conflicts synthesize political, evidential, and moral problems rather than retesting isolated chapter facts.',
    englishFinalFeedback,
  ),
  'mo-b2-f8': finalFill(
    'mo-b2-f8',
    'Final Challenge',
    'Complete the synthesis with the most meaningful story language.',
    'Complete the cross-chapter analysis of Pharaoh’s rule.',
    'The Nile chapters connect control of resources and manpower with Pharaoh’s political [blank].',
    'authority',
    'The early chapters repeatedly connect control of the Nile, large projects, forced labor, administration, and Pharaoh’s authority.',
    englishFinalFeedback,
  ),
  'mo-b2-f9': finalFill(
    'mo-b2-f9',
    'Final Challenge',
    'Complete the synthesis with the most meaningful story language.',
    'Complete the synthesis of the story after physical liberation.',
    'The ending shows that escape from oppression does not remove the continuing need for [blank].',
    'guidance',
    'After the Red Sea, the narrative continues with questions of worship, the Torah, disobedience, and Moses’s continuing effort to guide his people.',
    englishFinalFeedback,
  ),
};

const arabicFinalOverrides: Record<string, Exercise> = {
  'mo-b2-ar-f6': finalMatching(
    'mo-b2-ar-f6',
    'التحدي الختامي',
    'صل كل فكرة بالدليل أو القضية العابرة للفصول التي تناسبها.',
    'صل كل شخصية أو جماعة بالفعل الذي يكشف موقفًا أو قيمة بوضوح.',
    [
      { left: 'آسية', right: 'تستعمل الرحمة والإقناع لحماية الطفل داخل بيئة سياسية عنيفة' },
      { left: 'موسى عند البئر', right: 'يخدم الآخرين رغم تعبه وعطشه' },
      { left: 'السحرة', right: 'يقدمون معرفتهم بالآية على سلامتهم السياسية' },
      { left: 'موسى عند البحر', right: 'يعبر عن الثقة قبل ظهور طريق مادي للنجاة' },
    ],
    'تجمع الأفعال بين الرحمة والخدمة والاقتناع المبني على التمييز والثقة عبر مراحل مختلفة من القصة.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f7': finalMatching(
    'mo-b2-ar-f7',
    'التحدي الختامي',
    'صل كل فكرة بالدليل أو القضية العابرة للفصول التي تناسبها.',
    'صل كل صراع بالقضية الأعمق التي يطورها السرد.',
    [
      { left: 'مشروعات النيل والعمل القسري', right: 'ترتبط السيطرة على المورد باستغلال قوة العمل والسلطة السياسية' },
      { left: 'طلب موسى إطلاق بني إسرائيل', right: 'تواجه الحرية والربوبية ادعاء فرعون ملك الناس' },
      { left: 'المسابقة مع السحرة', right: 'يواجه الدليل وتمييز الخبراء إدارة الخداع أمام الجمهور' },
      { left: 'عبادة العجل بعد النجاة', right: 'لا تنهي الحرية الجسدية الحاجة إلى الهداية الأخلاقية المستمرة' },
    ],
    'تجمع المطابقات مشكلات سياسية ومعرفية وأخلاقية بدل إعادة اختبار حقائق فصل واحد.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f8': finalFill(
    'mo-b2-ar-f8',
    'التحدي الختامي',
    'أكمل التركيب بأهم لغة تحمل المعنى في القصة.',
    'أكمل التحليل العابر للفصول لحكم فرعون.',
    'تربط فصول النيل بين التحكم في الموارد وقوة العمل وبين [blank] فرعون السياسية.',
    'سلطة',
    'تربط الفصول الأولى بين النيل والمشروعات والعمل القسري والإدارة وسلطة فرعون.',
    arabicFinalFeedback,
  ),
  'mo-b2-ar-f9': finalFill(
    'mo-b2-ar-f9',
    'التحدي الختامي',
    'أكمل التركيب بأهم لغة تحمل المعنى في القصة.',
    'أكمل تركيب نهاية القصة بعد النجاة الجسدية.',
    'تظهر النهاية أن الخلاص من الظلم لا يلغي الحاجة المستمرة إلى [blank].',
    'الهداية',
    'بعد البحر يستمر السرد في قضايا العبادة والتوراة والعصيان وجهد موسى المتواصل في هداية قومه.',
    arabicFinalFeedback,
  ),
};

const mosesB2QuickChallengesPolished = mosesB2QuickChallenges;
const mosesB2KnowledgeCheckExercisesPolished = mosesB2KnowledgeCheckExercises;
const mosesB2VocabularyChallengePairsPolished = mosesB2VocabularyChallengePairs;
const mosesB2FinalChallengeExercisesPolished: Exercise[] = mosesB2FinalChallengeExercises.map(
  exercise => englishFinalOverrides[exercise.id] ?? exercise,
);

const mosesB2QuickChallengesArPolished = mosesB2QuickChallengesAr;
const mosesB2KnowledgeCheckExercisesArPolished = mosesB2KnowledgeCheckExercisesAr;
const mosesB2VocabularyChallengePairsArPolished = mosesB2VocabularyChallengePairsAr;
const mosesB2FinalChallengeExercisesArPolished: Exercise[] = mosesB2FinalChallengeExercisesAr.map(
  exercise => arabicFinalOverrides[exercise.id] ?? exercise,
);

const englishLanguageFocus = {
  ...mosesB2LanguageFocusExercises,
  ...mosesB2LanguageFocusExercisesPart2,
  ...mosesB2LanguageFocusExercisesPart3,
  ...mosesB2LanguageFocusExercisesPart4,
};

const arabicLanguageFocus = {
  ...mosesB2LanguageFocusExercisesAr,
  ...mosesB2LanguageFocusExercisesArPart2,
  ...mosesB2LanguageFocusExercisesArPart3,
  ...mosesB2LanguageFocusExercisesArPart4,
};

const attachEnglishLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = englishLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesPolished[page.id] ? [mosesB2QuickChallengesPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsPolished };
  if (page.id === 29) return {
    ...page,
    title: 'B2 Language Review',
    content: 'Review and use the source-framing, stance, cause, contrast, condition, focus and discourse patterns developed across all twenty-four chapters.',
    exercises: mosesB2LanguageReviewExercises,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesPolished };
  return page;
});

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      exercises: mosesB2QuickChallengesArPolished[page.id] ? [mosesB2QuickChallengesArPolished[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 25) return { ...page, exercises: mosesB2KnowledgeCheckExercisesArPolished };
  if (page.id === 26) return { ...page, vocabularyPairs: mosesB2VocabularyChallengePairsArPolished };
  if (page.id === 29) return {
    ...page,
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ تأطير المصدر والموقف والسبب والمقابلة والشرط وتركيز المعلومة والعلاقات الخطابية التي تطورت عبر الفصول الأربعة والعشرين.',
    exercises: mosesB2LanguageReviewExercisesAr,
  };
  if (page.id === 30) return { ...page, exercises: mosesB2FinalChallengeExercisesArPolished };
  return page;
});

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: attachEnglishLearning(mosesB2Pages),
  teacherGuide: mosesB2TeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadata,
  selfStudyGuide: mosesB2SelfStudyGuide,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachArabicLearning(mosesB2PagesAr),
  teacherGuide: mosesB2TeacherGuideAr,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataAr,
  selfStudyGuide: mosesB2SelfStudyGuideAr,
};

export const mosesB2BookData = mosesB2BookDataEn;