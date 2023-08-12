import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { AchievementInfo } from "../../domain";
import { buildAchievement } from "../../utils/builders";
import { AchievementsPage } from "./AchievementsPage";

describe(AchievementsPage, () => {
  it("renders the page", () => {
    render(<AchievementsPage AchievementInfo={[buildAchievement()]} />);

    expect(
      screen.getByRole("heading", { name: "Achievements" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no achievement sections", () => {
    render(<AchievementsPage AchievementInfo={[]} />);

    expect(
      screen.getByText("No achievement sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple achievement sections", () => {
    const achievement1Name = `Certificate In ${faker.company.buzzNoun()}`;
    const achievement2Name = `Certificate In ${faker.company.buzzNoun()}`;
    const achievement1 = buildAchievement({ name: achievement1Name });
    const achievement2 = buildAchievement({ name: achievement2Name });
    const AchievementInfo: AchievementInfo = [achievement1, achievement2];

    render(<AchievementsPage AchievementInfo={AchievementInfo} />);

    expect(
      screen.getByRole("heading", { name: achievement1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: achievement2Name }),
    ).toBeInTheDocument();
  });
});
