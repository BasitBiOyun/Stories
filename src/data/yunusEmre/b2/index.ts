import { BookData } from '../../../types';
import {
  yunusB2PagesGoldEn,
  yunusB2TeacherGuideGoldEn,
  yunusB2TeacherGuideMetadataGoldEn,
  yunusB2SelfStudyGuideGoldEn,
  yunusB2StudentGuideSectionsGoldEn,
  yunusB2StudentGuideTextGoldEn,
  yunusB2StudentGuideMetadataGoldEn,
} from './gold';
import {
  yunusB2PagesGoldAr,
  yunusB2TeacherGuideGoldAr,
  yunusB2TeacherGuideMetadataGoldAr,
  yunusB2SelfStudyGuideGoldAr,
  yunusB2StudentGuideSectionsGoldAr,
  yunusB2StudentGuideTextGoldAr,
  yunusB2StudentGuideMetadataGoldAr,
} from './goldAr';

export const yunusEmreB2BookDataEn: BookData = {
  id: 'yunusEmre-b2-en',
  title: 'Stories of the Prophets: Yunus Emre (B2)',
  level: 'B2',
  baseFontSize: 13,
  pages: yunusB2PagesGoldEn,
  teacherGuide: yunusB2TeacherGuideGoldEn,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldEn,
  selfStudyGuide: yunusB2SelfStudyGuideGoldEn,
  studentGuideSections: yunusB2StudentGuideSectionsGoldEn,
  studentGuideText: yunusB2StudentGuideTextGoldEn,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldEn,
};

export const yunusEmreB2BookDataAr: BookData = {
  id: 'yunusEmre-b2-ar',
  title: 'قصص الأنبياء: يونس إمره (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: yunusB2PagesGoldAr,
  teacherGuide: yunusB2TeacherGuideGoldAr,
  teacherGuideMetadata: yunusB2TeacherGuideMetadataGoldAr,
  selfStudyGuide: yunusB2SelfStudyGuideGoldAr,
  studentGuideSections: yunusB2StudentGuideSectionsGoldAr,
  studentGuideText: yunusB2StudentGuideTextGoldAr,
  studentGuideMetadata: yunusB2StudentGuideMetadataGoldAr,
};

export const yunusEmreB2BookData = yunusEmreB2BookDataEn;
