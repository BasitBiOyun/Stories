import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { mosesB2LearningBlueprint } from './learningBlueprint';
import { mosesB2BlueprintConfig } from './config';
import { mosesB2HighlightTargets, mosesB2SourcePagesAr, mosesB2SourcePagesEn } from './source';
import {
  mosesB2StudentGuideMetadataBlueprintAr,
  mosesB2StudentGuideMetadataBlueprintEn,
  mosesB2StudentGuideSectionsBlueprintAr,
  mosesB2StudentGuideSectionsBlueprintEn,
  mosesB2StudentGuideTextBlueprintAr,
  mosesB2StudentGuideTextBlueprintEn,
  mosesB2TeacherGuideMetadataBlueprintAr,
  mosesB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { mosesB2HighlightTargets };

const mosesB2Blueprint = runB2BlueprintSystem({
  englishPages: mosesB2SourcePagesEn,
  arabicPages: mosesB2SourcePagesAr,
  config: mosesB2BlueprintConfig,
  blueprint: mosesB2LearningBlueprint,
});

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: mosesB2Blueprint.englishPages,
  teacherGuide: mosesB2Blueprint.englishTeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataBlueprintEn,
  selfStudyGuide: mosesB2Blueprint.englishSelfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSectionsBlueprintEn,
  studentGuideText: mosesB2StudentGuideTextBlueprintEn,
  studentGuideMetadata: mosesB2StudentGuideMetadataBlueprintEn,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: mosesB2Blueprint.arabicPages,
  teacherGuide: mosesB2Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataBlueprintAr,
  selfStudyGuide: mosesB2Blueprint.arabicSelfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSectionsBlueprintAr,
  studentGuideText: mosesB2StudentGuideTextBlueprintAr,
  studentGuideMetadata: mosesB2StudentGuideMetadataBlueprintAr,
};

export const mosesB2BookData = mosesB2BookDataEn;
