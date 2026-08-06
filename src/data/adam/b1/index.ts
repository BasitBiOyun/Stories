import { BookData } from '../../../types';
import { adamB1Pages } from './en/pages';
import { adamB1TeacherGuide, adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1SelfStudyGuide, adamB1StudentGuideText, adamB1StudentGuideMetadata, adamB1StudentGuideSections } from './en/selfStudyGuide';

import { adamB1PagesAr } from './ar/pages';
import { adamB1TeacherGuideAr, adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1SelfStudyGuideAr, adamB1StudentGuideTextAr, adamB1StudentGuideMetadataAr, adamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: adamB1Pages,
  teacherGuide: adamB1TeacherGuide,
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
  pages: adamB1PagesAr,
  teacherGuide: adamB1TeacherGuideAr,
  selfStudyGuide: adamB1SelfStudyGuideAr,
  studentGuideText: adamB1StudentGuideTextAr,
  studentGuideSections: adamB1StudentGuideSectionsAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr
};
