import { faker } from "@faker-js/faker";
import { Typography } from "@mui/material";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

type Story = StoryObj<typeof meta>;

const SingleChild: Story = {
  args: {
    headingText: upperCaseFirstChar(faker.company.buzzNoun()),
    children: (
      <Typography>{upperCaseFirstChar(faker.company.buzzNoun())}</Typography>
    ),
  },
};

const MultipleChildren: Story = {
  args: {
    headingText: upperCaseFirstChar(faker.company.buzzNoun()),
    children: [
      <Typography key="child-1">
        {upperCaseFirstChar(faker.company.buzzNoun())}
      </Typography>,
      <Typography key="child-2">
        {upperCaseFirstChar(faker.company.buzzNoun())}
      </Typography>,
    ],
  },
};

export default meta;
export { MultipleChildren, SingleChild };
