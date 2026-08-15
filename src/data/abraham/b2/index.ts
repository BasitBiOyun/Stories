import { BookData, PageData } from '../../../types';
import { applyB2StoryLanguageLock } from '../../b2StoryLanguageLock';
import { applyB2HighlightStandard } from '../../b2HighlightStandard';
import { resolveB2ReviewedPairs } from '../../b2HighlightPairs';
import { buildB2EvidenceGuides } from '../../b2GoldGuides';
import { applyValidatedAdvancedParallelLearning } from '../../advancedParallelLearning';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import {
  abrahamB2PagesGoldEn,
  abrahamB2TeacherGuideMetadataGoldEn,
  abrahamB2StudentGuideMetadataGoldEn,
  abrahamB2StudentGuideSectionsGoldEn,
  abrahamB2StudentGuideTextGoldEn,
} from './gold';
import {
  abrahamB2PagesGoldAr,
  abrahamB2TeacherGuideMetadataGoldAr,
  abrahamB2StudentGuideMetadataGoldAr,
  abrahamB2StudentGuideSectionsGoldAr,
  abrahamB2StudentGuideTextGoldAr,
} from './goldAr';
import { abrahamB2ReviewedHighlightPairs } from './highlightPairs';

const abrahamB2Config = {
  level: 'B2' as const,
  storyIds: Array.from({ length: 35 }, (_, index) => index + 1),
  knowledgeCheckPageId: 36,
  reviewPageId: 37,
  glossaryPageIds: [38, 39] as [number, number],
  finalChallengePageId: 40,
};

const abrahamB2SourceTitleOverridesEn = {
  9: { 'b2-hs-9-2': 'Creator’s command' },
} as const;

const abrahamB2SourceDescriptionOverridesEn = {
  9: {
    'b2-hs-9-2': 'He was astonished that these heavenly bodies were worshipped by people, while in fact all those stars, asteroids, the Sun, the Moon, etc., had been created; they appeared and disappeared at the Creator’s command.',
  },
} as const;

export const abrahamB2PagesBeforeHotspotSourceLockEn = applyB2StoryLanguageLock(abrahamB2PagesGoldEn, {
  language: 'en',
  maxUniqueHighlights: 10,
});

export const abrahamB2PagesBeforeHotspotSourceLockAr = applyB2StoryLanguageLock(abrahamB2PagesGoldAr, {
  language: 'ar',
  maxUniqueHighlights: 10,
});

const abrahamB2PagesLockedEn = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockEn, {
  language: 'en',
  level: 'B2',
  titleOverrides: abrahamB2SourceTitleOverridesEn,
  descriptionOverrides: abrahamB2SourceDescriptionOverridesEn,
});

const abrahamB2PagesLockedAr = applyHotspotSourceLock(abrahamB2PagesBeforeHotspotSourceLockAr, {
  language: 'ar',
  level: 'B2',
});

const abrahamB2HighlightStandard = applyB2HighlightStandard(abrahamB2PagesLockedEn, abrahamB2PagesLockedAr, {
  storyKey: 'Abraham',
  storyIds: abrahamB2Config.storyIds,
  glossaryPageIds: abrahamB2Config.glossaryPageIds,
  explicitTargets: resolveB2ReviewedPairs(
    abrahamB2PagesLockedEn,
    abrahamB2PagesLockedAr,
    'Abraham',
    abrahamB2ReviewedHighlightPairs,
  ),
});

const prepareKnowledgeCheckPage = (pages: PageData[], language: 'en' | 'ar'): PageData[] => pages.map((page) => (
  page.id === abrahamB2Config.knowledgeCheckPageId
    ? {
        ...page,
        type: 'quiz' as const,
        title: language === 'ar' ? 'اختبار المعرفة — B2' : 'B2 Knowledge Check',
        content: '',
        audioUrl: '',
        vocabulary: undefined,
        vocabularyPairs: undefined,
        hotspots: undefined,
        animatedWords: undefined,
        syncPoints: undefined,
        timedChunks: undefined,
        exercises: undefined,
      }
    : page
));

const abrahamB2StudentGuideSectionsRuntimeEn = abrahamB2StudentGuideSectionsGoldEn.map((section) => {
  if (section.title === '1. Canonical Sequence') {
    return {
      ...section,
      text: 'Study the 35 narrative chapters in order. After Chapter 35, continue directly to the B2 Knowledge Check. The original References page is archived for future B2 reference standardization.',
      points: ['35 story chapters', 'Knowledge Check after Chapter 35', 'References archived safely'],
    };
  }
  if (section.title === '4. Review and Final') {
    return {
      ...section,
      title: '4. Knowledge, Review, and Final',
      text: 'After the narrative, complete the 8-activity Knowledge Check, the 8-question Review Challenge, both glossary sections, and the 10-activity Final Challenge.',
      points: ['Knowledge: 8', 'Review: 8', 'Final: 10'],
    };
  }
  return section;
});

