import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1StudentGuideText, adamB1StudentGuideMetadata, adamB1StudentGuideSections } from './en/selfStudyGuide';
import { adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1StudentGuideTextAr, adamB1StudentGuideMetadataAr, adamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import { adamB1LearningBlueprint } from './learningBlueprint';
import { adamB1BlueprintConfig } from './config';
import { adamB1SourcePagesAr, adamB1SourcePagesEn, adamB1HighlightTargets } from './source';

export { adamB1HighlightTargets };

const adamB1Blueprint = runB1BlueprintSystem({
  englishPages: adamB1SourcePagesEn,
  arabicPages: adamB1SourcePagesAr,
  config: adamB1BlueprintConfig,
  blueprint: adamB1LearningBlueprint,
});

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: adamB1Blueprint.englishPages,
  teacherGuide: adamB1Blueprint.englishTeacherGuide,
  selfStudyGuide: adamB1Blueprint.englishSelfStudyGuide,
  studentGuideText: adamB1StudentGuideText,
  studentGuideSections: adamB1StudentGuideSections,
  teacherGuideMetadata: adamB1TeacherGuideMetadata,
  studentGuideMetadata: adamB1StudentGuideMetadata,
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: adamB1Blueprint.arabicPages,
  teacherGuide: adamB1Blueprint.arabicTeacherGuide,
  selfStudyGuide: adamB1Blueprint.arabicSelfStudyGuide,
  studentGuideText: adamB1StudentGuideTextAr,
  studentGuideSections: adamB1StudentGuideSectionsAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr,
};
