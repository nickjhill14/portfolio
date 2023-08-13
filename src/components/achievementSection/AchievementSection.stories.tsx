import { faker } from "@faker-js/faker";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers";
import { AchievementSection } from "./AchievementSection";

const meta = {
  title: "Components/AchievementSection",
  component: AchievementSection,
  tags: ["autodocs"],
} satisfies Meta<typeof AchievementSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    heading: `Certificate In ${upperCaseFirstChar(faker.company.buzzNoun())}`,
    icon: EmojiEventsOutlinedIcon,
    description: faker.lorem.sentence(5),
  },
};

export default meta;
export { Default };