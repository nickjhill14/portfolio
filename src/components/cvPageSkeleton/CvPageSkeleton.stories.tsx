import type { Meta, StoryObj } from "@storybook/react";
import { CvPageSkeleton } from "./CvPageSkeleton";

const meta = {
  title: "Components/CvPageSkeleton",
  component: CvPageSkeleton,
  tags: ["autodocs"],
} satisfies Meta<typeof CvPageSkeleton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
