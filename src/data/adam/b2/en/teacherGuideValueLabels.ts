import { adamB2TeacherGuide, adamB2TeacherGuideMetadata } from './teacherGuide';

const VALUE_LABEL_REPLACEMENTS: Array<[string, string]> = [
  ['D14 Saygı', 'D14 Respect'],
  ['D16 Sorumluluk', 'D16 Responsibility'],
  ['D6 Dürüstlük', 'D6 Honesty'],
  ['D10 Mütevazılık', 'D10 Humility'],
  ['D5 Duyarlılık', 'D5 Sensitivity'],
  ['D20 Yardımseverlik', 'D20 Helpfulness'],
  ['D12 Sabır', 'D12 Patience'],
  ['D9 Merhamet', 'D9 Compassion'],
];

const translateValueLabels = (text: string) =>
  VALUE_LABEL_REPLACEMENTS.reduce(
    (current, [source, target]) => current.replaceAll(source, target),
    text,
  );

/**
 * Normalizes the remaining Turkish TYMM value labels in the active English
 * Adam B2 teacher guide while preserving the official D-codes.
 */
export const normalizeAdamB2TeacherGuideValueLabels = () => {
  if (adamB2TeacherGuideMetadata.valuesFocus) {
    adamB2TeacherGuideMetadata.valuesFocus =
      adamB2TeacherGuideMetadata.valuesFocus.map(translateValueLabels);
  }

  adamB2TeacherGuide.forEach(section => {
    if (section.pedagogy) {
      section.pedagogy = translateValueLabels(section.pedagogy);
    }
  });
};
