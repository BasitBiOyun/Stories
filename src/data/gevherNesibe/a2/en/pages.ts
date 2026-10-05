import type { PageData } from '../../../../types';

// Story text is the teacher's final file, verbatim. Word Notes are exactly the teacher's bold expressions.
// Hotspot positions match the miniature chapter pictures (Storage gevher_nesibe/gevher_nesibe_a2/images).
export const gevherNesibeA2Pages: PageData[] = [
  {
    id: 1,
    type: 'story',
    title: "A Hospital Ahead of Its Time",
    content: `Did you know that the Gevher Nesibe Hospital and Medical School in Kayseri is the oldest Seljuk hospital in Anatolia that is still standing? It is also the first place in the world with a hospital and a medical school together. It was built in 1205–1206.

In the 13th century, medical education in Anatolia had two parts: classroom education and practical training. But European universities started this kind of education much later, in the 16th and 17th centuries. The Ottoman Sultan Mahmud II built the Imperial Medical School. This school opened more than 600 years after the medical school in Kayseri.

When the hospital opened, Konya was the capital city of the Anatolian Seljuk State. At that time, people accepted Kayseri as the second capital. They also knew the city as the center of scientists. The Anatolian Seljuk ruler, Gıyâseddin Keyhusrev I, built this medical center for his sister, Gevher Nesibe Sultan. Today, this old building is the Museum of the Seljuk Civilization.`,
    vocabulary: [
      { word: "still standing", definition: "Still there after a very long time; not destroyed." },
      { word: "medical", definition: "Connected with medicine and helping sick people." },
      { word: "practical training", definition: "Learning by doing real work, not only by reading books." },
      { word: "scientists", definition: "People who study the world and how things work." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h1a', x: 15, y: 78, title: "Two Parts of Education", description: "Medical education in Anatolia had two parts: classroom education and practical training." },
      { id: 'gevhernesibe-a2-en-h1b', x: 50, y: 30, title: "A Museum Today", description: "Today, the old building is the Museum of the Seljuk Civilization." },
    ],
  },
  {
    id: 2,
    type: 'story',
    title: "A Princess and a Commander",
    content: `Gevher Nesibe Sultan was the daughter of Kılıçarslan II and the sister of Gıyâseddin Keyhusrev I. People tell a famous story about her. When she was a young girl, she loved a young commander. But her brother, Sultan Gıyâseddin Keyhusrev I, did not want this marriage. He wanted his sister to marry a palace official. However, Gevher Nesibe did not accept this.

To separate them from each other, the Sultan sent the young commander away to war. Some time later, the commander died in battle. Gevher Nesibe became very sad and got a bad illness. At that time, Kayseri did not have a good hospital, so she died at a young age. Before her death, her brother said sorry to her and asked for her last wish.`,
    vocabulary: [
      { word: "commander", definition: "A person who leads a group of soldiers." },
      { word: "sent the young commander away", definition: "Made the young commander go to a place far away." },
      { word: "last wish", definition: "The last thing a person asks for before they die." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h2a', x: 52, y: 22, title: "A Brother’s Plan", description: "Her brother wanted her to marry a palace official, but she did not accept this." },
      { id: 'gevhernesibe-a2-en-h2b', x: 82, y: 18, title: "No Good Hospital", description: "Kayseri did not have a good hospital, so Gevher Nesibe died at a young age." },
    ],
  },
  {
    id: 3,
    type: 'story',
    title: "The Last Wish",
    content: `According to the story, Gevher Nesibe Sultan shared her last wish on her deathbed:

“I have a very bad illness, and doctors cannot help me. I am near the end of my life. Please use all my money to build a hospital for me. Let this hospital help sick people and find cures for bad diseases. Let famous doctors and surgeons teach here. Nobody should pay any money. This place must be free for everyone.”`,
    vocabulary: [
      { word: "deathbed", definition: "The bed where a person lies in the last hours of life." },
      { word: "sick people", definition: "People who are ill." },
      { word: "cures", definition: "Medicines or ways of treating that make an illness go away." },
      { word: "diseases", definition: "Illnesses of the body." },
      { word: "surgeons", definition: "Doctors who cut into the body to make a sick person better." },
      { word: "free", definition: "Costing no money." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h3a', x: 40, y: 45, title: "Help for Sick People", description: "She wanted a hospital to help sick people and find cures for bad diseases." },
      { id: 'gevhernesibe-a2-en-h3b', x: 80, y: 50, title: "Free for Everyone", description: "She said that nobody should pay any money there." },
    ],
  },
  {
    id: 4,
    type: 'story',
    title: "The Twin Madrasas",
    content: `To make his sister’s wish come true, Gıyâseddin Keyhusrev built a medical school (Gıyâsiye Medresesi) and a hospital (Şifâiye). People also called the hospital the Dârüşşifâ, “the house of healing.” It took two years to build the hospital. The grave of Gevher Nesibe Sultan is inside the Gıyâsiye Medresesi.

Because the two buildings are next to each other, people call them the ‘Twin Madrasas.’ The words on the big front gate of the hospital say that the building was built in 1205–1206.`,
    vocabulary: [
      { word: "come true", definition: "Happen in real life, just like a wish or a dream." },
      { word: "healing", definition: "Making a sick or hurt person well again." },
      { word: "grave", definition: "The place in the ground where a dead person lies." },
      { word: "inside", definition: "In a building or room, not outside it." },
      { word: "Twin", definition: "One of two things that look the same and are next to each other." },
      { word: "front gate", definition: "The big main door at the front of a building." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h4a', x: 75, y: 15, title: "The House of Healing", description: "People also called the hospital the Dârüşşifâ, “the house of healing.”" },
      { id: 'gevhernesibe-a2-en-h4b', x: 25, y: 22, title: "Two Buildings Side by Side", description: "The two buildings are next to each other, so people call them the Twin Madrasas." },
    ],
  },
  {
    id: 5,
    type: 'story',
    title: "Learning Beside the Patients",
    content: `Students studied in two buildings. They learned lessons at the Gıyâsiye and worked with real patients at the Şifâiye. History books show that the buildings had a heating system under the floor. It used hot steam from a bathhouse near the school. Students probably lived in small rooms inside the school.

In the summer, lessons were in the large open gardens. Doctors also saw sick people there every day. The hospital also had two general doctors, two surgeons, and a pharmacist. This team was very similar to the team at the Keykâvus Hospital in Sivas.`,
    vocabulary: [
      { word: "heating system", definition: "Pipes or machines that make a building warm." },
      { word: "steam", definition: "The hot white cloud that comes from very hot water." },
      { word: "similar to", definition: "Almost the same as something else." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h5a', x: 42, y: 58, title: "Warm Floors", description: "A heating system under the floor used hot steam from a bathhouse." },
      { id: 'gevhernesibe-a2-en-h5b', x: 50, y: 85, title: "Lessons in the Garden", description: "In the summer, lessons were in the large open gardens." },
    ],
  },
  {
    id: 6,
    type: 'story',
    title: "Great Teachers and Books",
    content: `Many famous scientists and doctors taught at this school. One of them was Sadreddin Konevî. Another doctor was Mevlânâ’s close friend and personal doctor, Ekmeleddin al-Nahcuvânî. There was also a famous eye doctor. At the school, these scientists taught philosophy, religion, languages, and how the human body works. Students read the most important medical books of that time, especially the books of İbn Sînâ. They also read books by ancient Greek doctors like Hippocrates. For their practice, students learned at the patients’ bedside in the hospital.`,
    vocabulary: [
      { word: "close friend", definition: "A very good friend you know well." },
      { word: "philosophy", definition: "The study of big ideas about life, knowledge and the world." },
      { word: "ancient", definition: "Very old; from a time long, long ago." },
      { word: "patients", definition: "People who get help from a doctor or a hospital." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h6a', x: 25, y: 40, title: "The Books of İbn Sînâ", description: "Students read the most important medical books of that time, especially the books of İbn Sînâ." },
      { id: 'gevhernesibe-a2-en-h6b', x: 80, y: 45, title: "Learning at the Bedside", description: "Students learned at the patients’ bedside in the hospital." },
    ],
  },
  {
    id: 7,
    type: 'story',
    title: "Inside the Buildings",
    content: `A long hall connects the two buildings. Each building has a courtyard with a pool and many rooms. All the doors are small and open into covered walkways. None of the rooms have fireplaces. There was no kitchen space inside the center. This shows that people brought food from an outdoor kitchen.

The Gevher Nesibe Hospital had three rooms for operations, and two surgeons worked there. Small windows at the top of these rooms gave a little light. Doctors probably did eye operations here.`,
    vocabulary: [
      { word: "operations", definition: "Medical work when a doctor cuts into the body to fix a problem inside it." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h7a', x: 35, y: 30, title: "A Long Hall", description: "A long hall connects the two buildings." },
      { id: 'gevhernesibe-a2-en-h7b', x: 55, y: 18, title: "Light from Above", description: "Small windows at the top of the operation rooms gave a little light." },
    ],
  },
  {
    id: 8,
    type: 'story',
    title: "Caring for Mind and Body",
    content: `The center also had a special part for people with mental illnesses, with 18 rooms. Doctors used music to help these patients.

There was also a bathhouse inside the building, and it had a round roof. Inside, there were four round windows in the old Seljuk style. The bathhouse also had a very good wastewater system.`,
    vocabulary: [
      { word: "mental illnesses", definition: "Illnesses of the mind." },
      { word: "round", definition: "Shaped like a circle or a ball." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h8a', x: 40, y: 60, title: "Music for the Mind", description: "Doctors used music to help patients with mental illnesses." },
      { id: 'gevhernesibe-a2-en-h8b', x: 75, y: 25, title: "A Round Roof", description: "The bathhouse had a round roof and four round windows." },
    ],
  },
  {
    id: 9,
    type: 'story',
    title: "Medical Education at the Dârüşşifâ",
    content: `At that time, students learned everything with their teachers. When they finished school, they got a diploma. This document showed the names of their teachers and older scientists. Students at this school had a special name: ‘dânişmend.’

Education at the hospital had two parts. In the first part, students took classes in mathematics, physics, languages, philosophy, and medicine. People called this part ‘dârü’l-ilim’. In the second part, students learned Islamic sciences. Doctors used the knowledge of famous scientists like İbn Sînâ to help sick people. They also made medicines using the best recipes of that time. Students learned by watching doctors at the patients’ beds. The hospital served patients until the early 1900s.`,
    vocabulary: [
      { word: "served", definition: "Worked for people and helped them for a long time." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h9a', x: 85, y: 60, title: "A Special Name", description: "Students at this school had a special name: ‘dânişmend.’" },
      { id: 'gevhernesibe-a2-en-h9b', x: 55, y: 58, title: "A Diploma", description: "The diploma showed the names of their teachers and older scientists." },
    ],
  },
  {
    id: 10,
    type: 'story',
    title: "Music Therapy at the Dârüşşifâ",
    content: `İbn Sînâ wrote a book about health. In this book, he said that doctors must make patients’ minds and hearts stronger. He believed that good words from loved ones and music could help sick people. The scientist Er-Râzî also said that doctors should help sad and stressed patients with music. At the same time, the scientist Fârâbî studied how music changed human feelings. He showed that music gave people joy, fear, or comfort. He also showed the best time of the day for each type of music. So, doctors used music to help patients at the Gevher Nesibe Hospital.`,
    vocabulary: [
      { word: "joy", definition: "A feeling of great happiness." },
      { word: "fear", definition: "The feeling you have when you think something bad will happen." },
      { word: "comfort", definition: "A calm feeling with less worry or pain." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h10a', x: 15, y: 85, title: "Mind and Heart", description: "İbn Sînâ said that doctors must make patients’ minds and hearts stronger." },
      { id: 'gevhernesibe-a2-en-h10b', x: 50, y: 60, title: "Fârâbî and Music", description: "Fârâbî showed that music gave people joy, fear, or comfort." },
    ],
  },
  {
    id: 11,
    type: 'story',
    title: "A Legacy That Lives On",
    content: `In history, there were many hospitals and medical schools. But they were not in the same building. The Gevher Nesibe Hospital was the first school and hospital together. It was more advanced than the first famous medical universities in Europe. This school and hospital used the knowledge of many centuries. They show the great success of scientists in the Islamic world.

Gevher Nesibe Sultan never married the love of her life. But people loved her very much, and everyone remembers her today.`,
    vocabulary: [
      { word: "advanced", definition: "Using new and better ideas or ways than others." },
      { word: "success", definition: "Doing well and getting a good result." },
      { word: "the love of her life", definition: "The person she loved most in her whole life." },
    ],
    hotspots: [
      { id: 'gevhernesibe-a2-en-h11a', x: 50, y: 30, title: "School and Hospital Together", description: "The Gevher Nesibe Hospital was the first school and hospital together." },
      { id: 'gevhernesibe-a2-en-h11b', x: 20, y: 80, title: "Remembered Today", description: "People loved Gevher Nesibe very much, and everyone remembers her today." },
    ],
  },
  { id: 12, type: 'quiz', title: 'Knowledge Check', image: 'https://picsum.photos/seed/quiz-gevhernesibe-a2/1200/800', audioUrl: '', content: 'Test your understanding of the A2 story of the Gevher Nesibe Hospital and Medical School.' },
  { id: 13, type: 'vocabulary-match', title: 'Vocabulary Challenge', image: 'https://picsum.photos/seed/vocab-match-gevhernesibe-a2/1200/800', audioUrl: '', content: 'Match important words from the story with their meanings.' },
  { id: 14, type: 'exercises', title: 'Language Review', image: 'https://picsum.photos/seed/gevhernesibe-a2-exercises/1200/800', content: 'Review and use the language patterns from across the book.' },
  { id: 15, type: 'glossary', title: 'Master Glossary', image: 'https://picsum.photos/seed/gevhernesibe-a2-glossary/1200/800', content: 'Review all key vocabulary from the story in one place.', vocabulary: [
      {
          "word": "still standing",
          "definition": "Still there after a very long time; not destroyed.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/stɪl ˈstændɪŋ/",
          "wordFamily": [
              "stand",
              "standing"
          ],
          "collocations": [
              "still standing today",
              "the oldest building still standing"
          ],
          "synonyms": [
              "not destroyed"
          ],
          "chapter": 1,
          "chapterTitle": "A Hospital Ahead of Its Time",
          "storyExample": "Did you know that the Gevher Nesibe Hospital and Medical School in Kayseri is the oldest Seljuk hospital in Anatolia that is still standing?",
          "category": "Buildings"
      },
      {
          "word": "medical",
          "definition": "Connected with medicine and helping sick people.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/ˈmedɪkəl/",
          "wordFamily": [
              "medicine",
              "medical"
          ],
          "collocations": [
              "medical school",
              "medical education"
          ],
          "synonyms": [
              "of medicine"
          ],
          "chapter": 1,
          "chapterTitle": "A Hospital Ahead of Its Time",
          "storyExample": "In the 13th century, medical education in Anatolia had two parts: classroom education and practical training.",
          "category": "Medicine"
      },
      {
          "word": "practical training",
          "definition": "Learning by doing real work, not only by reading books.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈpræktɪkəl ˈtreɪnɪŋ/",
          "wordFamily": [
              "practice",
              "practical",
              "train",
              "training"
          ],
          "collocations": [
              "get practical training",
              "classroom education and practical training"
          ],
          "synonyms": [
              "hands-on learning"
          ],
          "chapter": 1,
          "chapterTitle": "A Hospital Ahead of Its Time",
          "storyExample": "In the 13th century, medical education in Anatolia had two parts: classroom education and practical training.",
          "category": "Education"
      },
      {
          "word": "scientists",
          "definition": "People who study the world and how things work.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈsaɪəntɪsts/",
          "wordFamily": [
              "science",
              "scientist",
              "scientific"
          ],
          "collocations": [
              "famous scientists",
              "the center of scientists"
          ],
          "synonyms": [
              "scholars"
          ],
          "chapter": 1,
          "chapterTitle": "A Hospital Ahead of Its Time",
          "storyExample": "They also knew the city as the center of scientists.",
          "category": "Education"
      },
      {
          "word": "commander",
          "definition": "A person who leads a group of soldiers.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/kəˈmɑːndə/",
          "wordFamily": [
              "command",
              "commander"
          ],
          "collocations": [
              "a young commander",
              "an army commander"
          ],
          "synonyms": [
              "army leader"
          ],
          "chapter": 2,
          "chapterTitle": "A Princess and a Commander",
          "storyExample": "When she was a young girl, she loved a young commander.",
          "category": "People"
      },
      {
          "word": "sent the young commander away",
          "definition": "Made the young commander go to a place far away.",
          "partOfSpeech": "verb",
          "level": "A2",
          "pronunciation": "/sent ðə jʌŋ kəˈmɑːndər əˈweɪ/",
          "wordFamily": [
              "send",
              "sent",
              "send away"
          ],
          "collocations": [
              "send someone away",
              "sent away to war"
          ],
          "synonyms": [
              "made him leave"
          ],
          "chapter": 2,
          "chapterTitle": "A Princess and a Commander",
          "storyExample": "To separate them from each other, the Sultan sent the young commander away to war.",
          "category": "Actions"
      },
      {
          "word": "last wish",
          "definition": "The last thing a person asks for before they die.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/lɑːst wɪʃ/",
          "wordFamily": [
              "wish",
              "wished"
          ],
          "collocations": [
              "ask for a last wish",
              "share a last wish"
          ],
          "synonyms": [
              "final wish"
          ],
          "chapter": 2,
          "chapterTitle": "A Princess and a Commander",
          "storyExample": "Before her death, her brother said sorry to her and asked for her last wish.",
          "category": "Feelings and Life"
      },
      {
          "word": "deathbed",
          "definition": "The bed where a person lies in the last hours of life.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈdeθbed/",
          "wordFamily": [
              "death",
              "die",
              "deathbed"
          ],
          "collocations": [
              "on her deathbed",
              "on his deathbed"
          ],
          "synonyms": [
              "last bed"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "According to the story, Gevher Nesibe Sultan shared her last wish on her deathbed:",
          "category": "Feelings and Life"
      },
      {
          "word": "sick people",
          "definition": "People who are ill.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/sɪk ˈpiːpəl/",
          "wordFamily": [
              "sick",
              "sickness"
          ],
          "collocations": [
              "help sick people",
              "take care of sick people"
          ],
          "synonyms": [
              "ill people"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "Let this hospital help sick people and find cures for bad diseases.",
          "category": "Medicine"
      },
      {
          "word": "cures",
          "definition": "Medicines or ways of treating that make an illness go away.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/kjʊəz/",
          "wordFamily": [
              "cure",
              "cured"
          ],
          "collocations": [
              "find cures",
              "a cure for a disease"
          ],
          "synonyms": [
              "treatments"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "Let this hospital help sick people and find cures for bad diseases.",
          "category": "Medicine"
      },
      {
          "word": "diseases",
          "definition": "Illnesses of the body.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/dɪˈziːzɪz/",
          "wordFamily": [
              "disease",
              "diseased"
          ],
          "collocations": [
              "bad diseases",
              "cures for diseases"
          ],
          "synonyms": [
              "illnesses"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "Let this hospital help sick people and find cures for bad diseases.",
          "category": "Medicine"
      },
      {
          "word": "surgeons",
          "definition": "Doctors who cut into the body to make a sick person better.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈsɜːdʒənz/",
          "wordFamily": [
              "surgeon",
              "surgery"
          ],
          "collocations": [
              "famous surgeons",
              "doctors and surgeons"
          ],
          "synonyms": [
              "operating doctors"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "Let famous doctors and surgeons teach here.",
          "category": "Medicine"
      },
      {
          "word": "free",
          "definition": "Costing no money.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/friː/",
          "wordFamily": [
              "free",
              "freely"
          ],
          "collocations": [
              "free for everyone",
              "completely free"
          ],
          "synonyms": [
              "at no cost"
          ],
          "chapter": 3,
          "chapterTitle": "The Last Wish",
          "storyExample": "This place must be free for everyone.”",
          "category": "Everyday Life"
      },
      {
          "word": "come true",
          "definition": "Happen in real life, just like a wish or a dream.",
          "partOfSpeech": "verb",
          "level": "A2",
          "pronunciation": "/kʌm truː/",
          "wordFamily": [
              "come",
              "true"
          ],
          "collocations": [
              "a wish comes true",
              "make a dream come true"
          ],
          "synonyms": [
              "happen"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "To make his sister’s wish come true, Gıyâseddin Keyhusrev built a medical school (Gıyâsiye Medresesi) and a hospital (Şifâiye).",
          "category": "Actions"
      },
      {
          "word": "healing",
          "definition": "Making a sick or hurt person well again.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈhiːlɪŋ/",
          "wordFamily": [
              "heal",
              "healing",
              "healer"
          ],
          "collocations": [
              "the house of healing",
              "fast healing"
          ],
          "synonyms": [
              "getting well"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "People also called the hospital the Dârüşşifâ, “the house of healing.”",
          "category": "Medicine"
      },
      {
          "word": "grave",
          "definition": "The place in the ground where a dead person lies.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ɡreɪv/",
          "wordFamily": [
              "grave",
              "graveyard"
          ],
          "collocations": [
              "visit a grave",
              "the grave of …"
          ],
          "synonyms": [
              "tomb"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "The grave of Gevher Nesibe Sultan is inside the Gıyâsiye Medresesi.",
          "category": "Buildings"
      },
      {
          "word": "inside",
          "definition": "In a building or room, not outside it.",
          "partOfSpeech": "preposition",
          "level": "A2",
          "pronunciation": "/ɪnˈsaɪd/",
          "wordFamily": [
              "inside",
              "inner"
          ],
          "collocations": [
              "inside the building",
              "go inside"
          ],
          "synonyms": [
              "within"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "The grave of Gevher Nesibe Sultan is inside the Gıyâsiye Medresesi.",
          "category": "Places"
      },
      {
          "word": "Twin",
          "definition": "One of two things that look the same and are next to each other.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/twɪn/",
          "wordFamily": [
              "twin",
              "twins"
          ],
          "collocations": [
              "twin buildings",
              "twin brothers"
          ],
          "synonyms": [
              "matching"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "Because the two buildings are next to each other, people call them the ‘Twin Madrasas.’",
          "category": "Buildings"
      },
      {
          "word": "front gate",
          "definition": "The big main door at the front of a building.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/frʌnt ɡeɪt/",
          "wordFamily": [
              "front",
              "gate"
          ],
          "collocations": [
              "the big front gate",
              "stand at the front gate"
          ],
          "synonyms": [
              "main entrance"
          ],
          "chapter": 4,
          "chapterTitle": "The Twin Madrasas",
          "storyExample": "The words on the big front gate of the hospital say that the building was built in 1205–1206.",
          "category": "Buildings"
      },
      {
          "word": "heating system",
          "definition": "Pipes or machines that make a building warm.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈhiːtɪŋ ˌsɪstəm/",
          "wordFamily": [
              "heat",
              "heating",
              "heater"
          ],
          "collocations": [
              "a heating system under the floor",
              "turn on the heating"
          ],
          "synonyms": [
              "heating"
          ],
          "chapter": 5,
          "chapterTitle": "Learning Beside the Patients",
          "storyExample": "History books show that the buildings had a heating system under the floor.",
          "category": "Buildings"
      },
      {
          "word": "steam",
          "definition": "The hot white cloud that comes from very hot water.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/stiːm/",
          "wordFamily": [
              "steam",
              "steamy"
          ],
          "collocations": [
              "hot steam",
              "steam from a bathhouse"
          ],
          "synonyms": [
              "vapour"
          ],
          "chapter": 5,
          "chapterTitle": "Learning Beside the Patients",
          "storyExample": "It used hot steam from a bathhouse near the school.",
          "category": "Everyday Life"
      },
      {
          "word": "similar to",
          "definition": "Almost the same as something else.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/ˈsɪmələ tuː/",
          "wordFamily": [
              "similar",
              "similarity"
          ],
          "collocations": [
              "very similar to",
              "similar to the team in Sivas"
          ],
          "synonyms": [
              "like"
          ],
          "chapter": 5,
          "chapterTitle": "Learning Beside the Patients",
          "storyExample": "This team was very similar to the team at the Keykâvus Hospital in Sivas.",
          "category": "Describing"
      },
      {
          "word": "close friend",
          "definition": "A very good friend you know well.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/kləʊs frend/",
          "wordFamily": [
              "friend",
              "friendly",
              "friendship"
          ],
          "collocations": [
              "a close friend of …",
              "my close friend"
          ],
          "synonyms": [
              "best friend"
          ],
          "chapter": 6,
          "chapterTitle": "Great Teachers and Books",
          "storyExample": "Another doctor was Mevlânâ’s close friend and personal doctor, Ekmeleddin al-Nahcuvânî.",
          "category": "People"
      },
      {
          "word": "philosophy",
          "definition": "The study of big ideas about life, knowledge and the world.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/fɪˈlɒsəfi/",
          "wordFamily": [
              "philosophy",
              "philosopher"
          ],
          "collocations": [
              "teach philosophy",
              "study philosophy"
          ],
          "synonyms": [
              "thinking about life"
          ],
          "chapter": 6,
          "chapterTitle": "Great Teachers and Books",
          "storyExample": "At the school, these scientists taught philosophy, religion, languages, and how the human body works.",
          "category": "Education"
      },
      {
          "word": "ancient",
          "definition": "Very old; from a time long, long ago.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/ˈeɪnʃənt/",
          "wordFamily": [
              "ancient"
          ],
          "collocations": [
              "ancient Greek doctors",
              "ancient books"
          ],
          "synonyms": [
              "very old"
          ],
          "chapter": 6,
          "chapterTitle": "Great Teachers and Books",
          "storyExample": "They also read books by ancient Greek doctors like Hippocrates.",
          "category": "Describing"
      },
      {
          "word": "patients",
          "definition": "People who get help from a doctor or a hospital.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈpeɪʃənts/",
          "wordFamily": [
              "patient",
              "patients"
          ],
          "collocations": [
              "the patients’ bedside",
              "help patients"
          ],
          "synonyms": [
              "sick people in care"
          ],
          "chapter": 6,
          "chapterTitle": "Great Teachers and Books",
          "storyExample": "For their practice, students learned at the patients’ bedside in the hospital.",
          "category": "Medicine"
      },
      {
          "word": "operations",
          "definition": "Medical work when a doctor cuts into the body to fix a problem inside it.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˌɒpəˈreɪʃənz/",
          "wordFamily": [
              "operate",
              "operation"
          ],
          "collocations": [
              "eye operations",
              "rooms for operations"
          ],
          "synonyms": [
              "surgery"
          ],
          "chapter": 7,
          "chapterTitle": "Inside the Buildings",
          "storyExample": "The Gevher Nesibe Hospital had three rooms for operations, and two surgeons worked there.",
          "category": "Medicine"
      },
      {
          "word": "mental illnesses",
          "definition": "Illnesses of the mind.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈmentəl ˈɪlnəsɪz/",
          "wordFamily": [
              "mind",
              "mental",
              "ill",
              "illness"
          ],
          "collocations": [
              "people with mental illnesses",
              "help mental illnesses"
          ],
          "synonyms": [
              "illnesses of the mind"
          ],
          "chapter": 8,
          "chapterTitle": "Caring for Mind and Body",
          "storyExample": "The center also had a special part for people with mental illnesses, with 18 rooms.",
          "category": "Medicine"
      },
      {
          "word": "round",
          "definition": "Shaped like a circle or a ball.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/raʊnd/",
          "wordFamily": [
              "round"
          ],
          "collocations": [
              "a round roof",
              "round windows"
          ],
          "synonyms": [
              "circular"
          ],
          "chapter": 8,
          "chapterTitle": "Caring for Mind and Body",
          "storyExample": "There was also a bathhouse inside the building, and it had a round roof.",
          "category": "Describing"
      },
      {
          "word": "served",
          "definition": "Worked for people and helped them for a long time.",
          "partOfSpeech": "verb",
          "level": "A2",
          "pronunciation": "/sɜːvd/",
          "wordFamily": [
              "serve",
              "service",
              "servant"
          ],
          "collocations": [
              "served patients",
              "served the city"
          ],
          "synonyms": [
              "helped"
          ],
          "chapter": 9,
          "chapterTitle": "Medical Education at the Dârüşşifâ",
          "storyExample": "The hospital served patients until the early 1900s.",
          "category": "Actions"
      },
      {
          "word": "joy",
          "definition": "A feeling of great happiness.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/dʒɔɪ/",
          "wordFamily": [
              "joy",
              "joyful"
          ],
          "collocations": [
              "give people joy",
              "full of joy"
          ],
          "synonyms": [
              "happiness"
          ],
          "chapter": 10,
          "chapterTitle": "Music Therapy at the Dârüşşifâ",
          "storyExample": "He showed that music gave people joy, fear, or comfort.",
          "category": "Feelings and Life"
      },
      {
          "word": "fear",
          "definition": "The feeling you have when you think something bad will happen.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/fɪə/",
          "wordFamily": [
              "fear",
              "fearful"
          ],
          "collocations": [
              "feel fear",
              "joy, fear, or comfort"
          ],
          "synonyms": [
              "being afraid"
          ],
          "chapter": 10,
          "chapterTitle": "Music Therapy at the Dârüşşifâ",
          "storyExample": "He showed that music gave people joy, fear, or comfort.",
          "category": "Feelings and Life"
      },
      {
          "word": "comfort",
          "definition": "A calm feeling with less worry or pain.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ˈkʌmfət/",
          "wordFamily": [
              "comfort",
              "comfortable"
          ],
          "collocations": [
              "give comfort",
              "find comfort"
          ],
          "synonyms": [
              "calm"
          ],
          "chapter": 10,
          "chapterTitle": "Music Therapy at the Dârüşşifâ",
          "storyExample": "He showed that music gave people joy, fear, or comfort.",
          "category": "Feelings and Life"
      },
      {
          "word": "advanced",
          "definition": "Using new and better ideas or ways than others.",
          "partOfSpeech": "adjective",
          "level": "A2",
          "pronunciation": "/ədˈvɑːnst/",
          "wordFamily": [
              "advance",
              "advanced"
          ],
          "collocations": [
              "more advanced than",
              "an advanced school"
          ],
          "synonyms": [
              "modern"
          ],
          "chapter": 11,
          "chapterTitle": "A Legacy That Lives On",
          "storyExample": "It was more advanced than the first famous medical universities in Europe.",
          "category": "Describing"
      },
      {
          "word": "success",
          "definition": "Doing well and getting a good result.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/səkˈses/",
          "wordFamily": [
              "succeed",
              "success",
              "successful"
          ],
          "collocations": [
              "great success",
              "the success of scientists"
          ],
          "synonyms": [
              "achievement"
          ],
          "chapter": 11,
          "chapterTitle": "A Legacy That Lives On",
          "storyExample": "They show the great success of scientists in the Islamic world.",
          "category": "Education"
      },
      {
          "word": "the love of her life",
          "definition": "The person she loved most in her whole life.",
          "partOfSpeech": "noun",
          "level": "A2",
          "pronunciation": "/ðə lʌv əv hɜː laɪf/",
          "wordFamily": [
              "love",
              "lovely",
              "loved"
          ],
          "collocations": [
              "the love of my life",
              "never married the love of her life"
          ],
          "synonyms": [
              "true love"
          ],
          "chapter": 11,
          "chapterTitle": "A Legacy That Lives On",
          "storyExample": "Gevher Nesibe Sultan never married the love of her life.",
          "category": "Feelings and Life"
      }
  ] },
  { id: 16, type: 'final-challenge', title: 'Final Challenge', image: 'https://picsum.photos/seed/gevhernesibe-a2-final-challenge/1200/800', content: 'Show what you understand from the whole story of the Gevher Nesibe Hospital.' },
];
