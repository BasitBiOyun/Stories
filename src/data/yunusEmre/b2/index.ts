import { BookData } from '../../../types';
import { yunusB2Pages } from './en/pages';
import { yunusB2TeacherGuide, yunusB2TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB2SelfStudyGuide, yunusB2StudentGuideSections, yunusB2StudentGuideText, yunusB2StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreB2PagesAr } from './ar/pages';
import { yunusEmreB2TeacherGuideAr, yunusEmreB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB2SelfStudyGuideAr, yunusEmreB2StudentGuideSectionsAr, yunusEmreB2StudentGuideTextAr, yunusEmreB2StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2Pages,
  teacherGuide: yunusB2TeacherGuide,
  teacherGuideMetadata: yunusB2TeacherGuideMetadata,
  selfStudyGuide: yunusB2SelfStudyGuide,
  studentGuideSections: yunusB2StudentGuideSections,
  studentGuideText: yunusB2StudentGuideText,
  studentGuideMetadata: yunusB2StudentGuideMetadata,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusEmreB2PagesAr.length > 0 ? yunusEmreB2PagesAr : yunusB2Pages,
  teacherGuide: yunusEmreB2TeacherGuideAr.length > 0 ? yunusEmreB2TeacherGuideAr : yunusB2TeacherGuide,
  teacherGuideMetadata: yunusEmreB2TeacherGuideMetadataAr.targetLearners ? yunusEmreB2TeacherGuideMetadataAr : yunusB2TeacherGuideMetadata,
  selfStudyGuide: yunusEmreB2SelfStudyGuideAr.length > 0 ? yunusEmreB2SelfStudyGuideAr : yunusB2SelfStudyGuide,
  studentGuideSections: yunusEmreB2StudentGuideSectionsAr.length > 0 ? yunusEmreB2StudentGuideSectionsAr : yunusB2StudentGuideSections,
  studentGuideText: yunusEmreB2StudentGuideTextAr || yunusB2StudentGuideText,
  studentGuideMetadata: yunusEmreB2StudentGuideMetadataAr.whoIsThisFor ? yunusEmreB2StudentGuideMetadataAr : yunusB2StudentGuideMetadata,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
