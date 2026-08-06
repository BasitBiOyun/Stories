import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';
import { meccaB2Pages } from '../src/data/mecca/b2/en/pages';
import { meccaB2PagesAr } from '../src/data/mecca/b2/ar/pages';

// Initialize the Gemini Client
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
    timeout: 120000
  }
});

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

function cleanAndParseJSON(text: string): any {
  let cleaned = text.trim();
  const startIdx = cleaned.indexOf('{');
  if (startIdx === -1) {
    throw new Error("No opening brace '{' found in the response.");
  }
  
  // Let's find the correct matching closing brace
  let braceCount = 0;
  let endIdx = -1;
  let inString = false;
  let escape = false;

  for (let i = startIdx; i < cleaned.length; i++) {
    const char = cleaned[i];
    if (escape) {
      escape = false;
      continue;
    }
    if (char === '\\') {
      escape = true;
      continue;
    }
    if (char === '"') {
      inString = !inString;
      continue;
    }
    if (!inString) {
      if (char === '{') {
        braceCount++;
      } else if (char === '}') {
        braceCount--;
        if (braceCount === 0) {
          endIdx = i;
          break;
        }
      }
    }
  }

  if (endIdx === -1) {
    throw new Error("Could not find matching closing brace '}' for the JSON object.");
  }

  const jsonContent = cleaned.substring(startIdx, endIdx + 1);
  try {
    return JSON.parse(jsonContent);
  } catch (err) {
    console.error("Failed to parse matching JSON block. Content was:", jsonContent);
    throw err;
  }
}

const systemInstructions: Record<string, string> = {
  B2: `You are an expert curriculum developer, translator, and linguist specializing in teaching Arabic as a second language.
Your task is to align and translate metadata (content, vocabulary, animatedWords, hotspots) for the Mecca stories from English to Arabic at the B2 (Advanced) level.

Your goals:
1. Align the Arabic page's 'content' to match the English page's 'content' exactly in terms of meaning, sentences, and page boundaries. Keep the beautiful literary style of the existing Arabic.
2. Provide 'vocabulary' array where each item corresponds exactly (1-to-1 in order and count) to the English vocabulary item.
   - The 'word' field MUST be the exact Arabic word/phrase as it appears in the Arabic content (with appropriate diacritics / harakat).
   - Ensure that the Arabic 'word' is written EXACTLY as it appears in your aligned 'content' (including spelling, prefix letters like waw or fa, and diacritics or lack thereof, so that highlight matching is 100% exact).
   - The 'definition' field MUST be a clear, accurate Arabic definition translated from the English definition.
3. Provide 'animatedWords' array where each item corresponds exactly (1-to-1 in order and count) to the English animatedWords.
   - Each Arabic word MUST exist inside your 'content' of this page.
   - Ensure that the Arabic word in 'animatedWords' is written EXACTLY as it appears in your aligned 'content' (identical spelling and diacritics, so highlighting can find it).
4. Provide 'hotspots' array where each item corresponds exactly (1-to-1 in order and count) to the English hotspots.
   - Preserve the exact 'id', 'x', and 'y' coordinates from the English hotspot.
   - Translate 'title' and 'description' fields into elegant Arabic.
5. Strict level guidelines:
   - For B2 (Advanced): Use rich, advanced, and expressive Arabic vocabulary, idioms, and definitions.
6. Diacritics (Harakat / تشكيل كامل):
   - You MUST add full diacritics (harakat/تشكيل) to the Arabic vocabulary words, definitions, hotspot titles, and hotspot descriptions.
7. Output format: You must return ONLY a JSON object containing the updated fields:
{
  "title": "Arabic Title (with diacritics)",
  "content": "Full aligned Arabic content with appropriate diacritics",
  "vocabulary": [
    { "word": "الْكَلِمَة", "definition": "التَّعْرِيفُ الْكَامِلُ مَعَ التَّشْكِيلِ" }
  ],
  "animatedWords": [
    "الْكَلِمَةُ_الْأُولَى", "الْكَلِمَةُ_الثَّانِيَة"
  ],
  "hotspots": [
    { "id": "hX-Y", "x": 30, "y": 45, "title": "الْعُنْوَانُ", "description": "الْوَصْفُ مَعَ التَّشْكِيلِ" }
  ]
}
Ensure NO double-quotes are placed INSIDE any string values. Use single quotes (') or Arabic quotes (« and ») instead. Do NOT use markdown code blocks or backticks in your output.`
};

