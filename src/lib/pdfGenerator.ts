import type {
  BookData,
  StudentGuideMetadata,
  TeacherGuideMetadata,
  TeacherGuideSection,
} from '../types';

const pdfLocked = (): void => {
  console.info('[PDF] Downloads are temporarily locked while the publication system is rebuilt.');
};

/**
 * Compatibility gate for UI modules that still expose the locked PDF controls.
 * The former PDF generation implementation has been removed intentionally.
 */
export const generateBookPDF = async (_book: BookData): Promise<void> => {
  pdfLocked();
};

export const generateTeacherGuidePDF = async (
  _title: string,
  _subtitle: string,
  _content: TeacherGuideSection[],
  _metadata?: TeacherGuideMetadata,
): Promise<void> => {
  pdfLocked();
};

export const generateStudentGuidePDF = async (
  _title: string,
  _subtitle: string,
  _metadata?: StudentGuideMetadata,
  _guideText?: string,
  _sections?: unknown[],
): Promise<void> => {
  pdfLocked();
};
