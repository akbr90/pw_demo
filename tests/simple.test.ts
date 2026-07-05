import { test, expect } from '@playwright/test';

test('sanity', async ({ page }) => {
  await page.goto('about:blank');
  expect(1 + 1).toBe(2);
});
