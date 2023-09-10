import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildDateRange } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

const meta = {
  title: "Sections/ExperienceSection",
  component: ExperienceSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceSection>;

type Story = StoryObj<typeof meta>;

const SingleExperience: Story = {
  args: {
    experienceInfo: [
      {
        name: faker.person.jobTitle(),
        location: faker.location.country(),
        dateRange: buildDateRange(),
      },
    ],
  },
};

const MultipleExperience: Story = {
  args: {
    experienceInfo: [
      {
        name: faker.person.jobTitle(),
        location: faker.location.country(),
        dateRange: buildDateRange(),
      },
      {
        name: faker.person.jobTitle(),
        location: faker.location.country(),
        dateRange: buildDateRange(),
      },
    ],
  },
};

const NoExperience: Story = {
  args: {
    experienceInfo: [],
  },
};

export default meta;
export { MultipleExperience, NoExperience, SingleExperience };
