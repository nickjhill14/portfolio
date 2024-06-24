import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { ProjectsPage } from "./ProjectsPage";

vitest.mock("react-router-dom");

describe(ProjectsPage, () => {
  it("renders the page", async () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A portfolio web app incl. a tool to generate other portfolio web apps",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "React App Template" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A template for generating React web apps"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Doctor Advice FIS" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A fuzzy inference system (FIS) for advising a doctor whether a patient should be referred to a hospital for emergency investigations",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Bench Press Sense" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "An analytical tool for users to improve their current bench-press form",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Football Formations" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "An accessibility demo with the analogy of football formations",
      ),
    ).toBeInTheDocument();
  });

  it("renders the project link btns", async () => {
    render(<ProjectsPage />);
    const visitRepoLinks = screen.getAllByRole("button", {
      name: "Visit repo",
    });

    visitRepoLinks.forEach((link) => {
      expect([
        "https://github.com/nickjhill14/portfolio",
        "https://github.com/nickjhill14/react-app-template",
        "https://github.com/nickjhill14/doctor-advice-fis",
        "https://github.com/nickjhill14/bench-press-sense",
        "https://github.com/nickjhill14/football-formations",
      ]).includes(link.getAttribute("href"));
    });
  });

  it("renders the portfolio diagram on click", async () => {
    render(<ProjectsPage />);
    await userEvent.click(screen.getByRole("button", { name: "View diagram" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes portfolio diagram on click", async () => {
    render(<ProjectsPage />);
    await userEvent.click(screen.getByRole("button", { name: "View diagram" }));
    await userEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<ProjectsPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
