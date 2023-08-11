import { Alert, Container, Typography } from "@mui/material";
import { Section } from "../../components/section/Section";
import { ProjectInfo } from "../../domain";

type ProjectsPageProps = {
  projectInfo: ProjectInfo;
};

function ProjectsPage({ projectInfo }: ProjectsPageProps) {
  return (
    <Container>
      <Typography variant="h2">Projects</Typography>
      {projectInfo.length === 0 ? (
        <Alert severity="warning">No project sections provided</Alert>
      ) : (
        projectInfo.map(({ name, institution, dateRange }) => (
          <Section
            heading={name}
            location={institution}
            dateRange={dateRange}
            key={name}
          />
        ))
      )}
    </Container>
  );
}

export { ProjectsPage };
