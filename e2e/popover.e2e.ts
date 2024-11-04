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

  //scroll in div that has test id popover-content
  const content = page.getByTestId("popover-content");
  await content?.evaluate((el) => el.scrollBy(0, 100));

  await expect(page).toHaveScreenshot();
});
