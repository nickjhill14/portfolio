import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { CvPage } from "../../pages/cvPage/CvPage";
import { LandingPage } from "../../pages/landingPage/LandingPage";
import {
  buildAchievement,
  buildBasicInfo,
  buildEducation,
  buildExperience,
  buildLanguage,
  buildProject,
  buildSkill,
} from "../../utils/builders";

const portfolioRoutes: RouteObject[] = [
  {
    path: "/",
    element: <LandingPage basicInfo={buildBasicInfo()} />,
  },
  {
    path: "/cv",
    element: (
      <CvPage
        experienceInfo={[buildExperience(), buildExperience()]}
        educationInfo={[buildEducation(), buildEducation()]}
        achievementsInfo={[
          buildAchievement(),
          buildAchievement(),
          buildAchievement(),
        ]}
        skillsInfo={{
          skills: [buildSkill(), buildSkill(), buildSkill()],
          languages: [buildLanguage(), buildLanguage()],
        }}
        projectInfo={[buildProject(), buildProject(), buildProject()]}
      />
    ),
  },
];

const portfolioRouter = createBrowserRouter(portfolioRoutes);

export { portfolioRouter, portfolioRoutes };
