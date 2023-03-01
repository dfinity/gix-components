import { expect, test, type Page } from "@playwright/test";

const testUrl = "/components/toasts";

test("Toasts page has expected h1", async ({ page }) => {
  await page.goto(testUrl);
  await expect(page.locator("h1")).toHaveText("Toasts");
});

const testToast = async ({ page, toast }: { page: Page; toast: string }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  const toggle = page.getByTestId(toast);
  await toggle.click();

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
};

test("Toast info", async ({ page }) =>
  testToast({ page, toast: "toast-info" }));

test("Toast success", async ({ page }) =>
  testToast({ page, toast: "toast-success" }));

test("Toast error", async ({ page }) =>
  testToast({ page, toast: "toast-error" }));

test("Toast warn", async ({ page }) =>
  testToast({ page, toast: "toast-warn" }));

test("Toast message", async ({ page }) =>
  testToast({ page, toast: "toast-message" }));
