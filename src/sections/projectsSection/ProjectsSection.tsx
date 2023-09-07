import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { Alert } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { ProjectInfo } from "../../domain";

type ProjectsSectionProps = {
  projectInfo: ProjectInfo;
};

function ProjectsSection({ projectInfo }: ProjectsSectionProps) {
  return (
    <Section headingIcon={TerminalOutlinedIcon} headingText="Projects">
      {projectInfo.length === 0 ? (
        <Alert severity="warning">No project details provided</Alert>
      ) : (
        projectInfo.map(({ name, institution, dateRange }) => (
          <SectionDetails
            heading={name}
            location={institution}
            dateRange={dateRange}
            key={name}
          />
        ))
      )}
    </Section>
  );
}

export { ProjectsSection };
