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
    AchievementInfo: [buildAchievement()],
  },
};

const MultipleAchievements: Story = {
  args: {
    AchievementInfo: [
      buildAchievement(),
      buildAchievement({ icon: MilitaryTechOutlinedIcon }),
      buildAchievement({ icon: WorkspacePremiumOutlinedIcon }),
    ],
  },
};

const NoAchievements: Story = {
  args: {
    AchievementInfo: [],
  },
};

export default meta;
export { SingleAchievement, MultipleAchievements, NoAchievements };
