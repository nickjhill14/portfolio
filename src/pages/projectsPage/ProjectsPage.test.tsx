import { render, screen } from "@testing-library/react";
import { projects } from "../../config/projects";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";
import { getProps, mockComponent } from "../../utils/ComponentMocks";
import { ProjectsPage } from "./ProjectsPage";

vitest.mock("../../features/projectSection/ProjectSection");

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
});
