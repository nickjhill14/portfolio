import { Alert, Container, Typography } from "@mui/material";
import { Section } from "../../components/section/Section";
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
        experienceInfo.map(({ name, location, dateRange }) => (
          <Section
            heading={name}
            location={location}
            dateRange={dateRange}
            key={name}
          />
        ))
      )}
    </Container>
  );
}

export { ExperiencePage };
