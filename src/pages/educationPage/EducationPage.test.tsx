import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { EducationInfo } from "../../domain";
import { buildEducation } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
import { EducationPage } from "./EducationPage";

describe(EducationPage, () => {
  it("renders the page", () => {
    render(<EducationPage educationInfo={[buildEducation()]} />);

    expect(
      screen.getByRole("heading", { name: "Education" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no education sections", () => {
    render(<EducationPage educationInfo={[]} />);

    expect(
      screen.getByText("No education sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple education sections", () => {
    const education1Name = `Degree In ${faker.company.buzzNoun()}`;
    const education2Name = `Degree In ${faker.company.buzzNoun()}`;
    const education1 = buildEducation({ qualification: education1Name });
    const education2 = buildEducation({ qualification: education2Name });
    const educationInfo: EducationInfo = [education1, education2];

    render(<EducationPage educationInfo={educationInfo} />);

    expect(
      screen.getByRole("heading", { name: education1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: education2Name }),
    ).toBeInTheDocument();
  });
});
function upperCasedFirstChar(arg0: string) {
  throw new Error("Function not implemented.");
}
