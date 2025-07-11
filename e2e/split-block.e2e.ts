import { expect, test } from "@playwright/test";

const testUrl = "/components/split-block";

test("Should display start slot content", async ({ page }) => {
  await page.goto(testUrl);

  await expect(page.getByTestId("start")).toHaveText("Start slot content");
});

test("Should display end slot content", async ({ page }) => {
  await page.goto(testUrl);

  await expect(page.getByTestId("end")).toHaveText("End slot content");
});
