import { expect, test } from "@playwright/test";

const testUrl = "/components/progress-steps";

test("Progress-steps page has expected h1", async ({ page }) => {
  await page.goto(testUrl);

  await expect(page.locator("h1")).toHaveText("Progress Steps");
});

test("Second step is in progress", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  // Hide spinner to avoid test failing if not exact same timing
  await page.evaluate(() =>
    document.querySelector(".spinner")?.setAttribute("style", "opacity: 0;"),
  );

  await expect(page).toHaveScreenshot();
});

test("All steps are completed", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const toggle = page.getByTestId("progress-steps-test");
  await toggle.click();

  // Wait for animation
  await page.waitForTimeout(2500);

  await expect(page).toHaveScreenshot();
});
