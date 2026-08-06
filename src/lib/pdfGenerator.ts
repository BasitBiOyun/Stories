import type {
  BookData,
  StudentGuideMetadata,
  TeacherGuideMetadata,
  TeacherGuideSection,
} from '../types';

type PdfGeneratorModule = typeof import('./pdfGeneratorImpl');

let modulePromise: Promise<PdfGeneratorModule> | null = null;

const loadPdfGenerator = (): Promise<PdfGeneratorModule> => {
  modulePromise ??= import('./pdfGeneratorImpl');
  return modulePromise;
};

export const generateBookPDF = async (book: BookData): Promise<void> => {
  const module = await loadPdfGenerator();
  await module.generateBookPDF(book);
};

export const generateTeacherGuidePDF = async (
  title: string,
  subtitle: string,
  content: TeacherGuideSection[],
  metadata?: TeacherGuideMetadata,
): Promise<void> => {
  const module = await loadPdfGenerator();
  await module.generateTeacherGuidePDF(title, subtitle, content, metadata);
};

export const generateStudentGuidePDF = async (
  title: string,
  subtitle: string,
  metadata?: StudentGuideMetadata,
  guideText?: string,
  sections?: unknown[],
): Promise<void> => {
  const module = await loadPdfGenerator();
  await module.generateStudentGuidePDF(title, subtitle, metadata, guideText, sections);
};
