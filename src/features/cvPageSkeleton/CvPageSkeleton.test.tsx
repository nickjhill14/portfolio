import { render, screen } from "@testing-library/react";
import { CvPageSkeleton } from "./CvPageSkeleton";

describe(CvPageSkeleton, () => {
  it("renders the skeleton", () => {
    render(<CvPageSkeleton />);

    expect(screen.getByTestId("cv-section-1-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-2-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-3-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("cv-section-4-skeleton")).toBeInTheDocument();
    expect(
      screen.getByTestId("cv-skills-section-skeleton"),
    ).toBeInTheDocument();
  });
});
