import { Home } from "@mui/icons-material";
import { Alert, Button, Grid } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Section } from "../../components/section/Section";
import { SectionDetails } from "../../components/sectionDetails/SectionDetails";
import { SkillsSection } from "../../components/skillsSection/SkillsSection";
import { Cv } from "../../domain/cv";

function CvPage() {
  const { cvSections, skillsInfo } = useLoaderData() as Cv;
  const navigate = useNavigate();

  return (
    <Grid container spacing={2} p={2}>
      <Grid item xs={12}>
        <Button
          onClick={() => navigate("/")}
          role="link"
          startIcon={<Home />}
          variant="contained"
        >
          Go Home
        </Button>
      </Grid>
      {cvSections && cvSections.length > 0 ? (
        cvSections?.map((cvSection) => (
          <Grid item key={cvSection.title} xs={12} sm={6}>
            <Section headingText={cvSection.title}>
              {cvSection.items && cvSection.items.length > 0 ? (
                cvSection.items.map((item, index) => (
                  <SectionDetails
                    heading={item.name}
                    location={item.location}
                    dateRange={item.dateRange}
                    details={item.details}
                    divider={
                      cvSection.items && index < cvSection.items.length - 1
                    }
                    key={item.name}
                  />
                ))
              ) : (
                <Alert severity="warning">No items provided</Alert>
              )}
            </Section>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Alert severity="warning">No CV sections provided</Alert>
        </Grid>
      )}
      <Grid item xs={12}>
        <SkillsSection skillsInfo={skillsInfo} />
      </Grid>
    </Grid>
  );
}

export { CvPage };
