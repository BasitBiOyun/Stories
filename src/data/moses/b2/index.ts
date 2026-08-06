import { BookData } from '../../../types';
import { mosesB2Pages } from './en/pages';
import { mosesB2TeacherGuide, mosesB2TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB2SelfStudyGuide, mosesB2StudentGuideSections, mosesB2StudentGuideText, mosesB2StudentGuideMetadata } from './en/selfStudyGuide';

import { mosesB2PagesAr } from './ar/pages';
import { mosesB2TeacherGuideAr, mosesB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB2SelfStudyGuideAr, mosesB2StudentGuideSectionsAr, mosesB2StudentGuideTextAr, mosesB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

import { mosesA2Pages } from '../a2/en/pages';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from '../a2/en/teacherGuide';
import { mosesA2SelfStudyGuide, mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from '../a2/en/selfStudyGuide';

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: mosesB2Pages.length > 0 ? mosesB2Pages : mosesA2Pages,
  teacherGuide: mosesB2TeacherGuide.length > 0 ? mosesB2TeacherGuide : mosesA2TeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadata.targetLearners ? mosesB2TeacherGuideMetadata : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB2SelfStudyGuide.length > 0 ? mosesB2SelfStudyGuide : mosesA2SelfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSections.length > 0 ? mosesB2StudentGuideSections : mosesA2StudentGuideSections,
  studentGuideText: mosesB2StudentGuideText || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB2StudentGuideMetadata.whoIsThisFor ? mosesB2StudentGuideMetadata : mosesA2StudentGuideMetadata,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: mosesB2PagesAr.length > 0 ? mosesB2PagesAr : mosesA2Pages,
  teacherGuide: mosesB2TeacherGuideAr.length > 0 ? mosesB2TeacherGuideAr : mosesA2TeacherGuide,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataAr.targetLearners ? mosesB2TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB2SelfStudyGuideAr.length > 0 ? mosesB2SelfStudyGuideAr : mosesA2SelfStudyGuide,
  studentGuideSections: mosesB2StudentGuideSectionsAr.length > 0 ? mosesB2StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesB2StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB2StudentGuideMetadataAr.whoIsThisFor ? mosesB2StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesB2BookData = mosesB2BookDataEn;
