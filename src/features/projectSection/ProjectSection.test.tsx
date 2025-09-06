import { render, screen } from "@testing-library/react";
import { buildProject, buildSkill } from "@/utils/builders";
import { ProjectsSection } from "./ProjectSection";

describe("ProjectsSection", () => {
  it("renders the project title and description", () => {
    const project = buildProject({
      title: "Test Project",
      description: "A test project description",
    });

    render(<ProjectsSection project={project} />);

    expect(
      screen.getByRole("heading", { name: project.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(project.description)).toBeInTheDocument();
  });

  it("renders the GitHub link", () => {
    const project = buildProject({
      githubLink: "https://github.com/test/repo",
    });

    render(<ProjectsSection project={project} />);

    expect(screen.getByRole("link", { name: "Visit repo" })).toHaveAttribute(
      "href",
      project.githubLink,
    );
  });

  it("renders project skills as chips", () => {
    const skills = [
      buildSkill({ name: "TypeScript" }),
      buildSkill({ name: "React" }),
      buildSkill({ name: "Next.js" }),
    ];

    render(<ProjectsSection project={buildProject({ skills })} />);

    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
    });
  });
});
