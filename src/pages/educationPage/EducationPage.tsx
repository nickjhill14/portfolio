import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert, Container } from "@mui/material";
import { IconText } from "../../components/iconText/IconText";
import { Section } from "../../components/section/Section";
import { EducationInfo } from "../../domain";

type EducationPageProps = {
  educationInfo: EducationInfo;
};

function EducationPage({ educationInfo }: EducationPageProps) {
  return (
    <Container>
      <IconText icon={SchoolOutlinedIcon} text="Education" />
      {educationInfo.length === 0 ? (
        <Alert severity="warning">No education sections provided</Alert>
      ) : (
        educationInfo.map(({ qualification, institution, dateRange }) => (
          <Section
            heading={qualification}
            location={institution}
            dateRange={dateRange}
            key={qualification}
          />
        ))
      )}
    </Container>
  );
}

export { EducationPage };
