import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { PortfolioRoutePaths, portfolioRoutes } from "./PortfolioRouting";

describe("PortfolioRouting", () => {
  it.each([
    [PortfolioRoutePaths.BASE, "Nicholas Hill"],
    [PortfolioRoutePaths.CV, "CV"],
    [PortfolioRoutePaths.PROJECTS, "Projects"],
    [PortfolioRoutePaths.BLOG, "Blog"],
    [PortfolioRoutePaths.MUSIC, "Music"],
  ])("navigates to the %s route", (route, heading) => {
    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [route],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(
      screen.getByRole("heading", { name: heading, level: 1 }),
    ).toBeInTheDocument();
  });

  it.each([["react-component-testing", "React Component Testing"]])(
    "navigates to the %s blog route",
    (route, heading) => {
      const portfolioRouter = createMemoryRouter(portfolioRoutes, {
        initialEntries: [`${PortfolioRoutePaths.BLOG}/${route}`],
      });
      render(<RouterProvider router={portfolioRouter} />);

      expect(
        screen.getByRole("heading", { name: heading, level: 1 }),
      ).toBeInTheDocument();
    },
  );
});
