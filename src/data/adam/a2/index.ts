import { BookData } from '../../../types';
import { adamA2PagesQualityFinalized, adamA2TeacherGuideQualityFinalized } from './en/qualityFinalization';
import { adamA2TeacherGuideMetadata } from './en/teacherGuide';
import { adamA2SelfStudyGuide, adamA2StudentGuideSections, adamA2StudentGuideText } from './en/selfStudyGuide';

import { adamA2PagesAr } from './ar/pages';
import { adamA2TeacherGuideAr, adamA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamA2SelfStudyGuideAr, adamA2StudentGuideSectionsAr, adamA2StudentGuideMetadataAr, adamA2StudentGuideTextAr } from './ar/selfStudyGuide';

export const adamA2BookDataEn: BookData = {
  id: 'a2-prophets-en',
  title: 'Stories of the Prophets: Adam (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: adamA2PagesQualityFinalized,
  teacherGuide: adamA2TeacherGuideQualityFinalized,
  teacherGuideMetadata: adamA2TeacherGuideMetadata,
  selfStudyGuide: adamA2SelfStudyGuide,
  studentGuideSections: adamA2StudentGuideSections,
  studentGuideText: adamA2StudentGuideText,
};

export const adamA2BookDataAr: BookData = {
  id: 'a2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'A2',
  baseFontSize: 14,
  pages: adamA2PagesAr,
  teacherGuide: adamA2TeacherGuideAr,
  teacherGuideMetadata: adamA2TeacherGuideMetadataAr,
  selfStudyGuide: adamA2SelfStudyGuideAr,
  studentGuideSections: adamA2StudentGuideSectionsAr,
  studentGuideMetadata: adamA2StudentGuideMetadataAr,
  studentGuideText: adamA2StudentGuideTextAr,
};

// For backward compatibility or default export
export const adamA2BookData = adamA2BookDataEn;