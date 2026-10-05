import type { ChapterExtras } from '../../../../lib/chapterExtras';

// Before you read, I can and example answers (V2 pilot). The story text is unchanged.
export const ibnJubayrA2ChapterExtras: ChapterExtras = {
  beforeYouRead: {
    1: { kind: 'picture', question: "Look at the picture. Who lived side by side in Al-Andalus?", options: ["Only Muslims lived there.", "Muslims, Christians and Jews lived there.", "Only Christians and Jews lived there."], answer: 1, quote: "Muslims, Christians, and Jews lived side by side" },
    2: { kind: 'picture', question: "Look at the picture. What job did Ibn Jubayr have in Granada?", options: ["He was a doctor for the king.", "He was a teacher at a school.", "He was a secretary for the governor."], answer: 2, quote: "worked as a secretary for the governor of Granada" },
    3: { kind: 'picture', question: "Look at the picture. What did Ibn Jubayr write about his journey?", options: ["He wrote a travel diary.", "He wrote a long poem.", "He wrote letters home."], answer: 0, quote: "Ibn Jubayr wrote a travel diary about his journey." },
    4: { kind: 'picture', question: "Look at the picture. How tall was the lighthouse?", options: ["more than 50 men tall", "as tall as a tree", "as tall as a small house"], answer: 0, quote: "He wrote that it was more than 50 men tall" },
    5: { kind: 'guess', question: "Guess first: how much bread did Saladin give the poor daily?", options: ["20 loaves", "200 loaves", "2,000 loaves"], answer: 2, quote: "giving out 2,000 loaves of bread to the poor every day" },
    6: { kind: 'picture', question: "Look at the picture. How did they go to the Red Sea?", options: ["On a big ship.", "In a camel caravan.", "On fast horses."], answer: 1, quote: "he joined a group of travelers in a camel caravan to go to the Red Sea" },
    7: { kind: 'picture', question: "Look at the picture. Where did people come to Mecca from?", options: ["from far places like Persia, India and Africa", "only from Mecca", "only from Spain"], answer: 0, quote: "People traveled to Mecca from very far places such as Persia, India, and Africa." },
    8: { kind: 'guess', question: "Guess first: where did Ibn Jubayr go after Baghdad?", options: ["back to Mecca", "to Yemen", "to northern Syria"], answer: 2, quote: "Then, he went to northern Syria." },
    9: { kind: 'guess', question: "Guess first: what was Damascus long ago?", options: ["a small fishing village", "the first capital of the Umayyads", "a Crusader castle"], answer: 1, quote: "Damascus was the first capital of the old Umayyads." },
    10: { kind: 'guess', question: "Guess first: who controlled Palestine at that time?", options: ["Sultan Saladin.", "The Abbasids.", "The Crusaders."], answer: 2, quote: "Palestine was under the control of the Crusaders at that time." },
    11: { kind: 'guess', question: "Guess first: who helped the passengers in Sicily?", options: ["The king of Sicily.", "Saladin’s soldiers.", "A group of Crusaders."], answer: 0, quote: "The Norman king of Sicily, the Christian ruler King William II, helped the passengers." },
    12: { kind: 'picture', question: "Look at the picture. When did the caravans usually travel?", options: ["In the afternoon.", "At night.", "In the morning."], answer: 1, quote: "The caravans usually traveled at night." },
    13: { kind: 'guess', question: "Guess first: what did Ibn Jubayr teach in Granada?", options: ["hadiths of Prophet Muhammad (pbuh)", "mathematics", "sailing"], answer: 0, quote: "He taught hadiths of Prophet Muhammad (pbuh)." },
  },
  iCan: {
    1: ["I can say who lived together in Al-Andalus.", "I can say what people did long ago, and why.", "I can talk about a big city I know."],
    2: ["I can say what Ibn Jubayr studied and why he traveled.", "I can talk about my dreams for the future.", "I can write three sentences about my goals."],
    3: ["I can say why the journey to Mecca was hard.", "I can say how people travel: by boat, by camel, on foot.", "I can tell my partner about one of my trips."],
    4: ["I can follow Ibn Jubayr’s trip from Granada to Cairo.", "I can tell a trip in order: first, then, finally.", "I can tell my way from home to school."],
    5: ["I can say what Ibn Jubayr saw in Cairo.", "I can say what people could and could not do.", "I can talk about what a good leader does."],
    6: ["I can say what a camel caravan was like.", "I can compare two things with “It is like …”.", "I can describe a picture to my partner."],
    7: ["I can say what Ibn Jubayr saw in Mecca.", "I can say what people can and cannot do there.", "I can describe a special place."],
    8: ["I can follow the trip from Medina to Baghdad.", "I can say where places are: near, through, to.", "I can write about my town with “there is” and “there are”."],
    9: ["I can name the parts of the Great Mosque of Damascus.", "I can say what a book tells us.", "I can name the parts of a building I know."],
    10: ["I can say why Ibn Jubayr waited in Acre.", "I can say how long something took.", "I can tell my partner about a time I waited."],
    11: ["I can tell the story of the dangerous trip home.", "I can tell a short story in order.", "I can tell a story about a hard day with a happy end."],
    12: ["I can name the dangers of travel long ago.", "I can say what people had to do.", "I can write safety tips for a school trip."],
    13: ["I can say what Ibn Jubayr learned from his journey.", "I can give advice with “should” and “should not”.", "I can write advice for a younger student."],
  },
  examples: {
    1: [
      "Istanbul is a big city in Türkiye.",
      "It is famous because of its old mosques and the sea.",
      "It has many beautiful places, so a lot of tourists visit it.",
    ],
    2: [
      "One of my biggest dreams is to visit Japan.",
      "I also want to learn English very well.",
      "Another goal is to become a doctor. What is your biggest dream?",
    ],
    3: [
      "Last summer, I traveled to my grandmother’s village by bus.",
      "Then we went to the river on foot.",
      "How do you come to school? I come to school by bus, but sometimes I walk.",
    ],
    4: [
      "First, he went to Ceuta. Then, he took a Genoese ship. While they were sailing, a terrible storm caught them. After the storm stopped, the ship continued. Finally, he arrived in Alexandria.",
      "First, I leave my house. Then, I walk to the bus stop and take the bus. Finally, I arrive at school.",
    ],
    5: [
      "A good leader is kind and fair.",
      "He or she gives support to schools and poor people.",
      "The streets are so clean that people are happy to walk there.",
    ],
    6: [
      "The desert is like a big yellow sea.",
      "The red tent is like a small moving palace.",
      "What are the camels like? They are like a long line of boats in the sand.",
    ],
    7: [
      "The big mosque in my town is located in the city centre.",
      "It can hold a thousand people, but it cannot hold everyone on Friday.",
      "People speak quietly with respect there.",
    ],
    8: [
      "In my town, there are three parks and two big schools.",
      "There is a small library near my house.",
      "How many mosques are there in your town? There are five mosques in my town.",
    ],
    9: [
      "My school has a garden, a library, a big hall and a sports field.",
      "My favourite part is the library because it is quiet and has many books.",
    ],
    10: [
      "I waited for nearly an hour at the doctor’s.",
      "I waited because there were many people. I went there to get some medicine.",
    ],
    11: [
      "Last week, I almost missed the school bus, but the driver waited for me.",
      "In the end, I arrived at school on time.",
    ],
    12: [
      "You have to stay with your teacher.",
      "You should take a bottle of water.",
      "You should not talk to strangers.",
    ],
    13: [
      "You should read every day because it helps you learn new words.",
      "You should not stay up late before an exam.",
      "I think “read every day” is the most useful advice because reading helps in every lesson.",
    ],
  },
  reviewExamples: [
    "On a Saturday in May, I traveled to Konya by train.",
    "We stayed there for two days.",
    "The museum was bigger than our school.",
    "I saw many old books and pictures. That’s why I want to learn more about history.",
  ],
};
