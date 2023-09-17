import CreateIcon from "@mui/icons-material/Create";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Button, Grid, Skeleton, Stack, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../components/footer/Footer";

function LandingPageSkeleton() {
  const navigate = useNavigate();

  return (
    <>
      <Grid container spacing={2} p={2} marginBottom={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            <Skeleton data-testId="name-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            <Skeleton data-testId="role-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="email-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="git-hub-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testId="linked-in-skeleton" />
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Button
              onClick={() => navigate("/cv")}
              role="link"
              startIcon={<DescriptionIcon />}
              variant="contained"
            >
              View CV
            </Button>
            <Button
              onClick={() => navigate("/create")}
              role="link"
              startIcon={<CreateIcon />}
              variant="contained"
            >
              Create
            </Button>
            <Button
              component={Link}
              role="link"
              variant="contained"
              startIcon={<GitHubIcon />}
              to="https://github.com/nickjhill14/portfolio-generator"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Repo
            </Button>
          </Stack>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export { LandingPageSkeleton };
