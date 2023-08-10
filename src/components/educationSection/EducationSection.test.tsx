import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { Education } from "../../domain";
import { buildDates } from "../../utils/builders";
import { EducationSection } from "./EducationSection";

describe(EducationSection, () => {
  it("renders the section", () => {
    const qualification = `Degree In ${faker.company.buzzNoun()}`;
    const institution = `School Of ${faker.location.city()}`;
    const dates = buildDates();
    const education: Education = { qualification, institution, dates };

    render(<EducationSection education={education} />);

    expect(
      screen.getByRole("heading", { name: qualification }),
    ).toBeInTheDocument();
    expect(screen.getByText(institution)).toBeInTheDocument();
    expect(screen.getByText(dates)).toBeInTheDocument();
  });
});
