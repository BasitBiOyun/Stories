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
import { mosesA2Pages } from './en/pages';
import { mosesA2PagesAr } from './ar/pages';

const config = {
  storyIds: Array.from({ length: 16 }, (_, index) => index + 1),
  knowledgeCheckPageId: 17,
  reviewPageId: 21,
  glossaryPageIds: [19, 20] as [number, number],
  finalChallengePageId: 22,
};

export const mosesA2HotspotsGoldEn: A2HotspotMap = {
  'h1-1': { title: 'Pharaoh', description: 'Pharaoh was the king of Egypt. He was an unfair and cruel ruler.' },
  'h1-2': { title: 'Children of Israel', description: 'They believed in one Allah, like their great-grandfather, Prophet Abraham (pbuh).' },
  'h2-1': { title: 'The Dream', description: 'The king had a dream. He saw a fire in his vision.' },
  'h2-2': { title: 'The Soldiers', description: 'The king told his soldiers: “Kill all the baby boys of the Children of Israel.”' },
  'h2-3': { title: 'Baby Boys', description: 'When they found baby boys, they killed them.' },
  'h3-1': { title: 'The Basket', description: 'Moses’s mother put the baby Moses in a basket and took it to the river.' },
  'h3-2': { title: 'The River Nile', description: 'She put the basket in the water. The water carried it away.' },
  'h4-1': { title: 'Queen Asiye', description: 'Queen Asiye saw the baby, and Allah placed a lot of love for him in her heart.' },
  'h4-2': { title: 'The Palace', description: 'The basket came to the waterside. It was near the king’s palace.' },
  'h5-1': { title: 'Mother’s Arms', description: 'Allah sent Moses back to his mother. Baby Moses was in his mother’s arms again.' },
  'h5-2': { title: 'The Bazaar', description: 'One day he was walking in the bazaar. He saw two men fighting.' },
  'h6-1': { title: 'Accidentally', description: 'He hit the Egyptian and the man died there. Moses was very upset.' },
  'h6-2': { title: 'Run Away', description: 'The king’s soldiers are looking for you. Run away from the city.' },
  'h7-1': { title: 'Midian', description: 'After many days, he arrived at Midian.' },
  'h7-2': { title: 'The Well', description: 'Soon, he found a well. There were many men around the water.' },
  'h8-1': { title: 'The Sisters', description: 'Moses understood the two sisters needed help.' },
  'h8-2': { title: 'Help', description: 'He took their sheep to the water and gave them a drink.' },
  'h9-1': { title: 'Prophet Şuayb', description: 'The father of these girls was Prophet Şuayb (pbuh).' },
  'h9-2': { title: 'A Job', description: 'Şuayb (pbuh) offered Moses a job. Moses accepted the job.' },
  'h10-1': { title: 'The Fire', description: 'Suddenly, Moses saw a fire on the hillside.' },
  'h10-2': { title: 'The Voice', description: 'In the silence he heard a loud voice: “Moses, I am Allah.”' },
  'h11-1': { title: 'Shining', description: 'Put your hand into your chest. Now take it out. See, your hand is now shining.' },
  'h11-2': { title: 'Harun', description: 'Moses took his brother Harun with him and went to the palace.' },
  'h12-1': { title: 'The Big Snake', description: 'The stick turned into a big snake.' },
  'h12-2': { title: 'Magic', description: 'The king said to Moses: “This is only magic.”' },
  'h13-1': { title: 'The Magicians', description: 'The magicians bowed down in front of Moses. They shouted: “We believe in the Lord of Moses and Harun!”' },
  'h13-2': { title: 'The Huge Snake', description: 'His stick quickly ate all the snakes of the magicians.' },
  'h14-1': { title: 'The Night', description: 'They left Egypt at night.' },
  'h14-2': { title: 'The Caravan', description: 'Their caravan moved slowly.' },
  'h15-1': { title: 'The Sea', description: 'He hit the sea and the sea parted.' },
  'h15-2': { title: 'Walls of Water', description: 'Moses and his people safely walked between the walls of water.' },
  'h16-1': { title: 'The Sea', description: 'When they were midway, Allah closed the sea over them.' },
  'h16-2': { title: 'Lessons', description: 'It tells us that no one can own another person. It shows that only Allah has power over us.' },
};

