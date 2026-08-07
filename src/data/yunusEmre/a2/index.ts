import { BookData } from '../../../types';
import {
  yunusA2PagesGoldAr,
  yunusA2PagesGoldEn,
  yunusA2SelfStudyGuideGoldAr,
  yunusA2SelfStudyGuideGoldEn,
  yunusA2StudentGuideMetadataGoldAr,
  yunusA2StudentGuideMetadataGoldEn,
  yunusA2StudentGuideSectionsGoldAr,
  yunusA2StudentGuideSectionsGoldEn,
  yunusA2StudentGuideTextGoldAr,
  yunusA2StudentGuideTextGoldEn,
  yunusA2TeacherGuideGoldAr,
  yunusA2TeacherGuideGoldEn,
  yunusA2TeacherGuideMetadataGoldAr,
  yunusA2TeacherGuideMetadataGoldEn,
} from './gold';

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2PagesGoldEn,
  teacherGuide: yunusA2TeacherGuideGoldEn,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataGoldEn,
  selfStudyGuide: yunusA2SelfStudyGuideGoldEn,
  studentGuideSections: yunusA2StudentGuideSectionsGoldEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataGoldEn,
  studentGuideText: yunusA2StudentGuideTextGoldEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusA2PagesGoldAr,
  teacherGuide: yunusA2TeacherGuideGoldAr,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataGoldAr,
  selfStudyGuide: yunusA2SelfStudyGuideGoldAr,
  studentGuideSections: yunusA2StudentGuideSectionsGoldAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataGoldAr,
  studentGuideText: yunusA2StudentGuideTextGoldAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
