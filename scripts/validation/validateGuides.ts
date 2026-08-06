import { bookRegistry } from '../../src/core/content/bookRegistry';
import type { BookData, TeacherGuideSection } from '../../src/types';

const errors: string[] = [];
const warnings: string[] = [];

const validateTeacherSection = (bookKey: string, section: TeacherGuideSection, index: number) => {
  if (!section.chapter?.trim()) errors.push(`${bookKey}: teacher guide section ${index + 1} has no chapter label.`);
  if (!section.objectives?.length) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no objectives.`);
  if (!section.lessonPlan?.trim()) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no lesson plan.`);
  if (!section.discussionPoints?.length) warnings.push(`${bookKey}: teacher guide ${section.chapter || index + 1} has no discussion prompts.`);
};

const validateBookGuides = (bookKey: string, book: BookData) => {
  const chapterLabels = new Set<string>();
  book.teacherGuide.forEach((section, index) => {
    validateTeacherSection(bookKey, section, index);
    const normalized = section.chapter?.trim().toLocaleLowerCase();
    if (normalized && chapterLabels.has(normalized)) warnings.push(`${bookKey}: duplicate teacher guide chapter label “${section.chapter}”.`);
    if (normalized) chapterLabels.add(normalized);
  });

  const storyPageCount = book.pages.filter(page => page.type === 'story').length;
  if (book.teacherGuide.length && book.teacherGuide.length !== storyPageCount) {
    warnings.push(`${bookKey}: ${book.teacherGuide.length} teacher guide sections for ${storyPageCount} story pages.`);
  }

  const metadataLevel = book.teacherGuideMetadata?.level;
  if (metadataLevel && !metadataLevel.toUpperCase().includes(book.level)) {
    errors.push(`${bookKey}: teacher guide metadata level “${metadataLevel}” does not match ${book.level}.`);
  }
};

for (const definition of bookRegistry) {
  const pair = await definition.load();
  validateBookGuides(`${definition.storyId}:${definition.level}:en`, pair.en);
  validateBookGuides(`${definition.storyId}:${definition.level}:ar`, pair.ar);
}

for (const warning of warnings) console.warn(`WARN: ${warning}`);
for (const validationError of errors) console.error(`ERROR: ${validationError}`);
console.log(`Guide validation completed with ${errors.length} error(s) and ${warnings.length} warning(s).`);
if (errors.length) process.exitCode = 1;
