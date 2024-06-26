import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { PortfolioRoutePaths, portfolioRoutes } from "./PortfolioRouting";

describe("PortfolioRouting", () => {
  it("navigates to the landing page at the base route", () => {
    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.BASE],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(
      screen.getByRole("heading", { name: "Nicholas Hill", level: 1 }),
    ).toBeInTheDocument();
  });

  it("navigates to the CV page at the CV route", () => {
    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.CV],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(
      screen.getByRole("heading", { name: "CV", level: 1 }),
    ).toBeInTheDocument();
  });

  it("navigates to the projects page at the projects route", () => {
    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.PROJECTS],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(
      screen.getByRole("heading", { name: "Projects", level: 1 }),
    ).toBeInTheDocument();
  });

  it("navigates to the music page at the music route", () => {
    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.MUSIC],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(
      screen.getByRole("heading", { name: "Music", level: 1 }),
    ).toBeInTheDocument();
  });
});
