import { faker } from "@faker-js/faker";
import { render, screen } from "@testing-library/react";
import { ProjectInfo } from "../../domain";
import { buildProject } from "../../utils/builders";
import { ProjectsPage } from "./ProjectsPage";

describe(ProjectsPage, () => {
  it("renders the page", () => {
    render(<ProjectsPage projectInfo={[buildProject()]} />);

    expect(
      screen.getByRole("heading", { name: "Projects" }),
    ).toBeInTheDocument();
  });

  it("renders a message when there are no project sections", () => {
    render(<ProjectsPage projectInfo={[]} />);

    expect(
      screen.getByText("No project sections provided"),
    ).toBeInTheDocument();
  });

  it("renders multiple project sections", () => {
    const project1Name = faker.company.buzzNoun();
    const project2Name = faker.company.buzzNoun();
    const project1 = buildProject({ name: project1Name });
    const project2 = buildProject({ name: project2Name });
    const projectInfo: ProjectInfo = [project1, project2];

    render(<ProjectsPage projectInfo={projectInfo} />);

    expect(
      screen.getByRole("heading", { name: project1Name }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: project2Name }),
    ).toBeInTheDocument();
  });
});
