import * as fs from 'fs';

const text = fs.readFileSync('./src/data/abraham/b1/en/pages.ts', 'utf8');
const pages = text.split('"type": "story"');

for (let i = 1; i < pages.length; i++) {
  const page = pages[i];
  
  const vocabMatch = page.match(/"vocabulary":\s*\[(.*?)\]/s);
  const animatedMatch = page.match(/"animatedWords":\s*\[(.*?)\]/s);
  
  if (vocabMatch && animatedMatch) {
     const vocabWords = [];
     const wordRegex = /"word":\s*"(.*?)"/g;
     let wMatch;
     while ((wMatch = wordRegex.exec(vocabMatch[1])) !== null) {
         vocabWords.push(wMatch[1]);
     }
     
     const animated = animatedMatch[1].match(/"(.*?)"/g)?.map(s => s.replace(/"/g, '')) || [];
     
     animated.forEach(aw => {
       if (!vocabWords.includes(aw)) {
         console.log(`Page ${i}: Missing in vocab: ${aw} | Vocab has: ${vocabWords.join(', ')}`);
       }
     });
  }
}
