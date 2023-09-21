import { Icecream } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { Button } from "./Button";

const meta = {
  title: "Components/Button",
  component: Button,
  decorators: [withRouter],
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    onClick: () => undefined,
    text: "Click Me!",
  },
};

const WithMuiButtonProps: Story = {
  args: {
    ...Default.args,
    startIcon: <Icecream />,
  },
};

export default meta;
export { Default, WithMuiButtonProps };
