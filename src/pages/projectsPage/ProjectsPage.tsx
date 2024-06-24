import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { projects } from "../../config/projects";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Button
        startContent={<Home />}
        onPress={() => navigate("/")}
        color="primary"
        className="self-start"
      >
        Go Home
      </Button>
      <h1 className="text-4xl">Projects</h1>
      <div className="grid grid-flow-row md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectsSection key={project.title} project={project} />
        ))}
      </div>
    </Page>
  );
};
