import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { SkillType } from "../../domain/skills";
import { upperCaseFirstChar } from "../../utils/helpers/helpers";
import { SkillsSection } from "./SkillsSection";

const meta = {
  title: "Features/SkillsSection",
  component: SkillsSection,
} satisfies Meta<typeof SkillsSection>;

type Story = StoryObj<typeof meta>;

export const SingleSkillAndLanguage: Story = {
  args: {
    skillsInfo: {
      skills: [
        {
          key: SkillType.infra,
          name: upperCaseFirstChar(faker.hacker.ingverb()),
        },
      ],
      languages: [
        { name: faker.location.country(), level: faker.number.int(5) },
      ],
    },
  },
};

export const MultipleSkillsAndLanguages: Story = {
  args: {
    skillsInfo: {
      skills: [
        {
          key: SkillType.testing,
          name: upperCaseFirstChar(faker.hacker.ingverb()),
        },
        {
          key: SkillType.infra,
          name: upperCaseFirstChar(faker.hacker.ingverb()),
        },
      ],
      languages: [
        { name: faker.location.country(), level: faker.number.int(5) },
        { name: faker.location.country(), level: faker.number.int(5) },
      ],
    },
  },
};

export const NoSkillsOrLanguages: Story = {
  args: {
    skillsInfo: { skills: [], languages: [] },
  },
};

export default meta;
