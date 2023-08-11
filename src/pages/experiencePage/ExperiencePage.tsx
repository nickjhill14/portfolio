import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Alert, Container } from "@mui/material";
import { IconText } from "../../components/iconText/IconText";
import { Section } from "../../components/section/Section";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <Container>
      <IconText icon={WorkOutlineOutlinedIcon} text="Experience" />
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
    </Container>
  );
}

export { ExperiencePage };
