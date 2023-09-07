import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { ExperienceInfo } from "../../domain";
import { buildExperience } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

describe(ExperienceSection, () => {
  it("renders the section", () => {
    render(<ExperienceSection experienceInfo={[buildExperience()]} />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no experience details", () => {
    render(<ExperienceSection experienceInfo={[]} />);

    expect(
      screen.getByText("No experience details provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple experience sections", () => {
    const experience1Name = faker.person.jobTitle();
    const experience2Name = faker.person.jobTitle();
    const experience1 = buildExperience({ name: experience1Name });
    const experience2 = buildExperience({ name: experience2Name });
    const experienceInfo: ExperienceInfo = [experience1, experience2];

    render(<ExperienceSection experienceInfo={experienceInfo} />);

    expect(
      screen.getByRole("heading", { name: experience1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: experience2Name }),
    ).toBeInTheDocument();
  });
});
