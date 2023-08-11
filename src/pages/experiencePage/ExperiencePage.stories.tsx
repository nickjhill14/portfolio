import type { Meta, StoryObj } from "@storybook/react";
import { buildExperience } from "../../utils/builders";
import { ExperiencePage } from "./ExperiencePage";

const meta = {
  title: "Pages/ExperiencePage",
  component: ExperiencePage,
  tags: ["autodocs"],
} satisfies Meta<typeof ExperiencePage>;

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

const NoExperienceProvided: Story = {
  args: {
    experienceInfo: [],
  },
};

export default meta;
export { SingleExperience, MultipleExperience, NoExperienceProvided };
