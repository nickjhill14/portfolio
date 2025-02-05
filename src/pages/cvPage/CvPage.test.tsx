import { render, screen } from "@testing-library/react";
import { cv } from "../../config/cv";
import { CvSection } from "../../features/cvSection/CvSection";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { CvPage } from "./CvPage";

vitest.mock("../../features/cvSection/CvSection");

describe(CvPage, () => {
  beforeEach(() => {
    mockComponent(CvSection);
  });

  it("renders the page", async () => {
    render(<CvPage />);

    expect(
      screen.getByRole("heading", { name: "CV", level: 1 }),
    ).toBeInTheDocument();
    expect(getProps(CvSection).lastCall.cv).toStrictEqual(cv);
  });
});
