import * as fs from 'fs';
let txt = fs.readFileSync('src/data/abraham/b1/en/pages.ts', 'utf8');
txt = txt.replace(/\{\s*"id": 15,\s*"type": "exercises",\s*"title": "B1 Final Review.*?\}\s*\]\s*\},\s*/s, '');
fs.writeFileSync('src/data/abraham/b1/en/pages.ts', txt);
