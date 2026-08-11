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

const STATIC_STUDENT_BOOKS: Partial<Record<string, string>> = {
  'a2-prophets-en': 'Adam_A2_English_Student_Book_Gold.pdf',
  'a2-prophets-ar': 'Adam_A2_Arabic_Student_Book_Gold.pdf',
};

const downloadStaticPdf = (fileName: string): void => {
  const link = document.createElement('a');
  link.href = `/pdfs/${encodeURIComponent(fileName)}`;
  link.download = fileName;
  link.rel = 'noopener';
  document.body.appendChild(link);
  link.click();
  link.remove();
};

export const generateBookPDF = async (book: BookData): Promise<void> => {
  const staticFile = STATIC_STUDENT_BOOKS[book.id];
  if (staticFile) {
    downloadStaticPdf(staticFile);
    return;
  }

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