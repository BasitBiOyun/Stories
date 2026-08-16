import type { B1ExplicitHighlightPair } from '../../b1HighlightStandard';

/**
 * Most Yunus Emre B1 Word Notes are direct EN/AR translations. These chapters
 * had legacy count drift, so their bilingual concepts are declared explicitly.
 */
export const yunusEmreB1ExplicitHighlightTargets: Record<number, readonly B1ExplicitHighlightPair[]> = {
  5: [
    {
      en: { word: 'a way out', definition: 'A solution or escape from a difficult problem.' },
      ar: { word: 'مَخْرَجٍ', definition: 'حَلٌّ أَوْ طَرِيقٌ لِلْخُرُوجِ مِنْ مُشْكِلَةٍ صَعْبَةٍ.' },
    },
    {
      en: { word: 'achieved', definition: 'Succeeded in doing or reaching something.' },
      ar: { word: 'حَقَّقَ', definition: 'نَجَحَ فِي الْقِيَامِ بِشَيْءٍ أَوِ الْوُصُولِ إِلَيْهِ.' },
    },
    {
      en: { word: 'put an end to', definition: 'Stopped something completely.' },
      ar: { word: 'أَنْهَتِ', definition: 'أَوْقَفَتْ شَيْئًا بِالْكَامِلِ.' },
    },
    {
      en: { word: 'defeated', definition: 'Won against an opponent in a battle or struggle.' },
      ar: { word: 'هَزَمَتِ', definition: 'انْتَصَرَتْ عَلَى خَصْمٍ فِي مَعْرَكَةٍ أَوْ صِرَاعٍ.' },
    },
    {
      en: { word: 'captured', definition: 'Took control of a place by force.' },
      ar: { word: 'اسْتَوْلَى', definition: 'سَيْطَرَ عَلَى مَكَانٍ بِالْقُوَّةِ.' },
    },
  ],
  7: [
    {
      en: { word: 'trained', definition: 'Taught or prepared someone.' },
      ar: { word: 'دَرَّبَ', definition: 'عَلَّمَ وَأَعَدَّ شَخْصًا لِإِتْقَانِ عَمَلٍ أَوْ مَعْرِفَةٍ.' },
    },
    {
      en: { word: 'nomads', definition: 'People who move from place to place.' },
      ar: { word: 'الْبَدْوِ', definition: 'أُنَاسٌ يَنْتَقِلُونَ مِنْ مَكَانٍ إِلَى آخَرَ لِلْعَيْشِ.' },
    },
    {
      en: { word: 'respond', definition: 'To answer or react.' },
      ar: { word: 'يَسْتَجِيبَ', definition: 'يُجِيبُ أَوْ يَتَفَاعَلُ مَعَ الْأَحْدَاثِ.' },
    },
    {
      en: { word: 'shaykhs', definition: 'Spiritual teachers or leaders in Sûfîsm.' },
      ar: { word: 'الشُّيُوخُ', definition: 'مُرَبُّونَ أَوْ قَادَةٌ رُوحِيُّونَ فِي التَّصَوُّفِ.' },
    },
    {
      en: { word: 'Prophet’s Sunnah', definition: 'The sayings, actions, and approvals of the Prophet Muhammad.' },
      ar: { word: 'سُنَّةِ النَّبِيِّ', definition: 'أَقْوَالُ النَّبِيِّ مُحَمَّدٍ وَأَفْعَالُهُ وَتَقْرِيرَاتُهُ.' },
    },
  ],
  8: [
    {
      en: { word: 'vivid', definition: 'Very clear, strong, and easy to imagine or feel.' },
      ar: { word: 'صَادِقَةٍ وَقَوِيَّةٍ', definition: 'وَاضِحَةٌ وَقَوِيَّةٌ وَيَسْهُلُ تَصَوُّرُهَا أَوِ الشُّعُورُ بِهَا.' },
    },
    {
      en: { word: 'loyalty', definition: 'Faithfulness and strong support for someone or something.' },
      ar: { word: 'الْوَلاءِ', definition: 'الْإِخْلَاصُ وَالدَّعْمُ الْقَوِيُّ لِشَخْصٍ أَوْ شَيْءٍ.' },
    },
    {
      en: { word: 'true and only reality', definition: 'The real and ultimate truth that alone is truly real.' },
      ar: { word: 'الْحَقِيقَةُ الْحَقَّةُ وَالْوَحِيدَةُ', definition: 'الْحَقِيقَةُ النِّهَائِيَّةُ الَّتِي هِيَ وَحْدَهَا الْحَقُّ الثَّابِتُ.' },
    },
    {
      en: { word: 'the unity of existence', definition: 'The Sufi idea that true existence ultimately belongs to Allah.' },
      ar: { word: 'وَحْدَةِ الْوُجُودِ', definition: 'فِكْرَةٌ صُوفِيَّةٌ تَعْنِي أَنَّ الْوُجُودَ الْحَقِيقِيَّ يَعُودُ لِلهِ.' },
    },
    {
      en: { word: 'existence', definition: 'The state of being real or present.' },
      ar: { word: 'وُجُودٌ', definition: 'حَالَةُ كَوْنِ الشَّيْءِ حَقِيقِيًّا أَوْ مَوْجُودًا.' },
    },
  ],
  9: [
    {
      en: { word: 'original unity', definition: 'The first state of oneness before multiplicity appeared.' },
      ar: { word: 'الْوَحْدَةُ الْأَصْلِيَّةُ', definition: 'الْحَالَةُ الْأُولَى لِلْوَحْدَةِ قَبْلَ ظُهُورِ الْكَثْرَةِ.' },
    },
    {
      en: { word: 'multiple existence', definition: 'The many created beings and forms seen in the world.' },
      ar: { word: 'الْكَثْرَةُ', definition: 'تَعَدُّدُ الْمَخْلُوقَاتِ وَالْأَشْكَالِ الَّتِي نَرَاهَا فِي الْعَالَمِ.' },
    },
    {
      en: { word: 'requirements', definition: 'Things that are necessary or must be done.' },
      ar: { word: 'شُرُوطَ', definition: 'أَشْيَاءُ ضَرُورِيَّةٌ أَوْ يَجِبُ الْقِيَامُ بِهَا.' },
    },
  ],
  11: [
    {
      en: { word: 'highlights', definition: 'Emphasizes or shows something as important.' },
      ar: { word: 'يُبْرِزُ', definition: 'يُؤَكِّدُ شَيْئًا أَوْ يُظْهِرُهُ عَلَى أَنَّهُ مُهِمٌّ.' },
    },
    {
      en: { word: 'salvation', definition: 'Being saved spiritually.' },
      ar: { word: 'الْخَلَاصِ', definition: 'النَّجَاةُ الرُّوحِيَّةُ.' },
    },
    {
      en: { word: 'Death', definition: 'The end of worldly life.' },
      ar: { word: 'الْمَوْتُ', definition: 'نِهَايَةُ الْحَيَاةِ الدُّنْيَوِيَّةِ.' },
    },
    {
      en: { word: 'wisest', definition: 'The most wise; showing the best judgment.' },
      ar: { word: 'الْأَكْيَاسُ', definition: 'الْأَكْثَرُ حِكْمَةً وَحُسْنًا فِي التَّفْكِيرِ وَالتَّقْدِيرِ.' },
    },
    {
      en: { word: 'set out', definition: 'To begin a journey or departure.' },
      ar: { word: 'يَسْتَعِدَّ لِلرَّحِيلِ', definition: 'أَنْ يَبْدَأَ الِاسْتِعْدَادَ لِرِحْلَةٍ أَوْ مُغَادَرَةٍ.' },
    },
  ],
};
