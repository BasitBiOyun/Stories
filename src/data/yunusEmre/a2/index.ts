import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { syncA2GlossariesFromStoryHighlights, validateA2HighlightStandard } from '../../a2HighlightStandard';
import { applyA2HotspotCopyOverrides } from '../../a2HotspotCopyOverrides';
import { runA2BlueprintSystem } from '../../a2BlueprintSystem';
import { applyYunusA2PoemCard } from './poemCard';
import { yunusA2GoldConfig } from './gold';
import { yunusA2LearningBlueprint } from './learningBlueprint';
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

const yunusA2PagesLockedEn = applyYunusA2PoemCard(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalEn, 'yunusEmre', 'en'),
    yunusA2HighlightConfig,
    'en',
  ),
);
const yunusA2PagesLockedAr = applyA2HotspotCopyOverrides(
  syncA2GlossariesFromStoryHighlights(
    applyA2FinalStoryLanguageLock(yunusA2PagesFinalAr, 'yunusEmre', 'ar'),
    yunusA2HighlightConfig,
    'ar',
  ),
  {
    4: {
      'h4-2': {
        title: 'الْحَطَبُ الْمُعْوَجُّ',
        description: 'لَمْ يَقْطَعْ يونُس وَلَمْ يُحْضِرْ أَبَدًا حَطَبًا أَخْضَرَ أَوْ مُعْوَجًّا.',
      },
    },
  },
);

validateA2HighlightStandard(yunusA2PagesLockedEn, yunusA2PagesLockedAr, yunusA2HighlightTargets, yunusA2HighlightConfig);

const yunusA2 = runA2BlueprintSystem({
  englishPages: yunusA2PagesLockedEn,
  arabicPages: yunusA2PagesLockedAr,
  config: { ...yunusA2GoldConfig, vocabularyPageId: 10 },
  blueprint: yunusA2LearningBlueprint,
});

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2.englishPages,
  teacherGuide: yunusA2.englishTeacherGuide,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: yunusA2.englishSelfStudyGuide,
  studentGuideSections: yunusA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalEn,
  studentGuideText: yunusA2StudentGuideTextFinalEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusA2.arabicPages,
  teacherGuide: yunusA2.arabicTeacherGuide,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: yunusA2.arabicSelfStudyGuide,
  studentGuideSections: yunusA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalAr,
  studentGuideText: yunusA2StudentGuideTextFinalAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
