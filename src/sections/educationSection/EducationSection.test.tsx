import { render, screen } from "@testing-library/react";
import { EducationInfo } from "../../domain/cvInfo";
import { buildEducation } from "../../utils/builders";
import { EducationSection } from "./EducationSection";

describe(EducationSection, () => {
  it("renders the section", () => {
    render(<EducationSection educationInfo={[buildEducation()]} />);

    expect(
      screen.getByRole("heading", { name: "Education" }),
    ).toBeInTheDocument();
    expect(screen.queryByTestId("divider")).not.toBeInTheDocument();
  });

  it("renders a message when there are no education details", () => {
    render(<EducationSection educationInfo={[]} />);

    expect(
      screen.getByText("No education details provided"),
    ).toBeInTheDocument();
  });

  it("renders details when provided", () => {
    const details: string[] = ["Learnt how to create a portfolio"];

    render(<EducationSection educationInfo={[buildEducation({ details })]} />);

    expect(screen.getByText(details[0])).toBeInTheDocument();
  });

  it("renders multiple education details", () => {
    const education1Name = "Degree In Portfolios";
    const education2Name = "Degree In Portfolio Generating";
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
    expect(screen.getByTestId("divider")).toBeInTheDocument();
  });
});
