import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { Alert } from "@mui/material";
import { Page } from "../../components/page/Page";
import { Section } from "../../components/section/Section";
import { ProjectInfo } from "../../domain";

type ProjectsPageProps = {
  projectInfo: ProjectInfo;
};

function ProjectsPage({ projectInfo }: ProjectsPageProps) {
  return (
    <Page headingIcon={TerminalOutlinedIcon} headingText="Projects">
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
    </Page>
  );
}

export { ProjectsPage };
