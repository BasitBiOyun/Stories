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

import { meccaB2PagesAr } from './ar/pages';
import { meccaB2TeacherGuideAr, meccaB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideSectionsAr, meccaB2StudentGuideTextAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

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

// Arabic remains on its canonical pre-Gold path until the Arabic audit is completed.
export const meccaB2BookDataAr: BookData = {
  id: 'mecca-b2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: meccaB2PagesAr,
  teacherGuide: meccaB2TeacherGuideAr,
  teacherGuideMetadata: meccaB2TeacherGuideMetadataAr,
  selfStudyGuide: meccaB2SelfStudyGuideAr,
  studentGuideSections: meccaB2StudentGuideSectionsAr,
  studentGuideText: meccaB2StudentGuideTextAr,
  studentGuideMetadata: meccaB2StudentGuideMetadataAr,
};

export const meccaB2BookData = meccaB2BookDataEn;
