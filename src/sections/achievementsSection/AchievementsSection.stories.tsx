import type { Meta, StoryObj } from "@storybook/react";
import { buildAchievement } from "../../utils/builders";
import { AchievementsSection } from "./AchievementsSection";

const meta = {
  title: "Sections/AchievementsSection",
  component: AchievementsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof AchievementsSection>;

type Story = StoryObj<typeof meta>;

const SingleAchievement: Story = {
  args: {
    achievementInfo: [buildAchievement()],
  },
};

const MultipleAchievements: Story = {
  args: {
    achievementInfo: [
      buildAchievement(),
      buildAchievement(),
      buildAchievement(),
    ],
  },
};

const NoAchievements: Story = {
  args: {
    achievementInfo: [],
  },
};

export default meta;
export { MultipleAchievements, NoAchievements, SingleAchievement };
