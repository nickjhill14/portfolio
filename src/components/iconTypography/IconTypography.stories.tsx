import { faker } from "@faker-js/faker";
import { MenuBook } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers/helpers";
import { IconTypography } from "./IconTypography";

const meta = {
  title: "Components/IconTypography",
  component: IconTypography,
  tags: ["autodocs"],
} satisfies Meta<typeof IconTypography>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    icon: MenuBook,
    text: upperCaseFirstChar(faker.word.noun()),
    variant: "h1",
  },
};

export default meta;
export { Default };
