import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { blogs, reactTestingBlog } from "../../config/blog";
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
    path: `${PortfolioRoutePaths.BLOG}/${blogs[0].title
      .replaceAll(" ", "-")
      .toLowerCase()}`,
    element: <BlogTemplatePage blog={reactTestingBlog} />,
  },
  {
    path: PortfolioRoutePaths.MUSIC,
    element: <MusicPage />,
  },
];

export const portfolioRouter = createBrowserRouter(portfolioRoutes);
