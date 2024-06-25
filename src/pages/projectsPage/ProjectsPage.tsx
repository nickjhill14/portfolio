import { Home } from "@mui/icons-material";
import HelpIcon from "@mui/icons-material/Help";
import { Button, Tooltip } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { projects } from "../../config/projects";
import { SkillsKey } from "../../features/SkillsKey/SkillsKey";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="flex justify-between">
        <Button
          startContent={<Home />}
          onPress={() => navigate("/")}
          color="primary"
          className="self-start"
        >
          Go Home
        </Button>
        <Tooltip content={<SkillsKey />} showArrow placement="bottom-end">
          <Button
            isIconOnly
            disabled
            className="max-w-fit self-end"
            aria-label="View key"
          >
            <HelpIcon />
          </Button>
        </Tooltip>
      </div>
      <h1 className="text-4xl">Projects</h1>
      <div className="grid grid-flow-row md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectsSection key={project.title} project={project} />
        ))}
      </div>
    </Page>
  );
};
