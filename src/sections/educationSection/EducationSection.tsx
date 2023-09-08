import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { EducationInfo } from "../../domain";

type EducationSectionProps = {
  educationInfo: EducationInfo;
};

function EducationSection({ educationInfo }: EducationSectionProps) {
  return (
    <Section headingIcon={SchoolOutlinedIcon} headingText="Education">
      {educationInfo.length === 0 ? (
        <Alert severity="warning">No education details provided</Alert>
      ) : (
        educationInfo.map(({ qualification, institution, dateRange }) => (
          <SectionDetails
            heading={qualification}
            location={institution}
            dateRange={dateRange}
            key={qualification}
          />
        ))
      )}
    </Section>
  );
}

export { EducationSection };