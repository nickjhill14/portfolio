import { render, screen } from "@testing-library/react";
import { ExperienceSection } from "./ExperienceSection";
import { faker } from "@faker-js/faker";
import { Experience } from "../../domain";
import { buildDates } from "../../utils/builders";

describe(ExperienceSection, () => {
  it("renders the section", () => {
    const name = faker.person.jobTitle();
    const location = faker.location.country();
    const dates = buildDates();
    const experience: Experience = { name, location, dates };

    render(<ExperienceSection experience={experience} />);

    expect(screen.getByRole("heading", { name })).toBeInTheDocument();
    expect(screen.getByText(location)).toBeInTheDocument();
    expect(screen.getByText(dates)).toBeInTheDocument();
  });
});
