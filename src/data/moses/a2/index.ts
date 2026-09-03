import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import {
  mosesA2PagesFinalAr,
  mosesA2PagesFinalEn,
  mosesA2StudentGuideMetadataFinalAr,
  mosesA2StudentGuideMetadataFinalEn,
  mosesA2StudentGuideSectionsFinalAr,
  mosesA2StudentGuideSectionsFinalEn,
  mosesA2TeacherGuideFinalAr,
  mosesA2TeacherGuideFinalEn,
  mosesA2TeacherGuideMetadataFinalAr,
  mosesA2TeacherGuideMetadataFinalEn,
} from './goldFinal';
import { mosesA2SelfStudyGuideCustomEn, mosesA2FullGuideTextCustomEn } from './en/selfStudyGuideCustom';
import { mosesA2SelfStudyGuideCustomAr, mosesA2FullGuideTextCustomAr } from './ar/selfStudyGuideCustom';

const mosesA2PagesLockedEn = applyA2FinalStoryLanguageLock(mosesA2PagesFinalEn, 'musa', 'en');
const mosesA2PagesLockedAr = applyA2FinalStoryLanguageLock(mosesA2PagesFinalAr, 'musa', 'ar');

export const mosesA2BookDataEn: BookData = {
  id: 'moses-a2-en',
  title: 'Stories of the Prophets: Moses (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: mosesA2PagesLockedEn,
  teacherGuide: mosesA2TeacherGuideFinalEn,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesA2SelfStudyGuideCustomEn,
  studentGuideSections: mosesA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalEn,
  studentGuideText: mosesA2FullGuideTextCustomEn,
};

export const mosesA2BookDataAr: BookData = {
  id: 'moses-a2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: mosesA2PagesLockedAr,
  teacherGuide: mosesA2TeacherGuideFinalAr,
  teacherGuideMetadata: mosesA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesA2SelfStudyGuideCustomAr,
  studentGuideSections: mosesA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: mosesA2StudentGuideMetadataFinalAr,
  studentGuideText: mosesA2FullGuideTextCustomAr,
};

export const mosesA2BookData = mosesA2BookDataEn;
