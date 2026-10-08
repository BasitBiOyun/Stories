import { test, expect } from '@playwright/test';
import { PREVIEW_KEY } from '../playwright.config';

// The management panel is a work tool. Without a team list (as in these tests) it opens only
// with the preview link and only reads: changes can be tried in the app and downloaded, never sent.
// Saving, approving and the team are covered by tests/panelApi.test.mjs.
test.describe('management panel', () => {
  test.skip(({ isMobile }) => isMobile, 'the panel is used on a computer');

  test('is not served without the preview key', async ({ request }) => {
    expect((await request.get('/panel')).status()).toBe(404);
    expect((await request.get('/content/books/mecca-a2-en.json')).status()).toBe(404);
    expect((await request.get('/content/search-index.json')).status()).toBe(404);
  });

  test('a click in the app opens its text, and an edit shows in the app at once', async ({ page, context, baseURL }) => {
    await context.addCookies([{ name: 'stories_preview', value: PREVIEW_KEY, url: baseURL! }]);
    await page.goto('/panel/#/duzenle/mecca/a2/1?dil=en');
    await expect(page.getByText('Panel sunucusuz açıldı: sadece okunur.')).toBeVisible();

    const app = page.frameLocator('iframe[title="Uygulama"]');
    const paragraph = app.locator('p', { hasText: 'one of the first seven people' }).first();
    await paragraph.scrollIntoViewIfNeeded();
    await paragraph.click();

    const form = page.locator('.inspector textarea').first();
    await expect(form).toHaveValue(/Bilal/);
    const before = await form.inputValue();
    await form.fill(`${before} The colour was white.`);
    // The house rules speak while typing, and the app in the frame shows the new sentence.
    await expect(page.getByText(/Amerikan yazımı/).first()).toBeVisible();
    await expect(app.getByText('The colour was white.', { exact: false }).first()).toBeVisible();

    const saved = page.waitForEvent('download');
    await page.getByRole('button', { name: 'Dosyayı indir' }).click();
    expect((await saved).suggestedFilename()).toBe('mecca-a2-en.json');
  });

  test('search finds a sentence in any book and opens it', async ({ page, context, baseURL }) => {
    await context.addCookies([{ name: 'stories_preview', value: PREVIEW_KEY, url: baseURL! }]);
    await page.goto('/panel/');
    // The shortcut works once the panel has drawn its menu.
    await expect(page.getByRole('button', { name: /Kitaplarda ara/ })).toBeVisible();
    await page.keyboard.press('Control+k');
    await page.getByRole('dialog', { name: 'Ara' }).getByRole('textbox').fill('Bilal');
    await page.getByRole('option').filter({ hasText: 'Mecca' }).first().click();
    await expect(page).toHaveURL(/#\/duzenle\/mecca\//);
    await expect(page.locator('.inspector')).toBeVisible();
  });
});
