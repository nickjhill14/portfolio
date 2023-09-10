import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("CV Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/cv");
  });

  test("there are no accessibility violations", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Experience" }),
    ).toBeVisible();

    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("navigating to the landing page", async ({ page }) => {
    await page.getByRole("link", { name: "Go Home" }).click();

    await expect(page).toHaveURL("/");
  });
});