const abrahamB2StudentGuideSectionsRuntimeAr = abrahamB2StudentGuideSectionsGoldAr.map((section) => {
  if (section.title === '1. التسلسل المعتمد') {
    return {
      ...section,
      text: 'ادرس الفصول السردية الخمسة والثلاثين بالترتيب. بعد الفصل 35 انتقل مباشرة إلى اختبار المعرفة B2. حُفظت صفحة المراجع الأصلية في الأرشيف لتوحيد صفحات المراجع في كتب B2 لاحقاً.',
      points: ['35 فصلاً سردياً', 'اختبار المعرفة بعد الفصل 35', 'المراجع محفوظة في الأرشيف'],
    };
  }
  if (section.title === '4. المراجعة والنهائي') {
    return {
      ...section,
      title: '4. المعرفة والمراجعة والنهائي',
      text: 'بعد الفصول السردية أكمل اختبار المعرفة المكون من 8 أنشطة، ثم مراجعة من 8 أسئلة، ثم قسمي المعجم، ثم التحدي النهائي المكون من 10 أنشطة.',
      points: ['المعرفة: 8', 'المراجعة: 8', 'النهائي: 10'],
    };
  }
  return section;
});

const abrahamB2StudentGuideTextRuntimeEn = abrahamB2StudentGuideTextGoldEn
  .replace('After the narrative, keep the canonical References page as reference material, complete the 8-question Review Challenge, review both glossary sections, and finish with the 10-question Final Challenge.', 'After the narrative, complete the 8-activity Knowledge Check, then the 8-question Review Challenge, review both glossary sections, and finish with the 10-activity Final Challenge.')
  .replace('There is no dedicated Knowledge Check page in this canonical book, so no new page is invented.', 'The original References page is archived safely for future B2 reference standardization.');

const abrahamB2StudentGuideTextRuntimeAr = abrahamB2StudentGuideTextGoldAr
  .replace('بعد الفصول السردية، أبقِ صفحة المراجع مرجعاً كما هي، وأكمل تحدي المراجعة المكون من 8 أسئلة، وراجع قسمي المعجم، ثم أنجز التحدي النهائي المكون من 10 أسئلة.', 'بعد الفصول السردية، أكمل اختبار المعرفة المكون من 8 أنشطة، ثم تحدي المراجعة المكون من 8 أسئلة، وراجع قسمي المعجم، ثم أنجز التحدي النهائي المكون من 10 أنشطة.')
  .replace('لا توجد صفحة Knowledge مستقلة في البنية المعتمدة، ولذلك لا نضيف صفحة جديدة.', 'حُفظت صفحة المراجع الأصلية في الأرشيف لتوحيد صفحات المراجع في كتب B2 لاحقاً.');

export const abrahamB2HighlightTargets = abrahamB2HighlightStandard.targets;
const abrahamB2Parallel = applyValidatedAdvancedParallelLearning({
  englishPages: prepareKnowledgeCheckPage(abrahamB2HighlightStandard.englishPages, 'en'),
  arabicPages: prepareKnowledgeCheckPage(abrahamB2HighlightStandard.arabicPages, 'ar'),
  config: abrahamB2Config,
});
const abrahamB2GuidesEn = buildB2EvidenceGuides({ effectivePages: abrahamB2Parallel.englishPages, storyIds: abrahamB2Config.storyIds, language: 'en' });
const abrahamB2GuidesAr = buildB2EvidenceGuides({ effectivePages: abrahamB2Parallel.arabicPages, storyIds: abrahamB2Config.storyIds, language: 'ar' });

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2Parallel.englishPages,
  teacherGuide: abrahamB2GuidesEn.teacherGuide,
  teacherGuideMetadata: {
    ...abrahamB2TeacherGuideMetadataGoldEn,
    estimatedDuration: '35 chapter lessons plus Knowledge Check, review, and final assessment',
  },
  studentGuideMetadata: {
    ...abrahamB2StudentGuideMetadataGoldEn,
    estimatedStudyTime: '35 chapter sessions plus Knowledge Check, review, and final assessment',
  },
  studentGuideSections: abrahamB2StudentGuideSectionsRuntimeEn,
  selfStudyGuide: abrahamB2GuidesEn.selfStudyGuide,
  studentGuideText: abrahamB2StudentGuideTextRuntimeEn
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2Parallel.arabicPages,
  teacherGuide: abrahamB2GuidesAr.teacherGuide,
  teacherGuideMetadata: {
    ...abrahamB2TeacherGuideMetadataGoldAr,
    estimatedDuration: '35 حصة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  },
  studentGuideMetadata: {
    ...abrahamB2StudentGuideMetadataGoldAr,
    estimatedStudyTime: '35 جلسة فصلية إضافة إلى اختبار المعرفة والمراجعة والتقييم النهائي',
  },
  studentGuideSections: abrahamB2StudentGuideSectionsRuntimeAr,
  selfStudyGuide: abrahamB2GuidesAr.selfStudyGuide,
  studentGuideText: abrahamB2StudentGuideTextRuntimeAr
};
