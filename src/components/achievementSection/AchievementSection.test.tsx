import { render, screen } from "@testing-library/react";
import { buildAchievement } from "../../utils/builders";
import { AchievementSection } from "./AchievementSection";

describe(AchievementSection, () => {
  it("renders the section", () => {
    const { name: heading, icon, description } = buildAchievement();

    render(
      <AchievementSection
        heading={heading}
        icon={icon}
        description={description}
      />,
    );

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
