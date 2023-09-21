import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { LandingPageLinks } from "./LandingPageLinks";

const meta = {
  title: "Features/LandingPageLinks",
  component: LandingPageLinks,
  decorators: [withRouter],
} satisfies Meta<typeof LandingPageLinks>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
