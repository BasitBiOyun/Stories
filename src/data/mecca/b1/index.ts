import { BookData } from '../../../types';
import { meccaB1Pages } from './en/pages';
import { meccaB1TeacherGuide, meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1SelfStudyGuide, meccaB1StudentGuideSections, meccaB1StudentGuideText, meccaB1StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB1PagesAr } from './ar/pages';
import { meccaB1TeacherGuideAr, meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1SelfStudyGuideAr, meccaB1StudentGuideSectionsAr, meccaB1StudentGuideTextAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: meccaB1Pages,
  teacherGuide: meccaB1TeacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadata,
  selfStudyGuide: meccaB1SelfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSections,
  studentGuideText: meccaB1StudentGuideText,
  studentGuideMetadata: meccaB1StudentGuideMetadata,
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: meccaB1PagesAr,
  teacherGuide: meccaB1TeacherGuideAr,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1SelfStudyGuideAr,
  studentGuideSections: meccaB1StudentGuideSectionsAr,
  studentGuideText: meccaB1StudentGuideTextAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
