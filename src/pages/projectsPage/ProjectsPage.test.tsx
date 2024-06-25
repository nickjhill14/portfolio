import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useNavigate } from "react-router-dom";
import { projects } from "../../config/projects";
import { SkillsKey } from "../../features/SkillsKey/SkillsKey";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";
import { PortfolioRoutePaths } from "../../routing/portfolioRouting/PortfolioRouting";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { ProjectsPage } from "./ProjectsPage";

vitest.mock("../../features/projectSection/ProjectSection");
vitest.mock("../../features/SkillsKey/SkillsKey");
vitest.mock("react-router-dom");

describe(ProjectsPage, () => {
  beforeEach(() => {
    mockComponent(ProjectsSection);
    mockComponent(SkillsKey);
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
    expect(screen.getByRole("button", { name: "View key" })).toBeDisabled();
    expect(screen.queryByText(SkillsKey.name)).not.toBeInTheDocument();
  });

  it("navigates to the landing page when clicking the home btn", async () => {
    const navigateMock = vitest.fn();

    vitest.mocked(useNavigate).mockReturnValue(navigateMock);

    render(<ProjectsPage />);
    await userEvent.click(screen.getByRole("button", { name: "Go Home" }));

    expect(navigateMock).toHaveBeenCalledWith(PortfolioRoutePaths.BASE);
  });

  it.todo("display key on question hover", async () => {
    render(<ProjectsPage />);
    await userEvent.hover(screen.getByRole("button", { name: "View key" }));

    expect(await screen.findByText(SkillsKey.name)).toBeInTheDocument();
  });
});
