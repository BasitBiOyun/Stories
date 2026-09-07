import type { BookData, Exercise, PageData, TeacherGuideMetadata } from '../../../types';

import { meccaB2Pages as rawMeccaB2Pages } from './en/pages';
import {
  meccaB2QuickChallenges,
  meccaB2VocabularyChallengePairs,
  meccaB2FinalChallengeExercises,
} from './en/exercises';
import { meccaB2LanguageFocusExercises } from './en/languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './en/languageFocus2';
import {
  meccaB2LanguageFocusExercisesPart3,
  meccaB2LanguageFocusExercisesPart4,
  meccaB2LanguageReviewExercises,
} from './en/languageFocus3';
import { meccaB2TeacherGuide, meccaB2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB2SelfStudyGuide, meccaB2StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB2PagesAr as rawMeccaB2PagesAr } from './ar/pages';
import {
  meccaB2QuickChallengesAr,
  meccaB2VocabularyChallengePairsAr,
  meccaB2FinalChallengeExercisesAr,
} from './ar/exercises';
import { meccaB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { meccaB2LanguageFocusExercisesArPart2 } from './ar/languageFocus2';
import {
  meccaB2LanguageFocusExercisesArPart3,
  meccaB2LanguageFocusExercisesArPart4,
  meccaB2LanguageReviewExercisesAr,
} from './ar/languageFocus3';
import { meccaB2TeacherGuideAr, meccaB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));

const VOCAB_INDEXES: Record<number, number[]> = {
  1:[0,1,2,3,4,6], 2:[0,1,2,3,4,9], 3:[0,1,2,3,4], 4:[0,1,2,4,5],
  5:[0,1,2,3,4,5], 6:[0,1,2,3,4,5], 7:[0,1,2,3,4,6], 8:[0,1,2,3,8,9],
  9:[1,2,3,5,7,8], 10:[0,1,2,3,4,6], 11:[0,1,2,4,5,6], 12:[0,1,2,3,4],
  13:[0,1,2,3,4], 14:[0,1,2,3,4], 15:[0,1,2,3,4], 16:[0,1,2,3,4], 17:[0,1,2,3,4],
};

const EN_WORD_OVERRIDES: Record<number, Record<string, string>> = {
  1:{ superpower:'superpowers' },
  5:{ caravan:'caravans', boost:'boosting', merchant:'merchants' },
  6:{ 'trade festival':'trade festivals' },
  7:{ capitalist:'capitalists' },
  8:{ orphan:'orphans' },
  10:{ ancestor:'ancestors' },
  12:{ Hanif:'Hanifs', mediator:'mediators', omen:'omens' },
};

const HOTSPOT_COORDS: Record<number, [number, number, number, number]> = {
  1:[24,38,73,62], 2:[29,65,74,34], 3:[23,58,69,31], 4:[31,36,76,64], 5:[22,67,67,39],
  6:[27,32,72,68], 7:[25,55,78,35], 8:[32,70,70,42], 9:[21,43,75,66], 10:[30,29,69,61],
  11:[26,64,77,37], 12:[23,35,71,70], 13:[33,57,76,30], 14:[20,69,68,41], 15:[28,40,74,65],
  16:[24,61,79,33], 17:[31,34,70,68],
};

const AR_AUDIO_TOKENS = [
  '',
  '7800a9c7-4fb1-46f7-9638-0276a9011741','eb3ccf54-8ba9-482c-be0c-0a1f7a1eacb9','565da269-5ac5-4d83-bedb-281ea2b319b6',
  '7bc0b87c-af57-4d8f-8f39-06cbb277939d','8724e808-5bab-400a-8ddf-c3d24c6e703b','7048862f-00d4-4f58-8231-4afa70b6a14d',
  '9f472831-3175-4de7-99c3-59210aeebf9b','de4790a0-ce6b-436b-94c4-35c07ce72ed3','e69f95e7-083d-4017-948f-3647326d5cd0',
  'ab69d8e9-fa8d-401c-8f7c-ef2570564aac','0ae22f49-f359-43d6-a062-eb7a21011748','d2d8c492-ded9-4696-b522-097430f563e7',
  'b15bdd69-fc40-45d8-9b64-a8c0b6b93420','d5d29f6a-ea98-4eee-b15f-bf22eeae35e1','05707d6d-373f-4f08-a0e9-dfdbc3ba917e',
  '13c6024b-137f-4af2-84d3-966a8a84ad16','02204468-c6d4-48a4-b511-7a03162f2148',
];

