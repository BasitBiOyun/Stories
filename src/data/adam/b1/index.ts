import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { applyHighlightSurfaceForms } from '../../highlightSourceLock';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { adamB1TeacherGuideMetadata } from './en/teacherGuide';
import { adamB1StudentGuideText, adamB1StudentGuideMetadata, adamB1StudentGuideSections } from './en/selfStudyGuide';

import { adamB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { adamB1StudentGuideTextAr, adamB1StudentGuideMetadataAr, adamB1StudentGuideSectionsAr } from './ar/selfStudyGuide';
import { adamB1PagesGoldEn, adamB1PagesGoldAr } from './gold';

const adamB1PagesLockedEn = applyHotspotSourceLock(adamB1PagesGoldEn, {
  language: 'en',
  level: 'B1',
  titleOverrides: {
    10: { 'h10-1': 'Sheep', 'h10-2': 'Crops' },
    11: { 'h11-1': 'Raven', 'h11-2': 'Anger' },
  },
});
const adamB1PagesLockedAr = applyHighlightSurfaceForms(
  applyHotspotSourceLock(adamB1PagesGoldAr, { language: 'ar', level: 'B1' }),
  'ar',
);
const adamB1GuidesEn = buildB1EvidenceGuides(adamB1PagesLockedEn, 'en');
const adamB1GuidesAr = buildB1EvidenceGuides(adamB1PagesLockedAr, 'ar');

export const adamB1BookDataEn: BookData = {
  id: 'b1-prophets-en',
  title: 'Stories of the Prophets: Adam (B1)',
  level: 'B1',
  baseFontSize: 12,
  pages: adamB1PagesLockedEn,
  teacherGuide: adamB1GuidesEn.teacherGuide,
  selfStudyGuide: adamB1GuidesEn.selfStudyGuide,
  studentGuideText: adamB1StudentGuideText,
  studentGuideSections: adamB1StudentGuideSections,
  teacherGuideMetadata: adamB1TeacherGuideMetadata,
  studentGuideMetadata: adamB1StudentGuideMetadata
};

export const adamB1BookDataAr: BookData = {
  id: 'b1-prophets-ar',
  title: 'قصص الأنبياء: آدم (عليه السلام)',
  level: 'B1',
  baseFontSize: 14,
  pages: adamB1PagesLockedAr,
  teacherGuide: adamB1GuidesAr.teacherGuide,
  selfStudyGuide: adamB1GuidesAr.selfStudyGuide,
  studentGuideText: adamB1StudentGuideTextAr,
  studentGuideSections: adamB1StudentGuideSectionsAr,
  teacherGuideMetadata: adamB1TeacherGuideMetadataAr,
  studentGuideMetadata: adamB1StudentGuideMetadataAr
};
