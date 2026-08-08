import { BookData } from '../../../types';
import {
  adamB2PagesGoldEn,
  adamB2TeacherGuideGoldEn,
  adamB2SelfStudyGuideGoldEn,
  adamB2StudentGuideTextGoldEn,
  adamB2StudentGuideSectionsGoldEn,
  adamB2TeacherGuideMetadataGoldEn,
  adamB2StudentGuideMetadataGoldEn,
} from './gold';

import { adamB2PagesAr } from './ar/pages';
import { adamB2TeacherGuideAr, adamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB2SelfStudyGuideAr, adamB2StudentGuideTextAr, adamB2StudentGuideMetadataAr, adamB2StudentGuideSectionsAr } from './ar/selfStudyGuide';

export const adamB2BookDataEn: BookData = {
  id: 'b2-prophets-en',
  title: 'Stories of the Prophets: Adam (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: adamB2PagesGoldEn,
  teacherGuide: adamB2TeacherGuideGoldEn,
  selfStudyGuide: adamB2SelfStudyGuideGoldEn,
  studentGuideText: adamB2StudentGuideTextGoldEn,
  studentGuideSections: adamB2StudentGuideSectionsGoldEn,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldEn,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldEn
};

// Arabic remains on its canonical pre-Gold path until the Arabic B2 audit is completed.
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
