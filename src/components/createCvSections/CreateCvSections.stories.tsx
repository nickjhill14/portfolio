import type { Meta, StoryObj } from "@storybook/react";
import { CreateCvSections } from "./CreateCvSections";

const meta = {
  title: "Components/CreateCvSections",
  component: CreateCvSections,
  tags: ["autodocs"],
} satisfies Meta<typeof CreateCvSections>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
