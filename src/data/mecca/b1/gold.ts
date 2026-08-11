import type { PageData } from '../../../types';
import { applyB1GoldPages, sanitizeB1TeacherGuide, type B1GoldPageConfig } from '../../b1GoldFactory';
import { meccaB1Pages } from './en/pages';
import { meccaB1TeacherGuide } from './en/teacherGuide';
import { meccaB1PagesAr } from './ar/pages';
import { meccaB1TeacherGuideAr } from './ar/teacherGuide';

export const meccaB1GoldConfig: B1GoldPageConfig = {
  storyIds: Array.from({ length: 15 }, (_, index) => index + 1),
  knowledgeCheckPageId: 16,
  reviewPageId: 17,
  glossaryPageIds: [18, 19],
  finalChallengePageId: 20,
};

type HotspotCopy = { title: string; description: string };
type VocabularyCopy = NonNullable<PageData['vocabulary']>;
type StoryMetadataCopy = {
  vocabulary?: VocabularyCopy;
  animatedWords?: string[];
};

const hotspotOverridesEn: Record<string, HotspotCopy> = {
  'h1-1': { title: 'Mecca', description: 'Islam started in the 7th century in the city of Mecca.' },
  'h1-2': { title: 'Republic of Merchants', description: 'Mecca was led by a council of rich merchants, and the city was known as the Republic of Merchants.' },
  'h2-1': { title: 'Revelation', description: 'This era ended when the first revelation of the Quran began in 610 CE.' },
  'h2-2': { title: 'Holy Ka’ba', description: 'Allah chose this city to be the location of His House, the Holy Ka’ba.' },
  'h3-1': { title: 'Zamzam', description: 'After the discovery of Zamzam water, the Jurhumites from Yemen settled in Mecca.' },
  'h3-2': { title: 'Abraham and Ishmael', description: 'Abraham came to the city to reconstruct the Holy Ka’ba with his son Ishmael.' },
  'h4-1': { title: 'Khuza’a Rule', description: 'Under Khuza’a rule, people forgot the religion of Abraham and started worshipping many idols.' },
  'h4-2': { title: 'Trade', description: 'Because people could not farm in this dry land, they made money through trade.' },
  'h5-1': { title: 'Trade Routes', description: 'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.' },
  'h5-2': { title: 'Sacred Months', description: 'The sacred months made the region safer, and people stayed away from fighting.' },
  'h6-1': { title: 'Trade Fairs', description: 'Big trade fairs such as Ukaz, Majannah, and Dhul-Majaz took place during this time.' },
  'h6-2': { title: 'Usury', description: 'Lending money with usury was widespread, and this made the rich richer and the poor poorer.' },
  'h7-1': { title: 'Class Gap', description: 'While the rich lived in luxury with gold plates and silver cups, the poor struggled to survive.' },
  'h7-2': { title: 'Weak People', description: 'Orphans and weak people were treated badly, and powerful people often took their property by force.' },
  'h8-1': { title: 'Tribal Protection', description: 'Without a tribe, people could not easily protect their lives or property.' },
  'h8-2': { title: 'Protect the Tribe', description: 'They had to protect and honor their tribe in every situation, even when the tribe did something wrong.' },
  'h9-1': { title: 'Arab Women', description: 'Before Islam, the life of Arab women was very different depending on their wealth and family.' },
  'h9-2': { title: 'Poets and Media', description: 'Poets were very important in social life, and in those days poets were like the media of the people.' },
  'h10-1': { title: '360 Idols', description: 'There were 360 idols, including Lat, Manat, and Uzza, in and around the Ka’ba and in homes.' },
  'h10-2': { title: 'Hanifs', description: 'Some people, called Hanifs, followed the old religion of Abraham.' },
  'h11-1': { title: 'New Community', description: 'From the beginning, Islam showed that Muslims were a new community.' },
  'h11-2': { title: 'The Quran', description: 'When they heard Prophet Muhammad read the Quran, they were sure it was from Allah.' },
  'h12-1': { title: 'Quraysh Leaders', description: 'The leaders of Quraysh felt that Islam was a danger to their power and did not accept it.' },
  'h12-2': { title: 'Honest Trade', description: 'The Quran forbade unfair money systems like usury and allowed only honest trade.' },
  'h13-1': { title: 'Bilal and Umayya', description: 'Umayya put a heavy rock on Bilal’s chest and ordered him to give up his religion.' },
  'h13-2': { title: 'Social and Economic Boycott', description: 'Between 617 and 620, the leaders began a social and economic boycott against Muslims and those who helped them.' },
  'h14-1': { title: 'Hunger', description: 'Some people died of hunger, and others even ate tree leaves to survive.' },
  'h14-2': { title: 'Wealth and Influence', description: 'Losing the idols meant losing wealth and influence, so the leaders became hostile to Islam.' },
  'h15-1': { title: 'Freedom of Choice', description: 'In old Arab society, tribal loyalty was so strong that freedom of choice was difficult.' },
  'h15-2': { title: 'Justice and Mercy', description: 'Islam was calling people to a better form of unity based on justice, mercy, and belief in one Allah.' },
};

