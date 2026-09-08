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
//__T01__
// t01b
// t02a
//__T02__
// t02b
// t03a
const attachEnglishLearning=(pages:PageData[]):PageData[]=>pages.map(page=>{
  if(STORY_IDS.has(page.id)){
    const languageFocusExercises=englishLanguageFocus[page.id];
    return {...page,type:'story',exercises:meccaB2QuickChallenges[page.id]?[meccaB2QuickChallenges[page.id]]:[],...(languageFocusExercises?{languageFocusExercises}:{})};
  }
  if(page.id===18) return {...page,type:'quiz',exercises:meccaB2ManualKnowledgeCheckExercises};
  if(page.id===19) return {...page,type:'exercises',title:'B2 Language Review',content:'Review and use the qualification, cause-result, contrast, condition, information-focus and discourse patterns developed across all seventeen chapters.',exercises:meccaB2LanguageReviewExercises};
  if(page.id===20) return {...page,type:'vocabulary-match',vocabularyPairs:meccaB2VocabularyChallengePairs};
  if(page.id===22) return {...page,type:'final-challenge',exercises:meccaB2FinalChallengeExercisesPolished};
  return page;
});
export const meccaB2Pages:PageData[]=attachEnglishLearning(standardizedMeccaB2Pages);
export const meccaB2TeacherGuideMetadataPolished:TeacherGuideMetadata={
  ...meccaB2TeacherGuideMetadata,
  targetLearners:'B2 learners ready to analyse historical relationships, qualify claims, and defend interpretations with evidence.',
  approachDesc:'Read and listen for evidence first; analyse causes, systems and qualifications second; produce claim-evidence-explanation responses third.',
  readingFramework:{
    before:'Predict one relationship from the title and image, but mark it as unproven until the chapter supplies evidence.',
    during:'Track direct facts, cause-effect links, contrasts and qualification words. Use the supplied audio to verify wording rather than inventing context.',
    after:'Complete the Quick Challenge, identify the exact supporting evidence, then produce a short analytical or transfer response.'
  },
  globalCitizenship:{
    title:'Justice, dignity and responsible belonging',
    description:'Use the Mecca chapters to examine fair economic conduct, protection of vulnerable people, accurate representation of beliefs, and group loyalty that does not excuse injustice.',
    themes:[
      {title:'Economic fairness',description:'Evaluate financial systems by their effects on people with less power.'},
      {title:'Human dignity',description:'Connect the story’s treatment of weak, poor, enslaved and socially disadvantaged people with equal human worth.'},
      {title:'Responsible belonging',description:'Distinguish supportive community ties from tribal pressure that suppresses moral choice.'}
    ],
    actions:[
      'Challenge an unfair transaction with evidence and respectful procedure rather than humiliation.',
      'Use qualified language when describing another group’s beliefs or social conditions.',
      'Support a person facing exclusion without turning the response into status competition.'
    ]
  },
  valuesEducation:{
    title:'Values as action',
    description:'Values are demonstrated through observable choices linked to chapter evidence.',
    items:[
      {label:'Justice',value:'Move from recognizing unfairness to a fair, nonviolent response, as the Hilfü’l-Fudûl chapter illustrates.'},
      {label:'Dignity',value:'Refuse to rank human worth by wealth, gender, freedom status or tribal protection.'},
      {label:'Integrity',value:'Keep interpretations inside the limits of the source instead of exaggerating for effect.'}
    ],
    questions:['What action would make this value visible?','Which chapter evidence supports that action?'],
    actions:['Name the unfair mechanism.','Identify who is most vulnerable.','Choose a proportionate, respectful corrective action.']
  },
  homeConnection:{
    title:'Evidence conversation at home',
    items:['Choose one chapter claim and explain its evidence in two minutes.','Ask a family member for an alternative interpretation, then check whether the story supports it.']
  }
};
// t03b
// t04a
//__T04__
// t04b
// t05a
//__T05__
// t05b
