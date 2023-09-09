import { Home } from "@mui/icons-material";
import { Button, Grid } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CvInfo } from "../../domain";
import { AchievementsSection } from "../../sections/achievementsSection/AchievementsSection";
import { EducationSection } from "../../sections/educationSection/EducationSection";
import { ExperienceSection } from "../../sections/experienceSection/ExperienceSection";
import { ProjectsSection } from "../../sections/projectsSection/ProjectsSection";
import { SkillsSection } from "../../sections/skillsSection/SkillsSection";

function CvPage() {
  const {
    experienceInfo,
    educationInfo,
    projectInfo,
    skillInfo,
    achievementsInfo,
  } = useLoaderData() as CvInfo;
  const navigate = useNavigate();

  return (
    <Grid container padding={5} spacing={2}>
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
      <Grid item xs={12} sm={6}>
        <ExperienceSection experienceInfo={experienceInfo} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <EducationSection educationInfo={educationInfo} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <ProjectsSection projectInfo={projectInfo} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <AchievementsSection achievementInfo={achievementsInfo} />
      </Grid>
      <Grid item xs={12}>
        <SkillsSection skillInfo={skillInfo} />
      </Grid>
    </Grid>
  );
}

export { CvPage };
