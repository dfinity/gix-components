import { expect, test } from "@playwright/test";

const testUrl = "/components/collapsible";

test("Should open and close collapsible", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot("Collapsible-default-close");

  const toggle = async () => {
    const button = page.getByTestId("toggle-content");
    await button.click();

    // Wait for animation
    await page.waitForTimeout(750);
  };

  await toggle();

  await expect(page).toHaveScreenshot("Collapsible-open");

  await toggle();

  await expect(page).toHaveScreenshot("Collapsible-close");
});
