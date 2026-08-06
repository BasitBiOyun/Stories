import fs from 'fs';
import path from 'path';
import { GoogleGenAI } from '@google/genai';
import { abrahamB1Pages } from '../src/data/abraham/b1/en/pages';
import { abrahamB2Pages } from '../src/data/abraham/b2/en/pages';

// Set up Gemini Client
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
  if (cleaned.startsWith('```')) {
    const firstNewline = cleaned.indexOf('\n');
    const lastBackticks = cleaned.lastIndexOf('```');
    if (firstNewline !== -1 && lastBackticks !== -1 && lastBackticks > firstNewline) {
      cleaned = cleaned.substring(firstNewline + 1, lastBackticks).trim();
    }
  }
  if (cleaned.startsWith('```json')) {
    cleaned = cleaned.substring(7).trim();
  }
  if (cleaned.endsWith('```')) {
    cleaned = cleaned.substring(0, cleaned.length - 3).trim();
  }
  try {
    return JSON.parse(cleaned);
  } catch (err) {
    console.error("Failed to parse JSON. Content was:", cleaned);
    throw err;
  }
}

async function translateMetadataBatch(batch: any[], contextPrompt: string): Promise<any[]> {
  const prompt = `
You are an expert translator for educational materials on Islamic history and Arabic language.
Translate the following array of JSON objects from English to Arabic.
Context: ${contextPrompt}

Requirements:
1. Translate all text strings to natural, professional, and elegant Arabic.
2. For vocabulary words, definitions, exercises, questions, options, explanations, and feedbacks, use full diacritics (harakat/تشكيل) to help intermediate/advanced learners read and understand perfectly.
3. Keep the exact same JSON structure, keys, and values (for numbers, booleans, ids, x, y coordinates, and other non-text fields).
4. For animatedWords, translate each word to match its corresponding translated word in the vocabulary list exactly.
5. Do NOT use any double quotes (") inside any string values in the translated JSON. If you need to use quotes inside a string, use single quotes (') or Arabic quotation marks (« and »). This is critical to prevent JSON parsing errors.
6. Return ONLY the valid JSON array of objects. Do NOT wrap it in markdown code blocks or backticks.

JSON to translate:
${JSON.stringify(batch, null, 2)}
`;

  let attempts = 0;
  while (attempts < 5) {
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-lite',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        }
      });
      
      const text = response.text?.trim() || '';
      return cleanAndParseJSON(text);
    } catch (err: any) {
      attempts++;
      let waitTime = 5000;
      if (err.status === 429 || (err.message && err.message.includes('429')) || (err.message && err.message.includes('quota'))) {
        console.warn(`Quota or Rate Limit reached. Sleeping for 30 seconds before attempt ${attempts}...`);
        waitTime = 30000;
      } else {
        console.warn(`Attempt ${attempts} failed. Retrying in ${waitTime/1000} seconds...`, err.message || err);
      }
      await delay(waitTime);
    }
  }
  throw new Error('Failed to translate batch metadata after 5 attempts');
}

