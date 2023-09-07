import { faker } from "@faker-js/faker";
import { AbcOutlined } from "@mui/icons-material";
import { Alert } from "@mui/material";
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
    headingIcon: AbcOutlined,
    children: <Alert severity="info">Child</Alert>,
  },
};

const MultipleChildren: Story = {
  args: {
    headingText: upperCaseFirstChar(faker.company.buzzNoun()),
    headingIcon: AbcOutlined,
    children: [
      <Alert severity="info" key="Child 1">
        {upperCaseFirstChar(faker.company.buzzNoun())}
      </Alert>,
      <Alert severity="warning" key="Child 2">
        {upperCaseFirstChar(faker.company.buzzNoun())}
      </Alert>,
    ],
  },
};

export default meta;
export { MultipleChildren, SingleChild };
