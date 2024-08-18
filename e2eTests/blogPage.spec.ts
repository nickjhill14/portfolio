import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Blog Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
  });

  // TODO: Fix this
  test.skip("there are no accessibility violations", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Go Home" })).toBeVisible();
    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("navigating to the landing page", async ({ page }) => {
    await page.getByRole("button", { name: "Go Home" }).click();

    await expect(page).toHaveURL("/");
  });

  test("navigating to the React Component Testing blog", async ({ page }) => {
    await page.getByRole("button", { name: "React Component Testing" }).click();

    await expect(page).toHaveURL("/blog/react-component-testing");
  });
});
