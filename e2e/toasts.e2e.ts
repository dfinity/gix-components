import { expect, test, type Page } from "@playwright/test";

const testUrl = "/components/toasts";

test("Toasts page has expected h1", async ({ page }) => {
  await page.goto(testUrl);

  await expect(page.locator("h1")).toHaveText("Toasts");
});

const openToast = async ({ page, toast }: { page: Page; toast: string }) => {
  const toggle = page.getByTestId(toast);
  await toggle.click();
};

const testToast = async ({ page, toast }: { page: Page; toast: string }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await openToast({ page, toast });

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
};

test("Toast info", ({ page }) => testToast({ page, toast: "toast-info" }));

test("Toast success", ({ page }) =>
  testToast({ page, toast: "toast-success" }));

test("Toast error", ({ page }) => testToast({ page, toast: "toast-error" }));

test("Toast warn", ({ page }) => testToast({ page, toast: "toast-warn" }));

test("Toast message", ({ page }) =>
  testToast({ page, toast: "toast-message" }));

test("Toast multiline message", ({ page }) =>
  testToast({ page, toast: "toast-multiline" }));

test("Should close toast", async ({ page }) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await openToast({ page, toast: "toast-success" });

  // Hide spinner to avoid test failing if not exact same timing
  await page.evaluate(() =>
    document.querySelector(".toast button.close")?.click(),
  );

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
});

test("Should display multiple toasts and user is able to close one", async ({
  page,
}) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await openToast({ page, toast: "toast-info" });
  await openToast({ page, toast: "toast-success" });
  await openToast({ page, toast: "toast-error" });

  // Hide spinner to avoid test failing if not exact same timing
  await page.evaluate(() =>
    document.querySelector(".toast button.close")?.click(),
  );

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
});

test("Should display multiple toasts for the top position", async ({
  page,
}) => {
  await page.goto(testUrl);

  const showcase = page.getByTestId("showcase");
  await showcase.scrollIntoViewIfNeeded();

  await openToast({ page, toast: "toast-error" });
  await openToast({ page, toast: "toast-error" });
  await openToast({ page, toast: "toast-error" });
  await openToast({ page, toast: "toast-error-top" });
  await openToast({ page, toast: "toast-error-top" });

  await page.waitForTimeout(250);

  await expect(page).toHaveScreenshot();
});
