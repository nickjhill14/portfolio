import type { Meta, StoryObj } from "@storybook/react";
import { CreateCvSections } from "./CreateCvSections";

const meta = {
  title: "Features/CreateCvSections",
  component: CreateCvSections,
} satisfies Meta<typeof CreateCvSections>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
