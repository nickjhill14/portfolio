import { Home } from "@mui/icons-material";
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
import { useNavigate } from "react-router-dom";
import { ReactComponent as PortfolioDiagram } from "../../assets/portfolio-context-diagram.svg";
import { Page } from "../../components/page/Page";

export const ProjectsPage = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

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
        <Card>
          <CardHeader>
            <h2 className="text-2l text-secondary font-bold">Portfolio</h2>
          </CardHeader>
          <CardBody>
            <p>
              A portfolio web app incl. a tool to generate other portfolio web
              apps
            </p>
          </CardBody>
          <CardFooter className="flex gap-2">
            <Button
              as={Link}
              aria-label="Visit repo"
              href="https://github.com/nickjhill14/portfolio"
              isExternal
              color="primary"
            >
              <GitHubIcon />
            </Button>
            <Button aria-label="View diagram" color="primary" onPress={onOpen}>
              <VisibilityIcon />
            </Button>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent className="flex items-center p-4">
                <PortfolioDiagram />
              </ModalContent>
            </Modal>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2l text-secondary font-bold">
              React App Template
            </h2>
          </CardHeader>
          <CardBody>
            <p>A template for generating React web apps</p>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              aria-label="Visit repo"
              href="https://github.com/nickjhill14/react-app-template"
              isExternal
              color="primary"
            >
              <GitHubIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2l text-secondary font-bold">
              Doctor Advice FIS
            </h2>
          </CardHeader>
          <CardBody>
            <p>
              A fuzzy inference system (FIS) for advising a doctor whether a
              patient should be referred to a hospital for emergency
              investigations
            </p>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              aria-label="Visit repo"
              href="https://github.com/nickjhill14/doctor-advice-fis"
              isExternal
              color="primary"
            >
              <GitHubIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2l text-secondary font-bold">
              Bench Press Sense
            </h2>
          </CardHeader>
          <CardBody>
            <p>
              An analytical tool for users to improve their current bench-press
              form
            </p>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              aria-label="Visit repo"
              href="https://github.com/nickjhill14/bench-press-sense"
              isExternal
              color="primary"
            >
              <GitHubIcon />
            </Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <h2 className="text-2l text-secondary font-bold">
              Football Formations
            </h2>
          </CardHeader>
          <CardBody>
            <p>An accessibility demo with the analogy of football formations</p>
          </CardBody>
          <CardFooter>
            <Button
              as={Link}
              aria-label="Visit repo"
              href="https://github.com/nickjhill14/football-formations"
              isExternal
              color="primary"
            >
              <GitHubIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </Page>
  );
};
