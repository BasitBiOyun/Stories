import fs from 'fs';
import path from 'path';

function testParsing() {
  // B1
  const b1Path = path.join(process.cwd(), 'abraham_b1_ar.md');
  const b1Md = fs.readFileSync(b1Path, 'utf8');
  const b1Sections = b1Md.split(/## [^\n]+/);
  // b1Sections[0] is the header/title of the file, skip it
  const b1Chapters = b1Sections.slice(1).map(s => s.trim().replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n'));
  console.log('B1 Chapters found:', b1Chapters.length);

  // B2
  const b2Path = path.join(process.cwd(), 'abraham_b2_ar.md');
  const b2Md = fs.readFileSync(b2Path, 'utf8');
  const b2Sections = b2Md.split(/## CHAPTER\s*\d+/i);
  const b2Chapters = b2Sections.slice(1).map(s => s.trim().replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n'));
  console.log('B2 Chapters found:', b2Chapters.length);
}

testParsing();
