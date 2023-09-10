import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getBasicInfo } from "../../api/portfolioGateway/portfolioGateway";
import { BasicInfo } from "../../domain";
import { LandingPage } from "./LandingPage";

const basicInfo: BasicInfo = {
  name: faker.person.fullName(),
  role: faker.person.jobTitle(),
  email: faker.internet.email(),
  phoneNumber: faker.phone.number("+44 7## ### ###"),
  linkedIn: faker.internet.userName(),
  github: faker.internet.userName(),
};

const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
  decorators: [withRouter],
  parameters: {
    reactRouter: reactRouterParameters({
      routing: {
        loader: getBasicInfo,
      },
    }),
    msw: {
      handlers: [
        rest.get("/portfolioConfig/basic-info.json", (_, res, ctx) => {
          return res(ctx.json(basicInfo));
        }),
      ],
    },
  },
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
