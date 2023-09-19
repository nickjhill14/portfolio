import type { Meta, StoryObj } from "@storybook/react";
import { CreateCvSection } from "./CreateCvSection";

const meta = {
  title: "Components/CreateCvSection",
  component: CreateCvSection,
  tags: ["autodocs"],
} satisfies Meta<typeof CreateCvSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    onCreate: () => undefined,
  },
};

export default meta;
export { Default };
