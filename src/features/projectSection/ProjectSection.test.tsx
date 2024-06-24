import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ReactComponent as PortfolioDiagram } from "../../assets/portfolio-context-diagram.svg";
import { buildProject, buildSkill } from "../../utils/builders";
import { ProjectsSection } from "./ProjectSection";

describe(ProjectsSection, () => {
  it("renders the section", () => {
    const project = buildProject();

    render(<ProjectsSection project={project} />);

    expect(
      screen.getByRole("heading", { name: project.title, level: 2 }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Visit repo" }),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "View image" }),
    ).not.toBeInTheDocument();
  });

  it("renders skills", () => {
    const skills = [buildSkill(), buildSkill()];

    render(<ProjectsSection project={buildProject({ skills })} />);

    skills.forEach(({ name }) => {
      expect(screen.getByText(name)).toBeInTheDocument();
    });
  });

  it("renders the image on view click", async () => {
    render(
      <ProjectsSection project={buildProject({ Image: PortfolioDiagram })} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "View image" }));

    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });

  it("closes image on close click", async () => {
    render(
      <ProjectsSection project={buildProject({ Image: PortfolioDiagram })} />,
    );
    await userEvent.click(screen.getByRole("button", { name: "View image" }));
    await userEvent.click(screen.getByRole("button", { name: "Close" }));

    await waitFor(() => {
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
  });
});
