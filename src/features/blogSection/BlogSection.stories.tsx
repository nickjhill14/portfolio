import type { Meta, StoryObj } from "@storybook/react";
import { BlogSection } from "./BlogSection";

const meta = {
  title: "Features/BlogSection",
  component: BlogSection,
} satisfies Meta<typeof BlogSection>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
