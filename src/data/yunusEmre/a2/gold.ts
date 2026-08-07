import {
  applyA2GoldPages,
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
  type A2HotspotMap,
} from '../../a2GoldFactory';
import { yunusA2Pages } from './en/pages';
import { yunusEmreA2PagesAr } from './ar/pages';

const config = {
  storyIds: Array.from({ length: 8 }, (_, index) => index + 1),
  knowledgeCheckPageId: 9,
  reviewPageId: 13,
  glossaryPageIds: [11, 12] as [number, number],
  finalChallengePageId: 14,
};

export const yunusA2HotspotsGoldEn: A2HotspotMap = {
  'h1-1': {
    title: 'Simple Turkish',
    description: 'Yunus Emre used simple Turkish, so many people could understand his poems and their moral lessons.',
  },
  'h1-2': {
    title: 'Taptuk Emre',
    description: 'Taptuk Emre was Yunus Emre’s teacher, and Yunus became his dervish student.',
  },
  'h2-1': {
    title: 'Need for Allah',
    description: 'The chapter says dervishes knew that they needed Allah in every part of life.',
  },
  'h2-2': {
    title: 'Generosity',
    description: 'Dervishes shared what they had with people in need and tried not to keep wealth in their hearts.',
  },
  'h3-1': {
    title: 'A Difficult Path',
    description: 'The chapter describes dervish life as a difficult path of honesty, patience, humility, generosity, and respect.',
  },
  'h3-2': {
    title: 'A Disciplined Life',
    description: 'Dervishes ate, spoke, and slept less and tried to spend their time on useful activities.',
  },
  'h4-1': {
    title: 'Serving with Humility',
    description: 'Taptuk Emre gave Yunus the job of collecting wood as part of his service and training.',
  },
  'h4-2': {
    title: 'No Crooked Wood',
    description: 'Yunus carefully chose straight wood and did not bring green or crooked pieces to the dervish house.',
  },
  'h5-1': {
    title: 'Straight Wood',
    description: 'Yunus chose the straightest pieces of wood with great care, even after years of hard work.',
  },
  'h5-2': {
    title: 'A Lesson About the Heart',
    description: 'The chapter compares straight wood with Yunus working to correct his own heart and ego.',
  },
  'h6-1': {
    title: 'Honesty and Goodness',
    description: 'Yunus used straight wood as a lesson about honesty, goodness, and becoming a better person.',
  },
  'h6-2': {
    title: 'Learning from Nature',
    description: 'The chapter says Yunus looked at nature and found lessons in trees, animals, rivers, and quiet places.',
  },
  'h7-1': {
    title: 'A Single Daisy',
    description: 'Yunus returned with only one daisy while the other students brought many flowers.',
  },
  'h7-2': {
    title: 'Yunus’s Explanation',
    description: 'Yunus said he did not cut the other flowers because he heard them remembering Allah.',
  },
  'h8-1': {
    title: 'The Daisy in the Story',
    description: 'In the story, the daisy says its time is ending and asks Yunus to pick it.',
  },
  'h8-2': {
    title: 'Remember Allah and Work Well',
    description: 'The final lesson is to remember Allah in daily life and to do every job carefully and well.',
  },
};

