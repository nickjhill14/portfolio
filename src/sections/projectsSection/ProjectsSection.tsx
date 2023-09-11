import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import { Alert } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { ProjectInfo } from "../../domain/cvInfo";

type ProjectsSectionProps = {
  projectInfo: ProjectInfo;
};

function ProjectsSection({ projectInfo }: ProjectsSectionProps) {
  return (
    <Section headingIcon={TerminalOutlinedIcon} headingText="Projects">
      {projectInfo.length === 0 ? (
        <Alert severity="warning">No project details provided</Alert>
      ) : (
        projectInfo.map(({ name, institution, dateRange, details }, index) => (
          <SectionDetails
            heading={name}
            location={institution}
            dateRange={dateRange}
            details={details}
            divider={index < projectInfo.length - 1}
            key={name}
          />
        ))
      )}
    </Section>
  );
}

export { ProjectsSection };
