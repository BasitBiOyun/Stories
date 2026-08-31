import type { BookData, Exercise, PageData, TeacherGuideMetadata } from '../../../types';
import { meccaB2Pages } from './en/pages';
import {
  meccaB2QuickChallengesPolished,
  meccaB2VocabularyChallengePairsPolished,
  meccaB2FinalChallengeExercisesPolished,
} from './en/exerciseSystem';
import { meccaB2ManualKnowledgeCheckExercises } from './en/knowledgeCheck';
import { meccaB2LanguageFocusExercises } from './en/languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './en/languageFocusPart2';
import { meccaB2LanguageFocusExercisesPart3 } from './en/languageFocusPart3';
import { meccaB2LanguageFocusExercisesPart4 } from './en/languageFocusPart4';
import { meccaB2LanguageReviewExercises } from './en/languageReview';
import { meccaB2TeacherGuide, meccaB2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB2SelfStudyGuide, meccaB2StudentGuideMetadata } from './en/selfStudyGuide';
import { meccaB2PagesAr } from './ar/pages';
import {
  meccaB2QuickChallengesArPolished,
  meccaB2VocabularyChallengePairsArPolished,
  meccaB2FinalChallengeExercisesArPolished,
} from './ar/exerciseSystem';
import { meccaB2ManualKnowledgeCheckExercisesAr } from './ar/knowledgeCheck';
import { meccaB2LanguageFocusExercisesAr } from './ar/languageFocus';
import { meccaB2LanguageFocusExercisesArPart2 } from './ar/languageFocusPart2';
import { meccaB2LanguageFocusExercisesArPart3 } from './ar/languageFocusPart3';
import { meccaB2LanguageFocusExercisesArPart4 } from './ar/languageFocusPart4';
import { meccaB2LanguageReviewExercisesAr } from './ar/languageReview';
import { meccaB2TeacherGuideAr, meccaB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));

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
