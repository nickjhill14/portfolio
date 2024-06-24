import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { projects } from "../../config/projects";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { ProjectsPage } from "./ProjectsPage";

vitest.mock("../../features/projectSection/ProjectSection");
vitest.mock("react-router-dom");

describe(ProjectsPage, () => {
  beforeEach(() => {
    mockComponent(ProjectsSection);
  });

  it("renders the page", async () => {
    render(<ProjectsPage />);

    expect(
      screen.getByRole("heading", { name: "Projects", level: 1 }),
    ).toBeInTheDocument();
    projects.forEach((project, index) => {
      expect(getProps(ProjectsSection).calls[index].project).toStrictEqual(
        project,
      );
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
