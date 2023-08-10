import { Alert, Container, Typography } from "@mui/material";
import { ExperienceSection } from "../../components/experienceSection/ExperienceSection";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <Container>
      <Typography variant="h2">Experience</Typography>
      {experienceInfo.length === 0 ? (
        <Alert severity="warning">No experience sections provided</Alert>
      ) : (
        experienceInfo.map((experience) => (
          <ExperienceSection experience={experience} key={experience.name} />
        ))
      )}
    </Container>
  );
}

export { ExperiencePage };