async function processB1() {
  console.log('--- Processing B1 Arabic Pages ---');
  const b1Path = path.join(process.cwd(), 'abraham_b1_ar.md');
  const b1Md = fs.readFileSync(b1Path, 'utf8');
  const b1Sections = b1Md.split(/## [^\n]+/);
  const b1Chapters = b1Sections.slice(1).map(s => s.trim().replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n'));

  const translatedB1Pages: any[] = [];
  const batchSize = 3;

  for (let i = 0; i < abrahamB1Pages.length; i += batchSize) {
    const pageBatch = abrahamB1Pages.slice(i, i + batchSize);
    console.log(`B1: Processing page batch ${i} to ${i + pageBatch.length}...`);

    const batchToTranslate = pageBatch.map(page => {
      if (page.type === 'story') {
        return {
          id: page.id,
          type: page.type,
          title: page.title,
          vocabulary: page.vocabulary || [],
          hotspots: page.hotspots || [],
          exercises: page.exercises || [],
          animatedWords: page.animatedWords || []
        };
      } else {
        const { audioUrl, image, ...meta } = page as any;
        return meta;
      }
    });

    const translatedBatch = await translateMetadataBatch(
      batchToTranslate,
      'Review, stories, and quiz pages about Prophet Abraham (B1 Intermediate Arabic).'
    );

    for (const originalPage of pageBatch) {
      const translatedMeta = translatedBatch.find((p: any) => p.id === originalPage.id);
      if (!translatedMeta) {
        throw new Error(`Could not find translated metadata for page id ${originalPage.id}`);
      }
      
      if (originalPage.type === 'story') {
        const arabicContent = b1Chapters[originalPage.id - 1];
        translatedB1Pages.push({
          ...originalPage,
          title: translatedMeta.title,
          content: arabicContent,
          vocabulary: translatedMeta.vocabulary,
          hotspots: translatedMeta.hotspots,
          exercises: translatedMeta.exercises,
          animatedWords: translatedMeta.animatedWords
        });
      } else {
        translatedB1Pages.push({
          ...originalPage,
          ...translatedMeta
        });
      }
    }

    await delay(3000);
  }

  const outputPath = path.join(process.cwd(), 'src', 'data', 'abraham', 'b1', 'ar', 'pages.ts');
  const tsContent = `import { PageData } from '../../../../types';

export const abrahamB1PagesAr: PageData[] = ${JSON.stringify(translatedB1Pages, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log('Successfully wrote B1 Arabic pages to', outputPath);
}

async function processB2() {
  console.log('--- Processing B2 Arabic Pages ---');
  const b2Path = path.join(process.cwd(), 'abraham_b2_ar.md');
  const b2Md = fs.readFileSync(b2Path, 'utf8');
  const b2Sections = b2Md.split(/## CHAPTER\s*\d+/i);
  const b2Chapters = b2Sections.slice(1).map(s => s.trim().replace(/\r\n/g, '\n').replace(/\n{3,}/g, '\n\n'));

  const translatedB2Pages: any[] = [];
  const batchSize = 3;

  for (let i = 0; i < abrahamB2Pages.length; i += batchSize) {
    const pageBatch = abrahamB2Pages.slice(i, i + batchSize);
    console.log(`B2: Processing page batch ${i} to ${i + pageBatch.length}...`);

    const batchToTranslate = pageBatch.map(page => {
      if (page.type === 'story') {
        return {
          id: page.id,
          type: page.type,
          title: page.title,
          vocabulary: page.vocabulary || [],
          hotspots: page.hotspots || [],
          exercises: page.exercises || [],
          animatedWords: page.animatedWords || []
        };
      } else {
        const { audioUrl, image, ...meta } = page as any;
        return meta;
      }
    });

    const translatedBatch = await translateMetadataBatch(
      batchToTranslate,
      'Review, stories, and final challenge pages about Prophet Abraham (B2 Advanced Arabic).'
    );

    for (const originalPage of pageBatch) {
      const translatedMeta = translatedBatch.find((p: any) => p.id === originalPage.id);
      if (!translatedMeta) {
        throw new Error(`Could not find translated metadata for page id ${originalPage.id}`);
      }
      
      if (originalPage.type === 'story') {
        let arabicContent = originalPage.content;
        if (originalPage.id <= 35) {
          arabicContent = b2Chapters[originalPage.id - 1];
        }
        translatedB2Pages.push({
          ...originalPage,
          title: translatedMeta.title,
          content: arabicContent,
          vocabulary: translatedMeta.vocabulary,
          hotspots: translatedMeta.hotspots,
          exercises: translatedMeta.exercises,
          animatedWords: translatedMeta.animatedWords
        });
      } else {
        translatedB2Pages.push({
          ...originalPage,
          ...translatedMeta
        });
      }
    }

    await delay(3000);
  }

  const outputPath = path.join(process.cwd(), 'src', 'data', 'abraham', 'b2', 'ar', 'pages.ts');
  const tsContent = `import { PageData } from '../../../../types';

export const abrahamB2PagesAr: PageData[] = ${JSON.stringify(translatedB2Pages, null, 2)};
`;

  fs.writeFileSync(outputPath, tsContent);
  console.log('Successfully wrote B2 Arabic pages to', outputPath);
}

async function run() {
  try {
    await processB1();
    await processB2();
    console.log('All translations completed successfully!');
  } catch (err) {
    console.error('Translation process failed:', err);
    process.exit(1);
  }
}

run();
