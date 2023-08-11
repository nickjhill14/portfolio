import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildDateRange } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
import { Section } from "./Section";

const meta = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
} satisfies Meta<typeof Section>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    heading: upperCaseFirstChar(faker.company.buzzNoun()),
    location: faker.location.city(),
    dateRange: buildDateRange(),
  },
};

export default meta;
export { Default };
