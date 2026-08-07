import { BookData } from '../../../types';
import {
  abrahamA2PagesGoldAr,
  abrahamA2PagesGoldEn,
  abrahamA2SelfStudyGuideGoldAr,
  abrahamA2SelfStudyGuideGoldEn,
  abrahamA2StudentGuideMetadataGoldAr,
  abrahamA2StudentGuideMetadataGoldEn,
  abrahamA2StudentGuideSectionsGoldAr,
  abrahamA2StudentGuideSectionsGoldEn,
  abrahamA2StudentGuideTextGoldAr,
  abrahamA2StudentGuideTextGoldEn,
  abrahamA2TeacherGuideGoldAr,
  abrahamA2TeacherGuideGoldEn,
  abrahamA2TeacherGuideMetadataGoldAr,
  abrahamA2TeacherGuideMetadataGoldEn,
} from './gold';

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2PagesGoldEn,
  teacherGuide: abrahamA2TeacherGuideGoldEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataGoldEn,
  selfStudyGuide: abrahamA2SelfStudyGuideGoldEn,
  studentGuideSections: abrahamA2StudentGuideSectionsGoldEn,
  studentGuideMetadata: abrahamA2StudentGuideMetadataGoldEn,
  studentGuideText: abrahamA2StudentGuideTextGoldEn,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2PagesGoldAr,
  teacherGuide: abrahamA2TeacherGuideGoldAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataGoldAr,
  selfStudyGuide: abrahamA2SelfStudyGuideGoldAr,
  studentGuideSections: abrahamA2StudentGuideSectionsGoldAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataGoldAr,
  studentGuideText: abrahamA2StudentGuideTextGoldAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
