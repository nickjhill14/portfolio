import type { Meta, StoryObj } from "@storybook/react";
import { buildExperience } from "../../utils/builders";
import { ExperienceSection } from "./ExperienceSection";

const meta = {
  title: "ExperienceSection",
  component: ExperienceSection,
  tags: ["autodocs"],
} satisfies Meta<typeof ExperienceSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    experience: buildExperience(),
  },
};

export default meta;
export { Default };
