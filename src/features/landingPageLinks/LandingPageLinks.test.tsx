import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { LandingPageLinks } from "./LandingPageLinks";
import { PortfolioRoutePaths } from "@/routing/routePaths";

describe("LandingPageLinks", () => {
  const useNavigateMock = vitest.mocked(useNavigate);

  it("navigates to the CV page when clicking the CV btn", async () => {
    const navigateMock = vitest.fn();

    useNavigateMock.mockReturnValue(navigateMock);

    render(<LandingPageLinks />);
    await userEvent.click(screen.getByRole("button", { name: "View CV" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.CV);
  });

  it("navigates to the projects page when clicking the view projects btn", async () => {
    const navigateMock = vitest.fn();

    useNavigateMock.mockReturnValue(navigateMock);

    render(<LandingPageLinks />);
    await userEvent.click(
      screen.getByRole("button", { name: "View Projects" }),
    );

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.PROJECTS);
  });

  it("navigates to the blog page when clicking the view blog btn", async () => {
    const navigateMock = vitest.fn();

    useNavigateMock.mockReturnValue(navigateMock);

    render(<LandingPageLinks />);
    await userEvent.click(screen.getByRole("button", { name: "View Blog" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BLOG);
  });
});
