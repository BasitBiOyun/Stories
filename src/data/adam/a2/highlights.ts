import type { PageData } from '../../../types';

export type AdamA2HighlightLanguage = 'en' | 'ar';

type HighlightText = {
  word: string;
  definition: string;
};

export type AdamA2HighlightTarget = {
  id: string;
  en: HighlightText;
  ar: HighlightText;
};

/**
 * Canonical Adam A2 story-highlight contract.
 *
 * Rules:
 * - English is the master learning-target set.
 * - Arabic may translate/surface-form a target, but may not choose an independent target.
 * - English and Arabic definitions carry the same meaning; Arabic definitions are fully vocalized.
 * - Runtime story highlights are produced only from this file. Legacy page.vocabulary and
 *   page.animatedWords are intentionally overridden by the quality-finalization layers.
 * - The targets below preserve the words that were actually visible in the English reader before
 *   this migration. A repeated "honest" entry configured in Chapter 10 is intentionally omitted:
 *   the reader already suppressed it because "honest" was highlighted in Chapter 7.
 */
export const adamA2HighlightTargets: Record<number, readonly AdamA2HighlightTarget[]> = {
  1: [
    {
      id: 'messenger',
      en: { word: 'Messenger', definition: 'A person who brings a message from Allah.' },
      ar: { word: 'نَبِيٍّ', definition: 'شَخْصٌ يَحْمِلُ رِسَالَةً مِنَ اللهِ.' },
    },
    {
      id: 'soil',
      en: { word: 'soil', definition: 'The earth where plants can grow.' },
      ar: { word: 'التُّرَابِ', definition: 'الْأَرْضُ الَّتِي يُمْكِنُ أَنْ تَنْمُوَ فِيهَا النَّبَاتَاتُ.' },
    },
    {
      id: 'curiosity',
      en: { word: 'curiosity', definition: 'Wanting to know or learn something.' },
      ar: { word: 'بِفُضُولٍ', definition: 'الرَّغْبَةُ فِي مَعْرِفَةِ شَيْءٍ أَوْ تَعَلُّمِهِ.' },
    },
    {
      id: 'sky',
      en: { word: 'sky', definition: 'The space we see above the Earth.' },
      ar: { word: 'السَّمَاءَ', definition: 'الْفَضَاءُ الَّذِي نَرَاهُ فَوْقَ الْأَرْضِ.' },
    },
    {
      id: 'earth',
      en: { word: 'earth', definition: 'The world where people live.' },
      ar: { word: 'الْأَرْضَ', definition: 'الْعَالَمُ الَّذِي يَعِيشُ فِيهِ النَّاسُ.' },
    },
    {
      id: 'dust',
      en: { word: 'dust', definition: 'Very small, dry pieces of earth.' },
      ar: { word: 'تُرَابٍ', definition: 'قِطَعٌ صَغِيرَةٌ جِدًّا وَجَافَّةٌ مِنَ التُّرَابِ.' },
    },
  ],
  2: [
    {
      id: 'respect',
      en: { word: 'respect', definition: 'A feeling that someone is important and should be treated well.' },
      ar: { word: 'وَاحْتِرامًا', definition: 'شُعُورٌ بِأَنَّ شَخْصًا مَا مُهِمٌّ وَيَجِبُ أَنْ يُعَامَلَ بِشَكْلٍ جَيِّدٍ.' },
    },
    {
      id: 'wiser',
      en: { word: 'wiser', definition: 'Knowing more and making better choices.' },
      ar: { word: 'أَكْثَرَ عِلْمًا وَذَكَاءً', definition: 'مَعْرِفَةُ أَشْيَاءَ أَكْثَرَ وَاتِّخَاذُ خِيَارَاتٍ أَفْضَلَ.' },
    },
    {
      id: 'knowledge',
      en: { word: 'knowledge', definition: 'Things that a person knows and understands.' },
      ar: { word: 'الْعِلْمَ', definition: 'أَشْيَاءُ يَعْرِفُهَا الشَّخْصُ وَيَفْهَمُهَا.' },
    },
    {
      id: 'think',
      en: { word: 'think', definition: 'To use your mind to understand or decide.' },
      ar: { word: 'التَّفْكِيرَ', definition: 'اِسْتِخْدَامُ عَقْلِكَ لِتَفْهَمَ أَوْ تُقَرِّرَ.' },
    },
    {
      id: 'amazing',
      en: { word: 'amazing', definition: 'Very surprising or very good.' },
      ar: { word: 'عَظيمٌ', definition: 'مُدْهِشٌ جِدًّا أَوْ جَيِّدٌ جِدًّا.' },
    },
    {
      id: 'understand',
      en: { word: 'understand', definition: 'To know the meaning of something or how it works.' },
      ar: { word: 'يَفْهَمُ', definition: 'أَنْ تَعْرِفَ مَعْنَى شَيْءٍ أَوْ كَيْفَ يَعْمَلُ.' },
    },
  ],
  3: [
    {
      id: 'arrogant',
      en: { word: 'arrogant', definition: 'Thinking you are better or more important than other people.' },
      ar: { word: 'مُتَكَبِّرًا', definition: 'الِاعْتِقَادُ بِأَنَّكَ أَفْضَلُ أَوْ أَهَمُّ مِنَ النَّاسِ الْآخَرِينَ.' },
    },
    {
      id: 'valuable',
      en: { word: 'valuable', definition: 'Very useful or important.' },
      ar: { word: 'قِيمَةً', definition: 'مُفِيدٌ جِدًّا أَوْ مُهِمٌّ.' },
    },
    {
      id: 'creature',
      en: { word: 'creature', definition: 'A living thing created by Allah.' },
      ar: { word: 'مَخْلُوقًا', definition: 'كَائِنٌ حَيٌّ خَلَقَهُ اللهُ.' },
    },
    {
      id: 'fire',
      en: { word: 'fire', definition: 'Heat and light from something that is burning.' },
      ar: { word: 'نَارٍ', definition: 'حَرَارَةٌ وَضَوْءٌ مِنْ شَيْءٍ يَحْتَرِقُ.' },
    },
    {
      id: 'clay',
      en: { word: 'clay', definition: 'Soft earth that can be shaped when wet.' },
      ar: { word: 'طِينٍ', definition: 'تُرَابٌ لَيِّنٌ يُمْكِنُ تَشْكِيلُهُ عِنْدَمَا يَكُونُ مُبَلَّلًا.' },
    },
  ],
  4: [
    {
      id: 'lonely',
      en: { word: 'lonely', definition: 'Sad because you are alone.' },
      ar: { word: 'بِالْوَحْدَةِ', definition: 'حَزِينٌ لِأَنَّكَ وَحْدَكَ.' },
    },
    {
      id: 'wonderful',
      en: { word: 'wonderful', definition: 'Very good and giving you a happy feeling.' },
      ar: { word: 'رَائِعًا', definition: 'جَيِّدٌ جِدًّا وَيَمْنَحُكَ شُعُورًا سَعِيدًا.' },
    },
    {
      id: 'warning',
      en: { word: 'warning', definition: 'Words that tell you about something you should be careful about.' },
      ar: { word: 'حَذَّرَ', definition: 'كَلِمَاتٌ تُخْبِرُكَ عَنْ شَيْءٍ يَجِبُ أَنْ تَحْذَرَ مِنْهُ.' },
    },
  ],
  5: [
    {
      id: 'forgetful',
      en: { word: 'forgetful', definition: 'Often forgetting things.' },
      ar: { word: 'نَسِيًّا', definition: 'نِسْيَانُ الْأَشْيَاءِ كَثِيرًا.' },
    },
    {
      id: 'mistake',
      en: { word: 'mistake', definition: 'Something you do that is wrong or not correct.' },
      ar: { word: 'الْخَطَأِ', definition: 'شَيْءٌ تَفْعَلُهُ وَيَكُونُ خَاطِئًا أَوْ غَيْرَ صَحِيحٍ.' },
    },
    {
      id: 'very-sad',
      en: { word: 'very sad', definition: 'Feeling sad because of something wrong you did.' },
      ar: { word: 'حَزِنَا كَثِيرًا', definition: 'الشُّعُورُ بِالْحُزْنِ بِسَبَبِ شَيْءٍ خَاطِئٍ فَعَلْتَهُ.' },
    },
    {
      id: 'superior',
      en: { word: 'superior', definition: 'Better or more important than someone else.' },
      ar: { word: 'أَفْضَلُ', definition: 'أَفْضَلُ أَوْ أَهَمُّ مِنْ شَخْصٍ آخَرَ.' },
    },
    {
      id: 'on-purpose',
      en: { word: 'on purpose', definition: 'Because you meant to do it.' },
      ar: { word: 'يَقْصِدَا', definition: 'لِأَنَّكَ قَصَدْتَ أَنْ تَفْعَلَهُ.' },
    },
  ],
  6: [
    {
      id: 'crops',
      en: { word: 'crops', definition: 'Plants that people grow for food.' },
      ar: { word: 'الزُّروعِ', definition: 'نَبَاتَاتٌ يَزْرَعُهَا النَّاسُ لِلطَّعَامِ.' },
    },
    {
      id: 'rule',
      en: { word: 'rule', definition: 'To be in charge of a place or people.' },
      ar: { word: 'لِإِدارَةِ', definition: 'أَنْ تَكُونَ مَسْؤُولًا عَنْ مَكَانٍ أَوْ نَاسٍ.' },
    },
    {
      id: 'planet',
      en: { word: 'planet', definition: 'A large world in space, like Earth.' },
      ar: { word: 'هذِهِ الأَرْضِ', definition: 'عَالَمٌ كَبِيرٌ فِي الْفَضَاءِ، مِثْلُ الْأَرْضِ.' },
    },
    {
      id: 'excused',
      en: { word: 'excused', definition: 'Forgave someone for a mistake.' },
      ar: { word: 'غَفَرَ', definition: 'غَفَرَ لِشَخْصٍ خَطَأً.' },
    },
  ],
  7: [
    {
      id: 'honest',
      en: { word: 'honest', definition: 'Telling the truth and not cheating.' },
      ar: { word: 'صَادِقِينَ', definition: 'قَوْلُ الْحَقِيقَةِ وَعَدَمُ الْغِشِّ.' },
    },
    {
      id: 'behave',
      en: { word: 'behave', definition: 'To act in a particular way.' },
      ar: { word: 'يُحْسِنوا', definition: 'أَنْ تَتَصَرَّفَ بِطَرِيقَةٍ مُعَيَّنَةٍ.' },
    },
    {
      id: 'enemy',
      en: { word: 'enemy', definition: 'A person who wants to harm or oppose someone.' },
      ar: { word: 'عَدُوٌّ', definition: 'شَخْصٌ يُرِيدُ أَنْ يُؤْذِيَ شَخْصًا آخَرَ أَوْ يُعَارِضَهُ.' },
    },
    {
      id: 'remember',
      en: { word: 'remember', definition: 'To keep something in your mind and not forget it.' },
      ar: { word: 'يَذْكُرُوا', definition: 'أَنْ تُبْقِيَ شَيْئًا فِي ذِهْنِكَ وَلَا تَنْسَاهُ.' },
    },
  ],
  8: [
    {
      id: 'shepherd',
      en: { word: 'shepherd', definition: 'A person who looks after sheep.' },
      ar: { word: 'رَاعِيًا', definition: 'شَخْصٌ يَعْتَنِي بِالْأَغْنَامِ.' },
    },
    {
      id: 'farmer',
      en: { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' },
      ar: { word: 'مُزَارِعًا', definition: 'شَخْصٌ يَزْرَعُ الْمَحَاصِيلَ أَوْ يُرَبِّي الْحَيَوَانَاتِ فِي مَزْرَعَةٍ.' },
    },
    {
      id: 'offering',
      en: { word: 'offering', definition: 'Something given to Allah.' },
      ar: { word: 'قُرْبَانًا', definition: 'شَيْءٌ يُقَدَّمُ لِلهِ.' },
    },
    {
      id: 'gentle',
      en: { word: 'gentle', definition: 'Kind and calm; not rough.' },
      ar: { word: 'لَطِيفًا', definition: 'لَطِيفٌ وَهَادِئٌ؛ لَيْسَ خَشِنًا.' },
    },
    {
      id: 'jealous',
      en: { word: 'jealous', definition: 'Unhappy because another person has something you want.' },
      ar: { word: 'حَسُودًا', definition: 'غَيْرُ سَعِيدٍ لِأَنَّ شَخْصًا آخَرَ لَدَيْهِ شَيْءٌ تُرِيدُهُ.' },
    },
  ],
  9: [
    {
      id: 'crow',
      en: { word: 'crow', definition: 'A large black bird.' },
      ar: { word: 'غُرَابًا', definition: 'طَائِرٌ أَسْوَدُ كَبِيرٌ.' },
    },
    {
      id: 'panic',
      en: { word: 'panic', definition: 'A sudden strong feeling of fear.' },
      ar: { word: 'يَضْطَرِبُ', definition: 'شُعُورٌ مُفَاجِئٌ وَقَوِيٌّ بِالْخَوْفِ.' },
    },
    {
      id: 'digging',
      en: { word: 'digging', definition: 'Making a hole in the ground.' },
      ar: { word: 'يَحْفِرُ', definition: 'صُنْعُ حُفْرَةٍ فِي الْأَرْضِ.' },
    },
    {
      id: 'harm',
      en: { word: 'harm', definition: 'To hurt or damage someone or something.' },
      ar: { word: 'أُؤْذِيَكَ', definition: 'أَنْ تُؤْذِيَ أَوْ تَضُرَّ شَخْصًا أَوْ شَيْئًا.' },
    },
    {
      id: 'anger',
      en: { word: 'anger', definition: 'A strong feeling when you are very upset.' },
      ar: { word: 'الْغَضَبِ', definition: 'شُعُورٌ قَوِيٌّ عِنْدَمَا تَكُونُ مُنْزَعِجًا جِدًّا.' },
    },
  ],
  10: [
    {
      id: 'jealousy',
      en: { word: 'jealousy', definition: 'The feeling of being jealous.' },
      ar: { word: 'الْحَسَدِ', definition: 'شُعُورُ الْحَسَدِ.' },
    },
    {
      id: 'worldwide',
      en: { word: 'worldwide', definition: 'In many places around the world.' },
      ar: { word: 'فِي كُلِّ الْعَالَمِ', definition: 'فِي أَمَاكِنَ كَثِيرَةٍ حَوْلَ الْعَالَمِ.' },
    },
    {
      id: 'well-behaved',
      en: { word: 'well-behaved', definition: 'Acting in a good and polite way.' },
      ar: { word: 'حُسْنِ الخُلُقِ', definition: 'التَّصَرُّفُ بِطَرِيقَةٍ جَيِّدَةٍ وَمُهَذَّبَةٍ.' },
    },
    {
      id: 'advises',
      en: { word: 'advises', definition: 'Tells someone what they should do.' },
      ar: { word: 'تَدْعو', definition: 'يُخْبِرُ شَخْصًا بِمَا يَنْبَغِي لَهُ أَنْ يَفْعَلَهُ.' },
    },
  ],
};

export const getAdamA2ChapterHighlights = (
  chapterId: number,
  language: AdamA2HighlightLanguage,
): NonNullable<PageData['vocabulary']> => (
  (adamA2HighlightTargets[chapterId] ?? []).map((target) => ({ ...target[language] }))
);
