import { BookData } from '../../../types';
import { abrahamB1Pages } from './en/pages';
import { abrahamB1TeacherGuide, abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1SelfStudyGuide, abrahamB1StudentGuideText, abrahamB1StudentGuideMetadata, abrahamB1StudentGuideSections } from './en/selfstudyGuide';

import { abrahamB1PagesAr } from './ar/pages';
import { abrahamB1TeacherGuideAr, abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideAr, abrahamB1StudentGuideTextAr, abrahamB1StudentGuideMetadataAr, abrahamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: abrahamB1Pages,
  teacherGuide: abrahamB1TeacherGuide,
  selfStudyGuide: abrahamB1SelfStudyGuide,
  studentGuideText: abrahamB1StudentGuideText,
  studentGuideSections: abrahamB1StudentGuideSections,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadata,
  studentGuideMetadata: abrahamB1StudentGuideMetadata
};

export const abrahamB1BookDataAr: BookData = {
  id: 'b1-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: abrahamB1PagesAr,
  teacherGuide: abrahamB1TeacherGuideAr,
  selfStudyGuide: abrahamB1SelfStudyGuideAr,
  studentGuideText: abrahamB1StudentGuideTextAr,
  studentGuideSections: abrahamB1StudentGuideSectionsAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  studentGuideMetadata: abrahamB1StudentGuideMetadataAr
};

export const abrahamB1BookData = abrahamB1BookDataEn;
