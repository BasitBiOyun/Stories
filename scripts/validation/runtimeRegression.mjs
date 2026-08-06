import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import { mkdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const args = Object.fromEntries(
  process.argv.slice(2).map((arg) => {
    const [key, ...value] = arg.replace(/^--/, '').split('=');
    return [key, value.join('=')];
  }),
);

const branchUrl = args.branch || 'http://127.0.0.1:4173';
const mainUrl = args.main || 'http://127.0.0.1:4174';
const artifactRoot = resolve(args.artifacts || 'artifacts/runtime');

mkdirSync(artifactRoot, { recursive: true });

const stories = [
  { id: 'adam', name: 'Prophet Adam', collection: null },
  { id: 'ibrahim', name: 'Prophet Abraham', collection: null },
  { id: 'musa', name: 'Prophet Moses', collection: null },
  { id: 'mecca', name: 'Mecca Before Islam', collection: 'Islamic History & Civilization' },
  { id: 'yunusEmre', name: 'Yunus Emre', collection: 'Great Figures of Turkish-Islamic Heritage' },
];
const levels = ['A2', 'B1', 'B2'];
const levelLabels = {
  A2: 'Elementary',
  B1: 'Intermediate',
  B2: 'Upper Intermediate',
};

const report = {
  startedAt: new Date().toISOString(),
  branchUrl,
  mainUrl,
  passwordGate: null,
  combinations: [],
  guides: [],
  mobile: null,
  visualComparisons: [],
  consoleErrors: [],
  pageErrors: [],
  sameOriginRequestFailures: [],
  warnings: [],
  failures: [],
};

const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const sleep = (ms) => new Promise((resolvePromise) => setTimeout(resolvePromise, ms));

const addFailure = (scope, error) => {
  const message = error instanceof Error ? error.message : String(error);
  report.failures.push({ scope, message });
};

const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const waitForServer = async (url, timeoutMs = 90_000) => {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url, { redirect: 'follow' });
      if (response.ok) return;
    } catch {
      // Server is still starting.
    }
    await sleep(500);
  }
  throw new Error(`Preview server did not become ready: ${url}`);
};

const attachDiagnostics = (page, baseUrl, scope) => {
  const origin = new URL(baseUrl).origin;
  page.on('console', (message) => {
    if (message.type() === 'error') {
      report.consoleErrors.push({ scope, text: message.text() });
    }
  });
  page.on('pageerror', (error) => {
    report.pageErrors.push({ scope, text: error.message });
  });
  page.on('requestfailed', (request) => {
    try {
      if (new URL(request.url()).origin === origin) {
        report.sameOriginRequestFailures.push({
          scope,
          url: request.url(),
          error: request.failure()?.errorText || 'unknown request failure',
        });
      }
    } catch {
      // Ignore non-URL requests.
    }
  });
};

