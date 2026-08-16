import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1StudentGuideSections, meccaB1StudentGuideText, meccaB1StudentGuideMetadata } from './en/selfStudyGuide';
import { meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1StudentGuideSectionsAr, meccaB1StudentGuideTextAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { meccaB1LearningBlueprint } from './learningBlueprint';
import { meccaB1BlueprintConfig } from './config';
import { meccaB1HighlightTargets, meccaB1SourcePagesAr, meccaB1SourcePagesEn } from './source';

export { meccaB1HighlightTargets };

const meccaB1Blueprint = runB1BlueprintSystem({
  englishPages: meccaB1SourcePagesEn,
  arabicPages: meccaB1SourcePagesAr,
  config: meccaB1BlueprintConfig,
  blueprint: meccaB1LearningBlueprint,
});

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: meccaB1Blueprint.englishPages,
  teacherGuide: meccaB1Blueprint.englishTeacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadata,
  selfStudyGuide: meccaB1Blueprint.englishSelfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSections,
  studentGuideText: meccaB1StudentGuideText,
  studentGuideMetadata: meccaB1StudentGuideMetadata,
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: meccaB1Blueprint.arabicPages,
  teacherGuide: meccaB1Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1Blueprint.arabicSelfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSectionsAr,
  studentGuideText: meccaB1StudentGuideTextAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
