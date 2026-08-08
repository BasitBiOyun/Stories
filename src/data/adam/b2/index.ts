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
import {
  adamB2PagesGoldAr,
  adamB2TeacherGuideGoldAr,
  adamB2SelfStudyGuideGoldAr,
  adamB2StudentGuideTextGoldAr,
  adamB2StudentGuideSectionsGoldAr,
  adamB2TeacherGuideMetadataGoldAr,
  adamB2StudentGuideMetadataGoldAr,
} from './goldAr';

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

export const adamB2BookDataAr: BookData = {
  id: 'b2-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B2',
  baseFontSize: 14,
  pages: adamB2PagesGoldAr,
  teacherGuide: adamB2TeacherGuideGoldAr,
  selfStudyGuide: adamB2SelfStudyGuideGoldAr,
  studentGuideText: adamB2StudentGuideTextGoldAr,
  studentGuideSections: adamB2StudentGuideSectionsGoldAr,
  teacherGuideMetadata: adamB2TeacherGuideMetadataGoldAr,
  studentGuideMetadata: adamB2StudentGuideMetadataGoldAr
};
