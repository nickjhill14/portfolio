import { Home } from "@mui/icons-material";
import { Button } from "@nextui-org/react";
import { Variants, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";
import { projects } from "../../config/projects";
import { ProjectsSection } from "../../features/projectSection/ProjectSection";

export const ProjectsPage = () => {
  const navigate = useNavigate();

  const containerAnimation: Variants = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };
  const sectionAnimation: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

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
      <motion.div
        variants={containerAnimation}
        initial="hidden"
        animate="visible"
        className="grid grid-flow-row md:grid-cols-2 gap-4"
      >
        {projects.map((project) => (
          <motion.div variants={sectionAnimation} key={project.title}>
            <ProjectsSection project={project} />
          </motion.div>
        ))}
      </motion.div>
    </Page>
  );
};
