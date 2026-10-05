import type { Exercise } from '../../../../types';

/** Adam B2 English Language Focus — Chapters 1–6. */

export const adamB2LanguageFocusExercises: Record<number, Exercise[]> = {
  1: [
    {
      id: 'adam-b2-language-1-source-focus',
      type: 'drag-drop',
      title: 'Source, Focus and Correction',
      instructions: 'Sort each part of the Chapter 1 introduction by what it does.',
      question: 'Does it name the source, put the topic first, or correct an idea?',
      dragDropGroups: [
        {
          group: 'Names the source of the account',
          items: [
            'We learn his story from the Holy Qur\'an.',
            'Based on the Holy Qur\'an, …',
          ],
        },
        {
          group: 'Puts the person or thing affected first (passive)',
          items: [
            'He was created from clay without parents',
            'The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur\'an.',
            'Satan is portrayed as a rebel against Allah’s command',
          ],
        },
        {
          group: 'Rejects or narrows one idea in favour of another',
          items: [
            'a rival and enemy of Adam (pbuh) rather than Allah',
            'not symbolic or imaginary, but it is an original factual tale',
          ],
        },
      ],
      correctAnswer: {
        'Names the source of the account': [
          'We learn his story from the Holy Qur\'an.',
          'Based on the Holy Qur\'an, …',
        ],
        'Puts the person or thing affected first (passive)': [
          'He was created from clay without parents',
          'The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur\'an.',
          'Satan is portrayed as a rebel against Allah’s command',
        ],
        'Rejects or narrows one idea in favour of another': [
          'a rival and enemy of Adam (pbuh) rather than Allah',
          'not symbolic or imaginary, but it is an original factual tale',
        ],
      },
      explanation: 'A careful introduction makes three choices visible. It names where its information comes from (“We learn his story from …”, “Based on …”). It uses the passive (be + past participle) to keep the topic, Adam or his story or Satan, at the front of the sentence, because who does the telling or portraying is already known or less important. And it refines ideas: “not X, but Y” rejects one reading and replaces it, while “X rather than Y” narrows the focus to the more accurate option.',
      feedback: {
        correct: 'Correct. You separated naming a source, choosing the sentence focus with the passive, and correcting or narrowing an idea.',
        incorrect: 'Ask three questions: Does it say where the story comes from? Does it use be + past participle? Does it reject or narrow an idea? Then check both paragraphs of Chapter 1.',
      },
    },
    {
      id: 'adam-b2-language-1-contrast',
      type: 'transformation',
      title: 'Same Meaning, Different Framing',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say these lines about Adam’s story?',
      transformItems: [
        {
          source: 'Adam (pbuh)’s tale is not symbolic or imaginary, but it is an original factual tale with historical correctness and reality …',
          frame: 'Adam (pbuh)’s tale is an original factual tale [blank] symbolic or imaginary.',
          answers: ['rather than', 'rather than being', 'and not', 'not', 'instead of being'],
        },
        {
          source: 'The story of Adam (pbuh) is told in several chapters (surahs) of the Holy Qur\'an.',
          frame: 'The Holy Qur\'an [blank] the story of Adam (pbuh) in several chapters (surahs).',
          answers: ['tells', 'narrates', 'relates', 'recounts'],
        },
        {
          source: 'In these surahs, Satan is portrayed as a rebel against Allah’s command …',
          frame: 'These surahs [blank] Satan as a rebel against Allah’s command.',
          answers: ['portray', 'present', 'depict', 'show'],
        },
      ],
      correctAnswer: null,
      explanation: '“Not symbolic …, but … factual” and “a factual tale rather than a symbolic one” make the same correction; the first rejects before it replaces, the second puts the accepted idea first. The active versions (“The Holy Qur’an tells …”, “These surahs portray …”) are correct, but they move the source to the front. The chapter prefers the passive because its paragraph is about Adam’s story and about Satan, so those stay in subject position.',
      feedback: {
        correct: 'Well done. You kept the claim while changing the framing.',
        incorrect: 'For item 1, use a phrase that puts the accepted idea first and the rejected one after it. For items 2 and 3, make the Qur’an or the surahs the subject and use a present simple verb.',
      },
    },
    {
      id: 'adam-b2-language-1-reformulate',
      type: 'multiple-choice',
      title: 'Keep the Writer’s Distinction',
      instructions: 'Read the sentence. Then choose the summary with the same meaning.',
      question: '“In these surahs, Satan is portrayed as a rebel against Allah’s command but also as a rival and enemy of Adam (pbuh) rather than Allah.” Which summary keeps this meaning?',
      options: [
        'Satan is shown as a rival and enemy of both Allah and Adam in equal measure.',
        'Satan disobeys Allah’s command, but he is shown as the rival and enemy of Adam, not of Allah.',
        'Satan is shown only as Adam’s enemy; the surahs do not mention any disobedience.',
        'Satan is shown as Allah’s rival rather than Adam’s enemy.',
      ],
      correctAnswer: 1,
      explanation: 'The sentence makes two claims. “A rebel against Allah’s command” describes disobedience. “A rival and enemy of Adam (pbuh) rather than Allah” narrows the rivalry: The enemy he competes with is Adam, not Allah. A good summary keeps both claims and does not turn “rather than” into “and”.',
      feedback: {
        correct: 'Correct. The summary keeps the rebellion and keeps the rivalry focused on Adam.',
        incorrect: 'Look closely at “rather than Allah” at the end of the first paragraph of Chapter 1. Whose rival is Satan?',
      },
    },
    {
      id: 'adam-b2-language-1-production',
      type: 'reflection',
      title: 'A Story and Its Source',
      instructions: 'Write 6–8 sentences about a story from history that you know, and say where it comes from.',
      question: 'Can you tell a story and name its source?',
      correctAnswer: null,
      explanation: 'A strong response identifies its source, chooses information focus deliberately and uses contrast to refine meaning rather than simply list facts.',
      feedback: { correct: 'Keep source, focus and certainty visible throughout the paragraph.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Name your source: “According to …, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Put the book or event first: “It was written by …”', mode: 'Individual' },
        { question: 'Sentence 3 — Correct an idea: “It is … rather than …”', mode: 'Individual' },
        { question: 'Sentence 4 — End with a contrast: “Many details …. However, …”', mode: 'Pair' },
      ],
    },
  ],
  2: [
    {
      id: 'adam-b2-language-2-discourse-chain',
      type: 'multiple-choice',
      title: 'What Does “Which” Add?',
      instructions: 'Read the sentence from Chapter 2. Then choose the best answer.',
      question: '“These different expressions are used to describe both the composition and the various stages of mud, which is a mixture of water and soil.” What does “which is a mixture of water and soil” do?',
      options: [
        'It tells us which kind of mud is meant, as opposed to other kinds of mud.',
        'It gives the reason why the verses use different expressions.',
        'It adds a short definition of “mud” for the reader; the sentence is complete without it.',
        'It introduces an example taken from a verse.',
      ],
      correctAnswer: 2,
      explanation: 'A comma before “which” marks a non-defining relative clause: It adds extra information about a noun that is already clear. Here it defines “mud” for readers who may not know how the terms earth, water and clay fit together. Compare the first sentence of the chapter, “The material from which Adam (pbuh) was created …”: there is no comma, because the clause is needed to say which material is meant.',
      feedback: {
        correct: 'Correct. The comma shows extra, defining information about a word that is already clear.',
        incorrect: 'Remove the clause and read the sentence again: Is anything missing? Then compare it with the first sentence of Chapter 2, which has no comma.',
      },
    },
    {
      id: 'adam-b2-language-2-focus-relations',
      type: 'transformation',
      title: 'Where Adam Came From',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we say how Adam was created?',
      transformItems: [
        {
          source: 'The material from which Adam (pbuh) was created is expressed in various verses using different terms …',
          frame: 'The material [blank] is expressed in various verses using different terms.',
          answers: [
            'which Adam (pbuh) was created from',
            'that Adam (pbuh) was created from',
            'Adam (pbuh) was created from',
            'which Adam was created from',
            'that Adam was created from',
            'Adam was created from',
          ],
        },
        {
          source: '… Surah Sad, verse 71, informs that Allah created Adam (pbuh) out of clay, which is a humble material …',
          frame: '… Surah Sad, verse 71, informs that Adam (pbuh) [blank] out of clay by Allah.',
          answers: ['was created'],
        },
      ],
      correctAnswer: null,
      explanation: '“The material from which Adam was created” is formal: The preposition goes before “which”. In less formal English the preposition moves to the end (“the material which/that Adam was created from”), and “which/that” can be left out. In item 2 the passive “Adam was created … by Allah” makes Adam the subject, which suits a chapter whose topic is Adam’s creation.',
      feedback: {
        correct: 'Well done. You kept the meaning while changing the structure.',
        incorrect: 'Item 1: put “from” at the end of the relative clause. Item 2: use was + past participle, because “by Allah” is already in the sentence.',
      },
    },
    {
      id: 'adam-b2-language-2-synthesis',
      type: 'word-bank',
      title: 'Example, Conclusion, Correction',
      instructions: 'Complete the lines from Chapter 2 with words from the bank. Two words are not needed.',
      question: 'Which word gives an example, which sums up, and which corrects?',
      fillBlanksText: '[blank], Surah Sad, verse 71, informs that Allah created Adam (pbuh) out of clay, which is a humble material … [blank], in essence, people are from the same soil and they have no superiority over one another due to the difference in their colors. It is clear that Adam (pbuh) did not evolve from any other living being, [blank] was created from the earth …',
      wordBank: ['As an example', 'So', 'but', 'Otherwise', 'Although'],
      correctAnswer: ['As an example', 'So', 'but'],
      explanation: '“As an example” moves from the general statement about different terms to one specific verse. “So, in essence” draws a conclusion from the hadith: People come from the same soil, so colour gives no one superiority. “did not …, but was …” rejects one idea (evolution from another being) and replaces it with the chapter’s claim.',
      feedback: {
        correct: 'Correct. You linked the general point, the example, the conclusion and the correction.',
        incorrect: 'Ask what each gap does: Introduce a specific case, sum up what follows from the hadith, or replace a rejected idea. Then check the order of the three paragraphs in Chapter 2.',
      },
    },
    {
      id: 'adam-b2-language-2-production',
      type: 'reflection',
      title: 'Build an Evidence-to-Conclusion Paragraph',
      instructions: 'Write 6–8 sentences to explain how something works, with an example and a conclusion.',
      question: 'Can you explain an idea and end with a clear conclusion?',
      correctAnswer: null,
      explanation: 'A strong response introduces the concept, clarifies the descriptions, gives evidence and signals a justified conclusion.',
      feedback: { correct: 'Keep each sentence connected to the evidence–conclusion chain.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what it is: “… is the process that …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what happens to it: “… is heated / carried by …”', mode: 'Individual' },
        { question: 'Sentence 3 — Give an example: “For example, …”', mode: 'Individual' },
        { question: 'Sentence 4 — End with a conclusion: “Therefore, …”', mode: 'Pair' },
      ],
    },
  ],
  3: [
    {
      id: 'adam-b2-language-3-purpose-necessity',
      type: 'drag-drop',
      title: 'Strong Claim or Careful Suggestion?',
      instructions: 'Sort the parts of Chapter 3: a sure meaning or a possible one?',
      question: 'How sure is the writer about each meaning?',
      dragDropGroups: [
        {
          group: 'States the meaning directly',
          items: [
            'Breathing Allah’s spirit into Adam (pbuh) shows the value that Allah gave him.',
            'It also means giving Adam (pbuh) life and the beginning of human existence.',
            'The names refer to the fact that knowledge is the basis of science, technology, and culture.',
          ],
        },
        {
          group: 'Suggests a possible or partial meaning',
          items: [
            'The statement “Allah taught Adam (pbuh) all the names” points to the broadness of Adam (pbuh)’s knowledge.',
            '… could be the fundamental knowledge of being human, thinking, forming logical judgments …',
          ],
        },
      ],
      correctAnswer: {
        'States the meaning directly': [
          'Breathing Allah’s spirit into Adam (pbuh) shows the value that Allah gave him.',
          'It also means giving Adam (pbuh) life and the beginning of human existence.',
          'The names refer to the fact that knowledge is the basis of science, technology, and culture.',
        ],
        'Suggests a possible or partial meaning': [
          'The statement “Allah taught Adam (pbuh) all the names” points to the broadness of Adam (pbuh)’s knowledge.',
          '… could be the fundamental knowledge of being human, thinking, forming logical judgments …',
        ],
      },
      explanation: 'Verbs such as “shows”, “means” and “refer to” present an interpretation as the writer’s direct reading. “Points to” is weaker: The wording indicates something without spelling it out. “Could be” is weaker still: It offers one possible interpretation, not a certain identification. Good B2 readers notice these differences and keep them when they report the text.',
      feedback: {
        correct: 'Correct. You separated direct statements of meaning from careful suggestions.',
        incorrect: 'Look at the verb in each part. Does it state a meaning (shows, means, refer to) or only suggest one (points to, could be)? Check the first and last paragraphs of Chapter 3.',
      },
    },
    {
      id: 'adam-b2-language-3-interpretive-stance',
      type: 'error-correction',
      title: 'Who Was Taught?',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'Can you fix the sentences about Adam being taught?',
      errorItems: [
        {
          sentence: 'Also, he had to taught by Allah.',
          error: 'had to taught',
          options: ['had to be teach', 'had to be taught', 'had to teaching'],
          answer: 1,
        },
        {
          sentence: 'The names teaching to Adam (pbuh) could be the fundamental knowledge of being human, …',
          error: 'teaching',
          options: ['taught', 'teached', 'teach'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: 'Adam receives the teaching, so the verb must be passive. After a modal of necessity, the passive is had to + be + past participle: “he had to be taught by Allah”. After a noun, a past participle can stand for a full passive relative clause: “the names taught to Adam” = “the names which were taught to Adam”. An -ing form would wrongly make the names do the teaching.',
      feedback: {
        correct: 'Well done. Both sentences now show that Adam receives the teaching.',
        incorrect: 'Ask who does the teaching and who receives it. The receiver needs a passive form: be + past participle, or a past participle alone after a noun. Check the first and third paragraphs of Chapter 3.',
      },
    },
    {
      id: 'adam-b2-language-3-evidence-interpretation',
      type: 'multiple-choice',
      title: 'Report the Stance Accurately',
      instructions: 'Choose the summary of Chapter 3’s last paragraph that is just as sure as the writer.',
      question: 'Which summary is not stronger or weaker than the writer’s words?',
      options: [
        'The chapter proves that the names were a complete list of every scientific fact.',
        'The chapter states that the names are certainly the knowledge of thinking and culture, and nothing else.',
        'The chapter suggests that the names may stand for basic human knowledge, such as thinking and producing culture, and links knowledge with science and culture.',
        'The chapter says that it is impossible to know anything about the meaning of the names.',
      ],
      correctAnswer: 2,
      explanation: 'The writer uses “could be” for the exact content of the names, so a summary needs a similar hedge (may, might, suggests). Options that say “proves” or “certainly” overclaim; the option that says nothing can be known underclaims, because the writer does offer an interpretation.',
      feedback: {
        correct: 'Correct. The summary keeps the writer’s careful “could be” stance.',
        incorrect: 'Find “could be” in the last paragraph of Chapter 3. Which summary is neither stronger nor weaker than that?',
      },
    },
    {
      id: 'adam-b2-language-3-production',
      type: 'reflection',
      title: 'Write a Qualified Interpretation',
      instructions: 'Write 7–9 sentences about some evidence and what it might mean.',
      question: 'Can you show how sure you are about what evidence means?',
      correctAnswer: null,
      explanation: 'A strong response moves from evidence to interpretation while making stronger and weaker claims visibly different.',
      feedback: { correct: 'Keep each interpretation proportional to the evidence that supports it.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Give the evidence: “This term, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Say what it shows: “The … shows that …”', mode: 'Individual' },
        { question: 'Sentence 3 — Make a careful point: “… points to …”', mode: 'Individual' },
        { question: 'Sentence 4 — End with a possibility: “This could / may be because …”', mode: 'Pair' },
      ],
    },
  ],
  4: [
    {
      id: 'adam-b2-language-4-contrast-complementarity',
      type: 'true-false',
      title: 'Either/Or or Both?',
      instructions: 'Read the second paragraph of Chapter 4. Is the statement true or false?',
      question: 'The writer presents worldly knowledge and revelation as alternatives: A person needs one or the other.',
      correctAnswer: false,
      explanation: '“Not alternatives …, but rather they complete one another” rejects an either/or reading and replaces it with a both/and reading. The rest of the paragraph gives each type of knowledge its own job, one for worldly life and one for understanding role and duty, so the two are complementary, not competing.',
      feedback: {
        correct: 'Correct. “Not … but rather …” rejects the idea of alternatives.',
        incorrect: 'Look at the word “not” before “alternatives” and at what comes after “but rather”. Then read the next sentence in Chapter 4.',
      },
    },
    {
      id: 'adam-b2-language-4-necessity-purpose',
      type: 'error-correction',
      title: 'What We Need to Do',
      instructions: 'Each sentence has one mistake. Tap it, then choose the correct words.',
      question: 'After “require someone” and “necessary for someone”: “to” + verb or -ing?',
      errorItems: [
        {
          sentence: 'Having such honour and privilege of knowledge required even the angels prostrating themselves before Adam (pbuh).',
          error: 'prostrating',
          options: ['prostrate', 'to prostrate', 'for prostrating'],
          answer: 1,
        },
        {
          sentence: 'One is necessary for mankind maintaining his worldly life, and revelation is essential to understand his role, duty, and the order established by Allah.',
          error: 'maintaining',
          options: ['to maintain', 'maintain', 'to maintaining'],
          answer: 0,
        },
      ],
      correctAnswer: null,
      explanation: '“Require” is followed by a person and a to-infinitive: require someone to do something. “Necessary” and “essential” take for + person + to-infinitive: Necessary for someone to do something. The to-infinitive states what the knowledge makes possible or required.',
      feedback: {
        correct: 'Well done. You used the to-infinitive after require + person and necessary for + person.',
        incorrect: 'Both patterns need to + base verb. Check the middle of the second paragraph of Chapter 4.',
      },
    },
    {
      id: 'adam-b2-language-4-synthesis',
      type: 'word-bank',
      title: 'Introduce the Second Kind of Knowledge',
      instructions: 'Complete the lines from Chapter 4 with words from the bank. Three words are not needed.',
      question: 'Which words bring in the second kind of knowledge?',
      fillBlanksText: '[blank], in the Qur’an, Allah mentions another type of knowledge, [blank] is the revelation (wahy) (see Nisa: 163-165). He delivers it to mankind [blank] the prophets. It is clear that human beings need [blank] types of knowledge.',
      wordBank: ['However', 'which', 'through', 'both', 'Therefore', 'who', 'either'],
      correctAnswer: ['However', 'which', 'through', 'both'],
      explanation: '“However” shifts from the knowledge Allah gave Adam to a different type. “Which is the revelation” identifies that type (which for a thing, not who). “Through the prophets” names the channel. “Both types” includes the two kinds together; “either” would suggest a choice between them, the reading the chapter rejects.',
      feedback: {
        correct: 'Correct. The paragraph now shifts, identifies, names the channel and includes both kinds of knowledge.',
        incorrect: 'Check the opening of the second paragraph of Chapter 4. Remember that the writer does not want readers to choose between the two types of knowledge.',
      },
    },
    {
      id: 'adam-b2-language-4-production',
      type: 'reflection',
      title: 'Write a Complementarity Argument',
      instructions: 'Write 7–9 sentences about two different tools or skills that work well together.',
      question: 'Why do we need both, not just one?',
      correctAnswer: null,
      explanation: 'A strong paragraph states the difference, rejects an either/or framing and explains how the two functions support one larger goal.',
      feedback: { correct: 'Keep the functions distinct and the relationship genuinely complementary.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Say how they differ: “A … gives …. However, a …”', mode: 'Individual' },
        { question: 'Sentence 2 — Correct a wrong idea: “It is not …, but rather …”', mode: 'Individual' },
        { question: 'Sentence 3 — Say why each is needed: “A … is necessary for …”', mode: 'Individual' },
        { question: 'Sentence 4 — End with the shared goal: “Both of them …”', mode: 'Pair' },
      ],
    },
  ],
  5: [
    {
      id: 'adam-b2-language-5-definition-focus',
      type: 'matching',
      title: 'What Does Each Clarification Explain?',
      instructions: 'Match each phrase from Chapter 5 with what it explains.',
      question: 'What does each phrase make clear?',
      matchingHeadings: { left: 'From the chapter', right: 'What it clarifies' },
      matchingPairs: [
        { left: 'which is faith or Islam', right: 'says what “knowledge of the Creator” is' },
        { left: 'in other words, Iblis’', right: 'gives a second name for the same being' },
        { left: 'that is, race, colour, or ethnicity', right: 'lists what the writer means by “origins”' },
        { left: 'All kinds of worldly knowledge are included in this.', right: 'widens a category to cover every field of learning' },
      ],
      correctAnswer: {
        'which is faith or Islam': 'says what “knowledge of the Creator” is',
        'in other words, Iblis’': 'gives a second name for the same being',
        'that is, race, colour, or ethnicity': 'lists what the writer means by “origins”',
        'All kinds of worldly knowledge are included in this.': 'widens a category to cover every field of learning',
      },
      explanation: 'The three markers are close in meaning but do different jobs here. “Which is …” defines the phrase just before it. “In other words” restates a name so the reader can follow who is meant. “That is” makes a broad word (origins) concrete. A separate sentence (“All kinds of … are included in this”) widens the scope of a category.',
      feedback: {
        correct: 'Correct. You linked each clarification to the word or idea it explains.',
        incorrect: 'Find each expression in Chapter 5 and read the words just before it. What is being defined, renamed, listed or widened?',
      },
    },
    {
      id: 'adam-b2-language-5-cause-contrast-focus',
      type: 'transformation',
      title: 'Recombine Cause and Contrast',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we join these ideas from Chapter 5?',
      transformItems: [
        {
          source: 'He underlines his superiority because of the material from which he was created, yet Adam (pbuh)’s humble origin shows that Allah does not focus on origins …',
          frame: '[blank] he underlines his superiority because of the material from which he was created, Adam (pbuh)’s humble origin shows that Allah does not focus on origins.',
          answers: ['Although', 'Even though', 'Though', 'While', 'Whereas'],
        },
        {
          source: 'The prostration of angels to Adam (pbuh) is not a prostration of worship, because such prostration is solely to and for Allah.',
          frame: 'Such prostration is solely to and for Allah; [blank], the prostration of angels to Adam (pbuh) is not a prostration of worship.',
          answers: ['therefore', 'so', 'for this reason', 'as a result', 'consequently', 'hence', 'thus'],
        },
      ],
      correctAnswer: null,
      explanation: '“X, yet Y” and “Although X, Y” express the same contrast, but “although” goes before the point that is conceded. “Y, because X” and “X; therefore, Y” express the same logic in opposite orders: “because” introduces the cause, “therefore” introduces the result.',
      feedback: {
        correct: 'Well done. You kept the logic while changing the linker and the order.',
        incorrect: 'Item 1: the blank starts the clause that is conceded, so use a concession word. Item 2: the cause now comes first, so the blank must introduce a result.',
      },
    },
    {
      id: 'adam-b2-language-5-reformulation',
      type: 'drag-drop',
      title: 'Reason or Contrasting View?',
      instructions: 'Look at the first word of each part. Put it in the right group.',
      question: 'Does it give a reason, or a different view?',
      dragDropGroups: [
        {
          group: 'Gives a reason',
          items: [
            'because such prostration is solely to and for Allah',
            'because the unique knowledge given to Adam (pbuh) is different from the knowledge of the angels that never changes',
            'since all humans ultimately originate from dried mud',
          ],
        },
        {
          group: 'Introduces a contrasting view or evidence against a claim',
          items: [
            'On the other hand, Iblis’ arrogance came from his belief that his origin was superior to Adam (pbuh)’s.',
            'yet Adam (pbuh)’s humble origin shows that Allah does not focus on origins',
          ],
        },
      ],
      correctAnswer: {
        'Gives a reason': [
          'because such prostration is solely to and for Allah',
          'because the unique knowledge given to Adam (pbuh) is different from the knowledge of the angels that never changes',
          'since all humans ultimately originate from dried mud',
        ],
        'Introduces a contrasting view or evidence against a claim': [
          'On the other hand, Iblis’ arrogance came from his belief that his origin was superior to Adam (pbuh)’s.',
          'yet Adam (pbuh)’s humble origin shows that Allah does not focus on origins',
        ],
      },
      explanation: 'The chapter argues as well as narrates. “Because” and “since” justify the writer’s explanations. “On the other hand” turns from the angels’ response to Iblis’ very different attitude, and “yet” sets evidence (Adam’s humble origin) against Iblis’ claim of superiority.',
      feedback: {
        correct: 'Correct. You separated the reasons from the turns in the argument.',
        incorrect: 'Look only at the first word of each part: because, since, on the other hand, yet. Which ones answer “why?” and which ones turn the argument?',
      },
    },
    {
      id: 'adam-b2-language-5-production',
      type: 'reflection',
      title: 'Challenge a Weak Criterion',
      instructions: 'Write or say 6–8 sentences about a weak way to judge people or things.',
      question: 'Why is this a weak way to judge?',
      correctAnswer: null,
      explanation: 'A strong response identifies the criterion precisely, clarifies what it means, explains why someone might use it, and then introduces evidence or reasoning that shows why the criterion is insufficient.',
      feedback: {
        correct: 'Keep the logic visible: clarify → give the reason → shift perspective → challenge the criterion.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Make a word clear: “…, that is, …”', mode: 'Individual' },
        { question: 'Sentence 2 — Give the reason for it: “They trust it because …”', mode: 'Individual' },
        { question: 'Sentence 3 — Give another view: “On the other hand, …”', mode: 'Individual' },
        { question: 'Sentence 4 — Show why it is weak: “Yet …”', mode: 'Pair' },
      ],
    },
  ],
  6: [
    {
      id: 'adam-b2-language-6-command-boundary',
      type: 'matching',
      title: 'Freedom, Limit and Request',
      instructions: 'Match each line from the verses in Chapter 6 with what it does.',
      question: 'What is allowed, what is forbidden, and what is asked for?',
      matchingHeadings: { left: 'From the verses', right: 'What it does' },
      matchingPairs: [
        { left: 'inhabit the Garden, you and your wife', right: 'tells them where to live' },
        { left: 'eat whatever you wish', right: 'gives wide freedom of choice' },
        { left: 'do not approach this tree', right: 'forbids one thing' },
        { left: 'for fear that you become wrongdoers', right: 'warns what will follow disobedience' },
        { left: 'Lord, allow me until the Day they are raised up.', right: 'asks for more time' },
      ],
      correctAnswer: {
        'inhabit the Garden, you and your wife': 'tells them where to live',
        'eat whatever you wish': 'gives wide freedom of choice',
        'do not approach this tree': 'forbids one thing',
        'for fear that you become wrongdoers': 'warns what will follow disobedience',
        'Lord, allow me until the Day they are raised up.': 'asks for more time',
      },
      explanation: 'The imperative can command, permit or forbid. “Inhabit” and “eat whatever you wish” open a wide space of freedom; “do not approach” sets a single limit inside it, and “for fear that …” gives the reason for that limit. Satan’s “allow me until …” is a different speech act: A request for permission with a time limit.',
      feedback: {
        correct: 'Correct. You identified permission, prohibition, warning and request.',
        incorrect: 'Read A’raf 19 and the verses from Surah Sad again in Chapter 6. Which line opens freedom, which one limits it, which one explains the limit, and who asks for something?',
      },
    },
    {
      id: 'adam-b2-language-6-contrast-trajectory',
      type: 'transformation',
      title: 'Two Paths in One Sentence',
      instructions: 'Write the missing words. Keep the same meaning.',
      question: 'How else can we compare Satan’s path and Adam’s?',
      transformItems: [
        {
          source: 'While Satan reached the point of no return by challenging his Creator, Adam (pbuh) took a path completely different from him.',
          frame: 'Satan reached the point of no return by challenging his Creator, [blank] Adam (pbuh) took a path completely different from him.',
          answers: ['whereas', 'while', 'but'],
        },
        {
          source: 'While Satan reached the point of no return by challenging his Creator, …',
          frame: 'Satan reached the point of no return [blank] challenged his Creator.',
          answers: ['because he', 'when he', 'as he', 'since he'],
        },
      ],
      correctAnswer: null,
      explanation: '“While” here means “whereas”: it sets two different paths side by side. It can start the sentence or join the second clause. “By challenging” shows the means by which Satan reached the point of no return; a full clause can express this as a cause or a time (“because / when he challenged …”).',
      feedback: {
        correct: 'Well done. You kept the contrast and the link between action and result.',
        incorrect: 'Item 1: you need a word that contrasts two paths. Item 2: you need a linker plus a subject, because “challenged” is already given.',
      },
    },
    {
      id: 'adam-b2-language-6-future-stance',
      type: 'multiple-choice',
      title: 'What Does “Will” Express Here?',
      instructions: 'Read Satan’s words quoted in Chapter 6. Then choose the best answer.',
      question: 'In “I will surely sit in wait for them … on Your Straight Path” and “By Your majesty, I will deceive them all”, what does “will” express?',
      options: [
        'a prediction based on something the speaker can already see',
        'an offer to help the people he is talking about',
        'a firm intention that the speaker declares, even with an oath',
        'a habit that the speaker had in the past',
      ],
      correctAnswer: 2,
      explanation: '“Will” is not only a neutral future. With “surely” and the oath “By Your majesty”, it states determination: The speaker announces what he intends to do. Repeating it (“I will surely sit …”, “I will come …”, “I will deceive …”) makes the threat sound deliberate and continuous.',
      feedback: {
        correct: 'Correct. “Will” here declares a firm intention.',
        incorrect: 'Look at the words around “will”: “surely” and “By Your majesty”. Is the speaker predicting, offering, or declaring what he is determined to do?',
      },
    },
    {
      id: 'adam-b2-language-6-production',
      type: 'reflection',
      title: 'Write a Contrast with Boundaries and Intentions',
      instructions: 'Write or say 7–9 sentences about two people who choose very different paths.',
      question: 'How are the two paths different?',
      correctAnswer: null,
      explanation: 'A strong response makes the boundary clear, establishes the contrast early, develops each path logically, and uses future forms to communicate intention or commitment rather than merely future time.',
      feedback: {
        correct: 'Keep the discourse structure visible: boundary → contrast → declared intention → parallel development.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Say what is allowed or not: “… are allowed to …, but …”', mode: 'Individual' },
        { question: 'Sentence 2 — Compare the two: “While … is …ing, … is …ing.”', mode: 'Individual' },
        { question: 'Sentence 3 — Show a firm plan: “I will … / I am going to …”', mode: 'Individual' },
        { question: 'Sentence 4 — Repeat a phrase: “Day by day and page by page, …”', mode: 'Pair' },
      ],
    },
  ]
};
