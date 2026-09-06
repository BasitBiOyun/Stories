import type { Exercise } from '../../../../types';

/** Manually authored Mecca/Bilal B1 Chapter 3 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter3: Record<number, Exercise[]> = {
  3: [
    {
      id: 'mecca-b1-language-3-place-and-state',
      type: 'matching',
      title: 'Describing a Place Before Change',
      instructions: 'Match each chapter expression with the job it does in the historical description.',
      question: 'How does the writer describe Mecca before later developments begin?',
      matchingPairs: [
        { left: 'a valley where no crops grow', right: 'adds a defining description to a place with “where”' },
        { left: 'City life began there with the building of the Ka’ba.', right: 'marks the beginning of a new stage through an event' },
        { left: 'There was no population in the land.', right: 'states the situation that existed before settlement' },
      ],
      correctAnswer: {
        'a valley where no crops grow': 'adds a defining description to a place with “where”',
        'City life began there with the building of the Ka’ba.': 'marks the beginning of a new stage through an event',
        'There was no population in the land.': 'states the situation that existed before settlement',
      },
      explanation: 'The chapter combines a place description, an existing state, and a phrase marking the beginning of change.',
      feedback: {
        correct: 'Good. You identified how the text builds the starting situation before later events.',
        incorrect: 'Ask whether each expression describes the place, states an earlier situation, or marks the beginning of change.',
      },
    },
    {
      id: 'mecca-b1-language-3-time-relations',
      type: 'matching',
      title: 'Showing Earlier and Later Past Events',
      instructions: 'Match each time pattern with the relationship it expresses.',
      question: 'How does the chapter help the reader follow events across different points in the past?',
      matchingPairs: [
        { left: 'When Prophet Abraham ... brought ... Hagar to the city, Zamzam water had not been discovered yet.', right: 'shows that one situation was still true before another past event' },
        { left: 'After the discovery of Zamzam water, the Jurhumites ... settled in Mecca.', right: 'places one completed development before the next event' },
        { left: 'Later, when Ishmael ... grew up, Abraham ... came to the city...', right: 'moves the narrative forward to a later stage and gives the time condition for the next event' },
      ],
      correctAnswer: {
        'When Prophet Abraham ... brought ... Hagar to the city, Zamzam water had not been discovered yet.': 'shows that one situation was still true before another past event',
        'After the discovery of Zamzam water, the Jurhumites ... settled in Mecca.': 'places one completed development before the next event',
        'Later, when Ishmael ... grew up, Abraham ... came to the city...': 'moves the narrative forward to a later stage and gives the time condition for the next event',
      },
      explanation: '“Had not been ... yet” looks back to an earlier past state, while “after”, “later” and “when” organise the sequence of later events.',
      feedback: {
        correct: 'Correct. You distinguished an earlier-past state from later narrative steps.',
        incorrect: 'Decide which event or state came first, then check how the time expression shows that relationship.',
      },
    },
    {
      id: 'mecca-b1-language-3-purpose-change',
      type: 'matching',
      title: 'Expressing Purpose and Change',
      instructions: 'Match each expression with its communicative function.',
      question: 'How does the writer explain why an action happened and how later conditions changed?',
      matchingPairs: [
        { left: 'Abraham ... came to the city to reconstruct the Holy Ka’ba with his son.', right: 'uses “to + verb” to state the purpose of an action' },
        { left: 'Arabs accepted the religion of Abraham ... so the Ka’ba became a pilgrimage site.', right: 'uses “so” to connect a preceding situation with its result' },
        { left: 'This helped the city grow rapidly.', right: 'shows how one development supported a continuing change' },
      ],
      correctAnswer: {
        'Abraham ... came to the city to reconstruct the Holy Ka’ba with his son.': 'uses “to + verb” to state the purpose of an action',
        'Arabs accepted the religion of Abraham ... so the Ka’ba became a pilgrimage site.': 'uses “so” to connect a preceding situation with its result',
        'This helped the city grow rapidly.': 'shows how one development supported a continuing change',
      },
      explanation: 'Purpose, result and development are different relationships: “to + verb” answers why an action is done, “so” introduces a result, and “help + object + verb” shows support for change.',
      feedback: {
        correct: 'Good. You separated purpose from result and continuing development.',
        incorrect: 'Ask whether the phrase explains why someone acted, what happened as a result, or what helped a change continue.',
      },
    },
    {
      id: 'mecca-b1-language-3-production',
      type: 'reflection',
      title: 'Explain How a Place Changed Over Time',
      instructions: 'Write or say six connected B1 sentences about a different place that changed over time. Do not retell Chapter 3.',
      question: 'Can you describe the starting place, show an earlier condition, organise two later developments, give one purpose, and explain one result?',
      correctAnswer: null,
      explanation: 'A strong response should form one short historical paragraph. Useful patterns include “a place where...”, “There was/were...”, “had not ... yet”, “after...”, “later, when...”, “to + verb”, “so...”, and “helped ... grow/change”.',
      feedback: {
        correct: 'Keep the time relationships clear and make each sentence move the explanation forward.',
        incorrect: '',
      },
      discussionPrompts: [
        { question: 'Sentence 1 — Describe the place with “where” or another defining phrase.', mode: 'Individual' },
        { question: 'Sentence 2 — State an earlier condition that existed before change.', mode: 'Individual' },
        { question: 'Sentence 3 — Use “after” to introduce the next development.', mode: 'Individual' },
        { question: 'Sentence 4 — Use “later, when...” to move to another stage.', mode: 'Pair' },
        { question: 'Sentence 5 — Explain the purpose of one action with “to + verb”.', mode: 'Pair' },
        { question: 'Sentence 6 — Finish with a result using “so” or “helped ... change”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 4 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter4: Record<number, Exercise[]> = {
  4: [
    {
      id: 'mecca-b1-language-4-succession', type: 'matching', title: 'Following Changes in Control', instructions: 'Match each expression with the historical relationship it shows.', question: 'How does the chapter move from one period of control to another?',
      matchingPairs: [
        { left: 'After Abraham ... completed his mission ... he returned to Palestine.', right: 'marks one completed stage before the next development' },
        { left: 'Later, the Khuza’a tribe came to Mecca ... and took control of the city.', right: 'moves the account forward to a new ruling group' },
        { left: 'Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.', right: 'places another change of control at a later historical point' },
      ],
      correctAnswer: {
        'After Abraham ... completed his mission ... he returned to Palestine.': 'marks one completed stage before the next development',
        'Later, the Khuza’a tribe came to Mecca ... and took control of the city.': 'moves the account forward to a new ruling group',
        'Later, in the 5th century, the Quraysh tribe took over the city and the Ka’ba.': 'places another change of control at a later historical point',
      },
      explanation: '“After” closes one stage, while “later” moves the reader to a new historical period or ruler.',
      feedback: { correct: 'Correct. You identified how the writer organises successive historical stages.', incorrect: 'Look for the expression that closes an earlier stage and the expressions that introduce later ones.' },
    },
    {
      id: 'mecca-b1-language-4-change-and-practice', type: 'matching', title: 'Showing Cultural Change', instructions: 'Match each clause with the type of change it expresses.', question: 'How does the text show a change in religious practice under new rule?',
      matchingPairs: [
        { left: 'Under Khuza’a rule, people forgot the religion of Abraham...', right: 'describes a changed condition during a period of rule' },
        { left: '...and started worshipping many idols.', right: 'shows the beginning of a new practice' },
        { left: 'the Quraysh tribe took over the city and the Ka’ba', right: 'shows a transfer of control to another group' },
      ],
      correctAnswer: {
        'Under Khuza’a rule, people forgot the religion of Abraham...': 'describes a changed condition during a period of rule',
        '...and started worshipping many idols.': 'shows the beginning of a new practice',
        'the Quraysh tribe took over the city and the Ka’ba': 'shows a transfer of control to another group',
      },
      explanation: 'The chapter combines a time frame (“under ... rule”), a change-of-state verb (“forgot”), a beginning verb (“started”), and a transfer expression (“took over”).',
      feedback: { correct: 'Good. You separated changed condition, new practice, and transfer of control.', incorrect: 'Ask whether each expression describes a condition, the start of an action, or a new group taking control.' },
    },
    {
      id: 'mecca-b1-language-4-reason-background', type: 'matching', title: 'Explaining Reasons and Historical Background', instructions: 'Match each expression with its communicative function.', question: 'How does the chapter explain economic choices and the wider historical setting?',
      matchingPairs: [
        { left: 'Because people could not farm in this dry land, they made money through trade.', right: 'connects a limitation with the action people chose instead' },
        { left: 'When Islam began, the Byzantine and Sassanid empires were powerful states.', right: 'sets the historical background at the time another event began' },
        { left: 'They traded with both the north and south of Arabia.', right: 'adds the activity that characterises that wider regional context' },
      ],
      correctAnswer: {
        'Because people could not farm in this dry land, they made money through trade.': 'connects a limitation with the action people chose instead',
        'When Islam began, the Byzantine and Sassanid empires were powerful states.': 'sets the historical background at the time another event began',
        'They traded with both the north and south of Arabia.': 'adds the activity that characterises that wider regional context',
      },
      explanation: '“Because” gives a reason, while “when + past” can anchor a wider background situation at a historical moment.',
      feedback: { correct: 'Correct. You distinguished reason from background and supporting detail.', incorrect: 'Decide whether the sentence explains why, sets the time background, or adds information about that background.' },
    },
    {
      id: 'mecca-b1-language-4-production', type: 'reflection', title: 'Explain a Historical Change', instructions: 'Write or say six connected B1 sentences about a different historical place or community. Do not retell Chapter 4.', question: 'Can you show an earlier stage, a later change of control, one change in practice, one limitation and response, and a wider background situation?', correctAnswer: null,
      explanation: 'A strong response should form one connected paragraph. Useful patterns include “after...”, “later...”, “under ... rule...”, “started + -ing”, “because ... could not..., ...”, and “when ... began, ... was/were ...”.',
      feedback: { correct: 'Keep the sequence clear and make each connector show a real relationship between ideas.', incorrect: '' },
      discussionPrompts: [
        { question: 'Sentence 1 — Close an earlier stage with “after...”.', mode: 'Individual' }, { question: 'Sentence 2 — Introduce a later change with “later...”.', mode: 'Individual' }, { question: 'Sentence 3 — Describe life “under” a new period or authority.', mode: 'Individual' }, { question: 'Sentence 4 — Show a new practice with “started + -ing”.', mode: 'Pair' }, { question: 'Sentence 5 — Use “because ... could not..., ...” to explain an alternative action.', mode: 'Pair' }, { question: 'Sentence 6 — Add wider background with “when ... began, ... was/were ...”.', mode: 'Pair' },
      ],
    },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 5 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter5: Record<number, Exercise[]> = {
  5: [
    { id: 'mecca-b1-language-5-cause-change', type: 'matching', title: 'From Location to Change', instructions: 'Match each expression with the relationship it shows.', question: 'How does the chapter connect Mecca’s position with change over time?', matchingPairs: [
      { left: 'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.', right: 'connects a geographical reason with its result' }, { left: 'From the early 6th century, Mecca became a major trading center.', right: 'places a change from a particular historical period onward' }, { left: 'Hashim ... helped grow Mecca’s economy.', right: 'shows a person contributing to an ongoing development' }], correctAnswer: {
      'Because Mecca was in the middle of important trade routes, it became a busy and wealthy city.': 'connects a geographical reason with its result', 'From the early 6th century, Mecca became a major trading center.': 'places a change from a particular historical period onward', 'Hashim ... helped grow Mecca’s economy.': 'shows a person contributing to an ongoing development' }, explanation: 'The writer combines cause and result with time framing and a contribution expression to explain development rather than list isolated facts.', feedback: { correct: 'Correct. You identified cause, historical change and contribution.', incorrect: 'Ask whether the expression explains why something happened, when a change developed, or who helped that development.' } },
    { id: 'mecca-b1-language-5-enabling', type: 'matching', title: 'Showing What Became Possible', instructions: 'Match each form with what it communicates.', question: 'How does the chapter show that agreements and safer conditions changed what people could do?', matchingPairs: [
      { left: 'These agreements allowed merchants to travel safely and trade...', right: 'shows that an arrangement made an action possible for other people' }, { left: 'The sacred months ... made the region safer.', right: 'shows one condition causing a new state' }, { left: 'more people could visit the city', right: 'shows increased possibility or opportunity' }], correctAnswer: {
      'These agreements allowed merchants to travel safely and trade...': 'shows that an arrangement made an action possible for other people', 'The sacred months ... made the region safer.': 'shows one condition causing a new state', 'more people could visit the city': 'shows increased possibility or opportunity' }, explanation: '“Allow + person + to + verb”, “make + object + adjective”, and “could + verb” all describe different kinds of possibility and effect.', feedback: { correct: 'Good. You distinguished permission/enabling, caused state and possibility.', incorrect: 'Look at who or what changes: a person’s possible action, the condition of a place, or an opportunity.' } },
    { id: 'mecca-b1-language-5-behaviour-purpose', type: 'matching', title: 'Describing Behaviour and Purpose', instructions: 'Match each expression with its function in the paragraph.', question: 'How does the chapter describe behaviour during the sacred months and the purpose of travel?', matchingPairs: [
      { left: 'people focused on worship', right: 'describes what people gave their attention to' }, { left: 'stayed away from fighting', right: 'describes deliberately avoiding an activity' }, { left: 'visit the city to make Hajj', right: 'states the purpose of visiting the city' }], correctAnswer: {
      'people focused on worship': 'describes what people gave their attention to', 'stayed away from fighting': 'describes deliberately avoiding an activity', 'visit the city to make Hajj': 'states the purpose of visiting the city' }, explanation: 'The text uses “focus on”, “stay away from”, and “to + verb” to organise behaviour and purpose clearly.', feedback: { correct: 'Correct. You identified attention, avoidance and purpose.', incorrect: 'Decide whether each phrase tells us what people concentrated on, avoided, or intended to do.' } },
    { id: 'mecca-b1-language-5-production', type: 'reflection', title: 'Explain How Conditions Create Opportunity', instructions: 'Write or say six connected B1 sentences about a different place, event or community. Do not retell Chapter 5.', question: 'Can you explain a reason, a change over time, an agreement or rule, a safer/easier condition, what people could then do, and their purpose?', correctAnswer: null, explanation: 'A strong response should form one connected paragraph using relationships such as “because...”, “from...”, “allowed ... to...”, “made ... safer/easier”, “could...”, and “to + verb” for purpose.', feedback: { correct: 'Keep the paragraph connected and make every language choice express a clear relationship.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Give a reason with “because...”.', mode: 'Individual' }, { question: 'Sentence 2 — Show a change beginning from a particular time.', mode: 'Individual' }, { question: 'Sentence 3 — Describe an agreement, rule or action that “allowed” people to do something.', mode: 'Individual' }, { question: 'Sentence 4 — Show how it “made” a place or situation safer, easier or more open.', mode: 'Pair' }, { question: 'Sentence 5 — Explain what people “could” do as a result.', mode: 'Pair' }, { question: 'Sentence 6 — Finish with “to + verb” to state their purpose.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 6 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter6: Record<number, Exercise[]> = {
  6: [
    { id: 'mecca-b1-language-6-continuation', type: 'matching', title: 'Showing Continued Activity', instructions: 'Match each expression with the meaning relationship it creates.', question: 'How does the chapter describe activities that continued over time and their effect on the city?', matchingPairs: [
      { left: 'idol worshippers continued to visit and walk around the Ka’ba', right: 'shows an activity continuing over a period of time' }, { left: 'These practices kept Mecca active during the pilgrimage season.', right: 'shows an activity maintaining a continuing state' }, { left: 'This religious activity also helped business grow quickly.', right: 'shows one activity contributing to a wider development' }], correctAnswer: {
      'idol worshippers continued to visit and walk around the Ka’ba': 'shows an activity continuing over a period of time', 'These practices kept Mecca active during the pilgrimage season.': 'shows an activity maintaining a continuing state', 'This religious activity also helped business grow quickly.': 'shows one activity contributing to a wider development' }, explanation: 'The chapter uses “continue to”, “keep + object + adjective”, and “help + object + verb” to describe continuity, maintained conditions and contribution to change.', feedback: { correct: 'Correct. You distinguished continuing action, maintained state and contribution.', incorrect: 'Ask whether the expression tells us that an action continued, a condition stayed active, or one activity supported another development.' } },
    { id: 'mecca-b1-language-6-sequence-background', type: 'matching', title: 'Organising Historical Events', instructions: 'Match each expression with its function in the narrative.', question: 'How does the writer organise recurring activity, sequence and historical background?', matchingPairs: [
      { left: 'People attended these fairs first and then went to Arafat.', right: 'orders two actions clearly in sequence' }, { left: 'At the beginning of the 7th century...', right: 'places the description inside a historical time frame' }, { left: 'The Quraysh tribe controlled the most important trade routes and wealth in Arabia.', right: 'describes an established situation at that time' }], correctAnswer: {
      'People attended these fairs first and then went to Arafat.': 'orders two actions clearly in sequence', 'At the beginning of the 7th century...': 'places the description inside a historical time frame', 'The Quraysh tribe controlled the most important trade routes and wealth in Arabia.': 'describes an established situation at that time' }, explanation: '“First ... then ...” sequences actions, while a time frame plus past simple can establish the historical situation in which later effects are explained.', feedback: { correct: 'Good. You identified sequence and historical framing.', incorrect: 'Look for the phrase that orders actions, the phrase that sets the time, and the sentence that states the situation within that time.' } },
    { id: 'mecca-b1-language-6-result-comparison', type: 'matching', title: 'Explaining Unequal Change', instructions: 'Match each expression with what it communicates.', question: 'How does the final paragraph show a practice, its consequence and opposite changes for two groups?', matchingPairs: [
      { left: 'lending money with usury was widespread', right: 'describes a practice as common across the city' }, { left: 'This made the rich richer', right: 'shows one practice causing an increase in a group’s condition' }, { left: 'and the poor poorer', right: 'shows the opposite group changing in a more negative direction' }], correctAnswer: {
      'lending money with usury was widespread': 'describes a practice as common across the city', 'This made the rich richer': 'shows one practice causing an increase in a group’s condition', 'and the poor poorer': 'shows the opposite group changing in a more negative direction' }, explanation: 'The text combines a statement of prevalence with “make + object + comparative” to show how one system can push two groups in opposite directions.', feedback: { correct: 'Correct. You identified prevalence, cause and contrasting change.', incorrect: 'Decide which phrase tells us the practice was common and which phrases show how the two groups changed differently.' } },
    { id: 'mecca-b1-language-6-production', type: 'reflection', title: 'Explain a System and Its Effects', instructions: 'Write or say six connected B1 sentences about a different event, school, community or economic situation. Do not retell Chapter 6.', question: 'Can you describe a continuing activity, organise two actions in sequence, set a time frame, explain a widespread practice and show how it affected two groups differently?', correctAnswer: null, explanation: 'A strong response should form one connected paragraph using language such as “continued to...”, “kept...”, “first... then...”, a historical or situational time frame, “was widespread”, and “made ... more/less ...” or another clear cause-and-result comparison.', feedback: { correct: 'Keep the paragraph connected and make each form express a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe an activity that “continued to” happen.', mode: 'Individual' }, { question: 'Sentence 2 — Explain what that activity “kept” active, busy, open or connected.', mode: 'Individual' }, { question: 'Sentence 3 — Order two related actions with “first ... then ...”.', mode: 'Individual' }, { question: 'Sentence 4 — Set a clear time frame for the situation.', mode: 'Pair' }, { question: 'Sentence 5 — Describe one practice as common or widespread.', mode: 'Pair' }, { question: 'Sentence 6 — Show how that practice affected two groups differently.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 7 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter7: Record<number, Exercise[]> = {
  7: [
    { id: 'mecca-b1-language-7-cause-inability', type: 'matching', title: 'Explaining Cause and Inability', instructions: 'Match each expression with the relationship it creates.', question: 'How does the chapter explain why debt became difficult to escape?', matchingPairs: [
      { left: 'Many people were in debt and could not pay back their debts', right: 'describes inability in a difficult situation' }, { left: 'because of high interest', right: 'gives the cause of that difficulty' }, { left: 'these habits often pushed people deeper into debt', right: 'shows an action or habit causing a worse result' }], correctAnswer: {
      'Many people were in debt and could not pay back their debts': 'describes inability in a difficult situation', 'because of high interest': 'gives the cause of that difficulty', 'these habits often pushed people deeper into debt': 'shows an action or habit causing a worse result' }, explanation: 'The text combines “could not + verb”, “because of + noun” and “push + object + into...” to explain limitation, cause and worsening consequence.', feedback: { correct: 'Correct. You identified inability, cause and worsening result.', incorrect: 'Ask which phrase shows inability, which names the cause, and which shows the situation becoming worse.' } },
    { id: 'mecca-b1-language-7-contrast', type: 'matching', title: 'Contrasting Two Social Realities', instructions: 'Match each expression with its discourse function.', question: 'How does the writer place two very different living conditions side by side?', matchingPairs: [
      { left: 'While the rich lived in luxury...', right: 'opens one side of a simultaneous contrast' }, { left: 'the poor struggled to survive.', right: 'presents the contrasting condition of another group' }, { left: 'with gold plates and silver cups', right: 'adds concrete detail that strengthens the contrast' }], correctAnswer: {
      'While the rich lived in luxury...': 'opens one side of a simultaneous contrast', 'the poor struggled to survive.': 'presents the contrasting condition of another group', 'with gold plates and silver cups': 'adds concrete detail that strengthens the contrast' }, explanation: '“While” can contrast two conditions happening in the same society, and concrete details make the difference clearer without needing another factual question.', feedback: { correct: 'Good. You identified contrast and supporting detail.', incorrect: 'Look for the connector that sets up contrast, the opposite condition, and the detail that makes the difference vivid.' } },
    { id: 'mecca-b1-language-7-values-reported-view', type: 'matching', title: 'Showing Values and Reported Objections', instructions: 'Match each expression with what it communicates.', question: 'How does the chapter show what powerful people valued and how some reacted to Muhammad’s call?', matchingPairs: [
      { left: 'money and tribe were the most important values', right: 'states the priorities a group placed above others' }, { left: 'When Prophet Muhammad started calling people to Islam...', right: 'sets the time and situation for the reaction that follows' }, { left: 'some rich leaders asked why Muhammad should be the leader', right: 'reports an objection or viewpoint rather than stating it as the writer’s own position' }], correctAnswer: {
      'money and tribe were the most important values': 'states the priorities a group placed above others', 'When Prophet Muhammad started calling people to Islam...': 'sets the time and situation for the reaction that follows', 'some rich leaders asked why Muhammad should be the leader': 'reports an objection or viewpoint rather than stating it as the writer’s own position' }, explanation: 'The chapter moves from group priorities to a time frame and then to reported viewpoint. This helps distinguish description from the attitudes attributed to historical actors.', feedback: { correct: 'Correct. You separated values, time framing and reported viewpoint.', incorrect: 'Decide which expression names priorities, which sets the moment, and which reports what another group questioned.' } },
    { id: 'mecca-b1-language-7-production', type: 'reflection', title: 'Describe Inequality Without Retelling the Story', instructions: 'Write or say six connected B1 sentences about a different school, workplace or community situation. Do not retell Chapter 7.', question: 'Can you explain a cause, describe inability, contrast two groups, state a group’s priorities and report one person’s objection?', correctAnswer: null, explanation: 'A strong response should connect ideas with language such as “because of...”, “could not...”, “while...”, “the most important...”, “when...”, and “asked why...” or a natural equivalent.', feedback: { correct: 'Keep the paragraph connected and use each form to express a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a difficult situation.', mode: 'Individual' }, { question: 'Sentence 2 — Explain one cause with “because of...”.', mode: 'Individual' }, { question: 'Sentence 3 — Show what one group could not do.', mode: 'Individual' }, { question: 'Sentence 4 — Contrast two groups with “while...”.', mode: 'Pair' }, { question: 'Sentence 5 — State what one group considered most important.', mode: 'Pair' }, { question: 'Sentence 6 — Report an objection with “asked why...”.', mode: 'Pair' } ] },
  ],
};

/** Manually authored Mecca/Bilal B1 Chapter 8 Language Focus from the English story text. */
export const meccaB1LanguageFocusChapter8: Record<number, Exercise[]> = {
  8: [
    { id: 'mecca-b1-language-8-cause-purpose', type: 'matching', title: 'Cause, Result and Purpose', instructions: 'Match each expression with the relationship it creates.', question: 'How does the chapter explain why strength and sons mattered in tribal life?', matchingPairs: [
      { left: 'Life in the desert was very hard, so physical strength was extremely important.', right: 'connects a difficult condition to its result' }, { left: 'Men were often seen as valuable because they were fighters in wars.', right: 'gives a reason for a social judgement' }, { left: 'To earn respect from other tribes, families wanted to have many sons.', right: 'expresses the purpose behind an action or preference' }], correctAnswer: {
      'Life in the desert was very hard, so physical strength was extremely important.': 'connects a difficult condition to its result', 'Men were often seen as valuable because they were fighters in wars.': 'gives a reason for a social judgement', 'To earn respect from other tribes, families wanted to have many sons.': 'expresses the purpose behind an action or preference' }, explanation: 'The chapter uses “so” for result, “because” for reason and “to + verb” for purpose. These forms explain relationships rather than simply list facts.', feedback: { correct: 'Correct. You identified result, reason and purpose.', incorrect: 'Ask which sentence gives a result, which explains why, and which tells the purpose of an action.' } },
    { id: 'mecca-b1-language-8-protection', type: 'matching', title: 'Describing Protection and Its Absence', instructions: 'Match each expression with what it communicates.', question: 'How does the writer describe what happens when tribal protection is missing?', matchingPairs: [
      { left: 'Without a tribe', right: 'sets a condition in which an important support is absent' }, { left: 'people could not easily protect their lives or property', right: 'shows limited ability in that condition' }, { left: 'A person outside tribal protection was in great danger.', right: 'describes the resulting state or risk' }], correctAnswer: {
      'Without a tribe': 'sets a condition in which an important support is absent', 'people could not easily protect their lives or property': 'shows limited ability in that condition', 'A person outside tribal protection was in great danger.': 'describes the resulting state or risk' }, explanation: '“Without...” introduces an absent condition, “could not...” expresses limited ability, and the following clause describes the danger that results.', feedback: { correct: 'Good. You traced condition, limited ability and resulting danger.', incorrect: 'Separate the missing condition from the inability and the final state.' } },
    { id: 'mecca-b1-language-8-obligation-concession', type: 'matching', title: 'Obligation and “Even When”', instructions: 'Match each expression with its function in the sentence.', question: 'How does the chapter present strong tribal expectations?', matchingPairs: [
      { left: 'They had to protect and honor their tribe', right: 'expresses a strong social obligation' }, { left: 'in every situation', right: 'shows that the expectation was presented as general and continuing' }, { left: 'even when the tribe did something wrong', right: 'adds a contrasting situation that does not cancel the obligation' }], correctAnswer: {
      'They had to protect and honor their tribe': 'expresses a strong social obligation', 'in every situation': 'shows that the expectation was presented as general and continuing', 'even when the tribe did something wrong': 'adds a contrasting situation that does not cancel the obligation' }, explanation: '“Had to” marks obligation, while “even when” introduces a situation that would normally challenge or limit that obligation. The activity focuses on how the language works rather than asking the chapter’s moral-comprehension question again.', feedback: { correct: 'Correct. You identified obligation, scope and concession.', incorrect: 'Find the phrase of necessity, the phrase showing broad scope, and the phrase introducing an unexpected contrast.' } },
    { id: 'mecca-b1-language-8-production', type: 'reflection', title: 'Explain Rules, Support and Consequences', instructions: 'Write or say six connected B1 sentences about a different group, team, club or community. Do not retell Chapter 8.', question: 'Can you explain a difficult condition, give a reason and a purpose, show what people could not do without support, and describe one strong obligation with “even when”?', correctAnswer: null, explanation: 'A strong response should use connected language such as “so”, “because”, “to + verb”, “without...”, “could not...”, “had to...” and “even when...” where they fit naturally.', feedback: { correct: 'Keep the six sentences connected so each structure expresses a real relationship between ideas.', incorrect: '' }, discussionPrompts: [
      { question: 'Sentence 1 — Describe a difficult condition.', mode: 'Individual' }, { question: 'Sentence 2 — Give one result with “so”.', mode: 'Individual' }, { question: 'Sentence 3 — Explain a reason with “because”.', mode: 'Individual' }, { question: 'Sentence 4 — State a purpose with “to + verb”.', mode: 'Pair' }, { question: 'Sentence 5 — Explain what people could not do without one kind of support.', mode: 'Pair' }, { question: 'Sentence 6 — State one obligation and add an “even when” contrast.', mode: 'Pair' } ] },
  ],
};
