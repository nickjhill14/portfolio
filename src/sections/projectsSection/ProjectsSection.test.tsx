import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { ProjectInfo } from "../../domain";
import { buildProject } from "../../utils/builders";
import { ProjectsSection } from "./ProjectsSection";

describe(ProjectsSection, () => {
  it("renders the section", () => {
    render(<ProjectsSection projectInfo={[buildProject()]} />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no project details", () => {
    render(<ProjectsSection projectInfo={[]} />);

    expect(screen.getByText("No project details provided")).toBeInTheDocument();
  });

  it("renders multiple project details", () => {
    const project1Name = faker.company.buzzNoun();
    const project2Name = faker.company.buzzNoun();
    const project1 = buildProject({ name: project1Name });
    const project2 = buildProject({ name: project2Name });
    const projectInfo: ProjectInfo = [project1, project2];

    render(<ProjectsSection projectInfo={projectInfo} />);

    expect(
      screen.getByRole("heading", { name: project1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: project2Name }),
    ).toBeInTheDocument();
  });
});