export const yunusA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': {
    title: 'لغة تركية بسيطة',
    description: 'استخدم يونس إمره لغة تركية بسيطة، فاستطاع كثير من الناس فهم أشعاره ودروسها الأخلاقية.',
  },
  'h1-2': {
    title: 'طابطوق إمره',
    description: 'كان طابطوق إمره معلّم يونس إمره، وأصبح يونس تلميذا له في طريق الدراويش.',
  },
  'h2-1': {
    title: 'الحاجة إلى الله',
    description: 'يقول الفصل إن الدراويش كانوا يعرفون حاجتهم إلى الله في كل جوانب حياتهم.',
  },
  'h2-2': {
    title: 'الكرم',
    description: 'شارك الدراويش ما عندهم مع المحتاجين وحاولوا ألا يجعلوا المال أهم ما في قلوبهم.',
  },
  'h3-1': {
    title: 'طريق صعب',
    description: 'يصف الفصل حياة الدرويش بأنها طريق يحتاج إلى الصدق والصبر والتواضع والكرم والاحترام.',
  },
  'h3-2': {
    title: 'حياة منضبطة',
    description: 'كان الدراويش يقللون من الطعام والكلام والنوم ويقضون وقتهم في أعمال نافعة.',
  },
  'h4-1': {
    title: 'الخدمة بتواضع',
    description: 'أعطى طابطوق إمره يونس مهمة جمع الحطب لتكون جزءا من خدمته وتدريبه.',
  },
  'h4-2': {
    title: 'لا حطب أعوج',
    description: 'كان يونس يختار الحطب المستقيم بعناية ولا يجلب الحطب الأخضر أو الأعوج إلى بيت الدراويش.',
  },
  'h5-1': {
    title: 'الحطب المستقيم',
    description: 'كان يونس يختار أكثر قطع الحطب استقامة بعناية كبيرة رغم سنوات العمل الطويلة.',
  },
  'h5-2': {
    title: 'درس عن القلب',
    description: 'يقارن الفصل بين الحطب المستقيم وبين عمل يونس على إصلاح قلبه ونفسه.',
  },
  'h6-1': {
    title: 'الصدق والخير',
    description: 'استخدم يونس صورة الحطب المستقيم لشرح الصدق والخير ومحاولة أن يصبح الإنسان أفضل.',
  },
  'h6-2': {
    title: 'التعلم من الطبيعة',
    description: 'يقول الفصل إن يونس نظر إلى الطبيعة ووجد دروسا في الأشجار والحيوانات والأنهار والأماكن الهادئة.',
  },
  'h7-1': {
    title: 'زهرة أقحوان واحدة',
    description: 'عاد يونس بزهرة واحدة فقط بينما عاد الطلاب الآخرون بزهور كثيرة.',
  },
  'h7-2': {
    title: 'تفسير يونس',
    description: 'قال يونس إنه لم يقطع الزهور الأخرى لأنه سمعها تذكر الله.',
  },
  'h8-1': {
    title: 'الزهرة في القصة',
    description: 'في القصة تقول الزهرة إن وقتها يوشك أن ينتهي وتطلب من يونس أن يقطفها.',
  },
  'h8-2': {
    title: 'اذكر الله وأتقن عملك',
    description: 'الدرس الأخير هو ذكر الله في الحياة اليومية والقيام بكل عمل بعناية وإتقان.',
  },
};

export const yunusA2PagesGoldEn = applyA2GoldPages({
  canonicalPages: yunusA2Pages,
  hotspotMap: yunusA2HotspotsGoldEn,
  config,
  language: 'en',
});

export const yunusA2PagesGoldAr = applyA2GoldPages({
  canonicalPages: yunusEmreA2PagesAr,
  hotspotMap: yunusA2HotspotsGoldAr,
  config,
  language: 'ar',
});

export const yunusA2TeacherGuideGoldEn = buildA2TeacherGuide(yunusA2PagesGoldEn, config.storyIds, 'en');
export const yunusA2TeacherGuideGoldAr = buildA2TeacherGuide(yunusA2PagesGoldAr, config.storyIds, 'ar');
export const yunusA2SelfStudyGuideGoldEn = buildA2SelfStudyGuide(yunusA2PagesGoldEn, config.storyIds, 'en');
export const yunusA2SelfStudyGuideGoldAr = buildA2SelfStudyGuide(yunusA2PagesGoldAr, config.storyIds, 'ar');
export const yunusA2TeacherGuideMetadataGoldEn = buildA2TeacherGuideMetadata('Yunus Emre', config.storyIds.length, 'en');
export const yunusA2TeacherGuideMetadataGoldAr = buildA2TeacherGuideMetadata('يونس إمره', config.storyIds.length, 'ar');
export const yunusA2StudentGuideSectionsGoldEn = buildA2StudentGuideSections('en');
export const yunusA2StudentGuideSectionsGoldAr = buildA2StudentGuideSections('ar');
export const yunusA2StudentGuideMetadataGoldEn = buildA2StudentGuideMetadata('Yunus Emre', 'en');
export const yunusA2StudentGuideMetadataGoldAr = buildA2StudentGuideMetadata('يونس إمره', 'ar');
export const yunusA2StudentGuideTextGoldEn = buildA2StudentGuideText('Yunus Emre', 'en');
export const yunusA2StudentGuideTextGoldAr = buildA2StudentGuideText('يونس إمره', 'ar');
export const yunusA2GoldConfig = config;
