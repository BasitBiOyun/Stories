import type { B1ExplicitHighlightPair } from '../../b1HighlightStandard';

/**
 * Adam B1 predates the bilingual highlight contract and several chapters chose
 * EN/AR Word Notes independently. These reviewed pairs are therefore explicit:
 * English owns the concept; Arabic points to that same concept in the locked
 * Arabic prose. Definitions are learner-facing and Arabic copy is vocalized.
 */
export const adamB1ExplicitHighlightTargets: Record<number, readonly B1ExplicitHighlightPair[]> = {
  1: [
    {
      en: { word: 'Messenger', definition: 'A person chosen by Allah to bring His message to people.' },
      ar: { word: 'رسول', definition: 'شَخْصٌ يَخْتَارُهُ اللهُ لِيُبَلِّغَ رِسَالَتَهُ إِلَى النَّاسِ.' },
    },
    {
      en: { word: 'ruler', definition: 'A person given responsibility to lead or manage.' },
      ar: { word: 'خليفة', definition: 'شَخْصٌ تُعْطَى لَهُ مَسْؤُولِيَّةُ الْقِيَادَةِ أَوِ الْإِدَارَةِ.' },
    },
    {
      en: { word: 'curiosity', definition: 'A strong desire to know or learn something.' },
      ar: { word: 'بفضول', definition: 'رَغْبَةٌ قَوِيَّةٌ فِي مَعْرِفَةِ شَيْءٍ أَوْ تَعَلُّمِهِ.' },
    },
    {
      en: { word: 'soil', definition: 'The earth or ground in which plants can grow.' },
      ar: { word: 'التراب', definition: 'التُّرَابُ أَوِ الْأَرْضُ الَّتِي يُمْكِنُ أَنْ تَنْمُوَ فِيهَا النَّبَاتَاتُ.' },
    },
  ],
  2: [
    {
      en: { word: 'intellect', definition: 'The ability to think, understand, and reason.' },
      ar: { word: 'العقل', definition: 'الْقُدْرَةُ عَلَى التَّفْكِيرِ وَالْفَهْمِ وَالِاسْتِدْلَالِ.' },
    },
    {
      en: { word: 'knowledge', definition: 'Information and understanding gained through learning.' },
      ar: { word: 'العلم', definition: 'الْمَعْرِفَةُ وَالْفَهْمُ اللَّذَانِ يَكْتَسِبُهُمَا الْإِنْسَانُ بِالتَّعَلُّمِ.' },
    },
    {
      en: { word: 'skin colors', definition: 'The different natural colors of human skin.' },
      ar: { word: 'ألوان بشرة', definition: 'الْأَلْوَانُ الطَّبِيعِيَّةُ الْمُخْتَلِفَةُ لِبَشَرَةِ الْإِنْسَانِ.' },
    },
    {
      en: { word: 'respect', definition: 'A feeling that someone should be treated with honor and care.' },
      ar: { word: 'احترامكم', definition: 'شُعُورٌ بِأَنَّ شَخْصًا يَسْتَحِقُّ التَّكْرِيمَ وَحُسْنَ الْمُعَامَلَةِ.' },
    },
  ],
  3: [
    {
      en: { word: 'arrogant', definition: 'Thinking you are more important or better than others.' },
      ar: { word: 'متكبرا', definition: 'مُعْتَقِدًا أَنَّكَ أَهَمُّ أَوْ أَفْضَلُ مِنَ الْآخَرِينَ.' },
    },
    {
      en: { word: 'superior', definition: 'Higher or better in rank, quality, or importance.' },
      ar: { word: 'أفضل', definition: 'أَعْلَى أَوْ أَحْسَنُ فِي الْمَكَانَةِ أَوِ الْجَوْدَةِ أَوِ الْأَهَمِّيَّةِ.' },
    },
    {
      en: { word: 'origin', definition: 'The place, material, or point from which something begins.' },
      ar: { word: 'أصله', definition: 'الْمَكَانُ أَوِ الْمَادَّةُ أَوِ النُّقْطَةُ الَّتِي يَبْدَأُ مِنْهَا الشَّيْءُ.' },
    },
    {
      en: { word: 'fire', definition: 'Heat and light produced by something that is burning.' },
      ar: { word: 'نار', definition: 'حَرَارَةٌ وَضَوْءٌ يَنْتُجَانِ عَنْ شَيْءٍ يَحْتَرِقُ.' },
    },
  ],
  4: [
    {
      en: { word: 'Creator', definition: 'Allah, Who created all things.' },
      ar: { word: 'الخالق', definition: 'اللهُ الَّذِي خَلَقَ كُلَّ شَيْءٍ.' },
    },
    {
      en: { word: 'enemy', definition: 'A person or being who wants to harm or oppose another.' },
      ar: { word: 'عدو', definition: 'شَخْصٌ أَوْ كَائِنٌ يُرِيدُ إِيذَاءَ غَيْرِهِ أَوْ مُعَارَضَتَهُ.' },
    },
    {
      en: { word: 'careful', definition: 'Paying attention to danger or possible problems.' },
      ar: { word: 'حذرًا', definition: 'مُنْتَبِهًا إِلَى الْخَطَرِ أَوِ الْمُشْكِلَاتِ الْمُمْكِنَةِ.' },
    },
  ],
  5: [
    {
      en: { word: 'lonely', definition: 'Sad because you are alone or without company.' },
      ar: { word: 'بالوحدة', definition: 'حَزِينًا لِأَنَّكَ وَحْدَكَ أَوْ بِلَا رِفْقَةٍ.' },
    },
    {
      en: { word: 'blessings', definition: 'Good things and gifts given by Allah.' },
      ar: { word: 'النعم', definition: 'خَيْرَاتٌ وَهَدَايَا يَمْنَحُهَا اللهُ.' },
    },
    {
      en: { word: 'lie', definition: 'Something said or presented that is not true.' },
      ar: { word: 'كذبة', definition: 'قَوْلٌ أَوْ شَيْءٌ يُقَدَّمُ عَلَى أَنَّهُ حَقِيقِيٌّ وَهُوَ غَيْرُ صَحِيحٍ.' },
    },
    {
      en: { word: 'tree', definition: 'A tall plant with a trunk and branches.' },
      ar: { word: 'شجرة', definition: 'نَبَاتٌ طَوِيلٌ لَهُ جِذْعٌ وَأَغْصَانٌ.' },
    },
  ],
  6: [
    {
      en: { word: 'forbidden', definition: 'Not allowed by a rule or command.' },
      ar: { word: 'الممنوعة', definition: 'غَيْرُ مَسْمُوحٍ بِهِ بِسَبَبِ قَاعِدَةٍ أَوْ أَمْرٍ.' },
    },
    {
      en: { word: 'shame', definition: 'A painful feeling caused by knowing that something was wrong.' },
      ar: { word: 'الخجل', definition: 'شُعُورٌ مُؤْلِمٌ يَنْتُجُ عَنْ مَعْرِفَةِ أَنَّ شَيْئًا مَا كَانَ خَاطِئًا.' },
    },
    {
      en: { word: 'inborn', definition: 'Natural and present from birth.' },
      ar: { word: 'فطرة', definition: 'طَبِيعِيٌّ وَمَوْجُودٌ فِي الْإِنْسَانِ مُنْذُ الْوِلَادَةِ.' },
    },
    {
      en: { word: 'tree leaves', definition: 'The flat green parts that grow on trees.' },
      ar: { word: 'أوراق أشجار', definition: 'الْأَجْزَاءُ الْخَضْرَاءُ الْمُسَطَّحَةُ الَّتِي تَنْمُو عَلَى الْأَشْجَارِ.' },
    },
  ],
  7: [
    {
      en: { word: 'mistake', definition: 'An action or decision that is wrong.' },
      ar: { word: 'خطأ', definition: 'فِعْلٌ أَوْ قَرَارٌ غَيْرُ صَحِيحٍ.' },
    },
    {
      en: { word: 'pardon', definition: 'To forgive someone for a wrong action.' },
      ar: { word: 'يغفر', definition: 'أَنْ يَعْفُوَ عَنْ شَخْصٍ بِسَبَبِ فِعْلٍ خَاطِئٍ.' },
    },
    {
      en: { word: 'barrier', definition: 'Something that makes progress or understanding difficult.' },
      ar: { word: 'عقبة', definition: 'شَيْءٌ يَجْعَلُ التَّقَدُّمَ أَوِ الْفَهْمَ أَكْثَرَ صُعُوبَةً.' },
    },
    {
      en: { word: 'earth', definition: 'The world where human beings live.' },
      ar: { word: 'الأرض', definition: 'الْعَالَمُ الَّذِي يَعِيشُ فِيهِ الْبَشَرُ.' },
    },
  ],
  8: [
    {
      en: { word: 'struggle', definition: 'To make a strong effort to overcome difficulty.' },
      ar: { word: 'يكافح', definition: 'أَنْ يَبْذُلَ جُهْدًا كَبِيرًا لِلتَّغَلُّبِ عَلَى صُعُوبَةٍ.' },
    },
    {
      en: { word: 'survive', definition: 'To continue living despite danger or difficulty.' },
      ar: { word: 'البقاء', definition: 'الِاسْتِمْرَارُ فِي الْحَيَاةِ رَغْمَ الْخَطَرِ أَوِ الصُّعُوبَةِ.' },
    },
    {
      en: { word: 'clothes', definition: 'Things people wear to cover and protect the body.' },
      ar: { word: 'بالملابس', definition: 'أَشْيَاءُ يَلْبَسُهَا النَّاسُ لِتَغْطِيَةِ الْجِسْمِ وَحِمَايَتِهِ.' },
    },
    {
      en: { word: 'nature', definition: 'The natural world of land, plants, animals, and weather.' },
      ar: { word: 'الطبيعة', definition: 'الْعَالَمُ الطَّبِيعِيُّ مِنْ أَرْضٍ وَنَبَاتٍ وَحَيَوَانٍ وَطَقْسٍ.' },
    },
  ],
  9: [
    {
      en: { word: 'community', definition: 'A group of people living or belonging together.' },
      ar: { word: 'مجتمع', definition: 'مَجْمُوعَةٌ مِنَ النَّاسِ يَعِيشُونَ أَوْ يَنْتَمُونَ مَعًا.' },
    },
    {
      en: { word: 'honestly', definition: 'In a truthful and sincere way.' },
      ar: { word: 'بصدق', definition: 'بِطَرِيقَةٍ صَادِقَةٍ وَمُخْلِصَةٍ.' },
    },
    {
      en: { word: 'sacred texts', definition: 'Holy writings connected with religion.' },
      ar: { word: 'الكتب المقدسة', definition: 'كُتُبٌ مُقَدَّسَةٌ مُرْتَبِطَةٌ بِالدِّينِ.' },
    },
    {
      en: { word: 'right path', definition: 'The correct moral or spiritual way to live.' },
      ar: { word: 'الطريق الصحيح', definition: 'الطَّرِيقَةُ الصَّحِيحَةُ أَخْلَاقِيًّا وَرُوحِيًّا لِلْحَيَاةِ.' },
    },
  ],
  10: [
    {
      en: { word: 'disagreement', definition: 'A situation in which people have different opinions or wishes.' },
      ar: { word: 'خلاف', definition: 'حَالَةٌ يَكُونُ فِيهَا لِلنَّاسِ آرَاءٌ أَوْ رَغَبَاتٌ مُخْتَلِفَةٌ.' },
    },
    {
      en: { word: 'offering', definition: 'A gift given to show devotion to Allah.' },
      ar: { word: 'قربان', definition: 'هَدِيَّةٌ تُقَدَّمُ لِإِظْهَارِ الْإِخْلَاصِ لِلهِ.' },
    },
    {
      en: { word: 'jealous', definition: 'Unhappy because someone else has something you want.' },
      ar: { word: 'حاسدًا', definition: 'غَيْرَ رَاضٍ لِأَنَّ شَخْصًا آخَرَ يَمْلِكُ شَيْئًا تَرْغَبُ فِيهِ.' },
    },
    {
      en: { word: 'farmer', definition: 'A person who grows crops or keeps animals on a farm.' },
      ar: { word: 'مزارعًا', definition: 'شَخْصٌ يَزْرَعُ الْمَحَاصِيلَ أَوْ يَعْتَنِي بِالْحَيَوَانَاتِ فِي مَزْرَعَةٍ.' },
    },
  ],
  11: [
    {
      en: { word: 'panic', definition: 'Sudden strong fear that makes it difficult to think clearly.' },
      ar: { word: 'الذعر', definition: 'خَوْفٌ شَدِيدٌ وَمُفَاجِئٌ يَجْعَلُ التَّفْكِيرَ الْوَاضِحَ صَعْبًا.' },
    },
    {
      en: { word: 'raven', definition: 'A large black bird.' },
      ar: { word: 'غرابًا', definition: 'طَائِرٌ أَسْوَدُ كَبِيرٌ.' },
    },
    {
      en: { word: 'digging', definition: 'Making a hole in the ground by moving earth away.' },
      ar: { word: 'يحفر', definition: 'يَصْنَعُ حُفْرَةً فِي الْأَرْضِ بِإِزَاحَةِ التُّرَابِ.' },
    },
    {
      en: { word: 'anger', definition: 'A strong feeling of being upset or mad.' },
      ar: { word: 'الغضب', definition: 'شُعُورٌ قَوِيٌّ بِالِانْزِعَاجِ أَوِ الْغَضَبِ.' },
    },
  ],
  12: [
    {
      en: { word: 'worldwide', definition: 'In all parts of the world.' },
      ar: { word: 'كل مكان في العالم', definition: 'فِي جَمِيعِ أَجْزَاءِ الْعَالَمِ.' },
    },
    {
      en: { word: 'admitting', definition: 'Accepting and saying that something is true or that you made a mistake.' },
      ar: { word: 'الاعتراف', definition: 'قَبُولُ أَنَّ شَيْئًا صَحِيحٌ أَوْ أَنَّكَ ارْتَكَبْتَ خَطَأً وَقَوْلُ ذَلِكَ.' },
    },
    {
      en: { word: 'message', definition: 'An idea or teaching communicated to other people.' },
      ar: { word: 'الرسالة', definition: 'فِكْرَةٌ أَوْ تَعْلِيمٌ يُنْقَلُ إِلَى أَشْخَاصٍ آخَرِينَ.' },
    },
  ],
};
