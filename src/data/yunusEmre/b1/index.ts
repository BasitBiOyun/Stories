import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { yunusB1TeacherGuideMetadata } from './en/teacherGuide';
import { yunusB1StudentGuideSections, yunusB1StudentGuideText, yunusB1StudentGuideMetadata } from './en/selfStudyGuide';

import { yunusEmreB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { yunusEmreB1StudentGuideSectionsAr, yunusEmreB1StudentGuideTextAr, yunusEmreB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { yunusEmreB1PagesGoldEn, yunusEmreB1PagesGoldAr } from './gold';

const yunusB1PagesLockedEn = applyHotspotSourceLock(yunusEmreB1PagesGoldEn, { language: 'en', level: 'B1' });
const yunusB1PagesLockedAr = applyHotspotSourceLock(yunusEmreB1PagesGoldAr, { language: 'ar', level: 'B1' });
const yunusB1GuidesEn = buildB1EvidenceGuides(yunusB1PagesLockedEn, 'en');
const yunusB1GuidesAr = buildB1EvidenceGuides(yunusB1PagesLockedAr, 'ar');

export const yunusEmreB1BookDataEn: BookData = {
  id: 'yunusEmre-b1-en',
  title: 'Stories of the Prophets: Yunus Emre (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: yunusB1PagesLockedEn,
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
  pages: yunusB1PagesLockedAr,
  teacherGuide: yunusB1GuidesAr.teacherGuide,
  teacherGuideMetadata: yunusEmreB1TeacherGuideMetadataAr,
  selfStudyGuide: yunusB1GuidesAr.selfStudyGuide,
  studentGuideSections: yunusEmreB1StudentGuideSectionsAr,
  studentGuideText: yunusEmreB1StudentGuideTextAr,
  studentGuideMetadata: yunusEmreB1StudentGuideMetadataAr,
};

export const yunusEmreB1BookData = yunusEmreB1BookDataEn;
