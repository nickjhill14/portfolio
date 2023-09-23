import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getBasicInfoLoader } from "../../api/loaders/portfolioLoader";
import { BasicInfo } from "../../domain/basicInfo";
import { LandingPage } from "./LandingPage";

const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        loader: getBasicInfoLoader,
      },
    }),
  },
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

const basicInfo: BasicInfo = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  linkedIn: faker.internet.userName(),
  gitHub: faker.internet.userName(),
};

const Default: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/basic-info.json", (_, res, ctx) => {
          return res(ctx.json(basicInfo));
        }),
      ],
    },
  },
};

export default meta;
export { Default };