const hotspotOverridesAr: Record<string, HotspotCopy> = {
  'h1-1': { title: 'مكّة', description: 'بدأ الإسلام في القرن السابع في مدينة مكة.' },
  'h1-2': { title: 'جمهورية التجار', description: 'كان يقود مكة مجلس من التجار الأغنياء، لذلك عرف البلد بجمهورية التجار.' },
  'h2-1': { title: 'نزول الوحي', description: 'انتهى هذا العصر عندما بدأ نزول الوحي الأول من القرآن الكريم عام 610 ميلادي.' },
  'h2-2': { title: 'الكعبة المشرفة', description: 'اختار الله هذه البلدة لتكون مكانا لبيته، الكعبة المشرفة.' },
  'h3-1': { title: 'ماء زمزم', description: 'بعد اكتشاف ماء زمزم، استقرت قبيلة جرهم اليمنية في مكة.' },
  'h3-2': { title: 'إبراهيم وإسماعيل', description: 'جاء النبي إبراهيم إلى المدينة لإعادة بناء الكعبة المشرفة مع ابنه إسماعيل.' },
  'h4-1': { title: 'حكم خزاعة', description: 'تحت حكم خزاعة، نسي الناس دين إبراهيم وبدؤوا يعبدون أصنامًا كثيرة.' },
  'h4-2': { title: 'التجارة', description: 'بسبب عدم قدرة الناس على الزراعة في هذه الأرض الجافة، كسبوا المال عن طريق التجارة.' },
  'h5-1': { title: 'طرق التجارة', description: 'بسبب وقوع مكة في وسط طرق التجارة هذه، أصبحت مدينة مزدحمة وغنية جدا.' },
  'h5-2': { title: 'الأشهر الحرم', description: 'كانت الأشهر الحرم تجعل المنطقة آمنة، وكان الناس يبتعدون عن القتال.' },
  'h6-1': { title: 'أسواق تجارية', description: 'كانت هناك أسواق تجارية كبرى مثل عكاظ ومجنة وذي المجاز.' },
  'h6-2': { title: 'الربا', description: 'كان انتشار إقراض المال بالربا شائعًا جدًا في مكة، فصار الأغنياء أكثر ثراءً وازداد الفقراء فقرًا.' },
  'h7-1': { title: 'الأغنياء والفقراء', description: 'كان الأغنياء يعيشون في ترف، وكان الفقراء يجدون صعوبة في العيش.' },
  'h7-2': { title: 'اليتامى والضعفاء', description: 'كان اليتامى والضعفاء يعاملون بشكل سيئ، وكان الأقوياء يأخذون أموالهم غصبًا.' },
  'h8-1': { title: 'حماية قبيلته', description: 'كان الشخص الخارج عن حماية قبيلته يعيش في خطر محدق.' },
  'h8-2': { title: 'القبيلة', description: 'كان عليهم أن يحموا قبيلتهم وينصروها في كل الظروف، مهما فعلت قبيلتهم من خطأ أو ظلم.' },
  'h9-1': { title: 'النساء الفقيرات', description: 'كان كثير من النساء الفقيرات لا يملكن أي حقوق ويواجهن معاملة غير عادلة.' },
  'h9-2': { title: 'الشعراء', description: 'كان الشعراء هم إعلام ذلك الوقت، وكان الشعر يحفظ التاريخ ويمدح القبائل ويهجو الأعداء.' },
  'h10-1': { title: 'الأصنام', description: 'كان هناك 360 صنمًا، من بينها اللات والعزى ومناة، داخل الكعبة وحولها وفي البيوت.' },
  'h10-2': { title: 'الحنفاء', description: 'كان هناك أشخاص يعرفون بالحنفاء، يتبعون دين إبراهيم في التوحيد والبعد عن الأوثان.' },
  'h11-1': { title: 'جماعة جديدة', description: 'منذ البداية، جعل الإسلام المسلمين جماعة جديدة.' },
  'h11-2': { title: 'القرآن', description: 'عندما سمع هؤلاء النبي محمد يقرأ القرآن، تأكدوا أنه من عند الله.' },
  'h12-1': { title: 'زعماء قريش', description: 'شعر زعماء قريش أن الإسلام خطر على قوتهم، ولم يؤمنوا به.' },
  'h12-2': { title: 'الربا والتجارة الصادقة', description: 'كان القرآن يمنع الربا ويقول إن التجارة الصادقة هي المسموح بها فقط.' },
  'h13-1': { title: 'بلال وأمية', description: 'كان أمية يضع صخرة ثقيلة على صدر بلال ويأمره أن يترك دينه.' },
  'h13-2': { title: 'مقاطعة اجتماعية واقتصادية', description: 'بين عامي 617 و620، بدأوا مقاطعة اجتماعية واقتصادية ضد المسلمين والذين ساعدوهم.' },
  'h14-1': { title: 'الجوع وأوراق الشجر', description: 'مات بعض الناس من الجوع، وأكل آخرون أوراق الشجر لكي يعيشوا.' },
  'h14-2': { title: 'ثروتهم ومكانتهم', description: 'إذا تركوا أصنامهم، فقدوا ثروتهم ومكانتهم، وهذا جعلهم أعداء للإسلام.' },
  'h15-1': { title: 'حرية الاختيار', description: 'حرية الاختيار التي تكلم عنها الإسلام لم تكن تعمل في ذلك الوقت بسبب العصبية القاسية.' },
  'h15-2': { title: 'العدل والرحمة', description: 'كان الإسلام يدعو لوحدة أرقى تقوم على العدل والرحمة والإيمان بالله الواحد الأحد.' },
};

