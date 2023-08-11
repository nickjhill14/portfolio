import { faker } from "@faker-js/faker";
import { MenuBook } from "@mui/icons-material";
import type { Meta, StoryObj } from "@storybook/react";
import { upperCaseFirstChar } from "../../utils/helpers";
import { IconText } from "./IconText";

const meta = {
  title: "Components/IconText",
  component: IconText,
  tags: ["autodocs"],
} satisfies Meta<typeof IconText>;

type Story = StoryObj<typeof meta>;

const Default: Story = {
  args: {
    icon: MenuBook,
    text: upperCaseFirstChar(faker.word.noun()),
  },
};

export default meta;
export { Default };