const EN_DEFINITION_OVERRIDES: Record<string, string> = {
  superpower:'A state with enough political, military, and economic influence to shape events far beyond its own borders.',
  rivalry:'Sustained competition between powers seeking greater influence, advantage, or control.',
  'political unity':'The condition in which separate groups operate under a shared political authority or governing structure.',
  revelation:'Divine guidance communicated by Allah to a prophet.',
  conquest:'The acquisition of control over a territory through military force.',
  barbarism:'A condition characterized by severe violence, cruelty, and the breakdown of civilized restraint.',
  oppressed:'Subjected to persistent unjust treatment or control by a more powerful person or group.',
  'moral decline':'A deterioration in the ethical standards and conduct expected within a society.',
  civilized:'Organized according to developed social institutions, norms, and forms of public order.',
  reconstruct:'To build or form something again after it has been damaged, lost, or altered.',
  pilgrimage:'A journey made to a sacred place for religious purposes.',
  idolatry:'The religious practice of worshipping idols or treating them as objects of devotion.',
  extensive:'Large in scale, range, or degree.',
  usury:'The practice of lending money on exploitative or religiously prohibited interest terms.',
  aristocracy:'A socially dominant upper class whose status is based on wealth, lineage, or inherited influence.',
  capitalist:'A person who owns or controls capital and uses it to generate profit.',
  defenseless:'Lacking sufficient means, power, or protection to resist harm or exploitation.',
  righteous:'Morally upright and committed to justice or correct conduct.',
  humiliation:'A state of being made to feel degraded or stripped of dignity.',
  institution:'An established social, economic, religious, or political structure with an organized role in society.',
  tribalism:'Strong loyalty to one’s tribe that can override broader principles of fairness or universal justice.',
  mediator:'A person or intermediary positioned between two parties to facilitate contact or influence.',
  interconnected:'Linked so that changes in one area affect or depend on developments in another.',
  authority:'The recognized power or right to command, decide, or govern.',
  prestigious:'Associated with high social respect, influence, or status.',
  prophethood:'The divinely appointed mission and status of a prophet.',
  radical:'Producing or involving fundamental change to an existing system or structure.',
  exploitation:'The unfair use of people, labor, or resources for another party’s advantage.',
  boycott:'An organized refusal of social or economic relations used to exert pressure on a person or group.',
  starvation:'Severe deprivation caused by an extreme or prolonged lack of food.',
  hostility:'Strong and active opposition, often involving resentment or aggression.',
  'tribal fanaticism':'Extreme loyalty to tribal identity that suppresses independent judgment and can justify injustice.',
  stateless:'Lacking the recognized protection and legal belonging normally provided by a political community or state.',
  oppression:'Systematic cruel or unjust treatment imposed by those with greater power.',
  immorality:'Conduct that violates accepted moral principles or ethical standards.',
  'human honor':'The inherent dignity and moral worth that belongs to every human being.',
  arrogance:'An exaggerated sense of superiority that leads a person to undervalue others.',
};

const EN_FIXES: Record<number, [string, string][]> = {
  2:[["widely did not have justice, order, and peace", "did not widely have justice, order, and peace"]],
  3:[["Medina, He (pbuh) said", "Medina, he (pbuh) said"]],
  7:[["Due to the big money ownership in the hands of certain individuals", "Due to the concentration of money in the hands of certain individuals"]],
  11:[["poets praised conflict rather than peace and war instead of peace", "poets praised conflict and war rather than peace"]],
  15:[["Because they knew that the Prophet’s call to monotheism", "They knew that the Prophet’s call to monotheism"]],
  17:[["a more fair and peaceful place", "a fairer and more peaceful place"],["not only a past time", "not only a past era"]],
};

const storageUrl = (path: string, token: string) =>
  `https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/${encodeURIComponent(path)}?alt=media&token=${token}`;

const fixText = (text: string, fixes?: [string, string][]) =>
  (fixes ?? []).reduce((value, [from, to]) => value.replace(from, to), text);

