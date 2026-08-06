import { BookData } from '../../../types';
import { mosesA2Pages } from './en/pages';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesA2SelfStudyGuide, mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from './en/selfStudyGuide';

import { mosesA2PagesAr } from './ar/pages';
import { mosesA2TeacherGuideAr, mosesA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesA2SelfStudyGuideAr, mosesA2StudentGuideSectionsAr, mosesA2StudentGuideTextAr, mosesA2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2Pages,
  teacherGuide: mosesA2TeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesA2SelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSections,
  studentGuideText: mosesA2StudentGuideText,
  studentGuideMetadata: mosesA2StudentGuideMetadata,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2PagesAr.length > 0 ? mosesA2PagesAr : mosesA2Pages,
  teacherGuide: mosesA2TeacherGuideAr.length > 0 ? mosesA2TeacherGuideAr : mosesA2TeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataAr.targetLearners ? mosesA2TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesA2SelfStudyGuideAr.length > 0 ? mosesA2SelfStudyGuideAr : mosesA2SelfStudyGuide,
  studentGuideSections: mosesA2StudentGuideSectionsAr.length > 0 ? mosesA2StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesA2StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesA2StudentGuideMetadataAr.whoIsThisFor ? mosesA2StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesA2BookData = mosesA2BookDataEn;
