import type { B2ReviewedPairSpecs } from '../../b2HighlightPairs';

/**
 * Chapters with more than seven raw Word Notes, or with later cross-chapter
 * duplicates that would shift Blueprint evidence indexes, use explicit
 * same-concept EN/AR pairs. Selection preserves the strongest B2 targets and
 * keeps sensitive-history highlighting focused on systems rather than graphic detail.
 */
export const meccaB2ReviewedHighlightPairs: B2ReviewedPairSpecs = {
  2: [
    { en: 'Jahiliyyah', ar: 'الْجَاهِلِيَّةِ' },
    { en: 'barbarism', ar: 'التَّوَحُّشِ' },
    { en: 'oppressed', ar: 'الْمَظْلُومُونَ' },
    { en: 'moral decline', ar: 'الِانْحِطَاطِ الْأَخْلَاقِيِّ' },
    { en: 'peninsula', ar: 'شِبْهَ جَزِيرَةٍ' },
    { en: 'truly', ar: 'حَقًّا' },
    { en: 'era', ar: 'عَصْرِ' },
  ],
  4: [
    {
      en: 'Quraysh',
      ar: 'قُرَيْشٍ',
      enDefinition: 'The tribe that took over the administration of Mecca and the Ka’ba in the fifth century.',
      arDefinition: 'الْقَبِيلَةُ الَّتِي انْتَقَلَتْ إِلَيْهَا إِدَارَةُ مَكَّةَ وَالْكَعْبَةِ فِي الْقَرْنِ الْخَامِسِ.',
    },
    { en: 'reconstruct', ar: 'لِيُعِيدَ بِنَاءَ' },
    { en: 'pilgrimage', ar: 'حَجٍّ' },
    {
      en: 'agriculture',
      ar: 'الزِّرَاعَةِ',
      enDefinition: 'The cultivation of land and growing of crops for food or livelihood.',
      arDefinition: 'زِرَاعَةُ الْأَرْضِ وَإِنْتَاجُ الْمَحَاصِيلِ لِلْمَعِيشَةِ.',
    },
  ],
  6: [
    { en: 'Silk Road', ar: 'طَرِيقُ الْحَرِيرِ' },
    { en: 'sacred months', ar: 'الْأَشْهُرُ الْحُرُمُ' },
    { en: 'prohibited', ar: 'يُحَرَّمُ' },
    { en: 'trade festival', ar: 'أَسْوَاقٌ تِجَارِيَّةٌ' },
    { en: 'extensive', ar: 'الْوَاسِعَةِ' },
    { en: 'overland route', ar: 'الطَّرِيقَ الْبَرِّيَّ' },
    { en: 'pagan', ar: 'الْوَثَنِيُّونَ' },
  ],
  8: [
    { en: 'orphan', ar: 'الْأَيْتَامُ' },
    { en: 'defenseless', ar: 'الْعُزَّلُ' },
    { en: 'agreement', ar: 'اتِّفَاقٌ' },
    { en: 'goods', ar: 'بَضَائِعُ' },
    { en: 'Hilfü’l-Fudûl', ar: 'حِلْفَ الْفُضُولِ' },
    { en: 'property', ar: 'مُمْتَلَكَاتُ' },
    { en: 'righteous', ar: 'الصَّالِحِينَ' },
  ],
  9: [
    { en: 'formation', ar: 'التَّشْكِيلُ' },
    { en: 'oath', ar: 'عَهْدِي' },
    { en: 'generosity', ar: 'الْكَرَمِ' },
    { en: 'hospitality', ar: 'ضِيَافَتِهِمُ' },
    { en: 'arrogance', ar: 'الْخُيَلَاءِ' },
    { en: 'spoke highly', ar: 'أَشَادَ' },
    { en: 'hesitation', ar: 'تَرَدُّدٍ' },
  ],
  10: [
    { en: 'crucial', ar: 'بَالِغَ الْأَهَمِّيَّةِ' },
    { en: 'ancestor', ar: 'أَسْلَافَهُمْ' },
    { en: 'social status', ar: 'مَكَانَتِهَا الِاجْتِمَاعِيَّةِ' },
    { en: 'disadvantaged', ar: 'التَّهْمِيشِ' },
    { en: 'dignity', ar: 'مَكَانَتِهِمْ' },
    { en: 'by heart', ar: 'عَنْ ظَهْرِ قَلْبٍ' },
    { en: 'mistreated', ar: 'سُوءِ الْمُعَامَلَةِ' },
  ],
  14: [
    { en: 'super-rich', ar: 'أثْرِيَاءِ' },
    { en: 'lawful', ar: 'حَلَالًا' },
    { en: 'radical', ar: 'جَذْرِيَّةً' },
    {
      en: 'zakat',
      ar: 'الزَّكَاةَ',
      enDefinition: 'Obligatory charitable giving that purifies wealth in Islam.',
      arDefinition: 'حَقٌّ مَالِيٌّ وَاجِبٌ يُؤَدَّى لِتَطْهِيرِ الْمَالِ وَمُسَاعَدَةِ الْمُحْتَاجِينَ.',
    },
    { en: 'leadership position', ar: 'مَوْقِعِهِمُ الْقِيَادِيِّ' },
  ],
  15: [
    { en: 'exploitation', ar: 'الِاسْتِغْلَالَ' },
    { en: 'mock', ar: 'يَسْخَرُونَ' },
    {
      en: 'fiercely',
      ar: 'بِشِدَّةٍ',
      enDefinition: 'In a very strong, intense, or forceful way.',
      arDefinition: 'بِقُوَّةٍ وَحِدَّةٍ شَدِيدَتَيْنِ.',
    },
    { en: 'boycott', ar: 'مُقَاطَعَةً' },
  ],
  17: [
    { en: 'oppression', ar: 'الِاضْطِهَادِ' },
    { en: 'immorality', ar: 'الْفَسَادِ الْأَخْلَاقِيِّ' },
    {
      en: 'justice',
      ar: 'الْعَدْلِ',
      enDefinition: 'Fair treatment and the protection of people’s rights.',
      arDefinition: 'إِعْطَاءُ الْحُقُوقِ وَمُعَامَلَةُ النَّاسِ بِإِنْصَافٍ.',
    },
    { en: 'human honor', ar: 'كَرَامَتُهُ الْإِنْسَانِيَّةُ' },
    {
      en: 'way of thinking',
      ar: 'طَرِيقَةِ تَفْكِيرٍ',
      enDefinition: 'A characteristic pattern or approach used to understand and judge the world.',
      arDefinition: 'نَمَطٌ أَوْ أُسْلُوبٌ فِي فَهْمِ الْعَالَمِ وَالْحُكْمِ عَلَى الْأَشْيَاءِ.',
    },
  ],
};
