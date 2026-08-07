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
  'h1-1': { title: 'Bilal ibn Rabah', description: 'Bilal was one of the first people in Mecca to speak openly about being Muslim.' },
  'h1-2': { title: 'Equal Human Value', description: 'Bilal’s story teaches that skin color or slavery does not make a person less valuable.' },
  'h2-1': { title: 'Jahiliyyah', description: 'Before Islam, many people in Mecca worshipped idols and society lacked justice.' },
  'h2-2': { title: 'Rich and Poor', description: 'The chapter describes a large gap between rich people and poor people in Mecca.' },
  'h3-1': { title: 'Slave Markets', description: 'The text says Mecca was a center where enslaved people were bought and sold.' },
  'h3-2': { title: 'Umayya', description: 'Umayya was Bilal’s master and a powerful leader who opposed Islam.' },
  'h4-1': { title: 'Hard Work', description: 'Bilal worked long days looking after camels under the hot sun.' },
  'h4-2': { title: 'No Respect', description: 'Umayya’s family treated Bilal badly and did not respect him as a person.' },
  'h5-1': { title: 'No Freedom', description: 'Bilal thought he would remain enslaved because he had no money to buy his freedom.' },
  'h5-2': { title: 'A New Message', description: 'Prophet Muhammad taught people to worship only Allah and to treat people fairly and equally.' },
  'h6-1': { title: 'A Secret Visit', description: 'Bilal secretly visited Abu Bakr because he wanted to learn more about Islam.' },
  'h6-2': { title: 'Abu Bakr', description: 'Abu Bakr answered Bilal’s questions and was known for kindness to enslaved people.' },
  'h7-1': { title: 'Allah Has No Equal', description: 'Abu Bakr explained that Allah has no partner or equal.' },
  'h7-2': { title: 'Bilal Accepts Islam', description: 'Bilal knew life could become harder, but he accepted Islam because he believed it was true.' },
  'h8-1': { title: 'Bilal Stays Firm', description: 'Even when Umayya hurt him, Bilal refused to worship idols.' },
  'h8-2': { title: 'Allah Is One', description: 'Bilal kept saying, “Allah is One,” and did not leave his faith.' },
  'h9-1': { title: 'Abu Bakr Comes', description: 'Abu Bakr came quickly when he heard that Bilal was being badly hurt.' },
  'h9-2': { title: 'A Question of Justice', description: 'Abu Bakr asked why believing in the One Allah should be treated as a crime.' },
  'h10-1': { title: 'Bilal Is Free', description: 'Abu Bakr bought Bilal and told him that he was now a free man.' },
  'h10-2': { title: 'Abu Bakr Frees Bilal', description: 'Abu Bakr did not keep Bilal as a slave; he set him free.' },
  'h11-1': { title: 'Hijrah to Medina', description: 'After years of hardship, the Muslims left Mecca and moved to Medina.' },
  'h11-2': { title: 'The First Adhan', description: 'After the Hijrah, Prophet Muhammad chose Bilal to call people to prayer.' },
  'h12-1': { title: 'Morning Adhan', description: 'The chapter says Bilal added the words “Prayer is better than sleep” to the morning Adhan.' },
  'h12-2': { title: 'Respect Every Person', description: 'The chapter teaches that skin color does not make one person better than another.' },
  'h13-1': { title: 'Everyone Is Equal', description: 'The chapter says no person is better because of skin color or nationality.' },
  'h13-2': { title: 'Heart and Good Actions', description: 'Bilal’s story ends by saying that a good heart and good actions are what matter.' },
};

