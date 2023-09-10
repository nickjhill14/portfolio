import { faker } from "@faker-js/faker";
import type { Meta, StoryObj } from "@storybook/react";
import { buildDateRange } from "../../utils/builders";
import { upperCaseFirstChar } from "../../utils/helpers";
import { EducationSection } from "./EducationSection";

const meta = {
  title: "Sections/EducationSection",
  component: EducationSection,
  tags: ["autodocs"],
} satisfies Meta<typeof EducationSection>;

type Story = StoryObj<typeof meta>;

const SingleEducation: Story = {
  args: {
    educationInfo: [
      {
        qualification: `Degree In ${upperCaseFirstChar(
          faker.company.buzzNoun(),
        )}`,
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
    ],
  },
};

const MultipleEducation: Story = {
  args: {
    educationInfo: [
      {
        qualification: `Degree In ${upperCaseFirstChar(
          faker.company.buzzNoun(),
        )}`,
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
      {
        qualification: `Degree In ${upperCaseFirstChar(
          faker.company.buzzNoun(),
        )}`,
        institution: `School Of ${faker.location.city()}`,
        dateRange: buildDateRange(),
      },
    ],
  },
};

const NoEducation: Story = {
  args: {
    educationInfo: [],
  },
};

export default meta;
export { MultipleEducation, NoEducation, SingleEducation };
