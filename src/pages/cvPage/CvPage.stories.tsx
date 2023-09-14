import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getCv } from "../../api/portfolioGateway/portfolioGateway";
import { Cv } from "../../domain/cv";
import { buildDateRange } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
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
          name: faker.person.jobTitle(),
          location: faker.location.country(),
          dateRange: buildDateRange(),
          details: [faker.lorem.sentence(5), faker.lorem.sentence(5)],
        },
        {
          name: faker.person.jobTitle(),
          location: faker.location.country(),
          dateRange: buildDateRange(),
        },
      ],
    },
    {
      title: "Education",
      items: [
        {
          name: `Degree In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
          location: `School Of ${faker.location.city()}`,
          dateRange: buildDateRange(),
        },
        {
          name: `Degree In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
          location: `School Of ${faker.location.city()}`,
          dateRange: buildDateRange(),
        },
      ],
    },
    {
      title: "Achievements",
      items: [
        {
          name: `Certificate In ${upperCaseFirstChar(
            faker.company.buzzNoun(),
          )}`,
          details: [faker.lorem.sentence(5)],
        },
        {
          name: `Certificate In ${upperCaseFirstChar(
            faker.company.buzzNoun(),
          )}`,
        },
      ],
    },
  ],
  skillsInfo: {
    skills: [
      { name: upperCaseFirstChar(faker.hacker.ingverb()) },
      { name: upperCaseFirstChar(faker.hacker.ingverb()) },
    ],
    languages: [
      { name: faker.location.country(), level: faker.number.int(5) },
      { name: faker.location.country(), level: faker.number.int(5) },
    ],
  },
};

const cvWithNoItems: Cv = {
  cvSections: [{ title: "Experience" }],
  skillsInfo: {
    skills: [
      { name: upperCaseFirstChar(faker.hacker.ingverb()) },
      { name: upperCaseFirstChar(faker.hacker.ingverb()) },
    ],
    languages: [{ name: faker.location.country(), level: faker.number.int(5) }],
  },
};

const noCv: Cv = {
  skillsInfo: {
    skills: [{ name: upperCaseFirstChar(faker.hacker.ingverb()) }],
    languages: [{ name: faker.location.country(), level: faker.number.int(5) }],
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
