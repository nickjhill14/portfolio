import type { Meta, StoryObj } from "@storybook/react";
import { buildEducation } from "../../utils/builders";
import { EducationSection } from "./EducationSection";

const meta = {
  title: "Sections/EducationSection",
  component: EducationSection,
  tags: ["autodocs"],
} satisfies Meta<typeof EducationSection>;

type Story = StoryObj<typeof meta>;

const SingleEducation: Story = {
  args: {
    educationInfo: [buildEducation()],
  },
};

const MultipleEducation: Story = {
  args: {
    educationInfo: [buildEducation(), buildEducation(), buildEducation()],
  },
};

const NoEducation: Story = {
  args: {
    educationInfo: [],
  },
};

export default meta;
export { MultipleEducation, NoEducation, SingleEducation };