export const meccaA2HotspotsGoldAr: A2HotspotMap = {
  'h1-1': { title: 'بلال بن رباح', description: 'كان بلال من أوائل من أعلنوا إسلامهم في مكة.' },
  'h1-2': { title: 'قيمة الإنسان', description: 'تعلمنا قصة بلال أن لون البشرة أو العبودية لا ينقصان من قيمة الإنسان.' },
  'h2-1': { title: 'الجاهلية', description: 'قبل الإسلام عبد كثير من الناس الأصنام ولم يكن المجتمع قائما على العدل.' },
  'h2-2': { title: 'الغني والفقير', description: 'يصف الفصل فجوة كبيرة بين الأغنياء والفقراء في مكة.' },
  'h3-1': { title: 'أسواق العبيد', description: 'يذكر النص أن مكة كانت مركزا لبيع العبيد وشرائهم.' },
  'h3-2': { title: 'أمية', description: 'كان أمية سيد بلال ورجلا قويا يعارض الإسلام.' },
  'h4-1': { title: 'عمل شاق', description: 'كان بلال يرعى الإبل ويعمل ساعات طويلة تحت شمس مكة.' },
  'h4-2': { title: 'غياب الاحترام', description: 'عاملت أسرة أمية بلالا بقسوة ولم تحترمه كإنسان.' },
  'h5-1': { title: 'بلا حرية', description: 'ظن بلال أنه سيبقى عبدا لأنه لم يملك مالا لشراء حريته.' },
  'h5-2': { title: 'رسالة جديدة', description: 'علّم النبي محمد الناس أن يعبدوا الله وحده وأن يعاملوا الناس بالعدل والمساواة.' },
  'h6-1': { title: 'زيارة سرية', description: 'زار بلال أبا بكر سرا لأنه أراد أن يعرف أكثر عن الإسلام.' },
  'h6-2': { title: 'أبو بكر', description: 'أجاب أبو بكر عن أسئلة بلال وكان معروفا بالإحسان إلى العبيد.' },
  'h7-1': { title: 'لا شريك لله', description: 'شرح أبو بكر أن الله لا شريك له ولا مثيل.' },
  'h7-2': { title: 'بلال يقبل الإسلام', description: 'عرف بلال أن حياته قد تصبح أصعب، لكنه أسلم لأنه آمن أن الإسلام حق.' },
  'h8-1': { title: 'ثبات بلال', description: 'حتى عندما آذاه أمية، رفض بلال أن يعبد الأصنام.' },
  'h8-2': { title: 'الله واحد', description: 'ظل بلال يقول إن الله واحد ولم يترك إيمانه.' },
  'h9-1': { title: 'مجيء أبي بكر', description: 'جاء أبو بكر سريعا عندما سمع أن بلالا يتعرض للأذى.' },
  'h9-2': { title: 'سؤال عن العدل', description: 'سأل أبو بكر لماذا يُعامل الإيمان بالله الواحد كأنه جريمة.' },
  'h10-1': { title: 'بلال يصبح حرا', description: 'اشترى أبو بكر بلالا وأخبره أنه أصبح رجلا حرا.' },
  'h10-2': { title: 'أبو بكر يحرر بلالا', description: 'لم يحتفظ أبو بكر ببلال عبدا، بل أعتقه.' },
  'h11-1': { title: 'الهجرة إلى المدينة', description: 'بعد سنوات من المشقة غادر المسلمون مكة وانتقلوا إلى المدينة.' },
  'h11-2': { title: 'الأذان الأول', description: 'بعد الهجرة اختار النبي محمد بلالا ليدعو الناس إلى الصلاة.' },
  'h12-1': { title: 'أذان الفجر', description: 'يذكر الفصل أن بلالا أضاف معنى «الصلاة خير من النوم» إلى أذان الفجر.' },
  'h12-2': { title: 'احترام كل إنسان', description: 'يعلم الفصل أن لون البشرة لا يجعل إنسانا أفضل من آخر.' },
  'h13-1': { title: 'الناس متساوون', description: 'يقول الفصل إن لون البشرة أو الجنسية لا يجعلان شخصا أفضل من غيره.' },
  'h13-2': { title: 'القلب والعمل الصالح', description: 'تنتهي قصة بلال بالتأكيد على أهمية القلب الطيب والعمل الصالح.' },
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
