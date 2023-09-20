import { createBrowserRouter, type RouteObject } from "react-router-dom";
import {
  getBasicInfoLoader,
  getCvLoader,
} from "../../api/loaders/portfolioLoader";
import { CreatePortfolioPage } from "../../pages/createPortfolioPage/CreatePortfolioPage";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";

enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
  CREATE = "/create",
}

const portfolioRoutes: RouteObject[] = [
  {
    path: PortfolioRoutePaths.BASE,
    element: <LandingPage />,
    loader: getBasicInfoLoader,
  },
  {
    path: PortfolioRoutePaths.CV,
    element: <CvPage />,
    loader: getCvLoader,
  },
  {
    path: PortfolioRoutePaths.CREATE,
    element: <CreatePortfolioPage />,
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { PortfolioRoutePaths, portfolioRouter, portfolioRoutes };
