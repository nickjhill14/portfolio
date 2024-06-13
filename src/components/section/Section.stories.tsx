import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers/helpers";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
} satisfies Meta<typeof Section>;

type Story = StoryObj<typeof meta>;

export const SingleChild: Story = {
  args: {
    headingText: upperCaseFirstChar(faker.company.buzzNoun()),
    children: <>{upperCaseFirstChar(faker.company.buzzNoun())}</>,
  },
};

export const MultipleChildren: Story = {
  args: {
    headingText: upperCaseFirstChar(faker.company.buzzNoun()),
    children: [
      <>{upperCaseFirstChar(faker.company.buzzNoun())}</>,
      <>{upperCaseFirstChar(faker.company.buzzNoun())}</>,
    ],
  },
};

export default meta;
