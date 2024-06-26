import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { BlogSection } from "../../features/blogSection/BlogSection";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { mockComponent } from "../../utils/ComponentMocks";
import { BlogPage } from "./BlogPage";

vitest.mock("../../features/blogSection/BlogSection");
vitest.mock("react-router-dom");

describe(BlogPage, () => {
  beforeEach(() => {
    mockComponent(BlogSection);
  });

  it("renders the page", async () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeInTheDocument();
    expect(screen.getByText(BlogSection.name)).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
