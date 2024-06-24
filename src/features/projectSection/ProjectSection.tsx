import GitHubIcon from "@mui/icons-material/GitHub";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { CardBody, CardHeader } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import {
  Button,
  Card,
  CardFooter,
  Modal,
  ModalContent,
  useDisclosure,
} from "@nextui-org/react";
import { Chip } from "../../components/chip/Chip";
import { Project } from "../../domain/projects";
import { skillKeyColours } from "../../domain/skills";

type ProjectSectionProps = {
  project: Project;
};

// TODO: Add stories
export const ProjectsSection = ({
  project: { title, description, githubLink, Image, skills },
}: ProjectSectionProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Card>
      <CardHeader>
        <h2 className="text-2l text-secondary font-bold">{title}</h2>
      </CardHeader>
      <CardBody className="flex flex-col gap-2">
        <p>{description}</p>
        <div className="flex gap-2 flex-wrap">
          {skills.map(({ name, key }) => (
            <Chip key={name} text={name} className={skillKeyColours[key]} />
          ))}
        </div>
      </CardBody>
      <CardFooter className="flex gap-2">
        <Button
          as={Link}
          aria-label="Visit repo"
          href={githubLink}
          isExternal
          color="primary"
        >
          <GitHubIcon />
        </Button>
        {Image && (
          <>
            <Button aria-label="View image" color="primary" onPress={onOpen}>
              <VisibilityIcon />
            </Button>
            <Modal
              isOpen={isOpen}
              onOpenChange={onOpenChange}
              classNames={{
                closeButton: "bg-primary text-white hover:bg-primary-600",
              }}
            >
              <ModalContent className="flex items-center p-4 bg-primary">
                {<Image />}
              </ModalContent>
            </Modal>
          </>
        )}
      </CardFooter>
    </Card>
  );
};
