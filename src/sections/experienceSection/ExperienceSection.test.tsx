import { render, screen } from "@testing-library/react";
import { ExperienceInfo } from "../../domain/cvInfo";
import { buildExperience } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

describe(ExperienceSection, () => {
  it("renders the section", () => {
    render(<ExperienceSection experienceInfo={[buildExperience()]} />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders details when provided", () => {
    const details: string[] = ["Experienced creating a portfolio"];

    render(
      <ExperienceSection experienceInfo={[buildExperience({ details })]} />,
    );

    expect(screen.getByText(details[0])).toBeInTheDocument();
  });

  it("renders a message when there are no experience details", () => {
    render(<ExperienceSection experienceInfo={[]} />);

    expect(
      screen.getByText("No experience details provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple experience sections", () => {
    const experience1 = buildExperience({ name: "Portfolio Creating" });
    const experience2 = buildExperience({ name: "Portfolio Generating" });
    const experienceInfo: ExperienceInfo = [experience1, experience2];

    render(<ExperienceSection experienceInfo={experienceInfo} />);

    expect(
      screen.getByRole("heading", { name: experience1.name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: experience2.name }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
