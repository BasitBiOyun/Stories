import fs from 'fs';

const urls = [
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch1.mp3?alt=media&token=0b8932e8-d415-4e1b-846d-5b43c5e6c8a5",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch2.mp3?alt=media&token=a7ec7e2d-f33f-41c3-b6c8-5816abceea1a",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch3.mp3?alt=media&token=0dcc80e8-706d-4b22-85bd-2c269180bd8b",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch4.mp3?alt=media&token=c077f30d-5f0e-4030-a373-069abf985246",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch5.mp3?alt=media&token=88331cdd-99ae-459f-a260-5b3f2351635f",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch6.mp3?alt=media&token=6abb93df-41c0-4d46-81a4-bf52e53ff672",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch7.mp3?alt=media&token=802716e0-1e3e-4f5f-99a4-a481ac28491c",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch8.mp3?alt=media&token=7350d4c8-c0f2-4474-8c38-4bd374a21d40",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch9.mp3?alt=media&token=81c54390-7d2e-4d99-9d10-6935c85a3bbe",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch10.mp3?alt=media&token=be3bea4e-5ae6-488c-9a07-46e885b5d89c",
  "https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/adam_b2%2Faudio%2Fadam_b2_ch11.mp3?alt=media&token=2d3f4f6a-09fd-4706-bfab-b2f4b2287cd9"
];

let content = fs.readFileSync('src/data/adam/b2/en/pages.ts', 'utf8');

for (let i = 0; i < urls.length; i++) {
  const parts = content.split(/audioUrl:\s*'(.*?)'/);
  if (parts[2 * i + 1]) {
    parts[2 * i + 1] = urls[i];
  }
  let newContent = parts[0];
  for (let j = 1; j < parts.length; j += 2) {
    newContent += `audioUrl: '${parts[j]}'` + parts[j+1];
  }
  content = newContent;
}

fs.writeFileSync('src/data/adam/b2/en/pages.ts', content, 'utf8');
console.log('updated src/data/adam/b2/en/pages.ts');
