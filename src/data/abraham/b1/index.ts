import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1StudentGuideText, abrahamB1StudentGuideMetadata, abrahamB1StudentGuideSections } from './en/selfstudyGuide';
import { abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1StudentGuideTextAr, abrahamB1StudentGuideMetadataAr, abrahamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import { abrahamB1LearningBlueprint } from './learningBlueprint';
import { abrahamB1BlueprintConfig } from './config';
import { abrahamB1HighlightTargets, abrahamB1SourcePagesAr, abrahamB1SourcePagesEn } from './source';

export { abrahamB1HighlightTargets };

const abrahamB1Blueprint = runB1BlueprintSystem({
  englishPages: abrahamB1SourcePagesEn,
  arabicPages: abrahamB1SourcePagesAr,
  config: abrahamB1BlueprintConfig,
  blueprint: abrahamB1LearningBlueprint,
});

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: abrahamB1Blueprint.englishPages,
  teacherGuide: abrahamB1Blueprint.englishTeacherGuide,
  selfStudyGuide: abrahamB1Blueprint.englishSelfStudyGuide,
  studentGuideText: abrahamB1StudentGuideText,
  studentGuideSections: abrahamB1StudentGuideSections,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadata,
  studentGuideMetadata: abrahamB1StudentGuideMetadata,
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: abrahamB1Blueprint.arabicPages,
  teacherGuide: abrahamB1Blueprint.arabicTeacherGuide,
  selfStudyGuide: abrahamB1Blueprint.arabicSelfStudyGuide,
  studentGuideText: abrahamB1StudentGuideTextAr,
  studentGuideSections: abrahamB1StudentGuideSectionsAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  studentGuideMetadata: abrahamB1StudentGuideMetadataAr,
};

export const abrahamB1BookData = abrahamB1BookDataEn;
