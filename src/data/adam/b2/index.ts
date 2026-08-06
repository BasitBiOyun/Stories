import { BookData } from '../../../types';
import { adamB2Pages } from './en/pages';
import { adamB2TeacherGuide, adamB2TeacherGuideMetadata } from './en/teacherGuide';
import { adamB2SelfStudyGuide, adamB2StudentGuideText, adamB2StudentGuideMetadata, adamB2StudentGuideSections } from './en/selfStudyGuide';

import { adamB2PagesAr } from './ar/pages';
import { adamB2TeacherGuideAr, adamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB2SelfStudyGuideAr, adamB2StudentGuideTextAr, adamB2StudentGuideMetadataAr, adamB2StudentGuideSectionsAr } from './ar/selfStudyGuide';

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2Pages,
  teacherGuide: adamB2TeacherGuide,
  selfStudyGuide: adamB2SelfStudyGuide,
  studentGuideText: adamB2StudentGuideText,
  studentGuideSections: adamB2StudentGuideSections,
  teacherGuideMetadata: adamB2TeacherGuideMetadata,
  studentGuideMetadata: adamB2StudentGuideMetadata
};

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2PagesAr,
  teacherGuide: adamB2TeacherGuideAr,
  selfStudyGuide: adamB2SelfStudyGuideAr,
  studentGuideText: adamB2StudentGuideTextAr,
  studentGuideSections: adamB2StudentGuideSectionsAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataAr,
  studentGuideMetadata: adamB2StudentGuideMetadataAr
};
