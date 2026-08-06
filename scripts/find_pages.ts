import * as fs from 'fs';
import * as path from 'path';

function walkDir(dir: string, fileList: string[] = []) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkDir(filePath, fileList);
      }
    } else {
      if (file === 'pages.ts') {
        fileList.push(filePath);
      }
    }
  });
  return fileList;
}

const allPagesFiles = walkDir('.');
console.log("All pages.ts files found:", allPagesFiles);
