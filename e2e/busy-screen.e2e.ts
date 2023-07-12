import { expect, test } from "@playwright/test";

const testUrl = "/components/busy-screen";

test("Should hide spinner", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const button = page.getByTestId("busy-display");
  await button.click();

  // Wait for animation
  await page.waitForTimeout(1500);

  await expect(page).toHaveScreenshot();
});
