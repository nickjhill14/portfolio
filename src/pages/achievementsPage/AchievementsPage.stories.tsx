import MilitaryTechOutlinedIcon from "@mui/icons-material/MilitaryTechOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import type { Meta, StoryObj } from "@storybook/react";
import { buildAchievement } from "../../utils/builders";
import { AchievementsPage } from "./AchievementsPage";

const meta = {
  title: "Pages/AchievementsPage",
  component: AchievementsPage,
  tags: ["autodocs"],
} satisfies Meta<typeof AchievementsPage>;

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
