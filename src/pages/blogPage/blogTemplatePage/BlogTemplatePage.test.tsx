import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../../routing/PortfolioRouting";
import { buildBlog } from "../../../utils/builders";
import { BlogTemplatePage } from "./BlogTemplatePage";

describe(BlogTemplatePage, () => {
  it("renders the page", async () => {
    const title = faker.hacker.noun();

    render(<BlogTemplatePage blog={buildBlog({ title })} />);

    expect(
      screen.getByRole("heading", { name: title, level: 1 }),
    ).toBeInTheDocument();
  });

  it("navigates to the blog page when clicking the back btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogTemplatePage blog={buildBlog()} />);
    await userEvent.click(screen.getByRole("button", { name: "Back" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BLOG);
  });
});
