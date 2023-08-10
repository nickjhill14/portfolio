import { Alert, Container, Typography } from "@mui/material";
import { EducationSection } from "../../components/educationSection/EducationSection";
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
        educationInfo.map((education) => (
          <EducationSection
            education={education}
            key={education.qualification}
          />
        ))
      )}
    </Container>
  );
}

export { EducationPage };
