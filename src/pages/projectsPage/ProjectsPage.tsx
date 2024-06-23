import { Home } from "@mui/icons-material";
import { Card, CardActions, CardContent, Grid, styled } from "@mui/material";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components/page/Page";

const ProjectInfo = styled(CardContent)({
  paddingLeft: "25px",
});

const ProjectActions = styled(CardActions)({
  paddingLeft: "25px",
});

export const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <Button
        startContent={<Home />}
        onPress={() => navigate("/")}
        color="primary"
        className="self-start"
      >
        Go Home
      </Button>
      <h1 className="text-4xl">Projects</h1>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Card data-testid="portfolio">
            <ProjectInfo>
              <h3>Portfolio</h3>
              <p>
                A portfolio web app incl. a tool to generate other portfolio web
                apps
              </p>
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
              <h3>React App Template</h3>
              <p>A template for generating React web apps</p>
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
              <h3>Doctor Advice FIS</h3>
              <p>
                A fuzzy inference system (FIS) for advising a doctor whether a
                patient should be referred to a hospital for emergency
                investigations
              </p>
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
              <h3>Bench Press Sense</h3>
              <p>
                An analytical tool for users to improve their current
                bench-press form
              </p>
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
              <h3>Football Formations</h3>
              <p>
                An accessibility demo with the analogy of football formations
              </p>
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
    </Page>
  );
};
