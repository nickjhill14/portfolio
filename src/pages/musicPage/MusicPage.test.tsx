import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { MusicPage } from "./MusicPage";

vitest.mock("react-router-dom");

describe(MusicPage, () => {
  it("renders the page", async () => {
    render(<MusicPage />);

    expect(
      screen.getByRole("heading", { name: "Music", level: 1 }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("🚧 Page under construction 🚧"),
    ).toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<MusicPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
