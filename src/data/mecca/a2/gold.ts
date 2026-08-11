import {
  applyA2GoldPages,
  buildA2SelfStudyGuide,
  buildA2StudentGuideMetadata,
  buildA2StudentGuideSections,
  buildA2StudentGuideText,
  buildA2TeacherGuide,
  buildA2TeacherGuideMetadata,
  type A2HotspotMap,
} from '../../a2GoldFactory';
import { meccaA2Pages } from './en/pages';
import { meccaA2PagesAr } from './ar/pages';

const config = {
  storyIds: Array.from({ length: 13 }, (_, index) => index + 1),
  knowledgeCheckPageId: 14,
  reviewPageId: 16,
  glossaryPageIds: [17, 18] as [number, number],
  finalChallengePageId: 19,
};

export const meccaA2HotspotsGoldEn: A2HotspotMap = {
  'h1-1': { title: 'Bilal ibn Rabah', description: 'Bilal ibn Rabah was one of the first seven people that openly said he was a Muslim in Mecca.' },
  'h1-2': { title: 'Skin Color', description: 'His story teaches us that skin color or being a slave does not make a person less valuable.' },
  'h2-1': { title: 'Jahiliyyah', description: 'The period before Islam was called the Age of Ignorance, or Jahiliyyah.' },
  'h2-2': { title: 'Rich and Poor', description: 'There was a big gap between rich and poor people.' },
  'h3-1': { title: 'Slave Markets', description: 'Slave markets were very common in Arabia. Mecca was a center for buying and selling slaves.' },
  'h3-2': { title: 'Umayya', description: 'His master was Umayya b. Halef. Umayya was one of the richest and most powerful leaders in Mecca.' },
  'h4-1': { title: 'Hot Sun', description: 'He looked after his master’s camels and worked under the hot sun in the desert of Mecca all day.' },
  'h4-2': { title: 'Respect', description: 'Every member of the family was rude to him. They did not respect him as a person.' },
  'h5-1': { title: 'No Freedom', description: 'Bilal thought he would be a slave forever. He did not have any money to pay for his freedom.' },
  'h5-2': { title: 'Fair and Equal', description: 'He taught that people must be fair and equal.' },
  'h6-1': { title: 'Hidden Path', description: 'He left his room secretly and walked on a hidden path.' },
  'h6-2': { title: 'Abu Bakr', description: 'Abu Bakr was a very kind man, and everybody knew that he was very nice to slaves.' },
  'h7-1': { title: 'No God but Allah', description: 'Islam says there is no god but Allah. Allah has no partners or equals.' },
  'h7-2': { title: 'Accepted Islam', description: 'He knew that life would be difficult after becoming a Muslim. In the end, he accepted Islam.' },
  'h8-1': { title: 'Burning Rock', description: 'He whipped Bilal and put a huge burning rock on his chest in the hot sun.' },
  'h8-2': { title: 'Allah Is One', description: 'But Bilal only said, “Allah is One, Allah is One.”' },
  'h9-1': { title: 'Abu Bakr', description: 'Abu Bakr heard that Umayya was hurting Bilal very badly. He went to see Umayya right away.' },
  'h9-2': { title: 'Crime', description: 'Abu Bakr asked, “What did he do wrong? Is it a crime to believe in the one true Allah?”' },
  'h10-1': { title: 'Free Man', description: 'Abu Bakr told Bilal that he was now a free man and no longer a slave.' },
  'h10-2': { title: 'Rescued', description: 'Abu Bakr bought Bilal and rescued him from his master’s hands.' },
  'h11-1': { title: 'Medina', description: 'The Prophet (pbuh) told the Muslims to move to Medina.' },
  'h11-2': { title: 'First Adhan', description: 'The Prophet (pbuh) wanted someone to call people to prayer. He chose Bilal.' },
  'h12-1': { title: 'Morning Call to Prayer', description: 'Bilal used to start the morning call to prayer very early.' },
  'h12-2': { title: 'Farewell Sermon', description: 'This speech is called the Farewell Sermon.' },
  'h13-1': { title: 'Everyone Is Equal', description: 'Bilal’s story shows that in Islam, everyone is equal.' },
  'h13-2': { title: 'Heart and Good Actions', description: 'What matters is the heart and good actions.' },
};

