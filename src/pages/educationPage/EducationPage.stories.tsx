import type { Meta, StoryObj } from "@storybook/react";
import { buildEducation } from "../../utils/builders";
import { EducationPage } from "./EducationPage";

const meta = {
  title: "EducationPage",
  component: EducationPage,
  tags: ["autodocs"],
} satisfies Meta<typeof EducationPage>;

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

const NoEducationProvided: Story = {
  args: {
    educationInfo: [],
  },
};

export default meta;
export { SingleEducation, MultipleEducation, NoEducationProvided };
