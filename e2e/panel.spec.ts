import { test, expect } from '@playwright/test';
import { PREVIEW_KEY } from '../playwright.config';

// The content panel is a work tool: it opens only with the preview key, and it never publishes.
test.describe('content panel', () => {
  test.skip(({ isMobile }) => isMobile, 'the panel is used on a computer');

  test('is not served without the preview key', async ({ request }) => {
    expect((await request.get('/panel')).status()).toBe(404);
    expect((await request.get('/content/mecca-a2-en.json')).status()).toBe(404);
  });

  test('opens a book, checks the house rules while typing and offers the changed file', async ({ page, context }) => {
    await context.addCookies([
      { name: 'stories_preview', value: PREVIEW_KEY, url: page.url().startsWith('http') ? page.url() : 'http://localhost' },
    ]);
    await page.goto('/panel');

    await page.getByRole('button', { name: 'Mecca Before Islam · A2 · EN' }).click();
    await expect(page.getByLabel('Title', { exact: true })).toHaveValue('Bilal Ibn Rabah’s Place in Islam');
    await expect(page.getByText('No rule is broken on this page.')).toBeVisible();

    const download = page.getByRole('button', { name: /^Download/ });
    await expect(download).toBeDisabled();

    const text = page.getByLabel('Text', { exact: true });
    await text.fill("The colour of the Ka'ba. Qur'an.");
    await expect(page.getByText(/American spelling/)).toBeVisible();
    await expect(page.getByText(/write Ka’ba with the curly apostrophe/)).toBeVisible();
    await expect(page.getByText('changed — not saved yet')).toBeVisible();
    await expect(download).toBeEnabled();

    const saved = page.waitForEvent('download');
    await download.click();
    expect((await saved).suggestedFilename()).toBe('mecca-a2-en.json');
  });
});
