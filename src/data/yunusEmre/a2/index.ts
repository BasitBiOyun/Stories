import { BookData } from '../../../types';
import { applyA2FinalStoryLanguageLock } from '../../a2FinalStoryLanguageLock';
import { applyYunusA2PoemCard } from './poemCard';
import {
  yunusA2PagesFinalAr,
  yunusA2PagesFinalEn,
  yunusA2SelfStudyGuideFinalAr,
  yunusA2SelfStudyGuideFinalEn,
  yunusA2StudentGuideMetadataFinalAr,
  yunusA2StudentGuideMetadataFinalEn,
  yunusA2StudentGuideSectionsFinalAr,
  yunusA2StudentGuideSectionsFinalEn,
  yunusA2StudentGuideTextFinalAr,
  yunusA2StudentGuideTextFinalEn,
  yunusA2TeacherGuideFinalAr,
  yunusA2TeacherGuideFinalEn,
  yunusA2TeacherGuideMetadataFinalAr,
  yunusA2TeacherGuideMetadataFinalEn,
} from './goldFinal';

const yunusA2PagesLockedEn = applyYunusA2PoemCard(
  applyA2FinalStoryLanguageLock(yunusA2PagesFinalEn, 'yunusEmre', 'en'),
);
const yunusA2PagesLockedAr = applyA2FinalStoryLanguageLock(yunusA2PagesFinalAr, 'yunusEmre', 'ar');

export const yunusEmreA2BookDataEn: BookData = {
  id: 'yunusEmre-a2-en',
  title: 'Yunus Emre: Faith, Character, and Poetry (A2)',
  level: 'A2',
  baseFontSize: 13,
  pages: yunusA2PagesLockedEn,
  teacherGuide: yunusA2TeacherGuideFinalEn,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalEn,
  selfStudyGuide: yunusA2SelfStudyGuideFinalEn,
  studentGuideSections: yunusA2StudentGuideSectionsFinalEn,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalEn,
  studentGuideText: yunusA2StudentGuideTextFinalEn,
};

export const yunusEmreA2BookDataAr: BookData = {
  id: 'yunusEmre-a2-ar',
  title: 'يونس إمره: الإيمان والأخلاق والشعر (A2)',
  level: 'A2',
  baseFontSize: 14,
  pages: yunusA2PagesLockedAr,
  teacherGuide: yunusA2TeacherGuideFinalAr,
  teacherGuideMetadata: yunusA2TeacherGuideMetadataFinalAr,
  selfStudyGuide: yunusA2SelfStudyGuideFinalAr,
  studentGuideSections: yunusA2StudentGuideSectionsFinalAr,
  studentGuideMetadata: yunusA2StudentGuideMetadataFinalAr,
  studentGuideText: yunusA2StudentGuideTextFinalAr,
};

export const yunusEmreA2BookData = yunusEmreA2BookDataEn;
