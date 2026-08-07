import { BookData } from '../../../types';
import {
  meccaA2PagesFinalAr,
  meccaA2PagesFinalEn,
  meccaA2SelfStudyGuideFinalAr,
  meccaA2SelfStudyGuideFinalEn,
  meccaA2StudentGuideMetadataFinalAr,
  meccaA2StudentGuideMetadataFinalEn,
  meccaA2StudentGuideSectionsFinalAr,
  meccaA2StudentGuideSectionsFinalEn,
  meccaA2StudentGuideTextFinalAr,
  meccaA2StudentGuideTextFinalEn,
  meccaA2TeacherGuideFinalAr,
  meccaA2TeacherGuideFinalEn,
  meccaA2TeacherGuideMetadataFinalAr,
  meccaA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

export const meccaA2BookDataEn: BookData = {
  id: 'mecca-a2-en',
  title: 'Bilal ibn Rabah and Mecca (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: meccaA2PagesFinalEn,
  teacherGuide: meccaA2TeacherGuideFinalEn,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: meccaA2SelfStudyGuideFinalEn,
  studentGuideSections: meccaA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalEn,
  studentGuideText: meccaA2StudentGuideTextFinalEn,
};

export const meccaA2BookDataAr: BookData = {
  id: 'mecca-a2-ar',
  title: 'بلال بن رباح ومكة (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: meccaA2PagesFinalAr,
  teacherGuide: meccaA2TeacherGuideFinalAr,
  teacherGuideMetadata: meccaA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: meccaA2SelfStudyGuideFinalAr,
  studentGuideSections: meccaA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: meccaA2StudentGuideMetadataFinalAr,
  studentGuideText: meccaA2StudentGuideTextFinalAr,
};

export const meccaA2BookData = meccaA2BookDataEn;
