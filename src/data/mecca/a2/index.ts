import { BookData } from '../../../types';
import { meccaA2Pages } from './en/pages';
import { meccaA2TeacherGuide, meccaA2TeacherGuideMetadata } from './en/teacherGuide';
import { meccaA2SelfStudyGuide, meccaA2StudentGuideSections, meccaA2StudentGuideText, meccaA2StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaA2PagesAr } from './ar/pages';
import { meccaA2TeacherGuideAr, meccaA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaA2SelfStudyGuideAr, meccaA2StudentGuideSectionsAr, meccaA2StudentGuideTextAr, meccaA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Stories of the Prophets: Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: meccaA2Pages,
  teacherGuide: meccaA2TeacherGuide,
  teacherGuideMetadata: meccaA2TeacherGuideMetadata,
  selfStudyGuide: meccaA2SelfStudyGuide,
  studentGuideSections: meccaA2StudentGuideSections,
  studentGuideText: meccaA2StudentGuideText,
  studentGuideMetadata: meccaA2StudentGuideMetadata,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'قصص الأنبياء: مكة المكرمة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: meccaA2PagesAr,
  teacherGuide: meccaA2TeacherGuideAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataAr,
  selfStudyGuide: meccaA2SelfStudyGuideAr,
  studentGuideSections: meccaA2StudentGuideSectionsAr,
  studentGuideText: meccaA2StudentGuideTextAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
