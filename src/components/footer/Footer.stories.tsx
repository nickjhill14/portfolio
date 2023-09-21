import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./Footer";

const meta = {
  title: "Components/Footer",
  component: Footer,
} satisfies Meta<typeof Footer>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
