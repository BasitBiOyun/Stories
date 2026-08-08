import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { meccaB1TeacherGuideMetadata } from './en/teacherGuide';
import { meccaB1StudentGuideSections, meccaB1StudentGuideText, meccaB1StudentGuideMetadata } from './en/selfStudyGuide';

import { meccaB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { meccaB1StudentGuideSectionsAr, meccaB1StudentGuideTextAr, meccaB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { meccaB1PagesGoldEn, meccaB1PagesGoldAr } from './gold';

const meccaB1GuidesEn = buildB1EvidenceGuides(meccaB1PagesGoldEn, 'en');
const meccaB1GuidesAr = buildB1EvidenceGuides(meccaB1PagesGoldAr, 'ar');

export const meccaB1BookDataEn: BookData = {
  id: 'mecca-b1-en',
  title: 'Stories of the Prophets: Mecca (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: meccaB1PagesGoldEn,
  teacherGuide: meccaB1GuidesEn.teacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadata,
  selfStudyGuide: meccaB1GuidesEn.selfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSections,
  studentGuideText: meccaB1StudentGuideText,
  studentGuideMetadata: meccaB1StudentGuideMetadata,
};

export const meccaB1BookDataAr: BookData = {
  id: 'mecca-b1-ar',
  title: 'قصص الأنبياء: مكة المكرمة (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: meccaB1PagesGoldAr,
  teacherGuide: meccaB1GuidesAr.teacherGuide,
  teacherGuideMetadata: meccaB1TeacherGuideMetadataAr,
  selfStudyGuide: meccaB1GuidesAr.selfStudyGuide,
  studentGuideSections: meccaB1StudentGuideSectionsAr,
  studentGuideText: meccaB1StudentGuideTextAr,
  studentGuideMetadata: meccaB1StudentGuideMetadataAr,
};

export const meccaB1BookData = meccaB1BookDataEn;
