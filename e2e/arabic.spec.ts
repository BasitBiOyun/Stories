import { test, expect } from '@playwright/test';
import { enterLibrary, openPage, trackErrors } from './helpers';

test.describe('Arabic', () => {
  test('switching to Arabic turns the page right-to-left', async ({ page }) => {
    await enterLibrary(page);
    await page.goto('/');
    await page.getByRole('button', { name: 'استخدام العربية' }).first().click();
    await expect(page.locator('html')).toHaveAttribute('dir', 'rtl');
    await expect(page.locator('html')).toHaveAttribute('lang', 'ar');
  });

  test('an Arabic chapter shows Arabic text and no page errors', async ({ page }) => {
    const errors = trackErrors(page);
    await enterLibrary(page, { language: 'ar' });
    await openPage(page, 'mecca/a2/1');
    await expect(
      page
        .locator('main p')
        .filter({ hasText: /[؀-ۿ]{3,}/ })
        .first(),
    ).toBeVisible();
    expect(errors).toEqual([]);
  });

  test('Arabic book-end pages open', async ({ page }) => {
    await enterLibrary(page, { language: 'ar' });
    for (const n of [15, 16, 18, 20]) {
      // A fresh load per page: each book-end page is its own chunk.
      await page.goto(`/#/adam/b1/${n}`);
      await page.reload();
      await expect(page.locator('main').first()).toBeVisible();
      await expect(page.locator('main').first()).toContainText(/[؀-ۿ]{3,}/, { timeout: 20_000 });
    }
  });
});
