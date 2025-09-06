import { render, screen } from "@testing-library/react";
import { buildBlogSection } from "@/utils/builders";
import { getProps, mockComponent } from "@/utils/ComponentMocks";
import { BlogContent } from "./BlogContent";
import { CodeBlock } from "./CodeBlock";

vi.mock("./CodeBlock");

describe("BlogContent", () => {
  beforeEach(() => {
    mockComponent(CodeBlock);
    vi.clearAllMocks();
  });

  it("renders paragraph for string content", () => {
    const text = "This is a test paragraph";

    render(<BlogContent blogSection={buildBlogSection({ content: [text] })} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders multiple paragraphs for multiple string contents", () => {
    const texts = ["First paragraph", "Second paragraph"];

    render(<BlogContent blogSection={buildBlogSection({ content: texts })} />);

    texts.forEach((text) => {
      expect(screen.getByText(text)).toBeInTheDocument();
    });
  });

  it("renders unordered list for array of strings", () => {
    const listItems = ["Item 1", "Item 2", "Item 3"];

    render(
      <BlogContent blogSection={buildBlogSection({ content: [listItems] })} />,
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    listItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders list items with correct structure", () => {
    const listItems = ["First item", "Second item"];

    render(
      <BlogContent blogSection={buildBlogSection({ content: [listItems] })} />,
    );

    expect(screen.getByRole("list")).toBeInTheDocument();
    listItems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  it("renders image with correct src and alt", () => {
    const imgContent = { src: "/path/to/image.png", alt: "Test image" };

    render(
      <BlogContent blogSection={buildBlogSection({ content: [imgContent] })} />,
    );

    const image = screen.getByRole("img", { name: "Test image" });
    expect(image).toHaveAttribute("src", "/path/to/image.png");
    expect(image).toHaveAttribute("alt", "Test image");
  });

  it("renders CodeBlock component for code content", () => {
    const codeContent = { snippetPath: "/path/to/code-snippet.txt" };

    render(
      <BlogContent
        blogSection={buildBlogSection({ content: [codeContent] })}
      />,
    );

    expect(getProps(CodeBlock).lastCall.snippetPath).toBe(
      codeContent.snippetPath,
    );
  });

  it("renders multiple CodeBlock components for multiple code contents", () => {
    const codeContents = [
      { snippetPath: "/code1.txt" },
      { snippetPath: "/code2.txt" },
    ];

    render(
      <BlogContent blogSection={buildBlogSection({ content: codeContents })} />,
    );

    expect(screen.getAllByText(CodeBlock.name)).toHaveLength(
      codeContents.length,
    );
    codeContents.forEach((codeContent, index) => {
      expect(getProps(CodeBlock).calls[index].snippetPath).toBe(
        codeContent.snippetPath,
      );
    });
  });

  it("renders React element directly", () => {
    const contentText = "Custom React content";

    render(
      <BlogContent
        blogSection={buildBlogSection({
          content: [<div key="test-div">{contentText}</div>],
        })}
      />,
    );

    expect(screen.getByText(contentText)).toBeInTheDocument();
  });
});
