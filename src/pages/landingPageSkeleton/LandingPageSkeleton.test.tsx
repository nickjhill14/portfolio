import { render, screen } from "@testing-library/react";
import { LandingPageSkeleton } from "./LandingPageSkeleton";

vitest.mock("react-router-dom");

describe(LandingPageSkeleton, () => {
  it("renders the skeleton", () => {
    render(<LandingPageSkeleton />);

    expect(screen.getByTestId("name-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("role-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("email-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("git-hub-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("linked-in-skeleton")).toBeInTheDocument();
    expect(screen.getByTestId("landing-page-links")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
