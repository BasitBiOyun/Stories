import type { BookData, PageData } from '../../../types';
import { mosesA2Pages as mosesA2PagesEn } from './en/pages';
import { mosesA2PagesAr } from './ar/pages';
import {
  mosesA2FinalChallengeExercises,
  mosesA2FinalReviewExercises,
  mosesA2KnowledgeCheckExercises,
  mosesA2QuickChallenges,
  mosesA2VocabularyChallengePairs,
} from './en/exercises';
import {
  mosesA2FinalChallengeExercisesAr,
  mosesA2FinalReviewExercisesAr,
  mosesA2KnowledgeCheckExercisesAr,
  mosesA2QuickChallengesAr,
  mosesA2VocabularyChallengePairsAr,
} from './ar/exercises';
import { mosesA2LanguageFocusExercises } from './en/languageFocus';
import { mosesA2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { mosesA2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { mosesA2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { mosesA2LanguageFocusExercisesAr } from './ar/languageFocus';
import { mosesA2LanguageFocusExercisesPart2Ar } from './ar/languageFocusPart2';
import { mosesA2LanguageFocusExercisesPart3Ar } from './ar/languageFocusPart3';
import { mosesA2LanguageFocusExercisesPart4Ar } from './ar/languageFocusPart4';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesA2TeacherGuideAr, mosesA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesA2SelfStudyGuide, mosesA2StudentGuideMetadata } from './en/selfStudyGuide';
import { selfStudyGuide as mosesA2SelfStudyGuideAr, mosesA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 16 }, (_, index) => index + 1));

// Manual support-copy corrections only. Canonical story content remains untouched.
const polishEnglishSupport = (page: PageData): PageData => {
  if (page.id === 10) return {
    ...page,
    hotspots: [
      { id: 'h10-1', x: 35, y: 35, title: 'The Fire', description: 'Moses saw a fire on the hillside and went toward it to get some fire to get warm.' },
      { id: 'h10-2', x: 65, y: 50, title: 'The Voice', description: 'In the silence, Moses heard Allah call him and tell him that there is no god but Allah.' },
    ],
  };
  if (page.id === 11) return {
    ...page,
    hotspots: [
      { id: 'h11-1', x: 40, y: 35, title: 'The Shining Hand', description: 'Moses put his hand into his chest and took it out; his hand was shining.' },
      { id: 'h11-2', x: 65, y: 50, title: 'Harun', description: 'Moses took his brother Harun with him and went to the palace to give the message of Allah.' },
    ],
  };
  return page;
};

