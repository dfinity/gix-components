import { expect, test } from "@playwright/test";

const testUrl = "/components/popover";

test("Should render close button", async ({ page }) => {
  await page.goto(testUrl);

  const button = page.getByTestId("popover-menu-display");
  await button.click();

  // Wait for animation
  await page.waitForTimeout(500);

  await expect(page).toHaveScreenshot();
});
