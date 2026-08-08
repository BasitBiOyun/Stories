import { BookData } from '../../../types';
import {
  abrahamB2PagesGoldEn,
  abrahamB2TeacherGuideGoldEn,
  abrahamB2TeacherGuideMetadataGoldEn,
  abrahamB2StudentGuideMetadataGoldEn,
  abrahamB2StudentGuideSectionsGoldEn,
  abrahamB2StudentGuideTextGoldEn,
  abrahamB2SelfStudyGuideGoldEn,
} from './gold';

import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2StudentGuideMetadataAr, abrahamB2StudentGuideSectionsAr, abrahamB2StudentGuideTextAr, abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: abrahamB2PagesGoldEn,
  teacherGuide: abrahamB2TeacherGuideGoldEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: abrahamB2StudentGuideMetadataGoldEn,
  studentGuideSections: abrahamB2StudentGuideSectionsGoldEn,
  selfStudyGuide: abrahamB2SelfStudyGuideGoldEn,
  studentGuideText: abrahamB2StudentGuideTextGoldEn
};

// Arabic stays on its canonical pre-Gold path until its language-specific audit is complete.
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
