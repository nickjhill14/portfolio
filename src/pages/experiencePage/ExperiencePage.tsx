import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import { Alert, Container } from "@mui/material";
import { IconTypography } from "../../components/iconTypography/IconTypography";
import { Section } from "../../components/section/Section";
import { ExperienceInfo } from "../../domain";

type ExperiencePageProps = {
  experienceInfo: ExperienceInfo;
};

function ExperiencePage({ experienceInfo }: ExperiencePageProps) {
  return (
    <Container>
      <IconTypography
        icon={WorkOutlineOutlinedIcon}
        text="Experience"
        variant="h2"
      />
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
