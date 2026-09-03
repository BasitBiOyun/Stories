import { BookData } from '../../../types';
import { mosesA2Pages } from './en/pages';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesA2StudentGuideSections, mosesA2StudentGuideMetadata } from './en/selfStudyGuide';
import { mosesA2SelfStudyGuideCustomEn, mosesA2FullGuideTextCustomEn } from './en/selfStudyGuideCustom';

import { mosesA2PagesAr } from './ar/pages';
import { mosesA2TeacherGuideAr, mosesA2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesA2StudentGuideSectionsAr, mosesA2StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { mosesA2SelfStudyGuideCustomAr, mosesA2FullGuideTextCustomAr } from './ar/selfStudyGuideCustom';

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2Pages,
  teacherGuide: mosesA2TeacherGuide,
  teacherGuideMetadata: mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesA2SelfStudyGuideCustomEn,
  studentGuideSections: mosesA2StudentGuideSections,
  studentGuideText: mosesA2FullGuideTextCustomEn,
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
  selfStudyGuide: mosesA2SelfStudyGuideCustomAr,
  studentGuideSections: mosesA2StudentGuideSectionsAr.length > 0 ? mosesA2StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesA2FullGuideTextCustomAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataAr.whoIsThisFor ? mosesA2StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesA2BookData = mosesA2BookDataEn;
