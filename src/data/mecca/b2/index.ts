import { BookData } from '../../../types';
import {
  meccaB2PagesGoldEn,
  meccaB2TeacherGuideGoldEn,
  meccaB2TeacherGuideMetadataGoldEn,
  meccaB2SelfStudyGuideGoldEn,
  meccaB2StudentGuideSectionsGoldEn,
  meccaB2StudentGuideTextGoldEn,
  meccaB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  meccaB2PagesGoldAr,
  meccaB2TeacherGuideGoldAr,
  meccaB2TeacherGuideMetadataGoldAr,
  meccaB2SelfStudyGuideGoldAr,
  meccaB2StudentGuideSectionsGoldAr,
  meccaB2StudentGuideTextGoldAr,
  meccaB2StudentGuideMetadataGoldAr,
} from './goldAr';

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2PagesGoldEn,
  teacherGuide: meccaB2TeacherGuideGoldEn,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: meccaB2SelfStudyGuideGoldEn,
  studentGuideSections: meccaB2StudentGuideSectionsGoldEn,
  studentGuideText: meccaB2StudentGuideTextGoldEn,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldEn,
};

export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2PagesGoldAr,
  teacherGuide: meccaB2TeacherGuideGoldAr,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: meccaB2SelfStudyGuideGoldAr,
  studentGuideSections: meccaB2StudentGuideSectionsGoldAr,
  studentGuideText: meccaB2StudentGuideTextGoldAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataGoldAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
