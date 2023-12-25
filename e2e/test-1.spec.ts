/* eslint-disable testing-library/prefer-screen-queries */
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByTestId("select").selectOption("2");
  await page.getByPlaceholder("items...").click();
  await page.getByPlaceholder("items...").fill("socks");
  await page.getByTestId("addBtn").click();
  await page.getByPlaceholder("items...").click();
  await page.getByPlaceholder("items...").fill("charger");
  await page.getByTestId("addBtn").click();
  await page
    .locator("div")
    .filter({
      hasText:
        /^Sort by inputSort by descriptionSort by packed statusDelete All$/,
    })
    .getByRole("combobox")
    .selectOption("description");
  await page.locator("#socks").check();

  await expect(page.getByTestId("footerMessage")).toHaveText(
    "💼 You have 2 items on your list and you have packed 1 items 50 %"
  );
});
