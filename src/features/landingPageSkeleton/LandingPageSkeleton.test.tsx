import { render, screen } from "@testing-library/react";
import { LandingPageSkeleton } from "./LandingPageSkeleton";

describe(LandingPageSkeleton, () => {
  it("renders the skeleton", () => {
    render(<LandingPageSkeleton />);

    expect(screen.getByTestId("landing-page-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("name-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("role-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("email-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("github-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("linkedin-skeleton")).toBeInTheDocument();
  });
});
