import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("there are no accessibility violations", async ({ page }) => {
    test.fail();

    await expect(
      page.getByRole("heading", { name: "Nicholas Hill" }),
    ).toBeVisible();

    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("navigating to the CV page", async ({ page }) => {
    await page.getByRole("link", { name: "Go To CV" }).click();

    await expect(page).toHaveURL("/cv");
  });
});
