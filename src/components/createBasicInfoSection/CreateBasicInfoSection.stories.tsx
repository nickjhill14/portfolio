import type { Meta, StoryObj } from "@storybook/react";
import { CreateBasicInfoSection } from "./CreateBasicInfoSection";

const meta = {
  title: "Components/CreateBasicInfoSection",
  component: CreateBasicInfoSection,
  tags: ["autodocs"],
} satisfies Meta<typeof CreateBasicInfoSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
