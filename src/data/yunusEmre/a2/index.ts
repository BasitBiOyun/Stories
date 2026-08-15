import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyYunusA2PoemCard } from './poemCard';
import {
  yunusA2HighlightConfig,
  yunusA2HighlightTargets,
  yunusA2PagesFinalAr,
  yunusA2PagesFinalEn,
  yunusA2StudentGuideMetadataFinalAr,
  yunusA2StudentGuideMetadataFinalEn,
  yunusA2StudentGuideSectionsFinalAr,
  yunusA2StudentGuideSectionsFinalEn,
  yunusA2StudentGuideTextFinalAr,
  yunusA2StudentGuideTextFinalEn,
  yunusA2TeacherGuideMetadataFinalAr,
  yunusA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const yunusA2StoryIds = Array.from({ length: 8 }, (_, index) => index + 1);

const englishDerivedReplacements: Array<[string, string]> = [
  [
    'He is training and fixing his own heart and ego.',
    'In the story, the wood is presented as a symbol of Yunus training and correcting his own heart and ego.',
  ],
  [
    'Yunus is working with wood to train and fix his own heart and ego.',
    'In the story, the wood is presented as a symbol of Yunus training and correcting his own heart and ego.',
  ],
  [
    'Wherever I saw a flower, I heard that it was saying the name of Allah.',
    'In the story, Yunus says, “Wherever I saw a flower, I heard that it was saying the name of Allah.”',
  ],
  [
    'Yunus heard every flower saying the name of Allah, so he could not cut any of them.',
    'In the story, Yunus says he heard every flower saying the name of Allah, so he could not cut any of them.',
  ],
  [
    'My time is up now; I’m dried up and dying.',
    'In the story, the daisy is described as saying that its time is up and that it is dried up and dying.',
  ],
  [
    'The daisy called out to Yunus because it was dried up and dying, and ready to be picked.',
    'In the story, the daisy is described as calling out to Yunus when it was dried up and dying.',
  ],
  [
    'What does the wood symbolize in this chapter?',
    'According to the story, what does the wood symbolize in this chapter?',
  ],
  [
    'What does the wood symbolize in Chapter 5?',
    'According to the story, what does the wood symbolize in Chapter 5?',
  ],
  [
    'It symbolizes Yunus’s ego and the training of his heart.',
    'According to the story, it symbolizes Yunus’s ego and the training of his heart.',
  ],
  [
    'The text says the wood is like Yunus’s ego, and the work helps him fix his heart.',
    'In the story, the wood is presented as a symbol of Yunus’s ego, and the work represents training his heart.',
  ],
  [
    'The chapter says the wood is like Yunus’s ego.',
    'In the story, the wood is presented as a symbol of Yunus’s ego.',
  ],
  [
    'He believed crookedness had no place in the teacher’s house.',
    'The chapter says Yunus never brought crooked wood and said, “Crooked wood cannot go into the dervish house.”',
  ],
  [
    'What does “straight wood” teach us about honesty?',
    'According to the story, how is straight wood connected to Yunus’s training of his heart and ego?',
  ],
  [
    'Why did Yunus not pick many flowers?',
    'According to Yunus in the story, why did he not pick many flowers?',
  ],
  [
    'He heard the flowers saying the name of Allah',
    'In the story, Yunus says he heard the flowers saying the name of Allah',
  ],
  [
    'Yunus returned with a single, wilted daisy because he heard it remembering Allah.',
    'According to the story, Yunus returned with a single daisy because he said he heard it remembering Allah.',
  ],
];

const arabicDerivedReplacements: Array<[string, string]> = [
  [
    'كانَ يُدَرِّبُ قَلْبَهُ وَنَفْسَهُ وَيُصْلِحُهُما.',
    'في القصة، يُقَدَّم الحطب رمزًا لتدريب يونس قلبه ونفسه وإصلاحهما.',
  ],
  [
    'كان يونس يعمل على إصلاح الحطب كرمز لإصلاح قلبه وتدريب نفسه الأنانية.',
    'في القصة، يُقَدَّم الحطب رمزًا لإصلاح يونس قلبه وتدريب نفسه.',
  ],
  [
    'كُلَّما رَأَيْتُ زَهْرَةً، سَمِعْتُها تَذْكُرُ اسْمَ اللهِ.',
    'في القصة، يقول يونس إنه كلما رأى زهرة سمعها تذكر اسم الله.',
  ],
  [
    'سمع يونس كل زهرة تذكر اسم الله وتسبحه، فلم يجرؤ على قطع تسبيحها.',
    'في القصة، يقول يونس إنه سمع الأزهار تذكر اسم الله، ولذلك لم يقطفها.',
  ],
  [
    'لقد اِنْتَهى وَقْتي الآن؛ لقد يَبِسْتُ، وَأَنا قَريبَةٌ مِنَ الْمَوْتِ.',
    'في القصة، توصف الأقحوانة بأنها تقول إن وقتها انتهى وإنها يبست واقتربت من الموت.',
  ],
  [
    'نادت الأقحوانة يونس لأن وقتها انتهى ويبست، فطلبت قطفها لتنتهي حياتها في ذكر وتسبيح بين يدي درويش.',
    'في القصة، توصف الأقحوانة بأنها نادت يونس عندما يبست واقتربت من الموت.',
  ],
  [
    'ما الذي يرمز إليه الحطب في هذا الفصل؟',
    'بحسب القصة، إلى ماذا يرمز الحطب في هذا الفصل؟',
  ],
  [
    'يرمز الحطب إلى نفس يونس وتدريب قلبه وإصلاحه للتخلص من التكبر والأنانية.',
    'بحسب القصة، يرمز الحطب إلى نفس يونس وتدريب قلبه وإصلاحه.',
  ],
  [
    'لماذا لم يقطف يونس أزهاراً كثيرة؟',
    'بحسب ما يقوله يونس في القصة، لماذا لم يقطف أزهاراً كثيرة؟',
  ],
  [
    'لأنه سمع الأزهار تذكر اسم الله وتسبحه فكره قطع تسبيحها',
    'لأنه يقول في القصة إنه سمع الأزهار تذكر اسم الله فلم يرد قطفها',
  ],
];

const frameDerivedText = (text: string, language: 'en' | 'ar'): string => {
  const replacements = language === 'en' ? englishDerivedReplacements : arabicDerivedReplacements;
  return replacements.reduce((result, [from, to]) => result.replaceAll(from, to), text);
};

const frameDerivedValue = <T,>(value: T, language: 'en' | 'ar'): T => {
  if (typeof value === 'string') return frameDerivedText(value, language) as T;
  if (Array.isArray(value)) return value.map((item) => frameDerivedValue(item, language)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, nested]) => [
        key,
        frameDerivedValue(nested, language),
      ]),
    ) as T;
  }
  return value;
};

