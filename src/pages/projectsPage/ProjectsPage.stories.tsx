import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-react-router-v6";
import { ProjectsPage } from "./ProjectsPage";

const meta = {
  title: "Pages/ProjectsPage",
  component: ProjectsPage,
  decorators: [withRouter],
} satisfies Meta<typeof ProjectsPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {};

export default meta;
export { Default };
