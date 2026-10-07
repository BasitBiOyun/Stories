import { test, expect } from '@playwright/test';
import { PREVIEW_KEY } from '../playwright.config';
import { enterLibrary } from './helpers';

// Server behaviour does not depend on the screen size; run it once.
test.describe('server', () => {
  test.skip(({ isMobile }) => isMobile, 'desktop only');

  test('pages carry the security headers', async ({ request }) => {
    const res = await request.get('/');
    const h = res.headers();
    expect(h['content-security-policy']).toContain("frame-ancestors 'self'");
    expect(h['strict-transport-security']).toContain('max-age=');
    expect(h['x-content-type-options']).toBe('nosniff');
    expect(h['referrer-policy']).toBeTruthy();
  });

  test('hidden book files need the preview cookie', async ({ request, page }) => {
    const html = await (await request.get('/')).text();
    const manifest = await request.get('/');
    expect(manifest.ok()).toBeTruthy();
    // Find a hidden chunk name from the built assets referenced by the main bundle.
    const main = html.match(/\/assets\/index-[^"']+\.js/)?.[0];
    expect(main).toBeTruthy();
    const js = await (await request.get(main!)).text();
    const hidden = js.match(/hidden-[A-Za-z0-9_-]+\.js/)?.[0];
    test.skip(!hidden, 'no hidden books in this build');
    expect((await request.get(`/assets/${hidden}`)).status()).toBe(404);

    await enterLibrary(page);
    await page.goto(`/?gizli=${PREVIEW_KEY}#/gevherNesibe/a2/1`);
    await expect(page.locator('main').first()).toBeVisible();
    const cookies = await page.context().cookies();
    expect(cookies.find(c => c.name === 'stories_preview')?.httpOnly).toBe(true);
    expect((await page.request.get(`/assets/${hidden}`)).status()).toBe(200);
  });

  test('a wrong preview key sets no cookie', async ({ page }) => {
    await enterLibrary(page);
    await page.goto('/?gizli=wrong#/');
    expect((await page.context().cookies()).find(c => c.name === 'stories_preview')).toBeUndefined();
  });

  test('the picture endpoint refuses outside addresses', async ({ request }) => {
    const res = await request.get('/media-image?src=https://example.com/a.png&w=800', { maxRedirects: 0 });
    expect([400, 403]).toContain(res.status());
  });
});
