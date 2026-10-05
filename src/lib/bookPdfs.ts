/**
 * The printable PDFs of each book (story book, Teacher's Book, Self-Study Guide), served from
 * /pdfs/books. They are built outside the app from the book data; Ibn Jubayr has an English
 * edition only.
 */
export type BookPdfKind = 'story' | 'teachers-book' | 'self-study-guide';

const SLUGS: Record<string, string> = { ibnJubayr: 'ibn-jubayr', yunusEmre: 'yunus-emre' };
const ENGLISH_ONLY = new Set(['ibnJubayr']);

export const bookPdfUrl = (storyId: string, level: string, language: string, kind: BookPdfKind) => {
  const lang = language === 'ar' && !ENGLISH_ONLY.has(storyId) ? 'ar' : 'en';
  return `/pdfs/books/${SLUGS[storyId] ?? storyId}-${level.toLowerCase()}-${lang}-${kind}.pdf`;
};

export const BOOK_PDF_LABELS: Record<'en' | 'ar', Record<BookPdfKind, string> & { heading: string; hint: string; button: string }> = {
  en: {
    heading: 'Printable PDFs',
    hint: 'Opens in your browser to read, print or save.',
    button: 'PDF',
    story: 'Story book (PDF)',
    'teachers-book': 'Teacher’s Book (PDF)',
    'self-study-guide': 'Self-Study Guide (PDF)',
  },
  ar: {
    heading: 'مِلَفَّاتُ PDF لِلطِّبَاعَةِ',
    hint: 'يُفْتَحُ فِي المُتَصَفِّحِ لِلْقِرَاءَةِ أَوِ الطِّبَاعَةِ أَوِ الحِفْظِ.',
    button: 'PDF',
    story: 'كِتَابُ القِصَّةِ (PDF)',
    'teachers-book': 'كِتَابُ المُعَلِّمِ (PDF)',
    'self-study-guide': 'دَلِيلُ التَّعَلُّمِ الذَّاتِيِّ (PDF)',
  },
};
