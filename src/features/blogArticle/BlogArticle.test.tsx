import { render, screen, within } from "@testing-library/react";
import { buildBlog, buildBlogSection } from "../../utils/builders";
import { BlogArticle } from "./BlogArticle";

describe(BlogArticle, () => {
  it("renders the article (without sections)", () => {
    const blog = buildBlog();

    render(<BlogArticle blog={blog} />);

    expect(
      screen.getByRole("heading", {
        name: blog.title,
        level: 2,
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText(/This blog is still in draft mode/),
    ).not.toBeInTheDocument();
  });

  it("renders the article in draft mode", () => {
    render(<BlogArticle blog={buildBlog({ isDraft: true })} />);

    expect(
      screen.getByText(/This blog is still in draft mode/),
    ).toBeInTheDocument();
  });

  it("renders the article (with sections)", () => {
    const sections = [buildBlogSection(), buildBlogSection()];

    render(<BlogArticle blog={buildBlog({ sections })} />);

    sections.forEach(({ heading }) => {
      expect(
        screen.getByRole("heading", {
          name: heading,
          level: 3,
        }),
      ).toBeInTheDocument();
    });
  });

  it("renders the article and the section text content", () => {
    const text = "Some text";

    render(
      <BlogArticle
        blog={buildBlog({ sections: [buildBlogSection({ content: [text] })] })}
      />,
    );

    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it("renders the article and the section lis content", () => {
    const list = ["Item 1", "Item 2"];

    render(
      <BlogArticle
        blog={buildBlog({ sections: [buildBlogSection({ content: [list] })] })}
      />,
    );
    const listComponent = within(screen.getByRole("list"));

    list.forEach((item, index) => {
      expect(listComponent.getAllByRole("listitem")[index]).toHaveTextContent(
        item,
      );
    });
  });

  it("renders the article and the section img content", () => {
    const src = "path/to/img.png";
    const alt = "Some image";

    render(
      <BlogArticle
        blog={buildBlog({
          sections: [buildBlogSection({ content: [{ src, alt }] })],
        })}
      />,
    );

    expect(screen.getByRole("img", { name: alt })).toHaveAttribute("src", src);
  });
});
