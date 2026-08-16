import { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import {
  adamB2StudentGuideTextGoldEn,
  adamB2StudentGuideSectionsGoldEn,
  adamB2TeacherGuideMetadataGoldEn,
  adamB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  adamB2StudentGuideTextGoldAr,
  adamB2StudentGuideSectionsGoldAr,
  adamB2TeacherGuideMetadataGoldAr,
  adamB2StudentGuideMetadataGoldAr,
} from './goldAr';
import { adamB2LearningBlueprint } from './learningBlueprint';
import { adamB2BlueprintConfig } from './config';
import { adamB2HighlightTargets, adamB2SourcePagesAr, adamB2SourcePagesEn } from './source';

export { adamB2HighlightTargets };

const adamB2Blueprint = runB2BlueprintSystem({
  englishPages: adamB2SourcePagesEn,
  arabicPages: adamB2SourcePagesAr,
  config: adamB2BlueprintConfig,
  blueprint: adamB2LearningBlueprint,
});

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2Blueprint.englishPages,
  teacherGuide: adamB2Blueprint.englishTeacherGuide,
  selfStudyGuide: adamB2Blueprint.englishSelfStudyGuide,
  studentGuideText: adamB2StudentGuideTextGoldEn,
  studentGuideSections: adamB2StudentGuideSectionsGoldEn,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldEn,
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2Blueprint.arabicPages,
  teacherGuide: adamB2Blueprint.arabicTeacherGuide,
  selfStudyGuide: adamB2Blueprint.arabicSelfStudyGuide,
  studentGuideText: adamB2StudentGuideTextGoldAr,
  studentGuideSections: adamB2StudentGuideSectionsGoldAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldAr,
};
