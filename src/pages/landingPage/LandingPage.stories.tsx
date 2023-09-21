import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getBasicInfo } from "../../api/gateways/portfolioGateway";
import { BasicInfo } from "../../domain/basicInfo";
import { LandingPage } from "./LandingPage";

const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        loader: getBasicInfo,
      },
    }),
  },
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

const basicInfo: BasicInfo = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  phone: faker.phone.number("+44 7## ### ###"),
  linkedIn: faker.internet.userName(),
  gitHub: faker.internet.userName(),
};

const basicInfoWithPhone: BasicInfo = {
  ...basicInfo,
  phone: faker.phone.number("+44 7## ### ###"),
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

const WithPhone: Story = {
  parameters: {
    msw: {
      handlers: [
        rest.get("/portfolioConfig/basic-info.json", (_, res, ctx) => {
          return res(ctx.json(basicInfoWithPhone));
        }),
      ],
    },
  },
};

export default meta;
export { Default, WithPhone };
