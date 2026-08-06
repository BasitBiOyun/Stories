import * as fs from 'fs';

const filePath = './src/data/abraham/b1/en/pages.ts';
const text = fs.readFileSync(filePath, 'utf8');

let newText = text;

// Regular expression to match all pages.
// But we can just use JSON parser if we extract the array.
// Wait, the file exports a constant array.
// It's easier to use a regex replacement function for each story page block.

newText = newText.replace(/("type":\s*"story".*?"vocabulary":\s*\[)(.*?)(\].*?"animatedWords":\s*\[)(.*?)(\])/gs, (match, prefix, vocabStr, mid, animStr, suffix) => {
    // Extract words from vocabStr
    const wordRegex = /"word":\s*"(.*?)"/g;
    const words = [];
    let wMatch;
    while ((wMatch = wordRegex.exec(vocabStr)) !== null) {
        words.push(`"${wMatch[1]}"`);
    }
    
    // Create new animatedWords
    const newAnimStr = '\n      ' + words.join(',\n      ') + '\n    ';
    return prefix + vocabStr + mid + newAnimStr + suffix;
});

fs.writeFileSync(filePath, newText, 'utf8');
console.log('Fixed pages.ts');
