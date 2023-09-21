import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { LandingPageLinks } from "./LandingPageLinks";

vitest.mock("react-router-dom");

describe(LandingPageLinks, () => {
  const useNavigateMock = vitest.mocked(useNavigate);

  it("navigates to the CV page when clicking the CV button", async () => {
    const navigateMock = vitest.fn();

    useNavigateMock.mockReturnValue(navigateMock);

    render(<LandingPageLinks />);
    await userEvent.click(screen.getByRole("link", { name: "View CV" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CV);
  });

  it("navigates to the create portfolio page when clicking the create button", async () => {
    const navigateMock = vitest.fn();

    useNavigateMock.mockReturnValue(navigateMock);

    render(<LandingPageLinks />);
    await userEvent.click(screen.getByRole("link", { name: "Create" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CREATE);
  });
});
