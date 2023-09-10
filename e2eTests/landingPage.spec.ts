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

  test("navigating to the GitHub repo", async ({ page, context }) => {
    const pagePromise = context.waitForEvent("page");

    expect(page.getByRole("link", { name: "Visit Repo" })).toHaveAttribute(
      "target",
      "_blank",
    );
    expect(page.getByRole("link", { name: "Visit Repo" })).toHaveAttribute(
      "rel",
      "noopener noreferrer",
    );

    await page.getByRole("link", { name: "Visit Repo" }).click();
    const newPage = await pagePromise;

    await expect(newPage).toHaveURL(
      "https://github.com/nickjhill14/portfolio-generator",
    );
  });
});
