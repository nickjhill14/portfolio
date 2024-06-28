import type { Meta, StoryObj } from "@storybook/react";
import { buildBlog } from "../../utils/builders";
import { BlogArticle } from "./BlogArticle";

const meta = {
  title: "Features/BlogArticle",
  component: BlogArticle,
} satisfies Meta<typeof BlogArticle>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    blog: buildBlog(),
  },
};

export default meta;
