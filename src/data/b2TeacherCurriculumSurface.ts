import type { TeacherGuideMetadata } from '../types';
import type { BlueprintLanguage } from './learningBlueprint';

/**
 * TeacherGuide's Approach panel renders metadata.approachDesc directly.
 * Keep the curriculum map visible there while leaving the chapter-specific
 * pedagogy/grammar/pronunciation content to b2GuidePresentation.
 */
export const makeB2CurriculumVisible = (
  metadata: TeacherGuideMetadata,
  language: BlueprintLanguage,
): TeacherGuideMetadata => {
  const curriculumMap = language === 'en'
    ? 'Curriculum map — TYMM YDAB2 Reading/Meaning: primary; YDAB1 Listening/Viewing, YDAB3 Speaking and YDAB4 Writing: supporting; YDDB1 Grammar, YDDB2 Vocabulary and YDDB3 Pronunciation: chapter-linked language development; CEFR B2 reception and production.'
    : 'خريطة المنهج — TYMM YDAB2 القراءة/بناء المعنى: أساسي؛ YDAB1 الاستماع/المشاهدة وYDAB3 التحدث وYDAB4 الكتابة: داعمة؛ YDDB1 القواعد وYDDB2 المفردات وYDDB3 النطق: تطوير لغوي مرتبط بكل فصل؛ الاستقبال والإنتاج في CEFR B2.';

  return {
    ...metadata,
    approachDesc: metadata.approachDesc
      ? `${curriculumMap}\n\n${metadata.approachDesc}`
      : curriculumMap,
  };
};
