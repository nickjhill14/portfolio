import type { Meta, StoryObj } from "@storybook/react";
import { buildBasicInfo, buildCv } from "../../utils/builders";
import { ConfigPreview } from "./ConfigPreview";

const meta = {
  title: "Components/ConfigPreview",
  component: ConfigPreview,
  tags: ["autodocs"],
} satisfies Meta<typeof ConfigPreview>;

type Story = StoryObj<typeof meta>;

const BasicInfoPreview: Story = {
  args: {
    json: JSON.stringify(buildBasicInfo(), null, 2),
    fileName: "basic-info",
  },
};

const CvPreview: Story = {
  args: {
    json: JSON.stringify(buildCv(), null, 2),
    fileName: "cv",
  },
};

export default meta;
export { BasicInfoPreview, CvPreview };
