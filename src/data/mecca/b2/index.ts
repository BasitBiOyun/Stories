import type { BookData, Exercise, PageData, TeacherGuideMetadata } from '../../../types';

import { meccaB2Pages, meccaB2TeacherGuideMetadataPolished } from './en/pages';
import { meccaB2TeacherGuide } from './en/teacherGuide';
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

const storageUrl = (path: string, token: string) =>
  `https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/${encodeURIComponent(path)}?alt=media&token=${token}`;

const standardizeArabicPage = (page: PageData): PageData => {
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

  const vocabulary = (VOCAB_INDEXES[page.id] ?? [])
    .map(index => page.vocabulary?.[index])
    .filter((item): item is NonNullable<PageData['vocabulary']>[number] => Boolean(item));

  const c = HOTSPOT_COORDS[page.id];
  const hotspots = (page.hotspots ?? []).slice(0, 2).map((hotspot, index) => ({
    ...hotspot,
    id: `h${page.id}-${index + 1}`,
    x: c[index * 2],
    y: c[index * 2 + 1],
  }));

  const englishPage = meccaB2Pages.find(candidate => candidate.id === page.id);
  return {
    ...clean,
    image: englishPage?.image ?? clean.image,
    audioUrl: storageUrl(`mecca/b2/audio/arabic_audio/B2 CHAPTER ${page.id}.mp3`, AR_AUDIO_TOKENS[page.id]),
    vocabulary,
    hotspots,
    animatedWords: undefined,
  };
};

const meccaB2PagesAr = rawMeccaB2PagesAr.map(standardizeArabicPage);

const arabicLanguageFocus: Record<number, Exercise[]> = {
  ...meccaB2LanguageFocusExercisesAr,
  ...meccaB2LanguageFocusExercisesArPart2,
  ...meccaB2LanguageFocusExercisesArPart3,
  ...meccaB2LanguageFocusExercisesArPart4,
};

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

const finalFeedbackAr = {
  correct: 'صحيح. إجابتك تولّف أدلة من فصول متعددة.',
  incorrect: 'ليس بعد. أعد وصل الفصول ذات الصلة وحدد العلاقة التي يختبرها السؤال.',
};

