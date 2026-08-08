import { BookData } from '../../../types';
import { adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1SelfStudyGuide, adamB1StudentGuideText, adamB1StudentGuideMetadata, adamB1StudentGuideSections } from './en/selfStudyGuide';

import { adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1SelfStudyGuideAr, adamB1StudentGuideTextAr, adamB1StudentGuideMetadataAr, adamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import {
  adamB1PagesGoldEn,
  adamB1PagesGoldAr,
  adamB1TeacherGuideGoldEn,
  adamB1TeacherGuideGoldAr,
} from './gold';

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: adamB1PagesGoldEn,
  teacherGuide: adamB1TeacherGuideGoldEn,
  selfStudyGuide: adamB1SelfStudyGuide,
  studentGuideText: adamB1StudentGuideText,
  studentGuideSections: adamB1StudentGuideSections,
  teacherGuideMetadata: adamB1TeacherGuideMetadata,
  studentGuideMetadata: adamB1StudentGuideMetadata
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: adamB1PagesGoldAr,
  teacherGuide: adamB1TeacherGuideGoldAr,
  selfStudyGuide: adamB1SelfStudyGuideAr,
  studentGuideText: adamB1StudentGuideTextAr,
  studentGuideSections: adamB1StudentGuideSectionsAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr
};
