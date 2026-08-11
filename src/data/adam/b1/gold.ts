import type { Exercise, PageData } from '../../../types';
import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { adamB1Pages } from './en/pages';
import { adamB1TeacherGuide } from './en/teacherGuide';
import { adamB1PagesAr } from './ar/pages';
import { adamB1TeacherGuideAr } from './ar/teacherGuide';

export const adamB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 12 }, (_, index) => index + 1),
  knowledgeCheckPageId: 13,
  reviewPageId: 14,
  glossaryPageIds: [15, 16],
  finalChallengePageId: 17,
};

type HotspotCopy = { title: string; description: string };
type VocabularyCopy = NonNullable<PageData['vocabulary']>;
type StoryMetadataCopy = {
  vocabulary?: VocabularyCopy;
  animatedWords?: string[];
  hotspots?: Record<string, HotspotCopy>;
};

const metadataOverridesEn: Record<number, StoryMetadataCopy> = {
  1: {
    hotspots: {
      h1: { title: 'Soil', description: 'Allah created Adam (pbuh) from soil and showed him great respect and gave full value as the first human.' },
      h2: { title: 'Ruler on Earth', description: 'Allah told the angels that He decided to place a ruler on earth.' },
    },
  },
  2: {
    vocabulary: [
      { word: 'intellect', definition: 'The ability to think, learn, and understand.' },
      { word: 'knowledge', definition: 'Information and understanding gained through learning.' },
      { word: 'skin colors', definition: 'The different colors of human skin.' },
    ],
    hotspots: {
      'h2-1': { title: 'Life and Knowledge', description: 'Allah gave Adam (pbuh) life and intellect to learn and understand.' },
      'h2-2': { title: 'Respect and Knowledge', description: 'Allah told His angels to show respect to Adam (pbuh) after He gave him life and knowledge.' },
    },
  },
  3: {
    hotspots: {
      'h3-1': { title: 'Fire and Soil', description: 'Iblis said that Allah created him from fire and created Adam (pbuh) from soil.' },
      'h3-2': { title: 'Arrogant Iblis', description: 'Iblis was arrogant and thought he was more important and more valuable than Adam (pbuh).' },
    },
  },
  4: {
    vocabulary: [
      { word: 'Creator', definition: 'Allah, Who created all things.' },
      { word: 'enemy', definition: 'A person or being who wants to cause harm.' },
      { word: 'careful', definition: 'Giving attention to danger or possible problems.' },
    ],
  },
  5: {
    vocabulary: [
      { word: 'companion', definition: 'A person who stays with and supports another person.' },
      { word: 'blessings', definition: 'Good things and gifts from Allah.' },
      { word: 'pretending', definition: 'Acting as if something is true when it is not.' },
      { word: 'lie', definition: 'Something said that is not true.' },
    ],
    hotspots: {
      'h5-1': { title: 'Eve in Paradise', description: 'Allah gave Adam a wife called Eve (Hawwa) to be his companion.' },
      'h5-2': { title: 'One Tree', description: 'Allah only asked them not to go near one tree.' },
    },
  },
  6: {
    hotspots: {
      'h6-1': { title: 'Iblis and the Warning', description: 'Iblis convinced them to believe his lies, and they forgot the warning Allah had given them.' },
      'h6-2': { title: 'Tree Leaves', description: 'They both started cutting tree leaves in Paradise to cover themselves.' },
    },
  },
  7: {
    vocabulary: [
      { word: 'Forgiveness', definition: 'The act of pardoning a mistake or wrong action.' },
      { word: 'pardon', definition: 'To forgive a mistake or wrong action.' },
      { word: 'barrier', definition: 'Something that makes progress or understanding difficult.' },
      { word: 'arrogant', definition: 'Thinking that you are more important than others.' },
    ],
    hotspots: {
      'h7-1': { title: 'A Mistake', description: 'They made a mistake, said sorry to Allah, learned from their mistake and decided never to repeat it.' },
      'h7-2': { title: 'On Earth', description: 'Allah pardoned Adam (pbuh) and Eve both and put them on earth to live there.' },
    },
  },
  8: {
    hotspots: {
      'h8-1': { title: 'Struggle to Survive', description: 'On earth, they had to struggle to survive and work hard to keep themselves alive.' },
      'h8-2': { title: 'Iblis Followed', description: 'Iblis followed Adam (pbuh), Eve and their children to earth because he wanted people not to remember Allah.' },
    },
  },
  9: {
    hotspots: {
      'h9-1': { title: 'First Messenger', description: 'Adam (pbuh) became the first Messenger of Allah and started teaching people to live righteously and act honestly.' },
      'h9-2': { title: 'Right Path', description: 'Allah sent many other messengers to show people the right path and the ways to stay away from Iblis.' },
    },
  },
  10: {
    vocabulary: [
      { word: 'disagreement', definition: 'A situation in which people have different opinions or wishes.' },
      { word: 'offering', definition: 'A gift given to show devotion to Allah.' },
      { word: 'jealous', definition: 'Unhappy because another person has something you want.' },
    ],
    hotspots: {
      'h10-1': { title: 'Best Sheep', description: 'Habil brought his best and healthiest sheep as a gift for Allah.' },
      'h10-2': { title: 'Handful of Crops', description: 'Qabil brought just a handful of his crops that was not very valuable.' },
    },
  },
  11: {
    vocabulary: [
      { word: 'panic', definition: 'Sudden strong fear that makes it difficult to think clearly.' },
      { word: 'raven', definition: 'A large black bird.' },
      { word: 'anger', definition: 'A strong feeling of being upset or mad.' },
    ],
    hotspots: {
      'h11-1': { title: 'The Raven', description: 'Allah sent a raven which landed near Qabil and started digging the ground.' },
      'h11-2': { title: 'Anger and Panic', description: 'Qabil’s anger cooled and he felt so sad but also started to panic.' },
    },
  },
  12: {
    vocabulary: [
      { word: 'worldwide', definition: 'In all parts of the world.' },
      { word: 'admitting', definition: 'Accepting that something is true or that you did something.' },
      { word: 'message', definition: 'An idea or teaching communicated to other people.' },
    ],
    hotspots: {
      'h12-1': { title: 'His Message', description: 'His children and grandchildren moved to different parts of the world and spread his message worldwide.' },
      'h12-2': { title: 'Turning Back to Allah', description: 'The message teaches people the importance of admitting mistakes and turning back to Allah.' },
    },
  },
};