const metadataOverridesAr: Record<number, StoryMetadataCopy> = {
  4: {
    vocabulary: [
      { word: 'واجبه', definition: 'المهمة أو العمل الذي يجب على الشخص أن يؤديه.' },
      { word: 'هَزَمَت', definition: 'انتصرت على قبيلة أخرى.' },
      { word: 'أصنامًا', definition: 'تماثيل كان الناس يعبدونها من دون الله.' },
      { word: 'الزراعة', definition: 'زراعة الأرض لإنتاج الطعام.' },
      { word: 'بضائع', definition: 'أشياء ومنتجات تباع وتشترى.' },
    ],
  },
  5: {
    vocabulary: [
      { word: 'طرق التجارة', definition: 'المسالك التي يسلكها التجار بين الأماكن.' },
      { word: 'غنية', definition: 'لديها أموال وثروة كثيرة.' },
      { word: 'اتفاقيات تجارية', definition: 'اتفاقات تساعد الناس على التجارة بأمان.' },
      { word: 'الأشهر الحرم', definition: 'أشهر كان الناس يبتعدون فيها عن القتال.' },
      { word: 'آمنة', definition: 'بعيدة عن الخطر والخوف.' },
    ],
  },
  6: {
    vocabulary: [
      { word: 'أسواق', definition: 'أماكن يجتمع فيها الناس للبيع والشراء.' },
      { word: 'الثروة', definition: 'الأموال والممتلكات التي يملكها الناس.' },
      { word: 'تسيطر', definition: 'تتحكم في شيء وتملك القوة عليه.' },
      { word: 'الربا', definition: 'مال إضافي ظالم يؤخذ عند إقراض المال.' },
      { word: 'انتشار', definition: 'وجود الشيء على نطاق واسع.' },
    ],
  },
  8: {
    vocabulary: [
      { word: 'القبيلة', definition: 'مجموعة من العائلات تجمعها روابط مشتركة.' },
      { word: 'القوة البدنية', definition: 'قوة الجسم والقدرة على العمل والقتال.' },
      { word: 'أبناء ذكور', definition: 'الأولاد الذكور في العائلة.' },
      { word: 'أجدادهم', definition: 'أفراد العائلة الذين عاشوا في الماضي.' },
      { word: 'خطر', definition: 'وضع يمكن أن يسبب الأذى أو الضرر.' },
    ],
    animatedWords: ['القبائل', 'القوّة البدنيّة', 'الذُّكور', 'أجدادهم', 'خطر'],
  },
  10: {
    vocabulary: [
      { word: 'الأصنام', definition: 'تماثيل كان الناس يعبدونها من دون الله.' },
      { word: 'الحنفاء', definition: 'أشخاص اتبعوا دين إبراهيم في التوحيد.' },
      { word: 'الخالق', definition: 'الله الذي خلق كل شيء.' },
      { word: 'خرافات', definition: 'معتقدات غير صحيحة لا تقوم على دليل.' },
      { word: 'الكهانة', definition: 'ادعاء معرفة أمور غيبية بطرق باطلة.' },
    ],
    animatedWords: ['الأصنام', 'الحُنَفاء', 'الخالق', 'خرافات', 'الكهانة'],
  },
  13: {
    vocabulary: [
      { word: 'سخروا', definition: 'استهزؤوا وضحكوا من شخص أو فكرة.' },
      { word: 'ينتقد الأصنام', definition: 'يبين أن عبادة الأصنام غير صحيحة.' },
      { word: 'بعنف', definition: 'باستخدام القوة والقسوة.' },
      { word: 'بلال', definition: 'أحد المؤمنين الأوائل بالإسلام.' },
      { word: 'مقاطعة', definition: 'الامتناع عن التعامل مع جماعة للضغط عليها.' },
    ],
  },
  14: {
    animatedWords: ['الجوع', 'الحساب', 'الأصنام', 'التغيير', 'العصبيّة'],
  },
  15: {
    vocabulary: [
      { word: 'بدون وطن', definition: 'من لا يملك حماية أو انتماء إلى وطن.' },
      { word: 'حرية الاختيار', definition: 'قدرة الشخص على الاختيار بحرية.' },
      { word: 'العدل والرحمة', definition: 'معاملة الناس بالعدل واللطف.' },
      { word: 'المساواة', definition: 'أن تكون للناس القيمة الإنسانية نفسها.' },
      { word: 'السلام', definition: 'حالة من الأمن وعدم القتال.' },
    ],
  },
};

