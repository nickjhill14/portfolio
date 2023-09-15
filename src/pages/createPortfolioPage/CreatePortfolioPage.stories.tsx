import type { Meta, StoryObj } from "@storybook/react";
import { CreatePortfolioPage } from "./CreatePortfolioPage";

const meta = {
  title: "Pages/CreatePortfolioPage",
  component: CreatePortfolioPage,
  tags: ["autodocs"],
} satisfies Meta<typeof CreatePortfolioPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
