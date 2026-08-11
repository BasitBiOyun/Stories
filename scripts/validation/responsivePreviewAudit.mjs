import { chromium } from 'playwright';

const baseUrl = process.env.PREVIEW_AUDIT_URL || 'http://127.0.0.1:3000';
const homeViewports = [
  [320, 568], [360, 800], [390, 844], [430, 932], [768, 1024],
  [820, 1180], [1024, 768], [1280, 800], [1440, 900],
];
const readerViewports = [[320, 568], [390, 844], [768, 1024], [1024, 768], [1440, 900]];
const detailViewports = [[320, 800], [768, 1024], [1440, 900]];

const failures = [];
const results = [];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const assert = (condition, message) => {
  if (!condition) throw new Error(message);
};

const attachDiagnostics = (page, scope) => {
  page.on('pageerror', (error) => failures.push(`${scope}: pageerror: ${error.message}`));
  page.on('console', (message) => {
    if (message.type() !== 'error') return;
    const text = message.text();
    if (text.includes('firebasestorage.googleapis.com') && (text.includes('CORS') || text.includes('Access to fetch'))) return;
    failures.push(`${scope}: console error: ${text}`);
  });
};

const noOverflow = async (page, scope) => {
  const metrics = await page.evaluate(() => ({
    htmlScroll: document.documentElement.scrollWidth,
    htmlClient: document.documentElement.clientWidth,
    bodyScroll: document.body.scrollWidth,
    inner: window.innerWidth,
  }));
  const overflow = Math.max(metrics.htmlScroll, metrics.bodyScroll) - metrics.htmlClient;
  assert(overflow <= 1, `${scope}: horizontal overflow ${overflow}px ${JSON.stringify(metrics)}`);
  return overflow;
};

const unlock = async (page) => {
  await page.addInitScript(() => {
    localStorage.clear();
    sessionStorage.setItem('app_access_code', 'stories_enar');
  });
  await page.goto(baseUrl, { waitUntil: 'domcontentloaded', timeout: 45_000 });
  const accessInput = page.getByPlaceholder('Access Code');
  if (await accessInput.isVisible({ timeout: 1200 }).catch(() => false)) {
    await accessInput.fill('stories_enar');
    await page.getByRole('button', { name: /Unlock App/i }).click();
  }
  await page.getByRole('button', { name: /Prophet Adam/i }).first().waitFor({ state: 'visible', timeout: 30_000 });
};

const launchAdamA2 = async (page) => {
  const storyImage = page.locator('img[alt="Prophet Adam"]').first();
  await storyImage.waitFor({ state: 'visible', timeout: 20_000 });
  await storyImage.locator('xpath=ancestor::button[1]').click();
  const beginButton = page.getByRole('button', { name: /Begin Journey/i });
  await beginButton.waitFor({ state: 'visible', timeout: 20_000 });
  const levelSelector = beginButton.locator('xpath=ancestor::div[contains(@class,"max-w-4xl")][1]');
  const buttons = levelSelector.locator('button');
  assert(await buttons.count() >= 4, 'Level selector does not expose A2/B1/B2 plus start action.');
  await buttons.nth(0).click();
  await beginButton.click();
  await page.locator('header h2').waitFor({ state: 'visible', timeout: 30_000 });
};

const openFreshReader = async (browser, viewport, scope) => {
  const context = await browser.newContext({ viewport: { width: viewport[0], height: viewport[1] }, reducedMotion: 'reduce' });
  const page = await context.newPage();
  attachDiagnostics(page, scope);
  await unlock(page);
  await launchAdamA2(page);
  return { context, page };
};

const testHome = async (browser) => {
  for (const [width, height] of homeViewports) {
    const scope = `home-${width}x${height}`;
    const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' });
    const page = await context.newPage();
    attachDiagnostics(page, scope);
    try {
      await unlock(page);
      const overflow = await noOverflow(page, scope);
      const svgs = await page.locator('svg').count();
      assert(svgs > 0, `${scope}: no SVG icons rendered.`);
      results.push(`${scope}: PASS overflow=${overflow}px svg=${svgs}`);
    } finally {
      await context.close();
    }
  }
};

