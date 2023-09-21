import { createBrowserRouter, type RouteObject } from "react-router-dom";
import {
  getBasicInfoLoader,
  getCvLoader,
} from "../../api/loaders/portfolioLoader";
import { CreatePortfolioPage } from "../../pages/createPortfolioPage/CreatePortfolioPage";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { ProjectsPage } from "../../pages/projectsPage/ProjectsPage";

enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
  CREATE = "/create",
  PROJECTS = "/projects",
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
  {
    path: PortfolioRoutePaths.PROJECTS,
    element: <ProjectsPage />,
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { PortfolioRoutePaths, portfolioRouter, portfolioRoutes };
