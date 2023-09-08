import { createBrowserRouter, type RouteObject } from "react-router-dom";
import portfolioConfig from "../../../public/portfolio-config.json";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";

enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
}

const portfolioRoutes: RouteObject[] = [
  {
    path: PortfolioRoutePaths.BASE,
    element: <LandingPage basicInfo={portfolioConfig.basicInfo} />,
  },
  {
    path: PortfolioRoutePaths.CV,
    element: (
      <CvPage
        experienceInfo={portfolioConfig.experienceInfo}
        educationInfo={portfolioConfig.educationInfo}
        achievementsInfo={portfolioConfig.achievementsInfo}
        skillsInfo={portfolioConfig.skillsInfo}
        projectInfo={portfolioConfig.projectInfo}
      />
    ),
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { PortfolioRoutePaths, portfolioRouter, portfolioRoutes };
