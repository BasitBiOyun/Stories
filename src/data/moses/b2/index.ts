import { BookData } from '../../../types';
import { mosesB2PagesGoldEn } from './goldLearning';
import {
  mosesB2TeacherGuideFinalEn,
  mosesB2TeacherGuideMetadataFinalEn,
  mosesB2SelfStudyGuideFinalEn,
  mosesB2StudentGuideSectionsFinalEn,
  mosesB2StudentGuideTextFinalEn,
  mosesB2StudentGuideMetadataFinalEn,
} from './goldGuideFinal';
import { mosesB2PagesGoldAr } from './goldLearningAr';
import {
  mosesB2TeacherGuideFinalAr,
  mosesB2TeacherGuideMetadataFinalAr,
  mosesB2SelfStudyGuideFinalAr,
  mosesB2StudentGuideSectionsFinalAr,
  mosesB2StudentGuideTextFinalAr,
  mosesB2StudentGuideMetadataFinalAr,
} from './goldGuideFinalAr';

export const mosesB2BookDataEn: BookData = {
  id: 'moses-b2-en',
  title: 'Stories of the Prophets: Moses (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: mosesB2PagesGoldEn,
  teacherGuide: mosesB2TeacherGuideFinalEn,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataFinalEn,
  selfStudyGuide: mosesB2SelfStudyGuideFinalEn,
  studentGuideSections: mosesB2StudentGuideSectionsFinalEn,
  studentGuideText: mosesB2StudentGuideTextFinalEn,
  studentGuideMetadata: mosesB2StudentGuideMetadataFinalEn,
};

export const mosesB2BookDataAr: BookData = {
  id: 'moses-b2-ar',
  title: 'قصص الأنبياء: موسى (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: mosesB2PagesGoldAr,
  teacherGuide: mosesB2TeacherGuideFinalAr,
  teacherGuideMetadata: mosesB2TeacherGuideMetadataFinalAr,
  selfStudyGuide: mosesB2SelfStudyGuideFinalAr,
  studentGuideSections: mosesB2StudentGuideSectionsFinalAr,
  studentGuideText: mosesB2StudentGuideTextFinalAr,
  studentGuideMetadata: mosesB2StudentGuideMetadataFinalAr,
};

export const mosesB2BookData = mosesB2BookDataEn;