const standardizePage = (page: PageData, language: 'en' | 'ar'): PageData => {
  const clean: PageData = { ...page };
  delete clean.exercises;
  delete clean.sequencingItems;
  delete clean.vocabularyPairs;
  delete clean.syncPoints;
  delete clean.timedChunks;

  if (!STORY_IDS.has(page.id)) {
    if (typeof clean.image === 'string' && clean.image.includes('picsum.photos')) clean.image = '';
    return clean;
  }

  const indexes = VOCAB_INDEXES[page.id] ?? [];
  const vocabulary = indexes
    .map(index => page.vocabulary?.[index])
    .filter((item): item is NonNullable<PageData['vocabulary']>[number] => Boolean(item))
    .map(item => {
      if (language !== 'en') return item;
      const definition = EN_DEFINITION_OVERRIDES[item.word] ?? item.definition;
      const word = EN_WORD_OVERRIDES[page.id]?.[item.word] ?? item.word;
      return { ...item, word, definition };
    });

  const c = HOTSPOT_COORDS[page.id];
  const hotspots = (page.hotspots ?? []).slice(0, 2).map((hotspot, index) => ({
    ...hotspot,
    id: `h${page.id}-${index + 1}`,
    x: c[index * 2],
    y: c[index * 2 + 1],
  }));

  const englishPage = rawMeccaB2Pages.find(candidate => candidate.id === page.id);
  return {
    ...clean,
    image: englishPage?.image ?? clean.image,
    audioUrl: language === 'ar'
      ? storageUrl(`mecca/b2/audio/arabic_audio/B2 CHAPTER ${page.id}.mp3`, AR_AUDIO_TOKENS[page.id])
      : englishPage?.audioUrl ?? clean.audioUrl,
    content: language === 'en' ? fixText(clean.content ?? '', EN_FIXES[page.id]) : clean.content,
    vocabulary,
    hotspots,
    animatedWords: undefined,
  };
};

const meccaB2Pages = rawMeccaB2Pages.map(page => standardizePage(page, 'en'));
const meccaB2PagesAr = rawMeccaB2PagesAr.map(page => standardizePage(page, 'ar'));

const englishLanguageFocus: Record<number, Exercise[]> = {
  ...meccaB2LanguageFocusExercises,
  ...meccaB2LanguageFocusExercisesPart2,
  ...meccaB2LanguageFocusExercisesPart3,
  ...meccaB2LanguageFocusExercisesPart4,
};

const arabicLanguageFocus: Record<number, Exercise[]> = {
  ...meccaB2LanguageFocusExercisesAr,
  ...meccaB2LanguageFocusExercisesArPart2,
  ...meccaB2LanguageFocusExercisesArPart3,
  ...meccaB2LanguageFocusExercisesArPart4,
};

const knowledgeFeedbackEn = {
  correct: 'Correct. Your answer is supported by the story evidence.',
  incorrect: 'Not yet. Return to the relevant chapter, find the evidence, and try again.',
};

const knowledgeMcEn = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
): Exercise => ({
  id,
  type: 'multiple-choice',
  title: 'Knowledge Check',
  instructions: 'Choose the best answer supported by the story.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback: knowledgeFeedbackEn,
});

const meccaB2ManualKnowledgeCheckExercises: Exercise[] = [
  knowledgeMcEn('me-b2-mk1','What detail does the book use to show the scale of Quraysh long-distance trade?',['The annual summer and winter caravans could include up to 2,500 camels','Every caravan consisted of exactly ten camels','Trade was limited to goods carried by individual travelers'],0,'Chapter 5 says the annual summer and winter journeys could use caravans numbering up to 2,500 camels, illustrating the scale of organized trade.'),
  knowledgeMcEn('me-b2-mk2','Which pair correctly reflects two destinations or connections in Quraysh trade?',['Egypt was an important caravan destination, while Abyssinia was connected by sea','Constantinople was the only destination and sea trade did not exist','All trade remained inside the Arabian Peninsula'],0,'Chapter 5 identifies Egypt as an important destination and describes maritime trade relations with Abyssinia.'),
  knowledgeMcEn('me-b2-mk3','Besides high lending rates, what behaviors does the social-class chapter say also pushed people into debt?',['Drinking and gambling','Pilgrimage and prayer','Poetry and genealogy'],0,'Chapter 7 adds that widespread drinking and gambling were among the reasons people repeatedly fell into debt.'),
  knowledgeMcEn('me-b2-mk4','How old was Prophet Muhammad (as) when he attended the meeting connected with Hilfü’l-Fudûl?',['Twenty years old','Forty years old','Fifty-two years old'],0,'Chapter 8 states that Prophet Muhammad (as) was twenty years old when he attended the meeting that formed Hilfü’l-Fudûl.'),
  knowledgeMcEn('me-b2-mk5','Why did the chapter say many tribes placed special value on having male children?',['Physical fighting strength and the resulting tribal protection and prestige were highly valued','Only sons were allowed to participate in trade fairs','Male children were required for pilgrimage'],0,'Chapter 10 connects the value placed on sons with physical strength, fighting capacity, tribal protection and respect among tribes.'),
  knowledgeMcEn('me-b2-mk6','Which statement is directly supported by the chapter on slavery?',['Slaves were treated as economic property and could also serve as displays of wealth or protection in war','Slavery had no economic role in Mecca','Slaves were described as the city’s most politically powerful class'],0,'Chapter 11 describes slavery as an economic institution and says enslaved people were used for labor, personal service, displays of wealth and protection in war.'),
  knowledgeMcEn('me-b2-mk7','Which practice does the religious-life chapter describe alongside pilgrimage and idol worship?',['People sought omens before taking action','People rejected every form of pilgrimage','Soothsayers were forbidden from making predictions'],0,'Chapter 12 says superstitious beliefs were widespread and that people sought omens before doing things.'),
  knowledgeMcEn('me-b2-mk8','What economic distinction does the Quraysh-and-power chapter say the Quran introduced?',['Trade is lawful while usury is unlawful','Both trade and usury are unlawful','Usury is lawful while trade is unlawful'],0,'Chapter 14 contrasts the Quraysh view of usury with the Quranic distinction that trade is lawful and usury is unlawful.'),
];

