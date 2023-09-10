import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildDateRange } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
import { ProjectsSection } from "./ProjectsSection";

const meta = {
  title: "Sections/ProjectsSection",
  component: ProjectsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectsSection>;

type Story = StoryObj<typeof meta>;

const SingleProject: Story = {
  args: {
    projectInfo: [
      {
        name: upperCaseFirstChar(faker.company.buzzNoun()),
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
    ],
  },
};

const MultipleProjects: Story = {
  args: {
    projectInfo: [
      {
        name: upperCaseFirstChar(faker.company.buzzNoun()),
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
      {
        name: upperCaseFirstChar(faker.company.buzzNoun()),
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
    ],
  },
};

const NoProjects: Story = {
  args: {
    projectInfo: [],
  },
};

export default meta;
export { MultipleProjects, NoProjects, SingleProject };
