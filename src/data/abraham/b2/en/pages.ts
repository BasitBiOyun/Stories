import type { Exercise, PageData } from '../../../../types';
import {
  abrahamB2FinalChallengeExercises,
  abrahamB2KnowledgeCheckExercises,
  abrahamB2QuickChallenges,
  abrahamB2VocabularyChallengePairs,
} from './exercises';
import { abrahamB2LanguageFocusPart1 } from './languageFocus';
import { abrahamB2LanguageFocusPart2 } from './languageFocus2';
import { abrahamB2LanguageFocusPart3 } from './languageFocus3';

const rawAbrahamB2Pages: PageData[] = [
// c01a
//__C01__
// c01b

// c02a
//__C02__
// c02b

// c03a
//__C03__
// c03b

// c04a
//__C04__
// c04b

// c05a
//__C05__
// c05b

// c06a
//__C06__
// c06b

// c07a
//__C07__
// c07b

// c08a
//__C08__
// c08b

// c09a
//__C09__
// c09b

// c10a
//__C10__
// c10b

// c11a
        "word": "Guided",
        "definition": "Directed, led, or shown the correct spiritual or physical path."
      },
      {
        "word": "Partners",
        "definition": "Associates or sharers in responsibility or devotion (in theology, associates with Allah)."
      },
      {
        "word": "Assign",
        "definition": "To attribute, allocate, or designate a role or status."
      },
      {
        "word": "Prophet",
        "definition": "A person chosen by Allah as a messenger to guide people to the truth."
      },
      {
        "word": "Before",
        "definition": "In previous time; earlier than a specified point of time."
      },
      {
        "word": "Punish",
        "definition": "To inflict a penalty or pain on someone for an offense or wrongdoing."
      },
      {
        "word": "Guidance",
        "definition": "Advice or information aimed at resolving a problem."
      },
      {
        "word": "Resurrection",
        "definition": "The concept of coming back to life after death."
      },
      {
        "word": "Universe",
        "definition": "All existing matter and space considered as a whole."
      }
    ],
    "id": 38
  },
  {
    "type": "glossary",
    "title": "B2 Master Glossary - Part 2",
    "content": "Academic and narrative vocabulary from the second half of the B2 story.",
    "image": "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Abraham%2Fimages%2FAbr_B1_Chapter1.1.webp?alt=media&token=38a8e1cb-d926-4444-baa1-4eaecd47cf5c",
    "vocabulary": [
      {
        "word": "However",
        "definition": "But, nevertheless, or in spite of that."
      },
      {
        "word": "Idolaters",
        "definition": "People who worship physical statues, icons, or false deities."
      },
      {
        "word": "Foolishness",
        "definition": "Lack of good sense or judgment."
      },
      {
        "word": "Called",
        "definition": "Named, designated, or summoned by a specific title or voice."
      },
      {
        "word": "Arrogance",
        "definition": "The quality of being overly proud."
      },
      {
        "word": "Flames",
        "definition": "The hot, glowing, burning masses of gas of an active fire."
      },
      {
        "word": "Reaching",
        "definition": "Stretching out or arriving at a certain point or destination."
      },
      {
        "word": "Miracle",
        "definition": "A surprising and welcome event explicable only by divine intervention."
      },
      {
        "word": "Despotic",
        "definition": "Of or typical of a despot; tyrannical."
      },
      {
        "word": "Tested",
        "definition": "Examined or put under hardship to prove strength of faith or character."
      },
      {
        "word": "Declared",
        "definition": "Announced, proclaimed, or stated clearly and officially."
      },
      {
        "word": "Totally",
        "definition": "Completely, entirely, or without reservation."
      },
      {
        "word": "Foolish",
        "definition": "Lacking good sense, wisdom, or judgment."
      },
      {
        "word": "Emigrate",
        "definition": "Leave one's own country to settle permanently elsewhere."
      },
      {
        "word": "Righteousness",
        "definition": "The quality of being morally right or justifiable."
      },
      {
        "word": "Offspring",
        "definition": "A person's child or children."
      },
      {
        "word": "Cultivated",
        "definition": "Prepared and used for raising crops."
      },
      {
        "word": "Valley",
        "definition": "A low area of land between hills or mountains, often with a river."
      },
      {
        "word": "Leather",
        "definition": "Animal skin specially treated to preserve it and make it flexible."
      },
      {
        "word": "Cultivation",
        "definition": "The preparation and act of tilling or growing crops on land."
      },
      {
        "word": "Pilgrimage",
        "definition": "A journey to a sacred place."
      },
      {
        "word": "Exhausted",
        "definition": "Drained of physical or mental resources; very tired."
      },
      {
        "word": "Companion",
        "definition": "A close associate, friend, or partner who shares experiences."
      },
      {
        "word": "Abundant",
        "definition": "Existing or available in large quantities; plentiful."
      },
      {
        "word": "Looking",
        "definition": "Directing one's sight or attention to find or observe someone or something."
      },
      {
        "word": "Sacrifice",
        "definition": "An act of surrendering a possession as an offering to God."
      },
      {
        "word": "Forbearing",
        "definition": "Patient and restrained."
      },
      {
        "word": "Fearing",
        "definition": "Feeling anxiety, awe, or reverence, or being afraid of something."
      },
      {
        "word": "Faithful",
        "definition": "Loyal, trustworthy, and firm in religious belief or devotion."
      },
      {
        "word": "Equivalent",
        "definition": "Equal in value, amount, or meaning."
      },
      {
        "word": "Muhammad",
        "definition": "Prophet Muhammad (pbuh), the final messenger of Allah, a descendant of Abraham."
      }
    ],
    "id": 39
  },
  {
    "id": 40,
    "type": "final-challenge",
    "title": "Final Challenge",
    "image": "https://picsum.photos/seed/final-abraham-b2/1200/800",
    "content": "It is time to test your comprehensive understanding of the B2 Prophet Abraham story.",
    "vocabulary": [],
    "hotspots": [],
    "animatedWords": [],
    "exercises": []
  }
// c11b
];

export type AbrahamB2VocabSeed = readonly [en: string, ar: string, enDefinition: string, arDefinition: string];
const v = (en: string, ar: string, enDefinition: string, arDefinition: string): AbrahamB2VocabSeed => [en, ar, enDefinition, arDefinition];
export const abrahamB2CanonicalVocabulary: Record<number, readonly AbrahamB2VocabSeed[]> = {
// k01a
//__K01__
// k01b
// k02a
//__K02__
// k02b
// k03a
//__K03__
// k03b
// k04a
//__K04__
// k04b
};

// t01a
//__T01__
// t01b
// t02a
//__T02__
// t02b