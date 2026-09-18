import type { BookData, PageData } from '../../../types';
import { abrahamB2Pages } from './en/pages';
import { abrahamB2PagesAr } from './ar/pages';
import { abrahamB2TeacherGuideEn, abrahamB2TeacherGuideMetadata } from './en/teacherGuide';
import { abrahamB2TeacherGuideAr, abrahamB2TeacherGuideMetadataAr } from './ar/teacherGuide';
import { abrahamB2SelfStudyGuideEn } from './en/selfStudyGuide';
import { abrahamB2SelfStudyGuideAr } from './ar/selfStudyGuide';

const ABRAHAM_B2_ENGLISH_GLOSSARY_EXCLUSIONS = new Set([
  'al-maqam',
  'tribe of jurham',
]);

const normalizeTerm = (word: string) => word.trim().toLocaleLowerCase();

const buildEnglishPages = (): PageData[] => {
  const glossaryVocabulary = Array.from(
    new Map(
      abrahamB2Pages
        .filter(page => page.type === 'story')
        .flatMap(page => page.vocabulary ?? [])
        .filter(item => !ABRAHAM_B2_ENGLISH_GLOSSARY_EXCLUSIONS.has(normalizeTerm(item.word)))
        .map(item => [normalizeTerm(item.word), item] as const),
    ).values(),
  );

  return abrahamB2Pages.map(page => (
    page.type === 'glossary'
      ? { ...page, vocabulary: glossaryVocabulary }
      : page
  ));
};



export const abrahamB2BookDataEn: BookData = {
  id: 'b2-abraham-en',
  title: 'Prophet Abraham (B2)',
  level: 'B2',
  baseFontSize: 12,
  pages: buildEnglishPages(),
  teacherGuide: abrahamB2TeacherGuideEn,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadata,
  selfStudyGuide: abrahamB2SelfStudyGuideEn,
};

export const abrahamB2BookDataAr: BookData = {
  id: 'b2-abraham-ar',
  title: 'النبي إبراهيم (عليه السلام) (B2)',
  level: 'B2',
  baseFontSize: 14,
  pages: abrahamB2PagesAr,
  teacherGuide: abrahamB2TeacherGuideAr,
  teacherGuideMetadata: abrahamB2TeacherGuideMetadataAr,
  selfStudyGuide: abrahamB2SelfStudyGuideAr,
};

export const abrahamB2BookData = abrahamB2BookDataEn;
