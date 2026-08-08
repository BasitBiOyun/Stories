import { BookData } from '../../../types';
import { abrahamB1TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB1SelfStudyGuide, abrahamB1StudentGuideText, abrahamB1StudentGuideMetadata, abrahamB1StudentGuideSections } from './en/selfstudyGuide';

import { abrahamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB1SelfStudyGuideAr, abrahamB1StudentGuideTextAr, abrahamB1StudentGuideMetadataAr, abrahamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import {
  abrahamB1PagesGoldEn,
  abrahamB1PagesGoldAr,
  abrahamB1TeacherGuideGoldEn,
  abrahamB1TeacherGuideGoldAr,
} from './gold';

export const abrahamB1BookDataEn: BookData = {
  id: 'b1-abraham-en',
  title: 'Stories of the Prophets: Abraham (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: abrahamB1PagesGoldEn,
  teacherGuide: abrahamB1TeacherGuideGoldEn,
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
  pages: abrahamB1PagesGoldAr,
  teacherGuide: abrahamB1TeacherGuideGoldAr,
  selfStudyGuide: abrahamB1SelfStudyGuideAr,
  studentGuideText: abrahamB1StudentGuideTextAr,
  studentGuideSections: abrahamB1StudentGuideSectionsAr,
  teacherGuideMetadata: abrahamB1TeacherGuideMetadataAr,
  studentGuideMetadata: abrahamB1StudentGuideMetadataAr
};

export const abrahamB1BookData = abrahamB1BookDataEn;
