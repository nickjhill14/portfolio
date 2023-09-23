import { render, screen, within } from "@testing-library/react";
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
  });

  it("renders the portfolio project", async () => {
    render(<ProjectsPage />);
    const visitRepoLink = within(screen.getByTestId("portfolio")).getByRole(
      "link",
      { name: "Visit Repo" },
    );

    expect(
      screen.getByRole("heading", { name: "Portfolio" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A portfolio web app incl. a tool to generate other portfolio web apps",
      ),
    ).toBeInTheDocument();
    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/portfolio",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the React app template project", async () => {
    render(<ProjectsPage />);
    const visitRepoLink = within(
      screen.getByTestId("react-app-template"),
    ).getByRole("link", { name: "Visit Repo" });

    expect(
      screen.getByRole("heading", { name: "React App Template" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("A template for generating React web apps"),
    ).toBeInTheDocument();
    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/react-app-template",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the doctor advice FIS project", async () => {
    render(<ProjectsPage />);
    const visitRepoLink = within(
      screen.getByTestId("doctor-advice-fis"),
    ).getByRole("link", { name: "Visit Repo" });

    expect(
      screen.getByRole("heading", { name: "Doctor Advice FIS" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "A fuzzy inference system (FIS) for advising a doctor whether a patient should be referred to a hospital for emergency investigations",
      ),
    ).toBeInTheDocument();
    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/doctor-advice-fis",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the bench press sense project", async () => {
    render(<ProjectsPage />);
    const visitRepoLink = within(
      screen.getByTestId("bench-press-sense"),
    ).getByRole("link", { name: "Visit Repo" });

    expect(
      screen.getByRole("heading", { name: "Bench Press Sense" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "An analytical tool for users to improve their current bench-press form",
      ),
    ).toBeInTheDocument();
    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/bench-press-sense",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noreferrer");
  });

  it("renders the football formations project", async () => {
    render(<ProjectsPage />);
    const visitRepoLink = within(
      screen.getByTestId("football-formations"),
    ).getByRole("link", { name: "Visit Repo" });

    expect(
      screen.getByRole("heading", { name: "Football Formations" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "An accessibility demo with the analogy of football formations",
      ),
    ).toBeInTheDocument();
    expect(visitRepoLink).toHaveAttribute(
      "href",
      "https://github.com/nickjhill14/football-formations",
    );
    expect(visitRepoLink).toHaveAttribute("target", "_blank");
    expect(visitRepoLink).toHaveAttribute("rel", "noreferrer");
  });

  it("navigates to the landing page when clicking the home link", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<ProjectsPage />);
    await userEvent.click(screen.getByRole("link", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });
});
