import { Grid, Skeleton, Stack, Typography } from "@mui/material";

export const LandingPageSkeleton = () => (
  <Grid container spacing={2} p={2} mb={2} data-testid="landing-page-skeleton">
    <Grid item xs={12}>
      <Typography variant="h2" component="h1">
        <Skeleton data-testid="name-skeleton" width={500} />
      </Typography>
    </Grid>
    <Grid item xs={12}>
      <Typography variant="h3" component="h2">
        <Skeleton data-testid="role-skeleton" width={750} />
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
  </Grid>
);
