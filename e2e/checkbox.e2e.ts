import { expect, test } from "@playwright/test";

const testUrl = "/components/checkbox";

test("Checkbox page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("Checkbox");
});

test("Should display default behavior", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});

test("Should display default behavior even if box-sizing is set as border-box", async ({
  page,
}) => {
  await page.goto(testUrl);

  await page.addStyleTag({
    content: `
      input[type="checkbox"] {
        box-sizing: border-box;
      }
    `,
  });

  const checkbox = page.getByTestId("checkbox-2");
  expect(checkbox).not.toBeNull();

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await expect(page).toHaveScreenshot();
});
