import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import {
  abrahamA2PagesFinalAr,
  abrahamA2PagesFinalEn,
  abrahamA2SelfStudyGuideFinalAr,
  abrahamA2SelfStudyGuideFinalEn,
  abrahamA2StudentGuideMetadataFinalAr,
  abrahamA2StudentGuideMetadataFinalEn,
  abrahamA2StudentGuideSectionsFinalAr,
  abrahamA2StudentGuideSectionsFinalEn,
  abrahamA2TeacherGuideFinalAr,
  abrahamA2TeacherGuideFinalEn,
  abrahamA2TeacherGuideMetadataFinalAr,
  abrahamA2TeacherGuideMetadataFinalEn,
} from './goldFinal';
import { abrahamA2FullGuideText } from './en/fullGuideText';
import { abrahamA2FullGuideTextAr } from './ar/fullGuideText';

const abrahamA2PagesLockedEn = applyA2FinalStoryLanguageLock(abrahamA2PagesFinalEn, 'ibrahim', 'en');
const abrahamA2PagesLockedAr = applyA2FinalStoryLanguageLock(abrahamA2PagesFinalAr, 'ibrahim', 'ar');

export const abrahamA2BookDataEn: BookData = {
  id: 'a2-abraham-en',
  title: 'Stories of the Prophets: Abraham (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: abrahamA2PagesLockedEn,
  teacherGuide: abrahamA2TeacherGuideFinalEn,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: abrahamA2SelfStudyGuideFinalEn,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalEn,
  studentGuideText: abrahamA2FullGuideText,
};

export const abrahamA2BookDataAr: BookData = {
  id: 'a2-abraham-ar',
  title: 'قصص الأنبياء: إبراهيم (عليه السلام) (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: abrahamA2PagesLockedAr,
  teacherGuide: abrahamA2TeacherGuideFinalAr,
  teacherGuideMetadata: abrahamA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: abrahamA2SelfStudyGuideFinalAr,
  studentGuideSections: abrahamA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: abrahamA2StudentGuideMetadataFinalAr,
  studentGuideText: abrahamA2FullGuideTextAr,
};

export const abrahamA2BookData = abrahamA2BookDataEn;
