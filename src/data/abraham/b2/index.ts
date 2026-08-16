import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { abrahamB2LearningBlueprint } from './learningBlueprint';
import { abrahamB2BlueprintConfig } from './config';
import {
  abrahamB2HighlightTargets,
  abrahamB2LearningPagesAr,
  abrahamB2LearningPagesEn,
} from './source';
import {
  abrahamB2StudentGuideMetadataBlueprintAr,
  abrahamB2StudentGuideMetadataBlueprintEn,
  abrahamB2StudentGuideSectionsBlueprintAr,
  abrahamB2StudentGuideSectionsBlueprintEn,
  abrahamB2StudentGuideTextBlueprintAr,
  abrahamB2StudentGuideTextBlueprintEn,
  abrahamB2TeacherGuideMetadataBlueprintAr,
  abrahamB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { abrahamB2HighlightTargets };

const abrahamB2Blueprint = runB2BlueprintSystem({
  englishPages: abrahamB2LearningPagesEn,
  arabicPages: abrahamB2LearningPagesAr,
  config: abrahamB2BlueprintConfig,
  blueprint: abrahamB2LearningBlueprint,
});

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2Blueprint.englishPages,
  teacherGuide: abrahamB2Blueprint.englishTeacherGuide,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataBlueprintEn,
  selfStudyGuide: abrahamB2Blueprint.englishSelfStudyGuide,
  studentGuideSections: abrahamB2StudentGuideSectionsBlueprintEn,
  studentGuideText: abrahamB2StudentGuideTextBlueprintEn,
  studentGuideMetadata: abrahamB2StudentGuideMetadataBlueprintEn,
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2Blueprint.arabicPages,
  teacherGuide: abrahamB2Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataBlueprintAr,
  selfStudyGuide: abrahamB2Blueprint.arabicSelfStudyGuide,
  studentGuideSections: abrahamB2StudentGuideSectionsBlueprintAr,
  studentGuideText: abrahamB2StudentGuideTextBlueprintAr,
  studentGuideMetadata: abrahamB2StudentGuideMetadataBlueprintAr,
};
