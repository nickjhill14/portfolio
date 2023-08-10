import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { ExperienceInfo } from "../../domain";
import { buildExperience } from "../../utils/builders";
import { ExperiencePage } from "./ExperiencePage";

describe(ExperiencePage, () => {
  it("renders the page", () => {
    render(<ExperiencePage experienceInfo={[buildExperience()]} />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no experience sections", () => {
    render(<ExperiencePage experienceInfo={[]} />);

    expect(
      screen.getByText("No experience sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple experience sections", () => {
    const experience1Name = faker.person.jobTitle();
    const experience2Name = faker.person.jobTitle();
    const experience1 = buildExperience({ name: experience1Name });
    const experience2 = buildExperience({ name: experience2Name });
    const experienceInfo: ExperienceInfo = [experience1, experience2];

    render(<ExperiencePage experienceInfo={experienceInfo} />);

    expect(
      screen.getByRole("heading", { name: experience1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: experience2Name }),
    ).toBeInTheDocument();
  });
});
