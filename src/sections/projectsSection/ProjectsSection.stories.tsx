import type { Meta, StoryObj } from "@storybook/react";
import { buildProject } from "../../utils/builders";
import { ProjectsSection } from "./ProjectsSection";

const meta = {
  title: "Sections/ProjectsSection",
  component: ProjectsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectsSection>;

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
export { MultipleProjects, NoProjects, SingleProject };
