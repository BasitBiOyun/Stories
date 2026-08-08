import { BookData } from '../../../types';
import { yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1SelfStudyGuide, yunusB1StudentGuideSections, yunusB1StudentGuideText, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1SelfStudyGuideAr, yunusEmreB1StudentGuideSectionsAr, yunusEmreB1StudentGuideTextAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import {
  yunusEmreB1PagesGoldEn,
  yunusEmreB1PagesGoldAr,
  yunusEmreB1TeacherGuideGoldEn,
  yunusEmreB1TeacherGuideGoldAr,
} from './gold';

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Stories of the Prophets: Yunus Emre (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: yunusEmreB1PagesGoldEn,
  teacherGuide: yunusEmreB1TeacherGuideGoldEn,
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
  pages: yunusEmreB1PagesGoldAr,
  teacherGuide: yunusEmreB1TeacherGuideGoldAr,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr,
  selfStudyGuide: yunusEmreB1SelfStudyGuideAr,
  studentGuideSections: yunusEmreB1StudentGuideSectionsAr,
  studentGuideText: yunusEmreB1StudentGuideTextAr,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
