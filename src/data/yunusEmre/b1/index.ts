import { BookData } from '../../../types';
import { runB1BlueprintSystem } from '../../b1BlueprintSystem';
import { yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1StudentGuideSections, yunusB1StudentGuideText, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';
import { yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1StudentGuideSectionsAr, yunusEmreB1StudentGuideTextAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { yunusEmreB1LearningBlueprint } from './learningBlueprint';
import { yunusEmreB1BlueprintConfig } from './config';
import { yunusEmreB1HighlightTargets, yunusEmreB1SourcePagesAr, yunusEmreB1SourcePagesEn } from './source';

export { yunusEmreB1HighlightTargets };

const yunusEmreB1Blueprint = runB1BlueprintSystem({
  englishPages: yunusEmreB1SourcePagesEn,
  arabicPages: yunusEmreB1SourcePagesAr,
  config: yunusEmreB1BlueprintConfig,
  blueprint: yunusEmreB1LearningBlueprint,
});

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Stories of the Prophets: Yunus Emre (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: yunusEmreB1Blueprint.englishPages,
  teacherGuide: yunusEmreB1Blueprint.englishTeacherGuide,
  teacherGuideMetadata: yunusB1TeacherGuideMetadata,
  selfStudyGuide: yunusEmreB1Blueprint.englishSelfStudyGuide,
  studentGuideSections: yunusB1StudentGuideSections,
  studentGuideText: yunusB1StudentGuideText,
  studentGuideMetadata: yunusB1StudentGuideMetadata,
};

export const yunusEmreB1BookDataAr: BookData = {
  id: 'yunusEmre-b1-ar',
  title: 'قصص الأنبياء: يونس إمره (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: yunusEmreB1Blueprint.arabicPages,
  teacherGuide: yunusEmreB1Blueprint.arabicTeacherGuide,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreB1Blueprint.arabicSelfStudyGuide,
  studentGuideSections: yunusEmreB1StudentGuideSectionsAr,
  studentGuideText: yunusEmreB1StudentGuideTextAr,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
