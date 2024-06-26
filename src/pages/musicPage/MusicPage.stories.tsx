import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { MusicPage } from "./MusicPage";

const meta = {
  title: "Pages/MusicPage",
  component: MusicPage,
  decorators: [withRouter],
} satisfies Meta<typeof MusicPage>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export default meta;
