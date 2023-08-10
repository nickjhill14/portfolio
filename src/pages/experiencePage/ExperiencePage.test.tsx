import { render, screen } from "@testing-library/react";
import { ExperiencePage } from "./ExperiencePage";
import { Experience } from "../../domain";
import { faker } from "@faker-js/faker";
import { buildExperience } from "../../utils/builders";

describe(ExperiencePage, () => {
  it("renders the page", () => {
    render(<ExperiencePage experiences={[buildExperience()]} />);

    expect(
      screen.getByRole("heading", { name: "Experience" }),
    ).toBeInTheDocument();
  });

  //   TODO: Implement this
  xit("renders a message when there is no experience section", () => {
    render(<ExperiencePage experiences={[]} />);

    expect(
      screen.getByRole("heading", { name: "No experience section provided" }),
    ).toBeInTheDocument();
  });

  it("renders an experience section", () => {
    const name = faker.person.jobTitle();
    const location = faker.location.country();
    const dates = faker.date
      .betweens({
        from: "2011-01-08T00:00:00.000Z",
        to: "2020-02-03T00:00:00.000Z",
        count: 2,
      })
      .join(" - ");
    const experience: Experience = { name, location, dates };

    render(<ExperiencePage experiences={[experience]} />);

    expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(dates)).toBeInTheDocument();
  });

  it("renders multiple experience sections", () => {
    const experience1Name = faker.person.jobTitle();
    const experience2Name = faker.person.jobTitle();
    const experience1 = buildExperience({ name: experience1Name });
    const experience2 = buildExperience({ name: experience2Name });
    const experiences: Experience[] = [experience1, experience2];

    render(<ExperiencePage experiences={experiences} />);

    expect(
      screen.getByRole("heading", { name: experience1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: experience2Name }),
    ).toBeInTheDocument();
  });
});
