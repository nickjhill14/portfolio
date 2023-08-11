import type { Meta, StoryObj } from "@storybook/react";
import { buildProject } from "../../utils/builders";
import { ProjectsPage } from "./ProjectsPage";

const meta = {
  title: "Pages/ProjectsPage",
  component: ProjectsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectsPage>;

type Story = StoryObj<typeof meta>;

const SingleProject: Story = {
  args: {
    projectInfo: [buildProject()],
  },
};

const MultipleProjects: Story = {
  args: {
    projectInfo: [buildProject(), buildProject(), buildProject()],
  },
};

const NoProjects: Story = {
  args: {
    projectInfo: [],
  },
};

export default meta;
export { SingleProject, MultipleProjects, NoProjects };
