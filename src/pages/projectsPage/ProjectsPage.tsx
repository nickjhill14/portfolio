import { Home } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Link,
  Typography,
  styled,
  useTheme,
} from "@mui/material";
import { motion, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/button/Button";

const ProjectInfo = styled(CardContent)({
  paddingLeft: "25px",
});

const ProjectActions = styled(CardActions)({
  paddingLeft: "25px",
});

function ProjectsPage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const theme = useTheme();

  return (
    <>
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "5px",
          background: theme.palette.primary.main,
          transformOrigin: "0%",
          scaleX: scrollYProgress,
        }}
      />
      <Grid container spacing={2} p={2} mb={2}>
        <Grid item xs={12}>
          <Button
            onClick={() => navigate("/")}
            role="link"
            startIcon={<Home />}
            text="Go Home"
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            Projects
          </Typography>
        </Grid>
        <Grid
          container
          spacing={2}
          p={2}
          mb={2}
          component={motion.div}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.25,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Card data-testid="portfolio">
              <ProjectInfo>
                <Typography variant="h5" component="h2">
                  Portfolio
                </Typography>
                <Typography variant="body1">
                  A portfolio web app incl. a tool to generate other portfolio
                  web apps
                </Typography>
              </ProjectInfo>
              <ProjectActions>
                <Link
                  href="https://github.com/nickjhill14/portfolio"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </Link>
              </ProjectActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card data-testid="react-app-template">
              <ProjectInfo>
                <Typography variant="h5" component="h2">
                  React App Template
                </Typography>
                <Typography variant="body1">
                  A template for generating React web apps
                </Typography>
              </ProjectInfo>
              <ProjectActions>
                <Link
                  href="https://github.com/nickjhill14/react-app-template"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </Link>
              </ProjectActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card data-testid="doctor-advice-fis">
              <ProjectInfo>
                <Typography variant="h5" component="h2">
                  Doctor Advice FIS
                </Typography>
                <Typography variant="body1">
                  A fuzzy inference system (FIS) for advising a doctor whether a
                  patient should be referred to a hospital for emergency
                  investigations
                </Typography>
              </ProjectInfo>
              <ProjectActions>
                <Link
                  href="https://github.com/nickjhill14/doctor-advice-fis"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </Link>
              </ProjectActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card data-testid="bench-press-sense">
              <ProjectInfo>
                <Typography variant="h5" component="h2">
                  Bench Press Sense
                </Typography>
                <Typography variant="body1">
                  An analytical tool for users to improve their current
                  bench-press form
                </Typography>
              </ProjectInfo>
              <ProjectActions>
                <Link
                  href="https://github.com/nickjhill14/bench-press-sense"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </Link>
              </ProjectActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card data-testid="football-formations">
              <ProjectInfo>
                <Typography variant="h5" component="h2">
                  Football Formations
                </Typography>
                <Typography variant="body1">
                  An accessibility demo with the analogy of football formations
                </Typography>
              </ProjectInfo>
              <ProjectActions>
                <Link
                  href="https://github.com/nickjhill14/football-formations"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit Repo
                </Link>
              </ProjectActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export { ProjectsPage };
