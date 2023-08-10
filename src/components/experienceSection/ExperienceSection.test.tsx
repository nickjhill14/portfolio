import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Experience } from "../../domain";
import { buildDates } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

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
