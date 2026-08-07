import { BookData } from '../../../types';
import {
  meccaA2PagesGoldAr,
  meccaA2PagesGoldEn,
  meccaA2SelfStudyGuideGoldAr,
  meccaA2SelfStudyGuideGoldEn,
  meccaA2StudentGuideMetadataGoldAr,
  meccaA2StudentGuideMetadataGoldEn,
  meccaA2StudentGuideSectionsGoldAr,
  meccaA2StudentGuideSectionsGoldEn,
  meccaA2StudentGuideTextGoldAr,
  meccaA2StudentGuideTextGoldEn,
  meccaA2TeacherGuideGoldAr,
  meccaA2TeacherGuideGoldEn,
  meccaA2TeacherGuideMetadataGoldAr,
  meccaA2TeacherGuideMetadataGoldEn,
} from './gold';

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: meccaA2PagesGoldEn,
  teacherGuide: meccaA2TeacherGuideGoldEn,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataGoldEn,
  selfStudyGuide: meccaA2SelfStudyGuideGoldEn,
  studentGuideSections: meccaA2StudentGuideSectionsGoldEn,
  studentGuideMetadata: meccaA2StudentGuideMetadataGoldEn,
  studentGuideText: meccaA2StudentGuideTextGoldEn,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'بلال بن رباح ومكة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: meccaA2PagesGoldAr,
  teacherGuide: meccaA2TeacherGuideGoldAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataGoldAr,
  selfStudyGuide: meccaA2SelfStudyGuideGoldAr,
  studentGuideSections: meccaA2StudentGuideSectionsGoldAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataGoldAr,
  studentGuideText: meccaA2StudentGuideTextGoldAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
