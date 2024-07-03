import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import {
  BlogRoutePaths,
  PortfolioRoutePaths,
} from "../../routing/portfolioRouting/PortfolioRouting";
import { BlogPage } from "./BlogPage";

vitest.mock("react-router-dom");

describe(BlogPage, () => {
  it("renders the page", async () => {
    render(<BlogPage />);

    expect(
      screen.getByRole("heading", { name: "Blog", level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Testing", level: 2 }),
    ).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });

  it("navigates to the react component testing blog page when clicking the btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<BlogPage />);
    await userEvent.click(
      screen.getByRole("button", { name: "React Component Testing" }),
    );

    expect(navigateMock).toHaveBeenCalledWith(
      `${PortfolioRoutePaths.BLOG}${BlogRoutePaths.REACT_COMPONENT_TESTING}`,
    );
  });
});