const knowledgeFeedbackAr = {
  correct: 'صحيح. إجابتك مدعومة بدليل من القصة.',
  incorrect: 'ليس بعد. ارجع إلى الفصل المناسب، وابحث عن الدليل، ثم حاول مرة أخرى.',
};

const knowledgeMcAr = (
  id: string,
  question: string,
  options: string[],
  correctAnswer: number,
  explanation: string,
): Exercise => ({
  id,
  type: 'multiple-choice',
  title: 'اختبار المعرفة',
  instructions: 'اختر أفضل إجابة مدعومة بالقصة.',
  question,
  options,
  correctAnswer,
  explanation,
  feedback: knowledgeFeedbackAr,
});

const meccaB2ManualKnowledgeCheckExercisesAr: Exercise[] = [
  knowledgeMcAr('me-b2-ar-mk1','ما التفصيل الذي يستخدمه الكتاب لإظهار ضخامة تجارة قريش البعيدة؟',['كان عدد جمال قوافل رحلتي الصيف والشتاء السنويتين يصل إلى 2500 جمل','كانت كل قافلة تتكون من عشرة جمال فقط','اقتصرت التجارة على بضائع يحملها أفراد منفردون'],0,'يذكر الفصل الخامس أن قوافل رحلتي الصيف والشتاء السنويتين كانت قد تصل إلى 2500 جمل، وهو دليل على حجم التجارة المنظمة.'),
  knowledgeMcAr('me-b2-ar-mk2','أي زوج يعكس بصورة صحيحة اثنتين من صلات قريش التجارية؟',['كانت مصر وجهة مهمة للقوافل، وكانت الحبشة مرتبطة بالتجارة البحرية','كانت القسطنطينية الوجهة الوحيدة ولم توجد تجارة بحرية','بقيت كل التجارة داخل شبه الجزيرة العربية'],0,'يذكر الفصل الخامس مصر بوصفها وجهة مهمة، كما يذكر علاقات قريش التجارية البحرية مع الحبشة.'),
  knowledgeMcAr('me-b2-ar-mk3','إلى جانب فوائد الديون المرتفعة، ما السلوكان اللذان يذكر الفصل أنهما أسهما أيضاً في وقوع الناس في الديون؟',['شرب الخمر والقمار','الحج والصلاة','الشعر وحفظ الأنساب'],0,'يضيف الفصل السابع أن شيوع شرب الخمر والقمار كان من أسباب وقوع الناس المتكرر في الديون.'),
  knowledgeMcAr('me-b2-ar-mk4','كم كان عمر النبي محمد (ص) عندما حضر الاجتماع المرتبط بحلف الفضول؟',['عشرون عاماً','أربعون عاماً','اثنان وخمسون عاماً'],0,'يذكر الفصل الثامن أن النبي محمد (ص) كان في العشرين من عمره عندما حضر الاجتماع الذي ارتبط بتأسيس حلف الفضول.'),
  knowledgeMcAr('me-b2-ar-mk5','لماذا كان كثير من القبائل يعلقون أهمية خاصة على كثرة الأبناء الذكور بحسب الفصل؟',['لأن القوة البدنية والقدرة القتالية وما يرتبط بهما من حماية ومكانة قبلية كانت ذات قيمة كبيرة','لأن الذكور وحدهم كانوا يسمح لهم بدخول الأسواق','لأن الحج كان يشترط وجود أبناء ذكور'],0,'يربط الفصل العاشر تفضيل الأبناء الذكور بالقوة البدنية والقتال والحماية القبلية والمكانة بين القبائل.'),
  knowledgeMcAr('me-b2-ar-mk6','أي عبارة يدعمها مباشرة فصل الرق؟',['عومل الرقيق كملكية اقتصادية، واستُخدموا أيضاً في الخدمة والعمل وإظهار الثراء والحماية في الحرب','لم يكن للرق أي دور اقتصادي في مكة','كان الرقيق أقوى طبقة سياسية في المدينة'],0,'يصف الفصل الحادي عشر الرق بوصفه مؤسسة اقتصادية ويذكر استخدام الرقيق في العمل والخدمة وإظهار الثراء والحماية في أوقات الحرب.'),
  knowledgeMcAr('me-b2-ar-mk7','ما الممارسة التي يذكرها فصل الحياة الدينية إلى جانب الحج وعبادة الأصنام؟',['كان الناس يلتمسون الطيرة أو العلامات قبل الإقدام على الأمور','كان الناس يرفضون الحج كله','كان الكهان ممنوعين من التنبؤ بالمستقبل'],0,'يذكر الفصل الثاني عشر شيوع المعتقدات الخرافية وأن الناس كانوا يلتمسون العلامات قبل الإقدام على أفعالهم.'),
  knowledgeMcAr('me-b2-ar-mk8','ما التمييز الاقتصادي الذي يقول فصل قريش والسلطة إن القرآن قرره؟',['التجارة حلال والربا حرام','التجارة والربا كلاهما حرام','الربا حلال والتجارة حرام'],0,'يذكر الفصل الرابع عشر أن القرآن ميّز بين التجارة والربا، فاعتبر التجارة حلالاً والربا حراماً.'),
];

