import type { Meta, StoryObj } from "@storybook/react";
import { rest } from "msw";
import {
  reactRouterParameters,
  withRouter,
} from "storybook-addon-react-router-v6";
import { getCvInfo } from "../../api/portfolioGateway/portfolioGateway";
import { buildCvInfo } from "../../utils/builders";
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
    msw: {
      handlers: [
        rest.get("/portfolioConfig/cv-info.json", (_, res, ctx) => {
          return res(ctx.json(buildCvInfo()));
        }),
      ],
    },
  },
} satisfies Meta<typeof CvPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

const NoInfoProvided: Story = {};

export default meta;
export { Default, NoInfoProvided };
