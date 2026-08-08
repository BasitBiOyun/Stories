import { mosesB2StudentGuideSectionsGoldEn } from './goldGuides';

export { mosesB2PagesGoldEn, mosesB2GoldContract, mosesB2QuestionSpecs } from './goldLearning';
export {
  mosesB2TeacherGuideGoldEn,
  mosesB2TeacherGuideMetadataGoldEn,
  mosesB2SelfStudyGuideGoldEn,
  mosesB2StudentGuideTextGoldEn,
  mosesB2StudentGuideSectionsGoldEn,
  mosesB2StudentGuideMetadataGoldEn,
} from './goldGuides';

export const mosesB2StudentGuideSectionsFinalEn = mosesB2StudentGuideSectionsGoldEn.map((section) => ({
  ...section,
  text: section.text.replace(/\b20 chapters\b/g, '24 chapters'),
  points: section.points.map((point) => point.replace(/\b20 chapters\b/g, '24 chapters')),
}));
