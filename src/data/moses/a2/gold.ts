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
  'h1-1': { title: 'Pharaoh’s Rule', description: 'Pharaoh ruled Egypt unfairly and forced the Children of Israel to do hard work.' },
  'h1-2': { title: 'Children of Israel', description: 'The Children of Israel believed in One Allah and did not accept Pharaoh as a god.' },
  'h2-1': { title: 'The King’s Dream', description: 'The king dreamed of a fire that harmed Egyptian homes but not the Children of Israel.' },
  'h2-2': { title: 'A Cruel Order', description: 'The king ordered his soldiers to kill baby boys from the Children of Israel.' },
  'h2-3': { title: 'Families in Fear', description: 'Families were frightened and sad because of the king’s cruel order.' },
  'h3-1': { title: 'Baby Moses in a Basket', description: 'Moses’s mother put him in a basket after asking Allah for help.' },
  'h3-2': { title: 'The River Nile', description: 'Moses’s mother placed the basket in the Nile, and the water carried it away.' },
  'h4-1': { title: 'Queen Asiye', description: 'Queen Asiye loved baby Moses and wanted to care for him.' },
  'h4-2': { title: 'Moses’s Sister', description: 'Moses’s sister told the queen she knew a woman who could nurse the baby.' },
  'h5-1': { title: 'Back to His Mother', description: 'Allah returned baby Moses to his mother so she could care for him.' },
  'h5-2': { title: 'Ready to Help', description: 'As a young man, Moses was ready to help people who were weak.' },
  'h6-1': { title: 'A Serious Mistake', description: 'Moses tried to help a weak man, but his blow caused the Egyptian’s death.' },
  'h6-2': { title: 'Asking Forgiveness', description: 'Moses was sorry, made dua, and asked Allah to forgive him.' },
  'h7-1': { title: 'Midian', description: 'Moses left Egypt, travelled for days, and arrived safely in Midian.' },
  'h7-2': { title: 'The Well', description: 'At a well in Midian, Moses saw shepherds and two sisters waiting with their sheep.' },
  'h8-1': { title: 'The Two Sisters', description: 'The sisters waited because their father was old and they had no one to help them.' },
  'h8-2': { title: 'Moses Helps', description: 'Moses helped the sisters by taking their sheep to the water.' },
  'h9-1': { title: 'The Girls’ Father', description: 'The girls’ father thanked Moses and offered him work in Midian.' },
  'h9-2': { title: 'A New Life', description: 'Moses stayed with the family, worked with them, and later married one of the sisters.' },
  'h10-1': { title: 'A Fire on the Hillside', description: 'On the journey to Egypt, Moses saw a fire and went toward it.' },
  'h10-2': { title: 'Allah Calls Moses', description: 'Moses heard Allah call him and tell him that there is no god but Allah.' },
  'h11-1': { title: 'A Sign from Allah', description: 'Moses took out his hand and saw it shining as one of Allah’s signs.' },
  'h11-2': { title: 'Harun Goes with Moses', description: 'Moses took his brother Harun with him to give Allah’s message to Pharaoh.' },
  'h12-1': { title: 'Two Signs', description: 'Moses’s staff became a big snake, and his hand shone white.' },
  'h12-2': { title: 'Pharaoh Calls It Magic', description: 'Pharaoh rejected the signs and said his magicians could do the same.' },
  'h13-1': { title: 'The Magicians Believe', description: 'After seeing the sign, the magicians said they believed in the Lord of Moses and Harun.' },
  'h13-2': { title: 'Moses’s Staff', description: 'Moses’s staff became a huge snake and overcame what the magicians showed.' },
  'h14-1': { title: 'Leaving at Night', description: 'Allah told Moses to take his people out of Egypt at night.' },
  'h14-2': { title: 'A Slow Caravan', description: 'The group moved slowly because many children and older people were travelling with them.' },
  'h15-1': { title: 'The Sea Opens', description: 'Allah told Moses to strike the sea, and a road opened through it.' },
  'h15-2': { title: 'Safe Between the Water', description: 'Moses and his people walked safely between high walls of water.' },
  'h16-1': { title: 'The Sea Closes', description: 'When Pharaoh and his soldiers were in the sea, Allah closed it over them.' },
  'h16-2': { title: 'The Main Lesson', description: 'The ending says no person should own another person and that power belongs to Allah.' },
};

