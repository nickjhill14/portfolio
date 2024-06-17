import { render, screen } from "@testing-library/react";
import { CvPageSkeleton } from "./CvPageSkeleton";

describe(CvPageSkeleton, () => {
  it("renders the skeleton", () => {
    render(<CvPageSkeleton />);

    expect(screen.getAllByTestId("cv-section-skeleton")).toHaveLength(4);
    expect(
      screen.getByTestId("cv-skills-section-skeleton"),
    ).toBeInTheDocument();
  });
});
