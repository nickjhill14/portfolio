import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Chip } from "@/components/chip/Chip";
import { Project } from "@/domain/projects";
import { siGithub } from "simple-icons";
import { skillKeyColours } from "@/domain/skills";
import { Link } from "@/components/Link";

type ProjectSectionProps = {
  project: Project;
};

export const ProjectsSection = ({ project }: ProjectSectionProps) => (
  <Card>
    <CardHeader>
      <CardTitle>
        <Typography.H2>{project.title}</Typography.H2>
      </CardTitle>
      <CardDescription>{project.description}</CardDescription>
    </CardHeader>
    <CardContent className="flex gap-2 flex-wrap">
      {project.skills.map((skill) => (
        <Chip
          key={skill.name}
          text={skill.name}
          className={skillKeyColours[skill.key]}
        />
      ))}
    </CardContent>
    <CardFooter className="flex justify-end">
      <Button asChild aria-label="Visit repo" size="icon">
        <Link href={project.githubLink} isExternal>
          <svg
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="currentColor"
            aria-label="GitHub"
          >
            <path d={siGithub.path} />
          </svg>
        </Link>
      </Button>
    </CardFooter>
  </Card>
);
