import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { BlogTemplatePage } from "./BlogTemplatePage";
import { BlogArticle } from "@/features/blogArticle/BlogArticle";
import { buildBlog } from "@/utils/builders";
import { getProps, mockComponent } from "@/utils/ComponentMocks";
import { PortfolioRoutePaths } from "@/routing/routePaths";

vi.mock("react-router-dom", () => ({
  useNavigate: vi.fn(),
}));
vi.mock("@/features/blogArticle/BlogArticle");

describe("BlogTemplatePage", () => {
  const mockUseNavigation = vi.mocked(useNavigate);

  beforeEach(() => {
    mockComponent(BlogArticle);
  });

  it("displays blog title as main heading", () => {
    const title = "My Awesome Blog Post";

    render(<BlogTemplatePage blog={buildBlog({ title })} />);

    expect(screen.getByRole("heading", { name: title })).toBeInTheDocument();
  });

  it("navigates to blog page when back button is clicked", async () => {
    const mockNavigate = vi.fn();

    mockUseNavigation.mockReturnValue(mockNavigate);

    render(<BlogTemplatePage blog={buildBlog()} />);
    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(mockNavigate).toHaveBeenCalledWith(PortfolioRoutePaths.BLOG);
  });

  it("passes blog object to BlogArticle", () => {
    const blog = buildBlog();

    render(<BlogTemplatePage blog={blog} />);

    expect(getProps(BlogArticle).lastCall.blog).toStrictEqual(blog);
  });
});
