import type { Meta, StoryObj } from "@storybook/react";
import { buildEducation } from "../../utils/builders";
import { EducationSection } from "./EducationSection";

const meta = {
  title: "EducationSection",
  component: EducationSection,
  tags: ["autodocs"],
} satisfies Meta<typeof EducationSection>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    education: buildEducation(),
  },
};

export default meta;
export { Default };
