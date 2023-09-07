import type { Meta, StoryObj } from "@storybook/react";
import { buildLanguage, buildSkill } from "../../utils/builders";
import { SkillsSection } from "./SkillsSection";

const meta = {
  title: "Sections/SkillsSection",
  component: SkillsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsSection>;

type Story = StoryObj<typeof meta>;

const SingleSkillAndLanguage: Story = {
  args: {
    skillInfo: { skills: [buildSkill()], languages: [buildLanguage()] },
  },
};

const MultipleSkillsAndLanguages: Story = {
  args: {
    skillInfo: {
      skills: [buildSkill(), buildSkill(), buildSkill()],
      languages: [buildLanguage(), buildLanguage(), buildLanguage()],
    },
  },
};

const NoSkillsOrLanguages: Story = {
  args: {
    skillInfo: { skills: [], languages: [] },
  },
};

export default meta;
export {
  MultipleSkillsAndLanguages,
  NoSkillsOrLanguages,
  SingleSkillAndLanguage,
};
