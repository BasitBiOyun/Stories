const fs = require('fs');

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

const mapIdToUrl = {
  1: urls[0],   // ch1
  2: urls[1],   // ch2
  3: urls[2],   // ch3
  4: urls[3],   // ch4
  5: urls[4],   // ch5
  6: urls[5],   // ch6
  7: urls[6],   // ch7
  8: urls[7],   // ch8
  9: urls[8],   // ch9
  10: urls[9],  // ch10
  11: urls[10]  // ch11
};

const regex = /id:\s*(\d+),[\s\S]*?audioUrl:\s*'(.*?)'/g;

content = content.replace(regex, (match, idStr, oldUrl) => {
  const id = parseInt(idStr, 10);
  if (mapIdToUrl[id]) {
    return match.replace(oldUrl, mapIdToUrl[id]);
  }
  return match;
});

// Since id 12 was previously modified incorrectly with the original script,
// let's revert it back to a placeholder or the default A2 one if it was replaced.
content = content.replace(
  /id:\s*12,[\s\S]*?audioUrl:\s*'(.*?)'/,
  (match, oldUrl) => match.replace(oldUrl, 'https://firebasestorage.googleapis.com/v0/b/gen-lang-client-0373200489.firebasestorage.app/o/Adam_A2%2Fadam_a2_english_chapter4.mp3?alt=media&token=f914c90b-6fe7-4cbc-881d-a92f77495bc3')
);

fs.writeFileSync('src/data/adam/b2/en/pages.ts', content, 'utf8');
console.log('updated src/data/adam/b2/en/pages.ts');
