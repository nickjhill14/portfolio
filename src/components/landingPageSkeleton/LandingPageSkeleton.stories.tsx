import type { Meta, StoryObj } from "@storybook/react";
import { LandingPageSkeleton } from "./LandingPageSkeleton";

const meta = {
  title: "Components/LandingPageSkeleton",
  component: LandingPageSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof LandingPageSkeleton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
