import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { EducationInfo } from "../../domain";
import { buildEducation } from "../../utils/builders";
import { EducationSection } from "./EducationSection";

describe(EducationSection, () => {
  it("renders the section", () => {
    render(<EducationSection educationInfo={[buildEducation()]} />);

    expect(
      screen.getByRole("heading", { name: "Education" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no education details", () => {
    render(<EducationSection educationInfo={[]} />);

    expect(
      screen.getByText("No education details provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple education details", () => {
    const education1Name = `Degree In ${faker.company.buzzNoun()}`;
    const education2Name = `Degree In ${faker.company.buzzNoun()}`;
    const education1 = buildEducation({ qualification: education1Name });
    const education2 = buildEducation({ qualification: education2Name });
    const educationInfo: EducationInfo = [education1, education2];

    render(<EducationSection educationInfo={educationInfo} />);

    expect(
      screen.getByRole("heading", { name: education1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: education2Name }),
    ).toBeInTheDocument();
  });
});
