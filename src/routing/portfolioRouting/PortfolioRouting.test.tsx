import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { getBasicInfo, getCv } from "../../api/gateways/portfolioGateway";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { ProjectsPage } from "../../pages/projectsPage/ProjectsPage";
import { buildBasicInfo, buildCv } from "../../utils/builders";
import { PortfolioRoutePaths, portfolioRoutes } from "./PortfolioRouting";

vitest.mock("../../api/gateways/portfolioGateway");
vitest.mock("../../pages/landingPage/LandingPage");
vitest.mock("../../pages/cvPage/CvPage");
vitest.mock("../../pages/projectsPage/ProjectsPage");

describe("PortfolioRouting", () => {
  it("navigates to the landing page at the base route", async () => {
    const landingPageComponent = "LandingPage Component";

    vitest.mocked(getBasicInfo).mockResolvedValue(buildBasicInfo());
    vitest.mocked(LandingPage).mockReturnValue(<>{landingPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.BASE],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(await screen.findByText(landingPageComponent)).toBeInTheDocument();
  });

  it("navigates to the landing page at the CV route", async () => {
    const cvPageComponent = "CvPage Component";

    vitest.mocked(getCv).mockResolvedValue(buildCv());
    vitest.mocked(CvPage).mockReturnValue(<>{cvPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.CV],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(await screen.findByText(cvPageComponent)).toBeInTheDocument();
  });

  it("navigates to the projects page at the projects route", async () => {
    const projectsPageComponent = "ProjectsPage Component";

    vitest.mocked(ProjectsPage).mockReturnValue(<>{projectsPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: [PortfolioRoutePaths.PROJECTS],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(await screen.findByText(projectsPageComponent)).toBeInTheDocument();
  });
});
