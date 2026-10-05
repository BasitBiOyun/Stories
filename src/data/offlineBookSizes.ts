/**
 * Download size (MB, rounded) of "Save this book offline": every story-page image and the English and
 * Arabic narration of a book, measured from the Firebase Storage files on 2026-10-04 (Adam B2, Abraham B1, Moses A2/B1, Ibn Jubayr A2 on 2026-10-05).
 * Re-measure when a book's pictures or audio are replaced.
 */
export const OFFLINE_BOOK_SIZE_MB: Record<string, number> = {
  'adam:A2': 48,
  'adam:B1': 62,
  'adam:B2': 93,
  'ibrahim:A2': 62,
  'ibrahim:B1': 70,
  'ibrahim:B2': 153,
  'musa:A2': 63,
  'musa:B1': 67,
  'musa:B2': 120,
  'mecca:A2': 49,
  'mecca:B1': 52,
  'mecca:B2': 85,
  'ibnJubayr:A2': 59,
  'yunusEmre:A2': 36,
  'yunusEmre:B1': 64,
  'yunusEmre:B2': 64,
};
