import AxeBuilder from "@axe-core/playwright";
import { faker } from "@faker-js/faker";
import { expect, test } from "@playwright/test";
import { BasicInfo } from "../src/domain/basicInfo";

test.describe("Create Portfolio Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/create");
  });

  test("there are no accessibility violations", async ({ page }) => {
    await expect(
      page.getByRole("heading", { name: "Create A Portfolio" }),
    ).toBeVisible();

    const { violations } = await new AxeBuilder({ page }).analyze();

    expect(violations).toEqual([]);
  });

  test("entering basic info and copying it to the keyboard", async ({
    page,
    context,
  }) => {
    const basicInfo: BasicInfo = {
      name: faker.person.fullName(),
      role: faker.person.jobTitle(),
      email: faker.internet.email(),
      gitHub: faker.internet.userName(),
      linkedIn: faker.internet.userName(),
    };

    await context.grantPermissions(["clipboard-read", "clipboard-write"]);
    await page.getByRole("textbox", { name: "Name" }).type(basicInfo.name);
    await page.getByRole("textbox", { name: "Role" }).type(basicInfo.role);
    await page.getByRole("textbox", { name: "Email" }).type(basicInfo.email);
    await page.getByRole("textbox", { name: "GitHub" }).type(basicInfo.gitHub);
    await page
      .getByRole("textbox", { name: "LinkedIn" })
      .type(basicInfo.linkedIn);
    await page.getByRole("button", { name: "Copy to clipboard" }).click();
    const clipboardText = await page.evaluate("navigator.clipboard.readText()");

    expect(clipboardText).toEqual(JSON.stringify(basicInfo, null, 2));
  });

  test("navigating to the landing page", async ({ page }) => {
    await page.getByRole("link", { name: "Go Home" }).click();

    await expect(page).toHaveURL("/");
  });
});
