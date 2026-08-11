export type StoryLanguage = 'en' | 'ar';

export interface LegacyStoryLanguageSnapshot {
  bookKey: string;
  language: StoryLanguage;
  path: string;
  blobSha: string;
}

/**
 * Story Language Lock migration policy.
 *
 * Existing books are frozen at the Git blob SHAs below until they are cleaned.
 * A legacy source file MUST NOT change unless its whole level-book pair is moved
 * into lockedStoryLanguageBooks in the same change and passes the strict validator.
 *
 * New books are never allowed to enter through the legacy path. They must be added
 * directly to lockedStoryLanguageBooks and pass the strict Story Language Lock.
 */
export const legacyStoryLanguageSnapshots: readonly LegacyStoryLanguageSnapshot[] = [
  { bookKey: 'adam:A2', language: 'en', path: 'src/data/adam/a2/en/pages.ts', blobSha: 'e1b78e6b11a9a76afa134df29f015ed4c331e004' },
  { bookKey: 'adam:A2', language: 'ar', path: 'src/data/adam/a2/ar/pages.ts', blobSha: 'eed7ae565a9669e857a61f62e96ab1b78c53c848' },
  { bookKey: 'adam:B1', language: 'en', path: 'src/data/adam/b1/en/pages.ts', blobSha: 'a1dcf8498806fbe5fa047c959852fcacf3aca357' },
  { bookKey: 'adam:B1', language: 'ar', path: 'src/data/adam/b1/ar/pages.ts', blobSha: '37d28a9856db2b1e0d03e5312f725459263578af' },
  { bookKey: 'adam:B2', language: 'en', path: 'src/data/adam/b2/en/pages.ts', blobSha: '2a49b5b6e307d0f5ce93cb694e99d71c0459ecc6' },
  { bookKey: 'adam:B2', language: 'ar', path: 'src/data/adam/b2/ar/pages.ts', blobSha: '25105393ca3130cbbf9642a7febb71ce96000c46' },

  { bookKey: 'ibrahim:A2', language: 'en', path: 'src/data/abraham/a2/en/pages.ts', blobSha: '870791fe0049c536fc36dc426d9a0b792cca48dc' },
  { bookKey: 'ibrahim:A2', language: 'ar', path: 'src/data/abraham/a2/ar/pages.ts', blobSha: 'bb74e16c0ef6b8e0406a644da8ec9c76ed040dbf' },
  { bookKey: 'ibrahim:B1', language: 'en', path: 'src/data/abraham/b1/en/pages.ts', blobSha: '38d1bf660e41366e66c91ef3de8efe180ffd8aa9' },
  { bookKey: 'ibrahim:B1', language: 'ar', path: 'src/data/abraham/b1/ar/pages.ts', blobSha: '61957b83af39eca65755d8ad06de616acf26a7fe' },
  { bookKey: 'ibrahim:B2', language: 'en', path: 'src/data/abraham/b2/en/pages.ts', blobSha: 'ec88dc88a6fe6b9031b0e99cdf787ef1fff72639' },
  { bookKey: 'ibrahim:B2', language: 'ar', path: 'src/data/abraham/b2/ar/pages.ts', blobSha: '3201975da9d28b2aa2f912989817947ead7f37f4' },

  { bookKey: 'musa:A2', language: 'en', path: 'src/data/moses/a2/en/pages.ts', blobSha: '032eb0dd8720d2c49d1dcfb2ca63727207852f6b' },
  { bookKey: 'musa:A2', language: 'ar', path: 'src/data/moses/a2/ar/pages.ts', blobSha: '5add17c0a27cfbbf5341fa9b51dee6dcf6356ef0' },
  { bookKey: 'musa:B1', language: 'en', path: 'src/data/moses/b1/en/pages.ts', blobSha: 'f14cd7d57983cb6187cbf2054a8ffc44159ed36c' },
  { bookKey: 'musa:B1', language: 'ar', path: 'src/data/moses/b1/ar/pages.ts', blobSha: '6e0f04c0eabd2ddbfe42579de6eaa067d5a7f6d1' },
  { bookKey: 'musa:B2', language: 'en', path: 'src/data/moses/b2/en/pages.ts', blobSha: 'cf775cc18eb038560cb7fac084b3210a9251804c' },
  { bookKey: 'musa:B2', language: 'ar', path: 'src/data/moses/b2/ar/pages.ts', blobSha: 'f6cab51a4b82458b222f607a465cdee8164b9aaa' },

  { bookKey: 'mecca:A2', language: 'en', path: 'src/data/mecca/a2/en/pages.ts', blobSha: 'fee616f8576e42eed15d04b6e857ce514def7e1f' },
  { bookKey: 'mecca:A2', language: 'ar', path: 'src/data/mecca/a2/ar/pages.ts', blobSha: '56ea7ec97b28ba2f8ce898467d9e9c064500f4c2' },
  { bookKey: 'mecca:B1', language: 'en', path: 'src/data/mecca/b1/en/pages.ts', blobSha: '913e9d4f9a5be691d3f653a8ffbb05154a019633' },
  { bookKey: 'mecca:B1', language: 'ar', path: 'src/data/mecca/b1/ar/pages.ts', blobSha: 'c1ab3438de5deca96655b859606d556cc4ded6a8' },
  { bookKey: 'mecca:B2', language: 'en', path: 'src/data/mecca/b2/en/pages.ts', blobSha: 'bc0db6018cbf735a983ea2ae3097a86ac3e77e74' },
  { bookKey: 'mecca:B2', language: 'ar', path: 'src/data/mecca/b2/ar/pages.ts', blobSha: 'f53e99f292ee81d471963192578a6afa2dfd7f53' },

  { bookKey: 'yunusEmre:A2', language: 'en', path: 'src/data/yunusEmre/a2/en/pages.ts', blobSha: '7ad20242da6b8826ceadb95df444a0c63aa87061' },
  { bookKey: 'yunusEmre:A2', language: 'ar', path: 'src/data/yunusEmre/a2/ar/pages.ts', blobSha: 'deea6696bb11094609c7ecbf42fb3f2f3ab793ee' },
  { bookKey: 'yunusEmre:B1', language: 'en', path: 'src/data/yunusEmre/b1/en/pages.ts', blobSha: '6339f1c6492c80405e460b77f58ebace3af76765' },
  { bookKey: 'yunusEmre:B1', language: 'ar', path: 'src/data/yunusEmre/b1/ar/pages.ts', blobSha: 'b09836efec1d557a93a850c82b607c41110700d3' },
  { bookKey: 'yunusEmre:B2', language: 'en', path: 'src/data/yunusEmre/b2/en/pages.ts', blobSha: '3ed8a1b5e28d5dd97f7f99555576e0a976f178eb' },
  { bookKey: 'yunusEmre:B2', language: 'ar', path: 'src/data/yunusEmre/b2/ar/pages.ts', blobSha: '1446299a36dbeaae04381aa5f5380d33972ce695' },
] as const;

/**
 * Migration gate. Add a book key here only after BOTH English and Arabic pages
 * satisfy the strict validator. During rollout we will promote A2, then B1, then B2.
 */
export const lockedStoryLanguageBooks = new Set<string>([
]);

export const legacyStoryLanguageBookKeys = new Set(
  legacyStoryLanguageSnapshots.map(snapshot => snapshot.bookKey),
);
