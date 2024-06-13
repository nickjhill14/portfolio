import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";

const meta = {
  title: "Components/Page",
  component: Page,
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof meta>;

export const WithNoChildren: Story = {
  args: { children: undefined },
};

export const WithChildren: Story = {
  args: { children: <>Children</> },
};

export default meta;
