import { BookData } from '../../../types';
import { yunusB1Pages } from './en/pages';
import { yunusB1TeacherGuide, yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1SelfStudyGuide, yunusB1StudentGuideSections, yunusB1StudentGuideText, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreB1PagesAr } from './ar/pages';
import { yunusEmreB1TeacherGuideAr, yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1SelfStudyGuideAr, yunusEmreB1StudentGuideSectionsAr, yunusEmreB1StudentGuideTextAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Stories of the Prophets: Yunus Emre (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: yunusB1Pages,
  teacherGuide: yunusB1TeacherGuide,
  teacherGuideMetadata: yunusB1TeacherGuideMetadata,
  selfStudyGuide: yunusB1SelfStudyGuide,
  studentGuideSections: yunusB1StudentGuideSections,
  studentGuideText: yunusB1StudentGuideText,
  studentGuideMetadata: yunusB1StudentGuideMetadata,
};

export const yunusEmreB1BookDataAr: BookData = {
  id: 'yunusEmre-b1-ar',
  title: 'قصص الأنبياء: يونس إمره (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: yunusEmreB1PagesAr.length > 0 ? yunusEmreB1PagesAr : yunusB1Pages,
  teacherGuide: yunusEmreB1TeacherGuideAr.length > 0 ? yunusEmreB1TeacherGuideAr : yunusB1TeacherGuide,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr.targetLearners ? yunusEmreB1TeacherGuideMetadataAr : yunusB1TeacherGuideMetadata,
  selfStudyGuide: yunusEmreB1SelfStudyGuideAr.length > 0 ? yunusEmreB1SelfStudyGuideAr : yunusB1SelfStudyGuide,
  studentGuideSections: yunusEmreB1StudentGuideSectionsAr.length > 0 ? yunusEmreB1StudentGuideSectionsAr : yunusB1StudentGuideSections,
  studentGuideText: yunusEmreB1StudentGuideTextAr || yunusB1StudentGuideText,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr.whoIsThisFor ? yunusEmreB1StudentGuideMetadataAr : yunusB1StudentGuideMetadata,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
