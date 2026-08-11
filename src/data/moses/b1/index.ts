import { BookData } from '../../../types';
import { buildB1EvidenceGuides } from '../../b1GoldGuides';
import { applyHotspotSourceLock } from '../../storyHotspotSourceLock';
import { mosesB1TeacherGuideMetadata } from './en/teacherGuide';
import { mosesB1StudentGuideSections, mosesB1StudentGuideText, mosesB1StudentGuideMetadata } from './en/selfStudyGuide';

import { mosesB1TeacherGuideMetadataAr } from './ar/teacherGuide';
import { mosesB1StudentGuideSectionsAr, mosesB1StudentGuideTextAr, mosesB1StudentGuideMetadataAr } from './ar/selfStudyGuide';
import { mosesB1PagesRolloutEn, mosesB1PagesRolloutAr } from './rollout';

import { mosesA2TeacherGuideMetadata } from '../a2/en/teacherGuide';
import { mosesA2StudentGuideSections, mosesA2StudentGuideText, mosesA2StudentGuideMetadata } from '../a2/en/selfStudyGuide';

const mosesB1PagesLockedEn = applyHotspotSourceLock(mosesB1PagesRolloutEn, { language: 'en', level: 'B1' });
const mosesB1PagesLockedAr = applyHotspotSourceLock(mosesB1PagesRolloutAr, { language: 'ar', level: 'B1' });
const mosesB1GuidesEn = buildB1EvidenceGuides(mosesB1PagesLockedEn, 'en');
const mosesB1GuidesAr = buildB1EvidenceGuides(mosesB1PagesLockedAr, 'ar');

export const mosesB1BookDataEn: BookData = {
  id: 'moses-b1-en',
  title: 'Stories of the Prophets: Moses (B1)',
  level: 'B1',
  baseFontSize: 13,
  pages: mosesB1PagesLockedEn,
  teacherGuide: mosesB1GuidesEn.teacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadata.targetLearners ? mosesB1TeacherGuideMetadata : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1GuidesEn.selfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSections.length > 0 ? mosesB1StudentGuideSections : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideText || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadata.whoIsThisFor ? mosesB1StudentGuideMetadata : mosesA2StudentGuideMetadata,
};

export const mosesB1BookDataAr: BookData = {
  id: 'moses-b1-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B1)',
  level: 'B1',
  baseFontSize: 14,
  pages: mosesB1PagesLockedAr,
  teacherGuide: mosesB1GuidesAr.teacherGuide,
  teacherGuideMetadata: mosesB1TeacherGuideMetadataAr.targetLearners ? mosesB1TeacherGuideMetadataAr : mosesA2TeacherGuideMetadata,
  selfStudyGuide: mosesB1GuidesAr.selfStudyGuide,
  studentGuideSections: mosesB1StudentGuideSectionsAr.length > 0 ? mosesB1StudentGuideSectionsAr : mosesA2StudentGuideSections,
  studentGuideText: mosesB1StudentGuideTextAr || mosesA2StudentGuideText,
  studentGuideMetadata: mosesB1StudentGuideMetadataAr.whoIsThisFor ? mosesB1StudentGuideMetadataAr : mosesA2StudentGuideMetadata,
};

export const mosesB1BookData = mosesB1BookDataEn;
