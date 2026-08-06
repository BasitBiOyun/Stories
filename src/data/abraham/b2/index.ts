import { BookData } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2TeacherGuide, abrahamB2TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2StudentGuideMetadata, abrahamB2StudentGuideSections, abrahamB2StudentGuideText, abrahamB2SelfStudyGuide } from './en/selfStudyGuide';
import { abrahamB2StudentGuideMetadataAr, abrahamB2StudentGuideSectionsAr, abrahamB2StudentGuideTextAr, abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2Pages,
  teacherGuide: abrahamB2TeacherGuide,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadata,
  studentGuideMetadata: abrahamB2StudentGuideMetadata,
  studentGuideSections: abrahamB2StudentGuideSections,
  selfStudyGuide: abrahamB2SelfStudyGuide,
  studentGuideText: abrahamB2StudentGuideText
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (ع)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2PagesAr,
  teacherGuide: abrahamB2TeacherGuideAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataAr,
  studentGuideMetadata: abrahamB2StudentGuideMetadataAr,
  studentGuideSections: abrahamB2StudentGuideSectionsAr,
  selfStudyGuide: abrahamB2SelfStudyGuideAr,
  studentGuideText: abrahamB2StudentGuideTextAr
};
