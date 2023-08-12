import { render, screen } from "@testing-library/react";
import { buildAchievement } from "../../utils/builders";
import {
  AchievementSection,
  AchievementSectionProps,
} from "./AchievementSection";

describe(AchievementSection, () => {
  it("renders the section", () => {
    const { name: heading, icon, description } = buildAchievement();
    const sectionProps: AchievementSectionProps = {
      heading,
      icon,
      description,
    };

    render(<AchievementSection {...sectionProps} />);

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });
});