const finalReplacementAr: Record<string, Exercise> = {
  'me-b2-ar-f6': {
    id:'me-b2-ar-f6', type:'matching', title:'التحدي النهائي', instructions:'طابق كل مؤسسة بالدور الأوسع الذي تؤديه في الكتاب.',
    question:'كيف تنشئ المؤسسات المختلفة القوة أو تحميها أو تتحداها؟',
    matchingPairs:[
      {left:'الأشهر الحرم',right:'توفر حركة أكثر أمناً تدعم الحج والأسواق'},
      {left:'الحماية القبلية',right:'تمنح أمناً لكنها قد تضغط على الفرد ليتوافق مع الجماعة'},
      {left:'حلف الفضول',right:'ينظم مقاومة عملية للظلم دفاعاً عن الفئات الضعيفة'},
      {left:'الشعر بوصفه إعلاماً قبلياً',right:'يشكل الذاكرة العامة والمدح والذم وهوية الجماعة'},
    ],
    correctAnswer:{
      'الأشهر الحرم':'توفر حركة أكثر أمناً تدعم الحج والأسواق',
      'الحماية القبلية':'تمنح أمناً لكنها قد تضغط على الفرد ليتوافق مع الجماعة',
      'حلف الفضول':'ينظم مقاومة عملية للظلم دفاعاً عن الفئات الضعيفة',
      'الشعر بوصفه إعلاماً قبلياً':'يشكل الذاكرة العامة والمدح والذم وهوية الجماعة',
    },
    explanation:'يقارن الكتاب بين مؤسسات تنتج الأمن والضغط الاجتماعي والعدالة والتأثير الثقافي، فلا يحصر القوة في السلطة السياسية فقط.',
    feedback: finalFeedbackAr,
  },
  'me-b2-ar-f7': {
    id:'me-b2-ar-f7', type:'matching', title:'التحدي النهائي', instructions:'طابق كل مجموعة بالدليل الذي يقيّد الحكم العام بدقة.',
    question:'أي أدلة تمنع وصف المجتمع المكي بصورة أحادية؟',
    matchingPairs:[
      {left:'النساء قبل الإسلام',right:'اختلفت التجارب بحسب القبيلة والمكانة، مع معاناة شديدة لدى كثير من نساء الطبقات الأدنى'},
      {left:'العرب قبل الإسلام',right:'وجدت الضيافة وحلف الفضول إلى جانب ظلم شديد ومنافسة قبلية'},
      {left:'قادة قريش',right:'ارتبطت مكانتهم بالنظام القائم والموقع الاجتماعي لا بدرجة واحدة من الثراء'},
      {left:'المسلمون الأوائل',right:'انضم كثير من الضعفاء رغم الضغط القوي من النخبة القائمة'},
    ],
    correctAnswer:{
      'النساء قبل الإسلام':'اختلفت التجارب بحسب القبيلة والمكانة، مع معاناة شديدة لدى كثير من نساء الطبقات الأدنى',
      'العرب قبل الإسلام':'وجدت الضيافة وحلف الفضول إلى جانب ظلم شديد ومنافسة قبلية',
      'قادة قريش':'ارتبطت مكانتهم بالنظام القائم والموقع الاجتماعي لا بدرجة واحدة من الثراء',
      'المسلمون الأوائل':'انضم كثير من الضعفاء رغم الضغط القوي من النخبة القائمة',
    },
    explanation:'إتقان B2 يتطلب أحكاماً مقيدة تحفظ الاختلاف والتناقض والموقع الاجتماعي.',
    feedback: finalFeedbackAr,
  },
  'me-b2-ar-f8': {
    id:'me-b2-ar-f8', type:'fill-blanks', title:'التحدي النهائي', instructions:'أكمل التوليف العام بالمفهوم المفتاحي.',
    question:'أكمل علاقة الأنظمة في الكتاب.', fillBlanksText:'عبر الكتاب، تتعاضد المكانة المقدسة والثروة التجارية والحماية القبلية و[blank] السياسية مراراً.',
    correctAnswer:'السلطة', explanation:'تجعل الفصول المتأخرة السلطة حلقة تربط المكانة الاقتصادية والدينية بالقيادة السياسية.', feedback:finalFeedbackAr,
  },
  'me-b2-ar-f9': {
    id:'me-b2-ar-f9', type:'fill-blanks', title:'التحدي النهائي', instructions:'أكمل الخلاصة بلغة الفصل الأخلاقية.',
    question:'أكمل المعنى الأوسع للجاهلية.', fillBlanksText:'يعامل الختام الجاهلية لا بوصفها عصراً ماضياً فقط، بل ثقافة متكررة يشكلها [blank] الإنساني والظلم وانتقاص قيمة الإنسان.',
    correctAnswer:'الكبر', explanation:'يوسع الفصل الأخير مفهوم الجاهلية ويصلها بالكبر الإنساني والظلم والاضطراب الأخلاقي.', feedback:finalFeedbackAr,
  },
};

const meccaB2FinalChallengeExercisesArPolished = meccaB2FinalChallengeExercisesAr.map(
  exercise => finalReplacementAr[exercise.id] ?? exercise,
);

const attachArabicLearning = (pages: PageData[]): PageData[] => pages.map(page => {
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = arabicLanguageFocus[page.id];
    return {
      ...page,
      type: 'story',
      exercises: meccaB2QuickChallengesAr[page.id] ? [meccaB2QuickChallengesAr[page.id]] : [],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 18) return { ...page, type: 'quiz', exercises: meccaB2ManualKnowledgeCheckExercisesAr };
  if (page.id === 19) return {
    ...page,
    type: 'exercises',
    title: 'مراجعة اللغة B2',
    content: 'راجع واستعمل صيغ التقييد والسبب والنتيجة والمقابلة والشرط وتركيز المعلومة والعلاقات الخطابية التي تطورت عبر الفصول السبعة عشر.',
    exercises: meccaB2LanguageReviewExercisesAr,
  };
  if (page.id === 20) return { ...page, type: 'vocabulary-match', vocabularyPairs: meccaB2VocabularyChallengePairsAr };
  if (page.id === 22) return { ...page, type: 'final-challenge', exercises: meccaB2FinalChallengeExercisesArPolished };
  return page;
});

