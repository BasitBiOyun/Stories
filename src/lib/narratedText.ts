/**
 * Whether a recording still matches the text on screen. Only differences a listener could hear count:
 * Arabic harakat (the recording was made from the same words, read the same way) and how the text is
 * split into lines and paragraphs do not make a recording out of date.
 */
const spoken = (text: string) => text.replace(/[\u064B-\u0652\u0670]/g, '').replace(/\u0671/g, '\u0627').replace(/\s+/g, ' ').trim();

export const sameNarratedText = (recorded: string, shown: string): boolean => spoken(recorded) === spoken(shown);
