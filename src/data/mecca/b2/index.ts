import { BookData } from '../../../types';
import { meccaB2Pages } from './en/pages';
import { meccaB2TeacherGuide, meccaB2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB2SelfStudyGuide, meccaB2StudentGuideSections, meccaB2StudentGuideText, meccaB2StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB2PagesAr } from './ar/pages';
import { meccaB2TeacherGuideAr, meccaB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB2SelfStudyGuideAr, meccaB2StudentGuideSectionsAr, meccaB2StudentGuideTextAr, meccaB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const meccaB2BookDataEn: BookData = {
  id: 'mecca-b2-en',
  title: 'Stories of the Prophets: Mecca (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: meccaB2Pages,
  teacherGuide: meccaB2TeacherGuide,
  teacherGuideMetadata: meccaB2TeacherGuideMetadata,
  selfStudyGuide: meccaB2SelfStudyGuide,
  studentGuideSections: meccaB2StudentGuideSections,
  studentGuideText: meccaB2StudentGuideText,
  studentGuideMetadata: meccaB2StudentGuideMetadata,
};

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
