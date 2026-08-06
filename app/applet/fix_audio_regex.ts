import * as fs from 'fs';
import * as path from 'path';

const appPath = path.join(__dirname, 'src/App.tsx');
let content = fs.readFileSync(appPath, 'utf8');

// Define the robust parseChapterNumber helper function
const helperCode = `  useEffect(() => {
    const parseChapterNumber = (name: string): number | null => {
      // 1. Try to match 'chapter' followed by optional separators and then digits
      let match = name.match(/chapter\\s*[-_]?\\s*(\\d+)/i);
      if (match) return parseInt(match[1], 10);

      // 2. Try to match 'ch' followed by optional separators and then digits
      match = name.match(/\\bch\\s*[-_]?\\s*(\\d+)/i) || name.match(/_ch\\s*[-_]?\\s*(\\d+)/i);
      if (match) return parseInt(match[1], 10);

      // 3. Strip 'a1', 'a2', 'b1', 'b2' to avoid false positives from the level name in the prefix
      const cleanedName = name.replace(/\\b[ab][12]\\b/i, '').replace(/^[ab][12]\\s*[-_]?\\s*/i, '');
      match = cleanedName.match(/(\\d+)/);
      if (match) return parseInt(match[1], 10);

      return null;
    };`;

// Replace the start of useEffect with our helper function included
content = content.replace('  useEffect(() => {\n    const fetchB2Images', helperCode + '\n\n    const fetchB2Images');

// Now we replace all map item parsing blocks inside the fetch functions.
// We can replace the specific target regex blocks with the simplified parseChapterNumber(name)
const targetBlockRegexes = [
  // For A2 image loaders
  {
    target: `        const parsedItems = res.items.map(item => {
          const name = item.name;
          const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i);
          const chNum = match ? parseInt(match[1], 10) : null;
          return { item, chNum };
        })`,
    replacement: `        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        })`
  },
  // For B1/B2 audio loaders
  {
    target: `        const parsedItems = res.items.map(item => {
          const name = item.name;
          const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i) || name.match(/chapter_?(\\d+)/i) || name.match(/(\\d+)/);
          const chNum = match ? parseInt(match[1], 10) : null;
          return { item, chNum };
        })`,
    replacement: `        const parsedItems = res.items.map(item => {
          const name = item.name;
          const chNum = parseChapterNumber(name);
          return { item, chNum };
        })`
  }
];

// Let's do replacements. Note that formatting (spaces, newlines) must be precise or we can do a direct string replace of the inner map function bodies.
// To make it fully robust, let's replace the map bodies directly.
// In the file, the structure is:
//         const parsedItems = res.items.map(item => {
//           const name = item.name;
//           const match = name.match(/_ch(\d+)/i) || name.match(/ch(\d+)/i);
//           const chNum = match ? parseInt(match[1], 10) : null;
//           return { item, chNum };
//         })
// We can use a global replace for these blocks!

content = content.split('const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i);\\n          const chNum = match ? parseInt(match[1], 10) : null;').join('const chNum = parseChapterNumber(name);');
content = content.split('const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i);\\r\\n          const chNum = match ? parseInt(match[1], 10) : null;').join('const chNum = parseChapterNumber(name);');

content = content.split('const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i) || name.match(/chapter_?(\\d+)/i) || name.match(/(\\d+)/);\\n          const chNum = match ? parseInt(match[1], 10) : null;').join('const chNum = parseChapterNumber(name);');
content = content.split('const match = name.match(/_ch(\\d+)/i) || name.match(/ch(\\d+)/i) || name.match(/chapter_?(\\d+)/i) || name.match(/(\\d+)/);\\r\\n          const chNum = match ? parseInt(match[1], 10) : null;').join('const chNum = parseChapterNumber(name);');

fs.writeFileSync(appPath, content, 'utf8');
console.log("src/App.tsx updated successfully!");
