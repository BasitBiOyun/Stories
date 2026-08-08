import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1StudentGuideSections, yunusB1StudentGuideText, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1StudentGuideSectionsAr, yunusEmreB1StudentGuideTextAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { yunusEmreB1PagesGoldEn, yunusEmreB1PagesGoldAr } from './gold';

const yunusB1GuidesEn = buildB1EvidenceGuides(yunusEmreB1PagesGoldEn, 'en');
const yunusB1GuidesAr = buildB1EvidenceGuides(yunusEmreB1PagesGoldAr, 'ar');

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Stories of the Prophets: Yunus Emre (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: yunusEmreB1PagesGoldEn,
  teacherGuide: yunusB1GuidesEn.teacherGuide,
  teacherGuideMetadata: yunusB1TeacherGuideMetadata,
  selfStudyGuide: yunusB1GuidesEn.selfStudyGuide,
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
  teacherGuide: yunusB1GuidesAr.teacherGuide,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr,
  selfStudyGuide: yunusB1GuidesAr.selfStudyGuide,
  studentGuideSections: yunusEmreB1StudentGuideSectionsAr,
  studentGuideText: yunusEmreB1StudentGuideTextAr,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