async function alignPage(level: string, enPage: any, arPage: any): Promise<any> {
  const prompt = `
Target Level: ${level}

--- English Page (Reference) ---
Title: ${enPage.title}
Content: ${enPage.content}
Vocabulary: ${JSON.stringify(enPage.vocabulary, null, 2)}
AnimatedWords: ${JSON.stringify(enPage.animatedWords, null, 2)}
Hotspots: ${JSON.stringify(enPage.hotspots, null, 2)}

--- Existing Arabic Page (Base Context) ---
Title: ${arPage.title}
Content: ${arPage.content}
Vocabulary: ${JSON.stringify(arPage.vocabulary, null, 2)}
AnimatedWords: ${JSON.stringify(arPage.animatedWords, null, 2)}
Hotspots: ${JSON.stringify(arPage.hotspots, null, 2)}
`;

  let attempts = 0;
  while (attempts < 10) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          systemInstruction: systemInstructions[level],
          responseMimeType: 'application/json',
          temperature: 0.1,
        }
      });

      const text = response.text?.trim() || '';
      const alignedData = cleanAndParseJSON(text);

      // Simple validation of counts
      if (alignedData.vocabulary.length !== enPage.vocabulary.length) {
        throw new Error(`Vocabulary length mismatch! Expected ${enPage.vocabulary.length}, got ${alignedData.vocabulary.length}`);
      }
      if (alignedData.animatedWords.length !== enPage.animatedWords.length) {
        throw new Error(`AnimatedWords length mismatch! Expected ${enPage.animatedWords.length}, got ${alignedData.animatedWords.length}`);
      }
      if (alignedData.hotspots.length !== enPage.hotspots.length) {
        throw new Error(`Hotspots length mismatch! Expected ${enPage.hotspots.length}, got ${alignedData.hotspots.length}`);
      }

      return alignedData;
    } catch (err: any) {
      const errMsg = String(err.message || err);
      const isQuota = errMsg.includes('429') || errMsg.includes('RESOURCE_EXHAUSTED') || errMsg.toLowerCase().includes('quota');

      if (isQuota) {
        console.warn(`[Page ${enPage.id}] Quota hit. Waiting 35 seconds to cool down...`);
        await delay(35000);
        continue;
      }

      attempts++;
      console.warn(`[Page ${enPage.id}] Attempt ${attempts} failed: ${errMsg}. Retrying...`);
      await delay(4000);
    }
  }
  throw new Error(`Failed to align page ${enPage.id} after 10 attempts`);
}

async function processLevel(level: string, enPages: any[], arPages: any[], outputPath: string, exercisesImportName: string, exportVarName: string) {
  console.log(`\n=== ALIGNING LEVEL ${level} ===`);
  const updatedPages: any[] = [];

  for (let i = 0; i < enPages.length; i++) {
    const enPage = enPages[i];
    const arPage = arPages.find((p: any) => p.id === enPage.id) || arPages[i];

    if (enPage.type !== 'story') {
      console.log(`[Page ${enPage.id}] Skipping non-story page (type: ${enPage.type})`);
      updatedPages.push(arPage);
      continue;
    }

    console.log(`[Page ${enPage.id}] Aligning "${enPage.title}"...`);
    const alignedFields = await alignPage(level, enPage, arPage);

    const mergedPage = {
      ...arPage,
      title: alignedFields.title,
      content: alignedFields.content,
      vocabulary: alignedFields.vocabulary,
      animatedWords: alignedFields.animatedWords,
      hotspots: alignedFields.hotspots,
    };

    updatedPages.push(mergedPage);
    await delay(1000); // Small pause to prevent rate limiting
  }

  // Serialize updatedPages back to TS
  let pagesString = JSON.stringify(updatedPages, null, 2);

  const reviewPageIndex = updatedPages.findIndex(p => p.type === 'exercises');
  if (reviewPageIndex !== -1) {
    const reviewPage = updatedPages[reviewPageIndex];
    const targetString = `"exercises": ${JSON.stringify(reviewPage.exercises, null, 2)}`;
    pagesString = pagesString.replace(targetString, `"exercises": ${exercisesImportName}`);
  }

  const tsContent = `import { PageData } from '../../../../types';
import { ${exercisesImportName} } from './exercises';

export const ${exportVarName}: PageData[] = ${pagesString};

export const pages: PageData[] = ${exportVarName};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`Completed ${level}. Output saved to ${outputPath}`);
}

async function run() {
  try {
    // Process B2
    await processLevel(
      "B2",
      meccaB2Pages,
      meccaB2PagesAr,
      path.join(process.cwd(), 'src/data/mecca/b2/ar/pages.ts'),
      'meccaB2FinalReviewExercisesAr',
      'meccaB2PagesAr'
    );

    console.log('\nAll levels aligned successfully!');
  } catch (err) {
    console.error('Alignment process failed:', err);
    process.exit(1);
  }
}

run();
