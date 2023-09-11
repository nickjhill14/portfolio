import { render, screen } from "@testing-library/react";
import { AchievementInfo } from "../../domain/cvInfo";
import { buildAchievement } from "../../utils/builders";
import { AchievementsSection } from "./AchievementsSection";

describe(AchievementsSection, () => {
  it("renders the section", () => {
    render(<AchievementsSection achievementInfo={[buildAchievement()]} />);

    expect(
      screen.getByRole("heading", { name: "Achievements" }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders a message when there are no achievement sections", () => {
    render(<AchievementsSection achievementInfo={[]} />);

    expect(
      screen.getByText("No achievement sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple achievement sections", () => {
    const achievement1 = buildAchievement({
      name: "Certificate In Portfolio Creation",
    });
    const achievement2 = buildAchievement({
      name: "Certificate In Portfolio Generating",
    });
    const AchievementInfo: AchievementInfo = [achievement1, achievement2];

    render(<AchievementsSection achievementInfo={AchievementInfo} />);

    expect(
      screen.getByRole("heading", { name: achievement1.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: achievement2.name }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
