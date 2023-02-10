import { expect, test } from "@playwright/test";

const testUrl = "/components/segment";

test("Segment page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("Segment");
});

test("First segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});

test("Second segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const segment = page.locator(".segment-button:nth-of-type(3) button");
  await segment.click();

  await expect(page).toHaveScreenshot();
});

test("Third segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const segment = page.locator(".segment-button:nth-of-type(4) button");
  await segment.click();

  await expect(page).toHaveScreenshot();
});
