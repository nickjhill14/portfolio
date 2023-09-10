import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers";
import { SkillsSection } from "./SkillsSection";

const meta = {
  title: "Sections/SkillsSection",
  component: SkillsSection,
  tags: ["autodocs"],
} satisfies Meta<typeof SkillsSection>;

type Story = StoryObj<typeof meta>;

const SingleSkillAndLanguage: Story = {
  args: {
    skillInfo: {
      skills: [{ name: upperCaseFirstChar(faker.hacker.ingverb()) }],
      languages: [
        { name: faker.location.country(), level: faker.number.int(5) },
      ],
    },
  },
};

const MultipleSkillsAndLanguages: Story = {
  args: {
    skillInfo: {
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
    skillInfo: { skills: [], languages: [] },
  },
};

export default meta;
export {
  MultipleSkillsAndLanguages,
  NoSkillsOrLanguages,
  SingleSkillAndLanguage,
};
