import { Container, Typography } from "@mui/material";
import { ExperienceSection } from "../../components/experience/ExperienceSection";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <Container>
      <Typography variant="h2">Experience</Typography>
      {experienceInfo.map((experience) => (
        <ExperienceSection experience={experience} key={experience.name} />
      ))}
    </Container>
  );
}

export { ExperiencePage };
