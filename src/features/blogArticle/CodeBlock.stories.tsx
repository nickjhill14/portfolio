import type { Meta, StoryObj } from "@storybook/react";
import MockComponentSnippet from "../../assets/reactTestingBlog/mock-component-snippet.txt";
import { CodeBlock } from "./CodeBlock";

const meta = {
  title: "Features/BlogArticle/CodeBlock",
  component: CodeBlock,
} satisfies Meta<typeof CodeBlock>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    snippetPath: MockComponentSnippet,
  },
};

export default meta;
