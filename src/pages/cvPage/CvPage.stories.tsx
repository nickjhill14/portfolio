import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getCvInfo } from "../../api/portfolioGateway/portfolioGateway";
import { CvInfo } from "../../domain/cvInfo";
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
        loader: getCvInfo,
      },
    }),
  },
} satisfies Meta<typeof CvPage>;

type Story = StoryObj<typeof meta>;

const cvInfo: CvInfo = {
  experienceInfo: [
    {
      name: faker.person.jobTitle(),
      location: faker.location.country(),
      dateRange: buildDateRange(),
    },
  ],
  educationInfo: [
    {
      qualification: `Degree In ${upperCaseFirstChar(
        faker.company.buzzNoun(),
      )}`,
      institution: `School Of ${faker.location.city()}`,
      dateRange: buildDateRange(),
    },
  ],
  skillInfo: {
    skills: [{ name: upperCaseFirstChar(faker.hacker.ingverb()) }],
    languages: [{ name: faker.location.country(), level: faker.number.int(5) }],
  },
  projectInfo: [
    {
      name: upperCaseFirstChar(faker.company.buzzNoun()),
      institution: `School Of ${faker.location.city()}`,
      dateRange: buildDateRange(),
    },
  ],
  achievementsInfo: [
    {
      name: `Certificate In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
      description: faker.lorem.sentence(5),
    },
  ],
};

const noCvInfo: CvInfo = {
  experienceInfo: [],
  educationInfo: [],
  skillInfo: {
    skills: [],
    languages: [],
  },
  projectInfo: [],
  achievementsInfo: [],
};

const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv-info.json", (_, res, ctx) => {
          return res(ctx.json(cvInfo));
        }),
      ],
    },
  },
};

const NoInfoProvided: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv-info.json", (_, res, ctx) => {
          return res(ctx.json(noCvInfo));
        }),
      ],
    },
  },
};

export default meta;
export { Default, NoInfoProvided };
