import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { CvPage } from "./CvPage";

const meta = {
  title: "Pages/CvPage",
  component: CvPage,
  decorators: [withRouter],
} satisfies Meta<typeof CvPage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