const applyMetadataOverrides = (
  pages: PageData[],
  hotspotOverrides: Record<string, HotspotCopy>,
  metadataOverrides: Record<number, StoryMetadataCopy> = {},
): PageData[] => pages.map((page) => {
  const metadata = metadataOverrides[page.id];
  const hotspots = page.hotspots?.map((hotspot) => ({ ...hotspot, ...(hotspotOverrides[hotspot.id] || {}) }));
  return {
    ...page,
    ...(metadata?.vocabulary ? { vocabulary: metadata.vocabulary } : {}),
    ...(metadata?.animatedWords ? { animatedWords: metadata.animatedWords } : {}),
    ...(hotspots ? { hotspots } : {}),
  };
});

export const meccaB1PagesGoldEn = applyB1GoldPages({
  canonicalPages: applyMetadataOverrides(meccaB1Pages, hotspotOverridesEn),
  config: meccaB1GoldConfig,
  language: 'en',
});

export const meccaB1PagesGoldAr = applyB1GoldPages({
  canonicalPages: applyMetadataOverrides(meccaB1PagesAr, hotspotOverridesAr, metadataOverridesAr),
  config: meccaB1GoldConfig,
  language: 'ar',
});

export const meccaB1TeacherGuideGoldEn = sanitizeB1TeacherGuide(meccaB1TeacherGuide);
export const meccaB1TeacherGuideGoldAr = sanitizeB1TeacherGuide(meccaB1TeacherGuideAr);
