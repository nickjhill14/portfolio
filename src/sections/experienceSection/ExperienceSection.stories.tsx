import type { Meta, StoryObj } from "@storybook/react";
import { buildExperience } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

const meta = {
  title: "Sections/ExperienceSection",
  component: ExperienceSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceSection>;

type Story = StoryObj<typeof meta>;

const SingleExperience: Story = {
  args: {
    experienceInfo: [buildExperience()],
  },
};

const MultipleExperience: Story = {
  args: {
    experienceInfo: [buildExperience(), buildExperience(), buildExperience()],
  },
};

const NoExperience: Story = {
  args: {
    experienceInfo: [],
  },
};

export default meta;
export { MultipleExperience, NoExperience, SingleExperience };
