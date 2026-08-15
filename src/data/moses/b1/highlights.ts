import type { B1ExplicitHighlightPair } from '../../b1HighlightStandard';

/**
 * Moses B1 legacy EN/AR Word Notes were selected independently, so every story
 * chapter uses an explicit concept pair. English owns the learning target;
 * Arabic points to the same concept in the locked Arabic prose.
 */
export const mosesB1ExplicitHighlightTargets: Record<number, readonly B1ExplicitHighlightPair[]> = {
  1: [
    {
      en: { word: 'ancestor', definition: 'A family member who lived many generations before you.' },
      ar: { word: 'جدّهم', definition: 'فَرْدٌ مِنَ الْعَائِلَةِ عَاشَ قَبْلَكَ بِأَجْيَالٍ كَثِيرَةٍ.' },
    },
    {
      en: { word: 'harsh', definition: 'Cruel, strict, or unkind.' },
      ar: { word: 'قاسيًا', definition: 'شَدِيدٌ أَوْ غَيْرُ رَحِيمٍ فِي الْمُعَامَلَةِ.' },
    },
    {
      en: { word: 'throne', definition: 'A special seat that represents the power of a king or ruler.' },
      ar: { word: 'عرْشه', definition: 'مَقْعَدٌ خَاصٌّ يَرْمُزُ إِلَى سُلْطَةِ الْمَلِكِ أَوِ الْحَاكِمِ.' },
    },
    {
      en: { word: 'kingdom', definition: 'A country or land ruled by a king.' },
      ar: { word: 'المملكة', definition: 'بَلَدٌ أَوْ أَرْضٌ يَحْكُمُهَا مَلِكٌ.' },
    },
  ],
  2: [
    {
      en: { word: 'advisor', definition: 'A person who gives advice to a ruler or leader.' },
      ar: { word: 'مُستشارِيه', definition: 'شَخْصٌ يُقَدِّمُ النَّصِيحَةَ لِحَاكِمٍ أَوْ قَائِدٍ.' },
    },
    {
      en: { word: 'newborn', definition: 'A baby who has just been born.' },
      ar: { word: 'المواليد', definition: 'أَطْفَالٌ وُلِدُوا مُنْذُ وَقْتٍ قَصِيرٍ.' },
    },
    {
      en: { word: 'heartless', definition: 'Showing no kindness, mercy, or pity.' },
      ar: { word: 'قساة القلوب', definition: 'لَا يُظْهِرُونَ رَحْمَةً وَلَا شَفَقَةً وَلَا لِينًا.' },
    },
    {
      en: { word: 'frightened', definition: 'Very afraid.' },
      ar: { word: 'خائفة', definition: 'شَاعِرَةٌ بِخَوْفٍ شَدِيدٍ.' },
    },
    {
      en: { word: 'broke into', definition: 'Entered a place by force.' },
      ar: { word: 'اِقْتَحَمَ', definition: 'دَخَلَ مَكَانًا بِالْقُوَّةِ.' },
    },
  ],
  3: [
    {
      en: { word: 'shelter', definition: 'A safe place that protects someone from danger.' },
      ar: { word: 'مكان آمِن', definition: 'مَكَانٌ آمِنٌ يَحْمِي الشَّخْصَ مِنَ الْخَطَرِ.' },
    },
    {
      en: { word: 'ashore', definition: 'Onto the land from the water.' },
      ar: { word: 'الشاطئ', definition: 'الْيَابِسَةُ عِنْدَ حَافَّةِ الْمَاءِ.' },
    },
    {
      en: { word: 'servants', definition: 'People who work in a house or palace for others.' },
      ar: { word: 'خَدَم', definition: 'أَشْخَاصٌ يَعْمَلُونَ فِي بَيْتٍ أَوْ قَصْرٍ لِخِدْمَةِ غَيْرِهِمْ.' },
    },
    {
      en: { word: 'kind-hearted', definition: 'Kind, gentle, and caring toward other people.' },
      ar: { word: 'طيّبة القلب', definition: 'رَحِيمَةٌ وَلَطِيفَةٌ وَمُهْتَمَّةٌ بِالْآخَرِينَ.' },
    },
  ],
  4: [
    {
      en: { word: 'nurse', definition: 'A woman who feeds and cares for a baby.' },
      ar: { word: 'مرضِعة', definition: 'امْرَأَةٌ تُرْضِعُ الطِّفْلَ وَتَعْتَنِي بِهِ.' },
    },
    {
      en: { word: 'courage', definition: 'Bravery when facing difficulty or danger.' },
      ar: { word: 'شَجاعتها', definition: 'الْجُرْأَةُ وَالثَّبَاتُ عِنْدَ مُوَاجَهَةِ الصُّعُوبَةِ أَوِ الْخَطَرِ.' },
    },
    {
      en: { word: 'originally', definition: 'At first or by origin.' },
      ar: { word: 'في الأصل', definition: 'فِي الْبِدَايَةِ أَوْ بِحَسَبِ الْأَصْلِ.' },
    },
    {
      en: { word: 'raised', definition: 'Cared for a child while the child was growing up.' },
      ar: { word: 'ربّتْه', definition: 'اعْتَنَتْ بِالطِّفْلِ وَرَعَتْهُ أَثْنَاءَ نُمُوِّهِ.' },
    },
    {
      en: { word: 'felt close to', definition: 'Felt a strong personal connection with someone.' },
      ar: { word: 'قريب من', definition: 'شَعَرَ بِصِلَةٍ وَقُرْبٍ قَوِيَّيْنِ مِنْ شَخْصٍ أَوْ جَمَاعَةٍ.' },
    },
  ],
  5: [
    {
      en: { word: 'accidentally', definition: 'By chance and not intentionally.' },
      ar: { word: 'عن غير قصد', definition: 'بِدُونِ نِيَّةٍ أَوْ تَعَمُّدٍ.' },
    },
    {
      en: { word: 'on purpose', definition: 'Intentionally; because you meant to do it.' },
      ar: { word: 'عن قصْد', definition: 'بِنِيَّةٍ وَتَعَمُّدٍ.' },
    },
    {
      en: { word: 'pardoned', definition: 'Forgave someone for a wrong action.' },
      ar: { word: 'فغفَر', definition: 'عَفَا عَنْ شَخْصٍ بِسَبَبِ فِعْلٍ خَاطِئٍ.' },
    },
    {
      en: { word: 'quarrelsome', definition: 'Often arguing or fighting with other people.' },
      ar: { word: 'كثير الخِصام', definition: 'كَثِيرُ الشِّجَارِ وَالْجِدَالِ مَعَ الْآخَرِينَ.' },
    },
    {
      en: { word: 'peaceable', definition: 'Calm and not wanting to fight.' },
      ar: { word: 'مُسالِمًا', definition: 'هَادِئًا وَلَا يُرِيدُ الشِّجَارَ أَوِ الْقِتَالَ.' },
    },
  ],
  6: [
    {
      en: { word: 'punishment', definition: 'A penalty given for doing something wrong.' },
      ar: { word: 'عقوبة', definition: 'جَزَاءٌ يُفْرَضُ بِسَبَبِ فِعْلٍ خَاطِئٍ.' },
    },
    {
      en: { word: 'escaped', definition: 'Got away from danger or from people trying to catch you.' },
      ar: { word: 'فهرب', definition: 'ابْتَعَدَ عَنِ الْخَطَرِ أَوْ عَمَّنْ يُرِيدُ الْقَبْضَ عَلَيْهِ.' },
    },
    {
      en: { word: 'guided', definition: 'Showed the right way or direction.' },
      ar: { word: 'هداه', definition: 'أَرْشَدَهُ إِلَى الطَّرِيقِ أَوِ الِاتِّجَاهِ الصَّحِيحِ.' },
    },
    {
      en: { word: 'cattle', definition: 'Large farm animals such as cows or bulls.' },
      ar: { word: 'مواشيَهم', definition: 'حَيَوَانَاتٌ أَلِيفَةٌ كَالْأَبْقَارِ وَنَحْوِهَا يُرَبِّيهَا النَّاسُ.' },
    },
  ],
  7: [
    {
      en: { word: 'turn', definition: 'Your place in an order or line for doing something.' },
      ar: { word: 'دوْرنا', definition: 'الْمَوْقِعُ أَوِ التَّرْتِيبُ الْمُخَصَّصُ لَكَ عِنْدَ الِانْتِظَارِ.' },
    },
    {
      en: { word: 'shepherds', definition: 'People who look after sheep.' },
      ar: { word: 'الرُّعاة', definition: 'أَشْخَاصٌ يَعْتَنُونَ بِالْأَغْنَامِ وَيَرْعَوْنَهَا.' },
    },
    {
      en: { word: 'messenger', definition: 'A person chosen by Allah to deliver His message.' },
      ar: { word: 'رسولًا', definition: 'شَخْصٌ يَخْتَارُهُ اللهُ لِيُبَلِّغَ رِسَالَتَهُ.' },
    },
  ],
  8: [
    {
      en: { word: 'offered', definition: 'Presented something for someone to accept or refuse.' },
      ar: { word: 'عَرَضَ', definition: 'قَدَّمَ شَيْئًا لِشَخْصٍ لِيَقْبَلَهُ أَوْ يَرْفُضَهُ.' },
    },
    {
      en: { word: 'stranger', definition: 'A person who is in a place where they do not know people.' },
      ar: { word: 'غريبًا', definition: 'شَخْصٌ يَكُونُ فِي مَكَانٍ لَا يَعْرِفُ فِيهِ النَّاسَ.' },
    },
    {
      en: { word: 'valley', definition: 'Low land between hills or mountains.' },
      ar: { word: 'واديًا', definition: 'أَرْضٌ مُنْخَفِضَةٌ بَيْنَ التِّلَالِ أَوِ الْجِبَالِ.' },
    },
    {
      en: { word: 'hillside', definition: 'The sloping side of a hill or mountain.' },
      ar: { word: 'جانب الجبل', definition: 'الْجَانِبُ الْمَائِلُ مِنْ تَلٍّ أَوْ جَبَلٍ.' },
    },
  ],
  9: [
    {
      en: { word: 'staff', definition: 'A long walking stick.' },
      ar: { word: 'عصاه', definition: 'عَصًا طَوِيلَةٌ تُسْتَعْمَلُ لِلْمَشْيِ أَوِ الِاتِّكَاءِ.' },
    },
    {
      en: { word: 'signs', definition: 'Miraculous signs showing Allah’s power.' },
      ar: { word: 'آيات', definition: 'آيَاتٌ مُعْجِزَةٌ تُظْهِرُ قُدْرَةَ اللهِ.' },
    },
    {
      en: { word: 'guidance', definition: 'Help that shows someone the right way.' },
      ar: { word: 'هداية', definition: 'إِرْشَادٌ يُبَيِّنُ لِلشَّخْصِ الطَّرِيقَ الصَّحِيحَ.' },
    },
    {
      en: { word: 'headed to', definition: 'Started going in the direction of a place.' },
      ar: { word: 'توجّه', definition: 'بَدَأَ يَسِيرُ فِي اتِّجَاهِ مَكَانٍ مُعَيَّنٍ.' },
    },
  ],
  10: [
    {
      en: { word: 'companion', definition: 'Someone who goes with or supports another person.' },
      ar: { word: 'أخاه هارون معه', definition: 'شَخْصٌ يَذْهَبُ مَعَ غَيْرِهِ وَيُسَانِدُهُ.' },
    },
    {
      en: { word: 'throne', definition: 'A special seat for a king or ruler.' },
      ar: { word: 'عرْشه', definition: 'مَقْعَدٌ خَاصٌّ بِالْمَلِكِ أَوِ الْحَاكِمِ.' },
    },
    {
      en: { word: 'display', definition: 'To show something clearly so others can see it.' },
      ar: { word: 'أظهَر', definition: 'أَرَى شَيْئًا بِوُضُوحٍ لِيَرَاهُ الْآخَرُونَ.' },
    },
  ],
  11: [
    {
      en: { word: 'made fun of', definition: 'Mocked or laughed at someone in an unkind way.' },
      ar: { word: 'سخِروا', definition: 'اسْتَهْزَؤُوا بِشَخْصٍ أَوْ ضَحِكُوا مِنْهُ بِطَرِيقَةٍ مُؤْذِيَةٍ.' },
    },
    {
      en: { word: 'witnessed', definition: 'Saw an event happen.' },
      ar: { word: 'رأى السحرة', definition: 'شَاهَدَ حَدَثًا وَقَعَ أَمَامَهُ.' },
    },
    {
      en: { word: 'arrogant', definition: 'Thinking you are better or more important than other people.' },
      ar: { word: 'متكبِّرًا', definition: 'مُعْتَقِدًا أَنَّكَ أَفْضَلُ أَوْ أَهَمُّ مِنَ الْآخَرِينَ.' },
    },
    {
      en: { word: 'trouble', definition: 'To cause problems, pain, or difficulty for someone.' },
      ar: { word: 'إِيذَاء', definition: 'إِلْحَاقُ الضَّرَرِ أَوِ الْأَلَمِ أَوِ الْمَشَقَّةِ بِشَخْصٍ.' },
    },
  ],
  12: [
    {
      en: { word: 'caravan', definition: 'A group of people travelling together.' },
      ar: { word: 'القافلة', definition: 'مَجْمُوعَةٌ مِنَ النَّاسِ يَسِيرُونَ مَعًا فِي رِحْلَةٍ.' },
    },
    {
      en: { word: 'catch up with', definition: 'Reach someone who is moving ahead of you.' },
      ar: { word: 'لَحِقَ بهم', definition: 'وَصَلَ إِلَى أَشْخَاصٍ كَانُوا يَسِيرُونَ أَمَامَهُ.' },
    },
    {
      en: { word: 'panicked', definition: 'Became suddenly very frightened and unable to stay calm.' },
      ar: { word: 'فخاف', definition: 'شَعَرَ بِخَوْفٍ شَدِيدٍ وَمُفَاجِئٍ وَلَمْ يَبْقَ هَادِئًا.' },
    },
  ],
  13: [
    {
      en: { word: 'trapped', definition: 'Unable to escape from a dangerous place or situation.' },
      ar: { word: 'محاصَرين', definition: 'غَيْرُ قَادِرِينَ عَلَى الْهَرَبِ مِنْ مَكَانٍ أَوْ مَوْقِفٍ خَطِرٍ.' },
    },
    {
      en: { word: 'parted', definition: 'Separated or opened into two sides.' },
      ar: { word: 'انشقّ', definition: 'انْفَصَلَ أَوِ انْفَتَحَ إِلَى جَانِبَيْنِ.' },
    },
    {
      en: { word: 'midway', definition: 'In the middle of a path or journey.' },
      ar: { word: 'وسط البحر', definition: 'فِي مُنْتَصَفِ الطَّرِيقِ أَوِ الْمَسَارِ.' },
    },
  ],
};
