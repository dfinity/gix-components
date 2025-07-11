import { expect, test } from "@playwright/test";

const testUrl = "/";

test("Menu is expanded per default", async ({ page }) => {
  await page.goto(testUrl);

  await expect(page).toHaveScreenshot();
});

test("Menu can be collapsed", async ({ page }) => {
  await page.goto(testUrl);

  const button = page.getByTestId("menu-collapse");
  await button.click();

  // Wait for animation
  await page.waitForTimeout(750);

  await expect(page).toHaveScreenshot();
});
