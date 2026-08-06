import { BookData } from '../../../types';
import { mosesB1Pages } from './en/pages';
import { mosesB1TeacherGuide, mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1SelfStudyGuide, mosesB1StudentGuideSections, mosesB1StudentGuideText, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';

import { mosesB1PagesAr } from './ar/pages';
import { mosesB1TeacherGuideAr, mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1SelfStudyGuideAr, mosesB1StudentGuideSectionsAr, mosesB1StudentGuideTextAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

import { mosesA2Pages } from '../a2/en/pages';
import { mosesA2TeacherGuide, mosesA2TeacherGuideMetadata } from '../a2/en/teacherGuide';
import { mosesA2SelfStudyGuide, mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from '../a2/en/selfStudyGuide';

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: mosesB1Pages.length > 0 ? mosesB1Pages : mosesA2Pages,
  teacherGuide: mosesB1TeacherGuide.length > 0 ? mosesB1TeacherGuide : mosesA2TeacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata.targetLearners ? mosesB1TeacherGuideMetadata : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1SelfStudyGuide.length > 0 ? mosesB1SelfStudyGuide : mosesA2SelfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSections.length > 0 ? mosesB1StudentGuideSections : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideText || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadata.whoIsThisFor ? mosesB1StudentGuideMetadata : mosesA2StudentGuideMetadata,
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: mosesB1PagesAr.length > 0 ? mosesB1PagesAr : mosesA2Pages,
  teacherGuide: mosesB1TeacherGuideAr.length > 0 ? mosesB1TeacherGuideAr : mosesA2TeacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr.targetLearners ? mosesB1TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1SelfStudyGuideAr.length > 0 ? mosesB1SelfStudyGuideAr : mosesA2SelfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSectionsAr.length > 0 ? mosesB1StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadataAr.whoIsThisFor ? mosesB1StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesB1BookData = mosesB1BookDataEn;
