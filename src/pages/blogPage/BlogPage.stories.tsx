import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { BlogPage } from "./BlogPage";

const meta = {
  title: "Pages/BlogPage",
  component: BlogPage,
  decorators: [withRouter],
} satisfies Meta<typeof BlogPage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
