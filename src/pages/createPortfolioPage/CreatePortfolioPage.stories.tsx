import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { CreatePortfolioPage } from "./CreatePortfolioPage";

const meta = {
  title: "Pages/CreatePortfolioPage",
  component: CreatePortfolioPage,
  decorators: [withRouter],
} satisfies Meta<typeof CreatePortfolioPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
