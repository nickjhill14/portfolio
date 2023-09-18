import { Grid, Skeleton, Stack, Typography } from "@mui/material";
import { Footer } from "../../components/footer/Footer";
import { LandingPageLinks } from "../../components/landingPageLinks/LandingPageLinks";

function LandingPageSkeleton() {
  return (
    <>
      <Grid container spacing={2} p={2} marginBottom={2}>
        <Grid item xs={12}>
          <Typography variant="h2" component="h1">
            <Skeleton data-testid="name-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3" component="h2">
            <Skeleton data-testid="role-skeleton" />
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
            <Typography variant="body1">
              <Skeleton width={125} data-testid="email-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testid="git-hub-skeleton" />
            </Typography>
            <Typography variant="body1">
              <Skeleton width={125} data-testid="linked-in-skeleton" />
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <LandingPageLinks />
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

export { LandingPageSkeleton };
