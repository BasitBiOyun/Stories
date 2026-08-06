import * as fs from 'fs';

function findLines(filePath: string) {
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    console.log(`=== ${filePath} ===`);
    lines.forEach((line, index) => {
      if (line.includes('id: 4,') || line.includes('id: 8,') || line.includes('id: 9,') || line.includes('id: 1,') || line.includes('id: 2,') || line.includes('id: 5,') || line.includes('id: 7,') || line.includes('id: 10,') || line.includes('id: 11,') || line.includes('id: 12,') || line.includes('id: 13,')) {
        console.log(`Line ${index + 1}: ${line}`);
      }
    });
  } else {
    console.log(`File not found: ${filePath}`);
  }
}

findLines('app/applet/src/data/abraham/b1/en/pages.ts');
findLines('app/applet/src/data/abraham/b1/ar/pages.ts');
