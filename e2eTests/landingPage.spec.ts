import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test.describe("Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("there are no accessibility violations", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Nicholas Hill" }),
    ).toBeVisible();
    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("navigating to the CV page", async ({ page }) => {
    await page.getByRole("link", { name: "View CV" }).click();

    await expect(page).toHaveURL("/cv");
  });

  test("navigating to the create portfolio page", async ({ page }) => {
    await page.getByRole("link", { name: "Create Portfolio" }).click();

    await expect(page).toHaveURL("/create");
  });

  test("navigating to the projects page", async ({ page }) => {
    await page.getByRole("link", { name: "View Projects" }).click();

    await expect(page).toHaveURL("/projects");
  });
});
