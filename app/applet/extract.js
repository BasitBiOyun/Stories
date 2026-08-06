const fs = require('fs');

const pageStr = fs.readFileSync('src/data/abraham/b2/en/pages.ts', 'utf8');
const results = [];

const regex = /"id":\s*(\d+),[\s\S]*?"title":\s*"([^"]+)",[\s\S]*?"content":\s*"([\s\S]*?)",[\s\S]*?"exercises":\s*(\[[\s\S]*?\])\s*\}/g;

let match;
while ((match = regex.exec(pageStr)) !== null) {
  let ex = null;
  try {
    // try to parse exercises string array
    const exStr = match[4].replace(/"/g, '"'); 
    ex = eval(match[4]);
  } catch(e) {}
  
  results.push({
    id: match[1],
    title: match[2],
    content: match[3].substring(0, 150).replace(/\n/g, ' '),
    question: ex && ex[0] ? ex[0].question : null
  });
}

fs.writeFileSync('dump.json', JSON.stringify(results, null, 2));
