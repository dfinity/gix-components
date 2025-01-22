import { expect, test } from "@playwright/test";

const testUrl = "/components/infinite-scroll";

test("should render 100 elements by default", async ({ page }) => {
  await page.goto(testUrl);

  const ul = page.getByTestId("showcase-infinite-scroll");

  const firstLi = ul.locator("li:nth-of-type(1)");
  await expect(firstLi).toBeVisible();

  const liList = ul.locator("li");
  expect(await liList.count()).toBe(100);
});

test("should render 200 elements on scroll", async ({ page }) => {
  await page.goto(testUrl);

  const ul = page.getByTestId("showcase-infinite-scroll");

  const lastLi = ul.locator("li:nth-of-type(100)");
  await expect(lastLi).toBeVisible();

  await lastLi.scrollIntoViewIfNeeded();

  const lastLiAfterIntersect = ul.locator("li:nth-of-type(200)");
  await expect(lastLiAfterIntersect).toBeVisible();

  const liList = ul.locator("li");
  expect(await liList.count()).toBe(200);
});

test("should reach end of scroll", async ({ page }) => {
  await page.goto(testUrl);

  const ul = page.getByTestId("showcase-infinite-scroll");

  const lastLi = ul.locator("li:nth-of-type(100)");
  await expect(lastLi).toBeVisible();

  await lastLi.scrollIntoViewIfNeeded();

  const lastLiAfterIntersect = ul.locator("li:nth-of-type(200)");
  await expect(lastLiAfterIntersect).toBeVisible();

  await lastLiAfterIntersect.scrollIntoViewIfNeeded();

  const veryLastLiAfterIntersect = ul.locator("li:nth-of-type(300)");
  await expect(veryLastLiAfterIntersect).toBeVisible();

  const liList = ul.locator("li");
  expect(await liList.count()).toBe(300);

  await veryLastLiAfterIntersect.scrollIntoViewIfNeeded();

  const endMessage = ul.getByTestId("infinite-scroll-end");
  await expect(endMessage).toBeVisible();
});
