import { render, screen } from "@testing-library/react";
import { AchievementInfo } from "../../domain";
import { buildAchievement } from "../../utils/builders";
import { AchievementsSection } from "./AchievementsSection";

describe(AchievementsSection, () => {
  it("renders the section", () => {
    render(<AchievementsSection achievementInfo={[buildAchievement()]} />);

    expect(
      screen.getByRole("heading", { name: "Achievements" }),
    ).toBeInTheDocument();
  });

  it("does not render a divider when there is 1 achievement section", () => {
    render(<AchievementsSection achievementInfo={[buildAchievement()]} />);

    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders a message when there are no achievement sections", () => {
    render(<AchievementsSection achievementInfo={[]} />);

    expect(
      screen.getByText("No achievement sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple achievement sections", () => {
    const achievement1Name = "Certificate In Portfolio Creation";
    const achievement2Name = "Certificate In Portfolio Generating";
    const achievement1 = buildAchievement({ name: achievement1Name });
    const achievement2 = buildAchievement({ name: achievement2Name });
    const AchievementInfo: AchievementInfo = [achievement1, achievement2];

    render(<AchievementsSection achievementInfo={AchievementInfo} />);

    expect(
      screen.getByRole("heading", { name: achievement1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: achievement2Name }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
