import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getCv } from "../../api/portfolioGateway/portfolioGateway";
import { Cv } from "../../domain/cv";
import { CvPage } from "./CvPage";

const meta = {
  title: "Pages/CvPage",
  component: CvPage,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        loader: getCv,
      },
    }),
  },
} satisfies Meta<typeof CvPage>;

type Story = StoryObj<typeof meta>;

const cv: Cv = {
  cvSections: [
    {
      title: "Experience",
      items: [
        {
          name: "Senior Consultant Developer",
          location: "London",
          dateRange: "Feb. 20 - Present",
          details: [
            "Advocating software excellence through the effective implementation of coding practices, cross-role collaboration, and QA strategy",
            "Digitally transforming clients in the healthcare and automotive industries",
            "Driving the development of high-performing via Agile methodologies",
            "Working across the tech stack (frontend, backend, and infra)",
            "Contributing to internal, external, and open-source projects globally",
          ],
        },
        {
          name: "English Teacher",
          location: "Shenzhen & Hong Kong",
          dateRange: "Sep. 17 - Aug. 19",
          details: [
            "Scored 97% Teaching English As A Foreign Language (GA Level 3)",
            "Scored 91% in the Chinese Language Proficiency Test (HSK Level 3)",
          ],
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: "Masters In Computer Science",
          location: "University Of Nottingham",
          dateRange: "Sep. 13 - Jul. 17",
        },
        {
          name: "3 A Levels",
          location: "Beaumont School",
          dateRange: "Sep. 11 - Aug. 13",
        },
        {
          name: "12 GCSEs",
          location: "Beaumont School",
          dateRange: "Sep. 09 - Aug. 11",
        },
      ],
    },
    {
      title: "Achievements",
      items: [
        {
          name: "AWS Certified Cloud Practitioner",
          details: ["Understanding of AWS concepts and services"],
        },
        {
          name: "7Digital/Esendex For Software Quality",
          details: ["For the Autonomous Robot Image Tagging System project"],
        },
        {
          name: "C++ Hall Of Fame, University Of Nottingham",
          details: ["For a high attaining C++ game project"],
        },
      ],
    },
    {
      title: "Projects",
      items: [
        {
          name: "React App Template",
          location: "Personal",
          dateRange: "Sep. 23 - Present",
        },
        {
          name: "Portfolio Generator",
          location: "Personal",
          dateRange: "Aug. 23 - Present",
        },
        {
          name: "Bahmni",
          location: "Thoughtworks",
          dateRange: "Jul. 20 - Sep. 20",
          details: [
            "Enriched an existing open-source medical record and hospital system with SNOMED Clinical Terms for COVID-19",
          ],
        },
        {
          name: "OpenMRS",
          location: "Thoughtworks",
          dateRange: "Apr. 20 - Sep. 20",
          details: [
            "Developed a patient registration module for an open-source project supporting healthcare in developing countries",
          ],
        },
        {
          name: "Autonomous Robot Image Tagging System",
          location: "University Of Nottingham",
          dateRange: "Sep. 14 - Jul. 15",
          details: [
            "Developed a system composed of an autonomous image-capturing robot and a web app allowing users to tag objects in the images taken",
          ],
        },
      ],
    },
  ],
  skillsInfo: {
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "Spring" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "JUnit" },
      { name: "Jest" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Terraform" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "OpenShift" },
      { name: "Agile" },
      { name: "Kanban" },
      { name: "Clean Code" },
      { name: "TDD" },
      { name: "CI/CD" },
      { name: "REST" },
      { name: "Microservices" },
      { name: "Microfrontends" },
      { name: "BFF" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bitbucket" },
      { name: "GoCD" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Jira" },
      { name: "Kibana" },
      { name: "Snowflake" },
      { name: "Mermaid.js" },
    ],
    languages: [
      { name: "English", level: 5 },
      { name: "Mandarin Chinese", level: 2 },
    ],
  },
};

const cvWithNoItems: Cv = {
  cvSections: [{ title: "Experience" }],
  skillsInfo: {
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "Spring" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "JUnit" },
      { name: "Jest" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Terraform" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "OpenShift" },
      { name: "Agile" },
      { name: "Kanban" },
      { name: "Clean Code" },
      { name: "TDD" },
      { name: "CI/CD" },
      { name: "REST" },
      { name: "Microservices" },
      { name: "Microfrontends" },
      { name: "BFF" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bitbucket" },
      { name: "GoCD" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Jira" },
      { name: "Kibana" },
      { name: "Snowflake" },
      { name: "Mermaid.js" },
    ],
    languages: [
      { name: "English", level: 5 },
      { name: "Mandarin Chinese", level: 2 },
    ],
  },
};

const noCv: Cv = {
  skillsInfo: {
    skills: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Java" },
      { name: "Python" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "React" },
      { name: "Redux" },
      { name: "Node.js" },
      { name: "Spring" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "JUnit" },
      { name: "Jest" },
      { name: "Cypress" },
      { name: "Playwright" },
      { name: "Terraform" },
      { name: "AWS" },
      { name: "Docker" },
      { name: "OpenShift" },
      { name: "Agile" },
      { name: "Kanban" },
      { name: "Clean Code" },
      { name: "TDD" },
      { name: "CI/CD" },
      { name: "REST" },
      { name: "Microservices" },
      { name: "Microfrontends" },
      { name: "BFF" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Bitbucket" },
      { name: "GoCD" },
      { name: "GitHub Actions" },
      { name: "Jenkins" },
      { name: "Jira" },
      { name: "Kibana" },
      { name: "Snowflake" },
      { name: "Mermaid.js" },
    ],
    languages: [
      { name: "English", level: 5 },
      { name: "Mandarin Chinese", level: 2 },
    ],
  },
};

const noCvOrSkillsInfo: Cv = {
  skillsInfo: {
    skills: [],
    languages: [],
  },
};

const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv.json", (_, res, ctx) => {
          return res(ctx.json(cv));
        }),
      ],
    },
  },
};

const NoCv: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv.json", (_, res, ctx) => {
          return res(ctx.json(noCv));
        }),
      ],
    },
  },
};

const CvWithNoItems: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv.json", (_, res, ctx) => {
          return res(ctx.json(cvWithNoItems));
        }),
      ],
    },
  },
};

const NoCvOrSkillsInfo: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv.json", (_, res, ctx) => {
          return res(ctx.json(noCvOrSkillsInfo));
        }),
      ],
    },
  },
};

export default meta;
export { CvWithNoItems, Default, NoCv, NoCvOrSkillsInfo };
