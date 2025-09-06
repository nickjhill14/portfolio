import { Page } from "@/components/page/Page";
import { Typography } from "@/components/ui/typography";
import { projects } from "@/config/projects";
import { ProjectsSection } from "@/features/projectSection/ProjectSection";

export const ProjectsPage = () => (
  <Page showHomeButton>
    <Typography.H1>Projects</Typography.H1>
    <div className="grid grid-flow-row md:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectsSection project={project} key={project.title} />
      ))}
    </div>
  </Page>
);