const polishArabicSupport = (page: PageData): PageData => {
  if (page.id === 4) return {
    ...page,
    hotspots: [
      { id: 'h4-1', x: 35, y: 45, title: 'الملكة آسية', description: 'رأت آسية الطفل، فوضع الله في قلبها حبًا كبيرًا له، وأرادت أن تعتني به.' },
      { id: 'h4-2', x: 70, y: 40, title: 'قصر فرعون', description: 'وصل التابوت قريبًا من القصر، فأخذه الخدم إلى فرعون وآسية.' },
    ],
  };
  if (page.id === 5) return {
    ...page,
    hotspots: [
      { id: 'h5-1', x: 35, y: 45, title: 'حضن الأم', description: 'أحضرت أخت موسى أمه إلى القصر، فرد الله موسى إلى أمه.' },
      { id: 'h5-2', x: 65, y: 40, title: 'السوق والمشاجرة', description: 'رأى موسى في السوق رجلين يتخاصمان، وكان أحدهما مصريًا.' },
    ],
  };
  if (page.id === 8) return {
    ...page,
    hotspots: [
      { id: 'h8-1', x: 35, y: 50, title: 'الأختان والوالد', description: 'قالت الفتاتان إن أباهما شيخ كبير ولا يوجد في بيتهما شباب يساعدونهما.' },
      { id: 'h8-2', x: 65, y: 40, title: 'مساعدة موسى', description: 'أدرك موسى أن الفتاتين تحتاجان إلى المساعدة، فسقى غنمهما.' },
    ],
  };
  if (page.id === 9) return {
    ...page,
    hotspots: [
      { id: 'h9-1', x: 35, y: 45, title: 'النبي شعيب', description: 'كان شعيب عليه السلام رسولًا من رسل الله في مدين، ودعا موسى إلى بيته.' },
      { id: 'h9-2', x: 65, y: 45, title: 'حياة جديدة', description: 'قبل موسى العمل، وأقام مع الأسرة، ثم تزوج إحدى الفتاتين.' },
    ],
  };
  if (page.id === 10) return {
    ...page,
    hotspots: [
      { id: 'h10-1', x: 35, y: 35, title: 'النار', description: 'رأى موسى نارًا على سفح التل في ليلة باردة، فذهب ليأتي ببعض النار.' },
      { id: 'h10-2', x: 65, y: 50, title: 'النداء', description: 'سمع موسى نداءً من الله، الذي أخبره أنه اختاره وأمره أن يستمع.' },
    ],
  };
  if (page.id === 11) return {
    ...page,
    hotspots: [
      { id: 'h11-1', x: 40, y: 35, title: 'اليد البيضاء', description: 'أدخل موسى يده في جيبه ثم أخرجها، فإذا هي بيضاء مضيئة.' },
      { id: 'h11-2', x: 65, y: 50, title: 'هارون عليه السلام', description: 'أخذ موسى أخاه هارون معه، وذهب إلى القصر لتبليغ رسالة الله.' },
    ],
  };
  if (page.id === 13) return {
    ...page,
    hotspots: [
      { id: 'h13-1', x: 35, y: 40, title: 'إيمان السحرة', description: 'سجد السحرة لله وقالوا إنهم يؤمنون برب موسى وهارون.' },
      { id: 'h13-2', x: 70, y: 50, title: 'الثعبان الضخم', description: 'تحولت عصا موسى إلى ثعبان ضخم وابتلعت ما صنعه السحرة.' },
    ],
  };
  if (page.id === 16) return {
    ...page,
    hotspots: [
      { id: 'h16-1', x: 40, y: 45, title: 'انطباق البحر', description: 'عندما وصل فرعون وجنوده إلى منتصف الطريق أغلق الله البحر عليهم.' },
      { id: 'h16-2', x: 65, y: 50, title: 'العبرة والدرس', description: 'تخبرنا القصة أن الناس ليسوا ملكًا لأحد، وأن الله وحده صاحب القدرة والسلطان.' },
    ],
  };
  return page;
};

const buildEnglishPages = (): PageData[] => mosesA2PagesEn.map(sourcePage => {
  const page = polishEnglishSupport(sourcePage);
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = mosesA2LanguageFocusExercises[page.id] ?? mosesA2LanguageFocusExercisesPart2[page.id] ?? mosesA2LanguageFocusExercisesPart3[page.id] ?? mosesA2LanguageFocusExercisesPart4[page.id];
    return {
      ...page,
      exercises: [mosesA2QuickChallenges[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercises };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairs };
  if (page.id === 21) return { ...page, exercises: mosesA2FinalReviewExercises };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercises };
  return page;
});

const buildArabicPages = (): PageData[] => mosesA2PagesAr.map(sourcePage => {
  const page = polishArabicSupport(sourcePage);
  if (STORY_IDS.has(page.id)) {
    const languageFocusExercises = mosesA2LanguageFocusExercisesAr[page.id] ?? mosesA2LanguageFocusExercisesPart2Ar[page.id] ?? mosesA2LanguageFocusExercisesPart3Ar[page.id] ?? mosesA2LanguageFocusExercisesPart4Ar[page.id];
    return {
      ...page,
      exercises: [mosesA2QuickChallengesAr[page.id]],
      ...(languageFocusExercises ? { languageFocusExercises } : {}),
    };
  }
  if (page.id === 17) return { ...page, exercises: mosesA2KnowledgeCheckExercisesAr };
  if (page.id === 18) return { ...page, vocabularyPairs: mosesA2VocabularyChallengePairsAr };
  if (page.id === 21) return { ...page, exercises: mosesA2FinalReviewExercisesAr };
  if (page.id === 22) return { ...page, exercises: mosesA2FinalChallengeExercisesAr };
  return page;
});

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: buildEnglishPages(),
  teacherGuide: mosesA2TeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesA2SelfStudyGuide,
  studentGuideMetadata: mosesA2StudentGuideMetadata,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: buildArabicPages(),
  teacherGuide: mosesA2TeacherGuideAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataAr,
  selfStudyGuide: mosesA2SelfStudyGuideAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataAr,
};

export const mosesA2BookData = mosesA2BookDataEn;