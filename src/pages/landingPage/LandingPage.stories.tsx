import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getBasicInfo } from "../../api/portfolioGateway/portfolioGateway";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

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
          return res(ctx.json(buildBasicInfo()));
        }),
      ],
    },
  },
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
