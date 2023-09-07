import type { Meta, StoryObj } from "@storybook/react";
import {
  buildAchievement,
  buildEducation,
  buildExperience,
  buildLanguage,
  buildProject,
  buildSkill,
} from "../../utils/builders";
import { CvPage } from "./CvPage";

const meta = {
  title: "Pages/CvPage",
  component: CvPage,
  tags: ["autodocs"],
} satisfies Meta<typeof CvPage>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    experienceInfo: [buildExperience(), buildExperience()],
    educationInfo: [buildEducation(), buildEducation()],
    achievementsInfo: [
      buildAchievement(),
      buildAchievement(),
      buildAchievement(),
    ],
    skillsInfo: {
      skills: [buildSkill(), buildSkill(), buildSkill()],
      languages: [buildLanguage(), buildLanguage()],
    },
    projectInfo: [buildProject(), buildProject(), buildProject()],
  },
};

const NoInfoProvided: Story = {
  args: {
    experienceInfo: [],
    educationInfo: [],
    achievementsInfo: [],
    skillsInfo: { skills: [], languages: [] },
    projectInfo: [],
  },
};

export default meta;
export { Default, NoInfoProvided };
