import React from "react";
import ReactDOM from "react-dom/client";
import { BasicInfo } from "./domain";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { buildBasicInfo } from "./utils/builders";

const basicInfo: BasicInfo = buildBasicInfo();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LandingPage basicInfo={basicInfo} />
  </React.StrictMode>,
);
