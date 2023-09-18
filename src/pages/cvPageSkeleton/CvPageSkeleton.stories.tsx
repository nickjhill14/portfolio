import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { CvPageSkeleton } from "./CvPageSkeleton";

const meta = {
  title: "Pages/CvPageSkeleton",
  component: CvPageSkeleton,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof CvPageSkeleton>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