export const meccaA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': { title: 'بِلَالُ بْنُ رَبَاحٍ', description: 'كَانَ بِلَالُ بْنُ رَبَاحٍ أَحَدَ السَّبْعَةِ الْأَوَّلِينَ الَّذِينَ جَهَرُوا بِإِسْلَامِهِمْ فِي مَكَّةَ.' },
  'h1-2': { title: 'لَوْنَ الْبَشَرَةِ', description: 'تُعَلِّمُنَا قِصَّتُهُ أَنَّ لَوْنَ الْبَشَرَةِ أَوْ كَوْنَ الْمَرْءِ عَبْدًا لَا يَجْعَلُ الْإِنْسَانَ أَقَلَّ قِيمَةً.' },
  'h2-1': { title: 'الْجاهِلِيَّةِ', description: 'كانَتِ الْفَتْرَةُ قَبْلَ الْإِسْلامِ تُسَمَّى عَصْرَ الْجاهِلِيَّةِ.' },
  'h2-2': { title: 'الْأَغْنِياءِ وَالْفُقَراءِ', description: 'كانَتْ هُناكَ فَجْوَةٌ كَبِيرَةٌ بَيْنَ الْأَغْنِياءِ وَالْفُقَراءِ.' },
  'h3-1': { title: 'أَسْوَاقُ الْعَبِيدِ', description: 'كَانَتْ أَسْوَاقُ الْعَبِيدِ شَائِعَةً جِدًّا فِي بِلَادِ الْعَرَبِ.' },
  'h3-2': { title: 'أُمَيَّةُ', description: 'وَكَانَ سَيِّدُهُ أُمَيَّةُ بْنُ خَلَفٍ.' },
  'h4-1': { title: 'حَرِّ الشَّمْسِ', description: 'كَانَ يَرْعَى جِمَالَ سَيِّدِهِ وَيَعْمَلُ تَحْتَ حَرِّ الشَّمْسِ فِي صَحْرَاءِ مَكَّةَ طَوَالَ الْيَوْمِ.' },
  'h4-2': { title: 'غَلِيظًا', description: 'كَانَ كُلُّ فَرْدٍ مِنَ الْأُسْرَةِ غَلِيظًا مَعَهُ، وَلَمْ يَحْتَرِمُوهُ كَإِنْسَانٍ.' },
  'h5-1': { title: 'حُرِّيَّتِهِ', description: 'لَمْ يَكُنْ عِنْدَهُ مَالٌ لِيَدْفَعَ ثَمَنَ حُرِّيَّتِهِ.' },
  'h5-2': { title: 'عَادِلِينَ وَمُتَسَاوِينَ', description: 'وَعَلَّمَهُمْ أَنَّ النَّاسَ يَجِبُ أَنْ يَكُونُوا عَادِلِينَ وَمُتَسَاوِينَ.' },
  'h6-1': { title: 'طَرِيقٍ خَفِيٍّ', description: 'خَرَجَ مِنْ غُرْفَتِهِ سِرًّا وَمَشَى فِي طَرِيقٍ خَفِيٍّ.' },
  'h6-2': { title: 'أَبَا بَكْرٍ', description: 'قَرَّرَ بِلالٌ أَنْ يَزُورَ أَبَا بَكْرٍ، صَدِيقَ النَّبِيِّ مُحَمَّدٍ.' },
  'h7-1': { title: 'لا إِلَهَ إِلا اللهُ', description: 'فَالْإِسْلامُ يَقُولُ: لا إِلَهَ إِلا اللهُ.' },
  'h7-2': { title: 'دَخَلَ فِي الْإِسْلامِ', description: 'وَفِي النِّهايةِ، دَخَلَ فِي الْإِسْلامِ.' },
  'h8-1': { title: 'صَخْرَةً كَبِيرَةً حَارَّةً', description: 'وَوَضَعَ صَخْرَةً كَبِيرَةً حَارَّةً عَلَى صَدْرِهِ تَحْتَ الشَّمْسِ الْحَارَّةِ.' },
  'h8-2': { title: 'اللَّهُ وَاحِدٌ', description: 'لٰكِنَّ بِلالًا قَالَ فَقَطْ: «اللَّهُ وَاحِدٌ، اللَّهُ وَاحِدٌ».' },
  'h9-1': { title: 'أَبو بَكْرٍ', description: 'سَمِعَ أَبو بَكْرٍ أَنَّ أُمَيَّةَ يُعَذِّبُ بِلالًا جِدًّا، ذَهَبَ إِلَيْهِ فَوْرًا.' },
  'h9-2': { title: 'جَرِيمَةٌ', description: 'سَأَلَ أَبو بَكْرٍ: «هَلِ الْإِيمانُ بِاللهِ الْواحِدِ الْحَقِّ جَرِيمَةٌ؟»' },
  'h10-1': { title: 'رَجُلٌ حُرٌّ', description: 'قالَ أَبو بَكْرٍ لِبِلالٍ إِنَّهُ الْآنَ رَجُلٌ حُرٌّ وَلَيْسَ عَبْدًا.' },
  'h10-2': { title: 'أَنْقَذَهُ', description: 'اشْتَرى أَبو بَكْرٍ بِلالًا وَأَنْقَذَهُ مِنْ يَدِ سَيِّدِهِ.' },
  'h11-1': { title: 'الْمَدِينَةِ', description: 'أَمَرَ الرَّسُولُ الْمُسْلِمِينَ بِالْهِجْرَةِ إِلَى الْمَدِينَةِ.' },
  'h11-2': { title: 'الْأَذَانُ الْأَوَّلُ', description: 'فَقَامَ بِلالٌ بِالْأَذَانِ الْأَوَّلِ.' },
  'h12-1': { title: 'أَذانَ الصَّباحِ', description: 'كانَ بِلالٌ يَبْدَأُ أَذانَ الصَّباحِ مُبَكِّرًا جِدًّا.' },
  'h12-2': { title: 'خُطْبَةَ الْوَداعِ', description: 'تُسَمَّى هٰذِهِ الْخُطْبَةُ خُطْبَةَ الْوَداعِ.' },
  'h13-1': { title: 'الْجَمِيعَ سَوَاءٌ', description: 'تُبَيِّنُ قِصَّةُ بِلَالٍ أَنَّ الْجَمِيعَ سَوَاءٌ فِي الْإِسْلَامِ.' },
  'h13-2': { title: 'الْقَلْبُ وَالْأَعْمَالُ الصَّالِحَةُ', description: 'الْمُهِمُّ هُوَ الْقَلْبُ وَالْأَعْمَالُ الصَّالِحَةُ.' },
};

