import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { portfolioRoutes } from "./PortfolioRouting";

vitest.mock("../../pages/landingPage/LandingPage");
vitest.mock("../../pages/cvPage/CvPage");

describe("PortfolioRouting", () => {
  it("navigates to the landing page at the base route", () => {
    const landingPageComponent = "LandingPage Component";

    vitest.mocked(LandingPage).mockReturnValue(<>{landingPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: ["/"],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(screen.getByText(landingPageComponent)).toBeInTheDocument();
  });

  it("navigates to the landing page at the CV route", () => {
    const cvPageComponent = "CvPage Component";

    vitest.mocked(CvPage).mockReturnValue(<>{cvPageComponent}</>);

    const portfolioRouter = createMemoryRouter(portfolioRoutes, {
      initialEntries: ["/cv"],
    });
    render(<RouterProvider router={portfolioRouter} />);

    expect(screen.getByText(cvPageComponent)).toBeInTheDocument();
  });
});
