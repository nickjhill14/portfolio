import { Home } from "@mui/icons-material";
import { Button, Container, Grid, styled } from "@mui/material";
import { useLoaderData, useNavigate } from "react-router-dom";
import { CvInfo } from "../../domain";
import { AchievementsSection } from "../../sections/achievementsSection/AchievementsSection";
import { EducationSection } from "../../sections/educationSection/EducationSection";
import { ExperienceSection } from "../../sections/experienceSection/ExperienceSection";
import { ProjectsSection } from "../../sections/projectsSection/ProjectsSection";
import { SkillsSection } from "../../sections/skillsSection/SkillsSection";

const CvPageContainer = styled(Container)({
  padding: "25px",
});

const GoHomeButton = styled(Button)({
  marginBottom: "25px;",
  alignSelf: "flex-start",
});

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
    <CvPageContainer>
      <GoHomeButton
        onClick={() => navigate("/")}
        role="link"
        startIcon={<Home />}
        variant="contained"
      >
        Go Home
      </GoHomeButton>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <ExperienceSection experienceInfo={experienceInfo} />
        </Grid>
        <Grid item xs={6}>
          <EducationSection educationInfo={educationInfo} />
        </Grid>
        <Grid item xs={6}>
          <ProjectsSection projectInfo={projectInfo} />
        </Grid>
        <Grid item xs={6}>
          <AchievementsSection achievementInfo={achievementsInfo} />
        </Grid>
        <Grid item xs={12}>
          <SkillsSection skillInfo={skillInfo} />
        </Grid>
      </Grid>
    </CvPageContainer>
  );
}

export { CvPage };
