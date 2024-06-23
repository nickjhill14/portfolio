import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Projects Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/projects");
  });

  // TODO: Fix this
  test.skip("there are no accessibility violations", async ({ page }) => {
    await expect(page.getByRole("heading", { name: "Projects" })).toBeVisible();
    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("navigating to the landing page", async ({ page }) => {
    await page.getByRole("button", { name: "Go Home" }).click();

    await expect(page).toHaveURL("/");
  });
});