export const mosesA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': { title: 'فِرْعَوْنُ', description: 'كَانَ فِرْعَوْنُ مَلِكَ مِصْرَ. وَكَانَ حَاكِمًا ظَالِمًا وَقَاسِيًا.' },
  'h1-2': { title: 'بَنِي إِسْرَائِيلَ', description: 'كَانُوا يُؤْمِنُونَ بِإِلٰهٍ وَاحِدٍ، مِثْلَ جَدِّهِمُ الْأَكْبَرِ، النَّبِيِّ إِبْرَاهِيمَ.' },
  'h2-1': { title: 'حُلْمًا', description: 'رَأَى فِرْعَوْنُ حُلْمًا. فَقَدْ رَأى فِي رُؤْيَاهُ نارًا.' },
  'h2-2': { title: 'جُنودِهِ', description: 'قالَ فِرْعَوْنُ لِجُنودِهِ: «اُقْتُلُوا جَمِيعَ أَطْفالِ بَنِي إِسْرائِيلَ الذُّكُورِ».' },
  'h3-1': { title: 'تَابُوتًا', description: 'وَضَعَتْ أُمُّ مُوسَى الطِّفْلَ مُوسَى فِي تابوتٍ صَغيرٍ.' },
  'h3-2': { title: 'نَهْرِ النِّيلِ', description: 'وَضَعَتِ التَّابوتَ فِي الماءِ، فَحَمَلَهُ الماءُ بَعيدًا.' },
  'h4-1': { title: 'آسِيَة', description: 'رَأَتْ آسيةُ الطِّفْلَ، فَوَضَعَ اللهُ فِي قَلْبِها حُبًّا كَبيرًا لَهُ.' },
  'h4-2': { title: 'قَصْرِ فِرْعَوْنَ', description: 'كانَ قَريبًا مِنْ قَصْرِ فِرْعَوْنَ.' },
  'h5-1': { title: 'أُمِّهِ', description: 'فَرَدَّ اللهُ مُوسَى إِلَى أُمِّهِ، وَعَادَ الطِّفْلُ مُوسَى إِلَى حِضْنِ أُمِّهِ.' },
  'h5-2': { title: 'السُّوقِ', description: 'ذَاتَ يَوْمٍ، كَانَ يَمْشِي فِي السُّوقِ. رَأَى رَجُلَيْنِ يَتَخَاصَمَانِ.' },
  'h6-1': { title: 'غَيْرِ قَصْدٍ', description: 'تَسَبَّبَ في مَوْتِ رَجُلٍ عَنْ غَيْرِ قَصْدٍ.' },
  'h6-2': { title: 'جُنُودَ فِرْعَوْنَ', description: 'إِنَّ جُنُودَ فِرْعَوْنَ يَبْحَثُونَ عَنْكَ. اُخْرُجْ مِنَ الْمَدِينَةِ.' },
  'h7-1': { title: 'مَدْيَنَ', description: 'بَعْدَ عِدَّةِ أَيَّامٍ، وَصَلَ إِلَى مَدْيَنَ.' },
  'h7-2': { title: 'بِئْرًا', description: 'وَسُرْعَانَ مَا وَجَدَ بِئْرًا.' },
  'h8-1': { title: 'الْفَتَاتَيْنِ', description: 'أَدْرَكَ مُوسَى أَنَّ الْفَتَاتَيْنِ بِحَاجَةٍ إِلَى الْمُسَاعَدَةِ.' },
  'h8-2': { title: 'الْمُسَاعَدَةِ', description: 'فَأَخَذَ غَنَمَهُمَا إِلَى الْمَاءِ وَسَقَاهَا.' },
  'h9-1': { title: 'شُعَيْبًا', description: 'كَانَ وَالِدُ هَاتَيْنِ الْفَتَاتَيْنِ هُوَ النَّبِيَّ شُعَيْبًا.' },
  'h9-2': { title: 'عَمَلًا', description: 'عَرَضَ شُعَيْبٌ عَلَى مُوسَى عَمَلًا. وَقَبِلَ مُوسَى الْعَمَلَ.' },
  'h10-1': { title: 'نَارًا', description: 'فَجْأَةً، رَأَى مُوسَى نَارًا عَلَى سَفْحِ التَّلِّ.' },
  'h10-2': { title: 'نِدَاءً', description: 'وَفِي وَسَطِ الصَّمْتِ، سَمِعَ نِدَاءً: «يَا مُوسَى، إِنِّي أَنَا اللهُ».' },
  'h11-1': { title: 'بَيْضَاءُ مُضِيئَةٌ', description: 'فَأَدْخَلَ مُوسَى يَدَهُ فِي جَيْبِهِ، ثُمَّ أَخْرَجَهَا، فَإِذَا هِيَ بَيْضَاءُ مُضِيئَةٌ.' },
  'h11-2': { title: 'هَارُونَ', description: 'أَخَذَ مُوسَى أَخَاهُ هَارُونَ مَعَهُ، وَذَهَبَ إِلَى الْقَصْرِ.' },
  'h12-1': { title: 'ثُعْبَانٍ كَبِيرٍ', description: 'فَتَحَوَّلَتِ الْعَصَا إِلَى ثُعْبَانٍ كَبِيرٍ.' },
  'h12-2': { title: 'سِحْرٍ', description: 'وَقَالَ فِرْعَوْنُ: «هٰذَا مُجَرَّدُ سِحْرٍ».' },
  'h13-1': { title: 'السَّحَرَةُ', description: 'فَسَجَدَ السَّحَرَةُ لِلهِ، وَصَرَخُوا: «نَحْنُ نُؤْمِنُ بِرَبِّ مُوسَى وَهَارُونَ!»' },
  'h13-2': { title: 'ثُعْبَانٍ ضَخْمٍ', description: 'فَتَحَوَّلَتْ إِلَى ثُعْبَانٍ ضَخْمٍ، وَسُرْعَانَ مَا ابْتَلَعَتْ مَا صَنَعَهُ السَّحَرَةُ.' },
  'h14-1': { title: 'اللَّيْلِ', description: 'غَادَرُوا مِصْرَ فِي اللَّيْلِ.' },
  'h14-2': { title: 'قَافِلَتُهُمْ', description: 'تَحَرَّكَتْ قَافِلَتُهُمْ بِبُطْءٍ.' },
  'h15-1': { title: 'الْبَحْرُ', description: 'فَضَرَبَ مُوسَى الْبَحْرَ بِعَصَاهُ، فَانْشَقَّ الْبَحْرُ.' },
  'h15-2': { title: 'جُدْرَانًا', description: 'وَأَصْبَحَتِ الْأَمْوَاجُ جُدْرَانًا عَالِيَةً.' },
  'h16-1': { title: 'الْبَحْرَ', description: 'أَغْلَقَ اللهُ الْبَحْرَ عَلَيْهِمْ.' },
  'h16-2': { title: 'دُرُوسًا', description: 'قِصَّةُ مُوسَى تَحْمِلُ دُرُوسًا كَثِيرَةً. وَتُبَيِّنُ لَنَا أَنَّ اللهَ وَحْدَهُ صَاحِبُ الْقُدْرَةِ.' },
};

