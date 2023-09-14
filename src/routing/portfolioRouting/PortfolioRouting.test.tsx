import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  getBasicInfo,
  getCv,
} from "../../api/portfolioGateway/portfolioGateway";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { buildBasicInfo, buildCv } from "../../utils/builders";
import { PortfolioRoutePaths, portfolioRoutes } from "./PortfolioRouting";

vitest.mock("../../api/portfolioGateway/portfolioGateway");
vitest.mock("../../pages/landingPage/LandingPage");
vitest.mock("../../pages/cvPage/CvPage");

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
});
