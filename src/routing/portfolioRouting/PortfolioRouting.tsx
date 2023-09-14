import { createBrowserRouter, type RouteObject } from "react-router-dom";
import {
  getBasicInfo,
  getCv,
} from "../../api/portfolioGateway/portfolioGateway";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";

enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
}

const portfolioRoutes: RouteObject[] = [
  {
    path: PortfolioRoutePaths.BASE,
    element: <LandingPage />,
    loader: getBasicInfo,
  },
  {
    path: PortfolioRoutePaths.CV,
    element: <CvPage />,
    loader: getCv,
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { PortfolioRoutePaths, portfolioRouter, portfolioRoutes };
