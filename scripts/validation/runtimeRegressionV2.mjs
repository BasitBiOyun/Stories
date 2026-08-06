import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import {
  mkdirSync,
  readFileSync,
  statSync,
  writeFileSync,
} from 'node:fs';
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

const stories = [
  { id: 'adam', name: 'Prophet Adam', collection: null },
  { id: 'ibrahim', name: 'Prophet Abraham', collection: null },
  { id: 'musa', name: 'Prophet Moses', collection: null },
  { id: 'mecca', name: 'Mecca Before Islam', collection: 'Islamic History & Civilization' },
  { id: 'yunusEmre', name: 'Yunus Emre', collection: 'Great Figures of Turkish-Islamic Heritage' },
];
const levels = ['A2', 'B1', 'B2'];

mkdirSync(artifactRoot, { recursive: true });

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

const sleep = (milliseconds) => new Promise((resolvePromise) => setTimeout(resolvePromise, milliseconds));
const escapeRegex = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const addFailure = (scope, error) => {
  report.failures.push({
    scope,
    message: error instanceof Error ? error.message : String(error),
  });
};

const waitForServer = async (url, timeoutMs = 90_000) => {
  const started = Date.now();
  while (Date.now() - started < timeoutMs) {
    try {
      const response = await fetch(url);
      if (response.ok) return;
    } catch {
      // Preview is still starting.
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

const stabilizePage = async (page) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
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
};

const librarySentinel = (page) => page.getByRole('button', { name: /Prophet Adam/i }).first();

const waitForLibrary = async (page, timeout = 30_000) => {
  await librarySentinel(page).waitFor({ state: 'visible', timeout });
};

const unlockIfNeeded = async (page) => {
  const accessInput = page.getByPlaceholder('Access Code');
  if (await accessInput.isVisible({ timeout: 1_500 }).catch(() => false)) {
    await accessInput.fill('stories_enar');
    await page.getByRole('button', { name: 'Unlock App' }).click();
  }
  await waitForLibrary(page);
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
  await stabilizePage(page);

  if (authenticated) await unlockIfNeeded(page);
  return page;
};

const waitForImages = async (page) => {
  await page.waitForFunction(
    () => Array.from(document.images).every((image) => image.complete),
    undefined,
    { timeout: 20_000 },
  ).catch(() => undefined);
};

const throwIfBookError = async (page, scope) => {
  const alert = page.getByRole('alert');
  if (await alert.isVisible({ timeout: 500 }).catch(() => false)) {
    const text = (await alert.innerText()).trim();
    if (text) throw new Error(`${scope}: ${text}`);
  }
};

const launchBook = async (context, baseUrl, story, level, scope) => {
  const page = await openPage(context, baseUrl, scope, true);

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

  const levelButton = page
    .getByRole('button')
    .filter({ hasText: new RegExp(`^\\s*${level}\\b`, 'i') })
    .first();
  await levelButton.waitFor({ state: 'visible', timeout: 15_000 });
  await levelButton.click();

  await page.getByRole('button', { name: /Begin Journey/i }).click();

  await Promise.race([
    page.locator('header h2').waitFor({ state: 'visible', timeout: 60_000 }),
    page.getByRole('alert').waitFor({ state: 'visible', timeout: 60_000 }),
  ]).catch(() => undefined);

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

const validateCurrentAudio = async (page, context, scope, language) => {
  const audio = page.locator('audio').first();
  if ((await audio.count()) === 0) {
    report.warnings.push({ scope, message: `${language} first story page has no audio element.` });
    return { language, present: false, status: null, url: null };
  }

  const url = await audio.getAttribute('src');
  const response = await validateMediaUrl(context, url, scope, `${language} audio`);
  return { language, url, ...response };
};

const validatePdfDownload = async (download, scope) => {
  const path = await download.path();
  assert(path, `${scope}: generated PDF has no browser path.`);
  const size = statSync(path).size;
  const signature = readFileSync(path).subarray(0, 4).toString('ascii');
  const suggestedFilename = download.suggestedFilename();

  assert(signature === '%PDF', `${scope}: downloaded file does not have a PDF signature.`);
  assert(/\.pdf$/i.test(suggestedFilename), `${scope}: filename is not a PDF: ${suggestedFilename}`);
  assert(size > 10_000, `${scope}: generated PDF is unexpectedly small (${size} bytes).`);

  return { suggestedFilename, size };
};

const clickAndDownloadPdf = async (page, button, scope) => {
  const downloadPromise = page.waitForEvent('download', { timeout: 180_000 });
  await button.click();
  const download = await downloadPromise;
  return validatePdfDownload(download, scope);
};

const openFirstExercise = async (page, scope) => {
  await page.getByRole('button', { name: 'Table of Contents' }).first().click();
  const popover = page.locator('footer').locator('div.absolute.bottom-14').first();
  await popover.waitFor({ state: 'visible', timeout: 10_000 });

  const items = popover.locator('button');
  const itemCount = await items.count();
  assert(itemCount > 1, `${scope}: table of contents contains no page items.`);

  const exerciseItem = items.filter({ hasText: /\b(?:Kc|Ex)\b/ }).first();
  assert(await exerciseItem.count(), `${scope}: no knowledge-check or exercise page appears in the table of contents.`);
  await exerciseItem.click();

  const mainText = (await page.locator('main').innerText()).trim();
  const controls = await page.locator('main button, main input, main [role="button"]').count();
  assert(mainText.length > 20, `${scope}: exercise page has insufficient visible content.`);
  assert(controls > 0, `${scope}: exercise page exposes no interactive controls.`);

  return { itemCount, controls, textLength: mainText.length };
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
    await waitForLibrary(page);
    report.passwordGate = { passed: true };
  } finally {
    await page.close();
  }
};

const testCombination = async (context, story, level) => {
  const scope = `${story.id}-${level}`;
  const result = { story: story.id, level, passed: false };
  let page;

  try {
    page = await launchBook(context, branchUrl, story, level, scope);
    const title = (await page.locator('header h2').innerText()).trim();
    assert(title.length > 2, `${scope}: reader title is empty.`);
    await page.locator('header').getByText(new RegExp(`Level\\s+${level}`, 'i')).waitFor();

    const initial = await readPageIndicator(page);
    assert(initial.current === 1, `${scope}: reader did not start on page 1.`);
    assert(initial.total > 1, `${scope}: reader reports only ${initial.total} page(s).`);

    const firstHeading = (await page.locator('main h3').first().innerText().catch(() => '')).trim();
    assert(firstHeading.length > 0, `${scope}: first page heading is empty.`);
    const englishAudio = await validateCurrentAudio(page, context, scope, 'English');

    await page.locator('button[title="Next"]:visible').last().click();
    const second = await readPageIndicator(page);
    assert(second.current === 2, `${scope}: Next did not advance to page 2.`);

    await page.keyboard.press('ArrowLeft');
    const back = await readPageIndicator(page);
    assert(back.current === 1, `${scope}: ArrowLeft did not return to page 1.`);

    await page.getByRole('button', { name: 'استخدام العربية' }).click();
    await page.locator('[dir="rtl"][lang="ar"]').first().waitFor({ timeout: 15_000 });
    const arabicTitle = (await page.locator('header h2').innerText()).trim();
    assert(arabicTitle.length > 2, `${scope}: Arabic reader title is empty.`);
    const arabicAudio = await validateCurrentAudio(page, context, scope, 'Arabic');

    await page.getByRole('button', { name: 'Use English' }).click();
    await page.locator('[dir="ltr"][lang="en"]').first().waitFor({ timeout: 15_000 });

    const exercise = await openFirstExercise(page, scope);
    const pdf = await clickAndDownloadPdf(
      page,
      page.getByRole('button', { name: 'Download PDF' }).first(),
      `${scope}-book-pdf`,
    );

    result.passed = true;
    Object.assign(result, {
      title,
      arabicTitle,
      pages: initial.total,
      audio: [englishAudio, arabicAudio],
      exercise,
      pdf,
    });
  } finally {
    report.combinations.push(result);
    if (page) await page.close();
  }
};

const testGuide = async (context, story, guideType) => {
  const scope = `${story.id}-${guideType}`;
  const result = { story: story.id, guideType, passed: false };
  let page;

  try {
    page = await launchBook(context, branchUrl, story, 'A2', scope);
    await page.getByRole('button', { name: 'Menu' }).click();

    const menuLabel = guideType === 'teacher' ? 'Teacher Guide' : 'Self-Study Guide';
    await page.getByRole('button', { name: menuLabel }).click();

    const expectedHeading = guideType === 'teacher'
      ? "Teacher's Professional Guide"
      : "Student's Self-Study Guide";
    await page.getByRole('heading', { name: expectedHeading }).waitFor({ timeout: 30_000 });

    const visibleText = (await page.locator('body').innerText()).trim();
    assert(visibleText.length > 500, `${scope}: guide overlay has insufficient content.`);

    const guidePdfButton = page.locator('button[title="Download PDF"]:visible').last();
    const pdf = await clickAndDownloadPdf(page, guidePdfButton, `${scope}-pdf`);

    result.passed = true;
    result.textLength = visibleText.length;
    result.pdf = pdf;
  } finally {
    report.guides.push(result);
    if (page) await page.close();
  }
};

const testMobile = async (browser) => {
  const context = await browser.newContext({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 1,
    reducedMotion: 'reduce',
  });
  let page;

  try {
    page = await launchBook(context, branchUrl, stories[0], 'A2', 'mobile-adam-a2');
    const initial = await readPageIndicator(page);
    await page.locator('button[title="Next"]:visible').last().click();
    const second = await readPageIndicator(page);
    assert(second.current === 2, 'Mobile Next navigation failed.');

    await page.getByRole('button', { name: 'Menu' }).click();
    await page.getByText('Main Menu').waitFor();
    report.mobile = { passed: true, pages: initial.total };
  } finally {
    if (page) await page.close();
    await context.close();
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
    await waitForLibrary(page);
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

const comparePng = (baselinePath, currentPath, diffPath, scenario) => {
  const baseline = PNG.sync.read(readFileSync(baselinePath));
  const current = PNG.sync.read(readFileSync(currentPath));
  assert(
    baseline.width === current.width && baseline.height === current.height,
    `${scenario}: screenshot dimensions differ.`,
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
  const context = await browser.newContext({
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
      const baseline = await captureScenario(context, mainUrl, 'main', scenario);
      const current = await captureScenario(context, branchUrl, 'branch', scenario);
      const diffPath = resolve(artifactRoot, 'diff', `${scenario.name}.png`);
      const comparison = comparePng(baseline, current, diffPath, scenario.name);
      const passed = comparison.ratio <= 0.02;

      report.visualComparisons.push({ scenario: scenario.name, passed, ...comparison });
      assert(
        passed,
        `${scenario.name}: visual difference ${(comparison.ratio * 100).toFixed(2)}% exceeds 2.00%.`,
      );
    }
  } finally {
    await context.close();
  }
};

const writeReport = () => {
  report.finishedAt = new Date().toISOString();
  writeFileSync(resolve(artifactRoot, 'report.json'), `${JSON.stringify(report, null, 2)}\n`);

  const combinationsPassed = report.combinations.filter((item) => item.passed).length;
  const guidesPassed = report.guides.filter((item) => item.passed).length;
  const visualsPassed = report.visualComparisons.filter((item) => item.passed).length;
  const missingAudio = report.combinations.flatMap((item) =>
    (item.audio || [])
      .filter((audio) => !audio.present)
      .map((audio) => `${item.story}-${item.level}-${audio.language}`),
  );

  const markdown = [
    '# Runtime Regression Report',
    '',
    `- Password gate: ${report.passwordGate?.passed ? 'PASS' : 'FAIL'}`,
    `- Book/level combinations: ${combinationsPassed}/${report.combinations.length}`,
    `- Guide overlays and PDFs: ${guidesPassed}/${report.guides.length}`,
    `- Mobile smoke: ${report.mobile?.passed ? 'PASS' : 'FAIL'}`,
    `- Visual comparisons: ${visualsPassed}/${report.visualComparisons.length}`,
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
    await testMobile(browser);
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
    addFailure('same-origin-resources', new Error(`${report.sameOriginRequestFailures.length} same-origin request(s) failed.`));
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
