import type { Meta, StoryObj } from "@storybook/react";
import { buildBasicInfo } from "../../utils/builders";
import { LandingPage } from "./LandingPage";

const meta = {
  title: "Pages/LandingPage",
  component: LandingPage,
  tags: ["autodocs"],
} satisfies Meta<typeof LandingPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    basicInfo: buildBasicInfo(),
  },
};

export default meta;
export { Default };
