import { createBrowserRouter, type RouteObject } from "react-router-dom";
import {
  getBasicInfo,
  getCvInfo,
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
    loader: getCvInfo,
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { PortfolioRoutePaths, portfolioRouter, portfolioRoutes };
