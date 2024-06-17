import type { Meta, StoryObj } from "@storybook/react";
import { CvPageSkeleton } from "./CvPageSkeleton";

const meta = {
  title: "Features/CvPageSkeleton",
  component: CvPageSkeleton,
} satisfies Meta<typeof CvPageSkeleton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
