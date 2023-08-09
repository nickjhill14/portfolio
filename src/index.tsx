import React from "react";
import ReactDOM from "react-dom/client";
import { LandingPage } from "./pages/landingPage/LandingPage";
import { BasicInfo } from "./domain";
import { faker } from "@faker-js/faker";

const basicInfo: BasicInfo = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number(),
  linkedIn: faker.internet.userName(),
  github: faker.internet.userName(),
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <LandingPage basicInfo={basicInfo} />
  </React.StrictMode>,
);