const preparePage = async (page) => {
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        animation-delay: 0s !important;
        animation-duration: 0s !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
        caret-color: transparent !important;
      }
    `,
  });
  await page.emulateMedia({ reducedMotion: 'reduce' });
};

const waitForImages = async (page) => {
  await page
    .waitForFunction(
      () => Array.from(document.images).every((image) => image.complete),
      undefined,
      { timeout: 20_000 },
    )
    .catch(() => undefined);
};

const openPage = async (context, baseUrl, scope, authenticated = true) => {
  const page = await context.newPage();
  attachDiagnostics(page, baseUrl, scope);
  if (authenticated) {
    await page.addInitScript(() => {
      sessionStorage.setItem('app_access_code', 'stories_enar');
    });
  }
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 60_000 });
  await preparePage(page);
  return page;
};

const throwIfBookError = async (page, scope) => {
  const alert = page.getByRole('alert');
  if (await alert.count()) {
    const text = (await alert.first().innerText().catch(() => '')).trim();
    if (text) throw new Error(`${scope}: ${text}`);
  }
};

const launchBook = async (context, baseUrl, story, level, scope) => {
  const page = await openPage(context, baseUrl, scope, true);

  await page.getByText('Interactive Language & Values Library').first().waitFor({ timeout: 30_000 });

  if (story.collection) {
    const collectionButton = page.getByRole('button', {
      name: new RegExp(escapeRegex(story.collection), 'i'),
    }).first();
    await collectionButton.scrollIntoViewIfNeeded();
    await collectionButton.click();
  }

  const storyButton = page.getByRole('button', {
    name: new RegExp(escapeRegex(story.name), 'i'),
  }).first();
  await storyButton.scrollIntoViewIfNeeded();
  await storyButton.click();

  const levelButton = page.getByRole('button', {
    name: new RegExp(`^${level}\\s+${escapeRegex(levelLabels[level])}$`, 'i'),
  });
  await levelButton.waitFor({ timeout: 15_000 });
  await levelButton.click();

  const beginButton = page.getByRole('button', { name: /Begin Journey/i });
  await beginButton.click();

  await Promise.race([
    page.locator('header h2').waitFor({ state: 'visible', timeout: 60_000 }),
    page.getByRole('alert').waitFor({ state: 'visible', timeout: 60_000 }).catch(() => undefined),
  ]);
  await throwIfBookError(page, scope);
  await page.locator('header h2').waitFor({ state: 'visible', timeout: 60_000 });
  await waitForImages(page);
  return page;
};

const readPageIndicator = async (page) => {
  const button = page.getByRole('button', { name: 'Table of Contents' }).first();
  const text = (await button.innerText()).replace(/\s+/g, ' ').trim();
  const match = text.match(/Page\s+(\d+)\s+of\s+(\d+)/i);
  if (!match) throw new Error(`Could not parse page indicator: ${text}`);
  return { current: Number(match[1]), total: Number(match[2]), text };
};

const validateMediaUrl = async (context, url, scope, kind) => {
  if (!url) {
    report.warnings.push({ scope, message: `${kind} URL is missing.` });
    return { present: false, status: null };
  }
  const response = await context.request.get(url, {
    headers: { Range: 'bytes=0-1023' },
    timeout: 45_000,
    failOnStatusCode: false,
  });
  const status = response.status();
  if (status >= 400) {
    throw new Error(`${scope}: ${kind} request failed with HTTP ${status}: ${url}`);
  }
  return { present: true, status };
};

const validateAudioForCurrentLanguage = async (page, context, scope, language) => {
  const audio = page.locator('audio').first();
  if ((await audio.count()) === 0) {
    report.warnings.push({ scope, message: `${language} first story page has no audio element.` });
    return { language, present: false, status: null, url: null };
  }
  const url = await audio.getAttribute('src');
  const result = await validateMediaUrl(context, url, scope, `${language} audio`);
  return { language, url, ...result };
};

const moveToFirstExercise = async (page, scope) => {
  await page.getByRole('button', { name: 'Table of Contents' }).first().click();
  const exerciseItem = page
    .locator('footer button')
    .filter({ hasText: /(?:^|\s)(Kc|Ex)(?:\s|$)/ })
    .first();

  if ((await exerciseItem.count()) === 0) {
    report.warnings.push({ scope, message: 'No Kc/Ex item was exposed in the quick table of contents.' });
    await page.keyboard.press('Escape').catch(() => undefined);
    return { found: false, controls: 0 };
  }

  await exerciseItem.click();
  await sleep(250);
  const mainText = (await page.locator('main').innerText()).trim();
  const controls = await page.locator('main button, main input, main [role="button"]').count();
  assert(mainText.length > 20, `${scope}: exercise page rendered insufficient content.`);
  assert(controls > 0, `${scope}: exercise page exposed no interactive controls.`);
  return { found: true, controls, textLength: mainText.length };
};

const generatePdf = async (page, scope) => {
  const button = page.getByRole('button', { name: 'Download PDF' }).first();
  const downloadPromise = page.waitForEvent('download', { timeout: 180_000 });
  await button.click();
  const download = await downloadPromise;
  const temporaryPath = await download.path();
  assert(temporaryPath, `${scope}: browser did not expose the generated PDF path.`);
  const size = statSync(temporaryPath).size;
  const suggestedFilename = download.suggestedFilename();
  assert(/\.pdf$/i.test(suggestedFilename), `${scope}: generated filename is not a PDF: ${suggestedFilename}`);
  assert(size > 10_000, `${scope}: generated PDF is unexpectedly small (${size} bytes).`);
  return { suggestedFilename, size };
};

const testPasswordGate = async (context) => {
  const scope = 'password-gate';
  const page = await openPage(context, branchUrl, scope, false);
  try {
    await page.getByText('Access Required').waitFor({ timeout: 15_000 });
    await page.getByPlaceholder('Access Code').fill('wrong-code');
    await page.getByRole('button', { name: 'Unlock App' }).click();
    await page.getByText('Incorrect password! Please try again.').waitFor();
    await page.getByPlaceholder('Access Code').fill('stories_enar');
    await page.getByRole('button', { name: 'Unlock App' }).click();
    await page.getByText('Interactive Language & Values Library').first().waitFor({ timeout: 30_000 });
    report.passwordGate = { passed: true };
  } finally {
    await page.close();
  }
};

const testCombination = async (context, story, level) => {
  const scope = `${story.id}-${level}`;
  const page = await launchBook(context, branchUrl, story, level, scope);
  const result = { story: story.id, level, passed: false };
  try {
    const title = (await page.locator('header h2').innerText()).trim();
    assert(title.length > 2, `${scope}: reader title is empty.`);
    await page.locator('header').getByText(new RegExp(`Level\\s+${level}`, 'i')).waitFor();

    const initialPage = await readPageIndicator(page);
    assert(initialPage.current === 1, `${scope}: reader did not start on page 1.`);
    assert(initialPage.total > 1, `${scope}: reader reports only ${initialPage.total} page(s).`);

    const firstHeading = (await page.locator('main h3').first().innerText().catch(() => '')).trim();
    assert(firstHeading.length > 0, `${scope}: first page heading is empty.`);

    const englishAudio = await validateAudioForCurrentLanguage(page, context, scope, 'English');

    const nextButton = page.locator('button[title="Next"]:visible').last();
    await nextButton.click();
    const secondPage = await readPageIndicator(page);
    assert(secondPage.current === 2, `${scope}: Next did not advance to page 2.`);

    await page.keyboard.press('ArrowLeft');
    const backAtFirst = await readPageIndicator(page);
    assert(backAtFirst.current === 1, `${scope}: English ArrowLeft did not return to page 1.`);

    await page.getByRole('button', { name: 'استخدام العربية' }).click();
    await page.locator('[dir="rtl"][lang="ar"]').first().waitFor({ timeout: 15_000 });
    const arabicTitle = (await page.locator('header h2').innerText()).trim();
    assert(arabicTitle.length > 2, `${scope}: Arabic title is empty.`);
    const arabicAudio = await validateAudioForCurrentLanguage(page, context, scope, 'Arabic');

    await page.getByRole('button', { name: 'Use English' }).click();
    await page.locator('[dir="ltr"][lang="en"]').first().waitFor({ timeout: 15_000 });

    const exercise = await moveToFirstExercise(page, scope);
    const pdf = await generatePdf(page, scope);

    result.passed = true;
    result.title = title;
    result.arabicTitle = arabicTitle;
    result.pages = initialPage.total;
    result.audio = [englishAudio, arabicAudio];
    result.exercise = exercise;
    result.pdf = pdf;
  } finally {
    report.combinations.push(result);
    await page.close();
  }
};

const testGuide = async (context, story, guideType) => {
  const scope = `${story.id}-${guideType}`;
  const page = await launchBook(context, branchUrl, story, 'A2', scope);
  const result = { story: story.id, guideType, passed: false };
  try {
    await page.getByRole('button', { name: 'Menu' }).click();
    if (guideType === 'teacher') {
      await page.getByRole('button', { name: 'Teacher Guide' }).click();
      await page.getByText(/Professional Teacher Guide|Teacher's Professional Guide/i).first().waitFor({ timeout: 30_000 });
    } else {
      await page.getByRole('button', { name: 'Self-Study Guide' }).click();
      await page.getByText(/Student's Self-Study Guide/i).first().waitFor({ timeout: 30_000 });
    }
    const text = (await page.locator('body').innerText()).trim();
    assert(text.length > 500, `${scope}: guide overlay rendered insufficient content.`);
    result.passed = true;
    result.textLength = text.length;
  } finally {
    report.guides.push(result);
    await page.close();
  }
};

const captureScenario = async (context, baseUrl, label, scenario) => {
  const scope = `visual-${label}-${scenario.name}`;
  let page;
  if (scenario.type === 'login') {
    page = await openPage(context, baseUrl, scope, false);
    await page.getByText('Access Required').waitFor({ timeout: 20_000 });
  } else if (scenario.type === 'library') {
    page = await openPage(context, baseUrl, scope, true);
    await page.getByText('Interactive Language & Values Library').first().waitFor({ timeout: 30_000 });
  } else {
    page = await launchBook(context, baseUrl, scenario.story, scenario.level, scope);
  }

  try {
    await waitForImages(page);
    await page.evaluate(async () => {
      if (document.fonts?.ready) await document.fonts.ready;
    });
    await sleep(700);
    const path = resolve(artifactRoot, label, `${scenario.name}.png`);
    mkdirSync(dirname(path), { recursive: true });
    await page.screenshot({ path, fullPage: false, animations: 'disabled' });
    return path;
  } finally {
    await page.close();
  }
};

const comparePng = (baselinePath, currentPath, diffPath, scenarioName) => {
  const baseline = PNG.sync.read(readFileSync(baselinePath));
  const current = PNG.sync.read(readFileSync(currentPath));
  assert(
    baseline.width === current.width && baseline.height === current.height,
    `${scenarioName}: screenshot dimensions differ.`,
  );
  const diff = new PNG({ width: baseline.width, height: baseline.height });
  const differingPixels = pixelmatch(
    baseline.data,
    current.data,
    diff.data,
    baseline.width,
    baseline.height,
    { threshold: 0.12, includeAA: false },
  );
  const totalPixels = baseline.width * baseline.height;
  const ratio = differingPixels / totalPixels;
  mkdirSync(dirname(diffPath), { recursive: true });
  writeFileSync(diffPath, PNG.sync.write(diff));
  return { differingPixels, totalPixels, ratio };
};

const testVisualRegression = async (browser) => {
  const visualContext = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
    colorScheme: 'dark',
  });

  const scenarios = [
    { name: 'login', type: 'login' },
    { name: 'library', type: 'library' },
    { name: 'adam-a2', type: 'book', story: stories[0], level: 'A2' },
    { name: 'mecca-b2', type: 'book', story: stories[3], level: 'B2' },
    { name: 'yunus-b1', type: 'book', story: stories[4], level: 'B1' },
  ];

  try {
    for (const scenario of scenarios) {
      const baselinePath = await captureScenario(visualContext, mainUrl, 'main', scenario);
      const currentPath = await captureScenario(visualContext, branchUrl, 'branch', scenario);
      const diffPath = resolve(artifactRoot, 'diff', `${scenario.name}.png`);
      const comparison = comparePng(baselinePath, currentPath, diffPath, scenario.name);
      const passed = comparison.ratio <= 0.02;
      report.visualComparisons.push({ scenario: scenario.name, passed, ...comparison });
      if (!passed) {
        throw new Error(
          `${scenario.name}: visual difference ${(comparison.ratio * 100).toFixed(2)}% exceeds 2.00%.`,
        );
      }
    }
  } finally {
    await visualContext.close();
  }
};

const testMobileSmoke = async (browser) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  const scope = 'mobile-adam-a2';
  const page = await launchBook(context, branchUrl, stories[0], 'A2', scope);
  try {
    const initial = await readPageIndicator(page);
    assert(initial.current === 1, 'Mobile reader did not start on page 1.');
    await page.locator('button[title="Next"]:visible').last().click();
    const second = await readPageIndicator(page);
    assert(second.current === 2, 'Mobile Next navigation failed.');
    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByText('Main Menu').waitFor();
    report.mobile = { passed: true, pages: initial.total };
  } finally {
    await page.close();
    await context.close();
  }
};

const writeReport = () => {
  report.finishedAt = new Date().toISOString();
  const jsonPath = resolve(artifactRoot, 'report.json');
  writeFileSync(jsonPath, `${JSON.stringify(report, null, 2)}\n`);

  const passedCombinations = report.combinations.filter((item) => item.passed).length;
  const passedGuides = report.guides.filter((item) => item.passed).length;
  const missingAudio = report.combinations.flatMap((item) =>
    (item.audio || []).filter((audio) => !audio.present).map((audio) => `${item.story}-${item.level}-${audio.language}`),
  );
  const markdown = [
    '# Runtime Regression Report',
    '',
    `- Password gate: ${report.passwordGate?.passed ? 'PASS' : 'FAIL'}`,
    `- Book/level combinations: ${passedCombinations}/${report.combinations.length}`,
    `- Guide overlays: ${passedGuides}/${report.guides.length}`,
    `- Mobile smoke: ${report.mobile?.passed ? 'PASS' : 'FAIL'}`,
    `- Visual comparisons: ${report.visualComparisons.filter((item) => item.passed).length}/${report.visualComparisons.length}`,
    `- Missing first-page audio variants: ${missingAudio.length ? missingAudio.join(', ') : 'none'}`,
    `- Console errors: ${report.consoleErrors.length}`,
    `- Page errors: ${report.pageErrors.length}`,
    `- Same-origin request failures: ${report.sameOriginRequestFailures.length}`,
    `- Warnings: ${report.warnings.length}`,
    `- Failures: ${report.failures.length}`,
    '',
  ].join('\n');
  writeFileSync(resolve(artifactRoot, 'report.md'), markdown);
};

await waitForServer(branchUrl);
await waitForServer(mainUrl);

const browser = await chromium.launch({ headless: true });
const desktopContext = await browser.newContext({
  viewport: { width: 1440, height: 1000 },
  deviceScaleFactor: 1,
  reducedMotion: 'reduce',
  acceptDownloads: true,
});

try {
  try {
    await testPasswordGate(desktopContext);
  } catch (error) {
    addFailure('password-gate', error);
  }

  for (const story of stories) {
    for (const level of levels) {
      const scope = `${story.id}-${level}`;
      try {
        await testCombination(desktopContext, story, level);
      } catch (error) {
        addFailure(scope, error);
      }
    }
  }

  for (const story of stories) {
    for (const guideType of ['teacher', 'self-study']) {
      const scope = `${story.id}-${guideType}`;
      try {
        await testGuide(desktopContext, story, guideType);
      } catch (error) {
        addFailure(scope, error);
      }
    }
  }

  try {
    await testMobileSmoke(browser);
  } catch (error) {
    addFailure('mobile-smoke', error);
  }

  try {
    await testVisualRegression(browser);
  } catch (error) {
    addFailure('visual-regression', error);
  }

  if (report.pageErrors.length) {
    addFailure('browser-page-errors', new Error(`${report.pageErrors.length} uncaught browser error(s) occurred.`));
  }
  if (report.sameOriginRequestFailures.length) {
    addFailure(
      'same-origin-resources',
      new Error(`${report.sameOriginRequestFailures.length} same-origin resource request(s) failed.`),
    );
  }
} finally {
  await desktopContext.close();
  await browser.close();
  writeReport();
}

if (report.failures.length) {
  console.error(JSON.stringify(report.failures, null, 2));
  process.exitCode = 1;
} else {
  console.log('Runtime and visual regression suite passed.');
}