export const meccaA2PagesGoldEn = applyA2GoldPages({ canonicalPages: meccaA2Pages, hotspotMap: meccaA2HotspotsGoldEn, config, language: 'en' });
export const meccaA2PagesGoldAr = applyA2GoldPages({ canonicalPages: meccaA2PagesAr, hotspotMap: meccaA2HotspotsGoldAr, config, language: 'ar' });

export const meccaA2TeacherGuideGoldEn = buildA2TeacherGuide(meccaA2PagesGoldEn, config.storyIds, 'en');
export const meccaA2TeacherGuideGoldAr = buildA2TeacherGuide(meccaA2PagesGoldAr, config.storyIds, 'ar');
export const meccaA2SelfStudyGuideGoldEn = buildA2SelfStudyGuide(meccaA2PagesGoldEn, config.storyIds, 'en');
export const meccaA2SelfStudyGuideGoldAr = buildA2SelfStudyGuide(meccaA2PagesGoldAr, config.storyIds, 'ar');
export const meccaA2TeacherGuideMetadataGoldEn = buildA2TeacherGuideMetadata('Bilal ibn Rabah and Mecca', config.storyIds.length, 'en');
export const meccaA2TeacherGuideMetadataGoldAr = buildA2TeacherGuideMetadata('بلال بن رباح ومكة', config.storyIds.length, 'ar');
export const meccaA2StudentGuideSectionsGoldEn = buildA2StudentGuideSections('en');
export const meccaA2StudentGuideSectionsGoldAr = buildA2StudentGuideSections('ar');
export const meccaA2StudentGuideMetadataGoldEn = buildA2StudentGuideMetadata('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideMetadataGoldAr = buildA2StudentGuideMetadata('بلال بن رباح ومكة', 'ar');
export const meccaA2StudentGuideTextGoldEn = buildA2StudentGuideText('Bilal ibn Rabah and Mecca', 'en');
export const meccaA2StudentGuideTextGoldAr = buildA2StudentGuideText('بلال بن رباح ومكة', 'ar');
export const meccaA2GoldConfig = config;
