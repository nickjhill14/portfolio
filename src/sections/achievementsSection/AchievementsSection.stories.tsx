import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildAchievement } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
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
      {
        name: `Certificate In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
        description: faker.lorem.sentence(5),
      },
      {
        name: `Certificate In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
        description: faker.lorem.sentence(5),
      },
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
