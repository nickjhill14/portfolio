import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
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
      buildAchievement({ icon: MilitaryTechOutlinedIcon }),
      buildAchievement({ icon: WorkspacePremiumOutlinedIcon }),
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
