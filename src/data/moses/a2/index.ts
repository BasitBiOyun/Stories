import { BookData, PageData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { buildA2ChapterTeacherGuide } from '../../a2ChapterTeacherGuide';
import { buildA2ChapterSelfStudyGuide } from '../../a2ChapterSelfStudyGuide';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import {
  mosesA2HighlightConfig,
  mosesA2HighlightTargets,
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
  mosesA2StudentGuideMetadataFinalAr,
  mosesA2StudentGuideMetadataFinalEn,
  mosesA2StudentGuideSectionsFinalAr,
  mosesA2StudentGuideSectionsFinalEn,
  mosesA2StudentGuideTextFinalAr,
  mosesA2StudentGuideTextFinalEn,
  mosesA2TeacherGuideMetadataFinalAr,
  mosesA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const mosesA2StoryIds = Array.from({ length: 16 }, (_, index) => index + 1);

const neutralizeDerivedShuaybAttribution = (
  pages: PageData[],
  language: 'en' | 'ar',
): PageData[] => pages.map((page) => {
  if (page.id !== 9 || page.type !== 'story') return page;

  if (language === 'en') {
    return {
      ...page,
      hotspots: page.hotspots?.map((hotspot) => hotspot.id === 'h9-1'
        ? {
            ...hotspot,
            title: 'The Girls’ Father',
            description: 'The girls’ father in Midian offered Moses a job and welcomed him into the family.',
          }
        : hotspot),
      exercises: page.exercises?.map((exercise) => exercise.id === 'ex9-1'
        ? {
            ...exercise,
            question: 'Moses stayed with the girls’ family in Midian.',
            explanation: 'Moses accepted the job and stayed with the family in Midian.',
            feedback: {
              correct: 'Correct! Moses began a new life with the family in Midian.',
              incorrect: 'Actually, Moses accepted the job and stayed with the family in Midian.',
            },
          }
        : exercise),
    };
  }

  return {
    ...page,
    hotspots: page.hotspots?.map((hotspot) => {
      if (hotspot.id === 'h9-1') {
        return {
          ...hotspot,
          title: 'والد الفتاتين',
          description: 'عرض والد الفتاتين في مدين على موسى عملاً ورحب به مع أسرته.',
        };
      }
      if (hotspot.id === 'h9-2') {
        return {
          ...hotspot,
          description: 'عمل موسى مع الأسرة ثم تزوج إحدى الفتاتين.',
        };
      }
      return hotspot;
    }),
    exercises: page.exercises?.map((exercise) => exercise.id === 'ex9-1'
      ? {
          ...exercise,
          question: 'أقام موسى مع أسرة الفتاتين في مدين.',
          explanation: 'قبل موسى العمل وأقام مع الأسرة في مدين.',
          feedback: {
            correct: 'صحيح! بدأ موسى حياة جديدة مع الأسرة في مدين.',
            incorrect: 'غير صحيح. قبل موسى العمل وأقام مع الأسرة في مدين.',
          },
        }
      : exercise),
  };
});

const mosesA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  neutralizeDerivedShuaybAttribution(
    applyA2FinalStoryLanguageLock(mosesA2PagesFinalEn, 'musa', 'en'),
    'en',
  ),
  mosesA2HighlightConfig,
  'en',
);
const mosesA2PagesLockedAr = syncA2GlossariesFromStoryHighlights(
  neutralizeDerivedShuaybAttribution(
    applyA2FinalStoryLanguageLock(mosesA2PagesFinalAr, 'musa', 'ar'),
    'ar',
  ),
  mosesA2HighlightConfig,
  'ar',
);

validateA2HighlightStandard(mosesA2PagesLockedEn, mosesA2PagesLockedAr, mosesA2HighlightTargets, mosesA2HighlightConfig);

const mosesA2TeacherGuideFramedEn = buildA2ChapterTeacherGuide(mosesA2PagesLockedEn, mosesA2StoryIds, 'en');
const mosesA2TeacherGuideFramedAr = buildA2ChapterTeacherGuide(mosesA2PagesLockedAr, mosesA2StoryIds, 'ar');
const mosesA2SelfStudyGuideFramedEn = buildA2ChapterSelfStudyGuide(mosesA2PagesLockedEn, mosesA2StoryIds, 'en');
const mosesA2SelfStudyGuideFramedAr = buildA2ChapterSelfStudyGuide(mosesA2PagesLockedAr, mosesA2StoryIds, 'ar');

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2PagesLockedEn,
  teacherGuide: mosesA2TeacherGuideFramedEn,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesA2SelfStudyGuideFramedEn,
  studentGuideSections: mosesA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalEn,
  studentGuideText: mosesA2StudentGuideTextFinalEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2PagesLockedAr,
  teacherGuide: mosesA2TeacherGuideFramedAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesA2SelfStudyGuideFramedAr,
  studentGuideSections: mosesA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2StudentGuideTextFinalAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
