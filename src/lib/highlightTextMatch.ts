export type HighlightLanguage = 'en' | 'ar';

const stripArabicDiacritics = (text: string): string => text
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '');

const stripInvisibleControls = (text: string): string => text
  .replace(/[\u200B-\u200F\u202A-\u202E\u2060\u2066-\u2069\uFEFF]/g, '');

export const normalizeHighlightText = (text: string, language: HighlightLanguage): string => {
  let value = stripInvisibleControls(text
    .replace(/\[\/?POEM\]/gi, ' ')
    .replace(/\*\*/g, '')
    .normalize('NFKC')
    .toLowerCase());

  if (language === 'ar') {
    // Remove the accusative tanwin + supporting alif before stripping diacritics.
    value = value.replace(/\u064B\u0627/g, '');
    value = stripArabicDiacritics(value)
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
  } else {
    // Preserve a narrow semantic equivalence used by reviewed evidence phrases:
    // "did not have any money" and "no money" express the same source fact.
    value = value.replace(/\bdid not have any\b/g, 'no');
  }

  return value
    .replace(/[’']/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const rawTokens = (text: string, language: HighlightLanguage): string[] => {
  const normalized = normalizeHighlightText(text, language);
  return normalized ? normalized.split(' ') : [];
};

const englishTokenMatches = (surface: string, requested: string): boolean => {
  if (surface === requested) return true;
  if (!surface || !requested) return false;

  if (`${requested}s` === surface || `${requested}es` === surface) return true;
  if (requested.endsWith('y') && `${requested.slice(0, -1)}ies` === surface) return true;

  // The reader deliberately accepts short inflectional continuations so a
  // vocabulary lemma such as "regret" can highlight "regretted" in prose.
  return surface.startsWith(requested) && surface.length <= requested.length + 4;
};

const addArabicPrefixForms = (forms: Set<string>, value: string): void => {
  if (!value) return;
  const add = (candidate: string) => {
    if (candidate.length >= 3) forms.add(candidate);
  };

  // One-letter Arabic conjunction/preposition/future clitics may attach even
  // to three-letter roots: فغضب, فخاف, بثمن, وفرح. Keep a three-letter minimum
  // after stripping so this remains morphology-aware rather than a loose stemmer.
  if ((value.startsWith('و') || value.startsWith('ف')) && value.length > 3) add(value.slice(1));
  // Conjunctions also attach to a small closed set of two-letter function words.
  // Treat only these exact remainders as safe exceptions to the 3-letter rule.
  if (value.startsWith('و') || value.startsWith('ف')) {
    const remainder = value.slice(1);
    if (['لم', 'من', 'ما', 'لا'].includes(remainder)) forms.add(remainder);
  }
  if (value.startsWith('س') && value.length > 3) add(value.slice(1));
  if (value.startsWith('بال') && value.length > 4) {
    add(value.slice(1));
    add(value.slice(3));
  }
  if (value.startsWith('كال') && value.length > 4) {
    add(value.slice(1));
    add(value.slice(3));
  }
  if (value.startsWith('لل') && value.length > 3) {
    add(`ال${value.slice(2)}`);
    add(value.slice(2));
  }
  if (value.startsWith('ال') && value.length > 3) add(value.slice(2));
  if ((value.startsWith('ب') || value.startsWith('ك') || value.startsWith('ل')) && value.length > 3) add(value.slice(1));
};

const ARABIC_PRONOUN_SUFFIXES = ['هما', 'هم', 'هن', 'ها', 'كم', 'كن', 'نا', 'ه', 'ك', 'ي'] as const;
const ARABIC_COMMON_INFLECTION_SUFFIXES = ['وا', 'ون', 'ين', 'ات'] as const;

const addArabicSuffixForms = (forms: Set<string>, value: string): void => {
  for (const suffix of ARABIC_PRONOUN_SUFFIXES) {
    if (value.endsWith(suffix) && value.length - suffix.length >= 3) {
      forms.add(value.slice(0, -suffix.length));
    }
  }
  for (const suffix of ARABIC_COMMON_INFLECTION_SUFFIXES) {
    const minimumRemainder = suffix === 'ات' ? 4 : 3;
    if (value.endsWith(suffix) && value.length - suffix.length >= minimumRemainder) {
      forms.add(value.slice(0, -suffix.length));
    }
  }
  if (value.endsWith('ا') && value.length > 4) forms.add(value.slice(0, -1));
};

export const arabicTokenForms = (raw: string): Set<string> => {
  const normalized = normalizeHighlightText(raw, 'ar');
  const forms = new Set<string>();
  if (!normalized || normalized.includes(' ')) return forms;
  forms.add(normalized);

  // Two passes cover combinations such as "وبفضول" without becoming a stemmer.
  for (let pass = 0; pass < 2; pass += 1) {
    for (const value of [...forms]) addArabicPrefixForms(forms, value);
  }

  // Two conservative suffix passes cover combinations such as a plural ending
  // followed by an attached pronoun without turning the matcher into a stemmer.
  for (let pass = 0; pass < 2; pass += 1) {
    for (const value of [...forms]) addArabicSuffixForms(forms, value);
  }

  for (const value of [...forms]) addArabicPrefixForms(forms, value);
  return forms;
};

export const highlightTokenMatches = (
  surfaceRaw: string,
  requestedRaw: string,
  language: HighlightLanguage,
): boolean => {
  const surface = normalizeHighlightText(surfaceRaw, language);
  const requested = normalizeHighlightText(requestedRaw, language);
  if (!surface || !requested || surface.includes(' ') || requested.includes(' ')) return false;

  if (language === 'en') return englishTokenMatches(surface, requested);

  const surfaceForms = arabicTokenForms(surface);
  const requestedForms = arabicTokenForms(requested);
  return [...requestedForms].some(form => surfaceForms.has(form));
};

export const highlightPhraseMatches = (
  surfaceRaw: string,
  requestedRaw: string,
  language: HighlightLanguage,
): boolean => {
  const surfaceTokens = rawTokens(surfaceRaw, language);
  const requestedTokens = rawTokens(requestedRaw, language);
  if (!surfaceTokens.length || surfaceTokens.length !== requestedTokens.length) return false;
  return requestedTokens.every((token, index) => highlightTokenMatches(surfaceTokens[index], token, language));
};

const tokenSequenceOccurs = (
  contentTokens: string[],
  phraseTokens: string[],
  language: HighlightLanguage,
): boolean => {
  for (let start = 0; start <= contentTokens.length - phraseTokens.length; start += 1) {
    const matches = phraseTokens.every((token, offset) => (
      highlightTokenMatches(contentTokens[start + offset], token, language)
    ));
    if (matches) return true;
  }
  return false;
};

export const highlightPhraseOccurs = (
  content: string,
  phrase: string,
  language: HighlightLanguage,
): boolean => {
  const contentTokens = rawTokens(content, language);
  const phraseTokens = rawTokens(phrase, language);
  if (!phraseTokens.length) return false;

  if (tokenSequenceOccurs(contentTokens, phraseTokens, language)) return true;

  // Reviewed English evidence may include a sentence-initial definite article
  // that the raw prose omits (or vice versa). Limit this tolerance to a leading
  // "the" so semantic content words still have to match in order.
  if (language === 'en' && phraseTokens[0] === 'the' && phraseTokens.length > 1) {
    return tokenSequenceOccurs(contentTokens, phraseTokens.slice(1), language);
  }

  return false;
};