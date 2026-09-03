import type { BookData } from '../types';
import type { BookPair } from '../core/content/contracts';

type GuideLanguage = 'en' | 'ar';

const TYMM_VALUES = [
  { code: 'D1', tr: 'Adalet', en: 'Justice', ar: 'العدل' },
  { code: 'D2', tr: 'Aile Bütünlüğü', en: 'Family Integrity', ar: 'تماسك الأسرة' },
  { code: 'D3', tr: 'Çalışkanlık', en: 'Diligence', ar: 'الاجتهاد' },
  { code: 'D4', tr: 'Dostluk', en: 'Friendship', ar: 'الصداقة' },
  { code: 'D5', tr: 'Duyarlılık', en: 'Sensitivity', ar: 'الحساسية' },
  { code: 'D6', tr: 'Dürüstlük', en: 'Honesty', ar: 'الصدق' },
  { code: 'D7', tr: 'Estetik', en: 'Aesthetics', ar: 'الجماليات' },
  { code: 'D8', tr: 'Mahremiyet', en: 'Privacy', ar: 'الخصوصية' },
  { code: 'D9', tr: 'Merhamet', en: 'Compassion', ar: 'الرحمة' },
  { code: 'D10', tr: 'Mütevazılık', en: 'Humility', ar: 'التواضع' },
  { code: 'D11', tr: 'Özgürlük', en: 'Freedom', ar: 'الحرية' },
  { code: 'D12', tr: 'Sabır', en: 'Patience', ar: 'الصبر' },
  { code: 'D13', tr: 'Sağlıklı Yaşam', en: 'Healthy Living', ar: 'الحياة الصحية' },
  { code: 'D14', tr: 'Saygı', en: 'Respect', ar: 'الاحترام' },
  { code: 'D15', tr: 'Sevgi', en: 'Love', ar: 'المحبة' },
  { code: 'D16', tr: 'Sorumluluk', en: 'Responsibility', ar: 'المسؤولية' },
  { code: 'D17', tr: 'Tasarruf', en: 'Thrift', ar: 'التوفير' },
  { code: 'D18', tr: 'Temizlik', en: 'Cleanliness', ar: 'النظافة' },
  { code: 'D19', tr: 'Vatanseverlik', en: 'Patriotism', ar: 'حب الوطن' },
  { code: 'D20', tr: 'Yardımseverlik', en: 'Helpfulness', ar: 'مساعدة الآخرين' },
] as const;

const localizeValueString = (text: string, language: GuideLanguage): string => {
  let result = text;
  for (const value of TYMM_VALUES) {
    const target = language === 'ar' ? value.ar : value.en;
    result = result.replace(new RegExp(`${value.code}\\s+${value.tr}`, 'g'), `${value.code} ${target}`);
  }
  return result;
};

const localizeDeep = <T,>(value: T, language: GuideLanguage): T => {
  if (typeof value === 'string') return localizeValueString(value, language) as T;
  if (Array.isArray(value)) return value.map(item => localizeDeep(item, language)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [key, localizeDeep(item, language)]),
    ) as T;
  }
  return value;
};

const localizeBookTeacherGuide = (book: BookData, language: GuideLanguage): BookData => ({
  ...book,
  teacherGuide: localizeDeep(book.teacherGuide, language),
  teacherGuideMetadata: localizeDeep(book.teacherGuideMetadata, language),
});

/**
 * Keeps TYMM D-codes stable while ensuring the visible value name follows the
 * language of the Teacher Guide. Only Teacher Guide content is transformed;
 * story pages, exercises, Language Focus and Self-Study data stay untouched.
 */
export const localizeTeacherGuideTymmValues = (pair: BookPair): BookPair => ({
  en: localizeBookTeacherGuide(pair.en, 'en'),
  ar: localizeBookTeacherGuide(pair.ar, 'ar'),
});
