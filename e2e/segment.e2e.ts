import { expect, test, type Page } from "@playwright/test";

const testUrl = "/components/segment";

test("Segment page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("Segment");
});

const clickToSegment = async (page: Page, index: number) => {
  const showcase = page.getByTestId("showcase");
  (await showcase.locator(".segment-button").all())[index].click();
};

test("First segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();
  await clickToSegment(page, 0);

  await expect(page).toHaveScreenshot();
});

test("Second segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();
  await clickToSegment(page, 1);

  await expect(page).toHaveScreenshot();
});

test("Third segment is selected", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();
  await clickToSegment(page, 2);

  await expect(page).toHaveScreenshot();
});
