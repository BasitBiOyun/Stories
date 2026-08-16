import { applyA2SourceHotspots, type A2BookConfig, type A2HotspotMap } from '../../a2BookSupport';
import { yunusEmreA2PagesAr } from './ar/pages';
import { yunusA2Pages } from './en/pages';

export const yunusA2GoldConfig: A2BookConfig = {
  storyIds: Array.from({ length: 8 }, (_, index) => index + 1),
  knowledgeCheckPageId: 9,
  vocabularyPageId: 10,
  reviewPageId: 13,
  glossaryPageIds: [11, 12],
  finalChallengePageId: 14,
};

export const yunusA2HotspotsGoldEn: A2HotspotMap = {
  'h1-1': { title: 'Simple Turkish', description: 'People could easily understand his poems because he wrote and said them in simple Turkish.' },
  'h1-2': { title: 'Taptuk Emre', description: 'Yunus Emre became a dervish pupil of Taptuk Emre.' },
  'h2-1': { title: 'Hearts and Eyes', description: 'Dervishes tried to find Allah everywhere not only with their eyes but also with their hearts.' },
  'h2-2': { title: 'The Needy', description: 'They shared what they had with the needy.' },
  'h3-1': { title: 'Path of Dervishhood', description: 'The path of dervishhood was a very difficult one.' },
  'h3-2': { title: 'Useful Activities', description: 'They ate less, spoke less, slept less, and spent their time on useful activities.' },
  'h4-1': { title: 'Wood-Cutting Duties', description: 'Taptuk then assigned Yunus to the wood-cutting duties at the dervish house.' },
  'h4-2': { title: 'Crooked Wood', description: 'He never cut or brought green or crooked wood.' },
  'h5-1': { title: 'Straightest Pieces', description: 'He chose the straightest pieces of wood with the greatest care.' },
  'h5-2': { title: 'Heart and Ego', description: 'He is training and fixing his own heart and ego.' },
  'h6-1': { title: 'Door of Honesty and Goodness', description: 'This place is a door of honesty and goodness.' },
  'h6-2': { title: 'Nature', description: 'He looked at nature and found a lesson from everything in it.' },
  'h7-1': { title: 'A Single Daisy', description: 'In the late afternoon, he returned with a single daisy.' },
  'h7-2': { title: 'Name of Allah', description: 'Wherever I saw a flower, I heard that it was saying the name of Allah.' },
  'h8-1': { title: 'My Time', description: 'My time is up now; I’m dried up and dying.' },
  'h8-2': { title: 'Meaningful and Fruitful Life', description: 'This helps us live a meaningful and fruitful life.' },
};

