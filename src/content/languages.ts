import file from './languages.json';

export type Direction = 'ltr' | 'rtl';

export interface LanguageSetting {
  code: string;
  name: string;
  nativeName: string;
  direction: Direction;
  /** Which digits the language reads: Arabic pages show ٠١٢ instead of 012. */
  digits: 'latin' | 'arabic';
  fontClass: string;
  enabled: boolean;
}

/**
 * The interface languages. Adding one means adding an entry here and a translation table;
 * nothing in the components decides what is right-to-left or which digits a language uses.
 */
export const languageSettings = (file.languages as LanguageSetting[]).filter(language => language.enabled);

export const languageCodes = languageSettings.map(language => language.code);

export const defaultLanguageCode = file.default;

export const languageSetting = (code: string): LanguageSetting =>
  languageSettings.find(language => language.code === code) ??
  languageSettings.find(language => language.code === defaultLanguageCode) ??
  languageSettings[0];

const ARABIC_DIGITS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

export const formatNumberIn = (code: string, value: number | string): string => {
  if (languageSetting(code).digits !== 'arabic') return String(value);
  return String(value).replace(/[0-9]/g, digit => ARABIC_DIGITS[Number(digit)]);
};
