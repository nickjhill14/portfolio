import type { Meta, StoryObj } from "@storybook/react";
import { buildBasicInfo } from "../../utils/builders";
import { BasicInfoSection } from "./BasicInfoSection";

const meta = {
  title: "Features/BasicInfoSection",
  component: BasicInfoSection,
} satisfies Meta<typeof BasicInfoSection>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { basicInfo: buildBasicInfo() },
};

export default meta;
