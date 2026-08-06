import fs from 'fs';
const file = 'src/data/abraham/b2/en/pages.ts';
let pageStr = fs.readFileSync(file, 'utf8');

for (let id = 13; id <= 34; id++) {
  const regex = new RegExp('(\\"id\\":\\s*' + id + ',[\\s\\S]*?\\"exercises\\":\\s*\\[[\\s\\S]*?\\n\\s{4}\\])[\\s\\S]*?\\n\\s{4}\\]', 'g');
  console.log('Fixing syntax for chapter ID: ' + id);
  pageStr = pageStr.replace(regex, '$1');
}

fs.writeFileSync(file, pageStr);
console.log('Done fixing JSON syntax!');