const applyAnimatedWordOverrides = (
  pages: ReturnType<typeof applyA2GoldPages>,
  overrides: Record<number, string[]>,
) => pages.map((page) => overrides[page.id] ? { ...page, animatedWords: overrides[page.id] } : page);

const mosesA2PagesGoldBaseEn = applyA2GoldPages({ canonicalPages: mosesA2Pages, hotspotMap: mosesA2HotspotsGoldEn, config, language: 'en' });
const mosesA2PagesGoldBaseAr = applyA2GoldPages({ canonicalPages: mosesA2PagesAr, hotspotMap: mosesA2HotspotsGoldAr, config, language: 'ar' });

export const mosesA2PagesGoldEn = applyAnimatedWordOverrides(mosesA2PagesGoldBaseEn, {
  6: ['dua', 'forgive', 'accidentally'],
  7: ['Midian', 'well', 'shepherds'],
});

export const mosesA2PagesGoldAr = applyAnimatedWordOverrides(mosesA2PagesGoldBaseAr, {
  6: ['فَاغْفِرْ', 'غَيْرِ قَصْدٍ', 'يَقْتُلُوكَ'],
  8: ['الْفَتَاتَيْنِ', 'دَوْرَنَا', 'سَقَاهَا'],
});

export const mosesA2TeacherGuideGoldEn = buildA2TeacherGuide(mosesA2PagesGoldEn, config.storyIds, 'en');
export const mosesA2TeacherGuideGoldAr = buildA2TeacherGuide(mosesA2PagesGoldAr, config.storyIds, 'ar');
export const mosesA2SelfStudyGuideGoldEn = buildA2SelfStudyGuide(mosesA2PagesGoldEn, config.storyIds, 'en');
export const mosesA2SelfStudyGuideGoldAr = buildA2SelfStudyGuide(mosesA2PagesGoldAr, config.storyIds, 'ar');
export const mosesA2TeacherGuideMetadataGoldEn = buildA2TeacherGuideMetadata('Prophet Moses', config.storyIds.length, 'en');
export const mosesA2TeacherGuideMetadataGoldAr = buildA2TeacherGuideMetadata('قصة النبي موسى', config.storyIds.length, 'ar');
export const mosesA2StudentGuideSectionsGoldEn = buildA2StudentGuideSections('en');
export const mosesA2StudentGuideSectionsGoldAr = buildA2StudentGuideSections('ar');
export const mosesA2StudentGuideMetadataGoldEn = buildA2StudentGuideMetadata('Prophet Moses', 'en');
export const mosesA2StudentGuideMetadataGoldAr = buildA2StudentGuideMetadata('قصة النبي موسى', 'ar');
export const mosesA2StudentGuideTextGoldEn = buildA2StudentGuideText('Prophet Moses', 'en');
export const mosesA2StudentGuideTextGoldAr = buildA2StudentGuideText('قصة النبي موسى', 'ar');
export const mosesA2GoldConfig = config;
