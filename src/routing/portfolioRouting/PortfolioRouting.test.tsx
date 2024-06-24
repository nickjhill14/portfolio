import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { ProjectsPage } from "../../pages/projectsPage/ProjectsPage";
import { PortfolioRoutePaths, portfolioRoutes } from "./PortfolioRouting";

vitest.mock("../../pages/landingPage/LandingPage");
vitest.mock("../../pages/cvPage/CvPage");
vitest.mock("../../pages/projectsPage/ProjectsPage");

describe("PortfolioRouting", () => {
  it("navigates to the landing page at the base route", () => {
    const landingPageComponent = "LandingPage Component";

    vitest.mocked(LandingPage).mockReturnValue(<>{landingPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.BASE],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(screen.getByText(landingPageComponent)).toBeInTheDocument();
  });

  it("navigates to the landing page at the CV route", () => {
    const cvPageComponent = "CvPage Component";

    vitest.mocked(CvPage).mockReturnValue(<>{cvPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.CV],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(screen.getByText(cvPageComponent)).toBeInTheDocument();
  });

  it("navigates to the projects page at the projects route", () => {
    const projectsPageComponent = "ProjectsPage Component";

    vitest.mocked(ProjectsPage).mockReturnValue(<>{projectsPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.PROJECTS],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(screen.getByText(projectsPageComponent)).toBeInTheDocument();
  });
});
