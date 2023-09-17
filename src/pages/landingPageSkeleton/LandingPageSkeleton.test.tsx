import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
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
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  it("navigates to the CV page when clicking the CV button", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<LandingPageSkeleton />);
    await userEvent.click(screen.getByRole("link", { name: "View CV" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CV);
  });

  it("navigates to the create portfolio page when clicking the create button", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<LandingPageSkeleton />);
    await userEvent.click(screen.getByRole("link", { name: "Create" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CREATE);
  });
});