export const yunusA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': { title: 'لُغَةٍ تُرْكِيَّةٍ بَسيطَةٍ', description: 'كانَ النّاسُ يَفْهَمونَ قَصائِدَهُ بِسُهولَةٍ، لِأَنَّهُ كانَ يَكْتُبُها وَيَقولُها بِلُغَةٍ تُرْكِيَّةٍ بَسيطَةٍ.' },
  'h1-2': { title: 'تَابْتُوك إِمْرَه', description: 'أَصْبَحَ يونُس إِمْرَه تِلْميذًا دَرْوِيشًا عِنْدَ تَابْتُوك إِمْرَه.' },
  'h2-1': { title: 'قُلوبِهِمْ', description: 'كانَ الدَّراويشُ يُحاوِلونَ أَنْ يَعْرِفوا اللهَ لا بِأَعْيُنِهِمْ فَقَطْ، بَلْ بِقُلوبِهِمْ أَيْضًا.' },
  'h2-2': { title: 'الْمُحْتاجينَ', description: 'كانوا يُشارِكونَ ما عِنْدَهُمْ مَعَ الْمُحْتاجينَ.' },
  'h3-1': { title: 'طَريقًا شاقًّا', description: 'كانَ طَريقُ الدَّراويشِ طَريقًا شاقًّا جِدًّا.' },
  'h3-2': { title: 'أَعْمالٍ مُفيدَةٍ', description: 'كانوا يَقْضونَ وَقْتَهُمْ في أَعْمالٍ مُفيدَةٍ.' },
  'h4-1': { title: 'الْحَطَبَ', description: 'فَطَلَبَ تابْتوك مِنْ يونُس أَنْ يَقْطَعَ الْحَطَبَ في دارِ الدَّراويشِ.' },
  'h4-2': { title: 'الْحَطَبِ الْمُعْوَجِّ', description: 'لا يُمْكِنُ لِلْحَطَبِ الْمُعْوَجِّ أَنْ يَدْخُلَ دارَ الدَّراويشِ.' },
  'h5-1': { title: 'اسْتِقامَةً', description: 'كانَ يونُس يَخْتارُ أَكْثَرَ قِطَعِ الْحَطَبِ اسْتِقامَةً بِعِنايَةٍ كَبيرَةٍ.' },
  'h5-2': { title: 'قَلْبَهُ وَنَفْسَهُ', description: 'كانَ يُدَرِّبُ قَلْبَهُ وَنَفْسَهُ وَيُصْلِحُهُما.' },
  'h6-1': { title: 'بابُ الصِّدْقِ وَالْخَيْرِ', description: 'هٰذا الْمَكانُ بابُ الصِّدْقِ وَالْخَيْرِ.' },
  'h6-2': { title: 'الطَّبيعَةُ', description: 'كانَ يَنْظُرُ إِلى الطَّبيعَةِ وَيَتَعَلَّمُ دَرْسًا مِنْ كُلِّ شَيْءٍ فيها.' },
  'h7-1': { title: 'زَهْرَةُ أُقْحُوانٍ واحِدَةٌ', description: 'عادَ وَمَعَهُ زَهْرَةُ أُقْحُوانٍ واحِدَةٌ.' },
  'h7-2': { title: 'اسْمَ اللهِ', description: 'كُلَّما رَأَيْتُ زَهْرَةً، سَمِعْتُها تَذْكُرُ اسْمَ اللهِ.' },
  'h8-1': { title: 'اِنْتَهى وَقْتي', description: 'لقد اِنْتَهى وَقْتي الآن؛ لقد يَبِسْتُ، وَأَنا قَريبَةٌ مِنَ الْمَوْتِ.' },
  'h8-2': { title: 'حَياةً ذاتَ مَعْنًى', description: 'وَهٰذا يُساعِدُنا عَلى أَنْ نَعيشَ حَياةً ذاتَ مَعْنًى وَمُثْمِرَةً.' },
};

const applyAnimatedWordOverrides = (
  pages: typeof yunusA2Pages,
  overrides: Record<number, string[]>,
) => pages.map((page) => overrides[page.id] ? { ...page, animatedWords: overrides[page.id] } : page);

const baseEn = applyA2SourceHotspots({ pages: yunusA2Pages, storyIds: yunusA2GoldConfig.storyIds, hotspotMap: yunusA2HotspotsGoldEn });
const baseAr = applyA2SourceHotspots({ pages: yunusEmreA2PagesAr, storyIds: yunusA2GoldConfig.storyIds, hotspotMap: yunusA2HotspotsGoldAr });

export const yunusA2PagesGoldEn = applyAnimatedWordOverrides(baseEn, {
  1: ['poems', 'simple Turkish', 'passed away'],
  2: ['the needy', 'forgave', 'sulky'],
  3: ['path', 'training'],
  4: ['assigned', 'ego', 'crooked'],
  5: ['fixing', 'noticed'],
  6: ['quiet', 'rivers'],
  7: ['picked', 'whispered'],
  8: ['meaningful', 'fruitful'],
});

export const yunusA2PagesGoldAr = applyAnimatedWordOverrides(baseAr, {
  1: ['قَصائِدَهُ', 'بَسيطَةٍ', 'تُوُفِّيَ'],
  2: ['الْمُحْتاجينَ', 'يَغْفِرونَ', 'عابِسِينَ'],
  3: ['طَريقًا', 'تَدْريبَهُ'],
  4: ['مُسْتَعِدًّا', 'الْهَدَفَ', 'مُعْوَجًّا'],
  5: ['يُصْلِحُ', 'يُدَرِّبُ', 'لاحَظَ'],
  6: ['التَّفَكُّرِ', 'أَعْمَقَ'],
  7: ['قَطَفُوا', 'يَهْمِسونَ'],
  8: ['مَعْنًى', 'مُثْمِرَةً'],
});
