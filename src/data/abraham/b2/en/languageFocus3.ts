import type { Exercise } from '../../../../types';

export const abrahamB2LanguageFocusChapter19: Record<number, Exercise[]> = {
  19: [
    {
      id: 'abraham-b2-language-19-voice-condition',
      type: 'matching',
      title: 'Track Voice, Challenge and Condition',
      instructions: 'Match each expression with the discourse function it performs in the public exchange.',
      question: 'How do direct speech and conditional language turn the confrontation into a test of the people’s own assumptions?',
      matchingPairs: [
        { left: 'Are you the one who did this to our gods, O Abraham?', right: 'opens the public accusation through direct questioning' },
        { left: 'But it was this biggest of them that did it.', right: 'uses corrective contrast to redirect attention toward the surviving idol' },
        { left: 'Ask them, if they can speak.', right: 'sets a conditional test whose logic depends on the idols’ supposed ability' },
        { left: 'You certainly know that these do not speak.', right: 'states the people’s own admission and makes the contradiction explicit' },
      ],
      correctAnswer: {
        'Are you the one who did this to our gods, O Abraham?': 'opens the public accusation through direct questioning',
        'But it was this biggest of them that did it.': 'uses corrective contrast to redirect attention toward the surviving idol',
        'Ask them, if they can speak.': 'sets a conditional test whose logic depends on the idols’ supposed ability',
        'You certainly know that these do not speak.': 'states the people’s own admission and makes the contradiction explicit',
      },
      explanation: 'The exchange develops through accusation, corrective redirection, a conditional test, and finally an explicit admission. The grammar serves the argument rather than merely reporting events.',
      feedback: { correct: 'Correct. You followed how the dialogue itself creates the logical test.', incorrect: 'Look for accusation, redirection, the condition introduced by “if”, and the people’s own admission.' },
    },
    {
      id: 'abraham-b2-language-19-reversal-purpose', type: 'matching', title: 'Read Reversal and Intended Purpose',
      instructions: 'Match each phrase with the relationship it creates in the discourse.',
      question: 'Which forms show temporary recognition, reversal, and deliberate purpose?',
      matchingPairs: [
        { left: 'Then they turned to one another...', right: 'marks a moment of inward reconsideration after the conditional test' },
        { left: 'You yourselves are the wrongdoers.', right: 'expresses a temporary self-correction in the group’s judgment' },
        { left: 'But they reverted to their old ideas...', right: 'signals reversal from recognition back to the previous position' },
        { left: '...so that he could demonstrate to them in public...', right: 'states the intended purpose of accepting the public confrontation' },
      ],
      correctAnswer: {
        'Then they turned to one another...': 'marks a moment of inward reconsideration after the conditional test',
        'You yourselves are the wrongdoers.': 'expresses a temporary self-correction in the group’s judgment',
        'But they reverted to their old ideas...': 'signals reversal from recognition back to the previous position',
        '...so that he could demonstrate to them in public...': 'states the intended purpose of accepting the public confrontation',
      },
      explanation: 'The paragraph briefly moves toward recognition, then reverses through “but”. The purpose clause explains why Abraham does not resist the public trial: the event becomes an opportunity for demonstration.',
      feedback: { correct: 'Correct. You distinguished reconsideration, reversal and purpose.', incorrect: 'Track where the group changes direction, then where “but” reverses that movement and “so that” explains purpose.' },
    },
    {
      id: 'abraham-b2-language-19-discourse-sequence', type: 'multiple-choice', title: 'Reconstruct the Argumentative Sequence',
      instructions: 'Choose the sequence that best reflects how the chapter’s language develops the confrontation.',
      question: 'Which discourse sequence best captures the chapter’s progression without turning it into a simple comprehension retelling?',
      options: [
        'Public accusation → corrective redirection → conditional test → temporary self-recognition → reversal → rhetorical challenge → public demonstration',
        'Private reflection → unrelated quotation → punishment → apology → agreement',
        'Narrator certainty → historical qualification → future prediction → comparison',
      ],
      correctAnswer: 0,
      explanation: 'The language moves through a tightly organized public argument. Each step changes the stance or logical pressure of the exchange rather than merely adding another event.',
      feedback: { correct: 'Correct. You identified the chapter’s discourse architecture.', incorrect: 'Follow how each speech move increases pressure on the contradiction before the public demonstration.' },
    },
    {
      id: 'abraham-b2-language-19-production', type: 'reflection', title: 'Build a Public Contradiction Test',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a public claim is tested. Begin with a direct accusation or challenge, use a corrective contrast such as “but”, introduce a conditional test with “if”, show a brief moment of self-correction, then reverse that movement with a contrast marker. Include a purpose clause with “so that” and end with a rhetorical question that exposes the contradiction. Do not retell the Abraham story.',
      question: 'Can you use dialogue, condition, reversal and purpose to build a coherent B2 argument?', correctAnswer: null,
      explanation: 'A strong response should make the language do argumentative work: the condition tests the claim, the reversal shows a change in stance, the purpose clause explains the speaker’s strategy, and the final rhetorical question crystallizes the contradiction.',
      feedback: { correct: 'Check that every connector changes the relationship between ideas and that the final question is rhetorical, not a request for unknown information.', incorrect: '' },
      discussionPrompts: [
        { question: 'Challenge — What direct question opens the confrontation?', mode: 'Individual' },
        { question: 'Condition — What “if” test forces the claim to face its own logic?', mode: 'Pair' },
        { question: 'Reversal — Where does the audience briefly reconsider, and what contrast marker shows that they reverse course?', mode: 'Pair' },
        { question: 'Purpose — Why does the speaker continue the public exchange, and how will “so that” express that?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter20: Record<number, Exercise[]> = {
  20: [
    {
      id: 'abraham-b2-language-20-inference-contrast', type: 'matching', title: 'Track Inference, Recognition and Resistance',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the language move from logical inference to recognition, then to refusal to admit the conclusion?',
      matchingPairs: [
        { left: 'it must be the culprit', right: 'expresses a strong inference presented as the unavoidable conclusion of the test' },
        { left: 'In fact, they realized the stupidity of their beliefs', right: 'states the narrator’s explicit evaluation of their internal recognition' },
        { left: 'however, their arrogance would not allow them to admit their foolishness', right: 'uses concession and past modal language to contrast recognition with refusal' },
        { left: 'They had no answer for Abraham', right: 'marks the collapse of their argumentative response before the move to coercion' },
      ],
      correctAnswer: {
        'it must be the culprit': 'expresses a strong inference presented as the unavoidable conclusion of the test',
        'In fact, they realized the stupidity of their beliefs': 'states the narrator’s explicit evaluation of their internal recognition',
        'however, their arrogance would not allow them to admit their foolishness': 'uses concession and past modal language to contrast recognition with refusal',
        'They had no answer for Abraham': 'marks the collapse of their argumentative response before the move to coercion',
      },
      explanation: 'The paragraph does more than report events. It first presents an inference, then an explicit recognition, and finally a contrast between recognizing a conclusion and being willing to admit it.',
      feedback: { correct: 'Correct. You distinguished inference, recognition, concession and refusal.', incorrect: 'Look for the strength of “must”, the evaluative role of “In fact”, and the reversal introduced by “however”.' },
    },
    {
      id: 'abraham-b2-language-20-limitation-authority', type: 'matching', title: 'Read Limitation, Decision and Authority',
      instructions: 'Match each form with the kind of control or narrowing it expresses.',
      question: 'Which structures show that argument is replaced by limited options, collective decision and imposed authority?',
      matchingPairs: [
        { left: 'All they could do was use their authority as tyrants', right: 'narrows the group’s response to one coercive option after argument fails' },
        { left: 'They agreed that Abraham should be burned alive', right: 'reports a collective decision using “should” inside a that-clause' },
        { left: 'They decided to throw Abraham into the biggest fire they could build', right: 'uses “decided to” to move from judgment to planned action' },
        { left: 'All the citizens were ordered to gather wood', right: 'uses passive voice to foreground the imposed command rather than the individual commander' },
      ],
      correctAnswer: {
        'All they could do was use their authority as tyrants': 'narrows the group’s response to one coercive option after argument fails',
        'They agreed that Abraham should be burned alive': 'reports a collective decision using “should” inside a that-clause',
        'They decided to throw Abraham into the biggest fire they could build': 'uses “decided to” to move from judgment to planned action',
        'All the citizens were ordered to gather wood': 'uses passive voice to foreground the imposed command rather than the individual commander',
      },
      explanation: 'The language shifts from debate to institutional action. Limitation, reported decision, infinitive planning and passive command together build a discourse of coercive authority.',
      feedback: { correct: 'Correct. You tracked how grammar marks narrowing, planning and imposed authority.', incorrect: 'Focus on “could do”, “agreed that”, “decided to”, and the passive form “were ordered”.' },
    },
    {
      id: 'abraham-b2-language-20-preparation-purpose', type: 'multiple-choice', title: 'Reconstruct the Preparation Chain',
      instructions: 'Choose the sequence that best represents how the chapter’s language organizes the punishment plan.',
      question: 'Which discourse chain best reflects the movement from decision to organized preparation?',
      options: [
        'Recognition but refusal → coercive decision → passive public order → repeated preparation over several days → pit and fuel → catapult for the intended action → Abraham placed and restrained',
        'Historical uncertainty → source qualification → comparison of traditions → private reflection',
        'Request for information → apology → negotiated compromise → cancellation of the punishment',
      ], correctAnswer: 0,
      explanation: 'The chapter organizes the punishment as an escalating preparation sequence. Passive command and purpose language help show how individual anger becomes collective, organized action.',
      feedback: { correct: 'Correct. You identified the chapter’s decision-to-preparation discourse architecture.', incorrect: 'Follow the movement from the decision, through public orders and preparation, to the catapult and restraint.' },
    },
    {
      id: 'abraham-b2-language-20-production', type: 'reflection', title: 'Write Recognition Without Admission',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a group recognizes that an argument is weak but refuses to admit it. Use “must” for a strong inference, “in fact” to state recognition, “however” to mark resistance, and a narrowing structure such as “all they could do was...”. Then report a collective decision with “agreed that” or “decided to”, include one passive command, and finish with a purpose phrase such as “to...” or “for...”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph in which inference, concession, authority and purpose each perform a different discourse function?', correctAnswer: null,
      explanation: 'A strong response should clearly separate what the group recognizes from what it is willing to admit, then show how the language shifts from reasoning to authority and organized action.',
      feedback: { correct: 'Check that “must” signals inference, “however” creates a genuine reversal, the passive hides or backgrounds the commander, and the final purpose expression explains the action.', incorrect: '' },
      discussionPrompts: [
        { question: 'Inference — What conclusion “must” follow from the evidence?', mode: 'Individual' },
        { question: 'Concession — What does the group recognize, and what does “however” show it refuses to admit?', mode: 'Pair' },
        { question: 'Authority — What is the only response left, and how will you report the decision?', mode: 'Pair' },
        { question: 'Purpose — What action is ordered, and for what intended purpose?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter21: Record<number, Exercise[]> = {
  21: [
    {
      id: 'abraham-b2-language-21-contrast-cause', type: 'matching', title: 'Track Contrast and Cause',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the paragraph contrast what remains visible with what changes, and how does it explain the reason?',
      matchingPairs: [
        { left: 'But his fall into the fire was like going down into a cool garden', right: 'reframes an expected danger as an unexpectedly safe experience' },
        { left: 'The rising flames were still there, but they did not burn him', right: 'contrasts unchanged appearance with changed effect' },
        { left: 'for Allah commanded...', right: 'introduces the stated cause for the surprising result' },
        { left: 'It only burned his ropes', right: 'uses “only” to restrict the fire’s effect to one limited outcome' },
      ],
      correctAnswer: {
        'But his fall into the fire was like going down into a cool garden': 'reframes an expected danger as an unexpectedly safe experience',
        'The rising flames were still there, but they did not burn him': 'contrasts unchanged appearance with changed effect',
        'for Allah commanded...': 'introduces the stated cause for the surprising result',
        'It only burned his ropes': 'uses “only” to restrict the fire’s effect to one limited outcome',
      },
      explanation: 'The chapter repeatedly separates appearance from effect. “But” creates reversal, “for” gives the reason, and “only” narrows the result.',
      feedback: { correct: 'Correct. You tracked reversal, cause and restriction.', incorrect: 'Look at what “but”, “for”, and “only” contribute beyond the events themselves.' },
    },
    {
      id: 'abraham-b2-language-21-passive-change', type: 'matching', title: 'Follow Event Focus and State Change',
      instructions: 'Match each form with the way it organizes information.',
      question: 'Which structures foreground the event or the resulting state rather than the human actor?',
      matchingPairs: [
        { left: 'Abraham was thrown into the fire', right: 'uses passive voice to foreground Abraham and the event rather than the people who launched the catapult' },
        { left: 'The catapult was shot', right: 'uses passive voice to foreground the action at the turning point of the narrative' },
        { left: 'It became cool and safe for Abraham', right: 'presents a change from one state to another' },
        { left: 'the fire was turned into coolness', right: 'uses passive change-of-state language to foreground the resulting condition' },
      ],
      correctAnswer: {
        'Abraham was thrown into the fire': 'uses passive voice to foreground Abraham and the event rather than the people who launched the catapult',
        'The catapult was shot': 'uses passive voice to foreground the action at the turning point of the narrative',
        'It became cool and safe for Abraham': 'presents a change from one state to another',
        'the fire was turned into coolness': 'uses passive change-of-state language to foreground the resulting condition',
      },
      explanation: 'Passive forms shift attention away from the human agent, while “became” and “was turned into” organize the paragraph around transformation and result.',
      feedback: { correct: 'Correct. You distinguished event focus from change-of-state language.', incorrect: 'Ask what information is foregrounded in each passive and what new state is created.' },
    },
    {
      id: 'abraham-b2-language-21-comparison', type: 'multiple-choice', title: 'Interpret the Comparison',
      instructions: 'Choose the interpretation that best explains the function of “as if”.',
      question: 'What does “he sat in the middle of the fire as if he were sitting in a garden” do in the discourse?',
      options: [
        'It marks a comparison between the actual location and the experience it resembled, using an unreal comparison to emphasize the contrast.',
        'It states literally that the fire had physically become a garden with trees and plants.',
        'It introduces uncertainty about whether Abraham was really in the fire at all.',
      ], correctAnswer: 0,
      explanation: '“As if he were...” creates an unreal or counterfactual comparison. The location remains the fire, but the experience is compared with sitting safely in a garden.',
      feedback: { correct: 'Correct. The comparison intensifies the contrast without changing the literal location.', incorrect: 'Separate the literal event from the comparison used to describe its effect.' },
    },
    {
      id: 'abraham-b2-language-21-production', type: 'reflection', title: 'Write Appearance Versus Effect',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which something still looks dangerous, difficult, or negative but its actual effect changes. Use “but” for a genuine reversal, one passive sentence to foreground an event, “for” or “because” to explain a cause, “only” to restrict an effect, one “as if” comparison, and one change-of-state form such as “became” or “was turned into”. Do not retell the Abraham story.',
      question: 'Can you build a coherent B2 paragraph that separates appearance, cause, limited effect, comparison and resulting state?', correctAnswer: null,
      explanation: 'A strong response should make the contrast meaningful: the visible situation may remain similar while its consequence changes, and each connector or structure should perform a distinct discourse function.',
      feedback: { correct: 'Check that “but” reverses an expectation, the passive foregrounds the event, “only” narrows the result, and “as if” remains a comparison rather than a literal claim.', incorrect: '' },
      discussionPrompts: [
        { question: 'Appearance — What still looks unchanged?', mode: 'Individual' },
        { question: 'Reversal — What actual effect is different?', mode: 'Pair' },
        { question: 'Cause — What explains the change?', mode: 'Pair' },
        { question: 'Comparison — What “as if” image can describe the new experience without becoming a literal claim?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter22: Record<number, Exercise[]> = {
  22: [
    {
      id: 'abraham-b2-language-22-time-result', type: 'matching', title: 'Track Time and Result',
      instructions: 'Match each expression with the way it organizes the sequence or consequence.',
      question: 'How does the chapter move from an ongoing situation to a completed turning point and its result?',
      matchingPairs: [
        { left: 'The fire kept burning for such a long time that...', right: 'links duration with a consequence that develops from it' },
        { left: 'Once the fire burnt out...', right: 'marks the completed event that opens the next stage of the narrative' },
        { left: 'The smoke had blackened their faces...', right: 'uses past perfect to present an earlier completed result before the next comparison' },
        { left: 'Consequently, many people started following Abraham', right: 'signals an explicit consequence of the preceding events' },
      ],
      correctAnswer: {
        'The fire kept burning for such a long time that...': 'links duration with a consequence that develops from it',
        'Once the fire burnt out...': 'marks the completed event that opens the next stage of the narrative',
        'The smoke had blackened their faces...': 'uses past perfect to present an earlier completed result before the next comparison',
        'Consequently, many people started following Abraham': 'signals an explicit consequence of the preceding events',
      },
      explanation: 'The paragraph does more than list events. Duration builds toward a result, “once” marks a completed turning point, past perfect looks back to an earlier result, and “consequently” states a later consequence.',
      feedback: { correct: 'Correct. You tracked duration, completion, earlier result and consequence.', incorrect: 'Look at how each form places one event in relation to another rather than only identifying tense names.' },
    },
    {
      id: 'abraham-b2-language-22-reversal-focus', type: 'matching', title: 'Read Reversal and Information Focus',
      instructions: 'Match each structure with its discourse effect.',
      question: 'How does the chapter foreground unexpected outcomes and contrast them with what observers expected?',
      matchingPairs: [
        { left: 'they were shocked to see that Abraham stepped out... unharmed', right: 'foregrounds the observers’ reaction to an outcome that contradicts expectation' },
        { left: 'The smoke blackened their faces, yet his face was bright', right: 'uses “yet” to place two sharply contrasting results side by side' },
        { left: 'Cries of astonishment were heard from the unbelievers', right: 'uses passive voice to foreground the public reaction rather than who produced each cry' },
        { left: 'This miracle shamed the despotic rulers, but the fire of their rage remained uncooled', right: 'uses “but” to show that one consequence does not automatically produce a second expected change' },
      ],
      correctAnswer: {
        'they were shocked to see that Abraham stepped out... unharmed': 'foregrounds the observers’ reaction to an outcome that contradicts expectation',
        'The smoke blackened their faces, yet his face was bright': 'uses “yet” to place two sharply contrasting results side by side',
        'Cries of astonishment were heard from the unbelievers': 'uses passive voice to foreground the public reaction rather than who produced each cry',
        'This miracle shamed the despotic rulers, but the fire of their rage remained uncooled': 'uses “but” to show that one consequence does not automatically produce a second expected change',
      },
      explanation: 'The chapter repeatedly manages expectation. “Yet” and “but” create reversals, while the passive form keeps attention on the visible reaction rather than individual actors.',
      feedback: { correct: 'Correct. You identified how contrast and information focus shape the turning point.', incorrect: 'Ask what expectation is being reversed and what information the sentence chooses to foreground.' },
    },
    {
      id: 'abraham-b2-language-22-motive-vs-result', type: 'multiple-choice', title: 'Separate Result from Motive',
      instructions: 'Choose the option that best preserves the difference between consequence and motive.',
      question: 'Which reformulation best preserves the functions of “Consequently” and “out of fear of rulers”?',
      options: [
        'The miracle had a public consequence: many began to follow Abraham; fear, however, explains why some believers kept their faith private.',
        'Fear caused the miracle, and the miracle directly forced every observer to become a public follower.',
        'Both phrases simply repeat the same cause-and-effect relation and can be exchanged without changing meaning.',
      ], correctAnswer: 0,
      explanation: '“Consequently” links the preceding event to a later result. “Out of fear of rulers” explains the motive for a different human choice. They operate at different points in the reasoning chain.',
      feedback: { correct: 'Correct. You kept consequence and motive distinct.', incorrect: 'Separate what happened as a result from why a particular group chose to act in a certain way.' },
    },
    {
      id: 'abraham-b2-language-22-production', type: 'reflection', title: 'Build a Turning-Point Paragraph',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation where a long-running difficulty reaches a turning point and produces mixed reactions. Use one duration-to-result structure such as “for such a long time that”, one “once” clause, one past-perfect sentence for an earlier completed result, “yet” or “but” for a genuine reversal, one passive sentence to foreground a reaction or event, “consequently” for a later result, and a separate motive phrase such as “out of fear of...”, “because of...”, or “to avoid...”. Do not retell the Abraham story.',
      question: 'Can you organize duration, turning point, reversal, consequence and motive into one coherent B2 paragraph?', correctAnswer: null,
      explanation: 'A strong response should make the timeline clear and keep discourse relations distinct: duration leads toward a turning point, contrast reverses an expectation, consequence follows from an event, and motive explains a person’s choice.',
      feedback: { correct: 'Check that your timeline is coherent and that consequence and motive are not treated as the same relationship.', incorrect: '' },
      discussionPrompts: [
        { question: 'Duration — What continued for a long time?', mode: 'Individual' },
        { question: 'Turning point — What completed event changed the situation?', mode: 'Pair' },
        { question: 'Reversal — What happened differently from what people expected?', mode: 'Pair' },
        { question: 'Result and motive — What followed, and why did one person or group react differently?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter23: Record<number, Exercise[]> = {
  23: [
    {
      id: 'abraham-b2-language-23-stance-focus', type: 'matching', title: 'Track Claim, Attitude and Information Focus',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the chapter frame status, attitude and authority before the debate itself?',
      matchingPairs: [
        { left: 'those who declared themselves as gods', right: 'distances the narrator from a self-made claim by presenting it as something people declared about themselves' },
        { left: 'he thought that his claim to be god could not be questioned', right: 'reports Nimrod’s belief while the passive modal foregrounds the claimed immunity of the idea itself' },
        { left: 'Still a young man, Abraham was put on trial', right: 'compresses background information and foregrounds the unequal situation he faced' },
        { left: 'Even his father was not on his side; he was on the king’s side', right: 'uses contrast and “even” to intensify Abraham’s isolation before the argument begins' },
      ],
      correctAnswer: {
        'those who declared themselves as gods': 'distances the narrator from a self-made claim by presenting it as something people declared about themselves',
        'he thought that his claim to be god could not be questioned': 'reports Nimrod’s belief while the passive modal foregrounds the claimed immunity of the idea itself',
        'Still a young man, Abraham was put on trial': 'compresses background information and foregrounds the unequal situation he faced',
        'Even his father was not on his side; he was on the king’s side': 'uses contrast and “even” to intensify Abraham’s isolation before the argument begins',
      },
      explanation: 'The paragraph builds the power imbalance through reported attitude, passive focus, compressed background and contrast before moving into direct debate.',
      feedback: { correct: 'Correct. You identified how stance and information focus shape the scene.', incorrect: 'Look at whose viewpoint is being reported and which part of each sentence is foregrounded.' },
    },
    {
      id: 'abraham-b2-language-23-time-cause', type: 'matching', title: 'Build Time and Cause Relations',
      instructions: 'Match each structure with the relation it creates.',
      question: 'How does the chapter organize earlier events, later reactions and the reason for the dispute?',
      matchingPairs: [
        { left: 'When King Nimrod heard that Abraham had emerged from the fire unharmed...', right: 'places an earlier completed event inside the cause of a later reaction' },
        { left: 'he was filled with rage', right: 'presents the emotional result of the preceding information' },
        { left: 'because Allah had given him the kingdom', right: 'marks the reason attached to the dispute in the quoted source' },
        { left: 'The king called up two men sentenced to death. He freed one and the other was put to death.', right: 'moves from general claim to a concrete staged example through sequential actions' },
      ],
      correctAnswer: {
        'When King Nimrod heard that Abraham had emerged from the fire unharmed...': 'places an earlier completed event inside the cause of a later reaction',
        'he was filled with rage': 'presents the emotional result of the preceding information',
        'because Allah had given him the kingdom': 'marks the reason attached to the dispute in the quoted source',
        'The king called up two men sentenced to death. He freed one and the other was put to death.': 'moves from general claim to a concrete staged example through sequential actions',
      },
      explanation: 'The chapter layers chronology and causality rather than listing facts: past perfect looks back, the reaction follows, “because” marks reason, and the final sequence illustrates a claim through actions.',
      feedback: { correct: 'Correct. You tracked chronology, cause and exemplification.', incorrect: 'Ask which event happened first, what reaction followed, and which phrase explicitly gives a reason.' },
    },
    {
      id: 'abraham-b2-language-23-parallel-claims', type: 'multiple-choice', title: 'Read Parallel Claims Carefully',
      instructions: 'Choose the analysis that best explains the effect of the repeated wording.',
      question: 'What is the main discourse effect of placing “My Lord is He Who gives life and causes death” beside “I give life and cause death”?',
      options: [
        'The repeated wording creates a surface parallel between two claims, allowing the reader to compare how the same language is being used with different intended meanings.',
        'The repetition proves that the two speakers are making exactly the same kind of claim with exactly the same scope.',
        'The second sentence is only a grammatical paraphrase and has no argumentative function in the dialogue.',
      ], correctAnswer: 0,
      explanation: 'The close verbal parallel is argumentative: it invites comparison between two uses of the same life-and-death language without collapsing them into identical meanings.',
      feedback: { correct: 'Correct. You recognized the argumentative value of parallel wording.', incorrect: 'Focus on why the chapter places nearly identical wording in two different speakers’ mouths.' },
    },
    {
      id: 'abraham-b2-language-23-production', type: 'reflection', title: 'Write a Claim-and-Counterclaim Exchange',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story disagreement in which one person presents an important claim and another person responds using closely parallel wording. Include one reported-attitude clause such as “she thought that...”, one passive modal such as “could not be questioned”, one past-perfect clause inside a “when” sentence, one explicit reason with “because”, one contrast with “even”, “still”, or a semicolon, and one pair of deliberately parallel claims. Make clear that similar wording does not automatically mean identical scope or meaning.',
      question: 'Can you use stance, chronology, cause, contrast and parallel wording to build a coherent B2 argument?', correctAnswer: null,
      explanation: 'A strong response should show who holds each viewpoint, order the events clearly, explain why the disagreement occurs, and use parallel wording as an argumentative device rather than as empty repetition.',
      feedback: { correct: 'Check that your parallel claims are genuinely comparable but not automatically equivalent in meaning.', incorrect: '' },
      discussionPrompts: [
        { question: 'Stance — Whose belief or assumption is being reported?', mode: 'Individual' },
        { question: 'Chronology — What earlier event needs a past-perfect form?', mode: 'Pair' },
        { question: 'Cause — What explicit reason drives the disagreement?', mode: 'Pair' },
        { question: 'Parallel wording — How can two speakers use similar words for different claims?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter24: Record<number, Exercise[]> = {
  24: [
    {
      id: 'abraham-b2-language-24-argument-result', type: 'matching', title: 'Track Challenge, Result and Public Effect',
      instructions: 'Match each expression with the discourse function it performs in the chapter.',
      question: 'How does the text move from Abraham’s final challenge to its wider consequences?',
      matchingPairs: [
        { left: 'so Abraham put forth another challenge', right: 'marks a consequence and moves the argument to a stronger test' },
        { left: 'which would unquestionably and easily quiet him', right: 'presents the expected effect of the new challenge from the narrator’s viewpoint' },
        { left: 'He was utterly defeated', right: 'compresses the immediate result of the exchange into a strong evaluative statement' },
        { left: 'Abraham’s fame spread throughout the entire kingdom of Babylonia', right: 'widens the focus from one debate to its public social effect' },
      ],
      correctAnswer: {
        'so Abraham put forth another challenge': 'marks a consequence and moves the argument to a stronger test',
        'which would unquestionably and easily quiet him': 'presents the expected effect of the new challenge from the narrator’s viewpoint',
        'He was utterly defeated': 'compresses the immediate result of the exchange into a strong evaluative statement',
        'Abraham’s fame spread throughout the entire kingdom of Babylonia': 'widens the focus from one debate to its public social effect',
      },
      explanation: 'The paragraph is organized as argument escalation → expected effect → immediate result → wider consequence, not as a simple list of events.',
      feedback: { correct: 'Correct. You tracked how the argument develops into a wider consequence.', incorrect: 'Look for the connector that marks consequence, the phrase that predicts an effect, and the sentence that broadens the scene.' },
    },
    {
      id: 'abraham-b2-language-24-simultaneous-contrast', type: 'matching', title: 'Build Simultaneity and Contrast',
      instructions: 'Match each expression with the relation it creates between ideas.',
      question: 'How does the chapter show that public attention and Abraham’s mission developed at the same time, yet produced little support?',
      matchingPairs: [
        { left: 'In the meantime, Abraham continued calling people to believe in Allah', right: 'signals that his mission continued while public discussion about him was also happening' },
        { left: 'He tried every means to persuade them', right: 'intensifies the scale and persistence of his effort' },
        { left: 'However, in spite of his love and care for his people, they left him alone', right: 'sets strong effort and concern against an unexpected negative outcome' },
        { left: 'Only one woman and one man of his people shared his belief in Allah', right: 'narrows the final result and emphasizes how limited the support remained' },
      ],
      correctAnswer: {
        'In the meantime, Abraham continued calling people to believe in Allah': 'signals that his mission continued while public discussion about him was also happening',
        'He tried every means to persuade them': 'intensifies the scale and persistence of his effort',
        'However, in spite of his love and care for his people, they left him alone': 'sets strong effort and concern against an unexpected negative outcome',
        'Only one woman and one man of his people shared his belief in Allah': 'narrows the final result and emphasizes how limited the support remained',
      },
      explanation: '“In the meantime” coordinates simultaneous developments, while “however” and “in spite of” create concession and contrast. “Only” then sharply limits the outcome.',
      feedback: { correct: 'Correct. You identified simultaneity, intensification, concession and limitation.', incorrect: 'Ask what continues at the same time, what effort is intensified, and where the text signals an unexpected result.' },
    },
    {
      id: 'abraham-b2-language-24-reference-cohesion', type: 'multiple-choice', title: 'Read Reference and Cohesion Across the Paragraph',
      instructions: 'Choose the analysis that best explains how the final sentences organize new information.',
      question: 'What is the main discourse effect of “The woman’s name was Sarah... The man’s name was Lot...” after “Only one woman and one man...”?',
      options: [
        'The text first introduces two supporters as a compact category, then identifies and develops each referent in parallel, creating clear cohesion from general reference to specific information.',
        'The repeated noun phrases are unnecessary because the identities were already fully explained before the sentence began.',
        'The two sentences mainly change the chronology by moving the story back to an earlier time.',
      ], correctAnswer: 0,
      explanation: 'The paragraph moves from limited quantity to identification: “one woman and one man” creates two referents, and the following parallel sentences name and develop them.',
      feedback: { correct: 'Correct. You recognized general-to-specific reference and parallel cohesion.', incorrect: 'Focus on how the unnamed pair in one sentence becomes two named, separately developed referents in the next sentences.' },
    },
    {
      id: 'abraham-b2-language-24-production', type: 'reflection', title: 'Write Effort, Resistance and Limited Outcome',
      instructions: 'Write or say an 8–10 sentence paragraph about a non-story situation in which someone makes a strong effort but receives only limited support. Include one consequence connector such as “so”, one phrase showing expected effect with “would”, one simultaneity marker such as “in the meantime”, one concession pattern with “however” plus “in spite of” or “although”, one limiting expression with “only”, and a final pair of parallel sentences that identify two specific supporters or outcomes. Keep the paragraph coherent rather than treating the forms as separate examples.',
      question: 'Can you organize a B2 paragraph around escalation, simultaneous development, concession and a sharply limited result?', correctAnswer: null,
      explanation: 'A strong response should show how an earlier event motivates a stronger action, how another development continues at the same time, why the eventual result is unexpected, and how a general reference can be developed into specific details.',
      feedback: { correct: 'Check that your connectors build a real discourse progression and that “only” genuinely limits the outcome.', incorrect: '' },
      discussionPrompts: [
        { question: 'Escalation — What earlier problem motivates a stronger response?', mode: 'Individual' },
        { question: 'Simultaneity — What two developments are happening at the same time?', mode: 'Pair' },
        { question: 'Concession — Why is the final result surprising despite the effort?', mode: 'Pair' },
        { question: 'Reference — How will you move from a general group to specific people or outcomes?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter25: Record<number, Exercise[]> = {
  25: [
    {
      id: 'abraham-b2-language-25-decision-chain', type: 'matching', title: 'Track Realization, Decision and Movement',
      instructions: 'Match each expression with the discourse job it performs in the chapter.',
      question: 'How does the opening turn a realization into a major change of action?',
      matchingPairs: [
        { left: 'realized that no one else was going to believe in his call', right: 'presents a conclusion reached from the situation and uses future-in-the-past for an expected outcome' },
        { left: 'he decided to emigrate', right: 'turns that conclusion into an explicit decision' },
        { left: 'He left his people and traveled with his wife Sarah and Lot to Egypt', right: 'moves from decision to concrete action through coordinated past verbs' },
        { left: 'After Egypt, Abraham traveled to Palestine and settled there', right: 'marks the next stage of the journey and a new settled state' },
      ],
      correctAnswer: {
        'realized that no one else was going to believe in his call': 'presents a conclusion reached from the situation and uses future-in-the-past for an expected outcome',
        'he decided to emigrate': 'turns that conclusion into an explicit decision',
        'He left his people and traveled with his wife Sarah and Lot to Egypt': 'moves from decision to concrete action through coordinated past verbs',
        'After Egypt, Abraham traveled to Palestine and settled there': 'marks the next stage of the journey and a new settled state',
      },
      explanation: 'The paragraph develops as realization → decision → movement → resettlement. “Was going to believe” is viewed from a past moment, while the simple past carries the actual sequence forward.',
      feedback: { correct: 'Correct. You tracked how viewpoint and tense choices organize a major transition.', incorrect: 'Look for the sentence that reports the conclusion first, then the decision, then the actions that follow it.' },
    },
    {
      id: 'abraham-b2-language-25-distributed-action', type: 'multiple-choice', title: 'Read Parallel Action Across Places',
      instructions: 'Choose the best analysis of how the sentence organizes repeated mission-related action.',
      question: 'What is the main discourse effect of “He called people to believe in Allah wherever he traveled, judged fairly between people, and guided them to truth and righteousness”?',
      options: [
        'It presents three parallel actions as a continuing pattern across changing locations, with “wherever” widening the scope beyond one place.',
        'It describes three unrelated events that happened only once in Palestine.',
        'It mainly expresses uncertainty about whether Abraham performed any of these actions.',
      ], correctAnswer: 0,
      explanation: '“Wherever” gives the first action open spatial scope, while the coordinated verbs “called”, “judged”, and “guided” build a compact profile of recurring activity.',
      feedback: { correct: 'Correct. The sentence compresses a repeated pattern into parallel actions with wide spatial scope.', incorrect: 'Focus on the effect of “wherever” and on why the three past-tense verbs are coordinated in one sentence.' },
    },
    {
      id: 'abraham-b2-language-25-background-time', type: 'matching', title: 'Separate Background from Main Events',
      instructions: 'Match each form with the time relationship it creates.',
      question: 'How does the chapter layer earlier background, accumulated time and later events?',
      matchingPairs: [
        { left: 'She had been given an Egyptian woman, Hajar, as a servant', right: 'places an earlier completed event before the later family developments being narrated' },
        { left: 'Abraham had aged and his hair was gray after many years spent in calling people to Allah', right: 'summarizes accumulated change over a long period before the later decision about marriage' },
        { left: 'Sarah thought she could not have a child', right: 'reports her viewpoint at that later point in the narrative' },
        { left: 'Hajar gave birth to her first son, Ishmael', right: 'returns to a main event that advances the storyline' },
      ],
      correctAnswer: {
        'She had been given an Egyptian woman, Hajar, as a servant': 'places an earlier completed event before the later family developments being narrated',
        'Abraham had aged and his hair was gray after many years spent in calling people to Allah': 'summarizes accumulated change over a long period before the later decision about marriage',
        'Sarah thought she could not have a child': 'reports her viewpoint at that later point in the narrative',
        'Hajar gave birth to her first son, Ishmael': 'returns to a main event that advances the storyline',
      },
      explanation: 'The text does not move in one flat tense sequence. Past perfect supplies earlier background, while simple past reports viewpoint and advances the main events.',
      feedback: { correct: 'Correct. You distinguished prior background from later narrative events.', incorrect: 'Ask which events were already complete before Sarah’s later thought and the birth of Ishmael.' },
    },
    {
      id: 'abraham-b2-language-25-production', type: 'reflection', title: 'Write a Coherent Change-of-Plan Narrative',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about someone who changes plans after realizing an expected outcome will not happen. Use one past-viewpoint future form such as “was going to” or “would”, one explicit decision phrase, at least two coordinated action verbs, one “wherever/whenever” clause to widen scope, one past-perfect sentence for earlier background, and one consequence connector such as “therefore” or “so”. Keep the paragraph coherent rather than listing grammar examples.',
      question: 'Can you control viewpoint, background and consequence in one connected B2 narrative?', correctAnswer: null,
      explanation: 'A strong response should distinguish what had happened earlier, what the person realized at a later moment, what decision followed, and how the new actions developed across time or place.',
      feedback: { correct: 'Check that your tense choices show clear time relationships and that each connector advances the discourse.', incorrect: '' },
      discussionPrompts: [
        { question: 'Background — What had already happened before the person changed plans?', mode: 'Individual' },
        { question: 'Viewpoint — What outcome did the person realize was not going to happen?', mode: 'Pair' },
        { question: 'Decision — What explicit choice followed that realization?', mode: 'Pair' },
        { question: 'Scope — Which action continued wherever or whenever the person moved?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter26: Record<number, Exercise[]> = {
  26: [
    {
      id: 'abraham-b2-language-26-lineage-contrast', type: 'matching', title: 'Track Parallel Lineage and Contrast',
      instructions: 'Match each expression with the discourse relationship it creates.',
      question: 'How does the chapter organize two family lines without presenting them as one undifferentiated list?',
      matchingPairs: [
        { left: "From Ishmael's descendants came Prophet Muhammad", right: 'introduces one branch of descent and its later outcome' },
        { left: "while from Isaac's came Moses and Jesus", right: 'places a second branch in parallel contrast through “while”' },
        { left: "these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam", right: 'looks forward from a past point and summarizes the later significance of both branches' },
        { left: 'another son from his first wife, Sarah', right: 'adds a new family development while maintaining reference to the existing family structure' },
      ],
      correctAnswer: {
        "From Ishmael's descendants came Prophet Muhammad": 'introduces one branch of descent and its later outcome',
        "while from Isaac's came Moses and Jesus": 'places a second branch in parallel contrast through “while”',
        "these two sons’ offspring would be the prophets of Judaism, Christianity, and Islam": 'looks forward from a past point and summarizes the later significance of both branches',
        'another son from his first wife, Sarah': 'adds a new family development while maintaining reference to the existing family structure',
      },
      explanation: 'The paragraph uses parallel lineage phrases and “while” to distinguish two branches, while “would be” presents later outcomes from an earlier narrative viewpoint.',
      feedback: { correct: 'Correct. You identified how reference, parallelism and future-in-the-past organize the family lines.', incorrect: 'Look for the two “from ... came ...” structures and the role of “while” between them.' },
    },
    {
      id: 'abraham-b2-language-26-reported-plan', type: 'multiple-choice', title: 'Read Instruction and Future Plan',
      instructions: 'Choose the best analysis of how reported speech and future meaning work together.',
      question: 'What is the main effect of “Allah told Abraham that he should take Hajar and Ishmael...” followed by “He informed Abraham that He would construct the sacred city... and make its water run for Ishmael”?',
      options: [
        'It moves from a reported instruction to a reported future plan, keeping both statements inside Abraham’s past viewpoint.',
        'It shifts into direct quotation and reports two completed past events.',
        'It mainly expresses Abraham’s personal uncertainty about whether he should travel.',
      ], correctAnswer: 0,
      explanation: '“Should take” reports an instruction, while “would construct / make” presents later intended outcomes from the same past narrative viewpoint.',
      feedback: { correct: 'Correct. The chapter separates instruction from future plan without leaving the reported-speech frame.', incorrect: 'Focus on the difference between what Abraham was instructed to do and what was said would happen later.' },
    },
    {
      id: 'abraham-b2-language-26-journey-progression', type: 'matching', title: 'Build Movement Through Time and Space',
      instructions: 'Match each expression with the way it advances or frames the journey.',
      question: 'How does the chapter compress preparation, continuing circumstances and arrival into one coherent movement sequence?',
      matchingPairs: [
        { left: 'In a few days, Abraham set out', right: 'marks the start of the journey after a short preparation period' },
        { left: 'Hajar was still nursing Ishmael and the child was still breastfeeding', right: 'supplies continuing background circumstances during the journey' },
        { left: 'walked through cultivated land, desert, and mountains', right: 'compresses movement across contrasting landscapes through a coordinated list' },
        { left: 'until he reached the desert ... and came to an uncultivated valley', right: 'uses “until” to mark the endpoint and then specifies the destination more precisely' },
      ],
      correctAnswer: {
        'In a few days, Abraham set out': 'marks the start of the journey after a short preparation period',
        'Hajar was still nursing Ishmael and the child was still breastfeeding': 'supplies continuing background circumstances during the journey',
        'walked through cultivated land, desert, and mountains': 'compresses movement across contrasting landscapes through a coordinated list',
        'until he reached the desert ... and came to an uncultivated valley': 'uses “until” to mark the endpoint and then specifies the destination more precisely',
      },
      explanation: 'The paragraph alternates main movement with background circumstance. “Still” keeps one state active, while “until” closes the movement sequence at its destination.',
      feedback: { correct: 'Correct. You separated background circumstance from the main journey line.', incorrect: 'Ask which clauses describe continuing conditions and which verbs actually move the journey forward.' },
    },
    {
      id: 'abraham-b2-language-26-production', type: 'reflection', title: 'Write a Planned Journey with Layered Viewpoint',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a family or team receiving an instruction to move somewhere for a future purpose. Use one reported instruction with “told ... that ... should”, one future-in-the-past form with “would”, one parallel contrast with “while”, one continuing-background form with “was/were still ...”, and one “until” clause that marks the endpoint of a journey. Keep the paragraph coherent and make the future plan clearly different from the actions already completed.',
      question: 'Can you combine reported instruction, future plan, contrast, background and movement in one connected B2 paragraph?', correctAnswer: null,
      explanation: 'A strong response should distinguish the instruction from the later intended result, keep the narrative viewpoint consistently in the past, and use the movement sequence to reach a clearly marked destination.',
      feedback: { correct: 'Check that “would” is anchored to a past viewpoint and that “while” connects genuinely parallel information.', incorrect: '' },
      discussionPrompts: [
        { question: 'Instruction — What was the group told that it should do?', mode: 'Individual' },
        { question: 'Plan — What was said would happen later?', mode: 'Pair' },
        { question: 'Contrast — What two parallel outcomes or groups can you connect with “while”?', mode: 'Pair' },
        { question: 'Journey — What continued in the background until the group reached its destination?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter27: Record<number, Exercise[]> = {
  27: [
    {
      id: 'abraham-b2-language-27-absence-accumulation', type: 'matching', title: 'Read Accumulated Absence',
      instructions: 'Match each expression with the discourse effect it creates.',
      question: 'How does the opening sentence build the sense of a completely barren setting before the dialogue begins?',
      matchingPairs: [
        { left: 'no fruit, no trees, no food, no water', right: 'accumulates several absences to intensify the description of scarcity' },
        { left: 'and no sign of life', right: 'widens the list from individual missing resources to a total impression of lifelessness' },
        { left: 'left them with a skin of water and a leather bag full of dates', right: 'contrasts the barren environment with the limited supplies they actually have' },
        { left: 'As Abraham began walking away, leaving them behind', right: 'moves from static setting into action while keeping the separation in focus' },
      ],
      correctAnswer: {
        'no fruit, no trees, no food, no water': 'accumulates several absences to intensify the description of scarcity',
        'and no sign of life': 'widens the list from individual missing resources to a total impression of lifelessness',
        'left them with a skin of water and a leather bag full of dates': 'contrasts the barren environment with the limited supplies they actually have',
        'As Abraham began walking away, leaving them behind': 'moves from static setting into action while keeping the separation in focus',
      },
      explanation: 'The chapter first piles up repeated negatives, then shifts into movement. That sequencing makes the setting feel severe before Hajar reacts to what is happening.',
      feedback: { correct: 'Correct. You identified how repetition, contrast and movement shape the opening.', incorrect: 'Look at what the repeated “no” items do together, then notice when the paragraph changes from description to action.' },
    },
    {
      id: 'abraham-b2-language-27-dialogue-reasoning', type: 'multiple-choice', title: 'Track Question, Answer and Inference',
      instructions: 'Choose the best analysis of how the dialogue changes Hajar’s understanding.',
      question: 'What discourse progression is created by “Has Allah commanded you to leave us here?” → “Yes” → “I am leaving you to Allah’s care” → “since Allah is with us”?',
      options: [
        'A direct question establishes the source of the decision, the answer confirms it, and the final “since” clause gives the reason for Hajar’s reassurance.',
        'The exchange mainly reports four unrelated facts without changing anyone’s interpretation of the situation.',
        'The final clause expresses uncertainty because “since” weakens the reason that came before it.',
      ], correctAnswer: 0,
      explanation: 'The dialogue moves from uncertainty to confirmation and then to a reasoned response. “Since” explicitly links reassurance to the belief expressed in the clause that follows.',
      feedback: { correct: 'Correct. The sequence is question → confirmation → interpretation → reason.', incorrect: 'Ask what information the question seeks, what “Yes” confirms, and why the final sentence begins with “since”.' },
    },
    {
      id: 'abraham-b2-language-27-correction-endpoint', type: 'matching', title: 'Follow Correction and Movement',
      instructions: 'Match each expression with its function in the later part of the chapter.',
      question: 'How does the paragraph correct an initial interpretation and then move Abraham out of sight?',
      matchingPairs: [
        { left: 'was not acting on his own decision; Allah had commanded him', right: 'corrects one possible interpretation and replaces it with the stated cause' },
        { left: 'had commanded him', right: 'uses past perfect to place the command before the visible act of leaving' },
        { left: 'advanced as far as the upper parts of Mecca', right: 'marks continued movement toward a spatial endpoint' },
        { left: 'a place where they could not see him', right: 'uses a relative clause to define the location by what was no longer possible from there' },
      ],
      correctAnswer: {
        'was not acting on his own decision; Allah had commanded him': 'corrects one possible interpretation and replaces it with the stated cause',
        'had commanded him': 'uses past perfect to place the command before the visible act of leaving',
        'advanced as far as the upper parts of Mecca': 'marks continued movement toward a spatial endpoint',
        'a place where they could not see him': 'uses a relative clause to define the location by what was no longer possible from there',
      },
      explanation: 'The text first reframes the reason for Abraham’s action, then uses spatial progression and a defining relative clause to complete the movement away from Hajar and Ishmael.',
      feedback: { correct: 'Correct. You separated causal correction, earlier command and spatial endpoint.', incorrect: 'Notice the contrast between “not...” and the clause after it, then track how “as far as” and “where” organize the location.' },
    },
    {
      id: 'abraham-b2-language-27-production', type: 'reflection', title: 'Write from Uncertainty to Reassurance',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult relocation, separation or responsibility. Begin with an accumulated description using at least three coordinated negatives or limitations. Add a background-to-reaction structure such as “As/While ... , ...”, include one direct or reported question that clarifies the reason for an action, one reason clause with “since” or “because”, one corrective contrast using “not ...; rather/but ...”, and one endpoint/location clause with “as far as”, “until”, or “where”. Keep the paragraph coherent and show a clear change from uncertainty to a more informed response.',
      question: 'Can you use setting, dialogue, causal reasoning and movement to build one connected B2 paragraph?', correctAnswer: null,
      explanation: 'A strong response should use the language forms to move the reader through stages: difficult setting → uncertainty → clarification → reasoned response → spatial or narrative endpoint.',
      feedback: { correct: 'Check that each connector changes the relationship between ideas, rather than merely decorating separate sentences.', incorrect: '' },
      discussionPrompts: [
        { question: 'Setting — Which repeated limitations make the situation difficult?', mode: 'Individual' },
        { question: 'Clarification — What question reveals the real reason for the action?', mode: 'Pair' },
        { question: 'Correction — Which first interpretation must be replaced by a more accurate one?', mode: 'Pair' },
        { question: 'Endpoint — How will you mark the final place or stage of the movement?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter28: Record<number, Exercise[]> = {
  28: [
    {
      id: 'abraham-b2-language-28-purpose-chain', type: 'matching', title: 'Trace Purpose and Intended Outcome',
      instructions: 'Match each expression with the function it performs in the chapter’s purpose chain.',
      question: 'How does the chapter connect settlement, worship, provision and gratitude without simply listing events?',
      matchingPairs: [
        { left: 'in order ... that they may offer prayers perfectly', right: 'states the intended religious purpose of settling near the Sacred House' },
        { left: 'so fill some hearts among men with love towards them', right: 'moves from purpose to a requested human response' },
        { left: 'provide them with fruits so that they may give thanks', right: 'links provision to a further intended response through “so that”' },
        { left: 'to reconstruct the Holy Ka‘ba ... making this place the renewed center of monotheism', right: 'combines an immediate purpose with a broader resulting function' },
      ],
      correctAnswer: {
        'in order ... that they may offer prayers perfectly': 'states the intended religious purpose of settling near the Sacred House',
        'so fill some hearts among men with love towards them': 'moves from purpose to a requested human response',
        'provide them with fruits so that they may give thanks': 'links provision to a further intended response through “so that”',
        'to reconstruct the Holy Ka‘ba ... making this place the renewed center of monotheism': 'combines an immediate purpose with a broader resulting function',
      },
      explanation: 'The paragraph repeatedly moves beyond action itself to why the action matters. Purpose markers and the participial phrase “making this place...” build a chain from settlement to worship, provision, gratitude and renewed religious function.',
      feedback: { correct: 'Correct. You identified how purpose and intended outcome organize the paragraph.', incorrect: 'Look for “in order”, “so that”, infinitive “to...” phrases and the final “making...” result phrase.' },
    },
    {
      id: 'abraham-b2-language-28-obligation-reformulation', type: 'multiple-choice', title: 'Read Obligation and Clarification',
      instructions: 'Choose the best analysis of the relationship between obligation and explanation.',
      question: 'What is the strongest reading of “Abraham had to take Hajar and Ishmael away...” followed by “This was about the rebuilding of the temple, that is, the Ka‘ba”?',
      options: [
        '“Had to” presents the move as necessary within the narrative, while “that is” clarifies the preceding noun phrase by naming the temple more precisely.',
        '“Had to” expresses a weak personal preference, and “that is” introduces an unrelated new event.',
        'Both expressions mainly add chronological detail without changing how the reader interprets the action.',
      ], correctAnswer: 0,
      explanation: 'The modal phrase frames the relocation as necessity rather than optional choice, while “that is” reformulates “the temple” with a more specific referent.',
      feedback: { correct: 'Correct. One structure marks necessity; the other narrows and clarifies reference.', incorrect: 'Ask whether “had to” signals choice or necessity, then ask what “that is” does to “the temple”.' },
    },
    {
      id: 'abraham-b2-language-28-time-reference', type: 'matching', title: 'Build Time and Reference Cohesion',
      instructions: 'Match each expression with the way it helps the paragraph stay coherent across time and generations.',
      question: 'How does the final part move from an earlier sacred site to later descendants without losing reference?',
      matchingPairs: [
        { left: 'the Holy Ka‘ba which was lost after Noah’s Flood', right: 'uses a relative clause to add earlier background about a previously mentioned place' },
        { left: 'Over the years', right: 'signals a large forward movement in time before the lineage develops' },
        { left: 'one of them was Muhammad', right: 'selects one member from the previously mentioned descendants without restarting the whole reference chain' },
        { left: 'They spread all over the Arabian Peninsula', right: 'uses a pronoun to continue the descendant group as the topic of the next sentence' },
      ],
      correctAnswer: {
        'the Holy Ka‘ba which was lost after Noah’s Flood': 'uses a relative clause to add earlier background about a previously mentioned place',
        'Over the years': 'signals a large forward movement in time before the lineage develops',
        'one of them was Muhammad': 'selects one member from the previously mentioned descendants without restarting the whole reference chain',
        'They spread all over the Arabian Peninsula': 'uses a pronoun to continue the descendant group as the topic of the next sentence',
      },
      explanation: 'The paragraph moves across long spans of time by combining a relative clause, an explicit time shift and careful pronoun/reference choices. Those devices let the writer compress history without turning the paragraph into disconnected statements.',
      feedback: { correct: 'Correct. You tracked background, time shift and reference continuity.', incorrect: 'Notice which phrase looks backward, which one moves time forward, and what “them/They” refers back to.' },
    },
    {
      id: 'abraham-b2-language-28-production', type: 'reflection', title: 'Write a Purpose-to-Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a community project, institution or long-term plan. Include one obligation structure with “had to” or “needed to”, one clarification with “that is” or “in other words”, at least two purpose/result links using “in order to”, “so that”, “to”, or an -ing result phrase, one relative clause that adds earlier background, one explicit long-term time shift such as “over the years”, and clear pronoun/reference links across at least three sentences. Do not write isolated examples; make the paragraph move from an immediate necessity to a wider long-term effect.',
      question: 'Can you connect necessity, clarification, purpose, background and long-term consequence in one coherent B2 paragraph?', correctAnswer: null,
      explanation: 'A strong response should show a clear discourse progression: necessity → clarification → immediate purpose → wider result → earlier/later background → long-term consequence.',
      feedback: { correct: 'Check that every connector and reference choice helps the paragraph progress rather than merely adding another sentence.', incorrect: '' },
      discussionPrompts: [
        { question: 'Necessity — What action had to happen first, and why?', mode: 'Individual' },
        { question: 'Clarification — Which term or idea needs to be reformulated for the reader?', mode: 'Pair' },
        { question: 'Purpose — Which two outcomes should be linked rather than simply listed?', mode: 'Pair' },
        { question: 'Legacy — How will you move from the immediate project to its effect years later?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter29: Record<number, Exercise[]> = {
  29: [
    {
      id: 'abraham-b2-language-29-source-voice', type: 'matching', title: 'Separate Source Voice from Narrative Voice',
      instructions: 'Match each expression with the discourse job it performs.',
      question: 'How does the chapter move between an attributed report, Hajar’s own thought, and the narrator’s later interpretation?',
      matchingPairs: [
        { left: 'Ibn Abbas ... said', right: 'marks the following account as attributed to a named transmitter rather than presented without a source frame' },
        { left: '“Maybe there is a caravan passing by,” she thought to herself', right: 'opens Hajar’s internal possibility rather than stating that a caravan was actually present' },
        { left: 'Hajar’s patient search for water is directly comparable to...', right: 'moves from narrated action to an explicit comparison made by the narrator' },
        { left: 'Her effort was later symbolized by all Muslims in Hajj', right: 'shifts forward from the immediate event to a later interpretive or ritual connection' },
      ],
      correctAnswer: {
        'Ibn Abbas ... said': 'marks the following account as attributed to a named transmitter rather than presented without a source frame',
        '“Maybe there is a caravan passing by,” she thought to herself': 'opens Hajar’s internal possibility rather than stating that a caravan was actually present',
        'Hajar’s patient search for water is directly comparable to...': 'moves from narrated action to an explicit comparison made by the narrator',
        'Her effort was later symbolized by all Muslims in Hajj': 'shifts forward from the immediate event to a later interpretive or ritual connection',
      },
      explanation: 'The chapter layers several voices and levels of certainty: a named report, an internal possibility, narrated action, and later comparison/interpretation. Keeping those layers separate prevents reported material or possibility from being turned into unqualified fact.',
      feedback: { correct: 'Correct. You distinguished attribution, possibility, narration and later interpretation.', incorrect: 'Ask who is responsible for each statement: Ibn Abbas, Hajar’s thought, or the chapter narrator.' },
    },
    {
      id: 'abraham-b2-language-29-sequence-background', type: 'matching', title: 'Track Motion Through a Narrative Chain',
      instructions: 'Match each structure with the way it organizes movement and time.',
      question: 'How does the paragraph keep a long search sequence coherent instead of listing disconnected actions?',
      matchingPairs: [
        { left: 'When the water ... was used up, she became thirsty', right: 'sets a completed change as the trigger for the next state' },
        { left: 'Leaving Ishmael under a tree, she began climbing...', right: 'compresses a background action into a participial phrase before the main movement' },
        { left: 'Then, she moved across to the opposite hill', right: 'signals the next stage explicitly after the first attempt' },
        { left: 'but still saw nothing', right: 'adds an expectation-reversing result while preserving continuity with the search' },
      ],
      correctAnswer: {
        'When the water ... was used up, she became thirsty': 'sets a completed change as the trigger for the next state',
        'Leaving Ishmael under a tree, she began climbing...': 'compresses a background action into a participial phrase before the main movement',
        'Then, she moved across to the opposite hill': 'signals the next stage explicitly after the first attempt',
        'but still saw nothing': 'adds an expectation-reversing result while preserving continuity with the search',
      },
      explanation: 'The sequence combines a trigger clause, a reduced background action, an explicit next-step marker and a contrastive result. Those choices make repeated movement readable as one developing search.',
      feedback: { correct: 'Correct. You traced trigger, background, progression and contrast.', incorrect: 'Look for the structure that starts the problem, the reduced action before the main verb, the next-step marker, and the failed-result contrast.' },
    },
    {
      id: 'abraham-b2-language-29-reformulate-comparison', type: 'multiple-choice', title: 'Preserve Comparison Without Overclaiming',
      instructions: 'Choose the reformulation that best preserves the chapter’s discourse roles.',
      question: 'Which version keeps observation, possibility, comparison and later interpretation distinct?',
      options: [
        'After the water ran out, Hajar searched repeatedly. She wondered whether a caravan might be nearby, but she found none. The chapter then compares her repeated movement with sa‘y and later links her effort with Hajj practice.',
        'After the water ran out, Hajar knew a caravan was nearby. Her running was already the formal Hajj ritual at that moment, so she performed it exactly as later pilgrims would.',
        'Ibn Abbas proved that every later detail of Hajj began during this search, and Hajar’s thought about a caravan confirms that one was passing nearby.',
      ], correctAnswer: 0,
      explanation: 'The first reformulation keeps the internal thought tentative, reports the failed search, and marks comparison/later connection as later discourse layers rather than collapsing them into the immediate event.',
      feedback: { correct: 'Correct. The reformulation preserves source and certainty boundaries.', incorrect: 'Do not turn “maybe” into knowledge, and do not collapse a later comparison or symbolization into the immediate event itself.' },
    },
    {
      id: 'abraham-b2-language-29-production', type: 'reflection', title: 'Write from Report to Later Interpretation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a documented journey, experiment, rescue, discovery or repeated attempt. Begin with an attributed source frame such as “According to...” or “X reported that...”. Include one internal possibility with “might/maybe”, one trigger clause with “when/after”, one reduced -ing background phrase, at least two sequence markers, one contrastive failed or unexpected result with “but/yet/still”, and finish by clearly marking a later comparison, interpretation or symbolic meaning. Keep report, possibility and interpretation distinct.',
      question: 'Can you move from attributed evidence through a coherent action sequence to a later interpretation without blurring certainty?', correctAnswer: null,
      explanation: 'A strong B2 response should show a controlled discourse progression: attributed source → trigger → repeated or developing action → tentative possibility → contrastive result → later comparison/interpretation.',
      feedback: { correct: 'Check that the paragraph makes clear what was reported, what was only possible, what happened, and what was interpreted later.', incorrect: '' },
      discussionPrompts: [
        { question: 'Source — Who reports the initial event, and how will you mark that attribution?', mode: 'Individual' },
        { question: 'Possibility — What did the person think might happen without knowing it for certain?', mode: 'Pair' },
        { question: 'Sequence — Which actions need explicit ordering, and which can be compressed into an -ing phrase?', mode: 'Pair' },
        { question: 'Interpretation — What later comparison or meaning can you add without presenting it as part of the original event?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter30: Record<number, Exercise[]> = {
  30: [
    {
      id: 'abraham-b2-language-30-event-result', type: 'matching', title: 'Build an Event → Immediate Result Chain',
      instructions: 'Match each expression with the discourse job it performs.',
      question: 'How does the chapter turn separate actions into a rapid cause-and-result sequence?',
      matchingPairs: [
        { left: 'The angel hit the ground with his heel, and water immediately flowed out', right: 'links an initiating action with an immediate visible result' },
        { left: 'Hajar quickly made a small basin around the water to stop it from spreading', right: 'adds a purposeful response through an infinitive of purpose' },
        { left: 'Not long after that, the tribe of Jurham ... stopped by the valley', right: 'moves the narrative forward while keeping the time gap limited' },
        { left: 'They had seen the unusual sight of a bird ... which could only mean the presence of water', right: 'uses earlier evidence to explain the tribe’s later decision' },
      ],
      correctAnswer: {
        'The angel hit the ground with his heel, and water immediately flowed out': 'links an initiating action with an immediate visible result',
        'Hajar quickly made a small basin around the water to stop it from spreading': 'adds a purposeful response through an infinitive of purpose',
        'Not long after that, the tribe of Jurham ... stopped by the valley': 'moves the narrative forward while keeping the time gap limited',
        'They had seen the unusual sight of a bird ... which could only mean the presence of water': 'uses earlier evidence to explain the tribe’s later decision',
      },
      explanation: 'The paragraph develops through action → result → purposeful response → later movement explained by prior evidence. This keeps the episode coherent without simply listing events.',
      feedback: { correct: 'Correct. You traced result, purpose, time progression and explanatory background.', incorrect: 'Look for what happens immediately, why Hajar acts, how the story moves forward, and which earlier sign explains the tribe’s choice.' },
    },
    {
      id: 'abraham-b2-language-30-reference-time', type: 'multiple-choice', title: 'Control Reference Across Time',
      instructions: 'Choose the reformulation that best preserves reference and time relationships.',
      question: 'Which version keeps the future plan, continuing present relevance and earlier evidence distinct?',
      options: [
        'The angel identifies the place as the future site of the House that Ishmael and his father will build. The narrator then says that Zamzam continues to flow to this day. Later, Jurham stop near the valley because they had already seen a bird whose movement suggested water.',
        'The angel says the House has already been built, Zamzam flowed only in the past, and Jurham see the bird after they settle in the valley.',
        'The chapter treats the future building, the present-day well and the tribe’s earlier observation as one event happening at the same time.',
      ], correctAnswer: 0,
      explanation: 'The chapter layers three time perspectives: a future building plan, continuing relevance in the narrator’s present, and prior evidence that explains a later tribal action.',
      feedback: { correct: 'Correct. You preserved future, continuing present relevance and past-perfect background.', incorrect: 'Separate what is still future in the angel’s speech, what continues “to this day,” and what the tribe had already observed.' },
    },
    {
      id: 'abraham-b2-language-30-inference', type: 'matching', title: 'Distinguish Observation from Inference',
      instructions: 'Match the language with its evidential role.',
      question: 'How does the final sentence move from a visible sign to an inferred conclusion?',
      matchingPairs: [
        { left: 'the unusual sight of a bird flying in its direction', right: 'the directly observed sign' },
        { left: 'which could only mean', right: 'the language that marks a strong inference from the sign' },
        { left: 'the presence of water', right: 'the conclusion drawn from the observation' },
        { left: 'They had seen...', right: 'the past-perfect background that places the evidence before the later stop in the valley' },
      ],
      correctAnswer: {
        'the unusual sight of a bird flying in its direction': 'the directly observed sign',
        'which could only mean': 'the language that marks a strong inference from the sign',
        'the presence of water': 'the conclusion drawn from the observation',
        'They had seen...': 'the past-perfect background that places the evidence before the later stop in the valley',
      },
      explanation: 'B2 readers should distinguish what is observed from what is inferred. Here the bird is the evidence; water is the conclusion, and “could only mean” marks the strength of that inference.',
      feedback: { correct: 'Correct. You separated evidence, inference marker, conclusion and time background.', incorrect: 'Ask what the tribe actually sees and what they conclude from it.' },
    },
    {
      id: 'abraham-b2-language-30-production', type: 'reflection', title: 'Write from Sign to Settlement',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a discovery that changes what people do next. Include one action with an immediate result, one purpose phrase with “to...”, one future-in-view statement with “will”, one continuing-present expression such as “still/to this day”, one later-time marker such as “not long after/later”, one past-perfect background sentence, and one clearly marked inference from observable evidence using “could mean / suggested / indicated”. Do not present the inference as if it were the original observation.',
      question: 'Can you connect action, purpose, time shifts, evidence and inference in one coherent B2 paragraph?', correctAnswer: null,
      explanation: 'A strong response should move coherently from an initiating event through purpose and time shifts to an evidence-based inference that motivates a later action.',
      feedback: { correct: 'Check that your paragraph separates what happened, what was intended, what continues, what had happened earlier, and what was inferred.', incorrect: '' },
      discussionPrompts: [
        { question: 'Trigger — What event creates an immediate visible change?', mode: 'Individual' },
        { question: 'Purpose — What does someone do in response, and why?', mode: 'Pair' },
        { question: 'Evidence — What can later observers actually see?', mode: 'Pair' },
        { question: 'Inference — What conclusion do they draw, and which phrase makes it clear that this is an inference?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter31: Record<number, Exercise[]> = {
  31: [
    {
      id: 'abraham-b2-language-31-time-development', type: 'matching', title: 'Track Growth and Turning Points',
      instructions: 'Match each expression with the discourse function it performs.',
      question: 'How does the chapter move from Ishmael’s settled life into the sacrifice test?',
      matchingPairs: [
        { left: 'Ishmael grew up among them', right: 'establishes a continuing life stage in the Jurham community' },
        { left: 'Growing up among the Jurham tribe, Ishmael married...', right: 'compresses background development before a later life event' },
        { left: 'Abraham had a dream that he sacrificed his son', right: 'introduces the turning point that changes the direction of the chapter' },
        { left: 'when he was old enough to walk with him', right: 'locates the command within a later stage of Ishmael’s growth' },
      ],
      correctAnswer: {
        'Ishmael grew up among them': 'establishes a continuing life stage in the Jurham community',
        'Growing up among the Jurham tribe, Ishmael married...': 'compresses background development before a later life event',
        'Abraham had a dream that he sacrificed his son': 'introduces the turning point that changes the direction of the chapter',
        'when he was old enough to walk with him': 'locates the command within a later stage of Ishmael’s growth',
      },
      explanation: 'The chapter uses background growth, a compressed participial phrase, and a later turning point to shift from settled life to a major test.',
      feedback: { correct: 'Correct. You traced background development, life-stage progression and the turning point.', incorrect: 'Look for which phrases describe background growth and which one introduces the new test.' },
    },
    {
      id: 'abraham-b2-language-31-command-framing', type: 'multiple-choice', title: 'Preserve Command and Viewpoint',
      instructions: 'Choose the reformulation that best preserves the chapter’s viewpoint and source framing.',
      question: 'Which version most accurately keeps the dream, Abraham’s understanding of it, and Ishmael’s response distinct?',
      options: [
        'Abraham sees the sacrifice in a dream and understands that he is commanded to act. He then tells Ishmael what he has seen and asks for his view; Ishmael responds by referring to what his father is commanded to do and expresses willingness to remain patient.',
        'Abraham privately decides to sacrifice Ishmael and then tells him that the decision cannot be discussed.',
        'Ishmael first proposes the sacrifice, and Abraham later interprets the proposal as a dream.',
      ], correctAnswer: 0,
      explanation: 'The chapter distinguishes the dream, Abraham’s understanding of command, consultation with Ishmael, and Ishmael’s willing response.',
      feedback: { correct: 'Correct. The source, interpretation, consultation and response remain separate.', incorrect: 'Do not collapse the dream, the command, and Ishmael’s response into one speaker’s private decision.' },
    },
    {
      id: 'abraham-b2-language-31-speech-functions', type: 'matching', title: 'Read the Dialogue as Action',
      instructions: 'Match each quoted expression with what it does in the exchange.',
      question: 'How do the speakers use language to move from disclosure to consultation and commitment?',
      matchingPairs: [
        { left: 'I have seen in a dream that I am slaughtering you', right: 'reports the vision directly to the person affected by it' },
        { left: 'so look what do you think', right: 'opens space for consultation rather than presenting only a monologue' },
        { left: 'Do that which you are commanded', right: 'frames the action as obedience to a command rather than a personal preference' },
        { left: 'you shall find me ... of the patient', right: 'expresses future-oriented commitment while leaving the outcome under Allah’s will' },
      ],
      correctAnswer: {
        'I have seen in a dream that I am slaughtering you': 'reports the vision directly to the person affected by it',
        'so look what do you think': 'opens space for consultation rather than presenting only a monologue',
        'Do that which you are commanded': 'frames the action as obedience to a command rather than a personal preference',
        'you shall find me ... of the patient': 'expresses future-oriented commitment while leaving the outcome under Allah’s will',
      },
      explanation: 'At B2 level, direct speech can be read by function: disclosure, consultation, framing of obligation and commitment.',
      feedback: { correct: 'Correct. You identified how each line changes the interaction.', incorrect: 'Focus on what each utterance does, not only what information it contains.' },
    },
    {
      id: 'abraham-b2-language-31-production', type: 'reflection', title: 'Build a Consultation under Pressure',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult responsibility discussed between two people. Include one background-growth expression, one turning-point sentence, one report of an obligation or instruction, one direct question inviting the other person’s view, one response that accepts or challenges the obligation with a reason, and one future-oriented commitment qualified by uncertainty or dependence such as “if possible”, “if all goes well”, or “God willing”. Keep obligation, consultation and personal choice clearly distinct.',
      question: 'Can you build a coherent B2 exchange in which responsibility is reported, discussed and responded to rather than simply announced?', correctAnswer: null,
      explanation: 'A strong response should move from background to a turning point, distinguish obligation from preference, and use consultation language to develop the interaction.',
      feedback: { correct: 'Check that your paragraph separates background, obligation, consultation, response and future commitment.', incorrect: '' },
      discussionPrompts: [
        { question: 'Background — What had developed before the difficult responsibility appeared?', mode: 'Individual' },
        { question: 'Obligation — How will you show that a responsibility comes from a rule, role or instruction rather than preference?', mode: 'Pair' },
        { question: 'Consultation — What direct question genuinely invites another viewpoint?', mode: 'Pair' },
        { question: 'Commitment — How can the response show willingness without pretending complete control over the future?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter32: Record<number, Exercise[]> = {
  32: [
    {
      id: 'abraham-b2-language-32-time-pressure', type: 'matching', title: 'Track Timing at the Turning Point',
      instructions: 'Match each expression with the timing or discourse effect it creates.',
      question: 'How does the chapter compress the final moments of the test and then interrupt them?',
      matchingPairs: [
        { left: 'when they both obeyed Allah\'s command', right: 'frames the decisive action as a shared point of submission' },
        { left: 'laid him face down upon his forehead', right: 'moves the narrative from intention into immediate physical action' },
        { left: 'just as his knife was about to near Ishmael', right: 'marks an action on the verge of happening and creates maximum tension' },
        { left: 'A voice stopped Abraham', right: 'interrupts the expected outcome and redirects the event' },
      ],
      correctAnswer: {
        'when they both obeyed Allah\'s command': 'frames the decisive action as a shared point of submission',
        'laid him face down upon his forehead': 'moves the narrative from intention into immediate physical action',
        'just as his knife was about to near Ishmael': 'marks an action on the verge of happening and creates maximum tension',
        'A voice stopped Abraham': 'interrupts the expected outcome and redirects the event',
      },
      explanation: 'The chapter uses a completed shared action, immediate physical sequencing and “was about to” to bring the test to its peak before an interruption reverses the expected outcome.',
      feedback: { correct: 'Correct. You traced how timing creates pressure and then a sudden reversal.', incorrect: 'Focus on which phrase signals a shared completed step, which signals imminent action, and which interrupts it.' },
    },
    {
      id: 'abraham-b2-language-32-test-fulfilment', type: 'matching', title: 'Follow Test → Fulfilment → Reward',
      instructions: 'Match each expression with its role in the chapter’s reasoning chain.',
      question: 'How does the text move from obedience to interpretation and consequence?',
      matchingPairs: [
        { left: 'You have indeed fulfilled the vision', right: 'interprets the required response as having been completed' },
        { left: 'That verily was a clear test', right: 'classifies the whole event as a test rather than an end in itself' },
        { left: 'Because of this', right: 'explicitly links the previous response to a later consequence' },
        { left: 'Allah made him the leader of humanity and brought Messengers from his children', right: 'presents the consequence that follows the chapter’s evaluation of Abraham’s faithfulness' },
      ],
      correctAnswer: {
        'You have indeed fulfilled the vision': 'interprets the required response as having been completed',
        'That verily was a clear test': 'classifies the whole event as a test rather than an end in itself',
        'Because of this': 'explicitly links the previous response to a later consequence',
        'Allah made him the leader of humanity and brought Messengers from his children': 'presents the consequence that follows the chapter’s evaluation of Abraham’s faithfulness',
      },
      explanation: 'These expressions build an argument, not just a sequence of events: fulfilment is stated, the event is interpreted as a test, and a consequence is then connected to that evaluation.',
      feedback: { correct: 'Correct. You identified how the chapter turns narrative events into an explicit interpretation-and-consequence chain.', incorrect: 'Look for the language that labels the event, explains its meaning, and then introduces a result.' },
    },
    {
      id: 'abraham-b2-language-32-reformulation', type: 'multiple-choice', title: 'Preserve the Chapter’s Meaning Boundaries',
      instructions: 'Choose the reformulation that best preserves the chapter’s sequence and interpretation without turning the Quick Challenge answer into the whole point.',
      question: 'Which version most accurately reflects how the chapter frames the event?',
      options: [
        'Abraham and Ishmael proceed in obedience until the action reaches its critical point; the act is stopped, Abraham is told that he has fulfilled the vision, and the event is explicitly described as a test. The chapter then connects Abraham’s demonstrated willingness with later leadership and prophetic lineage, while the sacrifice itself is replaced by an animal.',
        'The chapter presents Ishmael’s death as the necessary final goal, and every later reward depends on that death taking place.',
        'The chapter says the animal replacement was the original purpose announced before Abraham and Ishmael showed any willingness to obey.',
      ], correctAnswer: 0,
      explanation: 'The chapter distinguishes willingness and fulfilment of the test from the actual killing of Ishmael, which does not occur.',
      feedback: { correct: 'Correct. The test, interruption, interpretation and later consequence remain distinct.', incorrect: 'Do not collapse the test into an actual death or move the replacement to a point before the obedience is demonstrated.' },
    },
    {
      id: 'abraham-b2-language-32-production', type: 'reflection', title: 'Write a Turning-Point Evaluation',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about a difficult test, inspection, trial, or responsibility that reaches a critical point and is then reassessed. Include one “when” clause to frame a decisive moment, one “was about to” expression for an imminent action, one interruption or reversal, one sentence that explicitly evaluates what the event proved, one cause/result connector such as “because of this” or “therefore”, and one final sentence that limits or corrects a possible misunderstanding with “only”, “rather than”, or “not... but...”.',
      question: 'Can you move from event sequence to B2-level interpretation without confusing what happened with what the event demonstrated?', correctAnswer: null,
      explanation: 'A strong response should separate event timing, interruption, evaluation and consequence, then use a final limiting expression to prevent overstatement.',
      feedback: { correct: 'Check that your paragraph distinguishes the event itself from what it proves or leads to.', incorrect: '' },
      discussionPrompts: [
        { question: 'Timing — Which event was already happening, and what was just about to happen?', mode: 'Individual' },
        { question: 'Reversal — What interrupted the expected result?', mode: 'Pair' },
        { question: 'Evaluation — What did the event demonstrate, rather than merely what happened?', mode: 'Pair' },
        { question: 'Boundary — Which final sentence prevents an exaggerated interpretation?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter33: Record<number, Exercise[]> = {
  33: [
    {
      id: 'abraham-b2-language-33-contrast-history', type: 'matching', title: 'Trace Contrast Across Time',
      instructions: 'Match each expression with the discourse effect it creates.',
      question: 'How does the chapter compare practices across periods and communities?',
      matchingPairs: [
        { left: 'At Abraham’s time', right: 'anchors a practice in a specific historical period' },
        { left: 'In fact', right: 'introduces clarification or correction of a possible assumption' },
        { left: 'Prophets before him also sacrificed animals', right: 'extends the practice backward in time rather than presenting it as new' },
        { left: 'while idolaters sacrificed humans', right: 'sets two contrasting practices side by side' },
      ],
      correctAnswer: {
        'At Abraham’s time': 'anchors a practice in a specific historical period',
        'In fact': 'introduces clarification or correction of a possible assumption',
        'Prophets before him also sacrificed animals': 'extends the practice backward in time rather than presenting it as new',
        'while idolaters sacrificed humans': 'sets two contrasting practices side by side',
      },
      explanation: 'The chapter builds historical meaning by locating claims in time, correcting a possible assumption, then contrasting two practices without collapsing them into one.',
      feedback: { correct: 'Correct. You identified how time and contrast organize the historical explanation.', incorrect: 'Look for the phrases that mark time, correction and side-by-side contrast.' },
    },
    {
      id: 'abraham-b2-language-33-equivalence-reframing', type: 'multiple-choice', title: 'Interpret “Equivalent to” Carefully',
      instructions: 'Choose the reformulation that best preserves the chapter’s wording without overgeneralizing it.',
      question: 'Which version keeps the original scope and historical framing?',
      options: [
        'The chapter says that in Abraham’s religion animal sacrifice was treated as equivalent to human life for people of that era, especially in relation to children’s safety; it does not present animal and human life as universally identical in value.',
        'The chapter states that animals and humans always have exactly the same value in every religious and historical context.',
        'The chapter says human sacrifice continued unchanged and animal sacrifice had no different function.',
      ], correctAnswer: 0,
      explanation: 'The phrase is historically framed and connected to how people of that era understood safety; it should not be turned into a universal claim.',
      feedback: { correct: 'Correct. You preserved the time-bound scope of the claim.', incorrect: 'Keep the historical frame “for the people of that era” and avoid turning a contextual statement into a universal one.' },
    },
    {
      id: 'abraham-b2-language-33-time-reunion-purpose', type: 'matching', title: 'Build Reunion → New Purpose',
      instructions: 'Match each phrase with its role in moving the narrative from separation to a new shared task.',
      question: 'How does the chapter shift from past separation to future-directed action?',
      matchingPairs: [
        { left: 'After a separation of several years', right: 'provides the background period before the reunion' },
        { left: 'the father and son came together again', right: 'marks the return to a shared present situation' },
        { left: 'This time', right: 'signals a new phase different from the earlier reunion context' },
        { left: 'they were going to build the honored House of Allah', right: 'presents a future plan viewed from that past moment' },
      ],
      correctAnswer: {
        'After a separation of several years': 'provides the background period before the reunion',
        'the father and son came together again': 'marks the return to a shared present situation',
        'This time': 'signals a new phase different from the earlier reunion context',
        'they were going to build the honored House of Allah': 'presents a future plan viewed from that past moment',
      },
      explanation: 'The chapter uses background time, reunion language, a phase marker and future-in-the-past to redirect the narrative toward a new shared purpose.',
      feedback: { correct: 'Correct. You traced the move from separation to reunion and future purpose.', incorrect: 'Focus on which phrase gives background, which marks reunion, and which points forward from a past viewpoint.' },
    },
    {
      id: 'abraham-b2-language-33-production', type: 'reflection', title: 'Write a Historically Framed Contrast',
      instructions: 'Write or say an 8–10 sentence non-story paragraph comparing two practices, policies, or traditions across time. Use one explicit historical time frame, one “in fact” or similar clarification, one “while” contrast, one sentence that limits a claim to people or conditions of that period, one past-background expression such as “after several years”, and one future-in-the-past form such as “was/were going to” to show a later plan from that past viewpoint.',
      question: 'Can you compare historical practices and later developments without turning time-bound claims into universal statements?', correctAnswer: null,
      explanation: 'A strong B2 response should distinguish historical context, contrast, clarification and later intention while keeping claims within their proper scope.',
      feedback: { correct: 'Check that each claim is tied to its time, group or context where necessary.', incorrect: '' },
      discussionPrompts: [
        { question: 'Scope — Which claim is limited to a specific period or group?', mode: 'Individual' },
        { question: 'Contrast — Which two practices are compared with “while” or an equivalent linker?', mode: 'Pair' },
        { question: 'Clarification — What possible misunderstanding does your “in fact” sentence correct?', mode: 'Pair' },
        { question: 'Viewpoint — What later plan do you describe from the earlier past moment?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter34: Record<number, Exercise[]> = {
  34: [
    {
      id: 'abraham-b2-language-34-command-commitment', type: 'matching', title: 'From Command to Commitment',
      instructions: 'Match each expression with the stance or time relation it creates.',
      question: 'How does the dialogue move from a received command to a shared future task?',
      matchingPairs: [
        { left: 'Allah has commanded me to do an important task', right: 'presents a past command as still relevant at the moment of speaking' },
        { left: 'you will help me in this task', right: 'projects Ishmael’s role forward from the present dialogue' },
        { left: 'I will help you for sure', right: 'turns the projected role into an explicit commitment' },
        { left: 'commanded me to build a house', right: 'reports the required action without repeating the original command directly' },
      ],
      correctAnswer: {
        'Allah has commanded me to do an important task': 'presents a past command as still relevant at the moment of speaking',
        'you will help me in this task': 'projects Ishmael’s role forward from the present dialogue',
        'I will help you for sure': 'turns the projected role into an explicit commitment',
        'commanded me to build a house': 'reports the required action without repeating the original command directly',
      },
      explanation: 'The dialogue combines present relevance, future projection, commitment and reported instruction to organize a shared task.',
      feedback: { correct: 'Correct. You traced how command, projection and commitment work together.', incorrect: 'Look at what is already decided, what is projected forward, and what Ishmael personally commits to doing.' },
    },
    {
      id: 'abraham-b2-language-34-height-change', type: 'multiple-choice', title: 'Show Change Through Cause and Limitation',
      instructions: 'Choose the reformulation that best preserves the chapter’s cause-and-change relation.',
      question: 'Which version keeps the meaning of “When the building became high and ... Abraham could no longer lift the stones ... he stood over the stone of Al-Maqam”?',
      options: [
        'As the structure rose, Abraham eventually became unable to lift the stones high enough from the ground, so he changed how he worked by standing on Al-Maqam.',
        'Abraham stood on Al-Maqam before construction began because he had never been able to lift any stone.',
        'The building became lower, so Abraham no longer needed Ishmael’s help.',
      ], correctAnswer: 0,
      explanation: 'The wording presents a developing physical condition, a new limitation, and an adjusted method of action.',
      feedback: { correct: 'Correct. You preserved development → limitation → adaptation.', incorrect: 'Keep the sequence: the building rises, a limitation appears, then the method changes.' },
    },
    {
      id: 'abraham-b2-language-34-coordination-prayer', type: 'matching', title: 'Coordinate Action and Prayer',
      instructions: 'Match each phrase with its discourse function.',
      question: 'How does the chapter combine simultaneous work with a shared prayer?',
      matchingPairs: [
        { left: 'he stood over the stone of Al-Maqam', right: 'shows Abraham adapting his position to continue the work' },
        { left: 'Ishmael carried on handing him the stones', right: 'shows a continuing supporting action happening alongside Abraham’s work' },
        { left: 'both of them were saying', right: 'frames the prayer as a shared ongoing action during the building process' },
        { left: 'Accept this service from us', right: 'uses an imperative form as a respectful request rather than an order to an equal' },
      ],
      correctAnswer: {
        'he stood over the stone of Al-Maqam': 'shows Abraham adapting his position to continue the work',
        'Ishmael carried on handing him the stones': 'shows a continuing supporting action happening alongside Abraham’s work',
        'both of them were saying': 'frames the prayer as a shared ongoing action during the building process',
        'Accept this service from us': 'uses an imperative form as a respectful request rather than an order to an equal',
      },
      explanation: 'The passage layers coordinated physical actions with a simultaneous act of prayer, and the imperative in the prayer functions as supplication.',
      feedback: { correct: 'Correct. You identified coordination, continuity and the special function of the imperative in prayer.', incorrect: 'Separate the physical actions from the prayer, then ask what kind of speech act “Accept...” performs.' },
    },
    {
      id: 'abraham-b2-language-34-production', type: 'reflection', title: 'Write a Shared-Task Sequence',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about two people completing a demanding shared task. Include one present-relevance form such as “has asked/has required”, one future commitment with “will”, one reported instruction, one change expressed through “no longer”, one continuing parallel action, one cause→adaptation link, and one final respectful request or appeal.',
      question: 'Can you show how a task moves from instruction to commitment, difficulty, adaptation and coordinated completion?', correctAnswer: null,
      explanation: 'A strong B2 response should organize time, stance and coordinated action across a coherent paragraph rather than as isolated grammar examples.',
      feedback: { correct: 'Check that your forms create a clear progression from instruction to shared action and adaptation.', incorrect: '' },
      discussionPrompts: [
        { question: 'Commitment — Which sentence changes a plan into a personal promise?', mode: 'Individual' },
        { question: 'Change — Where does “no longer” mark a new limitation or situation?', mode: 'Pair' },
        { question: 'Coordination — Which two actions continue at the same time?', mode: 'Pair' },
        { question: 'Function — Is your final imperative a command, request, invitation or appeal?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusChapter35: Record<number, Exercise[]> = {
  35: [
    {
      id: 'abraham-b2-language-35-restoration-scope', type: 'matching', title: 'Restoration, Completion, and Scope',
      instructions: 'Match each expression with the meaning or discourse function it creates in the chapter.',
      question: 'How does the chapter distinguish Abraham’s role, the completion of his mission, and the intended scope of the Ka‘ba?',
      matchingPairs: [
        { left: 'was but the restorer of the structure', right: 'limits the claim: Abraham restores an earlier structure rather than being presented as its first-ever builder' },
        { left: 'was the completion of Abraham’s mission', right: 'presents reconstruction as the culminating stage of the mission described in the chapter' },
        { left: 'for all people, not just people of a chosen race or color', right: 'widens the scope and then explicitly rejects a narrower interpretation' },
        { left: 'This actually reminds us of the oneness of Allah', right: 'moves from a physical place and inclusive scope to an interpretive religious meaning' },
      ],
      correctAnswer: {
        'was but the restorer of the structure': 'limits the claim: Abraham restores an earlier structure rather than being presented as its first-ever builder',
        'was the completion of Abraham’s mission': 'presents reconstruction as the culminating stage of the mission described in the chapter',
        'for all people, not just people of a chosen race or color': 'widens the scope and then explicitly rejects a narrower interpretation',
        'This actually reminds us of the oneness of Allah': 'moves from a physical place and inclusive scope to an interpretive religious meaning',
      },
      explanation: 'The chapter carefully separates restoration from original construction, then connects completion, universal scope and interpretation.',
      feedback: { correct: 'Correct. You distinguished limitation, culmination, scope and interpretation.', incorrect: 'Look for the difference between what happened, how broadly it applies, and what meaning the writer draws from it.' },
    },
    {
      id: 'abraham-b2-language-35-evidence-interpretation', type: 'multiple-choice', title: 'Move from Evidence to Interpretation',
      instructions: 'Choose the reformulation that best preserves the chapter’s reasoning without strengthening its claims.',
      question: 'Which sentence best preserves the logic of “Reconstruction of the Ka‘ba and the call to pilgrimage ... are clear evidence that Prophet Abraham established the religion and invited those living in that region at that time to embrace it”?',
      options: [
        'The chapter treats reconstruction and the call to pilgrimage as evidence for Abraham’s religious mission in that region at that time, rather than as proof of every later historical development.',
        'The reconstruction proves with complete historical certainty that every society after Abraham immediately accepted Hanifism.',
        'Because the Ka‘ba was rebuilt, no other evidence or historical qualification is necessary.',
      ], correctAnswer: 0,
      explanation: 'The reformulation keeps the chapter’s evidence claim while preserving its explicit regional and temporal scope.',
      feedback: { correct: 'Correct. The wording preserves evidence, scope and qualification.', incorrect: 'Keep “in that region at that time” and do not expand the claim beyond what the chapter says.' },
    },
    {
      id: 'abraham-b2-language-35-coexistence-continuity', type: 'matching', title: 'Show Coexistence and Continuing Relevance',
      instructions: 'Match each expression with the relationship it builds across the final paragraph.',
      question: 'How does the chapter connect inherited faith, competing beliefs, and later relevance?',
      matchingPairs: [
        { left: 'his Hanif faith coexisted with idolatry', right: 'shows two belief systems existing in the same region at the same time without claiming one had disappeared' },
        { left: 'When people have lost their way and are looking for salvation', right: 'sets a recurring condition under which Abraham’s example is presented as relevant' },
        { left: 'has always been there to show them the right path', right: 'uses present-perfect continuity to connect an earlier figure with continuing guidance in later periods' },
        { left: 'especially true in societies where morals have worsened', right: 'narrows the general claim to situations of particular moral and religious decline' },
      ],
      correctAnswer: {
        'his Hanif faith coexisted with idolatry': 'shows two belief systems existing in the same region at the same time without claiming one had disappeared',
        'When people have lost their way and are looking for salvation': 'sets a recurring condition under which Abraham’s example is presented as relevant',
        'has always been there to show them the right path': 'uses present-perfect continuity to connect an earlier figure with continuing guidance in later periods',
        'especially true in societies where morals have worsened': 'narrows the general claim to situations of particular moral and religious decline',
      },
      explanation: 'The final paragraph layers coexistence, recurring conditions, continuing relevance and narrowed emphasis rather than presenting a simple chronological summary.',
      feedback: { correct: 'Correct. You traced how the ending moves from coexistence to recurring relevance.', incorrect: 'Separate simultaneous coexistence from the later, recurring conditions introduced by “when” and “especially”.' },
    },
    {
      id: 'abraham-b2-language-35-production', type: 'reflection', title: 'Write a Qualified Legacy Paragraph',
      instructions: 'Write or say an 8–10 sentence non-story paragraph about the legacy of a historical institution, idea, or reform. Include one phrase that limits an overstrong claim, one evidence → interpretation link, one “not just ...” scope contrast, one coexistence statement, one recurring condition with “when/whenever”, and one form showing continuing relevance such as “has remained / has continued / has served”.',
      question: 'Can you explain a legacy without turning interpretation into certainty or reducing it to a list of past events?', correctAnswer: null,
      explanation: 'A strong B2 response should distinguish event, evidence, interpretation, scope, coexistence and continuing relevance across a coherent paragraph.',
      feedback: { correct: 'Check that your paragraph moves from evidence to a qualified interpretation and then explains why the legacy still matters.', incorrect: '' },
      discussionPrompts: [
        { question: 'Qualification — Which sentence prevents your historical claim from becoming too strong?', mode: 'Individual' },
        { question: 'Evidence — What observation or event supports your interpretation?', mode: 'Pair' },
        { question: 'Scope — Where do you widen or narrow who, where, or when the claim applies to?', mode: 'Pair' },
        { question: 'Continuity — Which form connects the past with continuing relevance?', mode: 'Individual' },
      ],
    },
  ],
};

export const abrahamB2LanguageFocusPart3: Record<number, Exercise[]> = {
  ...abrahamB2LanguageFocusChapter19,
  ...abrahamB2LanguageFocusChapter20,
  ...abrahamB2LanguageFocusChapter21,
  ...abrahamB2LanguageFocusChapter22,
  ...abrahamB2LanguageFocusChapter23,
  ...abrahamB2LanguageFocusChapter24,
  ...abrahamB2LanguageFocusChapter25,
  ...abrahamB2LanguageFocusChapter26,
  ...abrahamB2LanguageFocusChapter27,
  ...abrahamB2LanguageFocusChapter28,
  ...abrahamB2LanguageFocusChapter29,
  ...abrahamB2LanguageFocusChapter30,
  ...abrahamB2LanguageFocusChapter31,
  ...abrahamB2LanguageFocusChapter32,
  ...abrahamB2LanguageFocusChapter33,
  ...abrahamB2LanguageFocusChapter34,
  ...abrahamB2LanguageFocusChapter35,
};
