import type { Meta, StoryObj } from "@storybook/react";
import { buildSkill } from "../../utils/builders";
import { SkillsPage } from "./SkillsPage";

const meta = {
  title: "Pages/SkillsPage",
  component: SkillsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsPage>;

type Story = StoryObj<typeof meta>;

const SingleSkill: Story = {
  args: {
    skillInfo: [buildSkill()],
  },
};

const MultipleSkills: Story = {
  args: {
    skillInfo: [buildSkill(), buildSkill(), buildSkill()],
  },
};

const NoSkills: Story = {
  args: {
    skillInfo: [],
  },
};

export default meta;
export { SingleSkill, MultipleSkills, NoSkills };
