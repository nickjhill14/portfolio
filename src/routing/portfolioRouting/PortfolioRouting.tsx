import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { reactTestingBlog } from "../../config/blog";
import { BlogPage } from "../../pages/blogPage/BlogPage";
import { BlogTemplatePage } from "../../pages/blogPage/blogTemplatePage/BlogTemplatePage";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import { MusicPage } from "../../pages/musicPage/MusicPage";
import { ProjectsPage } from "../../pages/projectsPage/ProjectsPage";

export enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
  PROJECTS = "/projects",
  BLOG = "/blog",
  MUSIC = "/music",
}

export enum BlogRoutePaths {
  REACT_COMPONENT_TESTING = "/react-component-testing",
}

export const portfolioRoutes: RouteObject[] = [
  {
    path: PortfolioRoutePaths.BASE,
    element: <LandingPage />,
  },
  {
    path: PortfolioRoutePaths.CV,
    element: <CvPage />,
  },
  {
    path: PortfolioRoutePaths.PROJECTS,
    element: <ProjectsPage />,
  },
  {
    path: PortfolioRoutePaths.BLOG,
    element: <BlogPage />,
  },
  {
    path: `${PortfolioRoutePaths.BLOG}${BlogRoutePaths.REACT_COMPONENT_TESTING}`,
    element: <BlogTemplatePage blog={reactTestingBlog} />,
  },
  {
    path: PortfolioRoutePaths.MUSIC,
    element: <MusicPage />,
  },
];

export const portfolioRouter = createBrowserRouter(portfolioRoutes);
