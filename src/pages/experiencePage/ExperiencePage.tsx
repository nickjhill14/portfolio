import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Alert } from "@mui/material";
import { Page } from "../../components/page/Page";
import { Section } from "../../components/section/Section";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <Page headingIcon={WorkOutlineOutlinedIcon} headingText="Experience">
      {experienceInfo.length === 0 ? (
        <Alert severity="warning">No experience sections provided</Alert>
      ) : (
        experienceInfo.map(({ name, location, dateRange }) => (
          <Section
            heading={name}
            location={location}
            dateRange={dateRange}
            key={name}
          />
        ))
      )}
    </Page>
  );
}

export { ExperiencePage };