export const mosesA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': { title: 'حكم فرعون', description: 'حكم فرعون مصر بظلم وأجبر بني إسرائيل على أعمال شاقة.' },
  'h1-2': { title: 'بنو إسرائيل', description: 'آمن بنو إسرائيل بالله الواحد ولم يقبلوا فرعون إلها.' },
  'h2-1': { title: 'حلم الملك', description: 'رأى الملك في حلمه نارا أضرت ببيوت المصريين ولم تضر بني إسرائيل.' },
  'h2-2': { title: 'أمر قاس', description: 'أمر الملك جنوده بقتل المواليد الذكور من بني إسرائيل.' },
  'h3-1': { title: 'موسى في السلة', description: 'وضعت أم موسى طفلها في سلة بعد أن طلبت العون من الله.' },
  'h3-2': { title: 'نهر النيل', description: 'وضعت أم موسى السلة في النيل فحملها الماء بعيدا.' },
  'h4-1': { title: 'الملكة آسية', description: 'أحبت الملكة آسية الطفل موسى وأرادت أن تعتني به.' },
  'h4-2': { title: 'أخت موسى', description: 'أخبرت أخت موسى الملكة أنها تعرف امرأة تستطيع إرضاع الطفل.' },
  'h5-1': { title: 'العودة إلى أمه', description: 'أعاد الله الطفل موسى إلى أمه لتعتني به.' },
  'h5-2': { title: 'مساعدة الضعيف', description: 'عندما كبر موسى كان مستعدا لمساعدة الضعفاء.' },
  'h6-1': { title: 'خطأ كبير', description: 'حاول موسى مساعدة رجل ضعيف، لكن ضربته تسببت في موت المصري.' },
  'h6-2': { title: 'طلب المغفرة', description: 'حزن موسى ودعا الله وطلب منه المغفرة.' },
  'h7-1': { title: 'مدين', description: 'غادر موسى مصر وسافر أياما حتى وصل إلى مدين.' },
  'h7-2': { title: 'البئر', description: 'عند بئر في مدين رأى موسى رعاة وفتاتين تنتظران مع الغنم.' },
  'h8-1': { title: 'الأختان', description: 'انتظرت الأختان لأن أباهما كان كبيرا في السن ولم يكن عندهما من يساعدهما.' },
  'h8-2': { title: 'موسى يساعد', description: 'ساعد موسى الأختين وسقى لهما الغنم.' },
  'h9-1': { title: 'والد الفتاتين', description: 'شكر والد الفتاتين موسى وعرض عليه عملا في مدين.' },
  'h9-2': { title: 'حياة جديدة', description: 'أقام موسى مع الأسرة وعمل معهم ثم تزوج إحدى الأختين.' },
  'h10-1': { title: 'نار على الجبل', description: 'في طريق العودة إلى مصر رأى موسى نارا واتجه نحوها.' },
  'h10-2': { title: 'الله ينادي موسى', description: 'سمع موسى نداء الله له وأنه لا إله إلا الله.' },
  'h11-1': { title: 'آية من الله', description: 'أخرج موسى يده فرآها مضيئة كآية من آيات الله.' },
  'h11-2': { title: 'هارون مع موسى', description: 'أخذ موسى أخاه هارون معه ليبلغا رسالة الله إلى فرعون.' },
  'h12-1': { title: 'آيتان', description: 'تحولت عصا موسى إلى حية كبيرة وظهرت يده بيضاء مضيئة.' },
  'h12-2': { title: 'فرعون يسميها سحرا', description: 'رفض فرعون الآيات وقال إن سحرته يستطيعون فعل مثل ذلك.' },
  'h13-1': { title: 'إيمان السحرة', description: 'بعد رؤية الآية قال السحرة إنهم آمنوا برب موسى وهارون.' },
  'h13-2': { title: 'عصا موسى', description: 'تحولت عصا موسى إلى حية كبيرة وغلبت ما أظهره السحرة.' },
  'h14-1': { title: 'الخروج ليلا', description: 'أمر الله موسى أن يخرج بقومه من مصر في الليل.' },
  'h14-2': { title: 'قافلة بطيئة', description: 'تحركت الجماعة ببطء لأن معهم أطفالا وكبارا في السن.' },
  'h15-1': { title: 'انشقاق البحر', description: 'أمر الله موسى أن يضرب البحر فانفتح فيه طريق.' },
  'h15-2': { title: 'عبور آمن', description: 'عبر موسى وقومه بأمان بين جدران مرتفعة من الماء.' },
  'h16-1': { title: 'انغلاق البحر', description: 'عندما دخل فرعون وجنوده البحر أغلقه الله عليهم.' },
  'h16-2': { title: 'الدرس الرئيس', description: 'تؤكد النهاية أن الإنسان لا يملك إنسانا آخر وأن القوة لله.' },
};

export const mosesA2PagesGoldEn = applyA2GoldPages({ canonicalPages: mosesA2Pages, hotspotMap: mosesA2HotspotsGoldEn, config, language: 'en' });
export const mosesA2PagesGoldAr = applyA2GoldPages({ canonicalPages: mosesA2PagesAr, hotspotMap: mosesA2HotspotsGoldAr, config, language: 'ar' });
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