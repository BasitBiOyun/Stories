import type { Exercise, PageData, TeacherGuideMetadata } from '../../../../types';
import { meccaB2QuickChallenges, meccaB2VocabularyChallengePairs, meccaB2FinalChallengeExercises, meccaB2FinalReviewExercises } from './exercises';
import { meccaB2LanguageFocusExercises } from './languageFocus';
import { meccaB2LanguageFocusExercisesPart2 } from './languageFocus2';
import { meccaB2LanguageFocusExercisesPart3, meccaB2LanguageFocusExercisesPart4, meccaB2LanguageReviewExercises } from './languageFocus3';
import { meccaB2TeacherGuideMetadata } from './teacherGuide';

const rawMeccaB2Pages: PageData[] = [
// r01a
//__R01__
// r01b
// r02a
//__R02__
// r02b
// r03a
//__R03__
// r03b
// r04a
//__R04__
// r04b
// r05a
//__R05__
// r05b
// r06a
//__R06__
// r06b
// r07a
//__R07__
// r07b
// r08a
//__R08__
// r08b
// r09a
//__R09__
// r09b
// r10a
//__R10__
// r10b
// r11a
//__R11__
// r11b
// r12a
//__R12__
// r12b

// t01a
const STORY_IDS = new Set(Array.from({ length: 17 }, (_, index) => index + 1));
export const meccaB2VocabIndexes: Record<number, number[]> = {
  1:[0,1,2,3,4,6], 2:[0,1,2,3,4,9], 3:[0,1,2,3,4], 4:[0,1,2,4,5],
  5:[0,1,2,3,4,5], 6:[0,1,2,3,4,5], 7:[0,1,2,3,4,6], 8:[0,1,2,3,8,9],
  9:[1,2,3,5,7,8], 10:[0,1,2,3,4,6], 11:[0,1,2,4,5,6], 12:[0,1,2,3,4],
  13:[0,1,2,3,4], 14:[0,1,2,3,4], 15:[0,1,2,3,4], 16:[0,1,2,3,4], 17:[0,1,2,3,4],
};
const EN_WORD_OVERRIDES: Record<number, Record<string, string>> = {
  1:{ superpower:'superpowers' },
  5:{ caravan:'caravans', boost:'boosting', merchant:'merchants' },
  6:{ 'trade festival':'trade festivals' },
  7:{ capitalist:'capitalists' },
  8:{ orphan:'orphans' },
  10:{ ancestor:'ancestors' },
  12:{ Hanif:'Hanifs', mediator:'mediators', omen:'omens' },
};
export const meccaB2HotspotCoords: Record<number, [number, number, number, number]> = {
  1:[24,38,73,62], 2:[29,65,74,34], 3:[23,58,69,31], 4:[31,36,76,64], 5:[22,67,67,39],
  6:[27,32,72,68], 7:[25,55,78,35], 8:[32,70,70,42], 9:[21,43,75,66], 10:[30,29,69,61],
  11:[26,64,77,37], 12:[23,35,71,70], 13:[33,57,76,30], 14:[20,69,68,41], 15:[28,40,74,65],
  16:[24,61,79,33], 17:[31,34,70,68],
};
const EN_DEFINITION_OVERRIDES: Record<string, string> = {
  superpower:'A state with enough political, military, and economic influence to shape events far beyond its own borders.',
  rivalry:'Sustained competition between powers seeking greater influence, advantage, or control.',
  'political unity':'The condition in which separate groups operate under a shared political authority or governing structure.',
  revelation:'Divine guidance communicated by Allah to a prophet.',
  conquest:'The acquisition of control over a territory through military force.',
  barbarism:'A condition characterized by severe violence, cruelty, and the breakdown of civilized restraint.',
  oppressed:'Subjected to persistent unjust treatment or control by a more powerful person or group.',
  'moral decline':'A deterioration in the ethical standards and conduct expected within a society.',
  civilized:'Organized according to developed social institutions, norms, and forms of public order.',
  reconstruct:'To build or form something again after it has been damaged, lost, or altered.',
  pilgrimage:'A journey made to a sacred place for religious purposes.',
  idolatry:'The religious practice of worshipping idols or treating them as objects of devotion.',
  extensive:'Large in scale, range, or degree.',
  usury:'The practice of lending money on exploitative or religiously prohibited interest terms.',
  aristocracy:'A socially dominant upper class whose status is based on wealth, lineage, or inherited influence.',
  capitalist:'A person who owns or controls capital and uses it to generate profit.',
  defenseless:'Lacking sufficient means, power, or protection to resist harm or exploitation.',
  righteous:'Morally upright and committed to justice or correct conduct.',
  humiliation:'A state of being made to feel degraded or stripped of dignity.',
  institution:'An established social, economic, religious, or political structure with an organized role in society.',
  tribalism:'Strong loyalty to one’s tribe that can override broader principles of fairness or universal justice.',
  mediator:'A person or intermediary positioned between two parties to facilitate contact or influence.',
  interconnected:'Linked so that changes in one area affect or depend on developments in another.',
  authority:'The recognized power or right to command, decide, or govern.',
  prestigious:'Associated with high social respect, influence, or status.',
  prophethood:'The divinely appointed mission and status of a prophet.',
  radical:'Producing or involving fundamental change to an existing system or structure.',
  exploitation:'The unfair use of people, labor, or resources for another party’s advantage.',
  boycott:'An organized refusal of social or economic relations used to exert pressure on a person or group.',
  starvation:'Severe deprivation caused by an extreme or prolonged lack of food.',
  hostility:'Strong and active opposition, often involving resentment or aggression.',
  'tribal fanaticism':'Extreme loyalty to tribal identity that suppresses independent judgment and can justify injustice.',
  stateless:'Lacking the recognized protection and legal belonging normally provided by a political community or state.',
  oppression:'Systematic cruel or unjust treatment imposed by those with greater power.',
  immorality:'Conduct that violates accepted moral principles or ethical standards.',
  'human honor':'The inherent dignity and moral worth that belongs to every human being.',
  arrogance:'An exaggerated sense of superiority that leads a person to undervalue others.',
};
const EN_FIXES: Record<number, [string, string][]> = {
  2:[["widely did not have justice, order, and peace", "did not widely have justice, order, and peace"]],
  3:[["Medina, He (pbuh) said", "Medina, he (pbuh) said"]],
  7:[["Due to the big money ownership in the hands of certain individuals", "Due to the concentration of money in the hands of certain individuals"]],
  11:[["poets praised conflict rather than peace and war instead of peace", "poets praised conflict and war rather than peace"]],
  15:[["Because they knew that the Prophet’s call to monotheism", "They knew that the Prophet’s call to monotheism"]],
  17:[["a more fair and peaceful place", "a fairer and more peaceful place"],["not only a past time", "not only a past era"]],
};
const fixText=(text:string,fixes?:[string,string][]) => (fixes??[]).reduce((value,[from,to])=>value.replace(from,to),text);
const standardizeEnglishPage=(page:PageData):PageData=>{
  const clean:PageData={...page};
  delete clean.exercises; delete clean.sequencingItems; delete clean.vocabularyPairs; delete clean.syncPoints; delete clean.timedChunks;
  if(!STORY_IDS.has(page.id)){
    if(typeof clean.image==='string'&&clean.image.includes('picsum.photos')) clean.image='';
    return clean;
  }
  const vocabulary=(meccaB2VocabIndexes[page.id]??[]).map(index=>page.vocabulary?.[index]).filter((item):item is NonNullable<PageData['vocabulary']>[number]=>Boolean(item)).map(item=>({
    ...item,
    word:EN_WORD_OVERRIDES[page.id]?.[item.word]??item.word,
    definition:EN_DEFINITION_OVERRIDES[item.word]??item.definition,
  }));
  const c=meccaB2HotspotCoords[page.id];
  const hotspots=(page.hotspots??[]).slice(0,2).map((hotspot,index)=>({...hotspot,id:`h${page.id}-${index+1}`,x:c[index*2],y:c[index*2+1]}));
  return {...clean,content:fixText(clean.content??'',EN_FIXES[page.id]),vocabulary,hotspots,animatedWords:undefined};
};
const standardizedMeccaB2Pages=rawMeccaB2Pages.map(standardizeEnglishPage);
const englishLanguageFocus:Record<number,Exercise[]>={...meccaB2LanguageFocusExercises,...meccaB2LanguageFocusExercisesPart2,...meccaB2LanguageFocusExercisesPart3,...meccaB2LanguageFocusExercisesPart4};
// t01b
// t02a
//__T02__
// t02b
// t03a
//__T03__
// t03b
// t04a
//__T04__
// t04b
// t05a
//__T05__
// t05b
