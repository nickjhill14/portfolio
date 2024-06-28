import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { reactTestingBlog } from "../../config/blog";
import { BlogArticle } from "../../features/blogArticle/BlogArticle";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { BlogPage } from "./BlogPage";

vitest.mock("../../features/blogArticle/BlogArticle");
vitest.mock("react-router-dom");

describe(BlogPage, () => {
  beforeEach(() => {
    mockComponent(BlogArticle);
  });

  it("renders the page", async () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeInTheDocument();
    expect(getProps(BlogArticle).lastCall.blog).toStrictEqual(reactTestingBlog);
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
