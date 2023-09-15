import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers/helpers";
import { SkillsSection } from "./SkillsSection";

const meta = {
  title: "Components/SkillsSection",
  component: SkillsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsSection>;

type Story = StoryObj<typeof meta>;

const SingleSkillAndLanguage: Story = {
  args: {
    skillsInfo: {
      skills: [{ name: upperCaseFirstChar(faker.hacker.ingverb()) }],
      languages: [
        { name: faker.location.country(), level: faker.number.int(5) },
      ],
    },
  },
};

const MultipleSkillsAndLanguages: Story = {
  args: {
    skillsInfo: {
      skills: [
        { name: upperCaseFirstChar(faker.hacker.ingverb()) },
        { name: upperCaseFirstChar(faker.hacker.ingverb()) },
      ],
      languages: [
        { name: faker.location.country(), level: faker.number.int(5) },
        { name: faker.location.country(), level: faker.number.int(5) },
      ],
    },
  },
};

const NoSkillsOrLanguages: Story = {
  args: {
    skillsInfo: { skills: [], languages: [] },
  },
};

export default meta;
export {
  MultipleSkillsAndLanguages,
  NoSkillsOrLanguages,
  SingleSkillAndLanguage,
};
