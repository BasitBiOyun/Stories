import * as fs from 'fs';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';
import { mosesA2Pages } from '../src/data/moses/a2/en/pages';
import { mosesA2PagesAr } from '../src/data/moses/a2/ar/pages';
import { mosesB1Pages } from '../src/data/moses/b1/en/pages';
import { mosesB1PagesAr } from '../src/data/moses/b1/ar/pages';
import { mosesB2Pages } from '../src/data/moses/b2/en/pages';
import { mosesB2PagesAr } from '../src/data/moses/b2/ar/pages';

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
  const endIdx = cleaned.lastIndexOf('}');
  if (endIdx === -1) {
    throw new Error("No closing brace '}' found in the response.");
  }
  
  cleaned = cleaned.substring(startIdx, endIdx + 1);
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse JSON. Content was:", cleaned);
    throw err;
  }
}

// System prompt / instructions
const systemInstruction = `You are an expert curriculum developer, translator, and linguist specializing in teaching Arabic as a second language.
Your task is to align and translate metadata (content, vocabulary, animatedWords, hotspots) for Prophet Moses (Musa) stories from English to Arabic.

For each page, you will be given:
1. Target Level (A2, B1, or B2)
2. English Page data (fully populated with correct English content, vocabulary, animatedWords, and hotspots)
3. Existing Arabic Page data (partially aligned, may have different vocabulary counts or animatedWords, but contains the high-quality base translation of the story)

Your goals:
1. Align the Arabic page's 'content' to match the English page's 'content' exactly in terms of meaning, sentences, and page boundaries. If text was shifted from one page to another in the existing Arabic content, adjust the Arabic content so it contains exactly what is described in the English content of THIS page, while keeping the beautiful literary style of the existing Arabic.
2. Provide 'vocabulary' array where each item corresponds exactly (1-to-1 in order and count) to the English vocabulary item.
   - The 'word' field MUST be the exact Arabic word/phrase as it appears in the Arabic content (optionally with diacritics).
   - The 'definition' field MUST be a clear, accurate Arabic definition translated from the English definition.
3. Provide 'animatedWords' array where each item corresponds exactly (1-to-1 in order and count) to the English animatedWords.
   - Each Arabic word MUST exist inside the Arabic content of this page.
4. Provide 'hotspots' array where each item corresponds exactly (1-to-1 in order and count) to the English hotspots.
   - Preserve the exact 'id', 'x', and 'y' coordinates from the English hotspot.
   - Translate 'title' and 'description' fields into elegant Arabic.
5. Strict level guidelines:
   - For A2 (Elementary): ALL Arabic definitions, hotspot descriptions, and titles MUST be written in extremely simple, basic, and clear Arabic. You MUST NOT use any complex, advanced, or B1/B2-level words or grammatical structures. Use words that a beginner student can easily understand.
   - For B1 (Intermediate): Use clear, intermediate-level Arabic definitions and descriptions.
   - For B2 (Advanced): Use rich, advanced, and expressive Arabic vocabulary and idioms.
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
Ensure NO double-quotes are placed INSIDE any string values. Use single quotes (') or Arabic quotes (« and ») instead. Do NOT use markdown code blocks or backticks in your output.`;

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
          systemInstruction: systemInstruction,
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
        // Do NOT increment attempts for quota issues so we can keep retrying
        continue;
      }

      attempts++;
      console.warn(`[Page ${enPage.id}] Attempt ${attempts} failed: ${errMsg}. Retrying...`);
      await delay(4000);
    }
  }
  throw new Error(`Failed to align page ${enPage.id} after 10 attempts`);
}

async function processLevel(level: string, enPages: any[], arPages: any[], outputPath: string, exercisesImportName: string) {
  console.log(`\n=== ALIGNING LEVEL ${level} ===`);
  const updatedPages: any[] = [];

  for (let i = 0; i < enPages.length; i++) {
    const enPage = enPages[i];
    const arPage = arPages.find((p: any) => p.id === enPage.id) || arPages[i];

    if (enPage.type !== 'story') {
      // Non-story pages (like review exercises, challenges, etc.) don't need semantic alignment.
      // We keep the original Arabic page as-is, or translate minor elements if they differ.
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

  // Serialize the updatedPages back to TS
  // We'll replace the stringified exercises array on the review page with the exercise variable reference.
  let pagesString = JSON.stringify(updatedPages, null, 2);

  // Replace back the exercise reference
  const exercisesRegex = new RegExp(`"exercises":\\s*\\[[\\s\\S]*?\\bid:\\s*"ex[\\s\\S]*?\\]`, 'g');
  // Wait, let's find the review page in updatedPages
  const reviewPageIndex = updatedPages.findIndex(p => p.type === 'exercises');
  if (reviewPageIndex !== -1) {
    const reviewPage = updatedPages[reviewPageIndex];
    // We can replace the serialized version of reviewPage.exercises with the variable name
    const targetString = `"exercises": ${JSON.stringify(reviewPage.exercises, null, 2)}`;
    pagesString = pagesString.replace(targetString, `"exercises": ${exercisesImportName}`);
  }

  const tsContent = `import { PageData } from '../../../../types';
import { ${exercisesImportName} } from './exercises';

export const pages: PageData[] = ${pagesString};

export const moses${level}PagesAr: PageData[] = pages;
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log(`Completed ${level}. Output saved to ${outputPath}`);
}

async function run() {
  try {
    console.log("A2 already aligned successfully. Skipping.");
    console.log("B1 already aligned successfully. Skipping.");

    await processLevel(
      "B2",
      mosesB2Pages,
      mosesB2PagesAr,
      path.join(process.cwd(), 'src/data/moses/b2/ar/pages.ts'),
      'mosesB2FinalReviewExercises'
    );

    console.log('\nAll levels aligned successfully!');
  } catch (err) {
    console.error('Alignment process failed:', err);
    process.exit(1);
  }
}

run();