const finalFeedbackEn={
  correct:'Correct. Your answer synthesizes evidence from across the book.',
  incorrect:'Not yet. Reconnect the relevant chapters and distinguish the relationship being tested.'
};

const finalReplacementEn: Record<string, Exercise> = {
  'me-b2-f6': { id:'me-b2-f6',type:'matching',title:'Final Challenge',instructions:'Match each institution with the broader role it plays in the book.',question:'How do different institutions create, protect, or challenge power?',matchingPairs:[{left:'Sacred months',right:'Create safer movement that supports pilgrimage and fairs'},{left:'Tribal protection',right:'Provides security but can pressure individual conformity'},{left:'Hilfü’l-Fudûl',right:'Organizes practical resistance to injustice against vulnerable people'},{left:'Poetry as tribal media',right:'Shapes public memory, praise, blame and group identity'}],correctAnswer:{'Sacred months':'Create safer movement that supports pilgrimage and fairs','Tribal protection':'Provides security but can pressure individual conformity','Hilfü’l-Fudûl':'Organizes practical resistance to injustice against vulnerable people','Poetry as tribal media':'Shapes public memory, praise, blame and group identity'},explanation:'The book compares institutions that create security, social pressure, justice and cultural influence rather than treating power as only political office.',feedback: finalFeedbackEn },
  'me-b2-f7': { id:'me-b2-f7',type:'matching',title:'Final Challenge',instructions:'Match each group with the evidence that most carefully qualifies a broad claim.',question:'Which evidence prevents one-dimensional descriptions of Meccan society?',matchingPairs:[{left:'Women before Islam',right:'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged'},{left:'Pre-Islamic Arabs',right:'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition'},{left:'Quraysh leaders',right:'Prominence depended on status and the existing order, not simply identical levels of wealth'},{left:'Early Muslims',right:'Many vulnerable people joined despite strong pressure from established elites'}],correctAnswer:{'Women before Islam':'Experiences varied by tribe and social status, although many lower-status women were severely disadvantaged','Pre-Islamic Arabs':'Hospitality and Hilfü’l-Fudûl existed alongside serious injustice and tribal competition','Quraysh leaders':'Prominence depended on status and the existing order, not simply identical levels of wealth','Early Muslims':'Many vulnerable people joined despite strong pressure from established elites'},explanation:'B2 mastery requires qualified claims that preserve variation, contradiction and social position.',feedback: finalFeedbackEn },
  'me-b2-f8': { id:'me-b2-f8',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the whole-book synthesis with the key concept.',question:'Complete the systems relationship.',fillBlanksText:'Across the book, sacred prestige, trade wealth, tribal protection and political [blank] repeatedly reinforce one another.',correctAnswer:'authority',explanation:'The later chapters make authority a central link between economic prestige, religious status and political leadership.',feedback: finalFeedbackEn },
  'me-b2-f9': { id:'me-b2-f9',type:'fill-blanks',title:'Final Challenge',instructions:'Complete the concluding synthesis with the chapter’s own ethical language.',question:'Complete the broader meaning of Jahiliyyah.',fillBlanksText:'The conclusion treats Jahiliyyah not only as a past era but as a recurring culture shaped by human [blank], oppression and unequal worth.',correctAnswer:'arrogance',explanation:'The final chapter explicitly extends Jahiliyyah beyond one period and connects it with human arrogance, oppression and moral disorder.',feedback: finalFeedbackEn }
};

const finalFeedbackAr={
  correct:'صحيح. إجابتك تولّف أدلة من فصول متعددة.',
  incorrect:'ليس بعد. أعد وصل الفصول ذات الصلة وحدد العلاقة التي يختبرها السؤال.'
};

const finalReplacementAr: Record<string, Exercise> = {
  'me-b2-ar-f6': { id:'me-b2-ar-f6',type:'matching',title:'التحدي النهائي',instructions:'طابق كل مؤسسة بالدور الأوسع الذي تؤديه في الكتاب.',question:'كيف تنشئ المؤسسات المختلفة القوة أو تحميها أو تتحداها؟',matchingPairs:[{left:'الأشهر الحرم',right:'توفر حركة أكثر أمناً تدعم الحج والأسواق'},{left:'الحماية القبلية',right:'تمنح أمناً لكنها قد تضغط على الفرد ليتوافق مع الجماعة'},{left:'حلف الفضول',right:'ينظم مقاومة عملية للظلم دفاعاً عن الفئات الضعيفة'},{left:'الشعر بوصفه إعلاماً قبلياً',right:'يشكل الذاكرة العامة والمدح والذم وهوية الجماعة'}],correctAnswer:{'الأشهر الحرم':'توفر حركة أكثر أمناً تدعم الحج والأسواق','الحماية القبلية':'تمنح أمناً لكنها قد تضغط على الفرد ليتوافق مع الجماعة','حلف الفضول':'ينظم مقاومة عملية للظلم دفاعاً عن الفئات الضعيفة','الشعر بوصفه إعلاماً قبلياً':'يشكل الذاكرة العامة والمدح والذم وهوية الجماعة'},explanation:'يقارن الكتاب بين مؤسسات تنتج الأمن والضغط الاجتماعي والعدالة والتأثير الثقافي، فلا يحصر القوة في السلطة السياسية فقط.',feedback: finalFeedbackAr },
  'me-b2-ar-f7': { id:'me-b2-ar-f7',type:'matching',title:'التحدي النهائي',instructions:'طابق كل مجموعة بالدليل الذي يقيّد الحكم العام بدقة.',question:'أي أدلة تمنع وصف المجتمع المكي بصورة أحادية؟',matchingPairs:[{left:'النساء قبل الإسلام',right:'اختلفت التجارب بحسب القبيلة والمكانة، مع معاناة شديدة لدى كثير من نساء الطبقات الأدنى'},{left:'العرب قبل الإسلام',right:'وجدت الضيافة وحلف الفضول إلى جانب ظلم شديد ومنافسة قبلية'},{left:'قادة قريش',right:'ارتبطت مكانتهم بالنظام القائم والموقع الاجتماعي لا بدرجة واحدة من الثراء'},{left:'المسلمون الأوائل',right:'انضم كثير من الضعفاء رغم الضغط القوي من النخبة القائمة'}],correctAnswer:{'النساء قبل الإسلام':'اختلفت التجارب بحسب القبيلة والمكانة، مع معاناة شديدة لدى كثير من نساء الطبقات الأدنى','العرب قبل الإسلام':'وجدت الضيافة وحلف الفضول إلى جانب ظلم شديد ومنافسة قبلية','قادة قريش':'ارتبطت مكانتهم بالنظام القائم والموقع الاجتماعي لا بدرجة واحدة من الثراء','المسلمون الأوائل':'انضم كثير من الضعفاء رغم الضغط القوي من النخبة القائمة'},explanation:'إتقان B2 يتطلب أحكاماً مقيدة تحفظ الاختلاف والتناقض والموقع الاجتماعي.',feedback: finalFeedbackAr },
  'me-b2-ar-f8': { id:'me-b2-ar-f8',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل التوليف العام بالمفهوم المفتاحي.',question:'أكمل علاقة الأنظمة في الكتاب.',fillBlanksText:'عبر الكتاب، تتعاضد المكانة المقدسة والثروة التجارية والحماية القبلية و[blank] السياسية مراراً.',correctAnswer:'السلطة',explanation:'تجعل الفصول المتأخرة السلطة حلقة تربط المكانة الاقتصادية والدينية بالقيادة السياسية.',feedback: finalFeedbackAr },
  'me-b2-ar-f9': { id:'me-b2-ar-f9',type:'fill-blanks',title:'التحدي النهائي',instructions:'أكمل الخلاصة بلغة الفصل الأخلاقية.',question:'أكمل المعنى الأوسع للجاهلية.',fillBlanksText:'يعامل الختام الجاهلية لا بوصفها عصراً ماضياً فقط، بل ثقافة متكررة يشكلها [blank] الإنساني والظلم وانتقاص قيمة الإنسان.',correctAnswer:'الكبر',explanation:'يوسع الفصل الأخير مفهوم الجاهلية ويصلها بالكبر الإنساني والظلم والاضطراب الأخلاقي.',feedback: finalFeedbackAr }
};

const meccaB2QuickChallengesPolished = meccaB2QuickChallenges;
const meccaB2VocabularyChallengePairsPolished = meccaB2VocabularyChallengePairs;
const meccaB2FinalChallengeExercisesPolished = meccaB2FinalChallengeExercises.map(exercise => finalReplacementEn[exercise.id] ?? exercise);

const meccaB2QuickChallengesArPolished = meccaB2QuickChallengesAr;
const meccaB2VocabularyChallengePairsArPolished = meccaB2VocabularyChallengePairsAr;
const meccaB2FinalChallengeExercisesArPolished = meccaB2FinalChallengeExercisesAr.map(exercise => finalReplacementAr[exercise.id] ?? exercise);

const attachLearning = (
  pages: PageData[],
  quickChallenges: Record<number, Exercise>,
  languageFocus: Record<number, Exercise[]>,
  knowledgeCheck: Exercise[],
  vocabularyPairs: { word: string; meaning: string }[],
  languageReview: Exercise[],
  finalChallenge: Exercise[],
  language: 'en' | 'ar',
): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = languageFocus[page.id];
    return {
      ...page,
      type: 'story',
      exercises: quickChallenges[page.id] ? [quickChallenges[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 18) return { ...page, type: 'quiz', exercises: knowledgeCheck };
  if (page.id === 19) return {
    ...page,
    type: 'exercises',
    title: language === 'ar' ? 'مراجعة اللغة B2' : 'B2 Language Review',
    content: language === 'ar'
      ? 'راجع واستعمل صيغ التقييد والسبب والنتيجة والمقابلة والشرط وتركيز المعلومة والعلاقات الخطابية التي تطورت عبر الفصول السبعة عشر.'
      : 'Review and use the qualification, cause-result, contrast, condition, information-focus and discourse patterns developed across all seventeen chapters.',
    exercises: languageReview,
  };
  if (page.id === 20) return { ...page, type: 'vocabulary-match', vocabularyPairs };
  if (page.id === 22) return { ...page, type: 'final-challenge', exercises: finalChallenge };
  return page;
});

const teacherMetadataEn: TeacherGuideMetadata = {
  ...meccaB2TeacherGuideMetadata,
  targetLearners: 'B2 learners ready to analyse historical relationships, qualify claims, and defend interpretations with evidence.',
  approachDesc: 'Read and listen for evidence first; analyse causes, systems and qualifications second; produce claim-evidence-explanation responses third.',
  readingFramework: {
    before: 'Predict one relationship from the title and image, but mark it as unproven until the chapter supplies evidence.',
    during: 'Track direct facts, cause-effect links, contrasts and qualification words. Use the supplied audio to verify wording rather than inventing context.',
    after: 'Complete the Quick Challenge, identify the exact supporting evidence, then produce a short analytical or transfer response.'
  },
  globalCitizenship: {
    title: 'Justice, dignity and responsible belonging',
    description: 'Use the Mecca chapters to examine fair economic conduct, protection of vulnerable people, accurate representation of beliefs, and group loyalty that does not excuse injustice.',
    themes: [
      { title: 'Economic fairness', description: 'Evaluate financial systems by their effects on people with less power.' },
      { title: 'Human dignity', description: 'Connect the story’s treatment of weak, poor, enslaved and socially disadvantaged people with equal human worth.' },
      { title: 'Responsible belonging', description: 'Distinguish supportive community ties from tribal pressure that suppresses moral choice.' }
    ],
    actions: [
      'Challenge an unfair transaction with evidence and respectful procedure rather than humiliation.',
      'Use qualified language when describing another group’s beliefs or social conditions.',
      'Support a person facing exclusion without turning the response into status competition.'
    ]
  },
  valuesEducation: {
    title: 'Values as action',
    description: 'Values are demonstrated through observable choices linked to chapter evidence.',
    items: [
      { label: 'Justice', value: 'Move from recognizing unfairness to a fair, nonviolent response, as the Hilfü’l-Fudûl chapter illustrates.' },
      { label: 'Dignity', value: 'Refuse to rank human worth by wealth, gender, freedom status or tribal protection.' },
      { label: 'Integrity', value: 'Keep interpretations inside the limits of the source instead of exaggerating for effect.' }
    ],
    questions: ['What action would make this value visible?', 'Which chapter evidence supports that action?'],
    actions: ['Name the unfair mechanism.', 'Identify who is most vulnerable.', 'Choose a proportionate, respectful corrective action.']
  },
  homeConnection: {
    title: 'Evidence conversation at home',
    items: ['Choose one chapter claim and explain its evidence in two minutes.', 'Ask a family member for an alternative interpretation, then check whether the story supports it.']
  }
};

const teacherMetadataAr: TeacherGuideMetadata = {
  ...meccaB2TeacherGuideMetadataAr,
  targetLearners: 'متعلمين في مستوى B2 قادرين على تحليل العلاقات التاريخية وتقييد الادعاءات والدفاع عن التفسير بالدليل.',
  approachDesc: 'الدليل أولاً في القراءة والاستماع، ثم تحليل الأسباب والأنظمة والتقييد، ثم إنتاج استجابة ادعاء-دليل-تفسير.',
  readingFramework: {
    before: 'توقع علاقة واحدة من العنوان والصورة، لكن سجلها كفرضية غير مثبتة حتى يقدم الفصل الدليل.',
    during: 'تتبع الحقائق المباشرة وروابط السبب والنتيجة والمقابلات وألفاظ التقييد، واستخدم الصوت المتاح للتحقق من الصياغة.',
    after: 'أكمل التحدي السريع وحدد الدليل الدقيق ثم أنتج استجابة تحليلية أو مهمة نقل قصيرة.'
  },
  globalCitizenship: {
    title: 'العدل والكرامة والانتماء المسؤول',
    description: 'استخدم فصول مكة لتحليل الإنصاف الاقتصادي وحماية الضعفاء ودقة تمثيل المعتقدات والانتماء الذي لا يبرر الظلم.',
    themes: [
      { title: 'الإنصاف الاقتصادي', description: 'قيّم الأنظمة المالية أيضاً بأثرها على من يملكون قوة أقل.' },
      { title: 'كرامة الإنسان', description: 'اربط معاملة الضعيف والفقير والرقيق والمحروم اجتماعياً بقيمة الإنسان المتساوية.' },
      { title: 'الانتماء المسؤول', description: 'ميّز بين الروابط التي تحمي الفرد والضغط القبلي الذي يقيد الاختيار الأخلاقي.' }
    ],
    actions: [
      'واجه المعاملة غير العادلة بالدليل والإجراء المحترم لا بالإذلال.',
      'استخدم لغة مقيدة عند وصف معتقدات أو أوضاع جماعة أخرى.',
      'ساند من يتعرض للإقصاء دون تحويل المساعدة إلى منافسة على المكانة.'
    ]
  },
  valuesEducation: {
    title: 'القيم بوصفها أفعالاً',
    description: 'تظهر القيمة في اختيار قابل للملاحظة مرتبط بدليل من الفصل.',
    items: [
      { label: 'العدل', value: 'انتقل من ملاحظة الظلم إلى استجابة عادلة وسلمية كما يوضح فصل حلف الفضول.' },
      { label: 'الكرامة', value: 'لا تربط قيمة الإنسان بالثروة أو النوع أو الرق أو الحماية القبلية.' },
      { label: 'النزاهة', value: 'التزم بحدود المصدر ولا تقوِّ الادعاء لمجرد التأثير.' }
    ],
    questions: ['ما الفعل الذي يجعل هذه القيمة ظاهرة؟', 'أي دليل من الفصل يدعم ذلك الفعل؟'],
    actions: ['سمِّ آلية الظلم.', 'حدد الأكثر تعرضاً للضرر.', 'اختر استجابة متناسبة ومحترمة.']
  },
  homeConnection: {
    title: 'حوار منزلي قائم على الدليل',
    items: ['اختر ادعاء من فصل واشرح دليله في دقيقتين.', 'اطلب تفسيراً بديلاً ثم تحقق هل تدعمه القصة.']
  }
};

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: attachLearning(
    meccaB2Pages,
    meccaB2QuickChallengesPolished,
    englishLanguageFocus,
    meccaB2ManualKnowledgeCheckExercises,
    meccaB2VocabularyChallengePairsPolished,
    meccaB2LanguageReviewExercises,
    meccaB2FinalChallengeExercisesPolished,
    'en',
  ),
  teacherGuide: meccaB2TeacherGuide,
  teacherGuideMetadata: teacherMetadataEn,
  selfStudyGuide: meccaB2SelfStudyGuide,
  studentGuideMetadata: meccaB2StudentGuideMetadata,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachLearning(
    meccaB2PagesAr,
    meccaB2QuickChallengesArPolished,
    arabicLanguageFocus,
    meccaB2ManualKnowledgeCheckExercisesAr,
    meccaB2VocabularyChallengePairsArPolished,
    meccaB2LanguageReviewExercisesAr,
    meccaB2FinalChallengeExercisesArPolished,
    'ar',
  ),
  teacherGuide: meccaB2TeacherGuideAr,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: meccaB2SelfStudyGuideAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
