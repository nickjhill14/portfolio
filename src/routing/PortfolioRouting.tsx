import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { blogs, reactTestingBlog } from "../config/blog";
import { BlogPage } from "../pages/blogPage/BlogPage";
import { BlogTemplatePage } from "../pages/blogPage/blogTemplatePage/BlogTemplatePage";
import { CvPage } from "../pages/cvPage/CvPage";
import { ErrorPage } from "../pages/errorPage/ErrorPage";
import { LandingPage } from "../pages/landingPage/LandingPage";
import { ProjectsPage } from "../pages/projectsPage/ProjectsPage";
import { SquirdlePage } from "../pages/squirdlePage/SquirdlePage";

export enum PortfolioRoutePaths {
  BASE = "/",
  CV = "/cv",
  PROJECTS = "/projects",
  BLOG = "/blog",
}

const portfolioRoutes: RouteObject[] = [
  {
    path: PortfolioRoutePaths.BASE,
    element: <LandingPage />,
    errorElement: <ErrorPage />,
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
    path: `${PortfolioRoutePaths.PROJECTS}/squirdle`,
    element: <SquirdlePage />,
  },
  {
    path: `${PortfolioRoutePaths.BLOG}/${blogs[0].title
      .replaceAll(" ", "-")
      .toLowerCase()}`,
    element: <BlogTemplatePage blog={reactTestingBlog} />,
  },
];

export const portfolioRouter = createBrowserRouter(portfolioRoutes);
