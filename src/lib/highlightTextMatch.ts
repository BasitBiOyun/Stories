export type HighlightLanguage = 'en' | 'ar';

const stripArabicDiacritics = (text: string): string => text
  .replace(/[\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
  .replace(/ـ/g, '');

export const normalizeHighlightText = (text: string, language: HighlightLanguage): string => {
  let value = text
    .replace(/\[\/?POEM\]/gi, ' ')
    .replace(/\*\*/g, '')
    .normalize('NFKC')
    .toLowerCase();

  if (language === 'ar') {
    // Remove the accusative tanwin + supporting alif before stripping diacritics.
    value = value.replace(/\u064B\u0627/g, '');
    value = stripArabicDiacritics(value)
      .replace(/[أإآٱ]/g, 'ا')
      .replace(/ى/g, 'ي')
      .replace(/ؤ/g, 'و')
      .replace(/ئ/g, 'ي')
      .replace(/ة/g, 'ه');
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

  if ((value.startsWith('و') || value.startsWith('ف')) && value.length > 4) add(value.slice(1));
  // Future marker: سيدبران -> يدبران. This is a grammatical prefix, not a stem rewrite.
  if (value.startsWith('س') && value.length > 4) add(value.slice(1));
  if (value.startsWith('بال') && value.length > 5) {
    add(value.slice(1)); // بالكتاب -> الكتاب
    add(value.slice(3)); // بالكتاب -> كتاب
  }
  if (value.startsWith('كال') && value.length > 5) {
    add(value.slice(1));
    add(value.slice(3));
  }
  if (value.startsWith('لل') && value.length > 4) {
    add(`ال${value.slice(2)}`);
    add(value.slice(2));
  }
  if (value.startsWith('ال') && value.length > 4) add(value.slice(2));
  if ((value.startsWith('ب') || value.startsWith('ك') || value.startsWith('ل')) && value.length > 4) add(value.slice(1));
};

const ARABIC_PRONOUN_SUFFIXES = ['هما', 'هم', 'هن', 'ها', 'كم', 'كن', 'نا', 'ه', 'ك', 'ي'] as const;
const ARABIC_COMMON_INFLECTION_SUFFIXES = ['وا', 'ون', 'ين'] as const;

export const arabicTokenForms = (raw: string): Set<string> => {
  const normalized = normalizeHighlightText(raw, 'ar');
  const forms = new Set<string>();
  if (!normalized || normalized.includes(' ')) return forms;
  forms.add(normalized);

  // Two passes cover combinations such as "وبفضول" without becoming a stemmer.
  for (let pass = 0; pass < 2; pass += 1) {
    for (const value of [...forms]) addArabicPrefixForms(forms, value);
  }

  for (const value of [...forms]) {
    for (const suffix of ARABIC_PRONOUN_SUFFIXES) {
      if (value.endsWith(suffix) && value.length - suffix.length >= 3) {
        forms.add(value.slice(0, -suffix.length));
      }
    }
    for (const suffix of ARABIC_COMMON_INFLECTION_SUFFIXES) {
      if (value.endsWith(suffix) && value.length - suffix.length >= 3) {
        forms.add(value.slice(0, -suffix.length));
      }
    }
    // Some source files omit tanwin while keeping its supporting final alif
    // (for example متكبرا). Treat that final alif as an inflectional surface form.
    if (value.endsWith('ا') && value.length > 4) forms.add(value.slice(0, -1));
  }

  // Prefixes may become visible only after a suffix is removed.
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

export const highlightPhraseOccurs = (
  content: string,
  phrase: string,
  language: HighlightLanguage,
): boolean => {
  const contentTokens = rawTokens(content, language);
  const phraseTokens = rawTokens(phrase, language);
  if (!phraseTokens.length) return false;

  for (let start = 0; start <= contentTokens.length - phraseTokens.length; start += 1) {
    const matches = phraseTokens.every((token, offset) => (
      highlightTokenMatches(contentTokens[start + offset], token, language)
    ));
    if (matches) return true;
  }
  return false;
};
