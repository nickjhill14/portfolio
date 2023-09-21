import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageSkeleton } from "./LandingPageSkeleton";

const meta = {
  title: "Features/LandingPageSkeleton",
  component: LandingPageSkeleton,
} satisfies Meta<typeof LandingPageSkeleton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
