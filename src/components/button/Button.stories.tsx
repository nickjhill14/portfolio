import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [withRouter],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Click Me!",
  },
};

export default meta;