const frameYunusA2DerivedAttributions = (
  pages: PageData[],
  language: 'en' | 'ar',
): PageData[] => pages.map((page) => ({
  ...page,
  // Story prose stays locked. Only learning-material fields are reframed.
  hotspots: page.hotspots ? frameDerivedValue(page.hotspots, language) : page.hotspots,
  exercises: page.exercises ? frameDerivedValue(page.exercises, language) : page.exercises,
}));

const yunusA2PagesLockedEn = frameYunusA2DerivedAttributions(
  applyYunusA2PoemCard(
    syncA2GlossariesFromStoryHighlights(
      applyA2FinalStoryLanguageLock(yunusA2PagesFinalEn, 'yunusEmre', 'en'),
      yunusA2HighlightConfig,
      'en',
    ),
  ),
  'en',
);
const yunusA2PagesLockedAr = frameYunusA2DerivedAttributions(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalAr, 'yunusEmre', 'ar'),
    yunusA2HighlightConfig,
    'ar',
  ),
  'ar',
);

validateA2HighlightStandard(yunusA2PagesLockedEn, yunusA2PagesLockedAr, yunusA2HighlightTargets, yunusA2HighlightConfig);

const yunusA2TeacherGuideFramedEn = buildA2ChapterTeacherGuide(yunusA2PagesLockedEn, yunusA2StoryIds, 'en');
const yunusA2TeacherGuideFramedAr = buildA2ChapterTeacherGuide(yunusA2PagesLockedAr, yunusA2StoryIds, 'ar');
const yunusA2SelfStudyGuideFramedEn = buildA2ChapterSelfStudyGuide(yunusA2PagesLockedEn, yunusA2StoryIds, 'en');
const yunusA2SelfStudyGuideFramedAr = buildA2ChapterSelfStudyGuide(yunusA2PagesLockedAr, yunusA2StoryIds, 'ar');

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2PagesLockedEn,
  teacherGuide: yunusA2TeacherGuideFramedEn,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: yunusA2SelfStudyGuideFramedEn,
  studentGuideSections: yunusA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalEn,
  studentGuideText: yunusA2StudentGuideTextFinalEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusA2PagesLockedAr,
  teacherGuide: yunusA2TeacherGuideFramedAr,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: yunusA2SelfStudyGuideFramedAr,
  studentGuideSections: yunusA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalAr,
  studentGuideText: yunusA2StudentGuideTextFinalAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
