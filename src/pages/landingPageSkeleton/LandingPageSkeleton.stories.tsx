import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { LandingPageSkeleton } from "./LandingPageSkeleton";

const meta = {
  title: "Pages/LandingPageSkeleton",
  component: LandingPageSkeleton,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof LandingPageSkeleton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
