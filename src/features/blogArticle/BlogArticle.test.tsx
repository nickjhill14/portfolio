import { render, screen } from "@testing-library/react";
import { format } from "date-fns";
import { buildBlog, buildBlogSection } from "@/utils/builders";
import { getProps, mockComponent } from "@/utils/ComponentMocks";
import { BlogArticle } from "./BlogArticle";
import { BlogContent } from "./BlogContent";

vi.mock("./BlogContent");

describe("BlogArticle", () => {
  beforeEach(() => {
    mockComponent(BlogContent);
    vi.clearAllMocks();
  });

  it("displays formatted date", () => {
    const date = new Date("2024-07-03T16:06:42.000Z");

    render(<BlogArticle blog={buildBlog({ date })} />);

    expect(screen.getByText(format(date, "dd/MM/yyyy"))).toBeInTheDocument();
  });

  it("displays estimated read time", () => {
    const readTime = 5;

    render(<BlogArticle blog={buildBlog({ readTime })} />);

    expect(
      screen.getByText(`Est. Read Time: ${readTime} mins`),
    ).toBeInTheDocument();
  });

  it("shows draft indicator when blog is in draft mode", () => {
    render(<BlogArticle blog={buildBlog({ isDraft: true })} />);

    expect(screen.getByText("🚧 Draft 🚧")).toBeInTheDocument();
  });

  it("does not show draft indicator when blog is not in draft mode", () => {
    render(<BlogArticle blog={buildBlog({ isDraft: false })} />);

    expect(screen.queryByText("🚧 Draft 🚧")).not.toBeInTheDocument();
  });

  it("renders empty article when no sections provided", () => {
    render(<BlogArticle blog={buildBlog({ sections: [] })} />);

    expect(screen.queryByText(BlogContent.name)).not.toBeInTheDocument();
  });

  it("renders single section with heading", () => {
    const heading = "Test Section";
    const section = buildBlogSection({ heading });

    render(<BlogArticle blog={buildBlog({ sections: [section] })} />);

    expect(screen.getByRole("heading", { name: heading })).toBeInTheDocument();
    expect(getProps(BlogContent).lastCall.blogSection).toStrictEqual(section);
  });

  it("renders multiple sections with headings", () => {
    const sections = [
      buildBlogSection({ heading: "First Section" }),
      buildBlogSection({ heading: "Second Section" }),
    ];

    render(<BlogArticle blog={buildBlog({ sections })} />);

    sections.forEach((section, index) => {
      expect(
        screen.getByRole("heading", { name: section.heading }),
      ).toBeInTheDocument();
      expect(getProps(BlogContent).calls[index].blogSection).toStrictEqual(
        section,
      );
    });
  });
});
