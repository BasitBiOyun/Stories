import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { abrahamA2GoldConfig } from './gold';
import { abrahamA2LearningBlueprint } from './learningBlueprint';
import {
  abrahamA2HighlightConfig,
  abrahamA2HighlightTargets,
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
  abrahamA2StudentGuideMetadataFinalAr,
  abrahamA2StudentGuideMetadataFinalEn,
  abrahamA2StudentGuideSectionsFinalAr,
  abrahamA2StudentGuideSectionsFinalEn,
  abrahamA2StudentGuideTextFinalAr,
  abrahamA2StudentGuideTextFinalEn,
  abrahamA2TeacherGuideMetadataFinalAr,
  abrahamA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const abrahamA2PagesLockedEn = syncA2GlossariesFromStoryHighlights(
  applyA2FinalStoryLanguageLock(abrahamA2PagesFinalEn, 'ibrahim', 'en'),
  abrahamA2HighlightConfig,
  'en',
);
const abrahamA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(abrahamA2PagesFinalAr, 'ibrahim', 'ar'),
    abrahamA2HighlightConfig,
    'ar',
  ),
  {
    1: {
      h2: {
        title: 'الأشياء الحجرية',
        description: 'كَانَ النَّاسُ يَعْتَقِدُونَ أَنَّ هَذِهِ الْأَشْيَاءَ آلِهَتُهُمْ.',
      },
    },
  },
);

validateA2HighlightStandard(abrahamA2PagesLockedEn, abrahamA2PagesLockedAr, abrahamA2HighlightTargets, abrahamA2HighlightConfig);

const abrahamA2 = runA2BlueprintSystem({
  englishPages: abrahamA2PagesLockedEn,
  arabicPages: abrahamA2PagesLockedAr,
  config: { ...abrahamA2GoldConfig, vocabularyPageId: 16 },
  blueprint: abrahamA2LearningBlueprint,
});

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2.englishPages,
  teacherGuide: abrahamA2.englishTeacherGuide,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: abrahamA2.englishSelfStudyGuide,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalEn,
  studentGuideText: abrahamA2StudentGuideTextFinalEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2.arabicPages,
  teacherGuide: abrahamA2.arabicTeacherGuide,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: abrahamA2.arabicSelfStudyGuide,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalAr,
  studentGuideText: abrahamA2StudentGuideTextFinalAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
