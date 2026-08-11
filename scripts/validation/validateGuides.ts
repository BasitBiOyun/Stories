import { bookRegistry } from '../../src/core/content/bookRegistry';
import type { BookData, TeacherGuideMetadata, TeacherGuideSection } from '../../src/types';

const errors: string[] = [];
const warnings: string[] = [];

const validateTeacherSection = (bookKey: string, section: TeacherGuideSection, index: number) => {
  if (!section.chapter?.trim()) errors.push(`${bookKey}: teacher guide section ${index + 1} has no chapter label.`);
  if (!section.objectives?.length) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no objectives.`);
  if (!section.pedagogy?.trim()) errors.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no pedagogy text.`);
  if (!section.lessonPlan?.trim()) errors.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no lesson plan.`);
  if (!section.discussionPoints?.length) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no discussion prompts.`);
  if (!section.differentiation?.fastFinishers?.trim() || !section.differentiation?.strugglingLearners?.trim()) {
    errors.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has incomplete differentiation guidance.`);
  }
  if (!section.interactiveTips?.length) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no interactive guidance.`);
};

const collectMetadataStrings = (value: unknown): string[] => {
  if (typeof value === 'string') return [value];
  if (Array.isArray(value)) return value.flatMap(collectMetadataStrings);
  if (value && typeof value === 'object') return Object.values(value as Record<string, unknown>).flatMap(collectMetadataStrings);
  return [];
};

const collectArabicGuideStrings = (book: BookData): string[] => [
  ...book.teacherGuide.flatMap(section => collectMetadataStrings(section)),
  ...book.selfStudyGuide.flatMap(section => collectMetadataStrings(section)),
  ...(book.studentGuideSections ?? []).flatMap(section => [section.title, section.text, ...section.points]),
  ...(book.studentGuideText ? [book.studentGuideText] : []),
  ...collectMetadataStrings(book.teacherGuideMetadata),
  ...collectMetadataStrings(book.studentGuideMetadata),
];

const validateArabicGuideLanguage = (bookKey: string, book: BookData) => {
  const levelTokens = /\b(?:A2|B1|B2)\b/g;
  const urls = /https?:\/\/\S+/g;
  const residuals = new Set<string>();

  for (const text of collectArabicGuideStrings(book)) {
    const visible = text.replace(urls, '').replace(levelTokens, '');
    const matches = visible.match(/[A-Za-z][A-Za-z'-]*/g) ?? [];
    matches.forEach(match => residuals.add(match));
  }

  if (residuals.size) {
    errors.push(`${bookKey}: Arabic guide surfaces contain Latin/English text: ${[...residuals].sort().join(', ')}`);
  }
};

const validateImplementationPlans = (bookKey: string, metadata: TeacherGuideMetadata | undefined) => {
  const plans = metadata?.implementationPlans;
  if (!plans) {
    errors.push(`${bookKey}: Teacher Guide implementation plans are missing; the Plans tab would be blank.`);
    return;
  }
  if (!plans.optionA.title?.trim() || !plans.optionA.steps?.length) {
    errors.push(`${bookKey}: Teacher Guide implementation plan A is incomplete.`);
  }
  if (!plans.optionB.title?.trim() || !plans.optionB.lessons?.length) {
    errors.push(`${bookKey}: Teacher Guide implementation plan B is incomplete.`);
  }
};

const validateMetadataUsedByUi = (bookKey: string, metadata: TeacherGuideMetadata | undefined) => {
  if (!metadata) {
    errors.push(`${bookKey}: teacher guide metadata is missing.`);
    return;
  }
  if (!metadata.purpose?.trim()) errors.push(`${bookKey}: Teacher Guide purpose is missing.`);
  if (!metadata.targetLearners?.trim()) errors.push(`${bookKey}: Teacher Guide target learners are missing.`);
  if (!metadata.approachDesc?.trim()) errors.push(`${bookKey}: Teacher Guide approach is missing.`);
  if (!metadata.readingFramework?.before?.trim() || !metadata.readingFramework?.during?.trim() || !metadata.readingFramework?.after?.trim()) {
    errors.push(`${bookKey}: Teacher Guide reading framework is incomplete.`);
  }
  if (!metadata.assessmentEvidence?.trim()) errors.push(`${bookKey}: Teacher Guide assessment evidence is missing.`);
  if (!metadata.rubricTitle?.trim() || !metadata.rubricRows?.length) {
    errors.push(`${bookKey}: Teacher Guide assessment rubric would render empty.`);
  }
  if (!metadata.homeConnection?.items?.length) errors.push(`${bookKey}: Teacher Guide home connection is missing.`);
  if (!metadata.sensitiveNotes?.notes?.length) errors.push(`${bookKey}: Teacher Guide sensitive-content notes are missing.`);
  validateImplementationPlans(bookKey, metadata);
};

const validateBookGuides = (bookKey: string, book: BookData, language: 'en' | 'ar') => {
  const chapterLabels = new Set<string>();
  book.teacherGuide.forEach((section, index) => {
    validateTeacherSection(bookKey, section, index);
    const normalized = section.chapter?.trim().toLocaleLowerCase();
    if (normalized && chapterLabels.has(normalized)) warnings.push(`${bookKey}: duplicate teacher guide chapter label “${section.chapter}”.`);
    if (normalized) chapterLabels.add(normalized);
  });

  // References/source-only pages can be typed as story for reader continuity but do not
  // require a lesson. A guide section is required for every instructional story page,
  // identified by the presence of its chapter exercise/Quick Challenge.
  const instructionalStoryPageCount = book.pages.filter(
    page => page.type === 'story' && (page.exercises?.length ?? 0) > 0,
  ).length;
  if (book.teacherGuide.length !== instructionalStoryPageCount) {
    errors.push(`${bookKey}: ${book.teacherGuide.length} teacher guide sections for ${instructionalStoryPageCount} instructional story pages.`);
  }
  if (book.selfStudyGuide.length !== instructionalStoryPageCount) {
    errors.push(`${bookKey}: ${book.selfStudyGuide.length} self-study sections for ${instructionalStoryPageCount} instructional story pages.`);
  }

  book.selfStudyGuide.forEach((section, index) => {
    if (!section.chapter?.trim()) errors.push(`${bookKey}: self-study section ${index + 1} has no chapter label.`);
    if (!section.lessonPlan?.trim()) errors.push(`${bookKey}: self-study ${section.chapter || index + 1} has no study routine.`);
    if (!section.interactiveTips?.length) errors.push(`${bookKey}: self-study ${section.chapter || index + 1} has no interactive guidance.`);
  });

  const metadataLevel = book.teacherGuideMetadata?.level;
  if (metadataLevel && !metadataLevel.toUpperCase().includes(book.level)) {
    errors.push(`${bookKey}: teacher guide metadata level “${metadataLevel}” does not match ${book.level}.`);
  }

  validateMetadataUsedByUi(bookKey, book.teacherGuideMetadata);
  if (language === 'ar') validateArabicGuideLanguage(bookKey, book);
};

for (const definition of bookRegistry) {
  const pair = await definition.load();
  validateBookGuides(`${definition.storyId}:${definition.level}:en`, pair.en, 'en');
  validateBookGuides(`${definition.storyId}:${definition.level}:ar`, pair.ar, 'ar');
}

for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const validationError of errors) console.error(`ERROR: ${validationError}`);
console.log(`Guide validation completed across ${bookRegistry.length * 2} language variants with ${errors.length} error(s) and ${warnings.length} warning(s).`);
if (errors.length) process.exitCode = 1;
