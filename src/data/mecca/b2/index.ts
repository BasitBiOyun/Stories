import type { BookData } from '../../../types';
import { runB2BlueprintSystem } from '../../b2BlueprintSystem';
import { meccaB2LearningBlueprint } from './learningBlueprint';
import { meccaB2BlueprintConfig } from './config';
import { meccaB2HighlightTargets, meccaB2SourcePagesAr, meccaB2SourcePagesEn } from './source';
import {
  meccaB2StudentGuideMetadataBlueprintAr,
  meccaB2StudentGuideMetadataBlueprintEn,
  meccaB2StudentGuideSectionsBlueprintAr,
  meccaB2StudentGuideSectionsBlueprintEn,
  meccaB2StudentGuideTextBlueprintAr,
  meccaB2StudentGuideTextBlueprintEn,
  meccaB2TeacherGuideMetadataBlueprintAr,
  meccaB2TeacherGuideMetadataBlueprintEn,
} from './support';

export { meccaB2HighlightTargets };

const meccaB2Blueprint = runB2BlueprintSystem({
  englishPages: meccaB2SourcePagesEn,
  arabicPages: meccaB2SourcePagesAr,
  config: meccaB2BlueprintConfig,
  blueprint: meccaB2LearningBlueprint,
});

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Blueprint.englishPages,
  teacherGuide: meccaB2Blueprint.englishTeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataBlueprintEn,
  selfStudyGuide: meccaB2Blueprint.englishSelfStudyGuide,
  studentGuideSections: meccaB2StudentGuideSectionsBlueprintEn,
  studentGuideText: meccaB2StudentGuideTextBlueprintEn,
  studentGuideMetadata: meccaB2StudentGuideMetadataBlueprintEn,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2Blueprint.arabicPages,
  teacherGuide: meccaB2Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataBlueprintAr,
  selfStudyGuide: meccaB2Blueprint.arabicSelfStudyGuide,
  studentGuideSections: meccaB2StudentGuideSectionsBlueprintAr,
  studentGuideText: meccaB2StudentGuideTextBlueprintAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataBlueprintAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