const metadataOverridesAr: Record<number, StoryMetadataCopy> = {
  1: {
    hotspots: {
      h1: { title: 'التراب', description: 'خلق الله آدم عليه السلام من التراب، وأكرمه تكريما عظيما، وأعطاه قيمة كبيرة كأول إنسان.' },
      h2: { title: 'خليفة في الأرض', description: 'قال الله إنه قرر أن يجعل خليفة في الأرض.' },
    },
  },
  2: {
    vocabulary: [
      { word: 'عقل', definition: 'القدرة على التفكير والفهم والتعلم.' },
      { word: 'علم', definition: 'المعرفة والفهم اللذان يكتسبهما الإنسان بالتعلم.' },
      { word: 'ألوان بشرة', definition: 'الألوان المختلفة لبشرة الناس.' },
    ],
    animatedWords: ['عِلْم', 'عَقْل', 'الْمَلَائِكَة'],
    hotspots: {
      'h2-1': { title: 'الحياة والعقل', description: 'أعطى الله آدم عليه السلام الحياة والعقل لكي يتعلم ويفهم.' },
      'h2-2': { title: 'علما أكثر', description: 'أعطى الله آدم عليه السلام علما أكثر من الملائكة.' },
    },
  },
  3: {
    animatedWords: ['نَار', 'التراب', 'مُتَكَبِّر', 'أَفْضَل'],
    hotspots: {
      'h3-1': { title: 'نار وتراب', description: 'قال إبليس إن الله خلقه من نار وخلق آدم عليه السلام من تراب.' },
      'h3-2': { title: 'إبليس متكبرا', description: 'كان إبليس متكبرا وظن أن مادة خلقه تجعله أهم من آدم عليه السلام.' },
    },
  },
  4: {
    vocabulary: [
      { word: 'الخالق', definition: 'الله الذي خلق كل شيء.' },
      { word: 'رحمة', definition: 'العطف والخير والمغفرة.' },
      { word: 'عدو', definition: 'من يريد الضرر بغيره.' },
      { word: 'حذرًا', definition: 'منتبهًا إلى الخطر ومبتعدًا عنه.' },
    ],
    animatedWords: ['الخالق', 'رحمة', 'عدو', 'حذرًا'],
    hotspots: {
      'h4-1': { title: 'اخرج من هنا', description: 'قال الله لإبليس: اخرج من هنا، أنت محروم من محبتي ورحمتي.' },
      'h4-2': { title: 'إبليس عدو', description: 'قال الله لآدم عليه السلام إن إبليس عدو له، وأمره أن يكون حذرًا من إبليس.' },
    },
  },
  5: {
    vocabulary: [
      { word: 'وحدة', definition: 'الشعور بالحزن بسبب البقاء منفردًا.' },
      { word: 'نعم', definition: 'الخيرات والهدايا التي يمنحها الله.' },
      { word: 'كذبة', definition: 'قول غير صحيح.' },
      { word: 'شجرة', definition: 'نبات كبير له جذع وفروع.' },
    ],
    hotspots: {
      'h5-1': { title: 'حواء', description: 'خلق الله لآدم عليه السلام زوجة اسمها حواء.' },
      'h5-2': { title: 'شجرة معينة', description: 'طلب الله منهما شيئًا واحدًا فقط: ألا يقتربا من شجرة معينة.' },
    },
  },
  6: {
    vocabulary: [
      { word: 'الممنوعة', definition: 'التي لا يسمح بفعلها أو الاقتراب منها.' },
      { word: 'الخجل', definition: 'شعور بالألم أو الحرج بسبب فعل خاطئ.' },
      { word: 'فطرة', definition: 'صفة طبيعية موجودة في الإنسان.' },
      { word: 'أوراق', definition: 'الأجزاء الخضراء التي تنمو على الأشجار.' },
    ],
    hotspots: {
      'h6-1': { title: 'تحذير الله', description: 'جعل إبليس آدم وحواء يصدقان كذبته، وأنساهما تحذير الله.' },
      'h6-2': { title: 'أوراق أشجار الجنة', description: 'بدأ آدم وحواء بقطع أوراق أشجار الجنة لتغطية أنفسهما.' },
    },
  },
  7: {
    vocabulary: [
      { word: 'خطأ', definition: 'فعل غير صحيح.' },
      { word: 'عقبة', definition: 'شيء يجعل الوصول إلى الهدف أكثر صعوبة.' },
      { word: 'الأرض', definition: 'المكان الذي يعيش فيه البشر.' },
      { word: 'يغفر', definition: 'يعفو عن الخطأ ولا يعاقب عليه.' },
    ],
    hotspots: {
      'h7-1': { title: 'خطأ', description: 'ارتكب آدم وحواء خطأ، واعتذرا إلى الله، وتعلما من خطئهما، وصمما على عدم تكراره.' },
      'h7-2': { title: 'إلى الأرض', description: 'غفر الله لآدم وحواء، وأهبطهما إلى الأرض.' },
    },
  },
  8: {
    vocabulary: [
      { word: 'البقاء', definition: 'الاستمرار في الحياة رغم الصعوبات.' },
      { word: 'الملابس', definition: 'ما يلبسه الإنسان لتغطية جسمه وحمايته.' },
      { word: 'الضعفاء', definition: 'الأشخاص الذين يحتاجون إلى المساعدة والحماية.' },
      { word: 'الطبيعة', definition: 'العالم من حول الإنسان من أرض ونبات وحيوان.' },
    ],
    hotspots: {
      'h8-1': { title: 'البقاء على قيد الحياة', description: 'كان على آدم أن يكافح من أجل البقاء على قيد الحياة في الأرض وأن يعمل بجد.' },
      'h8-2': { title: 'إبليس', description: 'تبع إبليس آدم وحواء وأولادهما في الأرض وحاول أن يبعد الناس عن ذكر الله.' },
    },
  },
  9: {
    vocabulary: [
      { word: 'مجتمع', definition: 'مجموعة من الناس يعيشون معًا.' },
      { word: 'رسول', definition: 'شخص يختاره الله لتبليغ رسالته.' },
      { word: 'بصدق', definition: 'بطريقة صادقة وصحيحة.' },
    ],
    hotspots: {
      'h9-1': { title: 'أول رسول', description: 'أصبح آدم أول رسول لله وبدأ يعلم الناس كيفية عيش حياة صحيحة والتصرف بصدق.' },
      'h9-2': { title: 'الطريق الصحيح', description: 'أرسل الله أنبياء كثيرين ليظهروا للناس الطريق الصحيح وطرق الابتعاد عن إبليس.' },
    },
  },
  10: {
    vocabulary: [
      { word: 'خلاف', definition: 'نزاع أو اختلاف بين شخصين.' },
      { word: 'قربان', definition: 'هدية تقدم لله.' },
      { word: 'حاسدًا', definition: 'يتمنى ما عند غيره ولا يرضى بما عنده.' },
      { word: 'مزارعًا', definition: 'شخص يعمل في الأرض ويزرع المحاصيل.' },
    ],
    hotspots: {
      'h10-1': { title: 'أفضل كبش', description: 'أحضر هابيل كهدية لله أفضل وأصح كبش عنده.' },
      'h10-2': { title: 'حفنة من محصوله', description: 'أحضر قابيل فقط حفنة من محصوله لا قيمة لها.' },
    },
  },
  11: {
    hotspots: {
      'h11-1': { title: 'الغراب', description: 'أرسل الله غرابًا، ووقف الغراب بالقرب من قابيل وبدأ يحفر الأرض.' },
    },
  },
  12: {
    vocabulary: [
      { word: 'العالم', definition: 'جميع البلاد والأماكن التي يعيش فيها الناس.' },
      { word: 'الاعتراف', definition: 'قبول الخطأ والقول إنه حدث.' },
      { word: 'الرسالة', definition: 'الفكرة أو التعليم الذي ينقل إلى الناس.' },
    ],
    hotspots: {
      'h12-1': { title: 'الرسالة', description: 'نقل أولاد آدم رسالته إلى كل مكان في العالم.' },
    },
  },
};

