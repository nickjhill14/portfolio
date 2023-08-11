import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { Alert, Container } from "@mui/material";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { Section } from "../../components/section/Section";
import { ProjectInfo } from "../../domain";

type ProjectsPageProps = {
  projectInfo: ProjectInfo;
};

function ProjectsPage({ projectInfo }: ProjectsPageProps) {
  return (
    <Container>
      <IconTypography
        icon={TerminalOutlinedIcon}
        text="Projects"
        variant="h2"
      />
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
