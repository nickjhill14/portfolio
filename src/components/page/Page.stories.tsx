import { Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { Page } from "./Page";

const meta = {
  title: "Components/Page",
  component: Page,
} satisfies Meta<typeof Page>;

type Story = StoryObj<typeof meta>;

const WithNoChildren: Story = {
  args: { children: undefined },
};

const WithChildren: Story = {
  args: { children: <Typography>Children</Typography> },
};

export default meta;
export { WithChildren, WithNoChildren };
