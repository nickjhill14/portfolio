import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { LandingPage } from "./LandingPage";

const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  decorators: [withRouter],
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
