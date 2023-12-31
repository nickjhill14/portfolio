import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildDateRange } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers/helpers";
import { SectionDetails } from "./SectionDetails";

const meta = {
  title: "Features/SectionDetails",
  component: SectionDetails,
} satisfies Meta<typeof SectionDetails>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    heading: upperCaseFirstChar(faker.company.buzzNoun()),
    location: faker.location.city(),
    dateRange: buildDateRange(),
  },
};

const WithSingleDetail: Story = {
  args: {
    ...Default.args,
    details: [faker.lorem.sentence(5)],
  },
};

const WithMultipleDetails: Story = {
  args: {
    ...Default.args,
    details: [faker.lorem.sentence(5), faker.lorem.sentence(5)],
  },
};

const WithDivider: Story = {
  args: {
    ...Default.args,
    divider: true,
  },
};

export default meta;
export { Default, WithDivider, WithMultipleDetails, WithSingleDetail };