const adamQuickOverridesEn: Record<number, Exercise> = {
  1: {
    id: 'ex1-1',
    type: 'true-false',
    title: 'The Origin of Humanity',
    instructions: 'Decide whether the statement matches this chapter.',
    question: 'The chapter says Adam (pbuh) was created from soil.',
    correctAnswer: true,
    explanation: 'The opening paragraph directly says that Allah created Adam (pbuh) from soil.',
    feedback: {
      correct: 'Correct. This detail appears directly in the opening paragraph.',
      incorrect: 'Return to the first paragraph and find the sentence that explains what Adam (pbuh) was created from.',
    },
  },
  5: {
    id: 'ex5-1',
    type: 'multiple-choice',
    title: 'The Warning in Paradise',
    instructions: 'Choose the answer stated in the chapter.',
    question: 'What did Allah ask Adam (pbuh) and Eve not to do?',
    options: ['Go near one tree', 'Leave Paradise immediately', 'Stop speaking to each other'],
    correctAnswer: 0,
    explanation: 'The chapter says Allah asked them not to go near one tree.',
    feedback: {
      correct: 'Correct. The chapter gives one clear restriction.',
      incorrect: 'Reread the second paragraph and identify the one thing Allah asked them not to do.',
    },
  },
};

const adamQuickOverridesAr: Record<number, Exercise> = {
  1: {
    id: 'ex1-1-ar',
    type: 'true-false',
    title: 'أصل البشرية',
    instructions: 'حدد هل تطابق العبارة ما يقوله هذا الفصل.',
    question: 'يذكر الفصل أن آدم عليه السلام خلق من التراب.',
    correctAnswer: true,
    explanation: 'تذكر الفقرة الأولى مباشرة أن الله خلق آدم عليه السلام من التراب.',
    feedback: {
      correct: 'صحيح. هذه المعلومة مذكورة مباشرة في الفقرة الأولى.',
      incorrect: 'ارجع إلى الفقرة الأولى وابحث عن الجملة التي تذكر مم خلق آدم عليه السلام.',
    },
  },
  5: {
    id: 'ex5-1-ar',
    type: 'multiple-choice',
    title: 'التحذير في الجنة',
    instructions: 'اختر الإجابة المذكورة في الفصل.',
    question: 'ماذا طلب الله من آدم عليه السلام وحواء ألا يفعلا؟',
    options: ['ألا يقتربا من شجرة واحدة', 'أن يتركا الجنة فورًا', 'أن يتوقفا عن الحديث معًا'],
    correctAnswer: 0,
    explanation: 'يذكر الفصل أن الله طلب منهما ألا يقتربا من شجرة واحدة.',
    feedback: {
      correct: 'صحيح. يذكر الفصل تحذيرًا واضحًا واحدًا.',
      incorrect: 'ارجع إلى الفقرة الثانية وحدد الشيء الواحد الذي طلب الله منهما ألا يفعلاه.',
    },
  },
};

