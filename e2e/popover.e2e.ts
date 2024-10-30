import { expect, test } from "@playwright/test";

const testUrl = "/components/popover";

test("Should render close button", async ({ page }) => {
  await page.goto(testUrl);

  const button = page.getByTestId("popover-menu-display");
  await button.click();

  // Wait for animation
  await page.waitForTimeout(750);

  await expect(page).toHaveScreenshot();
});

test("Should render overflowing popover", async ({ page }) => {
  await page.goto(testUrl);

  const button = page.getByTestId("popover-menu-display-overflow");
  await button.click();

  // Wait for animation
  await page.waitForTimeout(750);

  await expect(page).toHaveScreenshot();
});