const testReader = async (browser) => {
  for (const viewport of readerViewports) {
    const [width, height] = viewport;
    const scope = `reader-${width}x${height}`;
    const { context, page } = await openFreshReader(browser, viewport, scope);
    try {
      await noOverflow(page, `${scope}-en-p1`);
      const next = page.locator('button[title="Next"]:visible').last();
      await next.click();
      await sleep(150);
      await noOverflow(page, `${scope}-en-p2`);
      await page.getByRole('button', { name: 'استخدام العربية' }).click();
      await page.locator('[dir="rtl"][lang="ar"]').first().waitFor({ timeout: 10_000 });
      await noOverflow(page, `${scope}-ar`);
      const direction = await page.locator('[lang="ar"]').first().getAttribute('dir');
      assert(direction === 'rtl', `${scope}: Arabic reader is not RTL.`);
      results.push(`${scope}: PASS EN navigation + AR RTL`);
    } finally {
      await context.close();
    }
  }
};

const openFirstExercise = async (page) => {
  await page.getByRole('button', { name: 'Table of Contents' }).first().click();
  const popover = page.locator('footer').locator('div.absolute.bottom-14').first();
  await popover.waitFor({ state: 'visible', timeout: 10_000 });
  const items = popover.locator('button');
  const exerciseItem = items.filter({ hasText: /\b(?:Kc|Ex)\b/ }).first();
  assert(await exerciseItem.count() > 0, 'No exercise/knowledge-check item found in table of contents.');
  await exerciseItem.click();
  await page.locator('main').waitFor({ state: 'visible', timeout: 10_000 });
};

const testExercises = async (browser) => {
  for (const viewport of detailViewports) {
    const [width, height] = viewport;
    const scope = `exercise-${width}x${height}`;
    const { context, page } = await openFreshReader(browser, viewport, scope);
    try {
      await openFirstExercise(page);
      await noOverflow(page, scope);
      const controls = await page.locator('main button, main input, main [role="button"]').count();
      assert(controls > 0, `${scope}: exercise has no interactive controls.`);
      results.push(`${scope}: PASS controls=${controls}`);
    } finally {
      await context.close();
    }
  }
};

const openGuide = async (page, guideType) => {
  await page.getByRole('button', { name: 'Menu' }).click();
  const label = guideType === 'teacher' ? 'Teacher Guide' : 'Self-Study Guide';
  await page.getByRole('button', { name: label }).click();
  const heading = guideType === 'teacher' ? "Teacher's Professional Guide" : "Student's Self-Study Guide";
  await page.getByRole('heading', { name: heading }).waitFor({ state: 'visible', timeout: 20_000 });
};

const testGuideType = async (browser, guideType) => {
  for (const viewport of detailViewports) {
    const [width, height] = viewport;
    const scope = `${guideType}-${width}x${height}`;
    const { context, page } = await openFreshReader(browser, viewport, scope);
    try {
      await openGuide(page, guideType);
      await noOverflow(page, `${scope}-en`);
      const svgs = await page.locator('svg').count();
      assert(svgs >= 8, `${scope}: suspiciously few SVG icons (${svgs}).`);

      if (width === 320) {
        const arToggle = page.getByRole('button', { name: 'استخدام العربية' });
        if (await arToggle.count()) {
          await arToggle.click({ force: true });
          await page.locator('[dir="rtl"][lang="ar"]').first().waitFor({ timeout: 10_000 });
          await noOverflow(page, `${scope}-ar`);
        }
      }
      results.push(`${scope}: PASS svg=${svgs}`);
    } finally {
      await context.close();
    }
  }
};

const browser = await chromium.launch({ channel: 'chrome', headless: true });
try {
  for (const [label, fn] of [
    ['home', () => testHome(browser)],
    ['reader', () => testReader(browser)],
    ['exercise', () => testExercises(browser)],
    ['teacher-guide', () => testGuideType(browser, 'teacher')],
    ['self-study', () => testGuideType(browser, 'self-study')],
  ]) {
    try {
      await fn();
    } catch (error) {
      failures.push(`${label}: ${error instanceof Error ? error.message : String(error)}`);
    }
  }
} finally {
  await browser.close();
}

console.log('\n=== Responsive Preview Audit ===');
for (const line of results) console.log(line);
if (failures.length) {
  console.error(`\n${failures.length} failure(s):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}
console.log(`\nPASS: ${results.length} viewport/screen checks, 0 failures.`);