const prepareAdamSource = (
  pages: PageData[],
  exerciseOverrides: Record<number, Exercise>,
  metadataOverrides: Record<number, StoryMetadataCopy>,
): PageData[] => pages.map((page) => {
  const exercise = exerciseOverrides[page.id];
  const metadata = metadataOverrides[page.id];
  const hotspots = metadata?.hotspots
    ? page.hotspots?.map((hotspot) => ({ ...hotspot, ...(metadata.hotspots?.[hotspot.id] || {}) }))
    : page.hotspots;

  return {
    ...page,
    ...(exercise ? { exercises: [exercise] } : {}),
    ...(metadata?.vocabulary ? { vocabulary: metadata.vocabulary } : {}),
    ...(metadata?.animatedWords ? { animatedWords: metadata.animatedWords } : {}),
    ...(hotspots ? { hotspots } : {}),
  };
});

export const adamB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: prepareAdamSource(adamB1Pages, adamQuickOverridesEn, metadataOverridesEn),
  config: adamB1GoldConfig,
  language: 'en',
});

export const adamB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: prepareAdamSource(adamB1PagesAr, adamQuickOverridesAr, metadataOverridesAr),
  config: adamB1GoldConfig,
  language: 'ar',
});

export const adamB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(adamB1TeacherGuide);
export const adamB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(adamB1TeacherGuideAr);
