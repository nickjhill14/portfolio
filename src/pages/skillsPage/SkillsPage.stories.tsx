import type { Meta, StoryObj } from "@storybook/react";
import { buildLanguage, buildSkill } from "../../utils/builders";
import { SkillsPage } from "./SkillsPage";

const meta = {
  title: "Pages/SkillsPage",
  component: SkillsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsPage>;

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
  SingleSkillAndLanguage,
  MultipleSkillsAndLanguages,
  NoSkillsOrLanguages,
};