const teacherMetadataAr: TeacherGuideMetadata = {
  ...meccaB2TeacherGuideMetadataAr,
  targetLearners: 'متعلمين في مستوى B2 قادرين على تحليل العلاقات التاريخية وتقييد الادعاءات والدفاع عن التفسير بالدليل.',
  approachDesc: 'الدليل أولاً في القراءة والاستماع، ثم تحليل الأسباب والأنظمة والتقييد، ثم إنتاج استجابة ادعاء-دليل-تفسير.',
  readingFramework: {
    before: 'توقع علاقة واحدة من العنوان والصورة، لكن سجلها كفرضية غير مثبتة حتى يقدم الفصل الدليل.',
    during: 'تتبع الحقائق المباشرة وروابط السبب والنتيجة والمقابلات وألفاظ التقييد، واستخدم الصوت المتاح للتحقق من الصياغة.',
    after: 'أكمل التحدي السريع وحدد الدليل الدقيق ثم أنتج استجابة تحليلية أو مهمة نقل قصيرة.',
  },
  globalCitizenship: {
    title: 'العدل والكرامة والانتماء المسؤول',
    description: 'استخدم فصول مكة لتحليل الإنصاف الاقتصادي وحماية الضعفاء ودقة تمثيل المعتقدات والانتماء الذي لا يبرر الظلم.',
    themes: [
      { title: 'الإنصاف الاقتصادي', description: 'قيّم الأنظمة المالية أيضاً بأثرها على من يملكون قوة أقل.' },
      { title: 'كرامة الإنسان', description: 'اربط معاملة الضعيف والفقير والرقيق والمحروم اجتماعياً بقيمة الإنسان المتساوية.' },
      { title: 'الانتماء المسؤول', description: 'ميّز بين الروابط التي تحمي الفرد والضغط القبلي الذي يقيد الاختيار الأخلاقي.' },
    ],
    actions: [
      'واجه المعاملة غير العادلة بالدليل والإجراء المحترم لا بالإذلال.',
      'استخدم لغة مقيدة عند وصف معتقدات أو أوضاع جماعة أخرى.',
      'ساند من يتعرض للإقصاء دون تحويل المساعدة إلى منافسة على المكانة.',
    ],
  },
  valuesEducation: {
    title: 'القيم بوصفها أفعالاً',
    description: 'تظهر القيمة في اختيار قابل للملاحظة مرتبط بدليل من الفصل.',
    items: [
      { label: 'العدل', value: 'انتقل من ملاحظة الظلم إلى استجابة عادلة وسلمية كما يوضح فصل حلف الفضول.' },
      { label: 'الكرامة', value: 'لا تربط قيمة الإنسان بالثروة أو النوع أو الرق أو الحماية القبلية.' },
      { label: 'النزاهة', value: 'التزم بحدود المصدر ولا تقوِّ الادعاء لمجرد التأثير.' },
    ],
    questions: ['ما الفعل الذي يجعل هذه القيمة ظاهرة؟', 'أي دليل من الفصل يدعم ذلك الفعل؟'],
    actions: ['سمِّ آلية الظلم.', 'حدد الأكثر تعرضاً للضرر.', 'اختر استجابة متناسبة ومحترمة.'],
  },
  homeConnection: {
    title: 'حوار منزلي قائم على الدليل',
    items: ['اختر ادعاء من فصل واشرح دليله في دقيقتين.', 'اطلب تفسيراً بديلاً ثم تحقق هل تدعمه القصة.'],
  },
};

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Islamic History & Civilization: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Pages,
  teacherGuide: meccaB2TeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataPolished,
  selfStudyGuide: meccaB2SelfStudyGuide,
  studentGuideMetadata: meccaB2StudentGuideMetadata,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'التاريخ والحضارة الإسلامية: مكة قبل الإسلام (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: attachArabicLearning(meccaB2PagesAr),
  teacherGuide: meccaB2TeacherGuideAr,
  teacherGuideMetadata: teacherMetadataAr,
  selfStudyGuide: meccaB2SelfStudyGuideAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
