import { BookData } from '../../../types';
import {
  mosesA2PagesGoldAr,
  mosesA2PagesGoldEn,
  mosesA2SelfStudyGuideGoldAr,
  mosesA2SelfStudyGuideGoldEn,
  mosesA2StudentGuideMetadataGoldAr,
  mosesA2StudentGuideMetadataGoldEn,
  mosesA2StudentGuideSectionsGoldAr,
  mosesA2StudentGuideSectionsGoldEn,
  mosesA2StudentGuideTextGoldAr,
  mosesA2StudentGuideTextGoldEn,
  mosesA2TeacherGuideGoldAr,
  mosesA2TeacherGuideGoldEn,
  mosesA2TeacherGuideMetadataGoldAr,
  mosesA2TeacherGuideMetadataGoldEn,
} from './gold';

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2PagesGoldEn,
  teacherGuide: mosesA2TeacherGuideGoldEn,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataGoldEn,
  selfStudyGuide: mosesA2SelfStudyGuideGoldEn,
  studentGuideSections: mosesA2StudentGuideSectionsGoldEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataGoldEn,
  studentGuideText: mosesA2StudentGuideTextGoldEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2PagesGoldAr,
  teacherGuide: mosesA2TeacherGuideGoldAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataGoldAr,
  selfStudyGuide: mosesA2SelfStudyGuideGoldAr,
  studentGuideSections: mosesA2StudentGuideSectionsGoldAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataGoldAr,
  studentGuideText: mosesA2StudentGuideTextGoldAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
