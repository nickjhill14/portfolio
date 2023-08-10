import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { BasicInfo, ExperienceInfo } from "./domain";
import { ExperiencePage } from "./pages/experiencePage/ExperiencePage";
import { buildBasicInfo, buildExperience } from "./utils/builders";

const basicInfo: BasicInfo = buildBasicInfo();
const experienceInfo: ExperienceInfo = [
  buildExperience(),
  buildExperience(),
  buildExperience(),
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LandingPage basicInfo={basicInfo} />
    <ExperiencePage experienceInfo={experienceInfo} />
  </React.StrictMode>,
);
