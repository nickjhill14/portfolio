import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import { Alert } from "@mui/material";
import { Page } from "../../components/page/Page";
import { Section } from "../../components/section/Section";
import { EducationInfo } from "../../domain";

type EducationPageProps = {
  educationInfo: EducationInfo;
};

function EducationPage({ educationInfo }: EducationPageProps) {
  return (
    <Page headingIcon={SchoolOutlinedIcon} headingText="Education">
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
    </Page>
  );
}

export { EducationPage };
