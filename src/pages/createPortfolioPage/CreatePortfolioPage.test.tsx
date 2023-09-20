import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { CreatePortfolioPage } from "./CreatePortfolioPage";

vitest.mock("react-router-dom");

describe(CreatePortfolioPage, () => {
  it("renders the page", () => {
    render(<CreatePortfolioPage />);

    expect(
      screen.getByRole("heading", { name: "Create A Portfolio" }),
    ).toBeInTheDocument();
  });

  it("renders the steps with basic info active and others without", () => {
    render(<CreatePortfolioPage />);

    expect(screen.getByText("Create basic info")).toHaveClass("Mui-active");
    expect(screen.getByText("Create CV sections")).not.toHaveClass(
      "Mui-active",
    );
  });

  it("changes the steps to the CV sections when clicking next", async () => {
    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(screen.getByText("Create CV sections")).toHaveClass("Mui-active");
    expect(screen.getByText("Create basic info")).not.toHaveClass("Mui-active");
    expect(
      screen.queryByRole("button", { name: "Next" }),
    ).not.toBeInTheDocument();
  });

  it("renders the basic info by default", () => {
    render(<CreatePortfolioPage />);

    expect(
      screen.getByRole("heading", { name: "Create Basic Info" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Create CV Sections" }),
    ).not.toBeInTheDocument();
  });

  it("renders the CV section when clicking next", async () => {
    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("button", { name: "Next" }));

    expect(
      screen.getByRole("heading", { name: "Create CV Sections" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Create Basic Info" }),
    ).not.toBeInTheDocument();
  });

  it("navigates to the landing page when clicking home", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<CreatePortfolioPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
