import { Grid, Skeleton, Stack } from "@mui/material";

export const LandingPageSkeleton = () => (
  <Grid container spacing={2} p={2} mb={2} data-testid="landing-page-skeleton">
    <Grid item xs={12}>
      <h2>
        <Skeleton data-testid="name-skeleton" width={500} />
      </h2>
    </Grid>
    <Grid item xs={12}>
      <h3>
        <Skeleton data-testid="role-skeleton" width={750} />
      </h3>
    </Grid>
    <Grid item xs={12}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        <Skeleton width={125} data-testid="email-skeleton" />
        <Skeleton width={125} data-testid="git-hub-skeleton" />
        <Skeleton width={125} data-testid="linked-in-skeleton" />
      </Stack>
    </Grid>
  </Grid>
);
