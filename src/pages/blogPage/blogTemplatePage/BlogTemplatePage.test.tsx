import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../../routing/portfolioRouting/PortfolioRouting";
import { buildBlog } from "../../../utils/builders";
import { BlogTemplatePage } from "./BlogTemplatePage";

vitest.mock("react-router-dom");

describe(BlogTemplatePage, () => {
  it("renders the page", async () => {
    const title = faker.hacker.noun();

    render(<BlogTemplatePage blog={buildBlog({ title })} />);

    expect(
      screen.getByRole("heading", { name: title, level: 1 }),
    ).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogTemplatePage blog={buildBlog()} />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });

  it("navigates to the blog page when clicking the back btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogTemplatePage blog={buildBlog()} />);
    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BLOG);
  });
});
