import { Alert, Container, Typography } from "@mui/material";
import { Section } from "../../components/section/Section";
import { EducationInfo } from "../../domain";

type EducationPageProps = {
  educationInfo: EducationInfo;
};

function EducationPage({ educationInfo }: EducationPageProps) {
  return (
    <Container>
      <Typography variant="h2">Education</Typography>
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
