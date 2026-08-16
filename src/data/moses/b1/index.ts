import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1StudentGuideSections, mosesB1StudentGuideText, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';
import { mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1StudentGuideSectionsAr, mosesB1StudentGuideTextAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { mosesB1LearningBlueprint } from './learningBlueprint';
import { mosesB1BlueprintConfig } from './config';
import { mosesB1HighlightTargets, mosesB1SourcePagesAr, mosesB1SourcePagesEn } from './source';

import { mosesA2TeacherGuideMetadata } from '../a2/en/teacherGuide';
import { mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from '../a2/en/selfStudyGuide';

export { mosesB1HighlightTargets };

const mosesB1Blueprint = runB1BlueprintSystem({
  englishPages: mosesB1SourcePagesEn,
  arabicPages: mosesB1SourcePagesAr,
  config: mosesB1BlueprintConfig,
  blueprint: mosesB1LearningBlueprint,
});

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: mosesB1Blueprint.englishPages,
  teacherGuide: mosesB1Blueprint.englishTeacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata.targetLearners ? mosesB1TeacherGuideMetadata : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1Blueprint.englishSelfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSections.length > 0 ? mosesB1StudentGuideSections : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideText || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadata.whoIsThisFor ? mosesB1StudentGuideMetadata : mosesA2StudentGuideMetadata,
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: mosesB1Blueprint.arabicPages,
  teacherGuide: mosesB1Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr.targetLearners ? mosesB1TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1Blueprint.arabicSelfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSectionsAr.length > 0 ? mosesB1StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadataAr.whoIsThisFor ? mosesB1StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesB1BookData = mosesB1BookDataEn;
